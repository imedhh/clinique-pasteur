import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, Phone, Clock, AlertTriangle, FileText, Stethoscope, ClipboardList, Timer, ShieldCheck } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'

const centreImages: Record<string, string> = {
  'radiologie': '/images/radiologie-irm.webp',
  'endoscopie': '/images/endoscopie-salle.webp',
  'urgences': '/images/ambulance.webp',
  'explorations-cardiaques': '/images/cardio-ecg.webp',
  'explorations-neurophysiologiques': '/images/neuro-eeg.webp',
  'explorations-urodynamiques': '/images/urodynamique.webp',
  'hospitalisation-jour': '/images/h4.webp',
  'coaching-nutritionnel-esthetique': '/images/nutrition.webp',
}

export function generateStaticParams() {
  const { examsByCentre } = getContent('fr')
  return locales.flatMap((locale) => {
    const params: { locale: string; slug: string; exam: string }[] = []
    for (const [slug, exams] of Object.entries(examsByCentre)) {
      for (const exam of exams as any[]) {
        params.push({ locale, slug, exam: exam.slug })
      }
    }
    return params
  })
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string; exam: string } }): Promise<Metadata> {
  const { centres, examsByCentre } = getContent(params.locale as any)
  const exams = examsByCentre[params.slug]
  const exam = exams?.find((e: any) => e.slug === params.exam)
  if (!exam) return {}
  const centre = centres.find((c) => c.slug === params.slug)
  return {
    title: `${exam.title} | ${centre?.shortTitle || 'Centre'}`,
    description: exam.description,
  }
}

