export const examensCardiaques = [
  {
    slug: 'ecg-repos',
    title: 'Electrocardiogramme (ECG) de repos',
    shortTitle: 'ECG de repos',
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
      'Douleurs thoraciques ou oppression',
      'Palpitations ou sensation de coeur irregulier',
      'Essoufflement inhabituel',
      'Malaise, vertiges ou perte de connaissance',
      'Bilan prealable a une intervention chirurgicale',
      'Suivi de pathologies cardiaques connues',
      'Bilan de sante chez les patients a risque cardiovasculaire',
      'Controle sous traitement cardiologique',
    ],
  },
  {
    slug: 'ecg-effort-tapis',
    title: "Electrocardiogramme d'effort sur tapis roulant",
    shortTitle: "ECG d'effort",
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
      'Douleur thoracique suspecte d\'origine coronarienne',
      'Bilan de facteurs de risque cardiovasculaires multiples',
      'Evaluation de la capacite fonctionnelle a l\'effort',
      'Suivi apres infarctus du myocarde ou angioplastie',
      'Bilan avant reprise d\'activite sportive chez un patient cardiaque',
      'Evaluation de troubles du rythme declenches par l\'effort',
      'Certificat d\'aptitude sportive chez les sujets a risque',
    ],
  },
  {
    slug: 'holter-ecg',
    title: 'Holter ECG (enregistrement continu 24h-48h-72h)',
    shortTitle: 'Holter ECG',
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
      'Palpitations intermittentes',
      'Malaises ou syncopes inexpliques',
      'Evaluation de la frequence cardiaque sur 24 heures',
      'Suivi d\'une fibrillation auriculaire paroxystique',
      'Controle de l\'efficacite d\'un traitement anti-arythmique',
      'Surveillance apres ablation de trouble du rythme',
      'Evaluation d\'une bradycardie ou de pauses cardiaques',
      'Bilan de palpitations nocturnes ou de dyspnee paroxystique',
    ],
  },
  {
    slug: 'holter-tensionnel',
    title: 'Holter tensionnel (MAPA)',
    shortTitle: 'Holter tensionnel',
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
      'Confirmation du diagnostic d\'hypertension arterielle',
      'Suspicion d\'hypertension "blouse blanche"',
      'Suspicion d\'hypertension masquee',
      'Evaluation du profil tensionnel nocturne',
      'Controle de l\'efficacite d\'un traitement antihypertenseur',
      'Hypertension arterielle resistante au traitement',
      'Bilan d\'episodes d\'hypotension symptomatique',
      'Evaluation tensionnelle chez la femme enceinte',
    ],
  },
  {
    slug: 'echocardiographie-ett',
    title: 'Echocardiographie transthoracique (ETT)',
    shortTitle: 'Echo cardiaque',
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
      'Souffle cardiaque a l\'auscultation',
      'Insuffisance cardiaque ou essoufflement inexplique',
      'Douleurs thoraciques',
      'Bilan apres un infarctus du myocarde',
      'Surveillance de valvulopathie connue',
      'Hypertension arterielle (recherche de retentissement cardiaque)',
      'Bilan de cardiomyopathie',
      'Recherche de cardiopathie congenitale',
      'Evaluation preoperatoire cardiaque',
      'Bilan d\'endocardite infectieuse suspectee',
    ],
  },
  {
    slug: 'echocardiographie-eto',
    title: 'Echocardiographie transoesophagienne (ETO)',
    shortTitle: 'Echo transoesophagienne',
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
      'Recherche de thrombus intra-auriculaire avant cardioversion',
      'Bilan d\'endocardite infectieuse',
      'Evaluation precise de la valve mitrale avant chirurgie',
      'Evaluation des protheses valvulaires en cas de suspicion de dysfonction',
      'Recherche de foramen ovale permeable (FOP)',
      'Bilan d\'accident vasculaire cerebral chez le sujet jeune',
      'Guidage peroperation lors de chirurgie cardiaque',
      'Suspicion de dissection aortique',
    ],
  },
  {
    slug: 'echocardiographie-stress',
    title: 'Echocardiographie de stress',
    shortTitle: 'Echo de stress',
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
      'Suspicion de maladie coronarienne chez un patient ne pouvant pas faire d\'effort maximal',
      'ECG d\'effort non interpretable ou douteux',
      'Evaluation de la viabilite myocardique apres infarctus',
      'Bilan preoperatoire chez un patient a risque cardiovasculaire',
      'Evaluation de la severite d\'une valvulopathie a l\'effort',
      'Suivi apres revascularisation coronaire',
      'Evaluation de la reserve contractile du myocarde',
    ],
  },
  {
    slug: 'epreuve-effort-monitoring',
    title: "Epreuve d'effort sur tapis roulant avec monitoring",
    shortTitle: "Epreuve d'effort",
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
      'Diagnostic de maladie coronarienne',
      'Evaluation de la capacite fonctionnelle (en METs)',
      'Bilan apres syndrome coronarien aigu',
      'Prescription de readaptation cardiaque',
      'Evaluation de la competence chronotrope',
      'Recherche de troubles du rythme d\'effort',
      'Bilan de dyspnee d\'effort',
      'Evaluation de la reponse tensionnelle a l\'effort',
      'Aptitude sportive chez le patient cardiaque',
    ],
  },
  {
    slug: 'coronarographie',
    title: 'Coronarographie diagnostique',
    shortTitle: 'Coronarographie',
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
      'Syndrome coronarien aigu (infarctus, angor instable)',
      'Angor stable resistant au traitement medical',
      'Tests non invasifs fortement positifs pour l\'ischemie myocardique',
      'Insuffisance cardiaque d\'origine ischemique suspectee',
      'Bilan preoperatoire de chirurgie valvulaire chez le patient a risque coronarien',
      'Arret cardiaque recupere d\'origine non determinee',
      'Bilan de douleurs thoraciques atypiques avec facteurs de risque multiples',
    ],
  },
  {
    slug: 'catheterisme-cardiaque',
    title: 'Catheterisme cardiaque droit et gauche',
    shortTitle: 'Catheterisme cardiaque',
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
      'Hypertension arterielle pulmonaire : diagnostic et evaluation de la severite',
      'Insuffisance cardiaque severe : evaluation hemodynamique avant transplantation',
      'Valvulopathie severe : evaluation du retentissement hemodynamique',
      'Cardiomyopathie restrictive versus pericardite constrictive',
      'Cardiopathie congenitale complexe : evaluation des shunts et des pressions',
      'Bilan pre-transplantation cardiaque',
      'Choc cardiogenique : aide a la prise en charge therapeutique',
      'Evaluation de la reponse aux vasodilatateurs pulmonaires',
    ],
  },
  {
    slug: 'angioplastie-stent',
    title: 'Angioplastie coronaire avec pose de stent',
    shortTitle: 'Angioplastie + stent',
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
      'Syndrome coronarien aigu (infarctus du myocarde, angor instable)',
      'Angor stable avec lesion coronaire significative et ischemie documentee',
      'Stenose coronaire serree symptomatique malgre un traitement medical optimal',
      'Restenose intra-stent',
      'Lesions coronaires multitronculaires en alternative au pontage (discussion en Heart Team)',
      'Stenose du tronc commun gauche non protege (cas selectionnes)',
    ],
  },
  {
    slug: 'valvuloplastie-percutanee',
    title: 'Valvuloplastie percutanee',
    shortTitle: 'Valvuloplastie',
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
      'Stenose mitrale rhumatismale symptomatique avec anatomie valvulaire favorable',
      'Stenose mitrale serree avec surface valvulaire inferieure a 1.5 cm2',
      'Stenose mitrale avec hypertension arterielle pulmonaire',
      'Stenose mitrale chez la femme enceinte (alternative a la chirurgie)',
      'Stenose aortique severe symptomatique chez le patient inoperable (traitement palliatif)',
      'Stenose aortique severe comme pont vers un TAVI ou un remplacement chirurgical',
      'Stenose pulmonaire congenitale severe',
    ],
  },
];
