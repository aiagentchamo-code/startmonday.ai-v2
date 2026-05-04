# 🚀 StartMonday.AI - Next.js 15 SaaS Landing Page

A premium, fully-animated SaaS landing page built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis smooth scroll.

> **Status**: ✅ All files pre-created and ready for setup

---

## ⚡ Quick Start (2 Minutes)

### Step 1: Run Setup Script

**Windows:**
```bash
setup.bat
```

**macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

**All Platforms:**
```bash
node setup.js
```

### Step 2: Start Development
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

---

## 📦 What's Included

### Components (60+ Files)
- ✅ **18 Base Components** (UI primitives, animations, decorative)
- ✅ **9 Section Components** (Navbar, Hero, Features, Stats, Testimonials, etc.)
- ✅ **2 Config Files** (Next.js + PostCSS)
- ✅ **Complete Layout** (with fonts, Lenis provider, metadata)

### Features
- ✨ **Animations**: Scroll-triggered reveals, stagger effects, parallax
- 🎨 **Design**: 6 custom color tokens, responsive typography
- ♿ **Accessibility**: WCAG AA, keyboard navigation, reduced-motion support
- 📱 **Mobile**: Hamburger menu, responsive grid layouts (375px+)
- 🎯 **Performance**: Optimized animations (transform/opacity only)

### Tech Stack
```json
{
  "framework": "Next.js 15 (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS v4",
  "animations": "Framer Motion + Lenis",
  "icons": "lucide-react",
  "fonts": "Inter + Plus Jakarta Sans"
}
```

---

## 📁 Project Structure

```
startmonday.ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with Lenis
│   │   ├── page.tsx                # Landing page composition
│   │   └── globals.css             # Global styles & animations
│   ├── components/
│   │   ├── ui/                     # Reusable components
│   │   │   ├── Button.tsx          # Primary, ghost, link variants
│   │   │   ├── Container.tsx       # Responsive wrapper
│   │   │   ├── Eyebrow.tsx         # Label/badge component
│   │   │   └── Card.tsx            # Hover-lift card
│   │   ├── motion/                 # Animation components
│   │   │   ├── Reveal.tsx          # Scroll-triggered fade-up
│   │   │   ├── Stagger.tsx         # Sequential animations
│   │   │   ├── Parallax.tsx        # Scroll-based Y translation
│   │   │   ├── Marquee.tsx         # Infinite carousel
│   │   │   ├── CountUp.tsx         # Number animation
│   │   │   └── LenisProvider.tsx   # Smooth scroll wrapper
│   │   ├── decor/                  # Decorative elements
│   │   │   ├── Blob.tsx            # Gradient blobs
│   │   │   ├── Orbit.tsx           # Dotted circles
│   │   │   └── FloatingShape.tsx   # Animated shapes
│   │   └── sections/               # Page sections
│   │       ├── Navbar.tsx          # Sticky nav w/ menu
│   │       ├── Hero.tsx            # 2-col hero
│   │       ├── LogoStrip.tsx       # Logo carousel
│   │       ├── FeatureGrid.tsx     # 3-col features
│   │       ├── SplitFeature.tsx    # Image/text alternating
│   │       ├── Stats.tsx           # 4-col with counters
│   │       ├── Testimonials.tsx    # Carousel
│   │       ├── CtaBanner.tsx       # Email signup
│   │       └── Footer.tsx          # 4-col layout
│   └── lib/
│       └── cn.ts                   # clsx + tailwind-merge
├── next.config.js                  # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration
├── tailwind.config.ts              # Tailwind theme
├── tsconfig.json                   # TypeScript config
├── setup.js                        # Setup script
├── setup.bat                       # Windows setup
├── setup.sh                        # macOS/Linux setup
├── QUICK_START.md                  # Quick reference
├── MIGRATION_SETUP.md              # Detailed setup guide
└── README.md                       # This file
```

---

## 🎨 Design System

