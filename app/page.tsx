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
        <Section>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-center md:text-left"
          >
            Bruket.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.86, y: 0 }}
            transition={{ delay: 0.13, duration: 0.7 }}
            className="text-base sm:text-lg md:text-2xl text-neutral-300 mb-8 max-w-lg text-center md:text-left mx-auto md:mx-0"
          >
            We build tools that are actually useful.
          </motion.p>

          <CTAButton as="a" href="#products" className="mt-2">
            View products
          </CTAButton>
        </Section>

        <Section id="products">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

        <Section>
          <div className="flex flex-col gap-5 text-center md:text-left">
            <p className="text-lg md:text-xl font-medium text-white">Less features. More function.</p>
            <p className="text-lg md:text-xl font-medium text-white">Built for use, not attention.</p>
            <p className="text-lg md:text-xl font-medium text-white">Clarity over complexity.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}