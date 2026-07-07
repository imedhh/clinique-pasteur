import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const M: any = {
    fr: { title: 'Politique de confidentialité' },
    en: { title: 'Privacy Policy' },
    ar: { title: 'سياسة الخصوصية' },
  }
  return M[params.locale] || M.fr
}


const content = {
  fr: {
    title: 'Politique de confidentialité',
    sections: [
      {
        heading: 'Données que nous collectons',
        text: 'Nous collectons uniquement les informations que vous nous transmettez volontairement via nos formulaires (contact, demande de devis) : nom, coordonnées et message. Aucune donnée médicale sensible n’est demandée en ligne.',
      },
      {
        heading: 'Finalité',
        text: 'Ces informations servent exclusivement à répondre à votre demande et à organiser votre prise en charge. Elles ne sont ni vendues ni cédées à des tiers.',
      },
      {
        heading: 'Conservation',
        text: 'Vos données sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées conformément à la réglementation applicable.',
      },
      {
        heading: 'Vos droits',
        text: 'Vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour l’exercer, contactez-nous à contact@cliniquepasteur.com.tn.',
      },
      {
        heading: 'Cookies',
        text: 'Ce site utilise une mesure d’audience respectueuse de la vie privée, sans cookies publicitaires ni traçage à des fins commerciales.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Data we collect',
        text: 'We only collect the information you voluntarily provide through our forms (contact, quote request): name, contact details and message. No sensitive medical data is requested online.',
      },
      {
        heading: 'Purpose',
        text: 'This information is used exclusively to respond to your request and to organise your care. It is neither sold nor shared with third parties.',
      },
      {
        heading: 'Retention',
        text: 'Your data is kept for as long as necessary to process your request, then archived or deleted in accordance with applicable regulations.',
      },
      {
        heading: 'Your rights',
        text: 'You have the right to access, rectify and delete your data. To exercise these rights, contact us at contact@cliniquepasteur.com.tn.',
      },
      {
        heading: 'Cookies',
        text: 'This website uses privacy-friendly audience measurement, with no advertising cookies and no tracking for commercial purposes.',
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    sections: [
      {
        heading: 'البيانات التي نجمعها',
        text: 'نجمع فقط المعلومات التي تقدمونها لنا طوعًا عبر استماراتنا (الاتصال، طلب عرض الأسعار): الاسم وبيانات الاتصال والرسالة. لا يُطلب عبر الإنترنت أي معطيات طبية حساسة.',
      },
      {
        heading: 'الغرض من المعالجة',
        text: 'تُستخدم هذه المعلومات حصريًا للرد على طلبكم وتنظيم رعايتكم. ولا تُباع ولا تُحال إلى أطراف ثالثة.',
      },
      {
        heading: 'مدة الاحتفاظ',
        text: 'يُحتفظ ببياناتكم للمدة اللازمة لمعالجة طلبكم، ثم تُؤرشف أو تُحذف وفقًا للتشريعات الجاري بها العمل.',
      },
      {
        heading: 'حقوقكم',
        text: 'لكم الحق في الوصول إلى بياناتكم وتصحيحها وحذفها. لممارسة هذه الحقوق، اتصلوا بنا على contact@cliniquepasteur.com.tn.',
      },
      {
        heading: 'ملفات تعريف الارتباط (الكوكيز)',
        text: 'يستخدم هذا الموقع أداة لقياس الجمهور تحترم الخصوصية، دون ملفات تعريف ارتباط إعلانية ودون تتبع لأغراض تجارية.',
      },
    ],
  },
}

export default function Confidentialite({ params }: { params: { locale: string } }) {
  const c = content[params.locale as keyof typeof content] || content.fr
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">{c.title}</h1>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">{s.heading}</h2>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
