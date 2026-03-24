import type { Metadata } from 'next'
import Section from '../../components/Section'
import ContactClient from '../contact/ContactClient'

export const metadata: Metadata = {
  title: 'Contact – Bruket',
  description: 'Contact Bruket about products, collaborations, or general questions.',
}

export default function ContactPage() {
  return (
    <main>
      <Section>
        <ContactClient />
      </Section>
    </main>
  )
}