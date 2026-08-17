'use client';

import CustomLoader from '@/components/custom-loader';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import FeaturedFood from '@/components/featured-food';
import BrandStory from '@/components/brand-story';
import MenuPreview from '@/components/menu-preview';
import FindTruck from '@/components/find-truck';
import CateringCTA from '@/components/catering-cta';
import GallerySection from '@/components/gallery-section';
import ReviewsSection from '@/components/reviews-section';
import SocialFeed from '@/components/social-feed';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export default function HomePage() {
  return (
    <main className="relative bg-brand-black text-brand-cream min-h-screen">
      <CustomLoader />
      <Navbar />
      <Hero />
      <FeaturedFood />
      <BrandStory />
      <MenuPreview />
      <FindTruck />
      <GallerySection />
      <CateringCTA />
      <ReviewsSection />
      <SocialFeed />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
