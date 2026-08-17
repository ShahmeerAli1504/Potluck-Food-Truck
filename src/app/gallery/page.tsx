'use client';

import Navbar from '@/components/navbar';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <Navbar />
      <div className="pt-2">
        <GallerySection standalone={true} />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
