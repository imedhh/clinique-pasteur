export interface ExamenNeurophysiologique {
  slug: string;
  title: string;
  shortTitle: string;
  image?: string;
  description: string;
  fullDescription: string;
  preparation: string[];
  deroulement: string[];
  duree: string;
  resultats: string;
  risques: string[];
  indications: { label: string; explication: string }[];
}

export const examensNeurophysiologiques: ExamenNeurophysiologique[] = [
  {
    slug: 'eeg-standard',
    title: 'Électroencéphalogramme (EEG) standard',
    shortTitle: 'EEG standard',
    image: '/images/fiches/neuro-eeg-standard.webp',
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
      { label: 'Suspicion ou suivi d\'épilepsie', explication: `Cet examen aide à savoir si des crises pourraient être d'origine épileptique et à surveiller l'évolution d'une épilepsie déjà connue.` },
      { label: 'Crises convulsives fébriles chez l\'enfant', explication: `Il est proposé lorsqu'un enfant fait des convulsions au cours de fortes fièvres, pour mieux comprendre ces épisodes et rassurer les parents.` },
      { label: 'Malaises avec perte de connaissance inexpliquée', explication: `Après un malaise avec perte de connaissance sans cause évidente, l'examen recherche une éventuelle origine cérébrale.` },
      { label: 'Troubles de la conscience ou confusion mentale', explication: `Il est utile pour explorer des états de confusion ou une conscience altérée dont la cause n'est pas encore identifiée.` },
      { label: 'Céphalées chroniques ou inhabituelles', explication: `Il peut être demandé face à des maux de tête persistants ou d'apparition inhabituelle, afin d'écarter une cause neurologique.` },
      { label: 'Troubles du comportement ou troubles cognitifs', explication: `Il apporte des informations lorsque des changements de comportement ou des difficultés de mémoire et de raisonnement inquiètent.` },
      { label: 'Encéphalopathies métaboliques ou toxiques', explication: `Il aide le médecin à évaluer le retentissement sur le cerveau de certains déséquilibres du métabolisme ou d'intoxications.` },
      { label: 'Suivi de traitements antiépileptiques', explication: `Il permet de vérifier l'effet d'un traitement contre l'épilepsie et d'ajuster la prise en charge au fil du temps.` },
      { label: 'Bilan pré-opératoire neurochirurgical', explication: `Il fait partie des examens préparatoires avant une intervention sur le cerveau, pour évaluer son fonctionnement.` },
    ],
  },
  {
    slug: 'eeg-sommeil',
    title: 'Électroencéphalogramme de sommeil',
    shortTitle: 'EEG de sommeil',
    image: '/images/fiches/neuro-eeg-sommeil.webp',
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
      { label: 'EEG de veille normal malgré une forte suspicion d\'épilepsie', explication: `Il est proposé quand un premier examen à l'éveil n'a rien montré alors que les signes cliniques font fortement penser à une épilepsie, certaines anomalies n'apparaissant que pendant le sommeil.` },
      { label: 'Épilepsies focales bénignes de l\'enfant (pointes centro-temporales)', explication: `Il aide à repérer ce type d'épilepsie de l'enfant dont les anomalies sont surtout visibles durant le sommeil.` },
      { label: 'Épilepsie-absence de l\'enfant', explication: `Il contribue à confirmer les brèves absences que peut présenter un enfant et à orienter la prise en charge.` },
      { label: 'Syndrome de Landau-Kleffner', explication: `Il est utile lorsque des troubles du langage chez l'enfant font suspecter cette forme particulière d'épilepsie liée au sommeil.` },
      { label: 'Pointes-ondes continues du sommeil (POCS)', explication: `Il permet de rechercher une activité électrique anormale très fréquente pendant le sommeil, qui peut retentir sur les apprentissages de l'enfant.` },
      { label: 'Épilepsies du lobe temporal', explication: `Il aide à mettre en évidence des anomalies de cette région du cerveau qui se révèlent souvent au cours du sommeil.` },
      { label: 'Troubles paroxystiques du sommeil à différencier de l\'épilepsie', explication: `Il aide à distinguer une véritable crise d'épilepsie d'autres phénomènes survenant pendant le sommeil.` },
      { label: 'Parasomnies nécessitant un diagnostic différentiel avec l\'épilepsie', explication: `Il est demandé pour faire la différence entre des comportements anormaux du sommeil et des crises d'épilepsie.` },
      { label: 'Suivi post-thérapeutique de certaines épilepsies', explication: `Il permet de contrôler l'évolution et l'effet du traitement dans certaines épilepsies liées au sommeil.` },
    ],
  },
  {
    slug: 'video-eeg-prolonge',
    title: 'Vidéo-EEG prolongé (monitoring continu)',
    shortTitle: 'Vidéo-EEG',
    image: '/images/fiches/neuro-video-eeg-prolonge.webp',
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
      { label: 'Bilan pré-chirurgical de l\'épilepsie pharmaco-résistante', explication: `Il est réalisé quand les médicaments ne suffisent pas à contrôler l'épilepsie et qu'une opération est envisagée, pour bien préparer cette décision.` },
      { label: 'Diagnostic différentiel entre crises épileptiques et crises psychogènes non épileptiques', explication: `En filmant les crises tout en enregistrant l'activité du cerveau, il aide à distinguer une véritable crise d'épilepsie d'un malaise d'une autre nature.` },
      { label: 'Classification précise du type d\'épilepsie', explication: `Il permet de préciser la forme exacte d'épilepsie afin de choisir le traitement le mieux adapté.` },
      { label: 'Localisation du foyer épileptogène avant chirurgie', explication: `Il aide à repérer la zone du cerveau d'où partent les crises, information essentielle avant une intervention.` },
      { label: 'Quantification des crises et des anomalies intercritiques', explication: `Il permet de compter et de mieux caractériser les crises et les anomalies observées entre les crises.` },
      { label: 'Évaluation de l\'efficacité d\'un traitement antiépileptique', explication: `Il aide à vérifier si un traitement fonctionne bien en observant les crises et l'activité cérébrale sur une période prolongée.` },
      { label: 'Événements paroxystiques de nature indéterminée', explication: `Il est utile face à des épisodes soudains et répétés dont la cause reste à préciser.` },
    ],
  },
  {
    slug: 'emg-detection',
    title: 'Électromyogramme (EMG) de détection',
    shortTitle: 'EMG de détection',
    image: '/images/fiches/neuro-emg-detection.webp',
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
      { label: 'Suspicion de maladie du motoneurone (sclérose latérale amyotrophique)', explication: `Il aide le médecin à explorer une maladie touchant les nerfs qui commandent les muscles lorsque des signes évocateurs apparaissent.` },
      { label: 'Radiculopathies cervicales ou lombaires (sciatique, cruralgie)', explication: `Il est utile face à une douleur irradiant dans le bras ou la jambe, pour préciser si une racine nerveuse est comprimée.` },
      { label: 'Neuropathies périphériques (diabétique, alcoolique, inflammatoire)', explication: `Il permet d'explorer une atteinte des nerfs, par exemple liée au diabète, et d'en apprécier l'importance.` },
      { label: 'Syndrome du canal carpien et autres syndromes canalaires', explication: `Il aide à confirmer une compression d'un nerf, comme au poignet, à l'origine de fourmillements ou d'engourdissements.` },
      { label: 'Myopathies et dystrophies musculaires', explication: `Il contribue à distinguer une maladie du muscle lui-même d'une atteinte du nerf qui le commande.` },
      { label: 'Myosites et polymyosites', explication: `Il aide à explorer une inflammation des muscles responsable d'une faiblesse ou de douleurs.` },
      { label: 'Faiblesse musculaire inexpliquée', explication: `Il est proposé quand une perte de force sans cause évidente nécessite d'être explorée.` },
      { label: 'Amyotrophie localisée ou diffuse', explication: `Il aide à comprendre l'origine d'une fonte musculaire, qu'elle touche une zone précise ou l'ensemble du corps.` },
      { label: 'Fasciculations ou crampes musculaires persistantes', explication: `Il est utile face à des secousses ou des crampes musculaires répétées et gênantes.` },
    ],
  },
  {
    slug: 'vitesses-conduction-nerveuse',
    title: 'Étude des vitesses de conduction nerveuse (VCN)',
    shortTitle: 'Conduction nerveuse (VCN)',
    image: '/images/fiches/neuro-vitesses-conduction-nerveuse.webp',
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
      { label: 'Syndrome du canal carpien', explication: `Il aide à confirmer la compression du nerf au niveau du poignet, souvent responsable de fourmillements dans la main.` },
      { label: 'Syndrome du canal de Guyon (nerf ulnaire au poignet)', explication: `Il explore une compression d'un autre nerf au poignet pouvant gêner certains doigts.` },
      { label: 'Compression du nerf ulnaire au coude', explication: `Il est utile face à des fourmillements ou une faiblesse liés à une compression du nerf au niveau du coude.` },
      { label: 'Polyneuropathies (diabétique, alcoolique, toxique, inflammatoire)', explication: `Il permet d'évaluer une atteinte diffuse des nerfs, par exemple liée au diabète, et d'en préciser la nature.` },
      { label: 'Polyradiculonévrite aiguë (syndrome de Guillain-Barré)', explication: `Il aide à reconnaître rapidement cette atteinte des nerfs d'installation brutale, qui nécessite une prise en charge urgente.` },
      { label: 'Polyradiculonévrite chronique (PIDC)', explication: `Il contribue au diagnostic d'une atteinte des nerfs évoluant sur une longue durée et pouvant bénéficier d'un traitement.` },
      { label: 'Mononeuropathies et multinévrites', explication: `Il aide à explorer l'atteinte d'un ou de plusieurs nerfs distincts pour en comprendre l'origine.` },
      { label: 'Neuropathies héréditaires (maladie de Charcot-Marie-Tooth)', explication: `Il apporte des éléments utiles lorsqu'une maladie familiale des nerfs est suspectée.` },
      { label: 'Surveillance de traitements neurotoxiques (chimiothérapie)', explication: `Il permet de surveiller les nerfs chez des patients recevant des traitements pouvant les affecter.` },
    ],
  },
  {
    slug: 'potentiels-evoques-visuels',
    title: 'Potentiels évoqués visuels (PEV)',
    shortTitle: 'PEV',
    image: '/images/fiches/neuro-potentiels-evoques-visuels.webp',
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
      { label: 'Suspicion de sclérose en plaques (recherche de névrite optique infraclinique)', explication: `Il aide à détecter une atteinte du nerf optique, parfois sans symptôme, dans le cadre du bilan d'une sclérose en plaques.` },
      { label: 'Névrite optique rétrobulbaire', explication: `Il est utile pour explorer une inflammation du nerf optique responsable d'une baisse de vision.` },
      { label: 'Neuropathie optique (compressive, toxique, ischémique, héréditaire)', explication: `Il permet d'évaluer le fonctionnement du nerf optique lorsqu'il est atteint pour différentes raisons.` },
      { label: 'Baisse d\'acuité visuelle inexpliquée', explication: `Il aide à préciser l'origine d'une diminution de la vision dont la cause n'est pas encore établie.` },
      { label: 'Tumeurs comprimant les voies visuelles (adénome hypophysaire, méningiome)', explication: `Il apporte des informations quand une masse peut appuyer sur les voies de la vision.` },
      { label: 'Surveillance de pathologies démyélinisantes', explication: `Il permet de suivre l'évolution de maladies qui touchent la gaine protectrice des nerfs, dont ceux de la vision.` },
      { label: 'Évaluation fonctionnelle des voies visuelles chez les enfants non coopérants', explication: `Il offre un moyen d'évaluer la vision de façon objective chez un enfant qui ne peut pas coopérer à un examen classique.` },
      { label: 'Bilan de neurosarcoïdose ou de maladie de Behçet avec atteinte neurologique', explication: `Il aide à explorer le retentissement de ces maladies inflammatoires lorsqu'elles touchent le système nerveux.` },
    ],
  },
  {
    slug: 'potentiels-evoques-auditifs',
    title: 'Potentiels évoqués auditifs (PEA)',
    shortTitle: 'PEA',
    image: '/images/fiches/neuro-potentiels-evoques-auditifs.webp',
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
      { label: 'Suspicion de neurinome de l\'acoustique (schwannome vestibulaire)', explication: `Il aide à explorer une tumeur bénigne du nerf de l'audition lorsqu'elle est suspectée.` },
      { label: 'Surdité de perception unilatérale ou asymétrique', explication: `Il est utile face à une baisse d'audition touchant surtout une oreille, pour en préciser l'origine.` },
      { label: 'Dépistage de la surdité néonatale', explication: `Il permet de vérifier l'audition d'un nouveau-né de façon objective, sans qu'il ait besoin de coopérer.` },
      { label: 'Sclérose en plaques (recherche d\'atteinte infraclinique du tronc cérébral)', explication: `Il aide à repérer une atteinte discrète des voies de l'audition dans le cadre du bilan d'une sclérose en plaques.` },
      { label: 'Lésions du tronc cérébral (vasculaires, tumorales, inflammatoires)', explication: `Il apporte des informations sur le fonctionnement d'une région profonde du cerveau lorsqu'elle peut être atteinte.` },
      { label: 'Surveillance en réanimation (coma, mort encéphalique)', explication: `Il aide l'équipe médicale à évaluer l'état du cerveau chez des patients en situation critique.` },
      { label: 'Évaluation objective de l\'audition chez les patients non coopérants', explication: `Il offre un moyen fiable de tester l'audition chez une personne qui ne peut pas répondre aux tests habituels.` },
      { label: 'Acouphènes unilatéraux nécessitant une exploration', explication: `Il est proposé face à des bruits perçus dans une seule oreille pour en rechercher la cause.` },
    ],
  },
  {
    slug: 'potentiels-evoques-somesthesiques',
    title: 'Potentiels évoqués somesthésiques (PES)',
    shortTitle: 'PES',
    image: '/images/fiches/neuro-potentiels-evoques-somesthesiques.webp',
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
      { label: 'Sclérose en plaques (recherche d\'atteinte infraclinique des voies sensitives)', explication: `Il aide à repérer une atteinte discrète des voies de la sensibilité dans le cadre du bilan d'une sclérose en plaques.` },
      { label: 'Myélopathie cervicarthrosique (compression médullaire cervicale)', explication: `Il est utile lorsqu'une usure des vertèbres du cou comprime la moelle épinière, pour en évaluer le retentissement.` },
      { label: 'Compression médullaire d\'autre origine (tumorale, hernie discale)', explication: `Il permet d'apprécier le fonctionnement de la moelle épinière lorsqu'elle est comprimée par une hernie ou une masse.` },
      { label: 'Lésions médullaires traumatiques', explication: `Il aide à évaluer les voies de la sensibilité après un traumatisme de la moelle épinière.` },
      { label: 'Syndrome de la queue de cheval', explication: `Il est utile pour explorer l'atteinte des nerfs situés au bas de la colonne, à l'origine de troubles sensitifs.` },
      { label: 'Atteintes du tronc cérébral', explication: `Il apporte des informations sur les voies de la sensibilité passant par une région profonde du cerveau.` },
      { label: 'Monitoring per-opératoire lors de chirurgies rachidiennes', explication: `Il permet de surveiller la moelle épinière en temps réel pendant une opération de la colonne, pour la protéger.` },
      { label: 'Évaluation pronostique dans les comas et les traumatismes crâniens graves', explication: `Il aide l'équipe médicale à évaluer l'état du cerveau chez des patients gravement atteints.` },
      { label: 'Myélites inflammatoires ou infectieuses', explication: `Il est utile pour explorer une inflammation ou une infection de la moelle épinière.` },
    ],
  },
  {
    slug: 'potentiels-evoques-moteurs',
    title: 'Potentiels évoqués moteurs (PEM)',
    shortTitle: 'PEM',
    image: '/images/fiches/neuro-potentiels-evoques-moteurs.webp',
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
      { label: 'Sclérose en plaques (évaluation de l\'atteinte de la voie pyramidale)', explication: `Il aide à évaluer les voies qui commandent les mouvements dans le cadre du bilan d'une sclérose en plaques.` },
      { label: 'Myélopathie cervicarthrosique', explication: `Il est utile lorsqu'une usure des vertèbres du cou comprime la moelle épinière et gêne la commande des mouvements.` },
      { label: 'Sclérose latérale amyotrophique (SLA) et maladies du motoneurone', explication: `Il apporte des éléments pour explorer les maladies touchant les nerfs qui commandent les muscles.` },
      { label: 'Compression médullaire', explication: `Il permet d'apprécier le retentissement d'une compression de la moelle épinière sur la motricité.` },
      { label: 'Paraparésie ou tétraparésie d\'origine indéterminée', explication: `Il aide à comprendre l'origine d'une faiblesse touchant les membres inférieurs ou l'ensemble des membres.` },
      { label: 'Déficit moteur central inexpliqué', explication: `Il est proposé face à une perte de force liée au système nerveux central dont la cause reste à préciser.` },
      { label: 'Suivi post-thérapeutique des pathologies de la voie motrice', explication: `Il permet de suivre l'évolution et l'effet des traitements dans les maladies affectant la commande des mouvements.` },
      { label: 'Distinction entre atteinte centrale et périphérique de la voie motrice', explication: `Il aide à savoir si une faiblesse provient du cerveau et de la moelle ou plutôt des nerfs périphériques.` },
    ],
  },
  {
    slug: 'bilan-pre-chirurgical-epilepsie',
    title: "Bilan pré-chirurgical de l'épilepsie",
    shortTitle: 'Bilan pré-chirurgical épilepsie',
    image: '/images/fiches/neuro-bilan-pre-chirurgical-epilepsie.webp',
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
      { label: 'Épilepsie pharmaco-résistante (échec d\'au moins 2 traitements antiépileptiques bien conduits)', explication: `Ce bilan s'adresse aux personnes dont l'épilepsie continue malgré plusieurs traitements bien suivis, pour envisager d'autres solutions.` },
      { label: 'Crises épileptiques invalidantes altérant la qualité de vie', explication: `Il est proposé lorsque les crises retentissent fortement sur le quotidien et justifient une évaluation approfondie.` },
      { label: 'Épilepsie temporale mésiale avec sclérose hippocampique', explication: `Il aide à préciser ce type d'épilepsie fréquent, souvent accessible à une intervention.` },
      { label: 'Épilepsie lésionnelle (tumeur, malformation corticale, cavernome)', explication: `Il est utile quand les crises sont liées à une anomalie visible du cerveau pouvant être opérée.` },
      { label: 'Épilepsie partielle avec foyer supposé unique et opérable', explication: `Il permet de vérifier que les crises partent d'une seule zone du cerveau qui pourrait être retirée en toute sécurité.` },
    ],
  },
  {
    slug: 'monitoring-neurophysiologique-per-operatoire',
    title: 'Monitoring neurophysiologique per-opératoire',
    shortTitle: 'Monitoring per-opératoire',
    image: '/images/fiches/neuro-monitoring-neurophysiologique-per-operatoire.webp',
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
      { label: 'Chirurgie de la scoliose et des déformations rachidiennes', explication: `Il permet de surveiller la moelle épinière pendant la correction d'une déformation de la colonne, pour éviter toute lésion.` },
      { label: 'Chirurgie des tumeurs médullaires intracanalaires', explication: `Il aide à protéger la moelle épinière lors du retrait d'une tumeur située dans le canal de la colonne.` },
      { label: 'Chirurgie des tumeurs de la base du crâne', explication: `Il surveille les nerfs proches lors d'une opération délicate à la base du crâne.` },
      { label: 'Chirurgie de la fosse postérieure (neurinome de l\'acoustique)', explication: `Il aide à préserver les nerfs de l'audition et du visage pendant l'ablation d'une tumeur.` },
      { label: 'Chirurgie thyroïdienne et parathyroïdienne (monitoring du nerf récurrent)', explication: `Il permet de surveiller le nerf de la voix pendant une opération de la thyroïde, pour éviter une atteinte des cordes vocales.` },
      { label: 'Chirurgie carotidienne (endartériectomie)', explication: `Il aide à surveiller le cerveau pendant une intervention sur l'artère du cou qui l'irrigue.` },
      { label: 'Chirurgie des anévrismes intracrâniens', explication: `Il surveille en temps réel le fonctionnement du cerveau lors du traitement d'une dilatation d'une artère cérébrale.` },
      { label: 'Chirurgie des nerfs périphériques', explication: `Il aide à protéger et à repérer les nerfs pendant une intervention qui les concerne directement.` },
      { label: 'Chirurgie de l\'épilepsie (cartographie corticale)', explication: `Il aide à repérer les zones importantes du cerveau à préserver lors d'une opération de l'épilepsie.` },
    ],
  },
  {
    slug: 'etude-jonction-neuromusculaire',
    title: 'Étude de la jonction neuromusculaire',
    shortTitle: 'Jonction neuromusculaire',
    image: '/images/fiches/neuro-etude-jonction-neuromusculaire.webp',
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
      { label: 'Suspicion de myasthénie (ptosis, diplopie, fatigabilité musculaire)', explication: `Il aide à explorer cette maladie lorsqu'apparaissent une paupière tombante, une vision double ou une fatigue musculaire inhabituelle.` },
      { label: 'Myasthénie connue : évaluation de la sévérité et suivi thérapeutique', explication: `Il permet de mesurer l'importance de la maladie et de suivre l'effet du traitement dans le temps.` },
      { label: 'Suspicion de syndrome de Lambert-Eaton', explication: `Il aide à reconnaître cette maladie proche de la myasthénie, qui se manifeste par une faiblesse des muscles.` },
      { label: 'Botulisme', explication: `Il apporte des éléments utiles pour explorer les troubles musculaires liés à cette intoxication rare.` },
      { label: 'Intoxications aux organophosphorés', explication: `Il aide à évaluer le retentissement de ces substances toxiques sur la transmission entre nerf et muscle.` },
      { label: 'Syndromes myasthéniques congénitaux', explication: `Il est utile pour explorer des formes de faiblesse musculaire présentes depuis la naissance.` },
      { label: 'Fatigabilité musculaire inexpliquée', explication: `Il est proposé quand une fatigue musculaire anormale nécessite d'être explorée.` },
      { label: 'Diagnostic différentiel entre myasthénie et myopathie', explication: `Il aide à distinguer un problème de transmission entre nerf et muscle d'une maladie du muscle lui-même.` },
    ],
  },
];
