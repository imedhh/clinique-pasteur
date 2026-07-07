'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, defaultLocale } from '@/lib/i18n/config'

const PA = 'xMidYMid slice'

const FLAGS: Record<string, React.ReactNode> = {
  // France : bandes bleu / blanc / rouge
  fr: (
    <svg viewBox="0 0 3 2" width="100%" height="100%" preserveAspectRatio={PA}>
      <rect width="3" height="2" fill="#fff" />
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  ),
  // Royaume-Uni : Union Jack (simplifié)
  en: (
    <svg viewBox="0 0 60 30" width="100%" height="100%" preserveAspectRatio={PA}>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <rect x="25" width="10" height="30" fill="#fff" />
      <rect y="10" width="60" height="10" fill="#fff" />
      <rect x="27" width="6" height="30" fill="#C8102E" />
      <rect y="12" width="60" height="6" fill="#C8102E" />
    </svg>
  ),
  // Tunisie : rouge, disque blanc, croissant + étoile rouges
  ar: (
    <svg viewBox="0 0 60 40" width="100%" height="100%" preserveAspectRatio={PA}>
      <rect width="60" height="40" fill="#E70013" />
      <circle cx="30" cy="20" r="11" fill="#fff" />
      <circle cx="32.5" cy="20" r="8.5" fill="#E70013" />
      <path d="M31,15.2 L32.12,18.46 L35.56,18.52 L32.81,20.59 L33.82,23.88 L31,21.9 L28.18,23.88 L29.19,20.59 L26.44,18.52 L29.88,18.46 Z" fill="#E70013" />
    </svg>
  ),
}
const CODES: Record<string, string> = { fr: 'FR', en: 'EN', ar: 'AR' }

export default function LanguageSwitcher({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  const pathname = usePathname() || '/'
  const parts = pathname.split('/')
  const hasLoc = (locales as readonly string[]).includes(parts[1])
  const cur = hasLoc ? parts[1] : defaultLocale
  const rest = hasLoc ? '/' + parts.slice(2).join('/') : pathname
  const base = rest === '/' ? '' : rest
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {locales.map((l) => {
        const active = l === cur
        const txt = active
          ? (dark ? 'text-white' : 'text-clinic-green')
          : (dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-700')
        return (
          <NextLink
            key={l}
            href={`/${l}${base}`}
            aria-label={CODES[l]}
            aria-current={active ? 'true' : undefined}
            className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded transition ${txt}`}
          >
            <span
              className={`w-5 h-[14px] rounded-[2px] overflow-hidden inline-block shadow-sm ring-1 ${active ? (dark ? 'ring-white/70' : 'ring-clinic-green/50') : 'ring-black/10'} ${active ? 'opacity-100' : 'opacity-80'}`}
            >
              {FLAGS[l]}
            </span>
            <span className="text-xs font-bold uppercase leading-none">{CODES[l]}</span>
          </NextLink>
        )
      })}
    </div>
  )
}
