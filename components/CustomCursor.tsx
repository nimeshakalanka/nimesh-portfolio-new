'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {mousePosition.x > 0 && mousePosition.y > 0 && (
        <>
          {/* Small dot - follows instantly */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            animate={{
              x: mousePosition.x - 3,
              y: mousePosition.y - 3,
            }}
            transition={{
              type: "tween",
              duration: 0,
            }}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full bg-white transition-transform duration-200 ${isHovering ? 'scale-0' : 'scale-100'}`}
            />
          </motion.div>

          {/* Outer ring - follows with slight lag */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - (isHovering ? 24 : 16),
              y: mousePosition.y - (isHovering ? 24 : 16),
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.5,
            }}
          >
            <div
              className={`rounded-full border transition-all duration-300 ${isHovering ? 'w-12 h-12 border-blue-400/60 bg-blue-400/10' : 'w-8 h-8 border-white/40'}`}
            />
          </motion.div>
        </>
      )}
    </>
  );
}
