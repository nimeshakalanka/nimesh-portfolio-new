'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import EducationExperience from '@/components/EducationExperience';
import Certificates from '@/components/Certificates';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Background from '@/components/Background';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The page renders underneath the preloader so the 3D scene can compile its shaders meanwhile.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>{isLoading && <Preloader key="preloader" />}</AnimatePresence>
      <Background />
      <main className="relative min-h-screen text-fg">
        <Navigation />
        <Hero ready={!isLoading} />
        <Skills />
        <EducationExperience />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
