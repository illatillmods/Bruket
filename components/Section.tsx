import type { HTMLProps, PropsWithChildren } from 'react'
import clsx from 'clsx'

interface SectionProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  compact?: boolean
}

// Section container, now supports 'compact' spacing
export default function Section({ children, compact = false, className, ...props }: SectionProps) {
  return (
    <section
      className={clsx(
        'max-w-3xl mx-auto px-4 sm:px-6 md:px-0',
        compact ? 'py-7 md:py-10 space-y-3' : 'py-12 md:py-16 space-y-5',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
