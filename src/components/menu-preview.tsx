'use client';

import { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menu-data';
import FoodImage from '@/components/food-image';
import { Search, Flame, Utensils } from 'lucide-react';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.addon?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="relative py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-800/80">
      {/* Background Ambient Glows & Subtle Texture */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-[#E11D23] font-black text-xs uppercase tracking-widest bg-red-950/40 border border-red-800/40 px-3.5 py-1.5 rounded-full mb-3 shadow-inner">
            <Flame className="w-4 h-4 fill-[#E11D23]" />
            <span>Official Food Truck Menu</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            Crafted Fresh <span className="text-[#E11D23]">Daily</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Asian fusion street food built on crunch, spice, and bold flavor mashups. Made to order in Reno, NV.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tacos, potstickers, fries, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-[#E11D23] focus:ring-1 focus:ring-[#E11D23] text-white text-sm rounded-xl pl-11 pr-10 py-3.5 outline-none transition-all placeholder:text-zinc-500 shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-white bg-zinc-800 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Sticky Category Filter Tabs Bar */}
        <div className="sticky top-16 z-30 bg-zinc-950/95 backdrop-blur-xl border-y border-zinc-800/80 py-4 my-8 shadow-2xl -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-2.5 sm:gap-3 overflow-x-auto scrollbar-none py-1 px-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? MENU_ITEMS.length 
                : MENU_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#E11D23] text-white border-[#E11D23] shadow-lg shadow-red-600/30 scale-105'
                      : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-800/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Grid Layout - Dark Theme Cards */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/60 rounded-3xl border border-zinc-800 p-8 max-w-lg mx-auto">
            <Utensils className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <p className="text-xl font-bold text-white">No menu items found</p>
            <p className="text-sm text-zinc-400 mt-1">Try clearing your search query or choosing another category tab.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-6 bg-[#E11D23] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const hasVegan = item.tags?.includes('VEGAN');
              const hasCombo = item.tags?.includes('COMBO');
              const hasDessert = item.tags?.includes('DESSERT');

              return (
                <div
                  key={item.id}
                  className="bg-zinc-900/90 text-white rounded-2xl shadow-xl p-5 border border-zinc-800 hover:border-[#E11D23]/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 group relative flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Item Card Header Image */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 mb-4 border border-zinc-800/80">
                      <FoodImage
                        src={item.image}
                        alt={item.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-70 pointer-events-none" />

                      {/* Top Category / Badge Bar overlay */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 z-10">
                        <span className="bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-zinc-800 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shadow">
                          {item.categoryLabel}
                        </span>

                        {item.badge && (
                          <span className="bg-[#E11D23] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shadow">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Badges */}
                    <div className="space-y-2">
                      <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white group-hover:text-[#E11D23] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Red Accent Badges for Dietary & Extras */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        {hasVegan && (
                          <span className="inline-flex items-center gap-1 bg-[#E11D23] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider shadow-sm">
                            VEGAN
                          </span>
                        )}
                        {hasCombo && (
                          <span className="inline-flex items-center gap-1 bg-[#E11D23] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider shadow-sm">
                            COMBO DEAL
                          </span>
                        )}
                        {hasDessert && (
                          <span className="inline-flex items-center gap-1 bg-[#E11D23] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider shadow-sm">
                            DESSERT
                          </span>
                        )}
                        {item.addon && (
                          <span className="inline-flex items-center gap-1 bg-red-950/60 text-[#E11D23] border border-red-800/60 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md shadow-sm">
                            {item.addon}
                          </span>
                        )}
                      </div>

                      {/* Ingredients Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Portion Options Section */}
                  {item.prices && (
                    <div className="mt-5 pt-3.5 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">
                        Portions
                      </span>
                      <div className="flex items-center gap-2">
                        {Object.keys(item.prices).map((size) => (
                          <span
                            key={size}
                            className="bg-zinc-800 text-zinc-200 border border-zinc-700/80 text-xs font-extrabold uppercase px-3 py-1 rounded-xl shadow-sm"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Catering Teaser Banner */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#E11D23]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="font-script text-2xl text-amber-400">Hosting an Event in Reno?</span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase mt-1 tracking-tight">
              Bring the Potluck Truck to Your Venue
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              We bring hot, fresh Wonton Tacos, Loaded Fries, and Potstickers live to private parties, corporate lunches, and weddings across Reno & Sparks.
            </p>
          </div>

          <a
            href="#catering"
            className="relative z-10 bg-[#E11D23] hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-xl hover:shadow-red-600/30 whitespace-nowrap transition-all transform hover:-translate-y-0.5"
          >
            Request Event Quote &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
