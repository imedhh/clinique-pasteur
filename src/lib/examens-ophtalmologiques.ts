export const examensOphtalmologiques = [
  {
    slug: 'oct-retinien',
    title: 'OCT retinien et du nerf optique',
    shortTitle: 'OCT retinien',
    description:
      "Imagerie en coupe de la retine et du nerf optique par tomographie en coherence optique, permettant d'analyser les differentes couches retiniennes avec une precision micrometrique.",
    fullDescription: `La tomographie en coherence optique (OCT) est un examen d'imagerie non invasif de haute resolution qui permet d'obtenir des coupes transversales de la retine et du nerf optique. Comparable a une echographie utilisant la lumiere au lieu du son, l'OCT offre une resolution de l'ordre de quelques microns, permettant de visualiser en detail chacune des couches de la retine.

Cet examen est devenu incontournable en ophtalmologie moderne. Il permet de detecter et de suivre de nombreuses pathologies retiniennes telles que la degenerescence maculaire liee a l'age (DMLA), l'oedeme maculaire diabetique, les membranes epiretiniennes, les trous maculaires et le decollement sereux retinien. L'analyse du nerf optique et des fibres nerveuses retiniennes est essentielle dans le diagnostic et le suivi du glaucome.

L'OCT fournit des mesures quantitatives precises de l'epaisseur retinienne et de l'epaisseur des fibres nerveuses peripapillaires, permettant un suivi objectif de l'evolution des pathologies au fil du temps. Les resultats sont compares a des bases de donnees normatives ajustees selon l'age du patient.

A la Clinique Pasteur de Tunis, nous disposons d'un OCT de derniere generation offrant une imagerie spectral-domain haute definition. L'examen est realise par un technicien specialise et interprete par un ophtalmologue experimente, garantissant un diagnostic precis et une prise en charge adaptee.`,
    preparation: [
      'Aucun jeune n\'est necessaire',
      'Venir avec ses lunettes ou lentilles de contact habituelles',
      'Apporter les resultats d\'OCT anterieurs pour comparaison',
      'Signaler tout traitement oculaire en cours (collyres, injections)',
      'Une dilatation pupillaire peut etre necessaire selon l\'indication',
    ],
    deroulement: [
      'Le patient est installe assis face a l\'appareil, menton et front appuyes sur un support',
      'Des gouttes de collyre mydriatique peuvent etre instillees pour dilater la pupille si necessaire',
      'Le patient fixe une mire lumineuse a l\'interieur de l\'appareil',
      'L\'operateur effectue l\'acquisition des images en quelques secondes par oeil',
      'Plusieurs coupes et cartographies sont realisees selon le protocole choisi',
      'Les images sont analysees par le logiciel et comparees aux normes',
      'L\'ophtalmologue interprete les resultats et les commente avec le patient',
    ],
    duree: '10 a 20 minutes',
    resultats:
      'Les resultats sont disponibles immediatement apres l\'examen. L\'ophtalmologue remet un compte-rendu avec les images et les mesures quantitatives au patient ou a son medecin traitant.',
    risques: [],
    indications: [
      'Degenerescence maculaire liee a l\'age (DMLA)',
      'Oedeme maculaire diabetique ou d\'autre origine',
      'Glaucome : diagnostic et suivi de la perte en fibres nerveuses',
      'Membrane epiretinienne et trou maculaire',
      'Decollement sereux retinien',
      'Occlusion veineuse retinienne',
      'Suivi apres injection intravitreenne',
      'Pathologies du nerf optique (nevrite, drusen papillaires)',
    ],
  },
  {
    slug: 'champ-visuel',
    title: 'Champ visuel automatise — perimetrie de Humphrey',
    shortTitle: 'Champ visuel',
    description:
      "Exploration fonctionnelle du champ visuel par perimetrie statique automatisee, permettant de detecter et de quantifier les deficits du champ de vision peripherique et central.",
    fullDescription: `La perimetrie de Humphrey est l'examen de reference pour l'evaluation du champ visuel. Elle consiste a mesurer la sensibilite lumineuse de la retine en differents points du champ de vision, en presentant des stimuli lumineux d'intensite variable sur un fond uniformement eclaire. Le patient indique chaque fois qu'il percoit un point lumineux en appuyant sur un bouton.

Cet examen est essentiel dans le diagnostic et le suivi du glaucome, maladie qui provoque une perte progressive et irreversible du champ visuel peripherique avant d'affecter la vision centrale. La perimetrie permet de detecter les scotomes (zones de perte de vision) bien avant que le patient ne les remarque dans sa vie quotidienne, autorisant une prise en charge precoce.

Le champ visuel automatise est egalement indique dans l'exploration des pathologies neurologiques affectant les voies visuelles, depuis le nerf optique jusqu'au cortex occipital. Les hemianopsies, les quadranopsies et les scotomes centraux orientent le diagnostic vers des lesions specifiques du systeme nerveux central.

A la Clinique Pasteur de Tunis, la perimetrie est realisee dans une salle dediee, dans des conditions standardisees de luminosite et de calme. L'appareil Humphrey utilise des algorithmes SITA (Swedish Interactive Threshold Algorithm) qui optimisent la duree de l'examen tout en maintenant une excellente fiabilite des resultats.`,
    preparation: [
      'Venir avec ses lunettes de correction habituelle (vision de pres pour le champ visuel)',
      'Ne pas dilater les pupilles avant l\'examen',
      'Etre repose : la fatigue peut alterer les resultats',
      'Apporter les resultats de champs visuels anterieurs pour comparaison',
      'Signaler tout traitement en cours pouvant affecter la vision',
    ],
    deroulement: [
      'Chaque oeil est teste separement, l\'autre etant occlus par un cache',
      'Le patient est installe face a la coupole de l\'appareil, menton sur un appui',
      'Une correction optique adaptee est placee devant l\'oeil teste',
      'Le patient fixe un point central lumineux et appuie sur un bouton chaque fois qu\'il percoit un stimulus',
      'Des points lumineux d\'intensite variable apparaissent a differents endroits du champ visuel',
      'L\'appareil analyse automatiquement les reponses et calcule les seuils de sensibilite',
      'L\'examen est repete pour le deuxieme oeil',
    ],
    duree: '15 a 30 minutes (pour les deux yeux)',
    resultats:
      'Les resultats sont imprimes immediatement sous forme de cartographies et d\'indices statistiques. L\'ophtalmologue les interprete et les compare aux examens precedents pour evaluer la stabilite ou la progression d\'un eventuel deficit.',
    risques: [],
    indications: [
      'Glaucome : depistage, diagnostic et suivi',
      'Hypertonie oculaire avec suspicion de glaucome',
      'Pathologies du nerf optique (nevrite optique, compression)',
      'Lesions des voies visuelles cerebrales (AVC, tumeur)',
      'Surveillance sous traitement pouvant affecter la vision (ethambutol, hydroxychloroquine)',
      'Bilan de troubles visuels inexpliques',
      'Evaluation pour le permis de conduire',
    ],
  },
  {
    slug: 'fond-oeil',
    title: "Fond d'oeil dilate avec retinographie",
    shortTitle: "Fond d'oeil",
    description:
      "Examen du fond de l'oeil apres dilatation pupillaire avec prise de photographies numeriques de la retine, du nerf optique et des vaisseaux retiniens.",
    fullDescription: `Le fond d'oeil dilate est un examen fondamental en ophtalmologie qui permet d'observer directement les structures situees a l'arriere de l'oeil : la retine, la macula, le nerf optique (papille) et les vaisseaux retiniens. La dilatation de la pupille par instillation de collyres mydriatiques offre une vue elargie et detaillee de l'ensemble du pole posterieur et de la peripherie retinienne.

La retinographie, qui consiste a photographier le fond d'oeil a l'aide d'une camera numerique specialisee, permet de documenter avec precision l'aspect de la retine. Ces images constituent une reference precieuse pour le suivi de nombreuses pathologies et permettent de detecter des modifications subtiles d'un examen a l'autre.

Le fond d'oeil est un examen de depistage essentiel chez les patients diabetiques, chez qui la retinopathie diabetique peut evoluer silencieusement pendant des annees avant de provoquer des symptomes. Il est egalement indispensable dans le suivi de l'hypertension arterielle, de la degenerescence maculaire et de nombreuses autres pathologies oculaires et generales.

A la Clinique Pasteur de Tunis, le fond d'oeil est realise avec un retinographe numerique grand champ permettant une documentation photographique de haute qualite. L'ophtalmologue interprete les images en temps reel et peut ainsi poser un diagnostic precis et orienter la prise en charge.`,
    preparation: [
      'Prevoir de ne pas conduire pendant 2 a 3 heures apres l\'examen en raison de la dilatation pupillaire',
      'Apporter des lunettes de soleil pour le retour',
      'Signaler toute allergie connue aux collyres',
      'Apporter la liste des medicaments en cours',
      'Les porteurs de lentilles de contact doivent les retirer avant l\'examen',
      'Apporter les cliches de retinographie anterieurs si disponibles',
    ],
    deroulement: [
      'Des gouttes de collyre mydriatique sont instillees dans chaque oeil',
      'Un delai de 20 a 30 minutes est necessaire pour obtenir une dilatation suffisante',
      'Le patient est installe face au retinographe',
      'Plusieurs photographies numeriques sont prises de chaque oeil',
      'L\'ophtalmologue examine le fond d\'oeil a la lampe a fente avec une lentille d\'observation',
      'Si necessaire, un examen de la peripherie retinienne est realise avec un verre a trois miroirs',
      'Les images sont analysees et archivees numeriquement',
    ],
    duree: '30 a 45 minutes (incluant le temps de dilatation)',
    resultats:
      'L\'ophtalmologue communique les resultats immediatement apres l\'examen. Les photographies sont archivees et un compte-rendu est remis au patient ou transmis au medecin prescripteur.',
    risques: [
      'Vision floue transitoire pendant 2 a 3 heures apres la dilatation',
      'Eblouissement et photosensibilite temporaire',
      'Reaction allergique aux collyres mydriatiques (exceptionnelle)',
      'Crise de glaucome aigu par fermeture de l\'angle (tres rare, chez les patients predisposes)',
    ],
    indications: [
      'Depistage annuel de la retinopathie diabetique',
      'Surveillance de la degenerescence maculaire liee a l\'age',
      'Bilan d\'hypertension arterielle (retinopathie hypertensive)',
      'Baisse de vision brutale ou progressive',
      'Perception de corps flottants ou d\'eclairs lumineux',
      'Suivi de pathologies retiniennes connues',
      'Bilan de maladies generales a retentissement oculaire',
      'Evaluation du nerf optique en cas de suspicion de glaucome',
    ],
  },
  {
    slug: 'angiographie-fluoresceine',
    title: 'Angiographie a la fluoresceine',
    shortTitle: 'Angiographie retinienne',
    description:
      "Examen d'imagerie vasculaire de la retine apres injection intraveineuse de fluoresceine, permettant de visualiser la circulation sanguine retinienne et choroidienne et de detecter des anomalies vasculaires.",
    fullDescription: `L'angiographie a la fluoresceine est un examen d'imagerie dynamique qui permet de visualiser la circulation sanguine dans les vaisseaux de la retine et de la choroide. Un colorant fluorescent, la fluoresceine sodique, est injecte par voie intraveineuse au pli du coude, puis une serie de photographies est prise a l'aide d'un filtre special qui fait apparaitre le colorant dans les vaisseaux retiniens.

Cet examen est fondamental pour le diagnostic et la planification du traitement de nombreuses pathologies vasculaires retiniennes. Il met en evidence les zones d'ischemie (manque de sang), les neo-vaisseaux pathologiques, les fuites vasculaires, les micro-anevrismes et les anomalies de permeabilite capillaire. Ces informations sont essentielles pour guider les decisions therapeutiques, notamment les indications de laser retinien ou d'injections intravitreennes.

L'angiographie a la fluoresceine est particulierement utile dans la retinopathie diabetique, les occlusions vasculaires retiniennes, la DMLA exsudative, les chorioretinopathies sereuses centrales et les vasculites retiniennes. Elle permet egalement de documenter les complications vasculaires de nombreuses maladies inflammatoires et infectieuses de l'oeil.

A la Clinique Pasteur de Tunis, l'angiographie retinienne est realisee par un ophtalmologue specialise en imagerie retinienne, dans un environnement securise avec un materiel de reanimation disponible. L'appareil numerique grand champ permet une documentation de haute qualite couvrant un large champ retinien.`,
    preparation: [
      'Signaler toute allergie connue, en particulier aux produits de contraste ou a la fluoresceine',
      'Etre accompagne car la dilatation pupillaire empeche la conduite pendant plusieurs heures',
      'Apporter des lunettes de soleil',
      'Etre a jeun depuis au moins 2 heures (repas leger avant)',
      'Signaler une grossesse en cours ou un allaitement',
      'Apporter la liste des medicaments en cours et les examens anterieurs',
    ],
    deroulement: [
      'Des gouttes de collyre mydriatique sont instillees pour dilater les pupilles',
      'Un catheter veineux est pose au pli du coude',
      'Des cliches de reference sans colorant sont pris de chaque oeil',
      'La fluoresceine sodique est injectee par voie intraveineuse',
      'Des photographies sequentielles sont prises rapidement pendant les premieres minutes',
      'Des cliches tardifs sont realises entre 5 et 10 minutes apres l\'injection',
      'Le patient est surveille pendant et apres l\'examen pour detecter toute reaction allergique',
      'Le catheter est retire et un pansement compressif est applique',
    ],
    duree: '30 a 45 minutes',
    resultats:
      'L\'ophtalmologue analyse les cliches immediatement et communique les premiers resultats au patient. Un compte-rendu detaille avec les images selectionnees est remis sous 24 a 48 heures.',
    risques: [
      'Nausees passageres lors de l\'injection (frequentes et benignes)',
      'Coloration jaune de la peau et des urines pendant 24 a 48 heures (normal)',
      'Reaction allergique cutanee (urticaire, prurit) : rare',
      'Reaction allergique severe (anaphylaxie) : exceptionnelle (moins de 1/10 000)',
      'Malaise vagal lors de l\'injection',
      'Extravasation du produit au point d\'injection (douleur locale temporaire)',
    ],
    indications: [
      'Retinopathie diabetique : bilan et indication de traitement',
      'Occlusion veineuse retinienne',
      'Degenerescence maculaire liee a l\'age exsudative',
      'Chorioretinopathie sereuse centrale',
      'Neo-vaisseaux retiniens ou choroidiens',
      'Vasculite retinienne',
      'Uveite posterieure',
      'Bilan avant traitement par laser retinien ou injection intravitreenne',
    ],
  },
  {
    slug: 'angiographie-icg',
    title: "Angiographie au vert d'indocyanine (ICG)",
    shortTitle: 'Angiographie ICG',
    description:
      "Examen d'imagerie vasculaire utilisant le vert d'indocyanine par voie intraveineuse, permettant de visualiser specifiquement la circulation choroidienne profonde sous la retine.",
    fullDescription: `L'angiographie au vert d'indocyanine (ICG) est un examen complementaire a l'angiographie a la fluoresceine qui permet d'explorer specifiquement la circulation choroidienne, reseau vasculaire situe sous la retine. Le vert d'indocyanine, un colorant infrarouge, est injecte par voie intraveineuse et sa fluorescence est captee par une camera equipee d'un filtre infrarouge, ce qui permet de visualiser les vaisseaux choroidiens a travers l'epithelium pigmentaire retinien.

La choroide est la principale source de nutrition de la retine externe et de la macula. De nombreuses pathologies retiniennes trouvent leur origine dans des anomalies de la circulation choroidienne qui ne sont pas visibles a l'angiographie a la fluoresceine classique. L'ICG est donc indispensable pour le diagnostic de certaines pathologies comme les vasculopathies polypoidales choroidiennes, les hemangiomes choroidiens et certaines formes de DMLA.

L'angiographie ICG est souvent realisee en complement de l'angiographie a la fluoresceine lors de la meme seance. La combinaison des deux examens offre une vision complete de la vascularisation retinienne et choroidienne, permettant un diagnostic precis et une planification therapeutique optimale.

A la Clinique Pasteur de Tunis, l'angiographie ICG est realisee avec un systeme d'imagerie multimodal de derniere generation permettant l'acquisition simultanee des deux types d'angiographie. L'examen est supervise par un ophtalmologue retinologue experimente.`,
    preparation: [
      'Signaler toute allergie connue, en particulier a l\'iode ou aux produits de contraste',
      'L\'angiographie ICG est contre-indiquee en cas d\'allergie a l\'iode',
      'Signaler une grossesse ou un allaitement en cours',
      'Etre accompagne pour le retour en raison de la dilatation pupillaire',
      'Etre a jeun depuis au moins 2 heures',
      'Apporter la liste des medicaments et des examens anterieurs',
    ],
    deroulement: [
      'Les pupilles sont dilatees par instillation de collyres mydriatiques',
      'Un catheter veineux est pose au pli du coude',
      'Des cliches de reference sont pris avant l\'injection',
      'Le vert d\'indocyanine est injecte par voie intraveineuse',
      'Des cliches sont pris dans les secondes suivant l\'injection (temps precoces)',
      'Des cliches sont pris a intervalles reguliers pendant 30 minutes (temps intermediaires et tardifs)',
      'L\'examen peut etre combine a une angiographie a la fluoresceine dans la meme seance',
      'Le patient est surveille pour detecter toute reaction au produit',
    ],
    duree: '30 a 45 minutes',
    resultats:
      'Les resultats sont analyses par l\'ophtalmologue retinologue. Un compte-rendu detaille avec les images cles est remis sous 24 a 48 heures, incluant la comparaison avec les cliches de fluoresceine si les deux examens ont ete realises.',
    risques: [
      'Nausees legeres lors de l\'injection (peu frequentes)',
      'Coloration verdatre des selles pendant 24 heures (normal)',
      'Reaction allergique (rare, plus frequente chez les patients allergiques a l\'iode)',
      'Reaction anaphylactique severe (exceptionnelle)',
      'Contre-indique en cas d\'allergie a l\'iode ou d\'insuffisance hepatique severe',
    ],
    indications: [
      'Vasculopathie polypoidale choroidienne',
      'DMLA : neo-vaisseaux choroidiens occultes',
      'Hemangiome choroidien',
      'Chorioretinopathie sereuse centrale chronique',
      'Tumeurs choroidiennes',
      'Syndrome des taches blanches evanescentes',
      'Choroidite multifocale',
      'Bilan complementaire quand l\'angiographie a la fluoresceine est insuffisante',
    ],
  },
  {
    slug: 'topographie-corneenne',
    title: 'Topographie corneenne',
    shortTitle: 'Topographie corneenne',
    description:
      "Cartographie detaillee de la courbure et de la surface de la cornee, essentielle pour le diagnostic du keratocone et le bilan pre-operatoire de chirurgie refractive.",
    fullDescription: `La topographie corneenne est un examen d'imagerie non invasif qui permet de realiser une cartographie detaillee de la surface de la cornee. L'appareil projette des anneaux lumineux concentriques (disques de Placido) ou utilise une technologie d'elevation par camera Scheimpflug pour analyser la forme, la courbure, l'epaisseur et la regularite de la cornee en chaque point de sa surface.

Cet examen est indispensable dans le depistage et le suivi du keratocone, une maladie degenerative qui provoque un amincissement et une deformation progressive de la cornee. La topographie corneenne permet de detecter les formes infracliniques de keratocone, avant meme l'apparition de symptomes visuels, ce qui est crucial pour la prise en charge precoce par cross-linking.

La topographie corneenne constitue un examen prealable obligatoire avant toute chirurgie refractive (LASIK, PKR) pour verifier que la cornee presente une forme reguliere et une epaisseur suffisante. Elle est egalement essentielle pour l'adaptation des lentilles de contact rigides et pour le suivi post-operatoire des greffes de cornee.

A la Clinique Pasteur de Tunis, nous utilisons un topographe corneen de derniere generation combinant les technologies Placido et Scheimpflug pour une analyse complete de la face anterieure et posterieure de la cornee. Les resultats sont presentes sous forme de cartes colorees intuitives et d'indices diagnostiques precis.`,
    preparation: [
      'Retirer les lentilles de contact souples au moins 48 heures avant l\'examen',
      'Retirer les lentilles de contact rigides au moins 2 semaines avant l\'examen',
      'Ne pas instiller de collyres (hors larmes artificielles) le jour de l\'examen',
      'Ne pas se maquiller les yeux le jour de l\'examen',
      'Signaler tout antecedent de chirurgie oculaire',
    ],
    deroulement: [
      'Le patient est installe assis face a l\'appareil, menton et front appuyes sur un support',
      'Aucun contact avec l\'oeil n\'est necessaire',
      'Le patient fixe une mire lumineuse au centre de l\'appareil',
      'L\'acquisition des images est realisee en quelques secondes par oeil',
      'Plusieurs acquisitions peuvent etre effectuees pour verifier la reproductibilite',
      'Le logiciel genere automatiquement les cartes topographiques et les indices',
      'L\'ophtalmologue analyse les cartes et les commente avec le patient',
    ],
    duree: '10 a 15 minutes',
    resultats:
      'Les resultats sont disponibles immediatement sous forme de cartes colorees et d\'indices numeriques. L\'ophtalmologue remet un compte-rendu avec les cartes imprimees au patient ou a son medecin.',
    risques: [],
    indications: [
      'Depistage et suivi du keratocone',
      'Bilan pre-operatoire de chirurgie refractive (LASIK, PKR)',
      'Adaptation de lentilles de contact rigides ou sclerales',
      'Suivi post-operatoire de greffe de cornee',
      'Astigmatisme irregulier',
      'Ectasie corneenne post-chirurgie refractive',
      'Bilan avant implantation de lentille intraoculaire torique',
      'Degenerescences corneennes pellucides',
    ],
  },
  {
    slug: 'pachymetrie-corneenne',
    title: 'Pachymetrie corneenne',
    shortTitle: 'Pachymetrie',
    description:
      "Mesure precise de l'epaisseur de la cornee en differents points, indispensable pour le bilan du glaucome et l'evaluation pre-operatoire de chirurgie refractive.",
    fullDescription: `La pachymetrie corneenne est un examen qui permet de mesurer avec precision l'epaisseur de la cornee en differents points de sa surface. Cette mesure est realisee soit par ultrasons (pachymetrie ultrasonique avec contact), soit par des methodes optiques sans contact (OCT du segment anterieur, topographe Scheimpflug ou biometre optique). L'epaisseur corneenne centrale normale se situe entre 520 et 560 microns environ.

La pachymetrie est un examen essentiel dans le bilan du glaucome car l'epaisseur corneenne influence directement la mesure de la pression intraoculaire. Une cornee fine conduit a sous-estimer la pression reelle, tandis qu'une cornee epaisse la surestime. La connaissance de l'epaisseur corneenne permet donc au glaucomatologue d'interpreter correctement les chiffres de tension oculaire et d'adapter sa prise en charge.

En chirurgie refractive, la pachymetrie est un examen prealable indispensable. Le LASIK necessite de disposer d'une epaisseur corneenne residuelle suffisante apres la decoupe du volet et l'ablation du tissu au laser. Une cornee trop fine constitue une contre-indication a ce type d'intervention et oriente vers d'autres techniques comme la PKR ou les implants phakes.

A la Clinique Pasteur de Tunis, la pachymetrie est realisee avec des appareils de haute precision. La mesure peut etre effectuee par voie ultrasonique pour une valeur ponctuelle precise, ou par voie optique pour une cartographie complete de l'epaisseur corneenne sur toute sa surface.`,
    preparation: [
      'Retirer les lentilles de contact au moins 24 heures avant l\'examen',
      'Ne pas instiller de collyres dans les heures precedant l\'examen',
      'Aucun jeune necessaire',
      'Apporter les resultats de pachymetrie anterieure si disponibles',
      'Signaler tout antecedent de chirurgie corneenne',
    ],
    deroulement: [
      'Pour la pachymetrie optique : le patient est installe face a l\'appareil sans contact avec l\'oeil',
      'Pour la pachymetrie ultrasonique : une goutte de collyre anesthesiant est instillee',
      'La sonde ultrasonique est delicatement posee au centre de la cornee (methode contact)',
      'Plusieurs mesures sont realisees pour chaque oeil et la moyenne est calculee',
      'L\'examen est rapide et bien tolere',
      'Les valeurs obtenues sont comparees aux normes et aux mesures precedentes',
    ],
    duree: '5 a 10 minutes',
    resultats:
      'Les resultats sont disponibles immediatement. L\'epaisseur corneenne est exprimee en microns et integree dans le bilan global du patient (glaucome, chirurgie refractive).',
    risques: [
      'Leger inconfort lors du contact de la sonde ultrasonique avec la cornee (methode contact)',
      'Risque infime d\'erosion corneenne superficielle (methode contact, exceptionnel)',
    ],
    indications: [
      'Bilan de glaucome ou d\'hypertonie oculaire',
      'Interpretation correcte de la pression intraoculaire',
      'Bilan pre-operatoire de chirurgie refractive (LASIK, PKR)',
      'Suivi du keratocone (amincissement progressif)',
      'Bilan avant greffe de cornee',
      'Oedeme corneen (dystrophie de Fuchs, decompensation endotheliale)',
      'Suivi post-operatoire de greffe de cornee',
    ],
  },
  {
    slug: 'biometrie-oculaire',
    title: "Biometrie oculaire — calcul d'implant",
    shortTitle: 'Biometrie oculaire',
    description:
      "Mesure precise de la longueur axiale de l'oeil et de la puissance corneenne pour calculer la puissance de l'implant intraoculaire a poser lors de la chirurgie de la cataracte.",
    fullDescription: `La biometrie oculaire est un examen de mesure qui permet de determiner avec precision les dimensions de l'oeil, principalement sa longueur axiale, la puissance de la cornee (keratometrie) et la profondeur de la chambre anterieure. Ces mesures sont indispensables pour calculer la puissance de l'implant intraoculaire (lentille artificielle) qui remplacera le cristallin lors de la chirurgie de la cataracte.

Le calcul de la puissance de l'implant est une etape cruciale car il determine le resultat refractif final de l'intervention. Un calcul precis permet au patient de retrouver une vision nette apres l'operation, avec une dependance minimale aux lunettes. Les formules de calcul modernes integrent de multiples parametres biometriques pour optimiser la precision du resultat.

La biometrie optique par interferometrie (methode de reference actuelle) offre une precision de l'ordre de 10 microns pour la mesure de la longueur axiale. En cas de cataracte tres dense empechant la mesure optique, la biometrie ultrasonique constitue une alternative fiable. Les appareils modernes mesurent egalement l'epaisseur du cristallin, la distance blanc-a-blanc et d'autres parametres utiles.

A la Clinique Pasteur de Tunis, la biometrie est realisee avec un biometre optique de derniere generation qui integre les formules de calcul les plus recentes, incluant les formules basees sur l'intelligence artificielle. Le chirurgien ophtalmologue choisit l'implant le mieux adapte aux besoins visuels et au mode de vie de chaque patient.`,
    preparation: [
      'Retirer les lentilles de contact souples au moins 48 heures avant l\'examen',
      'Retirer les lentilles de contact rigides au moins 2 semaines avant',
      'Ne pas dilater les pupilles avant l\'examen',
      'Venir avec ses lunettes et l\'ordonnance optique en cours',
      'Signaler tout antecedent de chirurgie oculaire, en particulier refractive',
    ],
    deroulement: [
      'Le patient est installe assis face au biometre optique',
      'Aucun contact avec l\'oeil n\'est necessaire (methode optique)',
      'Le patient fixe un point lumineux a l\'interieur de l\'appareil',
      'L\'appareil mesure automatiquement la longueur axiale, la keratometrie et la profondeur de la chambre anterieure',
      'Plusieurs mesures sont prises pour chaque oeil pour verifier la reproductibilite',
      'En cas d\'opacite cristallinienne dense, une biometrie ultrasonique peut completer la mesure',
      'Le chirurgien selectionne la formule de calcul et la puissance d\'implant optimales',
    ],
    duree: '10 a 15 minutes',
    resultats:
      'Les resultats sont disponibles immediatement. Le chirurgien ophtalmologue discute avec le patient du choix de l\'implant (monofocal, multifocal, torique) en fonction des mesures et des souhaits visuels du patient.',
    risques: [],
    indications: [
      'Bilan pre-operatoire de chirurgie de la cataracte',
      'Calcul de puissance d\'implant intraoculaire',
      'Bilan pre-operatoire d\'implant phake pour forte myopie',
      'Surveillance de la longueur axiale chez l\'enfant myope',
      'Bilan d\'anisometropie (difference de refraction entre les deux yeux)',
      'Controle apres echange d\'implant intraoculaire',
    ],
  },
  {
    slug: 'echographie-oculaire',
    title: 'Echographie oculaire mode A et B',
    shortTitle: 'Echographie oculaire',
    description:
      "Examen ultrasonore de l'oeil permettant de visualiser les structures intraoculaires quand les milieux sont opaques, et de mesurer les dimensions des lesions intraoculaires.",
    fullDescription: `L'echographie oculaire est un examen d'imagerie non invasif qui utilise les ultrasons pour visualiser les structures internes de l'oeil. Le mode B fournit une image en coupe bidimensionnelle du globe oculaire et de l'orbite, tandis que le mode A affiche un signal unidimensionnel qui permet de mesurer precisement les dimensions des structures et de caracteriser les tissus en fonction de leur reflectivite acoustique.

Cet examen est particulierement precieux lorsque les milieux oculaires transparents sont opaques (cataracte dense, hemorragie du vitre, opacites corneennes), empechant l'examen direct du fond d'oeil. L'echographie permet alors de verifier l'etat de la retine (recherche d'un decollement de retine, d'une tumeur intraoculaire ou d'un corps etranger) avant une intervention chirurgicale.

L'echographie mode A standardisee est un outil diagnostique essentiel pour la caracterisation des tumeurs intraoculaires, notamment le melanome choroidien. La reflectivite interne, l'attenuation du signal et la vascularisation tumorale sont des parametres echographiques cles qui orientent le diagnostic. Le mode B permet de visualiser la morphologie de la lesion et ses rapports avec les structures voisines.

A la Clinique Pasteur de Tunis, l'echographie oculaire est realisee par un ophtalmologue forme a cette technique specialisee. L'examen est effectue avec un echographe dedie a l'ophtalmologie equipe de sondes haute frequence adaptees a l'exploration du globe oculaire et de l'orbite.`,
    preparation: [
      'Aucune preparation particuliere n\'est necessaire',
      'Retirer les lentilles de contact avant l\'examen',
      'Apporter les resultats d\'examens anterieurs (echographies, IRM orbitaire)',
      'Signaler toute chirurgie oculaire recente',
      'Aucun jeune n\'est necessaire',
    ],
    deroulement: [
      'Pour la technique transpalperale : le patient ferme les yeux et la sonde est posee sur la paupiere',
      'Pour la technique par contact direct : une goutte de collyre anesthesiant est instillee et la sonde est posee delicatement sur l\'oeil',
      'Un gel de couplage est utilise pour assurer la transmission des ultrasons',
      'Le praticien explore methodiquement le globe oculaire en deplacant la sonde',
      'Les images sont enregistrees et les mesures effectuees en temps reel',
      'L\'examen est realise pour chaque oeil si necessaire',
      'Le gel est essuye et le patient peut reprendre ses activites immediatement',
    ],
    duree: '15 a 20 minutes',
    resultats:
      'Les resultats sont communiques immediatement par l\'ophtalmologue. Un compte-rendu ecrit accompagne des images echographiques cles est remis au patient ou transmis au medecin prescripteur.',
    risques: [
      'Leger inconfort lors du contact de la sonde avec l\'oeil (technique par contact direct)',
      'Irritation oculaire mineure et transitoire',
    ],
    indications: [
      'Opacites des milieux empechant l\'examen du fond d\'oeil (cataracte dense, hemorragie du vitre)',
      'Bilan pre-operatoire en cas de milieux opaques',
      'Decollement de retine : diagnostic et bilan d\'extension',
      'Tumeurs intraoculaires : diagnostic et mesure (melanome, retinoblastome)',
      'Corps etranger intraoculaire',
      'Pathologies orbitaires (exophtalmie, tumeurs orbitaires)',
      'Malformations oculaires congenitales',
      'Surveillance des tumeurs intraoculaires traitees',
    ],
  },
  {
    slug: 'tonometrie',
    title: 'Tonometrie — mesure de la pression intraoculaire',
    shortTitle: 'Tonometrie',
    description:
      "Mesure de la pression a l'interieur de l'oeil, examen de depistage essentiel du glaucome, realise par aplanation (methode de reference) ou par jet d'air (methode sans contact).",
    fullDescription: `La tonometrie est la mesure de la pression intraoculaire (PIO), c'est-a-dire la pression du liquide (humeur aqueuse) a l'interieur de l'oeil. Cette mesure est fondamentale en ophtalmologie car l'elevation de la pression intraoculaire constitue le principal facteur de risque du glaucome, maladie qui endommage progressivement et irreversiblement le nerf optique.

La methode de reference est la tonometrie par aplanation de Goldmann, realisee a la lampe a fente apres instillation d'un collyre anesthesiant et de fluoresceine. Un petit cone transparent est applique delicatement sur la cornee et la force necessaire pour aplanir une surface corneenne calibree correspond a la pression intraoculaire. La tonometrie a air pulse (sans contact) constitue une alternative pratique pour le depistage, projettant un bref jet d'air sur la cornee.

La pression intraoculaire normale se situe entre 10 et 21 mmHg, mais ces valeurs doivent etre interpretees en tenant compte de l'epaisseur corneenne (pachymetrie) et de l'heure de la mesure, car la PIO fluctue au cours de la journee. Chez certains patients, un glaucome peut se developper malgre une pression apparemment normale (glaucome a pression normale), d'ou l'importance d'un bilan complet.

A la Clinique Pasteur de Tunis, la tonometrie est systematiquement realisee lors de toute consultation ophtalmologique. En cas de suspicion de glaucome, des courbes de tension sur la journee peuvent etre organisees pour evaluer les fluctuations pressionnelles.`,
    preparation: [
      'Retirer les lentilles de contact avant l\'examen',
      'Signaler toute allergie aux collyres anesthesiants ou a la fluoresceine',
      'Aucune preparation particuliere n\'est necessaire',
      'Eviter de se frotter les yeux avant la mesure',
      'Signaler tout antecedent de chirurgie corneenne ou refractive',
    ],
    deroulement: [
      'Pour la tonometrie de Goldmann : une goutte de collyre anesthesiant et de fluoresceine est instillee',
      'Le patient est installe a la lampe a fente, menton et front appuyes',
      'Le cone du tonometre est approche delicatement de la cornee',
      'Le praticien ajuste la molette jusqu\'a obtenir l\'alignement des mires de fluoresceine',
      'La valeur de la pression est lue sur le cadran gradue',
      'Pour la tonometrie a air pulse : le patient fixe une lumiere et un bref jet d\'air est projete sur la cornee',
      'La mesure est repetee pour chaque oeil',
    ],
    duree: '5 minutes',
    resultats:
      'La pression intraoculaire est communiquee immediatement au patient. En cas de valeur elevee, l\'ophtalmologue complete le bilan par un examen du nerf optique, un champ visuel et un OCT pour rechercher un glaucome.',
    risques: [
      'Leger inconfort passager lors du contact du cone avec la cornee (Goldmann)',
      'Sensation desagreable due au jet d\'air (tonometrie sans contact)',
      'Micro-erosion corneenne superficielle (exceptionnelle)',
    ],
    indications: [
      'Depistage systematique du glaucome a partir de 40 ans',
      'Suivi de la pression intraoculaire chez les patients glaucomateux',
      'Controle de l\'efficacite du traitement anti-glaucomateux (collyres, laser, chirurgie)',
      'Bilan d\'hypertonie oculaire',
      'Surveillance sous traitement corticoide (risque de glaucome cortisonique)',
      'Bilan de douleur oculaire aigue (crise de glaucome aigu)',
      'Suivi post-operatoire de chirurgie oculaire',
    ],
  },
  {
    slug: 'bilan-orthoptique',
    title: 'Bilan orthoptique et motilite oculaire',
    shortTitle: 'Bilan orthoptique',
    description:
      "Evaluation complete de l'alignement des yeux, de la coordination binoculaire et de la motilite des muscles oculomoteurs, essentiel dans le diagnostic des strabismes et des diplopies.",
    fullDescription: `Le bilan orthoptique est un examen fonctionnel complet qui evalue la coordination des deux yeux, l'alignement oculaire, la motilite des muscles oculomoteurs et la qualite de la vision binoculaire. Realise par un orthoptiste specialise, cet examen explore le systeme sensori-moteur de la vision pour diagnostiquer et quantifier les troubles de la motricite oculaire.

L'examen comprend l'etude de la deviation oculaire (strabisme) en vision de loin et de pres, dans les differentes positions du regard, l'evaluation de la convergence et de la divergence, la recherche d'une vision binoculaire normale (tests de stereoscopie) et l'etude des mouvements de poursuite et de saccades. Chez l'enfant, le bilan orthoptique est essentiel pour detecter precocement une amblyopie (oeil paresseux) et mettre en place une reeducation adaptee.

Chez l'adulte, le bilan orthoptique est indique en cas de diplopie (vision double), de fatigue visuelle, de cephalees liees au travail sur ecran ou de decompensation d'un strabisme latent (phorie). L'orthoptiste peut egalement evaluer les sequelles d'une paralysie oculomotrice et proposer un programme de reeducation orthoptique adapte.

A la Clinique Pasteur de Tunis, le bilan orthoptique est realise par des orthoptistes diplomes disposant d'un plateau technique complet. Les resultats du bilan sont transmis a l'ophtalmologue pour une prise en charge globale, notamment en cas d'indication chirurgicale de strabisme.`,
    preparation: [
      'Venir avec ses lunettes ou lentilles de contact habituelles',
      'Apporter l\'ordonnance optique en cours',
      'Apporter les bilans orthoptiques anterieurs si disponibles',
      'Signaler tout antecedent de strabisme ou d\'amblyopie dans l\'enfance',
      'Ne pas dilater les pupilles avant l\'examen',
      'Venir repose : la fatigue peut influencer les resultats',
    ],
    deroulement: [
      'L\'orthoptiste recueille l\'histoire visuelle detaillee du patient',
      'L\'acuite visuelle est verifiee de loin et de pres avec et sans correction',
      'L\'alignement des yeux est etudie par le test de l\'ecran (cover test) en vision de loin et de pres',
      'La deviation est mesuree avec des prismes (en dioptries prismatiques)',
      'La motilite oculaire est testee dans les neuf positions du regard',
      'La convergence est evaluee (point de convergence proximal, amplitude de convergence)',
      'La vision binoculaire et la stereoscopie sont testees (tests de Wirt, TNO, Lang)',
      'Un bilan sensoriel est realise en cas de strabisme (correspondance retinienne, suppression)',
    ],
    duree: '30 a 45 minutes',
    resultats:
      'L\'orthoptiste remet un compte-rendu detaille au patient et a l\'ophtalmologue traitant. En cas d\'anomalie, un plan de reeducation orthoptique ou une orientation vers le chirurgien est propose.',
    risques: [],
    indications: [
      'Strabisme de l\'enfant ou de l\'adulte',
      'Amblyopie (oeil paresseux) : depistage et suivi',
      'Diplopie (vision double)',
      'Fatigue visuelle et cephalees liees au travail prolonge sur ecran',
      'Paralysie oculomotrice (III, IV, VI)',
      'Insuffisance de convergence',
      'Bilan pre-operatoire et post-operatoire de chirurgie de strabisme',
      'Troubles de l\'apprentissage chez l\'enfant avec composante visuelle',
    ],
  },
  {
    slug: 'electroretinogramme',
    title: 'Electroretinogramme (ERG) et electro-oculogramme (EOG)',
    shortTitle: 'ERG et EOG',
    description:
      "Enregistrement de l'activite electrique de la retine en reponse a des stimulations lumineuses, permettant d'evaluer le fonctionnement des photorecepteurs et des cellules retiniennes.",
    fullDescription: `L'electroretinogramme (ERG) est un examen d'electrophysiologie qui enregistre l'activite electrique de la retine en reponse a des stimulations lumineuses calibrees. Des electrodes speciales sont placees sur l'oeil (electrode corneenne ou electrode cutanee palpebrale) et sur la peau peri-orbitaire pour capter les signaux electriques generes par les differentes couches cellulaires de la retine : photorecepteurs (cones et batonnets), cellules bipolaires et cellules ganglionnaires.

L'ERG en champ total (full-field ERG) evalue la fonction globale de la retine en conditions scotopiques (vision nocturne, mediation par les batonnets) et photopiques (vision diurne, mediation par les cones). L'ERG multifocal permet d'obtenir une cartographie fonctionnelle detaillee de la region maculaire. Ces examens sont essentiels pour le diagnostic des dystrophies retiniennes hereditaires comme la retinite pigmentaire, les dystrophies des cones et les dystrophies cones-batonnets.

L'electro-oculogramme (EOG) mesure le potentiel de repos de l'epithelium pigmentaire retinien en enregistrant les variations de ce potentiel lors de mouvements oculaires lateraux en conditions d'obscurite puis de lumiere. L'EOG est specifiquement altere dans certaines pathologies de l'epithelium pigmentaire comme la maladie de Best (dystrophie maculaire vitelliforme).

A la Clinique Pasteur de Tunis, l'electrophysiologie visuelle est realisee dans un laboratoire dedie, equipe d'un systeme d'enregistrement conforme aux standards de la Societe Internationale d'Electrophysiologie Clinique de la Vision (ISCEV). L'examen est supervise par un ophtalmologue specialise en electrophysiologie.`,
    preparation: [
      'Aucun jeune n\'est necessaire',
      'Retirer les lentilles de contact avant l\'examen',
      'Signaler tout traitement oculaire en cours',
      'Prevoir une duree d\'examen assez longue (1 heure environ)',
      'L\'examen necessite une phase d\'adaptation a l\'obscurite de 20 minutes : prevoir d\'etre patient',
      'Apporter les resultats d\'examens anterieurs (ERG, champ visuel, OCT)',
    ],
    deroulement: [
      'Le patient est installe dans une salle d\'examen obscurcie',
      'Des electrodes de reference sont placees sur la peau autour des yeux et sur le front',
      'Une electrode corneenne (lentille speciale) ou une electrode cutanee palpebrale est mise en place apres instillation d\'un collyre anesthesiant',
      'Une phase d\'adaptation a l\'obscurite de 20 minutes est necessaire pour l\'ERG scotopique',
      'Des stimulations lumineuses de differentes intensites et couleurs sont presentees',
      'Les reponses electriques retiniennes sont enregistrees et analysees par l\'ordinateur',
      'L\'examen est repete en conditions photopiques apres adaptation a la lumiere',
      'Pour l\'EOG, le patient effectue des mouvements oculaires lateraux pendant des phases alternees d\'obscurite et de lumiere',
    ],
    duree: '45 minutes a 1 heure 30 (selon les protocoles realises)',
    resultats:
      'Les resultats sont analyses par l\'ophtalmologue specialise en electrophysiologie et compares aux normes ISCEV. Un compte-rendu detaille est remis sous quelques jours, comprenant les traces et leur interpretation clinique.',
    risques: [
      'Inconfort lie au port de l\'electrode corneenne (bien tolere grace au collyre anesthesiant)',
      'Irritation oculaire legere et transitoire apres le retrait de l\'electrode',
      'Eblouissement passager apres les stimulations lumineuses',
      'Leger inconfort cutane au niveau des electrodes adhesives',
    ],
    indications: [
      'Dystrophies retiniennes hereditaires (retinite pigmentaire, dystrophie des cones)',
      'Maladie de Best (dystrophie maculaire vitelliforme) — diagnostic par EOG',
      'Suspicion de dysfonction retinienne chez l\'enfant',
      'Bilan de baisse de vision inexpliquee par les examens morphologiques',
      'Evaluation de la toxicite retinienne medicamenteuse',
      'Bilan pre-operatoire en cas de milieux opaques (evaluer la fonction retinienne avant chirurgie)',
      'Cecite nocturne (hemeralopie) : bilan etiologique',
      'Suivi des pathologies retiniennes hereditaires diagnostiquees',
    ],
  },
];
