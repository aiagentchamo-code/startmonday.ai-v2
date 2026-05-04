'use client';

import { Check, ArrowRight } from 'lucide-react';
import { Container } from '@/Container';
import { Eyebrow } from '@/Eyebrow';
import { Reveal } from '@/Reveal';
import { Parallax } from '@/Parallax';
import { cn } from '@/cn';

interface SplitFeatureProps {
  imagePosition?: 'left' | 'right';
  eyebrow?: string;
  title: string;
  description: string;
  items: string[];
  imageUrl?: string;
}

export const SplitFeature = ({
  imagePosition = 'right',
  eyebrow = 'Feature',
  title,
  description,
  items,
  imageUrl = 'https://picsum.photos/seed/feature/600/400',
}: SplitFeatureProps) => {
  const content = (
    <div className="space-y-6 md:space-y-8">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display text-ink">{title}</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-ink-muted text-lg max-w-md">{description}</p>
      </Reveal>

      <div className="space-y-3">
        {items.map((item, i) => (
          <Reveal key={i} delay={0.3 + i * 0.05}>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={16} className="text-ink" />
              </div>
              <span className="text-ink-muted">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5}>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors group"
        >
          Learn more{' '}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </Reveal>
    </div>
  );

  const image = (
    <Reveal delay={0.2}>
      <Parallax offset={30}>
        <img
          src={imageUrl}
          alt="Feature demonstration"
          className="w-full rounded-2xl shadow-soft"
        />
      </Parallax>
    </Reveal>
  );

  return (
    <section id={eyebrow === 'AI Business Academy' ? 'academy' : undefined} className="py-24 md:py-32">
      <Container>
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center',
            imagePosition === 'left' && 'md:grid-cols-2 md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
          )}
        >
          {imagePosition === 'left' ? (
            <>
              {content}
              {image}
            </>
          ) : (
            <>
              {image}
              {content}
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
