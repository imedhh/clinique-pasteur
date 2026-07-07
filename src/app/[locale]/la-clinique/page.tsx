import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import { Building2, Shield, Heart, Users, CheckCircle2, ArrowRight, Bed, Stethoscope, Clock, Award } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const M: any = {
    fr: { title: 'La Clinique - Présentation & Infrastructure', description: 'Découvrez la Clinique Pasteur Tunis : équipements de pointe, équipe d\'excellence. Clinique pluridisciplinaire de référence au Centre Urbain Nord.' },
    en: { title: 'The Clinic - Overview & Facilities', description: 'Discover Clinique Pasteur Tunis: cutting-edge equipment and a team of excellence. A leading multidisciplinary clinic in the Centre Urbain Nord.' },
    ar: { title: 'المصحة - تقديم والبنية التحتية', description: 'اكتشف عيادة باستور تونس: تجهيزات متطورة وفريق متميز. مصحة متعددة التخصصات مرجعية في المركز العمراني الشمالي.' },
  }
  return M[params.locale] || M.fr
}

const UI = {
  fr: {
    heroBadge: 'Qui sommes-nous',
    heroTitle: 'La Clinique Pasteur de Tunis',
    heroText: 'Une clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis, alliant expertise médicale d’excellence, équipements de dernière technologie et prise en charge personnalisée.',
    presTitle: 'Une expertise pluridisciplinaire reconnue',
    presParagraphs: [
      'La Clinique Pasteur de Tunis est une clinique pluridisciplinaire sise au Centre Urbain Nord, voisine d’un Centre Médical regroupant de nombreux cabinets médicaux privés.',
      'La Clinique admet ses patients d’une façon personnalisée pour les orienter aux unités de soins et/ou centres d’explorations concernés le plus rapidement possible et dans les meilleures conditions.',
      'Le dossier patient est informatisé et sécurisé pour garantir le secret professionnel médical et les données personnelles des patients.',
      'Le choix des médecins, du personnel paramédical et du reste du personnel a été fait sur la base de l’excellence et le dévouement au service du patient, la Direction Générale veillant à rendre l’hospitalisation du patient aussi agréable que possible.',
    ],
    highlights: [
      { title: 'Excellence médicale', desc: 'Équipe médicale et paramédicale d’une compétence reconnue, sélectionnée sur la base de l’excellence.' },
      { title: 'Sécurité des données', desc: 'Dossier patient informatisé et sécurisé garantissant le secret professionnel médical.' },
      { title: 'Prise en charge personnalisée', desc: 'Orientation personnalisée vers les unités de soins adaptées, dans les meilleurs délais.' },
      { title: 'Disponibilité 24h/24', desc: 'Urgences, réanimation et équipes médicales disponibles en permanence.' },
    ],
    infraBadge: 'Infrastructure',
    infraTitle: 'Une Infrastructure d’Excellence',
    infraText: 'La Clinique s’étend du 2ème sous-sol au 7ème étage, offrant une infrastructure complète et moderne.',
    strengthsTitle: 'Nos Points Forts',
    strengths: [
      'Blocs opératoires de pointe',
      'Chambres individuelles & VIP',
      'Réanimation spécialisée',
      'Équipements haute technologie',
    ],
    ctaTitle: 'Prêt à nous faire confiance ?',
    ctaText: 'Contactez-nous pour planifier votre consultation ou obtenir un devis personnalisé pour votre intervention.',
    ctaQuote: 'Demander un Devis',
    ctaContact: 'Nous Contacter',
  },
  en: {
    heroBadge: 'About Us',
    heroTitle: 'Clinique Pasteur Tunis',
    heroText: 'A leading multidisciplinary clinic in the Centre Urbain Nord of Tunis, combining medical excellence, state-of-the-art equipment and personalized care.',
    presTitle: 'Recognized Multidisciplinary Expertise',
    presParagraphs: [
      'Clinique Pasteur Tunis is a multidisciplinary clinic located in the Centre Urbain Nord, adjacent to a Medical Center housing numerous private medical practices.',
      'The Clinic admits its patients on a personalized basis, directing them to the relevant care units and/or diagnostic centers as quickly as possible and under the best conditions.',
      'Patient records are computerized and secured to guarantee medical confidentiality and the protection of patients’ personal data.',
      'Physicians, paramedical staff and all other personnel are selected on the basis of excellence and dedication to patient care, with the General Management committed to making each patient’s hospital stay as pleasant as possible.',
    ],
    highlights: [
      { title: 'Medical excellence', desc: 'A medical and paramedical team of recognized expertise, selected on the basis of excellence.' },
      { title: 'Data security', desc: 'Computerized, secure patient records guaranteeing medical confidentiality.' },
      { title: 'Personalized care', desc: 'Personalized referral to the appropriate care units, as promptly as possible.' },
      { title: '24/7 availability', desc: 'Emergency services, intensive care and medical teams available around the clock.' },
    ],
    infraBadge: 'Infrastructure',
    infraTitle: 'An Infrastructure of Excellence',
    infraText: 'The Clinic extends from the second basement level to the seventh floor, offering a complete and modern infrastructure.',
    strengthsTitle: 'Our Key Strengths',
    strengths: [
      'State-of-the-art operating theaters',
      'Private & VIP rooms',
      'Specialized intensive care',
      'High-technology equipment',
    ],
    ctaTitle: 'Ready to Put Your Trust in Us?',
    ctaText: 'Contact us to schedule your consultation or get a personalized quote for your procedure.',
    ctaQuote: 'Request a Quote',
    ctaContact: 'Contact Us',
  },
  ar: {
    heroBadge: 'من نحن',
    heroTitle: 'مصحّة باستور تونس',
    heroText: 'مصحّة مرجعية متعددة الاختصاصات بالمركز العمراني الشمالي بتونس، تجمع بين الخبرة الطبية المتميزة وأحدث التجهيزات والرعاية الشخصية.',
    presTitle: 'خبرة متعددة الاختصاصات معترف بها',
    presParagraphs: [
      'مصحّة باستور تونس مصحّة متعددة الاختصاصات كائنة بالمركز العمراني الشمالي، مجاورة لمركز طبي يضمّ العديد من العيادات الطبية الخاصة.',
      'تستقبل المصحّة مرضاها بطريقة شخصية لتوجيههم إلى وحدات العلاج و/أو مراكز الاستكشافات المعنية في أسرع وقت ممكن وفي أفضل الظروف.',
      'ملف المريض محوسَب ومؤمَّن لضمان السرّ المهني الطبي وحماية المعطيات الشخصية للمرضى.',
      'تمّ اختيار الأطباء وشبه الطبيين وبقية الأعوان على أساس التميّز والتفاني في خدمة المريض، وتحرص الإدارة العامة على جعل إقامة المريض في المصحّة مريحة قدر الإمكان.',
    ],
    highlights: [
      { title: 'التميّز الطبي', desc: 'فريق طبي وشبه طبي ذو كفاءة معترف بها، تمّ اختياره على أساس التميّز.' },
      { title: 'أمان المعطيات', desc: 'ملف مريض محوسَب ومؤمَّن يضمن السرّ المهني الطبي.' },
      { title: 'رعاية شخصية', desc: 'توجيه شخصي نحو وحدات العلاج الملائمة في أقرب الآجال.' },
      { title: 'متاحون على مدار الساعة', desc: 'مصلحة الاستعجالي والإنعاش والفرق الطبية متوفرة بصفة دائمة.' },
    ],
    infraBadge: 'البنية التحتية',
    infraTitle: 'بنية تحتية متميّزة',
    infraText: 'تمتدّ المصحّة من الطابق التحت-أرضي الثاني إلى الطابق السابع، وتوفّر بنية تحتية متكاملة وعصرية.',
    strengthsTitle: 'نقاط قوّتنا',
    strengths: [
      'قاعات عمليات متطوّرة',
      'غرف فردية وغرف كبار الشخصيات',
      'إنعاش متخصّص',
      'تجهيزات عالية التقنية',
    ],
    ctaTitle: 'مستعدّون لمنحنا ثقتكم؟',
    ctaText: 'اتصلوا بنا لبرمجة موعد الفحص أو للحصول على عرض أسعار شخصي لعمليّتكم.',
    ctaQuote: 'طلب عرض أسعار',
    ctaContact: 'اتصلوا بنا',
  },
} as const

