'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-2 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ${
        scrolled 
          ? 'mt-4 glass-morphism rounded-2xl shadow-2xl' 
          : 'mt-6 glass-morphism-light rounded-2xl'
      }`}>
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Image 
              src="/assets/nav-logo.png" 
              alt="Logo" 
              width={120} 
              height={40}
              className="object-contain w-24 sm:w-32"
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            
            {/* Theme Toggle */}
            <button
            onClick={toggleTheme}
            className="relative w-7 h-7 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 group"
            aria-label="Toggle theme"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                : 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
              boxShadow: isDark
                ? '0 2px 6px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
                : '0 2px 6px rgba(59, 130, 246, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
            }}
          >
            {/* Stars background for dark mode */}
            {isDark && (
              <div className="absolute inset-0">
                <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full top-1.5 left-1.5 animate-pulse"></div>
                <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full top-2.5 right-1.5 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute w-[2px] h-[2px] bg-white rounded-full bottom-2 left-2.5 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full top-2 right-3 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
              </div>
            )}
            
            {/* Clouds for light mode */}
            {!isDark && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-1.5 h-1 bg-white/40 rounded-full top-0 left-0.5 blur-[0.5px]"></div>
                <div className="absolute w-2 h-1 bg-white/30 rounded-full top-1 right-0 blur-[0.5px]"></div>
                <div className="absolute w-1.5 h-1 bg-white/40 rounded-full bottom-1.5 left-1 blur-[0.5px]"></div>
              </div>
            )}
            
            {/* Sun/Moon Icon */}
            <div className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
              {isDark ? (
                <div className="relative w-3.5 h-3.5">
                  {/* Moon */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-md">
                    {/* Moon craters */}
                    <div className="absolute w-[3px] h-[3px] bg-gray-400/50 rounded-full top-0.5 right-0.5"></div>
                    <div className="absolute w-[2px] h-[2px] bg-gray-400/40 rounded-full bottom-0.5 right-1"></div>
                    <div className="absolute w-[1.5px] h-[1.5px] bg-gray-400/30 rounded-full top-1.5 right-0.5"></div>
                  </div>
                </div>
              ) : (
                <div className="relative w-3.5 h-3.5">
                  {/* Sun */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-md">
                    {/* Sun rays */}
                    <div className="absolute inset-0">
                      <div className="absolute w-[1px] h-1 bg-yellow-300 -top-1.5 left-1/2 -translate-x-1/2 rounded-full"></div>
                      <div className="absolute w-[1px] h-1 bg-yellow-300 -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full"></div>
                      <div className="absolute w-1 h-[1px] bg-yellow-300 -left-1.5 top-1/2 -translate-y-1/2 rounded-full"></div>
                      <div className="absolute w-1 h-[1px] bg-yellow-300 -right-1.5 top-1/2 -translate-y-1/2 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800/50 dark:hover:bg-gray-800/50 light:hover:bg-gray-200/50 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40 md:hidden glass-morphism rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="text-lg hover:text-blue-400 transition py-2 border-b border-gray-700/30"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={closeMobileMenu}
                className="text-lg hover:text-blue-400 transition py-2 border-b border-gray-700/30"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={closeMobileMenu}
                className="text-lg hover:text-blue-400 transition py-2 border-b border-gray-700/30"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="text-lg hover:text-blue-400 transition py-2 border-b border-gray-700/30"
              >
                Contact
              </a>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="pt-4 flex items-center justify-start">
                <button
                  onClick={toggleTheme}
                  className="relative w-8 h-8 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 group"
                  aria-label="Toggle theme"
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                      : 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                    boxShadow: isDark
                      ? '0 2px 6px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
                      : '0 2px 6px rgba(59, 130, 246, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {isDark && (
                    <div className="absolute inset-0">
                      <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full top-1.5 left-1.5 animate-pulse"></div>
                      <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full top-2.5 right-1.5 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      <div className="absolute w-[2px] h-[2px] bg-white rounded-full bottom-2 left-2.5 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                  )}
                  {!isDark && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute w-1.5 h-1 bg-white/40 rounded-full top-0 left-0.5 blur-[0.5px]"></div>
                      <div className="absolute w-2 h-1 bg-white/30 rounded-full top-1 right-0 blur-[0.5px]"></div>
                    </div>
                  )}
                  <div className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
                    {isDark ? (
                      <div className="relative w-3.5 h-3.5">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-md">
                          <div className="absolute w-[2px] h-[2px] bg-gray-400/50 rounded-full top-0.5 right-0.5"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-3.5 h-3.5">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-md"></div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
