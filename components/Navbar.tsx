'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-[#E2E8F0]/60 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-[72px] px-6 lg:px-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/logo/final logo_400-400.png"
              alt="BRIDGEGLOBE EXIMS logo"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <span className="block font-heading font-bold text-[15px] text-navy-700 leading-tight tracking-tight">
                <span className="text-accent-500">BRIDGE</span>GLOBE EXIMS
              </span>
              <span className="block text-[10px] text-neutral-400 font-medium tracking-[0.14em] uppercase">
                Import &amp; Export
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-navy-700 bg-navy-50'
                      : 'text-neutral-500 hover:text-navy-700 hover:bg-neutral-50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href="/contact#contact-form" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-[13px]">
              Get a quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5 text-navy-700" /> : <Menu className="w-5 h-5 text-navy-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white/95 backdrop-blur-xl animate-fade-in">
          <div className="container-max px-6 py-4 space-y-1">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-navy-700 bg-navy-50'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#E2E8F0] mt-3 space-y-2">
              <Link href="/contact#contact-form" className="btn-primary w-full justify-center">
                Get a quote
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline w-full justify-center !text-[#475569]"
              >
                <Phone className="w-4 h-4" /> Call us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
