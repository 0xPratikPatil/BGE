'use client';
import { useState, useMemo } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send, User,
  Globe, FileText, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${COMPANY_INFO.email}`;
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://bridgeglobeexims.com';

type Status = 'idle' | 'loading' | 'success' | 'error';

/* ═══════════════════════════════════════════
   CONTACT HERO
   ═══════════════════════════════════════════ */
function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-700 to-navy-800 text-white section overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/10 rounded-full blur-3xl" />

      <div className="container-max max-w-3xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
            Let&apos;s Start a{' '}
            <span className="text-gradient-accent">Conversation</span>
          </h1>
          <p className="text-navy-200 text-lg leading-relaxed">
            Whether you&apos;re looking to source products from India or explore export opportunities,
            our team is ready to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT INFO CARDS
   ═══════════════════════════════════════════ */
function ContactInfo() {
  const contactDetails = [
    { icon: Phone, title: 'Call Us', value: COMPANY_INFO.phone, link: `tel:${COMPANY_INFO.phone}`, color: 'primary' as const },
    { icon: Mail, title: 'Email Us', value: COMPANY_INFO.email, link: `mailto:${COMPANY_INFO.email}`, color: 'accent' as const },
    { icon: MapPin, title: 'Visit Us', value: COMPANY_INFO.fullAddress, link: '#', color: 'primary' as const },
    { icon: Clock, title: 'Business Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM', link: '#', color: 'accent' as const },
  ];

  return (
    <section className="section-sm bg-white -mt-10 md:-mt-16 relative z-20">
      <div className="container-max">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <a key={index} href={detail.link} className="card p-6 text-center group">
                <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  detail.color === 'primary'
                    ? 'bg-navy-50 text-navy-600 group-hover:bg-navy-700 group-hover:text-white'
                    : 'bg-accent-50 text-accent-500 group-hover:bg-accent-500 group-hover:text-white'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-semibold text-navy-800 mb-1">{detail.title}</h4>
                <p className="text-sm text-neutral-600">{detail.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   INQUIRY FORM (FormSubmit)
   ═══════════════════════════════════════════ */
function InquiryForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', message: '', productInterest: '', _honey: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const subjectLine = useMemo(() => {
    if (form.productInterest) return `Inquiry: ${form.productInterest}`;
    return `New inquiry from ${form.name || 'website'}`;
  }, [form.productInterest, form.name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const reset = () => {
    setForm({ name: '', email: '', phone: '', country: '', message: '', productInterest: '', _honey: '' });
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: bot caught
    if (form._honey) {
      setStatus('success');
      return;
    }

    setStatus('loading');

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        productInterest: form.productInterest,
        message: form.message,
        _subject: subjectLine,
        _next: `${SITE_URL}/contact?sent=1`,
        _replyto: form.email,
        _template: 'table',
        _honey: form._honey,
      };

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const fields = [
    { name: 'name', label: 'Name', type: 'text', icon: User, placeholder: 'Enter your full name', required: true, full: false },
    { name: 'email', label: 'Email', type: 'email', icon: Mail, placeholder: 'Enter your email address', required: true, full: false },
    { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, placeholder: 'Enter your phone number', required: true, full: false },
    { name: 'country', label: 'Country', type: 'text', icon: Globe, placeholder: 'Enter your country', required: true, full: false },
    { name: 'productInterest', label: 'Product Interest', type: 'text', icon: FileText, placeholder: 'Which products are you interested in?', required: false, full: true },
  ];

  return (
    <section className="section bg-gradient-to-br from-surface-alt to-navy-50/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left side - info */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Send className="w-4 h-4" />
              <span>Send Us an Inquiry</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-navy-800 mb-4">
              Request a Trade Consultation
            </h2>
            <p className="text-neutral-600 mb-8">
              Fill out the form below with your requirements and our team will get back to you
              with a customized quote and consultation. We respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: CheckCircle, color: 'bg-navy-100 text-navy-600', title: 'Quick Response', desc: 'We reply to all inquiries within 24 hours' },
                { icon: CheckCircle, color: 'bg-accent-100 text-accent-500', title: 'Expert Consultation', desc: 'Get advice from experienced trade advisors' },
                { icon: CheckCircle, color: 'bg-navy-100 text-navy-600', title: 'Custom Solutions', desc: 'Tailored export solutions for your needs' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-card">
                  <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 text-sm">{item.title}</h4>
                    <p className="text-xs text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 w-full"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right side - form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              {/* Honeypot */}
              <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                <label htmlFor="_honey" className="sr-only">Leave this empty</label>
                <input
                  id="_honey"
                  type="text"
                  name="_honey"
                  value={form._honey}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-6 animate-fade-in">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-navy-800 mb-2">Thank You!</h3>
                  <p className="text-neutral-600 mb-6">
                    Your inquiry has been submitted successfully. Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={reset} className="btn-outline">
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {fields.map((field) => {
                      const Icon = field.icon;
                      return (
                        <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
                          <label htmlFor={field.name} className="block text-sm font-medium text-neutral-700 mb-1.5">
                            {field.label}
                            {field.required && <span className="text-accent-500 ml-1">*</span>}
                          </label>
                          <div className="relative">
                            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                            <input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              value={form[field.name as keyof typeof form] || ''}
                              onChange={handleChange}
                              placeholder={field.placeholder}
                              required={field.required}
                              disabled={status === 'loading'}
                              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-surface-alt text-neutral-800 placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 disabled:opacity-60"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Message <span className="text-accent-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us about your requirements, quantities, target market, or any questions you have..."
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-surface-alt text-neutral-800 placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 resize-none disabled:opacity-60"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                    ) : (
                      <><Send className="w-5 h-5 mr-2" /> Submit Inquiry</>
                    )}
                  </button>
                  <p className="text-xs text-neutral-400 text-center">
                    By submitting this form, you agree to be contacted by our team regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <InquiryForm />
    </>
  );
}
