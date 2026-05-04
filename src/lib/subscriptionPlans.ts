export const subscriptionPlans = {
  starter: {
    label: 'Starter',
    monthlyPrice: '€300',
    unitAmountCents: 30000,
    points: 20,
    envKey: 'STRIPE_PRICE_ID_STARTER',
    lookupKey: 'startmonday_starter_monthly',
  },
  scaler: {
    label: 'Scaler',
    monthlyPrice: '€600',
    unitAmountCents: 60000,
    points: 45,
    envKey: 'STRIPE_PRICE_ID_SCALER',
    lookupKey: 'startmonday_scaler_monthly',
  },
  power: {
    label: 'Power',
    monthlyPrice: '€1,200',
    unitAmountCents: 120000,
    points: 100,
    envKey: 'STRIPE_PRICE_ID_POWER',
    lookupKey: 'startmonday_power_monthly',
  },
} as const;

export type SubscriptionPlanKey = keyof typeof subscriptionPlans;

export function isSubscriptionPlan(value: string): value is SubscriptionPlanKey {
  return value in subscriptionPlans;
}
