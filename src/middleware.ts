import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase';

const hasSupabaseConfig =
  !!import.meta.env.SUPABASE_URL && !!import.meta.env.SUPABASE_ANON_KEY;

export const onRequest = defineMiddleware(async (context, next) => {
  if (!hasSupabaseConfig) {
    context.locals.user = null;
    context.locals.supabase = null;

    if (context.url.pathname.startsWith('/dashboard')) {
      return context.redirect('/login');
    }
    return next();
  }

  const supabase = createSupabaseServerClient(context.request, context.cookies);

  // getUser() validates the JWT server-side — never trust getSession() alone.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  context.locals.user = user ?? null;
  context.locals.supabase = supabase;

  if (context.url.pathname.startsWith('/dashboard') && !user) {
    return context.redirect('/login');
  }

  return next();
});
