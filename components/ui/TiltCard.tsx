'use client';

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { useRef, type ReactNode, type PointerEvent } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  intensity?: number;
  /** Colour of the spotlight that follows the pointer. */
  glow?: string;
};

/**
 * A glass panel that tilts toward the pointer in 3D, with a spotlight and a
 * specular sheen that track the cursor across the surface.
 */
export default function TiltCard({
  children,
  className = '',
  intensity = 10,
  glow = 'rgba(255, 255, 255, 0.06)',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), spring);

  const mx = useTransform(px, (v) => `${v * 100}%`);
  const my = useTransform(py, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx} ${my}, ${glow}, transparent 60%)`;
  const sheen = useMotionTemplate`linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.05) ${mx}, transparent 80%)`;

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`glass glass-edge group h-full overflow-hidden ${className}`}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: sheen }}
        />
        <div className="relative z-10 h-full" style={{ transform: 'translateZ(30px)' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
