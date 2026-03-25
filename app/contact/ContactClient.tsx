'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

type ContactFormState = {
  email: string
  message: string
}

export default function ContactClient() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState<ContactFormState>({ email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        let errorMessage = 'Something went wrong. Please try again.'

        try {
          const data = await response.json()
          if (data?.error && typeof data.error === 'string') {
            errorMessage = data.error
          }
        } catch {
          // ignore JSON parse errors
        }

        throw new Error(errorMessage)
      }

      setSent(true)
      setForm({ email: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <h1
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        Contact
      </h1>

      <div className="mb-8 text-neutral-400 text-base max-w-md">
        <p><strong>Company name:</strong> Bruket</p>
        <p><strong>Organization number:</strong> Available on request</p>
        <p><strong>Location:</strong> Sweden</p>
      </div>

      {!sent ? (
        <form className="space-y-6 max-w-md" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email" className="block text-neutral-300 font-semibold mb-1">
              Email
            </label>
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
            <label htmlFor="message" className="block text-neutral-300 font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-neutral-900 text-white border border-neutral-800 focus:border-white outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 border border-neutral-800 text-base font-semibold text-neutral-100 bg-transparent transition-colors hover:border-white focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending…' : 'Send'}
          </button>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}
        </form>
      ) : (
        <div
          className="text-green-400 text-lg font-medium"
        >
          Thanks for reaching out. We’ll be in touch.
        </div>
      )}
    </>
  )
}