'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MENU_ITEMS, MenuItem } from '@/data/menu-data';
import { Flame, Star, Sparkles, ArrowRight, X, Check } from 'lucide-react';

export default function FeaturedFood() {
  const featuredItems = MENU_ITEMS.filter((item) => item.isHeroFeatured);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <section id="featured" className="py-20 bg-brand-dark border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest mb-2">
              <Flame className="w-4 h-4 fill-brand-red" />
              <span>Reno’s Street Food Hits</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Featured <span className="text-brand-gold">Crowd Favorites</span>
            </h2>
            <p className="text-brand-cream/70 text-base max-w-xl mt-2">
              Hand-crafted street food built on crunch, spice, and unexpected Asian-Mexican flavor mashups.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-border text-brand-cream hover:text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl border border-brand-border transition-all self-start md:self-auto group"
          >
            <span>See Full Menu ({MENU_ITEMS.length} Items)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Featured Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              className="bg-brand-black border border-brand-border hover:border-brand-red/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-card">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />

                {/* Badge Overlay */}
                {dish.badge && (
                  <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-md tracking-wider">
                    {dish.badge}
                  </span>
                )}

                {/* Price Tag */}
                <span className="absolute bottom-3 right-3 font-display font-black text-base text-brand-gold bg-brand-black/90 backdrop-blur-md px-3 py-1 rounded-lg border border-brand-border">
                  ${dish.price.toFixed(2)}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                      {dish.categoryLabel}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-white group-hover:text-brand-red transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-brand-cream/70 line-clamp-2 mt-1.5 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold text-brand-cream/90 group-hover:text-brand-gold transition-colors">
                  <span>View Details & Ingredients</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-brand-dark border border-brand-border rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-black/80 text-brand-cream hover:text-white border border-brand-border hover:bg-brand-red transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video w-full">
              <Image
                src={selectedDish.image}
                alt={selectedDish.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              {selectedDish.badge && (
                <span className="absolute bottom-4 left-4 bg-brand-red text-white text-xs font-black uppercase px-3 py-1 rounded tracking-wider">
                  {selectedDish.badge}
                </span>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase text-brand-gold tracking-wider">
                    {selectedDish.categoryLabel}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white">
                    {selectedDish.name}
                  </h3>
                </div>
                <span className="font-display font-black text-2xl text-brand-gold bg-brand-charcoal px-3 py-1 rounded-xl border border-brand-border">
                  ${selectedDish.price.toFixed(2)}
                </span>
              </div>

              <p className="text-sm text-brand-cream/80 leading-relaxed">
                {selectedDish.description}
              </p>

              {/* Ingredients List */}
              {selectedDish.ingredients && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-2">
                    Key Ingredients & Flavor Profile:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="bg-brand-charcoal text-brand-cream text-xs font-semibold px-2.5 py-1 rounded-lg border border-brand-border flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-brand-gold" />
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons inside Modal */}
              <div className="pt-4 flex items-center gap-3">
                <a
                  href="#find-us"
                  onClick={() => setSelectedDish(null)}
                  className="flex-1 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl text-center shadow-lg transition-colors"
                >
                  Find Truck to Try This &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
