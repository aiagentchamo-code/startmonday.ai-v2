'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  stagger?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const TextReveal = ({
  children,
  delay = 0,
  className,
}: TextRevealProps) => {
  const text = typeof children === 'string' ? children : '';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
      style={{ display: 'inline' }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          transition={{ delay: delay + i * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
