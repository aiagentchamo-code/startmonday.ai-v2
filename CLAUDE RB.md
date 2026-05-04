# CLAUDE.md — StartMonday.AI Website Rebuild Brief

> This document is the single source of truth for building the new StartMonday.AI website.
> All copy, structure, services, and team information has been extracted from the current live site
> and reorganized here for a clean, professional rebuild.
>
> **Conventions used in this document**
> - `[TBD: …]` — a gap that requires a factual input from the client before launch. Do **not** invent content for these.
> - `[DRAFT: …]` — proposed copy/structure that the client should review and approve.
> - All prices, names, dates, and biographical facts are lifted from the current live site and must not be altered without explicit client approval.

---

## 1. Brand Identity

**Company name:** StartMonday.AI
**Legal entity:** [TBD: registered company name, KvK number, VAT number]
**Domain:** startmonday.ai
**Tagline:** *AI training with immediate impact*
**Brand promise:** Learning AI should lead to action — fast. Everything is designed so clients can start applying knowledge on Monday morning.
**Core value proposition:** Hands-on AI education, flexible expert support, and customized AI solutions for organizations.
**Tone of voice:** Authoritative, practical, action-oriented. Not academic. Not hype-driven. Results-focused.
**Reading level:** B2 English — accessible to non-native speakers without being simplistic.
**Languages supported:** English (default), Nederlands, Magyar, Deutsch

### Brand Concept
The name "StartMonday" is the central concept — everything the company does is about making AI immediately actionable. Training doesn't end in a classroom; it starts being used on Monday morning. This should inform all design and copy decisions.

### Voice Principles
1. **Concrete over abstract.** "Build a chatbot in 3 days" beats "accelerate digital transformation."
2. **Verbs over nouns.** Lead with what the reader will *do*.
3. **No filler.** Remove "solutions," "synergy," "leverage" unless technically required.
4. **Plural "you."** Address the organization, not an individual, unless on StartMonday+ (B2P).
5. **Never "revolutionary," "game-changing," "cutting-edge."** Results are the proof; adjectives are not.

### Writing Rules
- Oxford comma: **on**.
- Em dashes: preferred over parentheses for asides.
- "AI" always capitalized; "ai" never.
- "StartMonday.AI" is one word, no space, `.AI` in caps. "StartMonday+" has no space before the plus.
- Dates: `23 April 2026` (EN), `23 april 2026` (NL), `2026. április 23.` (HU), `23. April 2026` (DE).
- Currency: `€1,200` with thin non-breaking space between symbol and number where typography allows.

---

## 2. Site Architecture (Pages)

```
/ (Home)
/services
  /services/ai-business-academy
  /services/startmonday            (StartMonday+)
  /services/startforward
  /services/ai-solutions-lab
/about-us
/impression
/contact
/sign-up
/privacy-policy
/cookie-policy
/terms                             [DRAFT — confirm needed]
/404
/500
/sitemap.xml                       (auto-generated)
/robots.txt                        (auto-generated)
```

### URL Conventions
- All URLs lowercase, hyphen-separated, no trailing slash.
- Locale prefix for non-default languages: `/nl/...`, `/hu/...`, `/de/...`. Default English is unprefixed.
- Canonical tags point to the English version when a translation is missing.
- 301 redirects from any legacy URLs on the current live site — audit before cutover and add a redirect map.

---

## 3. Homepage

### 3.1 Hero Section
- **Headline:** AI training with immediate impact
- **Subheadline:** At StartMonday.AI, we believe that learning AI should lead to action — fast. That's why everything we offer, from workshops to custom tools, is designed so that you can start applying your knowledge on Monday morning.
- **Body:** We help organizations unlock the power of artificial intelligence through hands-on education, flexible support, and customized solutions. Whether you want to build internal capabilities, accelerate innovation, or get practical help — you've come to the right place.
- **Primary CTA:** `Get in touch` → `/contact`
- **Secondary CTA:** `Explore services` → `/services`
- **Tagline below hero:** Knowledge. Action. Outcome.
- **Visual direction:** Full-bleed hero with a single strong image (workshop in progress) or a restrained abstract gradient. No stock photos of robot hands.

### 3.2 Social Proof Bar [DRAFT]
Directly beneath the hero, a single horizontal strip with four metrics:
- **150+** workshop participants trained
- **70+** years combined leadership experience
- **4** languages supported
- **35+** years each — founder experience in digital & AI

No decorative icons — numbers only, large type, thin rule dividers.

### 3.3 Services Section
- **Section heading:** Discover our services
- **Intro line:** Four ways we help organizations go from curious to capable.
- Four service cards (see Section 5 for full detail):
  1. **AI Business Academy** — Learn how to apply AI in your business through workshops, bootcamps, and certificate programs.
  2. **StartMonday+** — Get AI support, tools, and expert help — when you need it, without long-term commitments.
  3. **StartForward Accelerator** — A 5-week program to transform your business with AI-supported sustainability innovation.
  4. **AI Solutions Lab** — Work with us to build chatbots, automation workflows, and custom AI tools.
