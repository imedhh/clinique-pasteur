import Link from '@/components/I18nLink'
import Image from 'next/image'
import { ArrowRight, Phone, Heart, Brain, Stethoscope, Baby, Sparkles, Activity, Siren, CheckCircle2, ScanLine, HeartPulse, Zap, Eye, Shield } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SocialLinks from '@/components/SocialLinks'

const UI = {
  fr: {
    heroAlt: 'Clinique Pasteur Tunis',
    logoAlt: 'Clinique Pasteur',
    heroTitle1: "L'excellence",
    heroTitle2: 'au service de',
    heroTitle3: 'votre santé',
    heroDesc: 'Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis. Votre parcours de soins, personnalisé du diagnostic à la guérison.',
    getQuote: 'Obtenir un Devis Gratuit',
    quickEmergency: 'Urgences 24/7',
    quickCardiology: 'Cardiologie',
    quickAesthetic: 'Esthétique',
    quickImaging: 'Imagerie',
    aboutBadge: 'Bienvenue',
    aboutTitle1: 'Une clinique de',
    aboutTitle2: 'référence',
    aboutTitle3: 'en Tunisie',
    aboutDesc: 'La Clinique Pasteur, au Centre Urbain Nord de Tunis, offre une prise en charge personnalisée alliant expertise médicale et équipements de dernière technologie.',
    feature1: 'Blocs opératoires de pointe',
    feature2: 'Réanimation spécialisée',
    feature3: 'Dossier patient sécurisé',
    feature4: "Équipe d'excellence",
    discoverClinic: 'Découvrir la Clinique',
    altOperatingRoom: 'Bloc opératoire',
    altMri: 'IRM',
    altVipRoom: 'Chambre VIP',
    badge24h: 'Disponible 24h/24',
    badge24hSub: 'Urgences & Réanimation',
    exploBadge: 'Diagnostic',
    exploTitle: 'Explorations Médicales',
    exploDesc: 'Des centres spécialisés pour un diagnostic précis et rapide.',
    exploCards: [
      { title: 'Explorations Cardiaques', desc: "ECG, Holter, échocardiographie, épreuve d'effort" },
      { title: 'Explorations Neurophysiologiques', desc: 'EEG, EMG, potentiels évoqués, vidéo-EEG' },
      { title: 'Explorations Urodynamiques', desc: 'Débitmétrie, cystomanométrie, bilan urodynamique complet' },
    ],
    discoverExams: 'Découvrir les examens',
    chirBadge: 'Spécialités',
    chirTitle: 'Nos Chirurgies',
    chirDesc: 'Des blocs opératoires de pointe pour des interventions de toute nature.',
    allChirurgies: 'Toutes les chirurgies',
    chirCards: [
      { title: 'Chirurgie Cardiovasculaire', desc: 'Cathétérisme, chirurgie à cœur ouvert, électrophysiologie' },
      { title: 'Chirurgie Bariatrique', desc: 'Sleeve, bypass — spécialité phare de la clinique' },
      { title: 'Chirurgie Esthétique', desc: 'Rhinoplastie, liposuccion, lifting, augmentation mammaire' },
    ],
    learnMore: 'En savoir plus',
    altSurgery: 'Chirurgie',
    polesBadge: 'Réputation',
    polesTitle: "Pôles d'Excellence",
    polesDesc: 'Des pôles de référence qui ont fait la renommée de la Clinique Pasteur.',
    poleCards: [
      { title: 'Pôle Cardiovasculaire', desc: 'Cathétérisme, chirurgie cardiaque, électrophysiologie, réanimation cardiaque dédiée.', highlights: ['Cathétérisme cardiaque', 'Chirurgie à cœur ouvert', 'Électrophysiologie'] },
      { title: 'Pôle de Radiologie', desc: 'Plateau technique ultra-performant. Radiologie conventionnelle et interventionnelle.', highlights: ['IRM', 'Scanner double énergie', 'Radiologie interventionnelle'] },
      { title: 'Pôle de Chirurgie', desc: 'Chirurgie lourde digestive et urologique. La chirurgie bariatrique a fait la réputation de la clinique.', highlights: ['Chirurgie bariatrique', 'CHIP', 'Laparoscopie avancée'] },
    ],
    confortBadge: 'Confort',
    sejourTitle1: 'Un séjour',
    sejourTitle2: 'tout confort',
    sejourDesc: 'Du standard au VIP, chaque chambre est pensée pour votre bien-être. Service de restauration, climatisation, WiFi et accompagnement personnalisé.',
    confortTags: ['Chambres individuelles', 'Chambres confort', 'Suites VIP', 'Service repas'],
    discoverRooms: 'Découvrir nos chambres',
    confortAlts: ['Chambre VIP', 'Salon confort', 'Accompagnement personnalisé', 'Chambre confort'],
    centresBadge: 'Services',
    centresTitle: 'Nos Centres',
    allCentres: 'Tous les centres',
    discover: 'Découvrir',
    ctaTitle1: 'Prêt à prendre soin',
    ctaTitle2: 'de votre santé ?',
    ctaDesc: 'Contactez-nous pour un devis personnalisé gratuit. Notre équipe vous répond sous 24-48h.',
    requestQuote: 'Demander un Devis Gratuit',
    faqTitle: 'Questions Fréquentes',
    faq: [
      { q: 'Quelles spécialités sont disponibles ?', a: 'Chirurgie cardiovasculaire, bariatrique, esthétique, orthopédique, urologique, ORL, neurochirurgie, gynéco-obstétrique, pédiatrique, carcinologique, ainsi que des consultations médicales dans toutes les spécialités.' },
      { q: 'Le service des urgences est-il disponible 24h/24 ?', a: 'Oui, urgences 24h/24, 7j/7 avec équipe qualifiée connectée aux blocs opératoires et à la réanimation. Urgences : +216 36 402 076.' },
      { q: 'Comment obtenir un devis ?', a: 'Via notre formulaire en ligne, par email à contact@cliniquepasteur.com.tn, ou par téléphone au +216 36 402 000. Réponse sous 24-48h.' },
      { q: 'Acceptez-vous les patients internationaux ?', a: 'Oui, notre service commercial organise votre parcours complet : devis, planification, hébergement, transferts.' },
      { q: "Quels équipements d'imagerie ?", a: 'IRM, scanner double énergie, mammographie, panoramique dentaire, ostéodensitomètre, échographie, radiologie interventionnelle.' },
    ],
    followTitle: 'Suivez-nous',
    followDesc: "Retrouvez l'actualité de la Clinique Pasteur Tunis sur les réseaux sociaux.",
  },
  en: {
    heroAlt: 'Clinique Pasteur Tunis',
    logoAlt: 'Clinique Pasteur',
    heroTitle1: 'Excellence',
    heroTitle2: 'in the service of',
    heroTitle3: 'your health',
    heroDesc: 'A leading multidisciplinary clinic in the Centre Urbain Nord of Tunis. Your care journey, personalized from diagnosis to recovery.',
    getQuote: 'Get a Free Quote',
    quickEmergency: '24/7 Emergency',
    quickCardiology: 'Cardiology',
    quickAesthetic: 'Cosmetic Surgery',
    quickImaging: 'Medical Imaging',
    aboutBadge: 'Welcome',
    aboutTitle1: 'A leading',
    aboutTitle2: 'reference clinic',
    aboutTitle3: 'in Tunisia',
    aboutDesc: 'Clinique Pasteur, located in the Centre Urbain Nord of Tunis, provides personalized care combining medical expertise with state-of-the-art equipment.',
    feature1: 'State-of-the-art operating rooms',
    feature2: 'Specialized intensive care',
    feature3: 'Secure patient records',
    feature4: 'A team of excellence',
    discoverClinic: 'Discover the Clinic',
    altOperatingRoom: 'Operating room',
    altMri: 'MRI',
    altVipRoom: 'VIP room',
    badge24h: 'Available 24/7',
    badge24hSub: 'Emergency & Intensive Care',
    exploBadge: 'Diagnostics',
    exploTitle: 'Medical Investigations',
    exploDesc: 'Specialized centers for fast, accurate diagnosis.',
    exploCards: [
      { title: 'Cardiac Investigations', desc: 'ECG, Holter monitoring, echocardiography, stress testing' },
      { title: 'Neurophysiological Investigations', desc: 'EEG, EMG, evoked potentials, video-EEG' },
      { title: 'Urodynamic Investigations', desc: 'Uroflowmetry, cystometry, complete urodynamic assessment' },
    ],
    discoverExams: 'Discover the exams',
    chirBadge: 'Specialties',
    chirTitle: 'Our Surgical Specialties',
    chirDesc: 'State-of-the-art operating rooms for every type of procedure.',
    allChirurgies: 'All surgical specialties',
    chirCards: [
      { title: 'Cardiovascular Surgery', desc: 'Catheterization, open-heart surgery, electrophysiology' },
      { title: 'Bariatric Surgery', desc: "Sleeve gastrectomy, gastric bypass — the clinic's flagship specialty" },
      { title: 'Cosmetic Surgery', desc: 'Rhinoplasty, liposuction, facelift, breast augmentation' },
    ],
    learnMore: 'Learn more',
    altSurgery: 'Surgery',
    polesBadge: 'Reputation',
    polesTitle: 'Centers of Excellence',
    polesDesc: 'Flagship departments that built the reputation of Clinique Pasteur.',
    poleCards: [
      { title: 'Cardiovascular Center', desc: 'Catheterization, cardiac surgery, electrophysiology, dedicated cardiac intensive care.', highlights: ['Cardiac catheterization', 'Open-heart surgery', 'Electrophysiology'] },
      { title: 'Radiology Center', desc: 'A high-performance technical platform. Conventional and interventional radiology.', highlights: ['MRI', 'Dual-energy CT scanner', 'Interventional radiology'] },
      { title: 'Surgery Center', desc: "Major digestive and urological surgery. Bariatric surgery built the clinic's reputation.", highlights: ['Bariatric surgery', 'HIPEC', 'Advanced laparoscopy'] },
    ],
    confortBadge: 'Comfort',
    sejourTitle1: 'A stay in',
    sejourTitle2: 'complete comfort',
    sejourDesc: 'From standard to VIP, every room is designed for your well-being. Catering service, air conditioning, WiFi and personalized assistance.',
    confortTags: ['Private rooms', 'Comfort rooms', 'VIP suites', 'Meal service'],
    discoverRooms: 'Discover our rooms',
    confortAlts: ['VIP room', 'Comfort lounge', 'Personalized assistance', 'Comfort room'],
    centresBadge: 'Services',
    centresTitle: 'Our Centers',
    allCentres: 'All centers',
    discover: 'Discover',
    ctaTitle1: 'Ready to take care',
    ctaTitle2: 'of your health?',
    ctaDesc: 'Contact us for a free personalized quote. Our team will respond within 24-48 hours.',
    requestQuote: 'Request a Free Quote',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { q: 'Which specialties are available?', a: 'Cardiovascular, bariatric, cosmetic, orthopedic, urological, ENT, neurosurgery, obstetrics and gynecology, pediatric and oncological surgery, as well as medical consultations in all specialties.' },
      { q: 'Is the emergency department open 24/7?', a: 'Yes, the emergency department operates 24/7 with a qualified team directly connected to the operating rooms and intensive care. Emergency line: +216 36 402 076.' },
      { q: 'How can I get a quote?', a: 'Through our online form, by email at contact@cliniquepasteur.com.tn, or by phone at +216 36 402 000. Response within 24-48 hours.' },
      { q: 'Do you welcome international patients?', a: 'Yes, our commercial department organizes your entire journey: quote, scheduling, accommodation and transfers.' },
      { q: 'What imaging equipment is available?', a: 'MRI, dual-energy CT scanner, mammography, dental panoramic, bone densitometry, ultrasound, interventional radiology.' },
    ],
    followTitle: 'Follow Us',
    followDesc: 'Follow the latest news from Clinique Pasteur Tunis on social media.',
  },
  ar: {
    heroAlt: 'مصحة باستور تونس',
    logoAlt: 'مصحة باستور',
    heroTitle1: 'التميّز',
    heroTitle2: 'في خدمة',
    heroTitle3: 'صحّتكم',
    heroDesc: 'مصحة متعددة الاختصاصات رائدة في المركز العمراني الشمالي بتونس. مسار علاجي مُصمَّم لكم، من التشخيص إلى الشفاء.',
    getQuote: 'احصل على عرض سعر مجاني',
    quickEmergency: 'الطوارئ 24/7',
    quickCardiology: 'أمراض القلب',
    quickAesthetic: 'الجراحة التجميلية',
    quickImaging: 'التصوير الطبي',
    aboutBadge: 'مرحباً بكم',
    aboutTitle1: 'مصحة',
    aboutTitle2: 'مرجعية',
    aboutTitle3: 'في تونس',
    aboutDesc: 'توفر مصحة باستور، الكائنة بالمركز العمراني الشمالي بتونس، رعاية مُشخّصة تجمع بين الخبرة الطبية وأحدث التجهيزات التكنولوجية.',
    feature1: 'قاعات عمليات متطورة',
    feature2: 'إنعاش متخصص',
    feature3: 'ملف مريض مؤمّن',
    feature4: 'فريق متميز',
    discoverClinic: 'اكتشف المصحة',
    altOperatingRoom: 'قاعة العمليات',
    altMri: 'التصوير بالرنين المغناطيسي',
    altVipRoom: 'غرفة VIP',
    badge24h: 'متاح على مدار الساعة',
    badge24hSub: 'الطوارئ والإنعاش',
    exploBadge: 'التشخيص',
    exploTitle: 'الفحوصات الطبية',
    exploDesc: 'مراكز متخصصة لتشخيص دقيق وسريع.',
    exploCards: [
      { title: 'فحوصات القلب', desc: 'تخطيط القلب، هولتر، الموجات فوق الصوتية للقلب، اختبار الجهد' },
      { title: 'الفحوصات العصبية الفيزيولوجية', desc: 'تخطيط الدماغ، تخطيط العضلات، الجهود المستثارة، تخطيط الدماغ بالفيديو' },
      { title: 'فحوصات ديناميكا التبوّل', desc: 'قياس تدفق البول، قياس ضغط المثانة، تقييم ديناميكي بولي كامل' },
    ],
    discoverExams: 'اكتشف الفحوصات',
    chirBadge: 'الاختصاصات',
    chirTitle: 'جراحاتنا',
    chirDesc: 'قاعات عمليات متطورة لجميع أنواع التدخلات الجراحية.',
    allChirurgies: 'جميع الجراحات',
    chirCards: [
      { title: 'جراحة القلب والشرايين', desc: 'القسطرة، جراحة القلب المفتوح، الفيزيولوجيا الكهربائية' },
      { title: 'جراحة السمنة', desc: 'تكميم المعدة، تحويل المسار — الاختصاص الأبرز في المصحة' },
      { title: 'الجراحة التجميلية', desc: 'تجميل الأنف، شفط الدهون، شد الوجه، تكبير الثدي' },
    ],
    learnMore: 'اعرف المزيد',
    altSurgery: 'جراحة',
    polesBadge: 'الريادة',
    polesTitle: 'أقطاب التميّز',
    polesDesc: 'أقطاب مرجعية صنعت شهرة مصحة باستور.',
    poleCards: [
      { title: 'قطب القلب والشرايين', desc: 'القسطرة، جراحة القلب، الفيزيولوجيا الكهربائية، إنعاش قلبي مخصص.', highlights: ['القسطرة القلبية', 'جراحة القلب المفتوح', 'الفيزيولوجيا الكهربائية'] },
      { title: 'قطب الأشعة', desc: 'منصة تقنية عالية الأداء. أشعة تقليدية وتداخلية.', highlights: ['التصوير بالرنين المغناطيسي', 'التصوير المقطعي مزدوج الطاقة', 'الأشعة التداخلية'] },
      { title: 'قطب الجراحة', desc: 'جراحات كبرى للجهاز الهضمي والمسالك البولية. جراحة السمنة صنعت شهرة المصحة.', highlights: ['جراحة السمنة', 'العلاج الكيميائي الحراري داخل الصفاق (HIPEC)', 'تنظير البطن المتقدم'] },
    ],
    confortBadge: 'الراحة',
    sejourTitle1: 'إقامة',
    sejourTitle2: 'بكامل الراحة',
    sejourDesc: 'من الغرف العادية إلى أجنحة VIP، صُممت كل غرفة لراحتكم: خدمة الوجبات، التكييف، الواي فاي ومرافقة مُشخّصة.',
    confortTags: ['غرف فردية', 'غرف مريحة', 'أجنحة VIP', 'خدمة الوجبات'],
    discoverRooms: 'اكتشف غرفنا',
    confortAlts: ['غرفة VIP', 'صالون مريح', 'مرافقة مُشخّصة', 'غرفة مريحة'],
    centresBadge: 'الخدمات',
    centresTitle: 'مراكزنا',
    allCentres: 'جميع المراكز',
    discover: 'اكتشف',
    ctaTitle1: 'هل أنتم مستعدون',
    ctaTitle2: 'للاعتناء بصحتكم؟',
    ctaDesc: 'اتصلوا بنا للحصول على عرض سعر مجاني مُشخّص. يجيبكم فريقنا في غضون 24 إلى 48 ساعة.',
    requestQuote: 'اطلب عرض سعر مجاني',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      { q: 'ما هي الاختصاصات المتوفرة؟', a: 'جراحة القلب والشرايين، جراحة السمنة، الجراحة التجميلية، جراحة العظام، المسالك البولية، الأنف والأذن والحنجرة، جراحة الأعصاب، أمراض النساء والتوليد، جراحة الأطفال، جراحة الأورام، إضافة إلى استشارات طبية في جميع الاختصاصات.' },
      { q: 'هل قسم الطوارئ متاح على مدار الساعة؟', a: 'نعم، الطوارئ متاحة 24 ساعة طيلة أيام الأسبوع بفريق مؤهل ومرتبط مباشرة بقاعات العمليات والإنعاش. الطوارئ: +216 36 402 076.' },
      { q: 'كيف أحصل على عرض سعر؟', a: 'عبر نموذجنا على الإنترنت، أو بالبريد الإلكتروني contact@cliniquepasteur.com.tn، أو بالهاتف على +216 36 402 000. الرد في غضون 24 إلى 48 ساعة.' },
      { q: 'هل تستقبلون المرضى الدوليين؟', a: 'نعم، ينظّم قسمنا التجاري مساركم بالكامل: عرض السعر، التخطيط، الإقامة والتنقلات.' },
      { q: 'ما هي تجهيزات التصوير الطبي المتوفرة؟', a: 'التصوير بالرنين المغناطيسي، التصوير المقطعي مزدوج الطاقة، تصوير الثدي، الأشعة البانورامية للأسنان، قياس كثافة العظام، الموجات فوق الصوتية، الأشعة التداخلية.' },
    ],
    followTitle: 'تابعونا',
    followDesc: 'تابعوا آخر أخبار مصحة باستور تونس على شبكات التواصل الاجتماعي.',
  },
} as const

