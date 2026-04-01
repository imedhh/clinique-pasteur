'use client'
import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="w-16 h-16 text-clinic-green mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-4">Nous vous répondrons dans les plus brefs délais.</p>
        <button onClick={() => { setSubmitted(false); setError('') }} className="btn-secondary text-sm">
          Envoyer un autre message
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
          sujet: formData.get('sujet'),
          message: formData.get('message'),
        }
        try {
          const res = await fetch('/api/contact', {
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
      className="space-y-4"
    >
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
          <input name="nom" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
          <input name="prenom" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre prénom" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="votre@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input name="telephone" type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="+216 XX XXX XXX" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
        <select name="sujet" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
          <option value="">Sélectionnez un sujet</option>
          <option value="Demande d'information">Demande d&apos;information</option>
          <option value="Prise de rendez-vous">Prise de rendez-vous</option>
          <option value="Demande de devis">Demande de devis</option>
          <option value="Réclamation">Réclamation</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition resize-none" placeholder="Votre message..." />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
        {loading ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="w-5 h-5 mr-2" /> Envoyer le message</>
        )}
      </button>
    </form>
  )
}
