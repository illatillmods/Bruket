'use client'
import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { products } from '../../content/products'

const hyral = products.find(p => p.id === 'hyral') || { title: '', description: '', details: '', href: '' }

export default function HyralPage() {
  return (
    <>
      <main>
        {/* Release Note */}
        <Section compact>
          <div className="bg-[rgba(65,120,90,0.11)] border border-[#41785A] rounded-md px-4 py-3 text-[#F3F4F4] text-base font-medium">
            <strong>Hyral has been released!</strong> It now lives at <a href="https://hyral.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#133021]">hyral.org</a> and is under constant development and improvement.
          </div>
        </Section>
        {/* Hero */}
        <div className="-mt-5" />
        <Section compact>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {hyral.title}
          </h1>
          <p className="text-lg text-neutral-300 mb-4">
            {'Hyral helps you write a clear rental application and see relevant landlord contacts for a chosen city. You send the emails yourself.'}
          </p>
        </Section>

        {/* Problem */}
        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">The problem</h2>
          <p className="text-neutral-300 mb-3">
            Looking for a rental usually means writing the same information over and over and guessing who to contact. Information is scattered, tools are built for landlords, and renters rarely see a clear, structured path.
          </p>
        </Section>

        {/* Solution */}
        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">The solution</h2>
          <p className="text-neutral-300 mb-3">
            Hyral is a renter-first application tool. It helps you generate a clean, professional rental application letter from structured input, then discover relevant landlord contacts for a selected city. You stay in full control of the outreach and send every email yourself.
          </p>
        </Section>

        {/* Features */}
        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">Features</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Structured application builder</h3>
              <p className="text-neutral-300 text-sm">Fill in a simple form and get a professional, neutral rental application letter based only on your input.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Renter-first contact discovery</h3>
              <p className="text-neutral-300 text-sm">See landlord contact details for a selected city, filtered to avoid press contacts and unrelated inboxes.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Safe email batches</h3>
              <p className="text-neutral-300 text-sm">Contacts are grouped into small, copy-paste-ready batches that fit common email clients. You never have to split lists manually.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Transparent before payment</h3>
              <p className="text-neutral-300 text-sm">Preview your full letter, number of contacts, and email batches before you pay. No hidden steps or surprise changes after checkout.</p>
            </li>
          </ul>
        </Section>

        {/* Why it's different */}
        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Why it’s different</h2>
          <p className="text-neutral-300">Hyral is a tool, not a platform. It does not host listings, send emails, or sell priority. It focuses on two things only: a clear application letter and a precise, renter-first contact list that you use on your own terms.</p>
        </Section>

        {/* CTA */}
        <Section compact>
          <CTAButton as="a" href="https://hyral.org" target="_blank" rel="noopener noreferrer">
            Go to hyral.org
          </CTAButton>
        </Section>
      </main>
    </>
  )
}
