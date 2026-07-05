export const prestationsCardiovasculaire = [
  {
    slug: 'chirurgie-cardiaque-cec',
    title: 'Chirurgie cardiaque sous circulation extra-corporelle (CEC)',
    shortTitle: 'Chirurgie sous CEC',
    description: 'Interventions cardiaques réalisées à cœur ouvert grâce à une machine cœur-poumon qui assure la circulation et l\'oxygénation du sang pendant l\'opération.',
    fullDescription: `La circulation extra-corporelle (CEC) est une technique qui permet au chirurgien d'opérer sur un cœur immobile et exsangue. Pendant l'intervention, une machine spécialisée, appelée machine cœur-poumon, prend temporairement le relais du cœur et des poumons : elle assure la circulation du sang dans l'organisme et son oxygénation, sous la surveillance constante d'un perfusionniste dédié.

Cette technique est indispensable pour la plupart des interventions dites « à cœur ouvert » : remplacement ou réparation de valves cardiaques, certains pontages coronariens, chirurgie de l'aorte ou correction de malformations congénitales. Elle offre au chirurgien des conditions de travail optimales pour effectuer des gestes d'une grande précision.

La CEC est aujourd'hui une technique parfaitement maîtrisée, encadrée par des protocoles rigoureux de protection du cœur et des organes. À la fin de l'intervention, le cœur reprend progressivement son activité et la machine est retirée en douceur.

À la Clinique Pasteur Tunis, la chirurgie sous CEC est pratiquée dans un bloc opératoire dédié à la chirurgie cardiaque, par une équipe chevronnée de chirurgiens, d'anesthésistes-réanimateurs et de perfusionnistes. Le patient est ensuite accueilli dans l'unité de réanimation post-chirurgie cardiaque pour une surveillance rapprochée.`,
    image: '/images/cardiovasculaire.webp',
    indications: [
      'Remplacement ou réparation de valves cardiaques',
      'Pontages coronariens nécessitant un cœur immobile',
      'Chirurgie de l\'aorte thoracique',
      'Correction de cardiopathies congénitales',
      'Interventions combinées (valve et pontage par exemple)',
    ],
    preparation: [
      'Bilan cardiaque complet (échocardiographie, coronarographie si nécessaire)',
      'Bilan pré-opératoire sanguin et d\'imagerie',
      'Consultation d\'anesthésie obligatoire',
      'Être à jeun 6 heures avant l\'intervention',
      'Arrêt ou adaptation de certains traitements selon les consignes du médecin',
    ],
    deroulement: [
      'Accueil et installation au bloc opératoire dédié à la chirurgie cardiaque',
      'Anesthésie générale avec monitoring complet',
      'Mise en place de la circulation extra-corporelle sous contrôle du perfusionniste',
      'Réalisation du geste chirurgical sur cœur immobile',
      'Reprise progressive de l\'activité cardiaque et sevrage de la CEC',
      'Fermeture et transfert en réanimation post-chirurgie cardiaque',
    ],
    duree: '3 à 5 heures selon la complexité de l\'intervention',
    resultats: 'Après un séjour de surveillance en réanimation cardiaque de 24 à 72 heures, le patient rejoint une chambre d\'hospitalisation. La récupération est progressive et accompagnée par l\'équipe soignante, avec une reprise graduelle des activités sur plusieurs semaines.',
    risques: [
      'Comme toute chirurgie majeure, des complications sont possibles mais font l\'objet d\'une prévention rigoureuse',
      'Surveillance continue en réanimation dédiée durant les premiers jours',
      'Un suivi cardiologique régulier est organisé après la sortie',
    ],
  },
  {
    slug: 'chirurgie-cardiaque-coeur-ferme',
    title: 'Chirurgie cardiaque à cœur fermé',
    shortTitle: 'Chirurgie à cœur fermé',
    description: 'Interventions cardiaques réalisées sans arrêter le cœur ni recourir à la circulation extra-corporelle, sur un cœur qui continue de battre.',
    fullDescription: `La chirurgie cardiaque à cœur fermé regroupe les interventions réalisées sans ouvrir les cavités cardiaques et sans recourir à la circulation extra-corporelle. Le cœur continue de battre normalement pendant l'opération, ce qui évite les contraintes liées à l'arrêt cardiaque temporaire.

Cette approche est notamment utilisée pour certains pontages coronariens dits « à cœur battant », pour des interventions sur les vaisseaux proches du cœur ou pour certaines corrections de malformations. Le chirurgien utilise des dispositifs de stabilisation qui immobilisent uniquement la zone opérée, tandis que le reste du cœur poursuit son travail.

Lorsqu'elle est indiquée, cette technique peut permettre une récupération plus rapide et des suites opératoires simplifiées. Le choix entre chirurgie à cœur fermé et chirurgie sous CEC est toujours discuté au cas par cas par l'équipe médico-chirurgicale, en fonction de la pathologie et du profil de chaque patient.

À la Clinique Pasteur Tunis, l'équipe de chirurgie cardiovasculaire maîtrise l'ensemble de ces techniques et sélectionne pour chaque patient l'approche la plus adaptée, avec une surveillance post-opératoire assurée dans une unité de réanimation spécialisée.`,
    image: '/images/surgery-blue-1.webp',
    indications: [
      'Pontage coronarien à cœur battant chez certains patients',
      'Interventions sur les gros vaisseaux proches du cœur',
      'Certaines corrections de malformations congénitales',
      'Patients pour lesquels la circulation extra-corporelle est déconseillée',
    ],
    preparation: [
      'Bilan cardiologique complet avec imagerie',
      'Bilan pré-opératoire standard (analyses sanguines, radiographie)',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Adaptation des traitements anticoagulants selon prescription',
    ],
    deroulement: [
      'Installation au bloc opératoire et anesthésie générale',
      'Abord chirurgical adapté à l\'intervention prévue',
      'Stabilisation locale de la zone à opérer, le cœur continuant de battre',
      'Réalisation du geste chirurgical',
      'Fermeture et transfert en unité de surveillance post-opératoire',
    ],
    duree: '2 à 4 heures selon l\'intervention',
    resultats: 'Les suites opératoires sont généralement plus simples qu\'après une chirurgie sous CEC, avec une durée de réanimation souvent plus courte et une mobilisation précoce encouragée dès les premiers jours.',
    risques: [
      'Risques inhérents à toute chirurgie cardiaque, réduits par une sélection rigoureuse des indications',
      'Possibilité de conversion vers une technique sous CEC si nécessaire, décidée dans l\'intérêt du patient',
      'Surveillance rapprochée en réanimation durant les premières 24 à 48 heures',
    ],
  },
  {
    slug: 'chirurgie-cardiaque-mini-invasive',
    title: 'Chirurgie cardiaque mini-invasive',
    shortTitle: 'Chirurgie mini-invasive',
    description: 'Techniques chirurgicales cardiaques réalisées par de petites incisions, pour une récupération plus rapide et des cicatrices réduites.',
    fullDescription: `La chirurgie cardiaque mini-invasive consiste à réaliser certaines interventions cardiaques par de petites incisions, sans ouvrir entièrement le thorax. Le chirurgien accède au cœur par un abord limité, souvent entre les côtes, à l'aide d'instruments spécialement conçus et d'une visualisation optimisée.

Cette approche présente plusieurs avantages pour les patients éligibles : douleurs post-opératoires réduites, cicatrices plus discrètes, durée d'hospitalisation souvent raccourcie et retour plus rapide aux activités quotidiennes. Elle est notamment proposée pour certaines chirurgies valvulaires et certaines corrections de malformations.

Toutes les pathologies ne se prêtent pas à cette technique : l'équipe chirurgicale évalue soigneusement chaque dossier afin de déterminer si une approche mini-invasive est possible et sûre, ou si une chirurgie conventionnelle reste préférable.

À la Clinique Pasteur Tunis, la chirurgie cardiaque mini-invasive est pratiquée par une équipe expérimentée, dans des blocs opératoires équipés des dernières technologies, avec un suivi post-opératoire personnalisé en unité spécialisée.`,
    image: '/images/surgery-blue-2.webp',
    indications: [
      'Certaines chirurgies de la valve mitrale',
      'Certaines chirurgies de la valve aortique',
      'Fermeture de certaines communications intracardiaques',
      'Patients souhaitant une récupération rapide, lorsque l\'anatomie le permet',
    ],
    preparation: [
      'Bilan d\'imagerie approfondi pour vérifier la faisabilité de l\'abord mini-invasif',
      'Bilan pré-opératoire complet',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale avec monitoring spécialisé',
      'Petite incision thoracique adaptée à l\'intervention',
      'Réalisation du geste chirurgical à l\'aide d\'instruments dédiés',
      'Vérification du résultat par échocardiographie per-opératoire',
      'Fermeture des incisions et transfert en surveillance post-opératoire',
    ],
    duree: '2 à 4 heures',
    resultats: 'La récupération est généralement plus rapide qu\'après une chirurgie conventionnelle : mobilisation précoce, douleurs limitées et reprise progressive des activités en quelques semaines, avec un résultat esthétique apprécié.',
    risques: [
      'Risques opératoires comparables à la chirurgie classique, évalués au cas par cas',
      'Possibilité de conversion en chirurgie conventionnelle si la sécurité l\'exige',
      'Suivi post-opératoire identique à celui de toute chirurgie cardiaque',
    ],
  },
  {
    slug: 'chirurgie-endovasculaire',
    title: 'Chirurgie endovasculaire périphérique et aortique',
    shortTitle: 'Chirurgie endovasculaire',
    description: 'Traitement des maladies des artères par voie interne, à l\'aide de cathéters, de ballonnets et d\'endoprothèses, sans grande incision chirurgicale.',
    fullDescription: `La chirurgie endovasculaire est une approche moderne qui permet de traiter les maladies des artères « de l'intérieur », en naviguant dans les vaisseaux à l'aide de cathéters introduits par une simple ponction, le plus souvent au niveau de l'aine. Elle évite ainsi les grandes incisions de la chirurgie vasculaire classique.

Cette technique permet de dilater des artères rétrécies à l'aide de ballonnets, de mettre en place des stents pour maintenir le vaisseau ouvert, ou encore de déployer des endoprothèses pour exclure un anévrisme de l'aorte. Le geste est guidé en temps réel par imagerie, garantissant une grande précision.

Les avantages pour le patient sont significatifs : anesthésie souvent plus légère, absence de grande cicatrice, hospitalisation courte et récupération rapide. La chirurgie endovasculaire s'adresse particulièrement aux patients pour lesquels une chirurgie ouverte présenterait des contraintes importantes.

À la Clinique Pasteur Tunis, ces interventions sont réalisées dans une salle de cathétérisme de dernière génération, par une équipe maîtrisant à la fois les techniques endovasculaires et la chirurgie vasculaire conventionnelle, ce qui garantit une prise en charge complète et adaptée à chaque situation.`,
    image: '/images/surgery-modern.webp',
    indications: [
      'Anévrisme de l\'aorte abdominale ou thoracique éligible à une endoprothèse',
      'Rétrécissements des artères des membres inférieurs (artériopathie)',
      'Sténoses des artères rénales ou digestives',
      'Certaines lésions des artères carotides',
      'Patients à risque élevé pour une chirurgie ouverte',
    ],
    preparation: [
      'Bilan d\'imagerie vasculaire (angioscanner) pour planifier l\'intervention',
      'Bilan sanguin incluant la fonction rénale',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Signaler toute allergie, notamment aux produits de contraste',
    ],
    deroulement: [
      'Installation en salle de cathétérisme et anesthésie adaptée (locale, locorégionale ou générale)',
      'Ponction artérielle, le plus souvent au pli de l\'aine',
      'Navigation des cathéters sous contrôle d\'imagerie',
      'Dilatation, pose de stent ou déploiement de l\'endoprothèse',
      'Contrôle du résultat par angiographie',
      'Fermeture du point de ponction et surveillance',
    ],
    duree: '1 à 3 heures selon la complexité',
    resultats: 'L\'hospitalisation est généralement courte, de 24 à 72 heures. La reprise des activités quotidiennes est rapide, et un suivi par imagerie est programmé régulièrement pour vérifier le bon fonctionnement du dispositif implanté.',
    risques: [
      'Hématome au point de ponction, le plus souvent sans gravité',
      'Réaction au produit de contraste, prévenue par un interrogatoire soigneux',
      'Nécessité d\'un suivi d\'imagerie régulier après pose d\'endoprothèse',
    ],
  },
  {
    slug: 'pontage-coronarien',
    title: 'Pontage coronarien (PAC)',
    shortTitle: 'Pontage coronarien',
    description: 'Intervention chirurgicale qui rétablit l\'apport sanguin au muscle cardiaque en contournant les artères coronaires rétrécies ou obstruées.',
    fullDescription: `Le pontage aorto-coronarien est l'une des interventions de référence pour traiter la maladie coronaire, lorsque les artères qui nourrissent le cœur sont rétrécies ou obstruées. Le principe consiste à créer un « pont » vasculaire qui contourne la zone malade, afin de rétablir un apport sanguin normal au muscle cardiaque.

Pour réaliser ces ponts, le chirurgien utilise des vaisseaux prélevés sur le patient lui-même : artères mammaires internes situées derrière le sternum, artère radiale de l'avant-bras ou veines des jambes. Le choix des greffons est adapté à chaque patient pour garantir la meilleure durabilité possible.

Le pontage est indiqué lorsque les lésions coronaires sont trop nombreuses, trop diffuses ou mal situées pour être traitées par angioplastie. Il permet de soulager durablement les douleurs d'angine de poitrine, d'améliorer la qualité de vie et de protéger le cœur.

À la Clinique Pasteur Tunis, le pontage coronarien est réalisé par une équipe chirurgicale de grande expérience, sous circulation extra-corporelle ou à cœur battant selon les cas. La surveillance post-opératoire est assurée dans une unité de réanimation entièrement dédiée à la chirurgie cardiaque.`,
    image: '/images/surgery-blue-3.webp',
    indications: [
      'Maladie coronaire touchant plusieurs artères',
      'Rétrécissement du tronc commun de l\'artère coronaire gauche',
      'Lésions coronaires non accessibles à l\'angioplastie',
      'Angine de poitrine persistante malgré un traitement médical bien conduit',
      'Certaines situations associées à un diabète ou à une fonction cardiaque altérée',
    ],
    preparation: [
      'Coronarographie récente précisant les lésions à traiter',
      'Échocardiographie et bilan vasculaire complet',
      'Bilan sanguin pré-opératoire et consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Adaptation des traitements antiagrégants et anticoagulants selon prescription',
    ],
    deroulement: [
      'Anesthésie générale et installation au bloc de chirurgie cardiaque',
      'Prélèvement des greffons (artère mammaire, veine de jambe ou artère radiale)',
      'Réalisation des pontages, sous CEC ou à cœur battant selon la stratégie retenue',
      'Vérification de la qualité des anastomoses',
      'Fermeture et transfert en réanimation post-chirurgie cardiaque',
    ],
    duree: '3 à 5 heures',
    resultats: 'Après 24 à 72 heures en réanimation puis quelques jours d\'hospitalisation, le patient entame une convalescence progressive. La disparition des douleurs d\'angine de poitrine et l\'amélioration de la tolérance à l\'effort sont généralement nettes. Une réadaptation cardiaque est souvent proposée pour optimiser la récupération.',
    risques: [
      'Complications possibles comme pour toute chirurgie cardiaque majeure, prévenues par un bilan rigoureux',
      'Gêne temporaire au niveau des zones de prélèvement des greffons',
      'Un suivi cardiologique régulier et une bonne hygiène de vie sont essentiels pour la durabilité des pontages',
    ],
  },
  {
    slug: 'remplacement-valvulaire',
    title: 'Remplacement valvulaire (aortique, mitral)',
    shortTitle: 'Remplacement valvulaire',
    description: 'Remplacement chirurgical d\'une valve cardiaque malade par une prothèse mécanique ou biologique, pour restaurer une circulation sanguine normale.',
    fullDescription: `Les valves cardiaques fonctionnent comme des portes qui assurent la circulation du sang dans le bon sens à l'intérieur du cœur. Lorsqu'une valve se rétrécit (sténose) ou ne se ferme plus correctement (insuffisance), le cœur doit fournir un effort supplémentaire qui l'épuise progressivement. Le remplacement valvulaire consiste à retirer la valve malade et à la remplacer par une prothèse.

Deux grands types de prothèses existent : les prothèses mécaniques, très durables mais nécessitant un traitement anticoagulant à vie, et les prothèses biologiques, fabriquées à partir de tissus d'origine animale, qui ne nécessitent généralement pas d'anticoagulation au long cours. Le choix est discuté avec le patient en fonction de son âge, de son mode de vie et de ses préférences.

Les valves les plus souvent remplacées sont la valve aortique et la valve mitrale. L'intervention est réalisée sous circulation extra-corporelle, par voie classique ou mini-invasive selon les cas.

À la Clinique Pasteur Tunis, le remplacement valvulaire est pratiqué par une équipe chirurgicale expérimentée, avec un contrôle échocardiographique per-opératoire systématique et une surveillance post-opératoire en réanimation cardiaque dédiée.`,
    image: '/images/surgery-blue-4.webp',
    indications: [
      'Rétrécissement aortique serré et symptomatique',
      'Insuffisance aortique importante',
      'Insuffisance ou rétrécissement mitral sévère non réparable',
      'Atteinte valvulaire liée à une infection (endocardite) après stabilisation',
      'Dégénérescence d\'une prothèse valvulaire posée antérieurement',
    ],
    preparation: [
      'Échocardiographie détaillée et coronarographie de bilan',
      'Bilan dentaire pour éliminer tout foyer infectieux',
      'Bilan sanguin complet et consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
      'Discussion préalable du type de prothèse avec le chirurgien',
    ],
    deroulement: [
      'Anesthésie générale et mise en place de la circulation extra-corporelle',
      'Ouverture du cœur et retrait de la valve malade',
      'Implantation de la prothèse choisie et vérification de son bon fonctionnement',
      'Contrôle échocardiographique per-opératoire',
      'Sevrage de la CEC, fermeture et transfert en réanimation',
    ],
    duree: '3 à 4 heures',
    resultats: 'Le remplacement valvulaire soulage rapidement les symptômes d\'essoufflement et de fatigue. Après quelques jours d\'hospitalisation, la convalescence se poursuit à domicile avec une reprise progressive des activités. Un suivi cardiologique régulier et, selon la prothèse, un traitement anticoagulant adapté sont mis en place.',
    risques: [
      'Risques communs à la chirurgie cardiaque, encadrés par des protocoles stricts',
      'Nécessité d\'un traitement anticoagulant à vie en cas de prothèse mécanique',
      'Prévention rigoureuse des infections, notamment lors des soins dentaires ultérieurs',
    ],
  },
  {
    slug: 'reparation-valvulaire',
    title: 'Réparation valvulaire',
    shortTitle: 'Réparation valvulaire',
    description: 'Chirurgie conservatrice qui répare la valve cardiaque du patient au lieu de la remplacer, préservant ainsi ses tissus naturels.',
    fullDescription: `Lorsque cela est possible, réparer la valve cardiaque du patient plutôt que la remplacer constitue souvent la meilleure option. La réparation valvulaire, aussi appelée plastie valvulaire, consiste à restaurer le fonctionnement normal de la valve en conservant les tissus naturels du patient.

Cette chirurgie conservatrice s'adresse principalement à la valve mitrale, dont les fuites peuvent fréquemment être corrigées par des techniques de plastie : remodelage des feuillets, implantation d'un anneau de soutien, ajustement des cordages. La valve tricuspide peut également bénéficier de ces techniques.

Les avantages de la réparation sont importants : conservation de la valve naturelle, absence de traitement anticoagulant à vie dans la plupart des cas, meilleure préservation de la fonction cardiaque et excellente durabilité du résultat lorsque la réparation est réalisée par une équipe expérimentée.

À la Clinique Pasteur Tunis, chaque dossier valvulaire est étudié en détail afin de privilégier la réparation chaque fois qu'elle est réalisable. Le résultat est systématiquement contrôlé par échocardiographie pendant l'intervention, garantissant la qualité de la plastie avant la fin de l'opération.`,
    image: '/images/surgery-blue-5.webp',
    indications: [
      'Insuffisance mitrale par prolapsus ou dégénérescence des feuillets',
      'Fuite de la valve tricuspide associée à une autre chirurgie cardiaque',
      'Certaines fuites valvulaires d\'origine congénitale',
      'Patients jeunes souhaitant éviter une prothèse et l\'anticoagulation à vie',
    ],
    preparation: [
      'Échocardiographie transthoracique et transœsophagienne pour analyser la valve',
      'Coronarographie de bilan pré-opératoire',
      'Bilan sanguin et consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale et mise en place de la circulation extra-corporelle',
      'Analyse précise de la valve par le chirurgien',
      'Réparation des feuillets, des cordages et implantation d\'un anneau si nécessaire',
      'Contrôle échocardiographique per-opératoire de l\'étanchéité de la valve',
      'Fermeture et transfert en réanimation cardiaque',
    ],
    duree: '3 à 4 heures',
    resultats: 'La réparation valvulaire offre d\'excellents résultats durables, avec une récupération progressive sur quelques semaines. La valve naturelle étant conservée, la plupart des patients ne nécessitent pas d\'anticoagulation au long cours. Un suivi échocardiographique régulier est organisé.',
    risques: [
      'Risques opératoires comparables à ceux de la chirurgie valvulaire classique',
      'Dans de rares cas, un remplacement valvulaire peut s\'avérer nécessaire pendant l\'intervention si la réparation n\'est pas satisfaisante',
      'Suivi cardiologique régulier recommandé au long cours',
    ],
  },
  {
    slug: 'chirurgie-aorte',
    title: 'Chirurgie de l\'aorte thoracique et abdominale',
    shortTitle: 'Chirurgie de l\'aorte',
    description: 'Prise en charge chirurgicale des maladies de l\'aorte, la plus grande artère du corps, par techniques ouvertes ou endovasculaires.',
    fullDescription: `L'aorte est la plus grande artère de l'organisme : elle transporte le sang du cœur vers l'ensemble du corps. Ses maladies, principalement les anévrismes (dilatations) et les dissections (déchirures de la paroi), nécessitent une prise en charge spécialisée, parfois en urgence.

La chirurgie de l'aorte consiste à remplacer le segment malade par une prothèse vasculaire, ou à le renforcer de l'intérieur par une endoprothèse selon la localisation et l'anatomie. Les segments concernés peuvent être l'aorte ascendante proche du cœur, la crosse aortique, l'aorte thoracique descendante ou l'aorte abdominale.

Ces interventions font partie des plus spécialisées de la chirurgie cardiovasculaire et exigent une équipe entraînée, un plateau technique complet et une réanimation performante. Les techniques modernes, notamment hybrides, associant chirurgie ouverte et endovasculaire, permettent d'adapter le traitement à chaque situation.

La Clinique Pasteur Tunis dispose de l'ensemble des moyens nécessaires à cette chirurgie de haut niveau : bloc opératoire dédié avec circulation extra-corporelle, salle de cathétérisme pour les procédures endovasculaires et réanimation spécialisée pour la surveillance post-opératoire.`,
    image: '/images/cardiovasculaire.webp',
    indications: [
      'Anévrisme de l\'aorte ascendante, de la crosse ou de l\'aorte descendante',
      'Anévrisme de l\'aorte abdominale ayant atteint le seuil de traitement',
      'Dissection aortique',
      'Maladies du tissu élastique fragilisant l\'aorte',
      'Surveillance d\'une dilatation aortique évolutive',
    ],
    preparation: [
      'Angioscanner de l\'ensemble de l\'aorte pour planifier l\'intervention',
      'Échocardiographie et bilan cardiologique complet',
      'Bilan sanguin, évaluation rénale et respiratoire',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie générale avec monitoring avancé',
      'Abord chirurgical ou ponction vasculaire selon la technique retenue',
      'Remplacement du segment aortique malade par une prothèse, ou déploiement d\'une endoprothèse',
      'Contrôles per-opératoires de la circulation dans tous les territoires',
      'Fermeture et transfert en réanimation spécialisée',
    ],
    duree: '3 à 6 heures selon le segment traité et la technique',
    resultats: 'La surveillance initiale se déroule en réanimation pendant 24 à 72 heures. La convalescence s\'étend sur plusieurs semaines avec une reprise très progressive des activités. Un suivi d\'imagerie régulier est indispensable pour surveiller la prothèse et le reste de l\'aorte.',
    risques: [
      'Chirurgie majeure dont les risques sont maîtrisés par une équipe expérimentée et un plateau technique complet',
      'Surveillance rénale et neurologique rapprochée en post-opératoire',
      'Suivi d\'imagerie au long cours indispensable',
    ],
  },
  {
    slug: 'traitement-anevrismes',
    title: 'Traitement des anévrismes',
    shortTitle: 'Anévrismes',
    description: 'Traitement chirurgical ou endovasculaire des dilatations anormales des artères, avant qu\'elles ne se compliquent.',
    fullDescription: `Un anévrisme est une dilatation localisée et permanente d'une artère, dont la paroi s'affaiblit progressivement. Souvent silencieux pendant des années, il est fréquemment découvert lors d'un examen d'imagerie. Le traiter à temps, avant toute complication, est l'objectif essentiel de la prise en charge.

Deux grandes approches existent. La chirurgie ouverte consiste à remplacer le segment artériel dilaté par une prothèse vasculaire : c'est une technique éprouvée et durable. Le traitement endovasculaire consiste à exclure l'anévrisme de la circulation en déployant une endoprothèse à l'intérieur de l'artère, par simple ponction au pli de l'aine.

Le choix entre ces deux techniques dépend de la localisation de l'anévrisme (aorte abdominale, aorte thoracique, artères périphériques), de sa forme, de l'âge et de l'état général du patient. Cette décision est prise de manière collégiale, après un bilan d'imagerie complet.

À la Clinique Pasteur Tunis, l'équipe cardiovasculaire maîtrise les deux approches, ce qui permet de proposer à chaque patient la solution la plus adaptée à sa situation, avec un suivi organisé au long cours.`,
    image: '/images/surgery-modern.webp',
    indications: [
      'Anévrisme de l\'aorte abdominale ayant atteint une taille justifiant le traitement',
      'Anévrisme de l\'aorte thoracique évolutif',
      'Anévrismes des artères périphériques (poplitée, fémorale)',
      'Anévrisme symptomatique ou de croissance rapide',
      'Découverte fortuite nécessitant une évaluation spécialisée',
    ],
    preparation: [
      'Angioscanner pour mesurer précisément l\'anévrisme et planifier le geste',
      'Bilan cardiologique et respiratoire',
      'Bilan sanguin et évaluation de la fonction rénale',
      'Consultation d\'anesthésie',
      'Être à jeun 6 heures avant l\'intervention',
    ],
    deroulement: [
      'Anesthésie adaptée à la technique choisie',
      'Traitement chirurgical (remplacement prothétique) ou endovasculaire (endoprothèse)',
      'Contrôle per-opératoire de l\'exclusion complète de l\'anévrisme',
      'Fermeture et surveillance post-opératoire adaptée',
    ],
    duree: '2 à 5 heures selon la technique et la localisation',
    resultats: 'Après traitement endovasculaire, l\'hospitalisation est courte et la récupération rapide. Après chirurgie ouverte, la convalescence est plus progressive mais le résultat particulièrement durable. Dans les deux cas, un suivi d\'imagerie régulier est programmé.',
    risques: [
      'Risques opératoires évalués au cas par cas et discutés avec le patient avant l\'intervention',
      'Après endoprothèse, nécessité d\'une surveillance d\'imagerie régulière',
      'L\'arrêt du tabac et le contrôle de la tension artérielle sont essentiels pour protéger les artères',
    ],
  },
  {
    slug: 'chirurgie-cardiopathies-congenitales',
    title: 'Chirurgie des cardiopathies congénitales',
    shortTitle: 'Cardiopathies congénitales',
    description: 'Correction chirurgicale des malformations cardiaques présentes dès la naissance, chez l\'enfant comme chez l\'adulte.',
    fullDescription: `Les cardiopathies congénitales sont des malformations du cœur présentes dès la naissance : communication anormale entre les cavités cardiaques, anomalie des valves, malposition des gros vaisseaux. Grâce aux progrès de la chirurgie cardiaque, la grande majorité de ces malformations peuvent aujourd'hui être corrigées avec d'excellents résultats.

La prise en charge de ces pathologies exige une expertise particulière : le diagnostic précis repose sur une imagerie cardiaque approfondie, et le geste chirurgical doit être adapté à l'anatomie propre de chaque patient. Certaines corrections sont réalisées dans la petite enfance, d'autres peuvent être programmées plus tard, y compris à l'âge adulte lorsque la malformation a été découverte tardivement.

L'intervention est généralement réalisée sous circulation extra-corporelle, avec des techniques de protection du cœur spécifiquement adaptées. Le suivi au long cours par un cardiologue est un élément essentiel de la prise en charge.

La Clinique Pasteur Tunis prend en charge les cardiopathies congénitales de l'enfant et de l'adulte, grâce à une équipe chirurgicale expérimentée dans ce domaine exigeant et à une réanimation post-chirurgie cardiaque parfaitement équipée pour accueillir ces patients.`,
    image: '/images/pediatrique.webp',
    indications: [
      'Communication interauriculaire (CIA) ou interventriculaire (CIV)',
      'Persistance du canal artériel',
      'Tétralogie de Fallot et malformations complexes',
      'Anomalies congénitales des valves cardiaques',
      'Cardiopathies congénitales découvertes à l\'âge adulte',
    ],
    preparation: [
      'Bilan cardiologique complet avec échocardiographie détaillée',
      'Imagerie complémentaire (scanner ou IRM cardiaque) si nécessaire',
      'Bilan pré-opératoire adapté à l\'âge du patient',
      'Consultation d\'anesthésie spécialisée',
      'Être à jeun selon les consignes adaptées à l\'âge',
    ],
    deroulement: [
      'Anesthésie générale adaptée à l\'âge et au poids du patient',
      'Mise en place de la circulation extra-corporelle',
      'Correction de la malformation selon la technique planifiée',
      'Contrôle échocardiographique per-opératoire du résultat',
      'Transfert en réanimation pour surveillance rapprochée',
    ],
    duree: '3 à 6 heures selon la complexité de la malformation',
    resultats: 'La correction d\'une cardiopathie congénitale transforme le plus souvent la vie du patient : meilleure tolérance à l\'effort, croissance harmonieuse chez l\'enfant, vie quotidienne normale. Un suivi cardiologique régulier est maintenu tout au long de la vie.',
    risques: [
      'Risques opératoires dépendant de la complexité de la malformation, expliqués en détail aux familles',
      'Surveillance prolongée en réanimation pour les corrections complexes',
      'Nécessité d\'un suivi cardiologique au long cours',
    ],
  },
  {
    slug: 'pose-pacemaker-defibrillateur',
    title: 'Pose de pacemaker et défibrillateur',
    shortTitle: 'Pacemaker et défibrillateur',
    description: 'Implantation de dispositifs cardiaques qui régulent le rythme du cœur ou le protègent contre les troubles du rythme graves.',
    fullDescription: `Le pacemaker (stimulateur cardiaque) et le défibrillateur automatique implantable sont de petits dispositifs électroniques placés sous la peau, généralement sous la clavicule, et reliés au cœur par des sondes. Le pacemaker stimule le cœur lorsque celui-ci bat trop lentement, tandis que le défibrillateur surveille en permanence le rythme cardiaque et délivre un traitement automatique en cas de trouble du rythme grave.

L'implantation est une intervention courte et bien codifiée, réalisée le plus souvent sous anesthésie locale complétée d'une sédation légère. Les sondes sont introduites par une veine et positionnées dans le cœur sous contrôle radiologique, puis connectées au boîtier glissé sous la peau.

Ces dispositifs modernes sont discrets, fiables et dotés d'une grande autonomie. Ils font l'objet de contrôles réguliers en consultation, permettant de vérifier leur fonctionnement et d'ajuster leurs réglages sans nouvelle intervention.

À la Clinique Pasteur Tunis, les implantations de pacemakers et de défibrillateurs sont réalisées par une équipe spécialisée en rythmologie, dans des conditions d'asepsie rigoureuses, avec un programme de suivi personnalisé après l'implantation.`,
    image: '/images/cardio-ecg.webp',
    indications: [
      'Ralentissement important du rythme cardiaque (bradycardie symptomatique)',
      'Blocs de la conduction électrique du cœur',
      'Syncopes d\'origine cardiaque documentées',
      'Prévention des troubles du rythme graves chez les patients à risque',
      'Insuffisance cardiaque nécessitant une protection rythmique',
    ],
    preparation: [
      'Bilan cardiologique avec ECG et échocardiographie',
      'Bilan sanguin incluant la coagulation',
      'Adaptation des anticoagulants selon les consignes du médecin',
      'Être à jeun 6 heures avant l\'intervention',
      'Douche antiseptique la veille et le matin de l\'intervention',
    ],
    deroulement: [
      'Installation en salle dédiée et anesthésie locale avec sédation',
      'Petite incision sous la clavicule',
      'Introduction des sondes par voie veineuse sous contrôle radiologique',
      'Positionnement des sondes dans le cœur et tests de fonctionnement',
      'Connexion au boîtier et fermeture de la loge sous-cutanée',
      'Contrôle final du dispositif avant le retour en chambre',
    ],
    duree: '1 à 2 heures',
    resultats: 'Le dispositif est opérationnel immédiatement. Après une courte hospitalisation de 24 à 48 heures, le patient reprend rapidement ses activités, en évitant simplement les mouvements amples du bras du côté implanté pendant quelques semaines. Des contrôles réguliers du dispositif sont programmés en consultation.',
    risques: [
      'Petit hématome au niveau de la loge, généralement sans conséquence',
      'Risque infectieux très limité grâce aux protocoles d\'asepsie stricts',
      'Déplacement de sonde rare, corrigé si nécessaire par un geste simple',
    ],
  },
];
