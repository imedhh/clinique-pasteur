'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, defaultLocale } from '@/lib/i18n/config'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname() || '/'
  const parts = pathname.split('/')
  const hasLoc = (locales as readonly string[]).includes(parts[1])
  const cur = hasLoc ? parts[1] : defaultLocale
  const rest = hasLoc ? '/' + parts.slice(2).join('/') : pathname
  const base = rest === '/' ? '' : rest
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {locales.map((l) => (
        <NextLink
          key={l}
          href={`/${l}${base}`}
          aria-label={l}
          className={`px-1.5 py-1 rounded uppercase text-xs font-bold transition ${l === cur ? 'text-clinic-green' : 'text-gray-400 hover:text-gray-700'}`}
        >
          {l}
        </NextLink>
      ))}
    </div>
  )
}
