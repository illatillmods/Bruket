'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  as?: 'a' | 'button'
  href?: string
  className?: string
}

export default function CTAButton({ children, as = 'button', href, className = '', ...props }: CTAButtonProps) {
  if (as === 'a' && href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          whileTap={{ scale: 0.98 }}
          whileHover={{ backgroundColor: '#202020', color: '#fff' }}
          className={`px-6 py-3 border border-neutral-800 text-base font-semibold text-neutral-100 bg-transparent transition-colors hover:border-white focus:outline-none inline-block cursor-pointer ${className}`}
          {...(props as any)}
        >
          {children}
        </motion.a>
      </Link>
    )
  }
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ backgroundColor: '#202020', color: '#fff' }}
      className={`px-6 py-3 border border-neutral-800 text-base font-semibold text-neutral-100 bg-transparent transition-colors hover:border-white focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
