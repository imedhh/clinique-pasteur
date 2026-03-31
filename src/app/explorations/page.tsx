import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Stethoscope } from 'lucide-react'
import { explorations, clinicInfo } from '@/lib/data'

export const metadata = {
  title: 'Nos Explorations Médicales',
  description: 'Découvrez les explorations médicales de la Clinique Pasteur Tunis : explorations cardiaques, neurophysiologiques, ophtalmologiques et urodynamiques.',
}

const explorationImages: Record<string, string> = {
  'explorations-cardiaques': '/images/reanimation.jpeg',
  'explorations-neurophysiologiques': '/images/surgery-blue-4.jpg',
  'explorations-ophtalmologiques': '/images/ophtalmo.jpg',
  'explorations-urodynamiques': '/images/urodynamique.jpeg',
}

export default function ExplorationsPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/surgery-modern.jpg" alt="Explorations" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/90" />
        </div>
        <div className="container-custom px-4 relative">
          <span className="text-clinic-gold font-semibold uppercase tracking-wider text-sm">Diagnostic</span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">Nos Explorations Médicales</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Des centres d&apos;explorations spécialisés équipés de technologies de pointe pour un diagnostic précis et une prise en charge optimale.
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
                    src={explorationImages[exploration.slug] || '/images/surgery-modern.jpg'}
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
                        +{exploration.services.length - 4} autres
                      </span>
                    )}
                  </div>
                  <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic-building.jpg" alt="Clinique" fill className="object-cover" />
          <div className="absolute inset-0 bg-clinic-green/90" />
        </div>
        <div className="container-custom relative text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">Besoin d&apos;une exploration ?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis ou prendre rendez-vous pour vos explorations médicales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-gold">
              Demander un Devis <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              Appeler le {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
