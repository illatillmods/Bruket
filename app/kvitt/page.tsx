'use client'
import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import Footer from '../../components/Footer'
import { m } from 'framer-motion'

export default function KvittPage() {
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
            Your spending, actually understood.
          </m.h1>
          <m.p
            className="text-lg text-neutral-300 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.45 }}
          >
            KVITT decodes your purchases to help you understand exactly what you spend.
          </m.p>
        </Section>
        <Section>
          <div className="mb-7">
            <h2 className="text-xl text-white font-semibold mb-2">The problem</h2>
            <p className="text-neutral-300">Banks just show you balances. They don’t show real spending behavior or habits—and receipts go ignored.</p>
          </div>
          <div className="mb-7">
            <h2 className="text-xl text-white font-semibold mb-2">Our solution</h2>
            <p className="text-neutral-300">KVITT uses receipt scanning and smarter categorization for item-level tracking and spending insights.</p>
          </div>
          <div className="mb-7">
            <h2 className="text-xl text-white font-semibold mb-2">Features</h2>
            <ul className="text-neutral-300 space-y-2 list-disc ml-5">
              <li>Scan receipts (email or camera)</li>
              <li>Automatic product normalization</li>
              <li>Habit tracking and spend insights</li>
              <li>Smart expense categories</li>
            </ul>
          </div>
          <CTAButton>Get early access</CTAButton>
        </Section>
      </main>
      <Footer />
    </>
  )
}
