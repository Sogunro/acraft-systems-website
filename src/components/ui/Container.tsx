import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
  size = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'narrow' | 'default' | 'wide';
}) {
  const widths = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
  };
  return (
    <div className={cn('mx-auto w-full px-base sm:px-lg', widths[size], className)}>
      {children}
    </div>
  );
}
