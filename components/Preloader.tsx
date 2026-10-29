'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

/** Glass loading screen; the parent unmounts it inside <AnimatePresence> so it can fade/blur out. */
export default function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1500, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] grid place-items-center bg-bg"
    >
      <div aria-hidden className="absolute h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.35),transparent)]" />
      <div aria-hidden className="absolute ml-40 mt-32 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.25),transparent)]" />

      <div className="glass glass-edge relative flex flex-col items-center gap-5 rounded-[2rem] px-12 py-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          className="h-14 w-14 rounded-full bg-[conic-gradient(from_0deg,transparent,rgb(var(--accent-2)),rgb(var(--accent)),rgb(var(--accent-3)))] p-[3px]"
        >
          <div className="h-full w-full rounded-full bg-bg/90" />
        </motion.div>
        <p className="font-display text-sm uppercase tracking-[0.4em] text-muted">Nimesh Akalanka</p>
        <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-accent2 via-accent to-accent3" style={{ width: `${count}%` }} />
        </div>
        <p className="font-mono text-xs text-subtle">{count}%</p>
      </div>
    </motion.div>
  );
}
