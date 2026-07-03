import { MetadataRoute } from 'next'
import { chirurgies, centres, explorations } from '@/lib/data'
import { examsByExploration, examsByCentre } from '@/lib/examens-index'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cptunis.com'
  const now = new Date()

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/la-clinique`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/chirurgies`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/explorations`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/centres`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/hospitalisation`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/devis`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const chirurgiePages = chirurgies.map((c) => ({
    url: `${baseUrl}/chirurgies/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const explorationPages = explorations.map((e) => ({
    url: `${baseUrl}/explorations/${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const centrePages = centres.map((c) => ({
    url: `${baseUrl}/centres/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Pages examens détaillées (longue traîne SEO)
  const explorationExamPages = Object.entries(examsByExploration).flatMap(([slug, exams]) =>
    exams.map((ex) => ({
      url: `${baseUrl}/explorations/${slug}/${ex.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const centreExamPages = Object.entries(examsByCentre).flatMap(([slug, exams]) =>
    exams.map((ex) => ({
      url: `${baseUrl}/centres/${slug}/${ex.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return [
    ...staticPages,
    ...chirurgiePages,
    ...explorationPages,
    ...centrePages,
    ...explorationExamPages,
    ...centreExamPages,
  ]
}
