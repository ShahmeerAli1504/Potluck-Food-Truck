'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Utensils, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream flex flex-col justify-between">
      <Navbar />

      <section className="py-24 px-4 text-center max-w-2xl mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center font-black text-3xl mx-auto border border-brand-red/40">
          404
        </div>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
          Page Not Found
        </h1>
        <p className="text-brand-cream/80 text-base">
          Looks like this page took a wrong turn at Food Truck Friday! Head back to find the truck or view our signature menu.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-border text-brand-cream text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl border border-brand-border transition-colors"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
