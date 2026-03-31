'use client'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="w-16 h-16 text-clinic-green mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-4">Nous vous répondrons dans les plus brefs délais.</p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
          <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
          <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre prénom" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="votre@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="+216 XX XXX XXX" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
        <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
          <option value="">Sélectionnez un sujet</option>
          <option value="info">Demande d&apos;information</option>
          <option value="rdv">Prise de rendez-vous</option>
          <option value="devis">Demande de devis</option>
          <option value="reclamation">Réclamation</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition resize-none" placeholder="Votre message..." />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        <Send className="w-5 h-5 mr-2" /> Envoyer le message
      </button>
    </form>
  )
}
