import type { APIRoute } from 'astro';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async (context) => {
  const formData = await context.request.formData();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return context.redirect('/login?error=invalid_email');
  }

  const supabase = context.locals.supabase;
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${import.meta.env.SITE_URL}/api/auth/callback`,
      shouldCreateUser: true,
    },
  });

  if (error) {
    console.error('[auth/login] OTP error:', error.message);
    return context.redirect('/login?error=send_failed');
  }

  return context.redirect('/login?sent=1');
};
