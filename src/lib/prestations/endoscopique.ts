export const prestationsEndoscopique = [
  {
    slug: 'endoscopie-digestive-haute-basse',
    title: 'Endoscopie digestive haute et basse',
    shortTitle: 'Endoscopie digestive',
    description: 'Exploration visuelle du tube digestif par fibroscopie (œsophage, estomac, duodénum) et coloscopie (côlon, rectum), à visée diagnostique et thérapeutique.',
    fullDescription: `L'endoscopie digestive permet d'examiner directement l'intérieur du tube digestif à l'aide d'un endoscope souple muni d'une caméra haute définition. L'endoscopie haute (fibroscopie œso-gastro-duodénale) explore l'œsophage, l'estomac et le duodénum ; l'endoscopie basse (coloscopie) explore le rectum et l'ensemble du côlon.

Au-delà du diagnostic, ces examens permettent de réaliser dans le même temps des gestes thérapeutiques : prélèvements (biopsies), ablation de polypes, traitement de lésions qui saignent. Les biopsies éventuelles sont adressées pour analyse anatomopathologique, dont les résultats sont transmis au médecin.

Les examens se déroulent le plus souvent sous sédation ou anesthésie, pour un confort optimal du patient. À la Clinique Pasteur Tunis, les endoscopies digestives sont réalisées dans une salle d'endoscopie dédiée, équipée de colonnes vidéo haute définition, par des gastro-entérologues et chirurgiens expérimentés, en hôpital de jour dans la grande majorité des cas.`,
    image: '/images/endoscopie.webp',
    indications: [
      'Douleurs abdominales ou troubles digestifs persistants',
      'Reflux gastro-œsophagien résistant au traitement',
      'Saignement digestif (vomissements sanglants, sang dans les selles)',
      'Anémie inexpliquée',
      'Dépistage et surveillance des polypes du côlon',
      'Troubles du transit récents ou persistants',
      'Surveillance après traitement d\'une lésion digestive',
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
    image: '/images/bloc-hd.webp',
    indications: [
      'Calculs de la vésicule biliaire responsables de douleurs (coliques hépatiques)',
      'Cholécystite aiguë (inflammation de la vésicule)',
      'Antécédent de migration de calcul dans la voie biliaire principale',
      'Complications des calculs : pancréatite d\'origine biliaire',
      'Polypes vésiculaires nécessitant une exérèse, sur avis spécialisé',
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
    image: '/images/endoscopie-salle.webp',
    indications: [
      'Maladie diverticulaire compliquée ou récidivante',
      'Polypes du côlon ou du rectum non résécables par simple coloscopie',
      'Tumeurs colorectales relevant d\'une résection chirurgicale',
      'Certaines maladies inflammatoires de l\'intestin résistantes au traitement médical',
      'Prolapsus rectal nécessitant une correction chirurgicale',
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
    image: '/images/endoscopie.webp',
    indications: [
      'Calcul de la voie biliaire principale',
      'Jaunisse (ictère) par obstacle sur les voies biliaires',
      'Angiocholite (infection des voies biliaires) nécessitant un drainage',
      'Rétrécissement des voies biliaires ou pancréatiques à traiter',
      'Fuite biliaire après chirurgie nécessitant la pose d\'une prothèse',
      'Certaines pancréatites liées à un obstacle canalaire',
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
    image: '/images/endoscopie-salle.webp',
    indications: [
      'Extraction de calculs de la voie biliaire principale',
      'Angiocholite nécessitant un drainage biliaire',
      'Préparation à la mise en place d\'une prothèse biliaire ou pancréatique',
      'Dysfonctionnement du sphincter d\'Oddi documenté',
      'Fuite biliaire post-opératoire à traiter par voie endoscopique',
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
    image: '/images/endoscopie.webp',
    indications: [
      'Polype découvert au cours d\'une coloscopie de dépistage',
      'Polypes du côlon ou du rectum à retirer par prévention',
      'Polypes gastriques ou duodénaux nécessitant une exérèse',
      'Surveillance de patients ayant des antécédents personnels ou familiaux de polypes',
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
    image: '/images/endoscopie-salle.webp',
    indications: [
      'Polypes plans ou étendus du côlon et du rectum',
      'Lésions superficielles de l\'œsophage ou de l\'estomac',
      'Lésions précancéreuses de la muqueuse digestive accessibles par endoscopie',
      'Lésions duodénales superficielles sélectionnées',
      'Alternative à la chirurgie pour des lésions bien limitées, après avis spécialisé',
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
    image: '/images/endoscopie.webp',
    indications: [
      'Sténose de l\'œsophage gênant la déglutition',
      'Rétrécissement cicatriciel après chirurgie digestive',
      'Sténoses liées aux maladies inflammatoires de l\'intestin',
      'Achalasie et certains troubles moteurs de l\'œsophage',
      'Sténose après traitement endoscopique ou radiothérapie',
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
    image: '/images/endoscopie-salle.webp',
    indications: [
      'Rétrécissement de l\'œsophage gênant l\'alimentation',
      'Obstacle duodénal ou gastrique à franchir',
      'Occlusion colique nécessitant une désobstruction',
      'Obstacle des voies biliaires avec jaunisse',
      'Fuite ou fistule digestive à couvrir temporairement',
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
