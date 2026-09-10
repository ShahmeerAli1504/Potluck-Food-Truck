import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Home, Utensils, Calendar, Truck, Mail, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Potluck Food Truck Reno',
  description:
    'The page you requested could not be found. Return to Potluck Food Truck Reno to check our signature menu, find today’s truck location, or book catering.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream flex flex-col justify-between selection:bg-brand-red selection:text-white">
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center my-auto space-y-8">
        {/* Custom Food Truck Wok Graphic 404 Badge */}
        <div className="relative inline-flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/30 via-brand-gold/20 to-brand-red/30 rounded-full blur-2xl opacity-75 animate-pulse" />
          
          <div className="relative z-10 w-28 h-28 rounded-3xl bg-brand-dark border border-brand-red/50 flex flex-col items-center justify-center shadow-2xl space-y-1">
            <span className="font-display font-black text-4xl text-brand-red tracking-tighter">404</span>
            <div className="w-8 h-1 bg-brand-gold rounded-full" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="inline-block bg-brand-red/20 text-brand-gold border border-brand-gold/30 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            Page Not Found &bull; Lost In Transition
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-tight">
            Looks Like This Page <br className="hidden sm:inline" />
            <span className="text-brand-red">Took A Wrong Turn!</span>
          </h1>
          <p className="text-brand-cream/80 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            The page you’re looking for might have been moved, renamed, or temporarily parked off the grid.
            Don’t worry — our kitchen is open and serving zero boring bites in Reno!
          </p>
        </div>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-left">
          <Link
            href="/"
            className="group bg-brand-dark hover:bg-brand-charcoal p-5 rounded-2xl border border-brand-border hover:border-brand-red transition-all duration-300 flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white uppercase text-sm group-hover:text-brand-red transition-colors flex items-center justify-between">
                <span>Home Page</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-xs text-brand-cream/60 mt-1">Return to main hub</p>
            </div>
          </Link>

          <Link
            href="/menu"
            className="group bg-brand-dark hover:bg-brand-charcoal p-5 rounded-2xl border border-brand-border hover:border-brand-gold transition-all duration-300 flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white uppercase text-sm group-hover:text-brand-gold transition-colors flex items-center justify-between">
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-xs text-brand-cream/60 mt-1">Wonton Tacos & Fries</p>
            </div>
          </Link>

          <Link
            href="/schedule"
            className="group bg-brand-dark hover:bg-brand-charcoal p-5 rounded-2xl border border-brand-border hover:border-brand-red transition-all duration-300 flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white uppercase text-sm group-hover:text-brand-red transition-colors flex items-center justify-between">
                <span>Truck Schedule</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-xs text-brand-cream/60 mt-1">Today's Reno locations</p>
            </div>
          </Link>

          <Link
            href="/catering"
            className="group bg-brand-dark hover:bg-brand-charcoal p-5 rounded-2xl border border-brand-border hover:border-brand-gold transition-all duration-300 flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white uppercase text-sm group-hover:text-brand-gold transition-colors flex items-center justify-between">
                <span>Book Catering</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-xs text-brand-cream/60 mt-1">Private events & weddings</p>
            </div>
          </Link>
        </div>

        {/* Primary Home Action Button */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home Page</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-brand-charcoal hover:bg-brand-border text-brand-cream hover:text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl border border-brand-border transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Kitchen</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
