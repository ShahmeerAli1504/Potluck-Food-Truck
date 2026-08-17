'use client';

import Navbar from '@/components/navbar';
import MenuPreview from '@/components/menu-preview';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <Navbar />
      <div className="pt-4">
        <MenuPreview />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
