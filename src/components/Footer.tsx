import Link from '@/components/I18nLink'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { clinicInfo } from '@/lib/data'
import SocialLinks from '@/components/SocialLinks'

export default function Footer({ locale = 'fr', dict }: { locale?: string; dict?: any } = {}) {
  const FUI: any = {
    fr: { ctaTitle: "Besoin d'un avis médical ou d'un devis ?", ctaDesc: "Notre équipe commerciale est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre parcours de soins.", ctaQuote: 'Demander un Devis Gratuit', callUs: 'Appelez-nous', about: 'Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis. De nombreuses spécialités médicales et chirurgicales, équipements de dernière technologie.', colSurgeries: 'Nos Chirurgies', colCentres: 'Nos Centres', colContact: 'Contact', emergency: 'Urgences', rights: 'Tous droits réservés.', lCardiovasc: 'Cardiovasculaire', lBariatrique: 'Bariatrique', lEsthetique: 'Esthétique', lOrthopedique: 'Orthopédique', lGenerale: 'Générale', lNeurochirurgie: 'Neurochirurgie', lAllSurg: 'Toutes les chirurgies', lUrgences: 'Urgences 24h/24', lExplCard: 'Explorations Cardiaques', lRadiologie: 'Radiologie & Imagerie', lEndoscopie: 'Endoscopie', lHospit: 'Hospitalisation', lAllCentres: 'Tous les centres' },
    en: { ctaTitle: 'Need medical advice or a quote?', ctaDesc: 'Our team is here to answer all your questions and support you throughout your care journey.', ctaQuote: 'Get a Free Quote', callUs: 'Call us', about: 'A leading multidisciplinary clinic in the Centre Urbain Nord of Tunis. A wide range of medical and surgical specialties, with state-of-the-art equipment.', colSurgeries: 'Our Surgeries', colCentres: 'Our Centres', colContact: 'Contact', emergency: 'Emergency', rights: 'All rights reserved.', lCardiovasc: 'Cardiovascular', lBariatrique: 'Bariatric', lEsthetique: 'Cosmetic', lOrthopedique: 'Orthopedic', lGenerale: 'General Surgery', lNeurochirurgie: 'Neurosurgery', lAllSurg: 'All surgeries', lUrgences: '24/7 Emergency', lExplCard: 'Cardiac Investigations', lRadiologie: 'Radiology & Imaging', lEndoscopie: 'Endoscopy', lHospit: 'Hospitalization', lAllCentres: 'All centres' },
    ar: { ctaTitle: 'هل تحتاج إلى استشارة طبية أو عرض أسعار؟', ctaDesc: 'فريقنا في خدمتك للإجابة عن جميع أسئلتك ومرافقتك في مسار علاجك.', ctaQuote: 'اطلب عرض أسعار مجاني', callUs: 'اتصل بنا', about: 'مصحة متعددة التخصصات ومرجعية في المركز العمراني الشمالي بتونس. العديد من التخصصات الطبية والجراحية بأحدث التجهيزات.', colSurgeries: 'جراحاتنا', colCentres: 'مراكزنا', colContact: 'اتصل بنا', emergency: 'الطوارئ', rights: 'جميع الحقوق محفوظة.', lCardiovasc: 'القلب والأوعية الدموية', lBariatrique: 'جراحة السمنة', lEsthetique: 'التجميل', lOrthopedique: 'جراحة العظام', lGenerale: 'الجراحة العامة', lNeurochirurgie: 'جراحة الأعصاب', lAllSurg: 'جميع الجراحات', lUrgences: 'الطوارئ على مدار الساعة', lExplCard: 'الاستكشافات القلبية', lRadiologie: 'الأشعة والتصوير', lEndoscopie: 'التنظير', lHospit: 'الإقامة بالمستشفى', lAllCentres: 'جميع المراكز' },
  }
  const t = FUI[locale] || FUI.fr
  return (
    <footer className="gradient-dark text-white">
      {/* CTA Banner */}
      <div className="gradient-green">
        <div className="container-custom px-4 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-gold text-lg">
              {t.ctaQuote} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+21636402000" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-clinic-green transition-all duration-300 text-lg">
              <Phone className="w-5 h-5 mr-2" /> {t.callUs}
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
              {t.about}
            </p>
            <SocialLinks size="sm" />
          </div>

          {/* Chirurgies */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-clinic-gold">{t.colSurgeries}</h3>
            <ul className="space-y-3">
              {[
                { name: t.lCardiovasc, href: '/chirurgies/chirurgie-cardiovasculaire' },
                { name: t.lBariatrique, href: '/chirurgies/chirurgie-bariatrique' },
                { name: t.lEsthetique, href: '/chirurgies/chirurgie-esthetique' },
                { name: t.lOrthopedique, href: '/chirurgies/chirurgie-orthopedique' },
                { name: t.lGenerale, href: '/chirurgies/chirurgie-generale' },
                { name: t.lNeurochirurgie, href: '/chirurgies/neurochirurgie' },
                { name: t.lAllSurg, href: '/chirurgies' },
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
            <h3 className="text-lg font-heading font-bold mb-6 text-clinic-gold">{t.colCentres}</h3>
            <ul className="space-y-3">
              {[
                { name: t.lUrgences, href: '/centres/urgences' },
                { name: t.lExplCard, href: '/centres/explorations-cardiaques' },
                { name: t.lRadiologie, href: '/centres/radiologie' },
                { name: t.lEndoscopie, href: '/centres/endoscopie' },
                { name: t.lHospit, href: '/hospitalisation' },
                { name: t.lAllCentres, href: '/centres' },
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
            <h3 className="text-lg font-heading font-bold mb-6 text-clinic-gold">{t.colContact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clinic-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clinic-green flex-shrink-0" />
                <div>
                  <a href={`tel:${clinicInfo.phone}`} className="text-white font-semibold text-sm hover:text-clinic-gold transition block"><span dir="ltr">{clinicInfo.phone}</span></a>
                  <a href={`tel:${clinicInfo.urgences}`} className="text-red-400 text-xs font-medium hover:text-red-300 transition">{t.emergency}: <span dir="ltr">{clinicInfo.urgences}</span></a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-clinic-green flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-gray-400 text-sm hover:text-white transition"><span dir="ltr">{clinicInfo.email}</span></a>
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
            &copy; {new Date().getFullYear()} Clinique Pasteur Tunis. {t.rights}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/mentions-legales" className="hover:text-white transition">{dict?.footer?.legalNotice || 'Mentions légales'}</Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition">{dict?.footer?.privacy || 'Confidentialité'}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
