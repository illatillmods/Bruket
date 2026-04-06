'use client'

import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { products } from '../../content/products'

const mmo = products.find(p => p.id === 'mmo') || { title: '' }

export default function MMOPage() {
  return (
    <>
      <main>
        <Section compact>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {mmo.title}
          </h1>
          <p className="text-lg text-neutral-300 mb-4">
            A lifelong passion project about building an emergent civilization-simulation MMO where players enter a living world with cities,
            supply chains, institutions, infrastructure, and history already in motion.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">The problem</h2>
          <p className="text-neutral-300 mb-3">
            Most sandbox MMOs either start from empty land, flatten society into a few shallow loops, or confuse realism with clunky interaction.
            They are interesting on paper, but they rarely feel like stepping into a real civilization.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">The solution</h2>
          <p className="text-neutral-300 mb-3">
            This project is built around three foundational layers: physical reality, resources, and information. Trade, logistics, finance,
            research, institutions, conflict, and culture are meant to emerge from those constraints rather than from designer-authored labels.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">Core pillars</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">A living starting world</h3>
              <p className="text-neutral-300 text-sm">Players arrive inside functioning cities, infrastructure, labor flows, and institutions instead of a blank survival map.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">High agency, optional depth</h3>
              <p className="text-neutral-300 text-sm">Casual players can trade, travel, work, and build with templates, while advanced players can shape finance, research, infrastructure, and institutions.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Information is not magic</h3>
              <p className="text-neutral-300 text-sm">Knowledge only matters when someone creates it, stores it, publishes it, transmits it, and earns trust for it inside the world.</p>
            </li>
            <li className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Readable moment-to-moment play</h3>
              <p className="text-neutral-300 text-sm">The controls should stay smooth and responsive, with realism showing up through consequences, scarcity, logistics, risk, and time rather than through friction.</p>
            </li>
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Why it's different</h2>
          <p className="text-neutral-300">
            The goal is not a theme-park MMO, a Minecraft-style builder, or a spreadsheet disguised as a game. The goal is a world where trade wars,
            black markets, scientific breakthroughs, infrastructure crises, and new institutions can emerge because the underlying systems actually support them.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Scope strategy</h2>
          <p className="text-neutral-300">
            The near-term focus is systemic density, not raw scale: one dense region first, then expansion only if the simulation proves itself.
            The long-term ambition is enormous, but the design starts with a playable core that can survive inside a real MMO environment.
          </p>
        </Section>

        <Section compact>
          <CTAButton disabled className="cursor-default opacity-80">
            Long-term project in development
          </CTAButton>
        </Section>
      </main>
    </>
  )
}