export const metadata = {
  title: 'Terms & Conditions – Bruket',
  description: 'Basic terms for using Bruket’s website and early-stage products.'
}

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-6 space-y-6 text-neutral-200">
      <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>

      <p>
        These terms describe the basic conditions for using this website and Bruket’s early-stage products, including Hyral and KVITT.
        By accessing or using the site, you agree to these terms.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. No guarantees</h2>
        <p>
          Bruket provides information, tools, and experimental products on an “as is” basis. No guarantees are made regarding
          availability, accuracy, or suitability for any specific purpose.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. No housing or financial advice</h2>
        <p>
          Hyral does not find apartments or guarantee access to housing. KVITT does not provide financial advice or promise financial
          outcomes. Both tools are intended to give structure and clarity; decisions and results remain your responsibility.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Your responsibility</h2>
        <p>
          You are responsible for how you use the information and tools provided. This includes all communication with third parties,
          such as landlords, and any financial or personal decisions you make.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Acceptable use</h2>
        <p>
          You agree not to misuse the site or products, including but not limited to attempting to break security, scrape data in
          unreasonable ways, or use the tools for unlawful activity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Changes to products and terms</h2>
        <p>
          Products, features, and these terms may change over time. When terms are updated, the new version will be published on this
          page with a revised date. Continued use of the site after changes means you accept the updated terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Contact</h2>
        <p>
          If you have questions about these terms, contact Bruket using the details on the contact page.
        </p>
      </section>
    </main>
  )
}
