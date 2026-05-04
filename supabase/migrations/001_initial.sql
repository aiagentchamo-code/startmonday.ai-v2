-- Run this in your Supabase project: SQL Editor → New query → Run

-- customers: one row per paying customer, keyed by email
CREATE TABLE IF NOT EXISTS customers (
  id                 UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email              TEXT        UNIQUE NOT NULL,
  full_name          TEXT        NOT NULL DEFAULT '',
  company            TEXT        NOT NULL DEFAULT '',
  stripe_customer_id TEXT        UNIQUE,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS customers_email_idx     ON customers (email);
CREATE INDEX IF NOT EXISTS customers_stripe_id_idx ON customers (stripe_customer_id);

-- subscriptions: one row per Stripe subscription
CREATE TABLE IF NOT EXISTS subscriptions (
  id                      UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id             UUID        NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  stripe_subscription_id  TEXT        UNIQUE NOT NULL,
  plan_key                TEXT        NOT NULL DEFAULT '',
  plan_label              TEXT        NOT NULL DEFAULT '',
  points                  INT         NOT NULL DEFAULT 0,
  status                  TEXT        NOT NULL DEFAULT 'active',
  current_period_end      TIMESTAMPTZ,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS subscriptions_customer_id_idx ON subscriptions (customer_id);
CREATE INDEX IF NOT EXISTS subscriptions_stripe_id_idx   ON subscriptions (stripe_subscription_id);

-- Auto-update updated_at on every subscription write
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS subscriptions_updated_at ON subscriptions;
CREATE TRIGGER subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row-Level Security: each authenticated user sees only their own data
ALTER TABLE customers    ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "customers_select_own"    ON customers;
DROP POLICY IF EXISTS "subscriptions_select_own" ON subscriptions;

CREATE POLICY "customers_select_own" ON customers
  FOR SELECT TO authenticated
  USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "subscriptions_select_own" ON subscriptions
  FOR SELECT TO authenticated
  USING (
    customer_id IN (
      SELECT id FROM customers WHERE email = auth.jwt() ->> 'email'
    )
  );
