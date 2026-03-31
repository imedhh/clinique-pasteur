export const examensLaboratoire = [
  {
    slug: 'biochimie',
    title: 'Biochimie',
    shortTitle: 'Biochimie',
    description:
      "Analyses biochimiques sanguines et urinaires pour evaluer le fonctionnement des organes vitaux : foie, reins, pancreas, metabolisme glucidique et lipidique.",
    fullDescription: `La biochimie clinique est une discipline fondamentale du laboratoire d'analyses medicales qui etudie les constituants chimiques du sang, des urines et d'autres liquides biologiques. Ces analyses permettent d'evaluer le fonctionnement des principaux organes (foie, reins, pancreas, coeur) et de detecter des desequilibres metaboliques pouvant temoigner de pathologies aiguees ou chroniques.

Le bilan biochimique standard comprend le dosage de la glycemie (diabete), de la creatinine et de l'uree (fonction renale), des transaminases, de la bilirubine et des phosphatases alcalines (fonction hepatique), de la lipase (pancreas), ainsi que du bilan lipidique complet (cholesterol total, HDL, LDL, triglycerides). Des dosages plus specialises comme l'hemoglobine glyquee (HbA1c), les proteines specifiques, les electrolytes (sodium, potassium, calcium) ou les enzymes cardiaques completent l'exploration selon les besoins cliniques.

Ces analyses sont essentielles pour le diagnostic, le suivi therapeutique et la prevention de nombreuses maladies : diabete, insuffisance renale, hepatites, dyslipidemies, goutte, troubles thyroidiens et bien d'autres. Elles font partie integrante de tout bilan de sante systematique et de tout bilan pre-operatoire.

Au laboratoire de la Clinique Pasteur de Tunis, les analyses biochimiques sont realisees sur des automates de derniere generation garantissant une precision et une fiabilite optimales. Les resultats sont disponibles rapidement, avec un delai moyen de 2 a 4 heures pour les analyses courantes, permettant une prise en charge medicale reactive.`,
    preparation: [
      'Etre a jeun depuis 10 a 12 heures pour le bilan lipidique et la glycemie',
      'Boire de l\'eau est autorise (eviter jus de fruits, cafe, the)',
      'Signaler tous les medicaments en cours au preleveur',
      'Eviter l\'effort physique intense dans les 24 heures precedant le prelevement',
      'Signaler toute pathologie aigue en cours (fievre, infection)',
      'Apporter l\'ordonnance du medecin prescripteur',
    ],
    deroulement: [
      'Accueil et enregistrement administratif au laboratoire',
      'Verification de l\'identite du patient et de l\'ordonnance',
      'Prelevement sanguin veineux au pli du coude (un ou plusieurs tubes selon les analyses demandees)',
      'Recueil eventuel d\'urines pour les analyses urinaires',
      'Application d\'un pansement compressif au point de ponction',
      'Les echantillons sont achemines immediatement vers les automates d\'analyse',
      'Les resultats sont valides par le biologiste medical',
    ],
    duree: '5 a 10 minutes pour le prelevement, 2 a 4 heures pour les resultats courants',
    resultats:
      'Les resultats sont disponibles dans un delai de 2 a 4 heures pour les analyses courantes. Ils sont transmis au medecin prescripteur et accessibles au patient au laboratoire ou en ligne.',
    risques: [
      'Hematome au point de ponction (frequent, sans gravite)',
      'Douleur legere lors de la piqure',
      'Malaise vagal (rare, survenant chez les personnes sensibles)',
      'Infection au point de ponction (exceptionnelle)',
    ],
    indications: [
      'Bilan de sante systematique (check-up)',
      'Suivi du diabete (glycemie, HbA1c)',
      'Bilan hepatique (hepatites, cirrhose, medicaments hepatotoxiques)',
      'Bilan renal (insuffisance renale, surveillance de traitements nephrotoxiques)',
      'Bilan lipidique (evaluation du risque cardiovasculaire)',
      'Bilan thyroidien',
      'Bilan pre-operatoire',
      'Suivi therapeutique de medicaments',
    ],
  },
  {
    slug: 'hematologie',
    title: 'Hematologie',
    shortTitle: 'Hematologie',
    description:
      "Analyse complete des cellules sanguines (globules rouges, globules blancs, plaquettes) pour diagnostiquer les anemies, infections, troubles de la coagulation et maladies hematologiques.",
    fullDescription: `L'hematologie est la branche du laboratoire d'analyses medicales consacree a l'etude des cellules du sang et de la moelle osseuse. L'examen hematologique de base, la numeration formule sanguine (NFS) ou hemogramme, est l'analyse la plus frequemment prescrite en medecine. Elle fournit des informations essentielles sur les trois lignees cellulaires sanguines : les globules rouges, les globules blancs et les plaquettes.

L'hemogramme permet de diagnostiquer et de suivre de nombreuses pathologies : les anemies (par carence en fer, en vitamine B12 ou en acide folique, hemolytiques, inflammatoires), les polyglobulies, les leucopemies et leucocytoses (infections, leucemies, lymphomes), les thrombopemies et thrombocytoses. L'analyse de la formule leucocytaire (repartition des differents types de globules blancs) oriente vers des diagnostics specifiques : infections bacteriennes, virales, parasitaires, allergies ou hemopathies malignes.

Des analyses hematologiques plus specialisees completent l'hemogramme : le frottis sanguin (examen microscopique des cellules), la vitesse de sedimentation (VS), le dosage de la ferritine et du fer serique, le dosage des reticulocytes, l'electrophorese de l'hemoglobine et le myelogramme (ponction de moelle osseuse). Ces examens sont indispensables pour le diagnostic precis des maladies du sang.

Le laboratoire d'hematologie de la Clinique Pasteur de Tunis est equipe d'automates d'hemogramme de haute technologie avec analyse multiparametrique. Les frottis sanguins sont examines par des biologistes specialises, garantissant un diagnostic fiable et rapide pour une prise en charge optimale des patients.`,
    preparation: [
      'Le jeune n\'est pas obligatoire pour l\'hemogramme (mais recommande si d\'autres analyses sont associees)',
      'Signaler tout traitement en cours (chimiotherapie, anticoagulants, anti-inflammatoires)',
      'Signaler tout episode infectieux recent ou en cours',
      'Pas de preparation particuliere pour la NFS isolee',
      'Apporter l\'ordonnance du medecin prescripteur',
      'Apporter les resultats anterieurs pour comparaison si disponibles',
    ],
    deroulement: [
      'Accueil et verification de l\'identite du patient',
      'Prelevement sanguin veineux au pli du coude (tube EDTA violet)',
      'Le tube est homogeneise par retournements successifs',
      'L\'echantillon est analyse par l\'automate d\'hematologie',
      'Un frottis sanguin est realise si necessaire pour examen microscopique',
      'Les resultats sont valides par le biologiste medical',
      'En cas d\'anomalie significative, le medecin prescripteur est contacte immediatement',
    ],
    duree: '5 minutes pour le prelevement, 1 a 2 heures pour les resultats',
    resultats:
      'Les resultats de l\'hemogramme sont disponibles en 1 a 2 heures. En urgence, un resultat peut etre rendu en moins de 30 minutes. Les analyses specialisees (electrophorese de l\'hemoglobine, myelogramme) necessitent un delai plus long.',
    risques: [
      'Hematome au point de ponction (frequent, benin)',
      'Douleur legere lors du prelevement',
      'Malaise vagal (rare)',
      'Difficulte de prelevement chez certains patients (veines fines, deshydratation)',
    ],
    indications: [
      'Bilan de sante systematique',
      'Fatigue inexpliquee, paleur, essoufflement (recherche d\'anemie)',
      'Fievre ou suspicion d\'infection',
      'Saignements anormaux ou ecchymoses',
      'Suivi de chimiotherapie ou de traitement immunosuppresseur',
      'Suspicion de maladie hematologique (leucemie, lymphome)',
      'Bilan pre-operatoire',
      'Suivi de grossesse',
    ],
  },
  {
    slug: 'hemostase',
    title: 'Hemostase - Bilan de coagulation',
    shortTitle: 'Hemostase',
    description:
      "Evaluation du systeme de coagulation sanguine par le dosage des facteurs de coagulation, indispensable avant toute intervention chirurgicale et pour le suivi des traitements anticoagulants.",
    fullDescription: `L'hemostase est l'ensemble des mecanismes physiologiques qui permettent d'arreter un saignement et de maintenir le sang a l'etat fluide dans les vaisseaux. Le bilan d'hemostase explore ces mecanismes par le dosage de differents parametres de la coagulation sanguine, permettant de diagnostiquer les troubles hemorragiques ou thrombotiques et de surveiller les traitements anticoagulants.

Le bilan d'hemostase standard comprend le taux de prothrombine (TP) et l'INR, le temps de cephaline activee (TCA), le dosage du fibrinogene et la numeration plaquettaire. Ces parametres explorent les differentes voies de la coagulation (voie extrinseque, voie intrinseque, voie commune). Des analyses plus specialisees sont disponibles : dosage individuel des facteurs de coagulation (II, V, VII, VIII, IX, X, XI, XII), recherche d'anticoagulant circulant, dosage des D-dimeres, dosage de l'antithrombine, des proteines C et S, et recherche de mutations thrombophiliques.

Le bilan d'hemostase est indispensable avant toute intervention chirurgicale pour evaluer le risque hemorragique, pour le diagnostic et le suivi des maladies hemorragiques congenitales (hemophilie, maladie de Willebrand) ou acquises, et surtout pour la surveillance des traitements anticoagulants (AVK, heparines) qui necessitent un controle biologique regulier pour ajuster les doses et prevenir les complications.

Le laboratoire d'hemostase de la Clinique Pasteur de Tunis dispose d'automates performants permettant une exploration complete de la coagulation. Les resultats sont disponibles rapidement, ce qui est crucial en situation d'urgence chirurgicale ou hemorragique. Les biologistes assurent une interpretation des resultats et un conseil therapeutique aupres des cliniciens.`,
    preparation: [
      'Le jeune n\'est pas obligatoire mais recommande',
      'Signaler imperativement tout traitement anticoagulant ou antiaggregant en cours',
      'Respecter l\'heure habituelle de prise des anticoagulants (prelevement avant la prise)',
      'Signaler tout antecedent de saignement anormal ou d\'ecchymoses',
      'Signaler tout antecedent familial de trouble de la coagulation',
      'Apporter l\'ordonnance et le carnet de suivi AVK si applicable',
    ],
    deroulement: [
      'Accueil et verification de l\'identite du patient',
      'Prelevement sanguin veineux au pli du coude (tube citrate bleu)',
      'Le prelevement doit etre de qualite (remplissage exact du tube, absence d\'hemolyse)',
      'Le tube est homogeneise par retournements successifs',
      'L\'echantillon est centrifuge pour obtenir le plasma',
      'Les analyses sont realisees sur l\'automate de coagulation',
      'Les resultats sont valides par le biologiste',
      'En cas de resultat critique, le medecin prescripteur est alerte immediatement',
    ],
    duree: '5 minutes pour le prelevement, 1 a 3 heures pour les resultats courants',
    resultats:
      'Les resultats du bilan standard (TP, TCA, fibrinogene) sont disponibles en 1 a 3 heures. Les dosages specialises de facteurs de coagulation peuvent necessiter 24 a 48 heures. Les resultats de thrombophilie necessitent 1 a 2 semaines.',
    risques: [
      'Hematome au point de ponction (plus frequent chez les patients sous anticoagulants)',
      'Douleur legere lors du prelevement',
      'Necessitede refaire le prelevement si la qualite de l\'echantillon est insuffisante',
      'Malaise vagal (rare)',
    ],
    indications: [
      'Bilan pre-operatoire systematique (TP, TCA)',
      'Surveillance des traitements par AVK (INR)',
      'Surveillance des traitements par heparine (TCA, anti-Xa)',
      'Saignements anormaux ou ecchymoses inexpliquees',
      'Bilan de thrombophilie (thrombose veineuse, embolie pulmonaire)',
      'Diagnostic d\'hemophilie ou de maladie de Willebrand',
      'Bilan hepatique (evaluation de la fonction de synthese du foie)',
      'Coagulation intravasculaire disseminee (CIVD)',
    ],
  },
  {
    slug: 'bacteriologie',
    title: 'Bacteriologie',
    shortTitle: 'Bacteriologie',
    description:
      "Identification des agents infectieux (bacteries, champignons) a partir de prelevements biologiques et determination de leur sensibilite aux antibiotiques pour guider le traitement.",
    fullDescription: `La bacteriologie clinique est la discipline du laboratoire qui assure l'identification des agents infectieux responsables de maladies chez l'homme, principalement les bacteries et les champignons. A partir de prelevements biologiques divers (urines, sang, pus, expectorations, selles, liquides biologiques), le laboratoire met en evidence l'agent pathogene, l'identifie et determine sa sensibilite aux antibiotiques (antibiogramme) pour guider le traitement.

L'examen cytobacteriologique des urines (ECBU) est l'analyse bacteriologique la plus frequemment prescrite, permettant de diagnostiquer les infections urinaires. Les hemocultures (cultures du sang) sont essentielles pour le diagnostic des septicemies et des endocardites. Les prelevements de plaies, les coprocultures (selles), les prelevements respiratoires et les prelevements genitaux completent la gamme des analyses bacteriologiques courantes.

Le processus d'analyse comprend plusieurs etapes : l'examen direct au microscope (coloration de Gram) qui fournit une premiere orientation en quelques heures, la mise en culture sur milieux specifiques pour isoler et identifier la bacterie (24 a 48 heures), et la realisation de l'antibiogramme pour determiner les antibiotiques efficaces. Des techniques moleculaires rapides (PCR) permettent desormais d'identifier certains germes en quelques heures.

Le laboratoire de bacteriologie de la Clinique Pasteur de Tunis fonctionne avec des protocoles rigoureux de qualite et dispose d'equipements automatises pour l'identification bacterienne et l'antibiogramme. L'equipe de biologistes assure une permanence pour la prise en charge des prelevements urgents, notamment les hemocultures et les prelevements per-operatoires.`,
    preparation: [
      'ECBU : recueillir les urines du milieu du jet dans un flacon sterile, apres toilette intime soigneuse',
      'ECBU : privilegier les premieres urines du matin ou des urines ayant sejourne au moins 4 heures dans la vessie',
      'Hemocultures : aucune preparation specifique du patient (prelevement en cas de fievre ou frissons)',
      'Prelevement de gorge : etre a jeun si possible, ne pas prendre d\'antiseptique local avant',
      'Coproculture : recueillir les selles dans un pot sterile, les acheminer rapidement au laboratoire',
      'Signaler tout traitement antibiotique en cours ou recent (peut fausser les resultats)',
    ],
    deroulement: [
      'Le prelevement est realise par le patient (urines, selles) ou par un professionnel de sante (sang, pus, gorge)',
      'L\'echantillon est achemine rapidement au laboratoire dans des conditions de transport appropriees',
      'Un examen direct au microscope est realise (coloration de Gram)',
      'L\'echantillon est ensemence sur des milieux de culture specifiques',
      'Les cultures sont incubees a 37°C pendant 18 a 48 heures',
      'Les colonies bacteriennes sont identifiees par des tests biochimiques ou spectrometrie de masse (MALDI-TOF)',
      'Un antibiogramme est realise pour determiner la sensibilite aux antibiotiques',
      'Les resultats sont valides par le biologiste et transmis au medecin',
    ],
    duree: 'Examen direct : 1 a 2 heures. Culture et antibiogramme : 24 a 72 heures selon le germe',
    resultats:
      'L\'examen direct (orientation diagnostique) est disponible en 1 a 2 heures. Les resultats de culture et d\'antibiogramme necessitent 24 a 72 heures. Certaines cultures specialisees (mycobacteries) peuvent necessiter plusieurs semaines.',
    risques: [
      'Douleur legere en cas de prelevement sanguin (hemoculture)',
      'Inconfort lors du prelevement de gorge ou nasal',
      'Resultats faussement negatifs si antibiotiques pris avant le prelevement',
      'Contamination du prelevement si les conditions de recueil ne sont pas respectees',
    ],
    indications: [
      'Suspicion d\'infection urinaire (brulures mictionnelles, fievre)',
      'Fievre inexpliquee (hemocultures)',
      'Infection de plaie ou d\'escarre',
      'Angine a streptocoque (prelevement de gorge)',
      'Diarrhee infectieuse (coproculture)',
      'Infection respiratoire (expectoration, lavage broncho-alveolaire)',
      'Prelevement per-operatoire (infection sur prothese, abces)',
      'Surveillance des infections nosocomiales',
    ],
  },
  {
    slug: 'serologie',
    title: 'Serologie et immunologie',
    shortTitle: 'Serologie',
    description:
      "Recherche d'anticorps et d'antigenes dans le sang pour le diagnostic des infections virales, bacteriennes et parasitaires, ainsi que des maladies auto-immunes.",
    fullDescription: `La serologie est une technique de laboratoire qui consiste a rechercher et doser dans le sang les anticorps produits par le systeme immunitaire en reponse a une infection ou les antigenes des agents pathogenes eux-memes. L'immunologie clinique etudie egalement les auto-anticorps, temoins de maladies auto-immunes, et les marqueurs de l'immunite cellulaire et humorale.

Les serologies infectieuses les plus courantes incluent la recherche des anticorps anti-VIH, anti-VHB (hepatite B) et anti-VHC (hepatite C), la serologie de la syphilis (TPHA-VDRL), la serologie de la toxoplasmose et de la rubeole (bilan prenatal), les serologies des virus d'Epstein-Barr (MNI), du cytomegalovirus (CMV), la serologie de la brucellose, de la fievre typhoide et bien d'autres. La distinction entre les anticorps de type IgM (infection recente) et IgG (infection ancienne ou immunite) permet de dater l'infection.

L'immunologie clinique comprend la recherche d'auto-anticorps (anticorps anti-nucleaires, anti-DNA natif, facteur rhumatoide, anticorps anti-thyroidiens) pour le diagnostic des maladies auto-immunes (lupus, polyarthrite rhumatoide, thyroidites), le dosage des immunoglobulines (IgG, IgA, IgM), le dosage du complement et le typage lymphocytaire (CD4, CD8) pour le suivi de l'infection a VIH.

Le laboratoire de serologie et d'immunologie de la Clinique Pasteur de Tunis utilise des techniques de dosage immunologique de derniere generation (ELISA, chemiluminescence) garantissant une sensibilite et une specificite elevees. Les resultats sont interpretes par des biologistes qualifies qui peuvent orienter le clinicien dans sa demarche diagnostique.`,
    preparation: [
      'Le jeune n\'est pas obligatoire pour la plupart des serologies',
      'Signaler toute vaccination recente (peut interferer avec certaines serologies)',
      'Signaler tout traitement immunosuppresseur en cours',
      'Signaler un eventuel contexte de grossesse (serologies prenatales)',
      'Apporter l\'ordonnance et les resultats anterieurs pour suivi d\'evolution',
      'Un consentement est necessaire pour le test VIH',
    ],
    deroulement: [
      'Accueil et verification de l\'identite du patient',
      'Prelevement sanguin veineux au pli du coude (tube sec rouge ou tube gel jaune)',
      'L\'echantillon est centrifuge pour obtenir le serum',
      'Les dosages sont realises par techniques immunologiques automatisees (ELISA, chemiluminescence)',
      'En cas de resultat positif pour le VIH ou l\'hepatite, un test de confirmation est realise',
      'Les resultats sont valides par le biologiste medical',
      'Une consultation d\'annonce est organisee si necessaire (VIH, hepatites)',
    ],
    duree: '5 minutes pour le prelevement, 4 a 24 heures pour les resultats courants',
    resultats:
      'Les resultats des serologies courantes sont disponibles en 4 a 24 heures. Certaines serologies specialisees ou les tests de confirmation peuvent necessiter 3 a 7 jours. Le biologiste assure l\'interpretation des resultats.',
    risques: [
      'Hematome au point de ponction (benin)',
      'Douleur legere lors du prelevement',
      'Faux positifs possibles dans certaines situations (grossesse, maladies auto-immunes)',
      'Impact psychologique en cas de resultat positif pour une infection grave',
    ],
    indications: [
      'Depistage des hepatites B et C',
      'Depistage du VIH',
      'Bilan prenatal obligatoire (toxoplasmose, rubeole, syphilis, VIH, hepatite B)',
      'Suspicion de maladie auto-immune (lupus, polyarthrite)',
      'Bilan d\'une fievre inexpliquee (serologies infectieuses multiples)',
      'Suivi immunologique des patients VIH (CD4)',
      'Verification du statut vaccinal (hepatite B, rubeole)',
      'Bilan pre-transfusionnel ou pre-greffe',
    ],
  },
  {
    slug: 'marqueurs-tumoraux',
    title: 'Marqueurs tumoraux',
    shortTitle: 'Marqueurs tumoraux',
    description:
      "Dosage de substances specifiques produites par les cellules cancereuses ou par l'organisme en reponse a un cancer, utilises pour le diagnostic, le suivi et la surveillance des cancers.",
    fullDescription: `Les marqueurs tumoraux sont des substances (proteines, enzymes, hormones) dont la concentration dans le sang augmente en presence de certains types de cancer. Leur dosage constitue un outil precieux pour le diagnostic, le suivi therapeutique et la surveillance post-traitement des patients atteints de cancer. Il est important de noter que ces marqueurs ne sont pas specifiques a 100 % et doivent toujours etre interpretes dans le contexte clinique global.

Les principaux marqueurs tumoraux doses en pratique courante sont : le PSA (antigene prostatique specifique) pour le cancer de la prostate, le CA 125 pour le cancer de l'ovaire, le CA 19-9 pour les cancers pancreatiques et des voies biliaires, le CA 15-3 pour le cancer du sein, l'ACE (antigene carcino-embryonnaire) pour les cancers colorectaux et digestifs, l'AFP (alpha-foetoproteine) pour les cancers du foie et les tumeurs germinales, le beta-HCG pour les tumeurs germinales et les maladies trophoblastiques, et la thyroglobuline pour le suivi du cancer thyroidien.

L'utilisation principale des marqueurs tumoraux reside dans le suivi des patients deja diagnostiques et traites pour un cancer. L'evolution de leur taux permet d'evaluer l'efficacite du traitement (chimiotherapie, chirurgie, radiotherapie) et de detecter precocement une rechute. Pour le depistage, seul le PSA est largement utilise, et sa prescription fait l'objet de recommandations specifiques.

Le laboratoire de la Clinique Pasteur de Tunis realise le dosage de l'ensemble des marqueurs tumoraux sur des automates de haute precision. Les resultats sont interpretes par les biologistes en concertation avec les oncologues et les chirurgiens pour une prise en charge multidisciplinaire optimale.`,
    preparation: [
      'Le jeune n\'est pas obligatoire mais recommande',
      'Pour le PSA : eviter tout toucher rectal, echographie prostatique ou rapport sexuel dans les 48 heures precedentes',
      'Signaler tout traitement en cours (hormonotherapie, chimiotherapie)',
      'Signaler toute pathologie associee (infection, inflammation) pouvant elever les marqueurs',
      'Apporter les resultats anterieurs des dosages pour suivi d\'evolution',
      'Apporter l\'ordonnance du medecin prescripteur (oncologue, chirurgien)',
    ],
    deroulement: [
      'Accueil et verification de l\'identite du patient',
      'Prelevement sanguin veineux au pli du coude',
      'L\'echantillon est centrifuge pour obtenir le serum',
      'Les dosages sont realises par techniques immunologiques automatisees',
      'Les resultats sont confrontes aux valeurs anterieures pour evaluer l\'evolution (cinetique)',
      'Les resultats sont valides par le biologiste medical',
      'En cas de valeur anormale ou d\'elevation significative, le medecin prescripteur est alerte',
    ],
    duree: '5 minutes pour le prelevement, 4 a 24 heures pour les resultats',
    resultats:
      'Les resultats sont disponibles en 4 a 24 heures. L\'interpretation tient compte de la cinetique (evolution dans le temps) plutot que d\'une valeur isolee. Le biologiste fournit un commentaire interpretatif si necessaire.',
    risques: [
      'Hematome au point de ponction (benin)',
      'Douleur legere lors du prelevement',
      'Faux positifs possibles (inflammation, infection, pathologie benigne)',
      'Anxiete liee a l\'attente des resultats',
      'Un marqueur normal n\'exclut pas formellement un cancer (faux negatifs possibles)',
    ],
    indications: [
      'Suivi therapeutique d\'un cancer diagnostique (evaluation de l\'efficacite du traitement)',
      'Surveillance post-traitement et detection precoce des rechutes',
      'Depistage du cancer de la prostate (PSA chez l\'homme apres 50 ans)',
      'Bilan d\'extension d\'un cancer',
      'Diagnostic d\'un cancer hepatocellulaire (AFP chez le patient cirrhotique)',
      'Surveillance des tumeurs germinales (AFP, beta-HCG)',
      'Bilan de masse ovarienne suspecte (CA 125)',
      'Suivi du cancer thyroidien differentie (thyroglobuline)',
    ],
  },
  {
    slug: 'biologie-urgence',
    title: 'Biologie d\'urgence 24h/24',
    shortTitle: 'Biologie d\'urgence',
    description:
      "Service de laboratoire fonctionnant en permanence 24 heures sur 24 et 7 jours sur 7, assurant la realisation rapide des analyses biologiques urgentes pour les patients hospitalises et les urgences.",
    fullDescription: `Le service de biologie d'urgence de la Clinique Pasteur de Tunis fonctionne en permanence, 24 heures sur 24 et 7 jours sur 7, y compris les jours feries. Cette disponibilite continue est essentielle pour la prise en charge des patients en situation d'urgence medicale ou chirurgicale, ou chaque minute compte pour etablir un diagnostic et initier un traitement adapte.

Le plateau technique d'urgence couvre l'ensemble des analyses indispensables a la prise en charge des situations critiques : hemogramme, bilan de coagulation (TP, TCA, fibrinogene), ionogramme sanguin, gaz du sang et lactates, troponine et BNP (urgences cardiaques), D-dimeres (suspicion d'embolie pulmonaire), bilan hepatique et renal, glycemie, CRP, procalcitonine, lipase, hemocultures, groupage sanguin et recherche d'agglutinines irregulieres (RAI) pour les transfusions urgentes, ECBU et toxicologie.

Les delais de rendu sont optimises pour repondre aux exigences cliniques : les resultats des analyses critiques (troponine, gaz du sang, hemogramme, ionogramme) sont disponibles en moins de 60 minutes apres reception de l'echantillon. Un systeme d'alerte automatique transmet les valeurs critiques immediatement aux equipes soignantes, permettant une intervention rapide en cas de resultat menacant le pronostic vital.

L'equipe de biologie d'urgence de la Clinique Pasteur de Tunis comprend des biologistes medicaux de garde et des techniciens specialises, assurant une validation des resultats et un conseil biologique en continu. Le laboratoire d'urgence est situe a proximite immediat du service des urgences et du bloc operatoire, minimisant les delais d'acheminement des prelevements.`,
    preparation: [
      'Aucune preparation specifique n\'est requise en situation d\'urgence',
      'Le jeune n\'est pas necessaire pour les analyses d\'urgence',
      'Signaler les traitements en cours si possible (anticoagulants, insuline)',
      'L\'identite du patient doit etre verifiee meme en urgence (bracelet d\'identification)',
      'En cas de transfusion urgente, deux determinations de groupe sanguin sont necessaires',
      'Les prelevements sont prioritaires et achemines immediatement au laboratoire',
    ],
    deroulement: [
      'Prelevement sanguin realise par l\'equipe soignante (urgences, reanimation, bloc operatoire)',
      'Acheminement immediat des echantillons au laboratoire d\'urgence (pneumatique ou porteur)',
      'Enregistrement et tri des echantillons par ordre de priorite',
      'Analyse sur les automates dedies a l\'urgence',
      'Transmission electronique des resultats des leur validation',
      'Alerte telephonique immediate en cas de valeur critique',
      'Le biologiste de garde est disponible pour conseil et interpretation',
    ],
    duree: 'Resultats disponibles en 30 a 60 minutes pour les analyses critiques, en continu 24h/24',
    resultats:
      'Les resultats critiques (troponine, gaz du sang, hemogramme, ionogramme) sont rendus en moins de 60 minutes. Un systeme d\'alerte transmet automatiquement les valeurs critiques au medecin en charge du patient.',
    risques: [
      'Hematome au point de ponction',
      'Prelevement plus difficile en situation d\'urgence (collapsus, deshydratation)',
      'Risque de resultat faussement anormal en cas de prelevement hemolysis ou mal identifie',
      'Delai incompressible d\'analyse malgre l\'urgence',
    ],
    indications: [
      'Douleur thoracique suspecte d\'infarctus (troponine, ECG)',
      'Detresse respiratoire (gaz du sang, D-dimeres)',
      'Hemorragie aigue (NFS, coagulation, groupage sanguin)',
      'Suspicion de sepsis (NFS, CRP, procalcitonine, hemocultures)',
      'Trouble de conscience (glycemie, ionogramme, toxicologie)',
      'Douleur abdominale aigue (lipase, bilan hepatique, NFS)',
      'Bilan pre-operatoire en urgence',
      'Surveillance des patients en reanimation',
    ],
  },
  {
    slug: 'bilan-preoperatoire',
    title: 'Bilan pre-operatoire complet',
    shortTitle: 'Bilan pre-operatoire',
    description:
      "Ensemble standardise d'analyses biologiques realisees avant toute intervention chirurgicale pour evaluer l'etat de sante du patient et minimiser les risques operatoires.",
    fullDescription: `Le bilan pre-operatoire est un ensemble d'analyses biologiques systematiquement realisees avant toute intervention chirurgicale programmee. Son objectif est d'evaluer l'etat de sante general du patient, de detecter des anomalies susceptibles d'augmenter le risque operatoire et de disposer de valeurs de reference pour le suivi post-operatoire. Ce bilan est prescrit par l'anesthesiste lors de la consultation pre-anesthesique.

Le bilan pre-operatoire standard comprend : la numeration formule sanguine (NFS) pour detecter une anemie ou une anomalie des plaquettes, le bilan de coagulation (TP, TCA) pour evaluer le risque hemorragique, le groupage sanguin ABO-Rh et la recherche d'agglutinines irregulieres (RAI) en prevision d'une eventuelle transfusion, la glycemie, la creatinine (fonction renale), le ionogramme sanguin et le bilan hepatique. Selon le type de chirurgie et les antecedents du patient, des analyses complementaires peuvent etre demandees.

Pour les chirurgies lourdes ou chez les patients a risque, le bilan est elargi : bilan thyroidien, dosage de la troponine, BNP, hemoglobine glyquee chez le patient diabetique, serologies pre-transfusionnelles (VIH, hepatites B et C), bilan nutritionnel (albumine, pre-albumine) et bilan phosphocalcique. L'anesthesiste adapte la prescription a chaque situation clinique pour une evaluation personnalisee.

Au laboratoire de la Clinique Pasteur de Tunis, le bilan pre-operatoire est realise dans un circuit dedie permettant un rendu rapide des resultats, generalement dans la journee. Les biologistes alertent immediatement l'anesthesiste et le chirurgien en cas d'anomalie necessitant un report ou une adaptation de la prise en charge chirurgicale.`,
    preparation: [
      'Etre a jeun depuis 10 a 12 heures (necessaire pour la glycemie et le bilan lipidique)',
      'Apporter l\'ordonnance de l\'anesthesiste et le dossier pre-anesthesique',
      'Signaler tous les medicaments en cours, en particulier les anticoagulants et antiaggregants',
      'Signaler tout antecedent de transfusion sanguine',
      'Signaler toute allergie connue (medicaments, latex, produits iodes)',
      'Apporter les resultats d\'analyses anterieures si disponibles',
      'Prevoir suffisamment de temps pour le prelevement (plusieurs tubes necessaires)',
    ],
    deroulement: [
      'Accueil au laboratoire avec l\'ordonnance de l\'anesthesiste',
      'Verification de l\'identite du patient (prelevement d\'identite-vigilance pour le groupage sanguin)',
      'Prelevement sanguin veineux de plusieurs tubes (EDTA, citrate, sec, heparine)',
      'Deux prelevements distincts sont necessaires pour le groupage sanguin (regle de double determination)',
      'Les echantillons sont traites en priorite dans le circuit pre-operatoire',
      'Les resultats sont valides par le biologiste medical',
      'Les resultats sont transmis a l\'anesthesiste et integres au dossier operatoire',
      'Toute anomalie significative est signalee immediatement',
    ],
    duree: '10 a 15 minutes pour les prelevements, resultats disponibles dans la journee',
    resultats:
      'Les resultats du bilan pre-operatoire sont disponibles dans un delai de 4 a 8 heures. Le groupage sanguin et la RAI necessitent un delai de 24 a 48 heures (premiere determination). Les resultats sont transmis directement au service de chirurgie et d\'anesthesie.',
    risques: [
      'Hematome au point de ponction (benin)',
      'Douleur legere lors du prelevement (plusieurs tubes necessaires)',
      'Necessitedenouveau prelevement si les resultats sont discordants ou si l\'echantillon est non conforme',
      'Report eventuel de l\'intervention si une anomalie significative est detectee',
    ],
    indications: [
      'Toute intervention chirurgicale programmee (systematique)',
      'Chirurgie orthopedique (prothese de hanche, genou)',
      'Chirurgie cardiaque et vasculaire',
      'Chirurgie abdominale et digestive',
      'Chirurgie gynecologique et obstetricale (cesarienne programmee)',
      'Chirurgie ORL, ophtalmologique et plastique',
      'Endoscopie interventionnelle programmee',
      'Patient a risque (age, diabete, insuffisance renale, traitement anticoagulant)',
    ],
  },
  {
    slug: 'analyses-specialisees',
    title: 'Analyses de routine et specialisees',
    shortTitle: 'Analyses specialisees',
    description:
      "Panel complet d'analyses biologiques couvrant les explorations de routine et les investigations specialisees, pour repondre a l'ensemble des besoins diagnostiques des patients et des cliniciens.",
    fullDescription: `Le laboratoire de la Clinique Pasteur de Tunis propose un panel etendu d'analyses de routine et d'analyses specialisees couvrant toutes les disciplines de la biologie medicale. Cette offre complete permet de repondre a la quasi-totalite des besoins diagnostiques sans recourir a un laboratoire exterieur, garantissant des delais optimaux et une tracabilite totale des prelevements.

Les analyses de routine comprennent l'hemogramme, le bilan biochimique standard, le bilan lipidique, le bilan hepatique et renal, la CRP, la vitesse de sedimentation, l'ECBU, le bilan thyroidien (TSH, T3, T4), les serologies courantes et le bilan de coagulation. Ces analyses, prescrites quotidiennement par les medecins generalistes et les specialistes, beneficient de delais de rendu rapides grace a l'automatisation complete des chaines analytiques.

Les analyses specialisees englobent des domaines d'expertise plus pointus : dosages hormonaux complets (cortisol, ACTH, hormones de croissance, hormones sexuelles, insuline, peptide C), dosages vitaminiques (vitamines D, B12, folates), exploration du metabolisme phosphocalcique, dosage de medicaments (antiepileptiques, immunosuppresseurs, antibiotiques), exploration de l'infertilite, marqueurs de maladies metaboliques et genetiques, typage HLA, et analyses de biologie moleculaire.

Le laboratoire dispose d'une demarche qualite certifiee avec des controles qualite internes quotidiens et une participation a des evaluations externes de qualite nationales et internationales. L'ensemble des resultats est accessible via une plateforme en ligne securisee, facilitant le suivi medical et le partage d'informations entre les differents praticiens impliques dans la prise en charge du patient.`,
    preparation: [
      'Etre a jeun depuis 10 a 12 heures pour les analyses metaboliques (glycemie, bilan lipidique)',
      'Pour les dosages hormonaux : respecter l\'heure de prelevement prescrite (certaines hormones varient selon l\'heure)',
      'Pour le dosage de medicaments : respecter le delai par rapport a la derniere prise (dosage residuel ou dosage au pic)',
      'Signaler tous les medicaments et complements alimentaires en cours',
      'Apporter l\'ordonnance complete et les resultats anterieurs',
      'Pour certaines analyses specialisees, une prise de rendez-vous peut etre necessaire',
    ],
    deroulement: [
      'Accueil et enregistrement au laboratoire',
      'Verification de l\'identite et de l\'ordonnance',
      'Prelevement sanguin adapte aux analyses demandees (type et nombre de tubes specifiques)',
      'Recueil d\'autres echantillons si necessaire (urines des 24 heures, selles, prelevements specifiques)',
      'Conditionnement et acheminement des echantillons vers les secteurs techniques concernes',
      'Analyses realisees sur des automates de derniere generation ou par techniques manuelles pour certaines analyses rares',
      'Validation biologique par un biologiste medical qualifie',
      'Mise en ligne des resultats sur la plateforme securisee du laboratoire',
    ],
    duree: '5 a 15 minutes pour le prelevement. Delai de resultats variable : quelques heures (routine) a plusieurs jours (analyses specialisees)',
    resultats:
      'Les analyses de routine sont disponibles dans un delai de 2 a 6 heures. Les analyses specialisees necessitent 1 a 7 jours selon le type de dosage. Les resultats sont accessibles en ligne sur la plateforme securisee du laboratoire et transmis au medecin prescripteur.',
    risques: [
      'Hematome au point de ponction',
      'Douleur legere lors du prelevement',
      'Malaise vagal (rare)',
      'Necessitedenouveau prelevement si conditions pre-analytiques non respectees',
      'Delai variable selon la complexite de l\'analyse demandee',
    ],
    indications: [
      'Bilan de sante complet (check-up annuel)',
      'Bilan hormonal (troubles thyroidiens, troubles de la fertilite, menopause)',
      'Dosage de vitamines et oligo-elements (fatigue, carence)',
      'Bilan d\'auto-immunite (maladies auto-immunes)',
      'Dosage therapeutique de medicaments (ajustement des doses)',
      'Bilan d\'allergie (IgE specifiques)',
      'Exploration d\'une anomalie detectee sur un bilan de routine',
      'Suivi biologique des maladies chroniques (diabete, insuffisance renale, VIH)',
    ],
  },
];
