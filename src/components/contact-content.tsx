'use client';

import { Mail, Phone, MapPin, Send, Instagram, Facebook, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
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
                <a
                  href="mailto:griffin@potlucknv.com?subject=Potluck%20Food%20Truck%20General%20Inquiry"
                  className="font-bold text-white hover:text-brand-red text-base transition-colors"
                >
                  griffin@potlucknv.com
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
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-black text-brand-cream hover:text-white px-4 py-2.5 rounded-xl border border-brand-border text-xs font-bold transition-colors"
              >
                <Instagram className="w-4 h-4 text-brand-red" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/thepotlucktruck"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-black text-brand-cream hover:text-white px-4 py-2.5 rounded-xl border border-brand-border text-xs font-bold transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="lg:col-span-7 bg-brand-dark p-8 rounded-3xl border border-brand-border">
          {sent ? (
            <div className="text-center py-12 space-y-3">
              <h3 className="font-display font-black text-2xl text-white uppercase">Message Sent!</h3>
              <p className="text-sm text-brand-cream/80">
                Thank you for reaching out to Potluck. Your message has been forwarded to <strong className="text-white">griffin@potlucknv.com</strong>. We will get back to you shortly!
              </p>
              <button
                onClick={() => setSent(false)}
                className="bg-brand-charcoal hover:bg-brand-border text-brand-cream font-bold text-xs px-5 py-2.5 rounded-xl border border-brand-border mt-2 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-white uppercase">
                Send Us A Message
              </h2>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3.5 flex items-center gap-3 text-red-400 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-cream uppercase mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-red text-white text-sm rounded-xl px-4 py-3 outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red hover:bg-brand-red-hover disabled:opacity-50 text-white font-black text-sm uppercase py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
