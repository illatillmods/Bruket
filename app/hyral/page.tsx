'use client'
import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { m } from 'framer-motion'
import { fadeUp, transitionDefault } from '../../lib/motion'
import { products } from '../../content/products'

const hyral = products.find(p => p.id === 'hyral') || { title: '', description: '', details: '', href: '' }

export default function HyralPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <Section>
          <m.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...transitionDefault, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            {hyral.title}
          </m.h1>
          <m.p
            className="text-lg text-neutral-300 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionDefault, delay: 0.06, duration: 0.45 }}
          >
            {'<fix later: specific outcome>'}
          </m.p>
        </Section>

        {/* Problem */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-2">The problem</h2>
          <p className="text-neutral-300 mb-7">
            Sweden’s rental market is slow, highly competitive, and often closed off. Listings disappear fast—and most people miss out or wait too long.
          </p>
        </Section>

        {/* Solution */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-2">The solution</h2>
          <p className="text-neutral-300 mb-7">
            Hyral brings together rental listings from across the market, updates constantly, and alerts you to opportunities instantly. Get access to new listings and tools to act faster, all in one place.
          </p>
        </Section>

        {/* Features */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-4">Features</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Aggregated realtime listings</h3>
              <p className="text-neutral-300 text-sm">See more opportunities from trusted sources, updated live.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Early notifications</h3>
              <p className="text-neutral-300 text-sm">Get alerted and act before others even see the listing.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Direct contact tools</h3>
              <p className="text-neutral-300 text-sm">Easily reach out to landlords with ready-to-go templates.</p>
            </li>
          </ul>
        </Section>

        {/* Why it's different */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-2">Why it’s different</h2>
          <p className="text-neutral-300">{'<fix later: differentiation vs alternatives>'}</p>
        </Section>

        {/* CTA */}
        <Section>
          <CTAButton>Join waitlist</CTAButton>
        </Section>
      </main>
    </>
  )
}
