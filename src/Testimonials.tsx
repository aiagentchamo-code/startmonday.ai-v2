'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card } from '@/Card';
import { Container } from '@/Container';
import { Eyebrow } from '@/Eyebrow';
import { Reveal } from '@/Reveal';

const testimonials = [
  {
    quote:
      'The workshop cut through the noise around AI and gave our team concrete tools they could apply the very next day.',
    author: 'Workshop participant',
    role: 'Operations Manager',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
  },
  {
    quote:
      'Rolf translated AI concepts into business decisions. We left the bootcamp with a clear roadmap, not just enthusiasm.',
    author: 'Bootcamp participant',
    role: 'Managing Director',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
  },
  {
    quote:
      'We came in sceptical about AI relevance and left with a working prototype plus a list of automations to build.',
    author: 'Program participant',
    role: 'Senior Engineer',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
  },
  {
    quote:
      'StartMonday made the first steps practical, focused, and easy for non-technical colleagues to understand.',
    author: 'Academy participant',
    role: 'Team Lead',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <Reveal>
            <Eyebrow>What participants say</Eyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-ink">Results that speak for themselves</h2>
          </Reveal>
        </div>

        <div className="mb-8 hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <Reveal key={testimonial.author} delay={i * 0.1}>
              <Card hover={false} className={i === 1 ? 'scale-[1.03] border-accent/30 shadow-soft' : ''}>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={16} className="fill-sun text-sun" />
                    ))}
                  </div>
                  <p className="text-ink-muted italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 border-t border-line pt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">{testimonial.author}</p>
                      <p className="text-xs text-ink-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative mb-8 min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card hover={false}>
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonials[current].rating)].map((_, j) => (
                        <Star key={j} size={16} className="fill-sun text-sun" />
                      ))}
                    </div>
                    <p className="text-ink-muted italic">"{testimonials[current].quote}"</p>
                    <div className="flex items-center gap-3 border-t border-line pt-4">
                      <img
                        src={testimonials[current].avatar}
                        alt={testimonials[current].author}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-ink">{testimonials[current].author}</p>
                        <p className="text-xs text-ink-muted">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="rounded-full border border-line p-2 transition-colors hover:bg-line/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="rounded-full border border-line p-2 transition-colors hover:bg-line/20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
};
