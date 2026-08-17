'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <Navbar />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            Contact <span className="text-brand-red">Potluck Truck</span>
          </h1>
          <p className="text-brand-cream/70 text-base mt-2">
            Have a question about our menu, today’s location, or booking a private food truck event in Reno?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6 bg-brand-dark p-8 rounded-3xl border border-brand-border">
            <h2 className="font-display font-extrabold text-2xl text-white uppercase">
              Get In Touch Direct
            </h2>

            <div className="space-y-4 text-sm text-brand-cream/90">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center font-bold flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-brand-gold">Phone / Catering Line</p>
                  <a href="tel:7755550199" className="font-bold text-white hover:text-brand-red text-base">
                    (775) 555-FOOD (3663)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-brand-gold">General & Event Email</p>
                  <a href="mailto:catering@potlucktruckreno.com" className="font-bold text-white hover:text-brand-red text-base">
                    catering@potlucktruckreno.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cream/20 text-brand-cream flex items-center justify-center font-bold flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-brand-gold">Primary Service Area</p>
                  <p className="font-bold text-white text-base">
                    Reno, Sparks & Northern Nevada
                  </p>
                  <p className="text-xs text-brand-cream/60">Idlewild Park &bull; Downtown Reno &bull; Midtown</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <p className="text-xs font-bold uppercase text-brand-cream mb-2">Connect on Social:</p>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-black text-brand-cream hover:text-white px-4 py-2.5 rounded-xl border border-brand-border text-xs font-bold"
              >
                <Instagram className="w-4 h-4 text-brand-red" />
                <span>@potlucktruck</span>
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-brand-dark p-8 rounded-3xl border border-brand-border">
            {sent ? (
              <div className="text-center py-12 space-y-3">
                <h3 className="font-display font-black text-2xl text-white uppercase">Message Sent!</h3>
                <p className="text-sm text-brand-cream/80">
                  Thank you for reaching out to Potluck. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-brand-charcoal text-brand-cream font-bold text-xs px-5 py-2.5 rounded-xl border border-brand-border mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-display font-extrabold text-2xl text-white uppercase">
                  Send Us A Message
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Schedule Inquiry or Event Question"
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-black text-sm uppercase py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <MobileActionBar />
    </main>
  );
}
