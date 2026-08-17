'use client';

import Navbar from '@/components/navbar';
import AnnouncementBar from '@/components/announcement-bar';
import FindTruck from '@/components/find-truck';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <AnnouncementBar />
      <Navbar />
      <div className="pt-8">
        <FindTruck />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
