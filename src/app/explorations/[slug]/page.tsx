import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Stethoscope } from 'lucide-react'
import { explorations, clinicInfo } from '@/lib/data'

export async function generateStaticParams() {
  return explorations.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const exploration = explorations.find((e) => e.slug === params.slug)
  if (!exploration) return {}
  return {
    title: `${exploration.title}`,
    description: `${exploration.fullDescription?.substring(0, 155)}...`,
  }
}

export default function ExplorationPage({ params }: { params: { slug: string } }) {
  const exploration = explorations.find((e) => e.slug === params.slug)
  if (!exploration) notFound()

  const otherExplorations = explorations.filter((e) => e.slug !== params.slug)

  return (
    <>
      <section className="relative py-20 gradient-dark text-white">
        <div className="container-custom px-4">
          <Link href="/explorations" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Toutes les explorations
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">{exploration.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{exploration.fullDescription}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">Services & Examens</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {exploration.services.map((s) => (
                  <div key={s} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Prendre Rendez-vous</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Contactez-nous pour planifier votre exploration ou obtenir un devis personnalisé.
                  </p>
                  <Link href="/devis" className="btn-primary w-full text-center mb-3">
                    Demander un Devis <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a href={`tel:${clinicInfo.phone}`} className="btn-secondary w-full text-center text-sm">
                    <Phone className="w-4 h-4 mr-2" /> {clinicInfo.phone}
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">Autres Explorations</h3>
                  <div className="space-y-3">
                    {otherExplorations.map((e) => (
                      <Link key={e.slug} href={`/explorations/${e.slug}`} className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition text-sm">
                        <span className="font-semibold text-gray-900">{e.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/explorations" className="text-clinic-green font-semibold text-sm flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                    Toutes les explorations <ArrowRight className="w-4 h-4" />
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
