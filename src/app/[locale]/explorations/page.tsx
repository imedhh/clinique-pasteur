import Link from '@/components/I18nLink'
import Image from 'next/image'
import { ArrowRight, Stethoscope } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const M: any = {
    fr: { title: 'Nos Explorations Médicales', description: 'Découvrez les explorations médicales de la Clinique Pasteur Tunis : explorations cardiaques, neurophysiologiques, et urodynamiques.' },
    en: { title: 'Our Medical Investigations', description: 'Discover the medical investigations at Clinique Pasteur Tunis: cardiac, neurophysiological, and urodynamic.' },
    ar: { title: 'استكشافاتنا الطبية', description: 'اكتشف الاستكشافات الطبية في عيادة باستور تونس: القلبية، الفيزيولوجية العصبية، وديناميكا البول.' },
  }
  return M[params.locale] || M.fr
}

const explorationImages: Record<string, string> = {
  'explorations-cardiaques': '/images/fiches/home-explo-cardiaque.webp',
  'explorations-neurophysiologiques': '/images/fiches/home-explo-neuro.webp',
  'explorations-urodynamiques': '/images/fiches/home-explo-urodynamique.webp',
}

const UI = {
  fr: {
    badge: 'Diagnostic',
    title: 'Nos Explorations Médicales',
    subtitle: 'Des centres d’explorations spécialisés équipés de technologies de pointe pour un diagnostic précis et une prise en charge optimale.',
    heroAlt: 'Explorations médicales',
    others: 'autres',
    learnMore: 'En savoir plus',
    clinicAlt: 'Clinique',
    ctaTitle: 'Besoin d’une exploration ?',
    ctaText: 'Contactez-nous pour obtenir un devis ou prendre rendez-vous pour vos explorations médicales.',
    ctaQuote: 'Demander un Devis',
    call: 'Appeler le',
  },
  en: {
    badge: 'Diagnostics',
    title: 'Our Medical Explorations',
    subtitle: 'Specialised exploration centres equipped with cutting-edge technologies for accurate diagnosis and optimal care.',
    heroAlt: 'Medical explorations',
    others: 'more',
    learnMore: 'Learn more',
    clinicAlt: 'Clinic',
    ctaTitle: 'Need an examination?',
    ctaText: 'Contact us to get a quote or book an appointment for your medical examinations.',
    ctaQuote: 'Request a Quote',
    call: 'Call',
  },
  ar: {
    badge: 'التشخيص',
    title: 'استكشافاتنا الطبية',
    subtitle: 'مراكز استكشافات متخصصة مجهزة بتقنيات متطورة لتشخيص دقيق ورعاية مثلى.',
    heroAlt: 'استكشافات طبية',
    others: 'أخرى',
    learnMore: 'اعرف المزيد',
    clinicAlt: 'المصحة',
    ctaTitle: 'هل تحتاجون إلى فحص استكشافي؟',
    ctaText: 'اتصلوا بنا للحصول على عرض سعر أو لحجز موعد لفحوصاتكم الطبية.',
    ctaQuote: 'اطلبوا عرض سعر',
    call: 'اتصلوا على',
  },
} as const

export default function ExplorationsPage({ params }: { params: { locale: string } }) {
  const t = (UI as any)[params.locale] || UI.fr
  const { explorations, clinicInfo } = getContent(params.locale as any)
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/consultation.webp" alt={t.heroAlt} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/90" />
        </div>
        <div className="container-custom px-4 relative">
          <span className="text-clinic-gold font-semibold uppercase tracking-wider text-sm">{t.badge}</span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {explorations.map((exploration) => (
              <Link
                key={exploration.slug}
                href={`/explorations/${exploration.slug}`}
                className="group block bg-white rounded-2xl border border-gray-200 hover:border-clinic-green hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={explorationImages[exploration.slug] || '/images/surgery-modern.webp'}
                    alt={exploration.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h2 className="absolute bottom-4 left-6 text-2xl font-heading font-bold text-white">
                    {exploration.title}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">{exploration.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exploration.services.slice(0, 4).map((service: string) => (
                      <span key={service} className="text-xs bg-green-50 text-clinic-green px-3 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                    {exploration.services.length > 4 && (
                      <span className="text-xs bg-clinic-green text-white px-3 py-1 rounded-full font-semibold">
                        +{exploration.services.length - 4} {t.others}
                      </span>
                    )}
                  </div>
                  <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.learnMore} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic-building.webp" alt={t.clinicAlt} fill className="object-cover" />
          <div className="absolute inset-0 bg-clinic-green/90" />
        </div>
        <div className="container-custom relative text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-gold">
              {t.ctaQuote} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              {t.call} <span dir="ltr">{clinicInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
