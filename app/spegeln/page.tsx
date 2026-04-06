'use client'

import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { products } from '../../content/products'

const spegeln = products.find(p => p.id === 'spegeln') || { title: '', href: '' }

export default function SpegelnPage() {
  return (
    <>
      <main>
        <Section compact>
          <div className="bg-[rgba(95,95,95,0.12)] border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 text-base font-medium">
            <strong>Spegeln is live.</strong> It lives at <a href="http://spegeln.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">spegeln.org</a>.
          </div>
        </Section>

        <div className="-mt-5" />

        <Section compact>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {spegeln.title}
          </h1>
          <p className="text-lg text-neutral-300 mb-4">
            Spegeln is a Swedish public-interest scrutiny platform built to make power legible through public records, source-linked publishing,
            and structured accountability workflows.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">The problem</h2>
          <p className="text-neutral-300 mb-3">
            Public information about politicians, agencies, courts, procurement, disciplinary actions, and institutional behavior often exists,
            but it is fragmented across registries, documents, and bureaucratic systems. That fragmentation protects power by making scrutiny slow.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">The solution</h2>
          <p className="text-neutral-300 mb-3">
            Spegeln collects public-source material into a structure people can actually use: searchable dossiers, timelines, network views,
            reporting intake, and coordinated oversight tools. The platform is designed to stay rigorous, source-linked, and inside legal boundaries.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">Features</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Public dossiers</h3>
              <p className="text-neutral-300 text-sm">Create continuously updated profiles for people in power, built from public records, linked sources, and clear timelines.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Cross-referenced evidence</h3>
              <p className="text-neutral-300 text-sm">Connect documents, procurement trails, company ties, disciplinary matters, and other public material into a usable investigative graph.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Coordinated oversight workflows</h3>
              <p className="text-neutral-300 text-sm">Support information requests, appeals, complaints, and documentation packages so scrutiny can happen faster and with better evidence.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Protected reporting intake</h3>
              <p className="text-neutral-300 text-sm">Receive reports, evidence, and media with strong attention to source protection, verification, prioritization, and traceability.</p>
            </li>
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Why it's different</h2>
          <p className="text-neutral-300">
            Spegeln is built around public information, direct source references, and legal durability. It does not depend on private family data,
            hidden methods, or vague allegations. The point is to make public power harder to hide behind bureaucracy.
          </p>
        </Section>

        <Section compact>
          <CTAButton as="a" href="http://spegeln.org/" target="_blank" rel="noopener noreferrer">
            Go to spegeln.org
          </CTAButton>
        </Section>
      </main>
    </>
  )
}