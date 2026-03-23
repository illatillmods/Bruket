import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 mt-24 px-6">
      <div className="max-w-5xl mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
        <div className="font-semibold text-white">Bruket</div>
        <nav className="flex gap-6">
          <Link href="/hyral" className="hover:text-white transition">Hyral</Link>
          <Link href="/kvitt" className="hover:text-white transition">KVITT</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>
        <div>&copy; {new Date().getFullYear()} Bruket</div>
      </div>
      <div
        className="mt-4 text-xs text-neutral-600 md:text-left text-center w-full md:w-auto mx-auto md:mx-0"
        style={{ letterSpacing: '0.01em' }}
      >
        <span className="block md:inline opacity-80">Built in Sweden</span>
      </div>
    </footer>
  )
}
