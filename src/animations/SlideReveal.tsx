'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  distance?: number;
}

export const SlideReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className,
  distance = 32,
}: SlideRevealProps) => {
  const initialValues = {
    left: { opacity: 0, x: -distance },
    right: { opacity: 0, x: distance },
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
  };

  return (
    <motion.div
      initial={initialValues[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
