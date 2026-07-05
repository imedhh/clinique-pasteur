export const prestationsElectrophysiologie = [
  {
    slug: 'exploration-electrophysiologique',
    title: 'Exploration électrophysiologique endocavitaire',
    shortTitle: 'Exploration électrophysiologique',
    description: 'Examen de référence pour analyser le circuit électrique du cœur de l\'intérieur et identifier précisément l\'origine d\'un trouble du rythme.',
    fullDescription: `L'exploration électrophysiologique endocavitaire est l'examen le plus précis pour étudier l'activité électrique du cœur. Elle consiste à introduire de fines sondes par une veine, généralement au pli de l'aine, et à les positionner à l'intérieur des cavités cardiaques afin d'enregistrer les signaux électriques directement à leur source.

Cet examen permet de comprendre l'origine exacte de palpitations, de malaises ou de syncopes inexpliqués, et de caractériser précisément un trouble du rythme : localisation du circuit anormal, mécanisme de l'arythmie, réponse à la stimulation. Le médecin peut ainsi reproduire l'arythmie dans des conditions contrôlées pour mieux l'analyser.

L'exploration électrophysiologique constitue souvent la première étape d'un traitement par ablation : lorsque le circuit responsable de l'arythmie est identifié, il peut être traité dans le même temps, évitant une seconde procédure.

À la Clinique Pasteur Tunis, cet examen est réalisé dans une salle d'électrophysiologie totalement équipée et dédiée à la rythmologie, par une équipe spécialisée qui accompagne le patient à chaque étape.`,
    image: '/images/cardiovasculaire.webp',
    indications: [
      'Palpitations récidivantes inexpliquées',
      'Syncopes ou malaises suspects d\'origine rythmique',
      'Caractérisation d\'une tachycardie documentée sur un ECG',
      'Évaluation du risque rythmique dans certaines cardiopathies',
      'Bilan avant une éventuelle ablation',
    ],
    preparation: [
      'Bilan cardiologique avec ECG et échocardiographie',
      'Bilan sanguin incluant la coagulation',
      'Arrêt éventuel de certains médicaments antiarythmiques selon les consignes du médecin',
      'Être à jeun 6 heures avant l\'examen',
      'Consultation d\'anesthésie si une sédation est prévue',
    ],
    deroulement: [
      'Installation en salle d\'électrophysiologie et anesthésie locale au pli de l\'aine',
      'Introduction des sondes d\'enregistrement par voie veineuse',
      'Positionnement des sondes dans le cœur sous contrôle radiologique',
      'Enregistrement des signaux électriques et tests de stimulation',
      'Analyse du mécanisme de l\'arythmie, avec traitement par ablation dans le même temps si indiqué',
      'Retrait des sondes et compression du point de ponction',
    ],
    duree: '1 à 2 heures',
    resultats: 'Les conclusions de l\'examen sont disponibles immédiatement et expliquées au patient. Elles permettent de poser un diagnostic précis et de définir la meilleure stratégie de traitement : simple surveillance, traitement médicamenteux, ablation ou implantation d\'un dispositif.',
    risques: [
      'Examen bien toléré, réalisé sous anesthésie locale',
      'Petit hématome possible au point de ponction, sans gravité',
      'Complications sérieuses très rares, prévenues par l\'expérience de l\'équipe et la surveillance continue',
    ],
  },
  {
    slug: 'ablation-radiofrequence',
    title: 'Ablation par radiofréquence des arythmies',
    shortTitle: 'Ablation par radiofréquence',
    description: 'Traitement curatif des troubles du rythme cardiaque qui neutralise, par un courant de radiofréquence, la zone du cœur responsable de l\'arythmie.',
    fullDescription: `L'ablation par radiofréquence est un traitement moderne et souvent définitif des troubles du rythme cardiaque. Elle consiste à repérer avec précision la zone du cœur responsable de l'arythmie, puis à la neutraliser en délivrant localement une énergie de radiofréquence à l'extrémité d'un cathéter, sans aucune incision chirurgicale.

La procédure débute par une exploration électrophysiologique qui cartographie l'activité électrique du cœur et localise le circuit anormal. Le cathéter d'ablation est ensuite positionné exactement sur la cible, et l'application de radiofréquence crée une minuscule zone de tissu inactivé qui interrompt le circuit de l'arythmie.

Cette technique s'applique à de nombreux troubles du rythme : tachycardies jonctionnelles, flutter auriculaire, fibrillation auriculaire, certaines extrasystoles et tachycardies ventriculaires. Dans de nombreux cas, elle permet de guérir l'arythmie et d'interrompre les traitements médicamenteux au long cours.

À la Clinique Pasteur Tunis, les ablations sont réalisées dans une salle d'électrophysiologie dédiée, équipée d'un système de cartographie tridimensionnelle des arythmies et de cathéters de dernière génération, par une équipe spécialisée en rythmologie interventionnelle.`,
    image: '/images/cardiovasculaire.webp',
    indications: [
      'Tachycardies jonctionnelles récidivantes',
      'Flutter auriculaire',
      'Fibrillation auriculaire symptomatique',
      'Extrasystoles ventriculaires nombreuses et gênantes',
      'Arythmies mal contrôlées par les médicaments ou chez des patients souhaitant s\'en passer',
    ],
    preparation: [
      'Bilan cardiologique complet avec documentation de l\'arythmie',
      'Bilan sanguin incluant la coagulation',
      'Adaptation des traitements antiarythmiques et anticoagulants selon prescription',
      'Être à jeun 6 heures avant la procédure',
      'Consultation d\'anesthésie',
    ],
    deroulement: [
      'Installation en salle d\'électrophysiologie, anesthésie locale avec sédation adaptée',
      'Introduction des cathéters par voie veineuse au pli de l\'aine',
      'Cartographie électrique du cœur et localisation précise du circuit anormal',
      'Application de l\'énergie de radiofréquence sur la zone cible',
      'Vérification de la disparition de l\'arythmie par tests de stimulation',
      'Retrait des cathéters et surveillance en unité spécialisée',
    ],
    duree: '2 à 4 heures selon le type d\'arythmie',
    resultats: 'Dans la majorité des cas, l\'ablation permet une nette amélioration voire une disparition complète de l\'arythmie. La sortie a lieu généralement après 24 à 48 heures de surveillance, avec une reprise rapide des activités quotidiennes et un suivi rythmologique programmé.',
    risques: [
      'Hématome au point de ponction, le plus souvent bénin',
      'Récidive possible de l\'arythmie, pouvant justifier une seconde procédure',
      'Complications sérieuses rares, prévenues par le monitoring continu et l\'expérience de l\'équipe',
    ],
  },
  {
    slug: 'ablation-fibrillation-auriculaire',
    title: 'Ablation de la fibrillation auriculaire',
    shortTitle: 'Ablation de la FA',
    description: 'Traitement interventionnel de la fibrillation auriculaire par isolation des veines pulmonaires, pour restaurer un rythme cardiaque régulier.',
    fullDescription: `La fibrillation auriculaire est le trouble du rythme cardiaque le plus fréquent : les oreillettes du cœur battent de façon rapide et désordonnée, provoquant palpitations, essoufflement et fatigue. Lorsque les médicaments ne suffisent pas à contrôler l'arythmie, l'ablation constitue une option de traitement efficace.

Le principe repose sur l'isolation électrique des veines pulmonaires, zones d'où partent la plupart des impulsions anormales déclenchant la fibrillation. À l'aide de cathéters introduits par voie veineuse et guidés jusqu'à l'oreillette gauche, le rythmologue crée une barrière électrique autour de ces veines, empêchant les signaux anormaux d'envahir le cœur.

La procédure est guidée par un système de cartographie tridimensionnelle qui reconstruit l'anatomie de l'oreillette en temps réel et permet un traitement d'une grande précision. L'objectif est de restaurer durablement un rythme régulier, d'améliorer la qualité de vie et de réduire le recours aux médicaments antiarythmiques.

À la Clinique Pasteur Tunis, l'ablation de la fibrillation auriculaire est réalisée dans la salle d'électrophysiologie dédiée, l'un des centres de référence en rythmologie en Tunisie, avec une surveillance post-procédure attentive et un suivi personnalisé.`,
    image: '/images/cardiovasculaire.webp',
    indications: [
      'Fibrillation auriculaire symptomatique malgré un traitement médicamenteux',
      'Fibrillation auriculaire paroxystique récidivante',
      'Intolérance ou contre-indication aux médicaments antiarythmiques',
      'Fibrillation auriculaire retentissant sur la fonction cardiaque',
      'Patients souhaitant une stratégie de contrôle durable du rythme',
    ],
    preparation: [
      'Bilan cardiologique avec échocardiographie, incluant si besoin une échographie transœsophagienne',
      'Imagerie de l\'oreillette gauche (scanner cardiaque) pour planifier la procédure',
      'Gestion rigoureuse du traitement anticoagulant selon les consignes du rythmologue',
      'Être à jeun 6 heures avant la procédure',
      'Consultation d\'anesthésie',
    ],
    deroulement: [
      'Installation en salle d\'électrophysiologie sous sédation ou anesthésie générale',
      'Ponction veineuse au pli de l\'aine et montée des cathéters jusqu\'au cœur',
      'Accès à l\'oreillette gauche et reconstruction anatomique par cartographie 3D',
      'Isolation électrique des veines pulmonaires par applications d\'énergie',
      'Vérification de l\'efficacité de l\'isolation',
      'Retrait des cathéters et surveillance rythmique continue',
    ],
    duree: '2 à 4 heures',
    resultats: 'La plupart des patients constatent une nette diminution voire une disparition des épisodes de fibrillation, avec une amélioration durable de la qualité de vie. Un suivi rythmologique régulier est organisé, et le traitement anticoagulant est poursuivi selon le profil de chaque patient. Une seconde procédure est parfois nécessaire pour consolider le résultat.',
    risques: [
      'Hématome au point de ponction, généralement sans gravité',
      'Récidives possibles dans les premiers mois, souvent transitoires',
      'Complications sérieuses rares, prévenues par la cartographie 3D et l\'expérience de l\'équipe',
    ],
  },
  {
    slug: 'ablation-flutter-auriculaire',
    title: 'Ablation du flutter auriculaire',
    shortTitle: 'Ablation du flutter',
    description: 'Traitement de référence du flutter auriculaire, trouble du rythme organisé de l\'oreillette, avec d\'excellents résultats durables.',
    fullDescription: `Le flutter auriculaire est un trouble du rythme au cours duquel l'oreillette du cœur est parcourue par un circuit électrique anormal qui tourne en boucle, entraînant un rythme cardiaque rapide et régulier. Il provoque palpitations, essoufflement et fatigue, et peut retentir sur la fonction cardiaque s'il se prolonge.

L'ablation est aujourd'hui le traitement de référence du flutter commun. Elle consiste à interrompre le circuit de l'arythmie en créant une fine ligne de blocage électrique dans une zone bien identifiée de l'oreillette droite, appelée isthme cavo-tricuspide, à l'aide d'un cathéter de radiofréquence.

Il s'agit de l'une des procédures d'ablation les plus efficaces et les mieux codifiées de la rythmologie : le circuit du flutter étant bien connu et accessible, le traitement offre d'excellents résultats durables et permet le plus souvent d'éviter les médicaments antiarythmiques au long cours.

À la Clinique Pasteur Tunis, l'ablation du flutter est réalisée en salle d'électrophysiologie dédiée par une équipe expérimentée, dans le cadre d'une hospitalisation courte, avec un suivi rythmologique organisé après la procédure.`,
    image: '/images/cardiovasculaire.webp',
    indications: [
      'Flutter auriculaire symptomatique (palpitations, essoufflement, fatigue)',
      'Flutter récidivant malgré un traitement médicamenteux',
      'Flutter retentissant sur la fonction cardiaque',
      'Préférence du patient pour un traitement curatif plutôt que médicamenteux au long cours',
    ],
    preparation: [
      'ECG documentant le flutter et bilan cardiologique avec échocardiographie',
      'Bilan sanguin incluant la coagulation',
      'Gestion du traitement anticoagulant selon les consignes du médecin',
      'Être à jeun 6 heures avant la procédure',
    ],
    deroulement: [
      'Installation en salle d\'électrophysiologie, anesthésie locale et sédation légère',
      'Introduction des cathéters par la veine fémorale',
      'Repérage du circuit du flutter dans l\'oreillette droite',
      'Création de la ligne d\'ablation sur l\'isthme cavo-tricuspide',
      'Vérification du blocage complet du circuit',
      'Retrait des cathéters et surveillance',
    ],
    duree: '1 à 2 heures',
    resultats: 'L\'ablation du flutter offre des résultats durables dans la grande majorité des cas, avec disparition des palpitations et amélioration rapide du confort de vie. La sortie a lieu généralement après 24 heures de surveillance, avec un contrôle rythmologique programmé.',
    risques: [
      'Hématome au point de ponction, le plus souvent bénin',
      'Récidive rare, pouvant être traitée par une nouvelle procédure',
      'Complications sérieuses exceptionnelles dans cette procédure bien codifiée',
    ],
  },
  {
    slug: 'ablation-tachycardies-ventriculaires',
    title: 'Ablation des tachycardies ventriculaires',
    shortTitle: 'Ablation des TV',
    description: 'Traitement interventionnel spécialisé des troubles du rythme naissant dans les ventricules, guidé par cartographie tridimensionnelle.',
    fullDescription: `Les tachycardies ventriculaires sont des troubles du rythme qui prennent naissance dans les ventricules, les cavités qui propulsent le sang dans l'organisme. Elles peuvent survenir sur un cœur sain ou compliquer une maladie cardiaque existante, et nécessitent une prise en charge spécialisée.

L'ablation des tachycardies ventriculaires est une procédure de rythmologie avancée. Elle consiste à cartographier finement l'activité électrique des ventricules à l'aide d'un système de reconstruction tridimensionnelle, afin de localiser le foyer ou le circuit responsable de l'arythmie, puis à le neutraliser par des applications ciblées de radiofréquence.

Cette procédure permet de réduire significativement les épisodes de tachycardie, d'améliorer la qualité de vie et, chez les patients porteurs d'un défibrillateur, de diminuer le nombre de thérapies délivrées par l'appareil. Elle est réalisée par une équipe entraînée, dans un environnement de haute sécurité.

À la Clinique Pasteur Tunis, l'ablation des tachycardies ventriculaires bénéficie d'une salle d'électrophysiologie totalement équipée, d'un système de cartographie 3D des arythmies et de la proximité immédiate des unités de soins intensifs cardiologiques, garantissant une prise en charge optimale.`,
    image: '/images/cardiovasculaire.webp',
    indications: [
      'Tachycardies ventriculaires récidivantes symptomatiques',
      'Extrasystoles ventriculaires très nombreuses retentissant sur la fonction cardiaque',
      'Réduction des interventions d\'un défibrillateur implanté',
      'Tachycardies ventriculaires mal contrôlées par les médicaments',
      'Certaines tachycardies survenant sur cœur sain, accessibles à un traitement curatif',
    ],
    preparation: [
      'Bilan cardiologique approfondi avec échocardiographie et, si besoin, IRM cardiaque',
      'Documentation précise de l\'arythmie (ECG, Holter, mémoire du défibrillateur)',
      'Bilan sanguin et gestion des traitements selon les consignes du rythmologue',
      'Être à jeun 6 heures avant la procédure',
      'Consultation d\'anesthésie',
    ],
    deroulement: [
      'Installation en salle d\'électrophysiologie sous sédation ou anesthésie générale',
      'Introduction des cathéters par voie vasculaire',
      'Cartographie tridimensionnelle détaillée des ventricules',
      'Localisation du foyer ou du circuit de la tachycardie',
      'Applications ciblées de radiofréquence',
      'Tests de stimulation pour vérifier l\'efficacité du traitement',
      'Surveillance rapprochée en unité de soins intensifs cardiologiques',
    ],
    duree: '3 à 5 heures',
    resultats: 'L\'ablation permet le plus souvent une réduction marquée des épisodes de tachycardie et une amélioration notable du confort de vie. La surveillance initiale se déroule en unité spécialisée pendant 24 à 48 heures, puis un suivi rythmologique rapproché est organisé.',
    risques: [
      'Procédure spécialisée réalisée dans un environnement de haute sécurité',
      'Récidive possible pouvant nécessiter un complément de traitement',
      'Complications rares, prévenues par la cartographie 3D et la surveillance continue',
    ],
  },
  {
    slug: 'implantation-pacemaker',
    title: 'Implantation de pacemaker',
    shortTitle: 'Pacemaker',
    description: 'Mise en place d\'un stimulateur cardiaque qui veille en permanence sur le rythme du cœur et le stimule dès qu\'il bat trop lentement.',
    fullDescription: `Le pacemaker, ou stimulateur cardiaque, est un petit boîtier électronique implanté sous la peau, généralement sous la clavicule, et relié au cœur par une ou plusieurs sondes. Il surveille en continu le rythme cardiaque et envoie de minuscules impulsions électriques dès que le cœur bat trop lentement, garantissant ainsi un rythme adapté aux besoins de l'organisme.

L'implantation est indiquée lorsque le cœur présente un ralentissement excessif ou des pauses : bradycardie symptomatique, blocs de conduction, maladie du sinus. Ces anomalies peuvent provoquer fatigue, essoufflement, vertiges ou syncopes, symptômes que le pacemaker fait disparaître en rétablissant un rythme adéquat.

L'intervention est courte et bien codifiée, réalisée sous anesthésie locale avec une sédation légère. Les pacemakers actuels sont discrets, dotés d'une grande autonomie et s'adaptent automatiquement à l'activité du patient, qui peut mener une vie tout à fait normale.

À la Clinique Pasteur Tunis, l'implantation est réalisée par une équipe spécialisée en rythmologie dans des conditions d'asepsie rigoureuses. Un programme de contrôles réguliers du dispositif est ensuite organisé en consultation.`,
    image: '/images/cardio-ecg.webp',
    indications: [
      'Bradycardie symptomatique (fatigue, vertiges, malaises)',
      'Blocs auriculo-ventriculaires de haut degré',
      'Maladie du sinus avec pauses cardiaques',
      'Syncopes documentées d\'origine rythmique lente',
      'Certaines fibrillations auriculaires à conduction lente',
    ],
    preparation: [
      'Bilan cardiologique avec ECG, Holter et échocardiographie',
      'Bilan sanguin incluant la coagulation',
      'Adaptation des anticoagulants selon les consignes du médecin',
      'Être à jeun 6 heures avant l\'intervention',
      'Douche antiseptique la veille et le matin de l\'intervention',
    ],
    deroulement: [
      'Installation en salle dédiée, anesthésie locale et sédation légère',
      'Petite incision sous la clavicule',
      'Introduction de la ou des sondes par voie veineuse sous contrôle radiologique',
      'Positionnement des sondes dans le cœur et tests électriques',
      'Connexion du boîtier et fermeture de la loge',
      'Contrôle du dispositif et radiographie de vérification',
    ],
    duree: '1 heure environ',
    resultats: 'Le pacemaker fonctionne dès sa mise en place et les symptômes liés au rythme lent disparaissent rapidement. Après 24 à 48 heures de surveillance, le patient rentre chez lui avec des consignes simples et un calendrier de contrôles réguliers du dispositif.',
    risques: [
      'Petit hématome de la loge, généralement sans conséquence',
      'Risque infectieux très faible grâce aux protocoles d\'asepsie',
      'Déplacement de sonde rare, corrigé si besoin par un geste simple',
    ],
  },
  {
    slug: 'implantation-defibrillateur',
    title: 'Implantation de défibrillateur automatique (DAI)',
    shortTitle: 'Défibrillateur (DAI)',
    description: 'Mise en place d\'un défibrillateur implantable qui surveille le cœur en continu et le protège automatiquement contre les troubles du rythme graves.',
    fullDescription: `Le défibrillateur automatique implantable (DAI) est un dispositif de protection du cœur. Comme un pacemaker, il est implanté sous la peau et relié au cœur par des sondes, mais il possède une fonction supplémentaire essentielle : il surveille en permanence le rythme cardiaque et, s'il détecte un trouble du rythme ventriculaire grave, il délivre automatiquement le traitement approprié pour rétablir un rythme normal.

Le DAI est proposé aux patients présentant un risque de trouble du rythme ventriculaire sévère : antécédent d'arythmie grave, certaines maladies du muscle cardiaque, insuffisance cardiaque avec fonction ventriculaire altérée, ou maladies rythmiques d'origine génétique. Il agit comme un ange gardien permanent, la plupart du temps de façon totalement silencieuse.

Les défibrillateurs actuels assurent également les fonctions d'un pacemaker classique et peuvent traiter de nombreuses arythmies par une stimulation rapide indolore, la délivrance d'un choc restant réservée aux situations qui l'exigent.

À la Clinique Pasteur Tunis, l'implantation du DAI est réalisée par l'équipe de rythmologie dans des conditions de sécurité optimales, avec des tests complets du dispositif et un programme de suivi personnalisé en consultation.`,
    image: '/images/cardio-ecg.webp',
    indications: [
      'Antécédent de trouble du rythme ventriculaire grave',
      'Insuffisance cardiaque avec fonction ventriculaire altérée',
      'Certaines cardiomyopathies à risque rythmique',
      'Maladies rythmiques héréditaires exposant à des arythmies sévères',
      'Prévention chez des patients identifiés à risque par le bilan cardiologique',
    ],
    preparation: [
      'Bilan cardiologique complet avec échocardiographie',
      'Bilan sanguin incluant la coagulation',
      'Adaptation des traitements selon les consignes du rythmologue',
      'Être à jeun 6 heures avant l\'intervention',
      'Douche antiseptique la veille et le matin de l\'intervention',
    ],
    deroulement: [
      'Installation en salle dédiée, anesthésie locale avec sédation',
      'Incision sous la clavicule et création de la loge du boîtier',
      'Introduction des sondes par voie veineuse sous contrôle radiologique',
      'Tests complets du dispositif',
      'Fermeture de la loge et contrôle final',
      'Surveillance rythmique en unité spécialisée',
    ],
    duree: '1 à 2 heures',
    resultats: 'Le patient quitte la clinique après 24 à 48 heures de surveillance, protégé en permanence par son dispositif. Des contrôles réguliers permettent de vérifier le fonctionnement du DAI et de consulter sa mémoire, qui enregistre tous les événements rythmiques. La reprise des activités est progressive, avec quelques précautions expliquées à la sortie.',
    risques: [
      'Hématome de la loge, le plus souvent bénin',
      'Risque infectieux limité par des protocoles d\'asepsie stricts',
      'Réglages ajustables en consultation pour adapter au mieux le dispositif à chaque patient',
    ],
  },
  {
    slug: 'resynchronisation-cardiaque',
    title: 'Resynchronisation cardiaque (CRT)',
    shortTitle: 'Resynchronisation (CRT)',
    description: 'Implantation d\'un stimulateur spécifique qui recoordonne les contractions du cœur pour améliorer les symptômes de l\'insuffisance cardiaque.',
    fullDescription: `Chez certains patients atteints d'insuffisance cardiaque, les différentes parois du cœur ne se contractent plus de façon coordonnée : le ventricule gauche se contracte de manière désynchronisée, ce qui diminue l'efficacité de chaque battement et aggrave l'essoufflement et la fatigue.

La resynchronisation cardiaque (CRT) consiste à implanter un stimulateur particulier, doté d'une sonde supplémentaire positionnée sur la paroi latérale du ventricule gauche. En stimulant simultanément les deux ventricules, le dispositif rétablit une contraction harmonieuse et améliore la performance du cœur à chaque battement.

Les bénéfices attendus sont concrets : diminution de l'essoufflement, meilleure tolérance à l'effort, amélioration de la qualité de vie et, chez de nombreux patients, amélioration progressive de la fonction cardiaque au fil des mois. Le dispositif peut être associé à une fonction défibrillateur lorsque le profil du patient le justifie.

À la Clinique Pasteur Tunis, l'implantation des dispositifs de resynchronisation est réalisée par l'équipe de rythmologie dans la salle dédiée, avec une optimisation fine des réglages et un suivi conjoint avec le cardiologue traitant.`,
    image: '/images/cardio-ecg.webp',
    indications: [
      'Insuffisance cardiaque symptomatique malgré un traitement médical optimal',
      'Désynchronisation des contractions ventriculaires visible sur l\'ECG',
      'Fonction ventriculaire gauche altérée documentée par échocardiographie',
      'Patients déjà porteurs d\'un stimulateur nécessitant une amélioration de la stimulation',
    ],
    preparation: [
      'Bilan complet de l\'insuffisance cardiaque avec échocardiographie détaillée',
      'ECG confirmant le trouble de synchronisation',
      'Bilan sanguin et adaptation des traitements selon prescription',
      'Être à jeun 6 heures avant l\'intervention',
      'Douche antiseptique la veille et le matin de l\'intervention',
    ],
    deroulement: [
      'Installation en salle dédiée, anesthésie locale avec sédation',
      'Incision sous la clavicule',
      'Mise en place des sondes, dont la sonde ventriculaire gauche via le réseau veineux du cœur',
      'Tests de stimulation et vérification de la resynchronisation',
      'Connexion du boîtier et fermeture',
      'Réglages fins du dispositif avant la sortie',
    ],
    duree: '1 heure 30 à 3 heures',
    resultats: 'L\'amélioration des symptômes est souvent perceptible dans les semaines qui suivent l\'implantation : moins d\'essoufflement, plus d\'endurance à l\'effort et meilleure qualité de vie. Le dispositif est contrôlé régulièrement en consultation et ses réglages sont optimisés en fonction de l\'évolution du patient.',
    risques: [
      'Hématome de la loge, généralement sans gravité',
      'Positionnement de la sonde ventriculaire gauche parfois délicat, maîtrisé par l\'expérience de l\'équipe',
      'Suivi régulier nécessaire pour optimiser les réglages du dispositif',
    ],
  },
  {
    slug: 'holter-ecg-tensionnel',
    title: 'Holter ECG et tensionnel',
    shortTitle: 'Holter ECG et MAPA',
    description: 'Enregistrement continu du rythme cardiaque ou de la tension artérielle sur 24 à 48 heures, dans les conditions de vie réelles du patient.',
    fullDescription: `Le Holter est un petit enregistreur portable qui surveille le cœur pendant que le patient poursuit ses activités habituelles. Le Holter ECG enregistre en continu le rythme cardiaque pendant 24 à 48 heures grâce à des électrodes collées sur la poitrine, tandis que le Holter tensionnel (MAPA) mesure automatiquement la tension artérielle à intervalles réguliers, jour et nuit, à l'aide d'un brassard.

Ces examens sont précieux car de nombreux troubles du rythme et anomalies tensionnelles sont intermittents : ils peuvent ne pas apparaître lors d'une consultation ponctuelle, mais être capturés par un enregistrement prolongé dans les conditions de vie réelles. Le patient note ses activités et ses éventuels symptômes, ce qui permet de les corréler avec les enregistrements.

Le Holter ECG est particulièrement utile pour explorer des palpitations, des malaises ou des vertiges, surveiller un trouble du rythme connu ou vérifier l'efficacité d'un traitement. Le Holter tensionnel permet de confirmer une hypertension, de dépister une hypertension nocturne ou d'ajuster un traitement antihypertenseur.

À la Clinique Pasteur Tunis, la pose du Holter est rapide et indolore, réalisée par une équipe dédiée. L'analyse des enregistrements est effectuée par les cardiologues, et les résultats sont transmis avec un compte rendu détaillé.`,
    image: '/images/cardio-ecg.webp',
    indications: [
      'Palpitations, malaises ou vertiges inexpliqués',
      'Recherche d\'un trouble du rythme intermittent',
      'Surveillance de l\'efficacité d\'un traitement antiarythmique',
      'Suspicion d\'hypertension artérielle ou hypertension difficile à équilibrer',
      'Évaluation de la tension artérielle nocturne',
    ],
    preparation: [
      'Prendre une douche avant la pose (l\'appareil ne doit pas être mouillé pendant l\'enregistrement)',
      'Porter un vêtement ample et confortable',
      'Poursuivre ses activités habituelles pendant l\'enregistrement',
      'Noter ses activités et symptômes dans le carnet fourni',
    ],
    deroulement: [
      'Pose des électrodes sur la poitrine ou du brassard tensionnel au bras',
      'Mise en route de l\'enregistreur porté à la ceinture ou en bandoulière',
      'Retour à domicile et poursuite des activités quotidiennes normales',
      'Enregistrement continu pendant 24 à 48 heures',
      'Retrait de l\'appareil à la clinique et analyse des données par le cardiologue',
    ],
    duree: 'Pose en quelques minutes, enregistrement sur 24 à 48 heures',
    resultats: 'Après analyse de l\'enregistrement, le cardiologue remet un compte rendu détaillé qui identifie les éventuels troubles du rythme ou anomalies tensionnelles et oriente la suite de la prise en charge.',
    risques: [
      'Examen totalement indolore et sans aucun risque',
      'Légère irritation cutanée possible au niveau des électrodes, transitoire',
    ],
  },
  {
    slug: 'test-effort',
    title: 'Test d\'effort',
    shortTitle: 'Test d\'effort',
    description: 'Épreuve d\'effort sur tapis roulant sous surveillance médicale continue, pour évaluer le comportement du cœur pendant l\'exercice.',
    fullDescription: `Le test d'effort, ou épreuve d'effort, consiste à enregistrer l'électrocardiogramme, la fréquence cardiaque et la tension artérielle pendant un exercice physique d'intensité progressive, généralement sur tapis roulant. Certaines anomalies cardiaques n'apparaissent en effet qu'à l'effort, lorsque le cœur est sollicité.

Cet examen est un outil essentiel de la cardiologie : il aide à rechercher une insuffisance d'apport sanguin au muscle cardiaque, à explorer des douleurs thoraciques ou un essoufflement à l'effort, à évaluer la capacité physique, à démasquer certains troubles du rythme et à guider la reprise d'une activité sportive.

Le déroulement est simple : équipé d'électrodes et d'un brassard tensionnel, le patient marche sur un tapis roulant dont la vitesse et la pente augmentent par paliers, sous la surveillance constante d'un médecin. L'effort est adapté à chacun et interrompu dès que les informations nécessaires sont recueillies ou à la demande du patient.

À la Clinique Pasteur Tunis, le test d'effort est réalisé dans un environnement sécurisé, avec un monitoring continu et la présence permanente d'une équipe médicale entraînée, tous les moyens de prise en charge étant immédiatement disponibles sur place.`,
    image: '/images/cardio-ecg.webp',
    indications: [
      'Douleurs thoraciques à l\'effort à explorer',
      'Essoufflement inhabituel pendant l\'exercice',
      'Évaluation après un traitement cardiologique ou une intervention',
      'Recherche de troubles du rythme déclenchés par l\'effort',
      'Bilan avant la reprise d\'une activité sportive',
      'Évaluation de la capacité fonctionnelle',
    ],
    preparation: [
      'Prévoir une tenue de sport et des chaussures confortables',
      'Éviter un repas copieux dans les 3 heures précédant l\'examen',
      'Éviter café, tabac et effort intense juste avant le test',
      'Apporter la liste de ses médicaments (certains peuvent être suspendus sur consigne du médecin)',
    ],
    deroulement: [
      'Pose des électrodes et enregistrement d\'un ECG de repos',
      'Mesure de la tension artérielle de référence',
      'Marche sur tapis roulant avec augmentation progressive de la vitesse et de la pente',
      'Surveillance continue de l\'ECG, de la fréquence cardiaque et de la tension',
      'Phase de récupération surveillée après l\'arrêt de l\'effort',
      'Analyse immédiate des tracés par le cardiologue',
    ],
    duree: '30 à 45 minutes au total, dont 10 à 15 minutes d\'effort',
    resultats: 'Les résultats sont disponibles immédiatement après l\'examen. Le cardiologue analyse la réponse du cœur à l\'effort, en tire les conclusions diagnostiques et propose si nécessaire des examens complémentaires ou un ajustement du traitement.',
    risques: [
      'Examen encadré par une surveillance médicale continue du début à la fin',
      'Fatigue musculaire ou essoufflement transitoires liés à l\'effort',
      'Incidents sérieux très rares, l\'équipe et le matériel de prise en charge étant immédiatement disponibles',
    ],
  },
];
