'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Let's Connect</h2>
          <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 px-4 md:px-0">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <a href="mailto:nimeshakalanka@gmail.com"
             className="inline-block px-6 md:px-8 py-3 md:py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition text-sm md:text-base">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
