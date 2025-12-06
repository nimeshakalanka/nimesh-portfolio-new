import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nimesha Akalanka - Full Stack Developer',
  description: 'Portfolio of Nimesha Akalanka - Full Stack Developer specializing in React, Next.js, and modern web technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}