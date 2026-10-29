'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Code2, Database, Layout, Cloud, Server, type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';

type Skill = { name: string; icon: string; invert?: boolean };

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const skillCategories: { title: string; Icon: LucideIcon; span: string; glow: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    Icon: Code2,
    span: 'lg:col-span-3',
    glow: 'rgb(var(--accent) / 0.12)',
    skills: [
      { name: 'JavaScript', icon: devicon('javascript/javascript-original.svg') },
      { name: 'TypeScript', icon: devicon('typescript/typescript-original.svg') },
      { name: 'Python', icon: devicon('python/python-original.svg') },
      { name: 'Java', icon: devicon('java/java-original.svg') },
      { name: 'C', icon: devicon('c/c-original.svg') },
      { name: 'Go', icon: devicon('go/go-original.svg') },
      { name: 'HTML5', icon: devicon('html5/html5-original.svg') },
      { name: 'CSS3', icon: devicon('css3/css3-original.svg') },
    ],
  },
  {
    title: 'Frontend',
    Icon: Layout,
    span: 'lg:col-span-3',
    glow: 'rgb(var(--accent-2) / 0.1)',
    skills: [
      { name: 'React', icon: devicon('react/react-original.svg') },
      { name: 'Next.js', icon: devicon('nextjs/nextjs-original.svg'), invert: true },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss/tailwindcss-original.svg') },
      { name: 'Bootstrap', icon: devicon('bootstrap/bootstrap-original.svg') },
      { name: 'Chakra UI', icon: 'https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg' },
      { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/0055FF' },
    ],
  },
  {
    title: 'Backend',
    Icon: Server,
    span: 'lg:col-span-2',
    glow: 'rgb(var(--accent-3) / 0.1)',
    skills: [
      { name: 'Node.js', icon: devicon('nodejs/nodejs-original.svg') },
      { name: 'Express', icon: devicon('express/express-original.svg'), invert: true },
      { name: 'FastAPI', icon: devicon('fastapi/fastapi-original.svg') },
      { name: 'Flask', icon: devicon('flask/flask-original.svg'), invert: true },
      { name: 'Postman', icon: devicon('postman/postman-original.svg') },
      { name: 'REST', icon: devicon('nodejs/nodejs-original.svg') },
    ],
  },
  {
    title: 'Database',
    Icon: Database,
    span: 'lg:col-span-2',
    glow: 'rgb(var(--accent-2) / 0.1)',
    skills: [
      { name: 'MongoDB', icon: devicon('mongodb/mongodb-original.svg') },
      { name: 'PostgreSQL', icon: devicon('postgresql/postgresql-original.svg') },
      { name: 'MySQL', icon: devicon('mysql/mysql-original.svg') },
      { name: 'SQLite', icon: devicon('sqlite/sqlite-original.svg') },
      { name: 'Redis', icon: devicon('redis/redis-original.svg') },
      { name: 'Supabase', icon: devicon('supabase/supabase-original.svg') },
      { name: 'Firebase', icon: devicon('firebase/firebase-plain.svg') },
    ],
  },
  {
    title: 'DevOps & Cloud',
    Icon: Cloud,
    span: 'lg:col-span-2',
    glow: 'rgb(var(--accent) / 0.12)',
    skills: [
      { name: 'Docker', icon: devicon('docker/docker-original.svg') },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invert: true },
      { name: 'Azure', icon: devicon('azure/azure-original.svg') },
      { name: 'DigitalOcean', icon: devicon('digitalocean/digitalocean-original.svg') },
      { name: 'Git', icon: devicon('git/git-original.svg') },
      { name: 'Vercel', icon: devicon('vercel/vercel-original.svg'), invert: true },
      { name: 'Netlify', icon: devicon('netlify/netlify-original.svg') },
      { name: 'Linux', icon: devicon('linux/linux-original.svg') },
    ],
  },
];

const allSkills = skillCategories.flatMap((c) => c.skills).filter((s, i, arr) => arr.findIndex((x) => x.icon === s.icon) === i);

function SkillIcon({ skill, size = 36 }: { skill: Skill; size?: number }) {
  return (
    <Image
      src={skill.icon}
      alt=""
      width={size}
      height={size}
      className={`object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] ${skill.invert ? 'invert-on-dark' : ''}`}
      style={{ width: size, height: size }}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          eyebrow="Skills"
          title="Tools I"
          highlight="build with"
          description="A full-stack toolkit — from pixel-perfect interfaces to APIs, databases and the cloud that runs them."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map(({ title, Icon, span, glow, skills }, ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${span} ${ci === skillCategories.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <TiltCard intensity={5} glow={glow} className="rounded-3xl p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="flex items-center gap-3 font-display text-lg font-semibold">
                    <span className="glass-pill grid h-9 w-9 place-items-center rounded-xl text-fg">
                      <Icon className="h-4 w-4" />
                    </span>
                    {title}
                  </h3>
                  <span className="font-mono text-xs text-subtle">{String(skills.length).padStart(2, '0')}</span>
                </div>
                <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="glass-pill group/skill flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-2 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
                    >
                      <span className="transition-transform duration-300 group-hover/skill:scale-110">
                        <SkillIcon skill={skill} />
                      </span>
                      <span className="text-center text-[10px] leading-tight text-muted transition-colors group-hover/skill:text-fg md:text-[11px]">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Infinite marquee of the whole stack */}
        <div className="marquee-mask relative mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div key={i} aria-hidden={i >= allSkills.length} className="glass-pill flex items-center gap-2 rounded-full px-4 py-2">
                <SkillIcon skill={skill} size={18} />
                <span className="whitespace-nowrap text-sm text-muted">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
