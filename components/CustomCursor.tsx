'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TrailDot {
  x: number;
  y: number;
  id: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    
    if (isMobile) return;

    let trailId = 0;
    let fadeTimer: NodeJS.Timeout;
    let lastMoveTime = Date.now();

    const updateMousePosition = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setMousePosition({ x: newX, y: newY });
      setIsMouseMoving(true);
      lastMoveTime = Date.now();
      
      // Add trail dot only when mouse is moving
      setTrail(prev => {
        const newTrail = [...prev, { x: newX, y: newY, id: trailId++ }];
        return newTrail.slice(-40); // Keep last 40 dots for smoother trail
      });

      // Clear existing fade timer
      clearTimeout(fadeTimer);

      // Set new fade timer - clear trail after 200ms of no movement
      fadeTimer = setTimeout(() => {
        setIsMouseMoving(false);
        // Gradually fade out trail
        const fadeInterval = setInterval(() => {
          setTrail(prev => {
            if (prev.length === 0) {
              clearInterval(fadeInterval);
              return prev;
            }
            return prev.slice(1); // Remove oldest dot
          });
        }, 30);
        
        // Clear all after fade
        setTimeout(() => {
          clearInterval(fadeInterval);
          setTrail([]);
        }, 800);
      }, 200);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(fadeTimer);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Trail particles - fluid ink effect */}
      {isMouseMoving && trail.length > 0 && trail.map((dot, index) => {
        const opacity = Math.pow((index + 1) / trail.length, 0.5);
        const scale = 0.15 + (index / trail.length) * 0.5;
        const colors = [
          'from-blue-500 via-cyan-400 to-blue-300',
          'from-purple-500 via-pink-400 to-purple-300',
          'from-indigo-500 via-blue-400 to-indigo-300',
          'from-violet-500 via-purple-400 to-violet-300'
        ];
        const colorIndex = Math.floor((index / trail.length) * colors.length);
        
        return (
          <motion.div
            key={dot.id}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: opacity * 0.7, 
              scale: scale,
              x: dot.x - 15,
              y: dot.y - 15,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors[colorIndex]} blur-xl opacity-60`} 
                 style={{ 
                   mixBlendMode: 'screen',
                   filter: 'blur(12px) saturate(1.8)'
                 }} 
            />
          </motion.div>
        );
      })}

      {mousePosition.x > 0 && mousePosition.y > 0 && (
        <>
          {/* Primary fluid blob - main large circle */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            animate={{
              x: mousePosition.x - 50,
              y: mousePosition.y - 50,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              mass: 0.6,
            }}
          >
            <div 
              className={`w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 transition-all duration-500 ${isHovering ? 'scale-125 opacity-50' : 'scale-100 opacity-35'}`}
              style={{ 
                filter: 'blur(25px) saturate(2)',
                mixBlendMode: 'screen'
              }}
            />
          </motion.div>

          {/* Secondary fluid blob - medium */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - 35,
              y: mousePosition.y - 35,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 32,
              mass: 0.8,
            }}
          >
            <div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 opacity-25"
              style={{ 
                filter: 'blur(20px) saturate(2)',
                mixBlendMode: 'screen'
              }}
            />
          </motion.div>

          {/* Tertiary fluid blob - small */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 28,
              mass: 0.5,
            }}
          >
            <div 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 via-purple-500 to-pink-500 opacity-30"
              style={{ 
                filter: 'blur(15px) saturate(1.8)',
                mixBlendMode: 'screen'
              }}
            />
          </motion.div>
        </>
      )}
    </>
  );
}
