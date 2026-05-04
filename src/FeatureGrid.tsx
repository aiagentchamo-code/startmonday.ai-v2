'use client';

import { ArrowRight, GraduationCap, Sparkles, Workflow } from 'lucide-react';
import { Card } from '@/Card';
import { Container } from '@/Container';
import { Eyebrow } from '@/Eyebrow';
import { Reveal } from '@/Reveal';
import { StaggerGroup, StaggerItem } from '@/Stagger';

const features = [
  {
    icon: GraduationCap,
    title: 'AI Business Academy',
    description:
      'Executive workshops, team bootcamps, and certificate programs designed for applied business use.',
  },
  {
    icon: Sparkles,
    title: 'StartMonday+',
    description:
      'Flexible ongoing AI support, tools, and expert help through a practical points-based subscription.',
  },
  {
    icon: Workflow,
    title: 'AI Solutions Lab',
    description:
      'Custom chatbots, automations, and internal AI agents scoped and built with your team.',
  },
];

export const FeatureGrid = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <div className="mb-16 md:mb-20">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mb-6 mt-4 font-display text-ink">
              Four ways to move from AI-curious to AI-capable
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.2}>
              <p className="max-w-2xl text-lg text-ink-muted">
                Practical formats for organizations that want adoption, not another
                abstract slide deck.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="#academy"
                className="flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                Explore the approach <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <Card>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-ink">{feature.title}</h3>
                  <p className="text-ink-muted">{feature.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
};
