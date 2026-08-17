'use client';

import { useState } from 'react';
import { CURRENT_WEEK_SCHEDULE, ScheduleLocation } from '@/data/schedule-data';
import { MapPin, Clock, Calendar, Navigation, ArrowUpRight, Share2, Check } from 'lucide-react';

export default function FindTruck() {
  const [schedule] = useState<ScheduleLocation[]>(CURRENT_WEEK_SCHEDULE);
  const todayStop = schedule.find((s) => s.isToday) || schedule[0];
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Potluck Food Truck is serving TODAY at ${todayStop.venueName} (${todayStop.address}) from ${todayStop.timeWindow}!`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="find-us" className="py-20 bg-brand-black border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-brand-red/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            Live Truck Tracker
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Find <span className="text-brand-gold">The Truck</span> Today
          </h2>
          <p className="text-brand-cream/70 text-base mt-2">
            Food trucks move fast! Here is where we are parked this week around Reno and Sparks, Nevada.
          </p>
        </div>

        {/* Hero "TODAY'S LOCATION" Card */}
        <div className="bg-brand-dark border-2 border-brand-red/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          {/* Subtle Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Venue & Schedule info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-red text-white text-xs font-black uppercase px-3 py-1 rounded-lg tracking-wider shadow">
                  {todayStop.statusText} &bull; TODAY
                </span>
                <span className="text-xs font-bold text-brand-gold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {todayStop.timeWindow}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                {todayStop.venueName}
              </h3>

              <div className="flex items-start gap-2 text-brand-cream/90 text-sm sm:text-base font-semibold">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p>{todayStop.address}</p>
                  <p className="text-brand-cream/60 text-xs">{todayStop.cityState}</p>
                </div>
              </div>

              {todayStop.note && (
                <p className="text-xs text-brand-cream/70 bg-brand-black p-3 rounded-xl border border-brand-border italic">
                  "{todayStop.note}"
                </p>
              )}

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={todayStop.googleMapsUrl}
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

            {/* Right: Real Interactive Map Embed */}
            <div className="lg:col-span-5">
              <div className="bg-brand-black border border-brand-border rounded-2xl p-4 space-y-3 relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between border-b border-brand-border pb-3">
                  <span className="text-xs font-extrabold uppercase text-white tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-gold" /> {todayStop.venueName}
                  </span>
                  <span className="text-[10px] bg-brand-gold/20 text-brand-gold font-bold px-2 py-0.5 rounded">
                    Live GPS Spot
                  </span>
                </div>

                {/* Real Interactive Map Frame */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-brand-card shadow-inner">
                  <iframe
                    title="Potluck Truck Location Map - Reno, NV"
                    src="https://maps.google.com/maps?q=2055+Idlewild+Dr,+Reno,+NV+89509&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <a
                  href={todayStop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-brand-gold hover:text-white transition-colors pt-1"
                >
                  <span>Open Full Interactive Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Rest of Weekly Schedule */}
        <div className="space-y-4">
          <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-gold" />
            Upcoming Reno Schedule
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schedule.slice(1).map((item) => (
              <div
                key={item.id}
                className="bg-brand-dark border border-brand-border rounded-2xl p-5 flex flex-col justify-between space-y-3 hover:border-brand-gold/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-brand-gold uppercase">{item.dayName}</span>
                    <span className="text-brand-cream/60">{item.dateStr}</span>
                  </div>
                  <h4 className="font-display font-extrabold text-base text-white">
                    {item.venueName}
                  </h4>
                  <p className="text-xs text-brand-cream/70 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-brand-gold flex-shrink-0" />
                    {item.timeWindow}
                  </p>
                  <p className="text-xs text-brand-cream/60 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-brand-red flex-shrink-0" />
                    {item.address}
                  </p>
                </div>

                <a
                  href={item.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-xs font-bold text-brand-cream hover:text-white bg-brand-black hover:bg-brand-charcoal py-2 px-3 rounded-lg border border-brand-border transition-colors w-full"
                >
                  <span>Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
