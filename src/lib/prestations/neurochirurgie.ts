export const prestationsNeurochirurgie = [
  {
    slug: 'chirurgie-tumeurs-cerebrales',
    title: 'Chirurgie des tumeurs cérébrales',
    shortTitle: 'Tumeurs cérébrales',
    description: 'Exérèse chirurgicale des tumeurs du cerveau sous microscope opératoire, guidée par la neuronavigation pour une précision maximale.',
    fullDescription: `La chirurgie des tumeurs cérébrales a pour objectif de retirer la tumeur aussi complètement que possible tout en préservant les fonctions neurologiques : motricité, langage, mémoire, vision. C'est une chirurgie de haute précision qui bénéficie aujourd'hui d'avancées technologiques majeures.

L'intervention est planifiée à partir d'une IRM pré-opératoire de haute résolution, qui permet de localiser précisément la tumeur et ses rapports avec les zones fonctionnelles du cerveau. Au bloc opératoire, le neurochirurgien opère sous microscope, guidé par la neuronavigation — un véritable GPS chirurgical — et, lorsque cela est utile, par le monitoring neurophysiologique qui surveille en continu les fonctions nerveuses pendant le geste.

Chaque tumeur retirée est analysée au microscope afin d'en déterminer la nature exacte. Cette analyse oriente la suite de la prise en charge, toujours discutée en concertation multidisciplinaire, en lien avec les autres spécialistes concernés.

À la Clinique Pasteur Tunis, la chirurgie des tumeurs cérébrales s'appuie sur un plateau technique de pointe — microscope neurochirurgical, neuronavigation, monitoring per-opératoire, IRM haute résolution — et sur une réanimation polyvalente dédiée qui sécurise les suites opératoires.`,
    image: '/images/fiches/neurochir-chirurgie-tumeurs-cerebrales.webp',
    indications: [
      { label: 'Tumeur cérébrale découverte à l\'imagerie et accessible à la chirurgie', explication: `Lorsqu'une tumeur est visible à l'IRM et que sa localisation permet de l'atteindre sans danger, la chirurgie est le traitement de première intention pour la retirer.` },
      { label: 'Tumeur responsable de maux de tête, de crises d\'épilepsie ou de déficits neurologiques', explication: `Quand une tumeur provoque des symptômes qui perturbent la vie quotidienne, son exérèse vise à les faire régresser et à protéger les fonctions du cerveau.` },
      { label: 'Nécessité d\'une analyse précise de la lésion (biopsie ou exérèse)', explication: `Connaître la nature exacte d'une lésion est indispensable pour choisir le bon traitement. Un prélèvement ou l'ablation complète permet cette analyse au microscope.` },
      { label: 'Tumeur exerçant un effet de compression sur les structures voisines', explication: `Une tumeur qui appuie sur les zones voisines du cerveau peut altérer leurs fonctions. La retirer lève cette compression et prévient l'aggravation des symptômes.` },
    ],
    preparation: [
      'IRM cérébrale de haute résolution pour la planification chirurgicale',
      'Bilan pré-opératoire complet et consultation d\'anesthésie',
      'Adaptation éventuelle des traitements en cours (anticoagulants, antiépileptiques)',
      'Être à jeun 6 heures avant l\'intervention',
      'Information détaillée du patient et de ses proches sur le déroulement et les suites',
    ],
    deroulement: [
      'Anesthésie générale avec surveillance neurologique adaptée',
      'Installation précise et calibrage de la neuronavigation',
      'Ouverture ciblée du crâne (craniotomie) en regard de la tumeur',
      'Exérèse de la tumeur sous microscope opératoire, guidée par la neuronavigation',
      'Monitoring neurophysiologique des fonctions nerveuses lorsque nécessaire',
      'Fermeture soigneuse plan par plan',
      'Surveillance post-opératoire en réanimation ou en unité de soins continus',
    ],
    duree: '3 à 6 heures selon la localisation',
    resultats: 'Un scanner ou une IRM de contrôle est réalisé après l\'intervention. La récupération est progressive et peut être accompagnée d\'une rééducation adaptée. Les résultats de l\'analyse de la tumeur sont expliqués en consultation et déterminent la suite du parcours de soins, coordonnée par l\'équipe.',
    risques: [
      'Fatigue et maux de tête transitoires après l\'intervention',
      'Déficit neurologique, dont le risque est réduit par la neuronavigation et le monitoring',
      'Crises d\'épilepsie post-opératoires, prévenues par un traitement adapté',
      'Complications rares liées à toute chirurgie crânienne, encadrées par la surveillance en réanimation',
    ],
  },
  {
    slug: 'chirurgie-hernie-discale',
    title: 'Chirurgie de la hernie discale cervicale et lombaire',
    shortTitle: 'Hernie discale',
    description: 'Traitement chirurgical mini-invasif de la hernie discale pour soulager la compression nerveuse responsable de sciatiques et névralgies.',
    fullDescription: `La hernie discale correspond au déplacement d'un fragment de disque intervertébral qui vient comprimer une racine nerveuse. Au niveau lombaire, elle provoque la classique sciatique ou cruralgie ; au niveau cervical, une névralgie du bras (névralgie cervico-brachiale). La chirurgie est envisagée lorsque la douleur résiste au traitement médical bien conduit, ou en cas de déficit neurologique.

L'intervention consiste à libérer la racine nerveuse comprimée en retirant le fragment de disque responsable. Au niveau lombaire, elle est réalisée par un abord postérieur court, sous microscope opératoire, avec un respect maximal des muscles. Au niveau cervical, l'abord se fait le plus souvent par l'avant du cou, avec mise en place d'un implant intervertébral remplaçant le disque retiré.

Le soulagement de la douleur du membre est le plus souvent rapide, parfois dès le réveil. La récupération est facilitée par un lever précoce et des conseils posturaux simples.

À la Clinique Pasteur Tunis, la chirurgie de la hernie discale est réalisée sous microscope opératoire par une équipe neurochirurgicale expérimentée, dans le cadre d'une hospitalisation courte et d'un accompagnement attentif de la convalescence.`,
    image: '/images/fiches/neurochir-chirurgie-hernie-discale.webp',
    indications: [
      { label: 'Sciatique ou cruralgie résistant au traitement médical bien conduit', explication: `Quand la douleur qui descend dans la jambe persiste malgré les médicaments, la rééducation et les infiltrations, retirer le fragment de disque qui comprime le nerf apporte un soulagement le plus souvent rapide.` },
      { label: 'Névralgie cervico-brachiale persistante', explication: `C'est l'équivalent de la sciatique au niveau du bras : une hernie discale du cou comprime un nerf et provoque une douleur qui irradie dans le membre supérieur. La chirurgie libère ce nerf.` },
      { label: 'Déficit moteur lié à la compression nerveuse', explication: `Quand le nerf comprimé commence à perdre sa force, par exemple avec un pied ou une main qui répond moins bien, il est important d'intervenir sans tarder pour favoriser la récupération.` },
      { label: 'Douleurs invalidantes altérant la qualité de vie malgré le traitement', explication: `Lorsque la douleur empêche de dormir, de travailler ou de mener une vie normale malgré un traitement bien suivi, la chirurgie devient une option raisonnable et efficace.` },
      { label: 'Hernie discale confirmée par IRM et concordante avec les symptômes', explication: `L'intervention n'est proposée que lorsque l'imagerie montre une hernie qui correspond exactement aux douleurs ressenties, gage d'un bon résultat chirurgical.` },
    ],
    preparation: [
      'IRM récente du rachis confirmant la hernie',
      'Consultation d\'anesthésie',
      'Adaptation des traitements anticoagulants selon les consignes',
      'Être à jeun 6 heures avant l\'intervention',
      'Arrêt du tabac recommandé pour favoriser la cicatrisation',
    ],
    deroulement: [
      'Anesthésie générale',
      'Courte incision en regard du disque concerné (dos ou face avant du cou)',
      'Libération de la racine nerveuse sous microscope opératoire',
      'Ablation du fragment discal responsable de la compression',
      'Mise en place d\'un implant intervertébral au niveau cervical si nécessaire',
      'Fermeture soigneuse et lever précoce dès le lendemain',
    ],
    duree: '1 à 2 heures',
    resultats: 'La douleur du membre est le plus souvent nettement soulagée dès les premiers jours. L\'hospitalisation est courte et la reprise des activités progressive, guidée par les conseils de l\'équipe. Les efforts de port de charges sont évités pendant quelques semaines, et une rééducation douce peut accompagner la récupération.',
    risques: [
      'Douleurs cicatricielles transitoires',
      'Fourmillements résiduels s\'estompant progressivement',
      'Récidive possible de hernie au même niveau, prévenue par les conseils posturaux',
      'Complications neurologiques rares, minimisées par la technique microchirurgicale',
    ],
  },
  {
    slug: 'chirurgie-canal-lombaire-etroit',
    title: 'Chirurgie du canal lombaire étroit',
    shortTitle: 'Canal lombaire étroit',
    description: 'Libération chirurgicale des nerfs comprimés dans un canal rachidien rétréci, pour retrouver un périmètre de marche confortable.',
    fullDescription: `Le canal lombaire étroit correspond à un rétrécissement progressif du canal rachidien, le plus souvent lié à l'usure naturelle des disques et des articulations vertébrales. Les nerfs qui y circulent se retrouvent à l'étroit, ce qui provoque le symptôme caractéristique : des douleurs, des lourdeurs ou des fourmillements dans les jambes à la marche, obligeant à s'arrêter puis à se pencher en avant pour être soulagé.

Lorsque la gêne à la marche devient invalidante malgré le traitement médical et la rééducation, la chirurgie de libération (laminectomie ou recalibrage) est proposée. Elle consiste à redonner de l'espace aux nerfs en retirant les éléments osseux et ligamentaires qui les compriment, sous microscope opératoire, en préservant la stabilité de la colonne.

L'objectif principal est de récupérer un périmètre de marche confortable et une meilleure autonomie au quotidien. Le lever est précoce et la marche reprise dès les premiers jours.

À la Clinique Pasteur Tunis, cette intervention est réalisée par une équipe neurochirurgicale expérimentée en chirurgie du rachis, avec un accompagnement personnalisé de la récupération, notamment chez les patients les plus âgés.`,
    image: '/images/fiches/neurochir-chirurgie-canal-lombaire-etroit.webp',
    indications: [
      { label: 'Réduction douloureuse du périmètre de marche (claudication neurogène)', explication: `Les nerfs à l'étroit dans le bas du dos font apparaître douleurs et lourdeurs dans les jambes après quelques pas, obligeant à s'arrêter. La chirurgie leur redonne de l'espace pour marcher plus loin.` },
      { label: 'Douleurs ou fourmillements des jambes soulagés par la position penchée en avant', explication: `Le fait d'être soulagé en se penchant en avant, par exemple appuyé sur un caddie, est très caractéristique du canal lombaire étroit et oriente vers ce diagnostic.` },
      { label: 'Échec du traitement médical et de la rééducation', explication: `La chirurgie n'est envisagée que lorsque les médicaments, les infiltrations et la rééducation n'apportent plus un soulagement suffisant.` },
      { label: 'Rétrécissement significatif confirmé par IRM ou scanner', explication: `L'imagerie permet de visualiser précisément le rétrécissement du canal et de vérifier qu'il explique bien les symptômes avant de proposer l'intervention.` },
      { label: 'Retentissement important sur l\'autonomie au quotidien', explication: `Quand faire ses courses, se promener ou simplement se déplacer chez soi devient difficile, l'intervention vise avant tout à redonner de l'indépendance.` },
    ],
    preparation: [
      'IRM ou scanner lombaire récent',
      'Bilan pré-opératoire adapté à l\'âge et consultation d\'anesthésie',
      'Adaptation des traitements en cours selon les consignes',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Incision dans le bas du dos en regard des niveaux rétrécis',
      'Libération des nerfs sous microscope en retirant les éléments compressifs',
      'Préservation de la stabilité de la colonne vertébrale',
      'Fermeture soigneuse',
      'Premier lever dès le lendemain avec l\'aide de l\'équipe',
    ],
    duree: '1 à 3 heures selon le nombre de niveaux',
    resultats: 'La marche est reprise rapidement, avec une amélioration progressive du périmètre de marche au fil des semaines. L\'hospitalisation dure quelques jours. Une rééducation douce et des conseils posturaux accompagnent le retour aux activités quotidiennes.',
    risques: [
      'Douleurs cicatricielles temporaires',
      'Fourmillements résiduels régressant progressivement',
      'Brèche de l\'enveloppe des nerfs, rare et réparée dans le même temps si elle survient',
    ],
  },
  {
    slug: 'chirurgie-rachis-stabilisation-arthrodese',
    title: 'Chirurgie du rachis (stabilisation, arthrodèse)',
    shortTitle: 'Chirurgie du rachis',
    description: 'Stabilisation chirurgicale de la colonne vertébrale par arthrodèse (fusion vertébrale) en cas d\'instabilité, de glissement vertébral ou de fracture.',
    fullDescription: `Certaines pathologies de la colonne vertébrale s'accompagnent d'une instabilité : glissement d'une vertèbre sur l'autre (spondylolisthésis), usure discale évoluée, fracture vertébrale, déformation ou suites de chirurgies antérieures. Lorsque cette instabilité est source de douleurs chroniques ou menace les structures nerveuses, une stabilisation chirurgicale peut être proposée.

L'arthrodèse consiste à solidariser définitivement deux ou plusieurs vertèbres entre elles à l'aide d'implants (vis, tiges, cages intervertébrales) et de greffe osseuse, afin de supprimer le mouvement douloureux et de restaurer l'alignement de la colonne. Elle est fréquemment associée à un geste de libération des nerfs comprimés.

La planification est rigoureuse, fondée sur une imagerie complète, et le geste est réalisé avec un contrôle radiologique per-opératoire garantissant le positionnement précis des implants. Le lever est précoce, et la consolidation osseuse se poursuit pendant plusieurs mois, accompagnée d'une rééducation adaptée.

À la Clinique Pasteur Tunis, la chirurgie de stabilisation du rachis est assurée par une équipe neurochirurgicale expérimentée, avec un plateau d'imagerie complet et une surveillance post-opératoire attentive, pour un retour progressif et sécurisé aux activités.`,
    image: '/images/fiches/neurochir-chirurgie-rachis-stabilisation-arthrodese.webp',
    indications: [
      { label: 'Glissement vertébral (spondylolisthésis) douloureux ou évolutif', explication: `Quand une vertèbre glisse progressivement sur celle du dessous, elle provoque des douleurs et peut comprimer les nerfs. La fusion des vertèbres stoppe ce glissement.` },
      { label: 'Instabilité vertébrale source de douleurs chroniques', explication: `Un mouvement anormal entre deux vertèbres peut entretenir des douleurs de dos persistantes. Les solidariser supprime ce mouvement douloureux.` },
      { label: 'Fracture vertébrale nécessitant une stabilisation', explication: `Certaines fractures de la colonne sont instables et doivent être fixées par des implants pour protéger la moelle et les nerfs pendant la consolidation.` },
      { label: 'Usure discale évoluée résistant aux traitements', explication: `Quand un disque très usé reste douloureux malgré tous les traitements médicaux, la fusion du segment concerné peut apporter un soulagement durable.` },
      { label: 'Déformations du rachis nécessitant une correction', explication: `Certaines courbures anormales de la colonne s'aggravent avec le temps et justifient une correction chirurgicale pour restaurer un bon équilibre du dos.` },
    ],
    preparation: [
      'Bilan d\'imagerie complet (IRM, scanner, radiographies dynamiques)',
      'Bilan pré-opératoire et consultation d\'anesthésie',
      'Arrêt du tabac fortement recommandé : il favorise la consolidation osseuse',
      'Adaptation des traitements anticoagulants',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Abord de la colonne adapté aux niveaux à traiter',
      'Libération des structures nerveuses comprimées si nécessaire',
      'Mise en place des implants (vis, tiges, cages) sous contrôle radiologique',
      'Apport de greffe osseuse pour obtenir la fusion',
      'Fermeture soigneuse',
      'Premier lever précoce accompagné par l\'équipe',
    ],
    duree: '2 à 5 heures selon l\'étendue du montage',
    resultats: 'L\'hospitalisation dure en général quelques jours. La consolidation osseuse s\'obtient progressivement sur plusieurs mois, période durant laquelle les efforts importants sont évités. La rééducation, débutée en douceur, accompagne la reprise des activités. Des contrôles radiologiques réguliers vérifient la bonne fusion.',
    risques: [
      'Douleurs post-opératoires, bien contrôlées par le traitement antalgique',
      'Consolidation osseuse parfois lente, favorisée par l\'arrêt du tabac',
      'Gêne liée aux implants, rare et accessible à un geste complémentaire si besoin',
      'Complications neurologiques rares, prévenues par le contrôle radiologique per-opératoire',
    ],
  },
  {
    slug: 'chirurgie-hematomes-intracraniens',
    title: 'Chirurgie des hématomes intracrâniens',
    shortTitle: 'Hématomes intracrâniens',
    description: 'Évacuation chirurgicale des saignements intracrâniens, en urgence ou de façon programmée, pour lever la compression du cerveau.',
    fullDescription: `Un hématome intracrânien est une collection de sang qui se forme dans le crâne, à la suite d'un traumatisme, de la rupture d'un petit vaisseau ou, chez la personne âgée, parfois après un choc minime passé inaperçu (hématome sous-dural chronique). En comprimant le cerveau, il peut provoquer maux de tête, confusion, faiblesse d'un côté du corps ou troubles de la conscience.

Le traitement chirurgical consiste à évacuer l'hématome pour lever la compression. Selon sa nature et sa localisation, le neurochirurgien réalise soit un simple orifice dans le crâne permettant de drainer l'hématome (technique fréquente pour l'hématome sous-dural chronique), soit une ouverture plus large (craniotomie) pour les hématomes aigus.

La rapidité de la prise en charge est un élément déterminant du pronostic : c'est pourquoi l'organisation de la clinique permet une prise en charge neurochirurgicale sans délai, du service des urgences au bloc opératoire.

À la Clinique Pasteur Tunis, la chirurgie des hématomes intracrâniens bénéficie d'un circuit complet et réactif : urgences, scanner disponible en permanence, bloc opératoire et réanimation polyvalente dédiée, garantissant une prise en charge rapide et sécurisée à toute heure.`,
    image: '/images/fiches/neurochir-chirurgie-hematomes-intracraniens.webp',
    indications: [
      { label: 'Hématome sous-dural chronique symptomatique (maux de tête, confusion, faiblesse)', explication: `Chez la personne âgée, une poche de sang peut se former lentement autour du cerveau, parfois après un choc minime oublié. Son drainage par un petit orifice soulage rapidement les symptômes.` },
      { label: 'Hématome extradural ou sous-dural aigu après traumatisme crânien', explication: `Après un traumatisme crânien important, un saignement peut comprimer rapidement le cerveau. Son évacuation en urgence est alors déterminante.` },
      { label: 'Hématome intracérébral accessible à la chirurgie', explication: `Certains saignements situés à l'intérieur même du cerveau peuvent être évacués chirurgicalement lorsque leur position le permet et que cela améliore le pronostic.` },
      { label: 'Hématome exerçant une compression significative visible au scanner', explication: `C'est le scanner qui guide la décision : quand l'hématome comprime nettement le cerveau, l'intervention lève cette pression et protège les fonctions cérébrales.` },
    ],
    preparation: [
      'Scanner cérébral en urgence pour localiser et mesurer l\'hématome',
      'Bilan de la coagulation et correction des traitements anticoagulants',
      'Consultation d\'anesthésie, adaptée au degré d\'urgence',
      'Jeûne pré-opératoire lorsque le degré d\'urgence le permet',
    ],
    deroulement: [
      'Anesthésie générale ou locale selon le type d\'hématome',
      'Orifice de trépan ou craniotomie selon la nature de l\'hématome',
      'Évacuation du sang et lavage doux de la cavité',
      'Mise en place éventuelle d\'un drain temporaire',
      'Fermeture soigneuse',
      'Surveillance rapprochée en réanimation ou en unité de soins continus',
      'Scanner de contrôle après l\'intervention',
    ],
    duree: '30 minutes à 2 heures selon le type d\'hématome',
    resultats: 'L\'amélioration des symptômes est souvent rapide après l\'évacuation, en particulier pour les hématomes chroniques. Le drain éventuel est retiré après quelques jours, et un scanner de contrôle vérifie la bonne évolution. La récupération se poursuit ensuite progressivement, avec une rééducation si nécessaire.',
    risques: [
      'Récidive possible de l\'hématome, surveillée par les scanners de contrôle',
      'Confusion transitoire chez la personne âgée, régressant avec la récupération',
      'Crises d\'épilepsie, prévenues par un traitement adapté si nécessaire',
    ],
  },
  {
    slug: 'traitement-chirurgical-epilepsie',
    title: 'Traitement chirurgical de l\'épilepsie',
    shortTitle: 'Chirurgie de l\'épilepsie',
    description: 'Prise en charge chirurgicale des épilepsies résistantes aux médicaments, après un bilan neurophysiologique complet.',
    fullDescription: `La plupart des épilepsies sont bien contrôlées par les médicaments. Mais lorsque les crises persistent malgré des traitements bien conduits — on parle d'épilepsie pharmaco-résistante — une solution chirurgicale peut être envisagée chez certains patients soigneusement sélectionnés.

Le principe est d'identifier avec précision la zone du cerveau d'où partent les crises, puis, lorsqu'elle peut être retirée sans risque fonctionnel, de la traiter chirurgicalement. Cette identification repose sur un bilan pré-chirurgical rigoureux : enregistrements vidéo-EEG prolongés, IRM cérébrale de haute résolution et évaluation neuropsychologique, réalisés en étroite collaboration entre neurologues, neurophysiologistes et neurochirurgiens.

L'intervention elle-même est réalisée sous microscope, guidée par la neuronavigation et sécurisée par le monitoring neurophysiologique per-opératoire. L'objectif est une réduction majeure, voire une disparition des crises, avec à la clé une transformation de la qualité de vie.

À la Clinique Pasteur Tunis, cette prise en charge s'appuie sur la collaboration étroite entre le service de neurochirurgie et le centre d'explorations neurophysiologiques de la clinique, qui assure les bilans vidéo-EEG pré-chirurgicaux et le monitoring per-opératoire.`,
    image: '/images/fiches/neurochir-traitement-chirurgical-epilepsie.webp',
    indications: [
      { label: 'Épilepsie résistant aux traitements médicamenteux bien conduits', explication: `Quand les crises persistent malgré plusieurs traitements antiépileptiques bien suivis, une solution chirurgicale peut être étudiée chez certains patients soigneusement sélectionnés.` },
      { label: 'Crises invalidantes retentissant sur la vie quotidienne, scolaire ou professionnelle', explication: `Des crises fréquentes limitent la conduite, le travail, les études et la vie sociale. L'objectif de la chirurgie est de réduire fortement, voire de supprimer ces crises.` },
      { label: 'Zone épileptogène identifiée et accessible à un geste chirurgical', explication: `L'intervention n'est possible que si la région du cerveau d'où partent les crises est localisée avec précision et peut être traitée sans toucher aux fonctions essentielles.` },
      { label: 'Bilan pré-chirurgical complet concluant à une indication opératoire', explication: `Enregistrements des crises, IRM et évaluation neuropsychologique sont analysés en équipe : la chirurgie n'est proposée que si toutes ces données concordent.` },
    ],
    preparation: [
      'Bilan vidéo-EEG prolongé au centre d\'explorations neurophysiologiques',
      'IRM cérébrale de haute résolution',
      'Évaluation neuropsychologique complète',
      'Concertation multidisciplinaire validant l\'indication',
      'Consultation d\'anesthésie et jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Repérage précis de la zone à traiter grâce à la neuronavigation',
      'Craniotomie ciblée',
      'Exérèse de la zone épileptogène sous microscope',
      'Monitoring neurophysiologique continu pour protéger les fonctions',
      'Fermeture et surveillance en réanimation ou unité de soins continus',
    ],
    duree: '3 à 5 heures',
    resultats: 'Le traitement antiépileptique est poursuivi après l\'intervention puis réévalué progressivement par le neurologue. L\'évolution des crises est suivie de près lors de consultations régulières, avec des contrôles EEG au centre d\'explorations neurophysiologiques. La récupération est accompagnée pas à pas par l\'équipe.',
    risques: [
      'Fatigue et maux de tête transitoires après l\'intervention',
      'Troubles neurologiques transitoires, minimisés par le monitoring per-opératoire',
      'Persistance possible de certaines crises, nécessitant la poursuite d\'un traitement adapté',
    ],
  },
  {
    slug: 'chirurgie-malformations-vasculaires-cerebrales',
    title: 'Chirurgie des malformations vasculaires cérébrales',
    shortTitle: 'Malformations vasculaires',
    description: 'Traitement chirurgical des anévrismes, malformations artério-veineuses et cavernomes du cerveau, en concertation multidisciplinaire.',
    fullDescription: `Les malformations vasculaires cérébrales regroupent plusieurs anomalies des vaisseaux du cerveau : anévrismes (dilatation d'une artère), malformations artério-veineuses (communication anormale entre artères et veines) et cavernomes (amas de petits vaisseaux fragiles). Découvertes après un saignement ou fortuitement à l'occasion d'une imagerie, elles nécessitent une évaluation spécialisée.

Le traitement dépend du type de malformation, de sa localisation et de son histoire : certaines relèvent d'une simple surveillance, d'autres d'un traitement endovasculaire, d'autres enfin d'une chirurgie. La décision est toujours prise en concertation multidisciplinaire, au cas par cas, en pesant soigneusement le bénéfice et le risque de chaque option.

Lorsque la chirurgie est retenue, elle est réalisée sous microscope opératoire avec l'aide de la neuronavigation : exclusion d'un anévrisme par la pose d'un clip, exérèse d'un cavernome ou d'une malformation artério-veineuse accessible. Le monitoring neurophysiologique sécurise le geste dans les zones fonctionnelles.

À la Clinique Pasteur Tunis, cette chirurgie hautement spécialisée bénéficie d'un plateau technique de pointe — microscope neurochirurgical, neuronavigation, imagerie haute résolution — et d'une réanimation polyvalente dédiée qui encadre étroitement les suites opératoires.`,
    image: '/images/fiches/neurochir-chirurgie-malformations-vasculaires-cerebrales.webp',
    indications: [
      { label: 'Anévrisme cérébral nécessitant un traitement préventif ou après saignement', explication: `Un anévrisme est une petite poche fragile sur une artère du cerveau. Le traiter permet d'écarter le risque de saignement, ou d'éviter une récidive lorsqu'un saignement s'est déjà produit.` },
      { label: 'Malformation artério-veineuse symptomatique ou à risque', explication: `Cette communication anormale entre artères et veines peut provoquer maux de tête, crises ou saignements. Son traitement est décidé au cas par cas par une équipe multidisciplinaire.` },
      { label: 'Cavernome responsable de crises d\'épilepsie ou de saignements', explication: `Un cavernome est un amas de petits vaisseaux fragiles. Lorsqu'il saigne ou déclenche des crises d'épilepsie, son ablation chirurgicale peut être recommandée.` },
      { label: 'Malformation vasculaire découverte lors d\'un bilan et jugée à risque en concertation', explication: `Certaines malformations découvertes par hasard ne nécessitent qu'une surveillance ; d'autres, jugées à risque après discussion en équipe, bénéficient d'un traitement préventif.` },
    ],
    preparation: [
      'Imagerie vasculaire complète (angio-scanner, angio-IRM, artériographie selon les cas)',
      'Concertation multidisciplinaire pour choisir la meilleure stratégie',
      'Bilan pré-opératoire complet et consultation d\'anesthésie',
      'Adaptation des traitements en cours',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale avec surveillance renforcée',
      'Craniotomie ciblée planifiée par neuronavigation',
      'Traitement de la malformation sous microscope (clip d\'anévrisme, exérèse)',
      'Monitoring neurophysiologique dans les zones fonctionnelles',
      'Vérification de l\'exclusion complète de la malformation',
      'Fermeture soigneuse et surveillance en réanimation',
    ],
    duree: '3 à 6 heures',
    resultats: 'Une imagerie de contrôle vérifie l\'exclusion complète de la malformation. La surveillance initiale se déroule en réanimation, puis la récupération se poursuit en hospitalisation avec, si besoin, une rééducation adaptée. Un suivi au long cours en consultation, avec imagerie, est ensuite organisé.',
    risques: [
      'Fatigue et maux de tête transitoires',
      'Déficit neurologique, dont le risque est évalué et expliqué avant l\'intervention',
      'Vasospasme après certaines chirurgies d\'anévrisme, surveillé de près en réanimation',
      'Crises d\'épilepsie, prévenues par un traitement adapté',
    ],
  },
  {
    slug: 'neuronavigation',
    title: 'Neuronavigation',
    shortTitle: 'Neuronavigation',
    description: 'Technologie de guidage chirurgical assisté par ordinateur, véritable GPS du cerveau, qui augmente la précision et la sécurité des interventions.',
    fullDescription: `La neuronavigation est une technologie de guidage chirurgical assisté par ordinateur, souvent comparée à un GPS du cerveau. Elle permet au neurochirurgien de se repérer en temps réel dans l'anatomie du patient avec une précision millimétrique, en superposant la position de ses instruments aux images d'IRM ou de scanner réalisées avant l'intervention.

Concrètement, les images pré-opératoires du patient sont chargées dans le système de neuronavigation, puis mises en correspondance avec la position réelle de la tête au bloc opératoire. Tout au long de l'intervention, le chirurgien visualise sur un écran la position exacte de ses instruments par rapport à la lésion et aux zones fonctionnelles à préserver.

Les bénéfices sont concrets : des ouvertures crâniennes plus petites et parfaitement centrées, un accès plus direct à la lésion, un respect accru des zones sensibles du cerveau et, au total, des interventions plus précises et plus sûres. La neuronavigation est particulièrement précieuse pour les tumeurs profondes, les lésions de petite taille et la chirurgie des zones fonctionnelles.

À la Clinique Pasteur Tunis, le service de neurochirurgie dispose d'un système de neuronavigation couplé à l'IRM pré-opératoire de haute résolution, utilisé en routine pour la chirurgie crânienne, au bénéfice direct de la sécurité des patients.`,
    image: '/images/fiches/neurochir-neuronavigation.webp',
    indications: [
      { label: 'Chirurgie des tumeurs cérébrales, en particulier profondes ou de petite taille', explication: `Pour atteindre une lésion profonde ou minuscule, le guidage par neuronavigation permet de suivre le chemin le plus court et le plus sûr à travers le cerveau.` },
      { label: 'Biopsies cérébrales ciblées', explication: `Quand un simple prélèvement est nécessaire pour analyser une lésion, la neuronavigation guide l'aiguille avec une précision millimétrique.` },
      { label: 'Chirurgie proche des zones fonctionnelles (motricité, langage)', explication: `À proximité des régions qui commandent le mouvement ou la parole, ce guidage aide le chirurgien à préserver ces fonctions essentielles.` },
      { label: 'Chirurgie de l\'épilepsie', explication: `La zone d'où partent les crises est repérée sur l'imagerie puis retrouvée avec exactitude au bloc opératoire grâce à la neuronavigation.` },
      { label: 'Certaines interventions sur les malformations vasculaires', explication: `Pour aborder une malformation des vaisseaux du cerveau, le guidage permet une ouverture parfaitement centrée et un accès plus direct et plus sûr.` },
    ],
    preparation: [
      'IRM cérébrale de haute résolution réalisée avant l\'intervention selon un protocole dédié',
      'Planification de la trajectoire chirurgicale sur la console de neuronavigation',
      'Préparation habituelle de toute intervention neurochirurgicale (bilan, anesthésie, jeûne)',
    ],
    deroulement: [
      'Chargement des images du patient dans le système de neuronavigation',
      'Installation du patient et mise en correspondance des images avec sa position réelle',
      'Vérification de la précision du repérage avant de débuter',
      'Guidage en temps réel des instruments tout au long de l\'intervention',
      'Contrôle continu de la position par rapport à la lésion et aux zones à préserver',
    ],
    duree: 'Intégrée à la durée de l\'intervention neurochirurgicale',
    resultats: 'La neuronavigation contribue à des exérèses plus complètes et plus sûres, à des ouvertures crâniennes réduites et à une meilleure préservation des fonctions neurologiques. Elle participe directement à la qualité de la récupération post-opératoire.',
    risques: [
      'La neuronavigation est un outil de guidage sans risque propre pour le patient',
      'Elle réduit les risques de la chirurgie en augmentant la précision du geste',
    ],
  },
  {
    slug: 'chirurgie-nerfs-peripheriques',
    title: 'Chirurgie des nerfs périphériques',
    shortTitle: 'Nerfs périphériques',
    description: 'Traitement chirurgical des compressions nerveuses (canal carpien, nerf ulnaire) et des lésions traumatiques des nerfs des membres.',
    fullDescription: `Les nerfs périphériques, qui cheminent dans les bras et les jambes, peuvent être comprimés à des endroits de passage étroits ou lésés lors de traumatismes. La compression la plus fréquente est le syndrome du canal carpien, qui touche le nerf médian au poignet et provoque des fourmillements nocturnes des doigts ; la compression du nerf ulnaire au coude en est une autre cause classique.

La chirurgie de libération nerveuse consiste à ouvrir le tunnel anatomique responsable de la compression pour redonner de l'espace au nerf. C'est une intervention courte, souvent réalisée en ambulatoire, dont le soulagement des symptômes est généralement rapide, notamment pour les fourmillements nocturnes.

En cas de lésion traumatique d'un nerf (plaie, étirement), une réparation microchirurgicale peut être réalisée : suture directe du nerf ou greffe nerveuse sous microscope. La récupération est alors progressive, le nerf repoussant lentement, et s'accompagne d'une rééducation adaptée.

À la Clinique Pasteur Tunis, la chirurgie des nerfs périphériques est réalisée sous microscope opératoire par une équipe neurochirurgicale expérimentée, en lien avec le centre d'explorations neurophysiologiques de la clinique qui assure les électromyogrammes de diagnostic et de suivi.`,
    image: '/images/fiches/neurochir-chirurgie-nerfs-peripheriques.webp',
    indications: [
      { label: 'Syndrome du canal carpien avec fourmillements gênants ou perte de force', explication: `Le nerf comprimé au poignet provoque des fourmillements des doigts, surtout la nuit, puis une perte de force. Une courte intervention le libère et soulage rapidement ces symptômes.` },
      { label: 'Compression du nerf ulnaire au coude', explication: `Ce nerf, celui qui provoque une décharge électrique quand on se cogne le coude, peut être comprimé et entraîner fourmillements et faiblesse des derniers doigts. Sa libération chirurgicale évite l'aggravation.` },
      { label: 'Autres syndromes de compression nerveuse confirmés par électromyogramme', explication: `D'autres nerfs des bras ou des jambes peuvent être coincés dans des passages étroits. L'électromyogramme confirme la compression avant de proposer la libération.` },
      { label: 'Lésion traumatique d\'un nerf nécessitant une réparation', explication: `Après une plaie ou un étirement, un nerf sectionné peut être réparé sous microscope. Le nerf repousse ensuite lentement, avec une récupération progressive.` },
      { label: 'Tumeur bénigne d\'un nerf périphérique', explication: `Certaines petites tumeurs bénignes se développent sur les nerfs et deviennent gênantes ou douloureuses. Elles sont retirées en préservant soigneusement le nerf.` },
    ],
    preparation: [
      'Électromyogramme (EMG) confirmant la compression ou la lésion',
      'Consultation avec le chirurgien pour préciser le geste',
      'Consultation d\'anesthésie',
      'Jeûne selon le type d\'anesthésie prévu',
    ],
    deroulement: [
      'Anesthésie locorégionale ou générale selon le geste',
      'Courte incision en regard de la zone de compression',
      'Libération du nerf sous contrôle visuel, voire sous microscope',
      'Réparation microchirurgicale en cas de lésion traumatique',
      'Fermeture soigneuse et pansement',
      'Retour à domicile le jour même dans la plupart des cas',
    ],
    duree: '30 minutes à 2 heures selon le geste',
    resultats: 'Pour les libérations nerveuses, les fourmillements nocturnes disparaissent souvent rapidement ; la force et la sensibilité récupèrent ensuite progressivement. Après réparation d\'un nerf lésé, la récupération est plus lente, le nerf repoussant peu à peu, et s\'accompagne d\'une rééducation suivie par l\'équipe.',
    risques: [
      'Sensibilité cicatricielle transitoire',
      'Récupération parfois incomplète lorsque la compression était ancienne',
      'Raideur temporaire, améliorée par la rééducation',
    ],
  },
  {
    slug: 'traitement-nevralgie-trijumeau',
    title: 'Traitement de la névralgie du trijumeau',
    shortTitle: 'Névralgie du trijumeau',
    description: 'Prise en charge chirurgicale des douleurs faciales fulgurantes de la névralgie du trijumeau lorsque les médicaments ne suffisent plus.',
    fullDescription: `La névralgie du trijumeau se manifeste par des douleurs faciales fulgurantes, comparables à des décharges électriques, déclenchées par des gestes anodins : parler, mastiquer, se raser, se brosser les dents. Ces douleurs, parmi les plus intenses qui soient, altèrent profondément la qualité de vie lorsqu'elles se répètent.

Le traitement repose d'abord sur des médicaments spécifiques, efficaces chez la plupart des patients. Lorsque les douleurs résistent au traitement médical ou que celui-ci est mal toléré, plusieurs solutions chirurgicales existent. La plus complète est la décompression vasculaire microchirurgicale : dans de nombreux cas, la névralgie est causée par une petite artère qui bat au contact du nerf trijumeau ; l'intervention consiste à interposer un coussinet protecteur entre le vaisseau et le nerf, sous microscope, par une petite ouverture derrière l'oreille.

Des techniques moins invasives (thermocoagulation, compression par ballonnet) peuvent également être proposées selon l'âge, l'état général et les préférences du patient. Le choix de la technique est discuté au cas par cas avec le neurochirurgien.

À la Clinique Pasteur Tunis, la prise en charge de la névralgie du trijumeau associe une évaluation précise — IRM de haute résolution recherchant le conflit entre vaisseau et nerf — et l'expertise d'une équipe neurochirurgicale disposant du microscope opératoire et du monitoring per-opératoire.`,
    image: '/images/fiches/neurochir-traitement-nevralgie-trijumeau.webp',
    indications: [
      { label: 'Névralgie du trijumeau résistant au traitement médicamenteux', explication: `Quand les douleurs fulgurantes du visage persistent malgré les médicaments spécifiques, une solution chirurgicale peut apporter un soulagement durable.` },
      { label: 'Effets indésirables des médicaments empêchant leur poursuite', explication: `Certains patients tolèrent mal les traitements de la névralgie (somnolence, vertiges). La chirurgie offre alors une alternative pour ne pas rester sans solution.` },
      { label: 'Conflit entre un vaisseau et le nerf trijumeau identifié à l\'IRM', explication: `Dans de nombreux cas, la douleur vient d'une petite artère qui bat au contact du nerf. Quand l'IRM montre ce conflit, l'interposition d'un coussinet protecteur traite la cause même de la névralgie.` },
      { label: 'Douleurs faciales invalidantes retentissant sur l\'alimentation et la vie sociale', explication: `Quand parler, mastiquer ou se brosser les dents déclenche des décharges insupportables, la vie quotidienne devient très difficile. L'intervention vise à retrouver une vie normale.` },
    ],
    preparation: [
      'IRM cérébrale de haute résolution centrée sur le nerf trijumeau',
      'Évaluation précise du type de douleur par le neurochirurgien',
      'Bilan pré-opératoire et consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Petite ouverture du crâne derrière l\'oreille (décompression microvasculaire)',
      'Identification sous microscope du conflit entre le vaisseau et le nerf',
      'Interposition d\'un coussinet protecteur entre le vaisseau et le nerf',
      'Monitoring per-opératoire pour préserver l\'audition et les nerfs voisins',
      'Fermeture soigneuse et surveillance rapprochée',
    ],
    duree: '2 à 3 heures',
    resultats: 'Le soulagement des douleurs est souvent rapide, parfois immédiat, après une décompression réussie. Le traitement médicamenteux est ensuite diminué progressivement sous contrôle médical. Un suivi régulier permet de vérifier la stabilité du résultat dans le temps.',
    risques: [
      'Maux de tête et fatigue transitoires après l\'intervention',
      'Engourdissement facial temporaire',
      'Baisse d\'audition du côté opéré, rare grâce au monitoring per-opératoire',
      'Récidive possible à long terme, accessible à un nouveau traitement',
    ],
  },
];
