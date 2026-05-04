# Animation Cheatsheet - Copy & Paste Examples

## Simple Fade + Slide Up (Default)
```jsx
import { Reveal } from '@/Reveal';

<Reveal>
  <h2>Your content</h2>
</Reveal>
```

---

## Fade + Scale In
```jsx
import { ScaleReveal } from '@/animations';

<ScaleReveal delay={0.1}>
  <div class="card">Card content</div>
</ScaleReveal>
```

---

## Hover Lift Effect
```jsx
import { HoverLift } from '@/animations';

<HoverLift liftAmount={8}>
  <div class="card">Hover to lift</div>
</HoverLift>
```

---

## Staggered List/Grid
```jsx
import { StaggerGroup, StaggerItem } from '@/Stagger';

<StaggerGroup className="grid grid-cols-3 gap-4">
  {items.map((item, i) => (
    <StaggerItem key={i}>
      <div>{item}</div>
    </StaggerItem>
  ))}
</StaggerGroup>
```

---

## Floating Image/Visual
```jsx
import { FloatReveal } from '@/animations';

<FloatReveal intensity={1.2}>
  <img src="hero-image.png" alt="Hero" />
</FloatReveal>
```

---

## Slide from Left
```jsx
import { SlideReveal } from '@/animations';

<SlideReveal direction="left" distance={50}>
  <div>Content slides from left</div>
</SlideReveal>
```

---

## Slide from Right
```jsx
import { SlideReveal } from '@/animations';

<SlideReveal direction="right">
  <div>Content slides from right</div>
</SlideReveal>
```

---

## Blur In Effect
```jsx
import { BlurReveal } from '@/animations';

<BlurReveal delay={0.2}>
  <section>Blurs in smoothly</section>
</BlurReveal>
```

---

## Animated Text (Letter by Letter)
```jsx
import { TextReveal } from '@/animations';

<TextReveal delay={0.1}>
  "Each letter animates in"
</TextReveal>
```

---

## Complete Feature Section
```jsx
import { SlideReveal } from '@/animations';
import { HoverLift } from '@/animations';

<section className="grid lg:grid-cols-2 gap-8">
  <SlideReveal direction="left">
    <div>
      <h2>Feature Title</h2>
      <p>Description goes here</p>
    </div>
  </SlideReveal>

  <SlideReveal direction="right">
    <HoverLift>
      <img src="feature.png" alt="Feature" />
    </HoverLift>
  </SlideReveal>
</section>
```

---

## Card Grid with Hover
```jsx
import { StaggerGroup, StaggerItem } from '@/Stagger';
import { HoverLift } from '@/animations';

<StaggerGroup className="grid grid-cols-3 gap-4">
  {cards.map((card, i) => (
    <StaggerItem key={i}>
      <HoverLift liftAmount={8}>
        <div className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </HoverLift>
    </StaggerItem>
  ))}
</StaggerGroup>
```

---

## Hero with Multiple Animations
```jsx
import { Reveal } from '@/Reveal';
import { FloatReveal } from '@/animations';

<section className="hero grid lg:grid-cols-2 gap-8">
  <div>
    <Reveal delay={0}>
      <span className="eyebrow">Your tagline</span>
    </Reveal>
    <Reveal delay={0.1}>
      <h1>Heading here</h1>
    </Reveal>
    <Reveal delay={0.2}>
      <p>Description paragraph</p>
    </Reveal>
  </div>

  <FloatReveal delay={0.3}>
    <img src="hero.png" alt="Hero" />
  </FloatReveal>
</section>
```

---

## Testimonials with Scale
```jsx
import { ScaleReveal } from '@/animations';

<div className="grid grid-cols-3 gap-4">
  {testimonials.map((t, i) => (
    <ScaleReveal delay={i * 0.1} key={i}>
      <figure className="card p-8">
        <blockquote>"{t.quote}"</blockquote>
        <figcaption className="mt-4">
          <p className="font-bold">{t.name}</p>
          <p className="text-sm text-gray-600">{t.title}</p>
        </figcaption>
      </figure>
    </ScaleReveal>
  ))}
</div>
```

---

## All Delays Reference
```jsx
delay={0}     // No delay
delay={0.08}  // 80ms
delay={0.1}   // 100ms
delay={0.15}  // 150ms
delay={0.2}   // 200ms
delay={0.3}   // 300ms
delay={0.5}   // 500ms
```

---

## All Directions Reference
```jsx
<SlideReveal direction="up">
<SlideReveal direction="down">
<SlideReveal direction="left">
<SlideReveal direction="right">
```

---

## Common Props
```jsx
// Reveal components
delay={0.1}        // Transition delay in seconds
className="p-4"    // Tailwind classes

// SlideReveal only
direction="left"   // up | down | left | right
distance={40}      // Pixels to slide

// FloatReveal only
intensity={1.5}    // Float speed multiplier

// HoverLift only
liftAmount={12}    // Pixels to lift on hover

// TextReveal only
delay={0.2}        // Start delay in seconds
```

---

## Quick Animation Timeline
```
0.0s  - Reveal delay={0}
0.1s  - Reveal delay={0.1}
0.2s  - Reveal delay={0.2}
0.3s  - Reveal delay={0.3}
```

Use this to create cascade/waterfall effects in hero sections.

---

## Performance Tips

**✅ DO:**
- Use delays to stagger animations (0.08s - 0.1s apart)
- Combine HoverLift with StaggerGroup
- Use ScaleReveal for cards/images
- Apply FloatReveal to hero visuals

**❌ DON'T:**
- Animate every element on page
- Use delays longer than 0.5s
- Combine 3+ animations on single element
- Animate text continuously (use delay only)

---

## Testing Animations

1. **On slower devices:** Chrome DevTools → Network: Slow 3G
2. **Accessibility:** DevTools → Rendering → Emulate CSS Media Feature prefers-reduced-motion
3. **Mobile:** Use responsive preview in DevTools
4. **Full page:** Scroll through and check timing feels natural

---

## Color Classes to Combine
```jsx
<HoverLift>
  <div className="bg-accent-soft text-accent hover:bg-accent/10">
    Colored + animated
  </div>
</HoverLift>
```

---

## Next Level: Custom Timing

Override animation duration:
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{
    duration: 1.2,  // Slower: 1.2s instead of 0.7s
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Custom timed content
</motion.div>
```

---

That's it! Copy these patterns into your pages and adjust delays/distances as needed. 🚀