- Each card: icon, title, 1-line description, `Learn more →` link.

### 3.4 How We Work [DRAFT]
A 3-step strip:
1. **Discover** — A short call to understand your context, team, and ambition.
2. **Design** — We match the right format: training, subscription, accelerator, or custom build.
3. **Deploy** — You apply what you learn — starting Monday.

### 3.5 About the Founders (teaser)
- **Heading:** Two leaders. Seventy years of digital experience.
- **Body:** Rolf Neleman and Béla Paul Sándor combine deep expertise in digital strategy, leadership, and applied AI.
- **CTA:** `Meet the team` → `/about-us`
- Two portrait thumbnails, side by side.

### 3.6 Testimonials [TBD: source quotes]
Carousel or 2-up grid of up to 3 quotes. Each: quote, name, role, company, (optional) logo.
Format placeholder:
> "[TBD: one-sentence outcome statement.]"
> — [TBD: Name], [TBD: Role], [TBD: Company]

### 3.7 Closing CTA Section
- **Heading:** Start your AI journey today
- **Body:** Whether you want to build internal capabilities, accelerate innovation, or want hands-on help implementing AI — StartMonday.AI has the right solution for your business. Contact us to begin your transformation.
- **CTA:** `Get in touch` → `/contact`

### 3.8 Newsletter [DRAFT]
- **Heading:** Practical AI, once a month.
- **Body:** A short monthly email — one tool, one workflow, one case. No filler.
- **Form:** email field + `Subscribe` button.
- **Privacy line:** We never share your address. Unsubscribe anytime.

---

## 4. Services Overview Page (`/services`)

**Headline:** Services
**Intro:** At StartMonday.AI, we believe that learning AI should lead to action — fast. That's why everything we offer, from workshops to customized tools, is designed so that you can start applying your knowledge on Monday morning. We help organizations unlock the power of artificial intelligence through hands-on education, flexible support, and customized solutions. Whether you want to build internal capabilities, accelerate innovation, or get practical help — you've come to the right place.
**Tagline:** Knowledge. Action. Outcome.

**Layout:** Four service sections, alternating image-left / image-right. Each section: name, one-line promise, 3-bullet "what you get," CTA to detail page.

---

## 5. Service Detail Pages

### 5.1 AI Business Academy (`/services/ai-business-academy`)

**Headline:** AI Business Academy
**Subheadline:** Unlock the power of AI for your business with our comprehensive educational programs.

#### Executive Programs
*Workshops for better business results*
- 2-day intensive workshops for business leaders
- Focus on practical AI implementation and ROI
- Customized sessions in different business domains

**Workshop Highlights:**
- Basic Principles and Tools of Generative AI
- Prompt Engineering and Workflow Integration
- Specialized sessions in: Marketing, Sales, Customer Service, Finance, Operations, HR, Legal

#### AI Implementation Bootcamps
*Professional development*
- 3-day intensive programs (24 hours total)
- Hands-on learning with up to 10 participants
- Available online or on-site

**Bootcamp Topics:**
- Implementation of Generative AI
- AI Ethics and Governance
- AI Strategy and Transformation
- AI for Sustainability
- Data-driven Decision Making

#### AI Implementation Certificate Program
*Extended learning*
- 60-hour program over 12 weeks
- Hybrid delivery with live and recorded sessions
- Covers: Strategic Foundations, Implementation Methods, Specialized Tracks, Practical Application

#### Summer School
**Using AI in Business** — 48-hour immersive program for busy professionals.

#### Pricing [TBD]
Per-program pricing to be confirmed. Placeholder: `From €[TBD] per participant`. Volume and in-company rates available on request.

#### Academy FAQ [DRAFT]
- **Who is this for?** Business leaders, team managers, and professionals who want to use AI in their daily work — no coding background required.
- **Is the content technical?** Only as technical as it needs to be. We focus on application, not theory.
- **Can it be delivered in-company?** Yes — every format can be adapted for an in-company cohort.
- **Do participants receive a certificate?** Yes, for the Certificate Program and Bootcamps.
- **What languages?** English and Dutch by default; Hungarian and German on request.

---

### 5.2 StartMonday+ (`/services/startmonday`)

**Headline:** StartMonday+
**Subheadline:** Your Ongoing Advantage in the Age of AI.
**Description:** A flexible, point-based subscription for professionals and businesses who want continuous access to AI knowledge, expert support, and practical resources — without the complexity of custom consulting.

#### How It Works
Choose your subscription level. Receive monthly StartPoints that you spend on a curated menu of expert-led services and learning resources. You decide what fits your priorities — no waste, complete flexibility. All services are delivered online — ideal for busy professionals and dispersed teams.

