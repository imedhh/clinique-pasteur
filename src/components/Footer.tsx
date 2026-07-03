import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { clinicInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="gradient-dark text-white">
      {/* CTA Banner */}
      <div className="gradient-green">
        <div className="container-custom px-4 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Besoin d&apos;un avis médical ou d&apos;un devis ?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe commerciale est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre parcours de soins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-gold text-lg">
              Demander un Devis Gratuit <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+21636402000" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-clinic-green transition-all duration-300 text-lg">
              <Phone className="w-5 h-5 mr-2" /> Appelez-nous
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="inline-flex bg-white rounded-xl px-4 py-3 mb-6 shadow-sm">
              <Image src="/images/logo-fr.png" alt="Clinique Pasteur Tunis" width={483} height={97} className="h-9 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis. De nombreuses spécialités médicales et chirurgicales, équipements de dernière technologie.
            </p>
            <div className="flex gap-3">
              <a href={clinicInfo.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-green transition" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"/></svg>
              </a>
              <a href={clinicInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-green transition" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z"/></svg>
              </a>
              <a href={clinicInfo.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-green transition" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8ZM9.6 15.6V8.4l6.2 3.6Z"/></svg>
              </a>
            </div>
          </div>

          {/* Chirurgies */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-clinic-gold">Nos Chirurgies</h3>
            <ul className="space-y-3">
              {[
                { name: 'Cardiovasculaire', href: '/chirurgies/chirurgie-cardiovasculaire' },
                { name: 'Bariatrique', href: '/chirurgies/chirurgie-bariatrique' },
                { name: 'Esthétique', href: '/chirurgies/chirurgie-esthetique' },
                { name: 'Orthopédique', href: '/chirurgies/chirurgie-orthopedique' },
                { name: 'Générale', href: '/chirurgies/chirurgie-generale' },
                { name: 'Neurochirurgie', href: '/chirurgies/neurochirurgie' },
                { name: 'Toutes les chirurgies', href: '/chirurgies' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-clinic-green" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Centres */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-clinic-gold">Nos Centres</h3>
            <ul className="space-y-3">
              {[
                { name: 'Urgences 24h/24', href: '/centres/urgences' },
                { name: 'Explorations Cardiaques', href: '/centres/explorations-cardiaques' },
                { name: 'Radiologie & Imagerie', href: '/centres/radiologie' },
                { name: 'Endoscopie', href: '/centres/endoscopie' },
                { name: 'Hospitalisation', href: '/hospitalisation' },
                { name: 'Tous les centres', href: '/centres' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-clinic-green" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-clinic-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clinic-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clinic-green flex-shrink-0" />
                <div>
                  <a href={`tel:${clinicInfo.phone}`} className="text-white font-semibold text-sm hover:text-clinic-gold transition block">{clinicInfo.phone}</a>
                  <a href={`tel:${clinicInfo.urgences}`} className="text-red-400 text-xs font-medium hover:text-red-300 transition">Urgences: {clinicInfo.urgences}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-clinic-green flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-gray-400 text-sm hover:text-white transition">{clinicInfo.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-clinic-green flex-shrink-0" />
                <span className="text-gray-400 text-sm">{clinicInfo.horaires}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Clinique Pasteur Tunis. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/mentions-legales" className="hover:text-white transition">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
