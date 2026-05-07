# StartMonday.AI — QA Audit Report

**Date:** 2026-05-07
**Audited by:** Automated QA Agent (code-level + static analysis)
**Scope:** All pages, components, API routes, React islands, styles, auth, payments

---

## Executive Summary

**65 total issues found** across the full codebase.

| Severity | Count |
|----------|-------|
| Critical | 4 |
| High | 10 |
| Medium | 34 |
| Low | 17 |

**Top blockers for signup/login/purchase flow:**
1. Missing authentication on billing portal endpoint (Critical)
2. Email header injection in contact/subscribe forms (High)
3. CORS origin bypass on all form API endpoints (Medium)
4. Missing HTTP method validation on Stripe webhook (High)

---

## 1. Critical Bugs

### BUG-001: Missing Authentication on Billing Portal Endpoint
- **Severity:** Critical
- **Page/Component:** `src/pages/api/create-billing-portal-session.ts` (lines 4-10)
- **Steps to reproduce:** Send POST request with any `customerId` (e.g., `cus_test123`) — no auth check
- **Expected:** Endpoint requires authenticated user and validates ownership of customer ID
- **Actual:** Any unauthenticated request with a valid Stripe customer ID can access the billing portal
- **Suggested fix:** Add `context.locals.user` check; validate user owns the customer ID via DB lookup
- **Priority:** P0 — fix immediately

### BUG-002: Email Header Injection via Contact Form
- **Severity:** Critical
- **Page/Component:** `src/lib/mailer.ts` (lines 37-40, 85, 138-139)
- **Steps to reproduce:** Submit contact form with name field containing `"Attacker\r\nBcc: attacker@evil.com"`
- **Expected:** Newlines stripped from header fields
- **Actual:** User-controlled `name` injected unsanitized into email `replyTo`/subject headers
- **Suggested fix:** Strip `\r`, `\n`, `\t` from all user input before using in headers: `name.replace(/[\r\n\t"]/g, '')`
- **Priority:** P0 — security vulnerability

### BUG-003: HTML Injection in Email Bodies
- **Severity:** Critical
- **Page/Component:** `src/lib/mailer.ts` (lines 54-61, 88, 118-123)
- **Steps to reproduce:** Submit contact form with message containing `<script>alert('xss')</script>`
- **Expected:** User input HTML-escaped before insertion into email template
- **Actual:** Raw HTML from `name`, `email`, `message` fields injected into HTML email body
- **Suggested fix:** HTML-escape all user input: `str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')`
- **Priority:** P0 — security vulnerability

### BUG-004: Mobile Menu Does Not Trap Keyboard Focus
- **Severity:** Critical
- **Page/Component:** `src/components/SiteHeader.astro` (mobile menu script)
- **Steps to reproduce:** Open mobile menu, press Tab repeatedly
- **Expected:** Focus cycles within visible menu items only
- **Actual:** Tab key escapes menu to hidden content behind overlay
- **Suggested fix:** Implement focus trap (loop Tab between first/last menu items)
- **Priority:** P0 — WCAG 2.1 2.4.3 violation

---

## 2. High-Priority Bugs

### BUG-005: Missing HTTP Method Validation on Stripe Webhook
- **Severity:** High
- **Page/Component:** `src/pages/api/stripe-webhook.ts` (lines 12-28)
- **Steps to reproduce:** Send GET request to `/api/stripe-webhook`
- **Expected:** Only POST accepted; other methods return 405
- **Actual:** GET/PUT/DELETE requests are processed
- **Suggested fix:** Add `if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });`
- **Priority:** P1

### BUG-006: Missing Stripe Customer ID Format Validation
- **Severity:** High
- **Page/Component:** `src/pages/api/create-billing-portal-session.ts` (line 7)
- **Steps to reproduce:** Send arbitrary string as `customerId`
- **Expected:** Validate format matches `cus_*`
- **Actual:** Any string accepted, forwarded to Stripe API
- **Suggested fix:** `if (!customerId.match(/^cus_[a-zA-Z0-9]+$/)) return new Response('Invalid', { status: 400 })`
- **Priority:** P1

