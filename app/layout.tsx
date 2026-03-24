import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import BackgroundArtwork from '../components/BackgroundArtwork'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/favicon-light.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/favicon-dark.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
      {
        url: '/favicon-light.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: [{ url: '/favicon-light.png', type: 'image/png' }],
    apple: [{ url: '/favicon-light.png', sizes: '180x180', type: 'image/png' }],
  },
  title: {
    default: 'Bruket',
    template: '%s | Bruket'
  },
  description: 'Bruket is a Swedish product studio. We build practical digital tools.',
  openGraph: {
    title: 'Bruket',
    description: 'Bruket is a Swedish product studio. We build practical digital tools.',
    type: 'website',
    locale: 'en_SE',
    url: 'https://bruket.com',
    siteName: 'Bruket',
    images: ['/og.png']
  },
  metadataBase: new URL('https://bruket.com'),
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-off-black text-white relative">
        {/* BackgroundArtwork is global, fixed, z-0 */}
        <BackgroundArtwork />

        {/* App stacking: content is above background, below navbar/footer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {/* Do NOT put opacity or overflow-hidden parent here! */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
