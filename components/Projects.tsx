'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, GraduationCap } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
    github: 'https://github.com/nimeshakalanka',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    tech: ['React', 'Firebase', 'Node.js', 'Express'],
    github: 'https://github.com/nimeshakalanka',
    live: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio built with Next.js and Framer Motion',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/nimeshakalanka',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 flex items-center gap-3 justify-center md:justify-start">
            <GraduationCap className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 md:px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs md:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 md:gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1.5 md:gap-2 text-sm md:text-base text-gray-400 hover:text-blue-400 transition">
                    <Github size={16} className="md:w-[18px] md:h-[18px]" />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1.5 md:gap-2 text-sm md:text-base text-gray-400 hover:text-blue-400 transition">
                    <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                    Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
