import { PropsWithChildren } from 'react'

export default function Section({ children, ...props }: PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6 md:px-0" {...props}>
      {children}
    </section>
  )
}
