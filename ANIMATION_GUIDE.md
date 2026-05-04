# Animation Components Guide

This guide shows how to use the new **Deel-style** animation components that have been added to create smooth, fluid micro-interactions similar to fintech explainer videos.

## Installation Status ✅
- **Framer Motion**: Installed
- **React**: Installed
- **All animations**: Ready to use

## Available Animation Components

### 1. **Reveal** (Existing - Enhanced)
Fade-in with upward slide on scroll.
```jsx
import { Reveal } from '@/Reveal';

<Reveal delay={0.1}>
  <h2>Your content here</h2>
</Reveal>
```
**Props:**
- `delay`: Transition delay in seconds (default: 0)
- `y`: Vertical distance in pixels (default: 32)
- `className`: Optional CSS classes

---

### 2. **ScaleReveal** (NEW)
Fade-in with subtle scale animation.
```jsx
import { ScaleReveal } from '@/animations';

<ScaleReveal delay={0.2}>
  <div class="card">Scale reveal content</div>
</ScaleReveal>
```
**Perfect for:** Cards, featured images, important CTAs
**Props:**
- `delay`: Transition delay (default: 0)
- `duration`: Animation duration (default: 0.7s)

---

### 3. **SlideReveal** (NEW)
Directional slide-in animations.
```jsx
import { SlideReveal } from '@/animations';

<SlideReveal direction="left" distance={40}>
  <p>Slides from left</p>
</SlideReveal>

<SlideReveal direction="right">
  <p>Slides from right</p>
</SlideReveal>
```
**Perfect for:** Side-by-side content, alternating layouts
**Props:**
- `direction`: 'left' | 'right' | 'up' | 'down'
- `distance`: Slide distance in pixels (default: 32)
- `delay`: Transition delay

---

### 4. **FloatReveal** (NEW)
Fade-in with continuous floating animation.
```jsx
import { FloatReveal } from '@/animations';

<FloatReveal intensity={1.5}>
  <img src="hero-image.png" />
</FloatReveal>
```
**Perfect for:** Hero images, floating elements, accent graphics
**Props:**
- `intensity`: Float intensity multiplier (default: 1)
- `delay`: Transition delay

---

### 5. **HoverLift** (NEW)
Interactive hover lift effect.
```jsx
import { HoverLift } from '@/animations';

<HoverLift liftAmount={12}>
  <div class="interactive-card">
    Hover to see lift effect
  </div>
</HoverLift>
```
**Perfect for:** Cards, buttons, clickable elements
**Props:**
- `liftAmount`: How far to lift on hover (default: 8px)
- `className`: Optional CSS classes

---

### 6. **BlurReveal** (NEW)
Blur-in animation for elegant reveals.
```jsx
import { BlurReveal } from '@/animations';

<BlurReveal delay={0.3}>
  <section>
    <h2>Elegant blur reveal</h2>
  </section>
</BlurReveal>
```
**Perfect for:** Text content, sections, subtle reveals
**Props:**
- `delay`: Transition delay
- `className`: Optional CSS classes

---

### 7. **TextReveal** (NEW)
Character-by-character text animation.
```jsx
import { TextReveal } from '@/animations';

<TextReveal delay={0.2}>
  "This text animates character by character"
</TextReveal>
```
**Perfect for:** Headlines, taglines, impactful text
**Props:**
- `delay`: Transition delay
- `className`: Optional CSS classes

---

## Usage Examples

### Hero Section with Multiple Animations
```jsx
<section class="hero">
  <Reveal delay={0}>
    <span class="eyebrow">Your tagline</span>
  </Reveal>
  
  <Reveal delay={0.1}>
    <h1>Main heading here</h1>
  </Reveal>
  
  <SlideReveal direction="up" delay={0.2}>
    <p>Description paragraph</p>
  </SlideReveal>
  
  <FloatReveal delay={0.3}>
    <img src="hero-image.png" alt="Hero" />
  </FloatReveal>
</section>
```

### Card Grid with Stagger
```jsx
import { StaggerGroup, StaggerItem } from '@/Stagger';

<StaggerGroup className="grid grid-cols-3 gap-4">
  {cards.map((card, i) => (
    <StaggerItem key={i}>
      <HoverLift liftAmount={8}>
        <Card {...card} />
      </HoverLift>
    </StaggerItem>
  ))}
</StaggerGroup>
```

### Feature Section with Alternating Slides
```jsx
<section class="features">
  <SlideReveal direction="left">
    <div class="content">
      <h2>Left-aligned content</h2>
      <p>Description here</p>
    </div>
  </SlideReveal>
  
  <SlideReveal direction="right">
    <img src="feature.png" alt="Feature" />
  </SlideReveal>
</section>
```

---

## Animation Timing & Easing

All animations use the **premium easing curve**:
```
cubic-bezier(0.22, 1, 0.36, 1)
```

This creates smooth, natural motion perfect for modern UX.

**Default durations:**
- Reveal animations: 0.65-0.8 seconds
- Floating animation: 4 seconds (infinite loop)
- Hover animations: 0.3 seconds

---

## Respecting User Preferences

All animations automatically respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are disabled */
}
```

---

## Performance Tips

1. **Use `delay` strategically** - Stagger animations to avoid overwhelming the browser
2. **Combine with `viewport`** - Elements only animate when they're about to enter view
3. **Limit simultaneous animations** - Keep complex scenes to 3-5 animated elements at once
4. **Use `will-change` in CSS** - For performance-critical animations

---

## Examples Used on Site

- **Hero section**: Reveal + FloatReveal
- **Service cards**: StaggerGroup + HoverLift
- **Testimonials**: ScaleReveal
- **Stats section**: Reveal with CountUp
- **CTA buttons**: HoverLift
- **Section headers**: BlurReveal

---

## Advanced: Creating Custom Animations

If you need custom animations, extend Framer Motion directly:

```jsx
import { motion } from 'framer-motion';

export const CustomReveal = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, customProp: 0 }}
    whileInView={{ opacity: 1, customProp: 100 }}
    transition={{
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true, margin: '-80px' }}
    {...props}
  >
    {children}
  </motion.div>
);
```

---

## Troubleshooting

**Animations not showing?**
- Make sure component is inside `<motion.div>` from Framer Motion
- Check that Framer Motion is installed: `npm ls framer-motion`
- Verify client directive: Add `'use client';` at top of component

**Performance issues?**
- Reduce number of simultaneous animations
- Increase `viewport.margin` to animate earlier
- Use CSS transforms instead of position changes
- Profile with DevTools Performance tab

---

For more Framer Motion features, see: https://www.framer.com/motion/
