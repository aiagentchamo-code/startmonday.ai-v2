# CLAUDE.md — StartMonday.AI

## Project

SaaS landing page + app. Astro 5 SSR with React islands, deployed on Vercel.

## Stack

- **Framework**: Astro 5.7 (`output: 'server'`, `@astrojs/vercel` adapter)
- **UI**: React 19 islands, Framer Motion animations, Lenis smooth scroll
- **Styling**: Tailwind CSS 3.4 with custom tokens in `tailwind.config.js`
- **Auth/DB**: Supabase SSR (`src/lib/supabase.ts`), middleware guards `/dashboard`
- **Payments**: Stripe checkout + webhooks (`src/lib/stripe.ts`)
- **Email**: Nodemailer SMTP (`src/lib/mailer.ts`)

## Commands

```bash
npm run dev       # Dev server on :4321
npm run build     # Production build
npm run preview   # Preview build
```

## Key Conventions

- Astro components in `src/components/*.astro`, React components in `src/*.tsx` and `src/animations/*.tsx`
- Pages in `src/pages/`, API routes in `src/pages/api/`
- Server-side env vars via `import.meta.env.VAR_NAME`
- Middleware in `src/middleware.ts` runs Supabase `getUser()` on every request
- Layout in `src/layouts/Layout.astro`

## Environment

All required env vars are documented in `.env.example`. The Astro config (`astro.config.mjs`) warns at startup if critical vars are missing.
