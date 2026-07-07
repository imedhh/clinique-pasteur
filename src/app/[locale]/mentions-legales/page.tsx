import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mentions légales' }

export default function MentionsLegales() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Mentions légales</h1>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Éditeur du site</h2>
            <p>Clinique Pasteur Tunis — Centre Urbain Nord, Tunis, Tunisie.<br />Téléphone : +216 36 402 000 — Email : contact@cliniquepasteur.com.tn</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Directeur de la publication</h2>
            <p>La direction de la Clinique Pasteur Tunis.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Hébergement</h2>
            <p>Le site est hébergé sur une infrastructure sécurisée. Pour toute demande relative à l’hébergement, contactez la clinique.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Propriété intellectuelle</h2>
            <p>L’ensemble des contenus (textes, images, logo) présents sur ce site est la propriété de la Clinique Pasteur Tunis, sauf mention contraire. Toute reproduction sans autorisation est interdite.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">Informations médicales</h2>
            <p>Les informations médicales publiées sur ce site sont fournies à titre informatif et ne remplacent en aucun cas une consultation médicale. Consultez toujours un professionnel de santé.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
