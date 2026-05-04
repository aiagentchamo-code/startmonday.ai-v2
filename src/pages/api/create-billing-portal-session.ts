import type { APIRoute } from 'astro';
import { getStripeClient } from '../../lib/stripe';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const customerId = String(formData.get('customerId') ?? '').trim();
    if (!customerId) {
      return new Response(JSON.stringify({ ok: false, error: 'Customer ID is required.' }), { status: 400 });
    }

    const stripe = getStripeClient();

    // Use the configured site URL to prevent open-redirect via spoofed Origin header
    const siteUrl = (import.meta.env.SITE ?? 'https://startmonday.ai').replace(/\/$/, '');

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${siteUrl}/pricing`,
    });

    return new Response(JSON.stringify({ ok: true, url: session.url }), { status: 200 });
  } catch (error) {
    console.error('[create-billing-portal-session] Stripe error:', error);
    return new Response(JSON.stringify({ ok: false, error: 'Could not create billing portal session.' }), { status: 500 });
  }
};
