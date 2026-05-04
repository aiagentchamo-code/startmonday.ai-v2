'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useInView } from 'framer-motion';

interface CountUpProps {
  target: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const CountUp = ({
  target,
  className,
  prefix = '',
  suffix = '',
  decimals = 0,
}: CountUpProps) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplayValue(
        parseFloat(latest.toFixed(decimals))
      );
    });

    animate(motionValue, target, {
      duration: prefersReducedMotion ? 0 : 2.5,
      ease: 'easeOut',
    });

    return unsubscribe;
  }, [isInView, motionValue, target, decimals]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
};
