export const prestationsOrl = [
  {
    slug: 'amygdalectomie-adenoidectomie',
    title: 'Amygdalectomie et adénoïdectomie',
    shortTitle: 'Amygdales et végétations',
    description: 'Ablation des amygdales et/ou des végétations adénoïdes, intervention fréquente chez l\'enfant en cas d\'infections répétées ou de gêne respiratoire.',
    fullDescription: `L'amygdalectomie (ablation des amygdales) et l'adénoïdectomie (ablation des végétations adénoïdes) comptent parmi les interventions les plus fréquentes en ORL, en particulier chez l'enfant. Elles sont proposées lorsque les amygdales ou les végétations sont responsables d'infections répétées (angines, otites) ou d'une obstruction respiratoire, notamment de ronflements avec pauses respiratoires pendant le sommeil.

L'intervention est réalisée par la bouche, sous anesthésie générale, sans aucune cicatrice visible. Selon les cas, le chirurgien retire les amygdales, les végétations, ou les deux au cours de la même anesthésie.

Les bénéfices sont souvent rapidement perceptibles : sommeil plus paisible, respiration plus libre, diminution nette des épisodes infectieux, meilleur appétit et regain d'énergie chez l'enfant.

À la Clinique Pasteur Tunis, cette intervention est réalisée par des chirurgiens ORL expérimentés en prise en charge pédiatrique, dans un environnement pensé pour rassurer l'enfant et ses parents, le plus souvent dans le cadre d'une hospitalisation courte.`,
    image: '/images/pediatrique.webp',
    indications: [
      'Angines à répétition malgré un traitement bien conduit',
      'Ronflements avec pauses respiratoires pendant le sommeil (apnées)',
      'Obstruction nasale chronique liée aux végétations',
      'Otites séreuses répétées associées aux végétations',
      'Amygdales très volumineuses gênant la respiration ou la déglutition',
    ],
    preparation: [
      'Consultation ORL avec examen complet',
      'Consultation d\'anesthésie obligatoire quelques jours avant',
      'Bilan sanguin si demandé par l\'anesthésiste',
      'Être à jeun 6 heures avant l\'intervention',
      'Signaler tout épisode infectieux récent (fièvre, angine) avant l\'intervention',
    ],
    deroulement: [
      'Accueil de l\'enfant et des parents dans le service',
      'Anesthésie générale par une équipe habituée aux enfants',
      'Ablation des amygdales et/ou des végétations par la bouche, sans incision externe',
      'Vérification soigneuse de l\'absence de saignement',
      'Réveil surveillé puis retour en chambre auprès des parents',
    ],
    duree: '30 minutes environ',
    resultats: 'Le retour à domicile a lieu le jour même ou le lendemain. Des douleurs à la déglutition sont normales pendant quelques jours et sont bien soulagées par les antalgiques prescrits. Une alimentation lisse et fraîche est conseillée au début, avec un repos d\'une dizaine de jours avant la reprise de l\'école.',
    risques: [
      'Douleurs à la déglutition pendant quelques jours, bien contrôlées par le traitement',
      'Petit saignement possible dans les jours suivant l\'intervention, motivant une consultation',
      'Fièvre légère transitoire',
    ],
  },
  {
    slug: 'chirurgie-des-sinus',
    title: 'Chirurgie des sinus (sinusite chronique)',
    shortTitle: 'Chirurgie des sinus',
    description: 'Traitement chirurgical endoscopique des sinusites chroniques et des polypes, réalisé par les voies naturelles sans cicatrice.',
    fullDescription: `La sinusite chronique se manifeste par une obstruction nasale persistante, des écoulements, une pesanteur du visage et parfois une perte de l'odorat. Lorsque les traitements médicaux (lavages, corticoïdes locaux, antibiotiques) ne suffisent plus, une chirurgie des sinus peut être proposée.

L'intervention est réalisée par voie endoscopique, entièrement par les narines, sans aucune incision sur le visage. À l'aide d'un endoscope haute définition et d'instruments fins, le chirurgien ouvre les cavités sinusiennes obstruées, retire les polypes éventuels et rétablit une ventilation et un drainage normaux des sinus.

Cette chirurgie fonctionnelle respecte au maximum les structures nasales saines. Elle est suivie de soins locaux simples (lavages de nez) qui contribuent grandement à la qualité du résultat.

À la Clinique Pasteur Tunis, la chirurgie des sinus bénéficie d'un équipement endoscopique haute définition et de l'expertise de chirurgiens ORL rompus aux techniques mini-invasives, pour un confort respiratoire durablement retrouvé.`,
    image: '/images/endoscopie.webp',
    indications: [
      'Sinusite chronique résistant au traitement médical',
      'Polypose naso-sinusienne gênante',
      'Sinusites aiguës à répétition',
      'Sinusite d\'origine dentaire ou fongique',
      'Mucocèle ou kyste sinusien symptomatique',
    ],
    preparation: [
      'Scanner des sinus récent, indispensable pour guider le chirurgien',
      'Traitement médical préparatoire parfois prescrit avant l\'intervention',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Arrêt du tabac vivement recommandé',
    ],
    deroulement: [
      'Anesthésie générale',
      'Introduction de l\'endoscope par les narines, sans incision externe',
      'Ouverture des sinus obstrués et ablation des polypes éventuels',
      'Rétablissement du drainage naturel des sinus',
      'Mise en place éventuelle de petits tampons nasaux temporaires',
      'Surveillance en salle de réveil puis retour en chambre',
    ],
    duree: '1 à 2 heures',
    resultats: 'Le retour à domicile a lieu le jour même ou le lendemain. Une obstruction nasale et de discrets saignements sont normaux les premiers jours. Les lavages de nez réguliers sont essentiels pendant la convalescence. Le confort respiratoire s\'installe progressivement au fil des semaines.',
    risques: [
      'Saignement nasal léger les premiers jours',
      'Croûtes nasales transitoires nécessitant des lavages réguliers',
      'Récidive possible des polypes à long terme, surveillée en consultation',
    ],
  },
  {
    slug: 'septoplastie',
    title: 'Septoplastie (déviation de la cloison nasale)',
    shortTitle: 'Septoplastie',
    description: 'Correction chirurgicale de la déviation de la cloison nasale pour restaurer une respiration nasale confortable.',
    fullDescription: `La cloison nasale sépare les deux fosses nasales. Lorsqu'elle est déviée — de naissance ou à la suite d'un traumatisme — elle peut gêner le passage de l'air et provoquer une obstruction nasale chronique, des ronflements, des sinusites répétées ou des maux de tête.

La septoplastie est l'intervention qui corrige cette déviation. Elle est réalisée entièrement par l'intérieur des narines, sans aucune cicatrice visible ni modification de la forme du nez. Le chirurgien redresse la cloison en remodelant le cartilage et l'os déviés, tout en préservant la solidité de la structure nasale.

Il s'agit d'une chirurgie fonctionnelle dont l'objectif est le confort respiratoire. Elle peut être associée, si nécessaire, à un geste sur les cornets (structures internes du nez) pour optimiser le résultat.

À la Clinique Pasteur Tunis, la septoplastie est pratiquée par des chirurgiens ORL expérimentés, dans le cadre d'une hospitalisation courte, avec un accompagnement attentif durant la convalescence.`,
    image: '/images/chirurgie.webp',
    indications: [
      'Obstruction nasale chronique liée à une déviation de la cloison',
      'Ronflements favorisés par la mauvaise ventilation nasale',
      'Sinusites répétées entretenues par la déviation',
      'Saignements de nez récidivants du côté dévié',
      'Gêne respiratoire à l\'effort',
    ],
    preparation: [
      'Consultation ORL avec examen endoscopique des fosses nasales',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Arrêt du tabac recommandé avant et après l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Incision discrète à l\'intérieur de la narine, invisible de l\'extérieur',
      'Redressement de la cloison en remodelant cartilage et os déviés',
      'Geste complémentaire éventuel sur les cornets',
      'Mise en place de petites attelles ou tampons nasaux temporaires',
      'Surveillance puis retour en chambre',
    ],
    duree: '45 minutes à 1 heure 30',
    resultats: 'Le retour à domicile a lieu le jour même ou le lendemain. Le nez reste bouché quelques jours, le temps que l\'œdème diminue et que les éventuels tampons soient retirés. La respiration s\'améliore ensuite progressivement, avec un résultat qui se stabilise en quelques semaines.',
    risques: [
      'Obstruction nasale transitoire liée à l\'œdème post-opératoire',
      'Petits saignements les premiers jours',
      'Sécheresse ou croûtes nasales temporaires, soulagées par les lavages',
    ],
  },
  {
    slug: 'tympanoplastie',
    title: 'Tympanoplastie (chirurgie du tympan)',
    shortTitle: 'Tympanoplastie',
    description: 'Réparation chirurgicale du tympan perforé, sous microscope, pour protéger l\'oreille et améliorer l\'audition.',
    fullDescription: `La tympanoplastie est l'intervention qui répare une perforation du tympan, le plus souvent séquelle d'otites répétées ou d'un traumatisme. Un tympan perforé expose l'oreille aux infections à répétition, oblige à des précautions constantes avec l'eau et peut entraîner une baisse de l'audition.

L'intervention est réalisée sous microscope opératoire, avec des instruments de microchirurgie. Le chirurgien reconstruit le tympan à l'aide d'une greffe prélevée sur le patient lui-même (petit fragment de tissu situé à proximité de l'oreille). Si les osselets de l'oreille sont abîmés, leur réparation peut être réalisée dans le même temps opératoire.

L'objectif est double : fermer durablement le tympan pour protéger l'oreille moyenne, et améliorer l'audition lorsque la perforation en est responsable.

À la Clinique Pasteur Tunis, la tympanoplastie bénéficie d'un microscope opératoire de haute précision et de l'expertise de chirurgiens ORL spécialisés en chirurgie de l'oreille, pour des résultats fiables et durables.`,
    image: '/images/surgery-blue-1.webp',
    indications: [
      'Perforation persistante du tympan',
      'Otites à répétition favorisées par la perforation',
      'Baisse d\'audition liée à l\'atteinte du tympan',
      'Écoulements chroniques de l\'oreille',
      'Gêne au quotidien (protection obligatoire lors des baignades)',
    ],
    preparation: [
      'Examen ORL avec otoscopie et audiogramme récent',
      'Oreille sèche, sans infection active, au moment de l\'intervention',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Abord de l\'oreille par le conduit auditif ou par une incision discrète derrière l\'oreille',
      'Prélèvement de la greffe destinée à reconstruire le tympan',
      'Mise en place de la greffe sous microscope opératoire',
      'Réparation éventuelle des osselets dans le même temps',
      'Pansement de protection dans le conduit auditif',
    ],
    duree: '1 à 2 heures',
    resultats: 'Le retour à domicile a lieu le jour même ou le lendemain. L\'oreille doit rester au sec pendant la cicatrisation, selon les consignes du chirurgien. Le résultat sur le tympan et sur l\'audition est évalué lors des consultations de contrôle, après retrait des pansements et cicatrisation complète.',
    risques: [
      'Sensation d\'oreille bouchée le temps de la cicatrisation',
      'Bourdonnements ou vertiges transitoires',
      'Reprise chirurgicale possible si la greffe ne prend pas complètement, situation peu fréquente',
    ],
  },
  {
    slug: 'chirurgie-otite-chronique',
    title: 'Chirurgie de l\'otite chronique',
    shortTitle: 'Otite chronique',
    description: 'Traitement chirurgical des otites chroniques et du cholestéatome, pour assainir durablement l\'oreille et préserver l\'audition.',
    fullDescription: `L'otite chronique est une inflammation persistante de l'oreille moyenne qui se manifeste par des écoulements répétés, une baisse d'audition progressive et parfois des douleurs. Certaines formes, comme le cholestéatome, correspondent à une accumulation de peau dans l'oreille moyenne qui peut éroder les structures voisines et doit être retirée chirurgicalement.

La chirurgie de l'otite chronique vise d'abord à assainir l'oreille : retirer les tissus inflammatoires ou le cholestéatome, traiter les lésions de l'os mastoïdien si nécessaire, puis reconstruire le tympan et, si possible, la chaîne des osselets pour préserver ou améliorer l'audition.

L'intervention se déroule sous microscope opératoire, avec des instruments de microchirurgie et, lorsque cela est utile, un monitoring du nerf facial qui sécurise le geste chirurgical. Un suivi régulier est ensuite indispensable, en particulier après chirurgie du cholestéatome.

À la Clinique Pasteur Tunis, cette chirurgie spécialisée est assurée par des chirurgiens ORL expérimentés en otologie, avec un plateau technique complet — microscope opératoire et monitoring du nerf facial — garantissant précision et sécurité.`,
    image: '/images/surgery-blue-2.webp',
    indications: [
      'Otite chronique avec écoulements répétés malgré les traitements',
      'Cholestéatome de l\'oreille moyenne',
      'Baisse d\'audition liée aux lésions de l\'oreille moyenne',
      'Lésions de l\'os mastoïdien associées à l\'infection chronique',
    ],
    preparation: [
      'Bilan ORL complet avec audiogramme',
      'Scanner des rochers pour préciser l\'étendue des lésions',
      'Traitement local préalable pour assécher l\'oreille si possible',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Abord de l\'oreille, le plus souvent par une incision discrète derrière le pavillon',
      'Ablation des tissus pathologiques (inflammation, cholestéatome) sous microscope',
      'Surveillance du nerf facial par monitoring pendant le geste',
      'Reconstruction du tympan et des osselets lorsque c\'est possible',
      'Pansement auriculaire de protection',
    ],
    duree: '2 à 3 heures',
    resultats: 'L\'hospitalisation est courte. L\'oreille doit rester au sec pendant plusieurs semaines et des soins locaux sont programmés. Un suivi régulier, parfois avec imagerie, permet de vérifier l\'absence de récidive, en particulier après un cholestéatome. L\'audition est réévaluée à distance par un audiogramme.',
    risques: [
      'Vertiges ou bourdonnements transitoires',
      'Baisse d\'audition résiduelle selon l\'étendue des lésions initiales',
      'Récidive possible du cholestéatome, dépistée par le suivi régulier',
      'Le nerf facial est protégé par le monitoring per-opératoire',
    ],
  },
  {
    slug: 'chirurgie-glandes-salivaires',
    title: 'Chirurgie des glandes salivaires',
    shortTitle: 'Glandes salivaires',
    description: 'Ablation partielle ou totale d\'une glande salivaire (parotide, sous-maxillaire) en cas de tumeur ou de calculs récidivants.',
    fullDescription: `Les glandes salivaires principales — la parotide, située devant l'oreille, et la glande sous-maxillaire, sous la mâchoire — peuvent être le siège de tumeurs, le plus souvent bénignes, ou de calculs responsables de gonflements douloureux et d'infections répétées.

La chirurgie consiste à retirer la partie malade de la glande, voire la glande entière selon la nature de la lésion. La chirurgie de la parotide est un geste délicat car le nerf facial, qui anime les muscles du visage, traverse la glande : sa préservation est la priorité absolue du chirurgien, aidé par un monitoring du nerf facial pendant toute l'intervention.

Les incisions sont dessinées dans les plis naturels de la peau pour un résultat esthétique discret. Toute pièce opératoire est analysée au microscope afin de confirmer la nature exacte de la lésion.

À la Clinique Pasteur Tunis, la chirurgie des glandes salivaires est assurée par des chirurgiens ORL expérimentés en chirurgie cervicale, avec monitoring du nerf facial et instruments de microchirurgie, pour un geste précis et sûr.`,
    image: '/images/chirurgie2.webp',
    indications: [
      'Tumeur de la parotide ou de la glande sous-maxillaire',
      'Calculs salivaires récidivants avec gonflements douloureux',
      'Infections répétées d\'une glande salivaire',
      'Augmentation de volume persistante d\'une glande nécessitant une analyse',
    ],
    preparation: [
      'Imagerie de la glande (échographie, IRM selon les cas)',
      'Ponction diagnostique parfois réalisée avant l\'intervention',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Incision discrète dissimulée dans les plis naturels de la peau',
      'Repérage et protection du nerf facial sous monitoring continu (chirurgie de la parotide)',
      'Ablation de la lésion ou de la glande selon les constatations',
      'Mise en place éventuelle d\'un petit drain temporaire',
      'Fermeture soigneuse pour un résultat esthétique discret',
    ],
    duree: '1 à 3 heures selon la glande et la lésion',
    resultats: 'L\'hospitalisation est courte, le drain éventuel étant retiré avant la sortie ou lors d\'une consultation rapprochée. Les résultats de l\'analyse de la pièce opératoire sont expliqués en consultation. La cicatrice s\'estompe progressivement au fil des mois.',
    risques: [
      'Faiblesse transitoire de certains muscles du visage après chirurgie de la parotide, régressant dans la grande majorité des cas',
      'Diminution de sensibilité du lobe de l\'oreille, souvent temporaire',
      'Hématome ou gonflement local passager',
    ],
  },
  {
    slug: 'thyroidectomie',
    title: 'Thyroïdectomie',
    shortTitle: 'Thyroïdectomie',
    description: 'Ablation partielle ou totale de la glande thyroïde, réalisée avec monitoring des nerfs de la voix pour une sécurité optimale.',
    fullDescription: `La thyroïdectomie est l'ablation chirurgicale de la glande thyroïde, en totalité ou en partie (lobectomie). Elle est indiquée en cas de nodules suspects ou volumineux, de goitre compressif, d'hyperthyroïdie résistante au traitement médical ou de cancer de la thyroïde.

L'intervention est réalisée par une incision horizontale discrète à la base du cou, dessinée dans un pli naturel de la peau. Le chirurgien porte une attention particulière à deux structures essentielles : les nerfs récurrents, qui commandent les cordes vocales, et les glandes parathyroïdes, qui régulent le calcium. Le monitoring nerveux per-opératoire sécurise leur préservation.

Après une thyroïdectomie totale, un traitement hormonal substitutif quotidien remplace simplement la fonction de la glande : il permet une vie parfaitement normale, avec un suivi biologique régulier.

À la Clinique Pasteur Tunis, la thyroïdectomie est réalisée par des chirurgiens expérimentés en chirurgie cervicale, avec monitoring nerveux, dans le cadre d'une prise en charge coordonnée avec les endocrinologues de la clinique.`,
    image: '/images/surgery-blue-3.webp',
    indications: [
      'Nodule thyroïdien suspect ou dont la nature doit être précisée',
      'Goitre volumineux ou compressif (gêne à la déglutition, à la respiration)',
      'Hyperthyroïdie résistant au traitement médical',
      'Cancer de la thyroïde confirmé ou fortement suspecté',
    ],
    preparation: [
      'Bilan hormonal thyroïdien et échographie cervicale récente',
      'Cytoponction des nodules suspects si indiquée',
      'Équilibration hormonale préalable en cas d\'hyperthyroïdie',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Incision horizontale discrète à la base du cou',
      'Repérage et préservation des nerfs de la voix sous monitoring',
      'Préservation soigneuse des glandes parathyroïdes',
      'Ablation d\'un lobe ou de la totalité de la glande selon l\'indication',
      'Fermeture esthétique avec un fil discret',
      'Surveillance post-opératoire de la voix et du calcium sanguin',
    ],
    duree: '1 à 2 heures 30',
    resultats: 'L\'hospitalisation dure en général un à deux jours. La voix et le taux de calcium sont contrôlés avant la sortie. En cas de thyroïdectomie totale, un traitement hormonal quotidien est instauré et ajusté lors du suivi. La cicatrice, placée dans un pli du cou, devient très discrète avec le temps.',
    risques: [
      'Modification transitoire de la voix, régressant dans la grande majorité des cas',
      'Baisse passagère du calcium sanguin, corrigée par un traitement temporaire',
      'Hématome cervical précoce, prévenu par la surveillance rapprochée',
    ],
  },
  {
    slug: 'chirurgie-cordes-vocales',
    title: 'Chirurgie des cordes vocales',
    shortTitle: 'Cordes vocales',
    description: 'Microchirurgie endoscopique des lésions des cordes vocales (nodules, polypes, kystes) pour restaurer la qualité de la voix.',
    fullDescription: `Les cordes vocales peuvent développer des lésions bénignes — nodules, polypes, kystes, œdème — souvent liées au surmenage vocal, au reflux ou au tabac. Ces lésions se manifestent par une voix enrouée, fatigable ou voilée qui persiste. Certaines lésions nécessitent par ailleurs un prélèvement pour analyse.

La chirurgie des cordes vocales est une microchirurgie réalisée par les voies naturelles, sans aucune incision : sous anesthésie générale, un endoscope rigide (laryngoscope) expose les cordes vocales, et le chirurgien opère sous microscope avec des micro-instruments d'une grande finesse. L'objectif est de retirer la lésion tout en respectant scrupuleusement la souplesse de la corde vocale, garante de la qualité de la voix.

Le repos vocal après l'intervention et, souvent, une rééducation orthophonique complètent le geste chirurgical pour un résultat optimal et durable.

À la Clinique Pasteur Tunis, cette microchirurgie bénéficie d'un microscope opératoire et d'instruments de microchirurgie dédiés, avec des chirurgiens ORL attentifs à la restauration d'une voix naturelle.`,
    image: '/images/surgery-blue-4.webp',
    indications: [
      'Enrouement persistant lié à un nodule, un polype ou un kyste',
      'Œdème chronique des cordes vocales',
      'Lésion des cordes vocales nécessitant un prélèvement pour analyse',
      'Fatigue vocale invalidante chez les professionnels de la voix',
    ],
    preparation: [
      'Examen ORL avec fibroscopie ou stroboscopie des cordes vocales',
      'Bilan orthophonique parfois utile avant l\'intervention',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Arrêt du tabac vivement recommandé',
    ],
    deroulement: [
      'Anesthésie générale',
      'Exposition des cordes vocales à l\'aide d\'un laryngoscope, par la bouche',
      'Microchirurgie de la lésion sous microscope avec des micro-instruments',
      'Respect maximal du tissu vocal sain',
      'Réveil surveillé puis retour en chambre',
    ],
    duree: '30 minutes à 1 heure',
    resultats: 'Le retour à domicile a lieu le jour même ou le lendemain. Un repos vocal strict de quelques jours est essentiel, suivi d\'une reprise progressive de la voix, souvent accompagnée par une rééducation orthophonique. La qualité vocale s\'améliore au fil des semaines.',
    risques: [
      'Enrouement transitoire le temps de la cicatrisation',
      'Gêne pharyngée passagère liée au laryngoscope',
      'Récidive possible si les facteurs favorisants persistent (surmenage vocal, tabac)',
    ],
  },
  {
    slug: 'chirurgie-tumeurs-cervicales',
    title: 'Chirurgie des tumeurs cervicales',
    shortTitle: 'Tumeurs cervicales',
    description: 'Prise en charge chirurgicale des masses et tumeurs du cou : kystes congénitaux, adénopathies, tumeurs bénignes ou malignes.',
    fullDescription: `Le cou peut être le siège de masses très diverses : kystes congénitaux présents depuis la naissance, ganglions augmentés de volume (adénopathies), tumeurs bénignes des tissus mous ou tumeurs malignes. Toute masse cervicale persistante mérite un bilan précis afin d'en déterminer la nature.

La chirurgie des tumeurs cervicales a un double objectif : retirer la lésion en totalité et permettre son analyse complète au microscope. Selon les cas, il peut s'agir de l'exérèse d'un kyste, d'une biopsie-exérèse ganglionnaire, ou d'un curage ganglionnaire plus étendu dans le cadre du traitement d'un cancer, toujours décidé en concertation multidisciplinaire.

Le cou concentre des structures nobles — nerfs, vaisseaux — que le chirurgien identifie et préserve avec soin. Les incisions sont placées dans les plis naturels de la peau pour un résultat esthétique le plus discret possible.

À la Clinique Pasteur Tunis, cette chirurgie est réalisée par des chirurgiens ORL disposant d'une solide expertise en chirurgie cervicale, avec un environnement complet — bloc opératoire moderne, réanimation, imagerie — pour une prise en charge sécurisée.`,
    image: '/images/surgery-blue-5.webp',
    indications: [
      'Masse cervicale persistante dont la nature doit être précisée',
      'Kyste congénital du cou (kyste du tractus thyréoglosse, kyste branchial)',
      'Ganglion cervical augmenté de volume nécessitant une analyse',
      'Tumeur cervicale bénigne gênante ou évolutive',
      'Curage ganglionnaire dans le cadre du traitement d\'un cancer ORL',
    ],
    preparation: [
      'Bilan d\'imagerie cervicale (échographie, scanner ou IRM)',
      'Cytoponction diagnostique parfois réalisée en amont',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Incision discrète placée dans un pli naturel du cou',
      'Identification et préservation des structures nerveuses et vasculaires',
      'Exérèse complète de la lésion ou curage ganglionnaire selon l\'indication',
      'Mise en place éventuelle d\'un drain temporaire',
      'Fermeture soigneuse à visée esthétique',
    ],
    duree: '1 à 3 heures selon l\'étendue du geste',
    resultats: 'L\'hospitalisation est courte, le drain éventuel étant retiré rapidement. Les résultats de l\'analyse de la pièce opératoire sont expliqués en consultation et orientent la suite de la prise en charge lorsque c\'est nécessaire. La cicatrice s\'atténue progressivement.',
    risques: [
      'Hématome ou gonflement local transitoire',
      'Diminution passagère de sensibilité de la peau du cou',
      'Gêne à la mobilisation de l\'épaule après certains curages, améliorée par la kinésithérapie',
    ],
  },
  {
    slug: 'aerateurs-transtympaniques',
    title: 'Pose d\'aérateurs transtympaniques (drains)',
    shortTitle: 'Aérateurs transtympaniques',
    description: 'Mise en place de petits drains dans le tympan pour traiter les otites séreuses persistantes, très fréquente chez l\'enfant.',
    fullDescription: `L'otite séro-muqueuse correspond à la présence persistante de liquide derrière le tympan. Très fréquente chez l'enfant, elle entraîne une baisse d'audition qui peut retentir sur le langage, l'attention et les apprentissages, ainsi que des otites aiguës répétées.

Lorsque le liquide persiste malgré les traitements, la pose d'aérateurs transtympaniques — souvent appelés « yoyos » ou drains — est le traitement de référence. Il s'agit de minuscules tubes placés dans le tympan à travers une incision microscopique : ils permettent l'aération permanente de l'oreille moyenne et l'évacuation du liquide.

Le geste est très court, réalisé sous une brève anesthésie générale chez l'enfant, et l'amélioration de l'audition est le plus souvent immédiate. Les aérateurs s'éliminent généralement d'eux-mêmes après plusieurs mois, une fois leur rôle accompli.

À la Clinique Pasteur Tunis, la pose d'aérateurs est réalisée par des chirurgiens ORL habitués aux tout-petits, dans le cadre rassurant de l'hospitalisation de jour : l'enfant rentre à la maison le jour même.`,
    image: '/images/pediatrique.webp',
    indications: [
      'Otite séro-muqueuse persistante avec baisse d\'audition',
      'Otites aiguës à répétition',
      'Retentissement sur le langage ou les apprentissages chez l\'enfant',
      'Rétraction du tympan liée à une mauvaise aération de l\'oreille',
    ],
    preparation: [
      'Examen ORL avec tympanométrie et audiogramme adapté à l\'âge',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Signaler tout épisode de fièvre ou d\'infection dans les jours précédents',
    ],
    deroulement: [
      'Accueil en hospitalisation de jour avec les parents',
      'Brève anesthésie générale',
      'Incision microscopique du tympan sous microscope',
      'Aspiration du liquide et mise en place de l\'aérateur',
      'Réveil rapide et retour auprès des parents',
    ],
    duree: '15 à 20 minutes pour les deux oreilles',
    resultats: 'Le retour à domicile a lieu le jour même. L\'audition s\'améliore le plus souvent immédiatement. Une protection des oreilles lors des baignades peut être conseillée selon les consignes du chirurgien. Les aérateurs sont surveillés en consultation et s\'éliminent en général spontanément.',
    risques: [
      'Petit écoulement de l\'oreille, traité par des gouttes locales',
      'Expulsion précoce de l\'aérateur nécessitant parfois une nouvelle pose',
      'Petite perforation résiduelle du tympan, rare et le plus souvent transitoire',
    ],
  },
  {
    slug: 'chirurgie-endoscopique-naso-sinusienne',
    title: 'Chirurgie endoscopique naso-sinusienne',
    shortTitle: 'Endoscopie naso-sinusienne',
    description: 'Approche mini-invasive de référence pour opérer le nez et les sinus par les voies naturelles, sous contrôle vidéo haute définition.',
    fullDescription: `La chirurgie endoscopique naso-sinusienne regroupe l'ensemble des interventions du nez et des sinus réalisées par les voies naturelles, sous contrôle d'un endoscope haute définition. Cette approche mini-invasive a transformé la chirurgie sinusienne : aucune incision sur le visage, une précision accrue et des suites opératoires nettement plus confortables.

Grâce à des optiques fines et des instruments dédiés, le chirurgien visualise parfaitement les cavités nasales et sinusiennes et traite les lésions avec une grande précision : ouverture des sinus, ablation de polypes, exérèse de certaines tumeurs bénignes, traitement de l'obstruction nasale ou fermeture de brèches. Le champ d'application de cette technique s'élargit régulièrement.

L'endoscopie permet également d'atteindre des zones profondes autrefois difficiles d'accès, en respectant les structures voisines, notamment l'orbite et la base du crâne, dont l'anatomie est étudiée en détail sur le scanner pré-opératoire.

À la Clinique Pasteur Tunis, la chirurgie endoscopique naso-sinusienne s'appuie sur un endoscope ORL haute définition et l'expertise de chirurgiens rompus aux techniques mini-invasives, pour des interventions précises, sûres et confortables.`,
    image: '/images/endoscopie.webp',
    indications: [
      'Sinusite chronique et polypose naso-sinusienne',
      'Obstruction nasale d\'origine sinusienne',
      'Certaines tumeurs bénignes du nez et des sinus',
      'Mucocèles et kystes sinusiens',
      'Dacryocystite chronique (obstruction des voies lacrymales) en collaboration avec les spécialistes concernés',
    ],
    preparation: [
      'Scanner des sinus récent, indispensable à la planification du geste',
      'Traitement médical préparatoire éventuel',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Arrêt du tabac recommandé',
    ],
    deroulement: [
      'Anesthésie générale',
      'Introduction de l\'endoscope haute définition par les narines',
      'Traitement précis des lésions sous contrôle vidéo permanent',
      'Respect des structures anatomiques voisines',
      'Mise en place éventuelle de tampons nasaux temporaires',
      'Surveillance en salle de réveil',
    ],
    duree: '1 à 2 heures selon l\'étendue du geste',
    resultats: 'Le retour à domicile a lieu le jour même ou le lendemain. Les lavages de nez réguliers sont la clé d\'une bonne cicatrisation. Le confort nasal et respiratoire s\'améliore progressivement au fil des semaines, avec des consultations de contrôle pour accompagner la convalescence.',
    risques: [
      'Saignement nasal léger les premiers jours',
      'Croûtes et sécheresse nasale transitoires',
      'Récidive possible de certaines lésions (polypes), surveillée lors du suivi',
    ],
  },
];
