'use client';

import { ReactNode } from 'react';
import { cn } from '@/cn';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const Marquee = ({ children, className, speed = 30 }: MarqueeProps) => {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
