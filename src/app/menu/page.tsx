'use client';

import Navbar from '@/components/navbar';
import AnnouncementBar from '@/components/announcement-bar';
import MenuPreview from '@/components/menu-preview';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <AnnouncementBar />
      <Navbar />
      <div className="pt-8">
        <MenuPreview />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
