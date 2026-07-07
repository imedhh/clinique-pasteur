export const prestationsEndoscopique = [
  {
    slug: 'endoscopie-digestive-haute-basse',
    title: 'Upper and lower gastrointestinal endoscopy',
    shortTitle: 'GI endoscopy',
    description: 'Visual exploration of the digestive tract by gastroscopy (esophagus, stomach, duodenum) and colonoscopy (colon, rectum), for both diagnostic and therapeutic purposes.',
    fullDescription: `Gastrointestinal endoscopy allows direct examination of the inside of the digestive tract using a flexible endoscope fitted with a high-definition camera. Upper endoscopy (esophagogastroduodenoscopy) explores the esophagus, stomach and duodenum; lower endoscopy (colonoscopy) explores the rectum and the entire colon.

Beyond diagnosis, these examinations make it possible to perform therapeutic procedures at the same time: tissue sampling (biopsies), polyp removal, treatment of bleeding lesions. Any biopsies taken are sent for histopathological analysis, and the results are forwarded to the physician.

The examinations are most often performed under sedation or anesthesia, for optimal patient comfort. At Clinique Pasteur Tunis, gastrointestinal endoscopies are carried out in a dedicated endoscopy suite equipped with high-definition video towers, by experienced gastroenterologists and surgeons, on a day-case basis in the vast majority of cases.`,
    image: '/images/fiches/endochir-endoscopie-digestive-haute-basse.webp',
    indications: [
      { label: 'Persistent abdominal pain or digestive disorders', explication: `When pain or digestive discomfort persists, looking directly inside the digestive tract helps identify the cause.` },
      { label: 'Gastroesophageal reflux resistant to treatment', explication: `When acid reflux persists despite medication, the examination checks the condition of the esophagus and guides treatment.` },
      { label: 'Gastrointestinal bleeding (vomiting blood, blood in the stools)', explication: `In the event of digestive bleeding, endoscopy locates its source and often makes it possible to treat it at the same time.` },
      { label: 'Unexplained anemia', explication: `A shortage of red blood cells with no obvious cause may stem from subtle bleeding in the digestive tract, which the examination looks for.` },
      { label: 'Screening and surveillance of colon polyps', explication: `Colonoscopy detects and removes polyps before they can progress: it is the best prevention against colon cancer.` },
      { label: 'Recent or persistent bowel habit changes', explication: `A lasting change in bowel habits deserves investigation to identify the cause and provide reassurance.` },
      { label: 'Follow-up after treatment of a digestive lesion', explication: `After a lesion has been treated, regular check-ups verify proper healing and the absence of recurrence.` },
    ],
    preparation: [
      'Prior consultation with the physician and an anesthesia consultation if sedation is planned',
      'Fasting for 6 hours before the examination for upper endoscopy',
      'Bowel preparation (low-residue diet and cleansing solution) for colonoscopy, according to the prescription provided',
      'Report all ongoing treatments, particularly anticoagulants and antiplatelet agents',
      'Arrange for someone to accompany you home if sedation is used',
    ],
    deroulement: [
      'Admission to the day hospital and installation in the endoscopy suite',
      'Sedation or anesthesia tailored for the comfort of the examination',
      'Insertion of the endoscope through the mouth (upper endoscopy) or the anus (colonoscopy)',
      'Careful exploration of the digestive lining',
      'Biopsies or therapeutic procedures performed if necessary',
      'Monitoring in the recovery room, then discharge with an accompanying person',
    ],
    duree: '15 to 45 minutes depending on the examination',
    resultats: 'A detailed report is provided at the end of the examination. The results of any biopsies are available after histopathological analysis and forwarded to the referring physician. Normal activities can be resumed the next day in most cases.',
    risques: [
      'Bloating or temporary abdominal discomfort after the examination',
      'Throat irritation after upper endoscopy, resolving within a few hours',
      'Bleeding or perforation, rare complications subject to systematic monitoring',
    ],
  },
  {
    slug: 'cholecystectomie-endoscopique',
    title: 'Endoscopic cholecystectomy',
    shortTitle: 'Cholecystectomy',
    description: 'Removal of the gallbladder by a minimally invasive approach, the gold-standard treatment for symptomatic gallstones.',
    fullDescription: `Cholecystectomy is the removal of the gallbladder, most often made necessary by stones causing pain (biliary colic) or complications such as inflammation of the gallbladder. Performed by a minimally invasive approach, it has become one of the most common and best-mastered digestive operations.

The operation is carried out through small incisions, through which a camera and fine instruments are introduced. The gallbladder is detached from the liver and then removed, with no consequences for digestion: bile continues to flow naturally from the liver to the intestine.

At Clinique Pasteur Tunis, minimally invasive cholecystectomy is performed in operating theaters equipped with high-definition video towers, by experienced digestive surgeons. The hospital stay is short, often limited to one night, and the return to normal activities is rapid.`,
    image: '/images/fiches/endochir-cholecystectomie-endoscopique.webp',
    indications: [
      { label: 'Gallbladder stones causing pain (biliary colic)', explication: `When stones cause painful attacks under the right ribs, removing the gallbladder prevents their return.` },
      { label: 'Acute cholecystitis (inflammation of the gallbladder)', explication: `When the gallbladder becomes inflamed, its removal treats the episode and prevents it from happening again.` },
      { label: 'History of a stone migrating into the main bile duct', explication: `When a stone has already left the gallbladder and blocked the bile duct, removing the gallbladder prevents a new migration.` },
      { label: 'Complications of gallstones: biliary pancreatitis', explication: `After inflammation of the pancreas triggered by a stone, removal of the gallbladder protects against recurrence.` },
      { label: 'Gallbladder polyps requiring excision, on specialist advice', explication: `Certain growths on the gallbladder wall justify its removal as a precaution, after specialist assessment.` },
    ],
    preparation: [
      'Pre-operative work-up: blood tests and abdominal ultrasound',
      'Anesthesia consultation a few days before the operation',
      'Fasting for 6 hours before the operation',
      'Report all ongoing treatments, particularly anticoagulants',
      'Pre-operative shower according to the instructions provided',
    ],
    deroulement: [
      'General anesthesia',
      'Small abdominal incisions to introduce the camera and instruments',
      'Gas insufflation to create a working space in the abdomen',
      'Dissection and removal of the gallbladder',
      'Careful verification of the absence of bleeding',
      'Closure of the incisions and recovery in the monitoring room',
    ],
    duree: '45 minutes to 1 hour 30',
    resultats: 'Discharge usually takes place the day after the operation. Pain is moderate and well controlled with standard painkillers. Normal activities can be resumed within a few days, and removal of the gallbladder does not require any special long-term diet.',
    risques: [
      'Temporary shoulder pain related to the gas used during the operation',
      'Hematoma or infection of the small incisions, rare',
      'Conversion to a conventional incision if local conditions require it, decided in the patient\'s best interest',
    ],
  },
  {
    slug: 'chirurgie-colorectale-endoscopique',
    title: 'Endoscopic colorectal surgery',
    shortTitle: 'Colorectal surgery',
    description: 'Minimally invasive treatment of diseases of the colon and rectum, for faster recovery and smaller scars.',
    fullDescription: `Endoscopic colorectal surgery covers minimally invasive operations on the colon and rectum: resection of a diseased segment of colon, treatment of complicated diverticula, excision of extensive lesions. It relies on fine instruments and a high-definition camera introduced through small incisions or through natural orifices.

This approach reduces post-operative pain, shortens the hospital stay and allows a faster return of bowel function and daily activities, while offering the same quality of treatment as conventional surgery. The choice of technique is tailored to each patient after a complete work-up.

At Clinique Pasteur Tunis, minimally invasive colorectal surgery is performed by experienced digestive surgeons, with a complete imaging and endoscopy platform on site. The patient pathway is organized from the initial consultation through to post-operative follow-up, with attentive support at every stage.`,
    image: '/images/fiches/endochir-chirurgie-colorectale-endoscopique.webp',
    indications: [
      { label: 'Complicated or recurrent diverticular disease', explication: `When small pouches that form on the colon become repeatedly infected, removing the weakened segment puts an end to the attacks.` },
      { label: 'Colon or rectal polyps that cannot be removed by simple colonoscopy', explication: `When a polyp is too large to be removed during a colonoscopy, a minimally invasive resection is proposed.` },
      { label: 'Colorectal tumors requiring surgical resection', explication: `When a tumor is discovered, removing the affected segment of intestine is the gold-standard treatment.` },
      { label: 'Certain inflammatory bowel diseases resistant to medical treatment', explication: `When the inflammation no longer responds to medication, surgery removes the most affected portion to relieve the patient.` },
      { label: 'Rectal prolapse requiring surgical correction', explication: `When the rectum descends abnormally, the operation repositions and secures it to restore everyday comfort.` },
    ],
    preparation: [
      'Complete work-up: colonoscopy, imaging and blood tests',
      'Anesthesia consultation',
      'Bowel preparation according to the instructions provided',
      'Fasting for 6 hours before the operation',
      'Stopping or adjusting anticoagulants according to medical advice',
    ],
    deroulement: [
      'General anesthesia',
      'Introduction of the camera and instruments through small incisions',
      'Mobilization and resection of the affected segment of colon or rectum',
      'Restoration of digestive continuity by suturing or stapling',
      'Leak testing and closure of the incisions',
      'Post-operative monitoring with gradual resumption of eating',
    ],
    duree: '2 to 4 hours depending on the operation',
    resultats: 'Bowel function usually returns within a few days, along with a gradual return to eating. The hospital stay is shorter than after conventional surgery and the scars are discreet. The surgical specimens undergo histopathological analysis, the results of which guide follow-up.',
    risques: [
      'Temporary bowel disturbances during the recovery period',
      'Fistula or anastomotic leak, a rare complication subject to careful monitoring',
      'Wound infection, uncommon with the minimally invasive approach',
      'Conversion to open surgery if necessary, in the patient\'s best interest',
    ],
  },
  {
    slug: 'cpre',
    title: 'ERCP (Endoscopic Retrograde Cholangiopancreatography)',
    shortTitle: 'ERCP',
    description: 'A specialized endoscopic procedure to treat obstructions of the bile and pancreatic ducts without a surgical incision.',
    fullDescription: `ERCP is an advanced endoscopic technique that provides access to the bile ducts and the pancreatic duct through the natural orifices. A specialized endoscope is passed through the mouth down to the duodenum, where these ducts open; a contrast agent and X-ray guidance then direct the therapeutic maneuvers.

Its main value is therapeutic: extraction of stones from the main bile duct, relief of an obstruction causing jaundice, placement of stents to restore the flow of bile. In many situations, it thereby avoids more invasive surgery.

ERCP is performed under general anesthesia, in a room equipped for both endoscopy and radiology. At Clinique Pasteur Tunis, this procedure is carried out by operators trained in interventional endoscopy, with systematic post-procedure monitoring as an inpatient.`,
    image: '/images/fiches/endochir-cpre.webp',
    indications: [
      { label: 'Stone in the main bile duct', explication: `When a stone blocks the duct that carries bile to the intestine, ERCP allows it to be extracted through the natural orifices, without an incision.` },
      { label: 'Jaundice (icterus) due to an obstruction of the bile ducts', explication: `When bile no longer flows and the skin turns yellow, this procedure relieves the obstruction and causes the jaundice to subside.` },
      { label: 'Cholangitis (infection of the bile ducts) requiring drainage', explication: `When blocked bile becomes infected, it must be drained quickly: ERCP restores its flow.` },
      { label: 'Narrowing of the bile or pancreatic ducts requiring treatment', explication: `A narrowed duct can be widened or kept open by a small stent placed during the procedure.` },
      { label: 'Bile leak after surgery requiring stent placement', explication: `After certain operations, a bile leak can occur; a stent placed endoscopically helps it heal.` },
      { label: 'Certain cases of pancreatitis related to a duct obstruction', explication: `When inflammation of the pancreas is due to a blockage of its ducts, relieving that obstruction contributes to recovery.` },
    ],
    preparation: [
      'Pre-procedure work-up: blood tests and imaging of the bile ducts',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of anticoagulants and antiplatelet agents according to medical advice',
      'Report any allergies, particularly to contrast agents',
    ],
    deroulement: [
      'General anesthesia',
      'Insertion of the endoscope through the mouth down to the duodenum',
      'Identification of the opening of the bile and pancreatic ducts',
      'Injection of contrast agent and X-ray control',
      'Therapeutic maneuver: stone extraction, dilation or stent placement',
      'Monitoring in the recovery room, then as an inpatient',
    ],
    duree: '30 minutes to 1 hour 30',
    resultats: 'ERCP most often relieves the obstruction in a single session: pain and jaundice subside gradually. A short period of inpatient monitoring is usual. The report and the next steps in care are explained to the patient before discharge.',
    risques: [
      'Temporary pancreatic reaction (pancreatitis), systematically monitored after the procedure',
      'Bleeding at the papilla, usually controlled endoscopically',
      'Infection of the bile ducts, prevented by appropriate measures',
      'Perforation, a rare complication managed without delay',
    ],
  },
  {
    slug: 'sphincterotomie-endoscopique',
    title: 'Endoscopic sphincterotomy',
    shortTitle: 'Sphincterotomy',
    description: 'Endoscopic opening of the sphincter of Oddi to free the bile ducts, most often performed during an ERCP.',
    fullDescription: `Endoscopic sphincterotomy consists of a controlled incision of the sphincter of Oddi, the small muscle that controls the opening of the bile and pancreatic ducts into the duodenum. This maneuver widens the orifice and allows the extraction of stones or the passage of instruments and stents.

It is most often performed during an ERCP, under general anesthesia, using a fine instrument passed through the endoscope. It is a long-established reference procedure that in most cases avoids surgery on the bile ducts.

At Clinique Pasteur Tunis, endoscopic sphincterotomy is performed by trained endoscopists, with X-ray guidance during the procedure and systematic inpatient monitoring afterwards.`,
    image: '/images/fiches/endochir-sphincterotomie-endoscopique.webp',
    indications: [
      { label: 'Extraction of stones from the main bile duct', explication: `Widening the small muscle that closes the opening of the bile ducts makes it possible to remove trapped stones, without surgery.` },
      { label: 'Cholangitis requiring biliary drainage', explication: `When blocked bile becomes infected, opening the sphincter restores its flow and allows the infection to be treated.` },
      { label: 'Preparation for the placement of a biliary or pancreatic stent', explication: `Opening the sphincter facilitates the passage and positioning of stents designed to keep the ducts open.` },
      { label: 'Documented sphincter of Oddi dysfunction', explication: `When this small muscle contracts abnormally and hinders the flow of bile, its controlled incision relieves the pain.` },
      { label: 'Post-operative bile leak to be treated endoscopically', explication: `After certain operations, reducing the pressure in the bile ducts by opening the sphincter helps the leak to close.` },
    ],
    preparation: [
      'Blood work-up including coagulation studies',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Stopping or adjusting anticoagulants according to medical advice',
    ],
    deroulement: [
      'General anesthesia',
      'Performed as part of an ERCP: endoscope positioned facing the papilla',
      'Controlled incision of the sphincter using a sphincterotome',
      'Extraction of stones with a balloon or basket catheter if necessary',
      'X-ray confirmation that the bile duct is clear',
      'Post-procedure monitoring as an inpatient',
    ],
    duree: '30 minutes to 1 hour, integrated into the ERCP procedure time',
    resultats: 'In the vast majority of cases, the procedure frees the bile duct in a single session. Eating is resumed gradually after a short period of monitoring. The widened orifice also facilitates any subsequent endoscopic treatments if needed.',
    risques: [
      'Bleeding at the incision site, most often controlled during the procedure',
      'Temporary pancreatic reaction, systematically monitored',
      'Biliary infection, prevented by appropriate measures',
    ],
  },
  {
    slug: 'polypectomie',
    title: 'Polypectomy',
    shortTitle: 'Polypectomy',
    description: 'Removal of digestive polyps during an endoscopy, an essential procedure for the prevention of colorectal cancers.',
    fullDescription: `Polyps are growths that develop on the inner lining of the digestive tract, most often in the colon. Most are benign, but some can progress over time: their removal, called polypectomy, is the best prevention against colorectal cancer.

Polypectomy is performed during a colonoscopy or an upper endoscopy, without any incision: the polyp is grasped with a snare passed through the endoscope, then cut at its base. Each removed polyp is sent for histopathological analysis, which determines its nature and guides the subsequent surveillance schedule.

At Clinique Pasteur Tunis, polypectomy is performed on a day-case basis, under sedation or anesthesia, in an endoscopy suite equipped with modern resection equipment. The patient goes home the same day with their report and follow-up instructions.`,
    image: '/images/fiches/endochir-polypectomie.webp',
    indications: [
      { label: 'Polyp discovered during a screening colonoscopy', explication: `A polyp spotted during the examination is most often removed at the same time, without a further procedure.` },
      { label: 'Colon or rectal polyps to be removed as a preventive measure', explication: `Removing polyps before they progress is the best protection against colorectal cancer.` },
      { label: 'Gastric or duodenal polyps requiring excision', explication: `Polyps in the stomach or the first part of the intestine can also be removed through the mouth, without any incision.` },
      { label: 'Surveillance of patients with a personal or family history of polyps', explication: `When you have already had polyps or close relatives have had them, regular colonoscopies allow any new lesion to be removed early.` },
    ],
    preparation: [
      'Thorough bowel preparation according to the prescription provided (for colon polyps)',
      'Fasting for 6 hours before the examination',
      'Anesthesia consultation if sedation is planned',
      'Adjustment of anticoagulants and antiplatelet agents according to medical advice',
      'Arrange for someone to accompany you home',
    ],
    deroulement: [
      'Sedation or anesthesia for the comfort of the examination',
      'Complete endoscopic exploration of the relevant digestive segment',
      'Identification of the polyp or polyps',
      'Removal of the polyp with a snare, with coagulation of the base if necessary',
      'Retrieval of the polyp for histopathological analysis',
      'Brief monitoring in the recovery room before discharge',
    ],
    duree: '20 to 45 minutes',
    resultats: 'Polyp removal is most often complete in a single session. The result of the histopathological analysis, forwarded to the physician, determines the interval before the next surveillance colonoscopy. Normal activities can be resumed the next day.',
    risques: [
      'Minor bleeding at the resection site, usually controlled during the procedure',
      'Delayed bleeding in the following days, rare, warranting a consultation if needed',
      'Perforation, a rare complication managed immediately',
    ],
  },
  {
    slug: 'mucosectomie',
    title: 'Mucosectomy',
    shortTitle: 'Mucosectomy',
    description: 'Endoscopic resection of extensive superficial lesions of the digestive lining, a minimally invasive alternative to surgery.',
    fullDescription: `Mucosectomy is an advanced endoscopic technique for removing superficial lesions of the digestive wall that are too extensive or too flat for a simple polypectomy. The lesion is first lifted by a submucosal injection, then resected with a snare, in one or several fragments.

This technique offers a minimally invasive alternative to surgery for many precancerous or superficial lesions of the esophagus, stomach, duodenum, colon or rectum. All the resected fragments are sent for histopathological analysis, which confirms the completeness of the resection and guides surveillance.

At Clinique Pasteur Tunis, mucosectomy is performed by endoscopists trained in resection techniques, in an endoscopy suite equipped with high-definition equipment. The procedure takes place under sedation or anesthesia, most often as a day case or with a short hospital stay.`,
    image: '/images/fiches/endochir-mucosectomie.webp',
    indications: [
      { label: 'Flat or extensive polyps of the colon and rectum', explication: `Some polyps that are too flat or too wide for simple removal are first lifted and then removed using this dedicated technique.` },
      { label: 'Superficial lesions of the esophagus or stomach', explication: `Abnormalities limited to the surface of the digestive wall can be removed through the natural orifices, without surgery.` },
      { label: 'Precancerous lesions of the digestive lining accessible by endoscopy', explication: `Removing a lesion before it transforms very often avoids a more invasive operation later on.` },
      { label: 'Selected superficial duodenal lesions', explication: `Certain well-demarcated lesions of the first part of the intestine can be resected endoscopically after specialist assessment.` },
      { label: 'Alternative to surgery for well-demarcated lesions, after specialist advice', explication: `When the lesion remains superficial, this technique avoids a surgical operation while providing complete treatment.` },
    ],
    preparation: [
      'Prior diagnostic endoscopy with precise characterization of the lesion',
      'Blood work-up including coagulation studies',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure and bowel preparation if necessary',
      'Stopping or adjusting anticoagulants according to medical advice',
    ],
    deroulement: [
      'Sedation or general anesthesia depending on the location',
      'Precise identification of the lesion and delineation of its margins',
      'Submucosal injection to lift the lesion',
      'Snare resection, in one or several fragments',
      'Careful inspection of the resection site and preventive coagulation',
      'Post-procedure monitoring in the recovery room, then a short hospital stay if necessary',
    ],
    duree: '30 minutes to 1 hour 30 depending on the size of the lesion',
    resultats: 'Mucosectomy most often achieves complete resection of the lesion without surgery. Histopathological analysis of the fragments confirms the quality of the resection and determines the schedule of follow-up endoscopies. Eating is resumed gradually the same day or the next day.',
    risques: [
      'Bleeding at the resection site, most often controlled endoscopically',
      'Perforation, rare, managed immediately',
      'Scar-related narrowing after extensive resections of the esophagus, treatable by dilation',
    ],
  },
  {
    slug: 'dilatation-endoscopique',
    title: 'Endoscopic dilation',
    shortTitle: 'Dilation',
    description: 'Endoscopic widening of narrowed segments of the digestive tract, to restore normal food passage or bowel function.',
    fullDescription: `Certain conditions can lead to a narrowing (stricture) of the digestive tract: scarring after inflammation or surgery, inflammatory diseases, motility disorders of the esophagus such as achalasia. These strictures hinder the passage of food or bowel function and can be treated by endoscopic dilation, without an incision.

The procedure consists of gradually widening the narrowed area using inflatable balloons or bougies of increasing caliber, introduced under direct vision through the endoscope. Several sessions spaced over time are sometimes needed to achieve a stable, lasting result.

At Clinique Pasteur Tunis, endoscopic dilations are performed under sedation or anesthesia, on a day-case basis in most instances, by experienced endoscopists. The patient is monitored after the procedure and goes home with simple dietary instructions.`,
    image: '/images/fiches/endochir-dilatation-endoscopique.webp',
    indications: [
      { label: 'Esophageal stricture hindering swallowing', explication: `When the esophagus narrows and food passes with difficulty, widening it with a balloon restores normal eating.` },
      { label: 'Scar-related narrowing after digestive surgery', explication: `Internal scarring can narrow the digestive tract after an operation; dilation restores a comfortable passage.` },
      { label: 'Strictures related to inflammatory bowel diseases', explication: `Chronic inflammation can narrow the intestine; dilation sometimes makes it possible to avoid further surgery.` },
      { label: 'Achalasia and certain motility disorders of the esophagus', explication: `When the lower esophagus does not relax properly, dilation eases the passage of food into the stomach.` },
      { label: 'Stricture after endoscopic treatment or radiotherapy', explication: `Some treatments can leave a scar-related narrowing; dilation sessions gradually restore the normal caliber.` },
    ],
    preparation: [
      'Prior endoscopy or imaging to determine the location and nature of the narrowing',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of anticoagulants according to medical advice',
    ],
    deroulement: [
      'Sedation or general anesthesia depending on the location',
      'Insertion of the endoscope down to the narrowed area',
      'Careful crossing of the stricture, sometimes guided by a flexible wire',
      'Gradual dilation with a balloon or bougie',
      'Visual check of the result at the end of the procedure',
      'Monitoring in the recovery room before discharge',
    ],
    duree: '20 to 40 minutes',
    resultats: 'Improvement in food passage or bowel function is often felt quickly. Eating is resumed gradually, starting with suitable textures. Depending on the nature of the stricture, additional sessions may be scheduled to consolidate the result.',
    risques: [
      'Temporary pain or discomfort after the procedure',
      'Minor local bleeding, most often of no consequence',
      'Perforation, a rare complication warranting systematic monitoring after dilation',
      'Recurrence of the narrowing requiring further sessions',
    ],
  },
  {
    slug: 'protheses-digestives',
    title: 'Digestive stent placement',
    shortTitle: 'Digestive stents',
    description: 'Endoscopic placement of stents to restore passage through the digestive tract or bile ducts, without surgery.',
    fullDescription: `Digestive stent placement consists of installing, by endoscopy, a small expandable tube (stent) at a narrowing of the esophagus, stomach, duodenum, colon or bile ducts. Once deployed, the stent keeps the passage open and restores the flow of food, bowel contents or bile.

This procedure, performed without any incision, rapidly improves the patient\'s comfort: return to eating, resolution of jaundice, relief of an obstruction. It can serve as a lasting treatment or as a step before surgery, depending on each patient\'s situation.

At Clinique Pasteur Tunis, the placement of digestive and biliary stents is performed under anesthesia, with endoscopic and X-ray guidance, by a team trained in interventional endoscopy. A short inpatient monitoring period usually follows the procedure.`,
    image: '/images/fiches/endochir-protheses-digestives.webp',
    indications: [
      { label: 'Narrowing of the esophagus hindering eating', explication: `When the esophagus is too narrow to let food through, a stent keeps it open and makes eating possible again.` },
      { label: 'Duodenal or gastric obstruction to be crossed', explication: `When the stomach or the first part of the intestine is blocked, a stent restores the passage of food without surgery.` },
      { label: 'Colonic obstruction requiring relief', explication: `When the colon is obstructed, a stent placed through the natural orifices relieves the blockage and restores bowel function.` },
      { label: 'Obstruction of the bile ducts with jaundice', explication: `When bile no longer flows, a small stent reopens the duct and the jaundice subsides within a few days.` },
      { label: 'Digestive leak or fistula to be covered temporarily', explication: `A stent can temporarily cover a leaking area while the wall heals.` },
    ],
    preparation: [
      'Endoscopic and imaging work-up to determine the location and extent of the narrowing',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Adjustment of anticoagulants according to medical advice',
      'Information on the dietary instructions to follow after placement',
    ],
    deroulement: [
      'General anesthesia or deep sedation',
      'Endoscopic and X-ray identification of the narrowed area',
      'Crossing of the obstruction using a guidewire',
      'Gradual deployment of the stent under dual guidance',
      'Verification of correct positioning and patency',
      'Post-procedure monitoring during a short hospital stay',
    ],
    duree: '30 minutes to 1 hour',
    resultats: 'The benefit is generally rapid: return to eating, improved bowel function or resolution of jaundice within a few days. Tailored dietary instructions are provided to preserve the patency of the stent, and regular follow-up is arranged.',
    risques: [
      'Temporary pain or discomfort after placement',
      'Migration of the stent requiring repositioning',
      'Secondary blockage of the stent, treatable endoscopically',
      'Perforation, a rare complication managed without delay',
    ],
  },
];
