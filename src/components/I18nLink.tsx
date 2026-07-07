'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, defaultLocale } from '@/lib/i18n/config'

function currentLocale(pathname: string): string {
  const seg = pathname.split('/')[1]
  return (locales as readonly string[]).includes(seg) ? seg : defaultLocale
}

// Remplace next/link : préfixe automatiquement les liens internes par /<locale>.
export default function Link({ href, ...props }: any) {
  const pathname = usePathname() || '/'
  const locale = currentLocale(pathname)
  let h = href
  if (
    typeof href === 'string' &&
    href.startsWith('/') &&
    !href.startsWith('//') &&
    !href.startsWith('/api') &&
    !/^\/(fr|en|ar)(\/|$)/.test(href)
  ) {
    h = href === '/' ? `/${locale}` : `/${locale}${href}`
  }
  return <NextLink href={h} {...props} />
}
