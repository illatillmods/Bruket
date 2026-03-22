'use client'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import ProductCard from '../components/ProductCard'
import CTAButton from '../components/CTAButton'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Bruket.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.86, y: 0 }}
            transition={{ delay: 0.13, duration: 0.7 }}
            className="text-lg md:text-2xl text-neutral-300 mb-8 max-w-lg"
          >
            We build tools that are actually useful.
          </motion.p>
          <CTAButton as="a" href="#products" className="mt-2">
            View products
          </CTAButton>
        </Section>

        {/* Products */}
        <Section id="products">
          <div className="grid md:grid-cols-2 gap-8">
            <ProductCard
              title="Hyral"
              description="Get apartments faster."
              details="Aggregates listings and surfaces opportunities early."
              href="/hyral"
            />
            <ProductCard
              title="KVITT"
              description="Understand what you actually spend."
              details="Receipt scanning, item-level insights, habit tracking."
              href="/kvitt"
            />
          </div>
        </Section>

        {/* Philosophy */}
        <Section>
          <div className="flex flex-col gap-5">
            <p className="text-xl font-medium text-white">Less features. More function.</p>
            <p className="text-xl font-medium text-white">Built for use, not attention.</p>
            <p className="text-xl font-medium text-white">Clarity over complexity.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

