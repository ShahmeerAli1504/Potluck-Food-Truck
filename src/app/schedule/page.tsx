import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import FindTruck from '@/components/find-truck';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export const metadata: Metadata = {
  title: 'Truck Schedule & Today’s Location | Potluck Food Truck Reno',
  description:
    'Find out where Potluck Food Truck is parked today in Reno & Sparks, NV. View our weekly schedule, food truck festival dates, and pop-up locations.',
  alternates: {
    canonical: 'https://potlucktruckreno.com/schedule',
  },
  openGraph: {
    title: 'Potluck Food Truck Schedule | Today in Reno, NV',
    description:
      'Check today’s location and upcoming weekly schedule for Potluck Food Truck in Reno & Sparks.',
    url: 'https://potlucktruckreno.com/schedule',
    siteName: 'Potluck Food Truck Reno',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Potluck Food Truck Schedule',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Potluck Food Truck Schedule | Today in Reno, NV',
    description: 'Find where Potluck is serving today in Reno & Sparks!',
    images: ['/logo.jpg'],
  },
};

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
