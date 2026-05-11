import type { APIRoute } from 'astro';
import { getStripeClient } from '../../lib/stripe';
import { subscriptionPlans } from '../../lib/subscriptionPlans';
import {
  sendSubscriptionConfirmation,
  sendSubscriptionInternalNotification,
  sendPaymentFailedNotification,
  sendCancellationNotification,
} from '../../lib/mailer';
import { upsertCustomer, upsertSubscription, updateSubscriptionStatus } from '../../lib/db';

export const ALL: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed.', { status: 405 });
  }

  const sig = request.headers.get('stripe-signature');
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return new Response('Missing signature or webhook secret.', { status: 400 });
  }

  let event;
  try {
    const body = await request.text();
    const stripe = getStripeClient();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('[stripe-webhook] Signature verification failed:', err);
    return new Response('Webhook signature verification failed.', { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const name = session.metadata?.fullName ?? '';
        const email = session.customer_email ?? '';
        const company = session.metadata?.company ?? '';
        const planKey = session.metadata?.selectedPlan ?? '';
        const plan = planKey in subscriptionPlans
          ? subscriptionPlans[planKey as keyof typeof subscriptionPlans]
          : null;
        const planLabel = plan?.label ?? planKey;
        const points = plan?.points ?? 0;
        const stripeCustomerId = typeof session.customer === 'string'
          ? session.customer
          : (session.customer as { id: string } | null)?.id ?? '';
        const stripeSubscriptionId = typeof session.subscription === 'string'
          ? session.subscription
          : (session.subscription as { id: string } | null)?.id ?? '';

        if (email && stripeCustomerId) {
          const customer = await upsertCustomer({ email, fullName: name, company, stripeCustomerId });

          if (stripeSubscriptionId) {
            const stripe = getStripeClient();
            const sub = await stripe.subscriptions.retrieve(stripeSubscriptionId);
            await upsertSubscription({
              customerId: customer.id,
              stripeSubscriptionId,
              planKey,
              planLabel,
              points,
              status: sub.status,
              currentPeriodEnd: new Date(sub.current_period_end * 1000),
            });
          }

          await Promise.all([
            sendSubscriptionConfirmation(name, email, planLabel, points),
            sendSubscriptionInternalNotification(name, email, planLabel),
          ]);
        }
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        const email = typeof invoice.customer_email === 'string' ? invoice.customer_email : '';
        const subId = typeof invoice.subscription === 'string'
          ? invoice.subscription
          : (invoice.subscription as { id: string } | null)?.id ?? '';

        if (subId) await updateSubscriptionStatus(subId, 'past_due');
        if (email) await sendPaymentFailedNotification(email);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        await updateSubscriptionStatus(subscription.id, 'canceled');

        const stripe = getStripeClient();
        const customerId = typeof subscription.customer === 'string'
          ? subscription.customer
          : subscription.customer.id;
        const customer = await stripe.customers.retrieve(customerId);
        if (!customer.deleted && customer.email) {
          await sendCancellationNotification(customer.email);
        }
        break;
      }

      default:
        break;
    }
  } catch (err) {
    // Log handler errors but return 200 — Stripe should not retry for our own failures.
    console.error(`[stripe-webhook] Handler error for ${event.type}:`, err);
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
