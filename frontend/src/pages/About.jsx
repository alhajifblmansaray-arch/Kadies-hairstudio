import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { siteData } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

function PageHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={siteData.about.secondImage} alt="About KHS" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-khs-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-khs-black to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-khs-gold" />
          <span className="font-body text-khs-gold text-sm tracking-[0.3em] uppercase">Who We Are</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-khs-cream">Our Story</h1>
      </div>
    </section>
  );
}

function StorySection() {
  const imgRef = useReveal();
  const textRef = useReveal();
  return (
    <section className="bg-khs-cream py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div ref={imgRef} className="reveal-left lg:sticky lg:top-24 relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img src={siteData.about.image} alt="Kadie at KHS Hair Studio" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 -right-4 bg-khs-gold text-khs-black font-body font-semibold text-sm px-4 py-2 rounded-sm">
            Est. 2023
          </div>
          <div className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-khs-green/30 rounded-sm" />
        </div>
        <div ref={textRef} className="reveal-right">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-khs-green" />
            <span className="font-body text-khs-green text-sm tracking-[0.3em] uppercase">Kadie's Journey</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-khs-black mb-8 leading-tight">More Than<br />a Salon.</h2>
          <div className="space-y-6">
            {siteData.about.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-khs-black/70 text-lg leading-relaxed">{p}</p>
            ))}
          </div>
          <blockquote className="border-l-4 border-khs-green pl-6 mt-10 mb-10">
            <p className="font-display text-xl italic text-khs-black/80 leading-relaxed">"{siteData.about.mission}"</p>
          </blockquote>
          <a href={siteData.brand.bookingUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-khs-green text-khs-cream font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-green-light transition-colors duration-300 rounded-sm group">
            Book Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, description, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal delay-${(index % 2 + 1) * 100} border border-khs-cream/5 rounded-sm p-8 hover:border-khs-gold/20 transition-all duration-300 group`}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-khs-gold/10 border border-khs-gold/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-khs-gold/20 transition-colors duration-300">
          <span className="text-khs-gold font-display font-bold text-sm">{index + 1}</span>
        </div>
        <div>
          <h3 className="font-display text-2xl text-khs-cream mb-3">{title}</h3>
          <p className="font-body text-khs-cream/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ValuesSection() {
  const ref = useReveal();
  return (
    <section className="bg-khs-black py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="font-body text-khs-gold/80 text-sm tracking-[0.3em] uppercase mb-4">What We Stand For</p>
          <h2 className="font-display text-4xl md:text-5xl text-khs-cream">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.about.values.map((v, i) => <ValueCard key={v.title} {...v} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function VisitCTA() {
  const ref = useReveal();
  const imgRef = useReveal();
  return (
    <section className="bg-khs-cream py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={ref} className="reveal">
          <p className="font-body text-khs-green text-sm tracking-[0.3em] uppercase mb-4">We're Ready For You</p>
          <h2 className="font-display text-4xl md:text-5xl text-khs-black mb-6">Come Visit Us</h2>
          <p className="font-body text-khs-black/70 text-lg leading-relaxed mb-8">
            We'd love to meet you and learn about your hair. Whether you're coming in for the first time or returning home, our chair is always open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={siteData.brand.bookingUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-khs-green text-khs-cream font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-green-light transition-colors duration-300 rounded-sm group">
              Book Appointment
            </a>
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-khs-green text-khs-green font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-green hover:text-khs-cream transition-all duration-300 rounded-sm">
              Contact Us
            </Link>
          </div>
        </div>
        <div ref={imgRef} className="reveal-right aspect-[4/3] rounded-sm overflow-hidden">
          <img src="https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?w=800&q=80" alt="Hair studio" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <Layout>
      <PageHero />
      <StorySection />
      <ValuesSection />
      <VisitCTA />
    </Layout>
  );
}
