import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('bg-white border border-line rounded-lg p-lg shadow-card transition hover:shadow-elevated hover:-translate-y-0.5', className)}>
      {children}
    </div>
  );
}

export function ServiceCard({
  title,
  description,
  href,
  imageSrc,
}: {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-line rounded-lg shadow-card transition hover:shadow-elevated hover:-translate-y-0.5 h-full overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-lg flex flex-col flex-1">
        <h3 className="text-h4 text-navy-900 mb-sm">{title}</h3>
        <p className="text-body text-muted leading-relaxed flex-1">{description}</p>
        <span className="mt-base inline-flex items-center gap-xs text-body-sm font-semibold text-accent">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
