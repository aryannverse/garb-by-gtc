import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, Navigation, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ selectedProduct, onClearSelectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    shopName: '',
    agent: '',
    interestedCategory: selectedProduct ? `${selectedProduct.title} (${selectedProduct.code})` : 'All Categories',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const fullAddress = "SHOP NO 15, GROUND FLOOR, JAY GOPAL INDUSTRIAL ESTATE, B.S.CROSS.ROAD, DADAR WEST Mumbai, Maharashtra";
  const contactNumber = "+91 85915 61746";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.contactNumber.trim()) {
      errs.contactNumber = "Contact number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.contactNumber.trim())) {
      errs.contactNumber = "Please enter a valid phone number";
    }
    if (!formData.shopName.trim()) errs.shopName = "Shop / Enterprise name is required";
    if (!formData.agent.trim()) errs.agent = "Please mention Agent Name or write 'Direct'";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Delightful micro-interaction
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A68D74', '#3F3025', '#C59B27', '#FAF7F2']
      });
    } catch {
      // safe fallback if canvas is restricted
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Garb by GTC team, I am ${formData.name} from ${formData.shopName || 'Retail Shop'}.\nContact: ${formData.contactNumber}\nAgent: ${formData.agent || 'Direct'}\nInterested in: ${formData.interestedCategory || 'Ethnic Catalog'}\nLooking forward to receiving wholesale catalog & rates.`
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-tight">
            Connect With Our Wholesale Desk
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brown-600 leading-relaxed text-pretty">
            Visit our Dadar West showroom or register your retail shop below to receive our latest seasonal catalog, fabric swatches, and commercial price lists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Location & Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-ivory-50 rounded-2xl p-7 sm:p-9 border border-ivory-300 shadow-subtle space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ivory-200 border border-sand-300 flex items-center justify-center text-brown-800">
                  <Building2 className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-brown-900 font-semibold">
                    Showroom & Headquarters
                  </h3>
                  <p className="text-xs text-brown-500 font-medium">
                    Mumbai Textile & Wholesale Hub
                  </p>
                </div>
              </div>

              {/* Exact Location */}
              <div className="space-y-2 pt-2 border-t border-ivory-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brown-800 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-brown-500">
                      Location
                    </div>
                    <p className="text-sm font-medium text-brown-900 leading-relaxed">
                      SHOP NO 15, GROUND FLOOR, JAY GOPAL INDUSTRIAL ESTATE, B.S.CROSS.ROAD, DADAR WEST Mumbai, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2.5 pl-8">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-ivory-200 hover:bg-sand-200 text-brown-800 transition-colors"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? "Address Copied" : "Copy Address"}</span>
                  </button>

                  <a
                    href="https://maps.google.com/?q=Jay+Gopal+Industrial+Estate+Dadar+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-ivory-200 hover:bg-sand-200 text-brown-800 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brown-700" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone Line */}
              <div className="space-y-2 pt-4 border-t border-ivory-200">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brown-800 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-brown-500">
                      Direct Contact Number
                    </div>
                    <a
                      href="tel:+918591561746"
                      className="text-base font-semibold text-brown-900 hover:text-brown-700 transition-colors block"
                    >
                      {contactNumber}
                    </a>
                    <p className="text-xs text-brown-500">
                      Available Mon – Sat: 10:00 AM – 8:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-4 border-t border-ivory-200">
                <a
                  href={`https://wa.me/918591561746?text=${encodeURIComponent("Hello Garb by GTC, I am interested in wholesale retail partnership and would like to see your latest ethnic wear collection.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-brown-900 hover:bg-brown-800 text-ivory-50 text-xs font-semibold transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-sand-300" />
                  <span>Chat Directly on WhatsApp (+91 85915 61746)</span>
                </a>
              </div>

            </div>

            {/* Wholesale Partner Benefits Reminder */}
            <div className="bg-ivory-200/70 rounded-2xl p-6 border border-ivory-300 text-xs text-brown-700 space-y-2">
              <div className="font-semibold text-brown-900">Why Partner With Us?</div>
              <ul className="space-y-1.5 list-disc list-inside text-brown-600">
                <li>Immediate access to 500+ MBO proven fast-moving styles</li>
                <li>Exclusive territorial protection for qualifying boutiques</li>
                <li>Reliable pan-India dispatch straight from Dadar Mumbai</li>
              </ul>
            </div>

          </div>

          {/* Wholesale Partner Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-ivory-50 rounded-2xl p-7 sm:p-10 border border-ivory-300 shadow-elevated">
              
              <div className="mb-6">
                <h3 className="font-display text-2xl text-brown-900 font-semibold">
                  Retail Partner & Agent Registration
                </h3>
                <p className="text-xs sm:text-sm text-brown-600 mt-1">
                  Please complete the form below. Our retail coordinator will connect with wholesale terms.
                </p>
              </div>

              {selectedProduct && (
                <div className="mb-6 p-3 rounded-lg bg-ivory-200 border border-sand-300 flex items-center justify-between text-xs text-brown-800">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-9 h-12 object-cover rounded"
                    />
                    <div>
                      <span className="font-semibold block">{selectedProduct.title}</span>
                      <span className="text-[10px] text-brown-600">{selectedProduct.code} • {selectedProduct.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={onClearSelectedProduct}
                    className="text-xs text-brown-600 hover:text-brown-900 underline"
                  >
                    Clear Style
                  </button>
                </div>
              )}

              {submitted ? (
                <div className="p-8 text-center bg-ivory-200/60 rounded-xl border border-sand-300 space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-brown-900 text-ivory-50 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-2xl text-brown-900">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-brown-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brown-900">{formData.name}</strong> from <strong className="text-brown-900">{formData.shopName}</strong>. Our wholesale desk has logged your request and will contact you at <strong className="text-brown-900">{formData.contactNumber}</strong> shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/918591561746?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brown-900 hover:bg-brown-800 text-ivory-50 text-xs font-semibold rounded-md shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send Pre-Filled Details on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          contactNumber: '',
                          shopName: '',
                          agent: '',
                          interestedCategory: 'All Categories',
                          notes: '',
                        });
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-brown-700 hover:text-brown-900"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Field 1: Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-semibold text-brown-800 uppercase tracking-wider mb-1.5"
                    >
                      Your Name <span className="text-terracotta-700">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Mehta"
                      className={`w-full px-4 py-3 rounded-lg bg-ivory-100 border text-sm text-brown-900 placeholder:text-brown-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-ivory-300 focus:border-brown-700'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Field 2: Contact Number */}
                  <div>
                    <label
                      htmlFor="form-contactNumber"
                      className="block text-xs font-semibold text-brown-800 uppercase tracking-wider mb-1.5"
                    >
                      Contact Number <span className="text-terracotta-700">*</span>
                    </label>
                    <input
                      id="form-contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="e.g. +91 98200 12345"
                      className={`w-full px-4 py-3 rounded-lg bg-ivory-100 border text-sm text-brown-900 placeholder:text-brown-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.contactNumber ? 'border-red-500 focus:border-red-500' : 'border-ivory-300 focus:border-brown-700'
                      }`}
                    />
                    {errors.contactNumber && (
                      <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
                    )}
                  </div>

                  {/* Field 3: Shop Name */}
                  <div>
                    <label
                      htmlFor="form-shopName"
                      className="block text-xs font-semibold text-brown-800 uppercase tracking-wider mb-1.5"
                    >
                      Shop Name / Multi-Brand Outlet <span className="text-terracotta-700">*</span>
                    </label>
                    <input
                      id="form-shopName"
                      type="text"
                      value={formData.shopName}
                      onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                      placeholder="e.g. Roopa Saree & Ethnic Hub, Pune"
                      className={`w-full px-4 py-3 rounded-lg bg-ivory-100 border text-sm text-brown-900 placeholder:text-brown-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.shopName ? 'border-red-500 focus:border-red-500' : 'border-ivory-300 focus:border-brown-700'
                      }`}
                    />
                    {errors.shopName && (
                      <p className="mt-1 text-xs text-red-600">{errors.shopName}</p>
                    )}
                  </div>

                  {/* Field 4: Agent */}
                  <div>
                    <label
                      htmlFor="form-agent"
                      className="block text-xs font-semibold text-brown-800 uppercase tracking-wider mb-1.5"
                    >
                      Agent Name / Representative <span className="text-terracotta-700">*</span>
                    </label>
                    <input
                      id="form-agent"
                      type="text"
                      value={formData.agent}
                      onChange={(e) => setFormData({ ...formData, agent: e.target.value })}
                      placeholder="Name of sourcing agent (or type 'Direct' if none)"
                      className={`w-full px-4 py-3 rounded-lg bg-ivory-100 border text-sm text-brown-900 placeholder:text-brown-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.agent ? 'border-red-500 focus:border-red-500' : 'border-ivory-300 focus:border-brown-700'
                      }`}
                    />
                    {errors.agent && (
                      <p className="mt-1 text-xs text-red-600">{errors.agent}</p>
                    )}
                  </div>

                  {/* Optional Field: Interested Category */}
                  <div>
                    <label
                      htmlFor="form-interestedCategory"
                      className="block text-xs font-semibold text-brown-800 uppercase tracking-wider mb-1.5"
                    >
                      Primary Interest
                    </label>
                    <select
                      id="form-interestedCategory"
                      value={formData.interestedCategory}
                      onChange={(e) => setFormData({ ...formData, interestedCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-ivory-100 border border-ivory-300 text-sm text-brown-900 focus:bg-white focus:outline-none focus:border-brown-700 transition-colors"
                    >
                      <option value="All Categories">All Categories (Full Wholesale Lookbook)</option>
                      <option value="Kurtis & Tunics">Kurtis & Tunics</option>
                      <option value="Cord Sets">Cord Sets</option>
                      <option value="Three-Piece Sets">Three-Piece Sets</option>
                      <option value="Gowns & Contemporary">Gowns & Contemporary</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-brown-900 hover:bg-brown-800 text-ivory-50 font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow group"
                    >
                      <span>Submit Retail Partner Inquiry</span>
                      <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                    <p className="text-[11px] text-center text-brown-500 mt-2.5">
                      Strictly B2B & Wholesale Inquiries • Serving 500+ Outlets Nationwide
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
