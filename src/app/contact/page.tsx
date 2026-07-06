import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react'
import { clinicInfo } from '@/lib/data'
import ContactForm from '@/components/ContactForm'
import SocialLinks from '@/components/SocialLinks'

export const metadata: Metadata = {
  title: 'Contact - Nous Joindre',
  description: 'Contactez la Clinique Pasteur Tunis : Tél. +216 36 402 000, Urgences +216 36 402 076. Centre Urbain Nord, Tunis. Ouvert 24h/24, 7j/7.',
}

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic-exterior.webp" alt="Clinique Pasteur Tunis" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>
        <div className="container-custom px-4 relative">
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
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
