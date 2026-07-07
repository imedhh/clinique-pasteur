import type { Metadata } from 'next'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { Bed, Crown, Star, Home, CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const M: any = {
    fr: { title: 'Hospitalisation - Chambres & Séjour', description: 'Clinique Pasteur Tunis : chambres d\'hospitalisation - individuelles, confort, suites et VIP. Découvrez nos options de séjour et nos équipements.' },
    en: { title: 'Hospitalization - Rooms & Stay', description: 'Clinique Pasteur Tunis: hospitalization rooms - single, comfort, suites and VIP. Discover our stay options and amenities.' },
    ar: { title: 'الإقامة بالمستشفى - الغرف والإقامة', description: 'عيادة باستور تونس: غرف الإقامة - فردية، مريحة، أجنحة وVIP. اكتشف خيارات الإقامة والتجهيزات.' },
  }
  return M[params.locale] || M.fr
}

const UI = {
  fr: {
    heroBadge: 'Séjour',
    heroTitle: 'Hospitalisation',
    heroText: 'Des chambres d’hospitalisation réparties sur plusieurs étages, du confort standard au luxe VIP. Chaque chambre est pensée pour le bien-être du patient et de ses proches.',
    roomsTitle: 'Nos Types de Chambres',
    roomsText: 'Des chambres adaptées à chaque besoin, du séjour standard au séjour VIP haut de gamme.',
    equipTitle: 'Équipements inclus :',
    chambres: [
      {
        type: 'Chambre Individuelle',
        features: ['Lit médicalisé électrique', 'Salle de bain privative', 'Télévision', 'Climatisation', 'Appel infirmier', 'WiFi'],
        description: 'Chambres confortables et fonctionnelles, équipées de tout le nécessaire pour un séjour agréable dans un environnement médical sécurisé.',
      },
      {
        type: 'Chambre Confort',
        features: ['Espace plus grand', 'Mobilier de qualité supérieure', 'Mini-réfrigérateur', 'Fauteuil visiteur confortable', 'Salle de bain spacieuse', 'Télévision grand écran', 'Climatisation', 'WiFi haut débit'],
        description: 'Un niveau de confort supérieur avec un espace plus grand et des équipements premium pour un séjour dans les meilleures conditions.',
      },
      {
        type: 'Suite / VIP',
        features: ['Suite spacieuse avec salon', 'Décoration soignée et haut de gamme', 'Lit premium king-size', 'Salle de bain luxueuse', 'Mini-bar', 'Télévision grand écran', 'Canapé-lit pour accompagnant', 'Service personnalisé', 'Menu repas premium', 'WiFi haut débit'],
        description: 'Le summum du confort hospitalier. Suites spacieuses avec salon privé, idéales pour les patients recherchant un séjour d’exception.',
      },
    ],
    maternityBadge: 'Maternité',
    maternityTitle: 'Service d’Obstétrique',
    maternityText: 'La maternité de la Clinique Pasteur, située en mezzanine, dispose de box d’accouchement mitoyens à une salle de césarienne, avec des chambres d’hospitalisation dont des chambres VIP pour un accueil chaleureux des nouvelles mamans.',
    maternityItems: ['Box d’accouchement', 'Salle de césarienne', 'Chambres standard', 'Chambres VIP'],
    maternityCardTitle: 'Chambres dédiées',
    maternityCardSub: 'à la maternité',
    maternityCardNote: 'dont des suites VIP',
    ctaTitle: 'Planifiez votre séjour',
    ctaText: 'Contactez-nous pour réserver votre chambre et obtenir toutes les informations sur les tarifs et les options disponibles.',
    ctaQuote: 'Demander un Devis',
    ctaCall: 'Appelez-nous',
  },
  en: {
    heroBadge: 'Your Stay',
    heroTitle: 'Inpatient Care',
    heroText: 'Hospital rooms spread across several floors, from standard comfort to VIP luxury. Every room is designed for the well-being of patients and their loved ones.',
    roomsTitle: 'Our Room Types',
    roomsText: 'Rooms suited to every need, from standard stays to premium VIP accommodation.',
    equipTitle: 'Included amenities:',
    chambres: [
      {
        type: 'Private Room',
        features: ['Electric hospital bed', 'Private bathroom', 'Television', 'Air conditioning', 'Nurse call system', 'WiFi'],
        description: 'Comfortable, functional rooms equipped with everything needed for a pleasant stay in a safe medical environment.',
      },
      {
        type: 'Comfort Room',
        features: ['Larger space', 'Superior-quality furniture', 'Mini fridge', 'Comfortable visitor armchair', 'Spacious bathroom', 'Large-screen television', 'Air conditioning', 'High-speed WiFi'],
        description: 'A higher level of comfort with more space and premium amenities for a stay in the best possible conditions.',
      },
      {
        type: 'Suite / VIP',
        features: ['Spacious suite with lounge', 'Refined, high-end décor', 'Premium king-size bed', 'Luxurious bathroom', 'Mini-bar', 'Large-screen television', 'Sofa bed for a companion', 'Personalized service', 'Premium meal menu', 'High-speed WiFi'],
        description: 'The pinnacle of hospital comfort. Spacious suites with a private lounge, ideal for patients seeking an exceptional stay.',
      },
    ],
    maternityBadge: 'Maternity',
    maternityTitle: 'Obstetrics Department',
    maternityText: 'The Clinique Pasteur maternity unit, located on the mezzanine level, features delivery rooms adjacent to a cesarean section theater, along with inpatient rooms including VIP rooms for a warm welcome for new mothers.',
    maternityItems: ['Delivery rooms', 'Cesarean section theater', 'Standard rooms', 'VIP rooms'],
    maternityCardTitle: 'Dedicated rooms',
    maternityCardSub: 'for the maternity unit',
    maternityCardNote: 'including VIP suites',
    ctaTitle: 'Plan Your Stay',
    ctaText: 'Contact us to book your room and get full information about rates and available options.',
    ctaQuote: 'Request a Quote',
    ctaCall: 'Call Us',
  },
  ar: {
    heroBadge: 'الإقامة',
    heroTitle: 'الإقامة الاستشفائية',
    heroText: 'غرف استشفاء موزّعة على عدّة طوابق، من الراحة العادية إلى الفخامة الخاصة بكبار الشخصيات. صُمّمت كل غرفة لضمان راحة المريض وذويه.',
    roomsTitle: 'أنواع غرفنا',
    roomsText: 'غرف ملائمة لكل الاحتياجات، من الإقامة العادية إلى إقامة كبار الشخصيات الراقية.',
    equipTitle: 'التجهيزات المتوفرة:',
    chambres: [
      {
        type: 'غرفة فردية',
        features: ['سرير طبي كهربائي', 'حمّام خاص', 'تلفاز', 'تكييف هواء', 'زر استدعاء الممرّض', 'واي فاي'],
        description: 'غرف مريحة وعملية مجهّزة بكل ما يلزم لإقامة طيّبة في بيئة طبية آمنة.',
      },
      {
        type: 'غرفة مريحة',
        features: ['مساحة أوسع', 'أثاث عالي الجودة', 'ثلاجة صغيرة', 'مقعد مريح للزائر', 'حمّام فسيح', 'تلفاز بشاشة كبيرة', 'تكييف هواء', 'واي فاي عالي التدفق'],
        description: 'مستوى أعلى من الراحة مع مساحة أوسع وتجهيزات فاخرة لإقامة في أفضل الظروف.',
      },
      {
        type: 'جناح / كبار الشخصيات',
        features: ['جناح فسيح مع صالون', 'ديكور أنيق وراقٍ', 'سرير فاخر بحجم كبير', 'حمّام فخم', 'ميني بار', 'تلفاز بشاشة كبيرة', 'أريكة سرير للمرافق', 'خدمة شخصية', 'قائمة وجبات فاخرة', 'واي فاي عالي التدفق'],
        description: 'قمة الراحة الاستشفائية. أجنحة فسيحة مع صالون خاص، مثالية للمرضى الباحثين عن إقامة استثنائية.',
      },
    ],
    maternityBadge: 'قسم الولادة',
    maternityTitle: 'قسم التوليد',
    maternityText: 'يقع قسم الولادة بمصحّة باستور في طابق الميزانين، ويضمّ غرف ولادة متاخمة لقاعة العمليات القيصرية، مع غرف استشفاء من بينها غرف لكبار الشخصيات لاستقبال الأمهات الجدد بحفاوة.',
    maternityItems: ['غرف الولادة', 'قاعة العمليات القيصرية', 'غرف عادية', 'غرف كبار الشخصيات'],
    maternityCardTitle: 'غرف مخصّصة',
    maternityCardSub: 'لقسم الولادة',
    maternityCardNote: 'من بينها أجنحة كبار الشخصيات',
    ctaTitle: 'خطّطوا لإقامتكم',
    ctaText: 'اتصلوا بنا لحجز غرفتكم والحصول على كل المعلومات حول الأسعار والخيارات المتاحة.',
    ctaQuote: 'طلب عرض أسعار',
    ctaCall: 'اتصلوا بنا',
  },
} as const

