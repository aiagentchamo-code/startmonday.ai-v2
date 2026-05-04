import type { APIRoute } from 'astro';
import { sendSubscribeNotification } from '../../lib/mailer';

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
  const email = String(formData.get('email') ?? '').trim();

  if (!email) {
    return new Response(JSON.stringify({ ok: false, error: 'Email is required.' }), { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid email address.' }), { status: 400 });
  }

  try {
    await sendSubscribeNotification(email);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error('[subscribe] Failed to send notification:', error);
    return new Response(JSON.stringify({ ok: false, error: 'Could not process subscription. Please try again.' }), { status: 500 });
  }
};
