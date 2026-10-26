import React from 'react';
import { Phone, MapPin, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brown-900 text-ivory-100 pt-16 pb-12 border-t border-brown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-brown-800">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-brown-950 border border-sand-400/40 p-1 flex items-center justify-center">
                <img
                  src="/logo-cropped.png"
                  alt="Garb by GTC Emblem"
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-ivory-50 leading-none block">
                  Garb <span className="font-normal text-sand-300 text-lg">by GTC</span>
                </span>
                <span className="text-[10px] tracking-luxury uppercase text-sand-400 font-medium mt-0.5 block">
                  India’s Leading Fashion Brand
                </span>
              </div>
            </div>

            <p className="text-sm text-sand-200/80 leading-relaxed max-w-md pt-2">
              Founded in 2004 by Mr. Gopal Boria. Dedicated to bringing distinctive designs, premium craftsmanship, and accessible commercial rates to 500+ multi-brand retail partners across India.
            </p>

            <div className="pt-2">
              <span className="font-display text-base text-sand-300 italic block">
                “Confidence. Comfort. Style. Because every woman deserves to express herself in her own way.”
              </span>
              <span className="text-xs font-semibold text-sand-400 tracking-wider uppercase mt-1 block">
                Garb by GTC – Just Be You.
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base text-ivory-50 font-semibold uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-sand-200">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Brand & Legacy
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Garb by GTC
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Seasonal Collections
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Mr. Gopal Boria & Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Wholesale Partner Form
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom & Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-base text-ivory-50 font-semibold uppercase tracking-wider text-xs">
              Showroom & Workshop
            </h4>
            <div className="space-y-3 text-sm text-sand-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sand-400 mt-1 flex-shrink-0" />
                <p className="leading-relaxed text-xs sm:text-sm">
                  SHOP NO 15, GROUND FLOOR, JAY GOPAL INDUSTRIAL ESTATE, B.S.CROSS.ROAD, DADAR WEST Mumbai, Maharashtra
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sand-400 flex-shrink-0" />
                <a
                  href="tel:+918591561746"
                  className="text-xs sm:text-sm font-semibold hover:text-white transition-colors"
                >
                  +91 85915 61746
                </a>
              </div>

              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded bg-brown-800 text-[11px] text-sand-300 font-medium border border-brown-700">
                  Serving 500+ MBOs Across All Indian States
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-300 gap-4">
          <div>
            © 2004–2026 Garb by GTC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Commercial B2B Ethnic Wear Hub</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-sand-200 hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