**Note:** Unused points carry forward for a maximum of 3 months.

#### Subscription Tiers

| Plan    | Price/Month | Monthly StartPoints |
|---------|-------------|---------------------|
| Starter | €300        | 20 Points           |
| Scaler  | €600        | 45 Points           |
| Power   | €1,200      | 100 Points          |

> Prices exclude VAT. Monthly billing, cancel with one month's notice. [TBD: confirm billing terms.]

#### What You Can Spend Points On

| Service                          | Point Cost |
|----------------------------------|------------|
| Access Live Webinar              | 4 Points   |
| Monthly Overview AI Tools        | 3 Points   |
| Mentoring hour (1-on-1)          | 7 Points   |
| Team Strategy Check-In (45 min)  | 13 Points  |
| Location Mini-Workshop (90 min)  | 9 Points   |
| Customized Prompt Package        | 6 Points   |
| AI Use Case Assessment           | 9 Points   |

#### Benefits
- **Flexibility** — choose services based on your needs
- **Online access** — from every location
- **Practical insights** — applicable immediately
- **Monthly progress** — with ongoing support

#### StartMonday+ FAQ [DRAFT]
- **Can I change my plan?** Yes — upgrade or downgrade from the next billing cycle.
- **What if I don't use my points?** Points roll forward up to 3 months, then expire.
- **Can multiple people in my team use one subscription?** Yes — points are organization-wide on Scaler and Power.
- **Is there a minimum commitment?** No long-term contract. One month's notice to cancel.
- **Can I buy extra points?** [TBD: confirm top-up policy.]

---

### 5.3 StartForward (`/services/startforward`)

**Headline:** StartForward
**Subheadline:** The AI & Sustainability Accelerator

**Program Details:**
- 5-week program with full-day sessions on Fridays
- Transform your business through AI-supported sustainability innovation
- Includes: pre-program assessment, implementation plan, and post-program support
- For up to 10 selected companies

**Benefits:**
- Expert guidance and support from peers
- Concrete implementation results
- Progress measurement and exchange of best practices

**Who should apply:** SME leaders, sustainability officers, and innovation managers who want a concrete AI-supported sustainability initiative in flight within 5 weeks.

**Application & selection:**
1. Submit an expression of interest via the contact form.
2. 30-minute intake call to assess fit.
3. Selection confirmation and onboarding.

**Cohort details:** [TBD: next cohort start date, location, price per company].

---

### 5.4 AI Solutions Lab (`/services/ai-solutions-lab`)

**Headline:** AI Solutions Lab
**Subheadline:** Harness the power of AI with our development services. At StartMonday.AI Solutions Lab, we transform your business challenges into intelligent AI-powered solutions.

#### Services Offered

**Chatbot Development**
Brand-consistent, multilingual bots with NLP and continuous improvement.

**Process Automation**
Setup of Zapier and Make.com, workflow optimization, and custom integrations.

**Creation of AI Agents**
Task-specific AI assistants for internal use.

**Custom AI Solutions**
From concept to solution: strategy, development, and optimization.

#### How a Project Runs [DRAFT]
1. **Scoping call** — 30 minutes, free. We map your problem to the right tool class.
2. **Proposal** — fixed-price scope, timeline, and deliverables.
3. **Build** — weekly checkpoints; you stay in the loop.
4. **Handover** — documentation, training for your team, and a 30-day support window.

#### Why AI Solutions Lab
- Business-oriented approach
- Scalable, ethical AI solutions
- Seamless integration with our educational and support services

#### Engagement Models [DRAFT]
- **Fixed-scope build** — defined deliverable, fixed fee.
- **Time & materials** — for exploratory or evolving work.
- **StartMonday+ top-up** — use points for small builds and assessments.

---

## 6. About Us (`/about-us`)

**Headline:** About us
**Subheadline:** Rolf Neleman and Béla Paul Sándor combine more than 70 years of experience in digital strategy, innovation, and applied AI. With backgrounds in marketing, technology, and leadership, they help organizations grow in a rapidly changing digital world.

---

### Rolf Neleman
**Title:** Expert in Digital Strategy and AI
**Role:** Managing Director, StartMonday.AI

Rolf Neleman is an experienced professional with a career spanning more than 35 years in digital marketing, education, and business management. As Managing Director of StartMonday.AI, Rolf supports companies in strengthening their AI strategy and business growth. Working as a consultant, he helps organizations improve their digital presence and get more out of their business using the latest AI technologies.

He teaches at the Digital Transformation Management program of SRH Hogeschool in Haarlem and has been teaching Online Marketing at De Haagse Hogeschool since 2015.

**Career highlights:**
- Managed several businesses including a call center and a publishing company
- Leadership roles at Tweedenummer.nl and Maison en France
- Early career at KPN Telecom and project management in the transportation sector
- Known for creativity and innovative thinking

