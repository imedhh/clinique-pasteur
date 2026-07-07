export const prestationsCoelioscopique = [
  {
    slug: 'cholecystectomie-coelioscopique',
    title: 'Laparoscopic cholecystectomy',
    shortTitle: 'Cholecystectomy',
    description: 'Removal of the gallbladder by laparoscopy, the gold-standard technique for treating symptomatic gallstones.',
    fullDescription: `Laparoscopic cholecystectomy is the removal of the gallbladder through small abdominal incisions, using a camera and fine instruments. It is now the gold-standard technique for treating gallstones when they cause pain or complications.

The procedure is performed under general anaesthesia: the gallbladder is carefully detached from the liver and then removed through one of the small incisions. The absence of the gallbladder does not impair digestion, as bile flows directly from the liver to the intestine.

At Clinique Pasteur Tunis, this procedure is performed in operating theatres equipped with high-definition laparoscopy towers, by experienced digestive surgeons. The hospital stay is short, most often limited to one night, and the return to normal activities is rapid.`,
    image: '/images/fiches/coelio-cholecystectomie-coelioscopique.webp',
    indications: [
      { label: 'Gallstones causing biliary colic', explication: `When stones in the gallbladder cause painful attacks under the ribs, removing the gallbladder prevents them from recurring.` },
      { label: 'Acute or chronic cholecystitis', explication: `When the gallbladder becomes inflamed because of stones, its removal treats the infection and prevents recurrences.` },
      { label: 'History of pancreatitis of biliary origin', explication: `After inflammation of the pancreas caused by a stone, removing the gallbladder prevents a new episode from occurring.` },
      { label: 'Stone migration into the main bile duct, after treatment of the latter', explication: `When a stone has already migrated into the bile duct, removing the gallbladder prevents other stones from following the same path.` },
      { label: 'Symptomatic non-functioning gallbladder', explication: `A gallbladder that no longer fulfils its role and causes digestive problems can be removed without any consequence for digestion.` },
    ],
    preparation: [
      'Pre-operative work-up: blood tests and abdominal ultrasound',
      'Anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of anticoagulant treatments according to medical advice',
      'Pre-operative shower according to the instructions provided',
    ],
    deroulement: [
      'General anaesthesia',
      'Creation of a working space by insufflating gas into the abdomen',
      'Introduction of the camera and instruments through small incisions',
      'Careful dissection of the cystic duct and artery of the gallbladder',
      'Removal of the gallbladder and extraction through a small incision',
      'Check for absence of bleeding and closure of the incisions',
    ],
    duree: '45 minutes to 1 hour 30',
    resultats: 'Recovery is generally straightforward: discharge the next day in most cases, moderate pain controlled by usual painkillers and a return to normal activities within a few days. No special long-term diet is necessary.',
    risques: [
      'Transient shoulder pain related to the insufflation gas',
      'Haematoma or infection of the incisions, rare',
      'Conversion to open surgery if local conditions require it, decided in the patient\'s best interest',
    ],
  },
  {
    slug: 'appendicectomie-coelioscopique',
    title: 'Laparoscopic appendectomy',
    shortTitle: 'Appendectomy',
    description: 'Removal of the appendix by laparoscopy in cases of appendicitis, with minimal scarring and rapid recovery.',
    fullDescription: `Laparoscopic appendectomy is the gold-standard treatment for acute appendicitis. It involves removing the inflamed appendix through very small incisions, under camera guidance, which limits post-operative pain and speeds up the return to daily activities.

Laparoscopy also offers the advantage of exploring the entire abdominal cavity, which is invaluable when the diagnosis is uncertain, and of thoroughly washing the abdomen in cases of complicated appendicitis.

At Clinique Pasteur Tunis, appendicitis is managed without delay, from admission to the emergency department through to the operating theatre, available day and night. The hospital stay is short and the patient goes home with simple instructions for convalescence.`,
    image: '/images/fiches/coelio-appendicectomie-coelioscopique.webp',
    indications: [
      { label: 'Acute appendicitis confirmed by clinical examination and imaging', explication: `When the appendix becomes infected, it must be removed quickly to prevent the infection from spreading within the abdomen.` },
      { label: 'Complicated appendicitis (abscess, localised peritonitis)', explication: `When the infection has already spread around the appendix, laparoscopy makes it possible to remove it and carefully clean the area.` },
      { label: 'Diagnostic uncertainty justifying exploration of the abdomen', explication: `When the cause of the pain is not certain, the camera allows the entire abdomen to be examined and whatever is found to be treated.` },
      { label: 'Recurrent right iliac fossa pain after specialist assessment', explication: `Pain that regularly returns in the lower right abdomen may justify removing the appendix, after evaluation by the specialist.` },
    ],
    preparation: [
      'Emergency assessment: clinical examination, blood tests and imaging',
      'Fasting from the moment the diagnosis is suspected',
      'Intravenous drip and antibiotics started before the procedure if necessary',
      'Anaesthesia consultation carried out as an emergency',
    ],
    deroulement: [
      'General anaesthesia',
      'Introduction of the camera and instruments through small incisions',
      'Exploration of the abdominal cavity',
      'Division and extraction of the appendix in a protective bag',
      'Washing of the abdominal cavity if necessary',
      'Closure of the incisions with absorbable sutures',
    ],
    duree: '30 minutes to 1 hour',
    resultats: 'After uncomplicated appendicitis, eating resumes quickly and discharge generally takes place after 24 to 48 hours. Scars are discreet and the return to work or school usually occurs within a few days to a week.',
    risques: [
      'Wound infection, uncommon with laparoscopy',
      'Residual abscess in cases of complicated appendicitis, monitored and treated if needed',
      'Transient abdominal pain related to the insufflation gas',
    ],
  },
  {
    slug: 'cure-hernie-coelioscopie',
    title: 'Laparoscopic hernia repair',
    shortTitle: 'Hernia repair',
    description: 'Minimally invasive repair of abdominal wall hernias (inguinal, umbilical) with mesh reinforcement and rapid recovery.',
    fullDescription: `A hernia is the passage of part of the abdominal contents through a weak point in the wall, most often at the groin (inguinal hernia) or the navel. Laparoscopic repair corrects this weakness from the inside, through small incisions, by positioning a mesh reinforcement that durably strengthens the wall.

This minimally invasive approach offers appreciated advantages: reduced post-operative pain, discreet scars, and a rapid return to walking and normal activities. It is particularly valuable for hernias on both sides, treated during the same operation, and for recurrences after conventional surgery.

At Clinique Pasteur Tunis, laparoscopic hernia repair is performed with a short hospital stay, often as day surgery, by surgeons highly experienced in abdominal wall repair techniques. The choice of technique is discussed with each patient during the consultation.`,
    image: '/images/fiches/coelio-cure-hernie-coelioscopie.webp',
    indications: [
      { label: 'Bothersome or enlarging inguinal hernia', explication: `When a lump appears in the groin crease and becomes bothersome or grows, repairing it prevents pain and complications.` },
      { label: 'Bilateral inguinal hernia, treated in a single operation', explication: `When both sides of the groin are affected, laparoscopy makes it possible to repair both hernias during the same operation.` },
      { label: 'Hernia recurrence after conventional surgery', explication: `When a previously operated hernia reappears, approaching it from inside the abdomen avoids the previous scar and provides a solid repair.` },
      { label: 'Umbilical or midline (linea alba) hernia', explication: `A weakness of the wall at the navel or in the middle of the abdomen can be reinforced using the same gentle technique.` },
      { label: 'Prevention of the risk of hernia strangulation', explication: `Repairing the hernia prevents a portion of intestine from becoming trapped in it, a painful situation that would require emergency surgery.` },
    ],
    preparation: [
      'Surgical consultation to confirm the diagnosis and choose the technique',
      'Pre-operative work-up and anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of anticoagulants according to medical advice',
      'Pre-operative shower according to the instructions provided',
    ],
    deroulement: [
      'General anaesthesia',
      'Small incisions to introduce the camera and instruments',
      'Return of the hernia contents into the abdomen',
      'Placement of a mesh reinforcement covering the area of weakness',
      'Fixation of the mesh according to the chosen technique',
      'Closure of the incisions with absorbable sutures',
    ],
    duree: '45 minutes to 1 hour 30',
    resultats: 'Walking resumes the same day and discharge takes place on the day of the procedure or the next day. Pain is generally moderate and the return to work occurs within a few days, avoiding heavy lifting during the period advised by the surgeon.',
    risques: [
      'Haematoma or transient swelling of the operated area',
      'Residual pain, most often transient',
      'Recurrence, rare with mesh reinforcement techniques',
    ],
  },
  {
    slug: 'chirurgie-colorectale-laparoscopique',
    title: 'Laparoscopic colorectal surgery',
    shortTitle: 'Colorectal surgery',
    description: 'Laparoscopic resections of the colon and rectum, for faster recovery and a lighter post-operative course.',
    fullDescription: `Laparoscopic colorectal surgery makes it possible to treat diseases of the colon and rectum — complicated diverticula, tumours, certain inflammatory diseases — through small incisions, under the guidance of a high-definition camera. The diseased segment is freed, removed, and digestive continuity is then restored during the same operation whenever possible.

Compared with open surgery, the laparoscopic approach reduces pain, shortens the hospital stay and allows an earlier return of bowel function and eating, while offering the same quality of treatment of the disease.

At Clinique Pasteur Tunis, these procedures are performed by experienced digestive surgeons, in operating theatres equipped with latest-generation laparoscopic towers, with an attentive post-operative recovery programme: early mobilisation, gradual return to eating and support from the nursing team.`,
    image: '/images/fiches/coelio-chirurgie-colorectale-laparoscopique.webp',
    indications: [
      { label: 'Tumours of the colon or rectum requiring resection', explication: `When a tumour is discovered in the colon or rectum, removing the affected segment is the gold-standard treatment.` },
      { label: 'Complicated or recurrent diverticular disease', explication: `When small pockets formed on the colon become repeatedly infected, removing the weakened segment puts an end to the attacks.` },
      { label: 'Inflammatory bowel diseases resistant to medical treatment', explication: `When medication is no longer sufficient to control inflammation of the intestine, surgery removes the most affected area.` },
      { label: 'Extensive polyps that cannot be removed endoscopically', explication: `When a polyp is too extensive to be removed during a colonoscopy, minimally invasive surgical resection is proposed.` },
      { label: 'Rectal prolapse requiring surgical correction', explication: `When the rectum descends abnormally, an operation repositions and fixes it to restore everyday comfort.` },
    ],
    preparation: [
      'Complete work-up: colonoscopy, imaging and blood tests',
      'Anaesthesia consultation',
      'Bowel preparation according to the instructions provided',
      'Fasting for 6 hours before the procedure',
      'Adjustment of ongoing treatments according to medical advice',
    ],
    deroulement: [
      'General anaesthesia',
      'Introduction of the camera and instruments through small incisions',
      'Mobilisation of the affected segment of colon or rectum',
      'Resection of the diseased area',
      'Restoration of digestive continuity by suturing or stapling',
      'Careful checking followed by closure of the incisions',
      'Early mobilisation and gradual return to eating from the first days',
    ],
    duree: '2 to 4 hours depending on the procedure',
    resultats: 'Bowel function usually resumes within a few days and the hospital stay is shorter than after open surgery. The surgical specimen undergoes pathological analysis, the results of which guide further management and follow-up.',
    risques: [
      'Transient bowel disturbances during convalescence',
      'Anastomotic leak, a rare complication monitored closely',
      'Wound infection, uncommon with the minimally invasive approach',
      'Conversion to open surgery if necessary, in the patient\'s best interest',
    ],
  },
  {
    slug: 'sleeve-gastrectomie',
    title: 'Sleeve gastrectomy',
    shortTitle: 'Sleeve',
    description: 'Laparoscopic obesity surgery reducing the volume of the stomach, as part of a complete and supervised medical pathway.',
    fullDescription: `Sleeve gastrectomy (longitudinal gastrectomy) is an obesity surgery procedure that involves removing a large part of the stomach to give it the shape of a tube. The feeling of fullness therefore occurs more quickly, and the reduction in certain hunger hormones also contributes to weight loss.

This procedure is part of a genuine care pathway: prior medical, nutritional and psychological assessment, complete patient information, followed by regular follow-up after the operation. It is intended for people with significant obesity, after failure of well-conducted medical measures, and the decision is always made collegially.

Performed by laparoscopy, the sleeve leaves discreet scars and allows rapid recovery. At Clinique Pasteur Tunis, bariatric surgery is supervised by a multidisciplinary team — surgeon, anaesthetist, nutritionist — who support each patient before and after the procedure, over the long term.`,
    image: '/images/fiches/coelio-sleeve-gastrectomie.webp',
    indications: [
      { label: 'Significant obesity after failure of well-conducted medical and dietary management', explication: `When diets and medical follow-up have not achieved lasting weight loss, the sleeve offers effective help as part of a supervised pathway.` },
      { label: 'Obesity associated with complications such as diabetes, hypertension or sleep apnoea', explication: `The weight loss achieved often markedly improves these associated diseases, sometimes from the very first months.` },
      { label: 'Patients assessed and approved by a multidisciplinary team', explication: `The decision is always made collectively by several specialists, after a complete evaluation of each situation.` },
      { label: 'Motivation to commit to long-term medical and nutritional follow-up', explication: `Success relies on lasting support after the operation: the patient\'s commitment is essential.` },
    ],
    preparation: [
      'Multidisciplinary assessment: surgeon, nutritionist, anaesthetist and, if needed, other specialists',
      'Complete work-up: blood tests, upper digestive endoscopy and imaging if necessary',
      'Personalised nutritional preparation before the procedure',
      'Anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Introduction of the camera and instruments through small incisions',
      'Calibration of the stomach over a guiding tube',
      'Division and stapling of the greater curvature of the stomach',
      'Checking that the staple line is leak-proof',
      'Closure of the incisions and close post-operative monitoring',
    ],
    duree: '1 to 2 hours',
    resultats: 'Weight loss develops gradually over the months following the procedure, most often accompanied by an improvement in obesity-related complications. The return to eating follows a gradual protocol supervised by the team, and regular medical and nutritional follow-up is essential over the long term.',
    risques: [
      'Leak along the staple line, a rare complication monitored closely',
      'Gastro-oesophageal reflux that may appear or worsen',
      'Nutritional deficiencies prevented by supplementation and follow-up',
      'Risks inherent to any abdominal surgery, reduced by the laparoscopic approach',
    ],
  },
  {
    slug: 'bypass-gastrique',
    title: 'Gastric bypass',
    shortTitle: 'Bypass',
    description: 'Laparoscopic obesity surgery creating a gastric bypass, particularly effective on weight and associated diabetes.',
    fullDescription: `Gastric bypass is an obesity surgery procedure that combines the creation of a small gastric pouch with the bypassing of part of the intestine. Food thus travels along a shortened circuit: the amount eaten decreases and absorption is modified, which promotes lasting weight loss.

This technique is particularly valuable in patients with type 2 diabetes or gastro-oesophageal reflux associated with obesity, on which it often has a favourable effect. Like all bariatric surgery, it is part of a complete pathway: multidisciplinary assessment, preparation, then long-term medical and nutritional follow-up with vitamin supplementation.

At Clinique Pasteur Tunis, gastric bypass is performed by laparoscopy, by a team experienced in bariatric surgery, with attentive post-operative monitoring and personalised nutritional support over the long term.`,
    image: '/images/fiches/coelio-bypass-gastrique.webp',
    indications: [
      { label: 'Significant obesity after failure of well-conducted medical measures', explication: `When medical management has not achieved lasting weight loss, the bypass is an effective surgical solution.` },
      { label: 'Obesity associated with type 2 diabetes', explication: `The bypass often has a very favourable effect on diabetes, whose control frequently improves after the procedure.` },
      { label: 'Significant gastro-oesophageal reflux associated with obesity', explication: `Acid reflux is often markedly improved by this configuration, which makes it an advantage over other techniques.` },
      { label: 'Particular situations discussed in multidisciplinary team meetings', explication: `Each case is examined by several specialists who together choose the most suitable technique.` },
      { label: 'Patients ready to commit to long-term follow-up and supplementation', explication: `After a bypass, vitamins and regular follow-up are necessary for life: this commitment is part of the care plan.` },
    ],
    preparation: [
      'Complete multidisciplinary assessment (surgeon, nutritionist, anaesthetist)',
      'Pre-operative work-up: blood tests, upper digestive endoscopy, imaging if necessary',
      'Personalised nutritional preparation',
      'Anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Laparoscopic approach through small incisions',
      'Creation of a small gastric pouch',
      'Construction of the intestinal bypass and creation of the anastomoses',
      'Checking that the sutures are leak-proof',
      'Closure of the incisions and close monitoring',
    ],
    duree: '2 to 3 hours',
    resultats: 'Weight loss is gradual and lasting, frequently with a marked improvement in diabetes and reflux. The return to eating follows a step-by-step protocol, and regular follow-up with vitamin supplementation is essential for life to prevent deficiencies.',
    risques: [
      'Leak or breakdown of an anastomosis, a rare complication monitored closely',
      'Nutritional deficiencies prevented by supplementation and follow-up',
      'Digestive discomfort after sugary or overly large meals (dumping), prevented by dietary advice',
      'Late intestinal obstruction, rare, warranting consultation in case of unusual pain',
    ],
  },
  {
    slug: 'surrenalectomie-laparoscopique',
    title: 'Laparoscopic adrenalectomy',
    shortTitle: 'Adrenalectomy',
    description: 'Removal of an adrenal gland by laparoscopy, the gold-standard technique for accessible adrenal tumours.',
    fullDescription: `The adrenal glands, located above each kidney, produce essential hormones. Certain tumours, most often benign, can develop in them and secrete hormones in excess, causing hypertension or other disorders; others warrant removal because of their size or appearance.

Laparoscopic adrenalectomy involves removing the affected gland through small incisions, under camera guidance. This approach has become the standard for most adrenal tumours: it offers remarkable dissection precision in this deep region, with a much simpler recovery than open surgery.

At Clinique Pasteur Tunis, this procedure is prepared in close collaboration with endocrinologists and anaesthetists, particularly when the tumour secretes hormones, so as to manage the operation in complete safety. The surgical specimen is sent for pathological analysis.`,
    image: '/images/fiches/coelio-surrenalectomie-laparoscopique.webp',
    indications: [
      { label: 'Adrenal tumour secreting hormones in excess (Conn adenoma, Cushing syndrome, phaeochromocytoma)', explication: `When a small tumour of the adrenal gland produces too many hormones, it can cause hypertension or other disorders; removing it treats the cause.` },
      { label: 'Adrenal tumour of significant size discovered on imaging', explication: `A large adrenal tumour is removed as a precaution, even in the absence of symptoms.` },
      { label: 'Adrenal lesion of suspicious appearance requiring excision', explication: `When imaging shows a lesion of unusual appearance, its removal allows it to be analysed and any doubt to be ruled out.` },
      { label: 'Arterial hypertension of adrenal origin confirmed by the work-up', explication: `When high blood pressure is caused by an overactive adrenal gland, the operation can normalise it or reduce the need for treatments.` },
    ],
    preparation: [
      'Complete endocrine work-up to characterise the hormone secretion',
      'Precise imaging of the gland (CT scan or MRI)',
      'Specific drug preparation if the tumour secretes hormones',
      'Specialised anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia with enhanced haemodynamic monitoring',
      'Appropriate positioning and introduction of the instruments through small incisions',
      'Careful dissection of the adrenal gland and its vessels',
      'Vascular control followed by removal of the gland in a protective bag',
      'Check for absence of bleeding',
      'Closure of the incisions and close post-operative monitoring',
    ],
    duree: '1 hour 30 to 3 hours',
    resultats: 'Recovery is generally straightforward, with a short hospital stay. When the tumour was secreting hormones, symptoms such as hypertension most often improve gradually. Endocrine follow-up is organised, with adjustment of hormone treatments if needed.',
    risques: [
      'Blood pressure fluctuations during the procedure, anticipated by preparation and anaesthetic monitoring',
      'Bleeding, rare thanks to early vascular control',
      'Adrenal insufficiency requiring temporary or long-term hormone treatment depending on the case',
    ],
  },
  {
    slug: 'prostatectomie-laparoscopique',
    title: 'Laparoscopic prostatectomy',
    shortTitle: 'Prostatectomy',
    description: 'Removal of the prostate by laparoscopy, with precise dissection aimed at preserving the patient\'s continence and functions.',
    fullDescription: `Laparoscopic prostatectomy involves removing the prostate through small abdominal incisions, under the guidance of a high-definition camera. The magnified view offered by laparoscopy allows very precise dissection of the structures surrounding the prostate, particularly those involved in urinary continence and sexual function.

This procedure is mainly proposed for the treatment of localised prostate cancer, after a complete work-up and a discussion of the various options with the patient. The continuity of the urinary tract is restored during the same operation, and a urinary catheter is left in place for a few days.

At Clinique Pasteur Tunis, laparoscopic prostatectomy is performed by experienced urologists, with comprehensive support: detailed information before the procedure, attentive management of convalescence and, if needed, pelvic floor rehabilitation to support the recovery of continence. The surgical specimen is sent for pathological analysis.`,
    image: '/images/fiches/coelio-prostatectomie-laparoscopique.webp',
    indications: [
      { label: 'Localised prostate cancer, after complete work-up and multidisciplinary discussion', explication: `When a cancer remains confined to the prostate, removing the gland aims for a cure while preserving the patient\'s continence and functions as much as possible.` },
      { label: 'Decision shared with the patient among the available treatment options', explication: `Several treatments exist for this disease; the operation is proposed after an open discussion of the advantages of each option.` },
      { label: 'Certain particular situations assessed by the urologist', explication: `In certain specific cases, the urologist may recommend this surgery after a thorough individual evaluation.` },
    ],
    preparation: [
      'Complete urological work-up: blood markers, imaging and prior biopsies',
      'Multidisciplinary team meeting to validate the indication',
      'Anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of anticoagulants according to medical advice',
    ],
    deroulement: [
      'General anaesthesia',
      'Introduction of the camera and instruments through small incisions',
      'Precise dissection of the prostate with preservation of neighbouring structures whenever possible',
      'Removal of the prostate and seminal vesicles',
      'Suturing of the bladder to the urethra to restore urinary continuity',
      'Placement of a temporary urinary catheter',
      'Closure of the incisions and post-operative monitoring',
    ],
    duree: '2 to 4 hours',
    resultats: 'The hospital stay is short and the urinary catheter is removed after a few days, according to the surgeon\'s advice. Continence recovers gradually, aided if needed by pelvic floor rehabilitation. The result of the pathological analysis guides the regular urological follow-up put in place after the procedure.',
    risques: [
      'Transient urinary leakage, improving with time and rehabilitation',
      'Erectile dysfunction, variable depending on the situation, supported by appropriate solutions',
      'Narrowing of the bladder-urethra suture, rare, amenable to treatment',
      'Bleeding or infection, uncommon with the laparoscopic approach',
    ],
  },
  {
    slug: 'nephrectomie-laparoscopique',
    title: 'Laparoscopic nephrectomy',
    shortTitle: 'Nephrectomy',
    description: 'Total or partial removal of a kidney by laparoscopy, for a tumour or a non-functioning kidney, with a lighter post-operative course.',
    fullDescription: `Laparoscopic nephrectomy involves removing a kidney, in whole or in part, through small incisions, under camera guidance. It is mainly indicated in cases of kidney tumour or when a kidney destroyed by chronic disease is a source of complications.

Whenever the situation allows, partial nephrectomy is preferred: only the diseased area is removed, which preserves kidney function as much as possible. The magnified view of laparoscopy allows fine dissection of the kidney\'s vessels and precise vascular control.

Living a normal life with a single kidney is entirely possible: the remaining kidney performs the filtering function, subject to simple follow-up. At Clinique Pasteur Tunis, laparoscopic nephrectomy is performed by experienced urologists, with a complete imaging facility and attentive post-operative monitoring. The surgical specimen is sent for pathological analysis.`,
    image: '/images/fiches/coelio-nephrectomie-laparoscopique.webp',
    indications: [
      { label: 'Kidney tumour requiring surgical excision', explication: `When a tumour develops on the kidney, removing the diseased area, or the whole kidney if necessary, is the main treatment.` },
      { label: 'Destroyed, non-functioning kidney causing pain or infections', explication: `A kidney that no longer works can perpetuate pain and repeated infections; removing it brings lasting relief, with the remaining kidney doing the work.` },
      { label: 'Certain complicated kidney malformations', explication: `When a malformation of the kidney causes repeated complications, its removal may be the best solution.` },
      { label: 'Kidney causing resistant hypertension, in selected cases', explication: `In rare situations, a diseased kidney perpetuates high blood pressure that is difficult to control; its removal can help normalise it.` },
    ],
    preparation: [
      'Complete work-up: imaging (CT scan or MRI) and assessment of kidney function',
      'Anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of anticoagulants according to medical advice',
      'Detailed information on living with a single kidney where applicable',
    ],
    deroulement: [
      'General anaesthesia',
      'Appropriate positioning and introduction of the instruments through small incisions',
      'Dissection of the kidney and early control of its vessels',
      'Total removal of the kidney, or partial removal limited to the diseased area',
      'Extraction of the specimen in a protective bag',
      'Check for absence of bleeding and closure of the incisions',
    ],
    duree: '2 to 4 hours',
    resultats: 'Recovery is generally simpler than after open surgery: early mobilisation, moderate pain and a short hospital stay. Kidney function is monitored after the procedure, and the result of the pathological analysis guides long-term follow-up.',
    risques: [
      'Bleeding during or after the operation, rare thanks to early vascular control',
      'Transient urine leak after partial nephrectomy, monitored and treated if needed',
      'Infection, uncommon with the minimally invasive approach',
      'Conversion to open surgery if necessary, in the patient\'s best interest',
    ],
  },
  {
    slug: 'hysterectomie-coelioscopique',
    title: 'Laparoscopic hysterectomy',
    shortTitle: 'Hysterectomy',
    description: 'Removal of the uterus by laparoscopy for benign gynaecological conditions or certain lesions, with faster recovery.',
    fullDescription: `Hysterectomy is the removal of the uterus, proposed when gynaecological conditions — symptomatic fibroids, bleeding resistant to treatment, adenomyosis, certain lesions of the cervix or endometrium — have a lasting impact on quality of life and medical alternatives have been exhausted.

Performed by laparoscopy, the procedure takes place through small abdominal incisions, with the uterus most often extracted through the natural passages. Depending on the situation, the removal may involve the uterus alone or be combined with removal of the fallopian tubes, or even the ovaries, which is always discussed beforehand with the patient.

At Clinique Pasteur Tunis, laparoscopic hysterectomy is performed by experienced gynaecological surgeons, in a setting attentive to the patient\'s comfort and information. The hospital stay is short and the team supports convalescence with clear instructions. The surgical specimen is sent for pathological analysis.`,
    image: '/images/fiches/coelio-hysterectomie-coelioscopique.webp',
    indications: [
      { label: 'Symptomatic uterine fibroids resistant to treatment', explication: `When fibroids cause bleeding or pain despite treatment, removing the uterus puts a definitive end to these problems.` },
      { label: 'Heavy uterine bleeding not responding to medical treatment', explication: `When excessively heavy periods exhaust the patient and resist medication, hysterectomy provides a definitive solution.` },
      { label: 'Disabling adenomyosis', explication: `When the wall of the uterus is the source of disabling pain and bleeding, removing the uterus makes it possible to return to a normal life.` },
      { label: 'Certain precancerous lesions of the cervix or endometrium', explication: `When abnormal cells are discovered, removing the uterus eliminates the lesion before it can progress.` },
      { label: 'Uterine prolapse, as part of appropriate surgery', explication: `When the uterus descends and causes discomfort, its removal can be part of the surgery that repositions the pelvic organs.` },
    ],
    preparation: [
      'Complete gynaecological work-up: examination, ultrasound and samples if necessary',
      'Discussion of the alternatives and detailed information for the patient',
      'Anaesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of ongoing treatments according to medical advice',
    ],
    deroulement: [
      'General anaesthesia',
      'Introduction of the camera and instruments through small incisions',
      'Mobilisation of the uterus and control of its vessels',
      'Removal of the uterus, combined or not with removal of the fallopian tubes or ovaries as previously agreed',
      'Extraction most often through the natural passages',
      'Careful checking and closure of the incisions',
    ],
    duree: '1 to 3 hours',
    resultats: 'The hospital stay is short and the return to daily activities is gradual over a few weeks, avoiding significant exertion at first. The bleeding and pain that motivated the procedure disappear. A follow-up consultation checks proper healing and answers the patient\'s questions.',
    risques: [
      'Minor transient vaginal bleeding during healing',
      'Haematoma or infection, uncommon with the laparoscopic approach',
      'Injury to neighbouring organs (bladder, ureter), rare and systematically checked for during the procedure',
      'Transient fatigue during convalescence',
    ],
  },
];
