import type { APIRoute } from 'astro';

export const POST: APIRoute = async (context) => {
  await context.locals.supabase.auth.signOut();
  return context.redirect('/');
};