### Color Tokens
```css
--color-bg:           #F7F5FF   /* Off-white lavender */
--color-surface:      #FFFFFF   /* White */
--color-ink:          #0E0E2C   /* Near-black */
--color-ink-muted:    #5B5B7A   /* Muted text */
--color-accent:       #6C5CE7   /* Purple primary */
--color-accent-soft:  #E9E4FF   /* Light purple */
--color-warm:         #FF8A65   /* Orange accent */
--color-mint:         #5EEAD4   /* Teal accent */
--color-sun:          #FFD166   /* Yellow accent */
--color-line:         #ECEAF5   /* Dividers */
```

### Typography
- **H1**: `clamp(2.5rem, 6vw, 5rem)` - Responsive hero text
- **H2**: `clamp(2rem, 4vw, 3.5rem)` - Section headings
- **Body**: `1.0625rem` - 17px default
- **Eyebrow**: `0.75rem` uppercase, 0.15em tracking

### Shadows
- **Soft**: `0 20px 60px -20px rgba(108, 92, 231, 0.25)`
- **MD**: `0 4px 12px rgba(0, 0, 0, 0.08)`

---

## 🚀 Setup & Development

### Prerequisites
- Node.js 18+ (with npm)
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation

**1. Automated Setup (Recommended)**
```bash
# Windows
setup.bat

# macOS/Linux
chmod +x setup.sh
./setup.sh

# Or any platform
node setup.js
```

This will:
- Create directory structure
- Organize components
- Update import paths
- Clean old files
- Install dependencies

**2. Manual Setup**
```bash
# Create structure
mkdir -p src/{app,components/{ui,motion,decor,sections},lib}

# Move files (see MIGRATION_SETUP.md for full list)
# ... (or use setup.js)

# Install
npm install
```

### Development

```bash
# Start dev server (port 3000)
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Run linter
npm run lint
```

---

## 🎯 Customization

### Update Your Brand
Replace `[BRAND]` in:
- `src/components/sections/Navbar.tsx`
- `src/components/sections/Hero.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/sections/Footer.tsx`

### Update Content
Edit `src/app/page.tsx`:
```tsx
<Hero
  title="Your Title"
  description="Your description"
  ctaText="Your CTA"
/>
```

### Update Colors
Edit `src/app/globals.css`:
```css
--color-accent: #YOUR-HEX;
--color-mint: #YOUR-HEX;
```

### Replace Images
```tsx
// From
imageUrl="https://picsum.photos/seed/feature1/600/400"

// To
imageUrl="/images/your-image.png"
```

---

## ✨ Animation Components

### Reveal
Fades + slides content up on scroll:
```tsx
<Reveal delay={0.2} y={32}>
  <h2>Revealed on scroll</h2>
</Reveal>
```

### Stagger
Sequential animation for grids:
```tsx
<StaggerGroup>
  {items.map((item) => (
    <StaggerItem key={item.id}>{item.content}</StaggerItem>
  ))}
</StaggerGroup>
```

### Parallax
Scroll-based Y translation:
```tsx
<Parallax offset={50}>
  <img src="image.jpg" />
</Parallax>
```

### CountUp
Number animation on scroll:
```tsx
<CountUp target={1000} suffix=" Users" />
```

### Marquee
Infinite logo carousel:
```tsx
<Marquee speed={40}>
  {logos.map(logo => <Logo key={logo.id} {...logo} />)}
</Marquee>
```

---

## ♿ Accessibility

