'use client';

import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { CURRENT_WEEK_SCHEDULE } from '@/data/schedule-data';

export default function AnnouncementBar() {
  const todayStop = CURRENT_WEEK_SCHEDULE.find((s) => s.isToday) || CURRENT_WEEK_SCHEDULE[0];

  return (
    <div className="bg-brand-red text-white text-xs sm:text-sm font-medium py-2.5 px-4 sticky top-0 z-50 border-b border-red-700/50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-black/20 text-brand-cream px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
            Live Spot
          </span>
          <span className="hidden sm:inline text-brand-cream/90 font-sans">
            Serving Reno TODAY:
          </span>
          <span className="font-bold text-white flex items-center gap-1 truncate">
            <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            {todayStop.venueName} ({todayStop.timeWindow})
          </span>
        </div>

        <a
          href="#find-us"
          className="flex items-center gap-1 text-xs font-bold text-white hover:text-brand-gold transition-colors flex-shrink-0 bg-black/20 hover:bg-black/30 px-3 py-1 rounded-full"
        >
          <span>Get Directions</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
