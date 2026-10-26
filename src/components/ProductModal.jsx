import React, { useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';

export default function ProductModal({ product, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brown-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-ivory-50 rounded-2xl shadow-modal border border-ivory-300 overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ivory-100/90 hover:bg-ivory-200 text-brown-800 transition-colors border border-ivory-300"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Garment Image Column */}
        <div className="md:col-span-6 bg-ivory-200 overflow-hidden relative aspect-[3/4] md:aspect-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-brown-900 text-ivory-100 shadow">
              {product.tag}
            </span>
          </div>
        </div>

        {/* Garment Specifications Column */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-brown-500">
                {product.category} • {product.code}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-brown-900 font-bold mt-1 leading-snug">
                {product.title}
              </h3>
            </div>

            <div className="space-y-3 pt-3 border-t border-ivory-200 text-sm">
              <div>
                <span className="block text-xs font-semibold uppercase text-brown-500 mb-1">
                  Fabric & Craft
                </span>
                <p className="text-brown-800 font-medium">
                  {product.fabric}
                </p>
              </div>

              <div>
                <span className="block text-xs font-semibold uppercase text-brown-500 mb-1">
                  Retail Advantage
                </span>
                <p className="text-brown-600 leading-relaxed text-xs sm:text-sm">
                  {product.description}
                </p>
              </div>

              <div className="p-3.5 bg-ivory-200/80 rounded-lg border border-sand-300/80 space-y-1">
                <div className="text-xs font-semibold text-brown-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brown-800" />
                  Commercial Tier Guarantee
                </div>
                <p className="text-[11px] text-brown-600">
                  Ready for bulk ordering across XS–XXL size ranges. Custom colorway allotments available for multi-store networks.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-ivory-200 space-y-3">
            <button
              onClick={() => {
                onInquire(product);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 bg-brown-900 hover:bg-brown-800 text-ivory-50 text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>Inquire Wholesale Pricing for This Style</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={`https://wa.me/918591561746?text=${encodeURIComponent(`Hello Garb by GTC, I am inquiring about wholesale rates for ${product.title} (${product.code}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-ivory-200 hover:bg-sand-200 text-brown-900 text-xs font-semibold rounded-lg border border-ivory-300 transition-colors"
            >
              <span>Quick WhatsApp Check</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
