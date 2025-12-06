'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const skills = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  backend: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Python'],
  database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  tools: ['Git', 'Docker', 'AWS', 'Postman', 'VS Code']
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 flex items-center gap-3 justify-center md:justify-start">
            <Briefcase className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 capitalize text-blue-400">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-sm md:text-base text-gray-400">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