const chambresMeta = [
  { icon: Home, color: 'from-blue-500 to-blue-600' },
  { icon: Star, color: 'from-clinic-green to-clinic-darkgreen' },
  { icon: Crown, color: 'from-clinic-gold to-yellow-700' },
]

export default function HospitalisationPage({ params }: { params: { locale: string } }) {
  const { clinicInfo } = getContent(params.locale as any)
  const t = (UI as any)[params.locale] || UI.fr
  const chambres = t.chambres.map((ch: any, i: number) => ({ ...ch, ...chambresMeta[i] }))
  return (
    <>
      <section className="relative py-20 gradient-dark text-white">
        <div className="container-custom px-4">
          <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">{t.heroBadge}</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">{t.heroTitle}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {t.heroText}
          </p>
        </div>
      </section>

      {/* Types de chambres */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">{t.roomsTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.roomsText}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {chambres.map((ch: any) => {
              const Icon = ch.icon
              return (
                <div key={ch.type} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 card-hover">
                  <div className={`bg-gradient-to-r ${ch.color} p-8 text-white`}>
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-heading font-bold">{ch.type}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{ch.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-4">{t.equipTitle}</h4>
                    <ul className="space-y-2">
                      {ch.features.map((f: string) => (
                        <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-clinic-green flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Maternité */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">{t.maternityBadge}</span>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mt-2 mb-6">{t.maternityTitle}</h2>
                <p className="text-gray-600 mb-6">
                  {t.maternityText}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {t.maternityItems.map((item: string) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center">
                <Bed className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{t.maternityCardTitle}</h3>
                <p className="text-gray-600">{t.maternityCardSub}</p>
                <p className="text-sm text-gray-500 mt-2">{t.maternityCardNote}</p>
              </div>
            </div>
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
            <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="btn-secondary text-lg">
              <Phone className="w-5 h-5 mr-2" /> {t.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
