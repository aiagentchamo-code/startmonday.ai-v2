import type Stripe from 'stripe';
import type { SubscriptionPlanKey } from './subscriptionPlans';
import { subscriptionPlans } from './subscriptionPlans';

export async function resolveStripePriceId(
  stripe: Stripe,
  planKey: SubscriptionPlanKey,
) {
  const plan = subscriptionPlans[planKey];

  const existingByLookup = await stripe.prices.list({
    lookup_keys: [plan.lookupKey],
    active: true,
    limit: 1,
  });

  if (existingByLookup.data[0]?.id) {
    return existingByLookup.data[0].id;
  }

  const product = await stripe.products.create({
    name: `StartMonday+ ${plan.label}`,
    description: `${plan.points} StartPoints per month`,
    metadata: {
      planKey,
      points: String(plan.points),
    },
  });

  const price = await stripe.prices.create({
    currency: 'eur',
    unit_amount: plan.unitAmountCents,
    recurring: { interval: 'month' },
    product: product.id,
    lookup_key: plan.lookupKey,
    metadata: {
      planKey,
    },
  });

  return price.id;
}
