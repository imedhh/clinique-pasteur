import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, Phone, Clock, AlertTriangle, FileText, Stethoscope, ClipboardList, Timer, ShieldCheck } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'

const chirurgieImages: Record<string, string> = {
  'chirurgie-cardiovasculaire': '/images/cardiovasculaire.webp',
  'chirurgie-generale': '/images/surgery-blue-1.webp',
  'chirurgie-orthopedique': '/images/surgery-blue-2.webp',
  'chirurgie-bariatrique': '/images/bariatrique.webp',
  'chirurgie-esthetique': '/images/esthetique.webp',
  'chirurgie-urologique': '/images/surgery-blue-3.webp',
  'chirurgie-orl': '/images/surgery-blue-4.webp',
  'neurochirurgie': '/images/neuro-bg.webp',
  'chirurgie-pediatrique': '/images/pediatrique.webp',
  'chirurgie-endoscopique': '/images/endoscopie-salle.webp',
  'chirurgie-coelioscopique': '/images/bloc-hd.webp',
  'chirurgie-carcinologique': '/images/surgery-blue-5.webp',
  'chirurgie-gyneco-obstetrique': '/images/maternite.webp',
  'electrophysiologie': '/images/cardio-ecg.webp',
}

export function generateStaticParams() {
  const { prestationsByChirurgie } = getContent('fr')
  return locales.flatMap((locale) => {
    const params: { locale: string; slug: string; prestation: string }[] = []
    for (const [slug, prestations] of Object.entries(prestationsByChirurgie)) {
      for (const p of prestations) {
        params.push({ locale, slug, prestation: p.slug })
      }
    }
    return params
  })
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string; prestation: string } }): Promise<Metadata> {
  const { chirurgies, prestationsByChirurgie } = getContent(params.locale as any)
  const prestations = prestationsByChirurgie[params.slug]
  const prestation = prestations?.find((p: any) => p.slug === params.prestation)
  if (!prestation) return {}
  const chir = chirurgies.find((c) => c.slug === params.slug)
  return {
    title: `${prestation.title} | ${chir?.shortTitle || 'Chirurgie'}`,
    description: prestation.description,
  }
}

