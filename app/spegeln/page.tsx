'use client'

import Section from '../../components/Section'
import CTAButton from '../../components/CTAButton'
import { products } from '../../content/products'

const spegeln = products.find(p => p.id === 'spegeln') || { title: '', href: '' }

const systems = [
  {
    title: 'Overvakningsspegeln',
    description:
      'Offentliga, automatiskt uppdaterade dossierer för makthavare med inkomster, fastigheter, bolagsengagemang, domar, disciplinärenden, upphandlingar, donationer och källor i en sammanhängande struktur.',
  },
  {
    title: 'Byrakrati-bombaren',
    description:
      'Massöverklaganden, JO-anmälningar och informationsbegäran mot myndigheter, samordnade med dokumentation, bevisbilagor och tempo nog att skapa faktisk press.',
  },
  {
    title: 'Myndighetsgranskaren & Reverse Surveillance',
    description:
      'Anonyma rapporter, bevis, videor och dokument om myndighetsmissbruk, rättsskandaler och övertramp, prioriterade för granskning och publicering med källskydd och spårbarhet.',
  },
  {
    title: 'Folkets domstol',
    description:
      'Ett offentligt lager för förtroendesignaler, vittnesmål och kopplingar till dokumenterade händelser så att makt inte bara granskas genom sina egna institutioner.',
  },
  {
    title: 'Statens svagheter',
    description:
      'En wiki över lagliga kryphål, byråkratiska genvägar och offentliga taktiker för att utmana makt med struktur, dokumentation och precision.',
  },
]

const guardrails = [
  'All data hämtas från offentliga källor, register och handlingar.',
  'Inga privata adresser, icke-offentliga familjeuppgifter eller olagliga metoder används.',
  'Plattformen är byggd för att skydda visselblåsare och anonymitet med tekniska skydd och tydliga arbetsflöden.',
  'Allt som publiceras ska vara källhänvisat och granskat för att tåla juridisk prövning.',
]

export default function SpegelnPage() {
  return (
    <>
      <main>
        <Section compact>
          <div className="bg-[rgba(95,95,95,0.12)] border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 text-base font-medium">
            <strong>Spegeln är live.</strong> Plattformen finns på <a href="http://spegeln.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">spegeln.org</a>.
          </div>
        </Section>

        <div className="-mt-5" />

        <Section compact>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Sveriges mest kompromisslösa maktgranskare</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{spegeln.title}</h1>
          <p className="text-lg text-neutral-300 mb-4">
            Spegeln är en radikal plattform för total offentlighetsgranskning av makthavare och myndigheter i Sverige. Här samlas,
            korsrefereras och publiceras offentlig information om politiker, poliser, domare och andra personer i maktposition utan pardon,
            utan filter och utan hänsyn till deras status.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-1">Vad Spegeln är till för</h2>
          <p className="text-neutral-300 mb-3">
            Spegeln finns för att göra offentlig makt svårare att gömma. När uppgifter redan är offentliga ska de inte ligga utspridda i
            register, diarier, pdf:er och myndighetsarkiv där bara den uthållige orkar leta. De ska vara sökbara, länksatta, tidsatta och
            obekväma för den som lever på att ingen orkar sätta ihop helheten.
          </p>
        </Section>

        <Section compact>
          <h2 className="text-xl text-white font-semibold mb-2">Vad Spegeln gör</h2>
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
          <h2 className="text-xl text-white font-semibold mb-1">Varför Spegeln finns</h2>
          <p className="text-neutral-300">
            Staten och myndigheter visar ingen nåd mot individen. Spegeln visar ingen nåd mot makten. Om information om makthavare är offentlig
            ska den vara tillgänglig, sökbar och svår att begrava under prestige, byråkrati eller status. Plattformen är byggd för att maximera
            obehag och ansvar för den som styr utan att korsa lagens gränser.
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
          <h2 className="text-xl text-white font-semibold mb-1">Gränsen</h2>
          <p className="text-neutral-300">
            Spegeln bygger på offentlig information, källor som kan granskas och publicering som ska klara motstånd. Ingen privat smygdata, inga
            olagliga genvägar, inga anonyma påminnelser utan underlag. Bara offentlig makt, offentlig dokumentation och maximal exponering av det som redan går att visa.
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