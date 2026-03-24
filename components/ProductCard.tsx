'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import type { MotionProps } from 'framer-motion'

export interface ProductCardProps {
  title: string
  oneLiner: string
  forWho: string
  details: string
  href: string
}

const cardHover: MotionProps = {
  whileHover: { y: -6, boxShadow: '0 4px 32px #00000020' },
  transition: { type: 'spring', stiffness: 250, damping: 20 },
}

export default function ProductCard({
  title,
  oneLiner,
  forWho,
  details,
  href,
}: ProductCardProps) {
  return (
    <m.div
      {...cardHover}
      className="group border border-neutral-800 bg-neutral-950/80 p-6 sm:p-8 flex flex-col gap-4 hover:border-white transition-all rounded-lg min-w-0"
    >
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
      <p className="text-neutral-300 font-medium">{oneLiner}</p>
      <p className="text-sm text-cyan-400">{forWho}</p>
      <p className="text-neutral-500 text-sm">{details}</p>

      <Link
        href={href}
        className="mt-auto text-neutral-200 font-medium group-hover:underline transition-colors w-max"
      >
        Learn more &rarr;
      </Link>
    </m.div>
  )
}