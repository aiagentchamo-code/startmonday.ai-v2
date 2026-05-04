import { createSupabaseAdminClient } from './supabase';

export async function upsertCustomer(data: {
  email: string;
  fullName: string;
  company: string;
  stripeCustomerId: string;
}) {
  const db = createSupabaseAdminClient();
  const { data: customer, error } = await db
    .from('customers')
    .upsert(
      {
        email: data.email,
        full_name: data.fullName,
        company: data.company,
        stripe_customer_id: data.stripeCustomerId,
      },
      { onConflict: 'email' }
    )
    .select('id')
    .single();

  if (error) throw error;
  return customer as { id: string };
}

export async function upsertSubscription(data: {
  customerId: string;
  stripeSubscriptionId: string;
  planKey: string;
  planLabel: string;
  points: number;
  status: string;
  currentPeriodEnd: Date | null;
}) {
  const db = createSupabaseAdminClient();
  const { error } = await db
    .from('subscriptions')
    .upsert(
      {
        customer_id: data.customerId,
        stripe_subscription_id: data.stripeSubscriptionId,
        plan_key: data.planKey,
        plan_label: data.planLabel,
        points: data.points,
        status: data.status,
        current_period_end: data.currentPeriodEnd?.toISOString() ?? null,
      },
      { onConflict: 'stripe_subscription_id' }
    );

  if (error) throw error;
}

export async function updateSubscriptionStatus(
  stripeSubscriptionId: string,
  status: string
) {
  const db = createSupabaseAdminClient();
  const { error } = await db
    .from('subscriptions')
    .update({ status })
    .eq('stripe_subscription_id', stripeSubscriptionId);

  if (error) throw error;
}
