"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black border-t border-brand-border text-brand-cream pb-24 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-red/60">
                <Image
                  src="/logo.jpg"
                  alt="Potluck Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-tight uppercase">
                  POTLUCK
                </span>
                <p className="font-script text-brand-gold text-base -mt-1">
                  The Good Luck Truck
                </p>
              </div>
            </Link>

            <p className="text-xs text-brand-cream/70 max-w-sm leading-relaxed">
              Reno Nevada's premier Asian-fusion food truck with a Mexican
              twist. Serving Cheeseburger Wonton Tacos, Elote Chicken Fries, and
              pan-seared potstickers.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-dark border border-brand-border hover:border-brand-red flex items-center justify-center text-brand-cream hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/thepotlucktruck"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-dark border border-brand-border hover:border-brand-red flex items-center justify-center text-brand-cream hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.yelp.com/biz/potluck-reno-2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-brand-dark border border-brand-border hover:border-brand-gold text-xs font-bold text-brand-cream hover:text-white transition-colors"
              >
                Yelp
              </a>
              <a
                href="https://streetfoodfinder.com/thepotlucktruck"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-brand-dark border border-brand-border hover:border-brand-gold text-xs font-bold text-brand-cream hover:text-white transition-colors"
              >
                StreetFoodFinder
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a
                  href="#menu"
                  className="hover:text-brand-red transition-colors"
                >
                  Full Menu
                </a>
              </li>
              <li>
                <a
                  href="#catering"
                  className="hover:text-brand-red transition-colors"
                >
                  Book Catering for Events
                </a>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-brand-gold hover:text-white font-bold transition-colors"
                >
                  Fun Photo Gallery 📸
                </Link>
              </li>
              <li>
                <Link
                  href="/#story"
                  className="hover:text-brand-red transition-colors"
                >
                  Our Culinary Story
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="hover:text-brand-red transition-colors"
                >
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Reno Service Area & Contact
            </h4>
            <div className="space-y-2 text-xs text-brand-cream/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>
                  Reno &bull; Sparks &bull; Truckee Meadows &bull; Northern
                  Nevada
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="tel:7755550199" className="hover:text-white font-bold">
                  (775) 555-FOOD (3663)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a
                  href="mailto:griffin@potlucknv.com?subject=Potluck%20Food%20Truck%20Website%20Inquiry"
                  className="hover:text-white font-bold transition-colors"
                >
                  griffin@potlucknv.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO Tags Bar */}
        <div className="pt-6 border-t border-brand-border/60 text-[11px] text-brand-cream/40 flex flex-wrap gap-x-4 gap-y-1">
          <span>Potluck Reno NV</span>
          <span>&bull;</span>
          <span>Asian Fusion Food Truck Reno</span>
          <span>&bull;</span>
          <span>Cheeseburger Wonton Tacos</span>
          <span>&bull;</span>
          <span>Elote Chicken Fries Reno</span>
          <span>&bull;</span>
          <span>Food Truck Catering Reno Sparks</span>
          <span>&bull;</span>
          <span>Idlewild Park Food Truck Friday</span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/70">
          <p>
            © {new Date().getFullYear()} Potluck Food Truck Reno. All rights
            reserved.
          </p>

          {/* Powered by Nexora Digital */}
          <div className="flex items-center gap-2">
            <span className="text-brand-cream/60 font-medium">Powered by</span>
            <a
              href="https://nexoradigital.live"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            >
              <div className="relative w-6 h-6 shrink-0">
                <Image
                  src="/nexora-logo.png"
                  alt="Nexora Digital Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-white tracking-wide group-hover:text-brand-gold transition-colors">
                Nexora Digital
              </span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white font-bold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
