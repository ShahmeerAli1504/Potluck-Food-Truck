'use client';

import Navbar from '@/components/navbar';
import FindTruck from '@/components/find-truck';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <Navbar />
      <div className="pt-4">
        <FindTruck />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
