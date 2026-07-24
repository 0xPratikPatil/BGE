'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe, Ship, Package, Award, ShieldCheck, Truck, UserCheck,
  FileText, Headphones, ArrowRight, Plane, MessageCircle,
  Phone, Mail, Leaf, Sparkles
} from 'lucide-react';
import {
  COMPANY_INFO, WHY_CHOOSE_US,
  CERTIFICATIONS, EXPORT_MARKETS, TRADE_ROUTES,
  FRESH_PRODUCE_EXPORTS, FRESH_PRODUCE_IMPORTS, SPICES
} from '@/lib/constants';
import Reveal from '@/components/Reveal';

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  const [heroImages, setHeroImages] = useState<{ src: string; alt: string; label: string }[]>([]);

  useEffect(() => {
    const allProducts = [
      ...FRESH_PRODUCE_EXPORTS.map(p => ({ src: p.image, alt: p.name, label: 'Export' })),
      ...FRESH_PRODUCE_IMPORTS.map(p => ({ src: p.image, alt: p.name, label: 'Import' })),
      ...SPICES.map(p => ({ src: p.image, alt: p.name, label: 'Spices' })),
    ];
    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    setHeroImages(shuffled.slice(0, 4));
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-navy-50 via-white to-accent-50 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-navy-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50" />

      <div className="container-max section relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 lg:space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium border border-navy-100">
                <Sparkles className="w-4 h-4 text-accent-500" />
                <span>Trusted Import Export Partner</span>
              </div>
            </Reveal>

            <Reveal delay={75}>
              <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-display font-heading font-extrabold text-navy-800 leading-[1.06]">
                Connecting Global Markets Through{' '}
                <span className="text-gradient-accent">Reliable Trade Solutions</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                Your trusted partner for international trade. We specialize in the export of
                premium agricultural products and spices from India to markets worldwide.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/products" className="btn-outline">
                  View Products
                </Link>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4 lg:gap-6 pt-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-neutral-600 hover:text-navy-700 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-accent-500" />
                  <span className="text-sm font-medium">{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-neutral-600 hover:text-navy-700 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-accent-500" />
                  <span className="text-sm font-medium">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Product Image Grid */}
          <Reveal delay={200} className="hidden lg:block">
            {heroImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                    <Image
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-accent-500/90 px-3 py-1 rounded-full">{heroImages[0].label}</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <Image
                      src={heroImages[1].src}
                      alt={heroImages[1].alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-navy-800/90 px-3 py-1 rounded-full">{heroImages[1].label}</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <Image
                      src={heroImages[2].src}
                      alt={heroImages[2].alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-accent-500/90 px-3 py-1 rounded-full">{heroImages[2].label}</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                    <Image
                      src={heroImages[3].src}
                      alt={heroImages[3].alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-accent-500/90 px-3 py-1 rounded-full">{heroImages[3].label}</span>
                  </div>
                </div>
              </div>
            )}

          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════ */
function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Truck: <Truck className="w-6 h-6" />,
    UserCheck: <UserCheck className="w-6 h-6" />,
    FileText: <FileText className="w-6 h-6" />,
    Headphones: <Headphones className="w-6 h-6" />,
  };

  return (
    <section className="section bg-white">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-4">
            Excellence in Global Trade
          </h2>
          <p className="text-neutral-600 text-lg">
            Decades of experience in international trade, backed by a commitment to quality, compliance, and customer satisfaction.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="card group h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center mb-4 group-hover:bg-navy-700 group-hover:text-white transition-all duration-300">
                  {iconMap[item.icon] || <Award className="w-6 h-6" />}
                </div>
                <h4 className="font-heading font-semibold text-navy-800 mb-2 group-hover:text-accent-500 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FEATURED PRODUCTS
   ═══════════════════════════════════════════ */
function FeaturedProducts() {
  const allProducts = useMemo(() => [...FRESH_PRODUCE_EXPORTS, ...SPICES, ...FRESH_PRODUCE_IMPORTS], []);
  const [products, setProducts] = useState<typeof allProducts>([]);

  useEffect(() => {
    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    setProducts(shuffled.slice(0, 8));
  }, [allProducts]);

  return (
    <section className="section bg-gradient-to-br from-surface-alt to-navy-50/30">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            <span>Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-4">
            Premium Export Products
          </h2>
          <p className="text-neutral-600 text-lg">
            Quality-assured agricultural products and spices sourced directly from Indian farms.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Reveal key={product.name + index} delay={index * 75}>
              <Link href="/products" className="card group !p-0 overflow-hidden flex flex-col h-full">
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
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="text-center mt-10">
          <Link href="/products" className="btn-primary">
            View All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   GLOBAL PRESENCE
   ═══════════════════════════════════════════ */
function GlobalPresence() {
  return (
    <section className="section bg-gradient-to-br from-navy-700 to-navy-800 text-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Globe className="w-4 h-4 text-accent-400" />
              <span>Global Trade Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Worldwide Market Presence
            </h2>
            <p className="text-navy-200 mb-8 leading-relaxed">
              With established connections across 50+ countries, we facilitate seamless trade
              between Indian manufacturers and international buyers. Our global network ensures
              reliable sourcing, efficient logistics, and timely deliveries.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
              {[
                { icon: Ship, title: 'Export Markets', desc: '12+ Countries Worldwide' },
                { icon: Package, title: 'Import Sources', desc: '4+ Countries Sourced' },
                { icon: Ship, title: 'Sea Freight', desc: '30+ Major Ports Covered' },
                { icon: Plane, title: 'Air Cargo', desc: '15+ International Airports' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-accent-400" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-navy-200">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Reveal>

          {/* Right: Market grid */}
          <Reveal delay={150}>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {EXPORT_MARKETS.map((market, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
                    {market.flag}
                  </div>
                  <p className="text-sm font-medium text-white">{market.country}</p>
                  <p className="text-xs text-navy-300">{market.region}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CERTIFICATIONS
   ═══════════════════════════════════════════ */
function Certifications() {
  return (
    <section className="section bg-white">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Compliance &amp; Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-4">
            Fully Licensed &amp; Compliant
          </h2>
          <p className="text-neutral-600 text-lg">
            We maintain all necessary licenses and certifications required for international trade operations.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="card p-6 text-center group h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center group-hover:from-accent-400 group-hover:to-accent-500 transition-all duration-300">
                  <Award className="w-8 h-8 text-navy-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-heading font-bold text-navy-800 mb-1">{cert.name}</h4>
                <p className="text-xs text-neutral-500">{cert.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRADE ROUTES
   ═══════════════════════════════════════════ */
function TradeRoutes() {
  return (
    <section className="section bg-gradient-to-br from-surface-alt to-navy-50/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Routes */}
          <Reveal>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Ship className="w-4 h-4 text-accent-500" />
                <span>Trade Routes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-6">
                Global Trade Routes
              </h2>
              <p className="text-neutral-600 mb-8">
                Our established trade routes ensure efficient movement of goods across key markets.
                With regular sailings and air cargo services, we provide flexible options for your
                shipment requirements.
              </p>
            </div>

            <div className="space-y-4">
              {TRADE_ROUTES.map((route, index) => (
                <div key={index} className="card p-4 flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center text-navy-600 group-hover:bg-accent-400 group-hover:text-white transition-all duration-300 shrink-0">
                    {route.mode === 'air' ? (
                      <Plane className="w-5 h-5" />
                    ) : (
                      <Ship className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-navy-800">{route.route}</div>
                    <div className="text-sm text-neutral-500">{route.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Images */}
          <Reveal delay={150}>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-72">
                <Image
                  src="/home/cargo-ship.webp"
                  alt="Cargo ship for sea freight"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Ship className="w-5 h-5 text-accent-400" />
                  <span className="text-white font-semibold">Sea Freight</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-72">
                <Image
                  src="/home/cargo-plane.webp"
                  alt="Cargo plane for air freight"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-accent-400" />
                  <span className="text-white font-semibold">Air Cargo</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="section bg-gradient-to-br from-accent-500 to-accent-600 text-white">
      <div className="container-max text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Expand Your Global Trade?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-accent-50 max-w-2xl mx-auto mb-8 text-lg">
            Whether you&apos;re looking to source products from India or export to international markets,
            our expert trade advisors are here to help you succeed.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent-600 font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-neutral-50 hover:shadow-lg hover:-translate-y-0.5"
            >
              Request a Trade Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-accent-600"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <GlobalPresence />
      <Certifications />
      <TradeRoutes />
      <FinalCTA />
    </>
  );
}
