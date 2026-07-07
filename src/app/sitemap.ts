import { MetadataRoute } from 'next'
import { getContent } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'

const baseUrl = 'https://cptunis.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const { chirurgies, centres, explorations, examsByExploration, examsByCentre, prestationsByChirurgie } = getContent('fr')

  // chemins sans préfixe de langue + priorité
  const paths: { path: string; priority: number; freq: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/la-clinique', priority: 0.9, freq: 'monthly' },
    { path: '/chirurgies', priority: 0.9, freq: 'weekly' },
    { path: '/explorations', priority: 0.9, freq: 'weekly' },
    { path: '/centres', priority: 0.9, freq: 'weekly' },
    { path: '/hospitalisation', priority: 0.8, freq: 'monthly' },
    { path: '/devis', priority: 0.95, freq: 'monthly' },
    { path: '/contact', priority: 0.8, freq: 'monthly' },
    { path: '/mentions-legales', priority: 0.3, freq: 'monthly' },
    { path: '/politique-confidentialite', priority: 0.3, freq: 'monthly' },
  ]
  for (const c of chirurgies) paths.push({ path: `/chirurgies/${c.slug}`, priority: 0.85, freq: 'monthly' })
  for (const e of explorations) paths.push({ path: `/explorations/${e.slug}`, priority: 0.8, freq: 'monthly' })
  for (const c of centres) paths.push({ path: `/centres/${c.slug}`, priority: 0.8, freq: 'monthly' })
  for (const [slug, exams] of Object.entries(examsByExploration)) for (const ex of exams as any[]) paths.push({ path: `/explorations/${slug}/${ex.slug}`, priority: 0.7, freq: 'monthly' })
  for (const [slug, exams] of Object.entries(examsByCentre)) for (const ex of exams as any[]) paths.push({ path: `/centres/${slug}/${ex.slug}`, priority: 0.7, freq: 'monthly' })
  for (const [slug, prestations] of Object.entries(prestationsByChirurgie)) for (const p of prestations as any[]) paths.push({ path: `/chirurgies/${slug}/${p.slug}`, priority: 0.7, freq: 'monthly' })

  return paths.flatMap(({ path, priority, freq }) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${path}`])),
      },
    }))
  )
}
