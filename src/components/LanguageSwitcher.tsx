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
  // Tunisie : rouge, DISQUE blanc, croissant + étoile ROUGES à l'intérieur
  ar: (
    <svg viewBox="0 0 60 40" width="100%" height="100%" preserveAspectRatio={PA}>
      <rect width="60" height="40" fill="#E70013" />
      <circle cx="30" cy="20" r="11" fill="#fff" />
      <circle cx="31" cy="20" r="7.5" fill="#E70013" />
      <circle cx="34" cy="20" r="6" fill="#fff" />
      <path d="M34.5,17 L35.21,19.03 L37.35,19.07 L35.64,20.37 L36.26,22.43 L34.5,21.2 L32.74,22.43 L33.36,20.37 L31.65,19.07 L33.79,19.03 Z" fill="#E70013" />
    </svg>
  ),
}
const CODES: Record<string, string> = { fr: 'FR', en: 'EN', ar: 'AR' }

export default function LanguageSwitcher({ className = '', dark = false, compact = false }: { className?: string; dark?: boolean; compact?: boolean }) {
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
            {!compact && <span className="text-xs font-bold uppercase leading-none">{CODES[l]}</span>}
          </NextLink>
        )
      })}
    </div>
  )
}
