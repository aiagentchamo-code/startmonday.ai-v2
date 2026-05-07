import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function PulsingCTA({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-flex">
      <motion.span
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-accent blur-md"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
