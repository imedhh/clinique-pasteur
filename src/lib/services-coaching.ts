export const servicesCoaching = [
  {
    slug: 'bilan-nutritionnel-complet',
    title: 'Bilan nutritionnel complet',
    shortTitle: 'Bilan nutritionnel',
    description: 'Évaluation complète des habitudes alimentaires, de la composition corporelle et des besoins nutritionnels, point de départ de tout accompagnement personnalisé.',
    fullDescription: `Le bilan nutritionnel est la première étape de tout accompagnement diététique. Il permet de dresser un état des lieux précis : habitudes alimentaires, rythme des repas, préférences et contraintes du quotidien, antécédents médicaux, activité physique et objectifs personnels.

L'évaluation comprend un entretien approfondi avec le nutritionniste, des mesures de la composition corporelle (poids, répartition entre masse musculaire et masse grasse, tour de taille) et l'analyse des éventuels résultats biologiques apportés par le patient. Cette approche globale permet d'identifier les points forts et les axes d'amélioration de l'alimentation.

À l'issue du bilan, le nutritionniste remet une synthèse claire et propose, si le patient le souhaite, un programme d'accompagnement adapté : rééquilibrage alimentaire, programme de perte de poids, nutrition thérapeutique ou préparation à une chirurgie bariatrique.

À la Clinique Pasteur Tunis, le bilan nutritionnel se déroule dans un cadre bienveillant et sans jugement. L'objectif n'est jamais d'imposer un régime restrictif, mais de construire avec chaque personne une alimentation durable, compatible avec ses goûts et son mode de vie.`,
    image: '/images/nutrition.webp',
    indications: [
      'Souhait de rééquilibrer son alimentation',
      'Surpoids ou difficultés à gérer son poids',
      'Fatigue ou troubles digestifs liés à l\'alimentation',
      'Préparation d\'un programme de perte de poids ou d\'une chirurgie bariatrique',
      'Maladie chronique nécessitant une adaptation alimentaire',
      'Reprise d\'une activité sportive avec objectifs nutritionnels',
    ],
    preparation: [
      'Apporter ses derniers résultats d\'analyses biologiques si disponibles',
      'Noter ses repas et collations sur quelques jours avant la consultation',
      'Lister ses traitements en cours et ses antécédents médicaux',
      'Réfléchir à ses objectifs personnels pour en discuter lors de l\'entretien',
    ],
    deroulement: [
      'Entretien approfondi sur les habitudes alimentaires et le mode de vie',
      'Mesures corporelles : poids, taille, tour de taille, composition corporelle',
      'Analyse des résultats biologiques apportés',
      'Identification des objectifs réalistes avec le patient',
      'Remise d\'une synthèse et de premières recommandations personnalisées',
    ],
    duree: '45 minutes à 1 heure',
    resultats: 'Le patient repart avec une synthèse claire de son état nutritionnel et des recommandations concrètes. Si un accompagnement est souhaité, un programme personnalisé avec des consultations de suivi est proposé.',
  },
  {
    slug: 'programme-perte-de-poids',
    title: 'Programme de perte de poids personnalisé',
    shortTitle: 'Perte de poids',
    description: 'Accompagnement progressif et durable vers un poids de forme, sans régime restrictif, avec un suivi régulier par le nutritionniste.',
    fullDescription: `Le programme de perte de poids de la clinique repose sur une conviction simple : les régimes restrictifs ne fonctionnent pas dans la durée. L'accompagnement proposé vise une perte de poids progressive et durable, fondée sur un rééquilibrage alimentaire personnalisé, le plaisir de manger et la reprise d'une activité physique adaptée.

Après le bilan nutritionnel initial, le nutritionniste construit avec le patient un programme sur mesure : objectifs réalistes, plan alimentaire adapté aux goûts et au rythme de vie, conseils pratiques pour les courses, la cuisine et les repas à l'extérieur. Aucun aliment n'est interdit ; tout est question d'équilibre et de quantités.

Des consultations de suivi régulières permettent de mesurer les progrès, d'ajuster le programme, de surmonter les périodes de stagnation et de maintenir la motivation. La composition corporelle est suivie à chaque étape, car l'objectif est de perdre de la masse grasse tout en préservant la masse musculaire.

À la Clinique Pasteur Tunis, cet accompagnement bénéficie de l'environnement médical de l'établissement : en cas de besoin, le nutritionniste peut solliciter l'avis d'autres spécialistes de la clinique, pour une prise en charge globale et cohérente de chaque patient.`,
    image: '/images/repas.webp',
    indications: [
      'Surpoids avec souhait d\'une perte de poids durable',
      'Échec de régimes restrictifs répétés',
      'Poids retentissant sur la santé (articulations, souffle, sommeil)',
      'Prévention du diabète et des maladies cardiovasculaires',
      'Souhait de retrouver énergie et bien-être au quotidien',
    ],
    preparation: [
      'Réaliser un bilan nutritionnel complet au préalable',
      'Apporter ses résultats biologiques récents si disponibles',
      'Définir ses objectifs personnels et ses motivations',
      'Identifier ses contraintes de quotidien (horaires, repas professionnels, cuisine)',
    ],
    deroulement: [
      'Bilan initial et définition d\'objectifs réalistes',
      'Élaboration d\'un plan alimentaire personnalisé, sans interdits',
      'Conseils pratiques : courses, cuisson, portions, repas à l\'extérieur',
      'Consultations de suivi régulières avec mesures de la composition corporelle',
      'Ajustements progressifs du programme selon les résultats',
      'Phase de stabilisation pour ancrer les nouvelles habitudes',
    ],
    duree: 'Programme sur plusieurs mois, avec des consultations de suivi régulières',
    resultats: 'Une perte de poids progressive et durable, accompagnée d\'une amélioration de l\'énergie et du bien-être. La phase de stabilisation permet de consolider les acquis et d\'éviter la reprise de poids.',
  },
  {
    slug: 'suivi-nutritionnel-bariatrique',
    title: 'Suivi nutritionnel pré et post chirurgie bariatrique',
    shortTitle: 'Suivi bariatrique',
    description: 'Accompagnement nutritionnel spécialisé avant et après une chirurgie de l\'obésité, essentiel à la réussite du parcours bariatrique.',
    fullDescription: `La chirurgie bariatrique (sleeve, bypass) est un outil puissant contre l'obésité, mais sa réussite repose en grande partie sur l'accompagnement nutritionnel qui l'entoure. Le centre de coaching nutritionnel de la clinique assure ce suivi spécialisé, en coordination étroite avec les chirurgiens bariatriques de l'établissement.

Avant l'intervention, le nutritionniste évalue les habitudes alimentaires, prépare le patient aux changements à venir et l'aide à adopter les premiers ajustements. Cette préparation fait partie intégrante du bilan pré-opératoire et conditionne le bon déroulement de la chirurgie et de ses suites.

Après l'opération, l'alimentation évolue par étapes : textures liquides, puis mixées, puis normales, avec un apprentissage progressif des nouvelles sensations de satiété. Le nutritionniste guide le patient à chaque phase, veille à la couverture des besoins en protéines, vitamines et minéraux, et prévient les carences par un suivi attentif.

À la Clinique Pasteur Tunis, ce suivi s'inscrit dans le parcours bariatrique complet de l'établissement, qui a fait sa réputation dans cette discipline : chirurgien, nutritionniste et psychologue travaillent ensemble pour accompagner chaque patient vers un résultat durable et une meilleure qualité de vie.`,
    image: '/images/bariatrique.webp',
    indications: [
      'Préparation nutritionnelle avant sleeve, bypass ou autre chirurgie bariatrique',
      'Suivi post-opératoire après chirurgie de l\'obésité',
      'Apprentissage des nouvelles habitudes alimentaires après l\'intervention',
      'Prévention et correction des carences nutritionnelles',
      'Stagnation ou reprise de poids à distance de la chirurgie',
    ],
    preparation: [
      'Apporter le dossier de chirurgie bariatrique et les comptes rendus opératoires le cas échéant',
      'Apporter les derniers bilans biologiques (vitamines, fer, protéines)',
      'Noter ses apports alimentaires sur quelques jours avant la consultation',
      'Préparer ses questions sur l\'alimentation post-opératoire',
    ],
    deroulement: [
      'Évaluation nutritionnelle complète adaptée au stade du parcours',
      'Avant chirurgie : préparation aux changements alimentaires et objectifs pré-opératoires',
      'Après chirurgie : guidance à travers les étapes de réalimentation (liquide, mixée, normale)',
      'Contrôle de la couverture en protéines, vitamines et minéraux',
      'Suivi de la composition corporelle à chaque consultation',
      'Coordination avec le chirurgien et l\'équipe pluridisciplinaire',
    ],
    duree: 'Consultations de 30 à 45 minutes, régulières tout au long du parcours',
    resultats: 'Un suivi nutritionnel régulier favorise une perte de poids harmonieuse, prévient les carences et aide à ancrer durablement les nouvelles habitudes alimentaires, clés du succès à long terme de la chirurgie.',
  },
  {
    slug: 'nutrition-therapeutique',
    title: 'Nutrition thérapeutique (diabète, insuffisance rénale, etc.)',
    shortTitle: 'Nutrition thérapeutique',
    description: 'Adaptation de l\'alimentation aux maladies chroniques : diabète, maladies rénales, cardiovasculaires ou digestives, en lien avec le médecin traitant.',
    fullDescription: `Dans de nombreuses maladies chroniques, l'alimentation fait partie intégrante du traitement. Bien menée, elle contribue à équilibrer un diabète, à ménager des reins fragiles, à protéger le cœur et les vaisseaux ou à apaiser des troubles digestifs. La nutrition thérapeutique consiste à adapter l'alimentation à chaque pathologie, sans sacrifier le plaisir de manger.

Le nutritionniste travaille à partir des prescriptions et recommandations du médecin traitant ou du spécialiste : objectifs glycémiques pour le diabète, apports contrôlés en protéines, sel ou potassium pour les maladies rénales, équilibre des graisses pour les pathologies cardiovasculaires, ou adaptations spécifiques pour les maladies digestives.

L'accompagnement est avant tout pédagogique : comprendre les liens entre alimentation et maladie, apprendre à composer ses repas, décrypter les étiquettes, adapter les recettes familiales. Les consultations de suivi permettent d'ajuster les conseils à l'évolution de la maladie et des traitements.

À la Clinique Pasteur Tunis, la nutrition thérapeutique s'appuie sur la collaboration entre le nutritionniste et les médecins de la clinique. Cette coordination garantit une cohérence entre le traitement médical et l'accompagnement alimentaire, au bénéfice de chaque patient.`,
    image: '/images/medical-consultation.webp',
    indications: [
      'Diabète de type 1 ou de type 2, diabète gestationnel',
      'Insuffisance rénale chronique',
      'Hypertension artérielle et maladies cardiovasculaires',
      'Excès de cholestérol ou de triglycérides',
      'Maladies digestives (intestin irritable, maladies inflammatoires)',
      'Dénutrition ou perte de poids involontaire',
    ],
    preparation: [
      'Apporter les ordonnances et recommandations du médecin traitant ou du spécialiste',
      'Apporter les derniers bilans biologiques',
      'Noter ses repas habituels sur quelques jours',
      'Lister ses traitements en cours',
    ],
    deroulement: [
      'Analyse du dossier médical et des objectifs fixés par le médecin',
      'Évaluation des habitudes alimentaires actuelles',
      'Élaboration d\'un plan alimentaire adapté à la pathologie et aux goûts du patient',
      'Éducation pratique : composition des repas, lecture des étiquettes, adaptations des recettes',
      'Consultations de suivi et ajustements selon l\'évolution clinique et biologique',
    ],
    duree: 'Consultations de 30 à 45 minutes, à un rythme adapté à la pathologie',
    resultats: 'Une alimentation adaptée contribue directement au contrôle de la maladie et au bien-être quotidien. Les progrès sont évalués avec le médecin traitant à partir des résultats cliniques et biologiques.',
  },
  {
    slug: 'soins-esthetiques-visage',
    title: 'Soins esthétiques du visage',
    shortTitle: 'Esthétique visage',
    description: 'Soins du visage non chirurgicaux réalisés dans un cadre médical : nettoyage de peau, hydratation profonde, éclat et prévention du vieillissement.',
    fullDescription: `Le centre esthétique de la clinique propose une gamme complète de soins du visage non chirurgicaux, réalisés par des professionnels formés, dans un environnement médicalisé qui garantit hygiène et sécurité. Ces soins visent à préserver la qualité de la peau, raviver l'éclat du teint et prévenir les signes du vieillissement.

Chaque prise en charge débute par un diagnostic de peau : type de peau, hydratation, sensibilité, imperfections et attentes de la personne. Ce bilan permet de composer un protocole personnalisé parmi les soins disponibles : nettoyage de peau en profondeur, soins hydratants et nourrissants, soins éclat, protocoles anti-âge ou apaisants pour les peaux sensibles.

Les soins se déroulent dans une atmosphère calme et relaxante, pensée pour faire de chaque séance un moment de bien-être autant que de soin. Des conseils personnalisés sont remis à l'issue de chaque séance pour prolonger les bienfaits à la maison : routine adaptée, protection solaire, hydratation.

À la Clinique Pasteur Tunis, l'environnement médical du centre permet, si la personne le souhaite, un avis complémentaire en médecine esthétique ou une orientation vers les chirurgiens plasticiens de l'établissement, pour une approche cohérente et progressive de chaque demande.`,
    image: '/images/esthetique.webp',
    indications: [
      'Teint terne, peau fatiguée ou déshydratée',
      'Imperfections et pores dilatés',
      'Premiers signes de l\'âge (ridules, perte d\'éclat)',
      'Peau sensible nécessitant des soins apaisants',
      'Préparation de la peau avant un événement',
      'Entretien régulier de la qualité de la peau',
    ],
    preparation: [
      'Venir de préférence sans maquillage ou prévoir un démaquillage sur place',
      'Signaler les traitements dermatologiques en cours et les allergies connues',
      'Éviter l\'exposition solaire intense dans les jours précédant la séance',
    ],
    deroulement: [
      'Diagnostic de peau personnalisé',
      'Démaquillage et nettoyage doux',
      'Soin adapté au protocole choisi : gommage, extraction douce, masque, massage',
      'Application de produits ciblés (hydratation, éclat, anti-âge)',
      'Conseils personnalisés pour la routine à domicile',
    ],
    duree: '45 minutes à 1 heure 15 selon le protocole',
    resultats: 'La peau est nettoyée, hydratée et éclatante dès la première séance. Des séances régulières entretiennent durablement la qualité de la peau et préviennent les signes du vieillissement.',
    risques: [
      'Rougeurs légères et passagères possibles après certains soins, disparaissant en quelques heures',
      'Les produits utilisés sont sélectionnés selon le type de peau afin de prévenir toute réaction',
    ],
  },
  {
    slug: 'soins-esthetiques-corps',
    title: 'Soins esthétiques du corps',
    shortTitle: 'Esthétique corps',
    description: 'Soins du corps ciblés : fermeté, silhouette, drainage et relaxation, en complément idéal d\'un programme nutritionnel.',
    fullDescription: `Le centre esthétique de la clinique propose des soins du corps qui complètent harmonieusement les accompagnements nutritionnels : soins raffermissants, protocoles ciblant la silhouette, drainages favorisant la circulation et soins relaxants pour dénouer les tensions.

Chaque programme débute par un bilan personnalisé : zones concernées, attentes, mode de vie et éventuel programme nutritionnel en cours. Le praticien compose ensuite un protocole adapté, combinant techniques manuelles et soins cosmétiques ciblés, sur un rythme de séances défini ensemble.

Ces soins trouvent tout leur sens en accompagnement d'une perte de poids : ils participent au confort et à la fermeté de la peau pendant l'amincissement, et constituent un moment de bien-être qui soutient la motivation. Ils s'adressent également aux personnes souhaitant simplement prendre soin de leur corps, se détendre ou améliorer leur confort circulatoire.

À la Clinique Pasteur Tunis, les soins du corps s'intègrent dans une approche globale du bien-être, coordonnée avec le coaching nutritionnel. Pour les demandes relevant de la chirurgie, une orientation vers les chirurgiens plasticiens de la clinique peut être proposée, en toute transparence.`,
    image: '/images/esthetique.webp',
    indications: [
      'Accompagnement d\'un programme de perte de poids',
      'Manque de fermeté ou aspect peau d\'orange',
      'Jambes lourdes et inconfort circulatoire',
      'Tensions musculaires et besoin de relaxation',
      'Entretien de la silhouette et bien-être corporel',
    ],
    preparation: [
      'Signaler ses antécédents médicaux, notamment circulatoires, et les traitements en cours',
      'Éviter les repas copieux juste avant la séance',
      'Prévoir une bonne hydratation avant et après les soins drainants',
    ],
    deroulement: [
      'Bilan personnalisé : zones ciblées, attentes et objectifs',
      'Définition du protocole et du rythme des séances',
      'Réalisation du soin : techniques manuelles et produits ciblés',
      'Temps de relaxation en fin de séance',
      'Conseils d\'entretien entre les séances (hydratation, activité physique)',
    ],
    duree: '45 minutes à 1 heure 30 selon le protocole',
    resultats: 'Une sensation immédiate de légèreté et de détente, et, au fil des séances, une amélioration progressive de la fermeté et du confort corporel. Les résultats sont optimisés lorsqu\'ils accompagnent un rééquilibrage alimentaire et une activité physique régulière.',
    risques: [
      'Rougeurs ou sensibilité passagères possibles sur les zones travaillées',
      'Certains soins sont adaptés ou différés en cas de problème circulatoire ; le bilan initial permet de le vérifier',
    ],
  },
  {
    slug: 'medecine-esthetique',
    title: 'Médecine esthétique (injections, peelings)',
    shortTitle: 'Médecine esthétique',
    description: 'Actes de médecine esthétique réalisés par des médecins : injections d\'acide hyaluronique, botox et peelings, dans un cadre médical sécurisé.',
    fullDescription: `La médecine esthétique regroupe les actes non chirurgicaux réalisés par un médecin pour prévenir ou corriger les signes du vieillissement : injections d'acide hyaluronique pour restaurer les volumes et combler les rides, injections de toxine botulique pour détendre les rides d'expression, et peelings pour renouveler la qualité de la peau et unifier le teint.

Chaque prise en charge commence par une consultation médicale : analyse du visage, écoute des attentes, information claire sur les possibilités, les limites et les suites de chaque technique. Le médecin privilégie systématiquement des résultats naturels et progressifs, respectueux des expressions et de l'harmonie du visage.

Les actes sont réalisés au sein de la clinique, avec des produits d'origine contrôlée et du matériel à usage unique. Cette exigence de cadre médical distingue la prise en charge proposée : chaque geste est effectué par un médecin formé, avec la traçabilité et la sécurité d'un établissement de santé.

À la Clinique Pasteur Tunis, la médecine esthétique s'inscrit dans une approche globale : elle peut compléter un accompagnement nutritionnel, des soins esthétiques réguliers, ou précéder une réflexion sur la chirurgie esthétique avec les chirurgiens plasticiens de l'établissement, si la demande le justifie.`,
    image: '/images/esthetique.webp',
    indications: [
      'Rides d\'expression (front, ride du lion, patte d\'oie)',
      'Perte de volume des pommettes ou des lèvres',
      'Sillons et plis marqués du visage',
      'Teint irrégulier, taches ou cicatrices superficielles',
      'Prévention du vieillissement cutané',
    ],
    preparation: [
      'Consultation médicale préalable obligatoire avec information complète',
      'Signaler ses antécédents, allergies et traitements en cours',
      'Éviter l\'aspirine et les anti-inflammatoires dans les jours précédant une injection, sauf avis médical contraire',
      'Éviter l\'exposition solaire intense avant un peeling',
      'Venir démaquillée le jour de l\'acte',
    ],
    deroulement: [
      'Consultation et analyse du visage par le médecin',
      'Définition du plan de traitement et information sur les suites attendues',
      'Nettoyage et préparation de la peau',
      'Réalisation de l\'acte : injections précises ou application du peeling',
      'Conseils post-acte détaillés et programmation d\'un contrôle si nécessaire',
    ],
    duree: '20 à 45 minutes selon l\'acte',
    resultats: 'Les injections offrent un résultat visible rapidement, qui s\'harmonise en quelques jours et se maintient plusieurs mois. Les peelings révèlent progressivement une peau plus lisse et un teint plus uniforme, souvent au fil de plusieurs séances.',
    risques: [
      'Rougeurs, petits gonflements ou ecchymoses possibles aux points d\'injection, disparaissant en quelques jours',
      'Desquamation attendue et transitoire après un peeling, selon son intensité',
      'La réalisation par un médecin, avec des produits contrôlés, réduit considérablement les risques ; toutes les précautions sont expliquées en consultation',
    ],
  },
  {
    slug: 'programmes-bien-etre',
    title: 'Programmes bien-être',
    shortTitle: 'Bien-être',
    description: 'Programmes personnalisés associant nutrition, soins et conseils d\'hygiène de vie pour retrouver énergie, sérénité et équilibre.',
    fullDescription: `Les programmes bien-être du centre proposent une approche globale de la santé et de la vitalité, au-delà de la seule alimentation. Ils associent, selon les besoins de chacun, un accompagnement nutritionnel, des soins du visage et du corps, et des conseils personnalisés d'hygiène de vie : sommeil, gestion du stress, activité physique.

Chaque programme débute par un entretien complet qui fait le point sur le mode de vie, le niveau d'énergie, la qualité du sommeil et les attentes de la personne. À partir de ce bilan, l'équipe compose un parcours sur mesure, étalé sur plusieurs semaines, alternant consultations, soins et étapes de suivi.

Ces programmes s'adressent à toute personne souhaitant reprendre soin d'elle : période de fatigue ou de stress, reprise en main après un événement de vie, préparation d'une échéance importante, ou simple envie de cultiver son équilibre et sa vitalité au quotidien.

À la Clinique Pasteur Tunis, les programmes bien-être bénéficient de la complémentarité des expertises réunies au sein du centre : nutritionnistes, praticiens esthétiques et médecins travaillent ensemble, avec la possibilité d'un avis médical spécialisé à tout moment si le besoin s'en fait sentir.`,
    image: '/images/clinic-interior.webp',
    indications: [
      'Fatigue persistante ou baisse d\'énergie',
      'Période de stress ou de surmenage',
      'Envie d\'une reprise en main globale (alimentation, forme, apparence)',
      'Préparation d\'un événement important',
      'Recherche d\'un meilleur équilibre de vie au quotidien',
    ],
    preparation: [
      'Réfléchir à ses priorités : énergie, silhouette, détente, sommeil',
      'Apporter ses éventuels résultats d\'analyses récents',
      'Prévoir une disponibilité régulière sur la durée du programme',
    ],
    deroulement: [
      'Entretien initial complet : mode de vie, énergie, sommeil, attentes',
      'Composition d\'un programme personnalisé sur plusieurs semaines',
      'Consultations nutritionnelles et ajustements alimentaires',
      'Séances de soins du visage et du corps selon le parcours choisi',
      'Conseils d\'hygiène de vie : sommeil, gestion du stress, activité physique',
      'Bilan d\'étape et bilan final avec recommandations durables',
    ],
    duree: 'Programmes de quelques semaines à quelques mois, selon la formule choisie',
    resultats: 'Une amélioration progressive et globale du bien-être : plus d\'énergie, une meilleure relation à l\'alimentation, une peau et une silhouette entretenues, et des habitudes de vie durables acquises au fil du programme.',
  },
];
