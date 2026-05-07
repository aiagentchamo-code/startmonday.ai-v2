import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function ToolGlow({ children }: { children: ReactNode }) {
  return (
    <motion.span
      whileHover={{ filter: 'drop-shadow(0 0 8px rgba(43,125,109,0.8))', scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  );
}
