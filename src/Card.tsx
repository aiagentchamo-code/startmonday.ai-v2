'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.25 }}
      className={cn(
        'bg-surface rounded-2xl p-6 md:p-8',
        'border border-line',
        hover && 'shadow-soft hover:shadow-md',
        'transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
