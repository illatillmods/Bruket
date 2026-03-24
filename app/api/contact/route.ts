import { NextResponse } from 'next/server'

const TO_EMAIL = 'william@bruket.co'

function isValidEmail(value: string): boolean {
  return /.+@.+\..+/.test(value)
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null) as
      | { email?: string; message?: string }
      | null

    const email = body?.email?.trim()
    const message = body?.message?.trim()

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.CONTACT_FROM_EMAIL

    if (!apiKey || !fromEmail) {
      console.error('Contact form is not configured: missing RESEND_API_KEY or CONTACT_FROM_EMAIL')
      return NextResponse.json(
        { error: 'Contact form is temporarily unavailable. Please try again later.' },
        { status: 500 }
      )
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [TO_EMAIL],
        reply_to: email,
        subject: 'New contact message from bruket.co',
        text: `New message from the bruket.co contact form.\n\nFrom: ${email}\n\n${message}`,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text().catch(() => '')
      console.error('Failed to send contact email via Resend:', resendResponse.status, errorText)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Unexpected error in contact route:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
