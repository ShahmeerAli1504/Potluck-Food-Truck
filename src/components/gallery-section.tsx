'use client';

import { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shuffle,
  Grid,
  Layers,
  Sparkles,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Download,
  Filter,
  Camera,
  Check,
  Zap,
} from 'lucide-react';
import FoodImage from '@/components/food-image';
import { galleryItems, GalleryItem } from '@/data/gallery-data';

type LayoutMode = 'scrapbook' | 'bento' | 'deck';

export default function GallerySection({ standalone = false }: { standalone?: boolean }) {
  const [items, setItems] = useState<GalleryItem[]>(galleryItems);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('scrapbook');
  const [rotations, setRotations] = useState<number[]>([]);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(standalone ? 55 : 20);
  const [deckIndex, setDeckIndex] = useState<number>(0);

  // Initialize random rotations for scrapbook polaroid effect
  const generateRotations = (length: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 16) - 8); // -8 to +8 deg
  };

  useEffect(() => {
    setRotations(generateRotations(items.length));
    
    // Initialize likes counts
    const initialLikes: Record<string, number> = {};
    items.forEach((item) => {
      initialLikes[item.id] = item.likes;
    });
    setLikeCounts(initialLikes);
  }, []);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return items;
    if (selectedCategory === 'food') return items.filter((i) => i.category === 'food');
    if (selectedCategory === 'truck') return items.filter((i) => i.category === 'truck');
    if (selectedCategory === 'customers') return items.filter((i) => i.category === 'customers');
    if (selectedCategory === 'events') return items.filter((i) => i.category === 'events');
    if (selectedCategory === 'vibe') return items.filter((i) => i.category === 'vibe');
    return items;
  }, [items, selectedCategory]);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Shuffle button action with confetti!
  const handleShuffle = () => {
    // Fire festive confetti
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E53935', '#F5A623', '#2EC4B6', '#F5F2EB'],
    });

    // Shuffle items array
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setRotations(generateRotations(shuffled.length));
  };

  // Toggle like heart
  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const isLiked = likedIds[id];
    setLikedIds((prev) => ({ ...prev, [id]: !isLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [id]: isLiked ? (prev[id] || 0) - 1 : (prev[id] || 0) + 1,
    }));

    if (!isLiked) {
      // Small localized confetti pop
      confetti({
        particleCount: 15,
        spread: 40,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        colors: ['#E53935', '#F5A623'],
      });
    }
  };

  // Copy image link / share
  const handleShare = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    const url = window.location.origin + item.src;
    navigator.clipboard.writeText(url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-brand-black text-brand-cream relative overflow-hidden">
      {/* Background Ambient Glow & Grid Texture */}
      <div className="absolute inset-0 bg-chalk-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-charcoal border border-brand-border text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Camera className="w-4 h-4 text-brand-red" />
            <span>Potluck Snapshots & Vibe Collages</span>
            <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
            The <span className="text-brand-gold">Fun Vibe</span> Gallery
          </h2>

          <p className="text-brand-cream/80 text-base sm:text-lg font-medium leading-relaxed">
            Feast your eyes on wild wonton taco crunches, truck smiles, and street food moments from Reno Nevada!
            Switch layout styles or hit <span className="text-brand-gold font-bold">Shuffle</span> to mix up the collage!
          </p>
        </div>

        {/* Toolbar: Category Filters & Layout Mode Switcher */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-brand-border/60">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {[
              { id: 'all', label: `All Photos (${items.length})` },
              { id: 'food', label: 'Food Crave 🌮' },
              { id: 'truck', label: 'Truck Life 🚚' },
              { id: 'customers', label: 'Happy Eats 😊' },
              { id: 'events', label: 'Events 🎉' },
              { id: 'vibe', label: 'Kitchen Heat 🔥' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setDeckIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20 scale-105'
                    : 'bg-brand-dark border border-brand-border text-brand-cream/70 hover:text-white hover:border-brand-cream/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Action Tools: Shuffle & View Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Big Fun Shuffle Button */}
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2 bg-gradient-to-r from-brand-gold via-amber-500 to-brand-red hover:from-amber-400 hover:to-red-600 text-brand-black font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg hover:shadow-brand-gold/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              title="Click to randomize photo angles and order with confetti!"
            >
              <Shuffle className="w-4 h-4 animate-spin-once text-brand-black" />
              <span>🎲 Shuffle Vibe</span>
            </button>

            {/* Layout Mode Toggles */}
            <div className="flex items-center p-1 bg-brand-dark rounded-xl border border-brand-border">
              <button
                onClick={() => setLayoutMode('scrapbook')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  layoutMode === 'scrapbook'
                    ? 'bg-brand-card text-brand-gold shadow'
                    : 'text-brand-cream/60 hover:text-white'
                }`}
                title="Fun Scattered Polaroid Scrapbook"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Scrapbook</span>
              </button>

              <button
                onClick={() => setLayoutMode('bento')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  layoutMode === 'bento'
                    ? 'bg-brand-card text-brand-gold shadow'
                    : 'text-brand-cream/60 hover:text-white'
                }`}
                title="Bento Grid Layout"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Bento</span>
              </button>

              <button
                onClick={() => setLayoutMode('deck')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  layoutMode === 'deck'
                    ? 'bg-brand-card text-brand-gold shadow'
                    : 'text-brand-cream/60 hover:text-white'
                }`}
                title="3D Card Deck Stack"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">3D Deck</span>
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* LAYOUT 1: FUN POLAROID SCRAPBOOK COLLAGE (Default)   */}
        {/* ---------------------------------------------------- */}
        {layoutMode === 'scrapbook' && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 pb-8"
          >
            <AnimatePresence>
              {displayedItems.map((item, idx) => {
                const rot = rotations[idx % rotations.length] || 0;
                const isLiked = likedIds[item.id];
                const likes = likeCounts[item.id] || item.likes;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.35, delay: (idx % 12) * 0.03 }}
                    style={{ rotate: `${rot}deg` }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.06,
                      zIndex: 30,
                      transition: { duration: 0.2 },
                    }}
                    onClick={() => setActiveLightboxIndex(idx)}
                    className="group relative bg-[#FAFAF8] text-brand-black p-3 pt-4 pb-5 rounded-sm shadow-2xl hover:shadow-brand-red/30 cursor-pointer border border-stone-300 transition-all select-none"
                  >
                    {/* Washi Tape Graphic on Top Edge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/70 border border-amber-300/80 transform -rotate-2 backdrop-blur-xs shadow-xs z-20 pointer-events-none flex items-center justify-center text-[9px] font-bold text-stone-600 uppercase tracking-widest">
                      POTLUCK
                    </div>

                    {/* Fun Badge Sticker (if exists) */}
                    {item.sticker && (
                      <div
                        className={`absolute top-5 right-5 z-20 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-lg transform rotate-6 ${
                          item.stickerBg || 'bg-brand-red text-white'
                        }`}
                      >
                        {item.sticker}
                      </div>
                    )}

                    {/* Polaroid Photo Wrapper */}
                    <div className="relative aspect-square w-full bg-stone-900 rounded-xs overflow-hidden border border-stone-200/80">
                      <FoodImage
                        src={item.src}
                        alt={item.title}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Hover Overlay with Quick Zoom Icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-brand-black/90 text-brand-gold text-xs font-bold px-3 py-1.5 rounded-full border border-brand-gold/50 flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                          <Zap className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" /> Inspect Vibe
                        </span>
                      </div>
                    </div>

                    {/* Polaroid Handwritten Caption */}
                    <div className="mt-3 px-1 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-script text-stone-900 font-bold text-lg sm:text-xl leading-tight line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-stone-600 line-clamp-1 font-medium -mt-0.5">
                          {item.caption}
                        </p>
                      </div>

                      {/* Heart Like Button */}
                      <button
                        onClick={(e) => handleLike(e, item.id)}
                        className={`flex items-center gap-1 text-xs font-extrabold px-2 py-1 rounded-full border transition-all ${
                          isLiked
                            ? 'bg-red-50 text-red-600 border-red-300'
                            : 'bg-stone-100 text-stone-600 border-stone-300 hover:text-red-600'
                        }`}
                        title="Love this photo!"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            isLiked ? 'fill-red-600 text-red-600' : 'text-stone-500'
                          }`}
                        />
                        <span>{likes}</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ---------------------------------------------------- */}
        {/* LAYOUT 2: DYNAMIC BENTO BOX MASONRY GRID              */}
        {/* ---------------------------------------------------- */}
        {layoutMode === 'bento' && (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px] pt-4 pb-8"
          >
            {displayedItems.map((item, idx) => {
              const isLarge = item.featured || idx % 7 === 0;
              const isWide = !isLarge && idx % 5 === 0;
              const isLiked = likedIds[item.id];
              const likes = likeCounts[item.id] || item.likes;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveLightboxIndex(idx)}
                  className={`group relative rounded-2xl overflow-hidden bg-brand-dark border border-brand-border/80 hover:border-brand-gold/80 transition-all cursor-pointer shadow-lg ${
                    isLarge
                      ? 'col-span-2 row-span-2'
                      : isWide
                      ? 'col-span-2 row-span-1'
                      : 'col-span-1 row-span-1'
                  }`}
                >
                  <FoodImage
                    src={item.src}
                    alt={item.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge Sticker */}
                  {item.sticker && (
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow ${
                          item.stickerBg || 'bg-brand-red text-white'
                        }`}
                      >
                        {item.sticker}
                      </span>
                    </div>
                  )}

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col justify-end z-10">
                    <h3 className="font-display font-black text-white text-base sm:text-xl uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-cream/80 line-clamp-2 mt-0.5">
                      {item.caption}
                    </p>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                      <button
                        onClick={(e) => handleLike(e, item.id)}
                        className={`flex items-center gap-1.5 font-bold ${
                          isLiked ? 'text-brand-red' : 'text-brand-cream/70 hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-brand-red' : ''}`} />
                        <span>{likes} Loves</span>
                      </button>

                      <span className="text-brand-gold font-bold text-[11px] group-hover:underline flex items-center gap-1">
                        View Vibe &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* ---------------------------------------------------- */}
        {/* LAYOUT 3: INTERACTIVE 3D CARD DECK STACK             */}
        {/* ---------------------------------------------------- */}
        {layoutMode === 'deck' && displayedItems.length > 0 && (
          <div className="py-12 flex flex-col items-center justify-center min-h-[480px]">
            <div className="relative w-full max-w-sm sm:max-w-md h-[400px] flex items-center justify-center">
              {displayedItems.slice(deckIndex, deckIndex + 5).map((item, idx) => {
                const isTop = idx === 0;
                const offset = idx * 14;
                const scale = 1 - idx * 0.05;
                const rotate = (idx % 2 === 0 ? 1 : -1) * (idx * 4);

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      y: offset,
                      scale: scale,
                      rotate: rotate,
                      zIndex: 30 - idx,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    onClick={() => {
                      if (isTop) {
                        const originalIdx = filteredItems.findIndex((i) => i.id === item.id);
                        setActiveLightboxIndex(originalIdx >= 0 ? originalIdx : 0);
                      }
                    }}
                    className={`absolute w-full bg-[#FAFAF8] text-brand-black p-4 rounded-2xl shadow-2xl border border-stone-300 select-none cursor-pointer ${
                      isTop ? 'hover:scale-[1.03] transition-transform' : 'pointer-events-none'
                    }`}
                  >
                    <div className="relative aspect-4/3 w-full bg-stone-900 rounded-xl overflow-hidden">
                      <FoodImage src={item.src} alt={item.title} className="object-cover" />
                      {item.sticker && (
                        <div
                          className={`absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded shadow ${
                            item.stickerBg || 'bg-brand-red text-white'
                          }`}
                        >
                          {item.sticker}
                        </div>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-extrabold text-stone-900 text-lg uppercase">
                          {item.title}
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-1">{item.caption}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-extrabold text-brand-red bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                        <Heart className="w-3.5 h-3.5 fill-brand-red" />
                        <span>{likeCounts[item.id] || item.likes}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Card Deck Controls */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={() =>
                  setDeckIndex((prev) => (prev > 0 ? prev - 1 : displayedItems.length - 1))
                }
                className="flex items-center gap-2 bg-brand-dark hover:bg-brand-charcoal border border-brand-border text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Card</span>
              </button>

              <button
                onClick={() =>
                  setDeckIndex((prev) => (prev < displayedItems.length - 1 ? prev + 1 : 0))
                }
                className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl shadow-lg transition-all"
              >
                <span>Deal Next Card</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Load More Button (if not showing all) */}
        {visibleCount < filteredItems.length && (
          <div className="text-center pt-8 pb-4">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 16, filteredItems.length))}
              className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-border text-brand-cream hover:text-white border border-brand-border px-8 py-3.5 rounded-2xl text-xs font-extrabold uppercase tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Camera className="w-4 h-4 text-brand-gold" />
              <span>Load More Good Luck Photos (+{filteredItems.length - visibleCount})</span>
            </button>
          </div>
        )}

      </div>

      {/* ---------------------------------------------------- */}
      {/* INTERACTIVE LIGHTBOX MODAL VIEWER                     */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-brand-dark border border-brand-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-brand-black/80 text-brand-cream hover:text-white border border-brand-border hover:bg-brand-red transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-brand-black/80 text-white hover:bg-brand-gold hover:text-black border border-brand-border transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredItems.length : null
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-brand-black/80 text-white hover:bg-brand-gold hover:text-black border border-brand-border transition-all"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Preview Box */}
              <div className="relative flex-1 bg-brand-black min-h-[300px] md:min-h-[450px] flex items-center justify-center p-2">
                <FoodImage
                  src={filteredItems[activeLightboxIndex].src}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="object-contain max-h-[75vh]"
                />
              </div>

              {/* Photo Metadata Sidebar */}
              <div className="w-full md:w-80 p-6 bg-brand-charcoal flex flex-col justify-between border-t md:border-t-0 md:border-l border-brand-border">
                <div className="space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-brand-dark border border-brand-border text-brand-gold">
                      {filteredItems[activeLightboxIndex].category.toUpperCase()}
                    </span>
                    {filteredItems[activeLightboxIndex].sticker && (
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                          filteredItems[activeLightboxIndex].stickerBg || 'bg-brand-red text-white'
                        }`}
                      >
                        {filteredItems[activeLightboxIndex].sticker}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                      {filteredItems[activeLightboxIndex].title}
                    </h3>
                    <p className="text-brand-cream/80 text-xs mt-2 leading-relaxed font-medium">
                      {filteredItems[activeLightboxIndex].caption}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] text-brand-cream/60 font-mono">
                    Photo {activeLightboxIndex + 1} of {filteredItems.length} &bull; Potluck Reno NV
                  </div>
                </div>

                {/* Actions: Heart Like & Copy Link */}
                <div className="pt-6 border-t border-brand-border space-y-3">
                  <button
                    onClick={(e) => handleLike(e, filteredItems[activeLightboxIndex].id)}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                      likedIds[filteredItems[activeLightboxIndex].id]
                        ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                        : 'bg-brand-dark hover:bg-brand-card text-brand-cream border border-brand-border'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedIds[filteredItems[activeLightboxIndex].id] ? 'fill-white' : ''
                      }`}
                    />
                    <span>
                      {likedIds[filteredItems[activeLightboxIndex].id] ? 'Loved!' : 'Love Photo'} (
                      {likeCounts[filteredItems[activeLightboxIndex].id] ||
                        filteredItems[activeLightboxIndex].likes}
                      )
                    </span>
                  </button>

                  <button
                    onClick={(e) => handleShare(e, filteredItems[activeLightboxIndex])}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-dark hover:bg-brand-border text-brand-gold border border-brand-border transition-all"
                  >
                    {copiedId === filteredItems[activeLightboxIndex].id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span>Share Image Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
