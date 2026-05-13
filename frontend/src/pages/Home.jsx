import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Leaf, Users, ChevronLeft, ChevronRight, Scissors, ChevronDown } from 'lucide-react';
import { Layout } from '../components/Layout';
import { siteData } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';
import { RevealBox } from '../components/RevealBox';

/* ── Hero ───────────────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const bg = heroRef.current.querySelector('.hero-bg');
        if (bg) bg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-bg absolute inset-0 w-full h-[120%] -top-[10%]">
        <img src={siteData.hero.image} alt="Hair styling" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-khs-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-khs-black via-transparent to-khs-black/40" />
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-khs-gold/10 opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full border border-khs-green/10 opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl pt-24">
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <div className="w-12 h-[1px] bg-khs-gold" />
            <span className="text-khs-gold font-body text-sm tracking-[0.3em] uppercase">{siteData.brand.fullName}</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-khs-cream leading-[0.95] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Rooted in Care.<br />
            <span className="text-khs-gold italic">Styled with Love.</span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-khs-cream/70 max-w-xl leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {siteData.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href={siteData.brand.bookingUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-khs-gold text-khs-black font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-gold-light transition-all duration-300 rounded-sm group">
              Book Your Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link to="/services"
              className="inline-flex items-center justify-center gap-2 border border-khs-cream/30 text-khs-cream font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:border-khs-gold hover:text-khs-gold transition-all duration-300 rounded-sm">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-khs-cream/40 animate-scroll-bounce">
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}

/* ── Experience card (individual) ──────────────────────────────── */
function ExperienceCard({ icon: Icon, title, desc, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal delay-${delay} bg-khs-green-dark/50 border border-khs-cream/5 rounded-sm p-8 text-center group hover:border-khs-gold/20 transition-all duration-300`}>
      <div className="w-14 h-14 rounded-full bg-khs-gold/10 border border-khs-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-khs-gold/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-khs-gold" />
      </div>
      <h3 className="font-display text-xl text-khs-cream mb-3">{title}</h3>
      <p className="font-body text-khs-cream/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ExperienceSection() {
  const ref = useReveal();
  const items = [
    { icon: Shield, title: 'Private Atmosphere', desc: 'A calm, intentional space where you can relax, breathe, and be fully yourself.' },
    { icon: Leaf, title: 'Texture Specialists', desc: 'Deep expertise in natural, textured, and protective styles rooted in African tradition.' },
    { icon: Users, title: 'Community Focused', desc: 'A gathering space built on connection, education, and cultural celebration.' },
  ];
  return (
    <section className="bg-khs-green py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="font-body text-khs-gold/80 text-sm tracking-[0.3em] uppercase mb-4">The KHS Experience</p>
          <h2 className="font-display text-4xl md:text-5xl text-khs-cream">
            Elegant. Elevated. <em className="text-khs-gold">Yours.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <ExperienceCard key={item.title} {...item} delay={(i + 1) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Founder Welcome ─────────────────────────────────────────────── */
function FounderSection() {
  const imgRef = useReveal();
  const textRef = useReveal();
  return (
    <section className="bg-khs-cream py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={imgRef} className="reveal-left relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img src={siteData.about.founderImage} alt="Kadie, founder of KHS Hair Studio" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-khs-gold/30 rounded-sm" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-khs-gold/10 rounded-sm" />
        </div>
        <div ref={textRef} className="reveal-right">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-khs-green" />
            <span className="font-body text-khs-green text-sm tracking-[0.3em] uppercase">Founder's Welcome</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-khs-black mb-6 leading-tight">More Than<br />Just Hair.</h2>
          <p className="font-body text-khs-black/70 text-lg leading-relaxed mb-8">
            Welcome to KHS. I'm Kadie, and I built this studio to be a sanctuary for every texture and story. Whether you need a protective style, a silk press, or just a safe space to breathe — you are welcome here.
          </p>
          <Link to="/about"
            className="inline-flex items-center gap-2 bg-khs-green text-khs-cream font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-green-light transition-colors duration-300 rounded-sm group">
            Read Our Full Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Service card (individual) ──────────────────────────────────── */
function ServiceCard({ title, subtitle, image, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal delay-${delay} group relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer`}>
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-khs-black via-khs-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-2xl text-khs-cream mb-1">{title}</h3>
        <p className="font-body text-khs-gold/70 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function ServicesSection() {
  const ref = useReveal();
  const cards = [
    { title: 'Braids & Protective Styles', subtitle: 'Cornrows · Box Braids · Fulani', image: 'https://images.unsplash.com/photo-1606416132922-22ab37c1231e?w=800&q=80' },
    { title: 'Boho & Knotless Braids', subtitle: 'Boho Braids · Knotless · Boho Knotless', image: 'https://images.unsplash.com/photo-1614173968962-0e61c5ed196f?w=800&q=80' },
    { title: 'Locs, Wash & Care', subtitle: 'Locs · Wash & Treatment · Kids · Cuts', image: 'https://images.unsplash.com/photo-1606459431839-90b942dc3754?w=800&q=80' },
  ];
  return (
    <section className="bg-khs-black py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="font-body text-khs-gold/80 text-sm tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl text-khs-cream">
            Curated Care for <em className="text-khs-gold">Your Crown.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => <ServiceCard key={card.title} {...card} delay={(i + 1) * 100} />)}
        </div>
        <div className="text-center">
          <Link to="/services"
            className="inline-flex items-center gap-2 border border-khs-gold text-khs-gold font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-gold hover:text-khs-black transition-all duration-300 rounded-sm group">
            View Full Menu & Pricing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ────────────────────────────────────────────────── */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useReveal();

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % siteData.testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-khs-cream py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="font-body text-khs-green text-sm tracking-[0.3em] uppercase mb-4">Client Love</p>
          <h2 className="font-display text-4xl md:text-5xl text-khs-black">What Our Clients Say</h2>
        </div>
        <div className="relative">
          {siteData.testimonials.map((t, i) => (
            <div key={t.id} style={{ display: i === active ? 'block' : 'none' }}>
              <div className="bg-white rounded-sm p-10 md:p-14 shadow-lg text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-5 h-5 fill-khs-gold text-khs-gold" />)}
                </div>
                <blockquote className="font-display text-2xl md:text-3xl text-khs-black italic leading-snug mb-8">"{t.text}"</blockquote>
                <p className="font-body text-khs-black/50 text-sm tracking-widest uppercase">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={() => setActive(a => (a - 1 + siteData.testimonials.length) % siteData.testimonials.length)}
            className="w-10 h-10 rounded-full border border-khs-black/20 flex items-center justify-center text-khs-black/50 hover:border-khs-green hover:text-khs-green transition-colors duration-200">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {siteData.testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-khs-green w-6' : 'bg-khs-black/20 w-2'}`} />
            ))}
          </div>
          <button onClick={() => setActive(a => (a + 1) % siteData.testimonials.length)}
            className="w-10 h-10 rounded-full border border-khs-black/20 flex items-center justify-center text-khs-black/50 hover:border-khs-green hover:text-khs-green transition-colors duration-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Booking CTA ─────────────────────────────────────────────────── */
function BookingCTA() {
  const ref = useReveal();
  return (
    <section className="bg-khs-black py-24 px-6 lg:px-8 text-center">
      <div ref={ref} className="reveal max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-khs-gold/10 border border-khs-gold/20 flex items-center justify-center mx-auto mb-8">
          <Scissors className="w-7 h-7 text-khs-gold" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-khs-cream mb-4">
          Ready to Sit in <em className="text-khs-gold">Our Chair?</em>
        </h2>
        <p className="font-body text-khs-cream/60 mb-10 text-lg">We can't wait to welcome you.</p>
        <a href={siteData.brand.bookingUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-khs-gold text-khs-black font-body font-semibold tracking-wide uppercase text-sm px-10 py-4 hover:bg-khs-gold-light transition-colors duration-300 rounded-sm group">
          Book on Square
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <FounderSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingCTA />
    </Layout>
  );
}
