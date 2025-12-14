'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, PlusCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'All Save Bot',
    description: 'A modern telegram bot who can download social media videos without watermark.',
    tech: ['Python', 'Mongo DB', 'TikTok API', 'Meta API'],
    image: '/assets/projects/allsave.png',
    github: 'https://github.com/nimeshakalanka/all_save',
    demo: 'https://t.me/AIL_Save_Bot'
  },
  {
    title: 'NextJS Portfolio',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/assets/projects/portfolio-neww.png',
    github: 'https://github.com/nimeshakalanka/nimesh-portfolio-new',
    demo: 'https://www.nimeshakalanka.dev'
  },
  {
    title: 'Hotel Billing System',
    description: 'A desktop application for managing hotel billing and reservations, built with JavaScript, Netlify and Neone database.',
    tech: ['JavaScript', 'Netlify', 'Neone DB'],
    image: '/assets/projects/hotel-bill.png',
    github: 'https://github.com/nimeshakalanka/my-bill',
    demo: 'https://summit-bill.netlify.app/'
  },
  {
    title: 'Flask Project',
    description: 'A website built with Flask framework when user in website capture image from webcam and save it to the server.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'Mongo DB'],
    image: '/assets/projects/flask.png',
    github: 'https://github.com/nimeshakalanka/flaskProject',
    demo: 'https://92b2884c-70c2-40cc-a5c8-31983980bfb7-00-3qspg3y618yek.janeway.replit.dev:3001/'
  },
  {
    title: 'Priya Dream Kitchen Website',
    description: 'A website for our family business made using HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/projects/priya-dream-kitchen.png',
    github: 'https://github.com/nimeshakalanka/Priya-Dream-Kitchen.github.io',
    demo: 'https://priyadreamkitchen.app'
  },
  {
    title: 'Lanka Travel Diaries',
    description: 'Travel guiding website for tourists made using React + JavaScript. Done as a teamwork.',
    tech: ['React', 'JavaScript', 'SASS', 'Tailwind'],
    image: '/assets/projects/ltd.png',
    github: 'https://github.com/nimeshakalanka/lanka-travel-diaries',
    demo: 'https://nimeshakalanka.github.io/Lanka-Travel-Diaries'
  },
  {
    title: 'TikTok Downloader API',
    description: 'An API can download TikTok Videos with or without watermark.',
    tech: ['JavaScript', 'Python', 'Cloudflare'],
    image: '/assets/projects/tiktok.png',
    github: 'https://github.com/nimeshakalanka/tiktok-api',
    demo: 'https://tiktok-dl.akalanka11.workers.dev'
  },
  {
    title: 'React Portfolio',
    description: 'A modern portfolio website built with React and Vite to showcase my projects and skills.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: '/assets/projects/portfolio-react.png',
    github: 'https://github.com/nimeshakalanka/portfolio',
    demo: 'https://nimeshakalanka.github.io/portfolio'
  },
  
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
                    Live
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

          {/* More Projects Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: projects.length * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border-2 border-dashed border-blue-400/30 overflow-hidden hover:border-blue-400/60 transition-all duration-300 shadow-lg hover:shadow-blue-400/20 flex flex-col items-center justify-center min-h-[400px] relative group"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating sparkles */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 text-blue-400/30"
            >
              <Sparkles size={24} />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [360, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-10 text-purple-400/30"
            >
              <Sparkles size={20} />
            </motion.div>

            {/* Main content */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <PlusCircle className="w-20 h-20 text-blue-400 mb-6" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-3 text-white relative z-10">More Projects Coming Soon</h3>
            <p className="text-sm text-gray-400 text-center px-6 mb-4 relative z-10">
              I'm constantly working on exciting new projects. Stay tuned for more!
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center px-6 relative z-10">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium">
                AI/ML
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-medium">
                Web3
              </span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-md text-xs font-medium">
                Mobile Apps
              </span>
            </div>

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%)',
                   backgroundSize: '200% 200%',
                   animation: 'shimmer 3s infinite'
                 }}>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
