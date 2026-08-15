'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe, Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, PRODUCT_CATEGORIES } from '@/lib/constants';

const PRODUCT_LINKS: Record<string, string> = {
  'Fresh Produce — Exports': '/products?tab=export',
  'Fresh Produce — Imports': '/products?tab=import',
  'Spices': '/products?tab=export',
};

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white relative">
      {/* Decorative gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-amber to-accent-400" />

      <div className="container-max section px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company info */}
          <div className="min-w-0">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo/final logo_400-400.png"
                alt="BRIDGEGLOBE EXIMS logo"
                width={56}
                height={56}
                className="rounded-xl shrink-0"
              />
              <div>
                <span className="font-heading font-bold text-lg block">
                  <span className="text-accent-400">BRIDGE</span>GLOBE EXIMS
                </span>
                <span className="text-xs text-navy-200">
                  Import &amp; Export Solutions
                </span>
              </div>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              Your trusted partner for international trade. We connect Indian manufacturers
              with global markets through reliable import and export solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/bridgeglobe-exims-llp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-700 flex items-center justify-center hover:bg-accent-500 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bridgeglobe_exims"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-700 flex items-center justify-center hover:bg-accent-500 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-navy-200 text-sm hover:text-accent-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-400 group-hover:w-3 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.name}>
                  <Link
                    href={PRODUCT_LINKS[category.name] || '/products'}
                    className="text-navy-200 text-sm hover:text-accent-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-400 group-hover:w-3 transition-all duration-300" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3 text-navy-200 hover:text-accent-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-400" />
                  <span className="text-sm">{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 text-navy-200 hover:text-accent-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-400" />
                  <span className="text-sm break-all">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-navy-200">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-400" />
                  <span className="text-sm">{COMPANY_INFO.fullAddress}</span>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-300 text-sm text-center md:text-left">
              &copy; 2026 BRIDGEGLOBE EXIMS LLP. All rights reserved.
            </p>
            <p className="text-navy-300 text-sm flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent-400" />
              Connecting Global Markets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
