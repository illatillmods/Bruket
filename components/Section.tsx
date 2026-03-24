import type { HTMLProps, PropsWithChildren } from 'react'

// Section container with vertical rhythm polish
export default function Section({ children, ...props }: PropsWithChildren & HTMLProps<HTMLDivElement>) {
  return (
    <section className="max-w-3xl mx-auto py-12 md:py-16 px-4 sm:px-6 md:px-0 space-y-5" {...props}>
      {children}
    </section>
  )
}