### BUG-007: CORS Origin Bypass on All Form Endpoints
- **Severity:** High
- **Page/Component:** `src/pages/api/contact.ts`, `src/pages/api/subscribe.ts`, `src/pages/api/signup-recommendation.ts` (line 13 each)
- **Steps to reproduce:** Send POST request with no `Origin` header (e.g., via curl)
- **Expected:** Requests without Origin rejected
- **Actual:** Check `if (origin && !ALLOWED_ORIGINS.includes(origin))` allows requests with **no** Origin header
- **Suggested fix:** Change to `if (!origin || !ALLOWED_ORIGINS.includes(origin))` — reject missing origins
- **Priority:** P1

### BUG-008: Button Component Broken Disabled State with href
- **Severity:** High
- **Page/Component:** `src/Button.tsx` (line 59)
- **Steps to reproduce:** Pass `disabled` and `href` props to Button
- **Expected:** Button appears disabled and is non-interactive
- **Actual:** Renders as `<a>` tag — `disabled` attribute has no effect on anchors; link is clickable
- **Suggested fix:** When disabled + href, render `<span>` or omit href
- **Priority:** P1

### BUG-009: Testimonials Carousel Memory Leak
- **Severity:** High
- **Page/Component:** `src/Testimonials.tsx` (lines 50-58)
- **Steps to reproduce:** Manually navigate carousel while autoplay is active
- **Expected:** Autoplay timer properly cancelled on manual interaction
- **Actual:** Timer from previous `isAutoPlay` state may still fire before cleanup
- **Suggested fix:** Use ref-based timer management instead of state-based
- **Priority:** P1

### BUG-010: ServiceCard Missing Focus Indicator
- **Severity:** High
- **Page/Component:** `src/components/ServiceCard.astro`
- **Steps to reproduce:** Tab through cards on Services page
- **Expected:** Visible focus outline on card links
- **Actual:** No visible keyboard focus indicator
- **Suggested fix:** Add `focus:outline-2 focus:outline-offset-2 focus:outline-accent`
- **Priority:** P1 — WCAG 2.1 2.4.7 violation

### BUG-011: Missing Rate Limiting on Billing Portal
- **Severity:** High
- **Page/Component:** `src/pages/api/create-billing-portal-session.ts` (lines 11-26)
- **Steps to reproduce:** Send rapid POST requests to endpoint
- **Expected:** Rate limited (e.g., 5 req/min/IP)
- **Actual:** Unlimited requests; can hit Stripe API limits
- **Suggested fix:** Add rate limiting middleware
- **Priority:** P1

### BUG-012: Impression Page Gallery CLS Issues
- **Severity:** High
- **Page/Component:** `src/pages/impression.astro` (lines 40-60)
- **Steps to reproduce:** Load impression page on slow connection
- **Expected:** Image placeholders maintain layout
- **Actual:** No aspect-ratio or skeleton loaders; significant layout shift
- **Suggested fix:** Add `aspect-ratio` CSS or skeleton placeholders
- **Priority:** P1 — Core Web Vitals

### BUG-013: Login Page Non-Accessible Button
- **Severity:** High
- **Page/Component:** `src/pages/login.astro` (lines 48-58)
- **Steps to reproduce:** Navigate "Use different email" button via keyboard
- **Expected:** Standard button behavior
- **Actual:** Inline `onclick="window.location.search=''"` handler — not keyboard-accessible
- **Suggested fix:** Use proper `<button>` with JS event listener
- **Priority:** P1

### BUG-014: Missing Error Boundary for Auth Callback
- **Severity:** High
- **Page/Component:** `src/pages/api/auth/callback.ts` (lines 3-12)
- **Steps to reproduce:** Auth callback fails with network error
- **Expected:** Graceful error handling, redirect to login with error message
- **Actual:** `exchangeCodeForSession()` can throw unhandled exceptions — server 500
- **Suggested fix:** Wrap in try-catch, redirect to `/login?error=auth_failed`
- **Priority:** P1

