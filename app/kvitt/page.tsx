'use client'
import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { m } from 'framer-motion'
import { fadeUp, transitionDefault } from '../../lib/motion'
import { products } from '../../content/products'

const kvitt = products.find(p => p.id === 'kvitt') || { title: '', description: '', details: '', href: '' }

export default function KvittPage() {
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
            {kvitt.title}
          </m.h1>
          <m.p
            className="text-lg text-neutral-300 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionDefault, delay: 0.06, duration: 0.45 }}
          >
            {'KVITT is a mobile app that turns receipts into product-level insight. See what you actually buy, how often, and how your habits form over time.'}
          </m.p>
        </Section>

        {/* Problem */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-2">The problem</h2>
          <p className="text-neutral-300 mb-7">
            Most tools just show totals and balances. They don't help you understand what you really spend on, or your actual behavior. Receipts are ignored after the transaction—no details, no patterns, no insight.
          </p>
        </Section>

        {/* Solution */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-2">The solution</h2>
          <p className="text-neutral-300 mb-7">
            KVITT makes sense of your receipts at the item level. Scan receipts with your phone and get clear, structured insight into what you’re actually buying, how often, and when. Not just your totals—your behavior.
          </p>
        </Section>

        {/* Features */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-4">Features</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Item-level tracking</h3>
              <p className="text-neutral-300 text-sm">See every product you purchase, not just the sum total.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Behavioral insight</h3>
              <p className="text-neutral-300 text-sm">Spot habits, patterns, and changes in your actual spending activity, not just your categories.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Fast receipt scanning</h3>
              <p className="text-neutral-300 text-sm">Scan receipts with your camera and let the app extract products, quantities, and prices in seconds.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Clean product categories</h3>
              <p className="text-neutral-300 text-sm">Messy receipt lines are normalized into clear product types, so trends and habits stay consistent over time.</p>
            </li>
          </ul>
        </Section>

        {/* Why it's different */}
        <Section>
          <h2 className="text-xl text-white font-semibold mb-2">Why it’s different</h2>
          <p className="text-neutral-300">KVITT tracks products, not just transactions. It focuses on habits and behavior instead of budgets and rules, giving you a direct view of where your money actually goes—without spreadsheets or complex financial setups.</p>
        </Section>

        {/* CTA */}
        <Section>
          <CTAButton>Get early access</CTAButton>
        </Section>
      </main>
    </>
  )
}
