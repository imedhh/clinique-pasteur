import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Shield, Heart, Users, CheckCircle2, ArrowRight, Bed, Stethoscope, Clock, Award } from 'lucide-react'
import { niveaux } from '@/lib/data'

export const metadata: Metadata = {
  title: 'La Clinique - Présentation & Infrastructure',
  description: 'Découvrez la Clinique Pasteur Tunis : 11 niveaux, 10 blocs opératoires, 79 chambres, équipements de pointe. Clinique pluridisciplinaire de référence au Centre Urbain Nord.',
}

export default function LaCliniquePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container-custom px-4 relative">
          <div className="max-w-3xl">
            <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">Qui sommes-nous</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">La Clinique Pasteur de Tunis</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Une clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis, alliant expertise médicale d&apos;excellence, équipements de dernière technologie et prise en charge personnalisée.
            </p>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Une expertise pluridisciplinaire reconnue</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  La Clinique Pasteur de Tunis est une clinique pluridisciplinaire sise au Centre Urbain Nord, voisine d&apos;un Centre Médical constitué d&apos;une trentaine de cabinets médicaux privés.
                </p>
                <p>
                  La Clinique admet ses patients d&apos;une façon personnalisée pour les orienter aux unités de soins et/ou centres d&apos;explorations concernés le plus rapidement possible et dans les meilleures conditions.
                </p>
                <p>
                  Le dossier patient est informatisé et sécurisé pour garantir le secret professionnel médical et les données personnelles des patients.
                </p>
                <p>
                  Le choix des médecins, du personnel paramédical et du reste du personnel a été fait sur la base de l&apos;excellence et le dévouement au service du patient, la Direction Générale veillant à rendre l&apos;hospitalisation du patient aussi agréable que possible.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Award, title: 'Excellence médicale', desc: 'Équipe médicale et paramédicale d\'une compétence reconnue, sélectionnée sur la base de l\'excellence.' },
                { icon: Shield, title: 'Sécurité des données', desc: 'Dossier patient informatisé et sécurisé garantissant le secret professionnel médical.' },
                { icon: Heart, title: 'Prise en charge personnalisée', desc: 'Orientation personnalisée vers les unités de soins adaptées, dans les meilleurs délais.' },
                { icon: Clock, title: 'Disponibilité 24h/24', desc: 'Urgences, réanimation et équipes médicales disponibles en permanence.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition">
                  <Icon className="w-8 h-8 text-clinic-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
              11 Niveaux d&apos;Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La Clinique s&apos;étend sur 11 niveaux, du 2ème sous-sol au 7ème étage, offrant une infrastructure complète et moderne.
            </p>
          </div>
          <div className="space-y-6">
            {niveaux.map((niveau, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-64 flex-shrink-0">
                    <span className="text-clinic-green font-semibold text-sm uppercase">{niveau.etage}</span>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mt-1">{niveau.titre}</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-4">{niveau.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {niveau.details.map((detail) => (
                        <span key={detail} className="inline-flex items-center gap-1.5 bg-green-50 text-clinic-green text-sm px-3 py-1.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="section-padding gradient-green text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">La Clinique en Chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10', label: 'Salles d\'opération', icon: Stethoscope },
              { value: '79', label: 'Chambres d\'hospitalisation', icon: Bed },
              { value: '29', label: 'Lits de réanimation', icon: Heart },
              { value: '30', label: 'Cabinets médicaux', icon: Users },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="w-10 h-10 text-clinic-gold mx-auto mb-3" />
                <div className="text-4xl font-bold mb-2">{value}</div>
                <p className="text-green-100 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Prêt à nous faire confiance ?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contactez-nous pour planifier votre consultation ou obtenir un devis personnalisé pour votre intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary text-lg">
              Demander un Devis <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
