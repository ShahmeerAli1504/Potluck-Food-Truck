import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://potlucktruckreno.com'),
  title: 'Potluck Food Truck | Asian Fusion with a Mexican Twist in Reno, NV',
  description:
    'Potluck is Reno’s premier food truck serving Cheeseburger Wonton Tacos, Elote Chicken Fries, and pan-fried Potstickers. Find today’s location or book event catering in Reno & Sparks.',
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  keywords: [
    'Potluck Reno',
    'Potluck Food Truck Reno',
    'Asian Fusion Reno',
    'Asian Fusion Food Truck Reno',
    'Food Truck Reno',
    'Reno Food Trucks',
    'Cheeseburger Wonton Tacos',
    'Catering Reno',
    'Food Truck Catering Reno',
  ],
  authors: [{ name: 'Potluck Reno' }],
  openGraph: {
    title: 'Potluck Food Truck Reno | Asian Fusion with a Mexican Twist',
    description:
      'Zero Boring Bites! Home of the famous Cheeseburger Wonton Tacos and Elote Chicken Fries in Reno, Nevada.',
    url: 'https://potlucktruckreno.com',
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
  alternates: {
    canonical: 'https://potlucktruckreno.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Potluck Food Truck',
  image: 'https://potlucktruckreno.com/logo.jpg',
  '@id': 'https://potlucktruckreno.com',
  url: 'https://potlucktruckreno.com',
  telephone: '+1-775-555-3663',
  servesCuisine: ['Asian Fusion', 'Mexican Twist', 'Street Food'],
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Reno',
    addressRegion: 'NV',
    postalCode: '89501',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.5296,
    longitude: -119.8138,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
  sameAs: [
    'https://www.yelp.com/biz/potluck-reno-2',
    'https://streetfoodfinder.com/thepotlucktruck',
    'https://www.instagram.com',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-black text-brand-cream font-sans antialiased min-h-screen flex flex-col selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
