'use client'
import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

const UI: any = {
  fr: {
    successTitle: 'Demande envoyée avec succès !', successMsg: 'Notre équipe commerciale vous répondra sous 24-48h avec un devis personnalisé.', sendAnother: 'Envoyer une autre demande',
    fileTooBigPre: 'Le fichier « ', fileTooBigPost: ' » dépasse 10 Mo.', attachExceed: 'Les pièces jointes dépassent 15 Mo au total.', errorMsg: 'Une erreur est survenue. Veuillez réessayer ou appeler le +216 36 402 000.',
    secPersonal: 'Informations Personnelles', lNom: 'Nom *', phNom: 'Votre nom', lPrenom: 'Prénom *', phPrenom: 'Votre prénom', lEmail: 'Email *', phEmail: 'votre@email.com', lTel: 'Téléphone *', lPays: 'Pays de résidence *', optSelectCountry: 'Sélectionnez votre pays', lAge: 'Âge', phAge: 'Votre âge',
    secMedical: 'Informations Médicales', lService: 'Service souhaité *', optSelectService: 'Sélectionnez un service', lChambre: 'Type de chambre souhaité', lMessage: 'Décrivez votre besoin médical *', phMessage: "Décrivez votre pathologie, l'intervention souhaitée, vos antécédents médicaux pertinents...", lDate: 'Date souhaitée (approximative)', lFiles: 'Documents médicaux (rapports, radios, ordonnances...)', filesHint: 'PDF, JPG, PNG, DOC, DICOM — Max 10 Mo par fichier',
    consent: "J'accepte que mes données personnelles soient traitées par la Clinique Pasteur Tunis dans le cadre de ma demande de devis. Mes données sont confidentielles et ne seront jamais partagées avec des tiers. *",
    sending: 'Envoi en cours...', submit: 'Envoyer ma Demande de Devis',
  },
  en: {
    successTitle: 'Request sent successfully!', successMsg: 'Our team will get back to you within 24-48h with a personalized quote.', sendAnother: 'Send another request',
    fileTooBigPre: 'File « ', fileTooBigPost: ' » exceeds 10 MB.', attachExceed: 'Attachments exceed 15 MB in total.', errorMsg: 'An error occurred. Please try again or call +216 36 402 000.',
    secPersonal: 'Personal Information', lNom: 'Last name *', phNom: 'Your last name', lPrenom: 'First name *', phPrenom: 'Your first name', lEmail: 'Email *', phEmail: 'your@email.com', lTel: 'Phone *', lPays: 'Country of residence *', optSelectCountry: 'Select your country', lAge: 'Age', phAge: 'Your age',
    secMedical: 'Medical Information', lService: 'Desired service *', optSelectService: 'Select a service', lChambre: 'Preferred room type', lMessage: 'Describe your medical need *', phMessage: 'Describe your condition, the intervention you want, relevant medical history...', lDate: 'Preferred date (approximate)', lFiles: 'Medical documents (reports, scans, prescriptions...)', filesHint: 'PDF, JPG, PNG, DOC, DICOM — Max 10 MB per file',
    consent: 'I agree that my personal data may be processed by Clinique Pasteur Tunis as part of my quote request. My data is confidential and will never be shared with third parties. *',
    sending: 'Sending...', submit: 'Send my Quote Request',
  },
  ar: {
    successTitle: 'تم إرسال الطلب بنجاح!', successMsg: 'سيرد عليك فريقنا خلال 24-48 ساعة بعرض أسعار مخصّص.', sendAnother: 'إرسال طلب آخر',
    fileTooBigPre: 'الملف « ', fileTooBigPost: ' » يتجاوز 10 ميغابايت.', attachExceed: 'تتجاوز المرفقات 15 ميغابايت إجمالاً.', errorMsg: 'حدث خطأ. يرجى المحاولة مرة أخرى أو الاتصال على +216 36 402 000.',
    secPersonal: 'المعلومات الشخصية', lNom: 'اللقب *', phNom: 'لقبك', lPrenom: 'الاسم *', phPrenom: 'اسمك', lEmail: 'البريد الإلكتروني *', phEmail: 'your@email.com', lTel: 'الهاتف *', lPays: 'بلد الإقامة *', optSelectCountry: 'اختر بلدك', lAge: 'العمر', phAge: 'عمرك',
    secMedical: 'المعلومات الطبية', lService: 'الخدمة المطلوبة *', optSelectService: 'اختر خدمة', lChambre: 'نوع الغرفة المفضّل', lMessage: 'صف حاجتك الطبية *', phMessage: 'صف حالتك، التدخل المطلوب، وسوابقك الطبية ذات الصلة...', lDate: 'التاريخ المفضّل (تقريبي)', lFiles: 'المستندات الطبية (تقارير، صور أشعة، وصفات...)', filesHint: 'PDF, JPG, PNG, DOC, DICOM — بحد أقصى 10 ميغابايت لكل ملف',
    consent: 'أوافق على معالجة بياناتي الشخصية من قِبل عيادة باستور تونس في إطار طلب عرض الأسعار. بياناتي سرية ولن تُشارك أبداً مع أي طرف ثالث. *',
    sending: 'جارٍ الإرسال...', submit: 'إرسال طلب عرض الأسعار',
  },
}

