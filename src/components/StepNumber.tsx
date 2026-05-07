import { motion } from 'framer-motion';

export default function StepNumber({ n }: { n: string }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <span className="relative z-10 text-sm font-bold text-accent">{n}</span>
      <motion.div
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-accent opacity-20"
        aria-hidden="true"
      />
    </div>
  );
}
