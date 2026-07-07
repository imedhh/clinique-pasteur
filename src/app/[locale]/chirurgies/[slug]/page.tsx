import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, Phone, ArrowLeft, Shield, Stethoscope, Award, ChevronRight, Clock } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'

const UI = {
  fr: {
    metaChirurgie: 'Chirurgie',
    allChirurgies: 'Toutes les chirurgies',
    requestQuote: 'Demander un Devis',
    prestationsTitle: 'Prestations & Interventions',
    clickIntervention: 'Cliquez sur une intervention pour en savoir plus : description, indications, déroulement, récupération.',
    equipementsTitle: 'Équipements & Technologies',
    whyChooseUs: 'Pourquoi nous choisir ?',
    quoteCardText: 'Obtenez un devis gratuit et personnalisé pour votre intervention sous 24-48h.',
    freeQuote: 'Devis Gratuit',
    callUs: 'Appelez-nous',
    otherSpecialties: 'Autres Spécialités',
  },
  en: {
    metaChirurgie: 'Surgery',
    allChirurgies: 'All surgeries',
    requestQuote: 'Request a Quote',
    prestationsTitle: 'Services & Procedures',
    clickIntervention: 'Click on a procedure to learn more: description, indications, how it works, recovery.',
    equipementsTitle: 'Equipment & Technologies',
    whyChooseUs: 'Why choose us?',
    quoteCardText: 'Get a free, personalized quote for your procedure within 24-48h.',
    freeQuote: 'Free Quote',
    callUs: 'Call us',
    otherSpecialties: 'Other Specialties',
  },
  ar: {
    metaChirurgie: 'جراحة',
    allChirurgies: 'جميع الجراحات',
    requestQuote: 'طلب عرض أسعار',
    prestationsTitle: 'الخدمات والتدخلات الجراحية',
    clickIntervention: 'انقر على تدخل جراحي لمعرفة المزيد: الوصف، دواعي الإجراء، سير العملية، فترة التعافي.',
    equipementsTitle: 'المعدات والتقنيات',
    whyChooseUs: 'لماذا تختارنا؟',
    quoteCardText: 'احصل على عرض أسعار مجاني ومخصص لتدخلك الجراحي خلال 24 إلى 48 ساعة.',
    freeQuote: 'عرض أسعار مجاني',
    callUs: 'اتصل بنا',
    otherSpecialties: 'تخصصات أخرى',
  },
} as const

export function generateStaticParams() {
  const { chirurgies } = getContent('fr')
  return locales.flatMap((locale) => chirurgies.map((c) => ({ locale, slug: c.slug })))
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const { chirurgies } = getContent(params.locale as any)
  const chir = chirurgies.find((c) => c.slug === params.slug)
  if (!chir) return {}
  const t = (UI as any)[params.locale] || UI.fr
  return {
    title: `${chir.title} - ${t.metaChirurgie}`,
    description: `${chir.heroDescription.substring(0, 155)}...`,
    openGraph: {
      title: `${chir.title} | Clinique Pasteur Tunis`,
      description: chir.description,
    },
  }
}

export default function ChirurgiePage({ params }: { params: { locale: string; slug: string } }) {
  const t = (UI as any)[params.locale] || UI.fr
  const { chirurgies, clinicInfo, prestationsByChirurgie } = getContent(params.locale as any)
  const chir = chirurgies.find((c) => c.slug === params.slug)
  if (!chir) notFound()

  const otherChirurgies = chirurgies.filter((c) => c.slug !== params.slug).slice(0, 4)
  const prestationsDetail = prestationsByChirurgie[params.slug] || []
  const hasDetailedPrestations = prestationsDetail.length > 0
  const heroImage = prestationsDetail[0]?.image || '/images/surgery-modern.webp'

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={chir.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/88" />
        </div>
        <div className="container-custom px-4 relative">
          <Link href="/chirurgies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> {t.allChirurgies}
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">{chir.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{chir.heroDescription}</p>
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

      {/* Prestations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">{t.prestationsTitle}</h2>
                </div>
                {hasDetailedPrestations ? (
                  <>
                    <p className="text-gray-500 mb-6 -mt-2">{t.clickIntervention}</p>
                    <div className="grid gap-4">
                      {prestationsDetail.map((p: any) => (
                        <Link
                          key={p.slug}
                          href={`/chirurgies/${params.slug}/${p.slug}`}
                          className="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-clinic-green hover:bg-green-50 hover:shadow-md transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="font-semibold text-gray-900 group-hover:text-clinic-green transition">{p.title}</h3>
                            <p className="text-gray-500 text-sm mt-1 line-clamp-2">{p.description}</p>
                            {p.duree && (
                              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                                <Clock className="w-3.5 h-3.5" /> {p.duree}
                              </div>
                            )}
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-clinic-green flex-shrink-0 mt-2 transition" />
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="grid md:grid-cols-2 gap-3">
                    {chir.prestations.map((p) => (
                      <div key={p} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {chir.equipements && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-gray-900">{t.equipementsTitle}</h2>
                  </div>
                  <div className="space-y-3">
                    {chir.equipements.map((e) => (
                      <div key={e} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                        <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {chir.avantages && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-gray-900">{t.whyChooseUs}</h2>
                  </div>
                  <div className="space-y-3">
                    {chir.avantages.map((a) => (
                      <div key={a} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-clinic-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{t.requestQuote}</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {t.quoteCardText}
                  </p>
                  <Link href="/devis" className="btn-primary w-full text-center mb-3">
                    {t.freeQuote} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="btn-secondary w-full text-center text-sm">
                    <Phone className="w-4 h-4 mr-2" /> {t.callUs}
                  </a>
                </div>

                {/* Other specialties */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">{t.otherSpecialties}</h3>
                  <div className="space-y-3">
                    {otherChirurgies.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/chirurgies/${c.slug}`}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition text-sm"
                      >
                        <span className="font-semibold text-gray-900 hover:text-clinic-green">{c.shortTitle}</span>
                        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{c.description}</p>
                      </Link>
                    ))}
                  </div>
                  <Link href="/chirurgies" className="text-clinic-green font-semibold text-sm flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                    {t.allChirurgies} <ArrowRight className="w-4 h-4" />
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
