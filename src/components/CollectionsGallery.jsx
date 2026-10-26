import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Eye, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export default function CollectionsGallery({ onSelectProduct, onInquireProduct }) {
  const [activeCategory, setActiveCategory] = useState("All Collections");

  const filteredProducts = activeCategory === "All Collections"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collections" className="py-20 md:py-28 bg-ivory-200/50 border-t border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-tight">
              Curated Ethnic Collections
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brown-600 leading-relaxed text-pretty">
              Kurtis, tunics, cord sets, three-piece sets, gowns, and contemporary ethnic wear crafted for high-turnover retail performance.
            </p>
          </div>

          {/* Catalog stats */}
          <div className="flex items-center gap-3 text-xs font-semibold text-brown-700 bg-ivory-50 px-4 py-2.5 rounded-lg border border-ivory-300 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-brown-800" />
            <span>12 Core Seasonal Silhouettes • 500+ MBO Catalog</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count = cat === "All Collections" 
              ? PRODUCTS.length 
              : PRODUCTS.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-brown-900 text-ivory-50 shadow-sm'
                    : 'bg-ivory-50 text-brown-700 hover:bg-sand-200 hover:text-brown-900 border border-ivory-300'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-sand-500/30 text-sand-200'
                      : 'bg-ivory-200 text-brown-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Garment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-ivory-50 rounded-xl overflow-hidden border border-ivory-300 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[3/4.2] overflow-hidden bg-ivory-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Tag Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase bg-brown-900/90 text-ivory-100 backdrop-blur-sm shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Code Pill */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-ivory-50/90 text-brown-800 border border-ivory-300 backdrop-blur-sm">
                    {product.code}
                  </span>
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-brown-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="p-3 bg-ivory-50 hover:bg-white text-brown-900 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 flex items-center justify-center"
                    title="Quick View Look"
                    aria-label={`Quick view ${product.title}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onInquireProduct(product)}
                    className="px-3.5 py-2.5 bg-brown-900 hover:bg-brown-800 text-ivory-50 text-xs font-semibold rounded-full shadow-lg transition-transform duration-200 hover:scale-105 flex items-center gap-1.5"
                    title="Inquire Wholesale Availability"
                  >
                    <span>Inquire Style</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Product Meta */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] font-medium tracking-wide text-brown-500 uppercase mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-display text-lg text-brown-900 font-semibold leading-snug line-clamp-1 mb-1.5">
                    {product.title}
                  </h3>
                  <p className="text-xs text-brown-600 line-clamp-2 leading-relaxed">
                    {product.fabric}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-ivory-200 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-brown-700">
                    Commercial Tier Pricing
                  </span>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-semibold text-brown-900 hover:text-brown-700 underline underline-offset-4"
                  >
                    Details & Fit
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
