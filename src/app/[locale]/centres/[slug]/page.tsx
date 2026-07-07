import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Clock, ChevronRight } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'

const centreImages: Record<string, string> = {
  'radiologie': '/images/radiologie-irm.webp',
  'endoscopie': '/images/endoscopie-salle.webp',
  'urgences': '/images/ambulance.webp',
  'explorations-cardiaques': '/images/fiches/home-explo-cardiaque.webp',
  'cardiologie-interventionnelle': '/images/fiches/cardio-coronarographie.webp',
  'explorations-neurophysiologiques': '/images/fiches/home-explo-neuro.webp',
  'explorations-urodynamiques': '/images/fiches/home-explo-urodynamique.webp',
  'hospitalisation-jour': '/images/h4.webp',
  'coaching-nutritionnel-esthetique': '/images/nutrition.webp',
}

const UI = {
  fr: {
    allCentres: 'Tous les centres',
    requestQuote: 'Demander un Devis',
    servicesTitle: 'Services & Examens',
    clickExam: 'Cliquez sur un service ou un examen pour en savoir plus : description, préparation, déroulement, durée.',
    bookAppointment: 'Prendre Rendez-vous',
    contactText: 'Contactez-nous pour planifier votre consultation ou examen.',
    otherCentres: 'Autres Centres',
  },
  en: {
    allCentres: 'All centers',
    requestQuote: 'Request a Quote',
    servicesTitle: 'Services & Examinations',
    clickExam: 'Click on a service or an examination to learn more: description, preparation, how it works, duration.',
    bookAppointment: 'Book an Appointment',
    contactText: 'Contact us to schedule your consultation or examination.',
    otherCentres: 'Other Centers',
  },
  ar: {
    allCentres: 'جميع المراكز',
    requestQuote: 'طلب عرض أسعار',
    servicesTitle: 'الخدمات والفحوصات',
    clickExam: 'انقر على خدمة أو فحص لمعرفة المزيد: الوصف، التحضير، سير الفحص، المدة.',
    bookAppointment: 'حجز موعد',
    contactText: 'اتصل بنا لتحديد موعد الاستشارة أو الفحص.',
    otherCentres: 'مراكز أخرى',
  },
} as const

export function generateStaticParams() {
  const { centres } = getContent('fr')
  return locales.flatMap((locale) => centres.map((c) => ({ locale, slug: c.slug })))
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const { centres } = getContent(params.locale as any)
  const centre = centres.find((c) => c.slug === params.slug)
  if (!centre) return {}
  return {
    title: `${centre.title}`,
    description: `${centre.fullDescription?.substring(0, 155)}...`,
  }
}

export default function CentrePage({ params }: { params: { locale: string; slug: string } }) {
  const t = (UI as any)[params.locale] || UI.fr
  const { centres, clinicInfo, examsByCentre } = getContent(params.locale as any)
  const centre = centres.find((c) => c.slug === params.slug)
  if (!centre) notFound()

  const otherCentres = centres.filter((c) => c.slug !== params.slug).slice(0, 4)
  const exams = examsByCentre[params.slug] || []
  const hasDetailedExams = exams.length > 0
  const heroImage = centreImages[params.slug] || '/images/surgery-modern.webp'

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={centre.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>
        <div className="container-custom px-4 relative">
          <Link href="/centres" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> {t.allCentres}
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">{centre.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{centre.fullDescription}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/devis" className="btn-gold">
              {t.requestQuote} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition font-semibold">
              <Phone className="w-5 h-5 mr-2" /> <span dir="ltr">{clinicInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">{t.servicesTitle}</h2>
              {hasDetailedExams && (
                <p className="text-gray-500 mb-8">{t.clickExam}</p>
              )}

              {hasDetailedExams ? (
                /* Clickable exam cards */
                <div className="grid gap-4">
                  {exams.map((exam: any) => (
                    <Link
                      key={exam.slug}
                      href={`/centres/${params.slug}/${exam.slug}`}
                      className="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-clinic-green hover:bg-green-50 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-clinic-green transition">{exam.title}</h3>
                        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{exam.description}</p>
                        {exam.duree && (
                          <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                            <Clock className="w-3.5 h-3.5" /> {exam.duree}
                          </div>
                        )}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-clinic-green flex-shrink-0 mt-2 transition" />
                    </Link>
                  ))}
                </div>
              ) : (
                /* Simple list for centres without detailed exams */
                <div className="grid md:grid-cols-2 gap-3 mt-6">
                  {centre.services.map((s) => (
                    <div key={s} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image src={heroImage} alt={centre.title} width={400} height={250} className="w-full h-48 object-cover" />
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{t.bookAppointment}</h3>
                  <p className="text-gray-600 text-sm mb-6">{t.contactText}</p>
                  <Link href="/devis" className="btn-primary w-full text-center mb-3">
                    {t.requestQuote} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a href={`tel:${clinicInfo.phone}`} className="btn-secondary w-full text-center text-sm">
                    <Phone className="w-4 h-4 mr-2" /> <span dir="ltr">{clinicInfo.phone}</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">{t.otherCentres}</h3>
                  <div className="space-y-3">
                    {otherCentres.map((c) => (
                      <Link key={c.slug} href={`/centres/${c.slug}`} className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition text-sm">
                        <span className="font-semibold text-gray-900">{c.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/centres" className="text-clinic-green font-semibold text-sm flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                    {t.allCentres} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
