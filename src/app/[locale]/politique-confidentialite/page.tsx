import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Politique de confidentialité' }

export default function Confidentialite() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Données que nous collectons</h2>
            <p>Nous collectons uniquement les informations que vous nous transmettez volontairement via nos formulaires (contact, demande de devis) : nom, coordonnées et message. Aucune donnée médicale sensible n’est demandée en ligne.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Finalité</h2>
            <p>Ces informations servent exclusivement à répondre à votre demande et à organiser votre prise en charge. Elles ne sont ni vendues ni cédées à des tiers.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Conservation</h2>
            <p>Vos données sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées conformément à la réglementation applicable.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Vos droits</h2>
            <p>Vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour l’exercer, contactez-nous à contact@cliniquepasteur.com.tn.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Cookies</h2>
            <p>Ce site utilise une mesure d’audience respectueuse de la vie privée, sans cookies publicitaires ni traçage à des fins commerciales.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
