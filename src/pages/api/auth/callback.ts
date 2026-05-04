import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const code = context.url.searchParams.get('code');

  if (code) {
    const { error } = await context.locals.supabase.auth.exchangeCodeForSession(code);
    if (!error) return context.redirect('/dashboard');
  }

  return context.redirect('/login?error=auth_failed');
};
