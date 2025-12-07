'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc.(Hons) in Information Systems',
    institution: 'Sabaragamuwa University of Sri Lanka',
    period: '2024 - Present',
    location: 'Belihul Oya, Sri Lanka',
    description: '',
  },
  {
    degree: 'Secondary & Advanced Level Education',
    institution: 'ST.Thomas Boys College',
    period: '2014 - 2022',
    location: 'Matara, Sri Lanka',
    description: '',
  },
  {
    degree: 'Primary Education',
    institution: 'MR/Siddartha Boys College',
    period: '2009 - 2014',
    location: 'Weligama, Sri Lanka',
    description: '',
  },
];

const experience = [
  {
    role: 'Freelancing Chatbot Developer',
    company: 'Fiverr',
    period: 'August 2021 - Present',
    description: '',
  },
  {
    role: 'Freelancing Website Developer',
    company: 'UpWork',
    period: '2023 - Present',
    description: '',
  },
];

export default function EducationExperience() {
  return (
    <section id="education-experience" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-400 w-6 h-6" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 pb-4 border-l-2 border-gray-700/50 last:pb-0"
                >
                  <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-blue-400"></div>
                  <div className="bg-gray-800/30 light:bg-gray-100/80 p-3 rounded-lg border border-gray-700/30 light:border-gray-300 hover:border-blue-500/50 transition-all">
                    <h3 className="text-base md:text-lg font-semibold text-white light:text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-emerald-400 light:text-emerald-600 text-sm font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 light:text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-gray-300 light:text-gray-700 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-400 w-6 h-6" />
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 pb-4 border-l-2 border-gray-700/50 last:pb-0"
                >
                  <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-blue-400"></div>
                  <div className="bg-gray-800/30 light:bg-gray-100/80 p-3 rounded-lg border border-gray-700/30 light:border-gray-300 hover:border-blue-500/50 transition-all">
                    <h3 className="text-base md:text-lg font-semibold text-white light:text-gray-900 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-400 light:text-emerald-600 text-sm font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 light:text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 light:text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
