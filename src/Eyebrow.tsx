'use client';

import { ReactNode } from 'react';
import { cn } from '@/cn';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export const Eyebrow = ({ children, className, icon }: EyebrowProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full',
        'bg-accent-soft text-accent',
        'text-eyebrow uppercase',
        className
      )}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
