import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const M: any = {
    fr: { title: 'Mentions légales' },
    en: { title: 'Legal Notice' },
    ar: { title: 'الإشعارات القانونية' },
  }
  return M[params.locale] || M.fr
}


const content = {
  fr: {
    title: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur du site',
        html: <p>Clinique Pasteur Tunis — Centre Urbain Nord, Tunis, Tunisie.<br />Téléphone : +216 36 402 000 — Email : contact@cliniquepasteur.com.tn</p>,
      },
      {
        heading: 'Directeur de la publication',
        html: <p>La direction de la Clinique Pasteur Tunis.</p>,
      },
      {
        heading: 'Hébergement',
        html: <p>Le site est hébergé sur une infrastructure sécurisée. Pour toute demande relative à l’hébergement, contactez la clinique.</p>,
      },
      {
        heading: 'Propriété intellectuelle',
        html: <p>L’ensemble des contenus (textes, images, logo) présents sur ce site est la propriété de la Clinique Pasteur Tunis, sauf mention contraire. Toute reproduction sans autorisation est interdite.</p>,
      },
      {
        heading: 'Informations médicales',
        html: <p>Les informations médicales publiées sur ce site sont fournies à titre informatif et ne remplacent en aucun cas une consultation médicale. Consultez toujours un professionnel de santé.</p>,
      },
    ],
  },
  en: {
    title: 'Legal Notice',
    sections: [
      {
        heading: 'Website publisher',
        html: <p>Clinique Pasteur Tunis — Centre Urbain Nord, Tunis, Tunisia.<br />Phone: +216 36 402 000 — Email: contact@cliniquepasteur.com.tn</p>,
      },
      {
        heading: 'Publication director',
        html: <p>The management of Clinique Pasteur Tunis.</p>,
      },
      {
        heading: 'Hosting',
        html: <p>This website is hosted on a secure infrastructure. For any hosting-related enquiries, please contact the clinic.</p>,
      },
      {
        heading: 'Intellectual property',
        html: <p>All content on this website (texts, images, logo) is the property of Clinique Pasteur Tunis, unless otherwise stated. Any reproduction without authorisation is prohibited.</p>,
      },
      {
        heading: 'Medical information',
        html: <p>The medical information published on this website is provided for informational purposes only and does not in any way replace a medical consultation. Always consult a healthcare professional.</p>,
      },
    ],
  },
  ar: {
    title: 'الإشعارات القانونية',
    sections: [
      {
        heading: 'ناشر الموقع',
        html: <p>مصحة باستور تونس — المركز العمراني الشمالي، تونس، الجمهورية التونسية.<br />الهاتف: 000 402 36 216+ — البريد الإلكتروني: contact@cliniquepasteur.com.tn</p>,
      },
      {
        heading: 'مدير النشر',
        html: <p>إدارة مصحة باستور تونس.</p>,
      },
      {
        heading: 'الاستضافة',
        html: <p>يُستضاف هذا الموقع على بنية تحتية آمنة. لأي استفسار يتعلق بالاستضافة، يرجى الاتصال بالمصحة.</p>,
      },
      {
        heading: 'الملكية الفكرية',
        html: <p>جميع المحتويات المنشورة على هذا الموقع (نصوص وصور وشعار) هي ملك لمصحة باستور تونس، ما لم يُذكر خلاف ذلك. يُمنع أي استنساخ دون إذن مسبق.</p>,
      },
      {
        heading: 'المعلومات الطبية',
        html: <p>المعلومات الطبية المنشورة على هذا الموقع مقدَّمة لأغراض إعلامية فقط ولا تغني بأي حال من الأحوال عن الاستشارة الطبية. استشر دائمًا أخصائيًا في الصحة.</p>,
      },
    ],
  },
}

export default function MentionsLegales({ params }: { params: { locale: string } }) {
  const c = content[params.locale as keyof typeof content] || content.fr
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">{c.title}</h1>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">{s.heading}</h2>
              {s.html}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
