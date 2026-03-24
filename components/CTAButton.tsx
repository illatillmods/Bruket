'use client'
import { m } from 'framer-motion'
import Link from 'next/link'

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  as?: 'a' | 'button'
  href?: string
  className?: string
}

export default function CTAButton({ children, as = 'button', href, className = '', ...props }: CTAButtonProps) {
  // Unified polish: subtle scale on hover/tap, improved color for accessibility, focus ring, more consistent radius & shadow
  const motionProps = {
    whileTap: { scale: 0.97 },
    whileHover: { scale: 1.03, backgroundColor: '#222', color: '#fff', boxShadow: '0 2px 12px 0 #0003' },
  };
  
  if (as === 'a' && href) {
    const { id, tabIndex, 'aria-label': ariaLabel } = props;
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    const isHash = href.startsWith('#');
    const isExternal = href.startsWith('http');

    // Internal links use Next.js Link
    if (isInternal) {
      return (
        <Link href={href} legacyBehavior passHref>
          <m.a
            className={`px-6 py-3 rounded-lg border border-neutral-800 text-base font-semibold text-neutral-100 bg-neutral-900/80 shadow-sm transition duration-150 ease-out hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 inline-block cursor-pointer ${className}`}
            id={id}
            tabIndex={tabIndex}
            aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
            {...motionProps}
          >
            {children}
          </m.a>
        </Link>
      );
    }
    // External and hash links
    return (
      <m.a
        href={href}
        className={`px-6 py-3 rounded-lg border border-neutral-800 text-base font-semibold text-neutral-100 bg-neutral-900/80 shadow-sm transition duration-150 ease-out hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 inline-block cursor-pointer ${className}`}
        id={id}
        tabIndex={tabIndex}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        {...motionProps}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </m.a>
    )
  }
  // Button
  const { id, tabIndex, type, 'aria-label': ariaLabel } = props;
  return (
    <m.button
      className={`px-6 py-3 rounded-lg border border-neutral-800 text-base font-semibold text-neutral-100 bg-neutral-900/80 shadow-sm transition duration-150 ease-out hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${className}`}
      id={id}
      tabIndex={tabIndex}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      type={type}
      {...motionProps}
    >
      {children}
    </m.button>
  );
}

