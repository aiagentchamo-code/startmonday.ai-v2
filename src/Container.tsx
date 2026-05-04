'use client';

import { ReactNode } from 'react';
import { cn } from '@/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Container = ({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        'w-full max-w-[1200px] mx-auto px-section',
        className
      )}
    >
      {children}
    </Component>
  );
};
