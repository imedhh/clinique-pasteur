export const servicesHospitalisationJour = [
  {
    slug: 'chirurgie-ambulatoire',
    title: 'Chirurgie ambulatoire',
    shortTitle: 'Chirurgie ambulatoire',
    image: '/images/fiches/hdj-chirurgie-ambulatoire.webp',
    description: 'Interventions chirurgicales réalisées dans la journée : le patient est admis le matin et regagne son domicile le soir même, en toute sécurité.',
    fullDescription: `La chirurgie ambulatoire permet de réaliser une intervention chirurgicale avec une admission le matin et un retour à domicile le jour même. Ce mode de prise en charge, devenu une référence internationale, s'applique à de nombreuses interventions : hernies, chirurgie de la main, arthroscopies, petite chirurgie ORL, gestes gynécologiques ou urologiques.

L'éligibilité à l'ambulatoire est décidée conjointement par le chirurgien et le médecin anesthésiste, lors des consultations préalables. Elle tient compte du type d'intervention, de l'état de santé du patient et de ses conditions de retour à domicile, notamment la présence d'un accompagnant.

Le jour de l'intervention, le patient est accueilli à l'hôpital de jour, préparé, opéré au bloc opératoire dans les mêmes conditions de sécurité qu'une hospitalisation classique, puis surveillé en salle de réveil et dans sa chambre jusqu'à la validation de sa sortie par le médecin.

À la Clinique Pasteur Tunis, l'hôpital de jour dispose d'un circuit dédié, confortable et fluide. L'équipe remet à chaque patient des consignes de sortie détaillées et reste joignable pour toute question après le retour à domicile.`,
    indications: [
      { label: 'Cure de hernie inguinale ou ombilicale', explication: `Cette intervention courante répare la paroi du ventre à l'endroit où la hernie est apparue ; le patient regagne son domicile le soir même.` },
      { label: 'Chirurgie de la main et du poignet (canal carpien, doigt à ressaut)', explication: `Ces gestes ciblés soulagent les fourmillements ou le blocage des doigts, souvent sous anesthésie locale ou locorégionale, avec un retour rapide à la maison.` },
      { label: 'Arthroscopie du genou ou de l\'épaule', explication: `À l'aide d'une petite caméra introduite dans l'articulation, le chirurgien traite les lésions par de très petites incisions, ce qui facilite la récupération.` },
      { label: 'Petite chirurgie ORL et pose d\'aérateurs transtympaniques', explication: `Des gestes courts du nez, de la gorge ou des oreilles, comme la pose de petits drains dans le tympan chez l'enfant, réalisables dans la journée.` },
      { label: 'Gestes gynécologiques (curetage, hystéroscopie)', explication: `Des explorations ou traitements de l'utérus réalisés en douceur sous anesthésie, avec une sortie le jour même.` },
      { label: 'Chirurgie des varices et petite chirurgie urologique', explication: `Le traitement des varices ou de petites affections urologiques peut être réalisé dans la journée, avec une reprise rapide des activités habituelles.` },
    ],
    preparation: [
      'Consultation chirurgicale puis consultation d\'anesthésie préalables',
      'Être à jeun 6 heures avant l\'intervention (ni nourriture, ni boisson, sauf consignes contraires)',
      'Prévoir un accompagnant pour le retour à domicile',
      'Suivre les consignes concernant les traitements en cours (notamment anticoagulants)',
      'Effectuer la douche pré-opératoire selon les instructions remises',
    ],
    deroulement: [
      'Accueil à l\'hôpital de jour le matin de l\'intervention',
      'Vérifications administratives et médicales, installation en chambre',
      'Préparation pré-opératoire et transfert au bloc opératoire',
      'Intervention sous anesthésie adaptée (générale, locorégionale ou locale)',
      'Surveillance en salle de réveil puis retour en chambre',
      'Collation, première mobilisation et évaluation par l\'équipe',
      'Validation de la sortie par le médecin et remise des consignes',
    ],
    duree: 'Présence à la clinique de quelques heures, généralement du matin jusqu\'en début de soirée',
    resultats: 'Le retour à domicile s\'effectue le jour même, accompagné, avec une ordonnance et des consignes précises. Un contact de suivi et une consultation post-opératoire sont programmés pour vérifier la bonne récupération.',
    risques: [
      'Les suites simples les plus fréquentes sont une douleur modérée et une fatigue passagère, contrôlées par le traitement prescrit',
      'Comme pour toute chirurgie, des complications rares sont possibles ; les consignes remises précisent les signes qui doivent amener à contacter la clinique',
      'En cas de besoin, une hospitalisation conventionnelle reste toujours possible au sein de la clinique',
    ],
  },
  {
    slug: 'endoscopies-digestives',
    title: 'Endoscopies digestives',
    shortTitle: 'Endoscopies digestives',
    image: '/images/fiches/hdj-endoscopies-digestives.webp',
    description: 'Fibroscopies et coloscopies réalisées en hôpital de jour, sous sédation, avec un retour à domicile le jour même.',
    fullDescription: `Les endoscopies digestives permettent d'explorer l'intérieur du tube digestif à l'aide d'un endoscope souple muni d'une caméra. La fibroscopie gastrique examine l'œsophage, l'estomac et le début de l'intestin ; la coloscopie explore le côlon. Ces examens servent à la fois au diagnostic et au traitement : biopsies, ablation de polypes, traitement de lésions.

Réalisées en hospitalisation de jour, ces explorations se déroulent le plus souvent sous sédation ou anesthésie, pour un confort optimal. Le patient est admis le matin, l'examen est réalisé dans une salle d'endoscopie dédiée équipée de vidéo-endoscopes de dernière génération, puis une surveillance de quelques heures précède le retour à domicile.

La coloscopie nécessite une préparation à domicile, expliquée en détail lors de la consultation préalable : régime particulier les jours précédents et prise d'une solution de préparation pour nettoyer le côlon, condition essentielle à un examen de qualité.

À la Clinique Pasteur Tunis, les endoscopies digestives sont réalisées par des gastro-entérologues expérimentés, avec une équipe d'anesthésie dédiée. Le circuit de l'hôpital de jour assure un parcours simple et confortable, de l'accueil à la remise du compte rendu.`,
    indications: [
      { label: 'Douleurs digestives persistantes, reflux ou brûlures d\'estomac', explication: `La fibroscopie permet de voir directement l'œsophage et l'estomac pour trouver l'origine de douleurs ou de brûlures qui durent.` },
      { label: 'Troubles du transit récents ou saignements digestifs', explication: `Un changement durable du transit ou la présence de sang doivent être explorés : la coloscopie examine le côlon pour en identifier la cause.` },
      { label: 'Anémie inexpliquée', explication: `Un manque de globules rouges peut provenir d'un saignement digestif discret : l'endoscopie recherche ce saignement pour le traiter.` },
      { label: 'Dépistage et surveillance des polypes du côlon', explication: `Les polypes sont de petites excroissances qui peuvent évoluer avec le temps : la coloscopie permet de les détecter et de les retirer au cours du même examen.` },
      { label: 'Surveillance de maladies digestives connues', explication: `Certaines maladies de l'estomac ou de l'intestin nécessitent des contrôles réguliers par endoscopie pour suivre leur évolution et adapter le traitement.` },
      { label: 'Biopsies et gestes thérapeutiques (polypectomie, dilatation)', explication: `Au cours du même examen, le médecin peut prélever un fragment de tissu à analyser, retirer un polype ou élargir un passage rétréci.` },
    ],
    preparation: [
      'Consultation préalable avec le gastro-entérologue et, si sédation, avec l\'anesthésiste',
      'Être à jeun 6 heures avant l\'examen',
      'Pour la coloscopie : suivre le régime prescrit et prendre la préparation colique selon le protocole remis',
      'Signaler les traitements en cours, en particulier anticoagulants et antiagrégants',
      'Prévoir un accompagnant pour le retour à domicile en cas de sédation',
    ],
    deroulement: [
      'Accueil à l\'hôpital de jour et installation en chambre',
      'Vérifications pré-anesthésiques et pose d\'une voie veineuse si sédation',
      'Réalisation de l\'examen en salle d\'endoscopie dédiée',
      'Biopsies ou gestes thérapeutiques si nécessaire au cours du même examen',
      'Surveillance en salle de réveil puis en chambre',
      'Collation et entretien avec le médecin avant la sortie',
    ],
    duree: '15 à 45 minutes d\'examen ; environ une demi-journée de présence à la clinique',
    resultats: 'Un compte rendu est remis à la sortie avec les premières conclusions. Les résultats des éventuelles biopsies sont communiqués lors d\'une consultation de suivi et adressés au médecin traitant.',
    risques: [
      'Examens très courants et bien tolérés sous sédation',
      'Ballonnements ou gêne passagère possibles après l\'examen',
      'Les complications sont rares et l\'équipe prend toutes les précautions pour les prévenir ; les gestes thérapeutiques font l\'objet d\'une information spécifique au préalable',
    ],
  },
  {
    slug: 'explorations-cardiaques-ambulatoires',
    title: 'Explorations cardiaques',
    shortTitle: 'Explorations cardiaques',
    image: '/images/fiches/hdj-explorations-cardiaques-ambulatoires.webp',
    description: 'Bilans cardiologiques réalisés dans la journée : échographie, épreuve d\'effort, Holter, jusqu\'à la coronarographie en hôpital de jour.',
    fullDescription: `L'hospitalisation de jour permet de réaliser dans la journée un bilan cardiologique complet, en regroupant plusieurs examens lors d'une même venue : électrocardiogramme, échocardiographie, épreuve d'effort, pose de Holter, et lorsque cela est indiqué, des explorations invasives comme la coronarographie diagnostique.

Ce mode de prise en charge est particulièrement adapté aux bilans programmés : évaluation d'une douleur thoracique, bilan avant une intervention chirurgicale, suivi d'une maladie cardiaque connue ou contrôle après un traitement. Le patient bénéficie du plateau technique complet du centre d'explorations cardiaques de la clinique, sans nécessité de passer une nuit sur place.

Pour les explorations invasives comme la coronarographie, le patient est admis le matin à jeun, l'examen est réalisé dans la salle de cathétérisme cardiaque, puis une surveillance de quelques heures en hôpital de jour précède le retour à domicile, si l'état du patient le permet.

À la Clinique Pasteur Tunis, ces bilans sont coordonnés par les cardiologues du centre d'explorations cardiaques, en lien avec l'équipe de l'hôpital de jour. Les résultats sont expliqués au patient avant sa sortie et transmis au médecin traitant.`,
    indications: [
      { label: 'Bilan d\'une douleur thoracique ou d\'un essoufflement à l\'effort', explication: `Plusieurs examens du cœur regroupés dans la même journée permettent de comprendre l'origine d'une douleur ou d'un essoufflement inhabituel.` },
      { label: 'Bilan cardiologique avant une intervention chirurgicale', explication: `Avant une opération, ce bilan vérifie que le cœur supportera bien l'anesthésie et l'intervention prévue.` },
      { label: 'Suivi d\'une maladie coronarienne ou valvulaire connue', explication: `Les personnes suivies pour une maladie du cœur bénéficient de contrôles réguliers regroupés en une seule venue, sans nuit sur place.` },
      { label: 'Contrôle après angioplastie ou chirurgie cardiaque', explication: `Après la pose d'un stent ou une opération du cœur, un contrôle permet de vérifier le bon résultat du traitement et d'ajuster le suivi.` },
      { label: 'Bilan de palpitations ou de malaises', explication: `L'enregistrement du rythme cardiaque et les examens associés recherchent un trouble du rythme à l'origine des symptômes.` },
      { label: 'Coronarographie diagnostique programmée', explication: `Cet examen visualise les artères qui nourrissent le cœur pour vérifier si elles sont rétrécies ; réalisé le matin, il permet souvent un retour à domicile le jour même.` },
    ],
    preparation: [
      'Apporter les ordonnances, comptes rendus et examens cardiologiques antérieurs',
      'Pour la coronarographie : être à jeun 6 heures avant l\'examen',
      'Signaler les traitements en cours, allergies et antécédents rénaux',
      'Prévoir une tenue confortable pour l\'épreuve d\'effort',
      'Prévoir un accompagnant en cas d\'exploration invasive',
    ],
    deroulement: [
      'Accueil à l\'hôpital de jour et installation',
      'Réalisation des examens programmés selon un circuit coordonné',
      'Électrocardiogramme et échocardiographie au centre d\'explorations cardiaques',
      'Épreuve d\'effort ou examens complémentaires selon la prescription',
      'Pour la coronarographie : réalisation en salle de cathétérisme puis surveillance du point de ponction',
      'Synthèse des résultats par le cardiologue avant la sortie',
    ],
    duree: 'De 2 heures pour un bilan simple à une journée complète pour les explorations invasives',
    resultats: 'Le cardiologue présente les conclusions du bilan au patient avant la sortie et propose, le cas échéant, la suite de la prise en charge. Un compte rendu complet est remis et adressé au médecin traitant.',
    risques: [
      'Les explorations non invasives (ECG, échographie, Holter) sont sans danger et indolores',
      'L\'épreuve d\'effort est réalisée sous surveillance médicale continue',
      'La coronarographie est un examen maîtrisé ; un hématome au point de ponction est possible et régresse spontanément',
    ],
  },
  {
    slug: 'chimiotherapie-ambulatoire',
    title: 'Chimiothérapie',
    shortTitle: 'Chimiothérapie',
    image: '/images/fiches/hdj-chimiotherapie-ambulatoire.webp',
    description: 'Administration des traitements de chimiothérapie en hôpital de jour, dans un cadre confortable, avec un retour à domicile le jour même.',
    fullDescription: `L'hôpital de jour de la clinique accueille les patients pour l'administration de leurs cures de chimiothérapie, selon le protocole établi par leur oncologue. Ce mode de prise en charge permet de recevoir le traitement dans la journée et de rentrer chez soi le soir même, en conservant au maximum sa vie quotidienne.

Chaque venue débute par une évaluation : entretien avec l'équipe soignante, vérification de l'état général et contrôle du bilan sanguin, dont les prélèvements peuvent être réalisés sur place. Le traitement n'est administré qu'après validation médicale, garantissant que chaque cure est réalisée dans les meilleures conditions de sécurité.

L'administration se déroule dans un environnement calme et confortable, sous la surveillance continue d'une équipe infirmière formée à l'oncologie. Les perfusions sont préparées selon des protocoles rigoureux et le patient est accompagné tout au long de la séance : gestion des effets indésirables, conseils pratiques, soutien et écoute.

À la Clinique Pasteur Tunis, la prise en charge en hôpital de jour s'inscrit dans un parcours coordonné avec l'oncologue référent du patient. L'équipe veille au confort de chacun et reste disponible entre les cures pour répondre aux questions.`,
    indications: [
      { label: 'Cures de chimiothérapie programmées dans le cadre d\'un protocole établi', explication: `Les séances de traitement prescrites par l'oncologue se déroulent dans la journée, selon un calendrier précis, sans nuit passée à la clinique.` },
      { label: 'Traitements par perfusion prescrits par l\'oncologue', explication: `Les médicaments administrés par perfusion sont préparés et surveillés par une équipe formée à l'oncologie, dans un cadre calme et confortable.` },
      { label: 'Thérapies ciblées et traitements de support associés', explication: `Les traitements récents dits ciblés et les soins qui accompagnent la chimiothérapie, comme les médicaments contre les nausées, sont administrés au cours de la même venue.` },
      { label: 'Surveillance clinique au décours des cures', explication: `Entre ou après les cures, une courte venue permet de vérifier la tolérance du traitement et d'ajuster les soins d'accompagnement.` },
    ],
    preparation: [
      'Réaliser le bilan sanguin prescrit avant chaque cure, ou le faire réaliser sur place à l\'arrivée',
      'Prendre les prémédications prescrites par l\'oncologue',
      'Apporter la liste de ses traitements en cours',
      'Signaler tout symptôme nouveau depuis la dernière cure (fièvre, douleurs, troubles digestifs)',
      'Prévoir de quoi s\'occuper confortablement pendant la perfusion (lecture, musique)',
    ],
    deroulement: [
      'Accueil à l\'hôpital de jour et installation en chambre ou en fauteuil',
      'Entretien avec l\'équipe soignante et vérification des constantes',
      'Contrôle du bilan sanguin et validation de la cure par le médecin',
      'Préparation sécurisée du traitement',
      'Administration de la perfusion sous surveillance continue',
      'Surveillance après la fin du traitement, puis sortie avec les consignes',
    ],
    duree: 'De 1 à 2 heures à une journée selon le protocole',
    resultats: 'À l\'issue de chaque cure, le patient regagne son domicile avec des consignes personnalisées et les coordonnées de l\'équipe. Le suivi du traitement et l\'évaluation de son efficacité sont assurés par l\'oncologue référent lors des consultations programmées.',
    risques: [
      'Les effets indésirables éventuels (fatigue, nausées) sont anticipés et atténués par des traitements préventifs adaptés',
      'L\'équipe surveille attentivement la perfusion afin de prévenir toute réaction ; le patient signale immédiatement la moindre gêne',
      'Des consignes précises sont remises pour savoir quand contacter l\'équipe entre les cures',
    ],
  },
  {
    slug: 'perfusions-traitements-iv',
    title: 'Perfusions et traitements IV',
    shortTitle: 'Perfusions et traitements IV',
    image: '/images/fiches/hdj-perfusions-traitements-iv.webp',
    description: 'Administration en hôpital de jour des traitements intraveineux programmés : fer, biothérapies, antibiotiques, réhydratation.',
    fullDescription: `De nombreux traitements médicaux nécessitent une administration par voie intraveineuse, sans pour autant justifier une hospitalisation complète : perfusions de fer en cas de carence, biothérapies pour les maladies inflammatoires, antibiothérapies prolongées, immunoglobulines, réhydratation ou encore traitements de l'ostéoporose.

L'hôpital de jour offre un cadre idéal pour ces soins : le patient est accueilli à l'heure prévue, installé confortablement, et le traitement est administré par une équipe infirmière expérimentée, sous responsabilité médicale. La surveillance pendant et après la perfusion garantit une sécurité optimale, notamment lors des premières administrations d'un nouveau traitement.

Ce fonctionnement en séances programmées permet une grande régularité dans les traitements au long cours, avec des rendez-vous adaptés aux contraintes personnelles et professionnelles de chacun. Le patient repart le jour même, généralement après une courte surveillance.

À la Clinique Pasteur Tunis, les perfusions sont réalisées sur prescription du médecin traitant ou du spécialiste, en coordination avec l'équipe de l'hôpital de jour. Chaque séance fait l'objet d'une vérification médicale préalable et d'un compte rendu transmis au médecin prescripteur.`,
    indications: [
      { label: 'Perfusions de fer en cas de carence ou d\'anémie', explication: `Quand le fer manque et que les comprimés ne suffisent pas ou sont mal tolérés, une perfusion permet de reconstituer les réserves rapidement et efficacement.` },
      { label: 'Biothérapies des maladies inflammatoires chroniques', explication: `Ces traitements modernes de maladies comme les rhumatismes inflammatoires ou certaines maladies de l'intestin s'administrent par perfusion régulière, sous surveillance.` },
      { label: 'Antibiothérapie intraveineuse prolongée', explication: `Certaines infections nécessitent des antibiotiques par voie veineuse sur plusieurs jours : les séances en hôpital de jour évitent une hospitalisation complète.` },
      { label: 'Perfusions d\'immunoglobulines', explication: `Ces perfusions renforcent les défenses immunitaires des patients qui en manquent ou traitent certaines maladies du système immunitaire.` },
      { label: 'Traitements intraveineux de l\'ostéoporose', explication: `Pour renforcer des os fragilisés, certains traitements s'administrent par perfusion espacée dans le temps, plus simple qu'une prise quotidienne de comprimés.` },
      { label: 'Réhydratation et corrections de déséquilibres', explication: `Une perfusion permet de réhydrater l'organisme ou de corriger un manque de sels minéraux quand l'alimentation seule ne suffit pas.` },
    ],
    preparation: [
      'Apporter la prescription médicale et les résultats d\'analyses demandés',
      'Signaler toute allergie connue et les traitements en cours',
      'Il n\'est généralement pas nécessaire d\'être à jeun, sauf indication contraire',
      'Prévoir une tenue confortable permettant l\'accès au bras',
    ],
    deroulement: [
      'Accueil et installation en chambre ou en fauteuil de l\'hôpital de jour',
      'Vérification médicale avant l\'administration du traitement',
      'Pose d\'une voie veineuse par l\'infirmière',
      'Administration de la perfusion au débit prescrit, sous surveillance',
      'Surveillance après la fin de la perfusion',
      'Retrait de la voie veineuse et sortie avec les consignes',
    ],
    duree: '30 minutes à quelques heures selon le traitement',
    resultats: 'Le patient regagne son domicile le jour même. Le suivi de l\'efficacité du traitement est assuré par le médecin prescripteur, qui reçoit un compte rendu de chaque séance.',
    risques: [
      'La pose de la perfusion peut occasionner une gêne brève au point de ponction',
      'Les rares réactions au produit sont prévenues par une surveillance attentive, en particulier lors des premières administrations',
      'Un petit hématome au point de ponction peut apparaître et disparaît spontanément',
    ],
  },
  {
    slug: 'biopsies',
    title: 'Biopsies',
    shortTitle: 'Biopsies',
    image: '/images/fiches/hdj-biopsies.webp',
    description: 'Prélèvements de tissus réalisés en hôpital de jour, le plus souvent sous guidage d\'imagerie, pour établir un diagnostic précis.',
    fullDescription: `La biopsie consiste à prélever un petit fragment de tissu afin de l'analyser au microscope. C'est un examen clé pour établir un diagnostic précis, notamment devant un nodule, une lésion découverte à l'imagerie ou une anomalie biologique inexpliquée. Elle concerne de nombreux organes : sein, thyroïde, foie, prostate, ganglions ou encore peau.

La plupart des biopsies sont réalisées sous anesthésie locale, souvent avec un guidage par imagerie (échographie ou scanner) qui permet de cibler la zone à prélever avec une grande précision. Certaines biopsies plus profondes peuvent nécessiter une courte sédation, décidée au préalable avec le médecin.

La prise en charge en hôpital de jour permet de réaliser le geste dans des conditions optimales de sécurité : préparation, prélèvement, puis surveillance de quelques heures avant le retour à domicile. Les fragments prélevés sont confiés à l'analyse anatomopathologique.

À la Clinique Pasteur Tunis, les biopsies sont réalisées par des médecins radiologues et spécialistes expérimentés, en coordination avec le médecin prescripteur. Les résultats sont expliqués au patient lors d'une consultation dédiée, avec un accompagnement adapté à chaque situation.`,
    indications: [
      { label: 'Caractérisation d\'un nodule du sein ou de la thyroïde', explication: `Prélever quelques cellules du nodule permet de savoir précisément de quoi il s'agit et de choisir la bonne conduite à tenir, souvent simplement rassurante.` },
      { label: 'Lésion du foie ou d\'un autre organe découverte à l\'imagerie', explication: `Quand une image inhabituelle est découverte, un petit prélèvement guidé par échographie ou scanner permet d'en connaître la nature exacte.` },
      { label: 'Biopsie de prostate sur indication de l\'urologue', explication: `Ce prélèvement, décidé par l'urologue à l'issue de ses examens, permet d'analyser le tissu de la prostate et d'établir un diagnostic précis.` },
      { label: 'Adénopathie (ganglion augmenté de volume) à explorer', explication: `Un ganglion qui reste gonflé sans raison apparente est prélevé pour en déterminer la cause, le plus souvent bénigne.` },
      { label: 'Anomalies biologiques nécessitant une confirmation tissulaire', explication: `Quand les analyses de sang évoquent une maladie sans la prouver, l'étude d'un fragment de tissu apporte la certitude nécessaire pour bien traiter.` },
    ],
    preparation: [
      'Consultation préalable pour expliquer le geste et vérifier les contre-indications',
      'Bilan de coagulation si prescrit',
      'Signaler les traitements anticoagulants ou antiagrégants, qui peuvent nécessiter un ajustement',
      'Être à jeun si une sédation est prévue',
      'Prévoir un accompagnant pour le retour à domicile',
    ],
    deroulement: [
      'Accueil à l\'hôpital de jour et installation',
      'Vérifications médicales et consentement',
      'Anesthésie locale de la zone à prélever',
      'Prélèvement guidé par imagerie (échographie ou scanner) selon l\'organe concerné',
      'Pansement et surveillance en chambre pendant quelques heures',
      'Validation de la sortie par le médecin et remise des consignes',
    ],
    duree: '15 à 30 minutes pour le geste ; quelques heures de surveillance ensuite',
    resultats: 'Les prélèvements sont analysés en laboratoire d\'anatomopathologie. Les résultats sont communiqués au patient lors d\'une consultation avec le médecin prescripteur, qui explique les conclusions et la suite éventuelle de la prise en charge.',
    risques: [
      'Douleur légère ou sensibilité au point de ponction, calmée par un antalgique simple',
      'Petit hématome possible, qui régresse spontanément',
      'Les complications plus notables sont rares et prévenues par la surveillance en hôpital de jour ; les consignes remises précisent les signes devant amener à consulter',
    ],
  },
  {
    slug: 'bilans-sante-complets',
    title: 'Bilans de santé complets',
    shortTitle: 'Bilans de santé',
    image: '/images/fiches/hdj-bilans-sante-complets.webp',
    description: 'Check-up complet réalisé en une journée : consultations, analyses, imagerie et explorations coordonnées en un seul lieu.',
    fullDescription: `Le bilan de santé permet de faire le point sur son état général, de dépister précocement d'éventuels facteurs de risque et de recevoir des conseils de prévention personnalisés. Réalisé en hospitalisation de jour, il regroupe en une seule venue des examens qui nécessiteraient autrement plusieurs rendez-vous.

Le contenu du bilan est adapté à chaque personne selon son âge, ses antécédents personnels et familiaux et son mode de vie. Il peut associer un examen clinique complet, des prélèvements biologiques réalisés sur place, un électrocardiogramme, une épreuve d'effort, des examens d'imagerie (échographie, radiologie, mammographie, ostéodensitométrie) et des consultations spécialisées.

Le déroulement est organisé selon un circuit fluide : le patient est accueilli le matin, accompagné d'examen en examen, et bénéficie d'une pause avec collation. En fin de parcours, un médecin fait la synthèse des premiers résultats et répond aux questions.

À la Clinique Pasteur Tunis, les bilans de santé s'appuient sur le plateau technique complet de l'établissement, réuni sur un même site. Un compte rendu global est remis au patient et adressé, s'il le souhaite, à son médecin traitant, avec des recommandations de suivi personnalisées.`,
    indications: [
      { label: 'Bilan de prévention souhaité à titre personnel', explication: `Faire le point sur sa santé sans attendre un symptôme permet de dépister tôt d'éventuels facteurs de risque et d'agir en prévention.` },
      { label: 'Antécédents familiaux justifiant un dépistage (maladies cardiovasculaires, diabète)', explication: `Quand certaines maladies existent dans la famille, un dépistage régulier et adapté permet de les repérer et de les prévenir au plus tôt.` },
      { label: 'Bilan avant reprise d\'une activité sportive', explication: `Avant de reprendre le sport, un contrôle du cœur et de l'état général permet de s'entraîner en toute sécurité.` },
      { label: 'Bilan demandé dans un cadre professionnel', explication: `Certaines fonctions ou embauches demandent un état des lieux complet de la santé, réalisé ici en une seule venue.` },
      { label: 'Point de santé global après un événement médical', explication: `Après un problème de santé, un bilan complet permet de vérifier la récupération et d'adapter le suivi si nécessaire.` },
    ],
    preparation: [
      'Être à jeun le matin du bilan pour les prélèvements sanguins',
      'Apporter ses ordonnances, comptes rendus et examens antérieurs',
      'Prévoir une tenue confortable si une épreuve d\'effort est programmée',
      'Signaler ses antécédents et traitements lors de la prise de rendez-vous afin de personnaliser le bilan',
    ],
    deroulement: [
      'Accueil le matin à l\'hôpital de jour',
      'Prélèvements biologiques réalisés sur place',
      'Examen clinique complet et électrocardiogramme',
      'Examens d\'imagerie programmés selon le profil (échographie, radiologie, mammographie)',
      'Explorations complémentaires si prévues (épreuve d\'effort, ostéodensitométrie)',
      'Collation puis consultation de synthèse avec le médecin',
    ],
    duree: 'Une demi-journée à une journée selon le contenu du bilan',
    resultats: 'Une synthèse est présentée au patient en fin de journée, complétée par un compte rendu écrit regroupant l\'ensemble des résultats et des recommandations personnalisées de prévention et de suivi.',
  },
  {
    slug: 'soins-post-operatoires-suivi',
    title: 'Soins post-opératoires de suivi',
    shortTitle: 'Soins post-opératoires',
    image: '/images/fiches/hdj-soins-post-operatoires-suivi.webp',
    description: 'Pansements complexes, retrait de matériel et contrôles après une intervention, assurés en hôpital de jour sans nouvelle hospitalisation.',
    fullDescription: `Après une intervention chirurgicale, certains soins nécessitent un environnement médicalisé sans justifier une hospitalisation : pansements complexes, retrait de fils, d'agrafes ou de drains, surveillance de cicatrisation, ponctions ou contrôles cliniques rapprochés. L'hôpital de jour permet de réaliser ces soins dans les meilleures conditions, en une venue courte et programmée.

Ces séances assurent une continuité entre le séjour chirurgical et le retour à la vie normale. L'équipe soignante, en lien avec le chirurgien, contrôle l'évolution de la cicatrisation, adapte les soins locaux et vérifie l'absence de complication. C'est aussi l'occasion pour le patient de poser toutes ses questions sur sa convalescence.

En cas de besoin, des examens complémentaires peuvent être organisés au cours de la même venue : prélèvements réalisés sur place, échographie ou consultation avec le chirurgien. Cette organisation évite les allers-retours et sécurise la période post-opératoire.

À la Clinique Pasteur Tunis, les soins post-opératoires de suivi sont programmés dès la sortie d'hospitalisation, selon un calendrier établi par l'équipe chirurgicale. Le patient retrouve à chaque venue une équipe qui connaît son dossier et assure une prise en charge cohérente jusqu'à la guérison complète.`,
    indications: [
      { label: 'Pansements complexes ou itératifs après chirurgie', explication: `Certains pansements demandent un savoir-faire et un matériel spécifiques : ils sont refaits régulièrement par l'équipe jusqu'à la cicatrisation complète.` },
      { label: 'Retrait de fils, d\'agrafes ou de drains', explication: `Ces gestes simples mais délicats sont réalisés au moment prévu par le chirurgien, dans de bonnes conditions d'hygiène et de confort.` },
      { label: 'Surveillance rapprochée d\'une cicatrisation', explication: `Des contrôles réguliers permettent de vérifier que la cicatrice évolue bien et d'intervenir tôt en cas de besoin.` },
      { label: 'Ponctions ou soins locaux prescrits par le chirurgien', explication: `Certains soins prescrits après l'opération, comme l'évacuation d'un épanchement, sont réalisés lors d'une venue courte et programmée.` },
      { label: 'Contrôle clinique post-opératoire avec examens si nécessaire', explication: `Une visite de contrôle permet de faire le point sur la récupération et de réaliser au besoin des examens complémentaires le jour même.` },
    ],
    preparation: [
      'Venir aux rendez-vous programmés lors de la sortie d\'hospitalisation',
      'Apporter le compte rendu opératoire et les ordonnances en cours',
      'Signaler tout signe inhabituel depuis la sortie (fièvre, douleur croissante, écoulement)',
      'Porter des vêtements amples facilitant l\'accès à la zone opérée',
    ],
    deroulement: [
      'Accueil à l\'hôpital de jour et installation',
      'Évaluation de la cicatrisation et des éventuels symptômes',
      'Réalisation du soin : pansement, retrait de fils ou de drain, ponction',
      'Examens complémentaires si nécessaire au cours de la même venue',
      'Transmission au chirurgien et ajustement du protocole de soins',
      'Programmation de la séance suivante si besoin',
    ],
    duree: '30 minutes à 1 heure par séance',
    resultats: 'Ces soins réguliers favorisent une cicatrisation de qualité et une récupération sereine. Le chirurgien est tenu informé de l\'évolution à chaque séance et adapte le suivi jusqu\'à la guérison complète.',
    risques: [
      'Les soins peuvent occasionner une gêne brève, minimisée par des techniques douces et, si besoin, un antalgique',
      'La surveillance régulière permet de détecter et de traiter précocement toute anomalie de cicatrisation',
    ],
  },
];
