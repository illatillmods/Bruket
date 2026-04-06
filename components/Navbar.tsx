'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { m } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hyral', label: 'Hyral' },
  { href: '/kvitt', label: 'KVITT' },
  { href: '/spegeln', label: 'Spegeln' },
  { href: '/mmo', label: 'Unnamed MMO' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-20 backdrop-blur-md bg-black/10 bg-gradient-to-b from-black/30 to-black/0 border-b border-white/5 supports-[backdrop-filter]:bg-black/10">
      <div className="max-w-5xl mx-auto flex items-center gap-4 h-16 px-6">
        <Link href="/" className="font-bold text-2xl tracking-tight select-none shrink-0">
          Bruket
        </Link>
        <div className="min-w-0 flex-1">
          <ul className="flex items-center justify-end gap-4 md:gap-6 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
                    <m.span
                      className="block h-0.5 bg-white mt-1"
                      layoutId="navUnderline"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
