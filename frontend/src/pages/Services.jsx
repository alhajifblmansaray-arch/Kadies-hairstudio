import React, { useState } from 'react';
import { ArrowRight, Clock, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../components/Layout';
import { siteData } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

function PageHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80" alt="Services" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-khs-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-khs-black to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-khs-gold" />
          <span className="font-body text-khs-gold text-sm tracking-[0.3em] uppercase">What We Offer</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-khs-cream">Our Services</h1>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal bg-white rounded-sm overflow-hidden border border-khs-black/5 hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden flex-shrink-0">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex-1 p-7">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-display text-2xl text-khs-black">{service.name}</h3>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className="font-body text-khs-black/50 text-sm font-medium">{service.price}</span>
              <span className="inline-flex items-center gap-1.5 text-khs-green text-xs font-body">
                <Clock className="w-3 h-3" />
                {service.duration}
              </span>
            </div>
          </div>

          <p className="font-body text-khs-black/65 leading-relaxed mb-4">
            {expanded ? service.longDescription : service.description}
          </p>

          <button onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-khs-green font-body text-sm font-semibold mb-5 hover:text-khs-green-light transition-colors">
            {expanded ? 'Show less' : 'Read more'}
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <div className="mb-6">
            <p className="font-body text-xs text-khs-black/40 uppercase tracking-widest mb-3">Includes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.includes.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-khs-green/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-khs-green" />
                  </div>
                  <span className="font-body text-khs-black/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a href={siteData.brand.servicesUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-khs-black text-khs-cream font-body font-semibold tracking-wide uppercase text-xs px-6 py-3 hover:bg-khs-green transition-colors duration-300 rounded-sm group">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

function BookingCTA() {
  const ref = useReveal();
  return (
    <section className="bg-khs-black py-20 px-6 lg:px-8 text-center">
      <div ref={ref} className="reveal max-w-2xl mx-auto">
        <h2 className="font-display text-4xl text-khs-cream mb-4">Ready to <em className="text-khs-gold">Book?</em></h2>
        <p className="font-body text-khs-cream/60 mb-8">All bookings are through Square. Choose your service and pick a time.</p>
        <a href={siteData.brand.bookingUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-khs-gold text-khs-black font-body font-semibold tracking-wide uppercase text-sm px-10 py-4 hover:bg-khs-gold-light transition-colors duration-300 rounded-sm group">
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}

export default function Services() {
  const ref = useReveal();
  return (
    <Layout>
      <PageHero />
      <section className="bg-khs-cream py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={ref} className="reveal mb-12">
            <p className="font-body text-khs-green text-sm tracking-[0.3em] uppercase mb-2">Full Menu</p>
            <h2 className="font-display text-3xl md:text-4xl text-khs-black">All Services</h2>
          </div>
          <div className="space-y-6">
            {siteData.services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>
      <BookingCTA />
    </Layout>
  );
}
