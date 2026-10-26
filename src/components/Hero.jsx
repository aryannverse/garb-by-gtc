import React from 'react';
import { ArrowDown, Sparkles, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-ivory-100">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-sand-200/50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-ivory-300/40 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Trust capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-ivory-300 text-xs font-semibold text-brown-800 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-terracotta-600 animate-pulse"></span>
              <span>Serving 500+ Multi-Brand Outlets Across India • Est. 2004</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-brown-900 leading-[1.08] tracking-tight text-balance">
              Garb by GTC
              <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-brown-700 mt-2">
                India’s Leading Fashion Brand
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brown-600 max-w-2xl leading-relaxed text-pretty">
              Founded in 2004 by Mr. Gopal Boria, Garb by GTC is a women’s ethnic wear brand built on a vision of bringing distinctive designs, quality, comfort, and style together at commercial prices.
            </p>

            {/* Philosophy quote strip */}
            <div className="p-4 sm:p-5 rounded-lg bg-ivory-200/90 border border-ivory-300 text-brown-800 space-y-1">
              <p className="text-sm sm:text-base font-medium italic font-display">
                “Confidence. Comfort. Style. Because every woman deserves to express herself in her own way.”
              </p>
              <p className="text-xs font-semibold text-brown-600 tracking-wide uppercase">
                Garb by GTC – Just Be You
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brown-900 hover:bg-brown-800 text-ivory-50 text-sm font-semibold rounded-md transition-all duration-200 shadow-sm hover:shadow group"
              >
                <span>Explore Catalog Collections</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ivory-200 hover:bg-sand-200 text-brown-900 border border-sand-300/80 text-sm font-semibold rounded-md transition-all duration-200"
              >
                <span>Partner Wholesale Inquiry</span>
              </button>
            </div>

            {/* Key stats row */}
            <div className="pt-6 border-t border-ivory-300/90 grid grid-cols-3 gap-6 w-full max-w-xl">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-brown-900">20+</div>
                <div className="text-xs text-brown-600 mt-0.5">Years Legacy (2004)</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-brown-900">500+</div>
                <div className="text-xs text-brown-600 mt-0.5">Retail MBO Outlets</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-brown-900">6+</div>
                <div className="text-xs text-brown-600 mt-0.5">Diverse Silhouette Lines</div>
              </div>
            </div>

          </div>

          {/* Visual Editorial Gallery Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Backing decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sand-300/40 to-ivory-300/20 rounded-2xl transform rotate-1"></div>

              {/* Grid of actual garments from Product Samples */}
              <div className="relative grid grid-cols-2 gap-3 p-2 bg-ivory-50 rounded-2xl border border-ivory-300 shadow-elevated">
                
                {/* Garment 1 */}
                <div className="group relative rounded-xl overflow-hidden aspect-[3/4.2] bg-ivory-200">
                  <img
                    src="/products/product-1.jpeg"
                    alt="Festive Embroidered Ethnic Kurti"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[11px] font-medium text-ivory-100">Festive Embroidery</span>
                  </div>
                </div>

                {/* Garment 2 */}
                <div className="group relative rounded-xl overflow-hidden aspect-[3/4.2] bg-ivory-200 translate-y-3">
                  <img
                    src="/products/product-3.jpeg"
                    alt="Velvet Contemporary Cord Set"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[11px] font-medium text-ivory-100">Tailored Cord Sets</span>
                  </div>
                </div>

                {/* Garment 3 */}
                <div className="group relative rounded-xl overflow-hidden aspect-[3/4.2] bg-ivory-200 -translate-y-2">
                  <img
                    src="/products/product-5.jpeg"
                    alt="Artisanal Handwork Three-Piece Set"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[11px] font-medium text-ivory-100">Three-Piece Sets</span>
                  </div>
                </div>

                {/* Garment 4 */}
                <div className="group relative rounded-xl overflow-hidden aspect-[3/4.2] bg-ivory-200 translate-y-1">
                  <img
                    src="/products/product-7.jpeg"
                    alt="Sculptural Contemporary Gown"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[11px] font-medium text-ivory-100">Occasion Gowns</span>
                  </div>
                </div>

              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-4 left-6 sm:-left-6 bg-brown-900 text-ivory-50 p-3.5 rounded-xl shadow-lg border border-sand-500/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sand-500/20 flex items-center justify-center text-sand-300">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Dadar West Showroom</div>
                  <div className="text-[10px] text-sand-300">Jay Gopal Industrial Estate, Mumbai</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
