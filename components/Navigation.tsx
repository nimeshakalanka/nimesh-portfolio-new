'use client';

import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const links = [
  { id: 'main', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education-experience', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('main');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Highlight the link of whichever section crosses the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent2 via-accent to-accent3" />

      <motion.nav
        initial={{ y: -80, x: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ x: "-50%" }}
        className={`fixed left-1/2 z-50 w-[94%] max-w-6xl rounded-full transition-all duration-500 ${
          scrolled ? 'glass-blur glass-edge top-3 border border-[var(--line)]' : 'top-5 border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between py-2 pl-5 pr-2">
          <a href="#main" aria-label="Home">
            <Image src="/assets/nav-logo.png" alt="Nimesh Akalanka" width={120} height={40} className="w-24 object-contain grayscale brightness-[1.8] sm:w-28" />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden !px-5 !py-2 text-sm lg:inline-flex">
              Let&apos;s talk
            </a>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="glass-pill grid h-10 w-10 place-items-center rounded-full md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-50%", y: -16, scale: 0.97 }}
            animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
            exit={{ opacity: 0, x: "-50%", y: -16, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="glass-blur glass-edge fixed left-1/2 top-20 border border-[var(--line)] z-40 w-[90%] max-w-md rounded-3xl md:hidden"
          >
            <div className="flex flex-col p-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-2xl px-4 py-3 font-display text-lg transition ${
                    active === link.id ? 'bg-white/10 text-fg' : 'text-muted'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
