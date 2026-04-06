export const metadata = {
  title: 'About – Bruket',
  description: 'Background, principles, and focus of Bruket as an independent product studio run by William Wigertz Wåhlström.',
}

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-6 space-y-8 text-neutral-200">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Bruket</h1>

      <section className="space-y-3">
        <p>Bruket is an independent product studio run by William Wigertz Wåhlström in Sweden.</p>
        <p>It focuses on building clear, practical tools for specific problems, platforms, or marketing layers.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">What Bruket does</h2>
        <p>Bruket builds its own products across four areas:</p>
        <ul className="list-disc list-inside space-y-1 text-base text-neutral-300">
          <li>digital tools like Hyral and KVITT</li>
          <li>publishing and accountability infrastructure like Spegeln</li>
          <li>long-horizon software projects like the unnamed MMO civilization simulation</li>
          <li>physical objects designed internally and produced externally</li>
          <li>selected creative output that sits alongside the product work</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Principles</h2>
        <p>Every product follows a small, fixed set of ideas:</p>
        <ul className="list-disc list-inside space-y-1 text-base text-neutral-300">
          <li>usefulness before features</li>
          <li>clarity over complexity</li>
          <li>individual-first thinking, with no hidden advantages for payment</li>
          <li>minimal, transparent data usage</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">About William</h2>
        <p>My name is William Wigertz Wåhlström. I design and build the products at Bruket, from structure and flows to the final tools people use.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Music and creative work</h2>
        <p>Outside of Bruket I create music as the solo artist "Illa Till Mods" and in the band "Souls In Custody". This work exists alongside Bruket—separate from the core business, but driven by the same focus on intention and craft.</p>
      </section>
    </main>
  )
}
