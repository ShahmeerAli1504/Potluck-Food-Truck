import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import MobileActionBar from '@/components/mobile-action-bar';
import ContactContent from '@/components/contact-content';

export const metadata: Metadata = {
  title: 'Contact Us & Catering Inquiries | Potluck Food Truck Reno',
  description:
    'Get in touch with Potluck Food Truck in Reno, NV. Submit a question, request event information, or reach out directly at (775) 555-FOOD or griffin@potlucknv.com.',
  alternates: {
    canonical: 'https://potlucktruckreno.com/contact',
  },
  openGraph: {
    title: 'Contact Potluck Food Truck | Reno & Sparks, NV',
    description:
      'Have questions or want to book our food truck? Contact Potluck Reno today via phone, email, or message form.',
    url: 'https://potlucktruckreno.com/contact',
    siteName: 'Potluck Food Truck Reno',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Contact Potluck Food Truck',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Potluck Food Truck | Reno & Sparks, NV',
    description: 'Reach out to Potluck Food Truck Reno for schedule inquiries, feedback, or bookings.',
    images: ['/logo.jpg'],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Potluck Food Truck',
  url: 'https://potlucktruckreno.com/contact',
  mainEntity: {
    '@type': 'FoodEstablishment',
    name: 'Potluck Food Truck',
    telephone: '+1-775-555-3663',
    email: 'griffin@potlucknv.com',
    areaServed: ['Reno', 'Sparks', 'Northern Nevada'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-775-555-3663',
      contactType: 'customer service',
      email: 'griffin@potlucknv.com',
      availableLanguage: 'English',
    },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Navbar />
      <ContactContent />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
