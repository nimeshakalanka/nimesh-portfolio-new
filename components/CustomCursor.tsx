'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const INTERACTIVE = 'a, button, input, textarea, select, label, [role="button"]';

/** Glass lens cursor: a dot that tracks instantly and a frosted ring that trails behind and grows over interactive elements. */
export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.body.classList.add('has-custom-cursor');

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    // Event delegation, so elements rendered after mount are picked up too.
    const onOver = (e: PointerEvent) => setHovering(!!(e.target as Element).closest?.(INTERACTIVE));
    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [x, y]);

  // Hidden on touch devices via CSS; the effect above also never attaches listeners there.
  return (
    <div aria-hidden className={`hidden transition-opacity duration-300 [@media(pointer:fine)]:block ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-fg"
        style={{ x, y, scale: hovering ? 0 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-white/50 mix-blend-difference transition-[width,height,margin,background-color] duration-300"
        style={{
          x: ringX,
          y: ringY,
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          marginLeft: hovering ? -28 : -16,
          marginTop: hovering ? -28 : -16,
          backgroundColor: hovering ? '#ffffff' : 'transparent',
        }}
      />
    </div>
  );
}
