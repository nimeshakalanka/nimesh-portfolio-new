'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

const OrbitScene = dynamic(() => import('@/components/three/OrbitScene'), { ssr: false });

const roles = ['Full Stack Developer', 'Software Engineer', 'Telegram Bot Builder', 'UI Enthusiast'];

const socials = [
  { label: 'GitHub', href: 'https://github.com/nimeshakalanka', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nimesh-akalanka24/', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:akalankanime24@gmail.com', Icon: Mail },
];

const stats = [
  { value: '2021', label: 'Freelancing since' },
  { value: '12+', label: 'Projects shipped' },
  { value: '4', label: 'Certifications' },
];

const ease = [0.22, 1, 0.36, 1] as const;

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <span key={roles[i]} className="animate-role-in">
        <span className="text-gradient whitespace-nowrap font-medium">{roles[i]}</span>
      </span>
    </span>
  );
}

/** Each line slides up from behind a mask — a clean, editorial reveal. */
function MaskLine({ children, delay, ready }: { children: React.ReactNode; delay: number; ready: boolean }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={ready ? { y: '0%' } : undefined}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const visualY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section id="main" ref={ref} className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 md:px-6">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <motion.div style={{ y: contentY }} className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div {...reveal(0.1)} className="mb-8 flex justify-center lg:justify-start">
            <span className="chip gap-2 py-1.5 text-fg">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Available for freelance work
            </span>
          </motion.div>

          <h1 className="font-display text-6xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-7xl xl:text-[7.5rem]">
            <MaskLine delay={0.2} ready={ready}>
              <span className="text-chrome">Nimesh</span>
            </MaskLine>
            <MaskLine delay={0.32} ready={ready}>
              <span className="text-chrome">Akalanka</span>
              <span className="text-gradient">.</span>
            </MaskLine>
          </h1>

          <motion.p {...reveal(0.55)} className="mt-6 font-display text-xl text-muted md:text-2xl">
            <RotatingRole />
          </motion.p>

          <motion.p {...reveal(0.65)} className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base lg:mx-0">
            22-year-old undergraduate pursuing a B.Sc. (Hons) in Information Systems at Sabaragamuwa University of
            Sri Lanka, building across the full stack. Since 2021 I&apos;ve freelanced on Fiverr and Upwork, shipping
            Telegram bots and web apps for real-world clients.
          </motion.p>

          <motion.div {...reveal(0.75)} className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#projects" className="btn-primary">
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/assets/cv.pdf" download="Nimesh_Akalanka_CV.pdf" className="btn-glass">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <div className="ml-1 flex gap-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors duration-300 hover:bg-white/5 hover:text-fg"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.dl
            {...reveal(0.9)}
            className="mx-auto mt-12 grid max-w-md grid-cols-3 divide-x divide-[var(--line)] border-t border-[var(--line)] pt-6 lg:mx-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0 text-center lg:text-left">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold md:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-subtle">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Particle halo with the portrait at its core */}
        <motion.div
          style={{ y: visualY, scale: visualScale }}
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="relative order-1 mx-auto aspect-square w-full max-w-[300px] sm:max-w-[400px] lg:order-2 lg:max-w-[540px]"
        >
          <div role="img" aria-label="Portrait of Nimesh Akalanka drawn in particles" className="pointer-events-none absolute inset-[-12%]">
            <OrbitScene active={ready} />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-subtle transition-colors hover:text-fg md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
