export interface ExamenNeurophysiologique {
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

export const examensNeurophysiologiques: ExamenNeurophysiologique[] = [
  {
    slug: 'eeg-standard',
    title: 'Électroencéphalogramme (EEG) standard',
    shortTitle: 'EEG standard',
    description:
      "Enregistrement de l'activité électrique cérébrale au repos et lors de stimulations, permettant de détecter des anomalies fonctionnelles du cerveau.",
    fullDescription: `L'électroencéphalogramme (EEG) standard est un examen non invasif qui enregistre l'activité électrique du cerveau à l'aide d'électrodes placées sur le cuir chevelu. Il constitue l'un des examens fondamentaux en neurologie, offrant une fenêtre directe sur le fonctionnement cérébral en temps réel.

Cet examen est essentiel pour le diagnostic et le suivi de l'épilepsie, mais il est également précieux dans l'évaluation de nombreuses autres pathologies neurologiques. L'EEG permet de mettre en évidence des anomalies de l'activité électrique cérébrale telles que des pointes, des ondes lentes ou des décharges paroxystiques, qui orientent le diagnostic et guident la prise en charge thérapeutique.

Au cours de l'enregistrement, des épreuves d'activation sont réalisées : l'hyperpnée (respiration profonde et rapide pendant trois minutes) et la stimulation lumineuse intermittente (SLI). Ces épreuves permettent de révéler des anomalies qui ne seraient pas visibles au repos. L'examen est totalement indolore et sans danger.

À la Clinique Pasteur de Tunis, l'EEG est réalisé par des techniciens spécialisés en neurophysiologie et interprété par des médecins neurophysiologistes expérimentés, garantissant une qualité d'enregistrement et d'interprétation optimale.`,
    preparation: [
      'Se laver les cheveux la veille ou le matin de l\'examen, sans appliquer de gel, laque ou huile capillaire.',
      'Ne pas être à jeun : prendre un repas léger avant l\'examen.',
      'Éviter la prise de café, thé ou boissons excitantes dans les 12 heures précédant l\'examen.',
      'Ne pas interrompre les traitements médicamenteux en cours, sauf avis contraire du médecin prescripteur.',
      'Si possible, dormir un peu moins que d\'habitude la nuit précédente (privation partielle de sommeil) si le médecin le demande.',
      'Apporter l\'ordonnance, les résultats d\'examens antérieurs et la liste des médicaments en cours.',
    ],
    deroulement: [
      'Installation confortable du patient en position semi-assise ou allongée dans une pièce calme et tamisée.',
      'Mise en place de 21 électrodes sur le cuir chevelu selon le système international 10-20, fixées à l\'aide d\'une pâte conductrice.',
      'Vérification de l\'impédance de chaque électrode pour garantir la qualité de l\'enregistrement.',
      'Enregistrement de l\'activité cérébrale au repos, yeux fermés puis yeux ouverts, pendant environ 10 minutes.',
      'Épreuve d\'hyperpnée : le patient respire profondément et rapidement pendant 3 minutes.',
      'Épreuve de stimulation lumineuse intermittente (SLI) à différentes fréquences.',
      'Retrait des électrodes et nettoyage du cuir chevelu.',
    ],
    duree: '30 à 45 minutes',
    resultats:
      'Les résultats sont interprétés par le médecin neurophysiologiste et un compte-rendu détaillé est généralement disponible sous 24 à 48 heures. En cas d\'urgence, une interprétation immédiate peut être réalisée.',
    risques: [],
    indications: [
      'Suspicion ou suivi d\'épilepsie',
      'Crises convulsives fébriles chez l\'enfant',
      'Malaises avec perte de connaissance inexpliquée',
      'Troubles de la conscience ou confusion mentale',
      'Céphalées chroniques ou inhabituelles',
      'Troubles du comportement ou troubles cognitifs',
      'Encéphalopathies métaboliques ou toxiques',
      'Suivi de traitements antiépileptiques',
      'Bilan pré-opératoire neurochirurgical',
    ],
  },
  {
    slug: 'eeg-sommeil',
    title: 'Électroencéphalogramme de sommeil',
    shortTitle: 'EEG de sommeil',
    description:
      "Enregistrement de l'activité électrique cérébrale pendant le sommeil, particulièrement utile pour détecter des anomalies épileptiques qui n'apparaissent qu'au cours du sommeil.",
    fullDescription: `L'électroencéphalogramme de sommeil est un examen neurophysiologique qui enregistre l'activité électrique du cerveau pendant les différentes phases du sommeil. De nombreuses anomalies épileptiques ne se manifestent que pendant le sommeil, rendant cet examen indispensable dans certaines situations cliniques.

Le sommeil est un puissant activateur des anomalies épileptiques intercritiques. Les transitions entre l'éveil et le sommeil, ainsi que les stades de sommeil lent, sont particulièrement propices à l'apparition de décharges épileptiques. L'EEG de sommeil permet donc de mettre en évidence des anomalies qui échappent à l'EEG de veille standard.

Cet examen est particulièrement indiqué chez les enfants présentant des épilepsies focales bénignes à pointes centro-temporales, dans les épilepsies généralisées idiopathiques, ou encore lorsque l'EEG de veille est normal malgré une forte suspicion clinique d'épilepsie. Il est également utile dans l'exploration des troubles du sommeil d'origine neurologique.

La Clinique Pasteur de Tunis dispose d'un environnement spécialement aménagé pour favoriser l'endormissement naturel du patient, avec des chambres calmes, obscures et climatisées. Une privation partielle de sommeil la nuit précédente est généralement recommandée pour faciliter l'endormissement lors de l'examen.`,
    preparation: [
      'Effectuer une privation partielle de sommeil : se coucher 2 à 3 heures plus tard que d\'habitude et se lever 2 à 3 heures plus tôt.',
      'Se laver les cheveux sans produits coiffants (gel, laque, huile).',
      'Ne pas consommer de café, thé, cola ou boissons énergisantes les 24 heures précédant l\'examen.',
      'Prendre un repas léger avant de venir.',
      'Ne pas interrompre les traitements antiépileptiques, sauf indication expresse du médecin.',
      'Prévoir des vêtements confortables pour favoriser l\'endormissement.',
      'Apporter l\'ordonnance et les résultats d\'EEG antérieurs.',
    ],
    deroulement: [
      'Accueil du patient et installation dans une chambre calme, sombre et à température agréable.',
      'Mise en place des électrodes sur le cuir chevelu selon le système international 10-20.',
      'Enregistrement initial de quelques minutes en veille (yeux ouverts puis yeux fermés).',
      'Le patient est invité à s\'endormir naturellement, favorisé par la privation de sommeil préalable.',
      'Enregistrement continu pendant toute la durée du sommeil, couvrant idéalement les stades de sommeil lent léger et profond.',
      'Épreuves d\'activation (hyperpnée et SLI) réalisées au réveil.',
      'Retrait des électrodes et nettoyage.',
    ],
    duree: '1 heure 30 à 2 heures',
    resultats:
      'Le compte-rendu est établi par le neurophysiologiste après analyse détaillée de l\'enregistrement de veille et de sommeil. Les résultats sont disponibles sous 48 heures.',
    risques: [],
    indications: [
      'EEG de veille normal malgré une forte suspicion d\'épilepsie',
      'Épilepsies focales bénignes de l\'enfant (pointes centro-temporales)',
      'Épilepsie-absence de l\'enfant',
      'Syndrome de Landau-Kleffner',
      'Pointes-ondes continues du sommeil (POCS)',
      'Épilepsies du lobe temporal',
      'Troubles paroxystiques du sommeil à différencier de l\'épilepsie',
      'Parasomnies nécessitant un diagnostic différentiel avec l\'épilepsie',
      'Suivi post-thérapeutique de certaines épilepsies',
    ],
  },
  {
    slug: 'video-eeg-prolonge',
    title: 'Vidéo-EEG prolongé (monitoring continu)',
    shortTitle: 'Vidéo-EEG',
    description:
      "Enregistrement simultané et prolongé de l'activité électrique cérébrale et du comportement du patient par vidéo, permettant de corréler les manifestations cliniques aux anomalies EEG.",
    fullDescription: `Le vidéo-EEG prolongé est un examen de référence qui combine l'enregistrement continu de l'activité électrique cérébrale (EEG) avec une surveillance vidéo synchronisée du patient. Cette technique permet d'établir une corrélation précise entre les manifestations cliniques observées et les anomalies électriques cérébrales correspondantes.

Cet examen est réalisé sur une durée prolongée, allant de quelques heures à plusieurs jours selon les indications. Le patient est hospitalisé dans une unité dédiée, sous surveillance constante d'une équipe spécialisée. L'objectif principal est de capturer des événements cliniques spontanés (crises d'épilepsie, malaises, mouvements anormaux) et d'en analyser le corrélat électrophysiologique.

Le vidéo-EEG est particulièrement crucial dans le bilan pré-chirurgical de l'épilepsie, où il permet de localiser précisément le foyer épileptogène. Il est également indispensable pour différencier les crises épileptiques des crises psychogènes non épileptiques (CPNE), une distinction qui a des implications thérapeutiques majeures.

La Clinique Pasteur de Tunis dispose d'une unité de vidéo-EEG équipée de matériel de dernière génération, avec des caméras haute définition infrarouge pour la surveillance nocturne et un système d'enregistrement numérique permettant une analyse rétrospective détaillée.`,
    preparation: [
      'Une consultation préalable avec le neurologue est nécessaire pour planifier la durée du monitoring.',
      'Prévoir des affaires personnelles pour un séjour de 24 heures à plusieurs jours (vêtements, articles de toilette).',
      'Se laver les cheveux sans produits coiffants.',
      'Une réduction progressive des traitements antiépileptiques peut être décidée par le médecin pour favoriser la survenue de crises.',
      'Ne pas interrompre ou modifier soi-même les traitements sans accord médical.',
      'Prévoir un accompagnant si possible.',
      'Apporter tous les résultats d\'examens antérieurs (EEG, IRM cérébrale, scanners).',
    ],
    deroulement: [
      'Admission dans l\'unité de vidéo-EEG et installation du patient dans une chambre dédiée.',
      'Mise en place des électrodes EEG avec fixation renforcée (collodion) pour un enregistrement prolongé.',
      'Calibrage du système vidéo avec caméras positionnées pour capturer l\'ensemble du corps du patient.',
      'Enregistrement continu 24h/24 de l\'EEG et de la vidéo, avec surveillance par le personnel soignant.',
      'Le patient peut se déplacer dans un périmètre limité, manger et boire normalement.',
      'En cas de crise, l\'équipe soignante effectue un testing clinique standardisé (consignes verbales, tests de mémoire).',
      'À la fin du monitoring, les électrodes sont retirées et le traitement antiépileptique est repris à dose habituelle.',
    ],
    duree: '24 heures à 5 jours selon l\'indication',
    resultats:
      'L\'analyse complète de l\'enregistrement (EEG et vidéo) est réalisée par le neurophysiologiste. Un compte-rendu détaillé incluant la description des événements capturés est fourni sous une semaine. Les résultats sont discutés lors d\'une consultation de suivi.',
    risques: [
      'Risque de crises d\'épilepsie plus fréquentes en cas de réduction thérapeutique, encadré par une surveillance médicale continue.',
      'Inconfort lié au port prolongé des électrodes (irritation cutanée possible).',
      'Très rarement, état de mal épileptique nécessitant une intervention médicale immédiate (équipe de réanimation disponible).',
    ],
    indications: [
      'Bilan pré-chirurgical de l\'épilepsie pharmaco-résistante',
      'Diagnostic différentiel entre crises épileptiques et crises psychogènes non épileptiques',
      'Classification précise du type d\'épilepsie',
      'Localisation du foyer épileptogène avant chirurgie',
      'Quantification des crises et des anomalies intercritiques',
      'Évaluation de l\'efficacité d\'un traitement antiépileptique',
      'Événements paroxystiques de nature indéterminée',
    ],
  },
  {
    slug: 'emg-detection',
    title: 'Électromyogramme (EMG) de détection',
    shortTitle: 'EMG de détection',
    description:
      "Examen d'exploration de l'activité électrique des muscles au repos et lors de la contraction, permettant de diagnostiquer les atteintes musculaires et nerveuses périphériques.",
    fullDescription: `L'électromyogramme (EMG) de détection est un examen neurophysiologique qui analyse l'activité électrique des muscles à l'aide d'une électrode-aiguille fine insérée dans le muscle. Cet examen permet d'évaluer l'intégrité de l'unité motrice, c'est-à-dire l'ensemble formé par le motoneurone, son axone et les fibres musculaires qu'il innerve.

L'EMG de détection explore successivement l'activité du muscle au repos (recherche d'une activité spontanée anormale comme des fibrillations, des fasciculations ou des décharges myotoniques), puis lors d'un effort de contraction volontaire (analyse des potentiels d'unité motrice : morphologie, durée, amplitude, recrutement). Ces paramètres permettent de distinguer une atteinte neurogène (maladie du nerf) d'une atteinte myogène (maladie du muscle).

Cet examen est fondamental dans le diagnostic des neuropathies périphériques, des radiculopathies (sciatique, cruralgie), des maladies du motoneurone (sclérose latérale amyotrophique), des myopathies et des myosites. Il apporte des informations complémentaires aux études de conduction nerveuse et permet de préciser le siège, la sévérité et l'ancienneté de l'atteinte.

À la Clinique Pasteur de Tunis, l'EMG est réalisé par des médecins neurophysiologistes expérimentés utilisant des appareils d'électromyographie de dernière génération, permettant une analyse fine et précise des potentiels d'unité motrice.`,
    preparation: [
      'Aucun jeûne n\'est nécessaire.',
      'Se présenter avec une peau propre, sans crème ni huile sur les zones à examiner.',
      'Signaler au médecin la prise d\'anticoagulants ou d\'antiagrégants plaquettaires.',
      'Signaler tout antécédent de troubles de la coagulation.',
      'Apporter l\'ordonnance de prescription, les résultats d\'imagerie (IRM, scanner) et les bilans biologiques récents.',
      'L\'examen n\'est pas contre-indiqué chez les porteurs de pacemaker, mais il faut le signaler.',
    ],
    deroulement: [
      'Le médecin neurophysiologiste réalise un interrogatoire et un examen clinique ciblé.',
      'Le patient est installé confortablement, les muscles à examiner étant accessibles.',
      'Une électrode-aiguille fine et stérile à usage unique est insérée dans le muscle à étudier.',
      'Enregistrement de l\'activité musculaire au repos : recherche d\'activité spontanée anormale.',
      'Le patient est invité à contracter progressivement le muscle : analyse des potentiels d\'unité motrice.',
      'Contraction maximale : évaluation du tracé interférentiel et du recrutement des unités motrices.',
      'Plusieurs muscles sont examinés successivement selon le contexte clinique.',
      'Retrait de l\'aiguille et désinfection des points de ponction.',
    ],
    duree: '30 à 60 minutes',
    resultats:
      'Les résultats sont interprétés en temps réel par le médecin neurophysiologiste. Un compte-rendu détaillé est remis au patient ou envoyé au médecin prescripteur sous 24 à 48 heures.',
    risques: [
      'Douleur modérée et transitoire lors de l\'insertion de l\'aiguille dans le muscle.',
      'Petit hématome au point de ponction, en particulier chez les patients sous anticoagulants.',
      'Risque infectieux extrêmement faible grâce à l\'utilisation d\'aiguilles stériles à usage unique.',
    ],
    indications: [
      'Suspicion de maladie du motoneurone (sclérose latérale amyotrophique)',
      'Radiculopathies cervicales ou lombaires (sciatique, cruralgie)',
      'Neuropathies périphériques (diabétique, alcoolique, inflammatoire)',
      'Syndrome du canal carpien et autres syndromes canalaires',
      'Myopathies et dystrophies musculaires',
      'Myosites et polymyosites',
      'Faiblesse musculaire inexpliquée',
      'Amyotrophie localisée ou diffuse',
      'Fasciculations ou crampes musculaires persistantes',
    ],
  },
  {
    slug: 'vitesses-conduction-nerveuse',
    title: 'Étude des vitesses de conduction nerveuse (VCN)',
    shortTitle: 'Conduction nerveuse (VCN)',
    description:
      "Mesure de la vitesse et de la qualité de transmission de l'influx nerveux le long des nerfs périphériques, essentielle au diagnostic des neuropathies.",
    fullDescription: `L'étude des vitesses de conduction nerveuse (VCN) est un examen neurophysiologique qui mesure la capacité des nerfs périphériques à conduire l'influx électrique. En stimulant un nerf en un point et en recueillant la réponse en un autre point, on peut calculer la vitesse de conduction, l'amplitude de la réponse et d'autres paramètres reflétant l'intégrité du nerf.

Cet examen permet de distinguer deux grands types d'atteintes nerveuses : les atteintes démyélinisantes (destruction de la gaine de myéline entourant le nerf, entraînant un ralentissement de la conduction) et les atteintes axonales (destruction de l'axone lui-même, entraînant une diminution de l'amplitude des réponses). Cette distinction est fondamentale car elle oriente vers des causes et des traitements différents.

L'étude des VCN est systématiquement associée à l'EMG de détection pour constituer un bilan électroneuromyographique complet. Elle est particulièrement performante dans le diagnostic des syndromes canalaires (canal carpien, canal de Guyon, gouttière épitrochléo-olécranienne), des polyneuropathies et des polyradiculonévrites.

La Clinique Pasteur de Tunis utilise des appareils d'électroneuromyographie numériques de haute résolution, permettant des mesures précises et reproductibles. Les examens sont réalisés dans des conditions standardisées de température cutanée, garantissant la fiabilité des résultats.`,
    preparation: [
      'Aucun jeûne n\'est nécessaire.',
      'Garder les mains et les pieds au chaud avant l\'examen (le froid ralentit la conduction nerveuse et peut fausser les résultats).',
      'Se présenter avec une peau propre, sans crème ni huile.',
      'Signaler la prise de médicaments, en particulier les traitements neurotoxiques.',
      'Signaler la présence d\'un pacemaker ou d\'un défibrillateur implantable.',
      'Apporter les résultats d\'examens antérieurs et l\'ordonnance du médecin.',
    ],
    deroulement: [
      'Le patient est installé confortablement, les membres à examiner découverts.',
      'Vérification de la température cutanée (un réchauffement peut être nécessaire si la peau est trop froide).',
      'Pose d\'électrodes de surface (autocollantes) sur la peau en regard du nerf et du muscle à étudier.',
      'Stimulation électrique du nerf à l\'aide d\'un stimulateur bipolaire placé sur la peau : la stimulation provoque une sensation de picotement ou de contraction brève.',
      'Enregistrement de la réponse musculaire (conduction motrice) ou sensitive (conduction sensitive).',
      'Stimulation à différents niveaux le long du nerf pour calculer la vitesse de conduction segmentaire.',
      'Étude de plusieurs nerfs des membres supérieurs et/ou inférieurs selon le contexte clinique.',
      'Mesure des latences distales, des amplitudes et des vitesses de conduction.',
    ],
    duree: '30 à 60 minutes',
    resultats:
      'Les résultats sont analysés par le neurophysiologiste en comparaison avec les valeurs normales de référence. Le compte-rendu est disponible sous 24 à 48 heures et détaille les paramètres de conduction de chaque nerf étudié.',
    risques: [
      'Sensation désagréable mais supportable lors des stimulations électriques.',
      'Aucun risque pour les patients porteurs de pacemaker si les précautions sont respectées.',
    ],
    indications: [
      'Syndrome du canal carpien',
      'Syndrome du canal de Guyon (nerf ulnaire au poignet)',
      'Compression du nerf ulnaire au coude',
      'Polyneuropathies (diabétique, alcoolique, toxique, inflammatoire)',
      'Polyradiculonévrite aiguë (syndrome de Guillain-Barré)',
      'Polyradiculonévrite chronique (PIDC)',
      'Mononeuropathies et multinévrites',
      'Neuropathies héréditaires (maladie de Charcot-Marie-Tooth)',
      'Surveillance de traitements neurotoxiques (chimiothérapie)',
    ],
  },
  {
    slug: 'potentiels-evoques-visuels',
    title: 'Potentiels évoqués visuels (PEV)',
    shortTitle: 'PEV',
    description:
      "Enregistrement de la réponse électrique du cortex visuel à une stimulation lumineuse, permettant d'évaluer l'intégrité des voies visuelles du nerf optique au cortex occipital.",
    fullDescription: `Les potentiels évoqués visuels (PEV) sont un examen neurophysiologique qui mesure la réponse électrique du cortex visuel occipital à une stimulation visuelle standardisée. L'examen consiste à enregistrer, à l'aide d'électrodes placées sur le scalp en regard du cortex occipital, les signaux électriques générés par le cerveau en réponse à un stimulus visuel, le plus souvent un damier alternant affiché sur un écran.

Cet examen explore l'intégrité fonctionnelle de l'ensemble des voies visuelles, de la rétine au cortex occipital, en passant par le nerf optique, le chiasma optique et les radiations optiques. L'onde principale analysée est l'onde P100, dont la latence (temps d'apparition) et l'amplitude sont mesurées. Un allongement de la latence de l'onde P100 est un marqueur très sensible de démyélinisation du nerf optique.

Les PEV ont une place privilégiée dans le diagnostic de la sclérose en plaques, où ils permettent de détecter une névrite optique même cliniquement silencieuse. Un allongement de la latence P100 unilatéral est fortement évocateur d'une névrite optique rétrobulbaire, qu'elle soit symptomatique ou infraclinique.

La Clinique Pasteur de Tunis réalise les PEV selon les protocoles standardisés de la Société Internationale de Neurophysiologie Clinique (IFCN), garantissant des résultats fiables et comparables dans le temps.`,
    preparation: [
      'Apporter ses lunettes correctrices ou ses lentilles de contact habituelles (l\'acuité visuelle doit être optimale).',
      'Se laver les cheveux sans produits coiffants.',
      'L\'examen ne nécessite pas d\'être à jeun.',
      'Signaler toute pathologie ophtalmologique connue (cataracte, glaucome, dégénérescence maculaire).',
      'Signaler la prise de médicaments pouvant affecter la vision.',
      'Apporter les résultats d\'examens ophtalmologiques et neurologiques récents.',
    ],
    deroulement: [
      'Installation du patient confortablement assis face à un écran, à une distance standardisée.',
      'Pose d\'électrodes sur le cuir chevelu en regard du cortex visuel occipital.',
      'L\'examen se déroule œil par œil : un cache est placé alternativement sur chaque œil.',
      'Le patient doit fixer un point central sur l\'écran affichant un damier noir et blanc dont les cases s\'inversent à une fréquence régulière.',
      'L\'ordinateur moyenne les réponses corticales sur 100 à 200 stimulations pour extraire le signal des PEV du bruit de fond.',
      'Mesure de la latence et de l\'amplitude de l\'onde P100 pour chaque œil.',
      'En cas de mauvaise acuité visuelle, une stimulation par flash lumineux peut être utilisée.',
    ],
    duree: '30 à 45 minutes',
    resultats:
      'Le neurophysiologiste analyse les tracés et compare les latences et amplitudes aux valeurs normatives. Les résultats sont disponibles sous 24 à 48 heures. Un allongement de la latence P100 ou une asymétrie inter-oculaire significative sont les principales anomalies recherchées.',
    risques: [],
    indications: [
      'Suspicion de sclérose en plaques (recherche de névrite optique infraclinique)',
      'Névrite optique rétrobulbaire',
      'Neuropathie optique (compressive, toxique, ischémique, héréditaire)',
      'Baisse d\'acuité visuelle inexpliquée',
      'Tumeurs comprimant les voies visuelles (adénome hypophysaire, méningiome)',
      'Surveillance de pathologies démyélinisantes',
      'Évaluation fonctionnelle des voies visuelles chez les enfants non coopérants',
      'Bilan de neurosarcoïdose ou de maladie de Behçet avec atteinte neurologique',
    ],
  },
  {
    slug: 'potentiels-evoques-auditifs',
    title: 'Potentiels évoqués auditifs (PEA)',
    shortTitle: 'PEA',
    description:
      "Enregistrement des réponses électriques des voies auditives du nerf cochléaire au tronc cérébral, permettant d'évaluer l'audition et l'intégrité des voies auditives centrales.",
    fullDescription: `Les potentiels évoqués auditifs (PEA) du tronc cérébral, également appelés PEAEP (potentiels évoqués auditifs précoces), enregistrent les réponses électriques générées par les voies auditives en réponse à une stimulation sonore (clics ou tone bursts). L'examen recueille une série d'ondes (I à V) dont chacune correspond à un relais anatomique précis des voies auditives, du nerf cochléaire au colliculus inférieur.

L'onde I est générée par le nerf cochléaire, l'onde III par les noyaux olivaires supérieurs du tronc cérébral, et l'onde V par le colliculus inférieur (mésencéphale). L'analyse des latences absolues de chaque onde et des intervalles inter-ondes permet de localiser une atteinte le long des voies auditives centrales, du nerf auditif au tronc cérébral.

Les PEA sont particulièrement utiles dans le diagnostic des neurinomes de l'acoustique (schwannome vestibulaire), où l'on observe typiquement un allongement de l'intervalle I-III. Ils sont également essentiels dans le dépistage de la surdité néonatale, car ils permettent une évaluation objective de l'audition sans nécessiter la coopération du patient.

La Clinique Pasteur de Tunis dispose d'un équipement de PEA performant, permettant une évaluation précise du seuil auditif électrophysiologique et de l'intégrité des voies auditives centrales.`,
    preparation: [
      'Aucun jeûne n\'est nécessaire.',
      'Se laver les cheveux et les oreilles ; ne pas mettre de boucles d\'oreilles volumineuses.',
      'Signaler tout antécédent de surdité, d\'acouphènes ou de vertiges.',
      'Chez le nourrisson ou le jeune enfant, une privation de sommeil ou une sédation légère peut être nécessaire (sur prescription médicale).',
      'Apporter les résultats d\'audiogrammes et d\'examens ORL récents.',
      'Apporter l\'ordonnance du médecin prescripteur.',
    ],
    deroulement: [
      'Installation du patient en position semi-allongée dans une pièce calme.',
      'Pose d\'électrodes sur le cuir chevelu (vertex) et les lobes des oreilles ou les mastoïdes.',
      'Un casque audio est placé sur les oreilles du patient.',
      'Des clics sonores sont délivrés dans une oreille, l\'autre recevant un bruit de masquage.',
      'L\'ordinateur moyenne les réponses électriques sur 1 000 à 2 000 stimulations pour extraire les ondes I à V.',
      'L\'examen est réalisé pour chaque oreille séparément, à différentes intensités si nécessaire.',
      'Analyse des latences absolues des ondes I, III et V et des intervalles inter-ondes (I-III, III-V, I-V).',
    ],
    duree: '30 à 45 minutes',
    resultats:
      'Les résultats sont interprétés par le neurophysiologiste et mis en corrélation avec les données cliniques et audiométriques. Le compte-rendu est disponible sous 24 à 48 heures.',
    risques: [],
    indications: [
      'Suspicion de neurinome de l\'acoustique (schwannome vestibulaire)',
      'Surdité de perception unilatérale ou asymétrique',
      'Dépistage de la surdité néonatale',
      'Sclérose en plaques (recherche d\'atteinte infraclinique du tronc cérébral)',
      'Lésions du tronc cérébral (vasculaires, tumorales, inflammatoires)',
      'Surveillance en réanimation (coma, mort encéphalique)',
      'Évaluation objective de l\'audition chez les patients non coopérants',
      'Acouphènes unilatéraux nécessitant une exploration',
    ],
  },
  {
    slug: 'potentiels-evoques-somesthesiques',
    title: 'Potentiels évoqués somesthésiques (PES)',
    shortTitle: 'PES',
    description:
      "Enregistrement des réponses électriques des voies sensitives depuis les nerfs périphériques jusqu'au cortex cérébral, évaluant l'intégrité de la voie lemniscale.",
    fullDescription: `Les potentiels évoqués somesthésiques (PES) explorent la voie sensitive lemniscale (voie de la sensibilité profonde et du tact épicritique) dans son intégralité, depuis les nerfs périphériques jusqu'au cortex pariétal. L'examen consiste à stimuler électriquement un nerf périphérique (habituellement le nerf médian au poignet ou le nerf tibial postérieur à la cheville) et à recueillir les réponses à différents niveaux le long des voies sensitives.

Les PES des membres supérieurs (stimulation du nerf médian) recueillent des réponses au niveau du plexus brachial (point d'Erb), de la moelle cervicale, du tronc cérébral et du cortex pariétal. Les PES des membres inférieurs (stimulation du nerf tibial postérieur) explorent les voies sensitives de la queue de cheval au cortex pariétal, en passant par la moelle épinière.

Cet examen est particulièrement indiqué dans l'évaluation des myélopathies cervicales et thoraciques, des compressions médullaires, de la sclérose en plaques et des lésions du tronc cérébral. Il est également utilisé en per-opératoire pour le monitoring de la moelle épinière lors de chirurgies rachidiennes à risque.

La Clinique Pasteur de Tunis réalise les PES selon les recommandations internationales, permettant une exploration complète et fiable des voies somesthésiques. L'examen est souvent couplé aux PEV et aux PEA pour constituer un bilan multimodal des potentiels évoqués.`,
    preparation: [
      'Aucun jeûne n\'est nécessaire.',
      'Se laver les cheveux sans produits coiffants.',
      'Garder les membres au chaud pour faciliter la stimulation nerveuse.',
      'Signaler tout antécédent de trouble de la sensibilité, de douleurs neuropathiques ou de pathologie médullaire.',
      'Apporter les résultats d\'IRM médullaire et cérébrale si disponibles.',
      'Apporter l\'ordonnance et la liste des traitements en cours.',
    ],
    deroulement: [
      'Installation du patient en position semi-allongée, détendu.',
      'Pose d\'électrodes de recueil sur le cuir chevelu (cortex pariétal), la nuque (moelle cervicale) et le creux sus-claviculaire (point d\'Erb) ou la région lombaire.',
      'Stimulation électrique du nerf médian au poignet (membres supérieurs) ou du nerf tibial postérieur à la cheville (membres inférieurs).',
      'La stimulation provoque une légère secousse du pouce ou du pied, indolore à modérément désagréable.',
      'L\'ordinateur moyenne les réponses sur 500 à 1 000 stimulations.',
      'Analyse des latences des différentes composantes aux niveaux périphérique, spinal et cortical.',
      'Calcul des temps de conduction centrale (du niveau spinal au cortex).',
    ],
    duree: '45 minutes à 1 heure',
    resultats:
      'Les résultats sont interprétés par le neurophysiologiste en tenant compte du contexte clinique. Le compte-rendu, disponible sous 48 heures, précise les temps de conduction à chaque niveau et identifie l\'éventuel site de l\'anomalie.',
    risques: [
      'Sensation désagréable lors des stimulations électriques, généralement bien tolérée.',
    ],
    indications: [
      'Sclérose en plaques (recherche d\'atteinte infraclinique des voies sensitives)',
      'Myélopathie cervicarthrosique (compression médullaire cervicale)',
      'Compression médullaire d\'autre origine (tumorale, hernie discale)',
      'Lésions médullaires traumatiques',
      'Syndrome de la queue de cheval',
      'Atteintes du tronc cérébral',
      'Monitoring per-opératoire lors de chirurgies rachidiennes',
      'Évaluation pronostique dans les comas et les traumatismes crâniens graves',
      'Myélites inflammatoires ou infectieuses',
    ],
  },
  {
    slug: 'potentiels-evoques-moteurs',
    title: 'Potentiels évoqués moteurs (PEM)',
    shortTitle: 'PEM',
    description:
      "Évaluation de la voie motrice cortico-spinale par stimulation magnétique transcrânienne, mesurant le temps de conduction motrice centrale du cortex moteur aux muscles.",
    fullDescription: `Les potentiels évoqués moteurs (PEM) explorent l'intégrité de la voie motrice cortico-spinale (voie pyramidale) en utilisant la stimulation magnétique transcrânienne (TMS). Une bobine magnétique placée sur le cuir chevelu génère un champ magnétique bref et puissant qui induit un courant électrique dans le cortex moteur, activant les neurones pyramidaux. La réponse musculaire résultante est enregistrée par des électrodes de surface.

L'examen mesure le temps de conduction motrice centrale (TCMC), c'est-à-dire le temps nécessaire à l'influx nerveux pour parcourir la voie pyramidale depuis le cortex moteur jusqu'aux motoneurones de la moelle épinière. Un allongement du TCMC ou une absence de réponse témoignent d'une atteinte de la voie motrice centrale.

Les PEM sont complémentaires des PES : alors que les PES explorent les voies sensitives ascendantes, les PEM évaluent les voies motrices descendantes. Ensemble, ils fournissent une cartographie fonctionnelle complète de la moelle épinière. Les PEM sont particulièrement utiles dans le diagnostic et le suivi de la sclérose en plaques, des myélopathies et des maladies du motoneurone.

La Clinique Pasteur de Tunis dispose d'un stimulateur magnétique transcrânien de dernière génération, permettant une stimulation focale et reproductible. L'examen est non invasif, indolore et sans effets secondaires dans la grande majorité des cas.`,
    preparation: [
      'Aucune préparation particulière n\'est nécessaire.',
      'Signaler impérativement la présence d\'un pacemaker, d\'un défibrillateur implantable, d\'implants cochléaires ou de tout matériel ferromagnétique intracrânien (clips chirurgicaux).',
      'Signaler tout antécédent d\'épilepsie (contre-indication relative).',
      'Signaler une grossesse.',
      'Apporter les résultats d\'IRM cérébrale et médullaire si disponibles.',
      'Retirer les objets métalliques (boucles d\'oreilles, épingles à cheveux, colliers) avant l\'examen.',
    ],
    deroulement: [
      'Installation du patient en position assise ou semi-allongée.',
      'Pose d\'électrodes de surface sur les muscles cibles (muscles de la main, du bras, de la jambe selon le contexte).',
      'Positionnement de la bobine magnétique sur le cuir chevelu, en regard du cortex moteur.',
      'Déclenchement de la stimulation magnétique : le patient ressent un léger claquement et une brève contraction musculaire.',
      'Enregistrement de la réponse motrice au niveau des muscles cibles.',
      'Stimulation spinale (cervicale ou lombaire) pour mesurer le temps de conduction périphérique.',
      'Calcul du temps de conduction motrice centrale par soustraction.',
      'L\'examen est réalisé bilatéralement pour permettre une comparaison.',
    ],
    duree: '30 à 45 minutes',
    resultats:
      'Les résultats sont disponibles sous 24 à 48 heures. Le compte-rendu précise le TCMC aux membres supérieurs et inférieurs, les amplitudes des réponses motrices et leur comparaison aux valeurs normatives.',
    risques: [
      'Contre-indication absolue chez les porteurs de pacemaker, de défibrillateur implantable ou de matériel ferromagnétique intracrânien.',
      'Risque théorique extrêmement faible de déclencher une crise d\'épilepsie (précautions chez les patients épileptiques).',
      'Céphalées transitoires possibles après l\'examen.',
    ],
    indications: [
      'Sclérose en plaques (évaluation de l\'atteinte de la voie pyramidale)',
      'Myélopathie cervicarthrosique',
      'Sclérose latérale amyotrophique (SLA) et maladies du motoneurone',
      'Compression médullaire',
      'Paraparésie ou tétraparésie d\'origine indéterminée',
      'Déficit moteur central inexpliqué',
      'Suivi post-thérapeutique des pathologies de la voie motrice',
      'Distinction entre atteinte centrale et périphérique de la voie motrice',
    ],
  },
  {
    slug: 'bilan-pre-chirurgical-epilepsie',
    title: "Bilan pré-chirurgical de l'épilepsie",
    shortTitle: 'Bilan pré-chirurgical épilepsie',
    description:
      "Évaluation multidisciplinaire complète visant à identifier précisément le foyer épileptogène chez les patients atteints d'épilepsie pharmaco-résistante candidats à la chirurgie.",
    fullDescription: `Le bilan pré-chirurgical de l'épilepsie est un programme d'évaluation multidisciplinaire exhaustif destiné aux patients souffrant d'épilepsie pharmaco-résistante. Environ 30 % des patients épileptiques ne répondent pas de manière satisfaisante aux traitements médicamenteux, et pour certains d'entre eux, la chirurgie de l'épilepsie offre une possibilité de guérison ou d'amélioration significative.

Ce bilan repose sur la convergence de plusieurs examens complémentaires dont l'objectif est de localiser avec précision le foyer épileptogène (zone du cerveau à l'origine des crises) et de s'assurer que son exérèse est possible sans entraîner de déficit neurologique inacceptable. Les examens réalisés incluent le vidéo-EEG prolongé, l'IRM cérébrale haute résolution, la tomographie par émission de positons (TEP), la tomographie d'émission monophotonique ictale (TEMP/SPECT), le bilan neuropsychologique complet et, dans certains cas, l'EEG intracrânien (SEEG).

La décision chirurgicale est prise de manière collégiale lors d'une réunion de concertation pluridisciplinaire (RCP) réunissant neurologues, neurophysiologistes, neurochirurgiens, neuroradiologues et neuropsychologues. Chaque dossier est discuté individuellement pour déterminer la meilleure stratégie thérapeutique.

La Clinique Pasteur de Tunis coordonne le bilan pré-chirurgical de l'épilepsie en collaboration avec les différents spécialistes, assurant une prise en charge complète et personnalisée de chaque patient.`,
    preparation: [
      'Consultation initiale avec un neurologue épileptologue pour évaluer l\'indication du bilan.',
      'Rassembler l\'ensemble du dossier médical : comptes-rendus de consultations, EEG antérieurs, IRM cérébrales, traitements essayés.',
      'Prévoir un séjour hospitalier de 5 à 10 jours pour le vidéo-EEG prolongé.',
      'Ne pas modifier les traitements antiépileptiques sans avis médical préalable.',
      'Être accompagné d\'un proche qui peut décrire les crises (un enregistrement vidéo des crises par l\'entourage est très utile).',
      'Prévoir une disponibilité pour les différents examens programmés sur plusieurs semaines.',
    ],
    deroulement: [
      'Consultation approfondie par le neurologue épileptologue : histoire de la maladie, description sémiologique des crises, traitements antérieurs.',
      'Vidéo-EEG prolongé (3 à 7 jours) avec réduction thérapeutique contrôlée pour enregistrer des crises.',
      'IRM cérébrale haute résolution avec protocole épilepsie (séquences spécifiques, coupes fines).',
      'Bilan neuropsychologique complet : évaluation de la mémoire, du langage, des fonctions exécutives et visuospatiales.',
      'TEP cérébrale au 18-FDG (en intercritique) pour identifier les zones d\'hypométabolisme.',
      'TEMP/SPECT ictale si nécessaire (injection du traceur pendant une crise).',
      'Test de Wada (si chirurgie temporale envisagée) : évaluation de la latéralisation du langage et de la mémoire.',
      'Réunion de concertation pluridisciplinaire pour discussion collégiale du dossier et décision thérapeutique.',
    ],
    duree: 'Plusieurs semaines (bilan échelonné)',
    resultats:
      'Les conclusions du bilan sont présentées au patient et à sa famille lors d\'une consultation dédiée. Un rapport complet est rédigé, incluant la synthèse de tous les examens et la proposition thérapeutique retenue par la RCP (chirurgie, stimulation du nerf vague, autres options).',
    risques: [
      'Risque de crises plus fréquentes ou plus sévères lors de la réduction thérapeutique pendant le vidéo-EEG (sous surveillance médicale continue).',
      'Risque exceptionnel d\'état de mal épileptique (prise en charge immédiate possible).',
      'Risques liés aux examens invasifs éventuels (SEEG) : infection, hémorragie (expliqués en détail avant la procédure).',
      'Risques liés au test de Wada : réaction allergique au produit de contraste, accident vasculaire (exceptionnel).',
    ],
    indications: [
      'Épilepsie pharmaco-résistante (échec d\'au moins 2 traitements antiépileptiques bien conduits)',
      'Crises épileptiques invalidantes altérant la qualité de vie',
      'Épilepsie temporale mésiale avec sclérose hippocampique',
      'Épilepsie lésionnelle (tumeur, malformation corticale, cavernome)',
      'Épilepsie partielle avec foyer supposé unique et opérable',
    ],
  },
  {
    slug: 'monitoring-neurophysiologique-per-operatoire',
    title: 'Monitoring neurophysiologique per-opératoire',
    shortTitle: 'Monitoring per-opératoire',
    description:
      "Surveillance en temps réel de la fonction nerveuse pendant les interventions chirurgicales à risque neurologique, permettant de prévenir les lésions nerveuses irréversibles.",
    fullDescription: `Le monitoring neurophysiologique per-opératoire (MNPO) consiste en la surveillance continue et en temps réel des fonctions nerveuses pendant une intervention chirurgicale. L'objectif est de détecter précocement toute souffrance du système nerveux (cerveau, moelle épinière, nerfs crâniens ou périphériques) afin d'alerter le chirurgien et de permettre une modification immédiate du geste opératoire avant la survenue d'une lésion irréversible.

Les techniques utilisées incluent les potentiels évoqués somesthésiques (PES), les potentiels évoqués moteurs (PEM) par stimulation magnétique ou électrique transcrânienne, l'électromyographie continue (EMG free-running), la stimulation nerveuse directe et l'électrocorticographie. Le choix des techniques dépend du type de chirurgie et des structures nerveuses à risque.

Le monitoring per-opératoire a considérablement amélioré la sécurité des chirurgies rachidiennes (scoliose, hernie discale, tumeurs médullaires), des chirurgies de la base du crâne, des chirurgies thyroïdiennes (protection du nerf récurrent) et des interventions sur les nerfs périphériques. La présence d'un neurophysiologiste en salle d'opération est devenue un standard de qualité dans de nombreuses procédures à risque neurologique.

La Clinique Pasteur de Tunis propose un service de monitoring per-opératoire assuré par des neurophysiologistes expérimentés, travaillant en étroite collaboration avec les équipes chirurgicales et anesthésiques pour optimiser la sécurité des patients.`,
    preparation: [
      'Le monitoring est planifié en amont par le chirurgien en concertation avec le neurophysiologiste.',
      'Un bilan neurophysiologique pré-opératoire (PES, PEM, EMG) est souvent réalisé comme référence.',
      'Le patient est informé de la surveillance neurophysiologique lors de la consultation pré-opératoire.',
      'Le protocole anesthésique est adapté en concertation avec l\'anesthésiste pour permettre le monitoring (éviter les curares prolongés, adapter les agents halogénés).',
      'Le neurophysiologiste prend connaissance du dossier médical et du type de chirurgie prévue.',
    ],
    deroulement: [
      'Installation des électrodes de stimulation et d\'enregistrement après l\'induction anesthésique.',
      'Enregistrement des valeurs de référence (baseline) avant le début du geste chirurgical.',
      'Surveillance continue des paramètres neurophysiologiques tout au long de l\'intervention.',
      'Communication en temps réel avec le chirurgien et l\'anesthésiste en cas de modification significative des signaux.',
      'En cas d\'alerte (diminution d\'amplitude > 50 % ou augmentation de latence > 10 %), le chirurgien est immédiatement prévenu.',
      'Ajustement des techniques de monitoring en fonction des temps opératoires et des structures à risque.',
      'Vérification des paramètres en fin d\'intervention avant la fermeture.',
      'Rédaction d\'un compte-rendu de monitoring détaillant les événements significatifs.',
    ],
    duree: 'Durée de l\'intervention chirurgicale (de 2 à 8 heures selon le type de chirurgie)',
    resultats:
      'Un compte-rendu de monitoring est rédigé et intégré au dossier opératoire. Il détaille les techniques utilisées, les valeurs de référence, les éventuelles alertes et les mesures correctives prises. Ce document est transmis au chirurgien et à l\'anesthésiste.',
    risques: [
      'Irritation cutanée aux points de fixation des électrodes.',
      'Brûlure superficielle exceptionnelle au niveau des électrodes de stimulation.',
      'Morsure de langue possible lors de la stimulation transcrânienne motrice (protège-dents mis en place systématiquement).',
    ],
    indications: [
      'Chirurgie de la scoliose et des déformations rachidiennes',
      'Chirurgie des tumeurs médullaires intracanalaires',
      'Chirurgie des tumeurs de la base du crâne',
      'Chirurgie de la fosse postérieure (neurinome de l\'acoustique)',
      'Chirurgie thyroïdienne et parathyroïdienne (monitoring du nerf récurrent)',
      'Chirurgie carotidienne (endartériectomie)',
      'Chirurgie des anévrismes intracrâniens',
      'Chirurgie des nerfs périphériques',
      'Chirurgie de l\'épilepsie (cartographie corticale)',
    ],
  },
  {
    slug: 'etude-jonction-neuromusculaire',
    title: 'Étude de la jonction neuromusculaire',
    shortTitle: 'Jonction neuromusculaire',
    description:
      "Exploration de la transmission de l'influx nerveux entre le nerf et le muscle, essentielle au diagnostic de la myasthénie et des syndromes myasthéniques.",
    fullDescription: `L'étude de la jonction neuromusculaire est un examen neurophysiologique spécialisé qui évalue la transmission synaptique entre le nerf moteur et le muscle. Elle repose principalement sur deux techniques : la stimulation nerveuse répétitive (SNR) et, dans certains cas, l'EMG de fibre unique (single fiber EMG).

La stimulation nerveuse répétitive consiste à stimuler un nerf moteur à basse fréquence (3 Hz) et à haute fréquence (20-50 Hz) tout en enregistrant la réponse musculaire. Dans la myasthénie, maladie auto-immune de la jonction neuromusculaire, on observe un décrément caractéristique (diminution progressive de l'amplitude des réponses) à la stimulation à basse fréquence. À l'inverse, dans le syndrome de Lambert-Eaton, on observe un incrément (augmentation de l'amplitude) à la stimulation à haute fréquence.

L'EMG de fibre unique est la technique la plus sensible pour détecter un dysfonctionnement de la jonction neuromusculaire. Elle mesure le jitter (variabilité de la latence de transmission neuromusculaire entre deux fibres musculaires d'une même unité motrice). Un jitter augmenté est un marqueur très précoce de myasthénie, même lorsque la stimulation répétitive est encore normale.

La Clinique Pasteur de Tunis propose l'ensemble des techniques d'exploration de la jonction neuromusculaire, permettant un diagnostic précoce et précis de la myasthénie et des syndromes apparentés.`,
    preparation: [
      'Signaler au médecin tous les médicaments en cours, en particulier les anticholinestérasiques (pyridostigmine/Mestinon) : leur arrêt 12 à 24 heures avant l\'examen peut être demandé par le médecin pour augmenter la sensibilité du test.',
      'Ne pas arrêter les médicaments sans l\'accord explicite du médecin.',
      'Éviter les efforts physiques intenses dans les heures précédant l\'examen.',
      'L\'examen ne nécessite pas d\'être à jeun.',
      'Garder les membres au chaud.',
      'Apporter le bilan biologique récent (anticorps anti-récepteurs de l\'acétylcholine, anti-MuSK).',
    ],
    deroulement: [
      'Installation du patient confortablement, le membre à étudier bien positionné et immobile.',
      'Pose d\'électrodes de surface sur le muscle cible (habituellement le muscle nasalis, orbiculaire de l\'œil, trapèze ou abducteur du petit doigt).',
      'Stimulation nerveuse répétitive à basse fréquence (3 Hz) : trains de 5 à 10 stimulations.',
      'Analyse du décrément : recherche d\'une diminution de l\'amplitude supérieure à 10 % entre la 1re et la 4e-5e réponse.',
      'Stimulation à haute fréquence (20-50 Hz) ou après effort maximal volontaire de 10 secondes (facilitation post-exercice).',
      'Recherche d\'un incrément post-exercice (syndrome de Lambert-Eaton).',
      'Test de fatigue : stimulation après un effort prolongé de 1 minute (épuisement post-exercice).',
      'Si nécessaire, EMG de fibre unique pour mesurer le jitter neuromusculaire.',
    ],
    duree: '30 à 60 minutes',
    resultats:
      'Les résultats sont interprétés immédiatement par le neurophysiologiste. Un compte-rendu détaillé précisant la présence ou l\'absence de décrément/incrément et la valeur du jitter est disponible sous 24 à 48 heures.',
    risques: [
      'Sensation désagréable lors des stimulations électriques répétitives.',
      'En cas d\'EMG de fibre unique : légère douleur lors de l\'insertion de l\'aiguille.',
    ],
    indications: [
      'Suspicion de myasthénie (ptosis, diplopie, fatigabilité musculaire)',
      'Myasthénie connue : évaluation de la sévérité et suivi thérapeutique',
      'Suspicion de syndrome de Lambert-Eaton',
      'Botulisme',
      'Intoxications aux organophosphorés',
      'Syndromes myasthéniques congénitaux',
      'Fatigabilité musculaire inexpliquée',
      'Diagnostic différentiel entre myasthénie et myopathie',
    ],
  },
];
