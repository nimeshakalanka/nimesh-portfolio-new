'use client';

import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, MapPin, type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

type Entry = { title: string; org: string; period: string; location?: string; description?: string; current?: boolean };

const education: Entry[] = [
  {
    title: 'B.Sc.(Hons) in Information Systems',
    org: 'Sabaragamuwa University of Sri Lanka',
    period: '2024 - Present',
    location: 'Belihul Oya, Sri Lanka',
    current: true,
  },
  {
    title: 'Secondary & Advanced Level Education',
    org: 'ST.Thomas Boys College',
    period: '2014 - 2022',
    location: 'Matara, Sri Lanka',
  },
  {
    title: 'Primary Education',
    org: 'MR/Siddartha Boys College',
    period: '2009 - 2014',
    location: 'Weligama, Sri Lanka',
  },
];

const experience: Entry[] = [
  {
    title: 'Freelancing Chatbot Developer',
    org: 'Fiverr',
    period: 'August 2021 - Present',
    description: 'Building Telegram bots and automation for clients.',
    current: true,
  },
  {
    title: 'Freelancing Website Developer',
    org: 'UpWork',
    period: '2023 - Present',
    description: 'Building responsive, modern web applications end to end.',
    current: true,
  },
];

function Timeline({ heading, Icon, items, from }: { heading: string; Icon: LucideIcon; items: Entry[]; from: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold">
        <span className="glass grid h-11 w-11 place-items-center rounded-2xl text-fg">
          <Icon className="h-5 w-5" />
        </span>
        {heading}
      </h3>

      <ol className="relative space-y-5 pl-8">
        {/* Glowing rail */}
        <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-[2px] rounded-full bg-gradient-to-b from-accent2 via-accent to-transparent opacity-60" />

        {items.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
            className="relative"
          >
            <span aria-hidden className="absolute -left-8 top-6 grid h-4 w-4 place-items-center">
              {item.current && <span className="absolute h-4 w-4 animate-ping rounded-full bg-white/40" />}
              <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
            </span>

            <div className="glass glass-edge rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="chip gap-1.5">
                  <Calendar className="h-3 w-3" /> {item.period}
                </span>
                {item.current && <span className="chip border-white/20 text-fg">Current</span>}
              </div>
              <h4 className="font-display text-lg font-semibold leading-snug">{item.title}</h4>
              <p className="mt-1 text-sm font-medium text-muted">{item.org}</p>
              {item.location && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5" /> {item.location}
                </p>
              )}
              {item.description && <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>}
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}

export default function EducationExperience() {
  return (
    <section id="education-experience" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" eyebrow="Journey" title="Education &" highlight="experience" />
        <div className="grid gap-14 md:grid-cols-2 md:gap-12">
          <Timeline heading="Education" Icon={GraduationCap} items={education} from={-30} />
          <Timeline heading="Experience" Icon={Briefcase} items={experience} from={30} />
        </div>
      </div>
    </section>
  );
}
