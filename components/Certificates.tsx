'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';

const certificates = [
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '13 July 2023',
    image: '/assets/certificates/uom-python.png',
    link: '#'
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: '1 November 2024',
    image: '/assets/certificates/postman.png',
    link: 'https://badgr.com/public/assertions/ecdQjKfwRPGfPK-Inick5Q'
  },
  {
    title: 'Hacktoberfest 2025: Supercontributor',
    issuer: 'DigitalOcean - Hacktoberfest',
    date: '31 October 2025',
    image: '/assets/certificates/hacktomber.png',
    link: 'https://holopin.io/hacktoberfest2025/userbadge/cmhkbnty001g804g7n6c7es'
  },
  {
    title: 'Artificial Intelligence Essentials',
    issuer: 'Coursera - University of Pennsylvania',
    date: '26 November 2025',
    image: '/assets/certificates/ai.png',
    link: 'https://coursera.org/verify/8EYU2R252XTC'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certificates & Achievements
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-400/70 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-400/30"
            >
              {/* Certificate Image Background */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
                <Image 
                  src={cert.image} 
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Verified Badge */}
                <div className="absolute top-3 right-3 z-20 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-white" />
                  <span className="text-xs font-semibold text-white">Verified</span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="relative p-5 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm">
                <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-blue-400 font-medium mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
