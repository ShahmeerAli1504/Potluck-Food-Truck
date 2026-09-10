'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FoodImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function FoodImage({ src, alt, fill = true, className = '', priority = false }: FoodImageProps) {
  const [error, setError] = useState(false);

  // If external network fails, render a high-quality stylized gourmet dish placeholder graphic!
  if (error || !src) {
    return (
      <div className={`relative bg-gradient-to-br from-[#241E20] via-[#1C181A] to-[#121012] flex flex-col items-center justify-center p-6 text-center border border-brand-border/80 overflow-hidden shadow-inner ${className}`}>
        {/* Ambient Warm Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-red/20 via-brand-gold/10 to-transparent opacity-80" />

        {/* Dynamic Gourmet Food Illustration Graphic */}
        <div className="relative z-10 flex flex-col items-center space-y-2">
          {/* Steaming Cast Iron Wok / Taco Graphic */}
          <div className="relative w-20 h-20 rounded-full bg-brand-black/90 border-2 border-brand-gold/60 flex items-center justify-center shadow-2xl p-2 group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 text-brand-gold">
              {/* Steaming Wok & Wonton Taco Icon Artwork */}
              <path d="M12 34C12 45 20 52 32 52C44 52 52 45 52 34H12Z" fill="#E53935" opacity="0.8" />
              <path d="M8 34H56V38H8V34Z" fill="#F5A623" />
              <path d="M20 26C20 20 26 18 32 12C38 18 44 20 44 26" stroke="#FAF7F2" strokeWidth="3" strokeLinecap="round" />
              <path d="M26 20C28 17 32 16 34 14" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" />
              <circle cx="24" cy="42" r="2" fill="#FAF7F2" />
              <circle cx="32" cy="45" r="2.5" fill="#F5A623" />
              <circle cx="40" cy="41" r="2" fill="#E53935" />
            </svg>
          </div>

          <div className="pt-1">
            <span className="bg-brand-red text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded tracking-widest shadow">
              Potluck Kitchen
            </span>
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-tight mt-1 line-clamp-1">
              {alt}
            </h4>
            <p className="font-script text-brand-gold text-xs mt-0.5">
              Fresh Asian Fusion &bull; Reno NV
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
