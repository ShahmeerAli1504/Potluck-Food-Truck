'use client';

import { useState } from 'react';
import { CURRENT_WEEK_SCHEDULE, ScheduleLocation } from '@/data/schedule-data';
import { MapPin, Clock, Calendar, Navigation, ArrowUpRight, Share2, Check, ExternalLink } from 'lucide-react';

export default function FindTruck() {
  const [schedule] = useState<ScheduleLocation[]>(CURRENT_WEEK_SCHEDULE);
  const todayStop = schedule.find((s) => s.isToday) || schedule[0];
  const [selectedLocation, setSelectedLocation] = useState<ScheduleLocation>(todayStop);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Potluck Food Truck is serving at ${selectedLocation.venueName} (${selectedLocation.address}) on ${selectedLocation.dayName} from ${selectedLocation.timeWindow}!`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="find-us" className="py-20 bg-brand-black border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-brand-red/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            Dynamic Location & Schedule Tracker
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Find <span className="text-brand-gold">The Truck</span> Schedule
          </h2>
          <p className="text-brand-cream/70 text-base mt-2">
            Click any day below to view our live interactive map location around Reno and Sparks, Nevada.
          </p>
        </div>

        {/* Dynamic Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {schedule.map((item) => {
            const isSelected = selectedLocation.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedLocation(item)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-red text-white border-brand-red shadow-lg font-black'
                    : 'bg-brand-dark text-brand-cream/70 border-brand-border hover:border-brand-cream/40 hover:text-white'
                }`}
              >
                {item.isToday && <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />}
                <span>{item.dayName}</span>
                <span className="text-[10px] opacity-70">({item.dateStr})</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Active Location & Live Google Map Card */}
        <div className="bg-brand-dark border-2 border-brand-red/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12 animate-fade-up">
          {/* Subtle Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Selected Location Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-red text-white text-xs font-black uppercase px-3 py-1 rounded-lg tracking-wider shadow">
                  {selectedLocation.isToday ? 'SERVING TODAY' : selectedLocation.statusText} &bull; {selectedLocation.dayName}
                </span>
                <span className="text-xs font-bold text-brand-gold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedLocation.timeWindow}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                {selectedLocation.venueName}
              </h3>

              <div className="flex items-start gap-2 text-brand-cream/90 text-sm sm:text-base font-semibold">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p>{selectedLocation.address}</p>
                  <p className="text-brand-cream/60 text-xs">{selectedLocation.cityState}</p>
                </div>
              </div>

              {selectedLocation.note && (
                <p className="text-xs text-brand-cream/70 bg-brand-black p-3.5 rounded-xl border border-brand-border italic leading-relaxed">
                  "{selectedLocation.note}"
                </p>
              )}

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={selectedLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-colors"
                >
                  <Navigation className="w-4 h-4 fill-white" />
                  Get Google Maps Directions
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-brand-charcoal hover:bg-brand-border text-brand-cream text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl border border-brand-border transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-brand-gold" /> Copied Location!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" /> Share Location
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Dynamic Embedded Google Map Frame */}
            <div className="lg:col-span-5">
              <div className="bg-brand-black border border-brand-border rounded-2xl p-4 space-y-3 relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between border-b border-brand-border pb-3">
                  <span className="text-xs font-extrabold uppercase text-white tracking-wider flex items-center gap-1.5 truncate">
                    <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" /> {selectedLocation.venueName}
                  </span>
                  <span className="text-[10px] bg-brand-gold/20 text-brand-gold font-bold px-2 py-0.5 rounded flex-shrink-0">
                    Live Map
                  </span>
                </div>

                {/* Real Dynamic Interactive Map Frame */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-brand-card shadow-inner">
                  <iframe
                    key={selectedLocation.id}
                    title={`Potluck Location - ${selectedLocation.venueName}`}
                    src={selectedLocation.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <a
                  href={selectedLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-brand-gold hover:text-white transition-colors pt-1"
                >
                  <span>Open Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Weekly Schedule Grid - Clickable to update map */}
        <div className="space-y-4">
          <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-gold" />
            Click Any Stop To Update Live Map
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {schedule.map((item) => {
              const isSelected = selectedLocation.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedLocation(item)}
                  className={`bg-brand-dark border rounded-2xl p-4 flex flex-col justify-between space-y-3 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-brand-red ring-2 ring-brand-red/40 shadow-xl'
                      : 'border-brand-border hover:border-brand-gold/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-black text-brand-gold uppercase">{item.dayName}</span>
                      <span className="text-brand-cream/60">{item.dateStr}</span>
                    </div>
                    <h4 className="font-display font-extrabold text-sm text-white line-clamp-1">
                      {item.venueName}
                    </h4>
                    <p className="text-xs text-brand-cream/70 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3 text-brand-gold flex-shrink-0" />
                      {item.timeWindow}
                    </p>
                    <p className="text-xs text-brand-cream/60 flex items-center gap-1 mt-1 line-clamp-1">
                      <MapPin className="w-3 h-3 text-brand-red flex-shrink-0" />
                      {item.address}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold text-brand-gold">
                    <span>{isSelected ? 'Viewing Map' : 'Select Day'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
