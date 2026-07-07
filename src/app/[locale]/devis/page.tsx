import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, Clock, CheckCircle2, Shield, FileText } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import DevisForm from '@/components/DevisForm'

export const metadata: Metadata = {
  title: 'Demander un Devis Gratuit',
  description: 'Obtenez un devis gratuit et personnalisé pour votre intervention à la Clinique Pasteur Tunis. Réponse sous 24-48h. Chirurgie, examens, hospitalisation.',
}

export default function DevisPage({ params }: { params: { locale: string } }) {
  const { clinicInfo } = getContent(params.locale as any)
  return (
    <>
      <section className="relative py-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/medical-team.webp" alt="Équipe Clinique Pasteur Tunis" fill className="object-cover" />
          <div className="absolute inset-0 bg-emerald-900/85" />
        </div>
        <div className="container-custom px-4 relative">
          <div className="max-w-3xl">
            <span className="text-amber-100 font-semibold text-sm uppercase tracking-wider">Devis gratuit</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Demandez votre Devis Personnalisé</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Remplissez le formulaire ci-dessous et recevez un devis détaillé sous 24 à 48 heures. Notre équipe commerciale vous accompagne dans votre parcours de soins.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Formulaire de Demande de Devis</h2>
                <p className="text-gray-500 mb-8">Tous les champs marqués d&apos;un * sont obligatoires</p>
                <DevisForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Process */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Comment ça marche ?</h3>
                  <div className="space-y-6">
                    {[
                      { step: '1', icon: FileText, title: 'Remplissez le formulaire', desc: 'Décrivez vos besoins médicaux et joignez vos documents si nécessaire.' },
                      { step: '2', icon: Clock, title: 'Recevez votre devis', desc: 'Notre équipe vous envoie un devis détaillé sous 24-48h.' },
                      { step: '3', icon: CheckCircle2, title: 'Planifiez votre séjour', desc: 'Nous organisons votre parcours de soins de A à Z.' },
                    ].map(({ step, icon: Icon, title, desc }) => (
                      <div key={step} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full gradient-green text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                          {step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{title}</h4>
                          <p className="text-gray-500 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact direct */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Contact Direct</h3>
                  <div className="space-y-4">
                    <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-clinic-green transition">
                      <Phone className="w-5 h-5 text-clinic-green" />
                      <div>
                        <p className="font-semibold text-sm">{clinicInfo.phone}</p>
                        <p className="text-xs text-gray-500">Standard</p>
                      </div>
                    </a>
                    <a href={`mailto:${clinicInfo.emailCommercial}`} className="flex items-center gap-3 text-gray-700 hover:text-clinic-green transition">
                      <Mail className="w-5 h-5 text-clinic-green" />
                      <div>
                        <p className="font-semibold text-sm">{clinicInfo.emailCommercial}</p>
                        <p className="text-xs text-gray-500">Service commercial</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Garanties */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Nos Garanties</h3>
                  <div className="space-y-3">
                    {[
                      'Devis 100% gratuit et sans engagement',
                      'Réponse sous 24-48h',
                      'Accompagnement personnalisé',
                      'Confidentialité des données médicales',
                      'Tarifs transparents et compétitifs',
                    ].map((g) => (
                      <div key={g} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Shield className="w-4 h-4 text-clinic-green flex-shrink-0" /> {g}
                      </div>
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
