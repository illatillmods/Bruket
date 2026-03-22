'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hyral', label: 'Hyral' },
  { href: '/kvitt', label: 'KVITT' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-20 bg-off-black/95 backdrop-blur-sm border-b border-neutral-900">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-6">
        <Link href="/" className="font-bold text-2xl tracking-tight select-none">
          Bruket
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'text-sm transition-colors',
                  pathname === link.href ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white')
                }
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
                {pathname === link.href &&
                  <motion.span
                    className="block h-0.5 bg-white mt-1"
                    layoutId="navUnderline"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