// value = valeur envoyée au back-end (rester en FR) ; fr/en/ar = libellé affiché
const COUNTRIES = [
  { v: 'Tunisie', fr: 'Tunisie', en: 'Tunisia', ar: 'تونس' },
  { v: 'France', fr: 'France', en: 'France', ar: 'فرنسا' },
  { v: 'Belgique', fr: 'Belgique', en: 'Belgium', ar: 'بلجيكا' },
  { v: 'Suisse', fr: 'Suisse', en: 'Switzerland', ar: 'سويسرا' },
  { v: 'Canada', fr: 'Canada', en: 'Canada', ar: 'كندا' },
  { v: 'Allemagne', fr: 'Allemagne', en: 'Germany', ar: 'ألمانيا' },
  { v: 'Royaume-Uni', fr: 'Royaume-Uni', en: 'United Kingdom', ar: 'المملكة المتحدة' },
  { v: 'Italie', fr: 'Italie', en: 'Italy', ar: 'إيطاليا' },
  { v: 'Algérie', fr: 'Algérie', en: 'Algeria', ar: 'الجزائر' },
  { v: 'Maroc', fr: 'Maroc', en: 'Morocco', ar: 'المغرب' },
  { v: 'Libye', fr: 'Libye', en: 'Libya', ar: 'ليبيا' },
  { v: 'Arabie Saoudite', fr: 'Arabie Saoudite', en: 'Saudi Arabia', ar: 'السعودية' },
  { v: 'Émirats Arabes Unis', fr: 'Émirats Arabes Unis', en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' },
  { v: 'Qatar', fr: 'Qatar', en: 'Qatar', ar: 'قطر' },
  { v: 'Autre', fr: 'Autre', en: 'Other', ar: 'أخرى' },
]

const SERVICES = [
  { g: { fr: 'Consultations médicales', en: 'Medical consultations', ar: 'الاستشارات الطبية' }, opts: [
    { v: 'Consultation cardiologie', fr: 'Consultation cardiologie', en: 'Cardiology consultation', ar: 'استشارة أمراض القلب' },
    { v: 'Consultation pneumologie', fr: 'Consultation pneumologie', en: 'Pulmonology consultation', ar: 'استشارة أمراض الصدر' },
    { v: 'Consultation gastro-entérologie', fr: 'Consultation gastro-entérologie', en: 'Gastroenterology consultation', ar: 'استشارة الجهاز الهضمي' },
    { v: 'Consultation neurologie', fr: 'Consultation neurologie', en: 'Neurology consultation', ar: 'استشارة الأعصاب' },
    { v: 'Consultation urologie', fr: 'Consultation urologie', en: 'Urology consultation', ar: 'استشارة المسالك البولية' },
    { v: 'Consultation gynécologie', fr: 'Consultation gynécologie', en: 'Gynecology consultation', ar: 'استشارة أمراض النساء' },
    { v: 'Consultation ORL', fr: 'Consultation ORL', en: 'ENT consultation', ar: 'استشارة الأنف والأذن والحنجرة' },
    { v: 'Consultation orthopédie', fr: 'Consultation orthopédie', en: 'Orthopedic consultation', ar: 'استشارة جراحة العظام' },
    { v: 'Consultation dermatologie', fr: 'Consultation dermatologie', en: 'Dermatology consultation', ar: 'استشارة الأمراض الجلدية' },
    { v: 'Consultation endocrinologie', fr: 'Consultation endocrinologie', en: 'Endocrinology consultation', ar: 'استشارة الغدد الصماء' },
    { v: 'Consultation rhumatologie', fr: 'Consultation rhumatologie', en: 'Rheumatology consultation', ar: 'استشارة أمراض الروماتيزم' },
    { v: 'Consultation médecine interne', fr: 'Consultation médecine interne', en: 'Internal medicine consultation', ar: 'استشارة الطب الباطني' },
    { v: 'Consultation pédiatrie', fr: 'Consultation pédiatrie', en: 'Pediatrics consultation', ar: 'استشارة طب الأطفال' },
    { v: 'Consultation nutrition / diététique', fr: 'Consultation nutrition / diététique', en: 'Nutrition / dietetics consultation', ar: 'استشارة التغذية' },
  ]},
  { g: { fr: 'Explorations & Examens', en: 'Investigations & Tests', ar: 'الاستكشافات والفحوصات' }, opts: [
    { v: 'Explorations cardiaques (ECG, Holter, écho)', fr: 'Explorations cardiaques (ECG, Holter, échographie)', en: 'Cardiac investigations (ECG, Holter, ultrasound)', ar: 'الاستكشافات القلبية (تخطيط، هولتر، إيكو)' },
    { v: 'Explorations neurophysiologiques (EEG, EMG)', fr: 'Explorations neurophysiologiques (EEG, EMG)', en: 'Neurophysiological investigations (EEG, EMG)', ar: 'الاستكشافات الفيزيولوجية العصبية (EEG, EMG)' },
    { v: 'Explorations urodynamiques', fr: 'Explorations urodynamiques', en: 'Urodynamic investigations', ar: 'استكشافات ديناميكا البول' },
    { v: 'Endoscopie (FOGD, coloscopie)', fr: 'Endoscopie (fibroscopie, coloscopie)', en: 'Endoscopy (gastroscopy, colonoscopy)', ar: 'التنظير (تنظير المعدة والقولون)' },
    { v: 'Bilan de santé complet', fr: 'Bilan de santé complet', en: 'Complete health check-up', ar: 'فحص صحي شامل' },
    { v: 'Bilan pré-opératoire', fr: 'Bilan pré-opératoire', en: 'Pre-operative assessment', ar: 'تقييم ما قبل الجراحة' },
  ]},
  { g: { fr: 'Imagerie médicale', en: 'Medical imaging', ar: 'التصوير الطبي' }, opts: [
    { v: 'IRM', fr: 'IRM (Imagerie par Résonance Magnétique)', en: 'MRI (Magnetic Resonance Imaging)', ar: 'التصوير بالرنين المغناطيسي (IRM)' },
    { v: 'Scanner', fr: 'Scanner', en: 'CT scan', ar: 'الأشعة المقطعية' },
    { v: 'Mammographie', fr: 'Mammographie', en: 'Mammography', ar: 'تصوير الثدي' },
    { v: 'Échographie', fr: 'Échographie', en: 'Ultrasound', ar: 'التصوير بالموجات فوق الصوتية' },
    { v: 'Radiologie conventionnelle', fr: 'Radiologie conventionnelle', en: 'Conventional radiology', ar: 'الأشعة التقليدية' },
    { v: 'Ostéodensitométrie', fr: 'Ostéodensitométrie', en: 'Bone densitometry', ar: 'قياس كثافة العظام' },
    { v: 'Panoramique dentaire', fr: 'Panoramique dentaire', en: 'Dental panoramic', ar: 'الأشعة البانورامية للأسنان' },
  ]},
  { g: { fr: 'Chirurgies', en: 'Surgery', ar: 'الجراحات' }, opts: [
    { v: 'Chirurgie cardiovasculaire et thoracique', fr: 'Chirurgie cardiovasculaire et thoracique', en: 'Cardiovascular & thoracic surgery', ar: 'جراحة القلب والأوعية والصدر' },
    { v: 'Chirurgie générale', fr: 'Chirurgie générale', en: 'General surgery', ar: 'الجراحة العامة' },
    { v: 'Chirurgie bariatrique (obésité)', fr: 'Chirurgie bariatrique (sleeve, bypass)', en: 'Bariatric surgery (sleeve, bypass)', ar: 'جراحة السمنة (تكميم، تحويل مسار)' },
    { v: 'Chirurgie esthétique et réparatrice', fr: 'Chirurgie esthétique et réparatrice', en: 'Cosmetic & reconstructive surgery', ar: 'الجراحة التجميلية والترميمية' },
    { v: 'Chirurgie orthopédique', fr: 'Chirurgie orthopédique', en: 'Orthopedic surgery', ar: 'جراحة العظام' },
    { v: 'Chirurgie urologique', fr: 'Chirurgie urologique', en: 'Urological surgery', ar: 'جراحة المسالك البولية' },
    { v: 'Chirurgie ORL', fr: 'Chirurgie ORL', en: 'ENT surgery', ar: 'جراحة الأنف والأذن والحنجرة' },
    { v: 'Neurochirurgie', fr: 'Neurochirurgie', en: 'Neurosurgery', ar: 'جراحة الأعصاب' },
    { v: 'Chirurgie pédiatrique', fr: 'Chirurgie pédiatrique', en: 'Pediatric surgery', ar: 'جراحة الأطفال' },
    { v: 'Chirurgie gynéco-obstétrique', fr: 'Chirurgie gynéco-obstétrique', en: 'Gynecological & obstetric surgery', ar: 'جراحة النساء والتوليد' },
    { v: 'Chirurgie carcinologique (cancers)', fr: 'Chirurgie carcinologique (cancers)', en: 'Cancer surgery', ar: 'جراحة الأورام (السرطان)' },
    { v: 'Chirurgie endoscopique', fr: 'Chirurgie endoscopique', en: 'Endoscopic surgery', ar: 'الجراحة التنظيرية' },
    { v: 'Chirurgie cœlioscopique', fr: 'Chirurgie cœlioscopique (laparoscopie)', en: 'Laparoscopic surgery', ar: 'الجراحة بالمنظار' },
    { v: 'Électrophysiologie cardiaque', fr: 'Électrophysiologie cardiaque', en: 'Cardiac electrophysiology', ar: 'الفيزيولوجيا الكهربائية للقلب' },
  ]},
  { g: { fr: 'Maternité & Obstétrique', en: 'Maternity & Obstetrics', ar: 'الأمومة والتوليد' }, opts: [
    { v: 'Suivi de grossesse', fr: 'Suivi de grossesse', en: 'Pregnancy follow-up', ar: 'متابعة الحمل' },
    { v: 'Accouchement', fr: 'Accouchement', en: 'Delivery', ar: 'الولادة' },
    { v: 'Césarienne', fr: 'Césarienne', en: 'C-section', ar: 'الولادة القيصرية' },
  ]},
  { g: { fr: 'Autres services', en: 'Other services', ar: 'خدمات أخرى' }, opts: [
    { v: 'Urgences', fr: 'Urgences', en: 'Emergency', ar: 'الطوارئ' },
    { v: 'Hospitalisation', fr: 'Hospitalisation', en: 'Hospitalization', ar: 'الإقامة بالمستشفى' },
    { v: 'Coaching nutritionnel', fr: 'Coaching nutritionnel', en: 'Nutritional coaching', ar: 'المرافقة الغذائية' },
    { v: 'Soins esthétiques (non chirurgicaux)', fr: 'Soins esthétiques (non chirurgicaux)', en: 'Aesthetic care (non-surgical)', ar: 'العناية التجميلية (غير الجراحية)' },
    { v: 'Médecine esthétique (injections, peelings)', fr: 'Médecine esthétique (injections, peelings)', en: 'Aesthetic medicine (injections, peels)', ar: 'الطب التجميلي (حقن، تقشير)' },
    { v: 'Rééducation / Kinésithérapie', fr: 'Rééducation / Kinésithérapie', en: 'Rehabilitation / Physiotherapy', ar: 'إعادة التأهيل / العلاج الطبيعي' },
    { v: 'Autre', fr: 'Autre (préciser dans le message)', en: 'Other (specify in the message)', ar: 'أخرى (يُرجى التحديد في الرسالة)' },
  ]},
]

const CHAMBRES = [
  { v: '', fr: 'Pas de préférence', en: 'No preference', ar: 'لا تفضيل' },
  { v: 'Individuelle', fr: 'Chambre Individuelle', en: 'Single room', ar: 'غرفة فردية' },
  { v: 'Confort', fr: 'Chambre Confort', en: 'Comfort room', ar: 'غرفة مريحة' },
  { v: 'VIP', fr: 'Suite / VIP', en: 'Suite / VIP', ar: 'جناح / VIP' },
]

export default function DevisForm({ locale = 'fr' }: { locale?: string } = {}) {
  const t = UI[locale] || UI.fr
  const L = (o: any) => o[locale] || o.fr
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-clinic-green mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{t.successTitle}</h3>
        <p className="text-gray-600 mb-6">{t.successMsg}</p>
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

        const files: { name: string; content: string; type: string }[] = []
        const fileInput = formData.getAll('fichiers') as File[]
        let totalBytes = 0
        for (const file of fileInput) {
          if (file && file.size > 0) {
            totalBytes += file.size
            if (file.size > 10 * 1024 * 1024) {
              setError(`${t.fileTooBigPre}${file.name}${t.fileTooBigPost}`)
              setLoading(false)
              return
            }
            if (totalBytes > 15 * 1024 * 1024) {
              setError(t.attachExceed)
              setLoading(false)
              return
            }
            const bytes = new Uint8Array(await file.arrayBuffer())
            let binary = ''
            const CHUNK = 0x8000
            for (let i = 0; i < bytes.length; i += CHUNK) {
              binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK))
            }
            files.push({ name: file.name, content: btoa(binary), type: file.type })
          }
        }

        const data = {
          nom: formData.get('nom'),
          prenom: formData.get('prenom'),
          email: formData.get('email'),
          telephone: formData.get('telephone'),
          pays: formData.get('pays'),
          age: formData.get('age'),
          specialite: formData.get('specialite'),
          typeChambre: formData.get('typeChambre'),
          message: formData.get('message'),
          date: formData.get('date'),
          website: formData.get('website'),
          fichiers: files,
        }
        try {
          const res = await fetch('/api/devis', {
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
      className="space-y-6"
    >
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {/* Honeypot anti-spam : champ caché, invisible pour les humains */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {/* Informations personnelles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">{t.secPersonal}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="devis-nom" className="block text-sm font-medium text-gray-700 mb-1">{t.lNom}</label>
            <input id="devis-nom" name="nom" type="text" required autoComplete="family-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.phNom} />
          </div>
          <div>
            <label htmlFor="devis-prenom" className="block text-sm font-medium text-gray-700 mb-1">{t.lPrenom}</label>
            <input id="devis-prenom" name="prenom" type="text" required autoComplete="given-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.phPrenom} />
          </div>
          <div>
            <label htmlFor="devis-email" className="block text-sm font-medium text-gray-700 mb-1">{t.lEmail}</label>
            <input id="devis-email" name="email" type="email" required autoComplete="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.phEmail} />
          </div>
          <div>
            <label htmlFor="devis-telephone" className="block text-sm font-medium text-gray-700 mb-1">{t.lTel}</label>
            <input id="devis-telephone" name="telephone" type="tel" required autoComplete="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="+216 XX XXX XXX" />
          </div>
          <div>
            <label htmlFor="devis-pays" className="block text-sm font-medium text-gray-700 mb-1">{t.lPays}</label>
            <select id="devis-pays" name="pays" required autoComplete="country-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">{t.optSelectCountry}</option>
              {COUNTRIES.map((c) => (
                <option key={c.v} value={c.v}>{L(c)}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="devis-age" className="block text-sm font-medium text-gray-700 mb-1">{t.lAge}</label>
            <input id="devis-age" name="age" type="number" min="0" max="120" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder={t.phAge} />
          </div>
        </div>
      </div>

      {/* Informations médicales */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">{t.secMedical}</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="devis-specialite" className="block text-sm font-medium text-gray-700 mb-1">{t.lService}</label>
            <select id="devis-specialite" name="specialite" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">{t.optSelectService}</option>
              {SERVICES.map((grp) => (
                <optgroup key={grp.g.fr} label={L(grp.g)}>
                  {grp.opts.map((o) => (
                    <option key={o.v} value={o.v}>{L(o)}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="devis-typeChambre" className="block text-sm font-medium text-gray-700 mb-1">{t.lChambre}</label>
            <select id="devis-typeChambre" name="typeChambre" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              {CHAMBRES.map((c) => (
                <option key={c.v} value={c.v}>{L(c)}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="devis-message" className="block text-sm font-medium text-gray-700 mb-1">{t.lMessage}</label>
            <textarea
              id="devis-message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition resize-none"
              placeholder={t.phMessage}
            />
          </div>
          <div>
            <label htmlFor="devis-date" className="block text-sm font-medium text-gray-700 mb-1">{t.lDate}</label>
            <input id="devis-date" name="date" type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" />
          </div>
          <div>
            <label htmlFor="devis-fichiers" className="block text-sm font-medium text-gray-700 mb-1">{t.lFiles}</label>
            <input
              id="devis-fichiers"
              name="fichiers"
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.dicom,.dcm"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-clinic-green hover:file:bg-green-100 file:cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">{t.filesHint}</p>
          </div>
        </div>
      </div>

      {/* Consentement */}
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="mt-1 w-4 h-4 text-clinic-green border-gray-300 rounded focus:ring-clinic-green" />
          <span className="text-sm text-gray-600">{t.consent}</span>
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full text-lg justify-center">
        {loading ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> {t.sending}</>
        ) : (
          <><Send className="w-5 h-5 mr-2" /> {t.submit}</>
        )}
      </button>
    </form>
  )
}
