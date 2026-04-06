import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { supportTiers } from '../../../lib/supportTiers'

type SupportRequest = {
  tierId?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as SupportRequest | null
    const tier = supportTiers.find((item) => item.id === body?.tierId)

    if (!tier) {
      return NextResponse.json(
        { error: 'Please select a valid support tier.' },
        { status: 400 }
      )
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      console.error('Support checkout is not configured: missing STRIPE_SECRET_KEY')
      return NextResponse.json(
        { error: 'Support checkout is temporarily unavailable.' },
        { status: 500 }
      )
    }

    const stripe = new Stripe(stripeSecretKey)
    const origin = request.headers.get('origin') || new URL(request.url).origin

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      billing_address_collection: 'auto',
      success_url: `${origin}/mmo?support=success&tier=${tier.id}`,
      cancel_url: `${origin}/mmo?support=cancelled&tier=${tier.id}`,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: tier.amountUsd * 100,
            product_data: {
              name: `CivMMO Support - ${tier.name}`,
              description: tier.summary,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        project: 'civmmo',
        tierId: tier.id,
        tierName: tier.name,
      },
    })

    if (!session.url) {
      return NextResponse.json(
        { error: 'Failed to create checkout session.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Unexpected error creating support checkout session:', error)
    return NextResponse.json(
      { error: 'Support checkout is temporarily unavailable.' },
      { status: 500 }
    )
  }
}