const highlightIcons = [Award, Shield, Heart, Clock]
const strengthIcons = [Stethoscope, Bed, Heart, Users]

export default function LaCliniquePage({ params }: { params: { locale: string } }) {
  const { niveaux } = getContent(params.locale as any)
  const t = (UI as any)[params.locale] || UI.fr
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container-custom px-4 relative">
          <div className="max-w-3xl">
            <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">{t.heroBadge}</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">{t.heroTitle}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t.presTitle}</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                {t.presParagraphs.map((p: string) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {t.highlights.map(({ title, desc }: { title: string; desc: string }, i: number) => {
                const Icon = highlightIcons[i]
                return (
                  <div key={title} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition">
                    <Icon className="w-8 h-8 text-clinic-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">{t.infraBadge}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
              {t.infraTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.infraText}
            </p>
          </div>
          <div className="space-y-6">
            {niveaux.map((niveau, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-64 flex-shrink-0">
                    <span className="text-clinic-green font-semibold text-sm uppercase">{niveau.etage}</span>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mt-1">{niveau.titre}</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-4">{niveau.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {niveau.details.map((detail) => (
                        <span key={detail} className="inline-flex items-center gap-1.5 bg-green-50 text-clinic-green text-sm px-3 py-1.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="section-padding gradient-green text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">{t.strengthsTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.strengths.map((label: string, i: number) => {
              const Icon = strengthIcons[i]
              return (
                <div key={label} className="text-center">
                  <Icon className="w-10 h-10 text-clinic-gold mx-auto mb-3" />
                  <p className="text-green-100 font-semibold">{label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t.ctaTitle}</h2>
          <p className="text-gray-600 text-lg mb-8">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary text-lg">
              {t.ctaQuote} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
