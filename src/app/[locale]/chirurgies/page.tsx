import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { ArrowRight, Stethoscope, Heart, Brain, Sparkles, Activity, Baby, Shield } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'

export const metadata: Metadata = {
  title: 'Nos Chirurgies et Spécialités',
  description: 'Découvrez les spécialités chirurgicales de la Clinique Pasteur Tunis : cardiovasculaire, bariatrique, esthétique, orthopédique, neurochirurgie et plus.',
}

const UI = {
  fr: {
    badge: 'Spécialités',
    title: 'Nos Chirurgies et Spécialités',
    subtitle: 'Des spécialités chirurgicales avec des équipes médicales chevronnées, des blocs opératoires de dernière technologie et une prise en charge personnalisée.',
    learnMore: 'En savoir plus',
    ctaTitle: 'Besoin d’un devis pour une intervention ?',
    ctaText: 'Notre équipe vous répond sous 24-48h avec un devis détaillé et personnalisé.',
    ctaButton: 'Demander un Devis Gratuit',
  },
  en: {
    badge: 'Specialties',
    title: 'Our Surgeries and Specialties',
    subtitle: 'Surgical specialties with seasoned medical teams, state-of-the-art operating theatres and personalised care.',
    learnMore: 'Learn more',
    ctaTitle: 'Need a quote for a procedure?',
    ctaText: 'Our team responds within 24-48 hours with a detailed, personalised quote.',
    ctaButton: 'Request a Free Quote',
  },
  ar: {
    badge: 'التخصصات',
    title: 'جراحاتنا وتخصصاتنا',
    subtitle: 'تخصصات جراحية بفرق طبية ذات خبرة عالية، وقاعات عمليات مجهزة بأحدث التقنيات، ورعاية شخصية متكاملة.',
    learnMore: 'اعرف المزيد',
    ctaTitle: 'هل تحتاجون إلى عرض سعر لعملية جراحية؟',
    ctaText: 'يرد فريقنا خلال 24-48 ساعة بعرض سعر مفصل وشخصي.',
    ctaButton: 'اطلبوا عرض سعر مجانيًا',
  },
} as const

export default function ChirurgiesPage({ params }: { params: { locale: string } }) {
  const t = (UI as any)[params.locale] || UI.fr
  const { chirurgies, prestationsByChirurgie } = getContent(params.locale as any)
  const iconMap: Record<string, any> = { Heart, Stethoscope, Activity, Sparkles, Brain, Baby, Shield }

  return (
    <>
      <section className="relative py-20 gradient-dark text-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">{t.badge}</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">{t.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chirurgies.map((chir) => {
              const Icon = iconMap[chir.icon] || Stethoscope
              return (
                <Link
                  key={chir.slug}
                  href={`/chirurgies/${chir.slug}`}
                  className="bg-white rounded-2xl shadow-md card-hover group border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={prestationsByChirurgie[chir.slug]?.[0]?.image || '/images/surgery-modern.webp'}
                      alt={chir.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 w-11 h-11 rounded-xl gradient-green flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-clinic-green transition">
                      {chir.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{chir.description}</p>
                    <ul className="space-y-1 mb-4">
                      {chir.prestations.slice(0, 4).map((p) => (
                        <li key={p} className="text-gray-500 text-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-clinic-green flex-shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                    <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.learnMore} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t.ctaTitle}</h2>
          <p className="text-gray-600 text-lg mb-8">
            {t.ctaText}
          </p>
          <Link href="/devis" className="btn-primary text-lg">
            {t.ctaButton} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
