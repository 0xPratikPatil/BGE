'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, ArrowUpRight, ArrowDownLeft, Leaf, MessageCircle, ShieldCheck, Truck, Globe, Sparkles } from 'lucide-react';
import { FRESH_PRODUCE_EXPORTS, SPICES, FRESH_PRODUCE_IMPORTS, COMPANY_INFO } from '@/lib/constants';
import Reveal from '@/components/Reveal';

type Tab = 'export' | 'import';

export default function Products() {
  return (
    <Suspense fallback={null}>
      <ProductsInner />
    </Suspense>
  );
}

function ProductsInner() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<Tab>('export');

  useEffect(() => {
    const t = searchParams.get('tab');
    if (t === 'import' || t === 'export') setTab(t);
  }, [searchParams]);

  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-gradient-to-b from-navy-700 to-navy-800 text-white text-center">
        <div className="container-max max-w-3xl mx-auto">
          <span className="label bg-white/10 text-white border border-white/15 mb-6 inline-flex">Our Products</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Quality produce <span className="text-gradient-accent">worldwide</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
            Premium fresh produce and spices sourced from trusted farms and suppliers across India and global markets.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0]/60">
        <div className="container-max">
          <div className="flex gap-2 py-3 px-4 md:px-6 lg:px-0 overflow-x-auto scrollbar-hide">
            {([
              { id: 'export' as Tab, label: 'Export', icon: ArrowUpRight },
              { id: 'import' as Tab, label: 'Import', icon: ArrowDownLeft },
            ]).map((t) => {
              const Icon = t.icon;
              return (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    tab === t.id ? 'bg-navy-700 text-white shadow-sm' : 'text-neutral-500 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Export Tab */}
      {tab === 'export' && (
        <>
          {/* Fresh Produce Section */}
          <section className="section bg-white">
            <div className="container-max">
              <Reveal>
                <div className="mb-10">
                  <span className="label-accent mb-3 inline-flex">Export</span>
                  <h2 className="text-3xl font-heading font-bold text-navy-800 mt-3 mb-3">Fresh Produce</h2>
                  <p className="text-neutral-500 max-w-2xl leading-relaxed">
                    Premium fruits and vegetables sourced directly from Indian farms — sorted, graded, and packed for international markets.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {FRESH_PRODUCE_EXPORTS.map((p) => (
                  <ProductCard key={p.name} product={p} />
                ))}
              </div>
            </div>
          </section>

          {/* Spices Section */}
          <section className="section bg-surface-alt">
            <div className="container-max">
              <Reveal>
                <div className="mb-10">
                  <span className="label-accent mb-3 inline-flex">Export</span>
                  <h2 className="text-3xl font-heading font-bold text-navy-800 mt-3 mb-3">Spices</h2>
                  <p className="text-neutral-500 max-w-2xl leading-relaxed">
                    Premium Indian spices known worldwide for their aroma, flavour, and culinary versatility.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                {SPICES.map((p) => (
                  <ProductCard key={p.name} product={p} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Import Tab */}
      {tab === 'import' && (
        <section className="section bg-white">
          <div className="container-max">
            <Reveal>
              <div className="mb-10">
                <span className="label-accent mb-3 inline-flex">Import</span>
                <h2 className="text-3xl font-heading font-bold text-navy-800 mt-3 mb-3">Imported Fruits</h2>
                <p className="text-neutral-500 max-w-2xl leading-relaxed">
                  Quality fresh fruits sourced from trusted global suppliers — carefully selected for the Indian market.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {FRESH_PRODUCE_IMPORTS.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quality Assurance */}
      <QualityAssurance />

      {/* CTA */}
      <section className="section bg-gradient-to-br from-accent-500 to-accent-600 text-center text-white">
        <div className="container-max max-w-xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white mb-3">Interested in our products?</h2>
          <p className="text-accent-100 mb-8">Request a quote, samples, or discuss your requirements.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent-600 font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-neutral-50 hover:shadow-lg hover:-translate-y-0.5">
              Request a quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-accent-600">
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────────────────────
   Product Card (clean — no badge, no CTA)
   ──────────────────────────────────────────── */
function ProductCard({ product }: { product: { name: string; image: string; description: string } }) {
  return (
    <div className="card group !p-0 overflow-hidden flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-heading font-semibold text-navy-800 text-sm mb-1">{product.name}</h4>
        <p className="text-xs text-neutral-400 leading-relaxed flex-1">{product.description}</p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Quality Assurance
   ──────────────────────────────────────────── */
function QualityAssurance() {
  const features = [
    { title: 'Farm Fresh Quality', description: 'Direct sourcing from verified farms ensuring freshness.', icon: Leaf },
    { title: 'Export Compliance', description: 'All products meet international quality and safety standards.', icon: ShieldCheck },
    { title: 'Reliable Logistics', description: 'Temperature-controlled shipping for perishable goods.', icon: Truck },
    { title: 'Global Reach', description: 'Exporting to 50+ countries with established trade routes.', icon: Globe },
  ];

  return (
    <section className="section bg-white">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Quality Assurance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-4">
            Our Commitment to Quality
          </h2>
          <p className="text-neutral-600 text-lg">
            Every product is carefully sourced, inspected, and packaged to ensure it meets the highest international standards.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="card p-6 text-center group h-full">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center mb-4 group-hover:bg-accent-400 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-semibold text-navy-800 mb-2">{feature.title}</h4>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
