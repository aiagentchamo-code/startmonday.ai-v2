'use client';

import { Container } from '@/Container';
import { Marquee } from '@/Marquee';
import { Reveal } from '@/Reveal';
import { cn } from '@/cn';

const logos = [
  'ChatGPT',
  'Claude',
  'Microsoft Copilot',
  'Gemini',
  'Make',
  'Zapier',
  'n8n',
  'Perplexity',
];

export const LogoStrip = () => {
  return (
    <section className="py-16 md:py-24 border-t border-b border-line bg-surface/50">
      <Container>
        <Reveal className="text-center mb-12">
          <p className="text-ink-muted text-sm md:text-base">
            Technologies we teach and deploy
          </p>
        </Reveal>

        <Marquee speed={40} className="h-16 md:h-20 flex items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className={cn(
                'px-8 md:px-12 flex items-center justify-center',
                'grayscale hover:grayscale-0 transition-all duration-300',
                'text-ink-muted hover:text-ink font-semibold'
              )}
            >
              {logo}
            </div>
          ))}
        </Marquee>
      </Container>
    </section>
  );
};
