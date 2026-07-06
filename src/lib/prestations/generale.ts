export const prestationsGenerale = [
  {
    slug: 'chirurgie-digestive',
    title: 'Chirurgie digestive (estomac, intestin, côlon, rectum)',
    shortTitle: 'Chirurgie digestive',
    description: 'Prise en charge chirurgicale complète des maladies de l\'appareil digestif, par voie classique ou laparoscopique mini-invasive.',
    fullDescription: `La chirurgie digestive regroupe l'ensemble des interventions portant sur le tube digestif : estomac, intestin grêle, côlon et rectum. Elle traite des pathologies très variées, bénignes ou tumorales, allant de l'ablation d'un segment malade à des reconstructions complexes du circuit digestif.

Chaque fois que cela est possible, l'approche laparoscopique (cœlioscopie) est privilégiée : le chirurgien opère par de petites incisions à l'aide d'une caméra et d'instruments fins, ce qui réduit les douleurs post-opératoires, raccourcit l'hospitalisation et accélère le retour aux activités. Les interventions plus complexes peuvent nécessiter une voie classique, choisie dans l'intérêt du patient.

La prise en charge s'inscrit dans une démarche globale : bilan pré-opératoire complet, discussion du dossier en équipe pour les pathologies tumorales, protocoles de récupération améliorée après chirurgie (RAAC) favorisant une convalescence rapide et confortable.

À la Clinique Pasteur Tunis, la chirurgie digestive est assurée par des chirurgiens expérimentés en chirurgie lourde, dans des blocs opératoires équipés de colonnes de cœlioscopie haute définition, avec une équipe anesthésique dédiée et des unités de réanimation disponibles à tout moment.`,
    image: '/images/fiches/gen-chirurgie-digestive.webp',
    indications: [
      { label: 'Tumeurs bénignes ou malignes de l\'estomac, du côlon ou du rectum', explication: `Qu'elle soit bénigne ou cancéreuse, une tumeur du tube digestif se traite le plus souvent par l'ablation du segment concerné, avec rétablissement du circuit digestif dans le même temps.` },
      { label: 'Maladies inflammatoires de l\'intestin résistantes au traitement médical', explication: `Quand les médicaments ne suffisent plus à contrôler une maladie de Crohn ou une rectocolite, retirer la portion d'intestin la plus atteinte apporte un réel soulagement.` },
      { label: 'Diverticulite compliquée ou récidivante', explication: `Des poussées d'infection répétées ou compliquées des diverticules du côlon peuvent justifier l'ablation du segment fragilisé, pour éviter de nouvelles crises.` },
      { label: 'Occlusions et urgences digestives', explication: `Un blocage du transit ou une autre urgence abdominale peut nécessiter une intervention rapide : les équipes et les blocs sont disponibles à tout moment.` },
      { label: 'Reflux gastro-œsophagien sévère nécessitant une chirurgie', explication: `Quand les remontées acides persistent malgré un traitement bien suivi, une intervention anti-reflux corrige durablement le problème à sa source.` },
    ],
    preparation: [
      'Bilan d\'imagerie et endoscopique adapté à la pathologie',
      'Bilan sanguin pré-opératoire complet',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Préparation digestive spécifique selon les consignes du chirurgien',
    ],
    deroulement: [
      'Anesthésie générale et installation au bloc opératoire',
      'Abord laparoscopique par petites incisions chaque fois que possible',
      'Exérèse du segment digestif malade ou correction de l\'anomalie',
      'Rétablissement de la continuité digestive',
      'Vérifications finales et fermeture',
      'Surveillance post-opératoire adaptée, avec mobilisation précoce',
    ],
    duree: '2 à 4 heures selon l\'intervention',
    resultats: 'Grâce aux protocoles de récupération améliorée, la reprise de l\'alimentation et de la marche est précoce. L\'hospitalisation dure généralement quelques jours, suivie d\'une convalescence progressive à domicile avec un suivi organisé en consultation.',
    risques: [
      'Risques inhérents à toute chirurgie abdominale, réduits par les techniques mini-invasives',
      'Troubles transitoires du transit dans les premiers jours',
      'Surveillance attentive des suites opératoires par l\'équipe soignante',
    ],
  },
  {
    slug: 'cholecystectomie',
    title: 'Cholécystectomie (ablation de la vésicule biliaire)',
    shortTitle: 'Cholécystectomie',
    description: 'Ablation de la vésicule biliaire par cœlioscopie, traitement de référence des calculs vésiculaires symptomatiques.',
    fullDescription: `La cholécystectomie est l'ablation de la vésicule biliaire, petit réservoir situé sous le foie qui stocke la bile. Elle est indiquée principalement en cas de calculs biliaires responsables de douleurs (coliques hépatiques), d'inflammation de la vésicule (cholécystite) ou de complications des calculs.

L'intervention est aujourd'hui réalisée dans l'immense majorité des cas par cœlioscopie : à travers de petites incisions, le chirurgien introduit une caméra et des instruments fins pour détacher et retirer la vésicule. Cette technique mini-invasive assure des suites simples, des douleurs limitées et une reprise rapide des activités.

Vivre sans vésicule biliaire est tout à fait normal : la bile, produite par le foie, continue de s'écouler directement dans l'intestin pour assurer la digestion. La plupart des patients ne ressentent aucun changement durable dans leur alimentation.

À la Clinique Pasteur Tunis, la cholécystectomie cœlioscopique est une intervention parfaitement maîtrisée, réalisée dans des blocs équipés de colonnes de cœlioscopie haute définition, souvent dans le cadre d'une hospitalisation courte.`,
    image: '/images/fiches/gen-cholecystectomie.webp',
    indications: [
      { label: 'Calculs biliaires responsables de coliques hépatiques répétées', explication: `Des douleurs intenses sous les côtes droites, survenant souvent après les repas, signent la présence de calculs : retirer la vésicule met fin définitivement à ces crises.` },
      { label: 'Cholécystite aiguë (inflammation de la vésicule)', explication: `Quand la vésicule s'infecte ou s'enflamme à cause des calculs, son ablation devient nécessaire, parfois rapidement, pour éviter les complications.` },
      { label: 'Complications des calculs (migration, pancréatite biliaire)', explication: `Un calcul qui migre dans les canaux biliaires peut provoquer une jaunisse ou une inflammation du pancréas : l'ablation de la vésicule évite les récidives.` },
      { label: 'Polypes vésiculaires nécessitant une exérèse', explication: `Certaines excroissances de la paroi vésiculaire, en raison de leur taille ou de leur évolution, justifient de retirer la vésicule par précaution.` },
    ],
    preparation: [
      'Échographie abdominale confirmant le diagnostic',
      'Bilan sanguin avec tests hépatiques',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Petites incisions abdominales pour la caméra et les instruments',
      'Dissection prudente et identification précise des structures biliaires',
      'Détachement et extraction de la vésicule',
      'Vérification finale et fermeture des incisions',
    ],
    duree: '45 minutes à 1 heure 30',
    resultats: 'La sortie a lieu généralement après 24 à 48 heures. Les douleurs sont modérées et bien contrôlées, la reprise de l\'alimentation est rapide et les activités quotidiennes sont retrouvées en quelques jours, le travail en une à deux semaines selon l\'activité.',
    risques: [
      'Douleurs abdominales et à l\'épaule transitoires liées à la cœlioscopie',
      'Conversion en chirurgie ouverte rare, décidée uniquement pour la sécurité du patient',
      'Troubles digestifs légers et passagers possibles pendant quelques semaines',
    ],
  },
  {
    slug: 'appendicectomie',
    title: 'Appendicectomie',
    shortTitle: 'Appendicectomie',
    description: 'Ablation de l\'appendice en cas d\'appendicite, réalisée le plus souvent par cœlioscopie, y compris en urgence.',
    fullDescription: `L'appendicectomie est l'ablation de l'appendice, petit prolongement du côlon situé dans la partie droite du bas-ventre. Elle est indiquée en cas d'appendicite aiguë, c'est-à-dire d'inflammation de l'appendice, une des urgences chirurgicales les plus fréquentes qui se manifeste typiquement par des douleurs abdominales, de la fièvre et des nausées.

L'intervention est le plus souvent réalisée par cœlioscopie : trois petites incisions suffisent pour introduire la caméra et les instruments, localiser l'appendice, le détacher et le retirer. Cette approche mini-invasive permet une exploration complète de l'abdomen, des suites simples et des cicatrices discrètes.

Traitée à temps, l'appendicite guérit sans séquelle et l'absence d'appendice n'a aucune conséquence sur la digestion ni sur la santé. La rapidité de la prise en charge est l'élément clé pour éviter les complications.

À la Clinique Pasteur Tunis, l'appendicectomie est assurée à toute heure grâce au service des urgences ouvert en permanence et aux blocs opératoires disponibles jour et nuit, chez l'adulte comme chez l'enfant.`,
    image: '/images/fiches/gen-appendicectomie.webp',
    indications: [
      { label: 'Appendicite aiguë confirmée par l\'examen clinique et l\'imagerie', explication: `Douleur du bas-ventre droit, fièvre et nausées orientent vers l'appendicite : une fois le diagnostic confirmé, l'ablation rapide de l'appendice permet une guérison sans séquelle.` },
      { label: 'Suspicion d\'appendicite avec signes cliniques évocateurs', explication: `Quand les signes sont très évocateurs, il est parfois plus sûr d'opérer sans attendre : la cœlioscopie permet de vérifier le diagnostic et de traiter dans le même temps.` },
      { label: 'Appendicite compliquée (abcès, péritonite localisée)', explication: `Si l'infection s'est étendue autour de l'appendice, l'intervention nettoie soigneusement la zone en plus de retirer l'appendice, avec une surveillance adaptée.` },
      { label: 'Douleurs récidivantes de la fosse iliaque droite documentées', explication: `Des douleurs qui reviennent régulièrement du côté droit du bas-ventre, explorées et documentées, peuvent conduire à retirer l'appendice pour régler le problème durablement.` },
    ],
    preparation: [
      'Examen clinique, bilan sanguin et imagerie (échographie ou scanner)',
      'Mise à jeun dès la suspicion du diagnostic',
      'Évaluation par l\'anesthésiste avant l\'intervention',
      'Antibiothérapie débutée selon le protocole si nécessaire',
    ],
    deroulement: [
      'Anesthésie générale',
      'Trois petites incisions pour la cœlioscopie',
      'Exploration de la cavité abdominale',
      'Détachement et extraction de l\'appendice',
      'Lavage local si nécessaire et fermeture des incisions',
    ],
    duree: '30 minutes à 1 heure',
    resultats: 'Les suites sont généralement simples : reprise de l\'alimentation rapide, sortie après 24 à 48 heures dans les formes non compliquées et retour aux activités normales en une à deux semaines. Les formes compliquées nécessitent une surveillance un peu plus longue.',
    risques: [
      'Douleurs post-opératoires modérées, bien contrôlées par les antalgiques',
      'Infection de cicatrice peu fréquente, surveillée lors du suivi',
      'Suites un peu plus longues en cas d\'appendicite compliquée, encadrées par l\'équipe',
    ],
  },
  {
    slug: 'cure-hernie',
    title: 'Cure de hernie (inguinale, ombilicale, hiatale)',
    shortTitle: 'Cure de hernie',
    description: 'Réparation chirurgicale des hernies de la paroi abdominale et du hiatus œsophagien, par techniques mini-invasives ou classiques.',
    fullDescription: `Une hernie correspond au passage d'une partie du contenu de l'abdomen à travers un point de faiblesse de la paroi. Les plus fréquentes sont la hernie inguinale, au niveau de l'aine, et la hernie ombilicale, au niveau du nombril. La hernie hiatale, quant à elle, correspond au passage d'une partie de l'estomac vers le thorax à travers le diaphragme, souvent responsable de reflux.

La cure de hernie consiste à réintégrer le contenu hernié et à réparer solidement la paroi, le plus souvent en la renforçant par une prothèse (filet) parfaitement tolérée. Pour la hernie hiatale, l'intervention repositionne l'estomac dans l'abdomen et reconstitue un dispositif anti-reflux efficace.

Ces interventions sont réalisées par cœlioscopie chaque fois que c'est possible, avec des suites simples : douleurs limitées, hospitalisation courte et reprise rapide des activités. La technique est choisie en fonction du type de hernie, de sa taille et du profil du patient.

À la Clinique Pasteur Tunis, les cures de hernie sont pratiquées par des chirurgiens expérimentés, en hospitalisation courte dans la plupart des cas, avec des consignes de reprise d'activité personnalisées remises à la sortie.`,
    image: '/images/fiches/gen-cure-hernie.webp',
    indications: [
      { label: 'Hernie inguinale gênante ou augmentant de volume', explication: `Une boule au niveau de l'aine qui grossit ou devient gênante à l'effort mérite d'être réparée : l'intervention est simple et la récupération rapide.` },
      { label: 'Hernie ombilicale ou de la ligne blanche symptomatique', explication: `Quand une hernie du nombril ou de la ligne médiane du ventre devient douloureuse ou inesthétique, sa réparation chirurgicale règle le problème durablement.` },
      { label: 'Hernie hiatale avec reflux résistant au traitement médical', explication: `Si une partie de l'estomac remonte dans le thorax et provoque un reflux que les médicaments ne contrôlent plus, l'intervention repositionne l'estomac et reconstitue une barrière anti-reflux.` },
      { label: 'Éventration sur cicatrice d\'une chirurgie antérieure', explication: `Une ancienne cicatrice abdominale peut se distendre et laisser passer le contenu de l'abdomen : la paroi est alors réparée et renforcée par une prothèse.` },
      { label: 'Prévention du risque d\'étranglement herniaire', explication: `Opérer une hernie à froid, avant qu'elle ne se bloque brutalement, évite une intervention en urgence et garantit des suites plus simples.` },
    ],
    preparation: [
      'Examen clinique et imagerie si nécessaire',
      'Bilan sanguin pré-opératoire',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Arrêt du tabac recommandé pour favoriser la cicatrisation',
    ],
    deroulement: [
      'Anesthésie générale ou locorégionale selon le cas',
      'Abord cœlioscopique ou incision directe selon la technique retenue',
      'Réintégration du contenu hernié',
      'Réparation de la paroi, renforcée par une prothèse si indiqué',
      'Fermeture des incisions',
    ],
    duree: '45 minutes à 2 heures selon le type de hernie',
    resultats: 'La sortie a lieu le jour même ou le lendemain dans la plupart des cas. La marche est reprise immédiatement, les activités quotidiennes en quelques jours et les efforts physiques progressivement selon les consignes du chirurgien. La réparation prothétique offre des résultats solides et durables.',
    risques: [
      'Douleurs et gonflement transitoires de la zone opérée',
      'Petit hématome ou sérome possible, se résorbant spontanément',
      'Récidive peu fréquente grâce aux techniques de renforcement prothétique',
    ],
  },
  {
    slug: 'chirurgie-foie-voies-biliaires',
    title: 'Chirurgie du foie et des voies biliaires',
    shortTitle: 'Chirurgie hépato-biliaire',
    description: 'Chirurgie spécialisée des tumeurs et maladies du foie et des canaux biliaires, réalisée par une équipe experte en chirurgie lourde.',
    fullDescription: `La chirurgie du foie et des voies biliaires, dite chirurgie hépato-biliaire, prend en charge les tumeurs du foie, bénignes ou malignes, les kystes hépatiques, ainsi que les maladies des canaux qui transportent la bile du foie vers l'intestin : calculs de la voie biliaire principale, rétrécissements ou tumeurs des voies biliaires.

Le foie possède une capacité de régénération remarquable qui permet au chirurgien d'en retirer une partie lorsque cela est nécessaire : c'est la résection hépatique, dont l'étendue est soigneusement planifiée grâce à une imagerie moderne. Le volume de foie restant reprend progressivement le relais dans les semaines qui suivent.

Cette chirurgie exigeante requiert une équipe expérimentée en chirurgie lourde, un matériel spécifique et un environnement sécurisé avec réanimation disponible. La stratégie est définie pour chaque patient après un bilan complet et une discussion pluridisciplinaire pour les pathologies tumorales.

À la Clinique Pasteur Tunis, la chirurgie hépato-biliaire bénéficie de blocs opératoires équipés des dernières technologies, d'un monitoring per-opératoire avancé et d'une réanimation polyvalente assurant une surveillance rapprochée des suites opératoires.`,
    image: '/images/fiches/gen-chirurgie-foie-voies-biliaires.webp',
    indications: [
      { label: 'Tumeurs du foie bénignes ou malignes accessibles à une résection', explication: `Grâce à sa capacité unique de régénération, le foie tolère l'ablation de sa partie malade : le volume restant reprend progressivement le relais.` },
      { label: 'Métastases hépatiques opérables', explication: `Lorsqu'un cancer d'un autre organe a essaimé au foie de façon limitée, retirer ces lésions peut s'intégrer dans une stratégie de traitement à visée curative.` },
      { label: 'Kystes hépatiques volumineux ou symptomatiques', explication: `Un kyste du foie qui grossit, comprime les organes voisins ou provoque des douleurs peut être traité chirurgicalement avec des suites généralement simples.` },
      { label: 'Calculs de la voie biliaire principale', explication: `Des calculs bloqués dans le canal qui conduit la bile vers l'intestin peuvent provoquer jaunisse et infections : leur extraction rétablit un écoulement normal.` },
      { label: 'Rétrécissements ou tumeurs des voies biliaires', explication: `Quand le canal biliaire se rétrécit ou est le siège d'une tumeur, une chirurgie spécialisée restaure le passage de la bile vers l'intestin.` },
    ],
    preparation: [
      'Imagerie hépatique complète (scanner, IRM) pour planifier la résection',
      'Bilan sanguin approfondi incluant les fonctions hépatique et de coagulation',
      'Discussion du dossier en réunion pluridisciplinaire pour les pathologies tumorales',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale avec monitoring avancé',
      'Abord chirurgical adapté, cœlioscopique lorsque c\'est possible',
      'Exploration et repérage précis des structures vasculaires et biliaires',
      'Résection de la zone malade avec préservation maximale du foie sain',
      'Contrôle rigoureux de l\'hémostase et de l\'étanchéité biliaire',
      'Fermeture et transfert en unité de surveillance adaptée',
    ],
    duree: '3 à 6 heures selon l\'étendue de la résection',
    resultats: 'La surveillance initiale se déroule en unité spécialisée, puis l\'hospitalisation se poursuit quelques jours en chambre. Le foie restant se régénère progressivement au fil des semaines. Un suivi régulier avec imagerie et bilans sanguins est organisé après la sortie.',
    risques: [
      'Chirurgie spécialisée dont les risques sont maîtrisés par une équipe experte et un environnement sécurisé',
      'Fatigue transitoire pendant la phase de régénération hépatique',
      'Surveillance biologique régulière au cours de la convalescence',
    ],
  },
  {
    slug: 'chirurgie-pancreas',
    title: 'Chirurgie du pancréas',
    shortTitle: 'Chirurgie du pancréas',
    description: 'Prise en charge chirurgicale des tumeurs et maladies du pancréas, domaine de haute spécialisation de la chirurgie digestive.',
    fullDescription: `Le pancréas est une glande profonde de l'abdomen qui joue un double rôle essentiel : il produit des enzymes indispensables à la digestion et des hormones, dont l'insuline, qui régulent le sucre dans le sang. Sa chirurgie constitue l'un des domaines les plus spécialisés de la chirurgie digestive.

Les interventions sur le pancréas concernent principalement les tumeurs, bénignes ou malignes, les kystes et pseudokystes, ainsi que certaines formes de pancréatite chronique. Selon la localisation de la lésion, le chirurgien peut retirer la tête du pancréas, sa partie gauche (pancréatectomie caudale) ou, plus rarement, réaliser d'autres gestes conservateurs.

Cette chirurgie exige une planification minutieuse fondée sur une imagerie de haute précision, une équipe rompue à la chirurgie lourde et un environnement post-opératoire sécurisé. Chaque dossier est étudié de façon approfondie, en concertation pluridisciplinaire lorsqu'il s'agit d'une pathologie tumorale.

À la Clinique Pasteur Tunis, la chirurgie pancréatique est réalisée par des chirurgiens expérimentés en chirurgie digestive lourde, avec un monitoring per-opératoire avancé et une réanimation polyvalente assurant la surveillance attentive des premiers jours.`,
    image: '/images/fiches/gen-chirurgie-pancreas.webp',
    indications: [
      { label: 'Tumeurs du pancréas opérables', explication: `Lorsque le bilan confirme qu'une tumeur du pancréas peut être retirée, la chirurgie représente la meilleure chance de traitement, réalisée par une équipe hautement spécialisée.` },
      { label: 'Tumeurs kystiques nécessitant une exérèse', explication: `Certaines lésions kystiques du pancréas présentent un risque d'évolution : les retirer par précaution évite qu'elles ne se transforment avec le temps.` },
      { label: 'Pseudokystes compliqués après pancréatite', explication: `Après une inflammation du pancréas, des poches de liquide peuvent persister et devenir gênantes ou s'infecter : la chirurgie les traite lorsque c'est nécessaire.` },
      { label: 'Certaines formes de pancréatite chronique douloureuse', explication: `Quand une inflammation chronique du pancréas provoque des douleurs rebelles aux traitements, un geste chirurgical adapté peut apporter un soulagement durable.` },
      { label: 'Tumeurs endocrines du pancréas', explication: `Ces tumeurs particulières, qui peuvent sécréter des hormones en excès, sont retirées par une chirurgie souvent conservatrice, adaptée à leur taille et à leur localisation.` },
    ],
    preparation: [
      'Imagerie pancréatique de haute précision (scanner, IRM, écho-endoscopie)',
      'Bilan sanguin complet incluant le bilan nutritionnel',
      'Discussion pluridisciplinaire du dossier pour les pathologies tumorales',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Optimisation de l\'état nutritionnel si nécessaire avant l\'opération',
    ],
    deroulement: [
      'Anesthésie générale avec monitoring complet',
      'Exploration abdominale et confirmation de la stratégie opératoire',
      'Exérèse de la partie malade du pancréas',
      'Reconstructions digestives adaptées au geste réalisé',
      'Mise en place de drains de surveillance',
      'Transfert en unité de surveillance rapprochée',
    ],
    duree: '3 à 6 heures selon le geste',
    resultats: 'Les suites nécessitent une surveillance attentive de plusieurs jours, avec reprise progressive de l\'alimentation. La convalescence s\'étend sur plusieurs semaines, accompagnée d\'un suivi nutritionnel et médical régulier. Certains patients bénéficient d\'un accompagnement spécifique pour la digestion ou l\'équilibre glycémique.',
    risques: [
      'Chirurgie majeure dont les suites sont étroitement surveillées par l\'équipe',
      'Retard transitoire de la reprise alimentaire possible',
      'Suivi digestif et glycémique organisé après l\'intervention',
    ],
  },
  {
    slug: 'resections-coliques',
    title: 'Résections coliques',
    shortTitle: 'Résections coliques',
    description: 'Ablation chirurgicale d\'un segment du côlon malade avec rétablissement de la continuité digestive, le plus souvent par cœlioscopie.',
    fullDescription: `La résection colique consiste à retirer la portion du côlon atteinte par une maladie, puis à raccorder les deux extrémités saines pour rétablir la continuité du circuit digestif. Selon la localisation de la lésion, l'intervention porte sur le côlon droit, le côlon gauche, le sigmoïde ou le rectum.

Les indications principales sont les tumeurs colorectales, la diverticulite compliquée ou récidivante et certaines maladies inflammatoires de l'intestin. Pour les pathologies tumorales, la résection emporte également les territoires de drainage lymphatique selon des règles carcinologiques strictes, et chaque dossier est discuté en concertation pluridisciplinaire.

La cœlioscopie est aujourd'hui l'approche privilégiée : elle permet une chirurgie précise à travers de petites incisions, avec des suites plus confortables. Associée aux protocoles de récupération améliorée après chirurgie (RAAC), elle autorise une réalimentation et une mobilisation précoces.

À la Clinique Pasteur Tunis, les résections coliques sont réalisées par des chirurgiens rompus à la chirurgie digestive lourde et à la cœlioscopie, dans des blocs équipés de colonnes haute définition, avec un accompagnement attentif tout au long de l'hospitalisation.`,
    image: '/images/fiches/gen-resections-coliques.webp',
    indications: [
      { label: 'Tumeurs du côlon ou du rectum', explication: `L'ablation du segment de côlon porteur de la tumeur, avec ses territoires de drainage, constitue le traitement de référence, aux résultats d'autant meilleurs que la lésion est découverte tôt.` },
      { label: 'Diverticulite sigmoïdienne compliquée ou récidivante', explication: `Quand les crises d'infection des diverticules se répètent ou se compliquent, retirer le segment fragilisé du côlon met le patient à l'abri de nouvelles poussées.` },
      { label: 'Maladies inflammatoires de l\'intestin résistantes au traitement', explication: `Si les médicaments ne contrôlent plus l'inflammation, l'ablation de la portion la plus atteinte améliore nettement le confort de vie.` },
      { label: 'Polypes volumineux non résécables par endoscopie', explication: `Certains polypes sont trop gros ou trop étendus pour être retirés lors d'une coloscopie : une résection chirurgicale du segment concerné devient alors nécessaire.` },
      { label: 'Certaines urgences coliques (perforation, occlusion)', explication: `Une perforation ou un blocage complet du côlon impose une intervention sans délai : les équipes sont organisées pour opérer à toute heure.` },
    ],
    preparation: [
      'Coloscopie et imagerie précisant la localisation de la lésion',
      'Bilan sanguin pré-opératoire complet',
      'Consultation d\'anesthésie',
      'Préparation colique selon le protocole du service',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Abord cœlioscopique privilégié',
      'Libération et exérèse du segment colique malade',
      'Rétablissement de la continuité digestive par anastomose',
      'Vérification de l\'étanchéité et fermeture',
      'Application du protocole de récupération améliorée dès le réveil',
    ],
    duree: '2 à 4 heures',
    resultats: 'La réalimentation et la marche sont reprises précocement grâce aux protocoles RAAC. L\'hospitalisation dure généralement quelques jours, et le transit retrouve progressivement son rythme habituel en quelques semaines. Un suivi adapté à la pathologie initiale est ensuite organisé.',
    risques: [
      'Risques anastomotiques surveillés de près durant les premiers jours',
      'Troubles transitoires du transit intestinal',
      'Complications infectieuses peu fréquentes, prévenues par des protocoles rigoureux',
    ],
  },
  {
    slug: 'duodeno-pancreatectomie-cephalique',
    title: 'Duodéno-pancréatectomie céphalique (DPC)',
    shortTitle: 'DPC',
    description: 'Intervention de référence pour les tumeurs de la tête du pancréas et de la région péri-ampullaire, sommet de la chirurgie digestive.',
    fullDescription: `La duodéno-pancréatectomie céphalique, ou intervention de Whipple, est l'opération de référence pour traiter les tumeurs de la tête du pancréas et de la région voisine : partie basse de la voie biliaire, ampoule de Vater et duodénum. Elle consiste à retirer en un seul bloc la tête du pancréas, le duodénum, la vésicule biliaire et la partie basse du canal biliaire.

Après cette exérèse, le chirurgien reconstruit le circuit digestif en raccordant le pancréas restant, la voie biliaire et l'estomac à l'intestin. Cette phase de reconstruction, minutieuse, conditionne la qualité des suites opératoires et fait l'objet d'un soin extrême.

La DPC est considérée comme l'une des interventions les plus complexes de la chirurgie digestive. Elle exige une équipe hautement expérimentée, une anesthésie spécialisée, un monitoring per-opératoire avancé et une surveillance post-opératoire en unité de réanimation. Chaque indication est validée après un bilan exhaustif et une discussion pluridisciplinaire.

La Clinique Pasteur Tunis fait partie des établissements disposant de l'expertise et du plateau technique nécessaires à cette chirurgie d'exception : chirurgiens rompus à la chirurgie lourde digestive, réanimation polyvalente et accompagnement personnalisé du patient et de sa famille à chaque étape.`,
    image: '/images/fiches/gen-duodeno-pancreatectomie-cephalique.webp',
    indications: [
      { label: 'Tumeurs de la tête du pancréas opérables', explication: `Quand le bilan confirme que la tumeur peut être retirée en totalité, la DPC offre la meilleure perspective de traitement, menée par une équipe rompue à cette chirurgie.` },
      { label: 'Tumeurs de l\'ampoule de Vater', explication: `Cette petite zone où les canaux biliaire et pancréatique rejoignent l'intestin peut être le siège de tumeurs, souvent révélées par une jaunisse et accessibles à cette intervention.` },
      { label: 'Tumeurs de la partie basse de la voie biliaire', explication: `Les tumeurs situées à l'extrémité du canal biliaire, près du pancréas, relèvent de la même intervention, qui retire l'ensemble de la région concernée en un seul bloc.` },
      { label: 'Tumeurs du duodénum', explication: `Le duodénum étant intimement lié à la tête du pancréas, ses tumeurs nécessitent cette même exérèse d'ensemble pour être traitées dans de bonnes conditions.` },
      { label: 'Certaines lésions kystiques ou précancéreuses de la tête du pancréas', explication: `Retirer une lésion à risque avant sa transformation permet d'agir de façon préventive, au moment le plus favorable pour le patient.` },
    ],
    preparation: [
      'Bilan d\'imagerie exhaustif (scanner, IRM, écho-endoscopie) pour confirmer l\'opérabilité',
      'Bilan sanguin complet et évaluation nutritionnelle',
      'Drainage biliaire préalable si nécessaire',
      'Discussion du dossier en réunion pluridisciplinaire',
      'Consultation d\'anesthésie approfondie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale avec monitoring avancé',
      'Exploration abdominale confirmant la faisabilité de l\'exérèse',
      'Exérèse en bloc de la tête du pancréas, du duodénum et de la voie biliaire basse',
      'Triple reconstruction digestive (pancréatique, biliaire et gastrique)',
      'Mise en place de drains de surveillance',
      'Transfert en réanimation pour surveillance rapprochée',
    ],
    duree: '5 à 7 heures',
    resultats: 'Les suites se déroulent d\'abord en réanimation puis en chambre, avec une reprise très progressive de l\'alimentation sur plusieurs jours. La convalescence complète demande plusieurs semaines, accompagnée d\'un suivi nutritionnel et médical rapproché. La qualité de vie retrouvée après récupération est généralement bonne.',
    risques: [
      'Intervention majeure dont les suites sont étroitement encadrées en réanimation puis en service',
      'Retard transitoire de la vidange gastrique possible, se corrigeant avec le temps',
      'Accompagnement digestif et nutritionnel organisé au long cours',
    ],
  },
  {
    slug: 'chirurgie-surrenales',
    title: 'Chirurgie des surrénales',
    shortTitle: 'Chirurgie des surrénales',
    description: 'Ablation des tumeurs des glandes surrénales, le plus souvent par cœlioscopie, en coordination étroite avec l\'endocrinologue.',
    fullDescription: `Les glandes surrénales sont deux petites glandes situées au-dessus des reins, qui produisent des hormones essentielles à la régulation de la tension artérielle, du métabolisme et de la réponse au stress. Certaines tumeurs de ces glandes, qu'elles soient sécrétantes (produisant un excès d'hormones) ou non, nécessitent une ablation chirurgicale : c'est la surrénalectomie.

Les tumeurs sécrétantes peuvent provoquer une hypertension artérielle résistante, des variations de poids, une fatigue inhabituelle ou des troubles du métabolisme. Leur exérèse permet le plus souvent de corriger durablement ces désordres hormonaux.

L'intervention est aujourd'hui réalisée par cœlioscopie dans la grande majorité des cas : cette approche mini-invasive est particulièrement adaptée à ces glandes profondes, offrant une précision optimale, des douleurs réduites et une récupération rapide. La préparation médicale pré-opératoire, menée avec l'endocrinologue, est une étape essentielle pour les tumeurs sécrétantes.

À la Clinique Pasteur Tunis, la chirurgie surrénalienne est conduite en étroite collaboration entre chirurgiens, endocrinologues et anesthésistes, avec un monitoring per-opératoire avancé et une surveillance post-opératoire adaptée au profil hormonal de chaque patient.`,
    image: '/images/fiches/gen-chirurgie-surrenales.webp',
    indications: [
      { label: 'Tumeurs surrénaliennes sécrétant un excès d\'hormones', explication: `Quand une tumeur de la glande produit trop d'hormones, elle peut dérégler la tension, le poids ou le métabolisme : son ablation corrige le plus souvent durablement ces troubles.` },
      { label: 'Phéochromocytome', explication: `Cette tumeur particulière libère des hormones qui font brutalement monter la tension : après une préparation médicale soigneuse, son ablation supprime la cause du problème.` },
      { label: 'Tumeurs surrénaliennes volumineuses ou suspectes', explication: `Une masse de la surrénale de taille importante ou d'aspect inhabituel à l'imagerie est retirée par précaution, afin d'être analysée et d'écarter tout risque d'évolution.` },
      { label: 'Hypertension artérielle d\'origine surrénalienne confirmée', explication: `Certaines hypertensions difficiles à équilibrer proviennent d'une glande surrénale : quand le bilan le confirme, la chirurgie permet souvent d'alléger, voire d'arrêter, les traitements.` },
      { label: 'Nodules surrénaliens évolutifs découverts à l\'imagerie', explication: `Un nodule découvert par hasard et qui grossit au fil des contrôles justifie une ablation, geste aujourd'hui réalisé en douceur par cœlioscopie.` },
    ],
    preparation: [
      'Bilan hormonal complet réalisé avec l\'endocrinologue',
      'Imagerie surrénalienne (scanner ou IRM)',
      'Préparation médicamenteuse spécifique pour certaines tumeurs sécrétantes',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale avec monitoring tensionnel continu',
      'Abord cœlioscopique par petites incisions',
      'Dissection prudente de la glande avec contrôle premier de ses vaisseaux',
      'Extraction de la glande dans un sac protecteur',
      'Fermeture des incisions',
      'Surveillance hormonale et tensionnelle post-opératoire',
    ],
    duree: '1 heure 30 à 3 heures',
    resultats: 'La récupération est rapide grâce à la cœlioscopie : sortie après quelques jours et reprise des activités en une à deux semaines. Les désordres hormonaux se corrigent le plus souvent progressivement. Un suivi endocrinien est organisé, avec adaptation éventuelle d\'un traitement hormonal selon les cas.',
    risques: [
      'Variations tensionnelles per-opératoires anticipées et contrôlées par l\'équipe d\'anesthésie',
      'Nécessité possible d\'un traitement hormonal substitutif, évaluée par l\'endocrinologue',
      'Risques chirurgicaux limités par l\'approche mini-invasive',
    ],
  },
  {
    slug: 'chip-chimio-hyperthermie-intraperitoneale',
    title: 'CHIP (Chimio-Hyperthermie Intrapéritonéale)',
    shortTitle: 'CHIP',
    description: 'Traitement innovant associant chirurgie complète des lésions péritonéales et chimiothérapie chauffée administrée directement dans l\'abdomen.',
    fullDescription: `La CHIP, ou Chimio-Hyperthermie Intrapéritonéale, est un traitement innovant destiné aux atteintes tumorales du péritoine, la fine membrane qui tapisse l'intérieur de l'abdomen et enveloppe les organes digestifs. Elle associe deux temps complémentaires au cours d'une même intervention.

Le premier temps est chirurgical : le chirurgien réalise une exérèse aussi complète que possible de toutes les lésions visibles du péritoine, geste appelé cytoréduction. Le second temps consiste à faire circuler dans la cavité abdominale, pendant un temps déterminé, une chimiothérapie chauffée : la chaleur renforce l'efficacité du traitement, qui agit directement au contact des zones à traiter tout en limitant la diffusion dans le reste de l'organisme.

Cette approche combinée s'adresse à des situations sélectionnées d'atteinte péritonéale, après un bilan approfondi et une validation en réunion de concertation pluridisciplinaire. Elle représente l'un des traitements les plus avancés de la chirurgie oncologique abdominale et exige une équipe spécifiquement formée.

À la Clinique Pasteur Tunis, la CHIP est réalisée par une équipe rompue à la chirurgie digestive lourde, dans un environnement hautement sécurisé, avec une surveillance post-opératoire en réanimation et un accompagnement personnalisé du patient tout au long du parcours.`,
    image: '/images/fiches/gen-chip-chimio-hyperthermie-intraperitoneale.webp',
    indications: [
      { label: 'Atteintes péritonéales d\'origine colorectale sélectionnées', explication: `Quand un cancer du côlon ou du rectum a atteint la membrane qui tapisse l'abdomen, la CHIP peut offrir, chez des patients bien sélectionnés, une réelle perspective de traitement.` },
      { label: 'Pseudomyxome péritonéal', explication: `Pour cette maladie rare où une substance gélatineuse envahit progressivement l'abdomen, la CHIP constitue le traitement de référence reconnu.` },
      { label: 'Certaines atteintes péritonéales d\'origine ovarienne ou gastrique', explication: `Des extensions au péritoine de cancers de l'ovaire ou de l'estomac peuvent, dans des situations précises, bénéficier de cette approche combinée chirurgie et chimiothérapie chauffée.` },
      { label: 'Tumeurs rares du péritoine, après validation pluridisciplinaire', explication: `Chaque situation rare est étudiée collectivement par les spécialistes concernés avant de proposer la CHIP, afin de garantir que le traitement apportera un bénéfice réel.` },
    ],
    preparation: [
      'Bilan d\'imagerie complet évaluant l\'étendue de l\'atteinte péritonéale',
      'Validation de l\'indication en réunion de concertation pluridisciplinaire',
      'Bilan nutritionnel et optimisation de l\'état général',
      'Consultation d\'anesthésie approfondie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale avec monitoring avancé',
      'Exploration complète de la cavité abdominale',
      'Cytoréduction : exérèse de l\'ensemble des lésions péritonéales visibles',
      'Circulation de la chimiothérapie chauffée dans l\'abdomen pendant la durée protocolaire',
      'Rinçage, vérifications finales et fermeture',
      'Transfert en réanimation pour surveillance rapprochée',
    ],
    duree: '6 à 10 heures selon l\'étendue des lésions',
    resultats: 'Les suites se déroulent d\'abord en réanimation, puis en service avec une reprise très progressive de l\'alimentation. La convalescence s\'étend sur plusieurs semaines, avec un accompagnement nutritionnel et un suivi oncologique régulier. Ce traitement offre, dans les indications retenues, des perspectives significativement améliorées.',
    risques: [
      'Intervention longue et spécialisée, réservée à des indications soigneusement sélectionnées',
      'Suites opératoires étroitement surveillées en réanimation',
      'Fatigue prolongée nécessitant une convalescence accompagnée',
    ],
  },
];
