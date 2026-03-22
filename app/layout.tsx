import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

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
    url: 'https://bruket.se', // Replace if domain known
    siteName: 'Bruket'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
