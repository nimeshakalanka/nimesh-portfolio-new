/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        fg: token('fg'),
        muted: token('muted'),
        subtle: token('subtle'),
        accent: token('accent'),
        accent2: token('accent-2'),
        accent3: token('accent-3'),
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'role-in': {
          from: { transform: 'translateY(100%)', opacity: '0', filter: 'blur(6px)' },
          to: { transform: 'translateY(0)', opacity: '1', filter: 'blur(0)' },
        },
      },
      animation: {
        'role-in': 'role-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
