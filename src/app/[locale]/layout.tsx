import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cairo } from 'next/font/google'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AppointmentFab from '@/components/AppointmentFab'
import { locales, defaultLocale, dir, htmlLang, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false })

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })
const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-arabic', display: 'swap' })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale
  const d = getDictionary(locale).meta
  return {
    metadataBase: new URL('https://cptunis.com'),
    title: { default: d.title, template: `%s | ${d.siteName}` },
    description: d.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: '/fr', en: '/en', ar: '/ar', 'x-default': '/fr' },
    },
    openGraph: {
      type: 'website', url: `https://cptunis.com/${locale}`, siteName: d.siteName,
      title: d.title, description: d.description,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: d.siteName }],
    },
    robots: { index: true, follow: true },
  }
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) notFound()
  const locale = params.locale as Locale
  const d = getDictionary(locale)
  return (
    <html lang={htmlLang[locale]} dir={dir(locale)}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cairo.variable} min-h-screen flex flex-col`}>
        <a href="#contenu" className="skip-link">{d.common.skipToContent}</a>
        <Header locale={locale} dict={d} />
        <main id="contenu" className="flex-grow">{children}</main>
        <Footer locale={locale} dict={d} />
        <Chatbot locale={locale} />
        <AppointmentFab />
        <Script src="https://analytics.upstone.io/script.js" data-website-id="ded8ffe4-c0b3-4d78-a492-b6b2237ce700" strategy="afterInteractive" />
      </body>
    </html>
  )
}
