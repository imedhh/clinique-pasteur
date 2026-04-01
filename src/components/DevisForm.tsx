'use client'
import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { chirurgies } from '@/lib/data'

export default function DevisForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-clinic-green mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Demande envoyée avec succès !</h3>
        <p className="text-gray-600 mb-6">
          Notre équipe commerciale vous répondra sous 24-48h avec un devis personnalisé.
        </p>
        <button onClick={() => { setSubmitted(false); setError('') }} className="btn-secondary text-sm">
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const data = {
          nom: formData.get('nom'),
          prenom: formData.get('prenom'),
          email: formData.get('email'),
          telephone: formData.get('telephone'),
          pays: formData.get('pays'),
          age: formData.get('age'),
          specialite: formData.get('specialite'),
          typeChambre: formData.get('typeChambre'),
          message: formData.get('message'),
          date: formData.get('date'),
        }
        try {
          const res = await fetch('/api/devis', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          if (res.ok) {
            setSubmitted(true)
          } else {
            setError('Une erreur est survenue. Veuillez réessayer ou appeler le +216 36 402 000.')
          }
        } catch {
          setError('Une erreur est survenue. Veuillez réessayer ou appeler le +216 36 402 000.')
        } finally {
          setLoading(false)
        }
      }}
      className="space-y-6"
    >
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {/* Informations personnelles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Informations Personnelles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
            <input name="nom" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
            <input name="prenom" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre prénom" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="votre@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
            <input name="telephone" type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="+216 XX XXX XXX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pays de résidence *</label>
            <select name="pays" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Sélectionnez votre pays</option>
              <option value="Tunisie">Tunisie</option>
              <option value="France">France</option>
              <option value="Belgique">Belgique</option>
              <option value="Suisse">Suisse</option>
              <option value="Canada">Canada</option>
              <option value="Allemagne">Allemagne</option>
              <option value="Royaume-Uni">Royaume-Uni</option>
              <option value="Italie">Italie</option>
              <option value="Algérie">Algérie</option>
              <option value="Maroc">Maroc</option>
              <option value="Libye">Libye</option>
              <option value="Arabie Saoudite">Arabie Saoudite</option>
              <option value="Émirats Arabes Unis">Émirats Arabes Unis</option>
              <option value="Qatar">Qatar</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
            <input name="age" type="number" min="0" max="120" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre âge" />
          </div>
        </div>
      </div>

      {/* Informations médicales */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Informations Médicales</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Spécialité souhaitée *</label>
            <select name="specialite" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Sélectionnez une spécialité</option>
              {chirurgies.map((c) => (
                <option key={c.slug} value={c.title}>{c.title}</option>
              ))}
              <option value="Radiologie / Imagerie">Radiologie / Imagerie (IRM, Scanner)</option>
              <option value="Bilan de santé">Bilan de santé complet</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type de chambre souhaité</label>
            <select name="typeChambre" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Pas de préférence</option>
              <option value="Individuelle">Chambre Individuelle</option>
              <option value="Confort">Chambre Confort</option>
              <option value="VIP">Suite / VIP</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Décrivez votre besoin médical *</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition resize-none"
              placeholder="Décrivez votre pathologie, l'intervention souhaitée, vos antécédents médicaux pertinents..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date souhaitée (approximative)</label>
            <input name="date" type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" />
          </div>
        </div>
      </div>

      {/* Consentement */}
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="mt-1 w-4 h-4 text-clinic-green border-gray-300 rounded focus:ring-clinic-green" />
          <span className="text-sm text-gray-600">
            J&apos;accepte que mes données personnelles soient traitées par la Clinique Pasteur Tunis dans le cadre de ma demande de devis. Mes données sont confidentielles et ne seront jamais partagées avec des tiers. *
          </span>
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full text-lg justify-center">
        {loading ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="w-5 h-5 mr-2" /> Envoyer ma Demande de Devis</>
        )}
      </button>
    </form>
  )
}
