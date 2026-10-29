'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

/** Pointer position in window pixels, tracked on window so the canvas can stay pointer-events:none. */
const pointer = { x: -9999, y: -9999, nx: 0, ny: 0 };

const PORTRAIT_SRC = '/assets/portrait-particles.webp';
const PORTRAIT_HEIGHT = 2.45;
const CAMERA_Z = 3.2;
const FOV = 45;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uCell;
  uniform float uMorph;
  uniform vec2 uPointer;
  attribute vec3 aTarget;
  attribute float aBright;
  attribute float aRand;
  varying float vAlpha;
  varying float vY;
  varying float vM;

  void main() {
    // Sphere state: two slow interfering waves ripple the shell outward.
    float wave = sin(position.y * 3.0 + uTime * 0.8) * 0.5 + sin(position.x * 4.0 - uTime * 0.6) * 0.5;
    vec3 sphere = position * (1.0 + wave * 0.06 + (aRand - 0.5) * 0.05);

    // Portrait state: a barely-there shimmer so the dots feel alive without blurring the likeness.
    vec3 target = aTarget;
    target.z += sin(uTime * 1.1 + aRand * 6.2831) * 0.006;

    // Staggered morph, with particles arcing outward mid-flight.
    float m = smoothstep(aRand * 0.45, aRand * 0.45 + 0.55, uMorph);
    vec3 p = mix(sphere, target, m);
    p += normalize(position) * sin(m * 3.14159) * 0.4 * aRand;

    // Dots part around the cursor once the portrait has formed.
    vec2 d = p.xy - uPointer;
    float push = smoothstep(0.35, 0.0, length(d)) * m;
    p.xy += normalize(d + 1e-4) * push * 0.14;
    p.z += push * 0.3;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    // Halftone: in the portrait each dot's diameter tracks brightness (area ~ brightness), sized to its grid cell.
    float sphereSize = uSize * (0.5 + aRand);
    float dotSize = uCell * 1.15 * sqrt(aBright);
    gl_PointSize = mix(sphereSize, dotSize, m) / -mv.z;

    // Sphere: points facing the camera are bright, the far side fades.
    float facing = normalize((modelViewMatrix * vec4(position, 0.0)).xyz).z;
    float sphereAlpha = 0.12 + 0.88 * smoothstep(-0.6, 1.0, facing);
    vAlpha = mix(sphereAlpha, step(0.001, aBright), m);
    vY = mix(position.y, target.y / (${PORTRAIT_HEIGHT.toFixed(2)} * 0.5), m);
    vM = m;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uC1;
  uniform vec3 uC2;
  uniform vec3 uC3;
  varying float vAlpha;
  varying float vY;
  varying float vM;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    // Soft glow while a sphere, crisp dots once it is a halftone portrait.
    float a = smoothstep(0.5, mix(0.05, 0.38, vM), d);

    // Mostly white, with a faint top-to-bottom gradient tint.
    float t = clamp(vY * 0.5 + 0.5, 0.0, 1.0);
    vec3 grad = mix(mix(uC3, uC1, smoothstep(0.0, 0.5, t)), uC2, smoothstep(0.5, 1.0, t));
    gl_FragColor = vec4(mix(vec3(1.0), grad, mix(0.45, 0.22, vM)), a * vAlpha * 0.9);
  }
