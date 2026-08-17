'use client';

import Image from 'next/image';
import FoodImage from '@/components/food-image';
import { MapPin, Utensils, Calendar, Flame, Star, Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-brand-black bg-chalk-grid pt-10 pb-20 lg:py-24 overflow-hidden border-b border-brand-border/80 flex items-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & High Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge with Flame Heat Animation */}
            <div className="inline-flex items-center gap-2 bg-brand-charcoal/90 border border-brand-border px-3.5 py-1.5 rounded-full shadow-inner animate-float-food">
              <Flame className="w-4 h-4 text-brand-red fill-brand-red animate-flame-heat" />
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-cream">
                Reno, Nevada &bull; Mobile Kitchen
              </span>
              <span className="h-3 w-px bg-brand-border" />
              <span className="font-script text-brand-gold text-sm font-semibold">
                The Good Luck Truck
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white tracking-tight leading-[1.05] uppercase">
              Asian Fusion. <br />
              <span className="text-brand-red underline decoration-brand-gold decoration-wavy decoration-2 underline-offset-8 drop-shadow-[0_0_15px_rgba(229,57,53,0.5)]">
                Mexican Twist.
              </span> <br />
              <span className="font-script text-brand-gold text-3xl sm:text-5xl lowercase capitalize tracking-normal block mt-2 drop-shadow-[0_0_12px_rgba(245,166,35,0.4)]">
                Zero Boring Bites
              </span>
            </h1>

            {/* Subheadline Copy */}
            <p className="text-brand-cream/80 text-base sm:text-lg max-w-2xl leading-relaxed">
              We pack crunchy wonton shells with juicy cheeseburgers, pile golden fries with charred street elote, and pan-sear artisanal potstickers right in the heart of Reno.
            </p>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-brand-card text-brand-cream-muted text-xs font-semibold px-3 py-1.5 rounded border border-brand-border flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> Cheeseburger Wonton Tacos
              </span>
              <span className="bg-brand-card text-brand-cream-muted text-xs font-semibold px-3 py-1.5 rounded border border-brand-border flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-brand-red" /> Elote Chicken Fries
              </span>
              <span className="bg-brand-card text-brand-cream-muted text-xs font-semibold px-3 py-1.5 rounded border border-brand-border flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" /> Pan-Seared Potstickers
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#find-us"
                className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white text-base font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-brand-red/30 transition-all transform hover:-translate-y-0.5 group"
              >
                <MapPin className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform" />
                Find Today's Truck
              </a>

              <a
                href="#menu"
                className="flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-border text-brand-cream text-base font-bold uppercase tracking-wider px-7 py-4 rounded-xl border border-brand-border transition-all hover:text-white"
              >
                <Utensils className="w-5 h-5 text-brand-cream/70" />
                View Full Menu
              </a>

              <a
                href="#catering"
                className="flex items-center justify-center gap-2 text-brand-gold hover:text-white text-sm font-bold uppercase tracking-wider py-3 px-4 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book Event Catering &rarr;
              </a>
            </div>

            {/* Local Proof Bar */}
            <div className="pt-6 border-t border-brand-border/60 flex items-center gap-4 text-xs text-brand-cream/70">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-brand-charcoal border-2 border-brand-dark flex items-center justify-center font-bold text-brand-gold text-xs">
                  5★
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-red/20 border-2 border-brand-dark flex items-center justify-center text-brand-cream text-xs font-bold">
                  Yelp
                </div>
              </div>
              <div>
                <p className="font-bold text-brand-cream">Reno Local Street Food Favorite</p>
                <p className="text-brand-cream/60">Sparks &bull; Downtown Reno &bull; Idlewild Food Truck Friday</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (Fixed Layout to prevent text overlap) */}
          <div className="lg:col-span-5 relative flex justify-center pb-10 sm:pb-0">
            
            {/* Main Food Composite Frame */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-brand-border/80 bg-brand-card shadow-2xl group">
              <FoodImage
                src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80"
                alt="Cheeseburger Wonton Tacos - Potluck Food Truck Reno"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent opacity-90 pointer-events-none" />

              {/* Logo Overlay Badge */}
              <div className="absolute top-4 left-4 bg-brand-black/90 backdrop-blur-md p-2 rounded-2xl border border-brand-border flex items-center gap-3 shadow-lg z-10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-gold/60">
                  <Image src="/logo.jpg" alt="Potluck Logo" fill className="object-cover" />
                </div>
                <div className="pr-2">
                  <p className="font-display font-extrabold text-xs uppercase text-white tracking-wider">Potluck Truck</p>
                  <p className="font-script text-brand-gold text-xs">Handcrafted Daily</p>
                </div>
              </div>

              {/* Dish Feature Badge Overlay - High Visibility Text without Overlap */}
              <div className="absolute bottom-5 left-4 right-4 bg-brand-black/95 backdrop-blur-md p-4 rounded-2xl border border-brand-border shadow-2xl z-10">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="bg-brand-red text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded tracking-wider">
                      Signature Hit
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-white mt-1 leading-tight">
                      Cheeseburger Wonton Tacos
                    </h3>
                    <p className="text-xs text-brand-cream/80 line-clamp-1 mt-1">
                      Crispy wonton shells, seasoned beef, melted cheese & house aioli
                    </p>
                  </div>
                  <span className="font-display font-black text-lg text-brand-gold bg-brand-charcoal px-3 py-1 rounded-xl border border-brand-border flex-shrink-0">
                    $13.50
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Secondary Dish Badge - Placed at top right offset to prevent overlap */}
            <div className="absolute -bottom-6 -right-2 bg-brand-charcoal/95 backdrop-blur-md border border-brand-border p-3 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 max-w-[220px] z-20">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <FoodImage
                  src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=300&q=80"
                  alt="Elote Chicken Fries"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-xs text-white">Elote Chicken Fries</p>
                <p className="text-[11px] text-brand-cream/70">Sweet corn & cotija</p>
                <p className="text-xs font-black text-brand-gold mt-0.5">$14.00</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Prompt */}
      <a
        href="#featured"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-cream/50 hover:text-brand-cream transition-colors text-xs font-semibold gap-1 hidden lg:flex"
      >
        <span>Explore Menu</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-brand-red" />
      </a>
    </section>
  );
}
