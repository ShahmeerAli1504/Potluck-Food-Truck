'use client';

import { Utensils, MapPin, Calendar } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-black/95 backdrop-blur-md border-t border-brand-border/80 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-charcoal text-brand-cream hover:text-white border border-brand-border active:scale-95 transition-all"
        >
          <Utensils className="w-4 h-4 text-brand-cream/80 mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Menu</span>
        </a>

        <a
          href="#find-us"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-charcoal text-brand-gold border border-brand-border active:scale-95 transition-all"
        >
          <MapPin className="w-4 h-4 text-brand-gold mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Find Us</span>
        </a>

        <a
          href="#catering"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-red text-white shadow-lg active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-wider">Catering</span>
        </a>

      </div>
    </div>
  );
}
