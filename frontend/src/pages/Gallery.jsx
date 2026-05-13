import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Layout } from '../components/Layout';
import { siteData } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const FILTERS = ['All', 'Braids', 'Locs', 'Cuts'];

function PageHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1614173968962-0e61c5ed196f?w=1600&q=80"
          alt="Gallery"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-khs-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-khs-black to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-khs-gold" />
          <span className="font-body text-khs-gold text-sm tracking-[0.3em] uppercase">Our Work</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-khs-cream">Gallery</h1>
      </div>
    </section>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const ref = useReveal();
  const instaCTA = useReveal();

  const filtered = filter === 'All'
    ? siteData.gallery
    : siteData.gallery.filter((img) => img.category === filter);

  return (
    <Layout>
      <PageHero />

      <section className="bg-khs-black py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div ref={ref} className="reveal flex items-center gap-3 flex-wrap mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-body text-sm tracking-wide px-6 py-2.5 rounded-sm border transition-all duration-200 ${
                  filter === f
                    ? 'bg-khs-gold border-khs-gold text-khs-black font-semibold'
                    : 'border-khs-cream/20 text-khs-cream/60 hover:border-khs-gold/40 hover:text-khs-cream'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={`break-inside-avoid relative group overflow-hidden rounded-sm ${i === 0 ? 'row-span-2' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: i === 0 ? '3/4' : '4/3' }}
                />
                <div className="absolute inset-0 bg-khs-black/0 group-hover:bg-khs-black/50 transition-all duration-300 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="font-display text-khs-cream text-lg">{img.alt}</p>
                    <span className="inline-block bg-khs-gold/20 border border-khs-gold/30 text-khs-gold text-xs font-body px-3 py-1 rounded-sm mt-1">
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div ref={instaCTA} className="reveal mt-20 text-center">
            <div className="max-w-lg mx-auto border border-khs-cream/10 rounded-sm p-10">
              <Instagram className="w-10 h-10 text-khs-gold mx-auto mb-5" />
              <h3 className="font-display text-2xl text-khs-cream mb-3">See More of Our Work</h3>
              <p className="font-body text-khs-cream/50 mb-6">Follow us on Instagram for daily inspiration and behind-the-scenes moments.</p>
              <a
                href={siteData.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-khs-gold text-khs-black font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 hover:bg-khs-gold-light transition-colors duration-300 rounded-sm"
              >
                <Instagram className="w-4 h-4" />
                Follow {siteData.brand.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
