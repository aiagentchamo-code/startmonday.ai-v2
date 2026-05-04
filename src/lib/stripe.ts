import Stripe from 'stripe';

let stripeClient: Stripe | null = null;

export function getStripeClient() {
  const secretKey = import.meta.env.STRIPE_SECRET_KEY;
  if (!secretKey || typeof secretKey !== 'string' || secretKey.trim() === '') {
    throw new Error('Missing or empty STRIPE_SECRET_KEY environment variable.');
  }
  if (!stripeClient) {
    stripeClient = new Stripe(secretKey, {
      apiVersion: '2024-06-20',
    });
  }
  return stripeClient;
}
