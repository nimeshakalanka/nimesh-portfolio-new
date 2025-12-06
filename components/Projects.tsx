'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'All Save Bot',
    description: 'A modern telegram bot who can download social media videos without watermark.',
    tech: ['Python', 'Mongo DB', 'TikTok API', 'Meta API'],
    image: '/assets/projects/allsave.png',
    github: 'https://github.com/nimeshakalanka',
    demo: 'https://t.me/AllSaveRobot'
  },
  {
    title: 'Lanka Travel Diaries',
    description: 'Travel guiding website for tourists made using React + JavaScript. Done as a teamwork.',
    tech: ['React', 'JavaScript', 'SASS', 'Tailwind'],
    image: '/assets/projects/ltd.png',
    github: 'https://github.com/nimeshakalanka/lanka-travel-diaries',
    demo: 'https://lanka-travel-diaries.vercel.app'
  },
  {
    title: 'TikTok Downloader API',
    description: 'An API can download TikTok Videos with or without watermark.',
    tech: ['JavaScript', 'Python', 'Cloudflare'],
    image: '/assets/projects/tiktok.png',
    github: 'https://github.com/nimeshakalanka/tiktok-api',
    demo: 'https://tiktok-dl.akalanka11.workers.dev'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-gray-800/30 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-900/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-gray-700/40 text-gray-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-3 pt-3 border-t border-gray-700/50">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
