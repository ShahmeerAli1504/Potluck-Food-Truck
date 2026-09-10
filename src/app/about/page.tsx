import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import BrandStory from '@/components/brand-story';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

const ReviewsSection = dynamic(() => import('@/components/reviews-section'));

export const metadata: Metadata = {
  title: 'About Us | Potluck Food Truck Reno, NV',
  description:
    'Learn the story behind Potluck Food Truck Reno — merging Asian comfort food with Mexican street style to create zero boring bites across Northern Nevada.',
  alternates: {
    canonical: 'https://potlucktruckreno.com/about',
  },
  openGraph: {
    title: 'About Potluck Food Truck | Reno, Nevada',
    description:
      'Discover how Potluck brought Asian Fusion with a Mexican Twist to Reno. Read our story and customer reviews.',
    url: 'https://potlucktruckreno.com/about',
    siteName: 'Potluck Food Truck Reno',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Potluck Food Truck Reno Story',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Potluck Food Truck | Reno, Nevada',
    description: 'Merging Asian comfort food with Mexican street style in Reno, NV.',
    images: ['/logo.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <Navbar />
      <div className="pt-4">
        <BrandStory />
        <ReviewsSection />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