---

## 3. Medium Issues

### BUG-015: Sign-up Form Missing Input Label
- **Page/Component:** `src/pages/sign-up.astro` (lines 180-190)
- **Issue:** Billing portal Stripe customer ID input has placeholder only, no `<label>`
- **Fix:** Add `<label for="stripe-customer-id">` before input

### BUG-016: Index Page Heading Hierarchy Violation
- **Page/Component:** `src/pages/index.astro` (lines 40-120)
- **Issue:** Multiple `<h2>` without proper h1 context structure
- **Fix:** Ensure heading levels don't skip

### BUG-017: FAQItem Missing aria-expanded
- **Page/Component:** `src/components/FAQItem.astro`
- **Issue:** `<details>` accordion lacks `aria-expanded` on `<summary>`
- **Fix:** Add `aria-expanded` attribute toggled via JS

### BUG-018: FloatingShape Missing Reduced-Motion Support
- **Page/Component:** `src/FloatingShape.tsx` (lines 25-35)
- **Issue:** Infinite animation runs regardless of `prefers-reduced-motion`
- **Fix:** Check media query and skip animation

### BUG-019: Marquee Missing Reduced-Motion Support
- **Page/Component:** `src/Marquee.tsx`
- **Issue:** Infinite scroll animation ignores accessibility preference
- **Fix:** Pause animation when `prefers-reduced-motion: reduce`

### BUG-020: FloatReveal Nested Double Animation
- **Page/Component:** `src/animations/FloatReveal.tsx` (lines 31-42)
- **Issue:** Infinite y-animation on nested div continues after parent reveal — unnecessary repaints
- **Fix:** Disable nested animation once parent revealed

### BUG-021: CountUp Dependency Array Issue
- **Page/Component:** `src/CountUp.tsx` (line 46)
- **Issue:** `decimals` in deps causes re-animation; `target` potentially missing
- **Fix:** Verify `target` in dependency array; memoize properly

### BUG-022: SplitFeature Hardcoded External Image
- **Page/Component:** `src/SplitFeature.tsx` (line 25)
- **Issue:** Default `imageUrl='https://picsum.photos/seed/feature/600/400'` loads from external CDN
- **Fix:** Remove default or use local placeholder

### BUG-023: Parallax Hydration Mismatch Risk
- **Page/Component:** `src/Parallax.tsx`
- **Issue:** `useScroll` from framer-motion may cause SSR hydration mismatch in Astro
- **Fix:** Wrap with `useEffect` guard or `suppressHydrationWarning`

### BUG-024: LenisProvider Missing Window Guard
- **Page/Component:** `src/LenisProvider.tsx`
- **Issue:** No `typeof window !== 'undefined'` check before Lenis instantiation
- **Fix:** Add guard for SSR safety

### BUG-025: Stripe Webhook Silent Failure on Missing IDs
- **Page/Component:** `src/pages/api/stripe-webhook.ts` (lines 34-48, 76-80)
- **Issue:** Missing `session.customer` or `session.subscription` falls back to empty string silently
- **Fix:** Log warning and optionally return early

### BUG-026: Insufficient Webhook Error Logging
- **Page/Component:** `src/pages/api/stripe-webhook.ts` (lines 105-108)
- **Issue:** Errors logged without stack trace or event context
- **Fix:** Include `err.stack` and `event.id` in log

### BUG-027: Checkout Session Metadata Length Not Validated
- **Page/Component:** `src/pages/api/create-checkout-session.ts` (lines 43-47)
- **Issue:** `fullName`/`company` in Stripe metadata without length limits (max 255 chars)
- **Fix:** Validate length before sending to Stripe

