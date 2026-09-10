import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import MenuPreview from '@/components/menu-preview';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';

export const metadata: Metadata = {
  title: 'Menu | Cheeseburger Wonton Tacos & Fusion Bites | Potluck Reno',
  description:
    'Browse the official menu for Potluck Food Truck in Reno. Featuring Cheeseburger Wonton Tacos, Elote Chicken Fries, Pork Potstickers, and specialty Asian-Mexican street food.',
  alternates: {
    canonical: 'https://potlucktruckreno.com/menu',
  },
  openGraph: {
    title: 'Potluck Food Truck Menu | Asian Fusion in Reno, NV',
    description:
      'Cheeseburger Wonton Tacos, Elote Chicken Fries, and Pork Potstickers. Explore the full food truck menu!',
    url: 'https://potlucktruckreno.com/menu',
    siteName: 'Potluck Food Truck Reno',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Potluck Food Truck Menu',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Potluck Food Truck Menu | Asian Fusion in Reno, NV',
    description: 'Wonton Tacos, Elote Fries, Potstickers & more in Reno, Nevada.',
    images: ['/logo.jpg'],
  },
};

const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Potluck Food Truck Menu',
  description: 'Asian Fusion street food menu with a Mexican twist in Reno, NV',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Signature Fusion Tacos',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Cheeseburger Wonton Tacos',
          description: 'Crispy wonton taco shells stuffed with seasoned smash beef, melted cheese, spicy kimchi aioli, and scallions.',
          offers: {
            '@type': 'Offer',
            price: '14.00',
            priceCurrency: 'USD',
          },
        },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Loaded Loaded Fries',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Elote Chicken Fries',
          description: 'Golden double-fried potatoes topped with grilled marinated chicken, street corn elote dip, cotija cheese, and cilantro.',
          offers: {
            '@type': 'Offer',
            price: '15.00',
            priceCurrency: 'USD',
          },
        },
      ],
    },
  ],
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <Navbar />
      <div className="pt-4">
        <MenuPreview />
      </div>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
