'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScaleRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export const ScaleReveal = ({
  children,
  delay = 0,
  className,
  duration = 0.7,
}: ScaleRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration,
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
