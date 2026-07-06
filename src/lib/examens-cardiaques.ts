export const examensCardiaques = [
  {
    slug: 'ecg-repos',
    title: 'Electrocardiogramme (ECG) de repos',
    shortTitle: 'ECG de repos',
    image: '/images/fiches/cardio-ecg-repos.webp',
    description:
      "Enregistrement de l'activite electrique du coeur au repos, permettant de detecter des anomalies du rythme, de la conduction ou des signes d'ischemie myocardique.",
    fullDescription: `L'electrocardiogramme de repos est l'examen cardiologique le plus couramment realise. Il consiste a enregistrer l'activite electrique du coeur a l'aide d'electrodes placees sur la peau du thorax et des membres. Cet examen simple, rapide et totalement indolore fournit des informations essentielles sur le fonctionnement du coeur.

L'ECG de repos permet de detecter de nombreuses pathologies cardiaques : troubles du rythme (fibrillation auriculaire, extrasystoles, tachycardies), troubles de la conduction (blocs auriculo-ventriculaires, blocs de branche), signes d'ischemie myocardique, hypertrophie des cavites cardiaques ou encore des anomalies electrolytiques.

Cet examen est indique en cas de douleurs thoraciques, palpitations, essoufflement, malaise ou perte de connaissance. Il fait egalement partie du bilan de sante systematique chez les patients a risque cardiovasculaire et constitue un examen prealable indispensable avant toute intervention chirurgicale.

A la Clinique Pasteur de Tunis, l'ECG est realise par des techniciens specialises et interprete immediatement par un cardiologue. Les resultats sont disponibles dans les minutes qui suivent l'examen, permettant une prise en charge rapide en cas d'anomalie detectee.`,
    preparation: [
      'Aucune preparation particuliere n\'est necessaire',
      'Venir avec une tenue permettant un acces facile au thorax',
      'Eviter d\'appliquer des cremes ou huiles sur la peau du thorax le jour de l\'examen',
      'Apporter la liste de vos medicaments en cours',
      'Apporter les resultats de vos ECG anterieurs si disponibles',
    ],
    deroulement: [
      'Le patient s\'allonge sur le dos sur une table d\'examen',
      'Le technicien place 10 electrodes : 6 sur le thorax et 4 sur les membres (poignets et chevilles)',
      'Un gel conducteur est applique pour ameliorer le contact entre les electrodes et la peau',
      'L\'enregistrement dure environ 10 secondes pendant lesquelles le patient doit rester immobile et detendu',
      'Le trace est imprime et analyse par le cardiologue',
      'Les electrodes sont retirees et le gel est essuye',
    ],
    duree: '5 a 10 minutes',
    resultats:
      'Les resultats sont disponibles immediatement apres l\'examen. Le cardiologue interprete le trace et remet un compte-rendu au patient ou a son medecin traitant.',
    risques: [],
    indications: [
      { label: 'Douleurs thoraciques ou oppression', explication: `Lorsqu'une gêne ou une sensation de serrement apparaît dans la poitrine, l'ECG permet de vérifier rapidement si le cœur en est la cause.` },
      { label: 'Palpitations ou sensation de coeur irregulier', explication: `Si vous sentez votre cœur battre trop vite, trop fort ou de façon désordonnée, ce tracé aide à identifier un éventuel trouble du rythme.` },
      { label: 'Essoufflement inhabituel', explication: `Un souffle court qui survient sans raison apparente, au repos ou pour de petits efforts, peut avoir une origine cardiaque que l'ECG aide à repérer.` },
      { label: 'Malaise, vertiges ou perte de connaissance', explication: `Après un évanouissement ou des étourdissements, l'examen recherche une anomalie électrique du cœur qui pourrait expliquer ces épisodes.` },
      { label: 'Bilan prealable a une intervention chirurgicale', explication: `Avant une opération, l'ECG vérifie que le cœur fonctionne normalement afin que l'anesthésie et l'intervention se déroulent en toute sécurité.` },
      { label: 'Suivi de pathologies cardiaques connues', explication: `Chez une personne déjà suivie pour une maladie du cœur, l'ECG régulier permet de surveiller l'évolution et de détecter tout changement.` },
      { label: 'Bilan de sante chez les patients a risque cardiovasculaire', explication: `En cas d'hypertension, de diabète, de tabagisme ou d'antécédents familiaux, cet examen simple fait partie du contrôle de routine du cœur.` },
      { label: 'Controle sous traitement cardiologique', explication: `Certains médicaments du cœur nécessitent une surveillance : l'ECG vérifie que le traitement agit bien et reste bien toléré.` },
    ],
  },
  {
    slug: 'ecg-effort-tapis',
    title: "Electrocardiogramme d'effort sur tapis roulant",
    shortTitle: "ECG d'effort",
    image: '/images/fiches/cardio-ecg-effort-tapis.webp',
    description:
      "Enregistrement de l'activite electrique du coeur pendant un effort physique progressif sur tapis roulant, pour detecter une ischemie myocardique non visible au repos.",
    fullDescription: `L'electrocardiogramme d'effort est un examen qui consiste a enregistrer l'activite electrique du coeur pendant que le patient realise un effort physique progressif sur un tapis roulant. L'objectif est de soumettre le coeur a un stress physiologique controle afin de reveler des anomalies qui ne sont pas visibles au repos.

Cet examen est fondamental dans le diagnostic de la maladie coronarienne. Lors de l'effort, le coeur necessite un apport en oxygene plus important. Si les arteres coronaires presentent des retrecissements significatifs, le debit sanguin devient insuffisant a l'effort, provoquant des modifications detectables sur l'ECG et parfois des symptomes comme une douleur thoracique ou un essoufflement anormal.

L'epreuve d'effort sur tapis roulant suit un protocole standardise (generalement le protocole de Bruce) avec une augmentation progressive de la vitesse et de l'inclinaison du tapis. Le patient est surveille en permanence par un cardiologue qui controle le rythme cardiaque, la tension arterielle et les symptomes tout au long de l'examen.

A la Clinique Pasteur de Tunis, cet examen est realise dans un environnement securise avec un materiel de reanimation immediatement disponible. Le cardiologue est present tout au long de l'epreuve et peut l'interrompre a tout moment si necessaire.`,
    preparation: [
      'Etre a jeun depuis au moins 2 heures avant l\'examen (repas leger autorise)',
      'Porter des vetements confortables et des chaussures de sport adaptees',
      'Ne pas fumer dans les 2 heures precedant l\'examen',
      'Signaler tous les medicaments en cours, en particulier les beta-bloquants',
      'Le cardiologue peut demander l\'arret temporaire de certains medicaments 24 a 48h avant',
      'Eviter tout effort physique intense le jour de l\'examen',
      'Apporter les resultats d\'examens cardiologiques anterieurs',
    ],
    deroulement: [
      'Un ECG de repos est d\'abord realise comme reference',
      'La tension arterielle est mesuree au repos',
      'Les electrodes sont fixees solidement sur le thorax',
      'Le patient commence a marcher lentement sur le tapis roulant',
      'La vitesse et l\'inclinaison augmentent progressivement toutes les 3 minutes (protocole de Bruce)',
      'L\'ECG, la tension arterielle et les symptomes sont surveilles en continu',
      'L\'effort est poursuivi jusqu\'a atteindre la frequence cardiaque cible ou l\'apparition de symptomes',
      'Une phase de recuperation est observee pendant 5 a 10 minutes apres l\'arret de l\'effort',
      'Le cardiologue analyse l\'ensemble des traces enregistres',
    ],
    duree: '30 a 45 minutes (incluant la preparation et la recuperation)',
    resultats:
      'Les resultats sont communiques par le cardiologue dans les minutes suivant la fin de l\'examen. Un compte-rendu detaille est remis au patient.',
    risques: [
      'Fatigue musculaire et essoufflement (attendus et normaux)',
      'Douleur thoracique (signe recherche, conduit a l\'arret de l\'epreuve)',
      'Trouble du rythme cardiaque (rare, pris en charge immediatement)',
      'Malaise ou chute de tension (exceptionnel)',
      'Risque d\'accident cardiaque grave extremement rare (moins de 1/10 000)',
    ],
    indications: [
      { label: 'Douleur thoracique suspecte d\'origine coronarienne', explication: `Quand une douleur dans la poitrine survient à la marche ou à l'effort, ce test permet de vérifier si les artères du cœur apportent suffisamment de sang lorsqu'il travaille davantage.` },
      { label: 'Bilan de facteurs de risque cardiovasculaires multiples', explication: `Chez une personne cumulant hypertension, diabète, tabac ou cholestérol, l'épreuve d'effort aide à dépister une atteinte silencieuse des artères du cœur.` },
      { label: 'Evaluation de la capacite fonctionnelle a l\'effort', explication: `L'examen mesure objectivement ce que votre cœur est capable de fournir pendant l'exercice, une information précieuse pour adapter votre suivi et vos activités.` },
      { label: 'Suivi apres infarctus du myocarde ou angioplastie', explication: `Après un accident cardiaque ou la pose d'un stent, ce test vérifie que le cœur a bien récupéré et qu'il tolère de nouveau l'effort sans souffrir.` },
      { label: 'Bilan avant reprise d\'activite sportive chez un patient cardiaque', explication: `Avant de reprendre le sport après un problème cardiaque, l'examen permet de s'assurer que l'effort est sans danger et de définir l'intensité adaptée.` },
      { label: 'Evaluation de troubles du rythme declenches par l\'effort', explication: `Certaines palpitations n'apparaissent que pendant l'exercice : le test reproduit ces conditions sous surveillance pour les enregistrer et les analyser.` },
      { label: 'Certificat d\'aptitude sportive chez les sujets a risque', explication: `Pour les personnes présentant des facteurs de risque et souhaitant pratiquer un sport, cette épreuve confirme que le cœur supporte bien un effort intense.` },
    ],
  },
  {
    slug: 'holter-ecg',
    title: 'Holter ECG (enregistrement continu 24h-48h-72h)',
    shortTitle: 'Holter ECG',
    image: '/images/fiches/cardio-holter-ecg.webp',
    description:
      "Enregistrement continu de l'activite electrique du coeur sur 24 a 72 heures grace a un petit boitier portable, permettant de detecter des anomalies rythmiques intermittentes.",
    fullDescription: `Le Holter ECG est un examen qui permet d'enregistrer en continu l'activite electrique du coeur pendant une duree prolongee, generalement 24 heures, mais pouvant s'etendre a 48 ou 72 heures selon l'indication. Le patient porte un petit boitier enregistreur relie a des electrodes collees sur le thorax et poursuit ses activites quotidiennes normales pendant toute la duree de l'enregistrement.

Cet examen est particulierement utile pour detecter des anomalies du rythme cardiaque qui surviennent de facon intermittente et qui peuvent ne pas etre presentes lors d'un ECG standard de quelques secondes. Les arythmies paroxystiques, les pauses cardiaques, les extrasystoles frequentes ou les episodes de tachycardie sont ainsi mis en evidence sur le trace continu.

Le Holter ECG est egalement precieux pour etablir une correlation entre les symptomes ressentis par le patient (palpitations, malaises, douleurs thoraciques) et d'eventuelles anomalies rythmiques. Le patient est invite a noter dans un journal les heures de ses activites et de ses symptomes, ce qui permet au cardiologue de les confronter avec le trace ECG correspondant.

A la Clinique Pasteur de Tunis, nous utilisons des appareils de derniere generation, legers et discrets, qui assurent un enregistrement de haute qualite. L'analyse est realisee par un logiciel specialise puis validee et interpretee par un cardiologue experimente.`,
    preparation: [
      'Prendre une douche avant la pose car il ne sera pas possible de se doucher pendant l\'enregistrement',
      'Porter des vetements amples et confortables',
      'Ne pas appliquer de creme ou de lotion sur le thorax',
      'Apporter la liste des medicaments en cours',
      'Prevoir de ne pas pratiquer de sport intense pendant l\'enregistrement',
    ],
    deroulement: [
      'Le technicien prepare la peau du thorax (rasage si necessaire, nettoyage)',
      '5 a 7 electrodes adhesives sont placees sur le thorax',
      'Les electrodes sont reliees par des cables a un petit boitier enregistreur',
      'Le boitier est fixe a la ceinture ou porte en bandouliere',
      'Le patient recoit un journal de bord pour noter ses activites et symptomes',
      'Le patient rentre chez lui et reprend ses activites habituelles',
      'Apres 24h, 48h ou 72h, le patient revient a la clinique pour le retrait du boitier',
      'Les donnees sont transferees sur un ordinateur pour analyse',
    ],
    duree: '24 a 72 heures d\'enregistrement ; pose et retrait : 15 minutes chacun',
    resultats:
      'L\'analyse du Holter necessite 24 a 48 heures. Les resultats sont transmis au cardiologue prescripteur ou remis au patient lors d\'une consultation de suivi.',
    risques: [
      'Irritation cutanee legere au niveau des electrodes adhesives',
      'Allergie au sparadrap (rare, signaler toute allergie connue)',
    ],
    indications: [
      { label: 'Palpitations intermittentes', explication: `Quand le cœur s'emballe par épisodes imprévisibles, un ECG classique de quelques secondes peut ne rien montrer : le Holter enregistre en continu pour capter ces moments.` },
      { label: 'Malaises ou syncopes inexpliques', explication: `Après des évanouissements ou des malaises dont la cause reste inconnue, l'enregistrement prolongé recherche un ralentissement ou un emballement passager du cœur.` },
      { label: 'Evaluation de la frequence cardiaque sur 24 heures', explication: `L'appareil observe comment votre cœur bat tout au long du jour et de la nuit, au repos comme en activité, pour vérifier qu'il s'adapte normalement.` },
      { label: 'Suivi d\'une fibrillation auriculaire paroxystique', explication: `Lorsque ce trouble du rythme survient par crises passagères, le Holter permet de savoir à quelle fréquence et à quels moments les épisodes se produisent.` },
      { label: 'Controle de l\'efficacite d\'un traitement anti-arythmique', explication: `Sous traitement contre un trouble du rythme, l'enregistrement vérifie que les anomalies ont bien diminué et que le médicament remplit son rôle.` },
      { label: 'Surveillance apres ablation de trouble du rythme', explication: `Après une intervention destinée à supprimer une arythmie, le Holter confirme que le rythme reste régulier et qu'il n'y a pas de récidive.` },
      { label: 'Evaluation d\'une bradycardie ou de pauses cardiaques', explication: `Si le cœur semble battre trop lentement ou marquer des pauses, l'enregistrement continu mesure précisément ces ralentissements pour décider de la conduite à tenir.` },
      { label: 'Bilan de palpitations nocturnes ou de dyspnee paroxystique', explication: `Des palpitations ou un essoufflement survenant la nuit sont difficiles à observer en consultation : le Holter surveille le cœur pendant le sommeil.` },
    ],
  },
  {
    slug: 'holter-tensionnel',
    title: 'Holter tensionnel (MAPA)',
    shortTitle: 'Holter tensionnel',
    image: '/images/fiches/cardio-holter-tensionnel.webp',
    description:
      "Mesure automatique et repetee de la pression arterielle sur 24 heures grace a un brassard portable, pour evaluer le profil tensionnel diurne et nocturne du patient.",
    fullDescription: `Le Holter tensionnel, egalement appele MAPA (Mesure Ambulatoire de la Pression Arterielle), est un examen qui permet de mesurer la pression arterielle de maniere automatique et repetee sur une periode de 24 heures. Un brassard est place sur le bras du patient et relie a un petit boitier qui declenche des mesures a intervalles reguliers, generalement toutes les 15 a 30 minutes le jour et toutes les 30 a 60 minutes la nuit.

Cet examen est essentiel pour obtenir un profil tensionnel complet et fiable, car la pression arterielle varie considerablement au cours de la journee sous l'influence de l'activite physique, du stress, du sommeil et de nombreux autres facteurs. Contrairement a une mesure ponctuelle au cabinet medical, le MAPA fournit des dizaines de mesures dans les conditions de vie reelle du patient.

Le Holter tensionnel est particulierement utile pour diagnostiquer l'hypertension arterielle "blouse blanche" (tension elevee uniquement au cabinet) et l'hypertension masquee (tension normale au cabinet mais elevee en dehors). Il permet egalement d'evaluer le profil tensionnel nocturne, un parametre important car l'absence de baisse tensionnelle la nuit (profil "non-dipper") est associee a un risque cardiovasculaire accru.

A la Clinique Pasteur de Tunis, le MAPA est realise avec des appareils valides cliniquement qui garantissent la fiabilite des mesures. L'analyse informatisee fournit des moyennes diurnes, nocturnes et sur 24 heures, ainsi que des graphiques detailles interpretes par le cardiologue.`,
    preparation: [
      'Porter un vetement a manches larges pour faciliter la pose du brassard',
      'Continuer a prendre les medicaments habituels sauf avis contraire du medecin',
      'Prevoir de ne pas prendre de bain ni de douche pendant les 24 heures d\'enregistrement',
      'Eviter les activites sportives intenses pendant l\'enregistrement',
      'Apporter la liste de vos traitements en cours',
    ],
    deroulement: [
      'Un brassard tensionnel est installe sur le bras non dominant',
      'Le brassard est relie a un boitier enregistreur fixe a la ceinture',
      'L\'appareil est programme pour effectuer des mesures automatiques regulieres',
      'Le patient recoit un journal de bord pour noter ses activites, heures de coucher et de lever',
      'A chaque gonflage du brassard, le patient doit garder le bras immobile le long du corps',
      'Le patient rentre chez lui et poursuit ses activites quotidiennes normales',
      'Apres 24 heures, le patient revient a la clinique pour le retrait de l\'appareil',
      'Les donnees sont transferees sur ordinateur et analysees',
    ],
    duree: '24 heures d\'enregistrement ; pose et retrait : 10 minutes chacun',
    resultats:
      'Les resultats sont disponibles sous 24 a 48 heures. Un rapport complet avec moyennes, graphiques et interpretation est remis au patient ou transmis au medecin prescripteur.',
    risques: [
      'Inconfort lie aux gonflages repetes du brassard, surtout la nuit',
      'Legere gene ou engourdissement temporaire du bras lors des mesures',
      'Irritation cutanee mineure sous le brassard (rare)',
    ],
    indications: [
      { label: 'Confirmation du diagnostic d\'hypertension arterielle', explication: `Avant de conclure à une véritable hypertension et de débuter un traitement au long cours, cet enregistrement vérifie que la tension est réellement élevée dans la vie de tous les jours.` },
      { label: 'Suspicion d\'hypertension "blouse blanche"', explication: `Chez certaines personnes, la tension monte uniquement par stress lors de la consultation : la mesure à domicile permet de faire la différence et d'éviter un traitement inutile.` },
      { label: 'Suspicion d\'hypertension masquee', explication: `À l'inverse, la tension peut être normale au cabinet mais élevée dans la vie quotidienne : seul un enregistrement ambulatoire peut révéler cette situation.` },
      { label: 'Evaluation du profil tensionnel nocturne', explication: `La tension doit normalement baisser pendant le sommeil ; l'appareil vérifie ce comportement nocturne, important pour évaluer la santé du cœur et des vaisseaux.` },
      { label: 'Controle de l\'efficacite d\'un traitement antihypertenseur', explication: `Sous traitement contre l'hypertension, l'examen confirme que la tension est bien contrôlée à toute heure de la journée et de la nuit.` },
      { label: 'Hypertension arterielle resistante au traitement', explication: `Quand la tension reste élevée malgré plusieurs médicaments, cet enregistrement complet aide le médecin à comprendre pourquoi et à ajuster la stratégie.` },
      { label: 'Bilan d\'episodes d\'hypotension symptomatique', explication: `En cas de vertiges ou de faiblesses évoquant des chutes de tension, l'appareil permet de les détecter au moment précis où les symptômes surviennent.` },
      { label: 'Evaluation tensionnelle chez la femme enceinte', explication: `Pendant la grossesse, une surveillance fiable de la tension est essentielle pour la maman et le bébé ; cet examen doux et sans danger fournit un profil complet.` },
    ],
  },
  {
    slug: 'echocardiographie-ett',
    title: 'Echocardiographie transthoracique (ETT)',
    shortTitle: 'Echo cardiaque',
    image: '/images/fiches/cardio-echocardiographie-ett.webp',
    description:
      "Examen d'imagerie par ultrasons du coeur a travers la paroi thoracique, permettant d'evaluer la structure et le fonctionnement des cavites cardiaques, des valves et du pericarde.",
    fullDescription: `L'echocardiographie transthoracique est un examen d'imagerie non invasif qui utilise les ultrasons pour visualiser le coeur en temps reel. Une sonde est placee sur differentes positions du thorax et emet des ondes sonores de haute frequence qui, en se reflechissant sur les structures cardiaques, permettent de reconstituer une image detaillee du coeur en mouvement.

Cet examen est l'un des plus importants en cardiologie car il fournit des informations precieuses sur l'anatomie et le fonctionnement du coeur. Il permet d'evaluer la taille et l'epaisseur des parois des cavites cardiaques, la fonction contractile du ventricule gauche (fraction d'ejection), le fonctionnement des quatre valves cardiaques, la presence eventuelle d'epanchement pericardique et de nombreux autres parametres.

Grace aux techniques Doppler associees, l'echocardiographie mesure egalement les flux sanguins a travers les valves et les cavites, detecte les fuites valvulaires (insuffisances) et les retrecissements (stenoses), et evalue les pressions intracardiaques. Le Doppler couleur offre une visualisation intuitive des flux sanguins normaux et pathologiques.

A la Clinique Pasteur de Tunis, l'echocardiographie est realisee avec des echographes de derniere generation offrant une resolution d'image exceptionnelle. L'examen est pratique et interprete par des cardiologues echographistes experimentes, garantissant un diagnostic precis et fiable.`,
    preparation: [
      'Aucune preparation particuliere n\'est necessaire',
      'Il n\'est pas necessaire d\'etre a jeun',
      'Porter un vetement permettant un acces facile au thorax',
      'Apporter les resultats d\'echocardiographies anterieures pour comparaison',
      'Apporter votre ordonnance et la liste de vos medicaments',
    ],
    deroulement: [
      'Le patient s\'allonge sur le dos puis sur le cote gauche sur la table d\'examen',
      'Un gel conducteur est applique sur le thorax pour faciliter la transmission des ultrasons',
      'Le cardiologue deplace la sonde sur differentes zones du thorax (fenetres acoustiques)',
      'Des images du coeur sont enregistrees sous differents angles et en differents modes',
      'Les mesures Doppler des flux sanguins sont realisees',
      'Le patient peut etre amene a modifier sa position ou sa respiration durant l\'examen',
      'Le gel est essuye a la fin de l\'examen',
    ],
    duree: '20 a 40 minutes',
    resultats:
      'Les resultats sont disponibles immediatement. Le cardiologue redige un compte-rendu detaille avec les mesures et les conclusions, remis au patient le jour meme ou envoye au medecin prescripteur.',
    risques: [],
    indications: [
      { label: 'Souffle cardiaque a l\'auscultation', explication: `Quand le médecin entend un bruit inhabituel au stéthoscope, l'échographie permet de voir les valves du cœur et de déterminer si ce souffle est banal ou lié à une anomalie.` },
      { label: 'Insuffisance cardiaque ou essoufflement inexplique', explication: `Si le cœur semble manquer de force ou si un essoufflement persiste sans cause évidente, l'examen mesure directement la capacité du cœur à pomper le sang.` },
      { label: 'Douleurs thoraciques', explication: `Face à une douleur dans la poitrine, l'échographie aide à vérifier que le muscle cardiaque se contracte normalement et à orienter le diagnostic.` },
      { label: 'Bilan apres un infarctus du myocarde', explication: `Après un infarctus, l'examen évalue les zones du cœur qui ont pu être touchées et vérifie que la force de pompage reste satisfaisante.` },
      { label: 'Surveillance de valvulopathie connue', explication: `Lorsqu'une valve du cœur fuit ou se rétrécit, des échographies régulières suivent son évolution et aident à choisir le bon moment pour une éventuelle intervention.` },
      { label: 'Hypertension arterielle (recherche de retentissement cardiaque)', explication: `Une tension élevée de longue date peut épaissir et fatiguer le muscle cardiaque : l'échographie vérifie si le cœur en garde des traces.` },
      { label: 'Bilan de cardiomyopathie', explication: `En cas de maladie du muscle cardiaque, l'examen précise la forme, l'épaisseur et le fonctionnement du cœur pour guider le traitement.` },
      { label: 'Recherche de cardiopathie congenitale', explication: `Chez l'enfant comme chez l'adulte, l'échographie permet de détecter une malformation du cœur présente depuis la naissance, de façon totalement indolore.` },
      { label: 'Evaluation preoperatoire cardiaque', explication: `Avant certaines opérations, l'examen s'assure que le cœur est en état de bien supporter l'anesthésie et l'intervention prévue.` },
      { label: 'Bilan d\'endocardite infectieuse suspectee', explication: `Si une infection des valves cardiaques est suspectée, notamment en cas de fièvre persistante, l'échographie recherche des signes d'atteinte des valves.` },
    ],
  },
  {
    slug: 'echocardiographie-eto',
    title: 'Echocardiographie transoesophagienne (ETO)',
    shortTitle: 'Echo transoesophagienne',
    image: '/images/fiches/cardio-echocardiographie-eto.webp',
    description:
      "Examen echographique du coeur realise en introduisant une sonde miniature dans l'oesophage, offrant des images de tres haute resolution des structures cardiaques posterieures et des valves.",
    fullDescription: `L'echocardiographie transoesophagienne est un examen d'imagerie cardiaque realise en introduisant une sonde d'echographie miniature dans l'oesophage, qui se trouve juste derriere le coeur. Cette proximite entre la sonde et le coeur permet d'obtenir des images de resolution nettement superieure a celles de l'echocardiographie transthoracique, en particulier pour les structures posterieures du coeur.

L'ETO est un examen semi-invasif qui necessite generalement une anesthesie locale de la gorge et parfois une legere sedation. Elle est realisee lorsque l'echocardiographie transthoracique standard ne fournit pas des images suffisamment precises ou lorsque certaines structures cardiaques doivent etre visualisees avec une resolution maximale.

Cet examen est particulierement performant pour l'evaluation detaillee des valves cardiaques (notamment la valve mitrale), la recherche de thrombus (caillots) dans les oreillettes (en particulier dans l'auricule gauche), le diagnostic d'endocardite infectieuse (vegetations valvulaires), la detection de dissection aortique et l'evaluation des protheses valvulaires.

A la Clinique Pasteur de Tunis, l'ETO est realisee dans des conditions optimales de securite par un cardiologue echographiste experimente, avec une surveillance continue des parametres vitaux. Le confort du patient est une priorite, et une sedation legere est proposee pour minimiser la gene liee a la procedure.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 6 heures avant l\'examen',
      'Signaler toute allergie connue, notamment aux anesthesiques locaux',
      'Signaler tout traitement anticoagulant en cours',
      'Signaler toute pathologie oesophagienne connue (varices oesophagiennes, stenose, hernie hiatale)',
      'Retirer les protheses dentaires amovibles avant l\'examen',
      'Prevoir un accompagnant si une sedation est realisee',
      'Ne pas conduire pendant les 2 heures suivant l\'examen en cas de sedation',
    ],
    deroulement: [
      'Un catheter veineux est mis en place pour l\'administration eventuelle de sedation',
      'La gorge est anesthesiee avec un spray anesthesique local',
      'Le patient est installe en decubitus lateral gauche',
      'Un cale-dent est place entre les dents pour proteger la sonde',
      'La sonde d\'echographie est introduite doucement dans l\'oesophage sous controle',
      'Le cardiologue realise les differentes coupes echographiques en deplacant et orientant la sonde',
      'L\'examen Doppler couleur et pulse est realise',
      'La sonde est retiree delicatement en fin d\'examen',
      'Le patient reste sous surveillance pendant 30 minutes a 1 heure apres la procedure',
    ],
    duree: '15 a 30 minutes pour l\'examen ; prevoir 1h30 au total avec preparation et surveillance',
    resultats:
      'Les resultats sont communiques par le cardiologue dans les heures suivant l\'examen. Un compte-rendu detaille est redige et transmis au medecin prescripteur.',
    risques: [
      'Gene ou inconfort lors de l\'introduction de la sonde dans la gorge',
      'Mal de gorge transitoire apres l\'examen (frequent mais benin)',
      'Traumatisme oesophagien superficiel (rare)',
      'Perforation oesophagienne (exceptionnelle, moins de 0.01%)',
      'Reaction allergique a l\'anesthesique local (rare)',
      'Trouble du rythme cardiaque transitoire (rare)',
    ],
    indications: [
      { label: 'Recherche de thrombus intra-auriculaire avant cardioversion', explication: `Avant de rétablir un rythme cardiaque régulier par choc électrique, cet examen s'assure qu'aucun caillot ne s'est formé dans le cœur, pour réaliser le geste en toute sécurité.` },
      { label: 'Bilan d\'endocardite infectieuse', explication: `En cas d'infection suspectée des valves du cœur, la sonde placée dans l'œsophage, tout près du cœur, offre des images très précises des lésions éventuelles.` },
      { label: 'Evaluation precise de la valve mitrale avant chirurgie', explication: `Avant une opération de la valve mitrale, cet examen fournit au chirurgien une cartographie détaillée de la valve pour préparer au mieux son geste.` },
      { label: 'Evaluation des protheses valvulaires en cas de suspicion de dysfonction', explication: `Si une valve artificielle semble moins bien fonctionner, l'échographie par voie œsophagienne permet de l'examiner de très près et d'en vérifier le bon état.` },
      { label: 'Recherche de foramen ovale permeable (FOP)', explication: `Ce petit passage entre les deux oreillettes, hérité de la vie fœtale, reste parfois ouvert ; l'examen le détecte avec une grande précision.` },
      { label: 'Bilan d\'accident vasculaire cerebral chez le sujet jeune', explication: `Après un AVC survenu chez une personne jeune, l'examen recherche dans le cœur une cause possible, comme un caillot ou une petite communication anormale.` },
      { label: 'Guidage peroperation lors de chirurgie cardiaque', explication: `Pendant certaines opérations du cœur, cette échographie guide le chirurgien en temps réel et vérifie immédiatement la qualité du résultat.` },
      { label: 'Suspicion de dissection aortique', explication: `En cas d'urgence avec suspicion de déchirure de la paroi de l'aorte, cet examen permet de visualiser rapidement l'artère et de confirmer ou d'écarter le diagnostic.` },
    ],
  },
  {
    slug: 'echocardiographie-stress',
    title: 'Echocardiographie de stress',
    shortTitle: 'Echo de stress',
    image: '/images/fiches/cardio-echocardiographie-stress.webp',
    description:
      "Echocardiographie realisee pendant un effort physique ou sous stimulation pharmacologique, permettant de detecter des anomalies de contraction du coeur revelees par le stress.",
    fullDescription: `L'echocardiographie de stress est un examen qui combine l'imagerie echographique du coeur avec un stress, qu'il soit physique (effort sur velo semi-couche ou tapis roulant) ou pharmacologique (injection intraveineuse de dobutamine). L'objectif est de comparer le fonctionnement du coeur au repos et lors du stress pour detecter des anomalies de contraction qui ne sont visibles que lorsque le coeur est soumis a une charge de travail accrue.

Cet examen est un outil diagnostique essentiel pour la detection de la maladie coronarienne. Lorsqu'une artere coronaire est retrecie, le territoire myocardique qu'elle irrigue peut se contracter normalement au repos mais presenter une anomalie de contraction a l'effort, car l'apport en oxygene devient insuffisant. L'echocardiographie de stress detecte ces anomalies segmentaires de cinetique avec une excellente sensibilite et specificite.

L'echocardiographie de stress pharmacologique a la dobutamine est particulierement utile chez les patients qui ne peuvent pas realiser un effort physique suffisant (limitations articulaires, insuffisance respiratoire, arteriopathie des membres inferieurs). La dobutamine est un medicament qui stimule le coeur de facon comparable a un effort physique.

A la Clinique Pasteur de Tunis, l'echocardiographie de stress est realisee par des cardiologues experimentes dans un environnement securise. L'examen est sous surveillance continue avec un materiel de reanimation immediatement disponible, garantissant la securite optimale du patient.`,
    preparation: [
      'Etre a jeun depuis au moins 4 heures avant l\'examen',
      'Signaler tous les medicaments en cours, en particulier les beta-bloquants',
      'Le cardiologue peut demander l\'arret des beta-bloquants 48 heures avant l\'examen',
      'Eviter la cafeine et la theophylline dans les 24 heures precedant l\'examen',
      'Porter des vetements confortables si l\'effort physique est prevu',
      'Signaler tout antecedent d\'allergie',
      'Apporter les resultats d\'examens cardiologiques anterieurs',
    ],
    deroulement: [
      'Un ECG de repos et une echocardiographie de reference sont realises',
      'Un catheter veineux est mis en place (pour l\'echo de stress pharmacologique)',
      'En cas de stress physique : le patient pedale sur un velo semi-couche ou marche sur un tapis',
      'En cas de stress pharmacologique : la dobutamine est perfusee a doses progressivement croissantes',
      'Des images echographiques sont enregistrees a chaque palier de stress',
      'L\'ECG et la tension arterielle sont surveilles en continu',
      'L\'examen est poursuivi jusqu\'a atteindre la frequence cardiaque cible ou l\'apparition de signes positifs',
      'Les images au repos et au pic de stress sont comparees cote a cote',
      'Une phase de recuperation est surveillee',
    ],
    duree: '45 minutes a 1 heure',
    resultats:
      'Les resultats sont communiques par le cardiologue apres analyse des images. Un compte-rendu detaille est remis dans la journee ou le lendemain.',
    risques: [
      'Palpitations et acceleration du rythme cardiaque (effet attendu)',
      'Douleur thoracique (signe recherche, entraine l\'arret de l\'examen)',
      'Trouble du rythme cardiaque (rare, pris en charge immediatement)',
      'Hypotension ou chute de tension (rare)',
      'Nausees ou cephalees avec la dobutamine (transitoires)',
      'Risque d\'accident cardiaque grave (exceptionnel, moins de 1/5000)',
    ],
    indications: [
      { label: 'Suspicion de maladie coronarienne chez un patient ne pouvant pas faire d\'effort maximal', explication: `Quand des problèmes d'articulations ou de respiration empêchent de courir ou de pédaler suffisamment, un médicament reproduit l'effet de l'effort pour tester le cœur en douceur.` },
      { label: 'ECG d\'effort non interpretable ou douteux', explication: `Si le test d'effort classique n'a pas donné de réponse claire, l'ajout des images échographiques permet de voir directement comment le cœur se contracte et de trancher.` },
      { label: 'Evaluation de la viabilite myocardique apres infarctus', explication: `Après un infarctus, l'examen détermine si les zones du muscle cardiaque touchées sont encore vivantes et pourraient récupérer après un traitement de revascularisation.` },
      { label: 'Bilan preoperatoire chez un patient a risque cardiovasculaire', explication: `Avant une opération importante, ce test vérifie que le cœur supportera le stress de l'intervention chez une personne présentant des facteurs de risque.` },
      { label: 'Evaluation de la severite d\'une valvulopathie a l\'effort', explication: `Certaines maladies des valves ne se révèlent vraiment qu'à l'effort : l'examen observe le comportement de la valve quand le cœur accélère.` },
      { label: 'Suivi apres revascularisation coronaire', explication: `Après la pose d'un stent ou un pontage, ce test contrôle que le sang circule à nouveau correctement dans le muscle cardiaque pendant l'effort.` },
      { label: 'Evaluation de la reserve contractile du myocarde', explication: `L'examen mesure la capacité du cœur à augmenter sa force de contraction quand on le sollicite, un indicateur précieux de son état de santé.` },
    ],
  },
  {
    slug: 'epreuve-effort-monitoring',
    title: "Epreuve d'effort sur tapis roulant avec monitoring",
    shortTitle: "Epreuve d'effort",
    image: '/images/fiches/cardio-epreuve-effort-monitoring.webp',
    description:
      "Test d'effort complet avec surveillance continue de l'ECG, de la tension arterielle et de la saturation en oxygene, pour evaluer la capacite fonctionnelle et detecter une ischemie myocardique.",
    fullDescription: `L'epreuve d'effort sur tapis roulant avec monitoring complet est un examen cardiologique de reference qui permet d'evaluer la reponse du systeme cardiovasculaire a un effort physique progressif et controle. Contrairement a un simple ECG d'effort, cet examen inclut un monitoring continu multiparametrique comprenant l'ECG 12 derivations, la pression arterielle, la saturation en oxygene et parfois la mesure des echanges gazeux.

Cet examen est fondamental pour evaluer la capacite fonctionnelle du patient, exprimee en METs (equivalents metaboliques). Cette donnee est un indicateur pronostique majeur en cardiologie, car une faible capacite a l'effort est associee a un risque cardiovasculaire accru. L'epreuve d'effort permet egalement de determiner le seuil d'ischemie, c'est-a-dire le niveau d'effort a partir duquel le coeur montre des signes de souffrance.

Au-dela du diagnostic de maladie coronarienne, l'epreuve d'effort est utilisee pour evaluer la competence chronotrope (capacite du coeur a accelerer normalement a l'effort), detecter les troubles du rythme d'effort, mesurer la reponse tensionnelle a l'effort et guider la prescription d'un programme de readaptation cardiaque.

A la Clinique Pasteur de Tunis, les epreuves d'effort sont realisees selon les protocoles internationaux standardises avec un equipement de monitoring de pointe. Un cardiologue est present tout au long de l'examen, et un materiel de reanimation complet est immediatement disponible.`,
    preparation: [
      'Etre a jeun depuis au moins 3 heures (un petit-dejeuner leger est tolere)',
      'Porter des vetements de sport confortables et des chaussures de sport',
      'Ne pas fumer dans les 3 heures precedant l\'examen',
      'Apporter la liste complete de vos medicaments',
      'Certains medicaments (beta-bloquants, inhibiteurs calciques) peuvent necessiter un arret temporaire',
      'Eviter tout effort physique intense dans les 12 heures precedant l\'examen',
      'Signaler toute limitation physique (problemes articulaires, insuffisance respiratoire)',
    ],
    deroulement: [
      'Installation des electrodes ECG 12 derivations sur le thorax',
      'Mise en place du brassard tensionnel et du capteur de saturation en oxygene',
      'Enregistrement de l\'ECG et de la tension arterielle au repos',
      'Le patient commence a marcher lentement sur le tapis roulant',
      'La vitesse et l\'inclinaison sont augmentees progressivement selon le protocole choisi',
      'L\'ECG, la tension et la saturation sont surveilles en continu sur moniteur',
      'Le cardiologue evalue en permanence les symptomes et les parametres mesures',
      'L\'effort est poursuivi jusqu\'a la frequence maximale theorique, l\'epuisement ou l\'apparition de criteres d\'arret',
      'Phase de recuperation active puis passive de 6 a 10 minutes',
      'Analyse complete de tous les parametres enregistres',
    ],
    duree: '45 minutes a 1 heure (incluant preparation, effort et recuperation)',
    resultats:
      'Les resultats sont communiques par le cardiologue immediatement apres l\'examen. Un compte-rendu complet incluant les parametres hemodynamiques, les traces ECG et l\'interpretation est remis au patient.',
    risques: [
      'Fatigue musculaire et essoufflement (normaux et attendus)',
      'Douleur thoracique (conduit a l\'arret de l\'epreuve et a une prise en charge immediate)',
      'Trouble du rythme cardiaque (rare, surveille en continu)',
      'Hypotension a l\'effort ou en recuperation (peu frequent)',
      'Chute sur le tapis roulant (prevention par les barres de maintien)',
      'Accident cardiaque grave (exceptionnel, moins de 1/10 000)',
    ],
    indications: [
      { label: 'Diagnostic de maladie coronarienne', explication: `En sollicitant le cœur de façon progressive et surveillée, l'examen révèle un manque d'apport de sang au muscle cardiaque qui resterait invisible au repos.` },
      { label: 'Evaluation de la capacite fonctionnelle (en METs)', explication: `Le test mesure précisément le niveau d'effort que vous pouvez fournir, une donnée très utile au médecin pour évaluer votre forme cardiaque et suivre vos progrès.` },
      { label: 'Bilan apres syndrome coronarien aigu', explication: `Après un infarctus ou une alerte cardiaque, cette épreuve encadrée vérifie la récupération du cœur et aide à organiser la suite de la prise en charge.` },
      { label: 'Prescription de readaptation cardiaque', explication: `Avant de commencer un programme de rééducation du cœur, le test détermine le niveau d'exercice adapté et sans danger pour chaque patient.` },
      { label: 'Evaluation de la competence chronotrope', explication: `L'examen vérifie que le cœur accélère normalement quand l'effort augmente ; un cœur qui n'accélère pas assez peut expliquer fatigue et essoufflement.` },
      { label: 'Recherche de troubles du rythme d\'effort', explication: `Certains battements irréguliers n'apparaissent que pendant l'exercice : le test les provoque dans un cadre sécurisé pour les enregistrer et les analyser.` },
      { label: 'Bilan de dyspnee d\'effort', explication: `Quand un essoufflement anormal survient à l'effort, l'épreuve aide à déterminer s'il vient du cœur, de la condition physique ou d'une autre cause.` },
      { label: 'Evaluation de la reponse tensionnelle a l\'effort', explication: `L'examen observe comment la tension artérielle évolue pendant l'exercice, car une montée excessive ou une chute anormale sont des informations importantes pour le médecin.` },
      { label: 'Aptitude sportive chez le patient cardiaque', explication: `Pour un patient cardiaque désireux de pratiquer une activité physique, le test confirme que le sport envisagé est compatible avec son état de santé.` },
    ],
  },
  {
    slug: 'coronarographie',
    title: 'Coronarographie diagnostique',
    shortTitle: 'Coronarographie',
    image: '/images/fiches/cardio-coronarographie.webp',
    description:
      "Examen invasif de reference pour visualiser les arteres coronaires par injection de produit de contraste, permettant de localiser et quantifier les retrecissements (stenoses) coronariens.",
    fullDescription: `La coronarographie est l'examen de reference ("gold standard") pour l'exploration des arteres coronaires, ces vaisseaux qui irriguent le muscle cardiaque. Elle consiste a introduire un catheter (tube fin et souple) dans une artere, generalement l'artere radiale au poignet ou l'artere femorale a l'aine, et a le guider jusqu'aux ostiums des arteres coronaires sous controle radiographique. Un produit de contraste iode est ensuite injecte pour visualiser l'interieur des coronaires sur un ecran de radioscopie.

Cet examen permet de visualiser avec precision l'anatomie des arteres coronaires, de detecter et quantifier les stenoses (retrecissements), les occlusions, les anomalies congenitales et les lesions atheromateuses. La coronarographie est indispensable pour poser l'indication d'une revascularisation myocardique, qu'elle soit percutanee (angioplastie avec stent) ou chirurgicale (pontage coronarien).

La coronarographie est generalement realisee apres que des examens non invasifs (ECG d'effort, echocardiographie de stress, scintigraphie myocardique) ont revele des signes suggestifs de maladie coronarienne. Elle est egalement realisee en urgence en cas de syndrome coronarien aigu (infarctus du myocarde) pour identifier et traiter immediatement l'artere responsable.

A la Clinique Pasteur de Tunis, la coronarographie est realisee dans un laboratoire de catheterisme cardiaque equipe de la technologie la plus recente. Les cardiologues interventionnels de la clinique possedent une grande experience et pratiquent un volume important de procedures, garantissant un haut niveau de qualite et de securite.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 6 heures',
      'Realiser un bilan sanguin prealable (creatinine, coagulation, numeration sanguine)',
      'Signaler toute allergie, en particulier au produit de contraste iode',
      'Signaler tout traitement anticoagulant ou antiagreggant plaquettaire',
      'Un traitement preventif peut etre prescrit en cas d\'allergie a l\'iode',
      'Signaler tout antecedent d\'insuffisance renale',
      'Prendre les medicaments habituels avec un peu d\'eau sauf avis contraire du cardiologue',
      'Prevoir une hospitalisation de jour ou une courte hospitalisation (24 heures)',
      'Prevoir un accompagnant pour le retour a domicile',
    ],
    deroulement: [
      'Installation sur la table de catheterisme cardiaque',
      'Desinfection et anesthesie locale du point de ponction (poignet ou aine)',
      'Ponction de l\'artere et mise en place d\'un introducteur',
      'Introduction du catheter et progression jusqu\'a l\'aorte sous controle radiographique',
      'Catheterisme selectif de l\'artere coronaire gauche puis droite',
      'Injection de produit de contraste et enregistrement des images sous plusieurs incidences',
      'Analyse des images en temps reel par le cardiologue interventionnel',
      'Retrait du catheter et de l\'introducteur',
      'Compression du point de ponction et mise en place d\'un pansement compressif',
      'Surveillance post-procedure avec repos allonge pendant 2 a 6 heures selon la voie d\'abord',
    ],
    duree: '20 a 45 minutes pour la procedure ; prevoir une demi-journee a une journee complete d\'hospitalisation',
    resultats:
      'Les resultats sont communiques immediatement apres l\'examen par le cardiologue interventionnel. Les images et le compte-rendu sont fournis au patient et au medecin prescripteur. Une discussion sur la strategie therapeutique a lieu si des lesions significatives sont detectees.',
    risques: [
      'Hematome au point de ponction (frequent mais generalement benin)',
      'Reaction allergique au produit de contraste iode (rare, prevenue par premedication)',
      'Dissection ou spasme coronaire (rare)',
      'Trouble du rythme cardiaque transitoire',
      'Insuffisance renale aigue liee au produit de contraste (rare, prevenue par hydratation)',
      'Accident vasculaire cerebral (exceptionnel, moins de 0.1%)',
      'Infarctus du myocarde (exceptionnel)',
      'Complication vasculaire au point de ponction (faux anevrysme, fistule arterio-veineuse)',
    ],
    indications: [
      { label: 'Syndrome coronarien aigu (infarctus, angor instable)', explication: `En cas d'infarctus ou de menace d'infarctus, cet examen réalisé en urgence identifie immédiatement l'artère bouchée afin de la déboucher au plus vite.` },
      { label: 'Angor stable resistant au traitement medical', explication: `Quand des douleurs de poitrine à l'effort persistent malgré les médicaments, la coronarographie visualise précisément les rétrécissements pour préparer un traitement adapté.` },
      { label: 'Tests non invasifs fortement positifs pour l\'ischemie myocardique', explication: `Lorsque l'épreuve d'effort ou l'échographie de stress suggèrent fortement un manque de sang au cœur, cet examen confirme le diagnostic et localise exactement les lésions.` },
      { label: 'Insuffisance cardiaque d\'origine ischemique suspectee', explication: `Si un cœur affaibli pourrait s'expliquer par des artères coronaires malades, l'examen le vérifie, car déboucher ces artères peut améliorer la force du cœur.` },
      { label: 'Bilan preoperatoire de chirurgie valvulaire chez le patient a risque coronarien', explication: `Avant d'opérer une valve cardiaque, on vérifie l'état des artères coronaires : si elles sont atteintes, elles pourront être traitées lors de la même intervention.` },
      { label: 'Arret cardiaque recupere d\'origine non determinee', explication: `Après un arrêt cardiaque dont la cause est inconnue, la coronarographie recherche une artère bouchée, cause la plus fréquente de ce type d'accident.` },
      { label: 'Bilan de douleurs thoraciques atypiques avec facteurs de risque multiples', explication: `Quand des douleurs inhabituelles surviennent chez une personne à risque, cet examen permet de trancher définitivement sur l'état des artères du cœur.` },
    ],
  },
  {
    slug: 'catheterisme-cardiaque',
    title: 'Catheterisme cardiaque droit et gauche',
    shortTitle: 'Catheterisme cardiaque',
    image: '/images/fiches/cardio-catheterisme-cardiaque.webp',
    description:
      "Exploration hemodynamique invasive des cavites cardiaques droites et gauches par catheterisme, mesurant les pressions intracardiaques et les debits pour evaluer la fonction cardiaque globale.",
    fullDescription: `Le catheterisme cardiaque droit et gauche est un examen hemodynamique invasif qui consiste a introduire des catheters dans les cavites cardiaques pour mesurer directement les pressions intracardiaques, les debits sanguins et les resistances vasculaires. Le catheterisme droit explore l'oreillette droite, le ventricule droit et l'artere pulmonaire, tandis que le catheterisme gauche explore l'aorte et le ventricule gauche.

Le catheterisme droit est realise en introduisant un catheter (generalement un catheter de Swan-Ganz) par une veine, typiquement la veine jugulaire interne, la veine sous-claviere ou la veine femorale. Ce catheter est guide jusqu'a l'artere pulmonaire et permet de mesurer les pressions dans les cavites droites, la pression capillaire pulmonaire (reflet indirect de la pression dans l'oreillette gauche), le debit cardiaque et les resistances vasculaires pulmonaires.

Le catheterisme gauche est realise par voie arterielle (retrograde) ou par voie transseptale. Il permet de mesurer les pressions dans l'aorte et le ventricule gauche, de calculer les gradients transvalvulaires (en cas de stenose aortique ou mitrale) et d'evaluer la fonction contractile du ventricule gauche par ventriculographie (injection de contraste dans le ventricule).

A la Clinique Pasteur de Tunis, le catheterisme cardiaque est realise par des cardiologues interventionnels hautement qualifies dans un laboratoire de catheterisme equipe des technologies les plus avancees. Chaque procedure est adaptee a l'indication specifique du patient pour obtenir les informations hemodynamiques necessaires a la prise de decision therapeutique.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 6 heures',
      'Bilan sanguin prealable complet (creatinine, coagulation, NFS)',
      'Signaler toute allergie, en particulier au produit de contraste',
      'Signaler tous les traitements en cours, notamment anticoagulants',
      'Hospitalisation generalement necessaire (24 a 48 heures)',
      'ECG et echocardiographie recents a apporter',
      'Informer le medecin de tout antecedent d\'insuffisance renale',
    ],
    deroulement: [
      'Installation sur la table de catheterisme sous monitoring continu (ECG, tension, saturation)',
      'Desinfection et anesthesie locale du ou des points de ponction',
      'Pour le catheterisme droit : ponction veineuse (jugulaire, sous-claviere ou femorale)',
      'Introduction du catheter de Swan-Ganz et progression dans les cavites droites',
      'Mesure des pressions dans l\'oreillette droite, le ventricule droit, l\'artere pulmonaire',
      'Mesure de la pression capillaire pulmonaire et du debit cardiaque',
      'Pour le catheterisme gauche : ponction arterielle (radiale ou femorale)',
      'Introduction du catheter et progression retrograde jusqu\'au ventricule gauche',
      'Mesure des pressions aortique et ventriculaire gauche',
      'Ventriculographie gauche si necessaire (injection de contraste)',
      'Calcul des resistances vasculaires, des debits et des indices hemodynamiques',
      'Retrait des catheters et compression des points de ponction',
    ],
    duree: '45 minutes a 1h30 selon l\'etendue de l\'exploration ; hospitalisation de 24 a 48 heures',
    resultats:
      'Les resultats hemodynamiques sont disponibles immediatement. Un compte-rendu complet avec toutes les mesures de pressions, debits et resistances est redige et discute avec l\'equipe medicale pour guider la strategie therapeutique.',
    risques: [
      'Hematome au point de ponction',
      'Trouble du rythme cardiaque lors du passage du catheter (generalement transitoire)',
      'Pneumothorax en cas de ponction sous-claviere ou jugulaire (rare)',
      'Perforation cardiaque (exceptionnelle)',
      'Infection au point de ponction (rare avec les precautions d\'asepsie)',
      'Reaction vagale (malaise, ralentissement du coeur)',
      'Embolie gazeuse (exceptionnelle)',
      'Reaction au produit de contraste (si ventriculographie)',
    ],
    indications: [
      { label: 'Hypertension arterielle pulmonaire : diagnostic et evaluation de la severite', explication: `Quand la pression est trop élevée dans les artères des poumons, seule cette mesure directe permet de confirmer la maladie et d'en apprécier la gravité.` },
      { label: 'Insuffisance cardiaque severe : evaluation hemodynamique avant transplantation', explication: `Chez un patient dont le cœur est très affaibli, l'examen mesure précisément les pressions et les débits pour préparer les décisions thérapeutiques majeures.` },
      { label: 'Valvulopathie severe : evaluation du retentissement hemodynamique', explication: `Lorsqu'une valve est très abîmée, ces mesures directes précisent l'impact réel sur le fonctionnement du cœur et aident à choisir le meilleur moment pour intervenir.` },
      { label: 'Cardiomyopathie restrictive versus pericardite constrictive', explication: `Deux maladies qui raidissent le cœur peuvent se ressembler beaucoup ; l'étude des pressions à l'intérieur du cœur permet de les distinguer et d'adapter le traitement.` },
      { label: 'Cardiopathie congenitale complexe : evaluation des shunts et des pressions', explication: `En cas de malformation cardiaque de naissance, l'examen mesure les passages anormaux de sang entre les cavités et guide la stratégie de correction.` },
      { label: 'Bilan pre-transplantation cardiaque', explication: `Avant une greffe du cœur, ces mesures très précises vérifient notamment l'état de la circulation pulmonaire, une condition essentielle au succès de la transplantation.` },
      { label: 'Choc cardiogenique : aide a la prise en charge therapeutique', explication: `Dans les situations où le cœur n'assure plus une circulation suffisante, la surveillance continue des pressions aide l'équipe à ajuster les traitements en temps réel.` },
      { label: 'Evaluation de la reponse aux vasodilatateurs pulmonaires', explication: `L'examen teste directement l'effet de médicaments destinés à détendre les artères des poumons, afin de choisir le traitement le plus efficace pour chaque patient.` },
    ],
  },
  {
    slug: 'angioplastie-stent',
    title: 'Angioplastie coronaire avec pose de stent',
    shortTitle: 'Angioplastie + stent',
    image: '/images/fiches/cardio-angioplastie-stent.webp',
    description:
      "Intervention percutanee visant a dilater une artere coronaire retrecie par l'atherosclerose et a y placer un stent (ressort metallique) pour maintenir l'artere ouverte.",
    fullDescription: `L'angioplastie coronaire avec pose de stent est une intervention de cardiologie interventionnelle qui vise a retablir un flux sanguin normal dans une artere coronaire retrecie ou obstruee par des plaques d'atherome. Cette procedure est realisee par voie percutanee, c'est-a-dire sans ouverture chirurgicale du thorax, en introduisant un catheter par une artere peripherique.

La technique consiste a positionner un catheter muni d'un ballonnet gonflable au niveau de la stenose coronarienne identifiee prealablement par coronarographie. Le ballonnet est gonfle a haute pression pour ecraser la plaque d'atherome contre la paroi arterielle et redonner un calibre normal au vaisseau. Un stent, petit treillis metallique cylindrique, est ensuite deploye a ce niveau pour maintenir l'artere ouverte et prevenir la restenose (re-retrecissement).

Les stents utilises actuellement sont majoritairement des stents actifs (DES - Drug Eluting Stent), impregnes d'un medicament antiproliferatif qui est libere progressivement et reduit considerablement le risque de restenose par rapport aux stents nus. Apres la pose d'un stent actif, un traitement antiagreggant plaquettaire double (generalement aspirine + clopidogrel ou prasugrel ou ticagrelor) est indispensable pendant 6 a 12 mois pour prevenir la thrombose de stent.

A la Clinique Pasteur de Tunis, les angioplasties sont realisees par des cardiologues interventionnels experimentes utilisant les dernieres generations de stents actifs et les techniques les plus modernes (imagerie intracoronaire par IVUS ou OCT si necessaire). Le taux de succes de la procedure depasse 95%.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 6 heures',
      'Bilan sanguin complet prealable (NFS, creatinine, coagulation, groupe sanguin)',
      'Prise d\'un traitement antiagreggant plaquettaire prealable (dose de charge prescrite par le cardiologue)',
      'Signaler toute allergie, en particulier a l\'aspirine, aux anticoagulants ou au produit de contraste',
      'Signaler tout antecedent de saignement ou de trouble de la coagulation',
      'Signaler toute insuffisance renale',
      'Hospitalisation necessaire (minimum 24 a 48 heures)',
      'Un consentement eclaire signe est obligatoire avant la procedure',
      'Apporter tous les resultats d\'examens cardiologiques anterieurs',
    ],
    deroulement: [
      'Installation en salle de catheterisme sous monitoring continu',
      'Desinfection et anesthesie locale du point de ponction arteriel (poignet ou aine)',
      'Ponction arterielle et mise en place de l\'introducteur',
      'Coronarographie diagnostique pour confirmer les lesions a traiter',
      'Administration d\'heparine intraveineuse pour prevenir la formation de caillots',
      'Avancement d\'un guide fin a travers la stenose coronaire',
      'Predilatation de la stenose au ballonnet si necessaire',
      'Positionnement et deploiement du stent au niveau de la lesion',
      'Post-dilatation au ballonnet a haute pression pour optimiser l\'expansion du stent',
      'Controle angiographique final pour verifier le resultat',
      'Imagerie intracoronaire (IVUS/OCT) si necessaire pour optimiser le resultat',
      'Retrait du materiel et hemostase du point de ponction',
      'Transfert en unite de surveillance continue pour monitoring post-procedure',
    ],
    duree: '45 minutes a 2 heures selon la complexite ; hospitalisation de 24 a 72 heures',
    resultats:
      'Le resultat de l\'angioplastie est visible immediatement sur les images de controle. Le cardiologue discute du resultat avec le patient et sa famille des la fin de la procedure. Un traitement medicamenteux strict est prescrit a la sortie, avec un suivi cardiologique programme.',
    risques: [
      'Hematome ou complication vasculaire au point de ponction',
      'Dissection coronaire (traitee par la pose de stents supplementaires)',
      'Occlusion aigue du vaisseau traite (necessitant un traitement immediat)',
      'Embolisation distale de materiel atherosclero-thrombotique',
      'Infarctus du myocarde periprocedural (elevation enzymatique)',
      'Perforation coronaire (rare, necessitant un traitement urgent)',
      'Thrombose de stent (rare, prevenue par le traitement antiagreggant)',
      'Insuffisance renale liee au produit de contraste',
      'Reaction allergique au produit de contraste ou aux materiaux du stent',
      'Accident vasculaire cerebral (exceptionnel)',
      'Deces (exceptionnel, moins de 0.5% dans les procedures programmees)',
    ],
    indications: [
      { label: 'Syndrome coronarien aigu (infarctus du myocarde, angor instable)', explication: `En cas d'infarctus, déboucher rapidement l'artère responsable et y poser un stent est le traitement de référence : chaque minute gagnée préserve le muscle cardiaque.` },
      { label: 'Angor stable avec lesion coronaire significative et ischemie documentee', explication: `Quand un rétrécissement d'artère prouvé provoque des douleurs à l'effort, l'angioplastie rétablit une bonne circulation et fait disparaître les symptômes.` },
      { label: 'Stenose coronaire serree symptomatique malgre un traitement medical optimal', explication: `Si les médicaments ne suffisent plus à soulager les douleurs liées à une artère très rétrécie, l'ouverture mécanique du vaisseau devient la solution la plus efficace.` },
      { label: 'Restenose intra-stent', explication: `Il arrive qu'un stent déjà posé se rétrécisse à nouveau avec le temps ; une nouvelle intervention permet alors de restaurer le passage du sang.` },
      { label: 'Lesions coronaires multitronculaires en alternative au pontage (discussion en Heart Team)', explication: `Quand plusieurs artères sont atteintes, une équipe réunissant cardiologues et chirurgiens étudie chaque dossier pour choisir entre stents et pontage la solution la plus adaptée.` },
      { label: 'Stenose du tronc commun gauche non protege (cas selectionnes)', explication: `Le rétrécissement de cette artère principale du cœur peut, dans certains cas bien choisis, être traité par angioplastie plutôt que par chirurgie, après une évaluation approfondie.` },
    ],
  },
  {
    slug: 'valvuloplastie-percutanee',
    title: 'Valvuloplastie percutanee',
    shortTitle: 'Valvuloplastie',
    image: '/images/fiches/cardio-valvuloplastie-percutanee.webp',
    description:
      "Dilatation percutanee d'une valve cardiaque retrecie (stenosee) a l'aide d'un ballonnet gonfle a travers la valve, evitant le recours a une chirurgie cardiaque a coeur ouvert.",
    fullDescription: `La valvuloplastie percutanee est une intervention de cardiologie interventionnelle qui consiste a dilater une valve cardiaque retrecie (stenosee) en utilisant un catheter muni d'un ballonnet. Cette technique permet de traiter certaines stenoses valvulaires sans recourir a une chirurgie cardiaque a coeur ouvert, offrant une alternative moins invasive avec une recuperation plus rapide.

La valvuloplastie mitrale percutanee (commissurotomie mitrale percutanee) est la procedure la plus couramment realisee. Elle est indiquee dans la stenose mitrale rhumatismale, pathologie encore frequente en Tunisie et dans les pays du Maghreb. La technique consiste a introduire un ballonnet special (ballonnet d'Inoue) par voie veineuse femorale, a traverser le septum inter-auriculaire par ponction transseptale, puis a gonfler le ballonnet au niveau de la valve mitrale pour separer les commissures fusionnees.

La valvuloplastie aortique percutanee peut egalement etre realisee dans la stenose aortique severe, principalement comme traitement palliatif ou comme pont vers un remplacement valvulaire aortique (chirurgical ou transcatheter - TAVI). La technique consiste a introduire un ballonnet par voie arterielle femorale retrograde et a le gonfler au niveau de la valve aortique.

A la Clinique Pasteur de Tunis, les valvuloplasties percutanees sont realisees par des cardiologues interventionnels ayant une expertise reconnue dans les interventions valvulaires percutanees. La clinique dispose d'un plateau technique complet incluant l'echocardiographie transaesophagienne peroprocedure pour guider et optimiser le resultat.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 8 heures',
      'Bilan sanguin complet (NFS, coagulation, creatinine, groupe sanguin, RAI)',
      'Echocardiographie transthoracique et transoesophagienne recentes',
      'Eliminer la presence d\'un thrombus dans l\'oreillette gauche (ETO obligatoire avant valvuloplastie mitrale)',
      'Signaler toute allergie, en particulier au produit de contraste iode',
      'Arret des anticoagulants oraux selon les instructions du cardiologue',
      'Hospitalisation necessaire (2 a 4 jours)',
      'Consentement eclaire signe obligatoire',
      'Bilan dentaire pour eliminer tout foyer infectieux',
      'Scanner cardiaque si indique',
    ],
    deroulement: [
      'Installation en salle de catheterisme sous anesthesie locale et sedation legere',
      'Monitoring continu (ECG, tension arterielle, saturation en oxygene)',
      'Echocardiographie transoesophagienne peroprocedure pour guidage',
      'Ponction veineuse femorale et mise en place de l\'introducteur',
      'Pour la valve mitrale : ponction transseptale pour acceder a l\'oreillette gauche',
      'Administration d\'heparine intraveineuse',
      'Avancement et positionnement du catheter a ballonnet au niveau de la valve stenosee',
      'Gonflage progressif du ballonnet pour dilater la valve',
      'Evaluation immediate du resultat par echocardiographie et mesure des gradients de pression',
      'Si necessaire, gonflage(s) supplementaire(s) avec un volume de ballonnet legerement superieur',
      'Controle final hemodynamique et echocardiographique',
      'Retrait du materiel et hemostase du point de ponction',
      'Transfert en unite de soins intensifs pour surveillance postoperatoire',
    ],
    duree: '1 a 2 heures pour la procedure ; hospitalisation de 2 a 4 jours',
    resultats:
      'Le resultat est evalue immediatement pendant la procedure par echocardiographie et mesure des gradients de pression. La reduction de la stenose est generalement significative des le premier gonflage. Un controle echocardiographique est realise le lendemain et une consultation de suivi est programmee a 1 mois.',
    risques: [
      'Insuffisance mitrale ou aortique significative (principale complication, pouvant necessiter une chirurgie)',
      'Tamponnade cardiaque par perforation (rare, necessitant un drainage en urgence)',
      'Embolie systemique (AVC ou embolie peripherique)',
      'Trouble du rythme cardiaque (fibrillation auriculaire, bloc auriculo-ventriculaire)',
      'Hematome ou complication vasculaire au point de ponction',
      'Communication inter-auriculaire residuelle apres ponction transseptale (generalement sans consequence)',
      'Reaction allergique au produit de contraste',
      'Insuffisance renale liee au produit de contraste',
      'Restenose valvulaire a moyen ou long terme (necessitant une reintervention)',
      'Deces periprocedural (exceptionnel, moins de 0.5%)',
    ],
    indications: [
      { label: 'Stenose mitrale rhumatismale symptomatique avec anatomie valvulaire favorable', explication: `Quand la valve mitrale, rétrécie à la suite d'un rhumatisme articulaire, provoque essoufflement et fatigue, elle peut être élargie au ballonnet si sa forme s'y prête, sans ouvrir le thorax.` },
      { label: 'Stenose mitrale serree avec surface valvulaire inferieure a 1.5 cm2', explication: `Lorsque l'ouverture de la valve devient très étroite, le sang passe difficilement vers le cœur ; la dilatation redonne à la valve un passage suffisant.` },
      { label: 'Stenose mitrale avec hypertension arterielle pulmonaire', explication: `Un rétrécissement mitral peut faire monter la pression dans les poumons ; élargir la valve soulage cette pression et protège le cœur droit.` },
      { label: 'Stenose mitrale chez la femme enceinte (alternative a la chirurgie)', explication: `Pendant la grossesse, cette technique douce permet de traiter un rétrécissement mal toléré de la valve en évitant une chirurgie à cœur ouvert, plus lourde pour la maman et le bébé.` },
      { label: 'Stenose aortique severe symptomatique chez le patient inoperable (traitement palliatif)', explication: `Chez les personnes trop fragiles pour une chirurgie, la dilatation de la valve aortique apporte un soulagement des symptômes et améliore le confort de vie.` },
      { label: 'Stenose aortique severe comme pont vers un TAVI ou un remplacement chirurgical', explication: `La dilatation peut servir d'étape intermédiaire : elle soulage rapidement le patient en attendant le remplacement définitif de la valve dans de meilleures conditions.` },
      { label: 'Stenose pulmonaire congenitale severe', explication: `Quand la valve pulmonaire est rétrécie depuis la naissance, le ballonnet permet de l'ouvrir efficacement et d'éviter le plus souvent une opération chirurgicale.` },
    ],
  },
];
