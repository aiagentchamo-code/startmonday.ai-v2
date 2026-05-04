'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: keyof typeof motion;
  className?: string;
}

export const Reveal = ({
  children,
  delay = 0,
  y = 32,
  as = 'div',
  className,
}: RevealProps) => {
  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </Component>
  );
};
