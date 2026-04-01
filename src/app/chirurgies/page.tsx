import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Stethoscope, Heart, Brain, Sparkles, Activity, Baby, Shield } from 'lucide-react'
import { chirurgies } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Nos Chirurgies et Spécialités',
  description: 'Découvrez les 14 spécialités chirurgicales de la Clinique Pasteur Tunis : cardiovasculaire, bariatrique, esthétique, orthopédique, neurochirurgie et plus.',
}

export default function ChirurgiesPage() {
  const iconMap: Record<string, any> = { Heart, Stethoscope, Activity, Sparkles, Brain, Baby, Shield }

  return (
    <>
      <section className="relative py-20 gradient-dark text-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">Spécialités</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Nos Chirurgies et Spécialités</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Des spécialités chirurgicales avec des équipes médicales chevronnées, des blocs opératoires de dernière technologie et une prise en charge personnalisée.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chirurgies.map((chir) => {
              const Icon = iconMap[chir.icon] || Stethoscope
              return (
                <Link
                  key={chir.slug}
                  href={`/chirurgies/${chir.slug}`}
                  className="bg-white rounded-2xl p-8 shadow-md card-hover group border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-clinic-green transition">
                    {chir.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{chir.description}</p>
                  <ul className="space-y-1 mb-4">
                    {chir.prestations.slice(0, 4).map((p) => (
                      <li key={p} className="text-gray-500 text-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-clinic-green flex-shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Besoin d&apos;un devis pour une intervention ?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Notre équipe vous répond sous 24-48h avec un devis détaillé et personnalisé.
          </p>
          <Link href="/devis" className="btn-primary text-lg">
            Demander un Devis Gratuit <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
