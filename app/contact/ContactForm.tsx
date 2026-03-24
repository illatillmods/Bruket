"use client"
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <div className="mb-8 text-neutral-400 text-base max-w-md">
        <p><strong>Company name:</strong> &lt;add company name&gt;</p>
        <p><strong>Organization number:</strong> &lt;add org number&gt;</p>
        <p><strong>Location:</strong> &lt;add city&gt;, Sweden</p>
      </div>
      {!sent ? (
        <form className="space-y-6 max-w-md" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-neutral-300 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-neutral-900 text-white border border-neutral-800 focus:border-white outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-neutral-300 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-neutral-900 text-white border border-neutral-800 focus:border-white outline-none resize-none"
            />
          </div>
          <button type="submit" className="px-6 py-3 border border-neutral-800 text-base font-semibold text-neutral-100 bg-transparent transition-colors hover:border-white focus:outline-none">
            Send
          </button>
        </form>
      ) : (
        <div className="text-green-400 text-lg font-medium">
          Thanks for reaching out. We’ll be in touch.
        </div>
      )}
    </>
  )
}
