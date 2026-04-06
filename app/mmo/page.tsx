'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { products } from '../../content/products'
import { supportTiers } from '../../lib/supportTiers'

const mmo = products.find(p => p.id === 'mmo') || { title: '' }

const proofPoints = [
  'A current Confluence Basin prototype region with a real 3D client slice and a backend-authoritative world model.',
  'A real hauling loop: public board, contract acceptance, pickup, delivery, and payout.',
  'A drivable flatbed lane through the motor pool instead of fake full-vehicle theater.',
  'A tracked contract HUD, hauling shell, regional atlas, and City Tour browser tied into the same slice.',
  'Three anchor civilizations already framing the basin: Forgeplain Span, Tideglass Reach, and Lattice Heights.',
  'Live prototype surfaces for markets, compliance, archives, construction, labor pressure, and institutional records.',
]

const differences = [
  {
    title: 'Enter a world already running',
    description:
      'The fantasy is not starting from nothing. It is entering cities, depots, permits, infrastructure, labor pressure, archives, and logistics that already exist and learning how to gain leverage inside them.',
  },
  {
    title: 'Systems first, not fake breadth',
    description:
      'The project starts with one dense region and one honest slice. It expands only when the current systems have earned it instead of pretending the whole planet already exists.',
  },
  {
    title: 'Information is part of the world',
    description:
      'Boards, notices, archives, maps, institutional records, and public surfaces matter because information is treated as something created, stored, published, and controlled.',
  },
  {
    title: 'Readable moment-to-moment play',
    description:
      'The design is not trying to confuse realism with clunky interaction. The aim is smooth, readable play with depth emerging from scarcity, logistics, institutions, and consequence.',
  },
]

const fundingUses = [
  'Sustain full-time solo development over the long haul.',
  'Pay for tools, hosting, infrastructure, hardware, and production support.',
  'Bring in freelance art, modeling, texturing, music, audio, and specialist help where solo development is the wrong bottleneck.',
  'Keep the project independent without inventing fake certainty or deadline theater.',
]

const developmentRules = [
  'One dense real region first, not fake planetary completeness.',
  'Transparent development with visible tradeoffs, changes, and reasoning.',
  'No release date until the game is genuinely ready to carry one.',
  'Independence stays part of the production model, not a slogan layered on afterward.',
]

function MMOPageContent() {
  const searchParams = useSearchParams()
  const [activeTierId, setActiveTierId] = useState<string | null>(null)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  const supportState = searchParams.get('support')
  const selectedTier = supportTiers.find((tier) => tier.id === searchParams.get('tier'))

  async function handleSupport(tierId: string) {
    try {
      setActiveTierId(tierId)
      setCheckoutError(null)

      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tierId }),
      })

      const payload = (await response.json().catch(() => null)) as
        | { url?: string; error?: string }
        | null

      if (!response.ok || !payload?.url) {
        throw new Error(payload?.error || 'Support checkout is temporarily unavailable.')
      }

      window.location.href = payload.url
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : 'Support checkout is temporarily unavailable.')
      setActiveTierId(null)
    }
  }

  return (
    <>
      <main>
        {supportState === 'success' && (
          <Section compact>
            <div className="bg-[rgba(65,120,90,0.12)] border border-[#41785A] rounded-md px-4 py-3 text-[#F3F4F4] text-base font-medium">
              <strong>Support received.</strong> Thanks for backing CivMMO{selectedTier ? ` at the ${selectedTier.name} tier` : ''}.
            </div>
          </Section>
        )}

        {supportState === 'cancelled' && (
          <Section compact>
            <div className="bg-[rgba(95,95,95,0.12)] border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 text-base font-medium">
              Checkout was cancelled. You can pick any tier whenever you want.
            </div>
          </Section>
        )}

        <Section compact>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Working campaign identity: CivMMO</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{mmo.title}</h1>
          <p className="text-lg text-neutral-300 mb-4">
            A long-term independent civilization MMO project about entering an industrial and institutional world that is already running.
            The current direction is not a trailer-only promise. It is a proof-first Confluence Basin slice with real systems already connected.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">What this project is</h2>
          <p className="text-neutral-300 mb-3">
            This project is trying to build the kind of MMO that almost never gets built: one where civilization itself is the play space.
            Cities, depots, checkpoints, permits, archives, logistics, markets, public notices, institutions, and long-term leverage matter as much as combat usually does.
          </p>
          <p className="text-neutral-300 mb-3">
            The core fantasy is not spawning into an empty world. It is arriving in a world already in motion, learning how it works,
            exploiting its gaps, building your own position inside it, and gradually reshaping it through systems that actually hold together.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">What makes it different</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {differences.map((item) => (
              <li key={item.title} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-neutral-300 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">What is already real</h2>
          <ul className="space-y-3">
            {proofPoints.map((item) => (
              <li key={item} className="border border-neutral-800 rounded-lg bg-neutral-950/70 px-4 py-4 text-neutral-300">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-neutral-500 text-sm pt-2">
            This does not mean the MMO is near release. It means the project has crossed the line from interesting design vision to real systemic proof.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Why support it now</h2>
          <p className="text-neutral-300">
            This is the point where support actually changes the project. The prototype already proves a direction, a loop, a technical model,
            and a scope strategy. Funding now is not abstract encouragement. It is time, continuity, production quality, and a real chance to keep building it full time.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">What support funds</h2>
          <ul className="space-y-3">
            {fundingUses.map((item) => (
              <li key={item} className="border border-neutral-800 rounded-lg bg-neutral-950/70 px-4 py-4 text-neutral-300">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">Support the project</h2>
          <p className="text-neutral-300 mb-4">
            These are simple one-time support tiers shaped around the current campaign draft. Payments are handled through Stripe and go toward sustained development,
            contractor support, tooling, hosting, and production. They are support tiers, not a release-date promise.
          </p>

          {checkoutError && (
            <div className="mb-4 border border-[#8A3D3D] bg-[rgba(138,61,61,0.12)] text-[#F6D7D7] rounded-lg px-4 py-3">
              {checkoutError}
            </div>
          )}

          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {supportTiers.map((tier) => (
              <li key={tier.id} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">${tier.amountUsd}</p>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="text-neutral-300 text-sm mt-2">{tier.summary}</p>
                </div>

                <ul className="space-y-2 text-sm text-neutral-400">
                  {tier.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>

                <CTAButton
                  onClick={() => handleSupport(tier.id)}
                  disabled={activeTierId === tier.id}
                  className="mt-auto w-full"
                >
                  {activeTierId === tier.id ? 'Redirecting...' : `Support for $${tier.amountUsd}`}
                </CTAButton>
              </li>
            ))}
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">How development works</h2>
          <ul className="space-y-3">
            {developmentRules.map((item) => (
              <li key={item} className="border border-neutral-800 rounded-lg bg-neutral-950/70 px-4 py-4 text-neutral-300">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Risks and realities</h2>
          <p className="text-neutral-300 mb-3">
            This is an ambitious solo-led project with a long time horizon, real technical difficulty, and a lot of future work still ahead.
            The reason it is worth backing anyway is that the current prototype, docs, and scope strategy are already aligned around one dense real slice first,
            authoritative world truth, visible increments, and proof before scale.
          </p>
          <p className="text-neutral-300">
            The goal here is not to fake certainty. The goal is to fund the long build honestly.
          </p>
        </Section>
      </main>
    </>
  )
}

export default function MMOPage() {
  return (
    <Suspense fallback={<main><Section compact><p className="text-neutral-400">Loading project details...</p></Section></main>}>
      <MMOPageContent />
    </Suspense>
  )
}