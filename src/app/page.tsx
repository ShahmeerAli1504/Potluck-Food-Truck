import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import FeaturedFood from '@/components/featured-food';
import BrandStory from '@/components/brand-story';
import MenuPreview from '@/components/menu-preview';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

// Dynamically import below-the-fold components to reduce main JS bundle size
const CustomLoader = dynamic(() => import('@/components/custom-loader'), { ssr: false });
const GallerySection = dynamic(() => import('@/components/gallery-section'));
const CateringCTA = dynamic(() => import('@/components/catering-cta'));
const ReviewsSection = dynamic(() => import('@/components/reviews-section'));
const SocialFeed = dynamic(() => import('@/components/social-feed'));

export const metadata: Metadata = {
  title: 'Potluck Food Truck | Asian Fusion with a Mexican Twist in Reno, NV',
  description:
    'Potluck is Reno’s premier food truck serving Cheeseburger Wonton Tacos, Elote Chicken Fries, and pan-fried Potstickers. Find today’s location or book event catering in Reno & Sparks.',
  alternates: {
    canonical: 'https://potlucktruckreno.com/',
  },
  openGraph: {
    title: 'Potluck Food Truck Reno | Asian Fusion with a Mexican Twist',
    description:
      'Zero Boring Bites! Home of the famous Cheeseburger Wonton Tacos and Elote Chicken Fries in Reno, Nevada.',
    url: 'https://potlucktruckreno.com/',
    siteName: 'Potluck Food Truck Reno',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Potluck Food Truck Reno Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Potluck Food Truck Reno | Asian Fusion with a Mexican Twist',
    description: 'Find our truck location today or book Potluck catering for your next Reno event!',
    images: ['/logo.jpg'],
  },
};

export default function HomePage() {
  return (
    <main className="relative bg-brand-black text-brand-cream min-h-screen">
      <CustomLoader />
      <Navbar />
      <Hero />
      <FeaturedFood />
      <BrandStory />
      <MenuPreview />
      <GallerySection />
      <CateringCTA />
      <ReviewsSection />
      <SocialFeed />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
