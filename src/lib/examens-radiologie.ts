export const examensRadiologie = [
  {
    slug: 'irm',
    title: 'IRM - Imagerie par Resonance Magnetique',
    shortTitle: 'IRM',
    description:
      "Technique d'imagerie medicale utilisant un champ magnetique puissant et des ondes radiofrequences pour obtenir des images detaillees des organes et tissus du corps, sans radiation ionisante.",
    fullDescription: `L'Imagerie par Resonance Magnetique (IRM) est une technique d'imagerie medicale de pointe qui utilise un champ magnetique puissant, des gradients de champ et des ondes radiofrequences pour produire des images extremement detaillees des structures anatomiques du corps humain. Contrairement au scanner ou a la radiographie, l'IRM n'utilise aucune radiation ionisante, ce qui en fait un examen particulierement sur pour le patient.

Le principe de l'IRM repose sur les proprietes magnetiques des atomes d'hydrogene presents en grande quantite dans les tissus du corps. Lorsque le patient est place dans le champ magnetique de l'appareil, ces atomes s'alignent puis, sous l'effet d'impulsions radiofrequences, emettent des signaux qui sont captes et transformes en images par un ordinateur. Selon les sequences utilisees, l'IRM permet de distinguer avec une precision remarquable les differents types de tissus : muscles, tendons, ligaments, cartilages, organes, vaisseaux et structures cerebrales.

L'IRM est particulierement performante pour l'exploration du cerveau et de la moelle epiniere, des articulations et de l'appareil locomoteur, du foie et des voies biliaires, du pelvis et des organes genitaux, ainsi que du coeur et des vaisseaux. Elle est egalement indispensable dans le bilan d'extension de nombreux cancers et le suivi post-therapeutique.

A la Clinique Pasteur de Tunis, l'IRM est realisee sur un appareil de derniere generation offrant une qualite d'image optimale. L'equipe de radiologues specialises et de manipulateurs experimentes assure une prise en charge personnalisee, avec des protocoles adaptes a chaque indication clinique. Les resultats sont interpretes rapidement par des radiologues experts.`,
    preparation: [
      'Retirer tous les objets metalliques : bijoux, montre, piercing, protheses dentaires amovibles',
      'Signaler tout implant metallique : pacemaker, prothese, clips chirurgicaux, stent, valve cardiaque',
      'Signaler toute grossesse ou suspicion de grossesse',
      'En cas d\'IRM avec injection de gadolinium, un bilan renal recent (creatinine) peut etre demande',
      'Etre a jeun depuis 4 heures pour les IRM abdominales (sinon, aucun jeune necessaire)',
      'Porter des vetements confortables sans elements metalliques (une blouse peut etre fournie)',
      'Signaler toute claustrophobie au moment de la prise de rendez-vous',
      'Apporter les examens d\'imagerie anterieurs et l\'ordonnance du medecin',
    ],
    deroulement: [
      'Le patient est installe sur la table d\'examen, allonge sur le dos dans la majorite des cas',
      'Une antenne est placee sur la region a examiner pour ameliorer la qualite des images',
      'La table glisse a l\'interieur de l\'aimant (tunnel)',
      'Le patient doit rester immobile pendant toute la duree de l\'examen',
      'Des bruits forts et repetitifs sont emis par la machine (des bouchons d\'oreilles ou un casque sont fournis)',
      'Un interphone permet de communiquer a tout moment avec l\'equipe medicale',
      'En cas d\'injection de produit de contraste (gadolinium), une perfusion est posee au bras',
      'Plusieurs sequences d\'acquisition sont realisees, entrecoupees de courtes pauses',
    ],
    duree: '20 a 45 minutes selon la region exploree et le protocole',
    resultats:
      'Les images sont analysees par le radiologue qui redige un compte-rendu detaille. Les resultats sont generalement disponibles sous 24 a 48 heures et transmis au medecin prescripteur.',
    risques: [
      'Aucune radiation ionisante : examen considere comme tres sur',
      'Reaction allergique au gadolinium (tres rare)',
      'Risque lie aux implants metalliques ferromagnetiques (contre-indication absolue pour certains pacemakers anciens)',
      'Fibrose nephrogenique systemique en cas d\'insuffisance renale severe avec injection de gadolinium (exceptionnelle)',
      'Sensation de claustrophobie chez certains patients (prise en charge possible avec sedation legere)',
      'Sensation de chaleur localisee pendant l\'examen (normale et transitoire)',
    ],
    indications: [
      'Pathologies cerebrales : tumeurs, AVC, sclerose en plaques, epilepsie',
      'Pathologies rachidiennes : hernie discale, stenose canalaire, tumeurs',
      'Pathologies articulaires : lesions meniscales, ligamentaires, cartilagineuses',
      'Bilan d\'extension et suivi des cancers',
      'Pathologies hepatiques et biliaires',
      'Pathologies pelviennes : uterus, ovaires, prostate, rectum',
      'Angiographie par resonance magnetique (ARM) des vaisseaux',
      'Pathologies cardiaques : IRM cardiaque de stress, viabilite myocardique',
    ],
  },
  {
    slug: 'scanner',
    title: 'Scanner double energie',
    shortTitle: 'Scanner',
    description:
      "Scanner de derniere generation utilisant la technologie double energie pour une differenciation tissulaire superieure, permettant des diagnostics plus precis avec une dose de radiation optimisee.",
    fullDescription: `Le scanner double energie, egalement appele tomodensitometrie spectrale, represente une avancee majeure dans le domaine de l'imagerie medicale. Cette technologie innovante utilise simultanement deux niveaux d'energie de rayons X differents, permettant une analyse spectrale des tissus traverses. Cette approche offre des capacites diagnostiques considerablement superieures a celles du scanner conventionnel a simple energie.

Le principe du scanner double energie repose sur le fait que les differents tissus et materiaux du corps humain absorbent les rayons X de maniere variable selon leur niveau d'energie. En combinant les informations obtenues a deux energies distinctes, le scanner peut differencier des structures qui apparaissent identiques sur un scanner classique : par exemple, distinguer un calcul d'urate d'un calcul d'oxalate de calcium, identifier la composition d'une plaque d'atherome, ou encore differencier un hematome recent d'un ancien.

Cette technologie permet egalement de reduire significativement les artefacts metalliques lies aux protheses, d'ameliorer la visualisation des prises de contraste tumorales, de realiser des cartographies virtuelles sans injection et de reduire la dose de radiation delivree au patient. Le scanner double energie est particulierement performant en oncologie, en urologie, en cardiologie et en pathologie vasculaire.

A la Clinique Pasteur de Tunis, le scanner double energie est realise sur un appareil de derniere generation offrant une resolution spatiale et temporelle exceptionnelle. L'equipe de radiologues experts exploite pleinement les capacites de cette technologie pour fournir des diagnostics precis et rapides, dans un souci constant de radioprotection du patient.`,
    preparation: [
      'Signaler toute allergie connue, en particulier aux produits de contraste iodes',
      'Signaler toute insuffisance renale ou pathologie renale connue',
      'Etre a jeun depuis 4 heures en cas d\'injection de produit de contraste',
      'Un bilan renal recent (creatinine, clairance) est necessaire avant injection',
      'Signaler toute grossesse ou suspicion de grossesse (contre-indication formelle)',
      'Signaler les traitements en cours, notamment la metformine (diabete)',
      'Retirer les objets metalliques de la zone examinee',
      'Apporter l\'ordonnance medicale et les examens anterieurs',
    ],
    deroulement: [
      'Le patient est installe sur la table du scanner, generalement allonge sur le dos',
      'Un topogramme (image de reperage) est d\'abord realise',
      'En cas d\'injection, un catheter est pose dans une veine du bras',
      'Le produit de contraste iode est injecte par voie intraveineuse a l\'aide d\'un injecteur automatique',
      'La table se deplace a travers l\'anneau du scanner pendant l\'acquisition',
      'Plusieurs passages peuvent etre necessaires (avant et apres injection, a differents temps)',
      'Le patient doit rester immobile et suivre les consignes respiratoires (inspiration bloquee)',
      'L\'examen est indolore, seule une sensation de chaleur est ressentie lors de l\'injection',
    ],
    duree: '10 a 20 minutes (acquisition rapide, quelques secondes par passage)',
    resultats:
      'Les images sont reconstruites et analysees par le radiologue. Le compte-rendu est generalement disponible sous 24 a 48 heures. En urgence, les resultats sont communiques immediatement au medecin prescripteur.',
    risques: [
      'Exposition aux rayons X (dose optimisee grace a la technologie double energie)',
      'Reaction allergique au produit de contraste iode (urticaire, oedeme, choc anaphylactique - rare)',
      'Insuffisance renale aigue liee au produit de contraste (nephropathie induite - rare)',
      'Extravasation du produit de contraste au point d\'injection (douleur locale, generalement benigne)',
      'Contre-indication formelle en cas de grossesse',
      'Interaction avec la metformine (arret temporaire 48h apres injection chez les patients diabetiques)',
    ],
    indications: [
      'Bilan et suivi des cancers : detection, extension, evaluation de la reponse therapeutique',
      'Pathologies vasculaires : angioscanner, embolie pulmonaire, dissection aortique',
      'Pathologies thoraciques : nodules pulmonaires, pneumopathies, mediastin',
      'Pathologies abdominales et pelviennes : foie, pancreas, reins, colon',
      'Pathologies urologiques : calculs urinaires avec analyse de composition',
      'Pathologies osteo-articulaires : fractures complexes, recherche de metastases osseuses',
      'Bilan cardiologique : coroscanner, score calcique',
      'Urgences : traumatismes, AVC, abdomen aigu',
    ],
  },
  {
    slug: 'radiologie-conventionnelle',
    title: 'Radiologie conventionnelle - table telecommandee',
    shortTitle: 'Radiologie conventionnelle',
    description:
      "Examen radiologique realise sur table telecommandee permettant des explorations dynamiques en temps reel, notamment les transits digestifs et les examens avec opacification.",
    fullDescription: `La radiologie conventionnelle sur table telecommandee est une technique d'imagerie qui combine les principes de la radiographie classique avec la possibilite de realiser des examens dynamiques en temps reel. La table telecommandee permet au radiologue de modifier la position du patient et l'incidence des rayons X a distance, tout en visualisant les images en direct sur un ecran, offrant ainsi une exploration complete et precise des structures anatomiques.

Cette technique est particulierement adaptee aux explorations du tube digestif (transit oeso-gastro-duodenal, lavement baryte, transit du grele), aux examens urologiques (urographie intraveineuse, cystographie), aux arthrographies et aux hysterosalpingographies. L'utilisation de produits de contraste (baryte ou iode) permet de visualiser en temps reel le passage du produit dans les organes creux, revelant d'eventuelles anomalies morphologiques ou fonctionnelles.

La table telecommandee moderne est equipee d'un systeme de fluoroscopie numerique qui offre une qualite d'image excellente tout en reduisant significativement la dose de radiation delivree au patient. Le radiologue controle l'ensemble de l'examen depuis la console de commande, guidant les mouvements de la table et les acquisitions d'images en fonction des constatations en temps reel.

A la Clinique Pasteur de Tunis, la table telecommandee de derniere generation permet de realiser l'ensemble des examens de radiologie conventionnelle avec contraste dans des conditions optimales de qualite et de securite. L'equipe de radiologues experimentes adapte le protocole a chaque situation clinique pour un diagnostic precis.`,
    preparation: [
      'Etre a jeun depuis 6 heures pour les explorations digestives',
      'Pour le lavement baryte : preparation colique selon les instructions fournies (regime sans residus, laxatifs)',
      'Signaler toute allergie aux produits de contraste (baryte, iode)',
      'Signaler toute grossesse ou suspicion de grossesse',
      'Signaler les antecedents chirurgicaux digestifs',
      'Apporter l\'ordonnance du medecin et les examens anterieurs',
      'Porter des vetements faciles a retirer et sans elements metalliques',
    ],
    deroulement: [
      'Le patient est installe sur la table telecommandee',
      'Le radiologue explique le deroulement de l\'examen et les consignes a suivre',
      'Un produit de contraste est administre par voie orale, rectale ou intraveineuse selon l\'examen',
      'Le radiologue suit la progression du produit de contraste en temps reel sur l\'ecran (fluoroscopie)',
      'La table est basculee dans differentes positions pour visualiser toutes les structures',
      'Des cliches radiographiques sont realises aux moments cles de l\'examen',
      'Le patient doit suivre les consignes de positionnement et de respiration du radiologue',
      'En fin d\'examen, des cliches complementaires peuvent etre necessaires',
    ],
    duree: '15 a 45 minutes selon le type d\'exploration',
    resultats:
      'Les images sont analysees par le radiologue qui redige un compte-rendu. Les resultats sont disponibles sous 24 a 48 heures. En cas d\'urgence, les resultats sont communiques immediatement.',
    risques: [
      'Exposition aux rayons X (dose reduite grace a la fluoroscopie numerique)',
      'Constipation transitoire apres ingestion de baryte (boire abondamment apres l\'examen)',
      'Reaction allergique au produit de contraste iode (rare)',
      'Perforation digestive lors d\'un lavement baryte (exceptionnelle)',
      'Contre-indication formelle en cas de grossesse',
      'Fausse route du produit de contraste en cas de troubles de la deglutition',
    ],
    indications: [
      'Transit oeso-gastro-duodenal : reflux, ulcere, hernie hiatale, tumeur',
      'Transit du grele : maladie de Crohn, occlusion, tumeur',
      'Lavement baryte : polypes, tumeur colique, diverticulose',
      'Cystographie : reflux vesico-ureteral, incontinence, tumeur vesicale',
      'Hysterosalpingographie : bilan d\'infertilite, permeabilite tubaire',
      'Arthrographie : lesions articulaires avant IRM ou en complement',
      'Exploration de la deglutition et des fistules digestives',
    ],
  },
  {
    slug: 'radiologie-osseuse',
    title: 'Radiologie osseuse - tables Os poumons capteur plan',
    shortTitle: 'Radiologie osseuse',
    description:
      "Radiographie numerique de haute resolution utilisant la technologie capteur plan pour l'exploration du squelette et des poumons, offrant des images de qualite superieure avec une dose de radiation minimale.",
    fullDescription: `La radiologie osseuse sur table equipee de capteurs plans represente l'evolution la plus recente de la radiographie conventionnelle. Le capteur plan numerique remplace les anciennes cassettes a film ou les plaques de phosphore par un detecteur electronique integre a la table, capable de convertir directement les rayons X en images numeriques de haute resolution. Cette technologie offre une qualite d'image nettement superieure tout en reduisant significativement la dose de radiation.

Le capteur plan permet une acquisition instantanee des images sans delai de traitement, une dynamique d'exposition elargie (moins de cliches a refaire), un post-traitement avance des images (ajustement du contraste, zoom, mesures) et une integration directe dans le systeme d'archivage numerique (PACS). Ces avantages se traduisent par un gain de temps pour le patient et une qualite diagnostique optimale pour le radiologue.

Cette technique est utilisee en premiere intention pour l'exploration de l'ensemble du squelette (fractures, arthrose, tumeurs osseuses, malformations), des poumons et du thorax (pneumopathies, pneumothorax, epanchements pleuraux, tumeurs), ainsi que de l'abdomen (occlusion intestinale, calcifications, corps etrangers). La radiographie reste l'examen d'imagerie le plus prescrit dans le monde et constitue souvent la premiere etape du bilan diagnostique.

A la Clinique Pasteur de Tunis, les salles de radiologie sont equipees de tables capteur plan de derniere generation, garantissant des images de qualite optimale pour un diagnostic fiable. Le systeme numerique permet une transmission rapide des images et un archivage securise dans le dossier patient informatise.`,
    preparation: [
      'Aucune preparation particuliere dans la majorite des cas',
      'Retirer les vetements et objets metalliques de la zone a radiographier (bijoux, ceinture, piercing)',
      'Signaler toute grossesse ou suspicion de grossesse',
      'Apporter l\'ordonnance du medecin precisant la region a explorer',
      'Apporter les radiographies anterieures pour comparaison si disponibles',
      'Pour les radiographies abdominales, un jeune peut etre recommande',
      'Porter des vetements faciles a retirer',
    ],
    deroulement: [
      'Le manipulateur en radiologie positionne le patient selon la region a explorer (debout, couche ou assis)',
      'Un tablier plombe protege les zones sensibles non examinees (gonades, thyroide)',
      'Le patient doit rester immobile pendant la prise du cliche (quelques secondes)',
      'Des consignes respiratoires sont donnees : inspiration bloquee pour les radiographies thoraciques',
      'L\'image apparait instantanement sur l\'ecran de controle grace au capteur plan',
      'Plusieurs incidences peuvent etre necessaires (face, profil, trois-quarts)',
      'Le manipulateur verifie la qualite des images avant de liberer le patient',
      'Les images sont transmises au radiologue pour interpretation',
    ],
    duree: '5 a 15 minutes selon le nombre de cliches necessaires',
    resultats:
      'Les images sont disponibles immediatement en numerique. Le compte-rendu du radiologue est generalement disponible sous 24 heures. En urgence, les resultats sont communiques immediatement au medecin traitant.',
    risques: [
      'Exposition aux rayons X (dose tres faible, optimisee par le capteur plan)',
      'Aucune douleur ni effet secondaire',
      'Contre-indication relative en cas de grossesse (protection plombee du foetus si examen indispensable)',
      'Risque theorique lie aux radiations ionisantes negligeable pour un examen ponctuel',
    ],
    indications: [
      'Fractures et traumatismes osseux',
      'Arthrose et pathologies articulaires degeneratives',
      'Tumeurs osseuses primitives et metastases',
      'Infections osseuses (osteomyelite, arthrite septique)',
      'Malformations osseuses et troubles de la croissance',
      'Pathologies pulmonaires : pneumopathie, pneumothorax, tumeur, epanchement pleural',
      'Bilan radiologique preoperatoire',
      'Surveillance post-operatoire de materiel d\'osteosynthese ou de protheses',
    ],
  },
  {
    slug: 'mammographie',
    title: 'Mammographie',
    shortTitle: 'Mammographie',
    description:
      "Examen radiologique specialise du sein permettant le depistage precoce du cancer du sein et le diagnostic des anomalies mammaires, utilisant une technique de compression controlee pour des images de haute resolution.",
    fullDescription: `La mammographie est l'examen de reference pour le depistage et le diagnostic des pathologies mammaires, en particulier le cancer du sein. Elle utilise des rayons X a faible dose, specifiquement adaptes a l'exploration du tissu mammaire, pour produire des images detaillees de l'interieur du sein. Cet examen permet de detecter des anomalies de tres petite taille, bien avant qu'elles ne soient palpables, ce qui en fait un outil de depistage precoce inestimable.

La mammographie repose sur le principe de la compression du sein entre deux plaques, ce qui permet de separer les structures mammaires, de reduire l'epaisseur du tissu a traverser et donc la dose de radiation, et d'obtenir des images d'une nettete optimale. Bien que cette compression puisse etre inconfortable voire legerement douloureuse, elle ne dure que quelques secondes par incidence et est indispensable a la qualite de l'examen.

La mammographie permet de detecter des microcalcifications (souvent premier signe d'un cancer debutant), des masses ou nodules, des distorsions architecturales du tissu mammaire, des asymetries de densite et des anomalies cutanees ou axillaires. En cas d'anomalie detectee, des examens complementaires peuvent etre proposes : echographie mammaire, biopsie sous guidage, IRM mammaire.

A la Clinique Pasteur de Tunis, la mammographie est realisee sur un mammographe numerique de derniere generation offrant une resolution d'image exceptionnelle avec une dose de radiation minimale. Les radiologues specialises en senologie assurent une lecture attentive et une prise en charge complete en cas d'anomalie detectee.`,
    preparation: [
      'Programmer l\'examen de preference en premiere partie de cycle menstruel (entre le 5e et le 15e jour) pour reduire la sensibilite des seins',
      'Ne pas appliquer de deodorant, de creme, de poudre ou de parfum sur les seins ou les aisselles le jour de l\'examen',
      'Porter des vetements deux pieces pour faciliter le deshabillage du haut du corps',
      'Retirer les bijoux du cou et de la poitrine',
      'Apporter les mammographies anterieures pour comparaison',
      'Signaler tout antecedent de chirurgie mammaire ou de protheses',
      'Signaler toute grossesse ou allaitement en cours',
    ],
    deroulement: [
      'Le manipulateur positionne le sein sur le plateau du mammographe',
      'Le sein est comprime entre deux plaques de maniere progressive et controlee',
      'Deux incidences standard sont realisees sur chaque sein : face (cranio-caudale) et oblique (mediolaterale oblique)',
      'La compression dure quelques secondes le temps de l\'acquisition de l\'image',
      'Des incidences complementaires peuvent etre realisees en cas de besoin (agrandissement, compression localisee)',
      'Le radiologue verifie la qualite des images et peut demander des cliches supplementaires',
      'L\'ensemble de l\'examen est generalement realise en moins de 15 minutes',
    ],
    duree: '10 a 15 minutes',
    resultats:
      'Les images sont analysees par un radiologue specialise en senologie. Les resultats sont classes selon la classification BI-RADS (de 0 a 6) et sont generalement disponibles sous 24 a 48 heures. En cas d\'anomalie, des examens complementaires sont proposes rapidement.',
    risques: [
      'Inconfort ou douleur mammaire transitoire liee a la compression (la plus frequente)',
      'Exposition aux rayons X (dose tres faible, benefice largement superieur au risque)',
      'Faux positifs possibles necessitant des examens complementaires (source d\'anxiete)',
      'Faux negatifs rares (notamment dans les seins tres denses)',
      'Contre-indication en cas de grossesse',
    ],
    indications: [
      'Depistage systematique du cancer du sein a partir de 40 ans (ou plus tot en cas de risque familial)',
      'Exploration d\'une anomalie clinique : nodule palpable, ecoulement mamelonnaire, retraction cutanee',
      'Surveillance apres traitement d\'un cancer du sein',
      'Bilan avant chirurgie esthetique mammaire',
      'Douleur mammaire persistante et inexpliquee',
      'Suivi de lesions mammaires classees probablement benignes (BI-RADS 3)',
      'Antecedents familiaux de cancer du sein (depistage renforce)',
    ],
  },
  {
    slug: 'panoramique-dentaire',
    title: 'Panoramique dentaire 2D',
    shortTitle: 'Panoramique dentaire',
    description:
      "Radiographie panoramique des arcades dentaires superieure et inferieure en une seule image, permettant une vue d'ensemble de la dentition, des maxillaires et des structures adjacentes.",
    fullDescription: `Le panoramique dentaire, egalement appele orthopantomogramme (OPG), est une radiographie specialisee qui permet d'obtenir en une seule image une vue complete et deploiee des deux arcades dentaires, des maxillaires superieur et inferieur, des articulations temporo-mandibulaires et des structures osseuses adjacentes. Cette technique utilise un faisceau de rayons X qui tourne autour de la tete du patient pendant l'acquisition, produisant une image panoramique 2D.

Cet examen est fondamental en odontologie et en chirurgie maxillo-faciale. Il permet de visualiser l'ensemble de la dentition (dents presentes, incluses, surnumeraires), l'etat des racines et de l'os alveolaire, les lesions carieuses etendues, les infections periapicales (kystes, granulomes, abces), les pathologies parodontales avec perte osseuse, les tumeurs et kystes des maxillaires, ainsi que les fractures mandibulaires.

Le panoramique dentaire est un examen de premiere intention rapide, peu irradiant et non invasif. Il fournit une vue d'ensemble precieuse qui oriente le praticien vers des examens complementaires si necessaire (cone beam, scanner). Il est systematiquement demande avant un traitement orthodontique, une extraction de dents de sagesse, la pose d'implants dentaires ou toute chirurgie maxillo-faciale.

A la Clinique Pasteur de Tunis, l'appareil de panoramique dentaire numerique 2D fournit des images de haute resolution permettant un diagnostic precis. L'examen est rapide, confortable et delivre une dose de radiation tres faible, equivalente a environ une journee d'exposition naturelle au rayonnement ambiant.`,
    preparation: [
      'Retirer tous les objets metalliques du visage et du cou : boucles d\'oreilles, piercing, collier, lunettes',
      'Retirer les appareils dentaires amovibles (protheses, gouttieres)',
      'Aucun jeune necessaire',
      'Signaler toute grossesse ou suspicion de grossesse',
      'Apporter l\'ordonnance du dentiste ou du chirurgien',
      'Apporter les radiographies dentaires anterieures si disponibles',
    ],
    deroulement: [
      'Le patient se tient debout face a l\'appareil',
      'Il mord sur une tige de positionnement qui maintient les arcades dentaires dans la bonne position',
      'Le front et les tempes sont maintenus par des appuis pour eviter tout mouvement',
      'Le bras de l\'appareil effectue une rotation autour de la tete du patient (environ 15 secondes)',
      'Le patient doit rester parfaitement immobile, la langue collee au palais et les levres fermees',
      'L\'image panoramique apparait immediatement sur l\'ecran en version numerique',
      'Le radiologue verifie la qualite de l\'image et l\'interprete',
    ],
    duree: '5 minutes (acquisition de quelques secondes)',
    resultats:
      'L\'image numerique est disponible immediatement. Le compte-rendu radiologique est transmis au dentiste ou au chirurgien prescripteur sous 24 heures. Le patient peut obtenir une copie numerique de son panoramique.',
    risques: [
      'Exposition aux rayons X extremement faible (environ 0,01 mSv, soit l\'equivalent d\'une journee d\'irradiation naturelle)',
      'Aucune douleur ni effet secondaire',
      'Contre-indication en cas de grossesse (mesure de precaution)',
      'Qualite d\'image reduite en cas de mouvement du patient pendant l\'acquisition',
    ],
    indications: [
      'Bilan dentaire complet : caries, infections, parodontite',
      'Evaluation des dents de sagesse avant extraction',
      'Bilan pre-implantaire et pre-orthodontique',
      'Recherche de dents incluses ou surnumeraires',
      'Traumatismes de la face et de la mandibule',
      'Kystes et tumeurs des maxillaires',
      'Pathologies des articulations temporo-mandibulaires',
      'Bilan de sinusite maxillaire d\'origine dentaire',
    ],
  },
  {
    slug: 'osteodensitometrie',
    title: 'Osteodensitometrie',
    shortTitle: 'Osteodensitometrie',
    description:
      "Mesure de la densite minerale osseuse par absorptiometrie biphotonique a rayons X (DEXA), examen de reference pour le diagnostic de l'osteoporose et l'evaluation du risque fracturaire.",
    fullDescription: `L'osteodensitometrie, egalement appelee absorptiometrie biphotonique a rayons X (DEXA pour Dual-Energy X-ray Absorptiometry), est l'examen de reference pour la mesure de la densite minerale osseuse (DMO). Cette technique precise et reproductible permet de quantifier le contenu mineral de l'os et de diagnostiquer l'osteoporose, une maladie silencieuse qui fragilise les os et augmente considerablement le risque de fractures.

Le principe de la DEXA repose sur l'emission de deux faisceaux de rayons X d'energies differentes qui traversent l'os et les tissus mous. La difference d'absorption entre les deux faisceaux permet de calculer avec precision la densite minerale osseuse, exprimee en g/cm2. Les resultats sont compares aux valeurs de reference d'une population jeune et en bonne sante (T-score) et d'une population de meme age et de meme sexe (Z-score). Selon les criteres de l'Organisation Mondiale de la Sante, un T-score inferieur a -2,5 signe une osteoporose.

Les sites de mesure privilegies sont le rachis lombaire (L1-L4), l'extremite superieure du femur (col femoral et hanche totale), et parfois le poignet (radius distal). Ces sites sont les plus representatifs du risque fracturaire global et les plus sensibles aux variations de densite osseuse. L'examen permet egalement de suivre l'evolution de la densite osseuse sous traitement.

A la Clinique Pasteur de Tunis, l'osteodensitometrie est realisee sur un appareil DEXA de derniere generation, offrant une precision de mesure optimale avec une dose de radiation infime. Le radiologue interprete les resultats en tenant compte de l'ensemble du contexte clinique et des facteurs de risque du patient.`,
    preparation: [
      'Aucun jeune necessaire',
      'Eviter de prendre des supplements de calcium dans les 24 heures precedant l\'examen',
      'Signaler tout examen recent avec produit de contraste (baryte, iode) dans les 7 jours precedents',
      'Porter des vetements confortables sans elements metalliques (boutons, fermetures eclair, ceinture)',
      'Signaler toute grossesse ou suspicion de grossesse',
      'Apporter la liste des medicaments en cours (corticoides, traitements hormonaux)',
      'Apporter les resultats d\'osteodensitometrie anterieurs pour suivi comparatif',
    ],
    deroulement: [
      'Le patient s\'allonge sur le dos sur la table d\'examen',
      'Pour la mesure du rachis lombaire, les jambes sont sureleves par un support cubique',
      'Pour la mesure du femur, le pied est maintenu en rotation interne par un support',
      'Le bras de l\'appareil se deplace lentement au-dessus de la zone mesuree',
      'Le patient doit rester immobile pendant l\'acquisition (quelques secondes par site)',
      'Les mesures sont realisees sur le rachis lombaire puis sur la hanche (un ou deux cotes)',
      'L\'examen est totalement indolore et ne necessite aucune injection',
      'Les resultats sont calcules automatiquement par le logiciel de l\'appareil',
    ],
    duree: '10 a 15 minutes',
    resultats:
      'Les resultats (T-score et Z-score) sont disponibles immediatement apres l\'examen. Le radiologue redige un compte-rendu interpretant les valeurs en fonction du contexte clinique. Les resultats sont transmis au medecin prescripteur sous 24 a 48 heures.',
    risques: [
      'Dose de radiation extremement faible (moins de 0,01 mSv, soit inferieure a une radiographie du thorax)',
      'Examen totalement indolore et non invasif',
      'Aucun effet secondaire',
      'Contre-indication en cas de grossesse (precaution)',
      'Resultats pouvant etre fausses par la presence de materiel d\'osteosynthese, de calcifications aortiques ou d\'arthrose severe',
    ],
    indications: [
      'Depistage de l\'osteoporose chez la femme menopausee',
      'Traitement prolonge par corticoides (corticotherapie superieure a 3 mois)',
      'Antecedent de fracture de fragilite (vertebre, poignet, col du femur)',
      'Hypogonadisme, menopause precoce ou amenorrhee prolongee',
      'Hyperparathyroidie primaire et autres endocrinopathies',
      'Suivi de traitement anti-osteoporotique (controle a 2-3 ans)',
      'Maladies inflammatoires chroniques (polyarthrite rhumatoide, maladie de Crohn)',
      'Antecedents familiaux de fracture du col femoral',
    ],
  },
  {
    slug: 'echographie',
    title: 'Echographie generale et specialisee',
    shortTitle: 'Echographie',
    description:
      "Technique d'imagerie utilisant les ultrasons pour explorer les organes et les tissus en temps reel, sans radiation ionisante, adaptee a de nombreuses indications diagnostiques.",
    fullDescription: `L'echographie est une technique d'imagerie medicale qui utilise des ultrasons (ondes sonores de haute frequence) pour produire des images en temps reel des organes et des structures internes du corps. Une sonde emettrice-receptrice est appliquee sur la peau, envoie des ondes ultrasonores qui se reflechissent differemment selon la nature des tissus traverses, et capte les echos de retour pour les transformer en images dynamiques sur un ecran.

L'echographie est un examen de premiere ligne dans de nombreuses situations cliniques en raison de ses multiples avantages : absence totale de radiation ionisante, caractere non invasif et indolore, possibilite d'examen en temps reel avec visualisation dynamique des organes, reproductibilite, disponibilite et cout modere. Elle peut etre repetee sans risque, y compris chez la femme enceinte et l'enfant.

Les domaines d'application de l'echographie sont extremement varies : echographie abdominale (foie, vesicule biliaire, pancreas, rate, reins), echographie pelvienne et endovaginale (uterus, ovaires, prostate), echographie thyroidienne, echographie des parties molles (muscles, tendons, ganglions), echographie mammaire en complement de la mammographie, echographie vasculaire (Doppler des arteres et des veines), et echographie obstetricale pour le suivi de la grossesse. Le mode Doppler permet en outre d'analyser les flux sanguins en temps reel.

A la Clinique Pasteur de Tunis, les echographies sont realisees sur des appareils de derniere generation offrant une resolution d'image exceptionnelle. Les radiologues specialises adaptent le type de sonde et le protocole a chaque indication, garantissant un examen complet et un diagnostic precis.`,
    preparation: [
      'Echographie abdominale : etre a jeun depuis 6 heures (eau autorisee en petite quantite)',
      'Echographie pelvienne : avoir la vessie pleine (boire 1 litre d\'eau 1 heure avant et ne pas uriner)',
      'Echographie thyroidienne : aucune preparation particuliere',
      'Echographie obstetricale du 1er trimestre : vessie semi-pleine',
      'Echographie des parties molles : aucune preparation',
      'Echographie vasculaire (Doppler) : aucune preparation particuliere',
      'Apporter l\'ordonnance medicale et les examens anterieurs',
      'Porter des vetements faciles a relever ou retirer au niveau de la zone a examiner',
    ],
    deroulement: [
      'Le patient est installe confortablement sur la table d\'examen, generalement allonge sur le dos',
      'Un gel d\'echographie est applique sur la peau au niveau de la zone a explorer',
      'Le radiologue applique la sonde et la deplace doucement pour visualiser les differentes structures',
      'Les images apparaissent en temps reel sur l\'ecran',
      'Le patient peut etre invite a changer de position (decubitus lateral, debout) pour optimiser l\'examen',
      'Des mesures et des annotations sont realisees en cours d\'examen',
      'En mode Doppler, les flux sanguins sont analyses avec un codage couleur',
      'Le gel est essuye a la fin de l\'examen',
    ],
    duree: '15 a 30 minutes selon le type d\'echographie',
    resultats:
      'Le radiologue communique les premiers resultats au patient immediatement apres l\'examen. Un compte-rendu detaille avec images est redige et transmis au medecin prescripteur sous 24 a 48 heures.',
    risques: [
      'Aucun risque connu : les ultrasons n\'emettent aucune radiation ionisante',
      'Examen totalement indolore (legere pression de la sonde)',
      'Aucune contre-indication connue',
      'Peut etre repete sans limitation, y compris pendant la grossesse',
      'Seule limite : qualite d\'examen pouvant etre reduite chez les patients obeses ou en cas d\'interposition gazeuse',
    ],
    indications: [
      'Douleurs abdominales : exploration du foie, de la vesicule biliaire, du pancreas, des reins',
      'Pathologies thyroidiennes : nodules, goitre, thyroidite',
      'Pathologies mammaires : complement de la mammographie, guidage de biopsie',
      'Suivi de grossesse : echographies du 1er, 2eme et 3eme trimestre',
      'Pathologies pelviennes : fibromes uterins, kystes ovariens, pathologie prostatique',
      'Pathologies vasculaires : thrombose veineuse, stenose carotidienne, anevrisme aortique',
      'Pathologies musculo-tendineuses : tendinopathies, dechirures musculaires, epanchements articulaires',
      'Guidage de gestes interventionnels : ponctions, biopsies, infiltrations',
    ],
  },
  {
    slug: 'radiologie-interventionnelle',
    title: 'Radiologie interventionnelle - embolisation, drainage, radiofrequence',
    shortTitle: 'Radiologie interventionnelle',
    description:
      "Procedures therapeutiques mini-invasives guidees par l'imagerie, incluant l'embolisation, le drainage et la thermoablation par radiofrequence, offrant des alternatives moins lourdes a la chirurgie conventionnelle.",
    fullDescription: `La radiologie interventionnelle regroupe l'ensemble des procedures diagnostiques et therapeutiques realisees sous guidage de l'imagerie medicale (fluoroscopie, echographie, scanner). Ces techniques mini-invasives permettent de traiter de nombreuses pathologies en evitant ou en reduisant le recours a la chirurgie ouverte, avec une diminution significative de la douleur post-operatoire, de la duree d'hospitalisation et des complications.

L'embolisation consiste a obstruer volontairement un vaisseau sanguin en y injectant des agents d'embolisation (particules, coils metalliques, colle biologique) a l'aide d'un catheter introduit par voie arterielle. Cette technique est utilisee pour traiter les fibromes uterins, arreter les hemorragies, devasculariser les tumeurs avant chirurgie, traiter les malformations vasculaires ou les aneurysmes. Le drainage percutane permet d'evacuer une collection liquidienne (abces, epanchement) en placant un catheter sous guidage echographique ou scanner, evitant ainsi une intervention chirurgicale pour drainer l'infection.

La thermoablation par radiofrequence utilise un courant electrique alternatif de haute frequence delivre par une aiguille-electrode introduite directement dans la tumeur sous guidage scanner ou echographique. La chaleur generee (60 a 100 degres) provoque une destruction (necrose) de la tumeur et d'une marge de tissu sain peripherique. Cette technique est validee pour le traitement des tumeurs du foie, du rein, du poumon et de certaines tumeurs osseuses, en particulier chez les patients non operables.

A la Clinique Pasteur de Tunis, les procedures de radiologie interventionnelle sont realisees par des radiologues interventionnels experimentes, dans un environnement sterile et securise. Les equipements d'imagerie de derniere generation permettent un guidage precis des gestes, garantissant l'efficacite du traitement et la securite du patient.`,
    preparation: [
      'Consultation prealable avec le radiologue interventionnel pour expliquer la procedure et recueillir le consentement',
      'Bilan sanguin prealable : hemostase (TP, TCA, plaquettes), bilan renal (creatinine), NFS',
      'Etre a jeun depuis 6 heures minimum avant la procedure',
      'Arret des anticoagulants et antiagrégants selon le protocole defini par le radiologue',
      'Signaler toute allergie, en particulier aux produits de contraste et aux anesthesiques',
      'Signaler tout traitement en cours et tout antecedent chirurgical',
      'Prevoir une hospitalisation (ambulatoire ou de quelques jours selon la procedure)',
      'Apporter l\'ensemble du dossier d\'imagerie et les resultats de biopsie le cas echeant',
    ],
    deroulement: [
      'Le patient est installe en salle d\'intervention sous monitoring cardiaque et tensionnel',
      'Une voie veineuse peripherique est posee pour l\'administration de medicaments et de sedatifs',
      'Une anesthesie locale est realisee au point de ponction (anesthesie generale possible selon la procedure)',
      'Pour l\'embolisation : un catheter est introduit par l\'artere femorale et guide sous fluoroscopie jusqu\'au vaisseau cible',
      'Pour le drainage : une aiguille puis un drain sont places sous guidage echographique ou scanner dans la collection',
      'Pour la radiofrequence : une electrode-aiguille est positionnee dans la tumeur sous guidage scanner',
      'La procedure est realisee sous controle continu de l\'imagerie',
      'Un controle final est effectue pour verifier l\'efficacite du traitement',
      'Le patient est surveille en salle de reveil puis en hospitalisation',
    ],
    duree: '45 minutes a 2 heures selon la complexite de la procedure',
    resultats:
      'Le radiologue interventionnel informe le patient et le medecin referent du deroulement de la procedure immediatement apres. Un compte-rendu detaille est redige. Un controle d\'imagerie est programme dans les semaines suivantes pour evaluer l\'efficacite du traitement.',
    risques: [
      'Hematome ou saignement au point de ponction (le plus frequent, generalement benin)',
      'Infection au point de ponction ou de la zone traitee (rare, prevention par antibioprophylaxie)',
      'Douleur post-procedurale (prise en charge antalgique adaptee)',
      'Reaction allergique au produit de contraste (rare)',
      'Embolisation non ciblee (migration d\'agents d\'embolisation vers des territoires non vises - rare)',
      'Syndrome post-embolisation : fievre, douleurs, fatigue (frequent et transitoire)',
      'Complications specifiques selon l\'organe traite (insuffisance hepatique, pneumothorax)',
      'Risque d\'echec ou de recidive necessitant un nouveau traitement',
    ],
    indications: [
      'Embolisation de fibromes uterins symptomatiques',
      'Embolisation d\'hemorragies actives (post-partum, digestive, traumatique)',
      'Chimio-embolisation des tumeurs hepatiques (carcinome hepatocellulaire)',
      'Thermoablation par radiofrequence des tumeurs du foie, du rein et du poumon',
      'Drainage d\'abces abdominaux, pelviens ou thoraciques',
      'Embolisation de malformations vasculaires et d\'aneurysmes visceraux',
      'Vertebroplastie et cimentoplastie pour les fractures vertebrales osteoporotiques',
      'Pose de drains biliaires et nephrostomies percutanees',
    ],
  },
];