`;

/**
 * Turns the cut-out portrait into a halftone: the image is downscaled so each pixel becomes one grid cell
 * (the browser averages the pixels in each cell), and every opaque cell becomes a dot whose size follows
 * its brightness. Cells are hex-packed and given a gentle cylindrical bulge so the head has volume.
 */
async function samplePortrait(maxDots: number) {
  const img = new Image();
  img.src = PORTRAIT_SRC;
  await img.decode();

  // Crop off the lower torso so the head reads larger.
  const srcW = img.width;
  const srcH = Math.round(img.height * 0.8);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;

  // Pass 1: measure how much of the frame is the subject, to pick a cell size that fits the dot budget.
  canvas.width = srcW;
  canvas.height = srcH;
  ctx.drawImage(img, 0, 0);
  const full = ctx.getImageData(0, 0, srcW, srcH).data;
  let opaque = 0;
  for (let i = 3; i < full.length; i += 4) if (full[i] > 140) opaque++;
  const step = Math.max(1, Math.sqrt(opaque / maxDots) * 1.03);

  // Pass 2: downscale so one pixel = one cell.
  const cols = Math.floor(srcW / step);
  const rows = Math.floor(srcH / step);
  canvas.width = cols;
  canvas.height = rows;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, srcW, srcH, 0, 0, cols, rows);
  const data = ctx.getImageData(0, 0, cols, rows).data;

  const cell = PORTRAIT_HEIGHT / rows;
  const halfW = (cols * cell) / 2;
  const targets = new Float32Array(maxDots * 3);
  const bright = new Float32Array(maxDots);

  let n = 0;
  for (let r = 0; r < rows && n < maxDots; r++) {
    for (let c = 0; c < cols && n < maxDots; c++) {
      const o = (r * cols + c) * 4;
      if (data[o + 3] < 140) continue;
      const lum = (0.2126 * data[o] + 0.7152 * data[o + 1] + 0.0722 * data[o + 2]) / 255;
      // Stretched to the face's measured brightness range (~0.08–0.7) so brows, eyes, nose and jaw separate.
      const b = Math.min(Math.max((lum - 0.07) / 0.6, 0), 1);

      const x = (c + 0.5 + (r % 2) * 0.5) * cell - halfW;
      const y = PORTRAIT_HEIGHT / 2 - (r + 0.5) * cell;
      const bulge = Math.sqrt(Math.max(0, 1 - (x / (halfW * 1.1)) ** 2)) * 0.25;
      targets.set([x, y, bulge + b * 0.08 - 0.15], n * 3);
      // A small floor keeps dark hair and clothing visible as fine dots; the bottom edge fades out.
      const fade = Math.min(1, (rows - r) / (rows * 0.22));
      bright[n] = (0.06 + 0.94 * Math.pow(b, 1.1)) * fade;
      n++;
    }
  }

  // Leftover particles (if the grid came in under budget) join a real dot invisibly.
  for (let i = n; i < maxDots; i++) targets.set(targets.subarray(((i % n) * 3), (i % n) * 3 + 3), i * 3);

  return { targets, bright, cell };
}

function ParticlePortrait({ count, active }: { count: number; active: boolean }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const cell = useRef(0);
  const gl = useThree((s) => s.gl);

  const geometry = useMemo(() => {
    // Fibonacci sphere: evenly spaced points with no clumping at the poles.
    const positions = new Float32Array(count * 3);
    const rand = new Float32Array(count);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      positions.set([Math.cos(theta) * r, y, Math.sin(theta) * r], i * 3);
      // Deterministic hash instead of Math.random, so the geometry is identical on every render.
      const h = Math.sin(i * 12.9898) * 43758.5453;
      rand[i] = h - Math.floor(h);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // Until the portrait is sampled the targets sit on the sphere.
    g.setAttribute('aTarget', new THREE.BufferAttribute(positions.slice(), 3));
    g.setAttribute('aBright', new THREE.BufferAttribute(new Float32Array(count).fill(1), 1));
    g.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
    return g;
  }, [count]);

  useEffect(() => {
    let cancelled = false;
    samplePortrait(count).then(({ targets, bright, cell: c }) => {
      const g = points.current?.geometry;
      if (cancelled || !g) return;
      (g.attributes.aTarget as THREE.BufferAttribute).copyArray(targets).needsUpdate = true;
      (g.attributes.aBright as THREE.BufferAttribute).copyArray(bright).needsUpdate = true;
      cell.current = c;
    });
    return () => {
      cancelled = true;
    };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 6 },
      uCell: { value: 0 },
      uMorph: { value: 0 },
      uPointer: { value: new THREE.Vector2(99, 99) },
      uC1: { value: new THREE.Color('#8b5cf6') },
      uC2: { value: new THREE.Color('#38bdf8') },
      uC3: { value: new THREE.Color('#ec4899') },
    }),
    []
  );

  useFrame((state, delta) => {
    const m = material.current;
    if (!m) return;
    const { dpr } = state.viewport;
    const halfH = Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * CAMERA_Z;
    m.uniforms.uTime.value += delta;
    m.uniforms.uSize.value = 4.2 * dpr;
    // One grid cell in device pixels at distance 1 (the shader divides by depth).
    m.uniforms.uCell.value = (cell.current * state.size.height * dpr) / (2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)));
    if (active && cell.current) m.uniforms.uMorph.value = Math.min(m.uniforms.uMorph.value + delta / 2.6, 1);

    // Project the window pointer onto the z=0 plane in the portrait's local space.
    const rect = gl.domElement.getBoundingClientRect();
    const ndcX = ((pointer.x - rect.left) / rect.width) * 2 - 1;
    const ndcY = -(((pointer.y - rect.top) / rect.height) * 2 - 1);
    const parentX = points.current?.parent?.position.x ?? 0;
    m.uniforms.uPointer.value.set(ndcX * halfH * state.viewport.aspect - parentX, ndcY * halfH);
  });

  return (
    <points ref={points} geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    // A slow idle sway plus an eased turn toward the pointer: enough to reveal depth without turning the face away.
    const t = state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t * 0.35) * 0.12 + pointer.nx * 0.22, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.ny * 0.1, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.nx * 0.05, 0.05);
  });
  return <group ref={group}>{children}</group>;
}

export default function OrbitScene({ active = true }: { active?: boolean }) {
  const [visible, setVisible] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null);
  // Client-only component (loaded with ssr: false), so the browser can be probed during the first render.
  const [lowPower] = useState(() => window.matchMedia('(max-width: 768px)').matches || navigator.hardwareConcurrency <= 4);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.nx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ny = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    // Stop rendering once the hero scrolls out of view to save GPU/battery.
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (wrapper.current) io.observe(wrapper.current);
    return () => {
      window.removeEventListener('pointermove', onMove);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapper} className="h-full w-full">
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, lowPower ? 1.25 : 1.5]}
        camera={{ position: [0, 0, CAMERA_Z], fov: FOV }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <Rig>
          <ParticlePortrait count={lowPower ? 22000 : 40000} active={active} />
        </Rig>
      </Canvas>
    </div>
  );
}
