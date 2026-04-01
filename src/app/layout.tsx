import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cliniquepasteurtunis.com'),
  title: {
    default: 'Clinique Pasteur Tunis | Clinique Pluridisciplinaire - Centre Urbain Nord',
    template: '%s | Clinique Pasteur Tunis',
  },
  description: 'Clinique Pasteur Tunis : clinique pluridisciplinaire au Centre Urbain Nord. Chirurgie cardiovasculaire, bariatrique, esthétique. Urgences 24h/24. IRM, Scanner. Tél: +216 36 402 000',
  keywords: ['clinique pasteur tunis', 'clinique tunis', 'chirurgie tunisie', 'chirurgie cardiaque tunis', 'chirurgie bariatrique tunisie', 'chirurgie esthétique tunis', 'clinique centre urbain nord', 'hôpital tunis', 'IRM tunis', 'urgences tunis'],
  authors: [{ name: 'Clinique Pasteur Tunis' }],
  openGraph: {
    type: 'website',
    locale: 'fr_TN',
    url: 'https://cliniquepasteurtunis.com',
    siteName: 'Clinique Pasteur Tunis',
    title: 'Clinique Pasteur Tunis | Clinique Pluridisciplinaire de Référence',
    description: 'Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis. Spécialités médicales et chirurgicales. Urgences 24h/24.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Clinique Pasteur Tunis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinique Pasteur Tunis',
    description: 'Clinique pluridisciplinaire de référence à Tunis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://cliniquepasteurtunis.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'Clinique Pasteur Tunis',
              description: 'Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis',
              url: 'https://cliniquepasteurtunis.com',
              telephone: '+216 36 402 000',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Centre Urbain Nord',
                addressLocality: 'Tunis',
                postalCode: '1003',
                addressCountry: 'TN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.8465,
                longitude: 10.1897,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              medicalSpecialty: [
                'Cardiovascular Surgery',
                'General Surgery',
                'Orthopedic Surgery',
                'Bariatric Surgery',
                'Plastic Surgery',
                'Neurosurgery',
                'Urology',
                'Gynecology',
                'Radiology',
              ],
              availableService: [
                { '@type': 'MedicalProcedure', name: 'Chirurgie cardiovasculaire' },
                { '@type': 'MedicalProcedure', name: 'Chirurgie bariatrique' },
                { '@type': 'MedicalProcedure', name: 'IRM' },
                { '@type': 'MedicalProcedure', name: 'Scanner' },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
