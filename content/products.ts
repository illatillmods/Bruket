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
    oneLiner: 'An uncompromising platform for making Swedish power uncomfortable.',
    forWho: 'For people who want public records, source-linked scrutiny, and tools built to pressure power instead of protecting it.',
    details: 'Spegeln collects, cross-references, and publishes public information about power holders and institutions so status, bureaucracy, and distance stop working as cover.',
    href: '/spegeln',
  },
  {
    id: 'mmo',
    title: 'Unnamed MMO',
    oneLiner: 'A proof-first civilization MMO built around one dense, real slice.',
    forWho: 'For players who want cities, logistics, institutions, trade, and leverage instead of a blank survival reset.',
    details: 'The current direction is grounded in a Confluence Basin prototype with hauling, a flatbed lane, public boards, an atlas, archives, compliance surfaces, and other connected systems.',
    href: '/mmo',
  },
]

