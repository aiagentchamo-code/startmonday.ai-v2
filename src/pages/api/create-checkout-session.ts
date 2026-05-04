import type { APIRoute } from 'astro';
import { getStripeClient } from '../../lib/stripe';
import { isSubscriptionPlan, subscriptionPlans } from '../../lib/subscriptionPlans';
import { resolveStripePriceId } from '../../lib/stripePricing';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const fullName = String(formData.get('fullName') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const plan = String(formData.get('plan') ?? '').trim();

    if (!fullName || !email || !plan || !isSubscriptionPlan(plan)) {
      return new Response(JSON.stringify({ ok: false, error: 'Please complete all required fields.' }), { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid email address.' }), { status: 400 });
    }

    const planConfig = subscriptionPlans[plan];
    const stripe = getStripeClient();
    const priceId =
      import.meta.env[planConfig.envKey] ||
      (await resolveStripePriceId(stripe, plan));

    // SITE_URL in .env overrides the built-in SITE for local dev (avoids redirecting to prod)
    const siteUrl = (import.meta.env.SITE_URL ?? import.meta.env.SITE ?? 'https://startmonday.ai').replace(/\/$/, '');

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      success_url: `${siteUrl}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout-cancelled`,
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
      tax_id_collection: { enabled: true },
      metadata: {
        fullName,
        company,
        selectedPlan: plan,
      },
    });

    return new Response(JSON.stringify({ ok: true, url: session.url }), { status: 200 });
  } catch (error) {
    console.error('[create-checkout-session] Stripe error:', error);
    return new Response(JSON.stringify({ ok: false, error: 'Could not create checkout session.' }), { status: 500 });
  }
};
