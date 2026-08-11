import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-sm rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-white hover:bg-accent-hover',
        secondary: 'bg-white text-navy-900 border border-line hover:bg-surface',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-navy-900',
        ghost: 'text-navy-700 hover:bg-surface',
        navy: 'bg-navy-900 text-white hover:bg-navy-800',
      },
      size: {
        sm: 'h-9 px-md text-body-sm',
        md: 'h-11 px-base text-body',
        lg: 'h-14 px-lg text-body-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    if (href) {
      const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
      if (external) {
        return (
          <a href={href} className={classes}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
