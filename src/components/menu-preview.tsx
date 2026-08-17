'use client';

import { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menu-data';
import FoodImage from '@/components/food-image';
import { Search } from 'lucide-react';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients?.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-brand-dark border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-script text-2xl text-brand-gold">Handcrafted Daily</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mt-1">
            The Full <span className="text-brand-red">Potluck Menu</span>
          </h2>
          <p className="text-brand-cream/70 text-base mt-2">
            Asian fusion flavors crafted with street food energy. Made fresh to order in our Reno mobile kitchen.
          </p>
        </div>

        {/* Search & Category Navigation Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-brand-cream/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tacos, fries, potstickers, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl pl-11 pr-4 py-3 outline-none transition-colors placeholder:text-brand-cream/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-brand-cream/60 hover:text-white bg-brand-charcoal px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-brand-red text-white border-brand-red shadow-lg'
                      : 'bg-brand-black text-brand-cream/70 border-brand-border hover:border-brand-cream/40 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-brand-black rounded-3xl border border-brand-border p-8">
            <p className="text-lg font-bold text-white">No menu items found for "{searchQuery}"</p>
            <p className="text-xs text-brand-cream/60 mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-brand-red text-white text-xs font-bold uppercase px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-brand-black border border-brand-border rounded-2xl p-5 hover:border-brand-red/50 transition-colors flex flex-col sm:flex-row gap-5 group"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full sm:w-36 aspect-square sm:aspect-auto sm:h-36 rounded-xl overflow-hidden bg-brand-card flex-shrink-0">
                  <FoodImage
                    src={item.image}
                    alt={item.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-brand-red text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wider shadow z-10">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Info & Content */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-brand-red transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-display font-black text-lg text-brand-gold bg-brand-charcoal px-2.5 py-0.5 rounded-lg border border-brand-border flex-shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs text-brand-cream/70 leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>

                  {/* Dietary Badges & Ingredients */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    {item.dietary?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-charcoal text-brand-gold border border-brand-border"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.ingredients && (
                      <span className="text-[10px] text-brand-cream/50 flex items-center gap-1">
                        &bull; {item.ingredients.slice(0, 3).join(', ')}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Catering Teaser Banner */}
        <div className="mt-16 bg-brand-black border border-brand-border p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="font-script text-2xl text-brand-gold">Planning an Event?</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mt-0.5">
              Get This Menu Served Live at Your Venue
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/70 mt-1 max-w-xl">
              We cater private parties, corporate lunches, weddings, and community festivals across Reno & Sparks.
            </p>
          </div>
          <a
            href="#catering"
            className="bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg whitespace-nowrap transition-colors"
          >
            Request Event Quote &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
