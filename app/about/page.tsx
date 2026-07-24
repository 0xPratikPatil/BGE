'use client';
import Link from 'next/link';
import { Target, Eye, ArrowRight, User, CheckCircle } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/constants';
import Reveal from '@/components/Reveal';

/* ═══════════════════════════════════════════
   CORE VALUES
   ═══════════════════════════════════════════ */
function CoreValues() {
  const values = [
    { title: 'Integrity', description: 'Transparent and ethical business practices in all our dealings.' },
    { title: 'Quality', description: 'Commitment to delivering products that meet international standards.' },
    { title: 'Reliability', description: 'Consistent and dependable service you can count on.' },
    { title: 'Innovation', description: 'Continuous improvement in processes and solutions.' },
  ];

  return (
    <section className="section bg-white">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            <span>Our Core Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-4">
            What We Stand For
          </h2>
          <p className="text-neutral-600 text-lg">
            The principles that guide every decision we make and every relationship we build.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="card p-6 text-center group h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center mb-4 group-hover:from-accent-400 group-hover:to-accent-500 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-navy-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-heading font-semibold text-navy-800 mb-2">{value.title}</h4>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-gradient-to-b from-navy-700 to-navy-800 text-white text-center">
        <div className="container-max max-w-3xl mx-auto">
          <span className="label bg-white/10 text-white border border-white/15 mb-6 inline-flex">About us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Bridging India <span className="text-gradient-accent">and the world</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
            Founded in 2008 in Pune, Bridge Globe Exims has grown into a trusted partner for businesses
            across 50+ countries, specializing in premium agricultural exports and imports.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Reveal>
              <span className="label-accent mb-4">Our story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mt-4 mb-6">From Pune to the world</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>What started in 2008 with a simple mission — bridging quality Indian products with international markets — has grown into a trusted operation spanning 50+ countries.</p>
                <p>Our understanding of trade regulations, customs, and logistics helps us build lasting relationships with suppliers, freight forwarders, and buyers worldwide.</p>
              </div>
            </Reveal>
            <Reveal delay={150} className="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Trade operations" className="rounded-2xl w-full shadow-deep" />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white rounded-2xl px-6 py-4 shadow-glow-orange hidden md:block">
                <div className="text-3xl font-heading font-extrabold">15+</div>
                <div className="text-sm text-accent-100">Years of excellence</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section bg-surface-alt">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal className="card !p-8 relative overflow-hidden">
              <span className="absolute top-0 left-8 w-8 h-[3px] bg-accent-500 rounded-b-full" />
              <Target className="w-8 h-8 text-navy-600 mb-4 mt-2" />
              <h3 className="font-heading font-bold text-xl text-navy-800 mb-3">Our mission</h3>
              <p className="text-neutral-500 leading-relaxed">
                To connect quality Indian products with global markets while ensuring compliance,
                reliability, and customer satisfaction.
              </p>
            </Reveal>
            <Reveal delay={150} className="card !p-8 relative overflow-hidden">
              <span className="absolute top-0 left-8 w-8 h-[3px] bg-accent-500 rounded-b-full" />
              <Eye className="w-8 h-8 text-accent-500 mb-4 mt-2" />
              <h3 className="font-heading font-bold text-xl text-navy-800 mb-3">Our vision</h3>
              <p className="text-neutral-500 leading-relaxed">
                To become a trading company recognized for quality, trust, and innovation —
                making international markets accessible to businesses of all sizes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <CoreValues />

      {/* Team */}
      <section className="section bg-white">
        <div className="container-max">
          <Reveal className="max-w-xl mb-14">
            <span className="label-accent mb-4">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mt-4 mb-3">Meet our directors</h2>
            <p className="text-neutral-500 text-lg">Experienced professionals driving our vision of global trade connectivity.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((m, i) => (
              <Reveal key={i} delay={i * 100} className="card overflow-hidden !p-0 group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-navy-800/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center mb-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white font-heading font-bold">{m.name}</h4>
                    <p className="text-accent-300 text-sm">{m.designation}</p>
                  </div>
                </div>
                <div className="p-6"><p className="text-sm text-neutral-500 leading-relaxed">{m.description}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-accent-500 to-accent-600 text-center text-white">
        <div className="container-max max-w-xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white mb-3">Let&apos;s work together</h2>
          <p className="text-accent-100 mb-8">Ready to expand your global trade? Our advisors are here to help.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent-600 font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-neutral-50 hover:shadow-lg hover:-translate-y-0.5">
            Contact us <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
