import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, BookOpen, Heart, Globe } from 'lucide-react';
import { Layout } from '../components/Layout';
import { siteData } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const ICONS = [BookOpen, Heart, Globe];

function PageHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-khs-green">
      <div className="absolute inset-0">
        <img src={siteData.community.image} alt="Community" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-khs-green to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-khs-gold" />
          <span className="font-body text-khs-gold text-sm tracking-[0.3em] uppercase">Belonging & Education</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-khs-cream">A Space for Everyone</h1>
      </div>
    </section>
  );
}

function FullStorySection() {
  const imgRef = useReveal();
  const textRef = useReveal();
  return (
    <section className="bg-khs-cream py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={textRef} className="reveal-left">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-khs-green" />
            <span className="font-body text-khs-green text-sm tracking-[0.3em] uppercase">Our Community</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-khs-black mb-8 leading-tight">An Open Door<br />for Everyone.</h2>
          {siteData.community.longDescription.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-khs-black/70 text-lg leading-relaxed mb-5">{para}</p>
          ))}
        </div>
        <div ref={imgRef} className="reveal-right relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img src={siteData.community.image} alt="Community at KHS" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-khs-green text-khs-cream rounded-sm p-6 max-w-xs shadow-xl">
            <p className="font-display text-lg italic leading-snug">"Knowledge is power. We don't just style hair — we teach."</p>
            <p className="font-body text-khs-cream/60 text-sm mt-2">— Kadie</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ title, description, index }) {
  const ref = useReveal();
  const Icon = ICONS[index];
  return (
    <div ref={ref} className={`reveal delay-${(index + 1) * 100} border border-khs-cream/5 rounded-sm p-8 hover:border-khs-gold/20 transition-all duration-300 group`}>
      <div className="w-12 h-12 rounded-full bg-khs-gold/10 border border-khs-gold/20 flex items-center justify-center mb-6 group-hover:bg-khs-gold/20 transition-colors duration-300">
        <Icon className="w-5 h-5 text-khs-gold" />
      </div>
      <h3 className="font-display text-xl text-khs-cream mb-4">{title}</h3>
      <p className="font-body text-khs-cream/60 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function ProgramsSection() {
  const ref = useReveal();
  return (
    <section className="bg-khs-black py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="font-body text-khs-gold/80 text-sm tracking-[0.3em] uppercase mb-4">How We Show Up</p>
          <h2 className="font-display text-4xl md:text-5xl text-khs-cream">Community Programs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.community.highlights.map((item, i) => <ProgramCard key={item.title} {...item} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function JoinCTA() {
  const ref = useReveal();
  return (
    <section className="bg-khs-green py-24 px-6 lg:px-8 text-center">
      <div ref={ref} className="reveal max-w-2xl mx-auto">
        <p className="font-body text-khs-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Join Our Community</p>
        <h2 className="font-display text-4xl md:text-5xl text-khs-cream mb-6">You Belong Here.</h2>
        <p className="font-body text-khs-cream/70 text-lg mb-10 leading-relaxed">
          Whether you're a longtime community member or brand new to Steinbach, our door is open.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={siteData.brand.instagramUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-khs-gold text-khs-black font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-gold-light transition-colors duration-300 rounded-sm">
            <Instagram className="w-4 h-4" />
            Follow on Instagram
          </a>
          <Link to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-khs-cream/40 text-khs-cream font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:border-khs-cream hover:bg-khs-cream/10 transition-all duration-300 rounded-sm group">
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Community() {
  return (
    <Layout>
      <PageHero />
      <FullStorySection />
      <ProgramsSection />
      <JoinCTA />
    </Layout>
  );
}
