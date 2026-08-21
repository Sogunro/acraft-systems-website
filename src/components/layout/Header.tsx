'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { nav, site } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white text-navy-900 border-b border-line">
      {/* Top utility strip */}
      <div className="hidden md:block bg-navy-900 text-navy-100 text-body-sm">
        <Container size="wide" className="flex items-center justify-between py-sm">
          <span>{site.tagline} · Across {site.region}</span>
          <a href={`tel:${site.phoneDial}`} className="inline-flex items-center gap-sm hover:text-white transition">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </Container>
      </div>

      {/* Main bar */}
      <Container size="wide" className="flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <span className="inline-flex h-16 md:h-20 items-center justify-center">
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={1746}
              height={901}
              priority
              className="h-14 md:h-[72px] w-auto"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-base">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenSection(item.label)}
                onMouseLeave={() => setOpenSection(null)}
              >
                <button className="inline-flex items-center gap-xs px-md py-sm text-body-sm font-semibold text-navy-800 hover:text-accent transition">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={cn(
                    'absolute left-0 top-full pt-sm min-w-[320px] z-50 transition-[opacity,visibility] duration-150 ease-out',
                    openSection === item.label ? 'opacity-100 visible' : 'opacity-0 invisible',
                  )}
                >
                  <div className="relative z-50 bg-white text-ink rounded-lg shadow-elevated border border-line p-sm">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded px-md py-md hover:bg-surface transition"
                      >
                        <div className="text-body-sm font-semibold text-navy-900">{child.label}</div>
                        {child.description && (
                          <div className="text-caption text-muted mt-xs">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-md py-sm text-body-sm font-semibold text-navy-800 hover:text-accent transition"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-sm">
          <Button href="/contact" variant="primary" size="md">
            Get in touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-sm text-navy-900"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-line">
          <Container size="wide" className="py-base">
            <nav className="flex flex-col gap-xs">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-line last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-md text-body font-semibold text-navy-900"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pb-md pl-md flex flex-col gap-xs">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-body-sm text-muted hover:text-accent py-xs"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button href="/contact" variant="primary" className="mt-base">
                Get in touch
              </Button>
              <a
                href={`tel:${site.phoneDial}`}
                className="mt-sm inline-flex items-center justify-center gap-sm py-md text-body-sm text-muted"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