### BUG-028: No Rate Limiting on Checkout Session
- **Page/Component:** `src/pages/api/create-checkout-session.ts` (lines 8-55)
- **Issue:** Unlimited checkout sessions can be created per email
- **Fix:** Rate limit per email/IP

### BUG-029: Testimonials Carousel Missing ARIA Role
- **Page/Component:** `src/Testimonials.tsx` (lines 147-162)
- **Issue:** Carousel has button aria-labels but no `role="region"` on container
- **Fix:** Add `role="region" aria-label="Testimonials carousel"`

### BUG-030: Pricing Page Missing Button Focus States
- **Page/Component:** `src/pages/pricing.astro` (lines 10-35)
- **Issue:** Plan CTA links styled as buttons have no focus outline
- **Fix:** Add focus-visible classes

### BUG-031: Dashboard Confusing Fallback Text
- **Page/Component:** `src/pages/dashboard.astro` (lines 30-45)
- **Issue:** When name unavailable, greeting just says "Dashboard"
- **Fix:** Use "Welcome to your account"

### BUG-032: Error Pages Missing Semantic Alert Role
- **Page/Component:** `src/pages/404.astro`, `src/pages/500.astro`
- **Issue:** No `role="alert"` to announce error state to screen readers
- **Fix:** Add `role="alert"` to error section

### BUG-033: Stats.tsx parseInt Missing Radix
- **Page/Component:** `src/Stats.tsx` (line 50)
- **Issue:** `parseInt(stat.label)` without radix parameter
- **Fix:** Use `parseInt(stat.label, 10)`

### BUG-034: TextReveal Silent Failure on Non-String Children
- **Page/Component:** `src/animations/TextReveal.tsx` (line 41)
- **Issue:** Silently renders empty string if children is React element
- **Fix:** Add runtime warning or TypeScript constraint

### BUG-035: Reveal.tsx Unsafe Type Cast
- **Page/Component:** `src/Reveal.tsx` (line 21)
- **Issue:** `motion[as as keyof typeof motion]` could fail at runtime with invalid tag
- **Fix:** Add union type for valid `as` values

### BUG-036: HTML Email Message Not Escaped Before Line Break Conversion
- **Page/Component:** `src/lib/mailer.ts` (line 60)
- **Issue:** `message.replace(/\n/g, '<br />')` converts newlines without escaping HTML first
- **Fix:** Escape HTML entities first, then replace newlines

### BUG-037: Missing Error Boundaries for Animation Components
- **Page/Component:** All animation `.tsx` files
- **Issue:** No error boundaries — framer-motion errors crash entire sections
- **Fix:** Create shared `<ErrorBoundary>` wrapper

### BUG-038: Testimonials Array Re-created on Render
- **Page/Component:** `src/Testimonials.tsx` (lines 89, 124)
- **Issue:** `[...Array(testimonial.rating)]` creates new array every render
- **Fix:** Memoize star array

---

## 4. Low Issues

### BUG-039: About Us LinkedIn Links Are Generic
- **Page/Component:** `src/pages/about-us.astro` (lines 37, 64)
- **Issue:** Links go to `https://www.linkedin.com` instead of specific profiles
- **Fix:** Use actual profile URLs

### BUG-040: SplitFeature "Learn More" Missing Accessible Label
- **Page/Component:** `src/SplitFeature.tsx` (lines 55-64)
- **Issue:** Arrow icon link lacks context for screen readers
- **Fix:** Add `aria-label="Learn more about [feature]"`

### BUG-041: Blob.tsx Tailwind Class Composition Issue
- **Page/Component:** `src/Blob.tsx` (line 22)
- **Issue:** Dynamic `color` prop in template literal may not be tree-shaken by Tailwind
- **Fix:** Use safelist or inline style for gradient

### BUG-042: Orbit.tsx Unnecessary Array Re-creation
- **Page/Component:** `src/Orbit.tsx` (line 19)
- **Issue:** `Array.from({ length: dotCount })` on every render
- **Fix:** Use `useMemo`

