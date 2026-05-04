'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/cn';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonVariants = {
  primary: 'bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent',
  ghost: 'bg-transparent text-ink border border-line hover:bg-line/30',
  link: 'bg-transparent text-accent underline hover:no-underline',
};

const sizeVariants = {
  sm: 'px-3 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-base rounded-full',
  lg: 'px-7 py-3 text-lg rounded-full',
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold transition-all duration-300',
    'focus-visible:ring-2 focus-visible:ring-offset-2',
    buttonVariants[variant],
    sizeVariants[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = (
    <motion.span
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
};