**AI Workshop track record:**
- Over the past 18 months, conducted numerous workshops on applied AI
- Focus: how to use AI effectively across different roles and sectors
- Sectors served: real estate, tourism, engineering, and more
- More than 150 people have participated in his AI workshops to date

**Contact:** [TBD: email], [TBD: LinkedIn URL]

---

### Béla Paul Sándor
**Title:** Digital Visionary and AI Strategist
**Role:** Co-founder, Senior Digital Strategy Advisor

Béla Paul Sándor is a seasoned global digital leader and business strategist with more than 35 years of experience in driving transformational change. His career spans blue-chip enterprises and SMEs, including executive positions at Cisco Systems, where he built and led global business units delivering innovative digital and AI-driven solutions.

His expertise lies in leveraging applied AI and advanced technologies to create business value, develop new data-driven services, and advise on sustainability and circular business models.

**Career highlights:**
- Director and Global GM of Vertical Solutions at Cisco Systems
- Built and led global business units at Cisco delivering AI-driven digital solutions
- Senior Digital Strategy Advisor (current)
- Delivered multi-million dollar business opportunities for employers and clients
- Executive trainer and mentor in Digital Transformation Management and Applied AI

**Focus areas:**
- Applied AI integrated into business strategies for practical, impactful results
- AI-driven platforms and strategies for SMEs and large enterprises
- Enabling organizations to implement innovative products and services for long-term competitiveness
- Sustainability and circular business models

**Contact:** [TBD: email], [TBD: LinkedIn URL]

---

### Our Approach [DRAFT]
Three principles guide every engagement:
1. **Apply, don't admire.** We measure success in what gets used on Monday — not slides delivered.
2. **Human first.** AI is a tool; judgment stays with your people.
3. **Ethics by default.** Privacy, transparency, and fairness are part of the brief, not an afterthought.

---

## 7. Impression (`/impression`)

**Headline:** Impression
**Subheadline:** A look inside our workshops, bootcamps, and events.

**Layout:** Masonry or uniform grid of photos. Each tile optionally captioned with event name, location, and date.

