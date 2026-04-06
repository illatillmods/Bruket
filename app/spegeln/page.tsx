'use client'

import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { products } from '../../content/products'

const spegeln = products.find(p => p.id === 'spegeln') || { title: '', href: '' }

const systems = [
  {
    title: 'Overvakningsspegeln',
    description:
      'Offentliga, automatiskt uppdaterade dossierer for makthavare med inkomster, fastigheter, bolagsengagemang, domar, disciplinarenden, upphandlingar, donationer och kallor i en sammanhangen struktur.',
  },
  {
    title: 'Byrakrati-bombaren',
    description:
      'Massoverklaganden, JO-anmalningar och informationsbegaran mot myndigheter, samordnade med dokumentation, bevisbilagor och tempo nog att skapa faktisk press.',
  },
  {
    title: 'Myndighetsgranskaren & Reverse Surveillance',
    description:
      'Anonyma rapporter, bevis, videor och dokument om myndighetsmissbruk, rattskandaler och overtramp, prioriterade for granskning och publicering med kallskydd och sparbarhet.',
  },
  {
    title: 'Folkets domstol',
    description:
      'Ett offentligt lager for fortroendesignaler, vittnesmal och kopplingar till dokumenterade handelser sa att makt inte bara granskas genom sina egna institutioner.',
  },
  {
    title: 'Statens svagheter',
    description:
      'En wiki over lagliga kryphal, byrakratiska genvagar och offentliga taktiker for att utmana makt med struktur, dokumentation och precision.',
  },
]

const guardrails = [
  'All data hamtas fran offentliga kallor, register och handlingar.',
  'Inga privata adresser, icke-offentliga familjeuppgifter eller olagliga metoder anvands.',
  'Plattformen ar byggd for att skydda visselblasare och anonymitet med tekniska skydd och tydliga arbetsfloden.',
  'Allt som publiceras ska vara kallhanvisat och granskat for att tala juridisk provning.',
]

export default function SpegelnPage() {
  return (
    <>
      <main>
        <Section compact>
          <div className="bg-[rgba(95,95,95,0.12)] border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 text-base font-medium">
            <strong>Spegeln ar live.</strong> Plattformen finns pa <a href="http://spegeln.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">spegeln.org</a>.
          </div>
        </Section>

        <div className="-mt-5" />

        <Section compact>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Sveriges mest kompromisslosa maktgranskare</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{spegeln.title}</h1>
          <p className="text-lg text-neutral-300 mb-4">
            Spegeln ar en radikal plattform for total offentlighetsgranskning av makthavare och myndigheter i Sverige. Har samlas,
            korsrefereras och publiceras offentlig information om politiker, poliser, domare och andra personer i maktposition utan pardon,
            utan filter och utan hansyn till deras status.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Vad Spegeln ar till for</h2>
          <p className="text-neutral-300 mb-3">
            Spegeln finns for att gora offentlig makt svarare att gomma. Nar uppgifter redan ar offentliga ska de inte ligga utspridda i
            register, diarier, pdf:er och myndighetsarkiv dar bara den uthallige orkar leta. De ska vara sokbara, lanksatta, tidsatta och
            obekvama for den som lever pa att ingen orkar satta ihop helheten.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">Vad Spegeln gor</h2>
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {systems.map((system) => (
              <li key={system.title} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-1">{system.title}</h3>
                <p className="text-neutral-300 text-sm">{system.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Varfor Spegeln finns</h2>
          <p className="text-neutral-300">
            Staten och myndigheter visar ingen nad mot individen. Spegeln visar ingen nad mot makten. Om information om makthavare ar offentlig
            ska den vara tillganglig, sokbar och svar att begrava under prestige, byrakrati eller status. Plattformen ar byggd for att maximera
            obehag och ansvar for den som styr utan att korsa lagens granser.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">Hur Spegeln arbetar</h2>
          <ul className="space-y-3">
            {guardrails.map((item) => (
              <li key={item} className="border border-neutral-800 rounded-lg bg-neutral-950/70 px-4 py-4 text-neutral-300">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Gransen</h2>
          <p className="text-neutral-300">
            Spegeln bygger pa offentlig information, kallor som kan granskas och publicering som ska klara motstand. Ingen privat smygdata, inga
            olagliga genvagar, inga anonyma paminnelser utan underlag. Bara offentlig makt, offentlig dokumentation och maximal exponering av det som redan gar att visa.
          </p>
        </Section>

        <Section compact>
          <CTAButton as="a" href="http://spegeln.org/" target="_blank" rel="noopener noreferrer">
            Enter spegeln.org
          </CTAButton>
        </Section>
      </main>
    </>
  )
}