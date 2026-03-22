'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  details: string
  href: string
}

export default function ProductCard({ title, description, details, href }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 4px 32px #00000020' }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="group border border-neutral-800 bg-neutral-950/80 p-8 flex flex-col gap-4 hover:border-white transition-all"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-neutral-300 font-medium">{description}</p>
      <p className="text-neutral-500 text-sm">{details}</p>
      <Link href={href} className="mt-auto text-neutral-200 font-medium group-hover:underline transition-colors w-max">
        Learn more &rarr;
      </Link>
    </motion.div>
  )
}
