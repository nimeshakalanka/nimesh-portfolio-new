# 🌟 Nimesh Akalanka - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, showcasing my projects, skills, and professional journey as a Full Stack Developer.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://nimeshakalanka.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Modern Design** - Clean and attractive UI with glassmorphism effects
- 🌓 **Dark/Light Mode** - Persistent theme switching with localStorage
- ✨ **Custom Cursor Effect** - Fluid ink-in-water trail animation
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Next.js 16 and Turbopack
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 💫 **Interactive Sections** - Hero, Skills, Education, Experience, Certificates, Projects, and Contact

## 🚀 Tech Stack

### Frontend
- **Framework:** Next.js 16.0.7
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12.23.24
- **Icons:** Lucide React 0.554.0

### Development
- **Package Manager:** npm
- **Build Tool:** Turbopack
- **Code Quality:** ESLint
- **Deployment:** Vercel

## 📂 Project Structure

```
nimesh-portfolio/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main home page
├── components/
│   ├── Navigation.tsx       # Responsive navbar with theme toggle
│   ├── Hero.tsx            # Landing section with intro
│   ├── Skills.tsx          # Tech stack showcase
│   ├── EducationExperience.tsx  # Education and work history
│   ├── Certificates.tsx    # Achievements and certifications
│   ├── Projects.tsx        # Project portfolio
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer section
│   ├── Preloader.tsx       # Loading animation
│   └── CustomCursor.tsx    # Custom cursor effect
├── public/
│   └── assets/             # Images and static files
├── tailwind.config.js      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nimeshakalanka/nimesh-portfolio-new.git
cd nimesh-portfolio-new
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Theme Colors
Edit `app/globals.css` to customize the color scheme:
```css
/* Modify gradient background */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding Projects
Edit `components/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    image: '/assets/projects/your-project.png',
    github: 'https://github.com/yourusername/project',
    demo: 'https://yourproject.com'
  }
];
```

### Adding Certificates
Edit `components/Certificates.tsx` to add your achievements.

## 📸 Screenshots

Visit [nimeshakalanka.dev](https://nimeshakalanka.dev) to see the live portfolio.

## 🌐 Deployment

This project is deployed on Vercel. To deploy your own:

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Configure your domain
4. Deploy! 🚀

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nimesh Akalanka**
- Website: [nimeshakalanka.dev](https://nimeshakalanka.dev)
- GitHub: [@nimeshakalanka](https://github.com/nimeshakalanka)
- LinkedIn: [nimesha-akalanka](https://linkedin.com/in/nimesha-akalanka)
- Email: nimeshakalanka@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
- Tech logos from [DevIcon CDN](https://devicon.dev/)

---

⭐ Star this repo if you like it! Happy coding! 🚀