export default function PrestationPage({ params }: { params: { locale: string; slug: string; prestation: string } }) {
  const UI = {
    fr: {
      breadcrumbChirurgies: 'Chirurgies',
      requestQuote: 'Demander un Devis',
      whatIsIt: 'Qu’est-ce que c’est ?',
      whenIndicated: 'Quand est-elle indiquée ?',
      preparation: 'Préparation',
      deroulement: 'Déroulement',
      duree: 'Durée',
      recovery: 'Suites & Récupération',
      risks: 'Risques et effets secondaires',
      risksNote: 'Ces risques restent rares. Votre chirurgien vous informera en détail avant l’intervention.',
      quoteText: 'Contactez-nous pour planifier une consultation ou obtenir un devis personnalisé.',
      atAGlance: 'En bref',
      dureeLabel: 'Durée :',
      preparationLabel: 'Préparation :',
      required: 'Requise',
      dedicatedTeam: 'Équipe spécialisée dédiée',
      otherInterventions: 'Autres interventions',
      allInterventions: 'Toutes les interventions',
    },
    en: {
      breadcrumbChirurgies: 'Surgeries',
      requestQuote: 'Request a Quote',
      whatIsIt: 'What is it?',
      whenIndicated: 'When is it indicated?',
      preparation: 'Preparation',
      deroulement: 'Procedure',
      duree: 'Duration',
      recovery: 'Aftercare & Recovery',
      risks: 'Risks and side effects',
      risksNote: 'These risks remain rare. Your surgeon will inform you in detail before the procedure.',
      quoteText: 'Contact us to schedule a consultation or receive a personalized quote.',
      atAGlance: 'At a glance',
      dureeLabel: 'Duration:',
      preparationLabel: 'Preparation:',
      required: 'Required',
      dedicatedTeam: 'Dedicated specialist team',
      otherInterventions: 'Other procedures',
      allInterventions: 'All procedures',
    },
    ar: {
      breadcrumbChirurgies: 'الجراحات',
      requestQuote: 'طلب عرض أسعار',
      whatIsIt: 'ما هي هذه العملية؟',
      whenIndicated: 'متى يُنصح بإجرائها؟',
      preparation: 'التحضير',
      deroulement: 'مراحل العملية',
      duree: 'المدة',
      recovery: 'ما بعد العملية والتعافي',
      risks: 'المخاطر والآثار الجانبية',
      risksNote: 'تبقى هذه المخاطر نادرة. سيقدّم لكم الجرّاح معلومات مفصّلة قبل العملية.',
      quoteText: 'اتصلوا بنا لتحديد موعد استشارة أو الحصول على عرض أسعار مخصّص.',
      atAGlance: 'باختصار',
      dureeLabel: 'المدة :',
      preparationLabel: 'التحضير :',
      required: 'مطلوب',
      dedicatedTeam: 'فريق طبي متخصّص',
      otherInterventions: 'عمليات أخرى',
      allInterventions: 'جميع العمليات',
    },
  } as const
  const t = (UI as any)[params.locale] || UI.fr

  const { chirurgies, clinicInfo, prestationsByChirurgie } = getContent(params.locale as any)
  const prestations = prestationsByChirurgie[params.slug]
  if (!prestations) notFound()
  const prestation = prestations.find((p: any) => p.slug === params.prestation)
  if (!prestation) notFound()

  const chir = chirurgies.find((c) => c.slug === params.slug)
  if (!chir) notFound()

  const otherPrestations = prestations.filter((p: any) => p.slug !== params.prestation).slice(0, 5)
  const heroImage = prestation.image || chirurgieImages[params.slug] || '/images/surgery-modern.webp'

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={prestation.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/88" />
        </div>
        <div className="container-custom px-4 relative">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 flex-wrap">
            <Link href="/chirurgies" className="hover:text-white transition">{t.breadcrumbChirurgies}</Link>
            <span>/</span>
            <Link href={`/chirurgies/${params.slug}`} className="hover:text-white transition">{chir.shortTitle}</Link>
            <span>/</span>
            <span className="text-clinic-gold">{prestation.shortTitle}</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">{prestation.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">{prestation.description}</p>
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
                  {prestation.fullDescription}
                </div>
              </div>

              <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="relative aspect-[16/9]">
                  <Image src={heroImage} alt={prestation.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
                </div>
              </figure>

              {prestation.indications && prestation.indications.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    {t.whenIndicated}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {prestation.indications.map((ind: any) => {
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

              {prestation.preparation && prestation.preparation.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-white" />
                    </div>
                    {t.preparation}
                  </h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <div className="space-y-3">
                      {prestation.preparation.map((prep: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                          <span className="text-gray-700 text-sm">{prep}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {prestation.deroulement && prestation.deroulement.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                      <Timer className="w-5 h-5 text-white" />
                    </div>
                    {t.deroulement}
                  </h2>
                  <div className="space-y-4">
                    {prestation.deroulement.map((step: string, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full gradient-green text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                          {i < prestation.deroulement.length - 1 && <div className="w-0.5 flex-grow bg-green-200 mt-2" />}
                        </div>
                        <div className="pb-6"><p className="text-gray-700">{step}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {prestation.duree && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-clinic-green" />
                      <h3 className="font-heading font-bold text-gray-900">{t.duree}</h3>
                    </div>
                    <p className="text-gray-700">{prestation.duree}</p>
                  </div>
                )}
                {prestation.resultats && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-6 h-6 text-clinic-green" />
                      <h3 className="font-heading font-bold text-gray-900">{t.recovery}</h3>
                    </div>
                    <p className="text-gray-700">{prestation.resultats}</p>
                  </div>
                )}
              </div>

              {prestation.risques && prestation.risques.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    {t.risks}
                  </h2>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="space-y-2">
                      {prestation.risques.map((risque: string) => (
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
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{t.requestQuote}</h3>
                  <p className="text-gray-600 text-sm mb-6">{t.quoteText}</p>
                  <Link href="/devis" className="btn-primary w-full text-center mb-3">
                    {t.requestQuote} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="btn-secondary w-full text-center text-sm">
                    <Phone className="w-4 h-4 mr-2" /> <span dir="ltr">{clinicInfo.phone}</span>
                  </a>
                </div>

                {prestation.duree && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-heading font-bold text-gray-900 mb-4">{t.atAGlance}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-clinic-green" />
                        <div><span className="text-gray-500">{t.dureeLabel}</span> <strong>{prestation.duree}</strong></div>
                      </div>
                      {prestation.preparation && prestation.preparation.length > 0 && (
                        <div className="flex items-center gap-3">
                          <ClipboardList className="w-5 h-5 text-clinic-green" />
                          <div><span className="text-gray-500">{t.preparationLabel}</span> <strong>{t.required}</strong></div>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-clinic-green" />
                        <div><strong>{t.dedicatedTeam}</strong></div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">{t.otherInterventions}</h3>
                  <div className="space-y-2">
                    {otherPrestations.map((p: any) => (
                      <Link key={p.slug} href={`/chirurgies/${params.slug}/${p.slug}`} className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition text-sm">
                        <span className="font-semibold text-gray-900">{p.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href={`/chirurgies/${params.slug}`} className="text-clinic-green font-semibold text-sm flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                    {t.allInterventions} <ArrowRight className="w-4 h-4" />
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
