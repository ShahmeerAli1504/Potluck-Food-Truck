import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export const metadata: Metadata = {
  title: 'Photo Gallery | Potluck Food Truck Reno, NV',
  description:
    'View high-resolution photos of Potluck Food Truck’s signature fusion dishes, truck vibes, and community events across Reno and Sparks, Nevada.',
  alternates: {
    canonical: 'https://potlucktruckreno.com/gallery',
  },
  openGraph: {
    title: 'Potluck Food Truck Photo Gallery | Reno, NV',
    description:
      'Check out photos of Cheeseburger Wonton Tacos, Elote Chicken Fries, and food truck events in Reno.',
    url: 'https://potlucktruckreno.com/gallery',
    siteName: 'Potluck Food Truck Reno',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Potluck Food Truck Photo Gallery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Potluck Food Truck Photo Gallery | Reno, NV',
    description: 'See pictures of signature dishes and food truck events in Reno, NV.',
    images: ['/logo.jpg'],
  },
};

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
