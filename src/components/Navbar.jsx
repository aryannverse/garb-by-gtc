import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-100/95 backdrop-blur-md shadow-subtle border-b border-ivory-300/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Garb by GTC Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-brown-900 border border-sand-400/40 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo-cropped.png"
                alt="Garb by GTC Emblem"
                className="w-full h-full object-contain filter brightness-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-brown-900 leading-none">
                Garb <span className="font-normal text-brown-700 text-lg">by GTC</span>
              </span>
              <span className="text-[10px] tracking-luxury uppercase text-brown-500 font-medium mt-1">
                India’s Leading Fashion Brand
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-brown-700 hover:text-brown-950 transition-colors py-1"
            >
              About Us
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-brown-700 hover:text-brown-950 transition-colors py-1"
            >
              Why Choose Us
            </a>
            <a
              href="#collections"
              className="text-sm font-medium text-brown-700 hover:text-brown-950 transition-colors py-1"
            >
              Collections
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-brown-700 hover:text-brown-950 transition-colors py-1"
            >
              Founder & Team
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-brown-700 hover:text-brown-950 transition-colors py-1"
            >
              Contact Us
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+918591561746"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-brown-800 bg-ivory-200/90 hover:bg-sand-200 border border-ivory-300 rounded-md transition-all duration-200"
              aria-label="Call Garb by GTC"
            >
              <Phone className="w-3.5 h-3.5 text-brown-700" />
              <span>+91 85915 61746</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-ivory-50 bg-brown-900 hover:bg-brown-800 rounded-md transition-all duration-200 shadow-sm hover:shadow group"
            >
              <span>Retail Partner Form</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-brown-800 hover:bg-ivory-200 border border-ivory-300 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-ivory-300 bg-ivory-100/95 backdrop-blur-md rounded-b-xl px-2 animate-fade-in space-y-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-brown-800 hover:bg-ivory-200 rounded-md"
            >
              About Us
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-brown-800 hover:bg-ivory-200 rounded-md"
            >
              Why Choose Us
            </a>
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-brown-800 hover:bg-ivory-200 rounded-md"
            >
              Collections
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-brown-800 hover:bg-ivory-200 rounded-md"
            >
              Founder & Team
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-brown-800 hover:bg-ivory-200 rounded-md"
            >
              Contact Us
            </a>

            <div className="pt-3 border-t border-ivory-300 flex flex-col gap-2">
              <a
                href="tel:+918591561746"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-brown-900 bg-ivory-200 rounded-md"
              >
                <Phone className="w-4 h-4 text-brown-700" />
                <span>+91 85915 61746</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-ivory-50 bg-brown-900 hover:bg-brown-800 rounded-md"
              >
                <span>Wholesale Partner Form</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
