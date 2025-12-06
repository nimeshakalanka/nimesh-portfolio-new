'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-3 justify-center md:justify-start">
            <Code2 className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />
            About Me
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left">
            I'm a passionate Full Stack Developer with experience in building scalable web applications. 
            I love working with modern technologies and creating solutions that make a difference. 
            Currently focused on React, Next.js, and cloud technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
