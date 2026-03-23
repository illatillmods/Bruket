'use client'
import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import Footer from '../../components/Footer'
import { m } from 'framer-motion'

export default function HyralPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <Section>
          <m.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find apartments before everyone else.
          </m.h1>
          <m.div
            className="text-lg text-neutral-300 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.45 }}
          >
            Hyral makes Sweden’s rental market less painful.
          </m.div>
        </Section>
        {/* Sections */}
        <Section>
          <div className="mb-7">
            <h2 className="text-xl text-white font-semibold mb-2">The problem</h2>
            <p className="text-neutral-300">Sweden's rental market is slow, competitive, and often closed-off. Finding an apartment takes too long.</p>
          </div>
          <div className="mb-7">
            <h2 className="text-xl text-white font-semibold mb-2">Our solution</h2>
            <p className="text-neutral-300">Hyral aggregates rental listings in real time and surfaces opportunities early. Get notified instantly. See what others don’t.</p>
          </div>
          <div className="mb-7">
            <h2 className="text-xl text-white font-semibold mb-2">Features</h2>
            <ul className="text-neutral-300 space-y-2 list-disc ml-5">
              <li>Aggregated listings from trusted sources</li>
              <li>Early signals and notifications</li>
              <li>Direct contact tools for landlords</li>
            </ul>
          </div>
          <CTAButton>Join waitlist</CTAButton>
        </Section>
      </main>
      <Footer />
    </>
  )
}
