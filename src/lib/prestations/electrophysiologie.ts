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
    image: '/images/fiches/ep-exploration-electrophysiologique.webp',
    indications: [
      { label: 'Palpitations récidivantes inexpliquées', explication: `Quand le cœur s'emballe régulièrement sans que les examens habituels n'en trouvent la cause, cette exploration enregistre les signaux électriques directement à l'intérieur du cœur pour identifier l'origine du problème.` },
      { label: 'Syncopes ou malaises suspects d\'origine rythmique', explication: `Après des pertes de connaissance inexpliquées, l'examen recherche un trouble électrique du cœur, trop rapide ou trop lent, qui pourrait en être responsable.` },
      { label: 'Caractérisation d\'une tachycardie documentée sur un ECG', explication: `Lorsqu'un emballement du cœur a été enregistré, cette étude précise son mécanisme exact et sa localisation, des informations indispensables pour choisir le bon traitement.` },
      { label: 'Évaluation du risque rythmique dans certaines cardiopathies', explication: `Certaines maladies cardiaques peuvent favoriser des troubles du rythme graves : l'exploration teste la sensibilité électrique du cœur et aide à décider des mesures de protection.` },
      { label: 'Bilan avant une éventuelle ablation', explication: `Avant de traiter définitivement une arythmie, il faut cartographier précisément le circuit anormal ; ce repérage est souvent suivi de l'ablation lors de la même séance.` },
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
    image: '/images/fiches/ep-ablation-radiofrequence.webp',
    indications: [
      { label: 'Tachycardies jonctionnelles récidivantes', explication: `Ces crises de cœur rapide, souvent gênantes au quotidien, sont liées à un petit circuit électrique anormal que l'ablation permet le plus souvent de supprimer définitivement.` },
      { label: 'Flutter auriculaire', explication: `Ce trouble du rythme suit un circuit bien connu dans l'oreillette ; l'ablation interrompt ce circuit et offre d'excellents résultats durables.` },
      { label: 'Fibrillation auriculaire symptomatique', explication: `Quand cette arythmie fréquente provoque palpitations, fatigue ou essoufflement, l'ablation aide à retrouver un rythme régulier et une meilleure qualité de vie.` },
      { label: 'Extrasystoles ventriculaires nombreuses et gênantes', explication: `Des battements supplémentaires très fréquents peuvent devenir pénibles et fatiguer le cœur à la longue ; neutraliser leur foyer d'origine fait disparaître ces symptômes.` },
      { label: 'Arythmies mal contrôlées par les médicaments ou chez des patients souhaitant s\'en passer', explication: `Lorsque le traitement médicamenteux est insuffisant, mal toléré ou contraignant, l'ablation offre une alternative durable qui permet souvent d'arrêter les médicaments.` },
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
    image: '/images/fiches/ep-ablation-fibrillation-auriculaire.webp',
    indications: [
      { label: 'Fibrillation auriculaire symptomatique malgré un traitement médicamenteux', explication: `Quand les médicaments ne parviennent plus à calmer les palpitations, l'essoufflement ou la fatigue liés à la fibrillation, l'ablation devient l'option de choix pour retrouver un rythme régulier.` },
      { label: 'Fibrillation auriculaire paroxystique récidivante', explication: `Lorsque les crises reviennent régulièrement puis s'arrêtent d'elles-mêmes, intervenir à ce stade offre les meilleures chances de succès durable.` },
      { label: 'Intolérance ou contre-indication aux médicaments antiarythmiques', explication: `Si les traitements du rythme provoquent des effets indésirables ou sont déconseillés dans votre situation, l'ablation permet de contrôler l'arythmie sans en dépendre.` },
      { label: 'Fibrillation auriculaire retentissant sur la fonction cardiaque', explication: `Une fibrillation prolongée peut affaiblir le muscle cardiaque ; restaurer un rythme régulier aide alors le cœur à récupérer sa force de contraction.` },
      { label: 'Patients souhaitant une stratégie de contrôle durable du rythme', explication: `Pour les personnes qui préfèrent une solution de fond plutôt qu'un traitement médicamenteux à vie, l'ablation vise un retour durable au rythme normal.` },
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
    image: '/images/fiches/ep-ablation-flutter-auriculaire.webp',
    indications: [
      { label: 'Flutter auriculaire symptomatique (palpitations, essoufflement, fatigue)', explication: `Quand ce rythme rapide et régulier de l'oreillette se fait sentir au quotidien, l'ablation permet de supprimer le circuit responsable et de faire disparaître les symptômes.` },
      { label: 'Flutter récidivant malgré un traitement médicamenteux', explication: `Si les crises reviennent malgré les médicaments, l'ablation constitue le traitement de référence, avec d'excellentes chances de guérison définitive.` },
      { label: 'Flutter retentissant sur la fonction cardiaque', explication: `Un flutter qui se prolonge peut fatiguer le muscle cardiaque ; interrompre le circuit anormal permet au cœur de retrouver progressivement son efficacité.` },
      { label: 'Préférence du patient pour un traitement curatif plutôt que médicamenteux au long cours', explication: `Plutôt que de prendre des médicaments pendant des années, il est possible de choisir cette procédure bien codifiée qui traite la cause même de l'arythmie.` },
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
    image: '/images/fiches/ep-ablation-tachycardies-ventriculaires.webp',
    indications: [
      { label: 'Tachycardies ventriculaires récidivantes symptomatiques', explication: `Quand des emballements du cœur naissant dans les ventricules se répètent et provoquent malaises ou palpitations, l'ablation cible leur origine pour en réduire fortement la fréquence.` },
      { label: 'Extrasystoles ventriculaires très nombreuses retentissant sur la fonction cardiaque', explication: `Des battements supplémentaires extrêmement fréquents peuvent affaiblir le muscle cardiaque avec le temps ; supprimer leur foyer permet au cœur de récupérer.` },
      { label: 'Réduction des interventions d\'un défibrillateur implanté', explication: `Chez les patients porteurs d'un défibrillateur qui délivre des chocs répétés, l'ablation diminue le nombre d'arythmies et donc les interventions de l'appareil, améliorant nettement le confort de vie.` },
      { label: 'Tachycardies ventriculaires mal contrôlées par les médicaments', explication: `Lorsque le traitement médicamenteux ne suffit plus à prévenir les crises, cette procédure spécialisée offre une solution complémentaire efficace.` },
      { label: 'Certaines tachycardies survenant sur cœur sain, accessibles à un traitement curatif', explication: `Chez des personnes au cœur par ailleurs normal, certaines formes de tachycardie ventriculaire peuvent être guéries définitivement par une ablation ciblée.` },
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
    image: '/images/fiches/ep-implantation-pacemaker.webp',
    indications: [
      { label: 'Bradycardie symptomatique (fatigue, vertiges, malaises)', explication: `Quand le cœur bat trop lentement et que cela se traduit par une fatigue inhabituelle, des vertiges ou des malaises, le pacemaker rétablit un rythme adapté et fait disparaître ces symptômes.` },
      { label: 'Blocs auriculo-ventriculaires de haut degré', explication: `Lorsque le courant électrique ne passe plus correctement entre le haut et le bas du cœur, le stimulateur prend le relais pour garantir des battements réguliers en toute circonstance.` },
      { label: 'Maladie du sinus avec pauses cardiaques', explication: `Si le stimulateur naturel du cœur devient défaillant et marque des pauses, le pacemaker veille en permanence et intervient dès que le rythme ralentit trop.` },
      { label: 'Syncopes documentées d\'origine rythmique lente', explication: `Quand des pertes de connaissance sont dues à un ralentissement excessif du cœur prouvé par les enregistrements, l'implantation d'un pacemaker prévient efficacement les récidives.` },
      { label: 'Certaines fibrillations auriculaires à conduction lente', explication: `Chez certains patients en fibrillation auriculaire, le cœur bat globalement trop lentement ; le stimulateur assure alors une fréquence cardiaque suffisante au quotidien.` },
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
    image: '/images/fiches/ep-implantation-defibrillateur.webp',
    indications: [
      { label: 'Antécédent de trouble du rythme ventriculaire grave', explication: `Après un épisode d'arythmie sévère, le défibrillateur protège en permanence contre une récidive en intervenant automatiquement dès qu'un rythme dangereux est détecté.` },
      { label: 'Insuffisance cardiaque avec fonction ventriculaire altérée', explication: `Quand le cœur est affaibli, le risque de trouble du rythme grave augmente ; le dispositif agit comme une assurance de sécurité permanente et silencieuse.` },
      { label: 'Certaines cardiomyopathies à risque rythmique', explication: `Certaines maladies du muscle cardiaque exposent à des emballements dangereux ; le défibrillateur veille en continu et traite instantanément toute arythmie menaçante.` },
      { label: 'Maladies rythmiques héréditaires exposant à des arythmies sévères', explication: `Dans les maladies électriques du cœur d'origine génétique, le dispositif offre une protection continue, y compris pendant le sommeil, contre les arythmies graves.` },
      { label: 'Prévention chez des patients identifiés à risque par le bilan cardiologique', explication: `Lorsque les examens révèlent un risque élevé de trouble du rythme sévère, le défibrillateur est proposé à titre préventif, avant même qu'un accident ne survienne.` },
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
    image: '/images/fiches/ep-resynchronisation-cardiaque.webp',
    indications: [
      { label: 'Insuffisance cardiaque symptomatique malgré un traitement médical optimal', explication: `Quand l'essoufflement et la fatigue persistent alors que le traitement médicamenteux est déjà bien conduit, la resynchronisation apporte une aide mécanique supplémentaire au cœur.` },
      { label: 'Désynchronisation des contractions ventriculaires visible sur l\'ECG', explication: `Si le tracé électrique montre que les parois du cœur ne se contractent plus ensemble, le dispositif recoordonne les battements pour rendre chaque contraction plus efficace.` },
      { label: 'Fonction ventriculaire gauche altérée documentée par échocardiographie', explication: `Lorsque l'échographie confirme que le ventricule gauche a perdu de sa force, la stimulation simultanée des deux ventricules peut l'aider à récupérer progressivement.` },
      { label: 'Patients déjà porteurs d\'un stimulateur nécessitant une amélioration de la stimulation', explication: `Chez certains patients déjà appareillés, passer à un dispositif de resynchronisation permet d'obtenir une contraction plus harmonieuse et de meilleurs résultats sur les symptômes.` },
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
    image: '/images/fiches/ep-holter-ecg-tensionnel.webp',
    indications: [
      { label: 'Palpitations, malaises ou vertiges inexpliqués', explication: `Quand ces symptômes surviennent par épisodes imprévisibles, l'enregistrement prolongé dans la vie quotidienne permet de capter ce qu'une consultation ponctuelle ne peut pas voir.` },
      { label: 'Recherche d\'un trouble du rythme intermittent', explication: `Certaines arythmies vont et viennent sans prévenir ; en surveillant le cœur jour et nuit, le Holter maximise les chances de les enregistrer au moment où elles se produisent.` },
      { label: 'Surveillance de l\'efficacité d\'un traitement antiarythmique', explication: `Sous traitement contre un trouble du rythme, l'enregistrement continu vérifie que les épisodes ont bien diminué et que le rythme reste régulier au fil de la journée.` },
      { label: 'Suspicion d\'hypertension artérielle ou hypertension difficile à équilibrer', explication: `La mesure répétée de la tension dans les conditions de vie réelles confirme ou écarte une hypertension et aide à ajuster finement le traitement quand la tension résiste.` },
      { label: 'Évaluation de la tension artérielle nocturne', explication: `La tension doit normalement baisser pendant le sommeil ; seul un enregistrement de nuit permet de vérifier ce comportement, important pour la santé du cœur.` },
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
    image: '/images/fiches/ep-test-effort.webp',
    indications: [
      { label: 'Douleurs thoraciques à l\'effort à explorer', explication: `Lorsqu'une gêne dans la poitrine apparaît en marchant ou en montant les escaliers, ce test reproduit l'effort sous surveillance pour vérifier le bon fonctionnement du cœur.` },
      { label: 'Essoufflement inhabituel pendant l\'exercice', explication: `Si vous vous essoufflez plus vite qu'avant pour des activités habituelles, l'examen aide à déterminer si le cœur en est la cause.` },
      { label: 'Évaluation après un traitement cardiologique ou une intervention', explication: `Après la mise en place d'un traitement ou une intervention sur le cœur, le test confirme que celui-ci supporte de nouveau l'effort dans de bonnes conditions.` },
      { label: 'Recherche de troubles du rythme déclenchés par l\'effort', explication: `Certaines palpitations n'apparaissent que pendant l'exercice ; l'épreuve permet de les provoquer dans un cadre sécurisé afin de les enregistrer et de les analyser.` },
      { label: 'Bilan avant la reprise d\'une activité sportive', explication: `Avant de se remettre au sport, notamment après une longue pause ou un problème de santé, le test vérifie que le cœur est prêt à suivre.` },
      { label: 'Évaluation de la capacité fonctionnelle', explication: `L'examen mesure objectivement le niveau d'effort que vous pouvez fournir, un repère utile pour suivre votre condition physique et adapter vos activités.` },
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
