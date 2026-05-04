'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  liftAmount?: number;
}

export const HoverLift = ({
  children,
  className,
  liftAmount = 8,
}: HoverLiftProps) => {
  return (
    <motion.div
      whileHover={{
        y: -liftAmount,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
