export const prestationsCarcinologique = [
  {
    slug: 'cancers-digestifs',
    title: 'Chirurgie des cancers digestifs (estomac, côlon, rectum, foie)',
    shortTitle: 'Cancers digestifs',
    description: 'Prise en charge chirurgicale des tumeurs de l\'appareil digestif, décidée en concertation pluridisciplinaire et adaptée à chaque patient.',
    fullDescription: `La chirurgie occupe une place centrale dans le traitement des cancers digestifs : estomac, côlon, rectum, foie, pancréas. Elle consiste à retirer la tumeur avec des marges de sécurité, ainsi que les ganglions de drainage, selon des règles carcinologiques précises qui conditionnent la qualité du traitement.

Chaque dossier est discuté en réunion de concertation pluridisciplinaire réunissant chirurgiens, oncologues, radiologues et autres spécialistes, afin de définir la meilleure stratégie : chirurgie d'emblée ou après un traitement de préparation, voie d'abord classique ou mini-invasive. La continuité digestive est rétablie chaque fois que possible dans le même temps opératoire.

À la Clinique Pasteur Tunis, la chirurgie des cancers digestifs s'appuie sur un plateau technique complet — imagerie, endoscopie, blocs opératoires équipés, réanimation — et sur des analyses extemporanées disponibles pendant l'intervention. L'analyse anatomopathologique de la pièce opératoire est assurée et guide la suite du traitement, dans un parcours coordonné et attentif au patient et à ses proches.`,
    image: '/images/surgery-blue-1.webp',
    indications: [
      'Tumeur du côlon ou du rectum confirmée par biopsie',
      'Tumeur de l\'estomac relevant d\'une exérèse chirurgicale',
      'Tumeurs du foie, primitives ou secondaires, accessibles à une résection',
      'Tumeurs du pancréas ou des voies biliaires sélectionnées',
      'Complications tumorales nécessitant une chirurgie (occlusion, saignement)',
    ],
    preparation: [
      'Bilan complet : endoscopie avec biopsies, scanner et imagerie complémentaire',
      'Présentation du dossier en réunion de concertation pluridisciplinaire',
      'Éventuel traitement de préparation (chimiothérapie ou radiothérapie) avant la chirurgie selon les cas',
      'Optimisation de l\'état nutritionnel et consultation d\'anesthésie',
      'Jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Voie d\'abord adaptée : cœlioscopie ou incision classique selon la tumeur',
      'Exérèse de la tumeur avec marges de sécurité',
      'Curage des ganglions de drainage selon les règles carcinologiques',
      'Analyses extemporanées en cours d\'intervention si nécessaire',
      'Rétablissement de la continuité digestive chaque fois que possible',
      'Surveillance post-opératoire adaptée, en réanimation si besoin',
    ],
    duree: '2 à 5 heures selon la localisation',
    resultats: 'La récupération est progressive, avec une réalimentation par étapes et un accompagnement attentif de l\'équipe. Les résultats de l\'analyse anatomopathologique, présentés en concertation pluridisciplinaire, déterminent la suite du traitement et le calendrier de surveillance.',
    risques: [
      'Fistule anastomotique, complication surveillée de près et prise en charge sans délai',
      'Infection ou retard de cicatrisation, traités de façon adaptée',
      'Troubles digestifs transitoires pendant la convalescence',
      'Risques spécifiques à chaque localisation, expliqués en détail avant l\'intervention',
    ],
  },
  {
    slug: 'cancers-urologiques',
    title: 'Chirurgie des cancers urologiques (rein, vessie, prostate)',
    shortTitle: 'Cancers urologiques',
    description: 'Traitement chirurgical des tumeurs du rein, de la vessie et de la prostate, avec des techniques mini-invasives chaque fois que possible.',
    fullDescription: `La chirurgie des cancers urologiques traite les tumeurs du rein, de la vessie, de la prostate et des voies urinaires. Selon l'organe et le stade de la maladie, elle peut consister en une ablation partielle préservant l'organe, ou en une exérèse complète associée au curage des ganglions.

Le choix de la stratégie est toujours validé en concertation pluridisciplinaire, et les techniques mini-invasives — laparoscopie, chirurgie endoscopique par les voies naturelles pour certaines tumeurs de la vessie — sont privilégiées chaque fois qu'elles offrent la même qualité carcinologique, afin d'alléger les suites opératoires.

À la Clinique Pasteur Tunis, les urologues prennent en charge l'ensemble de ce parcours : bilan initial avec l'imagerie sur place, intervention dans des blocs équipés, surveillance post-opératoire et suivi au long cours. L'analyse anatomopathologique des pièces opératoires est assurée et oriente précisément la suite du traitement.`,
    image: '/images/surgery-blue-2.webp',
    indications: [
      'Tumeur du rein découverte à l\'imagerie',
      'Tumeur de la vessie diagnostiquée par endoscopie',
      'Cancer localisé de la prostate après bilan complet',
      'Tumeurs des voies urinaires supérieures',
      'Tumeurs du testicule nécessitant une exérèse',
    ],
    preparation: [
      'Bilan urologique complet : imagerie, endoscopie et biopsies selon l\'organe',
      'Présentation du dossier en concertation pluridisciplinaire',
      'Bilan pré-opératoire et consultation d\'anesthésie',
      'Adaptation des anticoagulants selon l\'avis médical',
      'Jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Voie d\'abord adaptée : endoscopie par les voies naturelles, laparoscopie ou chirurgie ouverte',
      'Exérèse de la tumeur, partielle ou totale selon la situation',
      'Curage ganglionnaire lorsque les règles carcinologiques le requièrent',
      'Reconstruction ou dérivation urinaire si nécessaire',
      'Surveillance post-opératoire adaptée au geste réalisé',
    ],
    duree: '1 à 5 heures selon l\'organe et la technique',
    resultats: 'Les suites dépendent de l\'organe traité : hospitalisation courte pour les gestes endoscopiques, convalescence plus encadrée pour les exérèses majeures. Le résultat anatomopathologique guide la suite du traitement et un calendrier de surveillance urologique régulier est mis en place.',
    risques: [
      'Saignement ou infection, peu fréquents et pris en charge rapidement',
      'Troubles urinaires transitoires selon le geste réalisé',
      'Retentissement possible sur la continence ou la fonction sexuelle pour certaines interventions, expliqué au préalable et accompagné',
    ],
  },
  {
    slug: 'cancers-gynecologiques',
    title: 'Chirurgie des cancers gynécologiques',
    shortTitle: 'Cancers gynécologiques',
    description: 'Prise en charge chirurgicale des cancers de l\'utérus, du col, de l\'ovaire et des autres cancers gynécologiques, dans un cadre pluridisciplinaire.',
    fullDescription: `La chirurgie des cancers gynécologiques traite les tumeurs de l'utérus, du col utérin, des ovaires, des trompes, du vagin et de la vulve. Selon la localisation et le stade, elle peut aller d'un geste conservateur à une exérèse plus étendue associée au curage des ganglions pelviens.

La stratégie est définie pour chaque patiente en concertation pluridisciplinaire, en tenant compte de sa situation personnelle, notamment d'un éventuel désir de préservation de la fertilité lorsque la maladie le permet. Les voies mini-invasives sont utilisées chaque fois qu'elles sont appropriées sur le plan carcinologique.

À la Clinique Pasteur Tunis, les patientes sont prises en charge par des chirurgiens gynécologues expérimentés en cancérologie, dans un environnement attentif et respectueux. L'analyse anatomopathologique des pièces opératoires est assurée, y compris en extemporané pendant l'intervention lorsque c'est utile, et un accompagnement psychologique peut être proposé tout au long du parcours.`,
    image: '/images/maternite.webp',
    indications: [
      'Cancer de l\'endomètre (corps de l\'utérus) confirmé par prélèvement',
      'Cancer du col utérin relevant d\'un traitement chirurgical',
      'Tumeurs de l\'ovaire suspectes ou confirmées',
      'Lésions précancéreuses étendues nécessitant une exérèse',
      'Cancers de la vulve ou du vagin sélectionnés',
    ],
    preparation: [
      'Bilan complet : examen gynécologique, imagerie (IRM, scanner) et prélèvements',
      'Présentation du dossier en concertation pluridisciplinaire',
      'Discussion avec la patiente des options et de leurs conséquences, y compris sur la fertilité',
      'Consultation d\'anesthésie et bilan pré-opératoire',
      'Jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Voie d\'abord adaptée : cœlioscopie, voie vaginale ou incision selon la situation',
      'Exérèse de la tumeur selon les règles carcinologiques',
      'Curage des ganglions pelviens lorsque le stade le requiert',
      'Analyse extemporanée en cours d\'intervention si nécessaire',
      'Surveillance post-opératoire attentive',
    ],
    duree: '2 à 4 heures selon l\'intervention',
    resultats: 'La convalescence est progressive, accompagnée par l\'équipe soignante. Les résultats anatomopathologiques, discutés en concertation pluridisciplinaire, déterminent la nécessité éventuelle d\'un traitement complémentaire et le rythme de la surveillance gynécologique.',
    risques: [
      'Hématome ou infection post-opératoire, peu fréquents',
      'Lymphocèle ou gonflement des membres inférieurs après curage ganglionnaire, surveillés et pris en charge',
      'Troubles urinaires transitoires selon l\'étendue du geste',
      'Retentissement sur la fertilité pour certaines interventions, toujours discuté au préalable',
    ],
  },
  {
    slug: 'cancers-thyroidiens',
    title: 'Chirurgie des cancers thyroïdiens',
    shortTitle: 'Cancers thyroïdiens',
    description: 'Ablation partielle ou totale de la thyroïde pour nodule suspect ou cancer confirmé, avec une attention particulière aux nerfs de la voix et aux glandes parathyroïdes.',
    fullDescription: `La chirurgie est le traitement de première intention de la plupart des cancers de la thyroïde, dont le pronostic est généralement favorable. Elle consiste à retirer un lobe de la glande ou sa totalité, parfois avec les ganglions voisins, selon la nature et l'étendue de la lésion.

L'intervention se déroule par une incision discrète à la base du cou. Deux structures font l'objet d'une attention constante : les nerfs récurrents, qui commandent les cordes vocales, et les glandes parathyroïdes, qui régulent le calcium. Leur repérage et leur préservation sont au cœur de la technique chirurgicale.

À la Clinique Pasteur Tunis, la chirurgie thyroïdienne est réalisée par des chirurgiens expérimentés, en lien avec les endocrinologues pour le bilan et le suivi. L'analyse anatomopathologique de la pièce opératoire est assurée, y compris en extemporané pendant l'intervention si nécessaire, et un traitement hormonal substitutif simple est mis en place lorsque la glande est retirée en totalité.`,
    image: '/images/chirurgie.webp',
    indications: [
      'Nodule thyroïdien suspect à la ponction ou à l\'échographie',
      'Cancer thyroïdien confirmé par les prélèvements',
      'Goitre nodulaire avec nodule suspect associé',
      'Nodule augmentant de volume ou comprimant les organes voisins',
    ],
    preparation: [
      'Bilan complet : échographie cervicale, ponction du nodule et dosages hormonaux',
      'Examen des cordes vocales avant l\'intervention si nécessaire',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Incision discrète à la base du cou, dans un pli naturel de la peau',
      'Repérage et préservation des nerfs récurrents et des glandes parathyroïdes',
      'Ablation du lobe concerné ou de la totalité de la glande selon le cas',
      'Analyse extemporanée en cours d\'intervention si nécessaire',
      'Curage ganglionnaire associé lorsque la situation le requiert',
      'Fermeture soignée pour une cicatrice discrète',
    ],
    duree: '1 à 3 heures',
    resultats: 'L\'hospitalisation est courte et la cicatrice, placée dans un pli du cou, devient très discrète avec le temps. En cas d\'ablation totale, un traitement hormonal substitutif quotidien simple remplace la fonction de la glande. Le résultat anatomopathologique définitif oriente le suivi, organisé avec l\'endocrinologue.',
    risques: [
      'Modification transitoire de la voix, le plus souvent régressive',
      'Baisse temporaire du calcium sanguin, corrigée par une supplémentation',
      'Hématome cervical post-opératoire, rare et surveillé de près',
      'Cicatrice, habituellement fine et discrète',
    ],
  },
  {
    slug: 'cancers-du-sein',
    title: 'Chirurgie des cancers du sein',
    shortTitle: 'Cancers du sein',
    description: 'Traitement chirurgical du cancer du sein, conservateur chaque fois que possible, avec technique du ganglion sentinelle et accompagnement personnalisé.',
    fullDescription: `La chirurgie est un pilier du traitement du cancer du sein. Chaque fois que la taille et la localisation de la tumeur le permettent, un traitement conservateur est privilégié : seule la zone malade est retirée, avec des marges de sécurité, en préservant le sein. Lorsque l'ablation complète (mastectomie) est nécessaire, une reconstruction peut être envisagée, immédiate ou différée.

L'évaluation des ganglions de l'aisselle fait partie intégrante du traitement : la technique du ganglion sentinelle permet, dans de nombreux cas, de n'analyser que les premiers ganglions de drainage et d'éviter un curage étendu lorsque celui-ci n'est pas nécessaire.

À la Clinique Pasteur Tunis, chaque dossier est discuté en concertation pluridisciplinaire réunissant chirurgien, oncologue et radiologue, et la patiente est accompagnée à chaque étape, y compris sur le plan psychologique. L'analyse anatomopathologique des pièces opératoires est assurée, avec examen extemporané pendant l'intervention lorsque c'est utile.`,
    image: '/images/surgery-blue-3.webp',
    indications: [
      'Cancer du sein confirmé par biopsie',
      'Lésion mammaire suspecte nécessitant une exérèse diagnostique',
      'Lésions précancéreuses étendues (carcinome in situ)',
      'Récidive locale après traitement conservateur',
      'Chirurgie de réduction de risque dans des situations très particulières, après avis spécialisé',
    ],
    preparation: [
      'Bilan sénologique complet : mammographie, échographie, IRM si nécessaire et biopsie',
      'Présentation du dossier en concertation pluridisciplinaire',
      'Repérage radiologique de la lésion avant l\'intervention si elle n\'est pas palpable',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Exérèse de la tumeur avec marges de sécurité (traitement conservateur) ou mastectomie selon le cas',
      'Repérage et prélèvement du ganglion sentinelle, ou curage axillaire si nécessaire',
      'Examen extemporané en cours d\'intervention lorsque c\'est utile',
      'Remodelage soigneux du sein pour un résultat esthétique optimal',
      'Fermeture discrète et pansement adapté',
    ],
    duree: '1 à 3 heures',
    resultats: 'L\'hospitalisation est courte et les douleurs généralement modérées. Les résultats anatomopathologiques complets, disponibles après quelques jours, sont présentés en concertation pluridisciplinaire pour définir les traitements complémentaires éventuels et le suivi. L\'équipe accompagne la patiente à chaque étape, y compris pour un éventuel projet de reconstruction.',
    risques: [
      'Hématome ou infection de la zone opérée, peu fréquents',
      'Gonflement du bras (lymphœdème) après curage axillaire, prévenu par une surveillance et des conseils adaptés',
      'Troubles de la sensibilité de la zone opérée, souvent transitoires',
      'Nécessité éventuelle d\'une réintervention selon les résultats définitifs des marges',
    ],
  },
  {
    slug: 'chip-chimio-hyperthermie',
    title: 'CHIP (Chimio-Hyperthermie Intrapéritonéale)',
    shortTitle: 'CHIP',
    description: 'Technique associant chirurgie complète des lésions péritonéales et chimiothérapie chauffée administrée dans l\'abdomen au cours de la même intervention.',
    fullDescription: `La CHIP (chimio-hyperthermie intrapéritonéale) est une technique spécialisée destinée à certains cancers ayant atteint le péritoine, la membrane qui tapisse l'intérieur de l'abdomen. Elle associe deux temps complémentaires au cours d'une même intervention : l'exérèse chirurgicale complète des lésions visibles, puis l'administration d'une chimiothérapie chauffée directement dans la cavité abdominale.

La chaleur augmente l'efficacité de la chimiothérapie, et son administration locale permet d'atteindre les cellules résiduelles microscopiques tout en limitant le passage dans le reste de l'organisme. Cette approche exigeante s'adresse à des patients rigoureusement sélectionnés en concertation pluridisciplinaire, après un bilan très complet.

À la Clinique Pasteur Tunis, la CHIP est réalisée par une équipe chirurgicale et anesthésique entraînée, avec une surveillance post-opératoire en réanimation. Le patient et ses proches sont longuement informés en amont du déroulement de l'intervention et de la convalescence, qui demande du temps et un accompagnement suivi.`,
    image: '/images/bloc-operatoire.webp',
    indications: [
      'Atteinte péritonéale de certains cancers digestifs, dans des cas sélectionnés',
      'Certaines tumeurs de l\'ovaire avec extension péritonéale',
      'Pseudomyxome péritonéal',
      'Mésothéliome péritonéal, après avis spécialisé',
      'Indication toujours validée en réunion de concertation pluridisciplinaire',
    ],
    preparation: [
      'Bilan exhaustif : imagerie complète et évaluation précise de l\'étendue des lésions',
      'Évaluation de l\'état général et nutritionnel du patient',
      'Validation de l\'indication en concertation pluridisciplinaire',
      'Consultation d\'anesthésie approfondie',
      'Information détaillée du patient et de ses proches sur l\'intervention et la convalescence',
    ],
    deroulement: [
      'Anesthésie générale avec surveillance renforcée',
      'Exploration complète de la cavité abdominale',
      'Exérèse chirurgicale de l\'ensemble des lésions péritonéales visibles',
      'Mise en place du circuit de perfusion intrapéritonéale',
      'Administration de la chimiothérapie chauffée dans l\'abdomen pendant la durée requise',
      'Lavage, vérifications et fermeture',
      'Transfert en réanimation pour la surveillance initiale',
    ],
    duree: 'Intervention longue, souvent 6 à 10 heures',
    resultats: 'La convalescence est progressive, avec un séjour initial en réanimation puis une hospitalisation prolongée le temps de la récupération digestive et nutritionnelle. Un suivi oncologique rapproché est ensuite organisé. Pour les indications bien sélectionnées, la CHIP offre une possibilité de traitement là où les options étaient auparavant limitées.',
    risques: [
      'Complications digestives (fistule, retard de reprise du transit), surveillées de près en post-opératoire',
      'Effets transitoires de la chimiothérapie sur les analyses sanguines, contrôlés régulièrement',
      'Infections post-opératoires, prévenues et traitées activement',
      'Convalescence prolongée nécessitant un accompagnement nutritionnel',
    ],
  },
  {
    slug: 'curage-ganglionnaire',
    title: 'Curage ganglionnaire',
    shortTitle: 'Curage ganglionnaire',
    description: 'Ablation chirurgicale des ganglions lymphatiques de drainage d\'une tumeur, temps essentiel du traitement et de l\'évaluation de nombreux cancers.',
    fullDescription: `Les ganglions lymphatiques constituent le premier relais de drainage des organes : en cancérologie, leur analyse renseigne précisément sur l'extension de la maladie et leur ablation participe au contrôle local du cancer. Le curage ganglionnaire consiste à retirer chirurgicalement le groupe de ganglions drainant la tumeur : aisselle pour le sein, pelvis pour les cancers gynécologiques et urologiques, cou pour la thyroïde, relais correspondants pour les cancers digestifs.

Le curage est le plus souvent réalisé au cours de la même intervention que l'ablation de la tumeur. Son étendue est définie selon des règles précises, et la technique du ganglion sentinelle permet, dans certaines localisations, de limiter le geste lorsque les premiers relais sont indemnes.

À la Clinique Pasteur Tunis, les curages ganglionnaires sont réalisés par des chirurgiens expérimentés dans chaque spécialité concernée. L'ensemble des ganglions prélevés fait l'objet d'une analyse anatomopathologique dont les résultats, présentés en concertation pluridisciplinaire, orientent les traitements complémentaires.`,
    image: '/images/surgery-blue-4.webp',
    indications: [
      'Temps ganglionnaire associé à la chirurgie d\'un cancer du sein',
      'Curage pelvien des cancers gynécologiques ou urologiques',
      'Curage cervical associé à la chirurgie thyroïdienne',
      'Curage réglé des cancers digestifs',
      'Ganglion sentinelle positif nécessitant un complément de curage',
      'Adénopathie suspecte à retirer pour analyse',
    ],
    preparation: [
      'Bilan d\'imagerie précisant les aires ganglionnaires concernées',
      'Discussion de l\'étendue du curage en concertation pluridisciplinaire',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale, le plus souvent dans le même temps que l\'exérèse de la tumeur',
      'Abord de l\'aire ganglionnaire concernée',
      'Dissection minutieuse préservant les vaisseaux et les nerfs voisins',
      'Ablation en bloc du groupe ganglionnaire selon les règles carcinologiques',
      'Mise en place éventuelle d\'un petit drain temporaire',
      'Fermeture soigneuse',
    ],
    duree: '30 minutes à 2 heures selon l\'aire concernée, souvent intégré à l\'intervention principale',
    resultats: 'L\'analyse anatomopathologique de l\'ensemble des ganglions prélevés précise le stade de la maladie et guide les traitements complémentaires. Un petit drainage temporaire est parfois nécessaire les premiers jours. Des conseils spécifiques sont remis pour prévenir le gonflement du membre concerné lorsque le curage s\'y prête.',
    risques: [
      'Écoulement lymphatique transitoire (lymphocèle), surveillé et ponctionné si besoin',
      'Gonflement du membre voisin (lymphœdème), prévenu par des conseils et une prise en charge précoce',
      'Troubles de sensibilité de la zone opérée, souvent régressifs',
    ],
  },
  {
    slug: 'reconstruction-post-cancer',
    title: 'Chirurgie de reconstruction post-cancer',
    shortTitle: 'Reconstruction',
    description: 'Reconstruction chirurgicale après traitement d\'un cancer, notamment reconstruction mammaire, pour restaurer l\'intégrité corporelle et la qualité de vie.',
    fullDescription: `La chirurgie de reconstruction fait partie intégrante du parcours de soins en cancérologie. Elle vise à restaurer la forme et l'apparence d'une région opérée — le sein après mastectomie en est l'exemple le plus fréquent — et contribue de façon essentielle à la qualité de vie et à la reconstruction personnelle après la maladie.

Plusieurs techniques existent : reconstruction par prothèse, reconstruction utilisant les propres tissus de la patiente (lambeaux), ou techniques combinées, complétées si besoin par des gestes de symétrisation et la reconstruction de l'aréole. La reconstruction peut être immédiate, dans le même temps que l'ablation, ou différée après la fin des traitements : ce choix est discuté au cas par cas avec l'équipe.

À la Clinique Pasteur Tunis, le projet de reconstruction est abordé dès la préparation du traitement, en concertation avec l'oncologue afin de choisir le moment le plus opportun. Les patientes bénéficient d'une information complète sur les techniques possibles et d'un accompagnement attentif, étape par étape, jusqu'au résultat final.`,
    image: '/images/esthetique.webp',
    indications: [
      'Reconstruction mammaire après mastectomie, immédiate ou différée',
      'Correction de séquelles d\'un traitement conservateur du sein',
      'Reconstruction après chirurgie d\'autres localisations (paroi, tissus mous)',
      'Symétrisation du sein controlatéral',
      'Reconstruction de l\'aréole et du mamelon en fin de parcours',
    ],
    preparation: [
      'Consultation dédiée pour présenter les techniques possibles et leurs étapes',
      'Coordination avec l\'oncologue pour choisir le moment adapté par rapport aux traitements',
      'Bilan pré-opératoire et consultation d\'anesthésie',
      'Arrêt du tabac vivement conseillé pour favoriser la cicatrisation',
      'Jeûne de 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Reconstruction selon la technique choisie : prothèse, tissus autologues ou technique combinée',
      'Remodelage soigneux pour un résultat harmonieux',
      'Gestes complémentaires programmés en étapes si nécessaire (symétrisation, aréole)',
      'Pansements adaptés et surveillance post-opératoire',
      'Suivi rapproché de la cicatrisation en consultation',
    ],
    duree: '1 à 5 heures selon la technique',
    resultats: 'Le résultat s\'apprécie progressivement, au fil de la cicatrisation et des éventuelles étapes complémentaires. La reconstruction contribue de façon importante au bien-être et à la confiance retrouvée. L\'équipe reste disponible tout au long du parcours pour ajuster et parfaire le résultat.',
    risques: [
      'Retard de cicatrisation, favorisé par le tabac, d\'où l\'importance de son arrêt',
      'Hématome ou infection, peu fréquents et traités rapidement',
      'Coque ou déplacement en cas de prothèse, accessibles à une reprise',
      'Nécessité d\'étapes complémentaires pour optimiser le résultat, prévues dans le projet initial',
    ],
  },
  {
    slug: 'biopsies-chirurgicales',
    title: 'Biopsies chirurgicales',
    shortTitle: 'Biopsies',
    description: 'Prélèvement chirurgical d\'un tissu suspect lorsque les biopsies simples sont impossibles ou insuffisantes, pour établir un diagnostic précis.',
    fullDescription: `La biopsie chirurgicale consiste à prélever, au bloc opératoire, un fragment ou la totalité d'une lésion suspecte afin d'en établir la nature exacte. Elle est proposée lorsque les prélèvements plus simples — ponction ou biopsie guidée par l'imagerie — sont impossibles, insuffisants ou discordants avec les images.

Selon la localisation, le geste peut être une biopsie-exérèse, qui retire la totalité de la lésion (ganglion, nodule sous-cutané, lésion mammaire), ou une biopsie incisionnelle qui n'en prélève qu'un fragment représentatif. Un repérage radiologique préalable est parfois réalisé pour guider précisément le chirurgien vers une lésion non palpable.

À la Clinique Pasteur Tunis, les biopsies chirurgicales sont réalisées en hospitalisation de jour dans la plupart des cas, sous anesthésie adaptée. L'analyse anatomopathologique des prélèvements est assurée, avec possibilité d'examen extemporané pendant l'intervention lorsque la situation le justifie, et les résultats sont transmis rapidement au médecin pour organiser la suite de la prise en charge.`,
    image: '/images/radiologie-scanner.webp',
    indications: [
      'Ganglion augmenté de volume dont la nature doit être précisée',
      'Lésion suspecte inaccessible à une ponction guidée par l\'imagerie',
      'Prélèvements antérieurs insuffisants ou discordants avec l\'imagerie',
      'Nodule ou masse des tissus mous à retirer pour analyse complète',
      'Lésion mammaire non palpable nécessitant une exérèse repérée',
    ],
    preparation: [
      'Bilan d\'imagerie localisant précisément la lésion',
      'Repérage radiologique pré-opératoire si la lésion n\'est pas palpable',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant l\'intervention si une anesthésie générale est prévue',
      'Adaptation des anticoagulants selon l\'avis médical',
    ],
    deroulement: [
      'Anesthésie locale, locorégionale ou générale selon la localisation',
      'Incision discrète en regard de la lésion',
      'Prélèvement du fragment ou exérèse complète de la lésion',
      'Examen extemporané en cours d\'intervention si nécessaire',
      'Vérification de l\'absence de saignement et fermeture soignée',
      'Sortie le jour même dans la plupart des cas',
    ],
    duree: '30 minutes à 1 heure 30',
    resultats: 'Le prélèvement fait l\'objet d\'une analyse anatomopathologique complète dont les résultats sont transmis au médecin dans les jours qui suivent. Ce diagnostic précis permet d\'orienter la prise en charge la plus adaptée. La cicatrice est généralement discrète et les suites simples.',
    risques: [
      'Petit hématome ou gonflement de la zone prélevée',
      'Infection locale, rare et traitée simplement',
      'Sensibilité transitoire de la cicatrice',
    ],
  },
];
