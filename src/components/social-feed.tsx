'use client';

import FoodImage from '@/components/food-image';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';

export default function SocialFeed() {
  const posts = [
    {
      id: 'p1',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
      caption: 'Cheeseburger Wonton Tacos fresh out the fryer at Idlewild Food Truck Friday! 🌮🔥 #RenoEats #AsianFusion',
      likes: '482',
    },
    {
      id: 'p2',
      image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&auto=format&fit=crop&q=80',
      caption: 'Elote Chicken Fries piled high with cotija cheese & cilantro lime crema. Come get some at Downtown Reno! 🍟🌽',
      likes: '395',
    },
    {
      id: 'p3',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop&q=80',
      caption: 'Traditional Pork Potstickers pan-seared golden crisp. Dip into our house sweet chili glaze! 🥟🌶️',
      likes: '512',
    },
    {
      id: 'p4',
      image: 'https://images.unsplash.com/photo-1624371414361-e670ef48e227?w=600&auto=format&fit=crop&q=80',
      caption: 'Fresh cinnamon sugar churros with chocolate & dulce de leche dips. Perfect sweet ending to your meal! 🍩✨',
      likes: '621',
    },
  ];

  return (
    <section className="py-20 bg-brand-dark border-b border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest mb-2">
              <Instagram className="w-4 h-4" />
              <span>@potlucktruck &bull; Reno NV</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Follow <span className="text-brand-gold">The Truck Vibe</span>
            </h2>
            <p className="text-brand-cream/70 text-base mt-1">
              Catch daily location drops, menu specials, and behind-the-scenes street food creations.
            </p>
          </div>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-colors self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Potluck on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-brand-black border border-brand-border"
            >
              <FoodImage
                src={post.image}
                alt="Potluck Reno Instagram Post"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end pointer-events-none">
                <p className="text-xs text-white line-clamp-2 leading-tight font-medium">
                  {post.caption}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-brand-gold font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-brand-red text-brand-red" /> {post.likes}
                  </span>
                  <span>View Post &rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
