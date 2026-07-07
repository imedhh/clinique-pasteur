'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { CalendarCheck } from 'lucide-react'
import { locales, defaultLocale } from '@/lib/i18n/config'

const LABEL: Record<string, string> = {
  fr: 'Prendre rendez-vous',
  en: 'Book an appointment',
  ar: 'حجز موعد',
}

// Bouton flottant (suit le scroll) present sur les pages Centres & Explorations, menant a /contact.
export default function AppointmentFab() {
  const pathname = usePathname() || '/'
  const parts = pathname.split('/')
  const locale = (locales as readonly string[]).includes(parts[1]) ? parts[1] : defaultLocale
  const section = parts[2]
  if (section !== 'centres' && section !== 'explorations') return null
  const label = LABEL[locale] || LABEL.fr
  return (
    <NextLink
      href={`/${locale}/contact`}
      aria-label={label}
      className="fixed bottom-5 left-5 md:bottom-6 md:left-6 z-40 inline-flex items-center gap-2 rounded-full text-white font-semibold text-sm px-5 py-3 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all"
      style={{ background: 'linear-gradient(135deg, #b78a2e, #8a6c33)' }}
    >
      <CalendarCheck className="w-5 h-5 flex-shrink-0" />
      <span>{label}</span>
    </NextLink>
  )
}
