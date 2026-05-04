# StartMonday.AI

A SaaS landing page and application built with Astro 5, React 19, Tailwind CSS, Framer Motion, and Lenis smooth scroll. Includes authentication, Stripe subscriptions, and email via Nodemailer.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 5.7 (SSR, Vercel adapter) |
| UI Islands | React 19 + Framer Motion |
| Styling | Tailwind CSS 3.4 |
| Smooth Scroll | Lenis |
| Icons | lucide-react |
| Auth & DB | Supabase (SSR client) |
| Payments | Stripe (checkout, billing portal, webhooks) |
| Email | Nodemailer (SMTP) |
| Deploy | Vercel |

## Quick Start

```bash
npm install
cp .env.example .env
# Fill in your Supabase, Stripe, and SMTP credentials in .env
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Environment Variables

Copy `.env.example` to `.env` and fill in values. See the file for descriptions of each variable.

**Required for core features:**
- `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` — auth, dashboard, DB
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` — payments
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` — transactional email

## Project Structure

```
src/
├── pages/                    # Astro pages & API routes
│   ├── index.astro           # Landing page
│   ├── about-us.astro
│   ├── pricing.astro
│   ├── contact.astro
│   ├── login.astro
│   ├── dashboard.astro       # Auth-protected
│   ├── checkout-success.astro
│   ├── checkout-cancelled.astro
│   ├── privacy-policy.astro
│   ├── cookie-policy.astro
│   ├── impression.astro
│   ├── 404.astro
│   ├── 500.astro
│   └── api/
│       ├── auth/             # login, logout, callback
│       ├── contact.ts
│       ├── subscribe.ts
│       ├── create-checkout-session.ts
│       ├── create-billing-portal-session.ts
│       ├── stripe-webhook.ts
│       └── signup-recommendation.ts
├── components/               # Astro section components
│   ├── SiteHeader.astro
│   ├── SiteFooter.astro
│   ├── HeroBackdrop.astro
│   ├── CTASection.astro
│   ├── FAQItem.astro
│   ├── FounderCard.astro
│   ├── SectionHeading.astro
│   ├── ServiceCard.astro
│   └── StatTile.astro
├── animations/               # React animation components
│   ├── BlurReveal.tsx
│   ├── FloatReveal.tsx
│   ├── HoverLift.tsx
│   ├── ScaleReveal.tsx
│   ├── SlideReveal.tsx
│   └── TextReveal.tsx
├── layouts/
│   └── Layout.astro          # Base HTML layout
├── lib/
│   ├── supabase.ts           # Supabase SSR client
│   ├── db.ts                 # Database helpers
│   ├── stripe.ts             # Stripe client
│   ├── stripePricing.ts      # Price/product helpers
│   ├── subscriptionPlans.ts  # Plan definitions
│   └── mailer.ts             # Nodemailer transporter
├── middleware.ts              # Auth guard (protects /dashboard)
└── *.tsx                      # Shared React UI components
```

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | #F4F9F8 | Page background |
| `surface` | #FFFFFF | Cards |
| `ink` | #0E2420 | Primary text |
| `ink-muted` | #4A6A64 | Secondary text |
| `accent` | #2B7D6D | Primary action |
| `accent-soft` | #DFF0EC | Light accent |
| `warm` | #E06535 | Orange accent |
| `mint` | #5EEAD4 | Teal accent |
| `sun` | #FFD166 | Yellow accent |
| `line` | #D0E8E3 | Dividers |

### Typography
- **Display font**: Plus Jakarta Sans (`font-display`)
- **Body font**: Inter (`font-sans`)
- **H1**: `clamp(2.5rem, 6vw, 5rem)`
- **H2**: `clamp(2rem, 4vw, 3.5rem)`
- **Body**: `1.0625rem` (17px)

## Scripts

```bash
npm run dev       # Start dev server (port 4321)
npm run build     # Production build
npm run preview   # Preview production build
```

## Deployment

Configured for Vercel with `@astrojs/vercel` adapter and `output: 'server'` (full SSR).

```bash
npm install -g vercel
vercel
```

Set all environment variables in Vercel project settings.

## License

This template is provided as-is for the StartMonday.AI project.
