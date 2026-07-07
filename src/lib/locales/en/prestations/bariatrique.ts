export const prestationsBariatrique = [
  {
    slug: 'sleeve-gastrectomie',
    title: 'Sleeve gastrectomy (gastric sleeve)',
    shortTitle: 'Sleeve gastrectomy',
    description: 'The reference procedure in obesity surgery: laparoscopic reduction of stomach volume for lasting weight loss.',
    fullDescription: `Sleeve gastrectomy, or gastric sleeve, is today the most widely performed bariatric surgery procedure in the world. It consists of removing a large part of the stomach to give it the shape of a tube (sleeve), which reduces the amount of food that can be eaten and decreases the secretion of the hunger hormone.

The procedure is performed entirely by laparoscopy, through small incisions, which limits post-operative pain, shortens the hospital stay and allows a quick return to daily activities. It does not alter the food pathway: digestion and nutrient absorption remain natural.

The sleeve is part of a comprehensive care pathway: it is preceded by a complete work-up and multidisciplinary preparation, then followed by long-term nutritional and medical support. It is this support, combined with new eating habits, that guarantees a lasting result.

At Clinique Pasteur Tunis, a recognised centre for obesity surgery, sleeve gastrectomy is performed by experienced surgical teams, in an operating theatre dedicated to laparoscopy, with a nutritional and psychological follow-up programme integrated within the clinic.`,
    image: '/images/fiches/baria-sleeve-gastrectomie.webp',
    indications: [
      { label: 'Severe or morbid obesity as defined by the medical team', explication: `The procedure is intended for people whose significant excess weight affects their daily health, after a complete assessment by the medical team.` },
      { label: 'Failure of weight-loss attempts through properly followed diets', explication: `When well-managed diets and medical treatments have not achieved lasting weight loss, surgery becomes an option to consider with confidence.` },
      { label: 'Obesity associated with complications (diabetes, hypertension, sleep apnoea)', explication: `When excess weight is accompanied by conditions such as diabetes, hypertension or sleep apnoea, the weight loss achieved through surgery often helps to improve them.` },
      { label: 'Motivated patient, ready to commit to long-term follow-up', explication: `Success depends largely on the patient\'s commitment: new eating habits and regular follow-up are essential after the operation.` },
      { label: 'Approval of the case by the multidisciplinary team', explication: `Each case is reviewed by all the specialists involved to ensure that the sleeve is truly the most suitable solution for the patient\'s situation.` },
    ],
    preparation: [
      'Complete pre-operative work-up (blood tests, cardiac assessment, endoscopy)',
      'Nutritional and dietary assessment',
      'Psychological assessment',
      'Pre-operative anaesthesia consultation',
      'Pre-operative diet prescribed by the team if necessary',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Insertion of laparoscopic instruments through small incisions',
      'Calibration of the stomach over a reference tube',
      'Division and stapling of the stomach to create the gastric sleeve',
      'Checking that the staple line is leak-proof',
      'Closure of the incisions and awakening in the recovery room',
      'Gradual reintroduction of fluids, then of an adapted diet',
    ],
    duree: '1 to 2 hours',
    resultats: 'Weight loss is gradual and takes place over the months following the procedure, frequently accompanied by an improvement in obesity-related conditions. Food is reintroduced in stages (liquid, puréed, then normal) and regular nutritional follow-up consolidates the results over time.',
    risques: [
      'Risks associated with any abdominal surgery, reduced by the laparoscopic approach',
      'Leak along the staple line, rare and detected through careful monitoring',
      'Gastro-oesophageal reflux, which may require appropriate treatment',
      'Nutritional deficiencies, prevented by follow-up and supplementation',
    ],
  },
  {
    slug: 'bypass-gastrique',
    title: 'Gastric bypass (Roux-en-Y)',
    shortTitle: 'Gastric bypass',
    description: 'A reference bariatric procedure combining stomach reduction with an intestinal bypass, particularly effective for diabetes associated with obesity.',
    fullDescription: `The Roux-en-Y gastric bypass is an obesity surgery procedure combining two mechanisms: the creation of a small gastric pouch, which limits meal size, and the bypassing of part of the intestine, which modifies food absorption and the hormonal regulation of hunger and blood sugar.

This dual action makes it a particularly effective procedure, especially in patients with type 2 diabetes or significant gastro-oesophageal reflux associated with obesity. It is performed entirely by laparoscopy, with the usual benefits of minimally invasive surgery: a more comfortable recovery period and a quick return to normal life.

The bypass requires a lasting commitment: vitamin supplementation and regular medical and nutritional follow-up are essential for life to prevent deficiencies. In return, it offers substantial, lasting weight loss and a marked improvement in associated conditions.

At Clinique Pasteur Tunis, gastric bypass is performed by experienced bariatric surgeons within a complete multidisciplinary team, with a structured follow-up protocol that supports each patient well beyond the operation itself.`,
    image: '/images/fiches/baria-bypass-gastrique.webp',
    indications: [
      { label: 'Severe or morbid obesity confirmed by the multidisciplinary team', explication: `The bypass is offered when significant excess weight puts health at risk and all the specialists have confirmed that surgery is the best option.` },
      { label: 'Type 2 diabetes associated with obesity', explication: `This procedure also acts on blood sugar regulation: it is particularly valuable when diabetes accompanies obesity, with improvement often occurring quickly.` },
      { label: 'Significant gastro-oesophageal reflux associated with obesity', explication: `The bypass configuration protects the oesophagus from acid reflux: it is often preferred when troublesome reflux already exists before the operation.` },
      { label: 'Failure or insufficient result of a first bariatric surgery', explication: `When a first procedure has not delivered the expected result, conversion to a bypass often makes it possible to restart lasting weight loss.` },
      { label: 'Motivated patient, accepting long-term follow-up and supplementation', explication: `After a bypass, daily vitamin intake and regular consultations are necessary for life: the patient\'s adherence to this follow-up is essential.` },
    ],
    preparation: [
      'Complete pre-operative work-up (blood tests, cardiac assessment, digestive endoscopy)',
      'Nutritional assessment and introduction of new eating habits',
      'Psychological assessment',
      'Pre-operative anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Laparoscopy through small abdominal incisions',
      'Creation of a small gastric pouch from the upper part of the stomach',
      'Construction of the Roux-en-Y intestinal bypass',
      'Creation of the anastomoses (connections) and checking that they are leak-proof',
      'Closure of the incisions and monitoring in the recovery room',
      'Gradual, supervised reintroduction of food',
    ],
    duree: '2 to 3 hours',
    resultats: 'Weight loss is substantial and progressive over the following months, with often rapid improvement of diabetes and other associated conditions. Regular nutritional follow-up and daily vitamin supplementation ensure nutritional balance and the stability of the result over time.',
    risques: [
      'Usual surgical risks, reduced by laparoscopy and the team\'s experience',
      'Anastomotic leak, rare and closely monitored post-operatively',
      'Dumping syndrome (discomfort after sugary meals), avoided through dietary advice',
      'Vitamin and mineral deficiencies, prevented by supplementation and follow-up',
    ],
  },
  {
    slug: 'mini-bypass-gastrique',
    title: 'Mini gastric bypass',
    shortTitle: 'Mini bypass',
    description: 'A simplified variant of the gastric bypass with a single anastomosis, combining effective weight loss with a shorter operative technique.',
    fullDescription: `The mini gastric bypass, also known as the omega-loop or one-anastomosis bypass, is a variant of the classic bypass. It combines the creation of an elongated gastric pouch with a single connection (anastomosis) to the intestine, compared with two for the Roux-en-Y bypass. The technique is therefore simpler and the operating time shorter, with comparable effectiveness in terms of weight loss.

Like other bariatric procedures, it acts both on meal volume and on the hormonal mechanisms that regulate hunger and metabolism. It is particularly suitable for certain patient profiles, with the choice discussed case by case with the multidisciplinary team.

The mini bypass is performed entirely by laparoscopy and, like the classic bypass, requires vitamin supplementation and regular long-term medical and nutritional follow-up.

At Clinique Pasteur Tunis, the mini gastric bypass is part of the full range of bariatric techniques on offer, making it possible to recommend to each patient the procedure best suited to their situation, within a coordinated care pathway.`,
    image: '/images/fiches/baria-mini-bypass-gastrique.webp',
    indications: [
      { label: 'Severe or morbid obesity confirmed by the multidisciplinary team', explication: `Like other obesity surgeries, the mini bypass is intended for people whose excess weight seriously affects their health, after the case has been approved by the team.` },
      { label: 'Type 2 diabetes or other complications associated with obesity', explication: `The procedure acts on the hormonal mechanisms that regulate hunger and blood sugar, which helps to improve diabetes and other obesity-related conditions.` },
      { label: 'Anatomical or medical circumstances favouring this technique over the Roux-en-Y bypass', explication: `In some patients, the configuration of the abdomen or their general health makes this construction simpler and safer than the classic bypass: the choice is discussed case by case.` },
      { label: 'Revision surgery after a first bariatric procedure in certain cases', explication: `The mini bypass may be offered to correct or convert a first obesity surgery whose result is insufficient, depending on each patient\'s situation.` },
      { label: 'Motivated patient, accepting long-term follow-up and supplementation', explication: `A lasting commitment is required: daily vitamins and regular consultations are an integral part of the treatment and guarantee a stable result.` },
    ],
    preparation: [
      'Complete pre-operative work-up (blood tests, cardiac assessment, digestive endoscopy)',
      'Nutritional and dietary assessment',
      'Psychological assessment',
      'Pre-operative anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Laparoscopy through small abdominal incisions',
      'Creation of a long, narrow gastric pouch',
      'Creation of a single anastomosis between the pouch and the intestine',
      'Checking that the construction is leak-proof',
      'Closure of the incisions and post-operative monitoring',
      'Gradual reintroduction of food following a precise protocol',
    ],
    duree: '1 hour 30 minutes to 2 hours',
    resultats: 'Weight loss is comparable to that of the classic bypass, progressing over the months following the procedure, with frequent improvement of associated conditions. Nutritional follow-up and daily vitamin supplementation are an integral part of the treatment and guarantee a lasting result.',
    risques: [
      'Usual surgical risks, reduced by the laparoscopic technique',
      'Bile reflux, specific to this construction, monitored during follow-up',
      'Anastomotic leak, rare and detected through post-operative monitoring',
      'Nutritional deficiencies, prevented by follow-up and supplementation',
    ],
  },
  {
    slug: 'anneau-gastrique',
    title: 'Adjustable gastric band',
    shortTitle: 'Gastric band',
    description: 'Laparoscopic placement of an adjustable band around the upper part of the stomach, a reversible food-restriction technique.',
    fullDescription: `The adjustable gastric band is a silicone device placed around the upper part of the stomach, creating a small pouch that slows the passage of food and produces a rapid feeling of fullness. The band is connected to a port placed under the skin, which allows its tightness to be adjusted by a simple injection, without further surgery.

It is the least invasive bariatric technique and the only fully reversible one: the band can be loosened, tightened or removed as needed. It involves no stapling or division of the stomach, making it a short procedure with a generally straightforward recovery.

The effectiveness of the band depends heavily on the patient\'s commitment: following the dietary guidelines and attending follow-up regularly determine the quality of the weight loss. Band adjustments are made gradually during follow-up consultations.

At Clinique Pasteur Tunis, gastric band placement is part of the same multidisciplinary pathway as the other bariatric procedures, with regular adjustment consultations and personalised nutritional support.`,
    image: '/images/fiches/baria-anneau-gastrique.webp',
    indications: [
      { label: 'Obesity confirmed by the multidisciplinary team', explication: `The band is intended for people whose excess weight justifies surgical help, after a complete assessment confirming that this gentle technique is suitable.` },
      { label: 'Preference for a reversible, minimally invasive technique', explication: `It is the only fully reversible bariatric procedure: the band can be loosened or removed at any time, with no stapling or division of the stomach.` },
      { label: 'Young patient or one wishing to preserve the integrity of their stomach', explication: `The stomach remains intact beneath the band: this option reassures patients who do not want any permanent change to their anatomy.` },
      { label: 'Ability to follow precise dietary guidelines', explication: `The band\'s effectiveness depends directly on following the guidelines: eating slowly, chewing well and adapting food textures are part of the treatment.` },
      { label: 'Commitment to regular follow-up with band adjustments', explication: `The band\'s tightness is adjusted gradually during consultations: this regular follow-up determines the quality of the weight loss.` },
    ],
    preparation: [
      'Complete pre-operative work-up',
      'Nutritional and dietary assessment',
      'Psychological assessment',
      'Pre-operative anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Laparoscopy through small abdominal incisions',
      'Placement of the band around the upper part of the stomach',
      'Fixation of the band and connection to the subcutaneous port',
      'Checking of the positioning',
      'Closure of the incisions and return to the room',
      'Gradual band adjustments during follow-up consultations',
    ],
    duree: '45 minutes to 1 hour',
    resultats: 'Weight loss is gradual and depends closely on following the dietary guidelines and attending adjustments regularly. The post-operative course is generally straightforward with a short hospital stay, and the band remains adjustable at any time depending on progress.',
    risques: [
      'Food intolerance or vomiting if the band is too tight, corrected by an adjustment',
      'Slippage or dilation of the pouch above the band, uncommon',
      'Problem with the port or tubing, easily corrected',
      'Possibility of removing the band if necessary, as the technique is reversible',
    ],
  },
  {
    slug: 'chirurgie-revision-bariatrique',
    title: 'Bariatric revision surgery',
    shortTitle: 'Bariatric revision',
    description: 'Reoperation after a first obesity surgery, to correct a complication or restart weight loss using a suitable technique.',
    fullDescription: `Bariatric revision surgery is intended for patients who have already undergone obesity surgery and whose result is insufficient, who have regained weight, or who have a complication of their first procedure: disabling reflux after a sleeve, intolerance to a gastric band, pouch dilation, among other situations.

Each case is unique and requires an in-depth assessment: endoscopic and radiological evaluation of the existing construction, analysis of eating habits and of the weight-loss history, and discussion by the multidisciplinary team. The proposed strategy may involve converting a sleeve into a bypass, removing a band and performing a new procedure, or correcting the existing construction.

These procedures are technically more demanding than a first surgery, because of adhesions and existing anatomical changes. They require an experienced surgical team and comprehensive technical facilities.

Clinique Pasteur Tunis, thanks to its high volume of bariatric activity, has the experience needed to manage these complex situations, including for patients initially operated on in other institutions, in Tunisia or abroad.`,
    image: '/images/fiches/baria-chirurgie-revision-bariatrique.webp',
    indications: [
      { label: 'Weight regain after a first bariatric surgery', explication: `When weight climbs back despite a first operation, an appropriate reoperation often makes it possible to restart lasting weight loss.` },
      { label: 'Insufficient weight loss despite properly followed care', explication: `If the result of the first surgery falls short of expectations even though follow-up has been respected, conversion to another technique may be offered.` },
      { label: 'Disabling gastro-oesophageal reflux after sleeve gastrectomy', explication: `Troublesome acid reflux can appear after a sleeve: conversion to a bypass effectively relieves this reflux while continuing weight loss.` },
      { label: 'Complication or intolerance of a gastric band', explication: `A poorly tolerated band, causing vomiting or discomfort, can be removed and replaced by another, better-suited bariatric technique.` },
      { label: 'Dilation of the gastric pouch or abnormality of the initial construction', explication: `Over time, the initial construction can stretch or become distorted and lose effectiveness: revision corrects this anatomical abnormality.` },
    ],
    preparation: [
      'Complete assessment of the existing construction (endoscopy, imaging)',
      'Review of the records from the first procedure',
      'Nutritional and psychological reassessment',
      'Discussion of the case at a multidisciplinary meeting',
      'Pre-operative anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Laparoscopy with careful release of adhesions',
      'Intra-operative assessment of the existing construction',
      'Correction or conversion to the chosen technique',
      'Checking that the new construction is leak-proof',
      'Enhanced post-operative monitoring',
      'Gradual, supervised reintroduction of food',
    ],
    duree: '2 to 3 hours depending on complexity',
    resultats: 'Depending on the case, revision corrects the complication involved and restarts lasting weight loss. Recovery is managed with careful monitoring, and multidisciplinary follow-up is reinforced to consolidate the result over time.',
    risques: [
      'Surgical risks slightly higher than for a first procedure, managed by the team\'s experience',
      'Leak or fistula, rare and closely monitored',
      'Possible need for successive surgical stages in certain complex situations',
    ],
  },
  {
    slug: 'ballon-intragastrique',
    title: 'Intragastric balloon',
    shortTitle: 'Gastric balloon',
    description: 'Temporary placement of a balloon in the stomach by endoscopy, without surgery, to initiate supervised weight loss.',
    fullDescription: `The intragastric balloon is a non-surgical alternative to obesity surgery. A soft silicone balloon is introduced into the stomach through the natural passages, during a simple endoscopy, and then filled with saline. By occupying part of the stomach\'s volume, it produces a rapid feeling of fullness and helps reduce the amounts eaten.

The balloon is a temporary device: it is removed after a few months, also by endoscopy. It serves as a genuine springboard for lasting changes in eating habits, provided it is accompanied by regular dietary follow-up throughout the treatment and after removal.

This solution is intended for patients whose excess weight does not yet warrant surgery, for those who wish to avoid a surgical procedure, or as preparation for bariatric surgery in certain patients.

At Clinique Pasteur Tunis, placement and removal of the intragastric balloon are performed on an outpatient basis in the endoscopy unit, under sedation, with an integrated nutritional support programme throughout the treatment.`,
    image: '/images/fiches/baria-ballon-intragastrique.webp',
    indications: [
      { label: 'Overweight or moderate obesity not warranting surgery', explication: `The balloon is intended for people whose excess weight is real but does not yet justify an operation: it offers effective help without any surgical procedure.` },
      { label: 'Refusal of or contraindication to bariatric surgery', explication: `When an operation is not wanted or is not possible for medical reasons, the balloon is a gentle alternative placed by simple endoscopy.` },
      { label: 'Preparation for bariatric surgery in certain patients', explication: `In some patients, an initial weight loss achieved with the balloon makes a subsequently scheduled bariatric surgery easier and safer.` },
      { label: 'Preference for a temporary solution without surgery', explication: `The balloon is removed after a few months: it suits those looking for a time-limited boost, with no change to their anatomy.` },
      { label: 'Motivation to change eating habits for good', explication: `The balloon is a springboard: it is the work on eating habits, supported by dietary follow-up, that maintains the result after its removal.` },
    ],
    preparation: [
      'Consultation with the medical team and nutritional assessment',
      'Prior endoscopy or digestive work-up if necessary',
      'Anaesthesia consultation for the sedation',
      'Fast for 6 hours before placement',
      'Arrange for someone to accompany you home',
    ],
    deroulement: [
      'Light sedation in the endoscopy room',
      'Endoscopic examination of the stomach',
      'Introduction of the deflated balloon through the mouth',
      'Filling of the balloon under visual control',
      'Quick awakening and short observation period',
      'Return home the same day with dietary instructions',
      'Removal of the balloon by endoscopy at the end of the treatment',
    ],
    duree: '20 to 30 minutes for placement',
    resultats: 'An early feeling of fullness sets in from the first days, after a short adaptation period. Weight loss builds up over the course of the treatment thanks to the accompanying dietary follow-up, and the new habits acquired help maintain the result after the balloon is removed.',
    risques: [
      'Nausea and gastric discomfort in the first days, relieved by appropriate treatment',
      'Intolerance of the balloon, sometimes requiring early removal',
      'Spontaneous deflation, rare with current devices',
    ],
  },
  {
    slug: 'bilan-preoperatoire',
    title: 'Complete pre-operative work-up',
    shortTitle: 'Pre-operative work-up',
    description: 'A complete multidisciplinary medical assessment before bariatric surgery, to operate under the safest possible conditions.',
    fullDescription: `The pre-operative work-up is a fundamental step in the bariatric surgery pathway. It confirms the indication for surgery, guides the choice of the technique best suited to each patient and prepares the operation under optimal safety conditions.

This work-up is multidisciplinary: it combines complete blood tests, a cardiac and respiratory assessment (with screening for sleep apnoea if necessary), a digestive endoscopy to check the condition of the stomach, and specialist consultations with the surgeon, the nutritionist, the psychologist and the anaesthetist.

Beyond the tests, this preparation period allows the patient to fully understand the planned procedure, its expected benefits and the commitments it involves, particularly regarding diet and follow-up. It is also the time to begin the first changes in habits that will make the post-operative period easier.

At Clinique Pasteur Tunis, the entire pre-operative work-up can be carried out on site, thanks to the facility\'s comprehensive technical resources, with coordinated appointments that simplify the pathway, including for patients coming from abroad.`,
    image: '/images/fiches/baria-bilan-preoperatoire.webp',
    indications: [
      { label: 'Any patient who is a candidate for bariatric surgery', explication: `This work-up is a mandatory and reassuring step in the pathway: it applies to everyone considering obesity surgery, before any operation is scheduled.` },
      { label: 'Confirmation of the indication for surgery by the multidisciplinary team', explication: `The results of the work-up allow all the specialists to confirm that surgery really is the best option for the patient.` },
      { label: 'Choice of the most suitable surgical technique', explication: `Every patient is different: the tests help choose, among the various bariatric techniques, the one that best matches their profile.` },
      { label: 'Screening for conditions associated with obesity', explication: `The work-up looks for conditions often linked to excess weight, such as diabetes or sleep apnoea, so they can be managed before the operation.` },
      { label: 'Preparation of the anaesthesia under the best conditions', explication: `Knowing precisely the condition of the heart, lungs and body allows the anaesthetist to adapt their technique and make the procedure safer.` },
    ],
    preparation: [
      'Bring all your medical documents and results of previous tests',
      'List of current medications',
      'Fast for blood samples and endoscopy as instructed',
      'Plan for several appointments, grouped together as much as possible',
    ],
    deroulement: [
      'Initial consultation with the bariatric surgeon',
      'Complete blood work-up',
      'Cardiac and respiratory assessment',
      'Upper digestive endoscopy',
      'Nutritional consultation and assessment of eating habits',
      'Psychological interview',
      'Anaesthesia consultation',
      'Case review and approval of the indication by the team',
    ],
    duree: 'Can be completed over a few days depending on appointment scheduling',
    resultats: 'At the end of the work-up, the multidisciplinary team approves the indication and proposes the technique best suited to the patient\'s profile. A surgery date is then scheduled, with personalised preparation instructions.',
    risques: [
      'Safe tests, most of them non-invasive',
      'The digestive endoscopy is performed under sedation for optimal comfort',
    ],
  },
  {
    slug: 'suivi-nutritionnel',
    title: 'Pre- and post-operative nutritional follow-up',
    shortTitle: 'Nutritional follow-up',
    description: 'Personalised dietary support before and after obesity surgery, key to lasting weight loss and good nutritional balance.',
    fullDescription: `Nutritional follow-up is a cornerstone of successful bariatric surgery. Before the procedure, it assesses eating habits, corrects any deficiencies and initiates the changes that will ease adaptation after the operation. It is also the opportunity to understand how eating will change after surgery.

After the procedure, food is reintroduced in stages: liquid, then puréed, then normal textures, following a precise schedule given to the patient. The nutritionist supports each phase, adjusts protein intake, ensures good hydration and prevents food intolerances.

In the longer term, regular consultations monitor nutritional balance, adjust vitamin and mineral supplementation, consolidate the new habits and prevent weight regain. This follow-up continues over time and is an integral part of the surgical treatment of obesity.

At Clinique Pasteur Tunis, nutritional coaching is built into the bariatric pathway: patients benefit from scheduled consultations before and after the procedure, with personalised meal plans and a dedicated contact available to answer their questions at every stage.`,
    image: '/images/fiches/baria-suivi-nutritionnel.webp',
    indications: [
      { label: 'Preparation for any bariatric surgery', explication: `Before the operation, the nutritionist assesses eating habits and initiates the first changes that will ease adaptation after surgery.` },
      { label: 'Support through the post-operative refeeding phases', explication: `After the procedure, eating resumes in stages, from liquid textures to normal meals: each phase is guided for maximum comfort and safety.` },
      { label: 'Prevention and correction of nutritional deficiencies', explication: `Protein, vitamin and mineral intake is monitored regularly to preserve energy, muscle mass and overall health.` },
      { label: 'Consolidation of new eating habits', explication: `Regular consultations help to firmly establish a balanced, suitable diet, the key to the long-term success of the surgery.` },
      { label: 'Prevention of long-term weight regain', explication: `Support that continues over time makes it possible to spot deviations early and adjust course before the weight climbs back.` },
    ],
    preparation: [
      'Bring a record of your eating habits if requested',
      'Results of recent blood tests',
      'List of current supplements and medications',
    ],
    deroulement: [
      'Initial assessment of eating habits and behaviour',
      'Development of a personalised meal plan',
      'Scheduled follow-up consultations before the procedure',
      'Support through the refeeding phases after surgery',
      'Adjustment of vitamin supplementation',
      'Regular long-term consolidation consultations',
    ],
    duree: 'Regular consultations throughout the pathway',
    resultats: 'Regular nutritional follow-up optimises weight loss, prevents deficiencies and intolerances, and helps establish new eating habits for good. It is one of the most decisive factors in the long-term success of bariatric surgery.',
  },
  {
    slug: 'accompagnement-psychologique',
    title: 'Psychological support',
    shortTitle: 'Psychological support',
    description: 'Psychological support before and after bariatric surgery, to prepare calmly for the changes and accompany the transformation.',
    fullDescription: `Obesity surgery profoundly transforms daily life: the relationship with food, self-image, how others see you, family and social dynamics. Psychological support helps patients prepare for and experience these changes calmly, both before and after the procedure.

Before surgery, the psychological interview is part of the pre-operative work-up. It assesses motivation, identifies any eating disorders and ensures that the patient approaches the procedure with realistic expectations and a good understanding of the changes to come.

After the operation, support may be offered to accompany the body\'s transformation, strengthen motivation during plateau phases, work on eating behaviour and prevent adaptation difficulties. This support is tailored to each person\'s needs, whether occasional or regular.

At Clinique Pasteur Tunis, psychological support is integrated into the multidisciplinary approach of the bariatric surgery centre: the psychologist works in coordination with the surgeon and the nutritionist to offer each patient a coherent and caring pathway.`,
    image: '/images/fiches/baria-accompagnement-psychologique.webp',
    indications: [
      { label: 'Psychological assessment as part of the pre-operative work-up', explication: `An interview before the operation verifies that the patient approaches surgery with realistic expectations and in good psychological condition.` },
      { label: 'Preparation for the changes associated with bariatric surgery', explication: `Surgery transforms the relationship with food and self-image: talking about it beforehand helps patients experience these changes more calmly.` },
      { label: 'Support for eating disorders', explication: `Snacking, compulsive eating or emotional eating can compromise the result: targeted work helps to understand and ease them.` },
      { label: 'Support during the post-operative adaptation phases', explication: `After the operation, moments of doubt or plateaus are normal: occasional or regular support helps get through these stages with confidence.` },
      { label: 'Strengthening motivation and self-image', explication: `Support helps patients embrace their new body and maintain motivation, two essential factors in the lasting success of the pathway.` },
    ],
    preparation: [
      'No special preparation',
      'Come with your questions and expectations',
      'Bring details of your medical history if available',
    ],
    deroulement: [
      'Individual interview in a confidential setting',
      'Assessment of motivation and of the relationship with food',
      'Feedback and discussion with the multidisciplinary team (with the patient\'s consent)',
      'Follow-up sessions offered as needed',
      'Coordination with the surgeon and the nutritionist throughout the pathway',
    ],
    duree: '45 minutes to 1 hour per session',
    resultats: 'Psychological support fosters better commitment to the care plan, realistic expectations and a calmer adaptation to change. It contributes significantly to the overall, lasting success of the bariatric pathway.',
  },
  {
    slug: 'chirurgie-reparatrice-post-amaigrissement',
    title: 'Post-weight-loss reconstructive surgery (abdominoplasty)',
    shortTitle: 'Post-weight-loss surgery',
    description: 'Surgical correction of excess skin after major weight loss, to complete the transformation and restore body comfort.',
    fullDescription: `After major weight loss, particularly following bariatric surgery, stretched skin does not always fully retract. Excess skin may persist on the abdomen, arms, thighs or chest, causing physical discomfort, irritation and aesthetic concerns. Post-weight-loss reconstructive surgery corrects these after-effects and completes the transformation.

The most common procedure is abdominoplasty: it removes excess skin and fat from the abdomen, tightens the muscular wall if necessary and reshapes the figure. Other procedures may be offered as needed: arm or thigh lift, breast surgery, often planned in several stages.

These procedures are considered once weight has been stable for several months, with good nutritional balance — essential conditions for quality healing and a lasting result.

At Clinique Pasteur Tunis, post-weight-loss reconstructive surgery is performed by plastic surgeons working in coordination with the bariatric team, ensuring continuity of care from the start of the weight-loss journey through to the complete restoration of the figure.`,
    image: '/images/fiches/baria-chirurgie-reparatrice-post-amaigrissement.webp',
    indications: [
      { label: 'Excess abdominal skin after major weight loss', explication: `After significant weight loss, stretched skin does not always retract: the procedure removes this excess to reshape the figure.` },
      { label: 'Irritation or skin infections in the folds', explication: `Skin folds can become moist and irritated, especially in hot weather: removing the excess skin puts an end to these daily discomforts.` },
      { label: 'Functional discomfort in movement or when dressing', explication: `When the apron of skin hinders walking, sport or the choice of clothing, reconstructive surgery restores ease and body comfort.` },
      { label: 'Laxity of the abdominal wall', explication: `Abdominal muscles stretched by years of excess weight can be tightened during the same procedure, for a flatter, firmer abdomen.` },
      { label: 'Weight stable for several months with good nutritional balance', explication: `The procedure is scheduled once the weight is stable and the body well nourished: these conditions guarantee good healing and a lasting result.` },
    ],
    preparation: [
      'Weight stable for several months',
      'Nutritional work-up and correction of any deficiencies',
      'Consultation with the plastic surgeon and definition of the surgical plan',
      'Pre-operative anaesthesia consultation',
      'Stopping smoking strongly recommended to promote healing',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Precise pre-operative markings on the skin',
      'Removal of excess skin and fat',
      'Tightening of the muscular wall if necessary',
      'Repositioning of the navel during an abdominoplasty',
      'Careful closure in several layers',
      'Fitting of a compression garment',
    ],
    duree: '2 to 3 hours depending on the extent',
    resultats: 'The figure is transformed immediately, with the final result becoming apparent after a few months, once the swelling has subsided and the scars have matured. Physical comfort and quality of life improve markedly, completing the benefits of the weight loss.',
    risques: [
      'Scars, whose appearance improves gradually with time and care',
      'Temporary swelling and bruising',
      'Localised delayed healing, more common in smokers',
      'Minor touch-ups sometimes needed to perfect the result',
    ],
  },
];
