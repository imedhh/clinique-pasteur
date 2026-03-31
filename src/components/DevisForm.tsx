'use client'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { chirurgies } from '@/lib/data'

export default function DevisForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-clinic-green mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Demande envoyée avec succès !</h3>
        <p className="text-gray-600 mb-6">
          Notre équipe commerciale vous répondra sous 24-48h avec un devis personnalisé.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-6"
    >
      {/* Informations personnelles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Informations Personnelles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
            <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
            <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre prénom" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="votre@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
            <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="+216 XX XXX XXX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pays de résidence *</label>
            <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Sélectionnez votre pays</option>
              <option value="TN">Tunisie</option>
              <option value="FR">France</option>
              <option value="BE">Belgique</option>
              <option value="CH">Suisse</option>
              <option value="CA">Canada</option>
              <option value="DE">Allemagne</option>
              <option value="GB">Royaume-Uni</option>
              <option value="IT">Italie</option>
              <option value="DZ">Algérie</option>
              <option value="MA">Maroc</option>
              <option value="LY">Libye</option>
              <option value="SA">Arabie Saoudite</option>
              <option value="AE">Émirats Arabes Unis</option>
              <option value="QA">Qatar</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
            <input type="number" min="0" max="120" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre âge" />
          </div>
        </div>
      </div>

      {/* Informations médicales */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Informations Médicales</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Spécialité souhaitée *</label>
            <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Sélectionnez une spécialité</option>
              {chirurgies.map((c) => (
                <option key={c.slug} value={c.slug}>{c.title}</option>
              ))}
              <option value="radiologie">Radiologie / Imagerie (IRM, Scanner)</option>
              <option value="laboratoire">Analyses de laboratoire</option>
              <option value="bilan">Bilan de santé complet</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type de chambre souhaité</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Pas de préférence</option>
              <option value="individuelle">Chambre Individuelle</option>
              <option value="confort">Chambre Confort</option>
              <option value="vip">Suite / VIP</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Décrivez votre besoin médical *</label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition resize-none"
              placeholder="Décrivez votre pathologie, l'intervention souhaitée, vos antécédents médicaux pertinents..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date souhaitée (approximative)</label>
            <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Documents médicaux (rapports, radios...)</label>
            <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-clinic-green hover:file:bg-green-100" />
            <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG, DOC - Max 10 Mo par fichier</p>
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

      <button type="submit" className="btn-primary w-full text-lg justify-center">
        <Send className="w-5 h-5 mr-2" /> Envoyer ma Demande de Devis
      </button>
    </form>
  )
}
