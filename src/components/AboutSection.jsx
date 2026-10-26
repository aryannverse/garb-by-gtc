import React from 'react';
import { Eye, Heart, Compass, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-tight">
            About Garb by GTC
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brown-600 leading-relaxed text-pretty">
            India’s trusted women’s ethnic wear brand — crafting distinctive fashion, comforting silhouettes, and commercial success for over two decades.
          </p>
        </div>

        {/* Founder Spotlight & Heritage Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20 md:mb-28">
          
          {/* Founder Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 bg-ivory-200 rounded-2xl transform -rotate-1 border border-ivory-300"></div>
              <div className="relative rounded-xl overflow-hidden shadow-elevated bg-brown-900 aspect-[3/4] sm:aspect-[3/4.2]">
                <img
                  src="/team/founder.jpeg"
                  alt="Mr. Gopal Boria, Founder of Garb by GTC"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/20 to-transparent flex flex-col justify-end p-6 text-ivory-50">
                  <span className="font-display text-2xl font-bold">Mr. Gopal Boria</span>
                  <span className="text-xs tracking-wider text-sand-300 uppercase font-medium mt-0.5">
                    Founder & Visionary (Est. 2004)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl text-brown-900 leading-snug">
              What Began as a Vision Has Grown into a Trusted Name
            </h3>
            
            <p className="text-base text-brown-700 leading-relaxed">
              Founded in 2004 by Mr. Gopal Boria, Garb by GTC is a women’s ethnic wear brand built on a vision of bringing distinctive designs, quality, comfort, and style together at commercial prices.
            </p>

            <p className="text-base text-brown-600 leading-relaxed">
              What began as a vision has grown into a trusted name in the fashion industry, serving 500+ multi-brand outlets across India. With a deep understanding of evolving fashion trends and customer preferences, we create collections that help women express their individuality with confidence.
            </p>

            <p className="text-base text-brown-600 leading-relaxed">
              Our diverse range includes kurtis, tunics, cord sets, three-piece sets, gowns, and contemporary ethnic wear. Every collection is thoughtfully curated to offer fresh designs, versatile styles, and a unique identity that stands out in the market.
            </p>

            <p className="text-base text-brown-600 leading-relaxed">
              At Garb by GTC, we believe fashion should be accessible, comfortable, and distinctive. Our commitment to delivering unique designs at competitive prices helps our retail partners offer something special to their customers.
            </p>

            {/* Quote callout */}
            <div className="p-5 rounded-xl bg-ivory-200 border border-ivory-300">
              <p className="text-sm sm:text-base font-display text-brown-900 italic">
                “Over the years, we have built lasting relationships with retailers through trust, consistent quality, and a shared passion for fashion. As we continue to grow, our focus remains on innovation, customer satisfaction, and bringing new fashion possibilities to every collection.”
              </p>
            </div>
          </div>

        </div>

        {/* Vision, Philosophy & Brand Anchor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-28">
          
          {/* Vision Card */}
          <div className="bg-ivory-50 rounded-2xl p-8 sm:p-10 border border-ivory-300 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-ivory-200 border border-sand-300 flex items-center justify-center text-brown-800 mb-6">
                <Eye className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-2xl text-brown-900 mb-4">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-brown-700 leading-relaxed">
                To inspire confidence through distinctive fashion and become a trusted name in women’s ethnic wear across India.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-ivory-200 text-xs text-brown-500 font-medium">
              National footprint spanning tier-1 metropolitans to expanding regional retail hubs.
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="bg-brown-900 rounded-2xl p-8 sm:p-10 text-ivory-50 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brown-800 border border-sand-500/40 flex items-center justify-center text-sand-300 mb-6">
                <Heart className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-2xl text-ivory-50 mb-4">
                Our Philosophy
              </h3>
              <p className="text-base sm:text-lg text-sand-200 leading-relaxed font-display italic">
                “Confidence. Comfort. Style. Because every woman deserves to express herself in her own way.”
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-brown-800 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-wider uppercase text-sand-300">
                Garb by GTC – Just Be You
              </span>
              <span className="text-xs text-brown-400">Brand Manifesto</span>
            </div>
          </div>

        </div>

        {/* Dedicated Team & Craftsmanship Section */}
        <div id="team" className="rounded-3xl bg-ivory-200/80 border border-ivory-300 p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <h3 className="font-display text-3xl sm:text-4xl text-brown-900 leading-tight">
                The Craftsmen & Team Behind Every Stitch
              </h3>
              <p className="text-base text-brown-600 leading-relaxed">
                Behind Garb by GTC is a dedicated family of master pattern-makers, textile specialists, quality controllers, and retail coordinators who bring passion and precision to every collection.
              </p>
              <div className="space-y-3 pt-2 text-sm text-brown-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brown-700 mt-1 flex-shrink-0" />
                  <span>Master tailors and artisans preserving traditional embroidery arts with modern silhouettes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brown-700 mt-1 flex-shrink-0" />
                  <span>Dedicated quality assurance line checking stitch density, colorfastness, and measurement tolerances</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brown-700 mt-1 flex-shrink-0" />
                  <span>Experienced logistics and agent coordination team ensuring timely dispatch across all 500+ Indian outlets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-ivory-300 aspect-[4/3] group">
                <img
                  src="/team/team.jpeg"
                  alt="Garb by GTC Team and Artisans"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-ivory-50">
                    <p className="text-base font-semibold font-display">The Garb by GTC Team</p>
                    <p className="text-xs text-sand-300">Jay Gopal Industrial Estate, Dadar West, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