export default function CentreExamPage({ params }: { params: { locale: string; slug: string; exam: string } }) {
  const UI = {
    fr: {
      breadcrumbCentres: 'Centres',
      requestQuote: 'Demander un Devis',
      whatIsIt: 'Qu’est-ce que c’est ?',
      whenIndicated: 'Quand est-il indiqué ?',
      preparation: 'Préparation',
      procedure: 'Déroulement',
      duration: 'Durée',
      results: 'Résultats',
      risks: 'Risques et effets secondaires',
      risksNote: 'Ces risques restent rares. Votre médecin vous informera en détail avant l’examen.',
      bookAppointment: 'Prendre Rendez-vous',
      contactUs: 'Contactez-nous pour planifier votre examen ou obtenir un devis.',
      atAGlance: 'En bref',
      durationLabel: 'Durée :',
      preparationLabel: 'Préparation :',
      required: 'Requise',
      nonInvasive: 'Examen non invasif',
      otherExams: 'Autres examens',
      allServices: 'Tous les services',
    },
    en: {
      breadcrumbCentres: 'Centres',
      requestQuote: 'Request a Quote',
      whatIsIt: 'What is it?',
      whenIndicated: 'When is it indicated?',
      preparation: 'Preparation',
      procedure: 'Procedure',
      duration: 'Duration',
      results: 'Results',
      risks: 'Risks and side effects',
      risksNote: 'These risks remain rare. Your physician will inform you in detail before the examination.',
      bookAppointment: 'Book an Appointment',
      contactUs: 'Contact us to schedule your examination or request a quote.',
      atAGlance: 'At a glance',
      durationLabel: 'Duration:',
      preparationLabel: 'Preparation:',
      required: 'Required',
      nonInvasive: 'Non-invasive examination',
      otherExams: 'Other examinations',
      allServices: 'All services',
    },
    ar: {
      breadcrumbCentres: 'المراكز',
      requestQuote: 'طلب عرض أسعار',
      whatIsIt: 'ما هو هذا الفحص؟',
      whenIndicated: 'متى يُوصى به؟',
      preparation: 'التحضير',
      procedure: 'سير الفحص',
      duration: 'المدة',
      results: 'النتائج',
      risks: 'المخاطر والآثار الجانبية',
      risksNote: 'تبقى هذه المخاطر نادرة، وسيقدّم لكم طبيبكم شرحاً مفصّلاً قبل الفحص.',
      bookAppointment: 'حجز موعد',
      contactUs: 'اتصلوا بنا لتحديد موعد الفحص أو الحصول على عرض أسعار.',
      atAGlance: 'باختصار',
      durationLabel: 'المدة:',
      preparationLabel: 'التحضير:',
      required: 'مطلوب',
      nonInvasive: 'فحص غير باضع',
      otherExams: 'فحوصات أخرى',
      allServices: 'جميع الخدمات',
    },
  } as const
  const t = (UI as any)[params.locale] || UI.fr

  const { centres, clinicInfo, examsByCentre } = getContent(params.locale as any)
  const exams = examsByCentre[params.slug]
  if (!exams) notFound()
  const exam = exams.find((e: any) => e.slug === params.exam)
  if (!exam) notFound()

  const centre = centres.find((c) => c.slug === params.slug)
  if (!centre) notFound()

  const otherExams = exams.filter((e: any) => e.slug !== params.exam).slice(0, 5)
  const heroImage = exam.image || centreImages[params.slug] || '/images/surgery-modern.webp'

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={exam.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/88" />
        </div>
        <div className="container-custom px-4 relative">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 flex-wrap">
            <Link href="/centres" className="hover:text-white transition">{t.breadcrumbCentres}</Link>
            <span>/</span>
            <Link href={`/centres/${params.slug}`} className="hover:text-white transition">{centre.shortTitle}</Link>
            <span>/</span>
            <span className="text-clinic-gold">{exam.shortTitle}</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">{exam.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">{exam.description}</p>
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

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  {t.whatIsIt}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                  {exam.fullDescription}
                </div>
              </div>

              <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="relative aspect-[16/9]">
                  <Image src={heroImage} alt={exam.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
                </div>
              </figure>

              {exam.indications && exam.indications.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    {t.whenIndicated}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exam.indications.map((ind: any) => {
                      const label = typeof ind === 'string' ? ind : ind.label
                      const explication = typeof ind === 'string' ? null : ind.explication
                      return (
                        <div key={label} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-gray-800 text-sm font-semibold">{label}</span>
                            {explication && <p className="text-gray-600 text-sm mt-1 leading-relaxed">{explication}</p>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {exam.preparation && exam.preparation.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-white" />
                    </div>
                    {t.preparation}
                  </h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <div className="space-y-3">
                      {exam.preparation.map((prep: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                          <span className="text-gray-700 text-sm">{prep}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {exam.deroulement && exam.deroulement.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                      <Timer className="w-5 h-5 text-white" />
                    </div>
                    {t.procedure}
                  </h2>
                  <div className="space-y-4">
                    {exam.deroulement.map((step: string, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full gradient-green text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                          {i < exam.deroulement.length - 1 && <div className="w-0.5 flex-grow bg-green-200 mt-2" />}
                        </div>
                        <div className="pb-6"><p className="text-gray-700">{step}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {exam.duree && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-clinic-green" />
                      <h3 className="font-heading font-bold text-gray-900">{t.duration}</h3>
                    </div>
                    <p className="text-gray-700">{exam.duree}</p>
                  </div>
                )}
                {exam.resultats && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-6 h-6 text-clinic-green" />
                      <h3 className="font-heading font-bold text-gray-900">{t.results}</h3>
                    </div>
                    <p className="text-gray-700">{exam.resultats}</p>
                  </div>
                )}
              </div>

              {exam.risques && exam.risques.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    {t.risks}
                  </h2>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="space-y-2">
                      {exam.risques.map((risque: string) => (
                        <div key={risque} className="flex items-start gap-3">
                          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm">{risque}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs mt-4 italic">
                      {t.risksNote}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{t.bookAppointment}</h3>
                  <p className="text-gray-600 text-sm mb-6">{t.contactUs}</p>
                  <Link href="/devis" className="btn-primary w-full text-center mb-3">
                    {t.requestQuote} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="btn-secondary w-full text-center text-sm">
                    <Phone className="w-4 h-4 mr-2" /> <span dir="ltr">{clinicInfo.phone}</span>
                  </a>
                </div>

                {exam.duree && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-heading font-bold text-gray-900 mb-4">{t.atAGlance}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-clinic-green" />
                        <div><span className="text-gray-500">{t.durationLabel}</span> <strong>{exam.duree}</strong></div>
                      </div>
                      {exam.preparation && exam.preparation.length > 0 && (
                        <div className="flex items-center gap-3">
                          <ClipboardList className="w-5 h-5 text-clinic-green" />
                          <div><span className="text-gray-500">{t.preparationLabel}</span> <strong>{t.required}</strong></div>
                        </div>
                      )}
                      {exam.risques && exam.risques.length === 0 && (
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="w-5 h-5 text-clinic-green" />
                          <div><strong>{t.nonInvasive}</strong></div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">{t.otherExams}</h3>
                  <div className="space-y-2">
                    {otherExams.map((e: any) => (
                      <Link key={e.slug} href={`/centres/${params.slug}/${e.slug}`} className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition text-sm">
                        <span className="font-semibold text-gray-900">{e.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href={`/centres/${params.slug}`} className="text-clinic-green font-semibold text-sm flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                    {t.allServices} <ArrowRight className="w-4 h-4" />
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
