import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import BackgroundArtwork from '../components/BackgroundArtwork'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
    url: 'https://bruket.se',
    siteName: 'Bruket',
    images: ['/og.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bruket',
    description: 'Bruket is a Swedish product studio. We build practical digital tools.',
    images: ['/og.png'],
    creator: '@bruketse' // placeholder, update as needed
  },
  metadataBase: new URL('https://bruket.se'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
