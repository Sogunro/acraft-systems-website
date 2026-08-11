import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { nav, site } from '@/lib/site';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const columns = nav.filter((n) => n.children);

  return (
    <footer className="bg-navy-950 text-navy-100">
      <Container size="wide" className="py-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-xl">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-base" aria-label={site.name}>
              <span className="inline-flex h-20 items-center justify-center rounded-md bg-white px-sm">
                <Image
                  src="/images/logo.png"
                  alt={site.name}
                  width={1746}
                  height={901}
                  className="h-16 w-auto"
                />
              </span>
            </Link>
            <p className="text-body text-navy-200 max-w-sm">
              Your dedicated IT team across {site.region}. Straightforward, jargon-free support — available whenever you need us.
            </p>
            <div className="mt-lg space-y-md text-body-sm">
              <a href={`tel:${site.phoneDial}`} className="flex items-center gap-sm hover:text-white transition">
                <Phone className="h-4 w-4 text-accent" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-sm hover:text-white transition">
                <Mail className="h-4 w-4 text-accent" /> {site.email}
              </a>
              <div className="flex items-start gap-sm">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span>{site.address}</span>
              </div>
            </div>
          </div>

          {/* Service columns */}
          {columns.map((col) => (
            <div key={col.label} className="lg:col-span-2">
              <h4 className="text-body-sm font-bold text-white uppercase tracking-wider mb-base">
                {col.label}
              </h4>
              <ul className="space-y-sm">
                {col.children!.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="text-body-sm text-navy-200 hover:text-white transition">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-xxl pt-lg border-t border-navy-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-md text-body-sm text-navy-300">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-lg">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/" className="hover:text-white transition">Privacy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
