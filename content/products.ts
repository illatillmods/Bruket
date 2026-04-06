import type { ProductCardProps } from '../components/ProductCard'

export type Product = ProductCardProps & { id: string }

export const products: Product[] = [
  {
    id: 'hyral',
    title: 'Hyral',
    oneLiner: 'Renter-first application tool for clear, structured outreach.',
    forWho: 'For people looking for rental housing who want clarity and control.',
    details: 'Generate a clean rental application letter from structured input and see a filtered list of landlord contacts for a chosen city. You copy the email batches into your own email client and send them yourself.',
    href: '/hyral',
  },
  {
    id: 'kvitt',
    title: 'KVITT',
    oneLiner: 'See exactly what you spend money on, item by item.',
    forWho: 'For people who care about habits and behavior, not just monthly totals.',
    details: 'Scan receipts and track spending at the product level: what you buy, how often, and which habits cost the most. No budgets or categories—just clear data about your behavior.',
    href: '/kvitt',
  },
  {
    id: 'spegeln',
    title: 'Spegeln',
    oneLiner: 'Public-interest scrutiny infrastructure for power in Sweden.',
    forWho: 'For people who want public records, accountability, and source-linked oversight tools in one place.',
    details: 'A platform for organizing public information about power holders and institutions, linking documents, timelines, reports, and evidence while staying inside legal boundaries.',
    href: '/spegeln',
  },
  {
    id: 'mmo',
    title: 'Unnamed MMO',
    oneLiner: 'A lifelong civilization-simulation MMO project.',
    forWho: 'For players who want logistics, institutions, trade, conflict, and high agency inside a living world.',
    details: 'An emergent planetary MMO where players enter an already functioning civilization and reshape it through infrastructure, finance, research, organizations, and conflict.',
    href: '/mmo',
  },
]

