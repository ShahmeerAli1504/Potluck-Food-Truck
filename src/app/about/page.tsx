'use client';

import Navbar from '@/components/navbar';
import AnnouncementBar from '@/components/announcement-bar';
import BrandStory from '@/components/brand-story';
import ReviewsSection from '@/components/reviews-section';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <AnnouncementBar />
      <Navbar />
      <div className="pt-8">
        <BrandStory />
        <ReviewsSection />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
