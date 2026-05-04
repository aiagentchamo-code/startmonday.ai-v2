'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  intensity?: number;
}

export const FloatReveal = ({
  children,
  delay = 0,
  className,
  intensity = 1,
}: FloatRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 * intensity }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8 * intensity, 0] }}
        transition={{
          duration: 4,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
