import type { ProductCardProps } from '../components/ProductCard'

export type Product = ProductCardProps & { id: string }

export const products: Product[] = [
  {
    id: 'hyral',
    title: '<fix later>',
    oneLiner: '<fix later>',
    forWho: '<fix later>',
    details: '<fix later>',
    href: '/hyral',
  },
  {
    id: 'kvitt',
    title: '<fix later>',
    oneLiner: '<fix later>',
    forWho: '<fix later>',
    details: '<fix later>',
    href: '/kvitt',
  },
]

