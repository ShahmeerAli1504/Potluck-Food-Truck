'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CustomLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeout = setTimeout(() => {
      setLoading(false);
    }, prefersReducedMotion ? 200 : 700);

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D0D0E] transition-opacity duration-500">
      <div className="relative flex flex-col items-center animate-pulse">
        <div className="w-24 h-24 relative mb-4 rounded-full overflow-hidden border-2 border-brand-red/40 p-1">
          <Image
            src="/logo.jpg"
            alt="Potluck Logo"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
        <span className="font-script text-2xl text-brand-cream tracking-wide">
          The Good Luck Truck
        </span>
        <div className="mt-3 w-32 h-1 bg-brand-charcoal rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-brand-red w-full animate-[marquee_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
