export const metadata = {
  title: 'Privacy Policy – Bruket',
  description: 'Information about how Bruket handles personal data on this site and in its products.'
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-6 space-y-6 text-neutral-200">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

      <p>
        This page explains how Bruket handles personal data in connection with this website and related products such as Hyral, KVITT,
        Spegeln, and other experimental Bruket projects.
        The goal is simple: collect as little data as possible, use it only for clear purposes, and never sell it.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Data you provide directly</h2>
        <p>
          If you contact Bruket via a form or email, you may share your email address and any information you include in your message.
          This data is used only to respond to you and is not used for marketing lists unless you explicitly ask for it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Data collected automatically</h2>
        <p>
          Basic technical information may be collected when you use the site, such as IP address, browser type, and timestamps.
          This is standard server logging used for security, reliability, and high-level usage understanding.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Cookies and analytics</h2>
        <p>
          Bruket aims to keep tracking minimal. If analytics or performance tools are used, they are limited to aggregate usage patterns
          and are not used to build profiles or sell data to third parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Product-specific data</h2>
        <p>
          Data handling can vary by product. Some tools are designed around minimal session-based retention, while others may need
          limited storage for submissions, publication workflows, or account-related functionality. In all cases, data is used only for
          the product's stated purpose and is not sold or reused for unrelated purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Data sharing</h2>
        <p>
          Personal data is not sold or rented. Limited sharing may occur with infrastructure providers (for example hosting or email
          services) strictly to operate the service. These partners are required to handle data securely.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Retention</h2>
        <p>
          Personal data is kept only for as long as necessary for the purpose it was collected. After that, it is deleted or anonymised
          where reasonably possible.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Your choices</h2>
        <p>
          You can request access to, correction of, or deletion of personal data related to you. To do this, contact Bruket via the
          contact page on this site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Updates to this policy</h2>
        <p>
          This policy may be updated over time as products evolve. When changes are made, the updated version will be published on this
          page with a revised date.
        </p>
      </section>
    </main>
  )
}
