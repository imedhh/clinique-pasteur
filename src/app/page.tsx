import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Heart, Brain, Stethoscope, Baby, Sparkles, Activity, Siren, CheckCircle2, ScanLine, HeartPulse, Zap, Eye, Shield } from 'lucide-react'
import { clinicInfo, chirurgies, centres } from '@/lib/data'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function HomePage() {
  return (
    <>
      {/* ============ HERO - Full Impact ============ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic-building.webp" alt="Clinique Pasteur Tunis" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.7) 0%, rgba(45,140,78,0.4) 100%)' }} />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-white/5 hidden lg:block" />
        <div className="absolute top-32 right-32 w-72 h-72 rounded-full border border-white/5 hidden lg:block" />

        <div className="relative container-custom px-4 py-20">
          <div className="max-w-3xl">
            <Image src="/images/logo-fr.png" alt="Clinique Pasteur" width={483} height={97} className="h-14 md:h-16 w-auto mb-10 drop-shadow-2xl" />

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] mb-8">
              L&apos;excellence<br />
              <span style={{ color: '#C8A96E' }}>au service de</span><br />
              votre santé
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              Clinique pluridisciplinaire de référence au Centre Urbain Nord de Tunis. Votre parcours de soins, personnalisé du diagnostic à la guérison.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/devis" className="btn-gold text-lg group">
                Obtenir un Devis Gratuit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-lg">
                <Phone className="w-5 h-5 mr-3" /> 36 402 000
              </a>
            </div>

            {/* Quick access cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Siren, label: 'Urgences 24/7', href: '/centres/urgences', color: '#ef4444' },
                { icon: Heart, label: 'Cardiologie', href: '/chirurgies/chirurgie-cardiovasculaire', color: '#f43f5e' },
                { icon: Sparkles, label: 'Esthétique', href: '/chirurgies/chirurgie-esthetique', color: '#a855f7' },
                { icon: ScanLine, label: 'Imagerie', href: '/centres/radiologie', color: '#3b82f6' },
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
                  Bienvenue
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Une clinique de<br /><span style={{ color: '#2D8C4E' }}>référence</span> en Tunisie
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  La Clinique Pasteur, au Centre Urbain Nord de Tunis, offre une prise en charge personnalisée alliant expertise médicale et équipements de dernière technologie.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Stethoscope, text: 'Blocs opératoires de pointe' },
                    { icon: Heart, text: 'Réanimation spécialisée' },
                    { icon: Shield, text: 'Dossier patient sécurisé' },
                    { icon: CheckCircle2, text: 'Équipe d\'excellence' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Icon className="w-5 h-5 text-clinic-green flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
                <Link href="/la-clinique" className="btn-primary">
                  Découvrir la Clinique <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Asymmetric image layout */}
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-clinic-green/10 rounded-full blur-3xl" />
                <div className="relative grid grid-cols-12 gap-4">
                  <div className="col-span-7 rounded-3xl overflow-hidden shadow-2xl h-80">
                    <Image src="/images/surgery-blue-3.webp" alt="Bloc opératoire" width={500} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="col-span-5 space-y-4 pt-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl h-32">
                      <Image src="/images/radiologie-irm.webp" alt="IRM" width={300} height={200} className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-xl h-32">
                      <Image src="/images/h1.webp" alt="Chambre VIP" width={300} height={200} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-3">
                  <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Disponible 24h/24</p>
                    <p className="text-gray-500 text-xs">Urgences & Réanimation</p>
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
              Diagnostic
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Explorations Médicales
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Des centres spécialisés pour un diagnostic précis et rapide.
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HeartPulse, title: 'Explorations Cardiaques', desc: 'ECG, Holter, échocardiographie, épreuve d\'effort, coronarographie', href: '/explorations/explorations-cardiaques', img: '/images/cardio-ecg.webp', gradient: 'from-rose-500 to-red-600' },
              { icon: Brain, title: 'Explorations Neurophysiologiques', desc: 'EEG, EMG, potentiels évoqués, vidéo-EEG', href: '/explorations/explorations-neurophysiologiques', img: '/images/neuro-eeg.webp', gradient: 'from-violet-500 to-purple-600' },
              { icon: Activity, title: 'Explorations Urodynamiques', desc: 'Débitmétrie, cystomanométrie, bilan urodynamique complet', href: '/explorations/explorations-urodynamiques', img: '/images/urodynamique.webp', gradient: 'from-teal-500 to-emerald-600' },
            ].map(({ icon: Icon, title, desc, href, img, gradient }, i) => (
              <AnimateOnScroll key={title} delay={i * 150}>
                <Link href={href} className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={img} alt={title} width={500} height={300} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-40`} />
                    <div className="absolute bottom-4 left-5">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 group-hover:text-clinic-green transition">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                    <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                      Découvrir les examens <ArrowRight className="w-4 h-4" />
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
                Spécialités
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-2">
                Nos Chirurgies
              </h2>
              <p className="text-gray-600 max-w-xl">
                Des blocs opératoires de pointe pour des interventions de toute nature.
              </p>
            </div>
            <Link href="/chirurgies" className="btn-secondary mt-4 md:mt-0 text-sm">
              Toutes les chirurgies <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimateOnScroll>

          {/* Featured 3 */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Chirurgie Cardiovasculaire', desc: 'Cathétérisme, chirurgie à cœur ouvert, électrophysiologie', img: '/images/cardiovasculaire.webp', href: '/chirurgies/chirurgie-cardiovasculaire' },
              { title: 'Chirurgie Bariatrique', desc: 'Sleeve, bypass — spécialité phare de la clinique', img: '/images/bariatrique.webp', href: '/chirurgies/chirurgie-bariatrique' },
              { title: 'Chirurgie Esthétique', desc: 'Rhinoplastie, liposuccion, lifting, augmentation mammaire', img: '/images/esthetique.webp', href: '/chirurgies/chirurgie-esthetique' },
            ].map(({ title, desc, img, href }, i) => (
              <AnimateOnScroll key={title} delay={i * 100}>
                <Link href={href} className="block rounded-3xl overflow-hidden shadow-lg group relative h-80 hover:shadow-2xl transition-all">
                  <Image src={img} alt={title} width={600} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-heading font-bold text-xl mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{desc}</p>
                    <span className="text-clinic-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                      En savoir plus <ArrowRight className="w-4 h-4" />
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
          <Image src="/images/surgery-blue-3.webp" alt="Chirurgie" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(26,92,50,0.85) 100%)' }} />
        </div>
        <div className="container-custom relative text-white">
          <AnimateOnScroll className="text-center mb-14">
            <span className="inline-block bg-clinic-gold/20 text-clinic-gold font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Réputation</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Pôles d&apos;Excellence
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Des pôles de référence qui ont fait la renommée de la Clinique Pasteur.
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Pôle Cardiovasculaire', desc: 'Cathétérisme, chirurgie cardiaque, électrophysiologie, réanimation cardiaque dédiée.', highlights: ['Cathétérisme cardiaque', 'Chirurgie à cœur ouvert', 'Électrophysiologie'], href: '/chirurgies/chirurgie-cardiovasculaire' },
              { icon: ScanLine, title: 'Pôle de Radiologie', desc: 'Plateau technique ultra-performant. Radiologie conventionnelle et interventionnelle.', highlights: ['IRM', 'Scanner double énergie', 'Radiologie interventionnelle'], href: '/centres/radiologie' },
              { icon: Stethoscope, title: 'Pôle de Chirurgie', desc: 'Chirurgie lourde digestive et urologique. La chirurgie bariatrique a fait la réputation de la clinique.', highlights: ['Chirurgie bariatrique', 'CHIP', 'Laparoscopie avancée'], href: '/chirurgies/chirurgie-bariatrique' },
            ].map(({ icon: Icon, title, desc, highlights, href }, i) => (
              <AnimateOnScroll key={title} delay={i * 150}>
                <Link href={href} className="block bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.1] transition-all group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-gold/30 to-clinic-gold/10 flex items-center justify-center mb-6">
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
                  <span className="text-clinic-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
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
                  Confort
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Un séjour<br /><span style={{ color: '#C8A96E' }}>tout confort</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  Du standard au VIP, chaque chambre est pensée pour votre bien-être. Service de restauration, climatisation, WiFi et accompagnement personnalisé.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Chambres individuelles', 'Chambres confort', 'Suites VIP', 'Service repas'].map((label) => (
                    <span key={label} className="bg-green-50 text-clinic-green text-sm px-5 py-2.5 rounded-full font-medium border border-green-100">
                      {label}
                    </span>
                  ))}
                </div>
                <Link href="/hospitalisation" className="btn-primary">
                  Découvrir nos chambres <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                {[
                  { img: '/images/h1.webp', alt: 'Chambre VIP' },
                  { img: '/images/h2.webp', alt: 'Chambre confort' },
                  { img: '/images/h3.webp', alt: 'Suite' },
                  { img: '/images/repas.webp', alt: 'Service repas' },
                ].map(({ img, alt }, i) => (
                  <div key={alt} className="rounded-2xl overflow-hidden shadow-lg h-48 hover:shadow-xl transition-shadow" style={{ transform: i % 2 === 1 ? 'translateY(20px)' : '' }}>
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
                Services
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-2">Nos Centres</h2>
            </div>
            <Link href="/centres" className="btn-secondary mt-4 md:mt-0 text-sm">
              Tous les centres <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((centre, i) => (
              <AnimateOnScroll key={centre.slug} delay={i * 80}>
                <Link href={`/centres/${centre.slug}`} className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group border border-gray-100 hover:border-clinic-green/30 hover:-translate-y-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-clinic-green transition mb-2">{centre.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{centre.description}</p>
                  <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight className="w-4 h-4" />
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
              Prêt à prendre soin<br />de votre santé ?
            </h2>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
              Contactez-nous pour un devis personnalisé gratuit. Notre équipe vous répond sous 24-48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="btn-gold text-lg">
                Demander un Devis Gratuit <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg">
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
              Questions Fréquentes
            </h2>
          </AnimateOnScroll>
          <div className="space-y-3">
            {[
              { q: 'Quelles spécialités sont disponibles ?', a: 'Chirurgie cardiovasculaire, bariatrique, esthétique, orthopédique, urologique, ORL, neurochirurgie, gynéco-obstétrique, pédiatrique, carcinologique, ainsi que des consultations médicales dans toutes les spécialités.' },
              { q: 'Le service des urgences est-il disponible 24h/24 ?', a: 'Oui, urgences 24h/24, 7j/7 avec équipe qualifiée connectée aux blocs opératoires et à la réanimation. Urgences : +216 36 402 076.' },
              { q: 'Comment obtenir un devis ?', a: 'Via notre formulaire en ligne, par email à commercial@cliniquepasteur.com.tn, ou par téléphone au +216 36 402 000. Réponse sous 24-48h.' },
              { q: 'Acceptez-vous les patients internationaux ?', a: 'Oui, notre service commercial organise votre parcours complet : devis, planification, hébergement, transferts.' },
              { q: 'Quels équipements d\'imagerie ?', a: 'IRM, scanner double énergie, mammographie, panoramique dentaire, ostéodensitomètre, échographie, radiologie interventionnelle.' },
            ].map(({ q, a }) => (
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
    </>
  )
}
