'use client';

import { motion } from 'motion/react';

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function SectionHeading({ index, eyebrow, title, highlight, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
    >
      <span className="chip mb-5 gap-2 font-mono tracking-wider">
        <span className="text-gradient">{index}</span>
        <span className="h-3 w-px bg-current opacity-30" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
        <span className="text-chrome">{title}</span> {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && <p className="mx-auto mt-4 max-w-xl text-muted md:text-lg">{description}</p>}
    </motion.div>
  );
}
