import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Pixel Architect | Zacharia Alex | Senior Full-Stack Developer',
  description: 'Performance-driven architecture and full-lifecycle software engineering. Specializing in high-performance Web Apps, API Orchestration, and UI/UX Engineering.',
  generator: 'v0.app',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'Python', 'Web Development'],
  authors: [{ name: 'Zacharia Alex' }],
  icons: {
  icon: [
    {
      url: '/icon-light-32x32.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/icon-dark-32x32.png',
      media: '(prefers-color-scheme: dark)',
    },
    // The SVG is the "Master" file for modern browsers
    {
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
  ],
  apple: '/apple-icon.png', // Usually use the dark version for Apple
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
