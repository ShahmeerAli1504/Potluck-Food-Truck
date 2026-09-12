'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Calendar, MapPin, UtensilsCrossed, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Menu', href: '/#menu' },
    { label: 'Catering & Events', href: '/#catering' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Our Story', href: '/#story' },
    { label: 'Reviews', href: '/#reviews' },
  ];

  return (
    <header className="bg-brand-black/95 backdrop-blur-md border-b border-brand-border/60 sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-red/50 group-hover:border-brand-red transition-colors flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Potluck Reno Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-2xl text-white tracking-tight uppercase group-hover:text-brand-red transition-colors">
                POTLUCK
              </span>
              <span className="text-[10px] bg-brand-red text-white font-bold px-1.5 py-0.5 rounded tracking-wider">
                RENO
              </span>
            </div>
            <span className="font-script text-brand-cream/80 text-sm -mt-1 tracking-wider">
              The Good Luck Truck
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors tracking-wide ${
                link.label === 'Gallery'
                  ? 'text-brand-gold hover:text-white flex items-center gap-1 bg-brand-charcoal/80 px-3 py-1.5 rounded-lg border border-brand-border/80 hover:border-brand-gold'
                  : 'text-brand-cream/80 hover:text-brand-red'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#catering"
            className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-lg hover:shadow-brand-red/20 transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book Catering
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-cream hover:text-white hover:bg-brand-charcoal rounded-lg border border-brand-border"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark/98 backdrop-blur-xl border-b border-brand-border px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-base font-bold py-3 px-4 rounded-xl active:scale-[0.98] transition-all ${
                  link.label === 'Gallery'
                    ? 'text-brand-gold bg-brand-charcoal border border-brand-border/60'
                    : 'text-brand-cream hover:text-brand-red hover:bg-brand-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-brand-border flex flex-col gap-2.5">
            <a
              href="#catering"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-red text-white font-bold text-sm py-3.5 rounded-xl shadow-lg active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Potluck Catering
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
