export const prestationsBariatrique = [
  {
    slug: 'sleeve-gastrectomie',
    title: 'Sleeve gastrectomie (gastrectomie en manchon)',
    shortTitle: 'Sleeve gastrectomie',
    description: 'Intervention de référence en chirurgie de l\'obésité : réduction du volume de l\'estomac par cœlioscopie pour une perte de poids durable.',
    fullDescription: `La sleeve gastrectomie, ou gastrectomie en manchon, est aujourd'hui l'intervention de chirurgie bariatrique la plus pratiquée dans le monde. Elle consiste à retirer une grande partie de l'estomac pour lui donner la forme d'un tube (manchon), ce qui réduit la quantité d'aliments pouvant être ingérée et diminue la sécrétion de l'hormone de la faim.

L'intervention est réalisée entièrement par cœlioscopie, à travers de petites incisions, ce qui limite les douleurs post-opératoires, réduit la durée d'hospitalisation et permet une reprise rapide des activités. Elle ne modifie pas le circuit des aliments : la digestion et l'absorption des nutriments restent naturelles.

La sleeve s'inscrit dans un parcours global : elle est précédée d'un bilan complet et d'une préparation multidisciplinaire, puis suivie d'un accompagnement nutritionnel et médical au long cours. C'est cet accompagnement, associé aux nouvelles habitudes alimentaires, qui garantit un résultat durable.

À la Clinique Pasteur Tunis, centre reconnu en chirurgie de l'obésité, la sleeve gastrectomie est réalisée par des équipes chirurgicales expérimentées, dans un bloc dédié à la cœlioscopie, avec un programme de suivi nutritionnel et psychologique intégré à la clinique.`,
    image: '/images/fiches/baria-sleeve-gastrectomie.webp',
    indications: [
      { label: 'Obésité sévère ou morbide définie par l\'équipe médicale', explication: `L'intervention s'adresse aux personnes dont l'excès de poids important retentit sur la santé au quotidien, après une évaluation complète par l'équipe médicale.` },
      { label: 'Échec des tentatives de perte de poids par régimes bien conduits', explication: `Lorsque les régimes et les prises en charge médicales bien suivis n'ont pas permis une perte de poids durable, la chirurgie devient une option à envisager sereinement.` },
      { label: 'Obésité associée à des complications (diabète, hypertension, apnées du sommeil)', explication: `Quand l'excès de poids s'accompagne de maladies comme le diabète, l'hypertension ou les apnées du sommeil, la perte de poids obtenue par la chirurgie contribue souvent à les améliorer.` },
      { label: 'Patient motivé, prêt à s\'engager dans un suivi à long terme', explication: `La réussite repose en grande partie sur l'implication du patient : de nouvelles habitudes alimentaires et un suivi régulier sont indispensables après l'opération.` },
      { label: 'Validation du dossier par l\'équipe multidisciplinaire', explication: `Chaque dossier est étudié par l'ensemble des spécialistes concernés afin de s'assurer que la sleeve est bien la solution la plus adaptée à la situation du patient.` },
    ],
    preparation: [
      'Bilan pré-opératoire complet (biologique, cardiologique, endoscopique)',
      'Évaluation nutritionnelle et diététique',
      'Évaluation psychologique',
      'Consultation d\'anesthésie pré-opératoire',
      'Régime pré-opératoire prescrit par l\'équipe si nécessaire',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Introduction des instruments de cœlioscopie par de petites incisions',
      'Calibrage de l\'estomac sur une sonde de référence',
      'Section et agrafage de l\'estomac pour créer le manchon gastrique',
      'Vérification de l\'étanchéité de la ligne d\'agrafes',
      'Fermeture des incisions et réveil en salle de surveillance',
      'Reprise progressive des boissons puis d\'une alimentation adaptée',
    ],
    duree: '1 à 2 heures',
    resultats: 'La perte de poids est progressive et s\'étale sur les mois suivant l\'intervention, accompagnée d\'une amélioration fréquente des maladies associées à l\'obésité. L\'alimentation est réintroduite par étapes (liquide, mixée, puis normale) et le suivi nutritionnel régulier permet de consolider les résultats dans la durée.',
    risques: [
      'Risques liés à toute chirurgie abdominale, réduits par l\'approche cœlioscopique',
      'Fuite sur la ligne d\'agrafes, rare et dépistée par une surveillance attentive',
      'Reflux gastro-œsophagien, pouvant nécessiter un traitement adapté',
      'Carences nutritionnelles, prévenues par le suivi et la supplémentation',
    ],
  },
  {
    slug: 'bypass-gastrique',
    title: 'Bypass gastrique (Roux-en-Y)',
    shortTitle: 'Bypass gastrique',
    description: 'Intervention bariatrique de référence associant réduction de l\'estomac et court-circuit intestinal, particulièrement efficace sur le diabète associé à l\'obésité.',
    fullDescription: `Le bypass gastrique en Y (Roux-en-Y) est une intervention de chirurgie de l'obésité qui associe deux mécanismes : la création d'une petite poche gastrique, qui limite le volume des repas, et un court-circuit d'une partie de l'intestin, qui modifie l'absorption des aliments et la régulation hormonale de la faim et de la glycémie.

Cette double action en fait une intervention particulièrement efficace, notamment chez les patients présentant un diabète de type 2 ou un reflux gastro-œsophagien important associés à l'obésité. Elle est réalisée entièrement par cœlioscopie, avec les avantages habituels de la chirurgie mini-invasive : suites plus confortables et récupération rapide.

Le bypass nécessite un engagement durable : une supplémentation en vitamines et un suivi médical et nutritionnel réguliers sont indispensables à vie pour prévenir les carences. En contrepartie, il offre une perte de poids importante et durable et une amélioration notable des maladies associées.

À la Clinique Pasteur Tunis, le bypass gastrique est pratiqué par des chirurgiens bariatriques expérimentés au sein d'une équipe multidisciplinaire complète, avec un protocole de suivi structuré qui accompagne chaque patient bien au-delà de l'intervention.`,
    image: '/images/fiches/baria-bypass-gastrique.webp',
    indications: [
      { label: 'Obésité sévère ou morbide validée par l\'équipe multidisciplinaire', explication: `Le bypass est proposé lorsque l'excès de poids important met la santé en danger et que l'ensemble des spécialistes a confirmé que la chirurgie est la meilleure option.` },
      { label: 'Diabète de type 2 associé à l\'obésité', explication: `Cette intervention agit aussi sur la régulation du sucre dans le sang : elle est particulièrement intéressante quand un diabète accompagne l'obésité, avec une amélioration souvent rapide.` },
      { label: 'Reflux gastro-œsophagien important associé à l\'obésité', explication: `Le montage du bypass protège l'œsophage des remontées acides : il est souvent préféré quand un reflux gênant existe déjà avant l'opération.` },
      { label: 'Échec ou insuffisance de résultat d\'une première chirurgie bariatrique', explication: `Lorsqu'une première intervention n'a pas donné le résultat espéré, la conversion en bypass permet dans de nombreux cas de relancer une perte de poids durable.` },
      { label: 'Patient motivé, acceptant un suivi et une supplémentation à long terme', explication: `Après un bypass, la prise quotidienne de vitamines et des consultations régulières sont nécessaires à vie : l'adhésion du patient à ce suivi est essentielle.` },
    ],
    preparation: [
      'Bilan pré-opératoire complet (biologique, cardiologique, endoscopie digestive)',
      'Évaluation nutritionnelle et mise en place des nouvelles habitudes alimentaires',
      'Évaluation psychologique',
      'Consultation d\'anesthésie pré-opératoire',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Cœlioscopie par de petites incisions abdominales',
      'Création d\'une petite poche gastrique à partir du haut de l\'estomac',
      'Montage du court-circuit intestinal en Y',
      'Réalisation des anastomoses (connexions) et vérification de leur étanchéité',
      'Fermeture des incisions et surveillance en salle de réveil',
      'Reprise progressive et encadrée de l\'alimentation',
    ],
    duree: '2 à 3 heures',
    resultats: 'La perte de poids est importante et progressive au cours des mois qui suivent, avec une amélioration souvent rapide du diabète et des autres maladies associées. Le suivi nutritionnel régulier et la supplémentation vitaminique quotidienne assurent l\'équilibre nutritionnel et la stabilité du résultat dans le temps.',
    risques: [
      'Risques chirurgicaux habituels, réduits par la cœlioscopie et l\'expérience de l\'équipe',
      'Fuite anastomotique, rare et surveillée attentivement en post-opératoire',
      'Dumping syndrome (inconfort après repas sucrés), évité par les conseils diététiques',
      'Carences en vitamines et minéraux, prévenues par la supplémentation et le suivi',
    ],
  },
  {
    slug: 'mini-bypass-gastrique',
    title: 'Mini bypass gastrique',
    shortTitle: 'Mini bypass',
    description: 'Variante simplifiée du bypass gastrique avec une seule anastomose, alliant efficacité sur la perte de poids et technique opératoire plus courte.',
    fullDescription: `Le mini bypass gastrique, également appelé bypass en oméga ou à une seule anastomose, est une variante du bypass classique. Il associe la création d'une poche gastrique allongée à une seule connexion (anastomose) avec l'intestin, contre deux pour le bypass en Y. La technique est ainsi plus simple et le temps opératoire plus court, pour une efficacité comparable sur la perte de poids.

Comme les autres interventions bariatriques, il agit à la fois sur le volume des repas et sur les mécanismes hormonaux qui régulent la faim et le métabolisme. Il est particulièrement intéressant chez certains profils de patients, dont le choix est discuté au cas par cas avec l'équipe multidisciplinaire.

Le mini bypass est réalisé entièrement sous cœlioscopie et s'accompagne, comme le bypass classique, d'une supplémentation vitaminique et d'un suivi médical et nutritionnel réguliers à long terme.

À la Clinique Pasteur Tunis, le mini bypass gastrique fait partie de l'éventail complet des techniques bariatriques proposées, permettant de recommander à chaque patient l'intervention la mieux adaptée à sa situation, dans le cadre d'un parcours de soins coordonné.`,
    image: '/images/fiches/baria-mini-bypass-gastrique.webp',
    indications: [
      { label: 'Obésité sévère ou morbide validée par l\'équipe multidisciplinaire', explication: `Comme les autres chirurgies de l'obésité, le mini bypass s'adresse aux personnes dont l'excès de poids retentit sérieusement sur la santé, après validation du dossier en équipe.` },
      { label: 'Diabète de type 2 ou autres complications associées à l\'obésité', explication: `L'intervention agit sur les mécanismes hormonaux qui régulent la faim et la glycémie, ce qui aide à améliorer le diabète et les autres maladies liées à l'obésité.` },
      { label: 'Situation anatomique ou médicale faisant préférer cette technique au bypass en Y', explication: `Chez certains patients, la configuration de l'abdomen ou l'état de santé général rend ce montage plus simple et plus sûr que le bypass classique : le choix est discuté au cas par cas.` },
      { label: 'Chirurgie de révision après une première intervention bariatrique dans certains cas', explication: `Le mini bypass peut être proposé pour corriger ou convertir une première chirurgie de l'obésité dont le résultat est insuffisant, selon la situation de chaque patient.` },
      { label: 'Patient motivé, acceptant le suivi et la supplémentation à long terme', explication: `Un engagement durable est nécessaire : vitamines quotidiennes et consultations régulières font partie intégrante du traitement et garantissent un résultat stable.` },
    ],
    preparation: [
      'Bilan pré-opératoire complet (biologique, cardiologique, endoscopie digestive)',
      'Évaluation nutritionnelle et diététique',
      'Évaluation psychologique',
      'Consultation d\'anesthésie pré-opératoire',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Cœlioscopie par de petites incisions abdominales',
      'Création d\'une poche gastrique longue et étroite',
      'Réalisation d\'une anastomose unique entre la poche et l\'intestin',
      'Vérification de l\'étanchéité du montage',
      'Fermeture des incisions et surveillance post-opératoire',
      'Reprise progressive de l\'alimentation selon un protocole précis',
    ],
    duree: '1 heure 30 à 2 heures',
    resultats: 'La perte de poids est comparable à celle du bypass classique, progressive sur les mois suivant l\'intervention, avec une amélioration fréquente des maladies associées. Le suivi nutritionnel et la supplémentation vitaminique quotidienne font partie intégrante du traitement et garantissent un résultat durable.',
    risques: [
      'Risques chirurgicaux habituels, réduits par la technique cœlioscopique',
      'Reflux biliaire, spécifique à ce montage, surveillé lors du suivi',
      'Fuite anastomotique, rare et dépistée par la surveillance post-opératoire',
      'Carences nutritionnelles, prévenues par le suivi et la supplémentation',
    ],
  },
  {
    slug: 'anneau-gastrique',
    title: 'Anneau gastrique ajustable',
    shortTitle: 'Anneau gastrique',
    description: 'Pose par cœlioscopie d\'un anneau ajustable autour de la partie haute de l\'estomac, technique réversible de restriction alimentaire.',
    fullDescription: `L'anneau gastrique ajustable est un dispositif en silicone placé autour de la partie haute de l'estomac, créant une petite poche qui ralentit le passage des aliments et procure une sensation de satiété rapide. L'anneau est relié à un boîtier placé sous la peau, qui permet d'ajuster son serrage par simple injection, sans nouvelle intervention.

C'est la technique bariatrique la moins invasive et la seule totalement réversible : l'anneau peut être desserré, resserré ou retiré selon les besoins. Elle ne comporte ni agrafage ni section de l'estomac, ce qui en fait une intervention courte avec des suites généralement simples.

L'efficacité de l'anneau repose fortement sur l'implication du patient : le respect des consignes alimentaires et la régularité du suivi conditionnent la qualité de la perte de poids. Les ajustements de serrage sont réalisés progressivement lors des consultations de suivi.

À la Clinique Pasteur Tunis, la pose d'anneau gastrique s'inscrit dans le même parcours multidisciplinaire que les autres interventions bariatriques, avec des consultations d'ajustement régulières et un accompagnement nutritionnel personnalisé.`,
    image: '/images/fiches/baria-anneau-gastrique.webp',
    indications: [
      { label: 'Obésité validée par l\'équipe multidisciplinaire', explication: `L'anneau s'adresse aux personnes dont l'excès de poids justifie une aide chirurgicale, après une évaluation complète confirmant que cette technique douce est adaptée.` },
      { label: 'Souhait d\'une technique réversible et peu invasive', explication: `C'est la seule intervention bariatrique totalement réversible : l'anneau peut être desserré ou retiré à tout moment, sans agrafage ni section de l'estomac.` },
      { label: 'Patient jeune ou souhaitant préserver l\'intégrité de son estomac', explication: `L'estomac reste intact sous l'anneau : cette option rassure les patients qui ne souhaitent pas de modification définitive de leur anatomie.` },
      { label: 'Capacité à suivre des consignes alimentaires précises', explication: `L'efficacité de l'anneau dépend directement du respect des consignes : manger lentement, bien mastiquer et adapter les textures font partie du traitement.` },
      { label: 'Engagement dans un suivi régulier avec ajustements de l\'anneau', explication: `Le serrage de l'anneau est ajusté progressivement lors des consultations : cette régularité du suivi conditionne la qualité de la perte de poids.` },
    ],
    preparation: [
      'Bilan pré-opératoire complet',
      'Évaluation nutritionnelle et diététique',
      'Évaluation psychologique',
      'Consultation d\'anesthésie pré-opératoire',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Cœlioscopie par de petites incisions abdominales',
      'Mise en place de l\'anneau autour de la partie haute de l\'estomac',
      'Fixation de l\'anneau et raccordement au boîtier sous-cutané',
      'Vérification du positionnement',
      'Fermeture des incisions et retour en chambre',
      'Ajustements progressifs du serrage lors des consultations de suivi',
    ],
    duree: '45 minutes à 1 heure',
    resultats: 'La perte de poids est progressive et dépend étroitement du respect des consignes alimentaires et de la régularité des ajustements. Les suites opératoires sont généralement simples avec une hospitalisation courte, et l\'anneau reste ajustable à tout moment en fonction de l\'évolution.',
    risques: [
      'Intolérance alimentaire ou vomissements en cas de serrage excessif, corrigés par un ajustement',
      'Glissement ou dilatation de la poche au-dessus de l\'anneau, peu fréquents',
      'Problème lié au boîtier ou à la tubulure, accessible à une correction simple',
      'Possibilité de retrait de l\'anneau si nécessaire, la technique étant réversible',
    ],
  },
  {
    slug: 'chirurgie-revision-bariatrique',
    title: 'Chirurgie de révision bariatrique',
    shortTitle: 'Révision bariatrique',
    description: 'Réintervention après une première chirurgie de l\'obésité, pour corriger une complication ou relancer la perte de poids par une technique adaptée.',
    fullDescription: `La chirurgie de révision bariatrique s'adresse aux patients déjà opérés d'une chirurgie de l'obésité dont le résultat est insuffisant, qui ont repris du poids, ou qui présentent une complication de leur premier montage : reflux invalidant après sleeve, intolérance à un anneau gastrique, dilatation de la poche, entre autres situations.

Chaque cas est unique et nécessite une évaluation approfondie : bilan endoscopique et radiologique du montage existant, analyse des habitudes alimentaires et de l'historique de la perte de poids, discussion en équipe multidisciplinaire. La stratégie proposée peut consister à convertir une sleeve en bypass, à retirer un anneau et réaliser une nouvelle intervention, ou à corriger le montage en place.

Ces interventions sont techniquement plus exigeantes qu'une première chirurgie, en raison des adhérences et des modifications anatomiques existantes. Elles requièrent une équipe chirurgicale expérimentée et un plateau technique complet.

La Clinique Pasteur Tunis, grâce à son important volume d'activité bariatrique, dispose de l'expérience nécessaire pour prendre en charge ces situations complexes, y compris pour des patients opérés initialement dans d'autres établissements, en Tunisie comme à l'étranger.`,
    image: '/images/fiches/baria-chirurgie-revision-bariatrique.webp',
    indications: [
      { label: 'Reprise de poids après une première chirurgie bariatrique', explication: `Quand le poids remonte malgré une première opération, une réintervention adaptée permet dans de nombreux cas de relancer une perte de poids durable.` },
      { label: 'Perte de poids insuffisante malgré un suivi bien conduit', explication: `Si le résultat de la première chirurgie reste en deçà des attentes alors que le suivi a été respecté, une conversion vers une autre technique peut être proposée.` },
      { label: 'Reflux gastro-œsophagien invalidant après sleeve gastrectomie', explication: `Des remontées acides gênantes peuvent apparaître après une sleeve : la conversion en bypass soulage efficacement ce reflux tout en poursuivant la perte de poids.` },
      { label: 'Complication ou intolérance d\'un anneau gastrique', explication: `Un anneau mal toléré, source de vomissements ou d'inconfort, peut être retiré et remplacé par une autre technique bariatrique mieux adaptée.` },
      { label: 'Dilatation de la poche gastrique ou anomalie du montage initial', explication: `Avec le temps, le montage initial peut se distendre ou se déformer et perdre en efficacité : la révision corrige cette anomalie anatomique.` },
    ],
    preparation: [
      'Bilan complet du montage existant (endoscopie, imagerie)',
      'Analyse du dossier de la première intervention',
      'Réévaluation nutritionnelle et psychologique',
      'Discussion du dossier en réunion multidisciplinaire',
      'Consultation d\'anesthésie pré-opératoire',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Cœlioscopie avec libération prudente des adhérences',
      'Analyse per-opératoire du montage existant',
      'Correction ou conversion vers la technique choisie',
      'Vérification de l\'étanchéité du nouveau montage',
      'Surveillance post-opératoire renforcée',
      'Reprise alimentaire progressive et encadrée',
    ],
    duree: '2 à 3 heures selon la complexité',
    resultats: 'La révision permet, selon les cas, de corriger la complication en cause et de relancer une perte de poids durable. Les suites sont encadrées par une surveillance attentive et le suivi multidisciplinaire est renforcé pour consolider le résultat dans le temps.',
    risques: [
      'Risques chirurgicaux légèrement supérieurs à ceux d\'une première intervention, maîtrisés par l\'expérience de l\'équipe',
      'Fuite ou fistule, rares et surveillées de près',
      'Nécessité éventuelle d\'étapes chirurgicales successives dans certaines situations complexes',
    ],
  },
  {
    slug: 'ballon-intragastrique',
    title: 'Ballon intragastrique',
    shortTitle: 'Ballon gastrique',
    description: 'Mise en place temporaire d\'un ballon dans l\'estomac par voie endoscopique, sans chirurgie, pour amorcer une perte de poids encadrée.',
    fullDescription: `Le ballon intragastrique est une alternative non chirurgicale à la chirurgie de l'obésité. Un ballon souple en silicone est introduit dans l'estomac par les voies naturelles, au cours d'une simple endoscopie, puis rempli de sérum physiologique. En occupant une partie du volume gastrique, il procure une sensation de satiété rapide et aide à réduire les quantités consommées.

Le ballon est un dispositif temporaire : il est retiré après quelques mois, également par endoscopie. Il constitue un véritable tremplin pour modifier durablement ses habitudes alimentaires, à condition d'être accompagné d'un suivi diététique régulier pendant toute la durée du traitement et après le retrait.

Cette solution s'adresse aux patients dont l'excès de poids ne relève pas encore de la chirurgie, à ceux qui souhaitent éviter une intervention chirurgicale, ou en préparation d'une chirurgie bariatrique chez certains patients.

À la Clinique Pasteur Tunis, la pose et le retrait du ballon intragastrique sont réalisés en ambulatoire dans le service d'endoscopie, sous sédation, avec un programme d'accompagnement nutritionnel intégré pendant toute la durée du traitement.`,
    image: '/images/fiches/baria-ballon-intragastrique.webp',
    indications: [
      { label: 'Surpoids ou obésité modérée ne relevant pas d\'une chirurgie', explication: `Le ballon s'adresse aux personnes dont l'excès de poids est réel mais ne justifie pas encore une opération : il offre une aide efficace sans geste chirurgical.` },
      { label: 'Refus ou contre-indication à la chirurgie bariatrique', explication: `Lorsqu'une opération n'est pas souhaitée ou n'est pas possible pour des raisons médicales, le ballon constitue une alternative douce posée par simple endoscopie.` },
      { label: 'Préparation à une chirurgie bariatrique chez certains patients', explication: `Chez certains patients, une première perte de poids obtenue grâce au ballon facilite et sécurise une chirurgie bariatrique programmée ensuite.` },
      { label: 'Souhait d\'une solution temporaire et sans intervention chirurgicale', explication: `Le ballon est retiré après quelques mois : il convient à ceux qui recherchent un coup de pouce limité dans le temps, sans modification de leur anatomie.` },
      { label: 'Motivation à modifier durablement ses habitudes alimentaires', explication: `Le ballon est un tremplin : c'est le travail sur les habitudes alimentaires, accompagné par le suivi diététique, qui permet de conserver le résultat après son retrait.` },
    ],
    preparation: [
      'Consultation avec l\'équipe médicale et évaluation nutritionnelle',
      'Endoscopie ou bilan digestif préalable si nécessaire',
      'Consultation d\'anesthésie pour la sédation',
      'Être à jeun 6 heures avant la pose',
      'Prévoir un accompagnant pour le retour à domicile',
    ],
    deroulement: [
      'Sédation légère en salle d\'endoscopie',
      'Vérification endoscopique de l\'estomac',
      'Introduction du ballon dégonflé par la bouche',
      'Remplissage du ballon sous contrôle visuel',
      'Réveil rapide et surveillance courte',
      'Retour à domicile le jour même avec les consignes alimentaires',
      'Retrait du ballon par endoscopie au terme du traitement',
    ],
    duree: '20 à 30 minutes pour la pose',
    resultats: 'Une sensation de satiété précoce s\'installe dès les premiers jours, après une courte période d\'adaptation. La perte de poids se construit sur la durée du traitement grâce au suivi diététique associé, et les nouvelles habitudes acquises aident à maintenir le résultat après le retrait du ballon.',
    risques: [
      'Nausées et inconfort gastrique les premiers jours, calmés par un traitement adapté',
      'Intolérance au ballon nécessitant parfois un retrait anticipé',
      'Dégonflement spontané, rare avec les dispositifs actuels',
    ],
  },
  {
    slug: 'bilan-preoperatoire',
    title: 'Bilan pré-opératoire complet',
    shortTitle: 'Bilan pré-opératoire',
    description: 'Évaluation médicale multidisciplinaire complète avant chirurgie bariatrique, pour opérer dans les meilleures conditions de sécurité.',
    fullDescription: `Le bilan pré-opératoire est une étape fondamentale du parcours de chirurgie bariatrique. Il permet de confirmer l'indication opératoire, de choisir la technique la plus adaptée à chaque patient et de préparer l'intervention dans des conditions de sécurité optimales.

Ce bilan est multidisciplinaire : il associe des examens biologiques complets, une évaluation cardiologique et respiratoire (avec recherche d'apnées du sommeil si nécessaire), une endoscopie digestive pour vérifier l'état de l'estomac, ainsi que des consultations spécialisées avec le chirurgien, le nutritionniste, le psychologue et l'anesthésiste.

Au-delà des examens, cette période de préparation permet au patient de bien comprendre l'intervention envisagée, ses bénéfices attendus et les engagements qu'elle implique, notamment en matière d'alimentation et de suivi. C'est aussi le moment d'amorcer les premiers changements d'habitudes qui faciliteront les suites opératoires.

À la Clinique Pasteur Tunis, l'ensemble du bilan pré-opératoire peut être réalisé sur place, grâce au plateau technique complet de l'établissement, avec une coordination des rendez-vous qui simplifie le parcours, y compris pour les patients venant de l'étranger.`,
    image: '/images/fiches/baria-bilan-preoperatoire.webp',
    indications: [
      { label: 'Tout patient candidat à une chirurgie bariatrique', explication: `Ce bilan est une étape obligatoire et rassurante du parcours : il concerne chaque personne envisageant une chirurgie de l'obésité, avant toute programmation opératoire.` },
      { label: 'Confirmation de l\'indication opératoire par l\'équipe multidisciplinaire', explication: `Les résultats du bilan permettent à l'ensemble des spécialistes de confirmer que la chirurgie est réellement la meilleure option pour le patient.` },
      { label: 'Choix de la technique chirurgicale la plus adaptée', explication: `Chaque patient est différent : les examens aident à choisir entre les différentes techniques bariatriques celle qui correspond le mieux à son profil.` },
      { label: 'Dépistage des maladies associées à l\'obésité', explication: `Le bilan recherche les maladies souvent liées à l'excès de poids, comme le diabète ou les apnées du sommeil, afin de les prendre en charge avant l'opération.` },
      { label: 'Préparation de l\'anesthésie dans les meilleures conditions', explication: `Connaître précisément l'état du cœur, des poumons et de l'organisme permet à l'anesthésiste d'adapter sa technique et de sécuriser l'intervention.` },
    ],
    preparation: [
      'Apporter l\'ensemble de ses documents médicaux et résultats d\'examens antérieurs',
      'Liste des traitements en cours',
      'Être à jeun pour les prélèvements sanguins et l\'endoscopie selon les consignes',
      'Prévoir plusieurs rendez-vous, regroupés autant que possible',
    ],
    deroulement: [
      'Consultation initiale avec le chirurgien bariatrique',
      'Bilan biologique complet',
      'Évaluation cardiologique et respiratoire',
      'Endoscopie digestive haute',
      'Consultation nutritionnelle et évaluation des habitudes alimentaires',
      'Entretien psychologique',
      'Consultation d\'anesthésie',
      'Synthèse du dossier et validation de l\'indication en équipe',
    ],
    duree: 'Réalisable sur quelques jours selon l\'organisation des rendez-vous',
    resultats: 'Au terme du bilan, l\'équipe multidisciplinaire valide l\'indication et propose la technique la mieux adaptée au profil du patient. Une date opératoire est alors programmée, avec des consignes de préparation personnalisées.',
    risques: [
      'Examens sans danger, pour la plupart non invasifs',
      'L\'endoscopie digestive est réalisée sous sédation pour un confort optimal',
    ],
  },
  {
    slug: 'suivi-nutritionnel',
    title: 'Suivi nutritionnel pré et post-opératoire',
    shortTitle: 'Suivi nutritionnel',
    description: 'Accompagnement diététique personnalisé avant et après la chirurgie de l\'obésité, clé d\'une perte de poids durable et d\'un bon équilibre nutritionnel.',
    fullDescription: `Le suivi nutritionnel est un pilier de la réussite de la chirurgie bariatrique. Avant l'intervention, il permet d'évaluer les habitudes alimentaires, de corriger d'éventuelles carences et d'amorcer les changements qui faciliteront l'adaptation après l'opération. C'est aussi l'occasion de comprendre comment l'alimentation évoluera après la chirurgie.

Après l'intervention, l'alimentation est réintroduite par étapes : textures liquides, puis mixées, puis normales, selon un calendrier précis remis au patient. Le nutritionniste accompagne chaque phase, ajuste les apports en protéines, veille à une bonne hydratation et prévient les intolérances alimentaires.

À plus long terme, les consultations régulières permettent de surveiller l'équilibre nutritionnel, d'adapter la supplémentation en vitamines et minéraux, de consolider les nouvelles habitudes et de prévenir la reprise de poids. Ce suivi s'inscrit dans la durée et fait partie intégrante du traitement chirurgical de l'obésité.

À la Clinique Pasteur Tunis, le coaching nutritionnel est intégré au parcours bariatrique : les patients bénéficient de consultations programmées avant et après l'intervention, avec des plans alimentaires personnalisés et un interlocuteur disponible pour répondre à leurs questions à chaque étape.`,
    image: '/images/fiches/baria-suivi-nutritionnel.webp',
    indications: [
      { label: 'Préparation à toute chirurgie bariatrique', explication: `Avant l'opération, le nutritionniste évalue les habitudes alimentaires et amorce les premiers changements qui faciliteront l'adaptation après la chirurgie.` },
      { label: 'Accompagnement des phases de réalimentation post-opératoires', explication: `Après l'intervention, l'alimentation reprend par étapes, des textures liquides aux plats normaux : chaque phase est guidée pour un maximum de confort et de sécurité.` },
      { label: 'Prévention et correction des carences nutritionnelles', explication: `Les apports en protéines, vitamines et minéraux sont surveillés régulièrement afin de préserver l'énergie, les muscles et la santé générale.` },
      { label: 'Consolidation des nouvelles habitudes alimentaires', explication: `Les consultations régulières aident à ancrer durablement une alimentation équilibrée et adaptée, clé du succès à long terme de la chirurgie.` },
      { label: 'Prévention de la reprise de poids à long terme', explication: `Un accompagnement qui s'inscrit dans la durée permet de repérer tôt les écarts et de réajuster le cap avant que le poids ne remonte.` },
    ],
    preparation: [
      'Apporter un relevé de ses habitudes alimentaires si demandé',
      'Résultats des bilans biologiques récents',
      'Liste des compléments et traitements en cours',
    ],
    deroulement: [
      'Évaluation initiale des habitudes et du comportement alimentaire',
      'Élaboration d\'un plan alimentaire personnalisé',
      'Consultations de suivi programmées avant l\'intervention',
      'Accompagnement des phases de réalimentation après la chirurgie',
      'Ajustement de la supplémentation vitaminique',
      'Consultations régulières de consolidation à long terme',
    ],
    duree: 'Consultations régulières tout au long du parcours',
    resultats: 'Un suivi nutritionnel régulier optimise la perte de poids, prévient les carences et les intolérances, et aide à installer durablement de nouvelles habitudes alimentaires. C\'est l\'un des facteurs les plus déterminants du succès à long terme de la chirurgie bariatrique.',
  },
  {
    slug: 'accompagnement-psychologique',
    title: 'Accompagnement psychologique',
    shortTitle: 'Accompagnement psychologique',
    description: 'Soutien psychologique avant et après la chirurgie bariatrique, pour préparer sereinement les changements et accompagner la transformation.',
    fullDescription: `La chirurgie de l'obésité transforme profondément le quotidien : rapport à l'alimentation, image de soi, regard des autres, dynamique familiale et sociale. L'accompagnement psychologique aide à préparer et à vivre sereinement ces changements, avant comme après l'intervention.

Avant la chirurgie, l'entretien psychologique fait partie du bilan pré-opératoire. Il permet d'évaluer la motivation, de repérer d'éventuels troubles du comportement alimentaire et de s'assurer que le patient aborde l'intervention avec des attentes réalistes et une bonne compréhension des changements à venir.

Après l'opération, un soutien peut être proposé pour accompagner la transformation corporelle, renforcer la motivation dans les phases de plateau, travailler sur le comportement alimentaire et prévenir les difficultés d'adaptation. Cet accompagnement est adapté aux besoins de chacun, ponctuel ou régulier.

À la Clinique Pasteur Tunis, l'accompagnement psychologique est intégré à l'approche multidisciplinaire du centre de chirurgie bariatrique : le psychologue travaille en coordination avec le chirurgien et le nutritionniste pour offrir à chaque patient un parcours cohérent et bienveillant.`,
    image: '/images/fiches/baria-accompagnement-psychologique.webp',
    indications: [
      { label: 'Évaluation psychologique dans le cadre du bilan pré-opératoire', explication: `Un entretien avant l'opération permet de vérifier que le patient aborde la chirurgie avec des attentes réalistes et dans de bonnes conditions psychologiques.` },
      { label: 'Préparation aux changements liés à la chirurgie bariatrique', explication: `La chirurgie transforme le rapport à l'alimentation et l'image de soi : en parler en amont aide à vivre ces changements plus sereinement.` },
      { label: 'Accompagnement des troubles du comportement alimentaire', explication: `Grignotages, compulsions ou alimentation émotionnelle peuvent compromettre le résultat : un travail spécifique aide à les comprendre et à les apaiser.` },
      { label: 'Soutien pendant les phases d\'adaptation post-opératoires', explication: `Après l'opération, des moments de doute ou de plateau sont normaux : un soutien ponctuel ou régulier aide à traverser ces étapes avec confiance.` },
      { label: 'Renforcement de la motivation et de l\'image de soi', explication: `L'accompagnement aide à s'approprier son nouveau corps et à entretenir la motivation, deux facteurs essentiels de la réussite durable du parcours.` },
    ],
    preparation: [
      'Aucune préparation particulière',
      'Venir avec ses questions et ses attentes',
      'Apporter les éléments de son parcours médical si disponibles',
    ],
    deroulement: [
      'Entretien individuel dans un cadre confidentiel',
      'Évaluation de la motivation et du rapport à l\'alimentation',
      'Restitution et échanges avec l\'équipe multidisciplinaire (avec l\'accord du patient)',
      'Séances de suivi proposées selon les besoins',
      'Coordination avec le chirurgien et le nutritionniste tout au long du parcours',
    ],
    duree: '45 minutes à 1 heure par entretien',
    resultats: 'L\'accompagnement psychologique favorise une meilleure adhésion au projet de soins, des attentes réalistes et une adaptation plus sereine aux changements. Il contribue significativement à la réussite globale et durable du parcours bariatrique.',
  },
  {
    slug: 'chirurgie-reparatrice-post-amaigrissement',
    title: 'Chirurgie réparatrice post-amaigrissement (abdominoplastie)',
    shortTitle: 'Réparatrice post-amaigrissement',
    description: 'Correction chirurgicale des excès de peau après une perte de poids importante, pour parachever la transformation et retrouver le confort corporel.',
    fullDescription: `Après une perte de poids importante, notamment à la suite d'une chirurgie bariatrique, la peau distendue ne se rétracte pas toujours complètement. Des excès cutanés peuvent persister au niveau du ventre, des bras, des cuisses ou de la poitrine, sources d'inconfort physique, d'irritations et de gêne esthétique. La chirurgie réparatrice post-amaigrissement corrige ces séquelles et parachève la transformation.

L'intervention la plus fréquente est l'abdominoplastie : elle retire l'excès de peau et de graisse de l'abdomen, retend la paroi musculaire si nécessaire et redessine la silhouette. D'autres gestes peuvent être proposés selon les besoins : lifting des bras ou des cuisses, chirurgie de la poitrine, souvent planifiés en plusieurs temps.

Ces interventions sont envisagées une fois le poids stabilisé depuis plusieurs mois, avec un bon équilibre nutritionnel, conditions indispensables à une cicatrisation de qualité et à un résultat durable.

À la Clinique Pasteur Tunis, la chirurgie réparatrice post-amaigrissement est assurée par des chirurgiens plasticiens travaillant en coordination avec l'équipe bariatrique, ce qui garantit une continuité de prise en charge du début du parcours de perte de poids jusqu'à la restauration complète de la silhouette.`,
    image: '/images/fiches/baria-chirurgie-reparatrice-post-amaigrissement.webp',
    indications: [
      { label: 'Excès de peau abdominale après perte de poids importante', explication: `Après un amaigrissement important, la peau distendue ne se rétracte pas toujours : l'intervention retire ce surplus pour redessiner la silhouette.` },
      { label: 'Irritations ou infections cutanées dans les plis', explication: `Les replis de peau peuvent macérer et s'irriter, surtout en période chaude : supprimer l'excès cutané met fin à ces désagréments du quotidien.` },
      { label: 'Gêne fonctionnelle dans les mouvements ou l\'habillement', explication: `Quand le tablier de peau gêne la marche, le sport ou le choix des vêtements, la chirurgie réparatrice redonne aisance et confort corporel.` },
      { label: 'Relâchement de la paroi abdominale', explication: `Les muscles du ventre distendus par les années de surpoids peuvent être remis en tension pendant la même intervention, pour un ventre plus plat et plus tonique.` },
      { label: 'Poids stabilisé depuis plusieurs mois avec bon équilibre nutritionnel', explication: `L'intervention est programmée une fois le poids stable et l'organisme bien nourri : ces conditions garantissent une belle cicatrisation et un résultat durable.` },
    ],
    preparation: [
      'Stabilisation du poids depuis plusieurs mois',
      'Bilan nutritionnel et correction d\'éventuelles carences',
      'Consultation avec le chirurgien plasticien et définition du programme opératoire',
      'Consultation d\'anesthésie pré-opératoire',
      'Arrêt du tabac fortement recommandé pour favoriser la cicatrisation',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale',
      'Dessins pré-opératoires précis sur la peau',
      'Retrait de l\'excès de peau et de graisse',
      'Remise en tension de la paroi musculaire si nécessaire',
      'Repositionnement de l\'ombilic lors d\'une abdominoplastie',
      'Fermeture soigneuse en plusieurs plans',
      'Mise en place d\'un vêtement compressif',
    ],
    duree: '2 à 3 heures selon l\'étendue',
    resultats: 'La silhouette est immédiatement transformée, le résultat définitif s\'appréciant après quelques mois, une fois l\'œdème résorbé et les cicatrices matures. Le confort physique et la qualité de vie s\'améliorent nettement, complétant les bénéfices de la perte de poids.',
    risques: [
      'Cicatrices, dont l\'aspect s\'améliore progressivement avec le temps et les soins',
      'Œdème et ecchymoses transitoires',
      'Retard de cicatrisation localisé, plus fréquent en cas de tabagisme',
      'Petites retouches parfois nécessaires pour parfaire le résultat',
    ],
  },
];
