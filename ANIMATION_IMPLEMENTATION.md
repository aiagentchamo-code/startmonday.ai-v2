# Animation Implementation Guide for StartMonday.AI

## Quick Start

### Already installed:
✅ Framer Motion  
✅ React  
✅ Lenis (smooth scroll)  
✅ All dependencies  

### Ready-to-use animation components:
- `Reveal` - Fade + slide up
- `ScaleReveal` - Scale in with fade
- `SlideReveal` - Directional slides
- `FloatReveal` - Floating loop animation
- `HoverLift` - Interactive hover lift
- `BlurReveal` - Blur reveal effect
- `TextReveal` - Character-by-character text
- `StaggerGroup/StaggerItem` - Staggered animations

---

## Where to Apply Animations on StartMonday.AI

### 1. Service Cards Section
**Current file:** `src/pages/index.astro` (line 258)

Add interactive hover effects to cards:
```jsx
import { HoverLift } from '@/animations/HoverLift';

{services.map((service, i) => (
  <HoverLift liftAmount={12} key={i}>
    <a href={service.href} className={...}>
      {/* Card content */}
    </a>
  </HoverLift>
))}
```

**Result:** Cards lift up smoothly on hover with shadow enhancement

---

### 2. Process Steps
**Current file:** `src/pages/index.astro` (line 290)

Add staggered animations to process steps:
```jsx
import { StaggerGroup, StaggerItem } from '@/Stagger';
import { ScaleReveal } from '@/animations/ScaleReveal';

<StaggerGroup>
  {process.map((step, i) => (
    <StaggerItem key={i}>
      <article className="card...">
        {/* Step content */}
      </article>
    </StaggerItem>
  ))}
</StaggerGroup>
```

**Result:** Steps fade and slide in sequentially

---

### 3. Audience List Items
**Current file:** `src/pages/index.astro` (line 316)

Enhance audience list with blur reveal:
```jsx
import { BlurReveal } from '@/animations/BlurReveal';

{audiences.map((item, i) => (
  <BlurReveal delay={i * 0.1} key={i}>
    <div className="reveal...">
      {/* Item content */}
    </div>
  </BlurReveal>
))}
```

**Result:** Items reveal with elegant blur effect

---

### 4. Testimonials
**Current file:** `src/pages/index.astro` (line 356)

Add scale animation for testimonial cards:
```jsx
import { ScaleReveal } from '@/animations/ScaleReveal';

{testimonials.map((t, i) => (
  <ScaleReveal delay={i * 0.1} key={i}>
    <figure className="reveal card...">
      {/* Testimonial content */}
    </figure>
  </ScaleReveal>
))}
```

**Result:** Cards scale in smoothly as they enter view

---

## Advanced Implementation Examples

### Hero Section Enhancement
```astro
---
import { Reveal } from '../Reveal';
import { FloatReveal } from '../animations/FloatReveal';
---

<div class="hero-grid-bg" aria-hidden="true"></div>

<Reveal delay={0}>
  <div class="reveal mb-6 inline-flex...">
    Knowledge. Action. Outcome.
  </div>
</Reveal>

<Reveal delay={0.1}>
  <h1>AI training with immediate impact.</h1>
</Reveal>

<FloatReveal delay={0.2}>
  <div class="hero-mockup-wrap">
    {/* Hero visual content */}
  </div>
</FloatReveal>
```

---

### Interactive Feature Section
```jsx
import { SlideReveal } from '@/animations/SlideReveal';
import { HoverLift } from '@/animations/HoverLift';

<section>
  <SlideReveal direction="left">
    <div>
      <h2>Feature Title</h2>
      <p>Description</p>
    </div>
  </SlideReveal>

  <SlideReveal direction="right">
    <HoverLift liftAmount={8}>
      <img src="feature.png" alt="Feature" />
    </HoverLift>
  </SlideReveal>
</section>
```

---

## Animation Staggering Strategy

When animating multiple items, use delays to create a cascade effect:

```jsx
{items.map((item, i) => (
  <Reveal delay={i * 0.08} key={i}>  // 80ms between each
    {/* Content */}
  </Reveal>
))}
```

**Recommended delay increments:**
- Dense content (many items): 0.06s - 0.08s
- Sparse content: 0.10s - 0.15s
- Hero sections: 0.15s - 0.20s

---

## Performance Optimization

### For Large Lists (50+ items)
```jsx
// Use CSS animations instead
.animated-item {
  animation: slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--index) * 0.05s);
}
```

### Disable animations on mobile
```jsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

const isMobile = useMediaQuery('(max-width: 768px)');

{!isMobile && (
  <FloatReveal>
    <HeroImage />
  </FloatReveal>
)}
```

---

## Viewport Triggers

All animations trigger when elements enter view:
- **Margin:** -80px (starts animation 80px before element is visible)
- **Once:** true (animates only once on first view)

To customize:
```jsx
<motion.div
  whileInView={{ /* ... */ }}
  viewport={{ once: true, margin: '-100px' }}
>
```

---

## Color & Accent Integration

Match animations with brand colors for micro-interactions:

```jsx
<HoverLift liftAmount={8}>
  <button className="btn-primary">
    {/* Uses gradient: #0E0E2C → #4F46E5 → #6C5CE7 */}
  </button>
</HoverLift>
```

**Brand colors available:**
- Primary: `#6C5CE7` (Purple)
- Accent: `#FFD166` (Gold)
- Mint: `#5EEAD4` (Teal)
- Warm: `#FF8A65` (Orange)

---

## Accessibility Checklist

✅ Respects `prefers-reduced-motion`  
✅ All animations under 1 second  
✅ No flashing or strobing effects  
✅ Text remains readable during animation  
✅ Interactive elements have hover states  

Test with:
```bash
# macOS
defaults write NSGlobalDomain AppleReduceMotionEnabled 1

# Windows: Settings → Ease of Access → Display
```

---

## Next Steps

1. **Apply animations** to service cards (HoverLift)
2. **Enhance process steps** (StaggerGroup)
3. **Add blur reveals** to audience list
4. **Scale animations** for testimonials
5. **Test on mobile** and optimize if needed
6. **Gather user feedback** on animation timing

---

## Troubleshooting

**Animation not showing?**
- Ensure client directive: `'use client';` at top
- Check Framer Motion import is correct
- Verify element is within viewport when viewing

**Animation timing feels off?**
- Adjust `delay` prop (in seconds)
- Change `duration` prop (default: 0.7s)
- Test with different `ease` curves

**Performance issues?**
- Reduce number of simultaneous animations
- Use CSS for simple transforms
- Increase viewport margin to animate earlier
- Profile with DevTools

---

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Current CSS Animations](src/styles/global.css)
- [Animation Components](src/animations/)
- [Easing Curves](https://easings.net/)

