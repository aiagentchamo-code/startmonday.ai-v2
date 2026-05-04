import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// Warn at startup if critical environment variables are missing.
const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
const missingEnvVars = requiredEnvVars.filter((k) => !process.env[k]);
if (missingEnvVars.length > 0) {
  console.warn(
    `\n[startmonday.ai] Missing environment variables: ${missingEnvVars.join(', ')}\n` +
    `  Contact form and subscribe emails will fail at runtime.\n` +
    `  Copy .env.example to .env and fill in the SMTP fields.\n`
  );
}

const supabaseVars = ['SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY'];
const missingSupabase = supabaseVars.filter((k) => !process.env[k] || process.env[k]?.startsWith('your-'));
if (missingSupabase.length > 0) {
  console.warn(
    `\n[startmonday.ai] Missing Supabase variables: ${missingSupabase.join(', ')}\n` +
    `  Auth, dashboard, and webhook DB persistence will not work.\n` +
    `  Create a project at https://supabase.com and fill in .env.\n` +
    `  Then run supabase/migrations/001_initial.sql in the SQL Editor.\n`
  );
}

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn(
    '\n[startmonday.ai] Missing STRIPE_SECRET_KEY — subscription checkout will fail at runtime.\n'
  );
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  console.warn(
    '\n[startmonday.ai] Missing STRIPE_WEBHOOK_SECRET — webhook signature verification will fail.\n' +
    '  Run: stripe listen --forward-to localhost:4321/api/stripe-webhook\n' +
    '  then copy the signing secret into .env as STRIPE_WEBHOOK_SECRET.\n'
  );
}

export default defineConfig({
  site: 'https://startmonday.ai',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { host: true },
});
