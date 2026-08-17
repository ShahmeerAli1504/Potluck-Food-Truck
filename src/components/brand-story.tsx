'use client';

import Image from 'next/image';
import { Flame, Sparkles, HeartHandshake } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-20 bg-brand-black border-b border-brand-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Brand Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-brand-charcoal border-2 border-brand-border p-6 flex flex-col items-center justify-center text-center shadow-2xl group">
              
              {/* Logo in Pan */}
              <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-brand-gold/50 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <Image src="/logo.jpg" alt="Potluck Good Luck Truck Logo" fill className="object-cover" />
              </div>

              <span className="font-script text-3xl text-brand-gold tracking-wide">
                The Good Luck Truck
              </span>
              <p className="font-display font-black text-xl text-white uppercase mt-1 tracking-tight">
                Asian Fusion &bull; Mexican Twist
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-brand-black px-4 py-1.5 rounded-full border border-brand-border text-xs text-brand-cream/80 font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-brand-red" /> Built Fresh in Reno, NV
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Concept & Philosophy</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Why Choose When You Can Have <span className="text-brand-red">Both?</span>
            </h2>

            <p className="text-brand-cream/80 text-base sm:text-lg leading-relaxed">
              At <strong className="text-white">Potluck</strong>, we believe the best street food happens when culinary boundaries get thrown out the window. We took the comforting crunch of traditional Asian potstickers & wontons and fused them with the fiery, comforting bold street flavors of Mexican taquerias.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-brand-dark p-4 rounded-xl border border-brand-border">
                <div className="w-8 h-8 rounded-lg bg-brand-red/20 flex items-center justify-center text-brand-red font-black mb-2 text-sm">
                  01
                </div>
                <h3 className="font-display font-extrabold text-white text-sm uppercase">Asian Heritage</h3>
                <p className="text-xs text-brand-cream/70 mt-1">Crispy wontons, pan-seared potstickers, and house sweet chili glazes.</p>
              </div>

              <div className="bg-brand-dark p-4 rounded-xl border border-brand-border">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold font-black mb-2 text-sm">
                  02
                </div>
                <h3 className="font-display font-extrabold text-white text-sm uppercase">Mexican Soul</h3>
                <p className="text-xs text-brand-cream/70 mt-1">Sweet charred elote, cotija cheese, cilantro lime crema, and hot cheeto crunch.</p>
              </div>

              <div className="bg-brand-dark p-4 rounded-xl border border-brand-border">
                <div className="w-8 h-8 rounded-lg bg-brand-cream/20 flex items-center justify-center text-brand-cream font-black mb-2 text-sm">
                  03
                </div>
                <h3 className="font-display font-extrabold text-white text-sm uppercase">Reno Culture</h3>
                <p className="text-xs text-brand-cream/70 mt-1">Pop-up truck energy served fresh at parks, breweries, and downtown hubs.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6">
              <a
                href="#menu"
                className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-colors"
              >
                Explore Full Menu &rarr;
              </a>
              <span className="font-script text-2xl text-brand-cream/80">
                “Every bite is good luck.”
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
