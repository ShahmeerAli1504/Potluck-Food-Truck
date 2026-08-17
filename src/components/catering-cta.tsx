'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Users, MapPin, CheckCircle2, Send, Sparkles, Phone, Mail, Building2, PartyPopper } from 'lucide-react';

export default function CateringCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Corporate Event',
    guestCount: 50,
    location: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const eventTypes = [
    'Private Party',
    'Corporate Event',
    'Wedding / Reception',
    'Community Festival',
    'Office Lunch Break',
    'Birthday / Graduation',
  ];

  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, guestCount: parseInt(e.target.value) || 20 });
  };

  const estimatedBudget = Math.round(formData.guestCount * 18);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E53935', '#F5A623', '#2EC4B6'],
        });
      } catch (err) {
        // Fallback if canvas-confetti non-browser
      }
    }, 600);
  };

  return (
    <section id="catering" className="py-20 bg-brand-dark border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Catering Pitch & Value Propositions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Full Service Event Catering</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Bring Potluck To <span className="text-brand-red">Your Event</span>
            </h2>

            <p className="text-brand-cream/80 text-base leading-relaxed">
              Ditch the boring cold catering trays. We pull up our fully operational food truck to your party, office building, or wedding venue and serve hot, made-to-order wonton tacos, loaded fries, and pan-fried potstickers on demand.
            </p>

            {/* Event Types Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cream">
                We Cater All Types of Occasions:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Corporate Lunches',
                  'Private Parties',
                  'Weddings & Receptions',
                  'Community Festivals',
                  'Brewery Pop-ups',
                  'Graduation Bashes',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-brand-black p-3 rounded-xl border border-brand-border text-xs font-semibold text-brand-cream flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-brand-black p-5 rounded-2xl border border-brand-border space-y-2">
              <p className="text-xs font-bold uppercase text-brand-gold tracking-wider">
                Direct Catering Line & Email:
              </p>
              <div className="flex flex-col gap-1 text-sm text-brand-cream">
                <a href="tel:7755550199" className="hover:text-brand-red flex items-center gap-2 font-semibold">
                  <Phone className="w-4 h-4 text-brand-red" /> (775) 555-FOOD (3663)
                </a>
                <a
                  href="mailto:catering@potlucktruckreno.com?subject=Potluck%20Food%20Truck%20Catering%20Inquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:catering@potlucktruckreno.com?subject=Potluck%20Food%20Truck%20Catering%20Inquiry";
                  }}
                  className="hover:text-brand-red flex items-center gap-2 font-semibold text-brand-cream transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" /> catering@potlucktruckreno.com
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Quote & Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-black border-2 border-brand-border rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mx-auto border border-brand-red/40">
                    <PartyPopper className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
                    Catering Request Received!
                  </h3>
                  <p className="text-brand-cream/80 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! We’ve logged your request for <strong className="text-brand-gold">{formData.guestCount} guests</strong> on <strong className="text-white">{formData.eventDate || 'your selected date'}</strong>. Our event team will review truck availability and contact you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-brand-charcoal hover:bg-brand-border text-brand-cream font-bold text-xs uppercase px-6 py-3 rounded-xl border border-brand-border"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-brand-border pb-4">
                    <h3 className="font-display font-black text-xl text-white uppercase">
                      Request Your Event Quote
                    </h3>
                    <p className="text-xs text-brand-cream/60 mt-0.5">
                      Fast response guaranteed. Lock in your date with zero upfront obligation.
                    </p>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(775) 800-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none text-brand-cream"
                      />
                    </div>
                  </div>

                  {/* Event Type & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                      >
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-brand-cream uppercase">
                          Estimated Guests: <span className="text-brand-gold font-extrabold">{formData.guestCount}</span>
                        </label>
                        <span className="text-[11px] text-brand-cream/60">Est. ~${estimatedBudget}</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="300"
                        step="5"
                        value={formData.guestCount}
                        onChange={handleGuestChange}
                        className="w-full accent-brand-red cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                      Event Location / Venue Address
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Idlewild Park Pavilion or Office Address in Reno"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                      Additional Event Notes or Dietary Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your event timing, dietary preferences, or specific menu requests..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-red hover:bg-brand-red-hover disabled:opacity-50 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {loading ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Book Potluck for Your Event &rarr;</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
