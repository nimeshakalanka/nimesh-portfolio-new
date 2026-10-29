'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { GithubIcon } from '@/components/ui/BrandIcons';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';

const projects = [
  {
    title: 'AI Watermark Remover',
    description: 'AI-powered tool for removing unwanted watermarks from images and videos using computer vision and deep learning.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Gradio', 'NumPy', 'ffmpeg'],
    image: '/assets/projects/watermarkrm.png',
    github: 'https://huggingface.co/spaces/nimeshakalanka24/watermark-remover/tree/main',
    demo: 'https://huggingface.co/spaces/nimeshakalanka24/watermark-remover'
  },
  {
    title: 'KERYDEX - Digital Solutions & Web Development',
    description: 'Designed and developed modern, responsive web experiences for hospitality brands, including Kai Beach and Kurumba Bay.',
    tech: ['Next.js', 'Motion.dev', 'Anime.js', 'Tailwind CSS'],
    image: '/assets/projects/kerydex.png',
    github: 'https://github.com/nimeshakalanka/kerydex-site',
    demo: 'https://kerydex.pages.dev/'
  },
  {
    title: 'JusticePal',
    description: 'An AI-powered legal assistant for Sri Lanka. University capstone project built with a team of 5. I contributed as backend dev and also worked on frontend & AI services.',
    tech: ['Next.js', 'PostgreSQL', 'AI/ML', 'Tailwind CSS', 'Express.js'],
    image: '/assets/projects/JustisPal.png',
    github: 'https://github.com/nimeshakalanka/JusticePal',
    demo: 'https://justice-pal-rose.vercel.app/'
  },
  {
    title: 'All Save Bot',
    description: 'A modern telegram bot who can download social media videos without watermark.',
    tech: ['Python', 'Mongo DB', 'TikTok API', 'Meta API'],
    image: '/assets/projects/allsave.png',
    github: 'https://github.com/nimeshakalanka/all_save',
    demo: 'https://t.me/AIL_Save_Bot'
  },
  {
    title: 'Priya Dream Kitchen Website (New)',
    description: 'A modern website for a Sri Lankan cooking experience in Weligama, featuring cooking classes, menus, galleries, reviews, and WhatsApp-powered bookings.',
    tech: ['Next.js', 'Tailwind CSS', 'React', 'WhatsApp Integration'],
    image: '/assets/projects/priya-dream-kitchen-new.png',
    github: 'https://github.com/Priya-Dream-Kitchen/priya-dream-kitchen-v2',
    demo: 'https://priyadreamkitchen.netlify.app/'
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
    title: 'Priya Dream Kitchen Website ',
    description: 'A website for our family business made using HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/projects/priya-dream-kitchen.png',
    github: 'https://github.com/nimeshakalanka/Priya-Dream-Kitchen.github.io',
    demo: 'https://priya-dream-kitchen.github.io/'
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

// The first project is featured and spans two columns; the "coming soon" card fills whatever is left of the last row.
const cells = projects.length + 1;
const mdSpan = cells % 2 === 1 ? 'md:col-span-1' : 'md:col-span-2';
const lgSpan = ['lg:col-span-3', 'lg:col-span-2', 'lg:col-span-1'][cells % 3];

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          eyebrow="Work"
          title="Selected"
          highlight="projects"
          description="AI tools, client sites, bots and APIs — things I've designed, built and shipped."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const featured = index === 0;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={featured ? 'md:col-span-2' : ''}
              >
                <TiltCard intensity={featured ? 5 : 8} className="rounded-3xl p-3">
                  <div className={`flex h-full flex-col ${featured ? 'lg:flex-row lg:gap-2' : ''}`}>
                    <div className={`relative overflow-hidden rounded-2xl bg-white/5 ${featured ? 'h-56 md:h-72 lg:h-auto lg:min-h-[20rem] lg:w-3/5' : 'h-52'}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes={featured ? '(min-width: 1024px) 40vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[11px] text-white">
                        {featured ? '★ Featured' : String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className={`flex flex-1 flex-col px-2 pb-2 pt-4 ${featured ? 'lg:justify-center lg:px-5' : ''}`}>
                      <h3 className={`font-display font-semibold leading-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {project.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed text-muted ${featured ? '' : 'line-clamp-3'}`}>{project.description}</p>

                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <li key={tech} className="chip">
                            {tech}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex gap-2 pt-5">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glass flex-1 justify-center !px-4 !py-2 text-sm hover:!bg-white hover:text-black"
                        >
                          Live demo <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glass !px-4 !py-2 text-sm"
                          aria-label={`${project.title} source code`}
                        >
                          <GithubIcon className="h-4 w-4" /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`${mdSpan} ${lgSpan}`}
          >
            <TiltCard intensity={6} className="rounded-3xl border-dashed">
              <div className="flex h-full min-h-[16rem] flex-col items-center justify-center gap-4 p-8 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-accent2 via-accent to-accent3 p-[2px]"
                >
                  <span className="grid h-full w-full place-items-center rounded-full bg-bg/80">
                    <Sparkles className="h-6 w-6 text-fg" />
                  </span>
                </motion.div>
                <h3 className="font-display text-2xl font-semibold">More projects brewing</h3>
                <p className="max-w-sm text-sm text-muted">I&apos;m constantly working on exciting new projects. Stay tuned!</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="chip">AI/ML</span>
                  <span className="chip">Web3</span>
                  <span className="chip">Mobile Apps</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
