import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const code = context.url.searchParams.get('code');

  if (!code || code.length > 1000) {
    return context.redirect('/login?error=auth_failed');
  }

  try {
    const { error } = await context.locals.supabase.auth.exchangeCodeForSession(code);
    if (!error) return context.redirect('/dashboard');
  } catch (err) {
    console.error('[auth/callback] Code exchange failed:', err);
  }

  return context.redirect('/login?error=auth_failed');
};
