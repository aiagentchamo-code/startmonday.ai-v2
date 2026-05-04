import type { APIRoute } from 'astro';
import { sendContactEmail } from '../../lib/mailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ORIGINS = [
  'https://startmonday.ai',
  'http://localhost:4321',
  'http://127.0.0.1:4321',
];

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response(JSON.stringify({ ok: false, error: 'Forbidden.' }), { status: 403 });
  }

  const formData = await request.formData();
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const interest = String(formData.get('interest') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const organization = String(formData.get('organization') ?? '').trim();
  const role = String(formData.get('role') ?? '').trim();
  const privacyAccepted = formData.get('privacyAccepted') === 'on';

  if (!name || !email || !interest || !message || !privacyAccepted) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing required fields.' }), { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid email address.' }), { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, interest, message, organization, role });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error('[contact] Failed to send email:', error);
    return new Response(JSON.stringify({ ok: false, error: 'Could not send message. Please email hello@startmonday.ai directly.' }), { status: 500 });
  }
};
