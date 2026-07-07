export const prestationsGenerale = [
  {
    slug: 'chirurgie-digestive',
    title: 'Digestive surgery (stomach, intestine, colon, rectum)',
    shortTitle: 'Digestive surgery',
    description: 'Comprehensive surgical management of diseases of the digestive tract, using conventional or minimally invasive laparoscopic approaches.',
    fullDescription: `Digestive surgery covers all procedures involving the digestive tract: stomach, small intestine, colon and rectum. It treats a wide range of conditions, benign or tumour-related, from the removal of a diseased segment to complex reconstructions of the digestive circuit.

Whenever possible, the laparoscopic approach (keyhole surgery) is preferred: the surgeon operates through small incisions using a camera and fine instruments, which reduces post-operative pain, shortens the hospital stay and speeds up the return to normal activities. More complex procedures may require a conventional approach, chosen in the patient\'s best interest.

Care is part of a comprehensive pathway: a complete pre-operative work-up, multidisciplinary case review for tumour-related conditions, and enhanced recovery after surgery (ERAS) protocols promoting a fast and comfortable recovery.

At Clinique Pasteur Tunis, digestive surgery is performed by surgeons experienced in major surgery, in operating theatres equipped with high-definition laparoscopy systems, with a dedicated anaesthesia team and intensive care units available at all times.`,
    image: '/images/fiches/gen-chirurgie-digestive.webp',
    indications: [
      { label: 'Benign or malignant tumours of the stomach, colon or rectum', explication: `Whether benign or cancerous, a tumour of the digestive tract is most often treated by removing the affected segment, with restoration of the digestive circuit during the same procedure.` },
      { label: 'Inflammatory bowel diseases resistant to medical treatment', explication: `When medication is no longer enough to control Crohn\'s disease or ulcerative colitis, removing the most affected portion of intestine brings genuine relief.` },
      { label: 'Complicated or recurrent diverticulitis', explication: `Repeated or complicated flare-ups of infection in the diverticula of the colon may justify removing the weakened segment, to prevent further attacks.` },
      { label: 'Bowel obstructions and digestive emergencies', explication: `A blockage of intestinal transit or another abdominal emergency may require rapid surgery: the teams and operating theatres are available at all times.` },
      { label: 'Severe gastro-oesophageal reflux requiring surgery', explication: `When acid reflux persists despite properly followed treatment, an anti-reflux procedure durably corrects the problem at its source.` },
    ],
    preparation: [
      'Imaging and endoscopic work-up tailored to the condition',
      'Complete pre-operative blood tests',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Specific bowel preparation according to the surgeon\'s instructions',
    ],
    deroulement: [
      'General anaesthesia and positioning in the operating theatre',
      'Laparoscopic approach through small incisions whenever possible',
      'Removal of the diseased digestive segment or correction of the abnormality',
      'Restoration of digestive continuity',
      'Final checks and closure',
      'Tailored post-operative monitoring, with early mobilisation',
    ],
    duree: '2 to 4 hours depending on the procedure',
    resultats: 'Thanks to enhanced recovery protocols, eating and walking resume early. The hospital stay generally lasts a few days, followed by gradual convalescence at home with organised follow-up consultations.',
    risques: [
      'Risks inherent to any abdominal surgery, reduced by minimally invasive techniques',
      'Temporary transit disturbances during the first few days',
      'Careful monitoring of the post-operative course by the care team',
    ],
  },
  {
    slug: 'cholecystectomie',
    title: 'Cholecystectomy (gallbladder removal)',
    shortTitle: 'Cholecystectomy',
    description: 'Laparoscopic removal of the gallbladder, the reference treatment for symptomatic gallstones.',
    fullDescription: `Cholecystectomy is the removal of the gallbladder, a small reservoir located under the liver that stores bile. It is indicated mainly in cases of gallstones causing pain (biliary colic), inflammation of the gallbladder (cholecystitis) or complications of gallstones.

The procedure is nowadays performed laparoscopically in the vast majority of cases: through small incisions, the surgeon introduces a camera and fine instruments to detach and remove the gallbladder. This minimally invasive technique ensures an uncomplicated recovery, limited pain and a quick return to normal activities.

Living without a gallbladder is completely normal: bile, produced by the liver, continues to flow directly into the intestine to support digestion. Most patients notice no lasting change in their diet.

At Clinique Pasteur Tunis, laparoscopic cholecystectomy is a fully mastered procedure, performed in operating theatres equipped with high-definition laparoscopy systems, often as part of a short hospital stay.`,
    image: '/images/fiches/gen-cholecystectomie.webp',
    indications: [
      { label: 'Gallstones causing repeated attacks of biliary colic', explication: `Intense pain under the right ribs, often occurring after meals, points to the presence of gallstones: removing the gallbladder puts a definitive end to these attacks.` },
      { label: 'Acute cholecystitis (inflammation of the gallbladder)', explication: `When the gallbladder becomes infected or inflamed because of gallstones, its removal becomes necessary, sometimes urgently, to prevent complications.` },
      { label: 'Complications of gallstones (stone migration, biliary pancreatitis)', explication: `A stone that migrates into the bile ducts can cause jaundice or inflammation of the pancreas: removing the gallbladder prevents recurrences.` },
      { label: 'Gallbladder polyps requiring removal', explication: `Certain growths on the gallbladder wall, because of their size or their evolution, justify removing the gallbladder as a precaution.` },
    ],
    preparation: [
      'Abdominal ultrasound confirming the diagnosis',
      'Blood tests including liver function tests',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Small abdominal incisions for the camera and instruments',
      'Careful dissection and precise identification of the biliary structures',
      'Detachment and extraction of the gallbladder',
      'Final check and closure of the incisions',
    ],
    duree: '45 minutes to 1 hour 30 minutes',
    resultats: 'Discharge generally takes place after 24 to 48 hours. Pain is moderate and well controlled, eating resumes quickly and daily activities are recovered within a few days, with a return to work in one to two weeks depending on the occupation.',
    risques: [
      'Temporary abdominal and shoulder pain related to laparoscopy',
      'Rare conversion to open surgery, decided solely for the patient\'s safety',
      'Possible mild and temporary digestive disturbances for a few weeks',
    ],
  },
  {
    slug: 'appendicectomie',
    title: 'Appendicectomy',
    shortTitle: 'Appendicectomy',
    description: 'Removal of the appendix in cases of appendicitis, most often performed laparoscopically, including as an emergency.',
    fullDescription: `Appendicectomy is the removal of the appendix, a small extension of the colon located in the lower right part of the abdomen. It is indicated in cases of acute appendicitis, that is, inflammation of the appendix — one of the most frequent surgical emergencies, typically presenting with abdominal pain, fever and nausea.

The procedure is most often performed laparoscopically: three small incisions are enough to introduce the camera and instruments, locate the appendix, detach it and remove it. This minimally invasive approach allows complete exploration of the abdomen, an uncomplicated recovery and discreet scars.

Treated in time, appendicitis heals without after-effects, and the absence of the appendix has no consequences for digestion or health. Prompt treatment is the key factor in avoiding complications.

At Clinique Pasteur Tunis, appendicectomy is available at any hour thanks to the permanently open emergency department and operating theatres available day and night, for adults and children alike.`,
    image: '/images/fiches/gen-appendicectomie.webp',
    indications: [
      { label: 'Acute appendicitis confirmed by clinical examination and imaging', explication: `Pain in the lower right abdomen, fever and nausea point to appendicitis: once the diagnosis is confirmed, prompt removal of the appendix allows a full recovery without after-effects.` },
      { label: 'Suspected appendicitis with suggestive clinical signs', explication: `When the signs are highly suggestive, it is sometimes safer to operate without delay: laparoscopy makes it possible to confirm the diagnosis and treat it at the same time.` },
      { label: 'Complicated appendicitis (abscess, localised peritonitis)', explication: `If the infection has spread around the appendix, the operation carefully cleans the area in addition to removing the appendix, with appropriate monitoring.` },
      { label: 'Documented recurrent pain in the right iliac fossa', explication: `Pain that keeps returning on the right side of the lower abdomen, once investigated and documented, may lead to removal of the appendix to resolve the problem for good.` },
    ],
    preparation: [
      'Clinical examination, blood tests and imaging (ultrasound or CT scan)',
      'Fasting from the moment the diagnosis is suspected',
      'Assessment by the anaesthetist before the procedure',
      'Antibiotic therapy started according to protocol if necessary',
    ],
    deroulement: [
      'General anaesthesia',
      'Three small incisions for laparoscopy',
      'Exploration of the abdominal cavity',
      'Detachment and extraction of the appendix',
      'Local washing if necessary and closure of the incisions',
    ],
    duree: '30 minutes to 1 hour',
    resultats: 'Recovery is generally straightforward: eating resumes quickly, discharge takes place after 24 to 48 hours in uncomplicated cases and normal activities are resumed within one to two weeks. Complicated cases require slightly longer monitoring.',
    risques: [
      'Moderate post-operative pain, well controlled with painkillers',
      'Infrequent wound infection, monitored during follow-up',
      'Slightly longer recovery in cases of complicated appendicitis, supervised by the team',
    ],
  },
  {
    slug: 'cure-hernie',
    title: 'Hernia repair (inguinal, umbilical, hiatal)',
    shortTitle: 'Hernia repair',
    description: 'Surgical repair of hernias of the abdominal wall and oesophageal hiatus, using minimally invasive or conventional techniques.',
    fullDescription: `A hernia is the passage of part of the abdominal contents through a weak point in the wall. The most frequent are the inguinal hernia, in the groin, and the umbilical hernia, at the navel. A hiatal hernia, for its part, is the passage of part of the stomach into the chest through the diaphragm, often responsible for reflux.

Hernia repair consists of returning the herniated contents to their place and solidly repairing the wall, most often by reinforcing it with a perfectly tolerated prosthetic mesh. For a hiatal hernia, the procedure repositions the stomach in the abdomen and rebuilds an effective anti-reflux mechanism.

These procedures are performed laparoscopically whenever possible, with an uncomplicated recovery: limited pain, a short hospital stay and a quick return to normal activities. The technique is chosen according to the type of hernia, its size and the patient\'s profile.

At Clinique Pasteur Tunis, hernia repairs are performed by experienced surgeons, as a short hospital stay in most cases, with personalised instructions for resuming activity provided at discharge.`,
    image: '/images/fiches/gen-cure-hernie.webp',
    indications: [
      { label: 'Bothersome or enlarging inguinal hernia', explication: `A lump in the groin that grows or becomes bothersome during exertion deserves to be repaired: the procedure is simple and recovery is quick.` },
      { label: 'Symptomatic umbilical or midline hernia', explication: `When a hernia of the navel or of the midline of the abdomen becomes painful or unsightly, surgical repair resolves the problem durably.` },
      { label: 'Hiatal hernia with reflux resistant to medical treatment', explication: `If part of the stomach rises into the chest and causes reflux that medication no longer controls, the procedure repositions the stomach and rebuilds an anti-reflux barrier.` },
      { label: 'Incisional hernia on a scar from previous surgery', explication: `An old abdominal scar can stretch and let the abdominal contents through: the wall is then repaired and reinforced with a prosthetic mesh.` },
      { label: 'Prevention of the risk of hernia strangulation', explication: `Operating on a hernia electively, before it suddenly becomes trapped, avoids emergency surgery and guarantees a smoother recovery.` },
    ],
    preparation: [
      'Clinical examination and imaging if necessary',
      'Pre-operative blood tests',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Stopping smoking recommended to promote healing',
    ],
    deroulement: [
      'General or regional anaesthesia depending on the case',
      'Laparoscopic approach or direct incision depending on the chosen technique',
      'Return of the herniated contents to their place',
      'Repair of the wall, reinforced with a prosthetic mesh if indicated',
      'Closure of the incisions',
    ],
    duree: '45 minutes to 2 hours depending on the type of hernia',
    resultats: 'Discharge takes place the same day or the next day in most cases. Walking resumes immediately, daily activities within a few days and physical exertion gradually according to the surgeon\'s instructions. Mesh repair offers strong and lasting results.',
    risques: [
      'Temporary pain and swelling of the operated area',
      'Possible small haematoma or seroma, resolving spontaneously',
      'Infrequent recurrence thanks to prosthetic reinforcement techniques',
    ],
  },
  {
    slug: 'chirurgie-foie-voies-biliaires',
    title: 'Liver and bile duct surgery',
    shortTitle: 'Hepatobiliary surgery',
    description: 'Specialised surgery for tumours and diseases of the liver and bile ducts, performed by a team expert in major surgery.',
    fullDescription: `Liver and bile duct surgery, known as hepatobiliary surgery, treats tumours of the liver, benign or malignant, liver cysts, as well as diseases of the ducts that carry bile from the liver to the intestine: stones in the main bile duct, strictures or tumours of the bile ducts.

The liver has a remarkable capacity for regeneration that allows the surgeon to remove part of it when necessary: this is liver resection, the extent of which is carefully planned using modern imaging. The remaining liver volume gradually takes over in the following weeks.

This demanding surgery requires a team experienced in major surgery, specific equipment and a secure environment with intensive care available. The strategy is defined for each patient after a complete work-up and a multidisciplinary discussion for tumour-related conditions.

At Clinique Pasteur Tunis, hepatobiliary surgery benefits from operating theatres equipped with the latest technologies, advanced intra-operative monitoring and a multipurpose intensive care unit ensuring close monitoring of the post-operative course.`,
    image: '/images/fiches/gen-chirurgie-foie-voies-biliaires.webp',
    indications: [
      { label: 'Benign or malignant liver tumours amenable to resection', explication: `Thanks to its unique capacity for regeneration, the liver tolerates removal of its diseased part: the remaining volume gradually takes over.` },
      { label: 'Operable liver metastases', explication: `When a cancer from another organ has spread to the liver in a limited way, removing these lesions can be part of a treatment strategy with curative intent.` },
      { label: 'Large or symptomatic liver cysts', explication: `A liver cyst that grows, compresses neighbouring organs or causes pain can be treated surgically, with a generally uncomplicated recovery.` },
      { label: 'Stones in the main bile duct', explication: `Stones lodged in the duct that carries bile to the intestine can cause jaundice and infections: their extraction restores normal flow.` },
      { label: 'Strictures or tumours of the bile ducts', explication: `When the bile duct narrows or is the site of a tumour, specialised surgery restores the passage of bile to the intestine.` },
    ],
    preparation: [
      'Complete liver imaging (CT scan, MRI) to plan the resection',
      'In-depth blood tests including liver function and coagulation',
      'Multidisciplinary team review of the case for tumour-related conditions',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia with advanced monitoring',
      'Appropriate surgical approach, laparoscopic when possible',
      'Exploration and precise identification of the vascular and biliary structures',
      'Resection of the diseased area with maximum preservation of healthy liver',
      'Rigorous control of haemostasis and biliary sealing',
      'Closure and transfer to an appropriate monitoring unit',
    ],
    duree: '3 to 6 hours depending on the extent of the resection',
    resultats: 'Initial monitoring takes place in a specialised unit, then the hospital stay continues for a few days on the ward. The remaining liver gradually regenerates over the following weeks. Regular follow-up with imaging and blood tests is organised after discharge.',
    risques: [
      'Specialised surgery whose risks are controlled by an expert team and a secure environment',
      'Temporary fatigue during the liver regeneration phase',
      'Regular biological monitoring during convalescence',
    ],
  },
  {
    slug: 'chirurgie-pancreas',
    title: 'Pancreatic surgery',
    shortTitle: 'Pancreatic surgery',
    description: 'Surgical management of tumours and diseases of the pancreas, a highly specialised field of digestive surgery.',
    fullDescription: `The pancreas is a deep-seated gland of the abdomen that plays a dual essential role: it produces enzymes indispensable for digestion and hormones, including insulin, which regulate blood sugar. Its surgery is one of the most specialised fields of digestive surgery.

Operations on the pancreas mainly concern tumours, benign or malignant, cysts and pseudocysts, as well as certain forms of chronic pancreatitis. Depending on the location of the lesion, the surgeon may remove the head of the pancreas, its left part (distal pancreatectomy) or, more rarely, perform other conservative procedures.

This surgery requires meticulous planning based on high-precision imaging, a team well versed in major surgery and a secure post-operative environment. Each case is studied in depth, with multidisciplinary consultation when a tumour-related condition is involved.

At Clinique Pasteur Tunis, pancreatic surgery is performed by surgeons experienced in major digestive surgery, with advanced intra-operative monitoring and a multipurpose intensive care unit ensuring attentive surveillance during the first days.`,
    image: '/images/fiches/gen-chirurgie-pancreas.webp',
    indications: [
      { label: 'Operable pancreatic tumours', explication: `When the work-up confirms that a pancreatic tumour can be removed, surgery represents the best chance of treatment, performed by a highly specialised team.` },
      { label: 'Cystic tumours requiring removal', explication: `Certain cystic lesions of the pancreas carry a risk of progression: removing them as a precaution prevents them from transforming over time.` },
      { label: 'Complicated pseudocysts after pancreatitis', explication: `After inflammation of the pancreas, pockets of fluid can persist and become bothersome or infected: surgery treats them when necessary.` },
      { label: 'Certain forms of painful chronic pancreatitis', explication: `When chronic inflammation of the pancreas causes pain resistant to treatment, an appropriate surgical procedure can bring lasting relief.` },
      { label: 'Endocrine tumours of the pancreas', explication: `These particular tumours, which can secrete excess hormones, are removed by surgery that is often conservative, tailored to their size and location.` },
    ],
    preparation: [
      'High-precision pancreatic imaging (CT scan, MRI, endoscopic ultrasound)',
      'Complete blood tests including nutritional assessment',
      'Multidisciplinary review of the case for tumour-related conditions',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Optimisation of nutritional status if necessary before the operation',
    ],
    deroulement: [
      'General anaesthesia with complete monitoring',
      'Abdominal exploration and confirmation of the operative strategy',
      'Removal of the diseased part of the pancreas',
      'Digestive reconstructions adapted to the procedure performed',
      'Placement of monitoring drains',
      'Transfer to a close monitoring unit',
    ],
    duree: '3 to 6 hours depending on the procedure',
    resultats: 'Recovery requires attentive monitoring for several days, with a gradual return to eating. Convalescence extends over several weeks, accompanied by regular nutritional and medical follow-up. Some patients receive specific support for digestion or blood sugar balance.',
    risques: [
      'Major surgery whose post-operative course is closely monitored by the team',
      'Possible temporary delay in the return to eating',
      'Digestive and blood sugar follow-up organised after the procedure',
    ],
  },
  {
    slug: 'resections-coliques',
    title: 'Colonic resections',
    shortTitle: 'Colonic resections',
    description: 'Surgical removal of a diseased segment of the colon with restoration of digestive continuity, most often performed laparoscopically.',
    fullDescription: `Colonic resection consists of removing the portion of the colon affected by disease, then joining the two healthy ends to restore the continuity of the digestive circuit. Depending on the location of the lesion, the procedure involves the right colon, the left colon, the sigmoid or the rectum.

The main indications are colorectal tumours, complicated or recurrent diverticulitis and certain inflammatory bowel diseases. For tumour-related conditions, the resection also removes the lymphatic drainage territories according to strict oncological rules, and each case is discussed in multidisciplinary consultation.

Laparoscopy is nowadays the preferred approach: it allows precise surgery through small incisions, with a more comfortable recovery. Combined with enhanced recovery after surgery (ERAS) protocols, it allows early refeeding and mobilisation.

At Clinique Pasteur Tunis, colonic resections are performed by surgeons well versed in major digestive surgery and laparoscopy, in operating theatres equipped with high-definition systems, with attentive support throughout the hospital stay.`,
    image: '/images/fiches/gen-resections-coliques.webp',
    indications: [
      { label: 'Tumours of the colon or rectum', explication: `Removal of the segment of colon bearing the tumour, together with its drainage territories, is the reference treatment, with results all the better when the lesion is discovered early.` },
      { label: 'Complicated or recurrent sigmoid diverticulitis', explication: `When flare-ups of diverticular infection recur or become complicated, removing the weakened segment of colon protects the patient from further attacks.` },
      { label: 'Inflammatory bowel diseases resistant to treatment', explication: `If medication no longer controls the inflammation, removing the most affected portion markedly improves quality of life.` },
      { label: 'Large polyps that cannot be removed endoscopically', explication: `Some polyps are too large or too extensive to be removed during a colonoscopy: surgical resection of the affected segment then becomes necessary.` },
      { label: 'Certain colonic emergencies (perforation, obstruction)', explication: `A perforation or complete blockage of the colon requires surgery without delay: the teams are organised to operate at any hour.` },
    ],
    preparation: [
      'Colonoscopy and imaging pinpointing the location of the lesion',
      'Complete pre-operative blood tests',
      'Anaesthesia consultation',
      'Bowel preparation according to the department\'s protocol',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Laparoscopic approach preferred',
      'Mobilisation and removal of the diseased colonic segment',
      'Restoration of digestive continuity by anastomosis',
      'Verification of the seal and closure',
      'Application of the enhanced recovery protocol from wake-up',
    ],
    duree: '2 to 4 hours',
    resultats: 'Eating and walking resume early thanks to ERAS protocols. The hospital stay generally lasts a few days, and bowel transit gradually returns to its usual rhythm within a few weeks. Follow-up tailored to the initial condition is then organised.',
    risques: [
      'Anastomotic risks closely monitored during the first days',
      'Temporary disturbances of intestinal transit',
      'Infrequent infectious complications, prevented by rigorous protocols',
    ],
  },
  {
    slug: 'duodeno-pancreatectomie-cephalique',
    title: 'Pancreaticoduodenectomy (Whipple procedure)',
    shortTitle: 'Whipple procedure',
    description: 'The reference operation for tumours of the head of the pancreas and the peri-ampullary region, the pinnacle of digestive surgery.',
    fullDescription: `Pancreaticoduodenectomy, or the Whipple procedure, is the reference operation for treating tumours of the head of the pancreas and of the neighbouring region: the lower part of the bile duct, the ampulla of Vater and the duodenum. It consists of removing, in a single block, the head of the pancreas, the duodenum, the gallbladder and the lower part of the bile duct.

After this removal, the surgeon reconstructs the digestive circuit by joining the remaining pancreas, the bile duct and the stomach to the intestine. This meticulous reconstruction phase determines the quality of the post-operative course and is carried out with the utmost care.

The Whipple procedure is considered one of the most complex operations in digestive surgery. It requires a highly experienced team, specialised anaesthesia, advanced intra-operative monitoring and post-operative surveillance in an intensive care unit. Each indication is validated after an exhaustive work-up and a multidisciplinary discussion.

Clinique Pasteur Tunis is among the institutions with the expertise and technical facilities required for this exceptional surgery: surgeons well versed in major digestive surgery, a multipurpose intensive care unit and personalised support for the patient and their family at every stage.`,
    image: '/images/fiches/gen-duodeno-pancreatectomie-cephalique.webp',
    indications: [
      { label: 'Operable tumours of the head of the pancreas', explication: `When the work-up confirms that the tumour can be completely removed, the Whipple procedure offers the best treatment prospect, carried out by a team well versed in this surgery.` },
      { label: 'Tumours of the ampulla of Vater', explication: `This small area where the bile and pancreatic ducts join the intestine can be the site of tumours, often revealed by jaundice and amenable to this operation.` },
      { label: 'Tumours of the lower part of the bile duct', explication: `Tumours located at the end of the bile duct, near the pancreas, are treated by the same operation, which removes the entire affected region in a single block.` },
      { label: 'Tumours of the duodenum', explication: `As the duodenum is intimately connected to the head of the pancreas, its tumours require this same en-bloc removal to be treated under good conditions.` },
      { label: 'Certain cystic or precancerous lesions of the head of the pancreas', explication: `Removing an at-risk lesion before it transforms makes it possible to act preventively, at the most favourable moment for the patient.` },
    ],
    preparation: [
      'Exhaustive imaging work-up (CT scan, MRI, endoscopic ultrasound) to confirm operability',
      'Complete blood tests and nutritional assessment',
      'Prior biliary drainage if necessary',
      'Multidisciplinary team review of the case',
      'In-depth anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia with advanced monitoring',
      'Abdominal exploration confirming the feasibility of the removal',
      'En-bloc removal of the head of the pancreas, the duodenum and the lower bile duct',
      'Triple digestive reconstruction (pancreatic, biliary and gastric)',
      'Placement of monitoring drains',
      'Transfer to intensive care for close monitoring',
    ],
    duree: '5 to 7 hours',
    resultats: 'Recovery takes place first in intensive care and then on the ward, with a very gradual return to eating over several days. Full convalescence takes several weeks, accompanied by close nutritional and medical follow-up. The quality of life regained after recovery is generally good.',
    risques: [
      'Major operation whose post-operative course is closely supervised in intensive care and then on the ward',
      'Possible temporary delay in gastric emptying, correcting itself over time',
      'Long-term digestive and nutritional support organised',
    ],
  },
  {
    slug: 'chirurgie-surrenales',
    title: 'Adrenal gland surgery',
    shortTitle: 'Adrenal gland surgery',
    description: 'Removal of tumours of the adrenal glands, most often laparoscopically, in close coordination with the endocrinologist.',
    fullDescription: `The adrenal glands are two small glands located above the kidneys, which produce hormones essential to the regulation of blood pressure, metabolism and the stress response. Certain tumours of these glands, whether secreting (producing excess hormones) or not, require surgical removal: this is adrenalectomy.

Secreting tumours can cause resistant high blood pressure, weight fluctuations, unusual fatigue or metabolic disturbances. Their removal most often durably corrects these hormonal disorders.

The procedure is nowadays performed laparoscopically in the great majority of cases: this minimally invasive approach is particularly suited to these deep-seated glands, offering optimal precision, reduced pain and rapid recovery. Pre-operative medical preparation, carried out with the endocrinologist, is an essential step for secreting tumours.

At Clinique Pasteur Tunis, adrenal surgery is conducted in close collaboration between surgeons, endocrinologists and anaesthetists, with advanced intra-operative monitoring and post-operative surveillance tailored to each patient\'s hormonal profile.`,
    image: '/images/fiches/gen-chirurgie-surrenales.webp',
    indications: [
      { label: 'Adrenal tumours secreting excess hormones', explication: `When a tumour of the gland produces too many hormones, it can disrupt blood pressure, weight or metabolism: its removal most often corrects these disorders durably.` },
      { label: 'Phaeochromocytoma', explication: `This particular tumour releases hormones that cause blood pressure to rise abruptly: after careful medical preparation, its removal eliminates the cause of the problem.` },
      { label: 'Large or suspicious adrenal tumours', explication: `An adrenal mass of significant size or unusual appearance on imaging is removed as a precaution, so that it can be analysed and any risk of progression ruled out.` },
      { label: 'Confirmed high blood pressure of adrenal origin', explication: `Some cases of hard-to-control high blood pressure originate from an adrenal gland: when the work-up confirms it, surgery often makes it possible to reduce, or even stop, treatment.` },
      { label: 'Progressive adrenal nodules discovered on imaging', explication: `A nodule discovered by chance that grows over successive check-ups justifies removal, a procedure nowadays performed gently by laparoscopy.` },
    ],
    preparation: [
      'Complete hormonal work-up carried out with the endocrinologist',
      'Adrenal imaging (CT scan or MRI)',
      'Specific medication preparation for certain secreting tumours',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia with continuous blood pressure monitoring',
      'Laparoscopic approach through small incisions',
      'Careful dissection of the gland with early control of its vessels',
      'Extraction of the gland in a protective bag',
      'Closure of the incisions',
      'Post-operative hormonal and blood pressure monitoring',
    ],
    duree: '1 hour 30 minutes to 3 hours',
    resultats: 'Recovery is quick thanks to laparoscopy: discharge after a few days and return to activities within one to two weeks. Hormonal disorders most often correct themselves gradually. Endocrine follow-up is organised, with possible adjustment of hormone treatment depending on the case.',
    risques: [
      'Intra-operative blood pressure variations anticipated and controlled by the anaesthesia team',
      'Possible need for hormone replacement therapy, assessed by the endocrinologist',
      'Surgical risks limited by the minimally invasive approach',
    ],
  },
  {
    slug: 'chip-chimio-hyperthermie-intraperitoneale',
    title: 'HIPEC (Hyperthermic Intraperitoneal Chemotherapy)',
    shortTitle: 'HIPEC',
    description: 'An innovative treatment combining complete surgery of peritoneal lesions with heated chemotherapy delivered directly into the abdomen.',
    fullDescription: `HIPEC, or Hyperthermic Intraperitoneal Chemotherapy, is an innovative treatment for tumour involvement of the peritoneum, the thin membrane that lines the inside of the abdomen and envelops the digestive organs. It combines two complementary stages within a single operation.

The first stage is surgical: the surgeon removes as completely as possible all visible lesions of the peritoneum, a procedure called cytoreduction. The second stage consists of circulating heated chemotherapy in the abdominal cavity for a set period: the heat enhances the effectiveness of the treatment, which acts in direct contact with the areas to be treated while limiting diffusion to the rest of the body.

This combined approach is intended for selected cases of peritoneal involvement, after an in-depth work-up and validation in a multidisciplinary consultation meeting. It represents one of the most advanced treatments in abdominal oncological surgery and requires a specifically trained team.

At Clinique Pasteur Tunis, HIPEC is performed by a team well versed in major digestive surgery, in a highly secure environment, with post-operative monitoring in intensive care and personalised support for the patient throughout the pathway.`,
    image: '/images/fiches/gen-chip-chimio-hyperthermie-intraperitoneale.webp',
    indications: [
      { label: 'Selected peritoneal involvement of colorectal origin', explication: `When a cancer of the colon or rectum has reached the membrane lining the abdomen, HIPEC can offer, in carefully selected patients, a genuine prospect of treatment.` },
      { label: 'Pseudomyxoma peritonei', explication: `For this rare disease in which a gelatinous substance progressively invades the abdomen, HIPEC is the recognised reference treatment.` },
      { label: 'Certain peritoneal involvement of ovarian or gastric origin', explication: `Extensions to the peritoneum of cancers of the ovary or stomach can, in specific situations, benefit from this combined approach of surgery and heated chemotherapy.` },
      { label: 'Rare tumours of the peritoneum, after multidisciplinary validation', explication: `Each rare situation is studied collectively by the specialists involved before HIPEC is proposed, to guarantee that the treatment will bring a real benefit.` },
    ],
    preparation: [
      'Complete imaging work-up assessing the extent of peritoneal involvement',
      'Validation of the indication in a multidisciplinary consultation meeting',
      'Nutritional assessment and optimisation of general condition',
      'In-depth anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia with advanced monitoring',
      'Complete exploration of the abdominal cavity',
      'Cytoreduction: removal of all visible peritoneal lesions',
      'Circulation of heated chemotherapy in the abdomen for the duration set by protocol',
      'Rinsing, final checks and closure',
      'Transfer to intensive care for close monitoring',
    ],
    duree: '6 to 10 hours depending on the extent of the lesions',
    resultats: 'Recovery takes place first in intensive care, then on the ward with a very gradual return to eating. Convalescence extends over several weeks, with nutritional support and regular oncological follow-up. In the selected indications, this treatment offers significantly improved prospects.',
    risques: [
      'Long, specialised operation, reserved for carefully selected indications',
      'Post-operative course closely monitored in intensive care',
      'Prolonged fatigue requiring supported convalescence',
    ],
  },
];
