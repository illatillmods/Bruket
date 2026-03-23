'use client'
import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import { m } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <m.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Bruket
          </m.h1>
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.45 }}
            className="space-y-5 text-lg text-neutral-300"
          >
            <p>Bruket is a small independent product studio based in Sweden.</p>
            <p>We focus on building practical digital tools that serve real needs, with no fluff and no big stories.</p>
            <p>Everything we build is grounded, functional and considered. Built in Sweden. For people who want to get things done.</p>
          </m.div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
