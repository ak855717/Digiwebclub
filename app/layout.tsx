import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'CreativeWeb - Digital Creative Agency',
  description: 'Premier destination for digital creative solutions. We combine creativity with technology to deliver exceptional digital experiences.',
  keywords: 'web design, digital agency, creative solutions, web development',
  authors: [{ name: 'CreativeWeb Agency' }],
  openGraph: {
    title: 'CreativeWeb - Digital Creative Agency',
    description: 'Premier destination for digital creative solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreativeWeb - Digital Creative Agency',
    description: 'Premier destination for digital creative solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}