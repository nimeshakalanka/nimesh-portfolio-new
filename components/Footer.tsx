import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 pb-8 md:px-6">
      <div className="glass glass-edge mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl px-6 py-5 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Nimesh Akalanka. Crafted with Next.js, Three.js &amp; a lot of glass.</p>
        <a href="#main" className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:text-fg">
          Back to top <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
