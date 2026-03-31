import Link from 'next/link'
import { ArrowRight, Phone, Shield, Heart, Brain, Stethoscope, Baby, Sparkles, Activity, Clock, Users, Building2, Bed, Siren, CheckCircle2 } from 'lucide-react'
import { clinicInfo, chirurgies, centres } from '@/lib/data'
import CounterSection from '@/components/CounterSection'

export default function HomePage() {
  const featuredChirurgies = chirurgies.slice(0, 6)
  const featuredCentres = centres.slice(0, 6)

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-clinic-dark via-clinic-darkgreen to-clinic-green" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative container-custom px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-green-200 text-sm mb-6">
                <Siren className="w-4 h-4" /> Urgences 24h/24 - 7j/7
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                L&apos;excellence médicale au cœur de{' '}
                <span className="text-clinic-gold">Tunis</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed mb-8 max-w-xl">
                Clinique pluridisciplinaire de référence au Centre Urbain Nord. Plus de 15 spécialités, équipements de dernière technologie et une équipe médicale d&apos;excellence dédiée à votre santé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/devis" className="btn-gold text-lg group">
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg">
                  <Phone className="w-5 h-5 mr-2" /> 36 402 000
                </a>
              </div>
              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: '+15 Spécialités' },
                  { icon: Clock, label: 'Urgences 24h/24' },
                  { icon: CheckCircle2, label: 'Équipe d\'excellence' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-green-200 text-sm">
                    <Icon className="w-5 h-5 text-clinic-gold" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Heart, title: 'Pôle Cardiovasculaire', desc: 'Chirurgie cardiaque, cathétérisme, USIC', color: 'from-red-500/20 to-red-600/20', href: '/chirurgies/chirurgie-cardiovasculaire' },
                { icon: Sparkles, title: 'Chirurgie Esthétique', desc: 'Rhinoplastie, liposuccion, lifting', color: 'from-pink-500/20 to-pink-600/20', href: '/chirurgies/chirurgie-esthetique' },
                { icon: Stethoscope, title: 'Chirurgie Bariatrique', desc: 'Sleeve, bypass, anneau gastrique', color: 'from-purple-500/20 to-purple-600/20', href: '/chirurgies/chirurgie-bariatrique' },
                { icon: Brain, title: 'Imagerie de Pointe', desc: 'IRM, scanner double énergie', color: 'from-blue-500/20 to-blue-600/20', href: '/centres/radiologie' },
              ].map(({ icon: Icon, title, desc, color, href }) => (
                <Link key={title} href={href} className={`bg-gradient-to-br ${color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all group`}>
                  <Icon className="w-10 h-10 text-clinic-gold mb-3" />
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-green-200 text-sm">{desc}</p>
                  <ArrowRight className="w-4 h-4 text-white/50 mt-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COUNTER SECTION */}
      <CounterSection />

      {/* ABOUT SECTION */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">À propos</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-6">
                Une clinique de référence depuis des années
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                La Clinique Pasteur de Tunis est une clinique pluridisciplinaire sise au Centre Urbain Nord, voisine d&apos;un Centre Médical constitué d&apos;une trentaine de cabinets médicaux privés. Elle admet ses patients d&apos;une façon personnalisée pour les orienter aux unités de soins concernées le plus rapidement possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Le dossier patient est informatisé et sécurisé pour garantir le secret professionnel médical. L&apos;établissement s&apos;étend sur 11 niveaux avec 10 blocs opératoires, 79 chambres d&apos;hospitalisation et des équipements de dernière technologie.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Équipe médicale d\'excellence',
                  'Dossier patient sécurisé',
                  'Équipements haute technologie',
                  'Prise en charge personnalisée',
                  'Centre médical adjacent',
                  'Cadre confortable et moderne',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/la-clinique" className="btn-primary">
                Découvrir la Clinique <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <Building2 className="w-10 h-10 text-clinic-green mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900">11</h3>
                    <p className="text-sm text-gray-600">Niveaux</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <Stethoscope className="w-10 h-10 text-clinic-green mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900">10</h3>
                    <p className="text-sm text-gray-600">Blocs opératoires</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <Bed className="w-10 h-10 text-clinic-green mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900">79</h3>
                    <p className="text-sm text-gray-600">Chambres</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <Users className="w-10 h-10 text-clinic-green mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900">30</h3>
                    <p className="text-sm text-gray-600">Cabinets médicaux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHIRURGIES SECTION */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Nos spécialités</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
              Chirurgies et Spécialités
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Plus de 15 spécialités chirurgicales avec des équipes médicales chevronnées et des équipements de dernière technologie.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredChirurgies.map((chir) => {
              const iconMap: Record<string, any> = { Heart, Stethoscope, Activity, Sparkles, Brain, Baby, Shield }
              const Icon = iconMap[chir.icon] || Stethoscope
              return (
                <Link
                  key={chir.slug}
                  href={`/chirurgies/${chir.slug}`}
                  className="bg-white rounded-2xl p-8 shadow-md card-hover group border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-clinic-green transition">
                    {chir.shortTitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {chir.description}
                  </p>
                  <span className="text-clinic-green font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/chirurgies" className="btn-secondary">
              Voir toutes les chirurgies ({chirurgies.length}) <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* POLES D'EXCELLENCE */}
      <section className="section-padding gradient-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-clinic-gold font-semibold text-sm uppercase tracking-wider">Excellence</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
              Nos Pôles d&apos;Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Des pôles de référence qui ont fait la réputation de la Clinique Pasteur de Tunis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Pôle Cardiovasculaire',
                description: 'Prise en charge totale des pathologies cardiovasculaires. Explorations invasives et non invasives, cardiologie interventionnelle, rythmologie, chirurgie endovasculaire et chirurgie cardiaque complète.',
                highlights: ['Cathétérisme cardiaque', 'Chirurgie à cœur ouvert', 'Électrophysiologie', 'Réanimation cardiaque dédiée'],
                href: '/chirurgies/chirurgie-cardiovasculaire',
              },
              {
                icon: Activity,
                title: 'Pôle de Radiologie',
                description: 'Plateau technique extrêmement performant avec une équipe de radiologues spécialisés. Radiologie conventionnelle et interventionnelle (embolisation, drainage, radiofréquence).',
                highlights: ['IRM dernière génération', 'Scanner double énergie', 'Radiologie interventionnelle', 'Mammographie'],
                href: '/centres/radiologie',
              },
              {
                icon: Stethoscope,
                title: 'Pôle de Chirurgie',
                description: 'Spécialisation en chirurgie lourde digestive et urologique, par voie classique et laparoscopique. Mention particulière pour la chirurgie bariatrique qui a fait la réputation de la clinique.',
                highlights: ['Chirurgie bariatrique', 'Chirurgie digestive lourde', 'CHIP', 'Laparoscopie avancée'],
                href: '/chirurgies/chirurgie-bariatrique',
              },
            ].map(({ icon: Icon, title, description, highlights, href }) => (
              <Link key={title} href={href} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <Icon className="w-12 h-12 text-clinic-gold mb-5" />
                <h3 className="text-2xl font-heading font-bold mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-green-300 text-sm">
                      <CheckCircle2 className="w-4 h-4" /> {h}
                    </li>
                  ))}
                </ul>
                <span className="text-clinic-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Découvrir <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CENTRES SECTION */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
              Nos Centres Médicaux
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des centres spécialisés équipés des dernières technologies pour un diagnostic précis et un traitement optimal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCentres.map((centre) => (
              <Link
                key={centre.slug}
                href={`/centres/${centre.slug}`}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-green-50 hover:shadow-md transition-all group border border-transparent hover:border-green-200"
              >
                <div className="w-12 h-12 rounded-lg gradient-green flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-clinic-green transition mb-1">
                    {centre.shortTitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{centre.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/centres" className="btn-secondary">
              Voir tous les centres ({centres.length}) <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEVIS CTA SECTION */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 text-center">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Tourisme médical</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-6">
              Obtenez votre devis personnalisé
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Que vous soyez en Tunisie ou à l&apos;étranger, notre équipe commerciale vous accompagne dans votre parcours de soins. Devis gratuit et sans engagement sous 24 à 48h.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              {[
                { step: '1', title: 'Remplissez le formulaire', desc: 'Décrivez vos besoins médicaux' },
                { step: '2', title: 'Recevez votre devis', desc: 'Sous 24-48h par email' },
                { step: '3', title: 'Planifiez votre séjour', desc: 'Accompagnement personnalisé' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full gradient-green text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {step}
                  </div>
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="btn-primary text-lg">
                Demander un Devis Gratuit <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href={`tel:${clinicInfo.phone}`} className="btn-secondary text-lg">
                <Phone className="w-5 h-5 mr-2" /> Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
              Questions Fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Quelles sont les spécialités chirurgicales disponibles ?',
                a: 'La Clinique Pasteur propose plus de 15 spécialités dont la chirurgie cardiovasculaire, bariatrique, esthétique, orthopédique, urologique, ORL, neurochirurgie, gynéco-obstétrique, pédiatrique, et bien d\'autres.',
              },
              {
                q: 'Le service des urgences est-il disponible 24h/24 ?',
                a: 'Oui, notre service des urgences est opérationnel 24 heures sur 24, 7 jours sur 7, avec une équipe médicale et paramédicale qualifiée. Appelez le +216 36 402 076 pour les urgences.',
              },
              {
                q: 'Comment obtenir un devis pour une intervention ?',
                a: 'Vous pouvez remplir notre formulaire en ligne sur la page Devis, nous envoyer un email à commercial@cliniquepasteur.com.tn, ou nous appeler au +216 36 402 000. Vous recevrez un devis personnalisé sous 24 à 48h.',
              },
              {
                q: 'Quels types de chambres sont disponibles ?',
                a: 'Nous proposons 79 chambres réparties en chambres individuelles, chambres confort, et suites VIP. Chaque type offre un niveau de confort adapté à vos besoins.',
              },
              {
                q: 'La clinique accepte-t-elle les patients internationaux ?',
                a: 'Oui, la Clinique Pasteur accueille des patients du monde entier. Notre équipe commerciale vous accompagne dans l\'organisation de votre séjour médical (devis, hébergement, transferts).',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:text-clinic-green transition">
                  {q}
                  <ArrowRight className="w-5 h-5 rotate-90 group-open:rotate-270 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
