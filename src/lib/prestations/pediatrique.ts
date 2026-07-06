export const prestationsPediatrique = [
  {
    slug: 'hernie-inguinale-enfant',
    title: 'Chirurgie des hernies inguinales de l\'enfant',
    shortTitle: 'Hernie inguinale',
    description: 'Cure chirurgicale de la hernie inguinale de l\'enfant, une intervention courante et bien codifiée, réalisée le plus souvent en ambulatoire.',
    fullDescription: `La hernie inguinale de l'enfant correspond au passage d'une partie du contenu abdominal à travers un orifice naturel resté ouvert au niveau de l'aine. Elle se manifeste par une tuméfaction intermittente, plus visible lors des pleurs ou des efforts. Contrairement à l'adulte, elle ne guérit pas spontanément et justifie une correction chirurgicale.

L'intervention consiste à refermer le canal resté perméable par une courte incision discrète au niveau du pli de l'aine, ou par cœlioscopie dans certains cas. C'est l'une des interventions les plus fréquentes en chirurgie pédiatrique, avec des suites généralement très simples.

À la Clinique Pasteur Tunis, la prise en charge est assurée par des chirurgiens pédiatres et des anesthésistes habitués aux enfants, dans un environnement rassurant où la présence des parents est facilitée avant et après l'intervention. La sortie a lieu le plus souvent le jour même.`,
    image: '/images/fiches/pediat-hernie-inguinale-enfant.webp',
    indications: [
      { label: 'Tuméfaction inguinale intermittente constatée chez le nourrisson ou l\'enfant', explication: `Une petite boule qui apparaît au pli de l'aine, surtout quand l'enfant pleure ou fait un effort, est le signe le plus courant de la hernie.` },
      { label: 'Hernie inguinale confirmée par l\'examen clinique du chirurgien pédiatre', explication: `Chez l'enfant, la hernie ne disparaît pas toute seule : une fois confirmée par le chirurgien, une petite intervention permet de la corriger définitivement.` },
      { label: 'Prévention du risque d\'étranglement herniaire', explication: `Opérer la hernie évite qu'une partie de l'intestin ne s'y coince, une situation douloureuse qui nécessiterait une intervention en urgence.` },
      { label: 'Hernie douloureuse ou augmentant de volume', explication: `Quand la hernie devient sensible ou grossit, il est préférable de la corriger sans attendre, pour le confort et la sécurité de l'enfant.` },
      { label: 'Hydrocèle communicante persistante', explication: `Ce petit gonflement de la bourse, rempli de liquide et lié au même canal resté ouvert, se corrige par la même intervention simple.` },
    ],
    preparation: [
      'Consultation de chirurgie pédiatrique pour confirmer l\'indication',
      'Consultation d\'anesthésie pédiatrique quelques jours avant l\'intervention',
      'Bilan pré-opératoire adapté à l\'âge de l\'enfant si nécessaire',
      'Jeûne selon les consignes de l\'anesthésiste (durée adaptée à l\'âge)',
      'Signaler tout épisode de fièvre ou d\'infection récente',
    ],
    deroulement: [
      'Accueil de l\'enfant et de ses parents le jour de l\'intervention',
      'Anesthésie générale adaptée à l\'âge, souvent complétée par une anesthésie locorégionale pour le confort post-opératoire',
      'Courte incision discrète au pli de l\'aine (ou abord cœlioscopique selon les cas)',
      'Fermeture du canal péritonéo-vaginal resté ouvert',
      'Fermeture par fils résorbables, sans fils à retirer',
      'Surveillance en salle de réveil puis retour auprès des parents',
    ],
    duree: '30 à 45 minutes',
    resultats: 'Les suites sont habituellement très simples : l\'enfant sort le plus souvent le jour même et reprend rapidement ses activités habituelles. Une douleur modérée, bien calmée par les antalgiques prescrits, peut persister quelques jours. Une consultation de contrôle vérifie la bonne cicatrisation.',
    risques: [
      'Petit hématome ou gonflement transitoire de la zone opérée',
      'Infection de cicatrice, rare et accessible à un traitement simple',
      'Récidive exceptionnelle, surveillée lors du suivi',
    ],
  },
  {
    slug: 'appendicectomie-pediatrique',
    title: 'Appendicectomie pédiatrique',
    shortTitle: 'Appendicectomie',
    description: 'Ablation de l\'appendice chez l\'enfant en cas d\'appendicite, réalisée le plus souvent par cœlioscopie pour une récupération rapide.',
    fullDescription: `L'appendicite aiguë est l'une des urgences chirurgicales les plus fréquentes chez l'enfant. Elle correspond à l'inflammation de l'appendice, petit segment situé au début du gros intestin, et se manifeste typiquement par des douleurs abdominales, de la fièvre et une perte d'appétit.

Le traitement repose sur l'ablation chirurgicale de l'appendice. Chez l'enfant, l'intervention est le plus souvent réalisée par cœlioscopie, à travers de très petites incisions, ce qui limite la douleur post-opératoire et permet une reprise rapide des activités. Une courte incision classique reste possible selon les situations.

À la Clinique Pasteur Tunis, la prise en charge de l'appendicite de l'enfant est assurée sans délai, de l'accueil aux urgences jusqu'au bloc opératoire, par une équipe de chirurgie et d'anesthésie pédiatriques. L'hospitalisation est courte et les parents sont associés à chaque étape.`,
    image: '/images/fiches/pediat-appendicectomie-pediatrique.webp',
    indications: [
      { label: 'Appendicite aiguë confirmée par l\'examen clinique et l\'imagerie', explication: `Quand l'appendice est enflammé, il doit être retiré rapidement pour éviter les complications ; l'intervention soulage l'enfant dès les premières heures.` },
      { label: 'Douleurs de la fosse iliaque droite avec fièvre chez l\'enfant', explication: `Une douleur en bas à droite du ventre accompagnée de fièvre fait suspecter une appendicite et justifie une consultation sans tarder.` },
      { label: 'Appendicite compliquée (abcès, péritonite) nécessitant une prise en charge urgente', explication: `Quand l'infection s'est étendue dans le ventre, une intervention urgente associée à un traitement antibiotique permet la guérison.` },
      { label: 'Doute diagnostique persistant justifiant une exploration cœlioscopique', explication: `Quand les examens ne permettent pas de trancher, une exploration par caméra à travers de petites incisions confirme le diagnostic et traite le problème dans le même temps.` },
    ],
    preparation: [
      'Évaluation aux urgences : examen clinique, bilan sanguin et échographie abdominale',
      'Mise à jeun dès la suspicion du diagnostic',
      'Perfusion et traitement antibiotique débutés avant l\'intervention si nécessaire',
      'Consultation d\'anesthésie réalisée en urgence',
    ],
    deroulement: [
      'Anesthésie générale adaptée à l\'âge de l\'enfant',
      'Introduction d\'une caméra et d\'instruments fins par de petites incisions',
      'Exploration de la cavité abdominale et confirmation du diagnostic',
      'Ablation de l\'appendice et lavage de la cavité si besoin',
      'Fermeture des incisions par fils résorbables',
      'Surveillance en salle de réveil puis hospitalisation courte',
    ],
    duree: '45 minutes à 1 heure 30 selon la sévérité',
    resultats: 'Après une appendicectomie simple, l\'enfant se réalimente rapidement et sort en général au bout de 24 à 48 heures. En cas d\'appendicite compliquée, l\'hospitalisation est un peu plus longue pour poursuivre le traitement antibiotique. La reprise de l\'école se fait habituellement en quelques jours.',
    risques: [
      'Infection de cicatrice, peu fréquente et traitée simplement',
      'Abcès résiduel intra-abdominal en cas d\'appendicite compliquée, surveillé et traité si besoin',
      'Douleurs abdominales transitoires liées à la cœlioscopie',
    ],
  },
  {
    slug: 'malformations-congenitales',
    title: 'Chirurgie des malformations congénitales',
    shortTitle: 'Malformations congénitales',
    description: 'Correction chirurgicale des malformations présentes à la naissance, avec une prise en charge adaptée à chaque enfant, du nouveau-né à l\'adolescent.',
    fullDescription: `Certaines malformations présentes à la naissance nécessitent une correction chirurgicale, immédiate ou programmée selon leur nature : anomalies de la paroi abdominale, kystes congénitaux, malformations des voies urinaires ou digestives, anomalies des organes génitaux externes, entre autres.

Chaque situation est unique : le moment idéal de l'intervention, la technique employée et le suivi sont définis au cas par cas, en concertation avec les parents et, selon les besoins, avec le pédiatre et les autres spécialistes concernés. L'objectif est toujours de corriger l'anomalie au meilleur moment du développement de l'enfant, avec le geste le moins invasif possible.

À la Clinique Pasteur Tunis, la chirurgie des malformations congénitales bénéficie d'un environnement complet : chirurgiens pédiatres expérimentés, anesthésie pédiatrique dédiée, imagerie sur place et unités de surveillance adaptées. Les parents sont accompagnés à chaque étape du parcours, de la première consultation au suivi post-opératoire.`,
    image: '/images/fiches/pediat-malformations-congenitales.webp',
    indications: [
      { label: 'Malformation dépistée avant la naissance ou constatée à la naissance', explication: `Grâce au dépistage, l'intervention peut être préparée sereinement avec les parents et programmée au meilleur moment pour l'enfant.` },
      { label: 'Anomalie de la paroi abdominale (hernie ombilicale persistante, autres anomalies)', explication: `Une hernie du nombril qui persiste ou une autre anomalie de la paroi du ventre se corrige par un geste simple, aux suites généralement faciles.` },
      { label: 'Kystes et masses congénitales du cou, du thorax ou de l\'abdomen', explication: `Certaines petites masses présentes dès la naissance méritent d'être retirées pour éviter qu'elles ne grossissent ou ne s'infectent.` },
      { label: 'Malformations des voies urinaires ou génitales', explication: `Corriger ces anomalies au bon moment protège le fonctionnement des reins et accompagne le développement harmonieux de l'enfant.` },
      { label: 'Anomalies digestives nécessitant une correction programmée', explication: `Certaines anomalies du tube digestif sont corrigées par une intervention planifiée, au moment le plus favorable du développement de l'enfant.` },
    ],
    preparation: [
      'Bilan complet de la malformation : examen clinique et imagerie adaptée',
      'Concertation entre chirurgien pédiatre, pédiatre et anesthésiste',
      'Consultation d\'anesthésie pédiatrique avant l\'intervention',
      'Information détaillée des parents sur le geste prévu et les suites attendues',
      'Jeûne pré-opératoire selon les consignes adaptées à l\'âge',
    ],
    deroulement: [
      'Accueil de l\'enfant et de ses parents dans le service',
      'Anesthésie générale adaptée à l\'âge et au poids de l\'enfant',
      'Correction chirurgicale de la malformation selon la technique choisie',
      'Surveillance rapprochée en salle de réveil',
      'Hospitalisation de durée variable selon le type d\'intervention',
      'Consultations de suivi pour vérifier le bon résultat au fil de la croissance',
    ],
    duree: 'Variable selon la malformation, de 1 à plusieurs heures',
    resultats: 'Les suites dépendent du type de malformation corrigée. Dans la majorité des cas, l\'enfant reprend rapidement une vie normale. Un suivi régulier en consultation permet de s\'assurer du bon résultat au fil de la croissance et d\'accompagner la famille dans la durée.',
    risques: [
      'Risques propres à chaque type de malformation, expliqués en détail lors de la consultation',
      'Infection ou retard de cicatrisation, rares et traités simplement',
      'Nécessité éventuelle d\'un geste complémentaire au cours de la croissance',
    ],
  },
  {
    slug: 'urologie-pediatrique',
    title: 'Chirurgie urologique pédiatrique (hypospadias, cryptorchidie)',
    shortTitle: 'Urologie pédiatrique',
    description: 'Prise en charge chirurgicale des anomalies urologiques de l\'enfant, notamment l\'hypospadias et le testicule non descendu (cryptorchidie).',
    fullDescription: `La chirurgie urologique pédiatrique corrige les anomalies des voies urinaires et des organes génitaux de l'enfant. Les deux motifs les plus fréquents sont l'hypospadias, une anomalie de position de l'orifice urinaire chez le garçon, et la cryptorchidie, lorsque le testicule n'est pas descendu spontanément dans la bourse.

Ces interventions sont programmées au meilleur âge pour l'enfant, généralement au cours des premières années de vie, afin d'obtenir un résultat fonctionnel et esthétique optimal tout en préservant le développement ultérieur. Les techniques utilisées sont fines et minutieuses, avec des cicatrices discrètes.

À la Clinique Pasteur Tunis, ces interventions sont réalisées par des chirurgiens pédiatres rompus à la chirurgie urologique de l'enfant, avec une anesthésie pédiatrique dédiée. La plupart des gestes se font en hospitalisation courte, et l'équipe accompagne les parents pour les soins simples à poursuivre à la maison.`,
    image: '/images/fiches/pediat-urologie-pediatrique.webp',
    indications: [
      { label: 'Hypospadias : orifice urinaire en position anormale chez le garçon', explication: `Quand l'orifice urinaire n'est pas à sa place habituelle, une chirurgie fine le reconstruit pour un résultat naturel, tant pour uriner que sur le plan esthétique.` },
      { label: 'Cryptorchidie : testicule non descendu après l\'âge habituel de descente spontanée', explication: `Quand le testicule n'est pas descendu tout seul dans la bourse, l'intervention le repositionne en douceur afin de protéger sa fonction future.` },
      { label: 'Testicule oscillant ou ectopique nécessitant une fixation', explication: `Un testicule qui remonte sans cesse ou reste en position anormale peut être fixé en bonne place par un geste simple.` },
      { label: 'Anomalies du prépuce résistantes au traitement médical', explication: `Quand les crèmes n'ont pas suffi à assouplir un prépuce trop serré, un geste chirurgical adapté règle le problème durablement.` },
      { label: 'Certaines anomalies des voies urinaires dépistées par échographie', explication: `Certaines anomalies découvertes à l'échographie sont corrigées avant qu'elles ne perturbent le bon fonctionnement des reins.` },
    ],
    preparation: [
      'Consultation spécialisée pour préciser l\'anomalie et le moment idéal de l\'intervention',
      'Échographie ou autre imagerie si nécessaire',
      'Consultation d\'anesthésie pédiatrique',
      'Jeûne pré-opératoire selon les consignes adaptées à l\'âge',
      'Bain ou toilette soigneuse la veille de l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale, souvent associée à une anesthésie locorégionale pour limiter la douleur au réveil',
      'Correction chirurgicale de l\'anomalie par des techniques fines et adaptées à l\'enfant',
      'Pour l\'hypospadias : reconstruction du canal urinaire avec parfois une petite sonde temporaire',
      'Pour la cryptorchidie : abaissement et fixation du testicule dans la bourse',
      'Pansement protecteur et surveillance en salle de réveil',
      'Sortie le jour même ou après une nuit de surveillance selon le geste',
    ],
    duree: '45 minutes à 2 heures selon l\'intervention',
    resultats: 'Les résultats fonctionnels et esthétiques sont généralement très satisfaisants. Les soins post-opératoires sont simples et expliqués aux parents avant la sortie. Un suivi en consultation permet de vérifier la cicatrisation puis le bon développement au fil de la croissance.',
    risques: [
      'Gonflement ou hématome transitoire de la zone opérée',
      'Infection locale, rare et traitée simplement',
      'Pour l\'hypospadias : nécessité éventuelle d\'une retouche chirurgicale, discutée lors du suivi',
    ],
  },
  {
    slug: 'circoncision',
    title: 'Circoncision',
    shortTitle: 'Circoncision',
    description: 'Circoncision réalisée au bloc opératoire dans des conditions chirurgicales optimales de sécurité, d\'hygiène et de confort pour l\'enfant.',
    fullDescription: `La circoncision consiste à retirer le prépuce, la peau qui recouvre l'extrémité du pénis. Qu'elle soit réalisée pour des raisons médicales ou à la demande des familles, elle mérite les mêmes exigences de sécurité que toute intervention chirurgicale : un environnement stérile, une anesthésie adaptée et un contrôle rigoureux de la douleur.

Réalisée au bloc opératoire, la circoncision se déroule sous anesthésie adaptée à l'âge de l'enfant, complétée par une anesthésie locale qui assure un réveil confortable. Le geste est bref et les suites sont habituellement très simples, avec une cicatrisation en quelques jours.

À la Clinique Pasteur Tunis, la circoncision est pratiquée par des chirurgiens expérimentés dans un cadre sécurisé et rassurant. L'enfant rentre à la maison le jour même, et les parents reçoivent des consignes claires pour les soins locaux et le suivi.`,
    image: '/images/fiches/pediat-circoncision.webp',
    indications: [
      { label: 'Circoncision rituelle ou familiale réalisée dans un cadre médical sécurisé', explication: `Réaliser la circoncision au bloc opératoire garantit des conditions stériles, une anesthésie adaptée et un bon contrôle de la douleur, pour la tranquillité des familles.` },
      { label: 'Phimosis serré résistant au traitement médical', explication: `Quand le prépuce reste trop étroit malgré les traitements, la circoncision apporte une solution définitive et confortable.` },
      { label: 'Infections locales à répétition (balanites)', explication: `Des infections locales qui reviennent régulièrement peuvent être évitées durablement grâce à ce geste simple.` },
      { label: 'Paraphimosis ou gêne fonctionnelle liée au prépuce', explication: `Quand le prépuce se coince ou gêne l'enfant au quotidien, la circoncision supprime définitivement le problème.` },
    ],
    preparation: [
      'Consultation pré-opératoire avec le chirurgien',
      'Consultation d\'anesthésie pédiatrique',
      'Jeûne selon les consignes adaptées à l\'âge de l\'enfant',
      'Toilette soigneuse le jour de l\'intervention',
    ],
    deroulement: [
      'Accueil de l\'enfant et de ses parents en hôpital de jour',
      'Anesthésie adaptée à l\'âge, complétée par une anesthésie locale',
      'Geste chirurgical bref dans des conditions stériles',
      'Pansement protecteur simple',
      'Surveillance en salle de réveil puis retour auprès des parents',
      'Sortie le jour même avec les consignes de soins',
    ],
    duree: '20 à 30 minutes',
    resultats: 'La cicatrisation est habituellement obtenue en quelques jours. Un léger gonflement et une sensibilité locale sont normaux au début et s\'estompent rapidement avec les soins prescrits. Une consultation de contrôle vérifie la bonne évolution.',
    risques: [
      'Petit saignement ou gonflement transitoire',
      'Infection locale, rare avec des soins adaptés',
      'Aspect cicatriciel nécessitant exceptionnellement une retouche',
    ],
  },
  {
    slug: 'malformations-digestives',
    title: 'Chirurgie des malformations digestives',
    shortTitle: 'Malformations digestives',
    description: 'Correction chirurgicale des anomalies congénitales du tube digestif de l\'enfant, avec une prise en charge coordonnée entre chirurgiens, pédiatres et anesthésistes.',
    fullDescription: `Les malformations digestives regroupent des anomalies congénitales touchant l'œsophage, l'estomac, l'intestin ou la région anale. Certaines sont dépistées avant la naissance ou dans les premiers jours de vie, d'autres se révèlent plus tard par des troubles digestifs persistants.

Leur prise en charge chirurgicale est planifiée avec soin : le moment de l'intervention, la technique et le suivi nutritionnel sont adaptés à chaque enfant. Selon les cas, la correction peut être réalisée par voie classique ou par cœlioscopie, afin de limiter le traumatisme opératoire.

À la Clinique Pasteur Tunis, ces interventions s'appuient sur une équipe pluridisciplinaire — chirurgiens pédiatres, pédiatres, anesthésistes et équipe soignante — et sur des unités de surveillance adaptées aux plus petits. Les parents sont étroitement associés au projet de soins et au suivi de leur enfant.`,
    image: '/images/fiches/pediat-malformations-digestives.webp',
    indications: [
      { label: 'Malformation digestive dépistée en période prénatale ou néonatale', explication: `Détectée avant la naissance ou dans les premiers jours de vie, l'anomalie est prise en charge selon un calendrier soigneusement adapté à chaque bébé.` },
      { label: 'Sténose hypertrophique du pylore du nourrisson', explication: `Quand la sortie de l'estomac du nourrisson est trop étroite et provoque des vomissements répétés, une courte intervention rétablit le passage normal des aliments.` },
      { label: 'Malformations ano-rectales', explication: `Ces anomalies de la zone anale sont corrigées chirurgicalement pour permettre à l'enfant un transit normal et un développement serein.` },
      { label: 'Anomalies de rotation intestinale', explication: `Quand l'intestin ne s'est pas positionné normalement pendant la grossesse, l'intervention le remet en bonne place et prévient les complications.` },
      { label: 'Troubles digestifs persistants révélant une anomalie congénitale', explication: `Des vomissements, blocages ou troubles du transit qui durent peuvent révéler une anomalie présente depuis la naissance, qu'une intervention permet de corriger.` },
    ],
    preparation: [
      'Bilan diagnostique complet : imagerie et examens adaptés à l\'âge',
      'Concertation pluridisciplinaire pour définir la stratégie chirurgicale',
      'Optimisation de l\'état nutritionnel et hydrique de l\'enfant avant le geste',
      'Consultation d\'anesthésie pédiatrique',
      'Information détaillée des parents sur l\'intervention et les suites',
    ],
    deroulement: [
      'Anesthésie générale adaptée à l\'âge et au poids',
      'Correction de la malformation par voie classique ou cœlioscopique selon les cas',
      'Rétablissement de la continuité digestive lorsque c\'est nécessaire',
      'Surveillance post-opératoire rapprochée, adaptée aux nouveau-nés et nourrissons',
      'Reprise progressive et encadrée de l\'alimentation',
      'Suivi régulier de la croissance et du transit après la sortie',
    ],
    duree: 'Variable selon la malformation, de 1 à plusieurs heures',
    resultats: 'La plupart des enfants opérés d\'une malformation digestive retrouvent une alimentation et un transit normaux, avec une croissance harmonieuse. Le suivi en consultation, parfois prolongé, permet d\'accompagner l\'enfant et sa famille dans la durée.',
    risques: [
      'Risques propres à chaque malformation, expliqués précisément aux parents',
      'Troubles digestifs transitoires pendant la période de récupération',
      'Nécessité éventuelle d\'interventions complémentaires programmées',
    ],
  },
  {
    slug: 'cardiopathies-congenitales',
    title: 'Chirurgie des cardiopathies congénitales',
    shortTitle: 'Cardiopathies congénitales',
    description: 'Prise en charge chirurgicale des malformations cardiaques de l\'enfant, au sein d\'un plateau technique cardiovasculaire complet avec réanimation dédiée.',
    fullDescription: `Les cardiopathies congénitales sont des malformations du cœur présentes dès la naissance : communications anormales entre les cavités cardiaques, anomalies des valves ou des gros vaisseaux. Beaucoup d'entre elles peuvent aujourd'hui être corrigées chirurgicalement avec d'excellents résultats, permettant à l'enfant de mener une vie normale.

La décision opératoire est prise en concertation étroite entre cardiologues pédiatres, chirurgiens cardiaques et anesthésistes, après un bilan cardiologique complet. Le moment de l'intervention est choisi en fonction du type de malformation et du développement de l'enfant.

À la Clinique Pasteur Tunis, la chirurgie des cardiopathies congénitales bénéficie d'un plateau technique cardiovasculaire complet : bloc opératoire équipé pour la chirurgie cardiaque, réanimation dédiée aux suites de chirurgie cardiaque et unité de soins intensifs cardiologiques. L'enfant et sa famille sont accompagnés à chaque étape de ce parcours exigeant.`,
    image: '/images/fiches/pediat-cardiopathies-congenitales.webp',
    indications: [
      { label: 'Communication interauriculaire ou interventriculaire nécessitant une fermeture', explication: `Quand un petit orifice fait communiquer anormalement les cavités du cœur et fatigue l'enfant, sa fermeture chirurgicale permet un développement normal.` },
      { label: 'Persistance du canal artériel', explication: `Ce petit vaisseau, utile pendant la grossesse, doit normalement se fermer après la naissance ; s'il reste ouvert, une intervention le referme.` },
      { label: 'Anomalies des valves cardiaques de l\'enfant', explication: `Quand une valve du cœur fonctionne mal, sa réparation aide le cœur à travailler efficacement et l'enfant à grandir sereinement.` },
      { label: 'Malformations des gros vaisseaux', explication: `Certaines anomalies des grandes artères qui partent du cœur sont corrigées chirurgicalement pour rétablir une circulation sanguine normale.` },
      { label: 'Cardiopathies complexes relevant d\'une correction chirurgicale programmée', explication: `Les malformations associant plusieurs anomalies font l'objet d'une correction planifiée avec soin par l'équipe médico-chirurgicale, au meilleur moment pour l'enfant.` },
    ],
    preparation: [
      'Bilan cardiologique complet : échocardiographie et examens complémentaires',
      'Concertation médico-chirurgicale pour définir la stratégie de correction',
      'Consultation d\'anesthésie spécialisée',
      'Bilan pré-opératoire complet et vérification de l\'absence d\'infection en cours',
      'Information détaillée des parents sur l\'intervention, la réanimation et les suites',
    ],
    deroulement: [
      'Anesthésie générale par une équipe rompue à la chirurgie cardiaque',
      'Correction de la malformation selon la technique adaptée au diagnostic',
      'Surveillance continue des paramètres cardiaques et respiratoires pendant toute l\'intervention',
      'Transfert en réanimation dédiée aux suites de chirurgie cardiaque',
      'Réveil progressif et surveillance rapprochée les premiers jours',
      'Transfert en chambre d\'hospitalisation puis préparation du retour à la maison',
    ],
    duree: 'Plusieurs heures selon la complexité de la cardiopathie',
    resultats: 'La correction chirurgicale permet dans la grande majorité des cas une amélioration durable de la fonction cardiaque et un développement normal de l\'enfant. Un suivi cardiologique régulier est organisé après l\'intervention pour accompagner l\'enfant au fil de sa croissance.',
    risques: [
      'Risques inhérents à toute chirurgie cardiaque, évalués et expliqués au cas par cas',
      'Troubles du rythme transitoires en période post-opératoire',
      'Épanchement péricardique ou pleural, surveillé et traité si nécessaire',
      'Nécessité éventuelle d\'un geste complémentaire au cours de la croissance',
    ],
  },
  {
    slug: 'orl-pediatrique',
    title: 'Chirurgie ORL pédiatrique',
    shortTitle: 'ORL pédiatrique',
    description: 'Interventions ORL de l\'enfant : amygdales, végétations, pose d\'aérateurs transtympaniques et autres gestes courants, le plus souvent en ambulatoire.',
    fullDescription: `La chirurgie ORL pédiatrique traite les affections fréquentes du nez, de la gorge et des oreilles de l'enfant : angines à répétition, hypertrophie des amygdales ou des végétations gênant la respiration et le sommeil, otites séreuses persistantes retentissant sur l'audition.

Les interventions les plus courantes sont l'ablation des végétations (adénoïdectomie), l'ablation des amygdales (amygdalectomie) et la pose d'aérateurs transtympaniques (« yoyos ») pour drainer les otites séreuses. Ces gestes brefs, réalisés sous anesthésie générale, améliorent nettement le confort respiratoire, le sommeil et l'audition de l'enfant.

À la Clinique Pasteur Tunis, ces interventions sont réalisées en hospitalisation courte, le plus souvent en ambulatoire, par des chirurgiens ORL habitués aux enfants et une équipe d'anesthésie pédiatrique. Les parents reçoivent des consignes simples pour la surveillance et l'alimentation des premiers jours.`,
    image: '/images/fiches/pediat-orl-pediatrique.webp',
    indications: [
      { label: 'Angines à répétition malgré un traitement médical bien conduit', explication: `Quand les angines reviennent sans cesse malgré les traitements, retirer les amygdales met fin à ce cercle épuisant pour l'enfant et sa famille.` },
      { label: 'Hypertrophie des amygdales ou des végétations gênant la respiration nocturne', explication: `Des amygdales ou des végétations trop volumineuses gênent la respiration, surtout la nuit ; leur ablation redonne un souffle libre.` },
      { label: 'Ronflements avec pauses respiratoires pendant le sommeil', explication: `Un enfant qui ronfle fort et semble s'arrêter de respirer dans son sommeil mérite un avis ORL : l'intervention améliore nettement la qualité du sommeil.` },
      { label: 'Otites séreuses persistantes avec baisse d\'audition', explication: `Du liquide qui stagne derrière le tympan étouffe les sons ; la pose de petits aérateurs le draine et restaure l'audition.` },
      { label: 'Otites moyennes aiguës à répétition', explication: `Quand les otites se succèdent, les aérateurs transtympaniques aident à espacer les infections et à protéger l'oreille de l'enfant.` },
    ],
    preparation: [
      'Consultation ORL pour confirmer l\'indication opératoire',
      'Bilan auditif si nécessaire',
      'Consultation d\'anesthésie pédiatrique',
      'Jeûne pré-opératoire selon les consignes adaptées à l\'âge',
      'Signaler tout épisode infectieux récent, qui peut faire reporter le geste',
    ],
    deroulement: [
      'Accueil de l\'enfant et de ses parents en hôpital de jour',
      'Anesthésie générale brève et adaptée à l\'âge',
      'Réalisation du geste par les voies naturelles, sans cicatrice visible',
      'Surveillance en salle de réveil',
      'Collation et vérification de la bonne reprise alimentaire',
      'Sortie le jour même dans la plupart des cas, avec les consignes de surveillance',
    ],
    duree: '20 à 45 minutes selon le geste',
    resultats: 'L\'amélioration est généralement rapide : respiration nocturne plus calme, diminution des infections et récupération de l\'audition après pose d\'aérateurs. Une alimentation adaptée est conseillée quelques jours après une amygdalectomie. Une consultation de contrôle vérifie la bonne évolution.',
    risques: [
      'Douleurs de gorge transitoires après amygdalectomie, calmées par les antalgiques',
      'Petit saignement post-opératoire nécessitant un avis rapide, rare',
      'Expulsion naturelle des aérateurs avec le temps, parfois suivie d\'une nouvelle pose',
    ],
  },
  {
    slug: 'traumatologie-pediatrique',
    title: 'Traumatologie pédiatrique',
    shortTitle: 'Traumatologie',
    description: 'Prise en charge des fractures et traumatismes de l\'enfant, avec des techniques adaptées à l\'os en croissance et un accès direct aux urgences et à l\'imagerie.',
    fullDescription: `Les chutes et les accidents de jeu ou de sport sont fréquents chez l'enfant, et les fractures qui en résultent ont des particularités propres : l'os en croissance possède un fort potentiel de consolidation et de correction, mais certaines fractures touchant les zones de croissance demandent une attention particulière.

La prise en charge va du simple plâtre à l'intervention chirurgicale lorsque la fracture est déplacée ou instable. Les techniques chirurgicales utilisées chez l'enfant sont spécifiques : matériel adapté à la taille de l'os, respect systématique des cartilages de croissance et gestes aussi peu invasifs que possible.

À la Clinique Pasteur Tunis, l'enfant traumatisé est accueilli aux urgences puis pris en charge sans délai : imagerie sur place, avis chirurgical rapide et, si nécessaire, intervention au bloc opératoire par une équipe habituée à la traumatologie de l'enfant. Le suivi en consultation accompagne la consolidation et la reprise progressive des activités.`,
    image: '/images/fiches/pediat-traumatologie-pediatrique.webp',
    indications: [
      { label: 'Fracture déplacée ou instable des membres', explication: `Quand les fragments osseux se sont écartés, une intervention les remet en bonne position pour permettre une consolidation parfaite.` },
      { label: 'Fracture touchant une zone de croissance nécessitant un avis spécialisé', explication: `Les zones de croissance de l'os sont précieuses : une fracture qui les touche demande un traitement spécialisé et un suivi attentif jusqu'à la fin de la croissance.` },
      { label: 'Traumatisme du coude, du poignet ou de la cheville de l\'enfant', explication: `Ces articulations sont souvent touchées lors des chutes ; une prise en charge adaptée à l'enfant garantit une bonne récupération.` },
      { label: 'Plaies profondes ou traumatismes des parties molles nécessitant une exploration', explication: `Certaines blessures doivent être explorées et réparées au bloc opératoire pour une cicatrisation optimale et sans séquelle.` },
      { label: 'Fracture ne pouvant être réduite par simple manipulation', explication: `Quand la fracture ne peut pas être remise en place par une simple manœuvre externe, un geste chirurgical adapté à l'os en croissance est réalisé.` },
    ],
    preparation: [
      'Évaluation aux urgences : examen clinique et radiographies',
      'Immobilisation antalgique provisoire et traitement de la douleur',
      'Mise à jeun si une intervention est envisagée',
      'Consultation d\'anesthésie réalisée en urgence si nécessaire',
    ],
    deroulement: [
      'Anesthésie générale ou locorégionale adaptée à l\'âge',
      'Réduction de la fracture sous contrôle radiologique',
      'Fixation si nécessaire par du matériel adapté à l\'enfant (broches, clous souples)',
      'Immobilisation par plâtre ou attelle selon la fracture',
      'Surveillance en salle de réveil puis hospitalisation courte',
      'Contrôles radiologiques réguliers jusqu\'à consolidation',
    ],
    duree: '30 minutes à 2 heures selon le traumatisme',
    resultats: 'L\'os de l\'enfant consolide rapidement et les résultats sont généralement excellents. Le matériel éventuellement mis en place est le plus souvent retiré lors d\'un geste simple une fois la consolidation acquise. La reprise du sport se fait progressivement, selon l\'avis du chirurgien.',
    risques: [
      'Déplacement secondaire sous plâtre, dépisté par les contrôles radiologiques',
      'Raideur articulaire transitoire après immobilisation',
      'Trouble de croissance rare en cas de fracture touchant le cartilage de croissance, justifiant un suivi prolongé',
    ],
  },
];
