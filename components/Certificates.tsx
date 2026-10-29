'use client';

import { motion } from 'motion/react';
import { BadgeCheck, ArrowUpRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';

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
    <section id="certificates" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" eyebrow="Achievements" title="Certificates &" highlight="badges" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => {
            const hasLink = cert.link !== '#';
            return (
              <motion.a
                key={cert.title}
                href={hasLink ? cert.link : undefined}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                <TiltCard intensity={12} className="rounded-3xl p-3">
                  <div className="relative h-48 overflow-hidden rounded-2xl bg-white/5">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
                      <BadgeCheck className="h-3.5 w-3.5" /> Verified
                    </span>
                  </div>
                  <div className="px-2 pb-2 pt-4">
                    <h3 className="line-clamp-2 min-h-[2.75rem] font-display font-semibold leading-snug">{cert.title}</h3>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {cert.date}
                      </span>
                      {hasLink && (
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
