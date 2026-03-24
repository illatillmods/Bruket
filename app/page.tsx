'use client'
import Section from '../components/Section'
import ProductCard from '../components/ProductCard'
import CTAButton from '../components/CTAButton'
import Hero from "../components/sections/Hero";
import { motion } from 'framer-motion'
import { fadeUp, transitionDefault } from '../lib/motion'
import { homeContent } from '../content/home'
import { products } from '../content/products'

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Section>
          <motion.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={transitionDefault}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-center md:text-left"
          >
            {homeContent.headline}
          </motion.h1>
          <motion.p
            initial={fadeUp.initial}
            animate={{ opacity: 0.86, y: 0 }}
            transition={{ ...transitionDefault, delay: 0.13 }}
            className="text-base sm:text-lg md:text-2xl text-neutral-300 mb-8 max-w-lg text-center md:text-left mx-auto md:mx-0"
          >
            {homeContent.subheadline}
          </motion.p>
          <CTAButton as="a" href="#products" className="mt-2">
            {homeContent.cta}
          </CTAButton>
        </Section>

        {/* Problem / Reality Section */}
        <Section>
          <h2 className="text-2xl font-bold mb-2">{homeContent.problemHeading}</h2>
          <div className="flex flex-col gap-2 text-neutral-300 text-lg">
            {homeContent.problemLines?.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </Section>

        {/* Product Cards Section */}
        <Section id="products">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.10, ease: 'easeOut' }}
              >
                <ProductCard
                  title={product.title}
                  oneLiner={product.oneLiner}
                  forWho={product.forWho}
                  details={product.details}
                  href={product.href}
                />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Why this exists */}
        <Section>
          <h2 className="text-2xl font-bold mb-4" id="why-this-exists">{homeContent.whyHeading}</h2>
          <ul className="space-y-2">
            {homeContent.whyBullets?.map((item, i) => (
              <li key={i} className="font-bold text-white text-lg">{item}</li>
            ))}
          </ul>
        </Section>

        {/* System thinking section */}
        <Section>
          <h2 className="text-2xl font-bold mb-4" id="system-thinking">{homeContent.systemThinkingHeading}</h2>
          <p className="text-neutral-300 text-lg mb-2">{homeContent.systemThinkingText}</p>
        </Section>

        {/* Email capture section */}
        <Section>
          <h2 className="text-xl font-bold mb-2" id="email-capture">{homeContent.emailCaptureHeading}</h2>
          <form className="flex flex-col sm:flex-row gap-3 items-center max-w-md">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-950/80 text-base text-white outline-none"
              disabled
            />
            <CTAButton className="w-full sm:w-auto" disabled>{homeContent.emailCaptureButton}</CTAButton>
          </form>
        </Section>

        {/* Final bottom CTA */}
        <Section>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold text-white text-center">{homeContent.finalCtaHeading}</h2>
            <CTAButton as="a" href="#products" className="w-max">{homeContent.finalCtaButton}</CTAButton>
          </div>
        </Section>

      </main>
    </>
  )
}