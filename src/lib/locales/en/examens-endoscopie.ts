export const examensEndoscopie = [
  {
    slug: 'fogd',
    title: 'Gastroscopy (Upper GI Endoscopy)',
    shortTitle: 'Gastroscopy',
    image: '/images/fiches/endo-fogd.webp',
    description:
      "Visual examination of the esophagus, stomach and duodenum using a flexible endoscope, allowing the diagnosis of upper digestive tract conditions.",
    fullDescription: `Upper gastrointestinal endoscopy (gastroscopy, also known as OGD) is the gold-standard examination for exploring the upper part of the digestive tract. It provides direct visualization of the lining of the esophagus, stomach and duodenum using a flexible endoscope fitted with a miniaturized camera and a light source. This examination is essential for diagnosing many digestive conditions.

Gastroscopy can detect and diagnose gastric and duodenal ulcers, gastritis, esophagitis, gastroesophageal reflux disease, hiatal hernias, polyps, benign or malignant tumors, as well as esophageal varices. During the examination, the gastroenterologist can take biopsies (tissue samples) for histological analysis, in particular to test for Helicobacter pylori.

The examination is generally well tolerated thanks to local anesthesia of the throat with a spray or, if the patient prefers, under light sedation. The examination itself is short, around 5 to 10 minutes, and the visual findings are communicated immediately by the physician.

At Clinique Pasteur in Tunis, gastroscopy is performed by experienced gastroenterologists using latest-generation endoscopes offering high-definition image quality. The equipment is rigorously disinfected according to current protocols, guaranteeing optimal safety for every patient.`,
    preparation: [
      'Fast strictly for at least 6 hours before the examination (no eating, drinking or smoking)',
      'Report any ongoing anticoagulant or antiplatelet treatment',
      'Report any known allergies, particularly to local anesthetics',
      'Bring the results of previous examinations (X-rays, blood tests)',
      'Arrange for someone to accompany you if the examination is performed under sedation',
      'Do not drive for 12 hours after sedation',
    ],
    deroulement: [
      'The patient lies down on their left side',
      'Local anesthesia of the throat is applied with a spray, or light sedation is administered intravenously',
      'A mouthpiece is placed between the teeth to protect the endoscope',
      'The flexible endoscope is gently inserted through the mouth and guided down to the duodenum',
      'The physician carefully examines the lining of the esophagus, stomach and duodenum',
      'Biopsies may be taken if necessary (painless)',
      'The endoscope is gently withdrawn at the end of the examination',
      'The patient is monitored in a recovery room for 30 minutes to 1 hour',
    ],
    duree: '5 to 15 minutes for the examination, 1 to 2 hours including preparation and monitoring',
    resultats:
      'The visual findings are communicated immediately after the examination by the gastroenterologist. Biopsy results are available within 5 to 10 working days.',
    risques: [
      'Mild throat discomfort or soreness for 24 to 48 hours after the examination',
      'Minor bleeding at a biopsy site (rare and usually harmless)',
      'Digestive perforation (exceptional, less than 1/10,000)',
      'Reaction to the anesthesia or sedation (rare)',
      'Infection (extremely rare thanks to strict disinfection protocols)',
    ],
    indications: [
      { label: 'Persistent or recurrent upper abdominal pain', explication: `When pain in the pit of the stomach keeps coming back despite treatment, gastroscopy allows the physician to look directly at the lining to find the cause, such as gastritis or an ulcer.` },
      { label: 'Heartburn or gastroesophageal reflux resistant to treatment', explication: `If acid reflux persists despite medication, the examination checks the condition of the esophagus, looks for inflammation or a hiatal hernia, and helps adjust the treatment.` },
      { label: 'Difficulty swallowing (dysphagia)', explication: `Discomfort or a blocking sensation when swallowing always deserves investigation: gastroscopy visualizes the esophagus to identify a narrowing, inflammation or any other abnormality.` },
      { label: 'Unexplained nausea or vomiting', explication: `When nausea or vomiting persists without explanation, examining the stomach and duodenum makes it possible to look for a local cause and guide treatment.` },
      { label: 'Unexplained iron-deficiency anemia', explication: `Iron deficiency can result from small, silent bleeding in the digestive tract. Gastroscopy looks for a lesion of the esophagus, stomach or duodenum that could be responsible.` },
      { label: 'Testing for Helicobacter pylori', explication: `This very common bacterium can cause gastritis and ulcers. Small, painless samples taken during the examination make it possible to detect and treat it effectively.` },
      { label: 'Surveillance of pre-cancerous lesions (Barrett\'s esophagus, polyps)', explication: `Some benign lesions require regular monitoring to make sure they are not progressing. Scheduled check-ups make it possible to act very early if any change occurs.` },
      { label: 'Upper gastrointestinal bleeding', explication: `In case of vomiting blood or very dark stools, gastroscopy quickly locates the source of the bleeding and often allows it to be treated during the same procedure.` },
    ],
  },
  {
    slug: 'coloscopie',
    title: 'Colonoscopy',
    shortTitle: 'Colonoscopy',
    image: '/images/fiches/endo-coloscopie.webp',
    description:
      "Complete visual examination of the colon and rectum using a flexible endoscope, essential for the screening and diagnosis of colorectal conditions.",
    fullDescription: `Colonoscopy is the gold-standard examination for exploring the colon (large intestine) and the rectum. It involves inserting a flexible endoscope, fitted with a high-definition camera, through the anus in order to visualize the entire colonic lining. This examination is fundamental for colorectal cancer screening, the second leading cause of cancer death in Tunisia.

Colonoscopy can detect and analyze colonic polyps, tumors, chronic inflammatory bowel diseases (Crohn's disease, ulcerative colitis), diverticula, infectious colitis and vascular malformations. A major advantage of this examination is the ability to perform therapeutic procedures at the same time, such as polyp removal (polypectomy), thereby avoiding surgery.

Bowel preparation is an essential step for the success of the examination. It requires a low-residue diet for 2 to 3 days and taking a bowel-cleansing solution the day before and the morning of the examination. A perfectly clean colon allows optimal exploration and reduces the risk of missing lesions.

At Clinique Pasteur in Tunis, colonoscopy is performed under deep sedation provided by an anesthesiologist, guaranteeing total comfort for the patient. The gastroenterologists use latest-generation colonoscopes with virtual chromoendoscopy for improved detection of flat or small lesions.`,
    preparation: [
      'Low-residue diet (no fruit, vegetables or whole grains) for 2 to 3 days before the examination',
      'Take the bowel preparation (cleansing solution) according to the prescribed protocol the day before and the morning of the examination',
      'Fast strictly for at least 6 hours before the examination',
      'Report any anticoagulant or antiplatelet treatment (adjustment required with the prescribing physician)',
      'Mandatory pre-anesthesia consultation if the examination is performed under sedation',
      'A companion is mandatory for the trip home',
      'Do not drive for 24 hours after sedation',
    ],
    deroulement: [
      'The patient lies down on their left side',
      'Sedation is administered intravenously by the anesthesiologist',
      'The colonoscope is gently inserted through the anus',
      'Air is insufflated to open up the colon and allow good visualization',
      'The endoscope is advanced to the cecum (the junction with the small intestine)',
      'A meticulous examination is performed as the endoscope is withdrawn',
      'Any polyps detected are removed during the same procedure whenever possible',
      'Biopsies are taken from any suspicious lesion',
      'The patient is monitored in the recovery room for 1 to 2 hours',
    ],
    duree: '20 to 45 minutes for the examination, 2 to 3 hours in total including preparation and monitoring',
    resultats:
      'The gastroenterologist communicates the visual findings to the patient and their companion after they wake up. The results of biopsies and of the analysis of removed polyps are available within 7 to 14 days.',
    risques: [
      'Bloating and moderate abdominal pain after the examination (common and transient)',
      'Bleeding after polypectomy (1 to 2 % of cases, usually minor)',
      'Colonic perforation (rare, about 1/1000 for colonoscopies with polypectomy)',
      'Post-polypectomy syndrome (abdominal pain and fever, rare)',
      'Anesthesia-related complications (rare)',
    ],
    indications: [
      { label: 'Colorectal cancer screening from age 45, or earlier in case of family history', explication: `Even without symptoms, screening colonoscopy makes it possible to spot and remove polyps before they turn malignant. It is the most effective way to prevent colorectal cancer.` },
      { label: 'Positive screening test (blood in the stool)', explication: `When a screening test reveals traces of blood invisible to the naked eye, colonoscopy is essential to determine the origin, most often benign, such as a polyp or hemorrhoids.` },
      { label: 'Persistent change in bowel habits (diarrhea, constipation)', explication: `A lasting change in bowel habits, with no obvious cause, warrants an examination of the colon to check the condition of the lining and rule out a lesion.` },
      { label: 'Rectal bleeding (blood in the stool)', explication: `The presence of red blood in the stool must always be investigated. Colonoscopy identifies its exact source and can treat it if necessary during the same examination.` },
      { label: 'Unexplained iron-deficiency anemia', explication: `Unexplained iron deficiency may be linked to silent bleeding in the colon. Colonoscopy looks for the responsible lesion in order to treat it and durably correct the anemia.` },
      { label: 'Unexplained chronic abdominal pain', explication: `When abdominal pain persists without explanation despite initial tests, colonoscopy makes it possible to directly check the condition of the large intestine and guide the diagnosis.` },
      { label: 'Surveillance after polypectomy or colorectal cancer', explication: `After polyp removal or treatment of colon cancer, regular follow-up colonoscopies verify the absence of new lesions and provide reassuring monitoring.` },
      { label: 'Assessment of chronic inflammatory bowel disease', explication: `For Crohn's disease or ulcerative colitis, colonoscopy assesses the extent and intensity of the inflammation, which helps the physician choose and adjust the treatment.` },
    ],
  },
  {
    slug: 'echo-endoscopie',
    title: 'Endoscopic Ultrasound (EUS)',
    shortTitle: 'Endoscopic ultrasound',
    image: '/images/fiches/endo-echo-endoscopie.webp',
    description:
      "Examination combining endoscopy and ultrasound to obtain precise images of the digestive walls and adjacent organs, essential for the assessment of certain digestive and pancreatic conditions.",
    fullDescription: `Endoscopic ultrasound (EUS) is a high-precision examination that combines digestive endoscopy and ultrasound imaging. An endoscope fitted with a miniaturized ultrasound probe at its tip is introduced into the digestive tract, making it possible to perform an ultrasound scan from inside the body itself. This technique provides images with a higher resolution than those obtained by transcutaneous ultrasound or CT scan.

This examination is particularly effective for exploring the pancreas, the bile ducts, the wall of the esophagus, stomach and rectum, as well as the mediastinal and abdominal lymph nodes. EUS makes it possible to precisely assess the depth of invasion of digestive tumors (staging), to characterize submucosal lesions and to detect small pancreatic or biliary lesions not visible on other imaging examinations.

Endoscopic ultrasound can also be interventional: it allows fine-needle aspiration of suspicious lesions or lymph nodes to obtain a precise cytological or histological diagnosis. This minimally invasive technique often avoids the need for diagnostic surgical procedures.

At Clinique Pasteur in Tunis, endoscopic ultrasound is performed by specialized gastroenterologists with state-of-the-art equipment. The examination is carried out under deep sedation for the patient's comfort, under optimal safety conditions.`,
    preparation: [
      'Fast strictly for at least 6 hours before the examination',
      'Report any anticoagulant or antiplatelet treatment (may need to be stopped before a needle aspiration)',
      'Bring a recent coagulation panel if a needle aspiration is planned',
      'Mandatory pre-anesthesia consultation',
      'Bring the results of previous imaging (CT scan, MRI, ultrasound)',
      'A companion is mandatory for the trip home',
    ],
    deroulement: [
      'Deep sedation is administered by the anesthesiologist',
      'The echoendoscope is introduced through the mouth (upper route) or through the anus (lower route, depending on the indication)',
      'The endoscope is positioned facing the area to be explored',
      'The ultrasound probe produces real-time images of the digestive wall and adjacent organs',
      'The physician analyzes the size, structure and extension of the lesions',
      'If indicated, a fine-needle aspiration is performed under ultrasound guidance',
      'The samples are sent to the laboratory for analysis',
      'The patient is monitored in the recovery room for 1 to 2 hours',
    ],
    duree: '30 to 60 minutes for the examination, 2 to 3 hours in total',
    resultats:
      'The imaging findings are communicated by the gastroenterologist in the days following the examination. The results of needle aspirations are available within 7 to 14 days.',
    risques: [
      'Mild sore throat or abdominal discomfort (common and transient)',
      'Bleeding at the puncture site (rare)',
      'Acute pancreatitis after pancreatic puncture (rare, about 1 to 2 %)',
      'Digestive perforation (exceptional)',
      'Infection (very rare)',
      'Anesthesia-related complications (rare)',
    ],
    indications: [
      { label: 'Staging of cancers of the esophagus, stomach, rectum and pancreas', explication: `By placing the ultrasound probe in direct contact with the lesion, this examination precisely measures the depth of a tumor within the digestive wall, essential information for choosing the best treatment.` },
      { label: 'Exploration of pancreatic tumors or masses', explication: `The pancreas is a deep organ that is difficult to examine from the outside. EUS gets as close to it as possible and can detect very small lesions invisible on other examinations.` },
      { label: 'Exploration of the bile ducts (stones, tumors)', explication: `When a stone or an obstruction is suspected in the ducts that carry bile, this highly sensitive examination can confirm or rule it out before considering a therapeutic procedure.` },
      { label: 'Characterization of submucosal lesions of the digestive tract', explication: `Some bumps seen during a standard endoscopy develop beneath the surface of the wall. Internal ultrasound shows which layer they arise from and helps clarify their nature.` },
      { label: 'Needle aspiration of suspicious masses or lymph nodes', explication: `Under ultrasound guidance, a very fine needle can sample a few cells from a suspicious lesion or lymph node. This sampling provides a precise diagnosis while avoiding surgery.` },
      { label: 'Exploration of pancreatic cysts or pseudocysts', explication: `When facing a fluid-filled pocket in the pancreas, the examination studies its contents and walls to distinguish harmless cysts from those requiring surveillance or treatment.` },
      { label: 'Assessment of chronic pancreatitis', explication: `In case of prolonged inflammation of the pancreas, EUS finely assesses the condition of the gland and its ducts, which helps monitor the disease and adjust its management.` },
      { label: 'Drainage of fluid collections', explication: `Some pockets of fluid that form around the pancreas can be drained directly through the stomach wall, under ultrasound guidance, thereby avoiding more invasive surgery.` },
    ],
  },
  {
    slug: 'cpre',
    title: 'ERCP - Endoscopic Retrograde Cholangiopancreatography',
    shortTitle: 'ERCP',
    image: '/images/fiches/endo-cpre.webp',
    description:
      "Specialized endoscopic examination for visualizing and treating conditions of the bile ducts and pancreatic duct, in particular the removal of bile duct stones.",
    fullDescription: `Endoscopic retrograde cholangiopancreatography (ERCP) is a specialized endoscopic procedure that combines endoscopy and radiology to visualize and treat conditions of the bile ducts and the pancreatic duct. A side-viewing endoscope (duodenoscope) is introduced through the mouth down to the duodenum, where a catheter is inserted into the common opening of the biliary and pancreatic ducts (the ampulla of Vater).

Today, ERCP is used mainly for therapeutic purposes. It allows the removal of stones from the bile ducts (choledocholithiasis), the placement of biliary or pancreatic stents to relieve an obstruction, sphincterotomy (opening of the sphincter of Oddi) and the drainage of infected bile ducts (cholangitis). These minimally invasive procedures often avoid the need for open surgery.

The injection of a contrast agent into the biliary and pancreatic ducts, combined with fluoroscopy (real-time X-ray imaging), makes it possible to map the biliary and pancreatic tree with great precision. This technique is essential for locating obstructions, guiding therapeutic procedures and verifying their effectiveness.

At Clinique Pasteur in Tunis, ERCP is performed in a room equipped with a fluoroscopy C-arm by gastroenterologists specialized in interventional endoscopy. The examination is carried out under general anesthesia, with rigorous post-operative monitoring to prevent and detect any complication.`,
    preparation: [
      'Fast strictly for at least 8 hours before the examination',
      'Mandatory discontinuation of anticoagulants and antiplatelet agents according to the protocol prescribed by the physician',
      'Prior blood tests (coagulation, liver panel, lipase)',
      'Mandatory pre-anesthesia consultation',
      'Report any allergy, particularly to iodinated contrast agents',
      'Hospitalization of at least 24 hours is generally necessary',
      'Bring all previous imaging examinations (CT scan, biliary MRI)',
    ],
    deroulement: [
      'General anesthesia is induced by the anesthesiologist',
      'The patient is placed in a prone or semi-prone position',
      'The duodenoscope is introduced through the mouth down to the second portion of the duodenum',
      'The ampulla of Vater is located and cannulated',
      'A contrast agent is injected to opacify the bile ducts and/or the pancreatic duct',
      'Radiological images are taken in real time (fluoroscopy)',
      'Therapeutic procedures are performed: sphincterotomy, stone extraction, stent placement',
      'The endoscope is withdrawn and the patient is transferred to the recovery room',
      'Hospital monitoring for 24 to 48 hours is provided',
    ],
    duree: '30 to 90 minutes depending on the complexity of the procedure',
    resultats:
      'The results of the therapeutic procedure are communicated immediately by the gastroenterologist. A detailed operative report is given to the patient upon discharge from the hospital.',
    risques: [
      'Acute post-ERCP pancreatitis (the most frequent complication, 3 to 10 % of cases, usually mild)',
      'Post-sphincterotomy bleeding (1 to 2 %, mostly controlled endoscopically)',
      'Duodenal perforation (rare, less than 1 %)',
      'Cholangitis or biliary infection (rare with antibiotic prophylaxis)',
      'Complications related to general anesthesia',
    ],
    indications: [
      { label: 'Bile duct stones (choledocholithiasis)', explication: `When a stone blocks the duct that carries bile, ERCP allows it to be removed through the natural orifices, without opening the abdomen, and quickly relieves the pain.` },
      { label: 'Obstructive jaundice (jaundice due to bile duct obstruction)', explication: `When the skin and eyes turn yellow because bile is no longer flowing, ERCP identifies the obstruction responsible and restores the flow of bile during the same procedure.` },
      { label: 'Cholangitis (infection of the bile ducts)', explication: `An infection of blocked bile is a serious situation requiring rapid drainage. ERCP evacuates the infected bile and treats the obstruction, which helps bring the infection under control.` },
      { label: 'Benign or malignant biliary stricture requiring stent placement', explication: `When a bile duct is narrowed, a small tube called a stent can be placed during ERCP to keep the passage open and allow bile to flow normally.` },
      { label: 'Post-operative bile leak', explication: `After certain surgeries, bile may escape through a small leak. ERCP helps locate and treat it, often by temporarily placing a stent, without a new operation.` },
      { label: 'Stricture or stone of the pancreatic duct', explication: `The pancreatic duct can also be blocked by a stone or a narrowing, causing pain. ERCP makes it possible to relieve this obstruction and improve the patient's comfort.` },
      { label: 'Biliary drainage before or after surgery', explication: `Before or after an operation on the liver, pancreas or bile ducts, drainage by ERCP ensures the proper flow of bile and puts the patient in the best possible condition.` },
    ],
  },
  {
    slug: 'polypectomie',
    title: 'Endoscopic polypectomy',
    shortTitle: 'Polypectomy',
    image: '/images/fiches/endo-polypectomie.webp',
    description:
      "Removal of polyps (growths) from the digestive tract during an endoscopy, an essential technique in the prevention of colorectal cancer.",
    fullDescription: `Endoscopic polypectomy is a therapeutic procedure performed during a digestive endoscopy (colonoscopy or gastroscopy) that involves removing polyps from the lining of the digestive tract. Polyps are abnormal growths of the mucosa that may be benign or carry a risk of malignant transformation. Their removal is a fundamental step in the prevention of colorectal cancer.

Several polypectomy techniques exist depending on the size, shape and location of the polyp: biopsy forceps for very small polyps, cold snare for sessile polyps smaller than 10 mm, and diathermy snare with electric current for pedunculated or larger polyps. The choice of technique is made by the gastroenterologist in real time according to the characteristics of the polyp.

After removal, the polyp is systematically retrieved and sent for histological analysis to the pathology laboratory. This analysis determines the histological type of the polyp (adenoma, hyperplastic polyp, serrated polyp) and, above all, verifies the absence of cancerous cells. The result of this analysis determines the subsequent surveillance and the timing of the next colonoscopy.

At Clinique Pasteur in Tunis, polypectomies are performed by gastroenterologists proficient in the full range of endoscopic techniques. The technical facility is equipped with latest-generation electrosurgical generators and hemostasis devices for optimal and safe management.`,
    preparation: [
      'Same preparation as for colonoscopy: low-residue diet and bowel preparation',
      'Mandatory discontinuation of anticoagulants and antiplatelet agents according to recommendations (5 to 7 days before)',
      'A recent coagulation panel is mandatory',
      'Mandatory pre-anesthesia consultation',
      'Report any history of allergy or abnormal bleeding',
      'Arrange for someone to accompany you home',
    ],
    deroulement: [
      'The examination is performed under deep sedation or general anesthesia',
      'The polyp is identified and examined (size, shape, vascularization)',
      'The removal technique is chosen according to the characteristics of the polyp',
      'For pedunculated polyps, a snare is placed around the stalk and an electric current is applied to cut and coagulate',
      'For sessile polyps, a submucosal injection may be performed to lift the lesion',
      'The polyp is retrieved for histological analysis',
      'The removal site is examined to check for any bleeding',
      'Hemostatic clips may be placed as a preventive measure',
      'The patient is monitored in the recovery room',
    ],
    duree: '15 to 45 minutes depending on the number and size of the polyps',
    resultats:
      'The gastroenterologist informs the patient of the number and appearance of the polyps removed. The results of the histological analysis are available within 7 to 14 days and determine the surveillance schedule.',
    risques: [
      'Immediate or delayed bleeding (1 to 2 % of cases, may occur up to 15 days after the procedure)',
      'Colonic perforation (rare, about 0.1 to 0.5 %)',
      'Post-polypectomy syndrome (abdominal pain, fever without perforation, rare)',
      'Incomplete removal requiring a second endoscopic procedure (large polyps)',
      'Anesthesia-related complications',
    ],
    indications: [
      { label: 'Polyp(s) detected during a screening colonoscopy', explication: `When a polyp is discovered during a colonoscopy, it is generally removed immediately, during the same examination. The patient is thus treated without needing a further procedure.` },
      { label: 'Polyp(s) detected during a surveillance colonoscopy', explication: `In people being followed up after previous polyps, any new polyp spotted during a check-up is removed straight away, which maintains effective prevention over time.` },
      { label: 'Adenoma(s) with dysplasia', explication: `Some polyps contain cells that are beginning to change. Their complete removal eliminates the risk that they will one day progress to a more serious lesion.` },
      { label: 'Serrated polyps', explication: `These distinctive-looking polyps, often flat and inconspicuous, can progress silently. Their systematic removal is part of good preventive practice.` },
      { label: 'Gastric polyps discovered during a gastroscopy', explication: `Polyps can also form in the stomach. When they are discovered during a gastroscopy, their removal makes it possible to analyze them and rule out any abnormality.` },
      { label: 'Prevention of colorectal cancer', explication: `The great majority of colon cancers develop from benign polyps that progress slowly. Removing polyps as soon as they are discovered is therefore the most effective preventive measure.` },
      { label: 'Symptomatic polyps (bleeding, partial obstruction)', explication: `A large polyp can bleed or hinder passage through the intestine. Its endoscopic removal makes these symptoms disappear while allowing its complete analysis.` },
    ],
  },
  {
    slug: 'mucosectomie',
    title: 'Endoscopic mucosal resection (EMR)',
    shortTitle: 'Mucosal resection',
    image: '/images/fiches/endo-mucosectomie.webp',
    description:
      "Advanced endoscopic technique for resecting extensive superficial lesions of the digestive mucosa, a minimally invasive alternative to surgery.",
    fullDescription: `Endoscopic mucosal resection (EMR) is an advanced endoscopic technique that makes it possible to remove large superficial lesions from the lining of the digestive tract. Unlike standard polypectomy, EMR is suited to flat or sessile lesions larger than 20 mm, laterally spreading adenomas and superficial cancers that do not extend beyond the submucosa.

The technique is based on injecting a solution into the submucosa (submucosal cushion) in order to lift the lesion and separate it from the deep layers of the digestive wall. This lifting allows a safer resection by reducing the risk of perforation and making it easier to capture the lesion with the diathermy snare. The resection can be performed in a single piece (en bloc) or in several fragments (piecemeal) depending on the size of the lesion.

Histological analysis of the resected specimens is fundamental: it confirms the nature of the lesion, assesses the resection margins and determines whether the endoscopic treatment is sufficient or whether additional surgical management is necessary. EMR thus makes it possible to avoid major surgery in many patients.

At Clinique Pasteur in Tunis, EMR procedures are performed by endoscopists experienced in advanced resection techniques. The procedure takes place under general anesthesia in a safe environment, with close follow-up to prevent complications.`,
    preparation: [
      'Same preparation as for colonoscopy for colonic lesions',
      'Fast for at least 8 hours for upper digestive tract lesions',
      'Discontinuation of anticoagulants and antiplatelet agents according to the prescribed protocol (5 to 10 days before)',
      'A recent coagulation panel is mandatory (PT, aPTT, platelets)',
      'Mandatory pre-anesthesia consultation',
      'Hospitalization for 24 to 48 hours is often necessary',
      'Bring previous endoscopy reports and biopsy results',
    ],
    deroulement: [
      'General anesthesia is induced by the anesthesiologist',
      'The lesion is located and its margins are delineated (chromoendoscopy)',
      'A solution is injected into the submucosa to lift the lesion',
      'Proper lifting of the lesion is verified (positive lifting sign)',
      'The diathermy snare is positioned around the lifted lesion',
      'The resection is performed by applying an electric current',
      'The fragments are retrieved for histological analysis',
      'The resection site is examined and hemostatic measures are applied (clips, coagulation)',
      'The patient is hospitalized for monitoring for 24 to 48 hours',
    ],
    duree: '30 to 90 minutes depending on the size and location of the lesion',
    resultats:
      'The gastroenterologist communicates the initial visual findings after the examination. The final results of the histological analysis are available within 10 to 21 days and are discussed during a follow-up consultation.',
    risques: [
      'Immediate or delayed bleeding (5 to 10 % of cases, usually controlled endoscopically)',
      'Digestive perforation (1 to 2 % of cases)',
      'Incomplete resection requiring a second procedure or surgery',
      'Local recurrence in case of piecemeal resection (10 to 20 %, monitored by endoscopy)',
      'Post-resection syndrome (pain, fever)',
      'Late scar stricture (for circumferential lesions)',
    ],
    indications: [
      { label: 'Large flat or sessile adenomas (larger than 20 mm)', explication: `Broad, flat polyps cannot be removed with a simple snare. EMR makes it possible to remove them safely, by first lifting them with an injection beneath the mucosa.` },
      { label: 'Laterally spreading tumors (LST) of the colon', explication: `Some lesions spread across the surface of the colon wall rather than forming a lump. This specialized technique makes it possible to remove them completely despite their extent.` },
      { label: 'Superficial cancers of the digestive tract confined to the mucosa', explication: `When a cancerous lesion is detected very early and remains confined to the superficial layer of the wall, it can often be removed entirely endoscopically, without surgery.` },
      { label: 'Dysplastic lesions in Barrett\'s esophagus', explication: `In people whose esophageal lining has been transformed by reflux, areas that are beginning to change can be removed preventively using this technique.` },
      { label: 'Large gastric polyps', explication: `Large stomach polyps can be removed by EMR, which makes it possible both to analyze them completely and to avoid stomach surgery.` },
      { label: 'Lesions not amenable to standard polypectomy', explication: `Some lesions are poorly located or awkwardly shaped for standard removal. EMR offers an additional solution for removing them without resorting to surgery.` },
      { label: 'Alternative to surgery for extensive benign lesions', explication: `For many benign but extensive lesions, this technique avoids major surgery: the hospital stay is shorter and recovery considerably faster.` },
    ],
  },
  {
    slug: 'protheses-digestives',
    title: 'Digestive stent placement',
    shortTitle: 'Digestive stents',
    image: '/images/fiches/endo-protheses-digestives.webp',
    description:
      "Endoscopic placement of metallic or plastic stents in the digestive tract, to relieve an obstruction and restore transit.",
    fullDescription: `Endoscopic placement of digestive stents is an interventional technique that involves deploying a metallic or plastic stent (endoprosthesis) in a narrowed or obstructed area of the digestive tract. This procedure restores the patency of the digestive passage and significantly improves the patient's quality of life, often in the context of tumor-related disease.

Digestive stents can be placed in the esophagus, stomach, duodenum, colon, bile ducts or pancreatic duct. Self-expanding metallic stents are the most commonly used for tumor-related obstructions, while plastic stents are preferred for benign strictures or temporary obstructions of the bile ducts. The choice of stent type depends on the location, the nature of the obstruction and the patient's prognosis.

This technique often provides a palliative alternative to surgery in patients with advanced or inoperable cancers. It restores oral feeding in patients suffering from tumor-related dysphagia, relieves obstructive jaundice or treats colonic obstruction. The placement is performed under endoscopic and fluoroscopic guidance to ensure precise positioning.

At Clinique Pasteur in Tunis, digestive stent placement is performed by gastroenterologists specialized in interventional endoscopy, in collaboration with the anesthesia and radiology teams. All types of stents are available to address every clinical situation.`,
    preparation: [
      'Fast for at least 8 hours before the procedure',
      'Prior blood tests (coagulation, liver panel, complete blood count)',
      'Mandatory pre-anesthesia consultation',
      'Recent imaging (CT scan, MRI) to assess the stricture',
      'Report any ongoing anticoagulant treatment',
      'Hospitalization is required for post-procedure monitoring',
      'Patient information and informed consent',
    ],
    deroulement: [
      'General anesthesia is induced',
      'The endoscope is introduced up to the strictured area',
      'The stricture is crossed with a guidewire under fluoroscopic guidance',
      'The degree and length of the stricture are assessed',
      'Prior dilation may be necessary to allow passage of the delivery device',
      'The stent is positioned at the level of the stricture and deployed under combined endoscopic and radiological guidance',
      'The proper expansion of the stent and the restoration of the passage are verified',
      'The patient is monitored in hospital for 24 to 48 hours',
    ],
    duree: '30 to 60 minutes for the procedure',
    resultats:
      'Restoration of transit or drainage is generally immediate after placement. The gastroenterologist provides a detailed report and schedules clinical and endoscopic follow-up.',
    risques: [
      'Stent migration (5 to 10 % for uncovered metallic stents)',
      'Stent obstruction due to tumor ingrowth or food impaction',
      'Digestive perforation during placement (rare, 1 to 3 %)',
      'Chest or abdominal pain after placement (common, transient)',
      'Bleeding (rare)',
      'Gastroesophageal reflux with low esophageal stents',
    ],
    indications: [
      { label: 'Malignant esophageal stricture with dysphagia', explication: `When a tumor narrows the esophagus and prevents normal eating, placing a stent reopens the passage and allows the patient to eat by mouth again, which greatly improves their quality of life.` },
      { label: 'Tumor-related gastroduodenal stricture with vomiting', explication: `If the outlet of the stomach is blocked by a lesion, food can no longer pass and causes vomiting. A stent placed at this level restores transit and quickly relieves the patient.` },
      { label: 'Malignant colonic obstruction, as an emergency or palliative measure', explication: `In case of large bowel obstruction, placing a stent relieves the blockage without emergency surgery, either while awaiting a properly prepared operation or as comfort care.` },
      { label: 'Malignant biliary stricture with obstructive jaundice', explication: `When a tumor compresses the bile duct and causes jaundice, a stent placed in this duct restores the flow of bile and makes the jaundice and itching subside.` },
      { label: 'Post-operative bile or pancreatic leak', explication: `After certain operations, an abnormal leak of bile or pancreatic juice may persist. A temporary stent diverts the fluid back into the normal circuit while the leak heals.` },
      { label: 'Benign post-surgical anastomotic stricture', explication: `The suture area created during digestive surgery can sometimes narrow as it heals. A temporary stent helps keep the passage open during healing.` },
      { label: 'Digestive fistula', explication: `A fistula is a small abnormal opening in the wall of the digestive tract. By covering the opening, a stent allows it to close and promotes healing without further surgery.` },
    ],
  },
  {
    slug: 'dilatation-endoscopique',
    title: 'Endoscopic dilation',
    shortTitle: 'Endoscopic dilation',
    image: '/images/fiches/endo-dilatation-endoscopique.webp',
    description:
      "Endoscopic widening of a narrowing (stricture) of the digestive tract using balloons or bougies, to restore the normal passage of food.",
    fullDescription: `Endoscopic dilation is an interventional technique that involves widening a narrowing (stricture) of the digestive tract using dedicated devices introduced endoscopically. This procedure restores a sufficient caliber for the normal passage of food and liquids, considerably improving the quality of life of patients suffering from digestive strictures.

Two main types of devices are used: pneumatic dilation balloons (TTS - through the scope), which are gradually inflated at the level of the stricture, and dilation bougies (Savary-Gilliard type), which are passed over a guidewire through the stricture in increasing diameters. The choice of technique depends on the location, nature and severity of the stricture.

Digestive strictures can have various origins: caustic scarring, peptic (severe esophagitis), post-surgical (anastomotic), inflammatory (Crohn's disease) or tumor-related. Dilation alone may be sufficient for short benign strictures, or may serve as a preliminary step before stent placement for more complex strictures. Several sessions may be necessary to achieve a lasting result.

At Clinique Pasteur in Tunis, endoscopic dilations are performed by experienced gastroenterologists, under general anesthesia and with fluoroscopic guidance if necessary. Post-procedure follow-up is tailored to each patient to optimize results and prevent recurrence.`,
    preparation: [
      'Fast strictly for at least 8 hours',
      'Discontinuation of anticoagulants according to the prescribed protocol',
      'Prior blood tests (complete blood count, coagulation)',
      'Mandatory pre-anesthesia consultation',
      'Bring previous endoscopy and radiology reports',
      'Report any known allergies',
      'Day hospitalization or 24-hour stay depending on the situation',
    ],
    deroulement: [
      'General anesthesia is induced',
      'The endoscope is introduced and the stricture is visualized',
      'A guidewire is passed through the stricture under visual or fluoroscopic guidance',
      'The dilation balloon is positioned at the level of the stricture and gradually inflated',
      'Alternatively, bougies of increasing diameter are passed successively over the guidewire',
      'The degree of dilation is checked endoscopically after each pass',
      'The mucosa is examined to detect any complications (tear, bleeding)',
      'Biopsies may be taken if necessary',
      'The patient is monitored in the recovery room and then in hospital',
    ],
    duree: '15 to 30 minutes for the procedure, 2 to 4 hours of monitoring',
    resultats:
      'Improvement is generally felt within the first few days. Several sessions spaced 1 to 4 weeks apart may be necessary for severe or recurrent strictures.',
    risques: [
      'Digestive perforation (the most feared complication, 1 to 3 % of cases)',
      'Bleeding (rare, usually minor)',
      'Chest or abdominal pain after the procedure (common and transient)',
      'Recurrence of the stricture requiring further sessions',
      'Transient bacteremia (rare)',
      'Anesthesia-related complications',
    ],
    indications: [
      { label: 'Peptic stricture of the esophagus (after severe reflux)', explication: `Long-standing, intense acid reflux can heal by narrowing the esophagus, making eating difficult. Dilation gently widens this passage and restores comfortable swallowing.` },
      { label: 'Caustic stricture of the esophagus', explication: `After the accidental ingestion of a corrosive product, the esophagus may narrow as it heals. Progressive dilation sessions restore the passage to a caliber sufficient for eating.` },
      { label: 'Post-surgical anastomotic stricture', explication: `The suture area from digestive surgery sometimes narrows as it heals. Gentle balloon dilation makes it possible to reopen the passage without a new operation.` },
      { label: 'Stricture in Crohn\'s disease', explication: `The chronic inflammation of Crohn's disease can thicken the intestinal wall to the point of narrowing it. Endoscopic dilation relieves this blockage and can avoid or delay surgery.` },
      { label: 'Radiation-induced stricture after radiotherapy', explication: `Over time, radiotherapy can stiffen and narrow a segment of the digestive tract. Dilation improves the passage of food and the patient's comfort.` },
      { label: 'Achalasia (pneumatic dilation of the cardia)', explication: `In this disease, the muscle at the entrance to the stomach does not relax properly and blocks food. A balloon inflated at this level relaxes the muscle and makes swallowing easier again.` },
      { label: 'Pyloric stricture', explication: `When the outlet of the stomach is narrowed, the stomach empties poorly, causing heaviness and vomiting. Balloon dilation restores normal emptying.` },
      { label: 'Benign colonic stricture', explication: `A non-cancerous narrowing of the large intestine, often due to scarring or inflammation, can be widened with a balloon to restore normal transit without surgery.` },
    ],
  },
  {
    slug: 'ligature-varices',
    title: 'Esophageal variceal band ligation',
    shortTitle: 'Variceal ligation',
    image: '/images/fiches/endo-ligature-varices.webp',
    description:
      "Endoscopic treatment of esophageal varices by placing elastic bands, the reference technique for preventing or treating digestive hemorrhages related to portal hypertension.",
    fullDescription: `Esophageal variceal band ligation is a therapeutic endoscopic technique that involves placing small elastic bands at the base of dilated varices in the esophagus in order to strangle them, causing their necrosis and subsequent disappearance. This technique is now the reference treatment for esophageal varices, outperforming sclerotherapy in terms of both efficacy and safety.

Esophageal varices are a consequence of portal hypertension, most often related to cirrhosis of the liver. The increased pressure in the portal system leads to the development of collateral venous circulation, including esophageal varices, which can rupture and cause severe, life-threatening digestive hemorrhages. Ligation is used both as an emergency measure to stop active bleeding and prophylactically to prevent a first episode or a recurrence of bleeding.

Endoscopic band ligation treatment is carried out over several sessions spaced 2 to 4 weeks apart, until the varices are completely eradicated. Each session allows several bands to be placed on the largest variceal columns. After eradication, regular endoscopic surveillance is maintained to detect and treat any recurrence.

At Clinique Pasteur in Tunis, esophageal variceal band ligation is performed by hepato-gastroenterologists experienced in the management of portal hypertension. The team has latest-generation multi-band ligation devices and an intensive care unit for the management of hemorrhagic emergencies.`,
    preparation: [
      'Fast for at least 6 hours (except in a bleeding emergency)',
      'Complete blood tests: complete blood count, coagulation, liver panel, blood typing',
      'Correction of coagulation disorders if necessary (plasma or platelet transfusion)',
      'A peripheral venous line is placed for infusion and administration of treatments',
      'Report all current medications (beta-blockers, anticoagulants)',
      'Pre-anesthesia consultation if the procedure is scheduled',
      'In an emergency: prior hemodynamic stabilization by the intensive care team',
    ],
    deroulement: [
      'Deep sedation or general anesthesia is induced',
      'The endoscope fitted with the multi-band ligation device is introduced through the mouth',
      'The esophageal varices are identified and classified according to their size and risk',
      'Each varix is suctioned into the cap of the ligation device',
      'An elastic band is deployed at the base of the varix, strangling it',
      'Several ligations are placed per session (generally 4 to 8 bands)',
      'The procedure starts with the varices near the gastroesophageal junction and moves upward',
      'The patient is monitored in hospital for 24 to 48 hours',
      'A follow-up session is scheduled 2 to 4 weeks later',
    ],
    duree: '15 to 30 minutes per session',
    resultats:
      'Eradication of the varices is achieved in 2 to 4 sessions on average. A follow-up endoscopy is performed 1 to 3 months after the last session, then every 6 to 12 months to monitor for recurrence.',
    risques: [
      'Transient dysphagia or retrosternal pain (common for 24 to 48 hours)',
      'Ulcerations at the ligation site (expected, heal within 1 to 3 weeks)',
      'Post-ligation bleeding (2 to 5 % of cases, related to the sloughing of the band site)',
      'Transient bacteremia (rare)',
      'Esophageal stricture (rare, in case of repeated circumferential ligations)',
      'Recurrence of varices requiring further sessions',
    ],
    indications: [
      { label: 'Acute digestive hemorrhage due to ruptured esophageal varices (emergency)', explication: `When an esophageal varix ruptures and bleeds, placing elastic bands as an emergency measure stops the hemorrhage directly at its source. It is a procedure that can save a life.` },
      { label: 'Secondary prophylaxis after a first episode of variceal bleeding', explication: `After a first bleed, the risk of recurrence is high. Scheduled ligation sessions gradually eliminate the remaining varices and greatly reduce this risk.` },
      { label: 'Primary prophylaxis in cirrhotic patients with large varices', explication: `In people with cirrhosis, large varices can be treated even before they have bled. This prevention avoids a potentially serious first hemorrhage.` },
      { label: 'Grade II or III esophageal varices with red signs', explication: `Some varices display signs on their surface that herald an imminent risk of rupture. Their preventive ligation is then recommended without delay.` },
      { label: 'Cirrhotic patient with a history of upper digestive bleeding', explication: `In a cirrhotic patient who has already experienced digestive bleeding, endoscopic surveillance and variceal ligation are part of regular follow-up to prevent any recurrence.` },
      { label: 'Complement to treatment with non-selective beta-blockers', explication: `Medications that lower the pressure in the digestive veins and band ligation act in a complementary way: their combination offers the best protection against bleeding.` },
      { label: 'Contraindication or intolerance to beta-blockers', explication: `When the usual medications are not tolerated or are inadvisable, endoscopic ligation is an effective alternative for protecting the patient from the risk of bleeding.` },
    ],
  },
];
