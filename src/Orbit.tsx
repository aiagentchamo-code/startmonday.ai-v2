'use client';

import { cn } from '@/cn';

interface OrbitProps {
  className?: string;
  radius?: number;
  color?: string;
  dotSize?: number;
}

export const Orbit = ({
  className,
  radius = 200,
  color = '#E9E4FF',
  dotSize = 2,
}: OrbitProps) => {
  const dotCount = 12;
  const dots = Array.from({ length: dotCount });

  return (
    <div
      className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', className)}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {/* Outer circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px dotted ${color}`,
          width: '100%',
          height: '100%',
        }}
      />

      {/* Dots */}
      {dots.map((_, i) => {
        const angle = (i / dotCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius - dotSize / 2;
        const y = Math.sin(angle) * radius - dotSize / 2;

        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: color,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          />
        );
      })}

      {/* Center dot */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: dotSize * 1.5,
          height: dotSize * 1.5,
          backgroundColor: color,
        }}
      />
    </div>
  );
};
