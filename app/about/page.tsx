'use client'
import Section from '../../components/Section'
import { m } from 'framer-motion'
import { fadeUp, transitionDefault } from '../../lib/motion'

export default function AboutPage() {
  return (
    <>
      <main>
        <Section>
          <m.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...transitionDefault, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About Bruket
          </m.h1>
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionDefault, delay: 0.06, duration: 0.45 }}
            className="space-y-5 text-lg text-neutral-300"
          >
            <p>Bruket is a small independent product studio based in Sweden.</p>
            <p>We focus on building practical digital tools that serve real needs, with no fluff and no big stories.</p>
            <p>Everything we build is grounded, functional and considered. Built in Sweden. For people who want to get things done.</p>
          </m.div>
        </Section>
      </main>
    </>
  )
}
