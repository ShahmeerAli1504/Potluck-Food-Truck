'use client';

import { VERIFIED_REVIEWS } from '@/data/reviews-data';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-brand-black border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">
            <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
            <span>Authentic Community Feedback</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Reno Keeps Coming <span className="text-brand-red">Back For This</span>
          </h2>
          <p className="text-brand-cream/70 text-base mt-2">
            Verified review excerpts from local Reno food lovers on Yelp and StreetFoodFinder.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-dark border border-brand-border rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-brand-gold/40 transition-colors relative"
            >
              <Quote className="w-8 h-8 text-brand-red/20 absolute top-4 right-4" />

              <div className="space-y-3 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                  <span className="text-xs font-bold text-brand-cream/60 ml-1">5.0 / 5</span>
                </div>

                <p className="text-sm text-brand-cream/90 italic leading-relaxed">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-sm text-white flex items-center gap-1.5">
                    {rev.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" />
                  </h4>
                  <p className="text-[11px] text-brand-cream/60">{rev.location}</p>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-1 rounded bg-brand-black text-brand-gold border border-brand-border">
                  via {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Yelp & StreetFoodFinder Badge Footer */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-brand-cream/60">
          <a
            href="https://www.yelp.com/biz/potluck-reno-2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 font-bold"
          >
            <span>View Potluck on Yelp</span> &rarr;
          </a>
          <span>&bull;</span>
          <a
            href="https://streetfoodfinder.com/thepotlucktruck"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 font-bold"
          >
            <span>View Schedule on StreetFoodFinder</span> &rarr;
          </a>
          <span>&bull;</span>
          <a
            href="https://www.facebook.com/thepotlucktruck"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 font-bold"
          >
            <span>Follow on Facebook</span> &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
