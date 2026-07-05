import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react'
import { clinicInfo } from '@/lib/data'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Nous Joindre',
  description: 'Contactez la Clinique Pasteur Tunis : Tél. +216 36 402 000, Urgences +216 36 402 076. Centre Urbain Nord, Tunis. Ouvert 24h/24, 7j/7.',
}

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 gradient-dark text-white">
        <div className="container-custom px-4">
          <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Notre équipe est à votre disposition pour répondre à toutes vos questions. N&apos;hésitez pas à nous contacter par téléphone, email ou via le formulaire ci-dessous.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, title: 'Téléphone', value: clinicInfo.phone, href: `tel:${clinicInfo.phone}`, sub: 'Standard' },
              { icon: Phone, title: 'Urgences', value: clinicInfo.urgences, href: `tel:${clinicInfo.urgences}`, sub: '24h/24 - 7j/7', urgent: true },
              { icon: Mail, title: 'Email', value: clinicInfo.email, href: `mailto:${clinicInfo.email}`, sub: 'Réponse sous 24h' },
              { icon: MapPin, title: 'Adresse', value: 'Centre Urbain Nord', href: clinicInfo.googleMaps, sub: '1003 Tunis, Tunisie' },
            ].map(({ icon: Icon, title, value, href, sub, urgent }) => (
              <a
                key={title}
                href={href}
                target={title === 'Adresse' ? '_blank' : undefined}
                rel={title === 'Adresse' ? 'noopener noreferrer' : undefined}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center group border ${urgent ? 'border-red-200 hover:border-red-400' : 'border-gray-100 hover:border-green-200'}`}
              >
                <div className={`w-14 h-14 rounded-full ${urgent ? 'bg-red-100' : 'bg-green-100'} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-7 h-7 ${urgent ? 'text-red-600' : 'text-clinic-green'}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className={`font-bold ${urgent ? 'text-red-600' : 'text-clinic-green'}`}>{value}</p>
                <p className="text-gray-500 text-sm mt-1">{sub}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Envoyez-nous un message</h2>
              <p className="text-gray-500 mb-8">Nous vous répondrons dans les plus brefs délais.</p>
              <ContactForm />
            </div>

            {/* Map + Info */}
            <div className="space-y-6">
              {/* Google Maps */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80">
                <iframe
                  src="https://maps.google.com/maps?q=36.8492718,10.1986475&hl=fr&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinique Pasteur Tunis - Carte"
                />
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-clinic-green" /> Horaires d&apos;ouverture
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Service des urgences</span>
                    <span className="text-clinic-green font-bold">24h/24 - 7j/7</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Standard téléphonique</span>
                    <span className="text-clinic-green font-bold">24h/24</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Consultations</span>
                    <span className="text-gray-600">Lun - Sam : 8h-18h</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Service commercial</span>
                    <span className="text-gray-600">Lun - Ven : 8h-17h</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a href={clinicInfo.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition text-blue-600" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"/></svg>
                  </a>
                  <a href={clinicInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition text-pink-600" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z"/></svg>
                  </a>
                  <a href={clinicInfo.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition text-red-600" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8ZM9.6 15.6V8.4l6.2 3.6Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