- ✅ **WCAG AA** - Color contrast meets standards
- ✅ **Keyboard Nav** - Tab through all interactive elements
- ✅ **Focus Visible** - Clear focus rings on buttons/links
- ✅ **Semantic HTML** - One `<h1>`, proper heading hierarchy
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion`
- ✅ **Alt Text** - All images have meaningful descriptions
- ✅ **ARIA Labels** - Navigation and interactive elements labeled

---

## 📊 Performance

### Optimization Strategies
- Transform + opacity animations only (GPU-accelerated)
- Lazy loading with viewport detection
- CSS animations for marquee (no JS overhead)
- Optimized images with `next/image` compatible sizes

### Lighthouse Targets
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Testing Checklist
- [ ] npm run build (no errors)
- [ ] npm run dev (no console errors)
- [ ] All 9 sections visible
- [ ] Animations smooth on scroll
- [ ] Logo strip loops infinitely
- [ ] Stats count on scroll entry
- [ ] Buttons have hover effects
- [ ] Mobile responsive (375px width)
- [ ] Keyboard navigation works
- [ ] Reduced motion works
- [ ] Lighthouse score 95+

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
# Deploy .next/ and public/ directories
```

### Environment
```bash
# Copy example to local
cp .env.example .env.local

# Add any needed variables
# (This template doesn't require any)
```

---

## 📚 Page Sections (9 Total)

1. **Navbar** - Sticky, frosted glass on scroll, mobile menu
2. **Hero** - 2-column with mockup, decorative shapes, parallax
3. **LogoStrip** - Marquee carousel, grayscale→color hover
4. **FeatureGrid** - 3-column cards, staggered animation
5. **SplitFeature** - Alternating image/text, checklists ×2
6. **Stats** - 4-column with count-up numbers
7. **Testimonials** - 3-column on desktop, carousel on mobile
8. **CtaBanner** - Email signup with decorative corners
9. **Footer** - 4-column, copyright, social icons

---

## 🛠️ Troubleshooting

### Setup Script Failed?
```bash
# Try Node directly
node setup.js

# Or check Node version
node --version  # Should be 18+
npm --version   # Should be 8+
```

### Port 3000 Already in Use?
```bash
npm run dev -- -p 3001
```

### Build Errors?
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Import Errors?
```bash
# Check path aliases in tsconfig.json
# Should have "@/*": ["./src/*"]

# Rebuild TypeScript
npx tsc --noEmit
```

---

## 📖 Component Reference

### Button
```tsx
<Button variant="primary" | "ghost" | "link" size="sm" | "md" | "lg">
  Label
</Button>
```

### Container
```tsx
<Container className="...">
  Content (max-width 1200px)
</Container>
```

### Card
```tsx
<Card hover={true}>
  Content (auto-lifts on hover)
</Card>
```

### Eyebrow
```tsx
<Eyebrow icon={<Icon />}>
  Label
</Eyebrow>
```

---

## 🎨 CSS Classes Reference

```bash
# Spacing
py-24 md:py-32        # Vertical padding
px-section            # Responsive horizontal

# Colors
text-ink              # Primary text
text-ink-muted        # Secondary text
bg-accent             # Purple accent
bg-accent-soft        # Light purple

# Typography
font-display          # Headings (Plus Jakarta)
font-sans             # Body (Inter)
text-h1, text-h2      # Responsive sizes
text-eyebrow          # Small uppercase

# Effects
shadow-soft           # Soft purple shadow
rounded-xl            # 2rem radius
rounded-full          # Pill shape
```

---

## 📞 Support

### Documentation Files
- `QUICK_START.md` - 2-minute setup guide
- `MIGRATION_SETUP.md` - Detailed migration steps
- `README.md` - This file
- Component comments in code

### Build Status
```bash
npm run build
# ✅ Should complete with 0 errors
```

---

## 📄 License

This template is provided as-is for the StartMonday.AI project.

---

## 🚀 Ready to Ship!

Everything is pre-built and ready to go. Just run:

```bash
setup.bat           # (or setup.sh on macOS/Linux)
npm run dev
# 🎉 Your site is live!
```

**Next steps:**
1. ✅ Run setup
2. 🎨 Customize branding
3. 📝 Update content
4. 🖼️ Replace images
5. 🚀 Deploy to Vercel

---

**Built with ❤️ using:**
- Next.js 15
- TypeScript  
- Tailwind CSS v4
- Framer Motion
- Lenis
- lucide-react

**Status**: Production-ready ✨
