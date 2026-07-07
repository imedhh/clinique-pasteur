import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, Clock, CheckCircle2, Shield, FileText } from 'lucide-react'
import { getContent } from '@/lib/i18n/content'
import DevisForm from '@/components/DevisForm'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const M: any = {
    fr: { title: 'Demander un Devis Gratuit', description: 'Obtenez un devis gratuit et personnalisé pour votre intervention à la Clinique Pasteur Tunis. Réponse sous 24-48h. Chirurgie, examens, hospitalisation.' },
    en: { title: 'Request a Free Quote', description: 'Get a free, personalized quote for your procedure at Clinique Pasteur Tunis. Reply within 24-48h. Surgery, tests, hospitalization.' },
    ar: { title: 'اطلب عرض أسعار مجاني', description: 'احصل على عرض أسعار مجاني ومخصّص لتدخلك في عيادة باستور تونس. رد خلال 24-48 ساعة. جراحة، فحوصات، إقامة.' },
  }
  return M[params.locale] || M.fr
}

export default function DevisPage({ params }: { params: { locale: string } }) {
  const { clinicInfo } = getContent(params.locale as any)
  const DUI: any = {
    fr: { badge: 'Devis gratuit', title: 'Demandez votre Devis Personnalisé', desc: "Remplissez le formulaire ci-dessous et recevez un devis détaillé sous 24 à 48 heures. Notre équipe commerciale vous accompagne dans votre parcours de soins.", formTitle: 'Formulaire de Demande de Devis', required: "Tous les champs marqués d'un * sont obligatoires", how: 'Comment ça marche ?', s1t: 'Remplissez le formulaire', s1d: 'Décrivez vos besoins médicaux et joignez vos documents si nécessaire.', s2t: 'Recevez votre devis', s2d: 'Notre équipe vous envoie un devis détaillé sous 24-48h.', s3t: 'Planifiez votre séjour', s3d: 'Nous organisons votre parcours de soins de A à Z.', direct: 'Contact Direct', std: 'Standard', comm: 'Service commercial', guarantees: 'Nos Garanties', g: ['Devis 100% gratuit et sans engagement', 'Réponse sous 24-48h', 'Accompagnement personnalisé', 'Confidentialité des données médicales', 'Tarifs transparents et compétitifs'] },
    en: { badge: 'Free quote', title: 'Request your Personalized Quote', desc: 'Fill in the form below and receive a detailed quote within 24 to 48 hours. Our team supports you throughout your care journey.', formTitle: 'Quote Request Form', required: 'All fields marked with * are required', how: 'How does it work?', s1t: 'Fill in the form', s1d: 'Describe your medical needs and attach your documents if needed.', s2t: 'Receive your quote', s2d: 'Our team sends you a detailed quote within 24-48h.', s3t: 'Plan your stay', s3d: 'We organize your care journey from A to Z.', direct: 'Direct Contact', std: 'Reception', comm: 'Sales department', guarantees: 'Our Guarantees', g: ['100% free quote with no obligation', 'Reply within 24-48h', 'Personalized support', 'Confidentiality of medical data', 'Transparent, competitive pricing'] },
    ar: { badge: 'عرض أسعار مجاني', title: 'اطلب عرض الأسعار الخاص بك', desc: 'املأ النموذج أدناه واحصل على عرض أسعار مفصّل خلال 24 إلى 48 ساعة. يرافقك فريقنا في مسار علاجك.', formTitle: 'نموذج طلب عرض أسعار', required: 'جميع الحقول المميّزة بعلامة * إلزامية', how: 'كيف تسير العملية؟', s1t: 'املأ النموذج', s1d: 'صف احتياجاتك الطبية وأرفق مستنداتك عند الحاجة.', s2t: 'استلم عرض أسعارك', s2d: 'يرسل لك فريقنا عرض أسعار مفصّلاً خلال 24-48 ساعة.', s3t: 'خطّط لإقامتك', s3d: 'ننظّم مسار علاجك من الألف إلى الياء.', direct: 'اتصال مباشر', std: 'المقسم', comm: 'القسم التجاري', guarantees: 'ضماناتنا', g: ['عرض أسعار مجاني 100% ودون التزام', 'الرد خلال 24-48 ساعة', 'مرافقة شخصية', 'سرية البيانات الطبية', 'أسعار شفافة وتنافسية'] },
  }
  const t = DUI[params.locale] || DUI.fr
  return (
    <>
      <section className="relative py-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/medical-team.webp" alt="Équipe Clinique Pasteur Tunis" fill className="object-cover" />
          <div className="absolute inset-0 bg-emerald-900/85" />
        </div>
        <div className="container-custom px-4 relative">
          <div className="max-w-3xl">
            <span className="text-amber-100 font-semibold text-sm uppercase tracking-wider">{t.badge}</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">{t.title}</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              {t.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">{t.formTitle}</h2>
                <p className="text-gray-500 mb-8">{t.required}</p>
                <DevisForm locale={params.locale} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Process */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">{t.how}</h3>
                  <div className="space-y-6">
                    {[
                      { step: '1', icon: FileText, title: t.s1t, desc: t.s1d },
                      { step: '2', icon: Clock, title: t.s2t, desc: t.s2d },
                      { step: '3', icon: CheckCircle2, title: t.s3t, desc: t.s3d },
                    ].map(({ step, icon: Icon, title, desc }) => (
                      <div key={step} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full gradient-green text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                          {step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{title}</h4>
                          <p className="text-gray-500 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact direct */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">{t.direct}</h3>
                  <div className="space-y-4">
                    <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-clinic-green transition">
                      <Phone className="w-5 h-5 text-clinic-green" />
                      <div>
                        <p className="font-semibold text-sm">{clinicInfo.phone}</p>
                        <p className="text-xs text-gray-500">{t.std}</p>
                      </div>
                    </a>
                    <a href={`mailto:${clinicInfo.emailCommercial}`} className="flex items-center gap-3 text-gray-700 hover:text-clinic-green transition">
                      <Mail className="w-5 h-5 text-clinic-green" />
                      <div>
                        <p className="font-semibold text-sm">{clinicInfo.emailCommercial}</p>
                        <p className="text-xs text-gray-500">{t.comm}</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Garanties */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">{t.guarantees}</h3>
                  <div className="space-y-3">
                    {[
t.g].map((g) => (
                      <div key={g} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Shield className="w-4 h-4 text-clinic-green flex-shrink-0" /> {g}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
