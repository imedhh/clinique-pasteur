export const examensEndoscopie = [
  {
    slug: 'fogd',
    title: 'Fibroscopie gastrique (FOGD)',
    shortTitle: 'FOGD',
    image: '/images/fiches/endo-fogd.webp',
    description:
      "Exploration visuelle de l'oesophage, de l'estomac et du duodenum a l'aide d'un endoscope souple, permettant le diagnostic des pathologies digestives hautes.",
    fullDescription: `La fibroscopie oeso-gastro-duodenale (FOGD) est l'examen de reference pour explorer la partie haute du tube digestif. Elle permet de visualiser directement la muqueuse de l'oesophage, de l'estomac et du duodenum grace a un endoscope souple equipe d'une camera miniaturisee et d'une source lumineuse. Cet examen est essentiel pour le diagnostic de nombreuses pathologies digestives.

La FOGD permet de detecter et de diagnostiquer les ulceres gastriques et duodenaux, les gastrites, les oesophagites, le reflux gastro-oesophagien, les hernies hiatales, les polypes, les tumeurs benignes ou malignes, ainsi que les varices oesophagiennes. Au cours de l'examen, le gastro-enterologue peut realiser des biopsies (prelevements de tissu) pour analyse histologique, notamment pour la recherche d'Helicobacter pylori.

L'examen est generalement bien tolere grace a une anesthesie locale de la gorge par spray ou, si le patient le souhaite, sous sedation legere. La duree de l'examen est courte, environ 5 a 10 minutes, et les resultats visuels sont communiques immediatement par le medecin.

A la Clinique Pasteur de Tunis, la FOGD est realisee par des gastro-enterologues experimentes disposant d'endoscopes de derniere generation offrant une qualite d'image haute definition. Le materiel est rigoureusement desinfecte selon les protocoles en vigueur, garantissant une securite optimale pour chaque patient.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 6 heures avant l\'examen (ni manger, ni boire, ni fumer)',
      'Signaler tout traitement anticoagulant ou antiaggregant plaquettaire en cours',
      'Signaler toute allergie connue, notamment aux anesthesiques locaux',
      'Apporter les resultats d\'examens anterieurs (radiographies, prises de sang)',
      'Prevoir un accompagnant si l\'examen est realise sous sedation',
      'Ne pas conduire pendant les 12 heures suivant une sedation',
    ],
    deroulement: [
      'Le patient est installe en position allongee sur le cote gauche',
      'Une anesthesie locale de la gorge est realisee par spray ou une sedation legere est administree par voie intraveineuse',
      'Un embout buccal est place entre les dents pour proteger l\'endoscope',
      'L\'endoscope souple est introduit delicatement par la bouche et guide jusqu\'au duodenum',
      'Le medecin examine attentivement la muqueuse de l\'oesophage, de l\'estomac et du duodenum',
      'Des biopsies peuvent etre realisees si necessaire (indolores)',
      'L\'endoscope est retire delicatement a la fin de l\'examen',
      'Le patient est surveille en salle de repos pendant 30 minutes a 1 heure',
    ],
    duree: '5 a 15 minutes pour l\'examen, 1 a 2 heures avec la preparation et la surveillance',
    resultats:
      'Les resultats visuels sont communiques immediatement apres l\'examen par le gastro-enterologue. Les resultats des biopsies sont disponibles sous 5 a 10 jours ouvrables.',
    risques: [
      'Gene ou douleur legere dans la gorge pendant 24 a 48 heures apres l\'examen',
      'Saignement mineur au niveau d\'un site de biopsie (rare et generalement sans gravite)',
      'Perforation digestive (exceptionnelle, moins de 1/10 000)',
      'Reaction a l\'anesthesie ou a la sedation (rare)',
      'Infection (extremement rare grace aux protocoles de desinfection stricts)',
    ],
    indications: [
      { label: 'Douleurs abdominales hautes persistantes ou recidivantes', explication: `Quand des douleurs au creux de l'estomac reviennent regulierement malgre le traitement, la fibroscopie permet de regarder directement la muqueuse pour en trouver la cause, comme une gastrite ou un ulcere.` },
      { label: 'Brulures d\'estomac ou reflux gastro-oesophagien resistant au traitement', explication: `Si les remontees acides persistent malgre les medicaments, l'examen verifie l'etat de l'oesophage, recherche une inflammation ou une hernie hiatale et aide a adapter le traitement.` },
      { label: 'Difficultes a avaler (dysphagie)', explication: `Une gene ou un blocage en avalant merite toujours d'etre explore : la fibroscopie visualise l'oesophage pour identifier un retrecissement, une inflammation ou toute autre anomalie.` },
      { label: 'Nausees ou vomissements inexpliques', explication: `Lorsque des nausees ou des vomissements durent sans explication, l'examen de l'estomac et du duodenum permet de rechercher une cause locale et d'orienter le traitement.` },
      { label: 'Anemie ferriprive inexpliquee', explication: `Un manque de fer peut provenir d'un petit saignement discret dans le tube digestif. La fibroscopie recherche une lesion de l'oesophage, de l'estomac ou du duodenum qui pourrait en etre responsable.` },
      { label: 'Recherche d\'Helicobacter pylori', explication: `Cette bacterie tres repandue peut provoquer des gastrites et des ulceres. De petits prelevements indolores realises pendant l'examen permettent de la detecter et de la traiter efficacement.` },
      { label: 'Surveillance de lesions pre-cancereuses (endobrachyoesophage, polypes)', explication: `Certaines lesions benignes demandent une surveillance reguliere pour verifier qu'elles n'evoluent pas. Des controles programmes permettent d'agir tres tot en cas de changement.` },
      { label: 'Hemorragie digestive haute', explication: `En cas de vomissements de sang ou de selles tres noires, la fibroscopie localise rapidement l'origine du saignement et permet souvent de le traiter dans le meme temps.` },
    ],
  },
  {
    slug: 'coloscopie',
    title: 'Coloscopie',
    shortTitle: 'Coloscopie',
    image: '/images/fiches/endo-coloscopie.webp',
    description:
      "Exploration visuelle complete du colon et du rectum a l'aide d'un endoscope souple, essentielle pour le depistage et le diagnostic des pathologies colorectales.",
    fullDescription: `La coloscopie est l'examen de reference pour l'exploration du colon (gros intestin) et du rectum. Elle consiste a introduire un endoscope souple, equipe d'une camera haute definition, par l'anus afin de visualiser la totalite de la muqueuse colique. Cet examen est fondamental dans le depistage du cancer colorectal, deuxieme cause de mortalite par cancer en Tunisie.

La coloscopie permet de detecter et d'analyser les polypes coliques, les tumeurs, les maladies inflammatoires chroniques de l'intestin (maladie de Crohn, rectocolite hemorragique), les diverticules, les colites infectieuses et les malformations vasculaires. L'interet majeur de cet examen est de pouvoir realiser dans le meme temps des gestes therapeutiques comme l'ablation de polypes (polypectomie), evitant ainsi une intervention chirurgicale.

La preparation du colon est une etape essentielle pour la reussite de l'examen. Elle necessite un regime alimentaire sans residus pendant 2 a 3 jours et la prise d'une solution de lavage colique la veille et le matin de l'examen. Un colon parfaitement propre permet une exploration optimale et reduit le risque de manquer des lesions.

A la Clinique Pasteur de Tunis, la coloscopie est realisee sous sedation profonde assuree par un anesthesiste, garantissant un confort total pour le patient. Les gastro-enterologues utilisent des coloscopes de derniere generation avec chromoendoscopie virtuelle pour une detection amelioree des lesions planes ou de petite taille.`,
    preparation: [
      'Regime sans residus (sans fruits, legumes, cereales completes) pendant 2 a 3 jours avant l\'examen',
      'Prise de la preparation colique (solution de lavage) selon le protocole prescrit la veille et le matin de l\'examen',
      'Etre strictement a jeun depuis au moins 6 heures avant l\'examen',
      'Signaler tout traitement anticoagulant ou antiaggregant (adaptation necessaire avec le medecin prescripteur)',
      'Consultation pre-anesthesique obligatoire si l\'examen est realise sous sedation',
      'Prevoir un accompagnant obligatoire pour le retour a domicile',
      'Ne pas conduire pendant les 24 heures suivant la sedation',
    ],
    deroulement: [
      'Le patient est installe en position allongee sur le cote gauche',
      'La sedation est administree par l\'anesthesiste par voie intraveineuse',
      'Le coloscope est introduit delicatement par l\'anus',
      'De l\'air est insuffle pour deployer le colon et permettre une bonne visualisation',
      'L\'endoscope est progresse jusqu\'au caecum (jonction avec l\'intestin grele)',
      'L\'examen minutieux est realise lors du retrait de l\'endoscope',
      'Les polypes detectes sont retires dans le meme temps si possible',
      'Des biopsies sont realisees sur toute lesion suspecte',
      'Le patient est surveille en salle de reveil pendant 1 a 2 heures',
    ],
    duree: '20 a 45 minutes pour l\'examen, 2 a 3 heures au total avec preparation et surveillance',
    resultats:
      'Le gastro-enterologue communique les resultats visuels au patient et a son accompagnant apres le reveil. Les resultats des biopsies et de l\'analyse des polypes retires sont disponibles sous 7 a 14 jours.',
    risques: [
      'Ballonnements et douleurs abdominales moderees apres l\'examen (frequents et transitoires)',
      'Saignement apres polypectomie (1 a 2 % des cas, generalement mineur)',
      'Perforation colique (rare, environ 1/1000 pour les coloscopies avec polypectomie)',
      'Syndrome post-polypectomie (douleurs abdominales et fievre, rare)',
      'Complications liees a l\'anesthesie (rares)',
    ],
    indications: [
      { label: 'Depistage du cancer colorectal a partir de 45 ans ou plus tot en cas d\'antecedents familiaux', explication: `Meme sans symptome, la coloscopie de depistage permet de reperer et de retirer des polypes avant qu'ils ne se transforment. C'est le moyen le plus efficace de prevenir le cancer colorectal.` },
      { label: 'Test de depistage positif (sang dans les selles)', explication: `Quand un test de depistage revele des traces de sang invisibles a l'oeil nu, la coloscopie est indispensable pour en determiner l'origine, le plus souvent benigne, comme un polype ou des hemorroides.` },
      { label: 'Modification du transit intestinal persistante (diarrhee, constipation)', explication: `Un changement durable des habitudes intestinales, sans cause evidente, justifie un examen du colon pour verifier l'etat de la muqueuse et ecarter une lesion.` },
      { label: 'Rectorragies (sang dans les selles)', explication: `La presence de sang rouge dans les selles doit toujours etre exploree. La coloscopie permet d'en identifier la source exacte et de la traiter si necessaire au cours du meme examen.` },
      { label: 'Anemie ferriprive inexpliquee', explication: `Un manque de fer inexplique peut etre lie a un saignement discret dans le colon. La coloscopie recherche la lesion responsable afin de la traiter et de corriger durablement l'anemie.` },
      { label: 'Douleurs abdominales chroniques inexpliquees', explication: `Quand des douleurs du ventre persistent sans explication malgre les premiers examens, la coloscopie permet de verifier directement l'etat du gros intestin et d'orienter le diagnostic.` },
      { label: 'Surveillance apres polypectomie ou cancer colorectal', explication: `Apres l'ablation de polypes ou le traitement d'un cancer du colon, des coloscopies de controle regulieres verifient l'absence de nouvelle lesion et assurent un suivi rassurant.` },
      { label: 'Bilan de maladie inflammatoire chronique de l\'intestin', explication: `Pour la maladie de Crohn ou la rectocolite hemorragique, la coloscopie evalue l'etendue et l'intensite de l'inflammation, ce qui aide le medecin a choisir et a ajuster le traitement.` },
    ],
  },
  {
    slug: 'echo-endoscopie',
    title: 'Echo-endoscopie',
    shortTitle: 'Echo-endoscopie',
    image: '/images/fiches/endo-echo-endoscopie.webp',
    description:
      "Examen combinant l'endoscopie et l'echographie permettant d'obtenir des images precises des parois digestives et des organes adjacents, indispensable pour le bilan de certaines pathologies digestives et pancreatiques.",
    fullDescription: `L'echo-endoscopie est un examen de haute precision qui combine l'endoscopie digestive et l'echographie. Un endoscope equipe d'une sonde d'echographie miniaturisee a son extremite est introduit dans le tube digestif, permettant de realiser une echographie de l'interieur meme de l'organisme. Cette technique fournit des images d'une resolution superieure a celles obtenues par echographie transcutanee ou scanner.

Cet examen est particulierement performant pour l'exploration du pancreas, des voies biliaires, de la paroi de l'oesophage, de l'estomac et du rectum, ainsi que des ganglions lymphatiques mediastinaux et abdominaux. L'echo-endoscopie permet d'evaluer avec precision la profondeur d'extension des tumeurs digestives (staging), de caracteriser les lesions sous-muqueuses et de detecter de petites lesions pancreatiques ou biliaires non visibles aux autres examens d'imagerie.

L'echo-endoscopie peut egalement etre interventionnelle : elle permet de realiser des ponctions a l'aiguille fine de lesions ou de ganglions suspects pour obtenir un diagnostic cytologique ou histologique precis. Cette technique mini-invasive evite souvent le recours a des procedures chirurgicales diagnostiques.

A la Clinique Pasteur de Tunis, l'echo-endoscopie est pratiquee par des gastro-enterologues specialises disposant d'un equipement de pointe. L'examen est realise sous sedation profonde pour le confort du patient, dans des conditions de securite optimales.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 6 heures avant l\'examen',
      'Signaler tout traitement anticoagulant ou antiaggregant plaquettaire (arret eventuel necessaire avant une ponction)',
      'Apporter un bilan de coagulation recent si une ponction est prevue',
      'Consultation pre-anesthesique obligatoire',
      'Apporter les resultats d\'imagerie anterieurs (scanner, IRM, echographie)',
      'Prevoir un accompagnant obligatoire pour le retour a domicile',
    ],
    deroulement: [
      'La sedation profonde est administree par l\'anesthesiste',
      'L\'echo-endoscope est introduit par la bouche (voie haute) ou par l\'anus (voie basse selon l\'indication)',
      'L\'endoscope est positionne en regard de la zone a explorer',
      'La sonde echographique produit des images en temps reel de la paroi digestive et des organes adjacents',
      'Le medecin analyse la taille, la structure et l\'extension des lesions',
      'Si indique, une ponction a l\'aiguille fine est realisee sous controle echographique',
      'Les prelevements sont envoyes au laboratoire pour analyse',
      'Le patient est surveille en salle de reveil pendant 1 a 2 heures',
    ],
    duree: '30 a 60 minutes pour l\'examen, 2 a 3 heures au total',
    resultats:
      'Les resultats de l\'imagerie sont communiques par le gastro-enterologue dans les jours suivant l\'examen. Les resultats des ponctions sont disponibles sous 7 a 14 jours.',
    risques: [
      'Douleur legere de la gorge ou inconfort abdominal (frequents et transitoires)',
      'Saignement au point de ponction (rare)',
      'Pancreatite aigue apres ponction pancreatique (rare, environ 1 a 2 %)',
      'Perforation digestive (exceptionnelle)',
      'Infection (tres rare)',
      'Complications liees a l\'anesthesie (rares)',
    ],
    indications: [
      { label: 'Bilan d\'extension (staging) des cancers de l\'oesophage, de l\'estomac, du rectum et du pancreas', explication: `En placant la sonde d'echographie au contact direct de la lesion, cet examen mesure avec precision la profondeur d'une tumeur dans la paroi digestive, une information essentielle pour choisir le meilleur traitement.` },
      { label: 'Exploration de tumeurs ou masses pancreatiques', explication: `Le pancreas est un organe profond, difficile a examiner de l'exterieur. L'echo-endoscopie s'en approche au plus pres et peut detecter des lesions de tres petite taille invisibles sur d'autres examens.` },
      { label: 'Exploration des voies biliaires (calculs, tumeurs)', explication: `Quand un calcul ou un obstacle est suspecte dans les canaux qui transportent la bile, cet examen tres sensible permet de le confirmer ou de l'ecarter avant d'envisager un geste therapeutique.` },
      { label: 'Caracterisation de lesions sous-muqueuses du tube digestif', explication: `Certaines bosses apercues lors d'une endoscopie classique se developpent sous la surface de la paroi. L'echographie interne montre de quelle couche elles proviennent et aide a en preciser la nature.` },
      { label: 'Ponction de masses ou de ganglions suspects', explication: `Sous controle echographique, une aiguille tres fine peut prelever quelques cellules d'une lesion ou d'un ganglion suspect. Ce prelevement fournit un diagnostic precis en evitant une intervention chirurgicale.` },
      { label: 'Exploration de kyste ou pseudokyste pancreatique', explication: `Devant une poche liquidienne du pancreas, l'examen en etudie le contenu et les parois pour distinguer les kystes sans gravite de ceux qui necessitent une surveillance ou un traitement.` },
      { label: 'Bilan de pancreatite chronique', explication: `En cas d'inflammation prolongee du pancreas, l'echo-endoscopie evalue finement l'etat de la glande et de ses canaux, ce qui aide a suivre la maladie et a adapter la prise en charge.` },
      { label: 'Drainage de collections liquidiennes', explication: `Certaines poches de liquide formees autour du pancreas peuvent etre videes directement a travers la paroi de l'estomac, sous guidage echographique, evitant ainsi une chirurgie plus lourde.` },
    ],
  },
  {
    slug: 'cpre',
    title: 'CPRE - Cholangio-Pancreatographie Retrograde Endoscopique',
    shortTitle: 'CPRE',
    image: '/images/fiches/endo-cpre.webp',
    description:
      "Examen endoscopique specialise permettant de visualiser et de traiter les pathologies des voies biliaires et du canal pancreatique, notamment l'extraction de calculs biliaires.",
    fullDescription: `La cholangio-pancreatographie retrograde endoscopique (CPRE) est une procedure endoscopique specialisee qui combine l'endoscopie et la radiologie pour visualiser et traiter les pathologies des voies biliaires et du canal pancreatique. Un endoscope lateral (duodenoscope) est introduit par la bouche jusqu'au duodenum, ou un catheter est insere dans l'orifice commun des voies biliaires et pancreatiques (papille de Vater).

La CPRE est aujourd'hui principalement utilisee a visee therapeutique. Elle permet l'extraction de calculs des voies biliaires (lithiase choledocienne), la mise en place de protheses (stents) biliaires ou pancreatiques pour lever une obstruction, la sphincterotomie (ouverture du sphincter d'Oddi) et le drainage des voies biliaires infectees (angiocholite). Ces gestes mini-invasifs evitent souvent le recours a une chirurgie ouverte.

L'injection d'un produit de contraste dans les canaux biliaires et pancreatiques, associee a la fluoroscopie (radiographie en temps reel), permet de cartographier l'arbre biliaire et pancreatique avec une grande precision. Cette technique est indispensable pour localiser les obstacles, guider les gestes therapeutiques et verifier leur efficacite.

A la Clinique Pasteur de Tunis, la CPRE est realisee dans une salle equipee d'un arceau de fluoroscopie par des gastro-enterologues specialises en endoscopie interventionnelle. L'examen est pratique sous anesthesie generale, avec un suivi post-operatoire rigoureux pour prevenir et detecter toute complication.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 8 heures avant l\'examen',
      'Arret obligatoire des anticoagulants et antiaggregants selon le protocole prescrit par le medecin',
      'Bilan sanguin prealable (coagulation, bilan hepatique, lipase)',
      'Consultation pre-anesthesique obligatoire',
      'Signaler toute allergie, notamment aux produits de contraste iodes',
      'Hospitalisation d\'au moins 24 heures generalement necessaire',
      'Apporter tous les examens d\'imagerie anterieurs (scanner, IRM biliaire)',
    ],
    deroulement: [
      'L\'anesthesie generale est induite par l\'anesthesiste',
      'Le patient est installe en position ventrale ou semi-ventrale',
      'Le duodenoscope est introduit par la bouche jusqu\'a la deuxieme portion du duodenum',
      'La papille de Vater est reperee et cathetererisee',
      'Un produit de contraste est injecte pour opacifier les voies biliaires et/ou le canal pancreatique',
      'Des images radiologiques sont prises en temps reel (fluoroscopie)',
      'Les gestes therapeutiques sont realises : sphincterotomie, extraction de calculs, pose de prothese',
      'L\'endoscope est retire et le patient est transfere en salle de reveil',
      'Une surveillance hospitaliere de 24 a 48 heures est assuree',
    ],
    duree: '30 a 90 minutes selon la complexite du geste',
    resultats:
      'Les resultats du geste therapeutique sont communiques immediatement par le gastro-enterologue. Un compte-rendu operatoire detaille est remis au patient lors de sa sortie d\'hospitalisation.',
    risques: [
      'Pancreatite aigue post-CPRE (complication la plus frequente, 3 a 10 % des cas, generalement benigne)',
      'Hemorragie post-sphincterotomie (1 a 2 %, majoritairement controlee endoscopiquement)',
      'Perforation duodenale (rare, moins de 1 %)',
      'Angiocholite ou infection biliaire (rare avec antibioprophylaxie)',
      'Complications liees a l\'anesthesie generale',
    ],
    indications: [
      { label: 'Calcul des voies biliaires (lithiase choledocienne)', explication: `Quand un calcul bloque le canal qui transporte la bile, la CPRE permet de le retirer par les voies naturelles, sans ouvrir l'abdomen, et de soulager rapidement les douleurs.` },
      { label: 'Ictere obstructif (jaunisse par obstruction des voies biliaires)', explication: `Lorsque la peau et les yeux jaunissent parce que la bile ne s'ecoule plus, la CPRE identifie l'obstacle en cause et permet de retablir le passage de la bile dans le meme temps.` },
      { label: 'Angiocholite (infection des voies biliaires)', explication: `Une infection de la bile bloquee est une situation serieuse qui necessite un drainage rapide. La CPRE evacue la bile infectee et traite l'obstacle, ce qui aide a controler l'infection.` },
      { label: 'Stenose biliaire benigne ou maligne necessitant la pose d\'une prothese', explication: `Quand un canal biliaire est retreci, un petit tube appele prothese peut etre mis en place au cours de la CPRE pour maintenir le passage ouvert et permettre a la bile de s'ecouler normalement.` },
      { label: 'Fuite biliaire post-operatoire', explication: `Apres certaines chirurgies, la bile peut s'echapper par une petite fuite. La CPRE aide a la localiser et a la traiter, souvent par la pose temporaire d'une prothese, sans nouvelle operation.` },
      { label: 'Stenose ou calcul du canal pancreatique', explication: `Le canal du pancreas peut lui aussi etre bloque par un calcul ou un retrecissement, source de douleurs. La CPRE permet de lever cet obstacle et d'ameliorer le confort du patient.` },
      { label: 'Drainage biliaire avant ou apres chirurgie', explication: `Avant ou apres une intervention sur le foie, le pancreas ou les voies biliaires, un drainage par CPRE assure le bon ecoulement de la bile et met le patient dans les meilleures conditions.` },
    ],
  },
  {
    slug: 'polypectomie',
    title: 'Polypectomie endoscopique',
    shortTitle: 'Polypectomie',
    image: '/images/fiches/endo-polypectomie.webp',
    description:
      "Ablation de polypes (excroissances) du tube digestif au cours d'une endoscopie, technique essentielle dans la prevention du cancer colorectal.",
    fullDescription: `La polypectomie endoscopique est un geste therapeutique realise au cours d'une endoscopie digestive (coloscopie ou gastroscopie) et consistant a retirer des polypes de la muqueuse du tube digestif. Les polypes sont des excroissances anormales de la muqueuse qui peuvent etre benignes ou presenter un risque de transformation maligne. Leur ablation est un acte fondamental de prevention du cancer colorectal.

Plusieurs techniques de polypectomie existent selon la taille, la forme et la localisation du polype : la pince a biopsie pour les polypes de tres petite taille, l'anse froide pour les polypes sessiles de moins de 10 mm, l'anse diathermique avec courant electrique pour les polypes pedricules ou de plus grande taille. Le choix de la technique est determine par le gastro-enterologue en temps reel selon les caracteristiques du polype.

Apres ablation, le polype est systematiquement recupere et envoye en analyse histologique au laboratoire d'anatomopathologie. Cette analyse permet de determiner le type histologique du polype (adenome, polype hyperplasique, polype festonne) et surtout de verifier l'absence de cellules cancereuses. Le resultat de cette analyse conditionne la surveillance ulterieure et le delai de la prochaine coloscopie.

A la Clinique Pasteur de Tunis, les polypectomies sont realisees par des gastro-enterologues maitrisant l'ensemble des techniques endoscopiques. Le plateau technique est equipe de generateurs electro-chirurgicaux de derniere generation et de dispositifs d'hemostase pour une prise en charge optimale et securisee.`,
    preparation: [
      'Preparation identique a celle de la coloscopie : regime sans residus et preparation colique',
      'Arret obligatoire des anticoagulants et antiaggregants selon les recommandations (5 a 7 jours avant)',
      'Bilan de coagulation recent obligatoire',
      'Consultation pre-anesthesique obligatoire',
      'Signaler tout antecedent d\'allergie ou de saignement anormal',
      'Prevoir un accompagnant pour le retour a domicile',
    ],
    deroulement: [
      'L\'examen se deroule sous sedation profonde ou anesthesie generale',
      'Le polype est identifie et examine (taille, forme, vascularisation)',
      'La technique d\'ablation est choisie en fonction des caracteristiques du polype',
      'Pour les polypes pedricules, une anse est placee autour du pedicule et un courant electrique est applique pour sectionner et coaguler',
      'Pour les polypes sessiles, une injection sous-muqueuse peut etre realisee pour soulever la lesion',
      'Le polype est recupere pour analyse histologique',
      'Le site d\'ablation est examine pour verifier l\'absence de saignement',
      'Des clips d\'hemostase peuvent etre poses en prevention',
      'Le patient est surveille en salle de reveil',
    ],
    duree: '15 a 45 minutes selon le nombre et la taille des polypes',
    resultats:
      'Le gastro-enterologue informe le patient du nombre et de l\'aspect des polypes retires. Les resultats de l\'analyse histologique sont disponibles sous 7 a 14 jours et determinent le programme de surveillance.',
    risques: [
      'Saignement immediat ou differe (1 a 2 % des cas, pouvant survenir jusqu\'a 15 jours apres le geste)',
      'Perforation colique (rare, environ 0.1 a 0.5 %)',
      'Syndrome post-polypectomie (douleurs abdominales, fievre sans perforation, rare)',
      'Ablation incomplete necessitant un deuxieme temps endoscopique (polypes de grande taille)',
      'Complications liees a l\'anesthesie',
    ],
    indications: [
      { label: 'Polype(s) detecte(s) lors d\'une coloscopie de depistage', explication: `Lorsqu'un polype est decouvert pendant une coloscopie, il est generalement retire immediatement, au cours du meme examen. Le patient est ainsi traite sans avoir besoin d'une nouvelle intervention.` },
      { label: 'Polype(s) detecte(s) lors d\'une coloscopie de surveillance', explication: `Chez les personnes suivies apres de precedents polypes, tout nouveau polype repere lors d'un controle est retire dans la foulee, ce qui maintient une prevention efficace dans la duree.` },
      { label: 'Adenome(s) avec dysplasie', explication: `Certains polypes presentent des cellules qui commencent a se modifier. Leur ablation complete supprime le risque qu'ils evoluent un jour vers une lesion plus serieuse.` },
      { label: 'Polypes festonnes', explication: `Ces polypes d'aspect particulier, souvent plats et discrets, peuvent evoluer silencieusement. Leur retrait systematique fait partie des bonnes pratiques de prevention.` },
      { label: 'Polypes gastriques decouverts lors d\'une FOGD', explication: `Des polypes peuvent aussi se former dans l'estomac. Lorsqu'ils sont decouverts lors d'une fibroscopie, leur ablation permet de les analyser et d'ecarter toute anomalie.` },
      { label: 'Prevention du cancer colorectal', explication: `La grande majorite des cancers du colon se developpent a partir de polypes benins qui evoluent lentement. Retirer les polypes des leur decouverte est donc le geste de prevention le plus efficace.` },
      { label: 'Polypes symptomatiques (saignement, occlusion partielle)', explication: `Un polype volumineux peut saigner ou gener le passage dans l'intestin. Son ablation endoscopique fait disparaitre ces symptomes tout en permettant son analyse complete.` },
    ],
  },
  {
    slug: 'mucosectomie',
    title: 'Mucosectomie',
    shortTitle: 'Mucosectomie',
    image: '/images/fiches/endo-mucosectomie.webp',
    description:
      "Technique endoscopique avancee permettant la resection de lesions superficielles etendues de la muqueuse digestive, alternative mini-invasive a la chirurgie.",
    fullDescription: `La mucosectomie, ou resection muqueuse endoscopique (EMR), est une technique endoscopique avancee qui permet de retirer des lesions superficielles de grande taille de la muqueuse du tube digestif. Contrairement a la polypectomie classique, la mucosectomie est adaptee aux lesions planes ou sessiles de plus de 20 mm, aux adenomes a extension laterale et aux cancers superficiels ne depassant pas la sous-muqueuse.

La technique repose sur l'injection d'une solution dans la sous-muqueuse (coussin sous-muqueux) afin de soulever la lesion et de la separer des couches profondes de la paroi digestive. Ce soulvement permet une resection plus sure en reduisant le risque de perforation et en facilitant la capture de la lesion par l'anse diathermique. La resection peut etre realisee en un seul fragment (monobloc) ou en plusieurs fragments (piece-meal) selon la taille de la lesion.

L'analyse histologique des pieces de resection est fondamentale : elle permet de confirmer la nature de la lesion, d'evaluer les marges de resection et de determiner si le traitement endoscopique est suffisant ou si une prise en charge chirurgicale complementaire est necessaire. La mucosectomie permet ainsi d'eviter une intervention chirurgicale lourde chez de nombreux patients.

A la Clinique Pasteur de Tunis, les mucosectomies sont realisees par des endoscopistes experimentees dans les techniques de resection avancees. La procedure se deroule sous anesthesie generale dans un environnement securise, avec un suivi rapproche pour prevenir les complications.`,
    preparation: [
      'Preparation identique a celle de la coloscopie pour les lesions coliques',
      'Etre a jeun depuis au moins 8 heures pour les lesions hautes',
      'Arret des anticoagulants et antiaggregants selon le protocole prescrit (5 a 10 jours avant)',
      'Bilan de coagulation recent obligatoire (TP, TCA, plaquettes)',
      'Consultation pre-anesthesique obligatoire',
      'Hospitalisation de 24 a 48 heures souvent necessaire',
      'Apporter les comptes-rendus endoscopiques et les resultats de biopsies anterieurs',
    ],
    deroulement: [
      'L\'anesthesie generale est induite par l\'anesthesiste',
      'La lesion est reperee et ses limites sont delimitees (chromoendoscopie)',
      'Une solution est injectee dans la sous-muqueuse pour soulever la lesion',
      'Le soulvement correct de la lesion est verifie (signe du lifting positif)',
      'L\'anse diathermique est positionnee autour de la lesion soulevee',
      'La resection est realisee par application d\'un courant electrique',
      'Les fragments sont recuperes pour analyse histologique',
      'Le site de resection est examine et des mesures d\'hemostase sont appliquees (clips, coagulation)',
      'Le patient est hospitalise pour surveillance pendant 24 a 48 heures',
    ],
    duree: '30 a 90 minutes selon la taille et la localisation de la lesion',
    resultats:
      'Le gastro-enterologue communique les premiers resultats visuels apres l\'examen. Les resultats definitifs de l\'analyse histologique sont disponibles sous 10 a 21 jours et font l\'objet d\'une consultation de suivi.',
    risques: [
      'Saignement immediat ou differe (5 a 10 % des cas, generalement controle par voie endoscopique)',
      'Perforation digestive (1 a 2 % des cas)',
      'Resection incomplete necessitant une deuxieme procedure ou une chirurgie',
      'Recidive locale en cas de resection piece-meal (10 a 20 %, surveillee par endoscopie)',
      'Syndrome post-resection (douleurs, fievre)',
      'Stenose cicatricielle tardive (pour les lesions circonferentielles)',
    ],
    indications: [
      { label: 'Adenomes plans ou sessiles de grande taille (plus de 20 mm)', explication: `Les polypes larges et plats ne peuvent pas etre retires avec une simple anse. La mucosectomie permet de les enlever en toute securite, en les soulevant d'abord par une injection sous la muqueuse.` },
      { label: 'Adenomes a extension laterale (LST) du colon', explication: `Certaines lesions s'etalent en surface sur la paroi du colon plutot que de former une boule. Cette technique specialisee permet de les retirer completement malgre leur etendue.` },
      { label: 'Cancers superficiels du tube digestif limites a la muqueuse', explication: `Quand une lesion cancereuse est detectee tres tot et reste limitee a la couche superficielle de la paroi, elle peut souvent etre retiree entierement par voie endoscopique, sans chirurgie.` },
      { label: 'Lesions dysplasiques sur endobrachyoesophage (Barrett)', explication: `Chez les personnes dont la muqueuse de l'oesophage s'est transformee a cause du reflux, les zones qui commencent a se modifier peuvent etre retirees preventivement par cette technique.` },
      { label: 'Polypes gastriques de grande taille', explication: `Les polypes volumineux de l'estomac peuvent etre enleves par mucosectomie, ce qui permet a la fois de les analyser completement et d'eviter une operation de l'estomac.` },
      { label: 'Lesions non accessibles a une polypectomie classique', explication: `Certaines lesions sont mal placees ou de forme difficile pour une ablation standard. La mucosectomie offre une solution supplementaire pour les retirer sans recourir a la chirurgie.` },
      { label: 'Alternative a la chirurgie pour les lesions benignes etendues', explication: `Pour de nombreuses lesions benignes mais etendues, cette technique evite une intervention chirurgicale lourde : le sejour est plus court et la recuperation nettement plus rapide.` },
    ],
  },
  {
    slug: 'protheses-digestives',
    title: 'Pose de protheses digestives',
    shortTitle: 'Protheses digestives',
    image: '/images/fiches/endo-protheses-digestives.webp',
    description:
      "Mise en place de protheses (stents) metalliques ou plastiques dans le tube digestif par voie endoscopique, pour lever une obstruction et retablir le transit.",
    fullDescription: `La pose de protheses digestives par voie endoscopique est une technique interventionnelle qui consiste a deployer un stent (endoprothese) metallique ou plastique dans une zone retreciede ou obstruee du tube digestif. Cette procedure permet de retablir la permeabilite du conduit digestif et d'ameliorer significativement la qualite de vie du patient, souvent dans un contexte de pathologie tumorale.

Les protheses digestives peuvent etre placees dans l'oesophage, l'estomac, le duodenum, le colon, les voies biliaires ou le canal pancreatique. Les stents metalliques auto-expansibles sont les plus couramment utilises pour les obstructions tumorales, tandis que les protheses plastiques sont privilegiees pour les stenoses benignes ou les obstructions temporaires des voies biliaires. Le choix du type de prothese depend de la localisation, de la nature de l'obstacle et du pronostic du patient.

Cette technique constitue souvent une alternative palliative a la chirurgie chez les patients atteints de cancers avances ou inoperables. Elle permet de retablir l'alimentation orale chez les patients souffrant de dysphagie tumorale, de lever un ictere obstructif ou de traiter une occlusion colique. La pose est realisee sous controle endoscopique et fluoroscopique pour garantir un positionnement precis.

A la Clinique Pasteur de Tunis, la pose de protheses digestives est realisee par des gastro-enterologues specialises en endoscopie interventionnelle, en collaboration avec les equipes d'anesthesie et de radiologie. L'ensemble des types de protheses est disponible pour repondre a chaque situation clinique.`,
    preparation: [
      'Etre a jeun depuis au moins 8 heures avant la procedure',
      'Bilan sanguin prealable (coagulation, bilan hepatique, NFS)',
      'Consultation pre-anesthesique obligatoire',
      'Bilan d\'imagerie recent (scanner, IRM) pour evaluer la stenose',
      'Signaler tout traitement anticoagulant en cours',
      'Hospitalisation necessaire pour la surveillance post-procedure',
      'Information et consentement eclaire du patient',
    ],
    deroulement: [
      'L\'anesthesie generale est induite',
      'L\'endoscope est introduit jusqu\'a la zone de stenose',
      'La stenose est franchie par un fil guide sous controle fluoroscopique',
      'Le degre et la longueur de la stenose sont evalues',
      'Une dilatation prealable peut etre necessaire pour permettre le passage du dispositif de largage',
      'La prothese est positionnee au niveau de la stenose et deployee sous double controle endoscopique et radiologique',
      'L\'expansion correcte de la prothese et le retablissement du passage sont verifies',
      'Le patient est surveille en hospitalisation pendant 24 a 48 heures',
    ],
    duree: '30 a 60 minutes pour la procedure',
    resultats:
      'Le retablissement du transit ou du drainage est generalement immediat apres la pose. Le gastro-enterologue remet un compte-rendu detaille et programme le suivi clinique et endoscopique.',
    risques: [
      'Migration de la prothese (5 a 10 % pour les protheses metalliques non couvertes)',
      'Obstruction de la prothese par croissance tumorale ou enclavement alimentaire',
      'Perforation digestive lors de la pose (rare, 1 a 3 %)',
      'Douleur thoracique ou abdominale apres la pose (frequente, transitoire)',
      'Saignement (rare)',
      'Reflux gastro-oesophagien pour les protheses oesophagiennes basses',
    ],
    indications: [
      { label: 'Stenose oesophagienne maligne avec dysphagie', explication: `Quand une tumeur retrecit l'oesophage et empeche de s'alimenter normalement, la pose d'une prothese rouvre le passage et permet au patient de remanger par la bouche, ce qui ameliore beaucoup son confort de vie.` },
      { label: 'Stenose gastro-duodenale tumorale avec vomissements', explication: `Si la sortie de l'estomac est bloquee par une lesion, les aliments ne passent plus et provoquent des vomissements. Une prothese posee a ce niveau retablit le transit et soulage rapidement le patient.` },
      { label: 'Obstruction colique maligne en urgence ou en palliatif', explication: `En cas d'occlusion du gros intestin, la mise en place d'une prothese permet de lever le blocage sans operation en urgence, soit en attendant une chirurgie preparee dans de bonnes conditions, soit comme traitement de confort.` },
      { label: 'Stenose biliaire maligne avec ictere obstructif', explication: `Quand une tumeur comprime le canal de la bile et provoque une jaunisse, une prothese placee dans ce canal retablit l'ecoulement de la bile et fait regresser la jaunisse et les demangeaisons.` },
      { label: 'Fuite biliaire ou pancreatique post-operatoire', explication: `Apres certaines interventions, un ecoulement anormal de bile ou de suc pancreatique peut persister. Une prothese temporaire detourne le liquide vers le circuit normal, le temps que la fuite cicatrise.` },
      { label: 'Stenose anastomotique benigne post-chirurgicale', explication: `La zone de couture realisee lors d'une chirurgie digestive peut parfois se retrecir en cicatrisant. Une prothese provisoire aide a maintenir le passage ouvert pendant la cicatrisation.` },
      { label: 'Fistule digestive', explication: `Une fistule est une petite communication anormale dans la paroi du tube digestif. En couvrant l'orifice, une prothese permet de le fermer et favorise la guerison sans nouvelle chirurgie.` },
    ],
  },
  {
    slug: 'dilatation-endoscopique',
    title: 'Dilatation endoscopique',
    shortTitle: 'Dilatation endoscopique',
    image: '/images/fiches/endo-dilatation-endoscopique.webp',
    description:
      "Elargissement d'un retrecissement (stenose) du tube digestif par voie endoscopique a l'aide de ballonnets ou de bougies, pour retablir le passage normal des aliments.",
    fullDescription: `La dilatation endoscopique est une technique interventionnelle qui consiste a elargir un retrecissement (stenose) du tube digestif a l'aide de dispositifs dedies introduits par voie endoscopique. Cette procedure permet de retablir un calibre suffisant pour le passage normal des aliments et des liquides, ameliorant considerablement la qualite de vie des patients souffrant de stenoses digestives.

Deux types principaux de dispositifs sont utilises : les ballonnets de dilatation pneumatique (TTS - through the scope), qui sont gonfles progressivement au niveau de la stenose, et les bougies de dilatation (type Savary-Gilliard), qui sont passees sur un fil guide a travers la stenose avec des diametres croissants. Le choix de la technique depend de la localisation, de la nature et de la severite de la stenose.

Les stenoses digestives peuvent etre d'origine variee : cicatricielles post-caustiques, peptiques (oesophagite severe), post-chirurgicales (anastomotiques), inflammatoires (maladie de Crohn) ou tumorales. La dilatation peut suffire a elle seule pour les stenoses benignes courtes, ou constituer un geste prealable a la pose d'une prothese pour les stenoses plus complexes. Plusieurs seances peuvent etre necessaires pour obtenir un resultat durable.

A la Clinique Pasteur de Tunis, les dilatations endoscopiques sont pratiquees par des gastro-enterologues experimentes, sous anesthesie generale et avec controle fluoroscopique si necessaire. Le suivi post-procedure est adapte a chaque patient pour optimiser les resultats et prevenir les recidives.`,
    preparation: [
      'Etre strictement a jeun depuis au moins 8 heures',
      'Arret des anticoagulants selon le protocole prescrit',
      'Bilan sanguin prealable (NFS, coagulation)',
      'Consultation pre-anesthesique obligatoire',
      'Apporter les comptes-rendus endoscopiques et radiologiques anterieurs',
      'Signaler toute allergie connue',
      'Hospitalisation de jour ou de 24 heures selon la situation',
    ],
    deroulement: [
      'L\'anesthesie generale est induite',
      'L\'endoscope est introduit et la stenose est visualisee',
      'Un fil guide est passe a travers la stenose sous controle visuel ou fluoroscopique',
      'Le ballonnet de dilatation est positionne au niveau de la stenose et gonfle progressivement',
      'Ou bien des bougies de diametre croissant sont passees successivement sur le fil guide',
      'Le degre de dilatation est controle endoscopiquement apres chaque passage',
      'La muqueuse est examinee pour detecter d\'eventuelles complications (dechirure, saignement)',
      'Des biopsies peuvent etre realisees si necessaire',
      'Le patient est surveille en salle de reveil puis en hospitalisation',
    ],
    duree: '15 a 30 minutes pour le geste, 2 a 4 heures de surveillance',
    resultats:
      'L\'amelioration est generalement ressentie des les premiers jours. Plusieurs seances espacees de 1 a 4 semaines peuvent etre necessaires pour les stenoses severes ou recidivantes.',
    risques: [
      'Perforation digestive (complication la plus redoutee, 1 a 3 % des cas)',
      'Saignement (rare, generalement mineur)',
      'Douleur thoracique ou abdominale post-procedure (frequente et transitoire)',
      'Recidive de la stenose necessitant de nouvelles seances',
      'Bacteriemie transitoire (rare)',
      'Complications liees a l\'anesthesie',
    ],
    indications: [
      { label: 'Stenose peptique de l\'oesophage (post-reflux severe)', explication: `Un reflux acide ancien et intense peut cicatriser en retrecissant l'oesophage, rendant l'alimentation difficile. La dilatation elargit doucement ce passage et permet de retrouver une deglutition confortable.` },
      { label: 'Stenose caustique de l\'oesophage', explication: `Apres l'ingestion accidentelle d'un produit corrosif, l'oesophage peut se retrecir en cicatrisant. Des seances de dilatation progressives redonnent au conduit un calibre suffisant pour s'alimenter.` },
      { label: 'Stenose anastomotique post-chirurgicale', explication: `La zone de suture d'une chirurgie digestive se retrecit parfois avec la cicatrisation. Une dilatation douce au ballonnet permet de rouvrir le passage sans nouvelle intervention.` },
      { label: 'Stenose de la maladie de Crohn', explication: `L'inflammation chronique de la maladie de Crohn peut epaissir la paroi de l'intestin jusqu'a le retrecir. La dilatation endoscopique soulage ce blocage et peut eviter ou retarder une chirurgie.` },
      { label: 'Stenose radique post-radiotherapie', explication: `Une radiotherapie peut, avec le temps, rigidifier et retrecir un segment du tube digestif. La dilatation ameliore le passage des aliments et le confort du patient.` },
      { label: 'Achalasie (dilatation pneumatique du cardia)', explication: `Dans cette maladie, le muscle situe a l'entree de l'estomac ne se relache pas correctement et bloque les aliments. Un ballonnet gonfle a ce niveau detend ce muscle et facilite a nouveau la deglutition.` },
      { label: 'Stenose pylorique', explication: `Quand la sortie de l'estomac est retrecie, l'estomac se vide mal, ce qui provoque pesanteur et vomissements. La dilatation au ballonnet retablit une vidange normale.` },
      { label: 'Stenose colique benigne', explication: `Un retrecissement non cancereux du gros intestin, souvent d'origine cicatricielle ou inflammatoire, peut etre elargi par ballonnet pour retablir un transit normal sans operation.` },
    ],
  },
  {
    slug: 'ligature-varices',
    title: 'Ligature de varices oesophagiennes',
    shortTitle: 'Ligature de varices',
    image: '/images/fiches/endo-ligature-varices.webp',
    description:
      "Traitement endoscopique des varices oesophagiennes par pose d'elastiques, technique de reference pour prevenir ou traiter les hemorragies digestives liees a l'hypertension portale.",
    fullDescription: `La ligature de varices oesophagiennes est une technique endoscopique therapeutique qui consiste a poser de petits elastiques a la base des varices dilatees de l'oesophage afin de les etrangler et de provoquer leur necrose puis leur disparition. Cette technique est aujourd'hui le traitement de reference des varices oesophagiennes, surpassant la sclerotherapie en termes d'efficacite et de securite.

Les varices oesophagiennes sont une consequence de l'hypertension portale, le plus souvent liee a une cirrhose du foie. L'augmentation de la pression dans le systeme porte entraine le developpement de circulations veineuses collaterales, dont les varices oesophagiennes, qui peuvent se rompre et provoquer des hemorragies digestives graves mettant en jeu le pronostic vital. La ligature est utilisee a la fois en urgence pour arreter une hemorragie active et en prophylaxie pour prevenir un premier episode ou une recidive hemorragique.

Le traitement par ligature endoscopique est realise en plusieurs seances espacees de 2 a 4 semaines, jusqu'a l'eradication complete des varices. Chaque seance permet de poser plusieurs elastiques sur les cordons variqueux les plus volumineux. Apres eradication, une surveillance endoscopique reguliere est maintenue pour detecter et traiter toute recidive.

A la Clinique Pasteur de Tunis, la ligature de varices oesophagiennes est pratiquee par des hepato-gastro-enterologues experimentes dans la prise en charge de l'hypertension portale. L'equipe dispose de dispositifs de ligature multi-bandes de derniere generation et d'un plateau de reanimation pour la gestion des urgences hemorragiques.`,
    preparation: [
      'Etre a jeun depuis au moins 6 heures (sauf urgence hemorragique)',
      'Bilan sanguin complet : NFS, coagulation, bilan hepatique, groupage sanguin',
      'Correction des troubles de coagulation si necessaire (transfusion de plasma, plaquettes)',
      'Voie veineuse peripherique posee pour perfusion et administration des traitements',
      'Signaler tous les medicaments en cours (beta-bloquants, anticoagulants)',
      'Consultation pre-anesthesique si procedure programmee',
      'En urgence : stabilisation hemodynamique prealable par l\'equipe de reanimation',
    ],
    deroulement: [
      'La sedation profonde ou l\'anesthesie generale est induite',
      'L\'endoscope equipe du dispositif de ligature multi-bandes est introduit par la bouche',
      'Les varices oesophagiennes sont identifiees et classees selon leur taille et leur risque',
      'Chaque varice est aspiree dans le capuchon du dispositif de ligature',
      'Un elastique est deploye a la base de la varice, provoquant sa strangulation',
      'Plusieurs ligatures sont posees par seance (generalement 4 a 8 elastiques)',
      'On commence par les varices situees pres de la jonction oeso-gastrique et on remonte',
      'Le patient est surveille en hospitalisation pendant 24 a 48 heures',
      'Une seance de controle est programmee 2 a 4 semaines plus tard',
    ],
    duree: '15 a 30 minutes par seance',
    resultats:
      'L\'eradication des varices est obtenue en 2 a 4 seances en moyenne. Une endoscopie de controle est realisee 1 a 3 mois apres la derniere seance, puis tous les 6 a 12 mois pour surveiller les recidives.',
    risques: [
      'Dysphagie ou douleur retrosternale transitoire (frequente pendant 24 a 48 heures)',
      'Ulcerations au site de ligature (attendues, guerissent en 1 a 3 semaines)',
      'Saignement post-ligature (2 a 5 % des cas, lié a la chute d\'escarre)',
      'Bacteriemie transitoire (rare)',
      'Stenose oesophagienne (rare, en cas de ligatures circonferentielles repetees)',
      'Recidive des varices necessitant de nouvelles seances',
    ],
    indications: [
      { label: 'Hemorragie digestive aigue par rupture de varices oesophagiennes (urgence)', explication: `Quand une varice de l'oesophage se rompt et saigne, la pose d'elastiques en urgence permet de stopper l'hemorragie directement a sa source. C'est un geste qui peut sauver la vie.` },
      { label: 'Prophylaxie secondaire apres un premier episode d\'hemorragie variqueuse', explication: `Apres un premier saignement, le risque de recidive est eleve. Des seances de ligature programmees font disparaitre progressivement les varices restantes et reduisent fortement ce risque.` },
      { label: 'Prophylaxie primaire chez les patients cirrhotiques avec varices de grande taille', explication: `Chez les personnes atteintes de cirrhose, les varices volumineuses peuvent etre traitees avant meme d'avoir saigne. Cette prevention evite une premiere hemorragie potentiellement grave.` },
      { label: 'Varices oesophagiennes de grade II ou III avec signes rouges', explication: `Certaines varices presentent a leur surface des signes qui annoncent un risque de rupture proche. Leur ligature preventive est alors recommandee sans attendre.` },
      { label: 'Patient cirrhotique avec antecedent d\'hemorragie digestive haute', explication: `Chez un patient cirrhotique ayant deja presente un saignement digestif, la surveillance endoscopique et la ligature des varices font partie du suivi regulier pour prevenir toute recidive.` },
      { label: 'Complement au traitement par beta-bloquants non selectifs', explication: `Les medicaments qui abaissent la pression dans les veines digestives et la ligature agissent de facon complementaire : leur association offre la meilleure protection contre les saignements.` },
      { label: 'Contre-indication ou intolerance aux beta-bloquants', explication: `Quand les medicaments habituels ne sont pas supportes ou sont deconseilles, la ligature endoscopique constitue une alternative efficace pour proteger le patient du risque de saignement.` },
    ],
  },
];
