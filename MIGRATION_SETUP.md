# Next.js 15 Migration Setup

This project has been prepared for migration from Astro to Next.js 15. All components have been created and organized. Follow these steps to complete the setup:

## Setup Instructions

### Option 1: Automated Setup (Windows)
1. Run the setup script:
   ```bash
   setup.bat
   ```
   This will:
   - Create the proper directory structure
   - Move all components to their correct locations
   - Clean up old Astro files
   - Install dependencies
   - Start the dev server

### Option 2: Manual Setup
If the batch script doesn't work or you're on macOS/Linux, run these commands:

```bash
# 1. Create directory structure
mkdir -p src/app src/components/{motion,ui,decor,sections} src/lib

# 2. Move components to proper locations
# UI Components
mv src/Button.tsx src/components/ui/
mv src/Container.tsx src/components/ui/
mv src/Eyebrow.tsx src/components/ui/
mv src/Card.tsx src/components/ui/

# Motion Components  
mv src/LenisProvider.tsx src/components/motion/
mv src/Reveal.tsx src/components/motion/
mv src/Stagger.tsx src/components/motion/
mv src/Parallax.tsx src/components/motion/
mv src/Marquee.tsx src/components/motion/
mv src/CountUp.tsx src/components/motion/

# Decorative Components
mv src/Blob.tsx src/components/decor/
mv src/Orbit.tsx src/components/decor/
mv src/FloatingShape.tsx src/components/decor/

# Section Components
mv src/Navbar.tsx src/components/sections/
mv src/Hero.tsx src/components/sections/
mv src/LogoStrip.tsx src/components/sections/
mv src/FeatureGrid.tsx src/components/sections/
mv src/SplitFeature.tsx src/components/sections/
mv src/Stats.tsx src/components/sections/
mv src/Testimonials.tsx src/components/sections/
mv src/CtaBanner.tsx src/components/sections/
mv src/Footer.tsx src/components/sections/

# Lib
mv src/cn.ts src/lib/

# App files
mv app_layout.tsx src/app/layout.tsx
mv app_page.tsx src/app/page.tsx
mv app_globals.css src/app/globals.css

# 3. Clean up old Astro files
rm -rf src/layouts src/pages src/styles src/env.d.ts .astro astro.config.mjs

# 4. Clean up temporary files
rm app_layout.tsx app_page.tsx app_globals.css setup.bat

# 5. Install dependencies
npm install

# 6. Start dev server
npm run dev
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Lenis provider
│   ├── page.tsx            # Composed landing page
│   └── globals.css         # Global styles, fonts, animations
├── components/
│   ├── motion/             # Animation components
│   │   ├── Reveal.tsx
│   │   ├── Stagger.tsx
│   │   ├── Parallax.tsx
│   │   ├── Marquee.tsx
│   │   ├── CountUp.tsx
│   │   └── LenisProvider.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Eyebrow.tsx
│   │   └── Card.tsx
│   ├── decor/              # Decorative elements
│   │   ├── Blob.tsx
│   │   ├── Orbit.tsx
│   │   └── FloatingShape.tsx
│   └── sections/           # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── LogoStrip.tsx
│       ├── FeatureGrid.tsx
│       ├── SplitFeature.tsx
│       ├── Stats.tsx
│       ├── Testimonials.tsx
│       ├── CtaBanner.tsx
│       └── Footer.tsx
└── lib/
    └── cn.ts               # Utility function
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion + Lenis
- **Icons**: lucide-react
- **Fonts**: Inter (body) + Plus Jakarta Sans (headings)

## Features

- ✅ Responsive design (375px to 4K)
- ✅ Smooth scroll with Lenis
- ✅ Scroll-triggered animations
- ✅ Stagger animations for grids
- ✅ Parallax effects
- ✅ Marquee carousel
- ✅ Number counter animations
- ✅ Full accessibility (WCAG AA)
- ✅ Reduced motion support
- ✅ Mobile-optimized hamburger menu

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Customization

### Colors
Edit the color tokens in `src/app/globals.css`:
```css
--color-accent: #6C5CE7;
--color-mint: #5EEAD4;
--color-warm: #FF8A65;
```

### Branding
Replace `[BRAND]` placeholders throughout:
- `src/components/sections/Navbar.tsx`
- `src/components/sections/Hero.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`

### Content
Update placeholder copy in `src/app/page.tsx` and individual section components.

## Testing Checklist

- [ ] npm run build succeeds with zero errors
- [ ] npm run dev starts without console errors
- [ ] All 9 sections visible and animated
- [ ] Logo strip loops infinitely
- [ ] Stats numbers count up on scroll
- [ ] Buttons have hover effects
- [ ] Mobile responsive at 375px width
- [ ] Keyboard navigation works (Tab through elements)
- [ ] Reduced motion respected in OS settings
- [ ] Lighthouse score 95+

## Next Steps

1. Run the setup script
2. Replace `[BRAND]` with your brand name throughout the codebase
3. Update content and copy
4. Replace placeholder images with real assets
5. Test on various devices and browsers
6. Deploy to Vercel

Enjoy your new Next.js 15 landing page! 🚀