export default function HomePage({ params }: { params: { locale: string } }) {
  const { clinicInfo, chirurgies, centres } = getContent(params.locale as any)
  const t = (UI as any)[params.locale] || UI.fr
  return (
    <>
      {/* ============ HERO - Full Impact ============ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic-building.webp" alt={t.heroAlt} fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.7) 0%, rgba(45,140,78,0.4) 100%)' }} />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-white/5 hidden lg:block" />
        <div className="absolute top-32 right-32 w-72 h-72 rounded-full border border-white/5 hidden lg:block" />

        <div className="relative container-custom px-4 py-20">
          <div className="max-w-3xl">
            <Image src="/images/logo-fr.png" alt={t.logoAlt} width={483} height={97} className="h-14 md:h-16 w-auto mb-10 drop-shadow-2xl" />

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] mb-8">
              {t.heroTitle1}<br />
              <span style={{ color: '#C8A96E' }}>{t.heroTitle2}</span><br />
              {t.heroTitle3}
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/devis" className="btn-gold text-lg group">
                {t.getQuote}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-lg">
                <Phone className="w-5 h-5 mr-3" /> 36 402 000
              </a>
            </div>

            {/* Quick access cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Siren, label: t.quickEmergency, href: '/centres/urgences', color: '#ef4444' },
                { icon: Heart, label: t.quickCardiology, href: '/chirurgies/chirurgie-cardiovasculaire', color: '#f43f5e' },
                { icon: Sparkles, label: t.quickAesthetic, href: '/chirurgies/chirurgie-esthetique', color: '#a855f7' },
                { icon: ScanLine, label: t.quickImaging, href: '/centres/radiologie', color: '#3b82f6' },
              ].map(({ icon: Icon, label, href, color }) => (
                <Link key={label} href={href} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:bg-white/20 transition-all group">
                  <Icon className="w-5 h-5 flex-shrink-0" style={{ color }} />
                  <span className="text-white text-sm font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT - Visual Split ============ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-clinic-green/10 text-clinic-green font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                  {t.aboutBadge}
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  {t.aboutTitle1}<br /><span style={{ color: '#2D8C4E' }}>{t.aboutTitle2}</span> {t.aboutTitle3}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {t.aboutDesc}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Stethoscope, text: t.feature1 },
                    { icon: Heart, text: t.feature2 },
                    { icon: Shield, text: t.feature3 },
                    { icon: CheckCircle2, text: t.feature4 },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Icon className="w-5 h-5 text-clinic-green flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
                <Link href="/la-clinique" className="btn-primary">
                  {t.discoverClinic} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Asymmetric image layout */}
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-clinic-green/10 rounded-full blur-3xl" />
                <div className="relative grid grid-cols-12 gap-4">
                  <div className="col-span-7 rounded-3xl overflow-hidden shadow-2xl h-80">
                    <Image src="/images/surgery-blue-3.webp" alt={t.altOperatingRoom} width={500} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="col-span-5 space-y-4 pt-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl h-32">
                      <Image src="/images/radiologie-irm.webp" alt={t.altMri} width={300} height={200} className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-xl h-32">
                      <Image src="/images/h1.webp" alt={t.altVipRoom} width={300} height={200} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-3">
                  <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.badge24h}</p>
                    <p className="text-gray-500 text-xs">{t.badge24hSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ EXPLORATIONS - Cards with gradient ============ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll className="text-center mb-14">
            <div className="inline-block bg-clinic-green/10 text-clinic-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              {t.exploBadge}
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              {t.exploTitle}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t.exploDesc}
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HeartPulse, title: t.exploCards[0].title, desc: t.exploCards[0].desc, href: '/explorations/explorations-cardiaques', img: '/images/fiches/home-explo-cardiaque.webp', gradient: 'from-rose-500 to-red-600' },
              { icon: Brain, title: t.exploCards[1].title, desc: t.exploCards[1].desc, href: '/explorations/explorations-neurophysiologiques', img: '/images/fiches/home-explo-neuro.webp', gradient: 'from-violet-500 to-purple-600' },
              { icon: Activity, title: t.exploCards[2].title, desc: t.exploCards[2].desc, href: '/explorations/explorations-urodynamiques', img: '/images/fiches/home-explo-urodynamique.webp', gradient: 'from-teal-500 to-emerald-600' },
            ].map(({ icon: Icon, title, desc, href, img }, i) => (
              <AnimateOnScroll key={title} delay={i * 150} className="h-full">
                <Link href={href} className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={img} alt={title} width={500} height={300} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-gray-900/10 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 group-hover:text-clinic-green transition">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                    <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all mt-auto">
                      {t.discoverExams} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHIRURGIES - Featured + Grid ============ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <div className="inline-block bg-clinic-green/10 text-clinic-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                {t.chirBadge}
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-2">
                {t.chirTitle}
              </h2>
              <p className="text-gray-600 max-w-xl">
                {t.chirDesc}
              </p>
            </div>
            <Link href="/chirurgies" className="btn-secondary mt-4 md:mt-0 text-sm">
              {t.allChirurgies} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimateOnScroll>

          {/* Featured 3 */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: t.chirCards[0].title, desc: t.chirCards[0].desc, img: '/images/fiches/home-chir-cardiovasc.webp', href: '/chirurgies/chirurgie-cardiovasculaire' },
              { title: t.chirCards[1].title, desc: t.chirCards[1].desc, img: '/images/fiches/home-chir-bariatrique.webp', href: '/chirurgies/chirurgie-bariatrique' },
              { title: t.chirCards[2].title, desc: t.chirCards[2].desc, img: '/images/fiches/home-chir-esthetique.webp', href: '/chirurgies/chirurgie-esthetique' },
            ].map(({ title, desc, img, href }, i) => (
              <AnimateOnScroll key={title} delay={i * 100}>
                <Link href={href} className="block rounded-3xl overflow-hidden shadow-lg group relative h-80 hover:shadow-2xl transition-all">
                  <Image src={img} alt={title} width={600} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-heading font-bold text-xl mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{desc}</p>
                    <span className="text-clinic-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                      {t.learnMore} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Other chirurgies */}
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {chirurgies.filter(c => !['chirurgie-cardiovasculaire', 'chirurgie-bariatrique', 'chirurgie-esthetique'].includes(c.slug)).slice(0, 9).map((chir) => {
                const iconMap: Record<string, any> = { Heart, Stethoscope, Activity, Sparkles, Brain, Baby, Shield, Zap, Eye, HeartPulse, ScanLine }
                const Icon = iconMap[chir.icon] || Stethoscope
                return (
                  <Link key={chir.slug} href={`/chirurgies/${chir.slug}`} className="group flex items-center gap-3 p-4 rounded-xl hover:bg-green-50 transition-all border border-gray-100 hover:border-green-200">
                    <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-clinic-green transition text-sm">{chir.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-clinic-green transition" />
                  </Link>
                )
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ PÔLES D'EXCELLENCE - Dark dramatic ============ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/surgery-blue-3.webp" alt={t.altSurgery} fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(26,92,50,0.85) 100%)' }} />
        </div>
        <div className="container-custom relative text-white">
          <AnimateOnScroll className="text-center mb-14">
            <span className="inline-block bg-clinic-gold/20 text-clinic-gold font-semibold text-sm px-4 py-1.5 rounded-full mb-4">{t.polesBadge}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              {t.polesTitle}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {t.polesDesc}
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: t.poleCards[0].title, desc: t.poleCards[0].desc, highlights: t.poleCards[0].highlights, href: '/chirurgies/chirurgie-cardiovasculaire' },
              { icon: ScanLine, title: t.poleCards[1].title, desc: t.poleCards[1].desc, highlights: t.poleCards[1].highlights, href: '/centres/radiologie' },
              { icon: Stethoscope, title: t.poleCards[2].title, desc: t.poleCards[2].desc, highlights: t.poleCards[2].highlights, href: '/chirurgies/chirurgie-bariatrique' },
            ].map(({ icon: Icon, title, desc, highlights, href }, i) => (
              <AnimateOnScroll key={title} delay={i * 150} className="h-full">
                <Link href={href} className="flex flex-col h-full bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.1] transition-all group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-gold/30 to-clinic-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-clinic-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {highlights.map((h: string) => (
                      <li key={h} className="flex items-center gap-2 text-green-300/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                  <span className="text-clinic-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all mt-auto">
                    {t.learnMore} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOSPITALISATION - Elegant ============ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-clinic-green/10 text-clinic-green font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                  {t.confortBadge}
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  {t.sejourTitle1}<br /><span style={{ color: '#8a6c33' }}>{t.sejourTitle2}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {t.sejourDesc}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {t.confortTags.map((label: string) => (
                    <span key={label} className="bg-green-50 text-clinic-green text-sm px-5 py-2.5 rounded-full font-medium border border-green-100">
                      {label}
                    </span>
                  ))}
                </div>
                <Link href="/hospitalisation" className="btn-primary">
                  {t.discoverRooms} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                {[
                  { img: '/images/fiches/home-confort-1.webp', alt: t.confortAlts[0] },
                  { img: '/images/fiches/home-confort-2.webp', alt: t.confortAlts[1] },
                  { img: '/images/fiches/home-confort-3.webp', alt: t.confortAlts[2] },
                  { img: '/images/fiches/home-confort-4.webp', alt: t.confortAlts[3] },
                ].map(({ img, alt }) => (
                  <div key={alt} className="rounded-2xl overflow-hidden shadow-lg h-48 hover:shadow-xl transition-shadow">
                    <Image src={img} alt={alt} width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ CENTRES - Clean grid ============ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <div className="inline-block bg-clinic-green/10 text-clinic-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                {t.centresBadge}
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-2">{t.centresTitle}</h2>
            </div>
            <Link href="/centres" className="btn-secondary mt-4 md:mt-0 text-sm">
              {t.allCentres} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((centre, i) => (
              <AnimateOnScroll key={centre.slug} delay={i * 80}>
                <Link href={`/centres/${centre.slug}`} className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group border border-gray-100 hover:border-clinic-green/30 hover:-translate-y-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-clinic-green transition mb-2">{centre.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{centre.description}</p>
                  <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                    {t.discover} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA - Bold ============ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, white 2px, transparent 2px), radial-gradient(circle at 75% 50%, white 2px, transparent 2px)', backgroundSize: '60px 60px' }} />
        <div className="container-custom relative text-center text-white">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {t.ctaTitle1}<br />{t.ctaTitle2}
            </h2>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="btn-gold text-lg">
                {t.requestQuote} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href={`tel:$<span dir="ltr">{clinicInfo.phone}</span>`} className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg">
                <Phone className="w-5 h-5 mr-2" /> 36 402 000
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ FAQ - Minimal ============ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              {t.faqTitle}
            </h2>
          </AnimateOnScroll>
          <div className="space-y-3">
            {t.faq.map(({ q, a }: { q: string; a: string }) => (
              <details key={q} className="group rounded-2xl border border-gray-200 hover:border-clinic-green/40 transition-colors overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:text-clinic-green transition">
                  {q}
                  <ArrowRight className="w-5 h-5 rotate-90 group-open:-rotate-90 transition-transform flex-shrink-0 ml-4 text-gray-400" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Suivez-nous ============ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
              {t.followTitle}
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              {t.followDesc}
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
