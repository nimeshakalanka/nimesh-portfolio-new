import type { Metadata, Viewport } from 'next'
// Fonts are bundled from npm instead of next/font/google, so dev and builds work without reaching Google's servers.
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nimesh Akalanka - Full Stack Developer',
  description: 'Portfolio of Nimesh Akalanka - Full Stack Developer specializing in React, Next.js, and modern web technologies',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
