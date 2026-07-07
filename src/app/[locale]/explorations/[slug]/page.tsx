import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Clock, ChevronRight } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'

const explorationImages: Record<string, string> = {
  'explorations-cardiaques': '/images/cardio-ecg.webp',
  'explorations-neurophysiologiques': '/images/neuro-eeg.webp',
  'explorations-urodynamiques': '/images/urodynamique.webp',
}

const UI = {
  fr: {
    allExplorations: 'Toutes les explorations',
    requestQuote: 'Demander un Devis',
    examsTitle: 'Nos Examens & Explorations',
    clickExam: 'Cliquez sur un examen pour en savoir plus : description, préparation, déroulement, durée.',
    bookAppointment: 'Prendre Rendez-vous',
    contactText: 'Contactez-nous pour planifier votre exploration ou obtenir un devis personnalisé.',
    otherExplorations: 'Autres Explorations',
  },
  en: {
    allExplorations: 'All explorations',
    requestQuote: 'Request a Quote',
    examsTitle: 'Our Examinations & Explorations',
    clickExam: 'Click on an examination to learn more: description, preparation, how it works, duration.',
    bookAppointment: 'Book an Appointment',
    contactText: 'Contact us to schedule your exploration or get a personalized quote.',
    otherExplorations: 'Other Explorations',
  },
  ar: {
    allExplorations: 'جميع الاستكشافات',
    requestQuote: 'طلب عرض أسعار',
    examsTitle: 'فحوصاتنا واستكشافاتنا',
    clickExam: 'انقر على فحص لمعرفة المزيد: الوصف، التحضير، سير الفحص، المدة.',
    bookAppointment: 'حجز موعد',
    contactText: 'اتصل بنا لتحديد موعد الاستكشاف أو الحصول على عرض أسعار مخصص.',
    otherExplorations: 'استكشافات أخرى',
  },
} as const

export function generateStaticParams() {
  const { explorations } = getContent('fr')
  return locales.flatMap((locale) => explorations.map((e: any) => ({ locale, slug: e.slug })))
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const { explorations } = getContent(params.locale as any)
  const exploration = explorations.find((e: any) => e.slug === params.slug)
  if (!exploration) return {}
  return {
    title: `${exploration.title}`,
    description: `${exploration.fullDescription?.substring(0, 155)}...`,
  }
}

export default function ExplorationPage({ params }: { params: { locale: string; slug: string } }) {
  const t = (UI as any)[params.locale] || UI.fr
  const { explorations, clinicInfo, examsByExploration } = getContent(params.locale as any)
  const exploration = explorations.find((e: any) => e.slug === params.slug)
  if (!exploration) notFound()

  const otherExplorations = explorations.filter((e: any) => e.slug !== params.slug)
  const heroImage = explorationImages[params.slug] || '/images/surgery-modern.webp'
  const exams = examsByExploration[params.slug] || []

  return (
    <>
      {/* Hero with image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={exploration.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>
        <div className="container-custom px-4 relative">
          <Link href="/explorations" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> {t.allExplorations}
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">{exploration.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{exploration.fullDescription}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/devis" className="btn-gold">
              {t.requestQuote} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition font-semibold">
              <Phone className="w-5 h-5 mr-2" /> <span dir="ltr">{clinicInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">{t.examsTitle}</h2>
              <p className="text-gray-500 mb-8">{t.clickExam}</p>

              {/* Exam cards - clickable */}
              <div className="grid gap-4">
                {exams.map((exam: any) => (
                  <Link
                    key={exam.slug}
                    href={`/explorations/${params.slug}/${exam.slug}`}
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
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image src={heroImage} alt={exploration.title} width={400} height={250} className="w-full h-48 object-cover" />
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{t.bookAppointment}</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {t.contactText}
                  </p>
                  <Link href="/devis" className="btn-primary w-full text-center mb-3">
                    {t.requestQuote} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="btn-secondary w-full text-center text-sm">
                    <Phone className="w-4 h-4 mr-2" /> <span dir="ltr">{clinicInfo.phone}</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">{t.otherExplorations}</h3>
                  <div className="space-y-3">
                    {otherExplorations.map((e) => (
                      <Link key={e.slug} href={`/explorations/${e.slug}`} className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition text-sm">
                        <span className="font-semibold text-gray-900">{e.shortTitle}</span>
                        <p className="text-gray-500 text-xs mt-1">{e.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
