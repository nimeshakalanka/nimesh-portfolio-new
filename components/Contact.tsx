'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/BrandIcons';
import SectionHeading from '@/components/ui/SectionHeading';

const EMAIL = 'akalankanime24@gmail.com';
// wa.me wants the number in international format with no "+" or spaces.
const WHATSAPP = '94717651505';

const channels = [
  { label: 'WhatsApp', value: '+94 71 765 1505', href: `https://wa.me/${WHATSAPP}`, Icon: WhatsappIcon },
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
  { label: 'LinkedIn', value: 'in/nimesh-akalanka24', href: 'https://www.linkedin.com/in/nimesh-akalanka24/', Icon: LinkedinIcon },
  { label: 'GitHub', value: '@nimeshakalanka', href: 'https://github.com/nimeshakalanka', Icon: GithubIcon },
];

const fieldClass =
  'peer w-full rounded-2xl border border-[var(--line)] bg-white/[0.02] px-5 pb-3 pt-6 text-fg placeholder-transparent transition-all focus:border-white/40 focus:bg-white/[0.04] focus:outline-none';
const labelClass =
  'pointer-events-none absolute left-5 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-fg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // The site is a static export with no backend, so open a WhatsApp chat with the message pre-filled.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*${formData.subject}*\n\n${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's make something"
          highlight="amazing"
          description="Have a project, an idea or a role in mind? My inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass glass-edge grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Info side */}
          <div className="relative overflow-hidden border-b border-[var(--line)] p-8 md:p-10 lg:border-b-0 lg:border-r">
            <div aria-hidden className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.3),transparent)]" />
            <div aria-hidden className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.18),transparent)]" />

            <div className="relative">
              <h3 className="font-display text-3xl font-semibold leading-tight">
                Got an idea?
                <br />
                <span className="text-gradient">Let&apos;s talk.</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Freelance projects, collaborations, internships — I&apos;d love to hear from you.
              </p>

              <ul className="mt-8 space-y-3">
                {channels.map(({ label, value, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="glass-pill group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:translate-x-1 hover:bg-white/10"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-white/5 text-fg transition-colors group-hover:bg-white group-hover:text-black">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-muted">{label}</span>
                        <span className="block truncate text-sm font-medium">{value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-fg" /> Sri Lanka · Open to remote work
              </p>
            </div>
          </div>

          {/* Form side */}
          <form onSubmit={handleSubmit} className="grid gap-4 p-8 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input id="name" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className={fieldClass} />
                <label htmlFor="name" className={labelClass}>Name</label>
              </div>
              <div className="relative">
                <input id="email" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className={fieldClass} />
                <label htmlFor="email" className={labelClass}>Email</label>
              </div>
            </div>
            <div className="relative">
              <input id="subject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className={fieldClass} />
              <label htmlFor="subject" className={labelClass}>Subject</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required rows={6} className={`${fieldClass} resize-none`} />
              <label htmlFor="message" className={labelClass}>Message</label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary group mt-2 w-full justify-center py-4 text-base"
            >
              Send on WhatsApp
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
