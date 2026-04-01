import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Shield, Heart, Brain, Stethoscope, Baby, Sparkles, Activity, Clock, Users, Building2, Bed, Siren, CheckCircle2, Eye, Zap, ScanLine, FlaskConical, Microscope, HeartPulse } from 'lucide-react'
import { clinicInfo, chirurgies, centres } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clinic-building.webp"
            alt="Clinique Pasteur Tunis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0a1628]/80" />
        </div>

        <div className="relative container-custom px-4 py-16 md:py-24 text-center">
          {/* Logo */}
          <Image
            src="/images/logo-fr.png"
            alt="Logo Clinique Pasteur Tunis"
            width={200}
            height={120}
            className="mx-auto mb-8 w-40 md:w-52 drop-shadow-2xl"
          />

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Clinique Pasteur de Tunis
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis.
            Équipements de dernière technologie et équipe médicale d&apos;excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/devis" className="btn-gold text-lg group">
              Obtenir un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-lg">
              <Phone className="w-5 h-5 mr-3" /> 36 402 000
            </a>
          </div>

        </div>
      </section>

      {/* ============ SERVICES RAPIDES ============ */}
      <section className="relative -mt-10 z-10 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Siren, title: 'Urgences', desc: '24h/24 - 7j/7', href: '/centres/urgences', color: 'bg-red-600' },
              { icon: Heart, title: 'Chirurgie Cardiaque', desc: 'Pôle de référence', href: '/chirurgies/chirurgie-cardiovasculaire', color: 'bg-rose-600' },
              { icon: Sparkles, title: 'Esthétique', desc: 'Visage & Corps', href: '/chirurgies/chirurgie-esthetique', color: 'bg-purple-600' },
              { icon: ScanLine, title: 'Imagerie', desc: 'IRM, Scanner, Mammo', href: '/centres/radiologie', color: 'bg-blue-600' },
            ].map(({ icon: Icon, title, desc, href, color }) => (
              <Link key={title} href={href} className="bg-white rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl transition-all group border border-gray-100 hover:-translate-y-1">
                <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-clinic-green transition text-sm">{title}</h3>
                <p className="text-gray-500 text-xs mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ À PROPOS ============ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Bienvenue</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-3 mb-6">
                La Clinique Pasteur de Tunis
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Sise au Centre Urbain Nord, voisine d&apos;un centre médical, la Clinique Pasteur est un établissement pluridisciplinaire de référence en Tunisie.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Elle offre une prise en charge personnalisée avec un dossier patient informatisé et sécurisé. Le personnel médical et paramédical, sélectionné sur la base de l&apos;excellence, assure un suivi régulier et continu.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8">
                {['Blocs opératoires de pointe', 'Chambres individuelles et VIP', 'Réanimation spécialisée', 'Stérilisation informatisée', 'Dossier patient sécurisé', 'Équipements haute technologie'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-clinic-green flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <Link href="/la-clinique" className="btn-primary">
                Découvrir la Clinique <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Image grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-52">
                    <Image src="/images/clinic-interior.webp" alt="Intérieur clinique" width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-40">
                    <Image src="/images/etages.webp" alt="Bâtiment clinique" width={400} height={250} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                    <Image src="/images/clinic-building.webp" alt="Clinique Pasteur" width={400} height={500} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EXPLORATIONS ============ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Diagnostic</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-3 mb-4">
              Nos Explorations Médicales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des centres d&apos;explorations spécialisés avec des équipements de dernière génération.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, title: 'Explorations Cardiaques', desc: 'ECG, Holter, échocardiographie, épreuve d\'effort, coronarographie', href: '/explorations/explorations-cardiaques', img: '/images/cardio-ecg.webp' },
              { icon: Brain, title: 'Explorations Neurophysiologiques', desc: 'EEG, EMG, potentiels évoqués, vidéo-EEG prolongé', href: '/explorations/explorations-neurophysiologiques', img: '/images/neuro-eeg.webp' },
              { icon: Activity, title: 'Explorations Urodynamiques', desc: 'Débitmétrie, cystomanométrie, bilan urodynamique complet', href: '/explorations/explorations-urodynamiques', img: '/images/urodynamique.webp' },
            ].map(({ icon: Icon, title, desc, href, img }) => (
              <Link key={title} href={href} className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group border border-gray-100">
                <div className="relative h-44 overflow-hidden">
                  <Image src={img} alt={title} width={400} height={250} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-clinic-green transition text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{desc}</p>
                  <span className="text-clinic-green font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                    Découvrir <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHIRURGIES ============ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Spécialités</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-3 mb-2">
                Nos Chirurgies
              </h2>
              <p className="text-gray-600 max-w-xl">
                Des blocs opératoires de pointe pour des interventions de toute nature.
              </p>
            </div>
            <Link href="/chirurgies" className="btn-secondary mt-4 md:mt-0 text-sm">
              Toutes les chirurgies ({chirurgies.length}) <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Top row - 3 featured with images */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Chirurgie Cardiovasculaire', desc: 'Pôle de référence : cathétérisme, chirurgie à cœur ouvert, électrophysiologie', img: '/images/reanimation2.webp', href: '/chirurgies/chirurgie-cardiovasculaire' },
              { title: 'Chirurgie Bariatrique', desc: 'Sleeve, bypass, anneau gastrique — spécialité phare de la clinique', img: '/images/bariatrique.webp', href: '/chirurgies/chirurgie-bariatrique' },
              { title: 'Chirurgie Esthétique', desc: 'Rhinoplastie, liposuccion, lifting, augmentation mammaire', img: '/images/surgery-blue-2.webp', href: '/chirurgies/chirurgie-esthetique' },
            ].map(({ title, desc, img, href }) => (
              <Link key={title} href={href} className="rounded-2xl overflow-hidden shadow-lg group relative h-72">
                <Image src={img} alt={title} width={600} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-heading font-bold text-lg mb-1">{title}</h3>
                  <p className="text-gray-300 text-sm">{desc}</p>
                  <span className="text-clinic-gold font-semibold text-sm mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Other chirurgies list */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chirurgies.filter(c => !['chirurgie-cardiovasculaire', 'chirurgie-bariatrique', 'chirurgie-esthetique'].includes(c.slug)).slice(0, 9).map((chir) => {
              const iconMap: Record<string, any> = { Heart, Stethoscope, Activity, Sparkles, Brain, Baby, Shield, Zap, Eye, HeartPulse, ScanLine }
              const Icon = iconMap[chir.icon] || Stethoscope
              return (
                <Link key={chir.slug} href={`/chirurgies/${chir.slug}`} className="group flex items-center gap-3 p-4 rounded-xl hover:bg-green-50 transition-all border border-gray-100 hover:border-green-200">
                  <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-clinic-green transition text-sm">{chir.title}</h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-clinic-green transition" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ PÔLES D'EXCELLENCE ============ */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/surgery-blue-3.webp" alt="Chirurgie" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/90" />
        </div>
        <div className="container-custom relative text-white">
          <div className="text-center mb-14">
            <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">Réputation</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
              Pôles d&apos;Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des pôles de référence qui ont fait la renommée de la Clinique Pasteur.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Pôle Cardiovasculaire', desc: 'Cathétérisme, chirurgie cardiaque sous CEC, électrophysiologie, réanimation cardiaque dédiée avec NO et épuration extra-rénale.', highlights: ['Cathétérisme cardiaque', 'Chirurgie à cœur ouvert', 'Électrophysiologie', 'USIC 8 lits'], href: '/chirurgies/chirurgie-cardiovasculaire' },
              { icon: ScanLine, title: 'Pôle de Radiologie', desc: 'Plateau technique ultra-performant. Radiologie conventionnelle et interventionnelle : embolisation, drainage, radiofréquence.', highlights: ['IRM', 'Scanner double énergie', 'Radiologie interventionnelle', 'Mammographie'], href: '/centres/radiologie' },
              { icon: Stethoscope, title: 'Pôle de Chirurgie', desc: 'Chirurgie lourde digestive et urologique par voie laparoscopique. La chirurgie bariatrique a fait la réputation de la clinique.', highlights: ['Chirurgie bariatrique', 'DPC, résections coliques', 'CHIP', 'Laparoscopie'], href: '/chirurgies/chirurgie-bariatrique' },
            ].map(({ icon: Icon, title, desc, highlights, href }) => (
              <Link key={title} href={href} className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.1] transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-clinic-gold/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-clinic-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-green-300/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
                <span className="text-clinic-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ============ HOSPITALISATION ============ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <Image src="/images/h1.webp" alt="Chambre individuelle" width={400} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <Image src="/images/h2.webp" alt="Chambre confort" width={400} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <Image src="/images/h3.webp" alt="Suite VIP" width={400} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <Image src="/images/repas.webp" alt="Service repas" width={400} height={300} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Confort</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-3 mb-6">
                Hospitalisation & Séjour
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Des chambres réparties sur plusieurs étages, du confort standard au luxe VIP. Chaque chambre est pensée pour le bien-être du patient.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Chambres individuelles', 'Chambres confort', 'Suites VIP', 'Service repas'].map((label) => (
                  <span key={label} className="bg-green-50 text-clinic-green text-sm px-4 py-2 rounded-full font-medium">
                    {label}
                  </span>
                ))}
              </div>
              <Link href="/hospitalisation" className="btn-primary">
                Découvrir nos chambres <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CENTRES ============ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-3 mb-2">Nos Centres</h2>
            </div>
            <Link href="/centres" className="btn-secondary mt-4 md:mt-0 text-sm">
              Tous les centres <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre) => (
              <Link key={centre.slug} href={`/centres/${centre.slug}`} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group border border-gray-100 hover:border-green-200">
                <h3 className="font-semibold text-gray-900 group-hover:text-clinic-green transition mb-2">{centre.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{centre.description}</p>
                <span className="text-clinic-green font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  Découvrir <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEVIS CTA ============ */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic-building.webp" alt="Clinique" fill className="object-cover" />
          <div className="absolute inset-0 bg-clinic-green/90" />
        </div>
        <div className="container-custom relative text-center text-white">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Besoin d&apos;un devis ?
          </h2>
          <p className="text-green-100 text-lg mb-4 max-w-2xl mx-auto">
            Que vous soyez en Tunisie ou à l&apos;étranger, recevez un devis personnalisé gratuit sous 24-48h.
          </p>
          <p className="text-green-200 text-sm mb-10">
            Chirurgie esthétique, bariatrique, cardiovasculaire, orthopédique, examens d&apos;imagerie...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-gold text-lg">
              Demander un Devis Gratuit <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg">
              <Phone className="w-5 h-5 mr-2" /> Appelez-nous
            </a>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-3 mb-4">
              Questions Fréquentes
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { q: 'Quelles spécialités chirurgicales sont disponibles ?', a: 'Nombreuses spécialités : cardiovasculaire, bariatrique, esthétique, orthopédique, urologique, ORL, neurochirurgie, gynéco-obstétrique, pédiatrique, carcinologique, et plus.' },
              { q: 'Le service des urgences est-il disponible 24h/24 ?', a: 'Oui, urgences 24h/24, 7j/7 avec équipe qualifiée connectée aux blocs opératoires et à la réanimation. Urgences : +216 36 402 076.' },
              { q: 'Comment obtenir un devis ?', a: 'Via notre formulaire en ligne, par email à commercial@cliniquepasteur.com.tn, ou par téléphone au +216 36 402 000. Réponse sous 24-48h.' },
              { q: 'Quels types de chambres proposez-vous ?', a: 'Des chambres individuelles, confort et suites VIP, ainsi qu\'une maternité avec chambres VIP.' },
              { q: 'Acceptez-vous les patients internationaux ?', a: 'Oui, notre service commercial organise votre parcours complet : devis, planification, hébergement, transferts.' },
              { q: 'Quels équipements d\'imagerie ?', a: 'IRM, scanner double énergie, mammographie, panoramique dentaire, ostéodensitomètre, radiologie interventionnelle.' },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-gray-50 rounded-xl border border-gray-200 hover:border-green-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:text-clinic-green transition text-sm md:text-base">
                  {q}
                  <ArrowRight className="w-5 h-5 rotate-90 group-open:-rotate-90 transition-transform flex-shrink-0 ml-4 text-gray-400" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
