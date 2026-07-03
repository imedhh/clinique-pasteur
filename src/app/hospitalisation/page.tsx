import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Bed, Crown, Star, Home, CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import { clinicInfo, niveaux } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Hospitalisation - Chambres & Séjour',
  description: 'Clinique Pasteur Tunis : chambres d\'hospitalisation - individuelles, confort, suites et VIP. Découvrez nos options de séjour et nos équipements.',
}

const chambres = [
  {
    type: 'Chambre Individuelle',
    nombre: 68,
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    features: ['Lit médicalisé électrique', 'Salle de bain privative', 'Télévision', 'Climatisation', 'Appel infirmier', 'WiFi'],
    description: 'Chambres confortables et fonctionnelles, équipées de tout le nécessaire pour un séjour agréable dans un environnement médical sécurisé.',
  },
  {
    type: 'Chambre Confort',
    nombre: 8,
    icon: Star,
    color: 'from-clinic-green to-clinic-darkgreen',
    features: ['Espace plus grand', 'Mobilier de qualité supérieure', 'Mini-réfrigérateur', 'Fauteuil visiteur confortable', 'Salle de bain spacieuse', 'Télévision grand écran', 'Climatisation', 'WiFi haut débit'],
    description: 'Un niveau de confort supérieur avec un espace plus grand et des équipements premium pour un séjour dans les meilleures conditions.',
  },
  {
    type: 'Suite / VIP',
    nombre: 6,
    icon: Crown,
    color: 'from-clinic-gold to-yellow-700',
    features: ['Suite spacieuse avec salon', 'Décoration soignée et haut de gamme', 'Lit premium king-size', 'Salle de bain luxueuse', 'Mini-bar', 'Télévision grand écran', 'Canapé-lit pour accompagnant', 'Service personnalisé', 'Menu repas premium', 'WiFi haut débit'],
    description: 'Le summum du confort hospitalier. Suites spacieuses avec salon privé, idéales pour les patients recherchant un séjour d\'exception.',
  },
]

export default function HospitalisationPage() {
  return (
    <>
      <section className="relative py-20 gradient-dark text-white">
        <div className="container-custom px-4">
          <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">Séjour</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Hospitalisation</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Des chambres d&apos;hospitalisation réparties sur plusieurs étages, du confort standard au luxe VIP. Chaque chambre est pensée pour le bien-être du patient et de ses proches.
          </p>
        </div>
      </section>

      {/* Types de chambres */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Nos Types de Chambres</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des chambres adaptées à chaque besoin, du séjour standard au séjour VIP haut de gamme.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {chambres.map((ch) => {
              const Icon = ch.icon
              return (
                <div key={ch.type} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 card-hover">
                  <div className={`bg-gradient-to-r ${ch.color} p-8 text-white`}>
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-heading font-bold">{ch.type}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{ch.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-4">Équipements inclus :</h4>
                    <ul className="space-y-2">
                      {ch.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-clinic-green flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Maternité */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">Maternité</span>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mt-2 mb-6">Service d&apos;Obstétrique</h2>
                <p className="text-gray-600 mb-6">
                  La maternité de la Clinique Pasteur, située en mezzanine, dispose de box d&apos;accouchement mitoyens à une salle de césarienne, avec des chambres d&apos;hospitalisation dont des chambres VIP pour un accueil chaleureux des nouvelles mamans.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Box d\'accouchement', 'Salle de césarienne', 'Chambres standard', 'Chambres VIP'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center">
                <Bed className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Chambres dédiées</h3>
                <p className="text-gray-600">à la maternité</p>
                <p className="text-sm text-gray-500 mt-2">dont des suites VIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Planifiez votre séjour</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contactez-nous pour réserver votre chambre et obtenir toutes les informations sur les tarifs et les options disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary text-lg">
              Demander un Devis <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href={`tel:${clinicInfo.phone}`} className="btn-secondary text-lg">
              <Phone className="w-5 h-5 mr-2" /> Appelez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