**Content required:** [TBD: 12–24 photos from workshops and events. Each image should have alt text describing what's happening, not just "workshop."]

**Optional additions:**
- Short video highlights (30–60 seconds).
- A list of past events with dates and locations.
- Quotes from participants associated with specific events.

---

## 8. Contact (`/contact`)

**Headline:** Contact us
**Subheadline:** Tell us what you're trying to do. We'll get back within one business day.

### Contact Form Fields
| Field              | Type             | Required | Notes                                           |
|--------------------|------------------|----------|-------------------------------------------------|
| Name               | text             | yes      | 2–80 chars                                      |
| Email              | email            | yes      | RFC 5322 validation                             |
| Organization       | text             | no       |                                                 |
| Role               | text             | no       |                                                 |
| Country            | select           | no       | Default NL; full ISO list                       |
| I'm interested in  | select (multi)   | yes      | Academy / StartMonday+ / StartForward / Lab / Other |
| Message            | textarea         | yes      | 20–2,000 chars                                  |
| Consent checkbox   | checkbox         | yes      | Links to privacy policy                         |
| Newsletter opt-in  | checkbox         | no       | Unchecked by default (GDPR)                     |

**Destination inbox:** [TBD: e.g., hello@startmonday.ai]
**Autoresponder:** Yes — confirmation within 1 minute, including expected response time.
**Spam protection:** Cloudflare Turnstile or hCaptcha (privacy-friendly; no Google reCAPTCHA).
**Anti-abuse:** Honeypot field + rate limit (5 submissions / IP / hour).

### Direct Contact
- **Email:** [TBD]
- **Phone:** [TBD — optional]
- **Address:** [TBD — NL registered address]
- **Hours:** Mon–Fri, 09:00–17:00 CET

### Socials
- LinkedIn (company): [TBD]
- LinkedIn — Rolf: [TBD]
- LinkedIn — Béla: [TBD]
- YouTube / other: [TBD]

### Success & Error States
- **Success:** "Thanks — your message is in. We'll reply within one business day."
- **Error (validation):** Inline, field-specific.
- **Error (server):** "Something went wrong on our side. Please email us directly at [TBD]."

---

## 9. Sign Up (`/sign-up`)

**Headline:** Sign up
**Subheadline:** Pick the path that fits where you are right now.

**Three entry points:**
1. **Join a workshop or bootcamp** — links to Academy with upcoming-dates list. Form captures: name, email, organization, desired program, cohort date.
2. **Start a StartMonday+ subscription** — tier selector (Starter / Scaler / Power) → intake form → [TBD: payment provider, e.g., Mollie or Stripe].
3. **Apply for StartForward** — application form: company name, website, sector, team size, sustainability goal, why now.

**Post-submit:** confirmation email + calendar invite for intake call where relevant.

**Legal:** Consent checkbox linking to privacy policy and (if applicable) program terms.

---

## 10. Privacy Policy (`/privacy-policy`)

**Status:** [TBD — draft to be reviewed by Dutch/EU-qualified counsel before launch.]

**Scope:** The policy must cover, at minimum:
1. **Data controller** — legal entity, address, contact, DPO contact if appointed.
2. **Data collected** — contact-form data, newsletter subscriptions, account data (if sign-up requires it), cookies/analytics.
3. **Purposes & legal bases** — consent, contract performance, legitimate interest — each mapped to a specific processing activity (GDPR Art. 6).
4. **Retention** — how long each category is kept and why.
5. **Processors** — named third parties (hosting, email, analytics, payments, CRM). Each with a link to their policy.
6. **International transfers** — if any data leaves the EEA, state the safeguard (SCCs, adequacy decision).
7. **Data subject rights** — access, rectification, erasure, restriction, portability, objection, withdrawal of consent, right to lodge a complaint with the Autoriteit Persoonsgegevens.
8. **Contact for privacy requests** — [TBD: privacy@startmonday.ai].
9. **Changes to the policy** — how updates are communicated, last-updated date.

**Companion pages:**
- `/cookie-policy` — per-cookie table: name, provider, purpose, duration, category (strictly necessary / functional / analytics / marketing).
- Cookie banner with granular consent (reject-all must be as prominent as accept-all). No non-essential cookies until consent is given.

---

## 11. Error Pages

### 404 — Not Found
- **Headline:** This page went looking for Monday.
- **Body:** The page you're after doesn't exist — or it moved. Try one of these:
- Links: Home, Services, Contact.

### 500 — Server Error
- **Headline:** Something broke on our side.
- **Body:** We've been notified. Please try again in a moment, or email us at [TBD].
- Links: Home.

Both pages keep the full nav and footer.

---

## 12. Navigation Structure

### Primary Nav
- Home
- Services (dropdown)
  - AI Business Academy
  - StartMonday+
  - StartForward
  - AI Solutions Lab
- About us
- Impression
- Contact
- Sign up *(CTA button style — filled, high contrast)*

**Behavior:**
- Sticky on scroll, reduced height after 100px.
- Mobile: hamburger → full-screen drawer; services expand as an accordion.
- Current page indicated by a thin underline (not color alone — accessibility).
- Skip-to-content link for keyboard users (visible on focus).

### Footer
Four columns on desktop, stacked on mobile:

**Column 1 — Brand**
- Logo
- Tagline: *AI training with immediate impact*
- One-line description

**Column 2 — Services**
- AI Business Academy
- StartMonday+
- StartForward
- AI Solutions Lab

**Column 3 — Company**
- About us
- Impression
- Contact
- Sign up

**Column 4 — Stay in touch**
- Newsletter signup (email field)
- LinkedIn icon link [TBD]
- Contact email [TBD]

**Footer bottom bar:**
- © 2026 StartMonday.AI. All rights reserved. [TBD: legal entity name]
- Privacy policy · Cookie policy · Terms
- Language switcher
- KvK [TBD] · VAT [TBD]

### Language Switcher
- English (default)
- Nederlands
- Magyar
- Deutsch

Positioned top-right in header and in footer. Preserves current page across languages. Writes preference to a `locale` cookie (strictly-necessary category).

---

## 13. CTAs, Forms & Microcopy

### CTA Hierarchy
- **Primary CTA:** "Get in touch" → `/contact`
- **Secondary CTA:** "Learn more" / "Explore services" / "Read more"
- **Tertiary CTA:** Inline text link with arrow `→`

### Microcopy Library
| Context                       | Copy                                                                 |
|-------------------------------|----------------------------------------------------------------------|
| Form submit (idle)            | Send message                                                         |
| Form submit (loading)         | Sending…                                                             |
| Form submit (success)         | Thanks — your message is in. We'll reply within one business day.    |
| Required-field error          | This field is required.                                              |
| Invalid email                 | Please enter a valid email address.                                  |
| Newsletter success            | You're in. Check your inbox to confirm.                              |
| Newsletter already-subscribed | You're already on the list — thanks!                                 |
| Cookie banner — title         | We use cookies                                                       |
| Cookie banner — body          | Some cookies are essential. Others help us understand how the site is used. You choose. |
| Cookie banner — buttons       | Accept all · Reject all · Manage preferences                         |
| 404 back-home link            | Take me home                                                         |
| Loading state (generic)       | Loading…                                                             |
| Offline state                 | You're offline. We'll retry when you're back.                        |

---

## 14. Design Direction

### Visual Identity

#### Color System [DRAFT — needs brand approval]
Neutral-led palette with a single confident accent. All colors must meet WCAG AA contrast on their paired surface.

| Role              | Name          | Hex      | Usage                                     |
|-------------------|---------------|----------|-------------------------------------------|
| Primary           | Ink           | #0B1220  | Body text on light, primary buttons       |
| Primary alt       | Graphite      | #1F2937  | Headings on light                         |
| Surface           | Paper         | #FFFFFF  | Default background                        |
| Surface alt       | Mist          | #F5F7FA  | Section differentiation                   |
| Border            | Line          | #E5E7EB  | Hairline rules, input borders             |
| Accent            | Amber         | #F59E0B  | Primary CTAs, key highlights              |
| Accent alt        | Teal          | #0EA5A4  | Secondary accents, data viz               |
| Success           | Green         | #16A34A  | Form success states                       |
| Error             | Red           | #DC2626  | Form error states                         |
| Warning           | Yellow        | #CA8A04  | Warnings (rare)                           |

**Dark-mode** support is optional for v1; if enabled, invert Paper ↔ Ink and use Graphite as elevated-surface color.

#### Typography [DRAFT]
- **Headings:** Inter (or Plus Jakarta Sans), weights 600/700, tight tracking (-0.01em), tight leading.
- **Body:** Inter 400/500, leading 1.55, max measure ~68ch.
- **Mono:** JetBrains Mono — for any code or technical blocks.

**Type scale (desktop):**
| Token | Size  | Line  | Use                       |
|-------|-------|-------|---------------------------|
| xs    | 12px  | 16    | Labels, captions          |
| sm    | 14px  | 20    | Metadata                  |
| base  | 16px  | 26    | Body                      |
| lg    | 18px  | 28    | Lead paragraphs           |
| xl    | 20px  | 28    | Section intros            |
| 2xl   | 24px  | 32    | Card titles               |
| 3xl   | 30px  | 36    | H3                        |
| 4xl   | 36px  | 40    | H2                        |
| 5xl   | 48px  | 52    | H1                        |
| 6xl   | 64px  | 64    | Hero (desktop only)       |

Mobile: scale down one step from `3xl` upward.

#### Spacing & Layout
- **Grid:** 12-column, 1200px max content width, 72px outer gutters (desktop).
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Section vertical rhythm:** 96–128px between major sections (desktop), 64–80px (mobile).
- **Radius:** 4px (inputs), 8px (cards), 999px (pills).
- **Shadow:** one elevated shadow only — `0 10px 30px -12px rgba(11,18,32,.15)`.

#### Iconography
- Line icons at 1.5px stroke, 24px base size.
- Use one system (e.g., Lucide) throughout; do not mix.
- No emoji in UI chrome.

#### Imagery
- Real workshop photography whenever possible.
- Candid over posed; faces in context, not isolated corporate portraits.
- Consistent color treatment (warm, slightly desaturated).
- All images `loading="lazy"` except hero; served as AVIF with WebP/JPEG fallback; responsive `srcset`.
- Alt text is descriptive — never "image" or filename.

### Layout Principles
- **Whitespace-heavy.** Let content breathe.
- **Asymmetric grid.** Alternate text-image rows for service sections.
- **Section differentiation.** Subtle Paper ↔ Mist shifts, never hard borders between sections.
- **Mobile-first.** All layouts collapse gracefully; no horizontal scroll at 320px.

### Motion
- Durations: 150ms (micro), 250ms (standard), 400ms (entrance).
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` for entrances; `ease-out` for exits.
- Respect `prefers-reduced-motion: reduce` — disable all non-essential animation.

---

## 15. Component Inventory

Build once, reuse across pages:

- `SiteHeader` (sticky, localized, language switcher)
- `SiteFooter`
- `Hero` (variant: full-bleed / compact)
- `SectionHeading` (eyebrow + title + optional lead)
- `ServiceCard`
- `StatTile` (for social-proof bar)
- `FounderCard` (portrait + bio snippet)
- `TestimonialCarousel`
- `FAQAccordion`
- `ContactForm`
- `NewsletterForm`
- `CookieBanner` + `ConsentPreferences` dialog
- `LanguageSwitcher`
- `Breadcrumbs` (service detail pages)
- `CTASection` (closing CTA reused across pages)
- `ImpressionGrid`
- `PricingTable` (StartMonday+)
- `PointsMenu` (StartMonday+ points-cost table)
- `ProgramCard` (Academy sub-programs)
- `Button` (primary/secondary/tertiary/destructive; sizes sm/md/lg)
- `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`
- `Toast` (form feedback)
- `SkipToContent` (a11y)

---

## 16. SEO

### Meta Titles
| Page                | Title                                                                  |
|---------------------|------------------------------------------------------------------------|
| Home                | AI training and solutions for businesses \| StartMonday.AI             |
| Services            | AI services for businesses \| Training, tools & solutions              |
| AI Business Academy | AI Business Academy for businesses \| Training & Certification         |
| StartMonday+        | StartMonday+ \| Flexible AI subscription for professionals             |
| StartForward        | StartForward \| AI & sustainability accelerator for businesses         |
| AI Solutions Lab    | AI Solutions Lab \| Custom AI tools & automation                       |
| About us            | About us \| Experienced leaders in AI & digital transformation         |
| Impression          | Impression \| Workshops and events at StartMonday.AI                   |
| Contact             | Contact \| StartMonday.AI                                              |
| Sign up             | Sign up \| Join a program at StartMonday.AI                            |
| Privacy policy      | Privacy policy \| StartMonday.AI                                       |

### Meta Descriptions [DRAFT — 150–160 chars]
| Page                | Description                                                                                                     |
|---------------------|-----------------------------------------------------------------------------------------------------------------|
| Home                | Hands-on AI training, flexible expert support, and custom AI builds for organizations. Apply what you learn starting Monday. |
| Services            | Four ways to put AI to work: the AI Business Academy, StartMonday+ subscription, StartForward accelerator, and the AI Solutions Lab. |
| AI Business Academy | Workshops, bootcamps, and a 12-week certificate program that help business teams apply AI with confidence.       |
| StartMonday+        | A flexible points-based subscription for ongoing AI mentoring, workshops, and expert support.                    |
| StartForward        | A 5-week accelerator for SMEs combining applied AI with sustainability innovation.                               |
| AI Solutions Lab    | Chatbots, automation, and custom AI agents — built by a team that also trains yours to use them.                 |
| About us            | Rolf Neleman and Béla Paul Sándor lead StartMonday.AI with 70+ years of digital and applied-AI experience.       |
| Impression          | A look inside the workshops, bootcamps, and events we run for teams across Europe.                               |
| Contact             | Tell us what you're trying to do. We'll reply within one business day.                                           |
| Sign up             | Join a workshop, start a StartMonday+ subscription, or apply for the StartForward accelerator.                   |
| Privacy policy      | How StartMonday.AI handles your personal data, under GDPR.                                                       |

### Open Graph & Twitter
- Every page sets `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:locale`, `og:type`.
- Twitter: `summary_large_image` card.
- Default OG image: brand wordmark + tagline on Ink background. Per-page variants for service pages.

### Structured Data (JSON-LD)
- `Organization` on all pages (logo, sameAs socials, contactPoint).
- `WebSite` with `SearchAction` if search is added.
- `Course` on Academy programs.
- `Service` on each service detail page.
- `Person` on the About page (per founder).
- `BreadcrumbList` on service detail pages.
- `FAQPage` where FAQ blocks are present.

### Technical SEO
- Canonical tags on every page.
- `hreflang` for all translated pages plus `x-default`.
- `sitemap.xml` auto-generated, split by locale.
- `robots.txt` permits all user agents; references sitemap.
- Clean, human URLs. No query strings for canonical content.

---

## 17. Internationalization (i18n)

- Default: English.
- Locales: `en`, `nl`, `hu`, `de`.
- Routing: locale prefix for non-default (`/nl/services`), none for English.
- Strings stored in message catalogs (`messages/{locale}.json`).
- Never concatenate translated fragments — use ICU message format for plurals/variables.
- Dates, numbers, currency formatted via `Intl` with the active locale.
- Language switch preserves the current page and query params.
- Fallback: missing translation → English, with a silent console warning in dev only.
- RTL: not required.

---

## 18. Accessibility (WCAG 2.2 AA)

Non-negotiable baselines:
- All interactive elements reachable by keyboard; visible focus ring (never `outline: none` without a replacement).
- Skip-to-content link.
- Semantic HTML — one `<h1>` per page; heading order never skipped.
- Form inputs have programmatic labels; errors announced via `aria-describedby`.
- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text and UI components.
- Never rely on color alone to convey meaning.
- Images have alt text; decorative images use `alt=""`.
- Motion respects `prefers-reduced-motion`.
- Forms validate client- and server-side; errors are descriptive and near the field.
- Videos (if any) have captions and a text transcript.
- Test with at least one screen reader (VoiceOver or NVDA) before launch.

---

## 19. Performance Budgets

Targets for every page on a Moto G Power equivalent over 4G:

| Metric                          | Target   |
|---------------------------------|----------|
| Largest Contentful Paint (LCP)  | < 2.0s   |
| Interaction to Next Paint (INP) | < 200ms  |
| Cumulative Layout Shift (CLS)   | < 0.05   |
| Total JS (compressed)           | < 150KB  |
| Total CSS (compressed)          | < 50KB   |
| Image weight per page           | < 600KB  |
| Requests per page               | < 50     |
| Lighthouse — Performance        | ≥ 95     |
| Lighthouse — Accessibility      | ≥ 100    |
| Lighthouse — Best Practices     | ≥ 95     |
| Lighthouse — SEO                | ≥ 100    |

**Techniques:**
- Static rendering where content allows; ISR/SSG for service pages.
- Fonts: self-hosted WOFF2, `font-display: swap`, preload only the one weight used above the fold.
- Images: AVIF/WebP, responsive `srcset`, explicit width/height, lazy by default.
- No render-blocking third-party scripts above the fold.
- Defer analytics; load consent-conditional scripts only after opt-in.

---

## 20. Analytics, Consent & Tracking

- **Analytics:** Plausible or Fathom (cookieless, EU-hosted). Avoid GA4 unless the client specifically requires it, and only behind consent.
- **Events to track:**
  - Contact form submit (success / error)
  - Newsletter signup
  - Service page views
  - CTA clicks (hero, closing, cards)
  - Language switch
  - External link clicks (LinkedIn etc.)
- **Consent:** No non-essential cookies or analytics pings before explicit opt-in.
- **Server logs:** standard access logs only; no PII beyond what's needed for abuse prevention; retention per privacy policy.

---

## 21. Tech Stack Recommendations

| Option | Stack                              | Best for                                           |
|--------|------------------------------------|----------------------------------------------------|
| A      | Next.js + Tailwind CSS + Vercel    | Full control, great DX, fast deploy                |
| B      | Astro + Tailwind + Netlify/Vercel  | Content-heavy, fast static, simpler setup          |
| C      | Framer                             | Design-led, non-technical editors                  |
| D      | Webflow                            | Client handoff, visual editing                     |

**Recommended:** **Astro + Tailwind** for this site — mostly static content, excellent performance defaults, first-class i18n, and it keeps the JS budget close to zero on non-interactive pages. Drop in islands (React/Svelte) only where interactivity is needed (contact form, newsletter, cookie banner, language switcher).

**Supporting services:**
- Hosting: Vercel or Netlify.
- Email (transactional): Postmark or Resend.
- Newsletter: Buttondown, Mailjet, or Brevo (EU-hosted).
- Forms: in-app handler + Postmark/Resend; or Basin / Formspree (EU region).
- CMS (optional, if non-dev editors are needed): Sanity or Decap CMS.
- Payments (StartMonday+): Mollie (NL-native) preferred; Stripe as fallback.
- Monitoring: Sentry.
- Uptime: BetterStack or Uptime Robot.

---

## 22. Launch Checklist

### Content
- [ ] All [TBD] items resolved or explicitly deferred with owner + date.
- [ ] Founder headshots delivered and optimized.
- [ ] Impression page populated with at least 12 images.
- [ ] Real testimonials captured (3 minimum) or section removed.
- [ ] Pricing confirmed for Academy and StartForward.
- [ ] All copy proofread by a native speaker in each supported language.

### Legal
- [ ] Privacy policy reviewed by counsel.
- [ ] Cookie policy populated from actual cookie audit.
- [ ] Terms (if any) reviewed.
- [ ] Imprint / Impressum added if required (DE market).

### Tech
- [ ] All redirects from legacy URLs in place.
- [ ] 404 and 500 pages tested.
- [ ] Forms land in the correct inbox; autoresponder confirmed.
- [ ] Cookie consent blocks non-essential cookies until opt-in.
- [ ] Sitemap and robots live and correct.
- [ ] hreflang correct for all locales.
- [ ] Lighthouse targets met on home + all service pages.
- [ ] Accessibility audit passed (axe + manual keyboard + one screen reader run).
- [ ] Analytics verified firing (post-consent only).
- [ ] Backups and rollback plan in place.
- [ ] SSL, HSTS, security headers (`Content-Security-Policy`, `X-Frame-Options`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`).
- [ ] 301s from `www` to apex (or vice versa) — pick one canonical host.

### Post-launch
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools.
- [ ] Monitor Core Web Vitals for the first 30 days.
- [ ] Collect analytics on contact-form conversion; iterate on copy and CTAs.

---

## 23. Outstanding Content Gaps [TBD]

Items that require factual input from the client — do **not** invent:

- [ ] Legal entity name, KvK number, VAT number, registered address
- [ ] Primary contact email and privacy contact email
- [ ] Phone number (optional)
- [ ] LinkedIn URLs — company page, Rolf, Béla
- [ ] Founder headshots (high-resolution, neutral background)
- [ ] Impression page photos (workshops, events) with captions
- [ ] Client logos and testimonial quotes (with permission)
- [ ] Pricing confirmation for AI Business Academy programs and StartForward
- [ ] Next StartForward cohort date and location
- [ ] StartMonday+ billing terms (notice period, top-up policy, VAT)
- [ ] Case studies or client success stories
- [ ] Newsletter lead magnet (e.g., "AI Starter Guide for Business") — content + design
- [ ] Confirmation of supported payment methods
- [ ] Chosen analytics tool and event taxonomy sign-off

---

*Last updated: 23 April 2026. Source: startmonday.ai (scraped and restructured for rebuild).*
