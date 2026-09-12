'use client';

import FoodImage from '@/components/food-image';
import { Sparkles, HeartHandshake, Award, Flame } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-brand-black border-b border-brand-border relative overflow-hidden">
      {/* Background Lighting & Glow Accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ====================================================== */}
        {/* MEET THE OWNER (Griffin Brown Feature Card)            */}
        {/* ====================================================== */}
        <div className="bg-gradient-to-br from-brand-dark via-brand-charcoal to-brand-card rounded-3xl p-6 sm:p-10 border border-brand-border/80 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Owner Photo Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative group">
                
                {/* Polaroid Frame for Owner */}
                <div className="bg-[#FAFAF8] text-brand-black p-4 pb-6 rounded-2xl shadow-2xl border border-stone-300 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-sm w-full">
                  {/* Photo Container */}
                  <div className="relative aspect-[4/5] h-80 sm:h-[400px] w-full bg-stone-900 rounded-xl overflow-hidden border border-stone-200 shadow-inner">
                    <FoodImage
                      src="/Owner.jpg"
                      alt="Griffin Brown - Owner of The Potluck Truck"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Polaroid Label */}
                  <div className="mt-4 text-center">
                    <h4 className="font-display font-black text-stone-900 text-xl uppercase tracking-tight">
                      Griffin Brown
                    </h4>
                    <p className="font-script text-brand-red font-bold text-lg -mt-1">
                      Founder & Owner &bull; Potluck Reno
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 z-20 bg-brand-gold text-brand-black font-black text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg border border-yellow-300 flex items-center gap-1.5 transform rotate-6">
                  <Award className="w-4 h-4" /> Reno Entrepreneur
                </div>

              </div>
            </div>

            {/* Owner Bio Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest">
                <HeartHandshake className="w-4 h-4" />
                <span>Leadership & Community</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                Meet the <span className="text-brand-gold">Owner</span>
              </h2>

              <div className="space-y-4 text-brand-cream/85 text-base sm:text-lg leading-relaxed font-medium">
                <p>
                  The Potluck Truck is owned by <strong className="text-white font-extrabold">Griffin Brown</strong>, a local entrepreneur with a passion for great food and the Reno community. Griffin has helped grow The Potluck Truck by focusing not only on what comes out of the kitchen, but also on creating an experience people want to come back to.
                </p>

                <p>
                  Community has always been an important part of the business. Whether serving guests at Food Truck Friday, local businesses, festivals, or private events, Griffin and the team enjoy being part of the places and events that bring Northern Nevada together.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>Building memories & great eats in Reno</span>
              </div>
            </div>

          </div>
        </div>

        {/* ====================================================== */}
        {/* FOOD MADE TO BRING PEOPLE TOGETHER                     */}
        {/* ====================================================== */}
        <div className="space-y-8 text-center max-w-4xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-dark border border-brand-border text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Flame className="w-4 h-4 text-brand-red" />
            <span>Our Philosophy</span>
          </div>

          <h3 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Food Made to <span className="text-brand-red">Bring People Together</span>
          </h3>

          <div className="space-y-4 text-brand-cream/85 text-base sm:text-lg leading-relaxed font-medium">
            <p>
              At The Potluck Truck, we believe some of the best food comes from mixing ideas, cultures, and flavors. That is why our menu combines Asian-inspired dishes with Mexican influences to create something familiar, fresh, and different at the same time.
            </p>

            <p>
              We are proud to serve Reno and the surrounding community and look forward to continuing to bring good food, good energy, and a little good luck wherever we go.
            </p>
          </div>

          {/* Tagline Callout Card */}
          <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-brand-charcoal via-brand-dark to-brand-charcoal border-2 border-brand-gold/40 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <p className="font-script text-3xl sm:text-4xl text-brand-gold tracking-wide">
                “Find the truck. Bring your appetite. Come join the Potluck.”
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#menu"
                  className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Explore Our Menu &rarr;
                </a>
                <a
                  href="#catering"
                  className="bg-brand-dark hover:bg-brand-border text-brand-cream hover:text-white border border-brand-border text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                >
                  Book Event Catering &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
