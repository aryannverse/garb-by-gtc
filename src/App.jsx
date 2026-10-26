import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import AboutSection from './components/AboutSection';
import CollectionsGallery from './components/CollectionsGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [modalProduct, setModalProduct] = useState(null);
  const [inquiryProduct, setInquiryProduct] = useState(null);

  const handleOpenInquiry = (product = null) => {
    if (product) {
      setInquiryProduct(product);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Focus name input after brief delay
      setTimeout(() => {
        const input = document.getElementById('form-name');
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col font-body selection:bg-sand-300 selection:text-brown-950">
      
      {/* Top Fixed Floating Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* Why Garb by GTC Section */}
        <WhyUs />

        {/* About Us & Heritage Section */}
        <AboutSection />

        {/* Curated Collections Showcase */}
        <CollectionsGallery
          onSelectProduct={(product) => setModalProduct(product)}
          onInquireProduct={(product) => handleOpenInquiry(product)}
        />

        {/* Contact Us & B2B Wholesale Form */}
        <ContactSection
          selectedProduct={inquiryProduct}
          onClearSelectedProduct={() => setInquiryProduct(null)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox / Quick View Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onInquire={(product) => handleOpenInquiry(product)}
        />
      )}

      {/* Floating WhatsApp Quick Connect Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-30">
        <a
          href={`https://wa.me/918591561746?text=${encodeURIComponent("Hello Garb by GTC, I would like to inquire about wholesale collections & partnership.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-brown-900 hover:bg-brown-850 text-ivory-50 shadow-elevated border border-sand-400/30 transition-all duration-300 hover:scale-105"
          aria-label="Direct WhatsApp Contact"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></div>
          <MessageSquare className="w-4 h-4 text-sand-300" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            WhatsApp Wholesale Desk
          </span>
        </a>
      </aside>

    </div>
  );
}
