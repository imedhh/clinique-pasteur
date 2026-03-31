import Link from 'next/link'
import { ArrowRight, Stethoscope } from 'lucide-react'
import { explorations, clinicInfo } from '@/lib/data'

export const metadata = {
  title: 'Nos Explorations Médicales',
  description: 'Découvrez les explorations médicales de la Clinique Pasteur Tunis : explorations cardiaques, neurophysiologiques, ophtalmologiques et urodynamiques.',
}

export default function ExplorationsPage() {
  return (
    <>
      <section className="relative py-20 gradient-dark text-white">
        <div className="container-custom px-4">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="w-8 h-8 text-clinic-green" />
            <span className="text-clinic-green font-semibold uppercase tracking-wider text-sm">Explorations</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">Nos Explorations Médicales</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            La Clinique Pasteur Tunis dispose de centres d&apos;explorations spécialisés équipés de technologies de pointe pour un diagnostic précis et une prise en charge optimale.
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
                className="group block bg-white rounded-2xl border border-gray-200 hover:border-clinic-green hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-clinic-green transition">
                    {exploration.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{exploration.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exploration.services.slice(0, 4).map((service) => (
                      <span key={service} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                    {exploration.services.length > 4 && (
                      <span className="text-xs bg-green-50 text-clinic-green px-3 py-1 rounded-full font-semibold">
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

      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Besoin d&apos;une exploration ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis personnalisé ou prendre rendez-vous pour vos explorations médicales à la Clinique Pasteur Tunis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary">
              Demander un Devis <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={`tel:${clinicInfo.phone}`} className="btn-secondary">
              Appeler le {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
