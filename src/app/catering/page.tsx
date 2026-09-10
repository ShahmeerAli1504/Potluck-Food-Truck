import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import CateringCTA from '@/components/catering-cta';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export const metadata: Metadata = {
  title: 'Food Truck Catering in Reno & Sparks | Potluck NV',
  description:
    'Book Potluck Food Truck for weddings, corporate events, private parties, and community gatherings in Reno, Sparks, and Lake Tahoe. Customizable Asian-Mexican fusion catering packages.',
  alternates: {
    canonical: 'https://potlucktruckreno.com/catering',
  },
  openGraph: {
    title: 'Private Event & Corporate Catering | Potluck Food Truck Reno',
    description:
      'Bring Asian Fusion with a Mexican Twist to your next event in Reno & Sparks. Get a custom catering quote today!',
    url: 'https://potlucktruckreno.com/catering',
    siteName: 'Potluck Food Truck Reno',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Potluck Food Truck Catering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Event & Corporate Catering | Potluck Food Truck Reno',
    description: 'Book Potluck Food Truck for private events and corporate catering in Reno & Sparks.',
    images: ['/logo.jpg'],
  },
};

export default function CateringPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <Navbar />
      <div className="pt-4">
        <CateringCTA />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
