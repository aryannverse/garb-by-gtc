import React from 'react';
import { Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-ivory-200/60 border-y border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - No eyebrow ban violation */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-tight">
            Why Garb by GTC?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brown-600 leading-relaxed text-pretty">
            Built from twenty years of ground-level collaboration with India’s foremost multi-brand apparel retailers. We engineer every silhouette to solve the retail partner’s three biggest hurdles: differentiation, healthy margins, and zero customer returns.
          </p>
        </div>

        {/* Differentiated Editorial Grid (Not identical icon cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Pillar 1: Hard-to-Find Designs - Large Featured Block */}
          <div className="lg:col-span-7 bg-ivory-50 rounded-2xl p-8 sm:p-10 border border-ivory-300 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-ivory-200 border border-sand-300 flex items-center justify-center text-brown-800 mb-6">
                <Sparkles className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-brown-900 mb-4">
                Hard-to-Find Designs
              </h3>
              <p className="text-base text-brown-600 leading-relaxed mb-6">
                Unique styles that help your collection stand out in the market. In a retail landscape saturated with identical mass-market cuts, Garb by GTC delivers distinctive necklines, exclusive hand-embroidered placements, contemporary silhouettes, and fresh color stories that cannot be easily copied or found on generic wholesale portals.
              </p>
            </div>

            <div className="pt-6 border-t border-ivory-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-brown-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brown-800" />
                Original In-House Pattern Drafting
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brown-800" />
                Distinctive Shelf Appeal
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brown-800" />
                Protected Regional Exclusivity
              </span>
            </div>
          </div>

          {/* Pillars 2 & 3: Commercial Rates & Quality You Can Trust - Stacked Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Pillar 2: Commercial Rates */}
            <div className="bg-ivory-50 rounded-2xl p-7 sm:p-8 border border-ivory-300 shadow-subtle flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-ivory-200 border border-sand-300 flex items-center justify-center text-brown-800 mb-5">
                  <TrendingUp className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-brown-900 mb-2.5">
                  Commercial Rates
                </h3>
                <p className="text-sm sm:text-base text-brown-600 leading-relaxed">
                  Trendy fashion at competitive prices that support your business. We believe premium ethnic aesthetics should remain commercially viable. Our direct-from-production pricing gives retail outlets healthy markup margins and rapid inventory turnaround.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-ivory-200 flex items-center justify-between text-xs font-medium text-brown-700">
                <span>Optimized for Retail Margins</span>
                <span className="text-brown-900 font-semibold">B2B Wholesale Scale</span>
              </div>
            </div>

            {/* Pillar 3: Quality You Can Trust */}
            <div className="bg-ivory-50 rounded-2xl p-7 sm:p-8 border border-ivory-300 shadow-subtle flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-ivory-200 border border-sand-300 flex items-center justify-center text-brown-800 mb-5">
                  <Award className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-brown-900 mb-2.5">
                  Quality You Can Trust
                </h3>
                <p className="text-sm sm:text-base text-brown-600 leading-relaxed">
                  Consistent quality, comfort, and craftsmanship in every collection. Every garment undergoes rigorous seam inspections, fabric shrinkage tests, colorfastness checks, and fit assessments before leaving our Dadar production facility.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-ivory-200 flex items-center justify-between text-xs font-medium text-brown-700">
                <span>Zero-Tolerance Defect Standard</span>
                <span className="text-brown-900 font-semibold">20 Years Proven</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
