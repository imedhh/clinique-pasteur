export const examensUrodynamiques = [
  {
    slug: 'debitmetrie-urinaire',
    title: 'Débitmétrie urinaire',
    shortTitle: 'Débitmétrie',
    description: 'Mesure non invasive du débit urinaire permettant d\'évaluer la qualité de la miction et de détecter d\'éventuels obstacles à l\'écoulement de l\'urine.',
    fullDescription: `La débitmétrie urinaire est l'examen urodynamique le plus simple et le plus couramment prescrit. Elle consiste à mesurer le débit urinaire pendant la miction à l'aide d'un débitmètre électronique. Le patient urine dans un appareil de mesure qui enregistre en temps réel le volume d'urine émis par unité de temps.

Cet examen permet d'obtenir une courbe de miction caractéristique qui renseigne sur le débit maximal (Qmax), le débit moyen, le volume mictionnel et le temps de miction. Ces paramètres sont essentiels pour évaluer la fonction vésico-sphinctérienne et détecter une obstruction sous-vésicale.

La débitmétrie est particulièrement utile dans le dépistage de l'hyperplasie bénigne de la prostate chez l'homme, des sténoses urétrales et des dysfonctionnements vésicaux. Elle constitue souvent le premier examen réalisé avant d'envisager un bilan urodynamique plus complet.

Les résultats sont interprétés en fonction de l'âge, du sexe et du volume mictionnel. Un débit maximal inférieur à 15 ml/s chez l'homme ou 20 ml/s chez la femme est généralement considéré comme anormal et justifie des investigations complémentaires.`,
    preparation: [
      'Venir vessie pleine (boire 500 ml d\'eau environ 1 heure avant l\'examen)',
      'Ne pas uriner dans les 2 heures précédant l\'examen',
      'Signaler tout traitement médicamenteux en cours',
      'Aucune restriction alimentaire particulière',
    ],
    deroulement: [
      'Installation confortable dans une cabine d\'intimité',
      'Miction dans un débitmètre électronique (entonnoir spécial)',
      'Enregistrement automatique de la courbe de débit',
      'Mesure du résidu post-mictionnel par échographie après la miction',
      'Résultat immédiatement disponible sous forme de courbe',
    ],
    duree: '10 à 15 minutes',
    resultats: 'Les résultats sont disponibles immédiatement sous forme de courbe de débit. Le médecin analyse le débit maximal (Qmax), le débit moyen, le volume mictionnel total et la morphologie de la courbe pour évaluer la qualité de la miction.',
    risques: [
      'Aucun risque : examen totalement non invasif',
      'Résultat pouvant être faussé si le volume mictionnel est insuffisant (inférieur à 150 ml)',
    ],
    indications: [
      'Suspicion d\'hyperplasie bénigne de la prostate',
      'Troubles mictionnels (dysurie, pollakiurie)',
      'Suivi post-opératoire après chirurgie prostatique',
      'Sténose urétrale suspectée',
      'Bilan d\'incontinence urinaire',
      'Surveillance des vessies neurologiques',
    ],
  },
  {
    slug: 'cystomanometrie',
    title: 'Cystomanométrie',
    shortTitle: 'Cystomanométrie',
    description: 'Étude des pressions intravésicales pendant le remplissage et la vidange de la vessie, permettant d\'évaluer la compliance et la contractilité du détrusor.',
    fullDescription: `La cystomanométrie est l'examen clé du bilan urodynamique. Elle consiste à mesurer les pressions à l'intérieur de la vessie pendant son remplissage progressif avec du sérum physiologique, puis pendant la phase de vidange. Cet examen fournit des informations essentielles sur le comportement du muscle détrusor.

Pendant la phase de remplissage, la cystomanométrie évalue la sensibilité vésicale (premiers besoins, besoin normal, besoin urgent), la compliance vésicale (capacité de la vessie à se distendre sans augmentation excessive de pression) et la stabilité du détrusor (absence ou présence de contractions involontaires).

Pendant la phase de vidange, l'examen mesure la pression de contraction du détrusor et permet d'évaluer la coordination entre la contraction vésicale et le relâchement du sphincter urétral. Ces données sont essentielles pour distinguer une obstruction sous-vésicale d'une hypocontractilité du détrusor.

La cystomanométrie est indispensable dans le diagnostic des vessies instables, des vessies hypocompliantes, des dyssynergies vésico-sphinctériennes et dans l'évaluation pré-opératoire de nombreuses pathologies urologiques.`,
    preparation: [
      'Réaliser un ECBU (examen cytobactériologique des urines) dans les 7 jours précédant l\'examen pour exclure une infection urinaire',
      'Venir vessie pleine modérément',
      'Arrêter les anticholinergiques 48 heures avant (sur avis médical)',
      'Signaler toute allergie (notamment au latex)',
      'Apporter la liste des traitements en cours',
    ],
    deroulement: [
      'Installation en position gynécologique (femme) ou allongée (homme)',
      'Désinfection locale et pose d\'une sonde vésicale fine à double voie',
      'Mise en place d\'un capteur de pression rectale pour mesurer la pression abdominale',
      'Remplissage progressif de la vessie avec du sérum physiologique tiède',
      'Enregistrement continu des pressions vésicale et abdominale',
      'Le patient signale ses sensations de besoin (premier besoin, besoin normal, besoin urgent)',
      'Phase de vidange avec enregistrement de la pression de contraction',
      'Retrait des sondes en fin d\'examen',
    ],
    duree: '30 à 45 minutes',
    resultats: 'Les résultats sont analysés par le médecin spécialiste à partir des courbes de pression enregistrées. L\'interprétation porte sur la capacité vésicale, la compliance, la sensibilité, la stabilité du détrusor et la qualité de la contraction mictionnelle. Le compte-rendu détaillé est généralement disponible sous 48 heures.',
    risques: [
      'Légère gêne lors de la pose de la sonde (non douloureuse)',
      'Risque minime d\'infection urinaire (prévenu par l\'ECBU préalable)',
      'Brûlures mictionnelles transitoires dans les 24 à 48 heures suivant l\'examen',
      'Présence possible de traces de sang dans les urines pendant 24 heures',
    ],
    indications: [
      'Incontinence urinaire chez la femme ou l\'homme',
      'Hyperactivité vésicale (urgenturies, pollakiurie)',
      'Vessie neurologique (lésion médullaire, sclérose en plaques, Parkinson)',
      'Bilan pré-opératoire avant chirurgie de l\'incontinence',
      'Obstruction sous-vésicale (hyperplasie prostatique)',
      'Troubles de la vidange vésicale',
      'Énurésie résistante au traitement',
    ],
  },
  {
    slug: 'profil-pression-uretrale',
    title: 'Profil de pression urétrale (profilométrie)',
    shortTitle: 'Profilométrie',
    description: 'Mesure des pressions le long de l\'urètre permettant d\'évaluer la fonction sphinctérienne et de quantifier la résistance urétrale.',
    fullDescription: `Le profil de pression urétrale, ou profilométrie, est un examen urodynamique qui mesure les pressions tout le long de l'urètre depuis le col vésical jusqu'au méat urétral. Il permet d'évaluer précisément la compétence du sphincter urétral et la qualité de la résistance à l'écoulement.

L'examen est réalisé en retirant lentement une sonde de mesure à travers l'urètre tout en enregistrant les pressions. On obtient un profil de pression qui met en évidence la pression de clôture maximale, la longueur fonctionnelle de l'urètre et la transmission des pressions abdominales à l'urètre.

La profilométrie est particulièrement importante dans le bilan de l'incontinence urinaire d'effort chez la femme. Une pression de clôture maximale basse (insuffisance sphinctérienne) oriente vers un type d'incontinence particulier et influence le choix thérapeutique (bandelette sous-urétrale, sphincter artificiel, injections péri-urétrales).

Cet examen peut être réalisé au repos et à l'effort (toux, poussée) pour évaluer la transmission des pressions abdominales à l'urètre. Une mauvaise transmission est caractéristique d'une hypermobilité urétrale et d'un défaut de soutien du plancher pelvien.`,
    preparation: [
      'ECBU négatif datant de moins de 7 jours',
      'Venir avec une vessie modérément pleine',
      'Signaler tout traitement alpha-bloquant ou anticholinergique',
      'Pas de restriction alimentaire',
      'Éviter les rapports sexuels 24 heures avant l\'examen',
    ],
    deroulement: [
      'Installation confortable en position gynécologique (femme) ou allongée (homme)',
      'Désinfection locale soigneuse',
      'Introduction d\'une sonde fine de profilométrie dans la vessie',
      'Retrait lent et continu de la sonde à travers l\'urètre à vitesse constante',
      'Enregistrement des pressions urétrales tout au long du trajet',
      'Répétition de la mesure au repos et à l\'effort (toux)',
      'Retrait de la sonde en fin d\'examen',
    ],
    duree: '15 à 20 minutes',
    resultats: 'Le profil de pression urétrale est analysé en mesurant la pression de clôture maximale, la longueur fonctionnelle de l\'urètre et la transmission des pressions. Ces paramètres permettent de distinguer une insuffisance sphinctérienne intrinsèque d\'une hypermobilité urétrale dans le cadre d\'une incontinence d\'effort.',
    risques: [
      'Examen peu douloureux mais légèrement inconfortable',
      'Risque très faible d\'infection urinaire',
      'Brûlures mictionnelles passagères',
      'Traces de sang possibles dans les urines pendant quelques heures',
    ],
    indications: [
      'Bilan d\'incontinence urinaire d\'effort chez la femme',
      'Évaluation pré-opératoire avant chirurgie de l\'incontinence',
      'Suspicion d\'insuffisance sphinctérienne',
      'Suivi post-opératoire après cure d\'incontinence',
      'Évaluation de la compétence sphinctérienne chez l\'homme après prostatectomie',
      'Vessie neurologique avec troubles sphinctériens',
    ],
  },
  {
    slug: 'etude-pression-debit',
    title: 'Étude pression-débit',
    shortTitle: 'Pression-débit',
    description: 'Analyse simultanée de la pression vésicale et du débit urinaire pendant la miction, essentielle pour distinguer une obstruction d\'une hypocontractilité.',
    fullDescription: `L'étude pression-débit est un examen urodynamique fondamental qui associe la mesure simultanée de la pression intravésicale et du débit urinaire pendant la phase de miction. Elle constitue l'examen de référence pour le diagnostic d'obstruction sous-vésicale.

Le principe repose sur la relation entre la pression générée par le muscle détrusor pour évacuer l'urine et le débit qui en résulte. En cas d'obstruction (hyperplasie prostatique, sténose urétrale), la pression détrusorienne est élevée mais le débit reste faible. En cas d'hypocontractilité du détrusor, la pression et le débit sont tous deux diminués.

Les résultats sont généralement reportés sur un nomogramme (diagramme de Abrams-Griffiths ou de Schäfer) qui permet de classer le patient dans l'une des trois catégories : obstrué, équivoque ou non obstrué. Cette classification est essentielle pour la décision thérapeutique, notamment chez les hommes présentant des troubles du bas appareil urinaire.

L'étude pression-débit est particulièrement indiquée avant toute chirurgie de désobstruction prostatique, car elle permet de confirmer objectivement l'obstruction et d'éviter des interventions inutiles chez les patients dont les symptômes sont liés à une hypocontractilité du détrusor.`,
    preparation: [
      'ECBU négatif récent (moins de 7 jours)',
      'Venir vessie pleine (boire suffisamment avant l\'examen)',
      'Arrêter les alpha-bloquants 48 heures avant (sur avis médical)',
      'Apporter les résultats d\'examens antérieurs (échographie, débitmétrie)',
      'Signaler tout antécédent de rétention urinaire',
    ],
    deroulement: [
      'Pose d\'une sonde vésicale fine à double voie',
      'Mise en place d\'un capteur de pression rectale',
      'Remplissage de la vessie jusqu\'à obtention d\'un besoin mictionnel confortable',
      'Le patient urine avec les capteurs en place dans un débitmètre',
      'Enregistrement simultané de la pression vésicale, de la pression abdominale et du débit',
      'Calcul de la pression détrusorienne (pression vésicale moins pression abdominale)',
      'Retrait des sondes après la miction',
    ],
    duree: '30 à 45 minutes',
    resultats: 'Les résultats sont reportés sur un nomogramme (Abrams-Griffiths ou Schäfer) qui classe le patient en obstrué, équivoque ou non obstrué. La pression détrusorienne au débit maximal (PdetQmax) est le paramètre clé. Le compte-rendu détaillé est disponible sous 48 heures.',
    risques: [
      'Gêne liée à la sonde vésicale en place pendant la miction',
      'Difficulté possible à uriner avec la sonde (stress, inconfort)',
      'Risque faible d\'infection urinaire',
      'Brûlures mictionnelles transitoires après l\'examen',
    ],
    indications: [
      'Suspicion d\'obstruction sous-vésicale (hyperplasie prostatique)',
      'Bilan pré-opératoire avant adénomectomie ou résection prostatique',
      'Différenciation entre obstruction et hypocontractilité du détrusor',
      'Sténose urétrale récidivante',
      'Évaluation après échec du traitement médical des troubles mictionnels',
      'Dysurie d\'étiologie incertaine',
    ],
  },
  {
    slug: 'bilan-urodynamique-complet-multicanal',
    title: 'Bilan urodynamique complet multicanal',
    shortTitle: 'BUD complet',
    description: 'Exploration complète et simultanée de toutes les phases du cycle mictionnel associant cystomanométrie, profilométrie et étude pression-débit.',
    fullDescription: `Le bilan urodynamique complet multicanal est l'exploration fonctionnelle la plus exhaustive de l'appareil urinaire bas. Il associe en une seule séance plusieurs examens complémentaires : débitmétrie, cystomanométrie de remplissage, étude pression-débit et profilométrie urétrale, avec enregistrement simultané sur plusieurs canaux de pression.

L'enregistrement multicanal permet de mesurer simultanément la pression vésicale, la pression abdominale (rectale), la pression détrusorienne (calculée), la pression urétrale et le débit urinaire. Cette approche globale offre une vision complète du fonctionnement vésico-sphinctérien et permet de corréler les différents paramètres entre eux.

Ce bilan est indispensable dans les situations cliniques complexes où un seul examen ne suffit pas à établir un diagnostic précis. Il est particulièrement utile dans les pathologies associant plusieurs dysfonctionnements (par exemple, obstruction et instabilité vésicale, ou incontinence mixte) et dans les cas où un premier bilan simplifié n'a pas permis de conclure.

Le bilan urodynamique complet multicanal représente le gold standard de l'exploration fonctionnelle urologique et ses résultats orientent directement la stratégie thérapeutique : traitement médical, rééducation périnéale, neuromodulation ou chirurgie.`,
    preparation: [
      'ECBU stérile datant de moins de 7 jours (obligatoire)',
      'Venir vessie pleine naturellement',
      'Arrêter les traitements pouvant interférer (anticholinergiques, alpha-bloquants) 48 à 72 heures avant, sur avis médical',
      'Apporter tous les résultats d\'examens antérieurs (échographie, imagerie, bilans précédents)',
      'Prévoir un temps d\'examen plus long que les examens simples',
      'Signaler toute allergie ou tout traitement anticoagulant',
    ],
    deroulement: [
      'Débitmétrie initiale avec mesure du résidu post-mictionnel',
      'Pose de la sonde vésicale multicanal et du capteur rectal',
      'Phase de remplissage : cystomanométrie avec enregistrement des pressions et de la sensibilité',
      'Profilométrie urétrale au repos et à l\'effort',
      'Phase de vidange : étude pression-débit avec enregistrement simultané',
      'Débitmétrie finale et mesure du résidu post-mictionnel',
      'Retrait de tout le matériel et conseils post-examen',
    ],
    duree: '45 minutes à 1 heure',
    resultats: 'Le compte-rendu détaillé intègre l\'ensemble des paramètres mesurés : capacité vésicale, compliance, stabilité du détrusor, pression de clôture urétrale, présence ou absence d\'obstruction, qualité de la contraction mictionnelle. Il est disponible sous 48 à 72 heures et permet de poser un diagnostic fonctionnel précis.',
    risques: [
      'Inconfort modéré lié à la durée de l\'examen et à la présence des sondes',
      'Risque faible d\'infection urinaire (prévenu par l\'ECBU préalable)',
      'Brûlures mictionnelles possibles pendant 24 à 48 heures',
      'Traces de sang dans les urines possible pendant 24 heures',
      'Rarement : malaise vagal lors de la pose des sondes',
    ],
    indications: [
      'Incontinence urinaire complexe ou mixte',
      'Vessie neurologique (lésion médullaire, sclérose en plaques, spina bifida)',
      'Bilan pré-opératoire complet (chirurgie prostatique, cure d\'incontinence)',
      'Échec du traitement médical des troubles urinaires',
      'Troubles mictionnels d\'étiologie indéterminée',
      'Pathologie fonctionnelle vésico-sphinctérienne complexe',
      'Suivi des patients neurologiques à risque pour le haut appareil',
    ],
  },
  {
    slug: 'video-urodynamique',
    title: 'Vidéo-urodynamique',
    shortTitle: 'Vidéo-urodynamique',
    description: 'Combinaison d\'un bilan urodynamique et d\'une imagerie radiologique en temps réel pour visualiser simultanément la morphologie et la fonction vésicale.',
    fullDescription: `La vidéo-urodynamique est l'examen le plus complet et le plus sophistiqué de l'arsenal urodynamique. Elle associe un bilan urodynamique multicanal classique à une imagerie fluoroscopique (rayons X) ou échographique en temps réel, permettant de corréler simultanément les données fonctionnelles (pressions, débits) et morphologiques (forme de la vessie, ouverture du col, reflux).

Pendant l'examen, le remplissage vésical est réalisé avec un produit de contraste radio-opaque au lieu du sérum physiologique. Cela permet de visualiser sur l'écran de radioscopie la forme de la vessie, la compétence du col vésical, l'éventuelle présence de diverticules, de reflux vésico-urétéral et le comportement de l'urètre pendant la miction.

Cette technique est particulièrement précieuse chez les patients neurologiques car elle permet de détecter un reflux vésico-urétéral ou une dyssynergie vésico-sphinctérienne, deux complications potentiellement dangereuses pour le haut appareil urinaire. Elle offre également une évaluation anatomique et fonctionnelle simultanée dans les cas complexes.

La vidéo-urodynamique est considérée comme le gold standard absolu dans l'évaluation des dysfonctionnements vésico-sphinctériens complexes, notamment chez les patients neurologiques, les enfants avec malformations urogénitales et les échecs de chirurgie de l'incontinence.`,
    preparation: [
      'ECBU négatif de moins de 7 jours (obligatoire)',
      'Signaler toute allergie aux produits de contraste iodés',
      'Signaler une éventuelle grossesse (exposition aux rayons X)',
      'Arrêter les traitements interférant (anticholinergiques) 48 heures avant',
      'Être à jeun n\'est pas nécessaire sauf indication contraire',
      'Apporter les résultats d\'examens antérieurs et imageries',
    ],
    deroulement: [
      'Installation en salle de radiologie équipée d\'un appareil de fluoroscopie',
      'Pose de la sonde vésicale et du capteur de pression rectale',
      'Remplissage de la vessie avec un produit de contraste radio-opaque tiède',
      'Enregistrement simultané des pressions et des images radiologiques',
      'Clichés à différents stades du remplissage et pendant la miction',
      'Détection en temps réel d\'un éventuel reflux vésico-urétéral',
      'Phase de miction avec enregistrement vidéo et manométrique simultané',
      'Retrait du matériel et clichés post-mictionnels si nécessaire',
    ],
    duree: '45 minutes à 1 heure 15 minutes',
    resultats: 'Le compte-rendu combine les données manométriques (pressions, débits, compliance) et les données morphologiques (images fluoroscopiques). Il permet de détecter un reflux vésico-urétéral, une dyssynergie, des anomalies anatomiques et de les corréler aux données fonctionnelles. Résultats disponibles sous 48 à 72 heures.',
    risques: [
      'Exposition modérée aux rayons X (dose minimisée par fluoroscopie pulsée)',
      'Risque rare de réaction allergique au produit de contraste',
      'Inconfort lié à la durée de l\'examen',
      'Risque faible d\'infection urinaire',
      'Brûlures mictionnelles transitoires après l\'examen',
      'Contre-indiqué en cas de grossesse',
    ],
    indications: [
      'Vessie neurologique complexe (bilan initial et suivi)',
      'Suspicion de reflux vésico-urétéral fonctionnel',
      'Dyssynergie vésico-sphinctérienne',
      'Malformations urogénitales congénitales chez l\'enfant',
      'Échec de chirurgie de l\'incontinence',
      'Troubles mictionnels complexes non élucidés par le bilan standard',
      'Évaluation des dérivations urinaires continentes',
    ],
  },
  {
    slug: 'electromyographie-perineale',
    title: 'Électromyographie périnéale',
    shortTitle: 'EMG périnéale',
    description: 'Enregistrement de l\'activité électrique des muscles du plancher pelvien et du sphincter urétral pour évaluer leur innervation et leur coordination.',
    fullDescription: `L'électromyographie (EMG) périnéale est un examen neurophysiologique appliqué à l'exploration du plancher pelvien. Elle permet d'enregistrer l'activité électrique des muscles striés périnéaux (sphincter anal externe, sphincter urétral, muscles élévateurs de l'anus) afin d'évaluer leur innervation et leur fonctionnement.

L'EMG périnéale peut être réalisée à l'aide d'électrodes de surface (patchs collés sur la peau du périnée) ou d'électrodes-aiguilles insérées directement dans les muscles à explorer. Les électrodes de surface sont moins invasives et suffisent pour l'évaluation globale de l'activité musculaire pendant le bilan urodynamique. Les électrodes-aiguilles offrent une analyse plus fine des potentiels d'unités motrices.

Cet examen est essentiel pour le diagnostic de la dyssynergie vésico-sphinctérienne, pathologie dans laquelle le sphincter se contracte paradoxalement pendant la miction au lieu de se relâcher. Il permet également de détecter une dénervation périnéale (après accouchement traumatique, chirurgie pelvienne ou atteinte neurologique) et d'évaluer la qualité de la réinnervation.

L'EMG périnéale est souvent associée aux autres examens urodynamiques pour obtenir un bilan fonctionnel complet. Elle fournit des informations précieuses sur la coordination neuromusculaire du cycle mictionnel et guide les indications de rééducation périnéale ou de neuromodulation.`,
    preparation: [
      'Pas de préparation spécifique nécessaire',
      'Signaler tout traitement anticoagulant (en cas d\'utilisation d\'électrodes-aiguilles)',
      'Signaler toute neuropathie connue ou antécédent neurologique',
      'Toilette périnéale soigneuse avant l\'examen',
      'Pas de restriction alimentaire',
    ],
    deroulement: [
      'Installation en position gynécologique ou en décubitus latéral',
      'Mise en place des électrodes de surface sur le périnée ou insertion d\'électrodes-aiguilles dans les muscles cibles',
      'Enregistrement de l\'activité musculaire au repos',
      'Enregistrement pendant la contraction volontaire du périnée',
      'Enregistrement pendant les efforts de poussée et de toux',
      'Évaluation de la coordination sphinctérienne pendant le remplissage vésical (si couplé au bilan urodynamique)',
      'Retrait des électrodes en fin d\'examen',
    ],
    duree: '20 à 30 minutes (jusqu\'à 45 minutes si couplé au bilan urodynamique)',
    resultats: 'L\'analyse porte sur l\'activité musculaire au repos, la qualité du recrutement à la contraction volontaire, la présence de potentiels de dénervation et la coordination sphinctérienne pendant le cycle mictionnel. Le compte-rendu est disponible sous 48 heures.',
    risques: [
      'Examen légèrement inconfortable avec les électrodes de surface',
      'Douleur minime et transitoire en cas d\'électrodes-aiguilles',
      'Risque infime de saignement ou d\'infection au point de ponction (électrodes-aiguilles)',
      'Pas de risque avec les électrodes de surface',
    ],
    indications: [
      'Suspicion de dyssynergie vésico-sphinctérienne',
      'Bilan de dénervation périnéale (post-partum, post-chirurgical)',
      'Incontinence urinaire avec suspicion d\'atteinte neurologique',
      'Évaluation avant rééducation périnéale',
      'Troubles de la vidange vésicale d\'origine neurologique',
      'Neuropathie pudendale suspectée',
      'Suivi des vessies neurologiques',
    ],
  },
  {
    slug: 'mesure-residu-post-mictionnel-echographie',
    title: 'Mesure du résidu post-mictionnel par échographie',
    shortTitle: 'Résidu post-mictionnel',
    description: 'Évaluation non invasive par échographie sus-pubienne du volume d\'urine restant dans la vessie après la miction.',
    fullDescription: `La mesure du résidu post-mictionnel (RPM) par échographie est un examen simple, rapide et non invasif qui permet de quantifier le volume d'urine restant dans la vessie immédiatement après la miction. Elle utilise un échographe portable ou un appareil dédié (bladder-scan) posé sur l'abdomen au-dessus du pubis.

Le résidu post-mictionnel est un paramètre fondamental en urologie et en neuro-urologie. Un résidu significatif (généralement supérieur à 100 ml) peut témoigner d'une obstruction sous-vésicale, d'une hypocontractilité du détrusor ou d'un trouble de la coordination vésico-sphinctérienne. Sa mesure est systématiquement associée à la débitmétrie.

L'échographie sus-pubienne permet non seulement de mesurer le volume résiduel mais aussi d'évaluer la morphologie vésicale (épaisseur de la paroi, présence de diverticules, calculs) et de détecter d'éventuelles anomalies rénales associées (dilatation pyélocalicielle). Cette double information anatomique et fonctionnelle en fait un examen de première intention incontournable.

La mesure est généralement réalisée par la formule du volume de l'ellipsoïde (longueur × largeur × hauteur × 0,52) ou automatiquement par le bladder-scan. Sa fiabilité est excellente et reproductible, ce qui en fait un outil de suivi idéal pour les patients sous surveillance urologique régulière.`,
    preparation: [
      'Aucune préparation spécifique',
      'Ne pas retarder la miction avant l\'examen : uriner normalement',
      'La mesure est réalisée immédiatement après la miction (dans les 5 minutes)',
      'Pas de restriction alimentaire',
    ],
    deroulement: [
      'Le patient urine normalement (aux toilettes ou dans un débitmètre)',
      'Installation en décubitus dorsal immédiatement après la miction',
      'Application de gel échographique sur l\'abdomen au-dessus du pubis',
      'Mesure du volume résiduel par échographie sus-pubienne ou bladder-scan',
      'Mesures dans les trois plans de l\'espace si échographe classique',
      'Résultat immédiat affiché sur l\'écran',
    ],
    duree: '5 minutes',
    resultats: 'Le volume résiduel est exprimé en millilitres. Un résidu inférieur à 50 ml est considéré comme normal. Entre 50 et 100 ml, il est à surveiller. Au-delà de 100 ml, il est significatif et nécessite une investigation complémentaire. Le résultat est immédiat.',
    risques: [
      'Aucun risque : examen totalement non invasif et indolore',
      'Pas d\'exposition aux rayons X (utilisation d\'ultrasons)',
      'Résultat pouvant être légèrement imprécis en cas d\'obésité importante',
    ],
    indications: [
      'Complément systématique de la débitmétrie',
      'Suivi des patients sous traitement pour troubles mictionnels',
      'Bilan de rétention urinaire chronique',
      'Surveillance des vessies neurologiques',
      'Suivi post-opératoire après chirurgie prostatique ou pelvienne',
      'Bilan d\'infections urinaires récidivantes',
      'Évaluation des troubles de la vidange vésicale',
    ],
  },
  {
    slug: 'test-remplissage-vesical',
    title: 'Test de remplissage vésical',
    shortTitle: 'Test de remplissage',
    description: 'Évaluation de la capacité et de la sensibilité vésicale par remplissage contrôlé, avec analyse de la compliance et détection des contractions involontaires.',
    fullDescription: `Le test de remplissage vésical est un examen urodynamique qui se concentre spécifiquement sur la phase de remplissage de la vessie. Il consiste à remplir progressivement la vessie avec du sérum physiologique à un débit contrôlé tout en enregistrant les pressions intravésicales et en notant les sensations du patient.

Cet examen évalue trois paramètres essentiels : la sensibilité vésicale (perception des différents niveaux de besoin), la compliance vésicale (capacité de la vessie à se distendre sans augmentation excessive de pression) et la stabilité du détrusor (absence de contractions involontaires pendant le remplissage).

Le test est réalisé à différents débits de remplissage (lent, moyen, rapide) selon les indications cliniques. Un remplissage lent (10-20 ml/min) est plus physiologique et permet une meilleure évaluation de la sensibilité vésicale. Un remplissage rapide peut être utilisé comme test de provocation pour mettre en évidence une instabilité détrusorienne latente.

Les résultats du test de remplissage sont fondamentaux pour le diagnostic de l'hyperactivité vésicale, de la vessie hypocompliante (rigide) et des troubles de la sensibilité vésicale. Ils permettent d'adapter le traitement : anticholinergiques pour l'hyperactivité, injection de toxine botulique intradétrusorienne, ou agrandissement vésical chirurgical pour les vessies hypocompliantes sévères.`,
    preparation: [
      'ECBU stérile de moins de 7 jours',
      'Arrêter les anticholinergiques et les bêta-3 agonistes 48 heures avant',
      'Venir avec un besoin mictionnel modéré',
      'Signaler tout antécédent de rétention urinaire ou de sonde à demeure',
      'Apporter la liste complète des traitements en cours',
    ],
    deroulement: [
      'Installation confortable en position semi-assise ou gynécologique',
      'Mesure du résidu post-mictionnel initial',
      'Pose d\'une sonde vésicale fine à double voie et d\'un capteur rectal',
      'Remplissage progressif de la vessie à débit contrôlé avec du sérum physiologique tiède',
      'Le patient signale ses sensations : premier besoin, besoin normal, besoin urgent, besoin impérieux',
      'Enregistrement continu des pressions et détection des contractions non inhibées',
      'Fin du remplissage au besoin impérieux ou à la capacité vésicale maximale',
      'Retrait des sondes',
    ],
    duree: '20 à 30 minutes',
    resultats: 'L\'analyse porte sur la capacité vésicale maximale, la compliance (rapport volume/pression), la sensibilité (volumes aux différents niveaux de besoin) et la stabilité du détrusor (présence ou absence de contractions involontaires). Le compte-rendu est disponible sous 48 heures.',
    risques: [
      'Inconfort modéré lié à la sonde et au remplissage',
      'Besoin impérieux d\'uriner en fin de remplissage (normal)',
      'Risque faible d\'infection urinaire',
      'Brûlures mictionnelles transitoires pendant 24 heures',
      'Fuite urinaire possible pendant l\'examen (normale et attendue)',
    ],
    indications: [
      'Hyperactivité vésicale (urgenturies, pollakiurie)',
      'Suspicion de vessie hypocompliante',
      'Vessie neurologique (évaluation du risque pour le haut appareil)',
      'Troubles de la sensibilité vésicale',
      'Évaluation avant injection de toxine botulique intradétrusorienne',
      'Bilan de pollakiurie inexpliquée',
      'Syndrome de vessie douloureuse (cystite interstitielle)',
    ],
  },
  {
    slug: 'bilan-urodynamique-pre-operatoire',
    title: 'Bilan urodynamique pré-opératoire',
    shortTitle: 'BUD pré-opératoire',
    description: 'Bilan fonctionnel complet réalisé avant une intervention chirurgicale urologique pour confirmer le diagnostic et guider le choix opératoire.',
    fullDescription: `Le bilan urodynamique pré-opératoire est une exploration fonctionnelle complète réalisée systématiquement avant certaines interventions chirurgicales urologiques. Son objectif est double : confirmer le diagnostic fonctionnel qui justifie la chirurgie et fournir des données de référence pour évaluer le résultat post-opératoire.

Avant une chirurgie de désobstruction prostatique (résection transurétrale, adénomectomie, laser), le bilan pré-opératoire permet de confirmer l'obstruction sous-vésicale par l'étude pression-débit et de détecter une éventuelle hypocontractilité du détrusor associée. En l'absence d'obstruction confirmée, la chirurgie risque de ne pas améliorer les symptômes du patient.

Avant une chirurgie de l'incontinence urinaire chez la femme (bandelette sous-urétrale, colposuspension), le bilan évalue la pression de clôture urétrale, la capacité vésicale, la compliance et la stabilité du détrusor. Ces paramètres orientent le choix de la technique chirurgicale et permettent d'informer la patiente sur les chances de succès et les risques de complications.

Ce bilan est également indispensable avant la mise en place d'un sphincter urinaire artificiel, d'un neuromodulateur sacré ou avant un agrandissement vésical. Il représente une étape médico-légale importante car il documente l'état fonctionnel pré-opératoire et justifie objectivement l'indication chirurgicale.`,
    preparation: [
      'ECBU stérile datant de moins de 7 jours (obligatoire, l\'examen sera annulé en cas d\'infection)',
      'Arrêter les traitements urologiques pouvant interférer 48 à 72 heures avant (sur avis du chirurgien)',
      'Apporter le dossier médical complet : consultation chirurgicale, imagerie, biologie',
      'Venir vessie pleine naturellement',
      'Prévoir une durée d\'examen conséquente (environ 1 heure)',
      'Signaler tout traitement anticoagulant ou antiagrégant plaquettaire',
    ],
    deroulement: [
      'Débitmétrie libre initiale avec mesure du résidu post-mictionnel',
      'Pose des capteurs de pression (sonde vésicale et capteur rectal)',
      'Cystomanométrie de remplissage : évaluation de la sensibilité, compliance et stabilité',
      'Profilométrie urétrale au repos et à l\'effort (si chirurgie de l\'incontinence)',
      'Étude pression-débit pendant la miction (si chirurgie de désobstruction)',
      'Mesure du résidu post-mictionnel final',
      'Remise des résultats au chirurgien pour validation de l\'indication opératoire',
    ],
    duree: '45 minutes à 1 heure',
    resultats: 'Le compte-rendu pré-opératoire détaillé est transmis au chirurgien. Il comprend l\'ensemble des paramètres mesurés et une conclusion fonctionnelle confirmant ou infirmant l\'indication opératoire. Il constitue un document de référence pour la comparaison post-opératoire. Résultats disponibles sous 48 à 72 heures.',
    risques: [
      'Mêmes risques que le bilan urodynamique complet',
      'Inconfort modéré pendant la durée de l\'examen',
      'Risque faible d\'infection urinaire',
      'Brûlures mictionnelles transitoires',
      'Report possible de la chirurgie en cas de résultats contre-indiquant l\'intervention',
    ],
    indications: [
      'Avant résection transurétrale de prostate (RTUP) ou adénomectomie',
      'Avant chirurgie de l\'incontinence (bandelette sous-urétrale TOT/TVT)',
      'Avant pose de sphincter urinaire artificiel',
      'Avant implantation de neuromodulateur sacré',
      'Avant agrandissement vésical (entérocystoplastie)',
      'Avant chirurgie du prolapsus avec incontinence associée',
      'Avant toute chirurgie fonctionnelle urologique majeure',
    ],
  },
  {
    slug: 'bilan-incontinence-urinaire',
    title: 'Bilan d\'incontinence urinaire',
    shortTitle: 'Bilan incontinence',
    description: 'Exploration urodynamique complète et ciblée pour caractériser le type d\'incontinence urinaire et orienter la prise en charge thérapeutique.',
    fullDescription: `Le bilan d'incontinence urinaire est une exploration urodynamique spécifiquement orientée vers le diagnostic étiologique et la caractérisation des fuites urinaires. Il vise à déterminer le mécanisme de l'incontinence (effort, urgence, mixte) et à quantifier sa sévérité pour guider la stratégie thérapeutique.

L'incontinence urinaire d'effort est liée à une insuffisance des mécanismes de clôture urétrale lors des augmentations de pression abdominale. Le bilan inclut alors une profilométrie urétrale pour mesurer la pression de clôture et un test de fuite à l'effort (test de Valsalva ou test de toux à vessie pleine) pour reproduire et quantifier les fuites.

L'incontinence par urgence (ou par hyperactivité vésicale) est causée par des contractions involontaires du détrusor. La cystomanométrie de remplissage permet de mettre en évidence ces contractions non inhibées, de mesurer leur amplitude et de les corréler aux symptômes rapportés par le patient. La détection d'une hyperactivité détrusorienne modifie profondément l'approche thérapeutique.

L'incontinence mixte, associant une composante d'effort et une composante par urgence, est fréquente et nécessite un bilan complet pour hiérarchiser les deux composantes. Le traitement de la composante prédominante sera privilégié en première intention. Le bilan d'incontinence intègre également un pad-test (test de pesée de protection) pour quantifier objectivement les fuites sur une période donnée.`,
    preparation: [
      'ECBU stérile de moins de 7 jours',
      'Remplir un calendrier mictionnel sur 3 jours avant l\'examen',
      'Arrêter les anticholinergiques et bêta-3 agonistes 48 heures avant',
      'Venir avec une vessie confortablement pleine',
      'Apporter les résultats du pad-test si réalisé',
      'Porter des vêtements confortables et faciles à enlever',
    ],
    deroulement: [
      'Interrogatoire détaillé sur le type de fuites et leur retentissement',
      'Débitmétrie libre et mesure du résidu post-mictionnel',
      'Pose de la sonde vésicale et du capteur rectal',
      'Cystomanométrie de remplissage avec recherche de contractions involontaires',
      'Test de fuite à l\'effort : toux et Valsalva à différents volumes de remplissage',
      'Profilométrie urétrale au repos et à l\'effort',
      'Pad-test court si nécessaire (1 heure avec activités standardisées)',
      'Retrait des sondes et conseils personnalisés',
    ],
    duree: '30 à 45 minutes (jusqu\'à 1 heure 30 avec le pad-test)',
    resultats: 'Le bilan permet de classifier l\'incontinence en trois types : incontinence d\'effort (insuffisance sphinctérienne ou hypermobilité urétrale), incontinence par urgence (hyperactivité détrusorienne) ou incontinence mixte. La sévérité est quantifiée par la pression de fuite, la pression de clôture et le pad-test. Le compte-rendu détaillé oriente la prise en charge thérapeutique.',
    risques: [
      'Inconfort lié à la sonde et aux manœuvres de provocation des fuites',
      'Fuites urinaires attendues pendant l\'examen (c\'est l\'objectif)',
      'Risque faible d\'infection urinaire',
      'Brûlures mictionnelles transitoires',
      'Aspect psychologiquement délicat : examen réalisé avec tact et discrétion',
    ],
    indications: [
      'Incontinence urinaire d\'effort de la femme',
      'Incontinence urinaire après prostatectomie radicale chez l\'homme',
      'Incontinence par urgence résistante au traitement médical',
      'Incontinence mixte nécessitant une hiérarchisation des composantes',
      'Bilan pré-opératoire avant chirurgie de l\'incontinence',
      'Incontinence récidivante après cure chirurgicale',
      'Incontinence du sujet âgé nécessitant une évaluation précise',
    ],
  },
  {
    slug: 'evaluation-troubles-vidange-vesicale',
    title: 'Évaluation des troubles de la vidange vésicale',
    shortTitle: 'Troubles de la vidange',
    description: 'Exploration fonctionnelle ciblée pour identifier la cause des difficultés de vidange vésicale : obstruction mécanique, hypocontractilité du détrusor ou dyssynergie.',
    fullDescription: `L'évaluation des troubles de la vidange vésicale est un bilan urodynamique spécifiquement orienté vers l'analyse de la phase mictionnelle. Elle vise à identifier la cause des difficultés d'évacuation de l'urine qui peuvent être liées à un obstacle mécanique (obstruction), à un défaut de force de contraction de la vessie (hypocontractilité du détrusor) ou à un trouble de la coordination entre vessie et sphincter (dyssynergie).

L'obstruction sous-vésicale est la cause la plus fréquente chez l'homme, principalement liée à l'hyperplasie bénigne de la prostate ou aux sténoses urétrales. Elle se caractérise par une pression détrusorienne élevée associée à un débit faible. L'étude pression-débit est l'examen clé pour confirmer le diagnostic et quantifier le degré d'obstruction.

L'hypocontractilité du détrusor se manifeste par une pression de contraction insuffisante et un débit faible. Elle peut être d'origine neurologique (diabète, neuropathie), médicamenteuse ou liée au vieillissement. Son diagnostic est essentiel car elle contre-indique certaines chirurgies de désobstruction qui risqueraient d'aggraver la rétention.

La dyssynergie vésico-sphinctérienne, fréquente dans les pathologies neurologiques, associe une contraction du détrusor à une contraction paradoxale du sphincter pendant la miction. Son diagnostic repose sur l'association de la cystomanométrie et de l'électromyographie périnéale. La prise en charge fait appel aux autosondages, à la toxine botulique sphinctérienne ou à la neuromodulation.`,
    preparation: [
      'ECBU stérile de moins de 7 jours',
      'Venir vessie pleine naturellement',
      'Ne pas forcer la miction avant l\'examen',
      'Arrêter les alpha-bloquants 48 heures avant (sur avis médical)',
      'Apporter les résultats d\'imagerie (échographie rénale et vésicale, débitmétrie antérieure)',
      'Signaler tout antécédent de rétention aiguë d\'urine',
    ],
    deroulement: [
      'Débitmétrie libre et mesure du résidu post-mictionnel initial',
      'Pose de la sonde vésicale et du capteur de pression rectale',
      'Mise en place éventuelle d\'électrodes EMG périnéales',
      'Remplissage vésical contrôlé jusqu\'à besoin mictionnel confortable',
      'Phase de miction avec enregistrement simultané des pressions vésicale et abdominale, du débit et de l\'EMG',
      'Étude pression-débit avec report sur nomogramme d\'Abrams-Griffiths',
      'Évaluation de la coordination vésico-sphinctérienne',
      'Mesure du résidu post-mictionnel final',
      'Retrait du matériel',
    ],
    duree: '30 à 45 minutes',
    resultats: 'Le bilan permet de classifier le trouble de la vidange en trois catégories : obstruction sous-vésicale (avec quantification du degré), hypocontractilité du détrusor ou dyssynergie vésico-sphinctérienne. Le nomogramme d\'Abrams-Griffiths fournit une classification objective. Le compte-rendu oriente la prise en charge : chirurgie de désobstruction, autosondages, rééducation ou neuromodulation.',
    risques: [
      'Inconfort modéré lié aux sondes en place pendant la miction',
      'Difficulté possible à uriner dans les conditions d\'examen',
      'Risque faible d\'infection urinaire',
      'Brûlures mictionnelles transitoires',
      'Rétention urinaire transitoire possible (rare), pouvant nécessiter un sondage évacuateur',
    ],
    indications: [
      'Dysurie avec résidu post-mictionnel significatif',
      'Rétention urinaire chronique ou récidivante',
      'Bilan pré-opératoire avant chirurgie prostatique',
      'Suspicion d\'hypocontractilité du détrusor chez le sujet âgé',
      'Vessie neurologique avec troubles de la vidange',
      'Sténose urétrale récidivante',
      'Échec du traitement médical alpha-bloquant',
      'Dyssynergie vésico-sphinctérienne suspectée',
    ],
  },
]