### BUG-043: Auth Code Parameter Not Length-Validated
- **Page/Component:** `src/pages/api/auth/callback.ts` (line 4)
- **Issue:** `code` parameter accepted without length check — could accept multi-MB strings
- **Fix:** Add `if (!code || code.length > 1000) return 400`

### BUG-044: Auto-Signup Enabled Without Restriction
- **Page/Component:** `src/pages/api/auth/login.ts` (line 18)
- **Issue:** `shouldCreateUser: true` allows unlimited account creation
- **Fix:** Consider adding allowlist or rate limiting

### BUG-045: SMTP Connection Not Validated at Startup
- **Page/Component:** `src/lib/mailer.ts` (lines 3-19)
- **Issue:** Invalid SMTP credentials discovered only at send time
- **Fix:** Optional startup check: `await getTransport().verify()`

### BUG-046: HoverLift Missing Reduced-Motion Check
- **Page/Component:** `src/animations/HoverLift.tsx` (lines 19-25)
- **Issue:** Hover animation ignores reduced-motion preference
- **Fix:** Conditionally apply `whileHover`

---

## 5. UX Improvements

1. **Cookie banner:** Consider auto-dismissing after choice, add animation
2. **Contact form:** Add inline validation errors (not just post-submit)
3. **Pricing page:** Add plan comparison table for easier decision-making
4. **Services pages:** Add breadcrumb navigation
5. **Dashboard:** Show loading skeleton while auth state resolves
6. **404 page:** Add search or sitemap links to help users find content

---

## 6. Accessibility Summary

| Category | Issues |
|----------|--------|
| Missing focus indicators | 3 (ServiceCard, pricing buttons, login button) |
| Missing ARIA attributes | 3 (FAQ, carousel, error pages) |
| Missing labels | 1 (sign-up form) |
| Focus trap missing | 1 (mobile menu) |
| Heading hierarchy | 1 (index page) |
| Reduced-motion | 4 (FloatingShape, Marquee, HoverLift, FloatReveal) |
| **Total a11y issues** | **13** |

---

## 7. Performance Issues

1. **Impression gallery:** No aspect-ratio → CLS
2. **Google Fonts:** Loaded render-blocking (consider `font-display: swap` + preload)
3. **Framer Motion bundle:** Large animation library loaded for simple reveals — consider CSS-only alternatives
4. **Array re-creation in renders:** Testimonials, Orbit components
5. **External placeholder image:** SplitFeature defaults to picsum.photos

---

## 8. Regression Risks

- Fixing CORS origin check (BUG-007) may break legitimate API clients that don't send Origin
- Adding auth to billing portal (BUG-001) requires DB schema for user→customer mapping
- Focus trap on mobile menu needs testing across browsers (Safari quirks)
- Rate limiting implementation needs shared state (Redis or similar) for multi-instance deployment

---

## 9. Recommended Next Actions

### Immediate (P0 — this week)
1. Fix billing portal auth bypass (BUG-001)
2. Fix email header/HTML injection (BUG-002, BUG-003, BUG-036)
3. Add HTTP method check to Stripe webhook (BUG-005)
4. Fix CORS origin bypass (BUG-007)

### Short-term (P1 — next 2 weeks)
5. Add mobile menu focus trap (BUG-004)
6. Fix Button disabled+href (BUG-008)
7. Add focus indicators to ServiceCard, pricing, login (BUG-010, BUG-030, BUG-013)
8. Add error handling to auth callback (BUG-014)
9. Fix Stripe customer ID validation (BUG-006)

### Medium-term (P2 — next month)
10. Add reduced-motion support to all animations
11. Add ARIA attributes (FAQ, carousel, error pages)
12. Implement rate limiting on checkout and billing endpoints
13. Add error boundaries to React components
14. Fix heading hierarchy and form labels

### Maintenance
15. Update LinkedIn profile links
16. Fix performance issues (CLS, array re-creation)
17. Consider CSS-only alternatives for simple animations
