import type { Metadata } from 'next'
import Section from '../../components/Section'
import ContactClient from '../contact/ContactClient'

export const metadata: Metadata = {
  title: 'Contact – Bruket',
  description: 'Contact page for Bruket. Placeholder details.',
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