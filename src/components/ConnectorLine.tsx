import { motion } from 'framer-motion';

export default function ConnectorLine() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ originY: 0 }}
      className="w-px h-12 bg-gradient-to-b from-accent to-transparent mx-auto"
    />
  );
}
