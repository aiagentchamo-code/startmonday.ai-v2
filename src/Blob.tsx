'use client';

import { cn } from '@/cn';

interface BlobProps {
  className?: string;
  color?: string;
  opacity?: number;
  blur?: number;
}

export const Blob = ({
  className,
  color = 'from-accent to-warm',
  opacity = 0.1,
  blur = 80,
}: BlobProps) => {
  return (
    <div
      className={cn(
        'absolute rounded-full',
        `bg-gradient-to-r ${color}`,
        className
      )}
      style={{
        opacity,
        filter: `blur(${blur}px)`,
        willChange: 'transform',
      }}
    />
  );
};
