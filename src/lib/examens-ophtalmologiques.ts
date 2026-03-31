export interface ExamenOphtalmologique {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  preparation: string[];
  deroulement: string[];
  duree: string;
  resultats: string;
  risques: string[];
  indications: string[];
}

export const examensOphtalmologiques: ExamenOphtalmologique[] = [
  {
    slug: 'oct-retinien',
    title: 'Tomographie en cohérence optique (OCT)',
    shortTitle: 'OCT',
    description:
      "Imagerie haute résolution de la rétine et du nerf optique permettant une analyse fine des couches rétiniennes, essentielle au diagnostic et au suivi de nombreuses pathologies oculaires.",
    fullDescription: `La tomographie en cohérence optique (OCT) est une technique d'imagerie non invasive qui utilise la lumière infrarouge pour obtenir des coupes transversales de la rétine avec une résolution micrométrique. Comparable à une « échographie optique », l'OCT permet de visualiser in vivo les différentes couches de la rétine, de la membrane limitante interne jusqu'à l'épithélium pigmentaire.

Cette technologie a révolutionné l'ophtalmologie moderne en permettant un diagnostic précoce et un suivi précis de pathologies rétiniennes telles que la dégénérescence maculaire liée à l'âge (DMLA), l'œdème maculaire diabétique, les membranes épirétiniennes et les trous maculaires. L'OCT permet de mesurer l'épaisseur rétinienne, de détecter des fluides intra ou sous-rétiniens et de quantifier les lésions de manière objective et reproductible.

L'OCT du nerf optique (OCT-RNFL) mesure l'épaisseur de la couche des fibres nerveuses rétiniennes péripapillaires, un paramètre clé dans le diagnostic et le suivi du glaucome. La perte progressive de fibres nerveuses précède souvent l'atteinte du champ visuel, faisant de l'OCT un outil de dépistage précoce du glaucome.

La Clinique Pasteur de Tunis est équipée d'un OCT spectral-domain (SD-OCT) de dernière génération offrant une résolution axiale de 5 microns et une vitesse d'acquisition élevée, garantissant des images de qualité optimale pour un diagnostic fiable.`,
    preparation: [
      'Aucune préparation particulière n\'est nécessaire dans la plupart des cas.',
      'Une dilatation pupillaire peut être réalisée pour améliorer la qualité des images (prévoir de ne pas conduire pendant 2 à 3 heures après l\'examen).',
      'Retirer les lentilles de contact avant l\'examen.',
      'Apporter ses lunettes habituelles.',
      'Signaler tout traitement ophtalmologique en cours (collyres, injections intravitréennes récentes).',
      'Apporter les résultats d\'OCT antérieurs pour permettre une comparaison.',
    ],
    deroulement: [
      'Le patient est installé confortablement, le menton posé sur la mentonnière de l\'appareil et le front contre l\'appui frontal.',
      'Instillation éventuelle d\'un collyre mydriatique pour dilater la pupille (attente de 15 à 20 minutes).',
      'Le patient fixe une cible lumineuse à l\'intérieur de l\'appareil.',
      'L\'opérateur réalise les acquisitions : coupes maculaires, carte d\'épaisseur rétinienne, analyse du nerf optique et de la couche des fibres nerveuses.',
      'Plusieurs scans sont effectués pour chaque œil, avec contrôle de qualité en temps réel.',
      'L\'acquisition dure quelques secondes par scan, sans contact avec l\'œil et sans aucune douleur.',
      'Les images sont traitées par le logiciel de l\'appareil qui génère des cartes d\'épaisseur et des analyses comparatives.',
    ],
    duree: '10 à 20 minutes',
    resultats:
      'Les résultats sont disponibles immédiatement sous forme de cartes d\'épaisseur rétinienne, de coupes transversales et d\'analyses comparatives avec une base de données normative. L\'ophtalmologiste interprète les images et rédige un compte-rendu le jour même.',
    risques: [],
    indications: [
      'Dégénérescence maculaire liée à l\'âge (DMLA) sèche et humide',
      'Œdème maculaire diabétique',
      'Rétinopathie diabétique',
      'Glaucome : dépistage et suivi',
      'Membrane épirétinienne',
      'Trou maculaire',
      'Occlusions veineuses rétiniennes',
      'Choriorétinopathie séreuse centrale',
      'Suivi post-injection intravitréenne',
      'Neuropathies optiques',
      'Suivi de la sclérose en plaques (atrophie de la couche des fibres nerveuses)',
    ],
  },
  {
    slug: 'champ-visuel-humphrey',
    title: 'Champ visuel automatisé (périmétrie de Humphrey)',
    shortTitle: 'Champ visuel',
    description:
      "Évaluation fonctionnelle du champ visuel par périmétrie automatisée statique, examen de référence pour le diagnostic et le suivi du glaucome et des atteintes des voies visuelles.",
    fullDescription: `La périmétrie automatisée de Humphrey est l'examen de référence pour l'évaluation du champ visuel. Elle mesure la sensibilité rétinienne en différents points du champ visuel en présentant des stimuli lumineux d'intensité variable sur un fond uniformément éclairé. Le patient doit appuyer sur un bouton chaque fois qu'il perçoit un point lumineux dans sa vision périphérique.

Cet examen est fondamental dans le diagnostic et le suivi du glaucome, pathologie caractérisée par une perte progressive et irréversible du champ visuel. La périmétrie de Humphrey permet de détecter les déficits du champ visuel, de les quantifier et de suivre leur évolution dans le temps grâce à des indices statistiques standardisés (MD : Mean Deviation, PSD : Pattern Standard Deviation).

Au-delà du glaucome, le champ visuel automatisé est essentiel dans l'exploration des atteintes des voies visuelles à tous les niveaux : neuropathies optiques, lésions chiasmatiques (hémianopsie bitemporale des adénomes hypophysaires), atteintes rétrochiasmatiques (hémianopsies latérales homonymes des AVC) et atteintes corticales.

La Clinique Pasteur de Tunis dispose de périmètres de Humphrey de dernière génération avec les programmes SITA-Standard et SITA-Fast, offrant des résultats fiables en un temps d'examen optimisé. Le logiciel d'analyse de progression GPA (Guided Progression Analysis) permet un suivi rigoureux de l'évolution glaucomateuse.`,
    preparation: [
      'Apporter ses lunettes correctrices habituelles ou ses lentilles de contact ; une correction adaptée sera placée devant l\'œil pour l\'examen.',
      'Être reposé : la fatigue et le manque de sommeil altèrent les résultats.',
      'L\'examen ne nécessite pas de dilatation pupillaire.',
      'Signaler tout traitement en cours et toute pathologie ophtalmologique connue.',
      'Apporter les résultats de champs visuels antérieurs.',
      'Prévoir 30 à 45 minutes pour l\'ensemble de la procédure.',
    ],
    deroulement: [
      'Le patient est installé confortablement devant le périmètre, le menton sur la mentonnière.',
      'L\'œil non testé est occlus par un cache.',
      'Une correction optique adaptée est placée devant l\'œil examiné.',
      'Le patient fixe un point lumineux central à l\'intérieur de la coupole.',
      'Des points lumineux de différentes intensités apparaissent en divers endroits du champ visuel.',
      'Le patient appuie sur un bouton-réponse chaque fois qu\'il perçoit un point lumineux, sans bouger l\'œil du point de fixation.',
      'L\'appareil teste automatiquement la fiabilité du patient (faux positifs, faux négatifs, pertes de fixation).',
      'L\'examen est réalisé successivement pour chaque œil.',
    ],
    duree: '15 à 20 minutes par œil (30 à 45 minutes au total)',
    resultats:
      'Les résultats sont imprimés immédiatement sous forme de cartes de sensibilité, de cartes de déviation et d\'indices globaux (MD, PSD, VFI). L\'ophtalmologiste interprète les résultats en les corrélant avec l\'examen clinique et l\'OCT. Une analyse de progression est réalisée si des examens antérieurs sont disponibles.',
    risques: [],
    indications: [
      'Glaucome : dépistage, diagnostic et suivi',
      'Hypertonie oculaire',
      'Neuropathie optique (inflammatoire, ischémique, compressive, toxique)',
      'Tumeurs comprimant les voies visuelles (adénome hypophysaire, méningiome)',
      'Accident vasculaire cérébral avec atteinte des voies visuelles',
      'Suivi de traitements potentiellement toxiques pour la rétine (hydroxychloroquine/Plaquenil)',
      'Rétinopathie pigmentaire',
      'Évaluation médico-légale de l\'aptitude à la conduite automobile',
    ],
  },
  {
    slug: 'fond-oeil-retinographie',
    title: "Fond d'œil dilaté avec rétinographie",
    shortTitle: "Fond d'œil",
    description:
      "Examen direct de la rétine, du nerf optique et des vaisseaux rétiniens après dilatation pupillaire, complété par une photographie haute résolution du fond d'œil.",
    fullDescription: `Le fond d'œil dilaté avec rétinographie est un examen ophtalmologique fondamental qui permet l'observation directe des structures du segment postérieur de l'œil : la rétine, le nerf optique (papille), les vaisseaux rétiniens et la macula. L'instillation d'un collyre mydriatique permet de dilater la pupille et d'obtenir une vision large et détaillée du fond d'œil.

La rétinographie (photographie du fond d'œil) complète l'examen clinique en fournissant une documentation objective et reproductible. Les rétinographes modernes à grand champ permettent de capturer jusqu'à 200 degrés du fond d'œil en une seule prise, offrant une vision quasi complète de la rétine périphérique. Ces images constituent une référence pour le suivi longitudinal des pathologies rétiniennes.

Cet examen est indispensable dans le dépistage et le suivi de la rétinopathie diabétique, première cause de cécité chez les adultes en âge de travailler. Il est également essentiel pour l'évaluation du glaucome (aspect de la papille optique), de la DMLA, des occlusions vasculaires rétiniennes et de nombreuses autres pathologies du fond d'œil.

La Clinique Pasteur de Tunis dispose de rétinographes non-mydriatiques et mydriatiques de dernière génération, permettant une documentation photographique de haute qualité. L'examen est réalisé par des ophtalmologistes expérimentés qui assurent une interprétation clinique immédiate.`,
    preparation: [
      'Ne pas conduire dans les 2 à 3 heures suivant l\'examen en raison de la dilatation pupillaire (prévoir un accompagnant ou un transport).',
      'Apporter des lunettes de soleil pour le retour (photosensibilité après dilatation).',
      'Signaler toute allergie connue aux collyres.',
      'Signaler un antécédent de glaucome par fermeture de l\'angle (contre-indication relative à la dilatation).',
      'Retirer les lentilles de contact.',
      'L\'examen ne nécessite pas d\'être à jeun.',
    ],
    deroulement: [
      'Mesure de l\'acuité visuelle et de la pression intraoculaire avant la dilatation.',
      'Instillation de collyres mydriatiques (tropicamide et/ou phényléphrine) dans chaque œil.',
      'Attente de 15 à 20 minutes pour obtenir une dilatation pupillaire maximale.',
      'Examen du fond d\'œil à la lampe à fente avec une lentille de Volk (examen biomicroscopique).',
      'Examen de la rétine périphérique avec un verre à 3 miroirs ou un ophtalmoscope indirect si nécessaire.',
      'Réalisation des photographies du fond d\'œil (rétinographies) : pôle postérieur, nerf optique, macula, rétine périphérique.',
      'Compte-rendu clinique et archivage des images.',
    ],
    duree: '20 à 30 minutes (incluant le temps de dilatation)',
    resultats:
      'Les résultats de l\'examen clinique sont communiqués immédiatement au patient. Les rétinographies sont archivées numériquement et servent de référence pour les examens de suivi. Un compte-rendu écrit est adressé au médecin traitant.',
    risques: [
      'Vision floue et photosensibilité pendant 2 à 3 heures après la dilatation.',
      'Risque exceptionnel de crise de glaucome aigu par fermeture de l\'angle chez les patients prédisposés (angle irido-cornéen étroit).',
      'Réaction allergique rare au collyre mydriatique.',
    ],
    indications: [
      'Dépistage annuel de la rétinopathie diabétique',
      'Suivi du glaucome (évaluation de la papille optique)',
      'Dégénérescence maculaire liée à l\'âge (DMLA)',
      'Myopie forte (recherche de lésions rétiniennes périphériques)',
      'Hypertension artérielle (rétinopathie hypertensive)',
      'Décollement postérieur du vitré',
      'Suspicion de décollement de rétine',
      'Corps flottants ou phosphènes d\'apparition récente',
      'Baisse d\'acuité visuelle inexpliquée',
      'Bilan ophtalmologique systématique',
    ],
  },
  {
    slug: 'angiographie-fluoresceine',
    title: 'Angiographie à la fluorescéine',
    shortTitle: 'Angiographie fluorescéine',
    description:
      "Examen dynamique de la circulation rétinienne par injection intraveineuse de fluorescéine, permettant de visualiser les anomalies vasculaires et les atteintes de la barrière hémato-rétinienne.",
    fullDescription: `L'angiographie à la fluorescéine est un examen d'imagerie dynamique qui permet d'étudier la circulation rétinienne et choroïdienne en temps réel. Elle consiste à injecter par voie intraveineuse un colorant fluorescent (la fluorescéine sodique) et à photographier le fond d'œil à l'aide d'un rétinographe équipé de filtres d'excitation et de barrage spécifiques.

L'examen permet de visualiser les différentes phases de la circulation rétinienne : phase choroïdienne, phase artérielle, phase artério-veineuse, phase veineuse et phases tardives. Il met en évidence les anomalies de perfusion (zones de non-perfusion capillaire, ischémie rétinienne), les diffusions (rupture de la barrière hémato-rétinienne, œdème maculaire), les néovaisseaux et les anomalies de la paroi vasculaire.

L'angiographie à la fluorescéine est un examen clé dans la prise en charge de la rétinopathie diabétique, où elle guide les indications de photocoagulation laser et d'injections intravitréennes. Elle est également fondamentale dans le diagnostic des occlusions vasculaires rétiniennes, de la DMLA et de nombreuses autres pathologies rétiniennes.

La Clinique Pasteur de Tunis dispose d'un angiographe numérique à haute résolution permettant une analyse précise de la dynamique circulatoire rétinienne. L'examen est réalisé sous surveillance médicale, avec un matériel de réanimation immédiatement disponible en cas de réaction allergique.`,
    preparation: [
      'Être accompagné et ne pas prévoir de conduire après l\'examen (dilatation pupillaire prolongée).',
      'Signaler toute allergie connue, en particulier aux produits de contraste et à la fluorescéine.',
      'Signaler tout antécédent d\'asthme, d\'eczéma ou de terrain allergique.',
      'Signaler une insuffisance rénale ou hépatique.',
      'Signaler une grossesse ou un allaitement (contre-indication relative).',
      'L\'examen n\'est pas contre-indiqué en cas d\'allergie à l\'iode (la fluorescéine n\'est pas un produit iodé).',
      'Ne pas être strictement à jeun, mais éviter un repas copieux juste avant.',
    ],
    deroulement: [
      'Dilatation pupillaire bilatérale par instillation de collyres mydriatiques.',
      'Réalisation de clichés en couleur et en autofluorescence du fond d\'œil avant l\'injection.',
      'Mise en place d\'une voie veineuse au pli du coude.',
      'Injection intraveineuse rapide de 5 ml de fluorescéine sodique à 10 %.',
      'Prise de clichés séquentiels rapides du fond d\'œil pendant les premières secondes (phases précoces).',
      'Clichés des phases intermédiaires et tardives sur 5 à 10 minutes.',
      'Les deux yeux sont photographiés alternativement selon les besoins.',
      'Surveillance du patient pendant et après l\'injection.',
    ],
    duree: '20 à 30 minutes',
    resultats:
      'Les clichés sont analysés par l\'ophtalmologiste qui rédige un compte-rendu détaillé décrivant les différentes phases de la circulation et les anomalies observées. Les résultats sont généralement disponibles le jour même ou sous 24 heures.',
    risques: [
      'Coloration jaune de la peau et des urines pendant 24 à 48 heures (normal et sans danger).',
      'Nausées transitoires dans 5 % des cas, au moment de l\'injection.',
      'Réaction allergique modérée (urticaire, prurit) dans moins de 1 % des cas.',
      'Réaction anaphylactique grave : exceptionnelle (1/200 000), justifiant la disponibilité d\'un matériel de réanimation.',
      'Extravasation du produit au point d\'injection : douleur locale transitoire.',
    ],
    indications: [
      'Rétinopathie diabétique (bilan et guide thérapeutique)',
      'Œdème maculaire diabétique',
      'DMLA humide (néovaisseaux choroïdiens)',
      'Occlusions veineuses rétiniennes (branche ou tronc)',
      'Occlusions artérielles rétiniennes',
      'Choriorétinopathie séreuse centrale',
      'Uvéites postérieures et vascularites rétiniennes',
      'Néovascularisation rétinienne ou papillaire',
      'Tumeurs rétiniennes et choroïdiennes',
      'Membrane néovasculaire choroïdienne du myope fort',
    ],
  },
  {
    slug: 'angiographie-icg',
    title: "Angiographie au vert d'indocyanine (ICG)",
    shortTitle: 'Angiographie ICG',
    description:
      "Imagerie de la circulation choroïdienne profonde par injection de vert d'indocyanine, complémentaire de l'angiographie à la fluorescéine pour l'exploration des pathologies de la choroïde.",
    fullDescription: `L'angiographie au vert d'indocyanine (ICG) est un examen d'imagerie qui explore spécifiquement la circulation choroïdienne, couche vasculaire profonde située sous la rétine. Le vert d'indocyanine est un colorant qui, contrairement à la fluorescéine, se lie fortement aux protéines plasmatiques et émet une fluorescence dans le proche infrarouge, permettant de visualiser les vaisseaux choroïdiens à travers l'épithélium pigmentaire rétinien et les éventuels exsudats.

Cet examen est complémentaire de l'angiographie à la fluorescéine. Alors que cette dernière explore principalement la circulation rétinienne, l'ICG offre une vision privilégiée de la circulation choroïdienne. Cette complémentarité est particulièrement utile dans le diagnostic des néovaisseaux choroïdiens occultes de la DMLA, des vasculopathies polypoïdales choroïdiennes et des pathologies inflammatoires de la choroïde.

L'ICG est réalisée sur un angiographe équipé d'un système d'imagerie infrarouge (caméra SLO ou rétinographe adapté). Les phases d'acquisition sont plus longues que pour l'angiographie à la fluorescéine, avec des clichés précoces (dans les premières minutes), intermédiaires (5 à 15 minutes) et tardifs (20 à 40 minutes), permettant d'analyser la dynamique circulatoire choroïdienne.

La Clinique Pasteur de Tunis dispose d'un système d'imagerie multimodale permettant de réaliser simultanément l'angiographie à la fluorescéine et l'ICG, optimisant ainsi le recueil d'informations en une seule séance pour le patient.`,
    preparation: [
      'Signaler impérativement toute allergie à l\'iode ou aux fruits de mer (le vert d\'indocyanine contient de l\'iode).',
      'Signaler toute allergie connue aux produits de contraste.',
      'Signaler une insuffisance hépatique (le vert d\'indocyanine est éliminé par le foie).',
      'Signaler une grossesse ou un allaitement.',
      'Être accompagné et ne pas conduire après l\'examen (dilatation pupillaire).',
      'Les mêmes précautions que pour l\'angiographie à la fluorescéine s\'appliquent.',
    ],
    deroulement: [
      'Dilatation pupillaire bilatérale.',
      'Réalisation de clichés de base du fond d\'œil en infrarouge.',
      'Mise en place d\'une voie veineuse.',
      'Injection intraveineuse de vert d\'indocyanine (25 mg dans 5 ml de solvant).',
      'Prise de clichés en infrarouge dès l\'injection : phases précoces (0 à 3 minutes).',
      'Clichés des phases intermédiaires (3 à 15 minutes).',
      'Clichés des phases tardives (20 à 40 minutes), essentiels pour l\'identification des néovaisseaux choroïdiens et des zones d\'hyperfluorescence tardive.',
      'L\'examen peut être combiné avec l\'angiographie à la fluorescéine en une seule séance.',
    ],
    duree: '30 à 45 minutes',
    resultats:
      'L\'interprétation est réalisée par l\'ophtalmologiste en corrélation avec les résultats de l\'angiographie à la fluorescéine et de l\'OCT. Le compte-rendu détaille les anomalies choroïdiennes observées et oriente la prise en charge thérapeutique.',
    risques: [
      'Contre-indication chez les patients allergiques à l\'iode.',
      'Coloration verdâtre des urines et des selles pendant 24 heures.',
      'Nausées transitoires au moment de l\'injection.',
      'Réaction allergique possible (moins fréquente qu\'avec la fluorescéine).',
      'Réaction anaphylactique exceptionnelle (matériel de réanimation disponible).',
    ],
    indications: [
      'DMLA : néovaisseaux choroïdiens occultes ou mal définis en fluorescéine',
      'Vasculopathie polypoïdale choroïdienne (VPC)',
      'Choriorétinopathie séreuse centrale chronique',
      'Choroïdite multifocale et pathologies inflammatoires de la choroïde',
      'Tumeurs choroïdiennes (hémangiome, mélanome)',
      'Syndrome des taches blanches évanescentes (MEWDS)',
      'Épithéliopathie en plaques (APMPPE)',
      'Néovaisseaux choroïdiens du myope fort',
    ],
  },
  {
    slug: 'topographie-corneenne',
    title: 'Topographie cornéenne',
    shortTitle: 'Topographie cornéenne',
    description:
      "Cartographie détaillée de la courbure et de la forme de la cornée, indispensable au dépistage du kératocône et au bilan pré-opératoire de la chirurgie réfractive.",
    fullDescription: `La topographie cornéenne est un examen non invasif qui réalise une cartographie précise de la surface cornéenne. Elle analyse la courbure, l'élévation et la régularité de la cornée en projetant des anneaux lumineux (disques de Placido) ou des fentes lumineuses sur sa surface et en analysant leur réflexion. Les topographes modernes à balayage Scheimpflug fournissent également une analyse des surfaces antérieure et postérieure de la cornée, ainsi que de son épaisseur (pachymétrie).

Cet examen est essentiel dans le dépistage du kératocône, une dystrophie cornéenne progressive caractérisée par un amincissement et une protrusion conique de la cornée. La topographie permet de détecter les formes précoces (kératocône fruste) avant l'apparition de signes cliniques, ce qui est crucial pour le bilan pré-opératoire de la chirurgie réfractive au laser, où le kératocône constitue une contre-indication formelle.

La topographie cornéenne est également indispensable pour l'adaptation de lentilles de contact sur cornées irrégulières, pour le suivi après greffe de cornée et pour la planification des interventions de chirurgie réfractive (LASIK, PKR, implants phaques). Elle permet de calculer avec précision les paramètres de traitement laser personnalisés.

La Clinique Pasteur de Tunis est équipée de topographes cornéens de dernière génération combinant technologie Placido et Scheimpflug, offrant une analyse complète de la cornée en quelques secondes.`,
    preparation: [
      'Retirer les lentilles de contact souples au moins 48 heures avant l\'examen (elles déforment temporairement la cornée).',
      'Retirer les lentilles de contact rigides au moins 2 à 3 semaines avant l\'examen.',
      'Ne pas instiller de collyres dans les heures précédant l\'examen (sauf collyres prescrits à prendre quotidiennement).',
      'Ne pas se maquiller les yeux le jour de l\'examen.',
      'L\'examen ne nécessite ni dilatation pupillaire ni jeûne.',
    ],
    deroulement: [
      'Le patient est installé devant le topographe, menton sur la mentonnière.',
      'L\'appareil projette des anneaux lumineux ou des fentes sur la cornée.',
      'Le patient fixe un point central lumineux.',
      'L\'acquisition est réalisée en quelques secondes pour chaque œil, sans contact avec l\'œil.',
      'Le logiciel analyse les images et génère des cartes de courbure (axiale et tangentielle), d\'élévation et de pachymétrie.',
      'Calcul des indices de dépistage du kératocône.',
      'Comparaison avec les données antérieures si disponibles.',
    ],
    duree: '10 à 15 minutes',
    resultats:
      'Les résultats sont disponibles immédiatement sous forme de cartes colorées de courbure et d\'élévation cornéenne. L\'ophtalmologiste interprète les cartes et les indices, et fournit un compte-rendu le jour même.',
    risques: [],
    indications: [
      'Bilan pré-opératoire de chirurgie réfractive (LASIK, PKR, SMILE)',
      'Dépistage et suivi du kératocône',
      'Adaptation de lentilles de contact sur cornée irrégulière',
      'Suivi post-greffe de cornée (kératoplastie)',
      'Astigmatisme irrégulier',
      'Bilan avant implantation de lentille intraoculaire (chirurgie de la cataracte premium)',
      'Suivi après cross-linking cornéen',
      'Dégénérescence marginale pellucide',
      'Ectasie post-LASIK',
    ],
  },
  {
    slug: 'pachymetrie-corneenne',
    title: 'Pachymétrie cornéenne',
    shortTitle: 'Pachymétrie',
    description:
      "Mesure de l'épaisseur de la cornée, paramètre essentiel pour l'interprétation de la pression intraoculaire et le bilan pré-opératoire de la chirurgie réfractive.",
    fullDescription: `La pachymétrie cornéenne est la mesure de l'épaisseur de la cornée, habituellement au centre (pachymétrie centrale) mais aussi en périphérie (carte pachymétrique). L'épaisseur cornéenne centrale normale est d'environ 540 microns (entre 500 et 580 microns). Deux techniques principales sont utilisées : la pachymétrie ultrasonore (contact) et la pachymétrie optique (sans contact, intégrée aux systèmes OCT ou Scheimpflug).

Cet examen est fondamental dans le bilan du glaucome. L'épaisseur cornéenne influence directement la mesure de la pression intraoculaire (PIO) par tonométrie à aplanation : une cornée épaisse surestime la PIO, tandis qu'une cornée fine la sous-estime. Connaître l'épaisseur cornéenne permet donc de corriger la PIO mesurée et d'évaluer plus précisément le risque glaucomateux. De plus, une cornée fine est un facteur de risque indépendant de progression du glaucome.

La pachymétrie est également indispensable dans le bilan pré-opératoire de la chirurgie réfractive. Le LASIK et la PKR amincissent la cornée en sculptant son profil au laser excimer. Un épaisseur cornéenne suffisante est nécessaire pour réaliser ces interventions en toute sécurité, car une cornée trop amincie pourrait développer une ectasie secondaire (déformation progressive).

La Clinique Pasteur de Tunis propose la pachymétrie par différentes technologies (ultrasonore et optique), permettant des mesures précises et reproductibles adaptées à chaque indication clinique.`,
    preparation: [
      'Retirer les lentilles de contact souples au moins 24 heures avant (48 heures si bilan de chirurgie réfractive).',
      'Retirer les lentilles rigides au moins 2 semaines avant.',
      'Ne pas instiller de collyres gras ou visqueux dans les heures précédant l\'examen.',
      'Aucun jeûne ni dilatation pupillaire ne sont nécessaires.',
      'L\'examen est simple et rapide, sans préparation particulière.',
    ],
    deroulement: [
      'Pour la pachymétrie ultrasonore : instillation d\'un collyre anesthésiant dans chaque œil.',
      'La sonde ultrasonore est délicatement appliquée perpendiculairement au centre de la cornée.',
      'Plusieurs mesures sont réalisées et moyennées pour obtenir une valeur fiable.',
      'Pour la pachymétrie optique (OCT ou Scheimpflug) : aucun contact ni anesthésie ne sont nécessaires.',
      'Le patient fixe un point lumineux dans l\'appareil.',
      'L\'acquisition est automatique et génère une carte d\'épaisseur cornéenne complète.',
      'Les valeurs sont enregistrées pour comparaison lors des suivis ultérieurs.',
    ],
    duree: '5 à 10 minutes',
    resultats:
      'Les résultats sont disponibles immédiatement. L\'épaisseur cornéenne centrale est exprimée en microns et comparée aux valeurs normatives. Une carte pachymétrique peut être générée pour visualiser les variations d\'épaisseur sur l\'ensemble de la cornée.',
    risques: [],
    indications: [
      'Bilan de glaucome et hypertonie oculaire (correction de la PIO)',
      'Bilan pré-opératoire de chirurgie réfractive (LASIK, PKR, SMILE)',
      'Suivi du kératocône (surveillance de l\'amincissement progressif)',
      'Suivi post-cross-linking cornéen',
      'Œdème cornéen (dystrophie de Fuchs, décompensation endothéliale)',
      'Bilan pré-greffe de cornée',
      'Suivi post-greffe de cornée',
    ],
  },
  {
    slug: 'biometrie-oculaire',
    title: 'Biométrie oculaire',
    shortTitle: 'Biométrie oculaire',
    description:
      "Mesure précise des dimensions de l'œil (longueur axiale, profondeur de la chambre antérieure, courbure cornéenne) pour le calcul de la puissance de l'implant intraoculaire avant chirurgie de la cataracte.",
    fullDescription: `La biométrie oculaire est un examen de mesure des paramètres anatomiques de l'œil, principalement la longueur axiale (distance entre la cornée et la rétine), la profondeur de la chambre antérieure, l'épaisseur du cristallin et la kératométrie (courbure cornéenne). Ces mesures sont indispensables pour calculer la puissance de l'implant intraoculaire (lentille artificielle) qui sera placé lors de la chirurgie de la cataracte.

La biométrie optique (par interférométrie à cohérence partielle ou swept-source) est aujourd'hui la technique de référence. Elle offre une précision de l'ordre de 10 microns pour la mesure de la longueur axiale, permettant un calcul réfractif très précis de l'implant. Cette précision est essentielle car une erreur de 0,1 mm sur la longueur axiale entraîne une erreur réfractive d'environ 0,28 dioptrie.

Les formules de calcul d'implant modernes (SRK/T, Haigis, Barrett Universal II, Kane, Hill-RBF) intègrent ces mesures biométriques pour proposer la puissance d'implant optimale, visant l'emmétropie (absence de besoin de correction optique) ou une cible réfractive personnalisée selon les besoins du patient. Le choix de la formule dépend notamment de la longueur axiale de l'œil.

La Clinique Pasteur de Tunis est équipée de biomètres optiques de dernière génération intégrant les formules de calcul les plus récentes, garantissant un résultat réfractif optimal après chirurgie de la cataracte.`,
    preparation: [
      'Retirer les lentilles de contact souples au moins 48 heures avant la biométrie.',
      'Retirer les lentilles rigides au moins 2 à 3 semaines avant.',
      'Aucun jeûne ni dilatation pupillaire ne sont nécessaires.',
      'L\'examen est réalisé avant toute instillation de collyres le jour de la consultation.',
      'Apporter les données de la correction optique actuelle (ordonnance de lunettes).',
      'Signaler tout antécédent de chirurgie oculaire (chirurgie réfractive, greffe de cornée).',
    ],
    deroulement: [
      'Le patient est installé devant le biomètre, menton sur la mentonnière.',
      'L\'appareil mesure automatiquement la longueur axiale par interférométrie optique.',
      'Mesure de la profondeur de la chambre antérieure.',
      'Mesure de l\'épaisseur du cristallin (utile pour certaines formules).',
      'Kératométrie : mesure de la courbure cornéenne dans les différents méridiens.',
      'Mesure du diamètre cornéen (blanc à blanc).',
      'L\'ensemble des mesures est réalisé pour les deux yeux.',
      'Le logiciel calcule la puissance de l\'implant selon plusieurs formules et propose la puissance optimale.',
    ],
    duree: '10 à 15 minutes',
    resultats:
      'Les résultats sont disponibles immédiatement. Le chirurgien discute avec le patient de la cible réfractive souhaitée (vision de loin sans lunettes, monovision, multifocalité) et choisit l\'implant le plus adapté. Un formulaire de biométrie détaillé est archivé dans le dossier chirurgical.',
    risques: [],
    indications: [
      'Bilan pré-opératoire de la chirurgie de la cataracte',
      'Échange d\'implant intraoculaire',
      'Implantation secondaire d\'une lentille intraoculaire',
      'Chirurgie du cristallin clair à visée réfractive',
      'Bilan pré-opératoire d\'implant phaque',
      'Suivi de la longueur axiale chez l\'enfant myope (contrôle de la progression)',
    ],
  },
  {
    slug: 'echographie-oculaire',
    title: 'Échographie oculaire',
    shortTitle: 'Échographie oculaire',
    description:
      "Exploration ultrasonore des structures intraoculaires et orbitaires, indispensable lorsque les milieux oculaires sont opaques ou pour l'évaluation des tumeurs oculaires.",
    fullDescription: `L'échographie oculaire utilise les ultrasons pour visualiser les structures internes de l'œil et de l'orbite. Deux modes sont principalement utilisés : le mode B (coupe bidimensionnelle) qui fournit une image en coupe de l'œil et de l'orbite, et le mode A standardisé qui mesure la réflectivité interne des tissus, paramètre essentiel pour la caractérisation des tumeurs intraoculaires.

Cet examen est particulièrement précieux lorsque les milieux oculaires sont opaques (cataracte dense, hémorragie intravitréenne, opacité cornéenne) et empêchent l'examen direct du fond d'œil. L'échographie permet alors de visualiser l'état de la rétine (recherche de décollement de rétine), du vitré et des structures postérieures du globe oculaire.

L'échographie en mode A standardisé est la technique de référence pour la caractérisation des tumeurs intraoculaires, en particulier le mélanome choroïdien. L'analyse de la réflectivité interne, de la structure acoustique et des dimensions de la lésion permet de la différencier d'autres tumeurs (hémangiome, métastase, naevus) et de surveiller son évolution.

La Clinique Pasteur de Tunis dispose d'un échographe oculaire dédié avec les modes A standardisé et B, permettant une exploration complète du globe oculaire et de l'orbite. L'examen est réalisé par des ophtalmologistes formés à l'échographie oculaire.`,
    preparation: [
      'Aucune préparation particulière n\'est nécessaire.',
      'Retirer les lentilles de contact.',
      'L\'examen ne nécessite ni jeûne ni dilatation pupillaire.',
      'Signaler tout antécédent de chirurgie oculaire récente (la technique d\'examen peut être adaptée).',
      'Apporter les résultats d\'examens ophtalmologiques et d\'imagerie antérieurs.',
    ],
    deroulement: [
      'Instillation d\'un collyre anesthésiant pour l\'échographie par contact direct (mode A standardisé).',
      'Pour le mode B par contact : application d\'un gel sur la paupière fermée, la sonde est posée sur la paupière.',
      'Pour le mode B par immersion ou contact direct : la sonde stérile est appliquée sur la cornée à travers un film de gel.',
      'Le patient est invité à regarder dans différentes directions pour explorer l\'ensemble du globe.',
      'Mesure des dimensions des lésions éventuelles.',
      'En mode A standardisé : analyse de la réflectivité interne des tumeurs.',
      'Exploration de l\'orbite en mode B si nécessaire (muscles oculomoteurs, nerf optique, glande lacrymale).',
    ],
    duree: '15 à 20 minutes',
    resultats:
      'Les résultats sont interprétés en temps réel par l\'ophtalmologiste. Un compte-rendu écrit avec les images échographiques est fourni le jour même. Pour les tumeurs, les mesures et la réflectivité sont archivées pour le suivi évolutif.',
    risques: [
      'Examen non invasif et indolore (légère pression sur la paupière).',
      'Flou visuel transitoire lié au gel et au collyre anesthésiant.',
    ],
    indications: [
      'Cataracte dense empêchant l\'examen du fond d\'œil',
      'Hémorragie intravitréenne',
      'Recherche de décollement de rétine derrière des milieux opaques',
      'Tumeurs intraoculaires (mélanome choroïdien, hémangiome, métastase)',
      'Décollement choroïdien',
      'Corps étranger intraoculaire',
      'Pathologies orbitaires (tumeurs, inflammation, myosite)',
      'Biométrie ultrasonore (quand la biométrie optique est impossible)',
      'Drusen papillaires',
    ],
  },
  {
    slug: 'tonometrie',
    title: 'Tonométrie',
    shortTitle: 'Tonométrie',
    description:
      "Mesure de la pression intraoculaire, examen de dépistage fondamental du glaucome, réalisé lors de chaque consultation ophtalmologique.",
    fullDescription: `La tonométrie est la mesure de la pression intraoculaire (PIO), paramètre essentiel en ophtalmologie. La PIO normale se situe entre 10 et 21 mmHg, mais cette fourchette varie selon l'épaisseur cornéenne, l'heure de la journée et d'autres facteurs individuels. L'élévation de la PIO est le principal facteur de risque modifiable du glaucome.

Plusieurs techniques de mesure existent. La tonométrie à aplanation de Goldmann, réalisée à la lampe à fente, est la méthode de référence. Elle mesure la force nécessaire pour aplanir une surface définie de la cornée. La tonométrie à air pulsé (tonomètre non-contact) est largement utilisée en dépistage car elle ne nécessite pas de contact avec l'œil ni d'anesthésie topique. La tonométrie de Pascal (contour dynamique) et la tonométrie par rebond (iCare) sont des alternatives adaptées à des situations spécifiques.

La mesure de la PIO doit toujours être interprétée en tenant compte de l'épaisseur cornéenne centrale (pachymétrie). Le dépistage du glaucome ne repose pas uniquement sur la PIO mais associe l'examen de la papille optique, l'OCT des fibres nerveuses et le champ visuel. Certains glaucomes dits « à pression normale » surviennent avec une PIO statistiquement normale.

La Clinique Pasteur de Tunis réalise la mesure de la PIO de manière systématique lors de chaque consultation ophtalmologique, utilisant la tonométrie à aplanation de Goldmann comme référence et des tonomètres non-contact pour le dépistage rapide.`,
    preparation: [
      'Retirer les lentilles de contact avant l\'examen.',
      'Aucune préparation particulière n\'est nécessaire.',
      'Signaler tout traitement par collyres hypotonisants (antiglaucomateux).',
      'Signaler tout antécédent de chirurgie cornéenne ou réfractive (peut influencer la mesure).',
      'L\'examen est rapide et réalisé lors de la consultation ophtalmologique.',
    ],
    deroulement: [
      'Tonométrie à aplanation de Goldmann : instillation d\'un collyre anesthésiant contenant de la fluorescéine.',
      'Le patient est installé à la lampe à fente, front et menton calés.',
      'Le cône du tonomètre est approché délicatement de la cornée (contact bref et indolore).',
      'Le médecin ajuste la pression jusqu\'à obtenir l\'aplanation de la surface cornéenne définie.',
      'Lecture de la PIO sur le cadran gradué.',
      'Tonométrie sans contact (air pulsé) : aucune anesthésie n\'est nécessaire.',
      'Un jet d\'air bref est projeté sur la cornée et l\'appareil calcule la PIO.',
      'La mesure est réalisée pour chaque œil.',
    ],
    duree: '2 à 5 minutes',
    resultats:
      'La valeur de la PIO est communiquée immédiatement au patient et consignée dans le dossier médical. En cas de PIO élevée, des examens complémentaires sont programmés (pachymétrie, OCT du nerf optique, champ visuel) pour confirmer ou infirmer un diagnostic de glaucome.',
    risques: [
      'Examen pratiquement indolore et sans risque.',
      'Légère irritation oculaire transitoire après l\'instillation du collyre anesthésiant (tonométrie à aplanation).',
      'Sensation de souffle d\'air surprenante mais indolore (tonométrie sans contact).',
    ],
    indications: [
      'Dépistage systématique du glaucome (recommandé après 40 ans)',
      'Suivi du glaucome sous traitement',
      'Hypertonie oculaire connue',
      'Antécédents familiaux de glaucome',
      'Suivi après chirurgie du glaucome (trabéculectomie, valves)',
      'Suivi de patients sous corticothérapie (risque d\'hypertonie cortisonique)',
      'Traumatisme oculaire',
      'Uvéite (risque d\'hypertonie secondaire)',
      'Bilan ophtalmologique complet',
    ],
  },
  {
    slug: 'bilan-orthoptique',
    title: 'Bilan orthoptique',
    shortTitle: 'Bilan orthoptique',
    description:
      "Évaluation complète de la motricité oculaire, de la vision binoculaire et de l'accommodation, indispensable au diagnostic des strabismes et des troubles oculomoteurs.",
    fullDescription: `Le bilan orthoptique est un examen spécialisé qui évalue l'ensemble des fonctions oculomotrices et sensorielles binoculaires. Il est réalisé par un orthoptiste, professionnel de santé spécialisé dans le dépistage, la rééducation et la réadaptation des troubles de la vision binoculaire et de la motricité oculaire.

Le bilan comprend l'étude de l'acuité visuelle, de la réfraction, de la motricité oculaire (mouvements des yeux dans toutes les directions), de l'alignement oculaire (recherche de strabisme manifeste ou latent), de la vision binoculaire (capacité des deux yeux à travailler ensemble), de la convergence, de l'accommodation et de la vision stéréoscopique (perception du relief).

Chez l'enfant, le bilan orthoptique est essentiel pour le dépistage précoce de l'amblyopie (« œil paresseux »), du strabisme et des troubles réfractifs. Un dépistage avant l'âge de 4 ans est recommandé, car la prise en charge précoce de l'amblyopie offre les meilleures chances de récupération visuelle. Chez l'adulte, il est indiqué en cas de fatigue visuelle, de diplopie (vision double), de céphalées liées au travail sur écran ou de paralysie oculomotrice.

La Clinique Pasteur de Tunis dispose d'un service d'orthoptie équipé du matériel nécessaire à un bilan complet. Les orthoptistes travaillent en étroite collaboration avec les ophtalmologistes pour une prise en charge optimale des patients.`,
    preparation: [
      'Apporter les lunettes ou lentilles de contact portées habituellement.',
      'Apporter l\'ordonnance de lunettes la plus récente.',
      'Chez l\'enfant : ne pas instiller de collyres de dilatation avant le bilan orthoptique (sauf demande spécifique du médecin).',
      'Noter les symptômes ressentis (fatigue visuelle, maux de tête, vision double, difficulté de lecture).',
      'L\'examen ne nécessite ni jeûne ni dilatation pupillaire.',
      'Prévoir 45 minutes à 1 heure pour le bilan complet.',
    ],
    deroulement: [
      'Interrogatoire détaillé : symptômes, antécédents, conditions de travail visuel.',
      'Mesure de l\'acuité visuelle de loin et de près, avec et sans correction.',
      'Étude de la réfraction (lunettes adaptées).',
      'Cover test : détection d\'un strabisme manifeste (tropie) ou latent (phorie) en vision de loin et de près.',
      'Étude de la motilité oculaire dans les 9 positions du regard.',
      'Mesure de l\'angle de déviation au prisme (si strabisme).',
      'Évaluation de la convergence (point de convergence proximale).',
      'Test de la vision binoculaire et de la stéréoscopie (test de Wirt, TNO, Lang).',
      'Étude de l\'accommodation et des vergences fusionnelles.',
      'Synthèse et conclusion avec recommandations (rééducation, correction optique, avis chirurgical).',
    ],
    duree: '45 minutes à 1 heure',
    resultats:
      'Un compte-rendu détaillé est rédigé par l\'orthoptiste à l\'issue du bilan, précisant les résultats de chaque test et les recommandations (rééducation orthoptique, modification de la correction optique, avis chirurgical pour strabisme). Ce compte-rendu est remis au patient et transmis au médecin prescripteur.',
    risques: [],
    indications: [
      'Strabisme chez l\'enfant ou l\'adulte',
      'Dépistage de l\'amblyopie chez le jeune enfant',
      'Fatigue visuelle et céphalées liées au travail sur écran',
      'Diplopie (vision double)',
      'Paralysie oculomotrice (III, IV, VI)',
      'Insuffisance de convergence',
      'Troubles de l\'apprentissage scolaire avec composante visuelle',
      'Bilan pré-opératoire de chirurgie du strabisme',
      'Nystagmus',
      'Torticolis d\'origine oculaire',
    ],
  },
  {
    slug: 'electroretinogramme',
    title: 'Électrorétinogramme (ERG)',
    shortTitle: 'ERG',
    description:
      "Enregistrement de l'activité électrique de la rétine en réponse à une stimulation lumineuse, permettant d'évaluer la fonction des photorécepteurs et des cellules rétiniennes.",
    fullDescription: `L'électrorétinogramme (ERG) est un examen d'électrophysiologie oculaire qui enregistre les potentiels électriques générés par la rétine en réponse à une stimulation lumineuse. Il explore la fonction des différentes couches cellulaires rétiniennes : les photorécepteurs (cônes et bâtonnets), les cellules bipolaires et les cellules de Müller.

Plusieurs types d'ERG sont réalisés selon le protocole standardisé de l'ISCEV (International Society for Clinical Electrophysiology of Vision). L'ERG en ambiance scotopique (après adaptation à l'obscurité) explore principalement la fonction des bâtonnets (vision nocturne). L'ERG en ambiance photopique explore la fonction des cônes (vision diurne et des couleurs). Le flicker à 30 Hz isole spécifiquement la réponse des cônes. L'ERG multifocal (mfERG) fournit une cartographie topographique de la fonction rétinienne, particulièrement utile pour évaluer la fonction maculaire.

L'ERG est indispensable dans le diagnostic des dystrophies rétiniennes héréditaires (rétinopathie pigmentaire, dystrophie des cônes, maladie de Stargardt), dans la surveillance de la toxicité rétinienne médicamenteuse (hydroxychloroquine, vigabatrine) et dans l'évaluation fonctionnelle rétinienne lorsque le fond d'œil paraît normal mais que le patient présente des troubles visuels.

La Clinique Pasteur de Tunis propose l'ERG full-field et l'ERG multifocal, réalisés selon les protocoles standardisés internationaux, permettant un diagnostic précis des pathologies rétiniennes fonctionnelles.`,
    preparation: [
      'L\'examen nécessite une adaptation à l\'obscurité de 20 à 30 minutes : prévoir un temps d\'examen prolongé.',
      'Ne pas porter de lentilles de contact le jour de l\'examen.',
      'Les pupilles seront dilatées : ne pas prévoir de conduire après l\'examen et apporter des lunettes de soleil.',
      'Signaler toute allergie aux collyres (anesthésiants, mydriatiques).',
      'Signaler le port de lentilles thérapeutiques ou de prothèses oculaires.',
      'Apporter les résultats d\'ERG antérieurs et les bilans ophtalmologiques récents.',
    ],
    deroulement: [
      'Dilatation pupillaire bilatérale par instillation de collyres mydriatiques.',
      'Phase d\'adaptation à l\'obscurité de 20 à 30 minutes dans une pièce noire.',
      'Instillation d\'un collyre anesthésiant.',
      'Mise en place d\'une électrode de recueil sur la cornée (lentille ERG ou fil DTL) et d\'électrodes de référence sur le front et les tempes.',
      'Enregistrement des réponses scotopiques : stimulations lumineuses de faible intensité puis d\'intensité standard dans l\'obscurité.',
      'Phase d\'adaptation à la lumière de 10 minutes.',
      'Enregistrement des réponses photopiques : stimulation simple et flicker à 30 Hz en ambiance éclairée.',
      'Pour l\'ERG multifocal : le patient fixe un écran affichant un motif de stimulation pendant 4 à 8 minutes par œil.',
      'Retrait des électrodes.',
    ],
    duree: '1 heure à 1 heure 30',
    resultats:
      'Les résultats sont analysés par l\'ophtalmologiste spécialisé en électrophysiologie oculaire. Le compte-rendu détaille les amplitudes et les temps implicites des différentes composantes de l\'ERG, comparés aux valeurs normatives. Les résultats sont disponibles sous 48 heures.',
    risques: [
      'Légère gêne liée au port de l\'électrode cornéenne (bien tolérée grâce à l\'anesthésie topique).',
      'Irritation cornéenne superficielle transitoire (micro-érosion exceptionnelle).',
      'Éblouissement et vision floue temporaires après les stimulations lumineuses et la dilatation.',
    ],
    indications: [
      'Rétinopathie pigmentaire et dystrophies rétiniennes héréditaires',
      'Dystrophie des cônes et des cônes-bâtonnets',
      'Maladie de Stargardt',
      'Amaurose congénitale de Leber',
      'Surveillance de la toxicité rétinienne de l\'hydroxychloroquine (Plaquenil)',
      'Surveillance de la toxicité rétinienne du vigabatrine',
      'Héméralopie (difficulté à voir la nuit)',
      'Dyschromatopsie (trouble de la vision des couleurs)',
      'Cécité nocturne congénitale stationnaire',
      'Évaluation fonctionnelle rétinienne quand le fond d\'œil paraît normal',
      'Bilan pré-thérapeutique de thérapie génique rétinienne',
    ],
  },
];
