import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react'
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-clinic-green flex items-center justify-center text-white font-bold text-lg">
                CP
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Clinique Pasteur</h3>
                <p className="text-sm text-gray-400">Tunis</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis. De nombreuses spécialités médicales et chirurgicales, équipements de dernière technologie.
            </p>
            <div className="flex gap-3">
              <a href={clinicInfo.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-green transition text-sm font-bold" aria-label="Facebook">
                f
              </a>
              <a href={clinicInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-green transition text-sm font-bold" aria-label="Instagram">
                in
              </a>
              <a href={clinicInfo.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-green transition text-sm font-bold" aria-label="YouTube">
                yt
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
