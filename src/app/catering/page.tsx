'use client';

import Navbar from '@/components/navbar';
import AnnouncementBar from '@/components/announcement-bar';
import CateringCTA from '@/components/catering-cta';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function CateringPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <AnnouncementBar />
      <Navbar />
      <div className="pt-8">
        <CateringCTA />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
