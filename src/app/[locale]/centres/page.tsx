import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { ArrowRight, Stethoscope } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const M: any = {
    fr: { title: 'Nos Centres Médicaux', description: 'Découvrez les centres médicaux de la Clinique Pasteur Tunis : urgences, radiologie, explorations cardiaques, endoscopie, hôpital de jour et plus.' },
    en: { title: 'Our Medical Centres', description: 'Discover the medical centres of Clinique Pasteur Tunis: emergency, radiology, cardiac investigations, endoscopy, day hospital and more.' },
    ar: { title: 'مراكزنا الطبية', description: 'اكتشف المراكز الطبية لعيادة باستور تونس: الطوارئ، الأشعة، الاستكشافات القلبية، التنظير، الاستشفاء النهاري والمزيد.' },
  }
  return M[params.locale] || M.fr
}

const UI = {
  fr: {
    badge: 'Services',
    title: 'Nos Centres Médicaux',
    subtitle: 'Des centres spécialisés équipés des dernières technologies pour un diagnostic précis et un traitement optimal.',
    learnMore: 'En savoir plus',
    ctaTitle: 'Besoin d’un rendez-vous ?',
    ctaText: 'Contactez-nous pour planifier votre consultation ou examen dans l’un de nos centres spécialisés.',
    ctaQuote: 'Demander un Devis',
    ctaContact: 'Nous Contacter',
  },
  en: {
    badge: 'Services',
    title: 'Our Medical Centres',
    subtitle: 'Specialised centres equipped with the latest technologies for accurate diagnosis and optimal treatment.',
    learnMore: 'Learn more',
    ctaTitle: 'Need an appointment?',
    ctaText: 'Contact us to schedule your consultation or examination in one of our specialised centres.',
    ctaQuote: 'Request a Quote',
    ctaContact: 'Contact Us',
  },
  ar: {
    badge: 'الخدمات',
    title: 'مراكزنا الطبية',
    subtitle: 'مراكز متخصصة مجهزة بأحدث التقنيات لتشخيص دقيق وعلاج أمثل.',
    learnMore: 'اعرف المزيد',
    ctaTitle: 'هل تحتاجون إلى موعد؟',
    ctaText: 'اتصلوا بنا لتحديد موعد استشارتكم أو فحصكم في أحد مراكزنا المتخصصة.',
    ctaQuote: 'اطلبوا عرض سعر',
    ctaContact: 'اتصلوا بنا',
  },
} as const

export default function CentresPage({ params }: { params: { locale: string } }) {
  const t = (UI as any)[params.locale] || UI.fr
  const { centres, examsByCentre } = getContent(params.locale as any)
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
            {centres.map((centre) => (
              <Link
                key={centre.slug}
                href={`/centres/${centre.slug}`}
                className="bg-white rounded-2xl shadow-md card-hover group border border-gray-100 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={(centre.slug === 'explorations-cardiaques' ? '/images/fiches/home-explo-cardiaque.webp' : examsByCentre[centre.slug]?.[0]?.image) || '/images/hospital-modern.webp'}
                    alt={centre.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-xl gradient-green flex items-center justify-center shadow-lg">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-clinic-green transition">
                    {centre.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{centre.description}</p>
                  <ul className="space-y-1 mb-4">
                    {centre.services.slice(0, 4).map((s) => (
                      <li key={s} className="text-gray-500 text-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-clinic-green flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                  <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.learnMore} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t.ctaTitle}</h2>
          <p className="text-gray-600 text-lg mb-8">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary text-lg">
              {t.ctaQuote} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
