'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Utensils } from 'lucide-react';

interface FoodImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function FoodImage({ src, alt, fill = true, className = '', priority = false }: FoodImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`relative bg-gradient-to-br from-brand-card via-brand-dark to-brand-black flex flex-col items-center justify-center p-4 text-center border border-brand-border/60 ${className}`}>
        <div className="w-12 h-12 rounded-2xl bg-brand-red/20 text-brand-red flex items-center justify-center mb-2 shadow-inner border border-brand-red/30">
          <Utensils className="w-6 h-6" />
        </div>
        <span className="font-display font-extrabold text-xs text-white uppercase tracking-wider line-clamp-1">
          {alt}
        </span>
        <span className="font-script text-brand-gold text-xs mt-0.5">Potluck Reno Special</span>
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
      unoptimized={true}
      onError={() => setError(true)}
    />
  );
}
