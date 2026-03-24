import Link from 'next/link'

export default function Footer() {
  return (

    <footer className="relative z-20 mt-24 px-6 backdrop-blur-md bg-black/30 bg-gradient-to-t from-black/50 to-black/20 border-t border-white/5 supports-[backdrop-filter]:bg-black/30">
      <div className="max-w-5xl mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
        <div className="flex flex-col items-center md:items-start">
  <div className="font-semibold text-white">Bruket</div>
</div>
        <nav className="flex gap-6">
  <Link href="/hyral" className="hover:text-white transition">Hyral</Link>
  <Link href="/kvitt" className="hover:text-white transition">KVITT</Link>
  <Link href="/about" className="hover:text-white transition">About</Link>
  <Link href="/contact" className="hover:text-white transition">Contact</Link>
  <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
  <Link href="/terms" className="hover:text-white transition">Terms</Link>
</nav>
        <div>&copy; {new Date().getFullYear()} Bruket</div>
      </div>
      
    </footer>
  )
}
