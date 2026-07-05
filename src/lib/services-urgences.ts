export const servicesUrgences = [
  {
    slug: 'accueil-tri-urgences',
    title: 'Accueil et tri des urgences',
    shortTitle: 'Accueil et tri',
    description: 'Premier maillon de la prise en charge, l\'accueil des urgences évalue immédiatement chaque patient afin d\'orienter les cas les plus graves en priorité.',
    fullDescription: `Dès son arrivée au service des urgences, chaque patient est accueilli par une équipe dédiée qui recueille le motif de consultation, les antécédents essentiels et les constantes vitales. Cette première évaluation, appelée tri, permet de déterminer le degré d'urgence de chaque situation et d'orienter le patient vers le circuit de soins le plus adapté.

Le tri est réalisé par un personnel infirmier formé à l'évaluation des urgences, sous la supervision du médecin urgentiste. Les situations vitales sont identifiées immédiatement et prises en charge sans délai, tandis que les cas moins urgents sont installés confortablement en attendant leur consultation.

Ce dispositif garantit que la gravité médicale, et non l'ordre d'arrivée, détermine la priorité de prise en charge. Les familles sont informées régulièrement du parcours de leur proche afin de réduire l'anxiété liée à l'attente.

À la Clinique Pasteur Tunis, l'accueil des urgences fonctionne 24h/24 et 7j/7, avec un accès direct depuis le Centre Urbain Nord et une connexion immédiate aux plateaux d'imagerie, aux blocs opératoires et aux unités de réanimation.`,
    image: '/images/urgences-accueil.webp',
    indications: [
      'Toute situation médicale ou chirurgicale ressentie comme urgente',
      'Douleur aiguë inexpliquée (thoracique, abdominale, céphalée brutale)',
      'Traumatisme récent (chute, accident, plaie)',
      'Malaise, fièvre élevée ou altération de l\'état général',
      'Orientation après appel du service des urgences',
    ],
    deroulement: [
      'Enregistrement administratif simplifié à l\'arrivée',
      'Évaluation infirmière immédiate : motif, constantes vitales, douleur',
      'Classification du niveau d\'urgence selon la gravité',
      'Orientation vers la filière adaptée (médicale, chirurgicale, pédiatrique, gynéco-obstétricale)',
      'Installation en box de soins et prise en charge par le médecin urgentiste',
      'Information régulière du patient et de ses accompagnants',
    ],
    duree: 'Le tri initial est réalisé en quelques minutes après l\'arrivée',
    resultats: 'À l\'issue du tri, le patient est orienté vers le circuit de soins le plus adapté à son état. Les situations graves bénéficient d\'une prise en charge immédiate, sans attente.',
  },
  {
    slug: 'urgences-medicales',
    title: 'Urgences médicales (cardiologiques, neurologiques, respiratoires)',
    shortTitle: 'Urgences médicales',
    description: 'Prise en charge immédiate des urgences cardiologiques, neurologiques et respiratoires, avec accès direct au plateau technique de la clinique.',
    fullDescription: `Les urgences médicales regroupent l'ensemble des situations aiguës non chirurgicales nécessitant une prise en charge rapide : douleur thoracique, suspicion d'infarctus, accident vasculaire cérébral, détresse respiratoire, crise d'asthme sévère, malaise, déséquilibre du diabète ou infection grave.

L'équipe d'urgentistes s'appuie sur un accès immédiat aux examens essentiels : électrocardiogramme, imagerie (scanner, radiologie, échographie) et prélèvements biologiques réalisés sur place avec des résultats rendus en continu. Cette réactivité est déterminante dans les pathologies où chaque minute compte, notamment les urgences cardiaques et neurologiques.

En cas de nécessité, le patient est orienté sans délai vers la salle de cathétérisme cardiaque, l'unité de soins intensifs cardiologiques ou la réanimation, situées dans le même bâtiment. Les cardiologues, neurologues et réanimateurs de la clinique sont mobilisables à tout moment.

À la Clinique Pasteur Tunis, cette organisation intégrée permet une prise en charge complète des urgences médicales, du diagnostic initial au traitement spécialisé, dans un environnement sécurisé et disponible 24h/24.`,
    image: '/images/cardio-ecg.webp',
    indications: [
      'Douleur thoracique ou suspicion d\'accident cardiaque',
      'Signes d\'accident vasculaire cérébral (faiblesse d\'un côté du corps, trouble de la parole)',
      'Difficulté respiratoire aiguë, crise d\'asthme sévère',
      'Malaise, perte de connaissance, palpitations',
      'Fièvre élevée avec altération de l\'état général',
      'Décompensation d\'une maladie chronique (diabète, insuffisance cardiaque)',
    ],
    deroulement: [
      'Tri prioritaire dès l\'arrivée pour les signes de gravité',
      'Installation en box avec surveillance des constantes vitales',
      'Examen médical par l\'urgentiste et réalisation d\'un électrocardiogramme si nécessaire',
      'Prélèvements biologiques sur place et imagerie d\'urgence selon le tableau clinique',
      'Mise en route du traitement adapté (oxygène, perfusion, médicaments d\'urgence)',
      'Avis spécialisé (cardiologue, neurologue, réanimateur) si la situation le requiert',
      'Orientation : retour à domicile avec consignes, hospitalisation ou soins intensifs',
    ],
    resultats: 'Selon le diagnostic, le patient peut regagner son domicile avec un traitement et des consignes de surveillance, ou être hospitalisé dans le service adapté pour poursuivre les soins.',
  },
  {
    slug: 'urgences-chirurgicales',
    title: 'Urgences chirurgicales (traumatologie, chirurgie digestive)',
    shortTitle: 'Urgences chirurgicales',
    description: 'Prise en charge des traumatismes et des urgences abdominales avec accès direct aux blocs opératoires de la clinique, 24h/24.',
    fullDescription: `Les urgences chirurgicales concernent les situations nécessitant une évaluation chirurgicale rapide, voire une intervention en urgence : fractures et luxations, plaies profondes, douleurs abdominales aiguës évoquant une appendicite, une occlusion intestinale, une cholécystite ou une hernie étranglée.

Le service des urgences travaille en lien direct avec les équipes de chirurgie générale, de chirurgie orthopédique et d'anesthésie de la clinique. Après l'évaluation initiale de l'urgentiste, le chirurgien de garde examine le patient et décide de la conduite à tenir : traitement médical, surveillance ou intervention.

L'imagerie d'urgence (radiologie, scanner, échographie) et les prélèvements biologiques réalisés sur place permettent de confirmer rapidement le diagnostic. Lorsqu'une opération est nécessaire, le patient est préparé et conduit au bloc opératoire, situé dans le même bâtiment, dans les meilleurs délais.

À la Clinique Pasteur Tunis, cette continuité entre les urgences, l'imagerie et les blocs opératoires assure une prise en charge chirurgicale complète et sécurisée, de jour comme de nuit.`,
    image: '/images/bloc-operatoire.webp',
    indications: [
      'Traumatisme avec suspicion de fracture ou de luxation',
      'Plaie nécessitant une exploration ou une suture',
      'Douleur abdominale aiguë (suspicion d\'appendicite, de cholécystite, d\'occlusion)',
      'Hernie douloureuse ou irréductible',
      'Traumatisme abdominal ou thoracique',
    ],
    deroulement: [
      'Évaluation initiale par le médecin urgentiste et contrôle de la douleur',
      'Imagerie d\'urgence adaptée (radiographie, échographie, scanner)',
      'Prélèvements biologiques réalisés sur place si nécessaire',
      'Avis du chirurgien de garde et décision thérapeutique',
      'Immobilisation, suture ou traitement médical selon le cas',
      'En cas d\'intervention : préparation, consultation d\'anesthésie en urgence et transfert au bloc opératoire',
    ],
    resultats: 'Selon la gravité, le patient est traité aux urgences puis regagne son domicile, ou est hospitalisé pour surveillance ou intervention. Les suites opératoires sont assurées dans les services d\'hospitalisation de la clinique.',
  },
  {
    slug: 'urgences-gyneco-obstetriques',
    title: 'Urgences gynéco-obstétriques',
    shortTitle: 'Urgences gynéco-obstétriques',
    description: 'Prise en charge des urgences de la grossesse et de la femme, en lien direct avec la maternité et la salle de césarienne de la clinique.',
    fullDescription: `Les urgences gynéco-obstétriques couvrent l'ensemble des situations aiguës liées à la grossesse et à la santé de la femme : contractions et travail qui débute, saignements, diminution des mouvements du bébé, douleurs pelviennes aiguës, suspicion de grossesse extra-utérine ou complications gynécologiques.

Dès l'arrivée, la patiente est orientée vers la filière gynéco-obstétricale. L'équipe obstétricale de la clinique, disponible 24h/24, réalise l'examen clinique, le monitoring fœtal et l'échographie nécessaires pour évaluer la situation de la maman et du bébé.

La maternité de la clinique, avec ses box d'accouchement mitoyens à une salle de césarienne, permet une prise en charge immédiate lorsque la naissance est imminente ou qu'une césarienne en urgence est nécessaire. Les équipes d'anesthésie et de pédiatrie sont mobilisables à tout moment pour la sécurité de la mère et du nouveau-né.

À la Clinique Pasteur Tunis, la continuité entre les urgences, la maternité et le bloc opératoire offre aux futures mamans un environnement sécurisé et rassurant, à toute heure du jour et de la nuit.`,
    image: '/images/maternite.webp',
    indications: [
      'Contractions régulières ou perte des eaux',
      'Saignements pendant la grossesse',
      'Diminution des mouvements du bébé',
      'Douleurs pelviennes ou abdominales aiguës chez la femme',
      'Suspicion de grossesse extra-utérine',
      'Complications post-opératoires en gynécologie',
    ],
    deroulement: [
      'Orientation immédiate vers la filière gynéco-obstétricale dès le tri',
      'Examen clinique par l\'équipe obstétricale',
      'Monitoring fœtal et échographie selon la situation',
      'Prélèvements biologiques réalisés sur place si nécessaire',
      'Décision adaptée : surveillance, hospitalisation, accouchement ou césarienne en urgence',
      'Information continue de la patiente et de son accompagnant',
    ],
    resultats: 'Selon l\'évaluation, la patiente peut rentrer à domicile avec des consignes de surveillance, être hospitalisée en maternité, ou être prise en charge immédiatement pour un accouchement ou une intervention.',
  },
  {
    slug: 'urgences-pediatriques',
    title: 'Urgences pédiatriques',
    shortTitle: 'Urgences pédiatriques',
    description: 'Accueil et prise en charge des urgences de l\'enfant dans un environnement adapté, avec des équipes habituées à la pédiatrie.',
    fullDescription: `Les urgences de l'enfant demandent une approche particulière : un examen adapté à l'âge, des doses de traitement spécifiques et une attention constante portée au confort de l'enfant et à l'information des parents. Le service des urgences de la clinique prend en charge les nourrissons, les enfants et les adolescents pour l'ensemble des motifs aigus.

Les situations les plus fréquentes concernent la fièvre, les difficultés respiratoires, les gastro-entérites avec risque de déshydratation, les traumatismes et chutes, les douleurs abdominales et les réactions allergiques. Chaque enfant bénéficie d'une évaluation rapide de la gravité, avec une priorité donnée aux plus petits et aux tableaux inquiétants.

La présence d'un parent auprès de l'enfant est facilitée tout au long de la prise en charge. L'imagerie et les prélèvements sont réalisés sur place, avec des techniques adaptées à l'âge, et l'avis du pédiatre ou du chirurgien pédiatrique est sollicité chaque fois que nécessaire.

À la Clinique Pasteur Tunis, les urgences pédiatriques s'appuient sur les compétences des pédiatres, chirurgiens pédiatriques et anesthésistes de la clinique, pour une prise en charge rassurante des enfants et de leurs familles, 24h/24.`,
    image: '/images/pediatrique.webp',
    indications: [
      'Fièvre mal tolérée, en particulier chez le nourrisson',
      'Difficultés respiratoires, toux avec gêne, crise d\'asthme',
      'Vomissements et diarrhées avec signes de déshydratation',
      'Traumatisme, chute ou plaie',
      'Douleurs abdominales aiguës',
      'Réaction allergique ou éruption inquiétante',
    ],
    deroulement: [
      'Tri prioritaire adapté à l\'âge de l\'enfant',
      'Installation avec le parent dans un box de soins',
      'Examen par le médecin, avec mesures adaptées à l\'enfant',
      'Examens complémentaires si nécessaire (imagerie, prélèvements sur place)',
      'Traitement adapté : antipyrétiques, réhydratation, aérosols, soins de plaie',
      'Avis pédiatrique ou chirurgical pédiatrique selon la situation',
      'Consignes de surveillance détaillées remises aux parents à la sortie',
    ],
    resultats: 'La majorité des enfants regagnent leur domicile après les soins, avec des consignes claires de surveillance. En cas de besoin, l\'enfant est hospitalisé et suivi par l\'équipe pédiatrique de la clinique.',
  },
  {
    slug: 'reanimation-urgence',
    title: 'Réanimation d\'urgence',
    shortTitle: 'Réanimation d\'urgence',
    description: 'Prise en charge immédiate des détresses vitales par une équipe entraînée, avec transfert direct vers les unités de réanimation de la clinique.',
    fullDescription: `La réanimation d'urgence concerne les situations où le pronostic vital est engagé : arrêt cardiaque, détresse respiratoire majeure, état de choc, coma, polytraumatisme ou hémorragie grave. Ces situations exigent des gestes immédiats, un matériel spécifique et une équipe parfaitement coordonnée.

Le service des urgences dispose d'un espace équipé pour la prise en charge des détresses vitales : monitorage complet, matériel de ventilation et d'intubation, défibrillateur, médicaments d'urgence et solutés de perfusion. L'équipe d'urgentistes et d'infirmiers est formée aux gestes de réanimation et travaille en lien immédiat avec les médecins réanimateurs de la clinique.

Une fois l'état du patient stabilisé, celui-ci est transféré vers l'unité la plus adaptée : réanimation polyvalente, réanimation cardiaque ou unité de soins intensifs cardiologiques, toutes situées dans le même bâtiment. Cette continuité évite toute perte de temps dans les situations critiques.

À la Clinique Pasteur Tunis, la chaîne de survie est ainsi assurée sans interruption, de l'arrivée aux urgences jusqu'aux soins intensifs, 24h/24 et 7j/7.`,
    image: '/images/reanimation.webp',
    indications: [
      'Arrêt cardiaque ou trouble du rythme grave',
      'Détresse respiratoire aiguë sévère',
      'État de choc (cardiaque, infectieux, hémorragique, allergique)',
      'Coma ou troubles graves de la conscience',
      'Polytraumatisme ou hémorragie importante',
    ],
    deroulement: [
      'Admission directe en salle de déchocage, sans passage par le circuit standard',
      'Mise en place immédiate du monitorage complet (cœur, tension, oxygène)',
      'Gestes de réanimation selon la situation : oxygénation, ventilation, massage cardiaque, défibrillation',
      'Pose de voies veineuses et administration des médicaments d\'urgence',
      'Examens diagnostiques au lit du patient (échographie, électrocardiogramme, prélèvements sur place)',
      'Stabilisation puis transfert vers la réanimation ou le bloc opératoire selon le diagnostic',
    ],
    resultats: 'Après stabilisation, le patient est admis dans l\'unité de réanimation ou de soins intensifs adaptée à son état, où la prise en charge se poursuit avec une surveillance continue. Les familles sont informées régulièrement par l\'équipe médicale.',
  },
  {
    slug: 'imagerie-urgence',
    title: 'Imagerie d\'urgence (Scanner, Radiologie)',
    shortTitle: 'Imagerie d\'urgence',
    description: 'Scanner, radiologie et échographie accessibles en continu pour un diagnostic rapide des situations urgentes.',
    fullDescription: `L'imagerie est un maillon essentiel de la prise en charge des urgences : elle permet de confirmer ou d'écarter rapidement un diagnostic et d'orienter le traitement. Le service des urgences de la clinique bénéficie d'un accès direct et prioritaire au centre de radiologie, situé au même niveau, au rez-de-chaussée.

Le plateau d'imagerie disponible en urgence comprend le scanner, la radiologie conventionnelle et l'échographie. Ces examens couvrent la grande majorité des besoins urgents : traumatismes et fractures, douleurs abdominales, suspicion d'accident vasculaire cérébral, pathologies pulmonaires ou urinaires.

Les examens sont réalisés par des manipulateurs expérimentés et interprétés par les médecins radiologues de la clinique, en lien direct avec l'urgentiste. Les résultats sont communiqués rapidement à l'équipe soignante, ce qui permet de prendre les décisions thérapeutiques sans délai.

À la Clinique Pasteur Tunis, la proximité immédiate entre les urgences et le centre de radiologie garantit un parcours fluide : le patient est accompagné d'un service à l'autre en quelques instants, à toute heure du jour et de la nuit.`,
    image: '/images/radiologie-scanner.webp',
    indications: [
      'Traumatismes : recherche de fracture ou de lésion interne',
      'Douleurs abdominales aiguës',
      'Suspicion d\'accident vasculaire cérébral',
      'Douleur thoracique ou difficulté respiratoire',
      'Suspicion de colique néphrétique',
      'Céphalées brutales ou inhabituelles',
    ],
    deroulement: [
      'Prescription de l\'examen par le médecin urgentiste',
      'Accompagnement du patient vers le centre de radiologie, au même niveau que les urgences',
      'Réalisation de l\'examen adapté (radiographie, scanner, échographie)',
      'Interprétation par le médecin radiologue en lien avec l\'urgentiste',
      'Transmission rapide des résultats à l\'équipe soignante',
    ],
    duree: 'De quelques minutes pour une radiographie à environ 30 minutes pour un scanner avec préparation',
    resultats: 'Les résultats sont communiqués rapidement au médecin urgentiste, qui les explique au patient et adapte la prise en charge en conséquence : traitement, surveillance, hospitalisation ou intervention.',
    risques: [
      'Les examens utilisant des rayons X sont réalisés selon les règles de radioprotection, avec des doses adaptées',
      'En cas d\'injection de produit de contraste, l\'équipe vérifie au préalable les allergies et la fonction rénale',
      'L\'échographie est totalement indolore et sans rayonnement',
    ],
  },
  {
    slug: 'biologie-urgence',
    title: 'Biologie d\'urgence',
    shortTitle: 'Biologie d\'urgence',
    description: 'Prélèvements réalisés sur place aux urgences, avec des analyses assurées en continu sur le site pour des résultats rapides.',
    fullDescription: `Les analyses biologiques sont indispensables au diagnostic de nombreuses urgences : bilan cardiaque devant une douleur thoracique, recherche d'infection, évaluation de la fonction rénale, bilan sanguin avant une intervention ou contrôle d'un traitement anticoagulant.

Aux urgences de la clinique, les prélèvements sanguins et urinaires sont réalisés sur place par l'équipe infirmière, dès la prescription du médecin. Les analyses sont assurées en continu sur le site, de jour comme de nuit, ce qui permet d'obtenir rapidement les résultats nécessaires à la prise de décision médicale.

Les examens les plus courants en urgence comprennent la numération sanguine, le ionogramme, les marqueurs cardiaques, le bilan de coagulation, la glycémie, les bilans rénal et hépatique ainsi que les analyses d'urines. Les résultats sont transmis directement au médecin urgentiste, qui les interprète en fonction du tableau clinique.

À la Clinique Pasteur Tunis, cette organisation permet d'intégrer la biologie dans le parcours d'urgence sans déplacement du patient : les prélèvements sont effectués au box de soins et les résultats parviennent à l'équipe soignante dans les meilleurs délais, 24h/24.`,
    image: '/images/medical-team.webp',
    indications: [
      'Douleur thoracique : dosage des marqueurs cardiaques',
      'Fièvre ou suspicion d\'infection',
      'Bilan avant intervention chirurgicale en urgence',
      'Évaluation d\'un malaise, d\'une déshydratation ou d\'un déséquilibre du diabète',
      'Contrôle d\'un traitement anticoagulant',
      'Douleurs abdominales : bilan hépatique, pancréatique et rénal',
    ],
    deroulement: [
      'Prescription des analyses par le médecin urgentiste',
      'Prélèvement sanguin ou urinaire réalisé sur place, au box de soins',
      'Acheminement immédiat des échantillons pour analyse sur le site',
      'Traitement des analyses en continu, à toute heure',
      'Transmission des résultats au médecin urgentiste dès leur validation',
    ],
    duree: 'Les résultats des analyses urgentes sont généralement disponibles en 1 heure environ',
    resultats: 'Les résultats sont interprétés par le médecin urgentiste en fonction de l\'examen clinique et de l\'imagerie, afin d\'établir le diagnostic et d\'adapter le traitement sans délai.',
    risques: [
      'Le prélèvement sanguin est un geste simple et courant, réalisé avec du matériel stérile à usage unique',
      'Un petit hématome au point de ponction peut parfois apparaître et disparaît spontanément en quelques jours',
    ],
  },
];
