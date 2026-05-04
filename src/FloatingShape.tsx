'use client';

import { motion } from 'framer-motion';
import { cn } from '@/cn';

interface FloatingShapeProps {
  className?: string;
  type?: 'star' | 'dot' | 'badge' | 'bubble';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-10 h-10',
};

export const FloatingShape = ({
  className,
  type = 'dot',
  color = '#FFD166',
  size = 'md',
}: FloatingShapeProps) => {
  const variants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  let content;

  switch (type) {
    case 'star':
      content = (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cn('text-yellow-400', sizeMap[size])}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
      break;
    case 'badge':
      content = (
        <div
          className={cn(
            'rounded-full flex items-center justify-center',
            'shadow-lg font-semibold text-white text-xs',
            sizeMap[size]
          )}
          style={{ backgroundColor: color }}
        >
          ✓
        </div>
      );
      break;
    case 'bubble':
      content = (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={cn(sizeMap[size])}
          style={{ color }}
        >
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />
          <path d="M12 15h.01" />
        </svg>
      );
      break;
    case 'dot':
    default:
      content = (
        <div
          className={cn('rounded-full', sizeMap[size])}
          style={{ backgroundColor: color }}
        />
      );
  }

  return (
    <motion.div
      variants={variants}
      animate="float"
      className={cn('absolute', className)}
    >
      {content}
    </motion.div>
  );
};
