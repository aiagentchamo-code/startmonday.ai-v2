'use client';

import { Calendar, Languages, Rocket, Users } from 'lucide-react';
import { Container } from '@/Container';
import { CountUp } from '@/CountUp';
import { Reveal } from '@/Reveal';

const stats = [
  {
    icon: Users,
    color: 'text-accent',
    label: '150',
    text: 'Professionals trained',
  },
  {
    icon: Rocket,
    color: 'text-mint',
    label: '70',
    text: 'Years digital leadership',
  },
  {
    icon: Languages,
    color: 'text-warm',
    label: '4',
    text: 'Languages supported',
  },
  {
    icon: Calendar,
    color: 'text-sun',
    label: '5',
    text: 'Working days to start',
  },
];

export const Stats = () => {
  return (
    <section id="results" className="bg-gradient-to-br from-accent-soft/40 to-mint/10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.text} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-soft md:mx-0">
                    <Icon className={stat.color} size={24} />
                  </div>
                  <div className="mb-2 flex items-baseline justify-center gap-1 md:justify-start">
                    <span className="text-3xl font-bold text-ink md:text-4xl">
                      <CountUp target={parseInt(stat.label)} suffix="+" />
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted md:text-base">{stat.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
