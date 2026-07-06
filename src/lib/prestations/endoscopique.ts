export const prestationsEndoscopique = [
  {
    slug: 'endoscopie-digestive-haute-basse',
    title: 'Endoscopie digestive haute et basse',
    shortTitle: 'Endoscopie digestive',
    description: 'Exploration visuelle du tube digestif par fibroscopie (œsophage, estomac, duodénum) et coloscopie (côlon, rectum), à visée diagnostique et thérapeutique.',
    fullDescription: `L'endoscopie digestive permet d'examiner directement l'intérieur du tube digestif à l'aide d'un endoscope souple muni d'une caméra haute définition. L'endoscopie haute (fibroscopie œso-gastro-duodénale) explore l'œsophage, l'estomac et le duodénum ; l'endoscopie basse (coloscopie) explore le rectum et l'ensemble du côlon.

Au-delà du diagnostic, ces examens permettent de réaliser dans le même temps des gestes thérapeutiques : prélèvements (biopsies), ablation de polypes, traitement de lésions qui saignent. Les biopsies éventuelles sont adressées pour analyse anatomopathologique, dont les résultats sont transmis au médecin.

Les examens se déroulent le plus souvent sous sédation ou anesthésie, pour un confort optimal du patient. À la Clinique Pasteur Tunis, les endoscopies digestives sont réalisées dans une salle d'endoscopie dédiée, équipée de colonnes vidéo haute définition, par des gastro-entérologues et chirurgiens expérimentés, en hôpital de jour dans la grande majorité des cas.`,
    image: '/images/fiches/endochir-endoscopie-digestive-haute-basse.webp',
    indications: [
      { label: 'Douleurs abdominales ou troubles digestifs persistants', explication: `Quand des douleurs ou une gêne digestive durent, regarder directement l'intérieur du tube digestif aide à en trouver la cause.` },
      { label: 'Reflux gastro-œsophagien résistant au traitement', explication: `Quand les remontées acides persistent malgré les médicaments, l'examen vérifie l'état de l'œsophage et oriente le traitement.` },
      { label: 'Saignement digestif (vomissements sanglants, sang dans les selles)', explication: `En cas de saignement digestif, l'endoscopie localise son origine et permet souvent de le traiter dans le même temps.` },
      { label: 'Anémie inexpliquée', explication: `Un manque de globules rouges sans cause évidente peut venir d'un saignement discret du tube digestif, que l'examen recherche.` },
      { label: 'Dépistage et surveillance des polypes du côlon', explication: `La coloscopie détecte et retire les polypes avant qu'ils ne puissent évoluer : c'est la meilleure prévention du cancer du côlon.` },
      { label: 'Troubles du transit récents ou persistants', explication: `Un changement durable du transit mérite d'être exploré pour en identifier la cause et se rassurer.` },
      { label: 'Surveillance après traitement d\'une lésion digestive', explication: `Après le traitement d'une lésion, des contrôles réguliers vérifient la bonne cicatrisation et l'absence de récidive.` },
    ],
    preparation: [
      'Consultation préalable avec le médecin et consultation d\'anesthésie si sédation prévue',
      'Jeûne de 6 heures avant l\'examen pour l\'endoscopie haute',
      'Préparation colique (régime sans résidus et solution de lavage) pour la coloscopie, selon l\'ordonnance remise',
      'Signaler les traitements en cours, notamment anticoagulants et antiagrégants',
      'Prévoir un accompagnant pour le retour à domicile en cas de sédation',
    ],
    deroulement: [
      'Accueil en hôpital de jour et installation en salle d\'endoscopie',
      'Sédation ou anesthésie adaptée pour le confort de l\'examen',
      'Introduction de l\'endoscope par la bouche (endoscopie haute) ou par l\'anus (coloscopie)',
      'Exploration minutieuse de la muqueuse digestive',
      'Réalisation de biopsies ou de gestes thérapeutiques si nécessaire',
      'Surveillance en salle de réveil puis sortie accompagnée',
    ],
    duree: '15 à 45 minutes selon l\'examen',
    resultats: 'Un compte rendu détaillé est remis à l\'issue de l\'examen. Les résultats des biopsies éventuelles sont disponibles après analyse anatomopathologique et transmis au médecin traitant. La reprise des activités est possible dès le lendemain dans la plupart des cas.',
    risques: [
      'Ballonnements ou gêne abdominale transitoire après l\'examen',
      'Irritation de la gorge après endoscopie haute, disparaissant en quelques heures',
      'Saignement ou perforation, complications rares faisant l\'objet d\'une surveillance systématique',
    ],
  },
  {
    slug: 'cholecystectomie-endoscopique',
    title: 'Cholécystectomie par voie endoscopique',
    shortTitle: 'Cholécystectomie',
    description: 'Ablation de la vésicule biliaire par voie mini-invasive, traitement de référence des calculs vésiculaires symptomatiques.',
    fullDescription: `La cholécystectomie est l'ablation de la vésicule biliaire, le plus souvent rendue nécessaire par des calculs responsables de douleurs (coliques hépatiques) ou de complications comme l'inflammation de la vésicule. Réalisée par voie mini-invasive, elle est devenue l'une des interventions digestives les plus courantes et les mieux maîtrisées.

L'intervention se déroule à travers de petites incisions par lesquelles sont introduits une caméra et des instruments fins. La vésicule est détachée du foie puis retirée, sans conséquence sur la digestion : la bile continue de s'écouler naturellement du foie vers l'intestin.

À la Clinique Pasteur Tunis, la cholécystectomie mini-invasive est réalisée dans des blocs opératoires équipés de colonnes vidéo haute définition, par des chirurgiens digestifs expérimentés. L'hospitalisation est courte, souvent limitée à une nuit, et la reprise des activités est rapide.`,
    image: '/images/fiches/endochir-cholecystectomie-endoscopique.webp',
    indications: [
      { label: 'Calculs de la vésicule biliaire responsables de douleurs (coliques hépatiques)', explication: `Quand des calculs provoquent des crises douloureuses sous les côtes droites, retirer la vésicule évite leur retour.` },
      { label: 'Cholécystite aiguë (inflammation de la vésicule)', explication: `Quand la vésicule s'enflamme, son ablation traite l'épisode et empêche qu'il ne se reproduise.` },
      { label: 'Antécédent de migration de calcul dans la voie biliaire principale', explication: `Quand un calcul a déjà quitté la vésicule pour bloquer le canal de la bile, retirer la vésicule prévient une nouvelle migration.` },
      { label: 'Complications des calculs : pancréatite d\'origine biliaire', explication: `Après une inflammation du pancréas déclenchée par un calcul, l'ablation de la vésicule protège d'une récidive.` },
      { label: 'Polypes vésiculaires nécessitant une exérèse, sur avis spécialisé', explication: `Certaines excroissances de la paroi de la vésicule justifient son ablation par précaution, après avis du spécialiste.` },
    ],
    preparation: [
      'Bilan pré-opératoire : prise de sang et échographie abdominale',
      'Consultation d\'anesthésie quelques jours avant l\'intervention',
      'Jeûne de 6 heures avant l\'intervention',
      'Signaler les traitements en cours, notamment anticoagulants',
      'Douche pré-opératoire selon les consignes remises',
    ],
    deroulement: [
      'Anesthésie générale',
      'Petites incisions abdominales pour introduire la caméra et les instruments',
      'Insufflation de gaz pour créer un espace de travail dans l\'abdomen',
      'Dissection et ablation de la vésicule biliaire',
      'Vérification soigneuse de l\'absence de saignement',
      'Fermeture des incisions et réveil en salle de surveillance',
    ],
    duree: '45 minutes à 1 heure 30',
    resultats: 'La sortie a lieu généralement le lendemain de l\'intervention. Les douleurs sont modérées et bien contrôlées par les antalgiques usuels. La reprise d\'une activité normale se fait en quelques jours, et l\'ablation de la vésicule n\'entraîne pas de régime particulier au long cours.',
    risques: [
      'Douleurs aux épaules transitoires liées au gaz utilisé pendant l\'intervention',
      'Hématome ou infection des petites incisions, rares',
      'Conversion en incision classique si les conditions locales l\'exigent, décidée dans l\'intérêt du patient',
    ],
  },
  {
    slug: 'chirurgie-colorectale-endoscopique',
    title: 'Chirurgie colorectale endoscopique',
    shortTitle: 'Chirurgie colorectale',
    description: 'Traitement mini-invasif des maladies du côlon et du rectum, pour une récupération plus rapide et des cicatrices réduites.',
    fullDescription: `La chirurgie colorectale endoscopique regroupe les interventions mini-invasives portant sur le côlon et le rectum : résection d'un segment de côlon malade, traitement des diverticules compliqués, exérèse de lésions étendues. Elle s'appuie sur des instruments fins et une caméra haute définition introduits par de petites incisions ou par les voies naturelles.

Cette approche réduit la douleur post-opératoire, raccourcit l'hospitalisation et permet une reprise plus rapide du transit et des activités, tout en offrant la même qualité de traitement que la chirurgie classique. Le choix de la technique est adapté à chaque patient après un bilan complet.

À la Clinique Pasteur Tunis, la chirurgie colorectale mini-invasive est pratiquée par des chirurgiens digestifs expérimentés, avec un plateau d'imagerie et d'endoscopie complet sur place. Le parcours du patient est organisé de la consultation au suivi post-opératoire, avec un accompagnement attentif à chaque étape.`,
    image: '/images/fiches/endochir-chirurgie-colorectale-endoscopique.webp',
    indications: [
      { label: 'Maladie diverticulaire compliquée ou récidivante', explication: `Quand de petites poches formées sur le côlon s'infectent de façon répétée, retirer le segment fragilisé met fin aux crises.` },
      { label: 'Polypes du côlon ou du rectum non résécables par simple coloscopie', explication: `Quand un polype est trop volumineux pour être enlevé lors d'une coloscopie, une résection mini-invasive est proposée.` },
      { label: 'Tumeurs colorectales relevant d\'une résection chirurgicale', explication: `Quand une tumeur est découverte, retirer le segment d'intestin concerné constitue le traitement de référence.` },
      { label: 'Certaines maladies inflammatoires de l\'intestin résistantes au traitement médical', explication: `Quand l'inflammation ne répond plus aux médicaments, la chirurgie retire la portion la plus atteinte pour soulager le patient.` },
      { label: 'Prolapsus rectal nécessitant une correction chirurgicale', explication: `Quand le rectum descend anormalement, l'intervention le repositionne et le fixe pour restaurer le confort au quotidien.` },
    ],
    preparation: [
      'Bilan complet : coloscopie, imagerie et prise de sang',
      'Consultation d\'anesthésie',
      'Préparation colique selon les consignes remises',
      'Jeûne de 6 heures avant l\'intervention',
      'Arrêt ou adaptation des anticoagulants selon l\'avis médical',
    ],
    deroulement: [
      'Anesthésie générale',
      'Introduction de la caméra et des instruments par de petites incisions',
      'Libération et résection du segment de côlon ou de rectum concerné',
      'Rétablissement de la continuité digestive par suture ou agrafage',
      'Vérification de l\'étanchéité et fermeture des incisions',
      'Surveillance post-opératoire avec reprise progressive de l\'alimentation',
    ],
    duree: '2 à 4 heures selon l\'intervention',
    resultats: 'Le transit reprend généralement en quelques jours, accompagné d\'une réalimentation progressive. L\'hospitalisation est plus courte qu\'après une chirurgie classique et les cicatrices sont discrètes. Les pièces opératoires font l\'objet d\'une analyse anatomopathologique dont les résultats orientent le suivi.',
    risques: [
      'Troubles transitoires du transit pendant la période de récupération',
      'Fistule ou lâchage de suture, complication rare faisant l\'objet d\'une surveillance attentive',
      'Infection de paroi, peu fréquente avec l\'abord mini-invasif',
      'Conversion en chirurgie ouverte si nécessaire, dans l\'intérêt du patient',
    ],
  },
  {
    slug: 'cpre',
    title: 'CPRE (Cholangio-Pancréatographie Rétrograde Endoscopique)',
    shortTitle: 'CPRE',
    description: 'Examen endoscopique spécialisé permettant de traiter les obstacles des voies biliaires et pancréatiques sans incision chirurgicale.',
    fullDescription: `La CPRE est une technique endoscopique avancée qui permet d'accéder aux voies biliaires et au canal pancréatique par les voies naturelles. Un endoscope spécifique est introduit par la bouche jusqu'au duodénum, où s'abouchent ces canaux ; un produit de contraste et un contrôle radiologique guident ensuite les gestes thérapeutiques.

Son intérêt majeur est thérapeutique : extraction de calculs de la voie biliaire principale, levée d'un obstacle responsable de jaunisse, mise en place de prothèses pour rétablir l'écoulement de la bile. Elle évite ainsi, dans de nombreuses situations, une intervention chirurgicale plus lourde.

La CPRE se déroule sous anesthésie générale, dans une salle équipée d'endoscopie et de radiologie. À la Clinique Pasteur Tunis, cet examen est réalisé par des opérateurs entraînés à l'endoscopie interventionnelle, avec une surveillance post-procédure systématique en hospitalisation.`,
    image: '/images/fiches/endochir-cpre.webp',
    indications: [
      { label: 'Calcul de la voie biliaire principale', explication: `Quand un calcul bloque le canal qui conduit la bile vers l'intestin, la CPRE permet de l'extraire par les voies naturelles, sans incision.` },
      { label: 'Jaunisse (ictère) par obstacle sur les voies biliaires', explication: `Quand la bile ne s'écoule plus et que la peau jaunit, cet examen lève l'obstacle et fait régresser la jaunisse.` },
      { label: 'Angiocholite (infection des voies biliaires) nécessitant un drainage', explication: `Quand la bile bloquée s'infecte, il faut la drainer rapidement : la CPRE rétablit son écoulement.` },
      { label: 'Rétrécissement des voies biliaires ou pancréatiques à traiter', explication: `Un canal rétréci peut être élargi ou maintenu ouvert par une petite prothèse posée au cours de l'examen.` },
      { label: 'Fuite biliaire après chirurgie nécessitant la pose d\'une prothèse', explication: `Après certaines opérations, une fuite de bile peut survenir ; une prothèse posée par endoscopie aide à la cicatrisation.` },
      { label: 'Certaines pancréatites liées à un obstacle canalaire', explication: `Quand une inflammation du pancréas est due à un blocage de ses canaux, lever cet obstacle contribue à la guérison.` },
    ],
    preparation: [
      'Bilan pré-procédure : prise de sang et imagerie des voies biliaires',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant l\'examen',
      'Adaptation des anticoagulants et antiagrégants selon l\'avis médical',
      'Signaler toute allergie, notamment aux produits de contraste',
    ],
    deroulement: [
      'Anesthésie générale',
      'Introduction de l\'endoscope par la bouche jusqu\'au duodénum',
      'Repérage de l\'abouchement des voies biliaires et pancréatiques',
      'Injection de produit de contraste et contrôle radiologique',
      'Geste thérapeutique : extraction de calcul, dilatation ou pose de prothèse',
      'Surveillance en salle de réveil puis en hospitalisation',
    ],
    duree: '30 minutes à 1 heure 30',
    resultats: 'La CPRE permet le plus souvent de lever l\'obstacle en une seule séance : les douleurs et la jaunisse régressent progressivement. Une surveillance de courte durée en hospitalisation est habituelle. Le compte rendu et la suite de la prise en charge sont expliqués au patient avant la sortie.',
    risques: [
      'Réaction pancréatique transitoire (pancréatite), surveillée systématiquement après le geste',
      'Saignement au niveau de la papille, généralement contrôlé par voie endoscopique',
      'Infection des voies biliaires, prévenue par les mesures adaptées',
      'Perforation, complication rare prise en charge sans délai',
    ],
  },
  {
    slug: 'sphincterotomie-endoscopique',
    title: 'Sphinctérotomie endoscopique',
    shortTitle: 'Sphinctérotomie',
    description: 'Ouverture endoscopique du sphincter d\'Oddi pour libérer les voies biliaires, le plus souvent réalisée au cours d\'une CPRE.',
    fullDescription: `La sphinctérotomie endoscopique consiste à sectionner de façon contrôlée le sphincter d'Oddi, le petit muscle qui commande l'abouchement des voies biliaires et pancréatiques dans le duodénum. Ce geste élargit l'orifice et permet l'extraction de calculs ou le passage d'instruments et de prothèses.

Elle est le plus souvent réalisée au cours d'une CPRE, sous anesthésie générale, à l'aide d'un instrument fin passé dans l'endoscope. C'est un geste de référence, pratiqué de longue date, qui évite dans la plupart des cas une chirurgie des voies biliaires.

À la Clinique Pasteur Tunis, la sphinctérotomie endoscopique est réalisée par des endoscopistes entraînés, avec un contrôle radiologique pendant le geste et une surveillance systématique en hospitalisation après la procédure.`,
    image: '/images/fiches/endochir-sphincterotomie-endoscopique.webp',
    indications: [
      { label: 'Extraction de calculs de la voie biliaire principale', explication: `Élargir le petit muscle qui ferme l'orifice des voies biliaires permet de retirer les calculs coincés, sans opération chirurgicale.` },
      { label: 'Angiocholite nécessitant un drainage biliaire', explication: `Quand la bile bloquée s'infecte, ouvrir le sphincter rétablit son écoulement et permet de traiter l'infection.` },
      { label: 'Préparation à la mise en place d\'une prothèse biliaire ou pancréatique', explication: `L'ouverture du sphincter facilite le passage et le positionnement des prothèses destinées à maintenir les canaux ouverts.` },
      { label: 'Dysfonctionnement du sphincter d\'Oddi documenté', explication: `Quand ce petit muscle se contracte anormalement et gêne l'écoulement de la bile, sa section contrôlée soulage les douleurs.` },
      { label: 'Fuite biliaire post-opératoire à traiter par voie endoscopique', explication: `Après certaines chirurgies, réduire la pression dans les voies biliaires en ouvrant le sphincter aide la fuite à se refermer.` },
    ],
    preparation: [
      'Bilan sanguin avec étude de la coagulation',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant la procédure',
      'Arrêt ou adaptation des anticoagulants selon l\'avis médical',
    ],
    deroulement: [
      'Anesthésie générale',
      'Réalisation dans le cadre d\'une CPRE : endoscope positionné face à la papille',
      'Section contrôlée du sphincter à l\'aide d\'un sphinctérotome',
      'Extraction des calculs au ballonnet ou à la sonde panier si nécessaire',
      'Contrôle radiologique de la vacuité de la voie biliaire',
      'Surveillance post-procédure en hospitalisation',
    ],
    duree: '30 minutes à 1 heure, intégré au temps de la CPRE',
    resultats: 'Le geste permet dans la grande majorité des cas de libérer la voie biliaire en une séance. La reprise alimentaire est progressive après une courte surveillance. L\'orifice élargi facilite également les traitements endoscopiques ultérieurs si nécessaire.',
    risques: [
      'Saignement de la zone de section, le plus souvent contrôlé pendant le geste',
      'Réaction pancréatique transitoire, surveillée systématiquement',
      'Infection biliaire, prévenue par les mesures adaptées',
    ],
  },
  {
    slug: 'polypectomie',
    title: 'Polypectomie',
    shortTitle: 'Polypectomie',
    description: 'Ablation de polypes digestifs au cours d\'une endoscopie, geste essentiel de prévention des cancers colorectaux.',
    fullDescription: `Les polypes sont des excroissances qui se développent sur la paroi interne du tube digestif, le plus souvent dans le côlon. La plupart sont bénins, mais certains peuvent évoluer avec le temps : leur ablation, appelée polypectomie, constitue la meilleure prévention du cancer colorectal.

La polypectomie est réalisée au cours d'une coloscopie ou d'une endoscopie haute, sans aucune incision : le polype est saisi à l'aide d'une anse passée dans l'endoscope, puis sectionné à sa base. Chaque polype retiré est adressé pour analyse anatomopathologique, qui précise sa nature et guide le rythme de surveillance ultérieur.

À la Clinique Pasteur Tunis, la polypectomie est pratiquée en hôpital de jour, sous sédation ou anesthésie, dans une salle d'endoscopie équipée de matériel de résection moderne. Le patient repart le jour même avec son compte rendu et les consignes de suivi.`,
    image: '/images/fiches/endochir-polypectomie.webp',
    indications: [
      { label: 'Polype découvert au cours d\'une coloscopie de dépistage', explication: `Un polype repéré pendant l'examen est le plus souvent retiré dans le même temps, sans nouvelle intervention.` },
      { label: 'Polypes du côlon ou du rectum à retirer par prévention', explication: `Retirer les polypes avant qu'ils n'évoluent est la meilleure protection contre le cancer colorectal.` },
      { label: 'Polypes gastriques ou duodénaux nécessitant une exérèse', explication: `Des polypes de l'estomac ou du début de l'intestin peuvent aussi être retirés par la bouche, sans aucune incision.` },
      { label: 'Surveillance de patients ayant des antécédents personnels ou familiaux de polypes', explication: `Quand on a déjà eu des polypes ou que des proches en ont eu, des coloscopies régulières permettent de retirer tôt toute nouvelle lésion.` },
    ],
    preparation: [
      'Préparation colique soigneuse selon l\'ordonnance remise (pour les polypes du côlon)',
      'Jeûne de 6 heures avant l\'examen',
      'Consultation d\'anesthésie si sédation prévue',
      'Adaptation des anticoagulants et antiagrégants selon l\'avis médical',
      'Prévoir un accompagnant pour le retour à domicile',
    ],
    deroulement: [
      'Sédation ou anesthésie pour le confort de l\'examen',
      'Exploration endoscopique complète du segment digestif concerné',
      'Repérage du ou des polypes',
      'Section du polype à l\'anse, avec coagulation de la base si nécessaire',
      'Récupération du polype pour analyse anatomopathologique',
      'Surveillance brève en salle de réveil avant la sortie',
    ],
    duree: '20 à 45 minutes',
    resultats: 'L\'ablation des polypes est le plus souvent complète en une séance. Le résultat de l\'analyse anatomopathologique, transmis au médecin, détermine l\'intervalle de la prochaine coloscopie de surveillance. La reprise des activités est possible dès le lendemain.',
    risques: [
      'Petit saignement au niveau de la zone de résection, généralement contrôlé pendant le geste',
      'Saignement retardé dans les jours suivants, rare, justifiant de consulter en cas de besoin',
      'Perforation, complication rare faisant l\'objet d\'une prise en charge immédiate',
    ],
  },
  {
    slug: 'mucosectomie',
    title: 'Mucosectomie',
    shortTitle: 'Mucosectomie',
    description: 'Résection endoscopique de lésions superficielles étendues de la muqueuse digestive, alternative mini-invasive à la chirurgie.',
    fullDescription: `La mucosectomie est une technique endoscopique avancée qui permet de retirer des lésions superficielles de la paroi digestive trop étendues ou trop planes pour une simple polypectomie. La lésion est d'abord soulevée par une injection sous-muqueuse, puis réséquée à l'anse, en un ou plusieurs fragments.

Cette technique offre une alternative mini-invasive à la chirurgie pour de nombreuses lésions précancéreuses ou superficielles de l'œsophage, de l'estomac, du duodénum, du côlon ou du rectum. L'ensemble des fragments réséqués est adressé pour analyse anatomopathologique, qui confirme le caractère complet de la résection et guide la surveillance.

À la Clinique Pasteur Tunis, la mucosectomie est réalisée par des endoscopistes entraînés aux techniques de résection, dans une salle d'endoscopie équipée de matériel haute définition. Le geste se déroule sous sédation ou anesthésie, le plus souvent en hospitalisation de jour ou de courte durée.`,
    image: '/images/fiches/endochir-mucosectomie.webp',
    indications: [
      { label: 'Polypes plans ou étendus du côlon et du rectum', explication: `Certains polypes trop plats ou trop larges pour une ablation simple sont d'abord soulevés puis retirés par cette technique dédiée.` },
      { label: 'Lésions superficielles de l\'œsophage ou de l\'estomac', explication: `Des anomalies limitées à la surface de la paroi digestive peuvent être enlevées par les voies naturelles, sans chirurgie.` },
      { label: 'Lésions précancéreuses de la muqueuse digestive accessibles par endoscopie', explication: `Retirer une lésion avant qu'elle ne se transforme évite bien souvent une opération plus lourde par la suite.` },
      { label: 'Lésions duodénales superficielles sélectionnées', explication: `Certaines lésions du début de l'intestin, bien délimitées, peuvent être réséquées par endoscopie après évaluation spécialisée.` },
      { label: 'Alternative à la chirurgie pour des lésions bien limitées, après avis spécialisé', explication: `Quand la lésion reste superficielle, cette technique évite une intervention chirurgicale tout en offrant un traitement complet.` },
    ],
    preparation: [
      'Endoscopie diagnostique préalable avec caractérisation précise de la lésion',
      'Bilan sanguin avec étude de la coagulation',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant le geste et préparation colique si nécessaire',
      'Arrêt ou adaptation des anticoagulants selon l\'avis médical',
    ],
    deroulement: [
      'Sédation ou anesthésie générale selon la localisation',
      'Repérage précis de la lésion et délimitation de ses contours',
      'Injection sous-muqueuse pour soulever la lésion',
      'Résection à l\'anse, en un ou plusieurs fragments',
      'Contrôle soigneux de la zone de résection et coagulation préventive',
      'Surveillance post-geste en salle de réveil puis en hospitalisation courte si nécessaire',
    ],
    duree: '30 minutes à 1 heure 30 selon la taille de la lésion',
    resultats: 'La mucosectomie permet le plus souvent une résection complète de la lésion sans chirurgie. L\'analyse anatomopathologique des fragments confirme la qualité de la résection et détermine le calendrier des endoscopies de contrôle. La reprise alimentaire est progressive dès le jour même ou le lendemain.',
    risques: [
      'Saignement de la zone de résection, le plus souvent contrôlé par voie endoscopique',
      'Perforation, rare, prise en charge immédiatement',
      'Rétrécissement cicatriciel pour les résections étendues de l\'œsophage, accessible à une dilatation',
    ],
  },
  {
    slug: 'dilatation-endoscopique',
    title: 'Dilatation endoscopique',
    shortTitle: 'Dilatation',
    description: 'Élargissement par voie endoscopique des rétrécissements du tube digestif, pour restaurer un passage alimentaire ou un transit normal.',
    fullDescription: `Certaines affections peuvent entraîner un rétrécissement (sténose) du tube digestif : cicatrices après inflammation ou chirurgie, maladies inflammatoires, troubles moteurs de l'œsophage comme l'achalasie. Ces rétrécissements gênent le passage des aliments ou le transit et peuvent être traités par dilatation endoscopique, sans incision.

Le geste consiste à élargir progressivement la zone rétrécie à l'aide de ballonnets gonflables ou de bougies de calibre croissant, introduits sous contrôle de la vue à travers l'endoscope. Plusieurs séances espacées sont parfois nécessaires pour obtenir un résultat stable et durable.

À la Clinique Pasteur Tunis, les dilatations endoscopiques sont réalisées sous sédation ou anesthésie, en hôpital de jour dans la plupart des cas, par des endoscopistes expérimentés. Le patient est surveillé après le geste et repart avec des consignes alimentaires simples.`,
    image: '/images/fiches/endochir-dilatation-endoscopique.webp',
    indications: [
      { label: 'Sténose de l\'œsophage gênant la déglutition', explication: `Quand l'œsophage se rétrécit et que les aliments passent mal, l'élargir au ballonnet permet de retrouver une alimentation normale.` },
      { label: 'Rétrécissement cicatriciel après chirurgie digestive', explication: `Une cicatrice interne peut rétrécir le tube digestif après une opération ; la dilatation redonne un passage confortable.` },
      { label: 'Sténoses liées aux maladies inflammatoires de l\'intestin', explication: `L'inflammation chronique peut rétrécir l'intestin ; la dilatation permet parfois d'éviter une nouvelle chirurgie.` },
      { label: 'Achalasie et certains troubles moteurs de l\'œsophage', explication: `Quand le bas de l'œsophage ne se relâche pas correctement, la dilatation facilite le passage des aliments vers l'estomac.` },
      { label: 'Sténose après traitement endoscopique ou radiothérapie', explication: `Certains traitements peuvent laisser un rétrécissement cicatriciel ; des séances de dilatation restaurent progressivement le calibre normal.` },
    ],
    preparation: [
      'Endoscopie ou imagerie préalable pour préciser le siège et la nature du rétrécissement',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant le geste',
      'Adaptation des anticoagulants selon l\'avis médical',
    ],
    deroulement: [
      'Sédation ou anesthésie générale selon la localisation',
      'Introduction de l\'endoscope jusqu\'à la zone rétrécie',
      'Franchissement prudent de la sténose, parfois guidé par un fil souple',
      'Dilatation progressive au ballonnet ou à la bougie',
      'Contrôle visuel du résultat en fin de geste',
      'Surveillance en salle de réveil avant la sortie',
    ],
    duree: '20 à 40 minutes',
    resultats: 'L\'amélioration du passage alimentaire ou du transit est souvent ressentie rapidement. La réalimentation est progressive, en commençant par des textures adaptées. Selon la nature de la sténose, des séances complémentaires peuvent être programmées pour consolider le résultat.',
    risques: [
      'Douleur ou gêne transitoire après le geste',
      'Petit saignement local, le plus souvent sans conséquence',
      'Perforation, complication rare justifiant la surveillance systématique après la dilatation',
      'Récidive du rétrécissement nécessitant de nouvelles séances',
    ],
  },
  {
    slug: 'protheses-digestives',
    title: 'Pose de prothèses digestives',
    shortTitle: 'Prothèses digestives',
    description: 'Mise en place par voie endoscopique de prothèses pour rétablir le passage dans le tube digestif ou les voies biliaires, sans chirurgie.',
    fullDescription: `La pose de prothèse digestive consiste à installer, par voie endoscopique, un petit tube expansible (stent) au niveau d'un rétrécissement de l'œsophage, de l'estomac, du duodénum, du côlon ou des voies biliaires. Une fois déployée, la prothèse maintient le conduit ouvert et rétablit le passage des aliments, du transit ou de la bile.

Ce geste, réalisé sans aucune incision, améliore rapidement le confort du patient : reprise de l'alimentation, disparition d'une jaunisse, levée d'une occlusion. Il peut constituer un traitement durable ou une étape avant une intervention chirurgicale, selon la situation de chaque patient.

À la Clinique Pasteur Tunis, la pose de prothèses digestives et biliaires est réalisée sous anesthésie, avec contrôle endoscopique et radiologique, par une équipe entraînée à l'endoscopie interventionnelle. Une surveillance en hospitalisation courte suit habituellement le geste.`,
    image: '/images/fiches/endochir-protheses-digestives.webp',
    indications: [
      { label: 'Rétrécissement de l\'œsophage gênant l\'alimentation', explication: `Quand l'œsophage est trop rétréci pour laisser passer les aliments, une prothèse le maintient ouvert et permet de se réalimenter.` },
      { label: 'Obstacle duodénal ou gastrique à franchir', explication: `Quand l'estomac ou le début de l'intestin est bloqué, une prothèse rétablit le passage des aliments sans chirurgie.` },
      { label: 'Occlusion colique nécessitant une désobstruction', explication: `Quand le côlon est obstrué, une prothèse posée par les voies naturelles lève le blocage et rétablit le transit.` },
      { label: 'Obstacle des voies biliaires avec jaunisse', explication: `Quand la bile ne s'écoule plus, une petite prothèse rouvre le canal et la jaunisse régresse en quelques jours.` },
      { label: 'Fuite ou fistule digestive à couvrir temporairement', explication: `Une prothèse peut recouvrir temporairement une zone qui fuit, le temps que la paroi cicatrise.` },
    ],
    preparation: [
      'Bilan endoscopique et imagerie pour préciser le siège et l\'étendue du rétrécissement',
      'Consultation d\'anesthésie',
      'Jeûne de 6 heures avant le geste',
      'Adaptation des anticoagulants selon l\'avis médical',
      'Information sur les consignes alimentaires à suivre après la pose',
    ],
    deroulement: [
      'Anesthésie générale ou sédation profonde',
      'Repérage endoscopique et radiologique de la zone rétrécie',
      'Franchissement de l\'obstacle à l\'aide d\'un fil guide',
      'Déploiement progressif de la prothèse sous double contrôle',
      'Vérification du bon positionnement et de la perméabilité',
      'Surveillance post-geste en hospitalisation courte',
    ],
    duree: '30 minutes à 1 heure',
    resultats: 'Le bénéfice est généralement rapide : reprise de l\'alimentation, amélioration du transit ou régression de la jaunisse en quelques jours. Des consignes alimentaires adaptées sont remises pour préserver la perméabilité de la prothèse, et un suivi régulier est organisé.',
    risques: [
      'Douleur ou gêne transitoire après la pose',
      'Migration de la prothèse nécessitant un repositionnement',
      'Obstruction secondaire de la prothèse, accessible à un traitement endoscopique',
      'Perforation, complication rare prise en charge sans délai',
    ],
  },
];
