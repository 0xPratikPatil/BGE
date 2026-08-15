/* ═══════════════════════════════════════════
   Gallery Page
    Clean editorial layout, just images
   ═══════════════════════════════════════════ */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

/* ─── Gallery Data ─── */
const GALLERY_IMAGES = [
  {
    src: '/gallary/1.webp',
    alt: 'BRIDGEGLOBE EXIMS premium Alphonso Mango export from Ratnagiri farms',
    caption: 'Alphonso Mango',
  },
  {
    src: '/gallary/2.webp',
    alt: 'BRIDGEGLOBE EXIMS Green Chilli batch processing at quality facility',
    caption: 'Green Chilli',
  },
  {
    src: '/gallary/3.webp',
    alt: 'BRIDGEGLOBE EXIMS Semi Husked Coconut stacking and packaging',
    caption: 'Semi Husked Coconut',
  },
  {
    src: '/gallary/4.webp',
    alt: 'BRIDGEGLOBE EXIMS Fresh Red Onion sorting for Middle East orders',
    caption: 'Red Onion',
  },
  {
    src: '/gallary/5.webp',
    alt: 'BRIDGEGLOBE EXIMS Pomegranate crates ready for international dispatch',
    caption: 'Pomegranate',
  },
  {
    src: '/gallary/6.webp',
    alt: 'BRIDGEGLOBE EXIMS Green Grapes cold-chain packaging facility',
    caption: 'Green Grapes',
  },
  {
    src: '/gallary/7.webp',
    alt: 'BRIDGEGLOBE EXIMS Banana bunches inspection before export',
    caption: 'Banana',
  },
  {
    src: '/gallary/8.webp',
    alt: 'BRIDGEGLOBE EXIMS Turmeric roots drying and grading process',
    caption: 'Turmeric',
  },
] as const;

/* ═══════════════════════════════════════════
   Page
   ═══════════════════════════════════════════ */
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ═══════════ HERO ═══════════ */}
      <section className="section-sm bg-gradient-to-b from-navy-700 to-navy-800 text-white text-center">
        <div className="container-max max-w-3xl mx-auto">
          <span className="label bg-white/10 text-white border border-white/15 mb-6 inline-flex">Visual Story</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            From <span className="text-gradient-accent">Indian Farms</span> to<br className="hidden sm:block" /> Global Tables
          </h1>
          <p className="text-navy-200 text-lg leading-relaxed">
            A behind-the-scenes look at the care, quality, and precision
            behind every BRIDGEGLOBE EXIMS shipment, from harvest in
            Maharashtra to markets across four continents.
          </p>
        </div>
      </section>

      {/* ═══════════ BENTO GALLERY ═══════════ */}
      <section id="bento-grid" className="section bg-white">
        <div className="container-max">
          <Reveal>
            <div className="text-center mb-12">
              <span className="label-accent mb-4 inline-flex">Our Products</span>
              <h2 className="text-title font-bold text-navy-800 mt-3">
                The Best of India,<br className="hidden sm:block" /> Delivered Worldwide
              </h2>
              <p className="mt-4 text-slate-500 max-w-lg mx-auto text-sm lg:text-base">
                Every image tells a story of freshness, quality, and the hands
                that bring India&apos;s finest produce to your market.
              </p>
            </div>
          </Reveal>

          {/* Bento Grid Layout */}
          <div id="bento-gallery" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px]">
            {GALLERY_IMAGES.map((img, i) => {
              const spans: Record<number, string> = {
                0: 'col-span-2 row-span-2',
                4: 'col-span-2 row-span-1',
                6: 'col-span-1 row-span-2',
              };
              const spanClass = spans[i] ?? '';

              return (
                <Reveal key={img.src} delay={i * 80}>
                  <div className={`relative w-full h-full overflow-hidden rounded-2xl ${spanClass}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <section className="section bg-gradient-to-br from-accent-500 to-accent-600 text-center text-white">
        <div className="container-max max-w-xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3">
              Ready to Source From India?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-accent-100 mb-8">
              Whether you&apos;re looking to import fresh produce or explore new trade
              routes, our team is here to help you succeed.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent-600 font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-neutral-50 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-accent-600"
              >
                View All Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
