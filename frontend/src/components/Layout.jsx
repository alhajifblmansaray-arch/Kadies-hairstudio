import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Scissors, ArrowUp } from 'lucide-react';
import { siteData } from '../data/siteData';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleMobileNav = (href) => {
    setMenuOpen(false);
    setTimeout(() => navigate(href), 150);
  };

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-khs-black/95 backdrop-blur-md border-b border-khs-gold/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-khs-gold/10 border border-khs-gold/30 flex items-center justify-center group-hover:bg-khs-gold/20 transition-colors duration-300">
              <Scissors className="w-5 h-5 text-khs-gold" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-khs-gold leading-none block">KHS</span>
              <span className="font-body text-[10px] text-khs-cream/50 tracking-widest uppercase leading-none">Hair Studio</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteData.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-sm tracking-wide transition-colors duration-200 relative group ${
                  isActive(link.href) ? 'text-khs-gold' : 'text-khs-cream/70 hover:text-khs-cream'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-khs-gold transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteData.brand.phone}`}
              className="text-khs-cream/60 hover:text-khs-gold transition-colors duration-200"
              title={siteData.brand.phone}
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-khs-cream/60 hover:text-khs-gold transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={siteData.brand.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-khs-gold text-khs-black font-body font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-khs-gold-light transition-colors duration-200 tracking-wide"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-khs-cream/70 hover:text-khs-gold transition-colors duration-200 p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-khs-black/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-10">
          <nav className="flex-1 flex flex-col gap-2">
            {siteData.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleMobileNav(link.href)}
                className={`text-left font-display text-3xl font-medium py-3 border-b border-khs-cream/5 transition-colors duration-200 ${
                  isActive(link.href) ? 'text-khs-gold' : 'text-khs-cream/70 hover:text-khs-cream'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-4">
            <a
              href={siteData.brand.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-khs-gold text-khs-black font-body font-semibold text-center py-4 rounded-sm hover:bg-khs-gold-light transition-colors duration-200 tracking-wide"
            >
              Book Appointment
            </a>
            <div className="flex items-center justify-center gap-6">
              <a href={`tel:${siteData.brand.phone}`} className="text-khs-cream/60 hover:text-khs-gold transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href={siteData.brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-khs-cream/60 hover:text-khs-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-khs-black border-t border-khs-cream/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-khs-gold/10 border border-khs-gold/30 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-khs-gold" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-khs-gold block leading-none">KHS</span>
                <span className="font-body text-[10px] text-khs-cream/40 tracking-widest uppercase">Hair Studio</span>
              </div>
            </div>
            <p className="font-body text-khs-cream/50 text-sm leading-relaxed mb-4 italic">
              "{siteData.brand.tagline}"
            </p>
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-khs-cream/50 hover:text-khs-gold transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              {siteData.brand.instagram}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-khs-cream text-sm tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-khs-cream/50 hover:text-khs-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteData.brand.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-khs-gold/70 hover:text-khs-gold transition-colors text-sm"
                >
                  Book Now →
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-body font-semibold text-khs-cream text-sm tracking-widest uppercase mb-5">Visit Us</h4>
            <p className="font-body text-khs-cream/50 text-sm leading-relaxed mb-3">
              {siteData.brand.address}
            </p>
            <a
              href={`tel:${siteData.brand.phone}`}
              className="font-body text-khs-cream/50 hover:text-khs-gold transition-colors text-sm block mb-1"
            >
              {siteData.brand.phone}
            </a>
            <p className="font-body text-khs-cream/40 text-sm">
              Tue – Sat: 9am – 6pm
            </p>
          </div>
        </div>

        <div className="border-t border-khs-cream/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-khs-cream/30 text-xs">
            © {new Date().getFullYear()} Kadie's Hair Studio. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-khs-cream/30 hover:text-khs-gold transition-colors text-xs font-body group"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-khs-black flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
