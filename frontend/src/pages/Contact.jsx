import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { siteData } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

function PageHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=1600&q=80"
          alt="Contact"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-khs-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-khs-black to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-khs-gold" />
          <span className="font-body text-khs-gold text-sm tracking-[0.3em] uppercase">Reach Out</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-khs-cream">Contact Us</h1>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError('Name and message are required.');
      return;
    }
    setError('');
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-white border border-khs-black/10 rounded-sm px-4 py-3.5 font-body text-khs-black placeholder-khs-black/30 focus:outline-none focus:border-khs-green focus:ring-1 focus:ring-khs-green transition-colors duration-200 text-sm';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs text-khs-black/50 uppercase tracking-widest mb-2">
            Name <span className="text-khs-green">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-body text-xs text-khs-black/50 uppercase tracking-widest mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block font-body text-xs text-khs-black/50 uppercase tracking-widest mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (000) 000-0000"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block font-body text-xs text-khs-black/50 uppercase tracking-widest mb-2">
          Message <span className="text-khs-green">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us how we can help..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm font-body">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center gap-2 text-khs-green text-sm font-body bg-khs-green/5 border border-khs-green/20 rounded-sm p-3">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          Message sent! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm font-body bg-red-50 border border-red-200 rounded-sm p-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 bg-khs-green text-khs-cream font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-green-light transition-colors duration-300 rounded-sm group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

function MainSection() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section className="bg-khs-cream py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div ref={leftRef} className="reveal-left">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-khs-green" />
            <span className="font-body text-khs-green text-sm tracking-[0.3em] uppercase">Find Us</span>
          </div>
          <h2 className="font-display text-4xl text-khs-black mb-10">We'd Love to Hear From You</h2>

          <div className="space-y-6 mb-10">
            <a
              href="https://maps.google.com/?q=178+PTH+12+North+Steinbach+MB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-khs-green/10 border border-khs-green/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-khs-green/20 transition-colors duration-200">
                <MapPin className="w-4 h-4 text-khs-green" />
              </div>
              <div>
                <p className="font-body text-xs text-khs-black/40 uppercase tracking-widest mb-1">Address</p>
                <p className="font-body text-khs-black/80 leading-relaxed group-hover:text-khs-green transition-colors duration-200">
                  {siteData.brand.address}
                </p>
              </div>
            </a>

            <a
              href={`tel:${siteData.brand.phone}`}
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-khs-green/10 border border-khs-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-khs-green/20 transition-colors duration-200">
                <Phone className="w-4 h-4 text-khs-green" />
              </div>
              <div>
                <p className="font-body text-xs text-khs-black/40 uppercase tracking-widest mb-1">Phone</p>
                <p className="font-body text-khs-black/80 group-hover:text-khs-green transition-colors duration-200">
                  {siteData.brand.phone}
                </p>
              </div>
            </a>

            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-khs-green/10 border border-khs-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-khs-green/20 transition-colors duration-200">
                <Instagram className="w-4 h-4 text-khs-green" />
              </div>
              <div>
                <p className="font-body text-xs text-khs-black/40 uppercase tracking-widest mb-1">Instagram</p>
                <p className="font-body text-khs-black/80 group-hover:text-khs-green transition-colors duration-200">
                  {siteData.brand.instagram}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-khs-green/10 border border-khs-green/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-khs-green" />
              </div>
              <div>
                <p className="font-body text-xs text-khs-black/40 uppercase tracking-widest mb-1">Hours</p>
                <p className="font-body text-khs-black/80">Tuesday – Saturday: 9am – 6pm</p>
                <p className="font-body text-khs-black/40 text-sm">Sunday – Monday: Closed</p>
              </div>
            </div>
          </div>

          {/* Book on Square card */}
          <div className="bg-khs-black rounded-sm p-7">
            <p className="font-body text-khs-cream/60 text-sm mb-4">Ready to book? Use our Square scheduling system for instant confirmation.</p>
            <a
              href={siteData.brand.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-khs-gold text-khs-black font-body font-semibold tracking-wide uppercase text-sm px-6 py-3.5 hover:bg-khs-gold-light transition-colors duration-300 rounded-sm group"
            >
              Book on Square
            </a>
          </div>
        </div>

        {/* Form */}
        <div ref={rightRef} className="reveal-right">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-khs-green" />
            <span className="font-body text-khs-green text-sm tracking-[0.3em] uppercase">Send a Message</span>
          </div>
          <h2 className="font-display text-4xl text-khs-black mb-10">Get in Touch</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="h-80 overflow-hidden">
      <iframe
        title="KHS Hair Studio Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.0!2d-96.68!3d49.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDMxJzEyLjAiTiA5NsKwNDAnNDguMCJX!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(80%) contrast(1.1)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default function Contact() {
  return (
    <Layout>
      <PageHero />
      <MainSection />
      <MapSection />
    </Layout>
  );
}
