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
  const motionProps = {
    whileTap: { scale: 0.98 },
    whileHover: { backgroundColor: '#202020', color: '#fff' },
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
            className={`px-6 py-3 border border-neutral-800 text-base font-semibold text-neutral-100 bg-transparent transition-colors hover:border-white focus:outline-none inline-block cursor-pointer ${className}`}
            id={id}
            tabIndex={tabIndex}
            aria-label={ariaLabel}
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
        className={`px-6 py-3 border border-neutral-800 text-base font-semibold text-neutral-100 bg-transparent transition-colors hover:border-white focus:outline-none inline-block cursor-pointer ${className}`}
        id={id}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
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
      className={`px-6 py-3 border border-neutral-800 text-base font-semibold text-neutral-100 bg-transparent transition-colors hover:border-white focus:outline-none ${className}`}
      id={id}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      type={type}
      {...motionProps}
    >
      {children}
    </m.button>
  );
}

