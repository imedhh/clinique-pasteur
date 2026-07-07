'use client'
import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

const UI = {
  fr: {
    successTitle: 'Message envoyé !',
    successMsg: 'Nous vous répondrons dans les plus brefs délais.',
    sendAnother: 'Envoyer un autre message',
    errorMsg: 'Une erreur est survenue. Veuillez réessayer ou appeler le +216 36 402 000.',
    nom: 'Nom *',
    nomPh: 'Votre nom',
    prenom: 'Prénom *',
    prenomPh: 'Votre prénom',
    email: 'Email *',
    emailPh: 'votre@email.com',
    telephone: 'Téléphone',
    telephonePh: '+216 XX XXX XXX',
    sujet: 'Sujet *',
    sujetPh: 'Sélectionnez un sujet',
    optInfo: "Demande d'information",
    optRdv: 'Prise de rendez-vous',
    optDevis: 'Demande de devis',
    optReclamation: 'Réclamation',
    optAutre: 'Autre',
    message: 'Message *',
    messagePh: 'Votre message...',
    sending: 'Envoi en cours...',
    send: 'Envoyer le message',
  },
  en: {
    successTitle: 'Message sent!',
    successMsg: 'We will get back to you as soon as possible.',
    sendAnother: 'Send another message',
    errorMsg: 'An error occurred. Please try again or call +216 36 402 000.',
    nom: 'Last name *',
    nomPh: 'Your last name',
    prenom: 'First name *',
    prenomPh: 'Your first name',
    email: 'Email *',
    emailPh: 'your@email.com',
    telephone: 'Phone',
    telephonePh: '+216 XX XXX XXX',
    sujet: 'Subject *',
    sujetPh: 'Select a subject',
    optInfo: 'Information request',
    optRdv: 'Book an appointment',
    optDevis: 'Quote request',
    optReclamation: 'Complaint',
    optAutre: 'Other',
    message: 'Message *',
    messagePh: 'Your message...',
    sending: 'Sending...',
    send: 'Send message',
  },
  ar: {
    successTitle: 'تم إرسال الرسالة!',
    successMsg: 'سنرد عليكم في أقرب وقت ممكن.',
    sendAnother: 'إرسال رسالة أخرى',
    errorMsg: 'حدث خطأ. يرجى المحاولة مرة أخرى أو الاتصال على الرقم ‎+216 36 402 000.',
    nom: 'اللقب *',
    nomPh: 'لقبكم',
    prenom: 'الاسم *',
    prenomPh: 'اسمكم',
    email: 'البريد الإلكتروني *',
    emailPh: 'example@email.com',
    telephone: 'الهاتف',
    telephonePh: '+216 XX XXX XXX',
    sujet: 'الموضوع *',
    sujetPh: 'اختاروا موضوعاً',
    optInfo: 'طلب معلومات',
    optRdv: 'حجز موعد',
    optDevis: 'طلب عرض سعر',
    optReclamation: 'شكوى',
    optAutre: 'أخرى',
    message: 'الرسالة *',
    messagePh: 'رسالتكم...',
    sending: 'جارٍ الإرسال...',
    send: 'إرسال الرسالة',
  },
} as const

export default function ContactForm({ locale = 'fr' }: { locale?: string } = {}) {
  const t = (UI as any)[locale] || UI.fr
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="w-16 h-16 text-clinic-green mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{t.successTitle}</h3>
        <p className="text-gray-600 mb-4">{t.successMsg}</p>
        <button onClick={() => { setSubmitted(false); setError('') }} className="btn-secondary text-sm">
          {t.sendAnother}
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
          website: formData.get('website'), // honeypot anti-spam
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
            setError(t.errorMsg)
          }
        } catch {
          setError(t.errorMsg)
        } finally {
          setLoading(false)
        }
      }}
      className="space-y-4"
    >
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}
      {/* Honeypot anti-spam : champ caché, invisible pour les humains */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-nom" className="block text-sm font-medium text-gray-700 mb-1">{t.nom}</label>
          <input id="contact-nom" name="nom" type="text" required autoComplete="family-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.nomPh} />
        </div>
        <div>
          <label htmlFor="contact-prenom" className="block text-sm font-medium text-gray-700 mb-1">{t.prenom}</label>
          <input id="contact-prenom" name="prenom" type="text" required autoComplete="given-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.prenomPh} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.emailPh} />
      </div>
      <div>
        <label htmlFor="contact-telephone" className="block text-sm font-medium text-gray-700 mb-1">{t.telephone}</label>
        <input id="contact-telephone" name="telephone" type="tel" autoComplete="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.telephonePh} />
      </div>
      <div>
        <label htmlFor="contact-sujet" className="block text-sm font-medium text-gray-700 mb-1">{t.sujet}</label>
        <select id="contact-sujet" name="sujet" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
          <option value="">{t.sujetPh}</option>
          <option value="Demande d'information">{t.optInfo}</option>
          <option value="Prise de rendez-vous">{t.optRdv}</option>
          <option value="Demande de devis">{t.optDevis}</option>
          <option value="Réclamation">{t.optReclamation}</option>
          <option value="Autre">{t.optAutre}</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
        <textarea id="contact-message" name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition resize-none" placeholder={t.messagePh} />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
        {loading ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> {t.sending}</>
        ) : (
          <><Send className="w-5 h-5 mr-2" /> {t.send}</>
        )}
      </button>
    </form>
  )
}
