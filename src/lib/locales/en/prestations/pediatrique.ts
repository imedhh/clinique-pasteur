export const prestationsPediatrique = [
  {
    slug: 'hernie-inguinale-enfant',
    title: 'Paediatric inguinal hernia surgery',
    shortTitle: 'Inguinal hernia',
    description: 'Surgical repair of inguinal hernia in children, a common and well-standardised procedure, most often performed as day surgery.',
    fullDescription: `An inguinal hernia in a child occurs when part of the abdominal contents passes through a natural opening in the groin that has remained open. It presents as an intermittent swelling, more visible when the child cries or strains. Unlike in adults, it does not heal on its own and requires surgical correction.

The procedure consists of closing the canal that has remained open, through a short, discreet incision in the groin crease, or by laparoscopy in some cases. It is one of the most frequently performed procedures in paediatric surgery, and recovery is generally very straightforward.

At Clinique Pasteur Tunis, care is provided by paediatric surgeons and anaesthetists experienced with children, in a reassuring environment where parents are welcome to stay close before and after the procedure. Discharge usually takes place the same day.`,
    image: '/images/fiches/pediat-hernie-inguinale-enfant.webp',
    indications: [
      { label: 'Intermittent groin swelling noticed in an infant or child', explication: `A small lump appearing in the groin crease, especially when the child cries or strains, is the most common sign of a hernia.` },
      { label: 'Inguinal hernia confirmed by the paediatric surgeon\'s clinical examination', explication: `In children, a hernia does not go away on its own: once confirmed by the surgeon, a minor procedure corrects it permanently.` },
      { label: 'Prevention of the risk of hernia strangulation', explication: `Operating on the hernia prevents part of the intestine from becoming trapped in it, a painful situation that would require emergency surgery.` },
      { label: 'Hernia that is painful or increasing in size', explication: `When the hernia becomes tender or grows larger, it is best to correct it without delay, for the child\'s comfort and safety.` },
      { label: 'Persistent communicating hydrocele', explication: `This small fluid-filled swelling of the scrotum, linked to the same canal that has remained open, is corrected by the same simple procedure.` },
    ],
    preparation: [
      'Paediatric surgery consultation to confirm the indication',
      'Paediatric anaesthesia consultation a few days before the procedure',
      'Pre-operative work-up tailored to the child\'s age if necessary',
      'Fasting according to the anaesthetist\'s instructions (duration adapted to age)',
      'Report any recent episode of fever or infection',
    ],
    deroulement: [
      'Welcome of the child and parents on the day of the procedure',
      'General anaesthesia adapted to the child\'s age, often combined with regional anaesthesia for post-operative comfort',
      'Short, discreet incision in the groin crease (or laparoscopic approach depending on the case)',
      'Closure of the patent processus vaginalis',
      'Closure with absorbable sutures, with no stitches to remove',
      'Monitoring in the recovery room, then return to the parents',
    ],
    duree: '30 to 45 minutes',
    resultats: 'Recovery is usually very straightforward: the child most often goes home the same day and quickly resumes normal activities. Moderate pain, well controlled by the prescribed painkillers, may persist for a few days. A follow-up consultation checks that healing is progressing well.',
    risques: [
      'Small haematoma or temporary swelling of the operated area',
      'Wound infection, rare and easily treated',
      'Recurrence, exceptional and monitored during follow-up',
    ],
  },
  {
    slug: 'appendicectomie-pediatrique',
    title: 'Paediatric appendicectomy',
    shortTitle: 'Appendicectomy',
    description: 'Removal of the appendix in children with appendicitis, most often performed by laparoscopy for a rapid recovery.',
    fullDescription: `Acute appendicitis is one of the most frequent surgical emergencies in children. It corresponds to inflammation of the appendix, a small segment located at the beginning of the large intestine, and typically presents with abdominal pain, fever and loss of appetite.

Treatment consists of surgical removal of the appendix. In children, the procedure is most often performed by laparoscopy, through very small incisions, which limits post-operative pain and allows a rapid return to normal activities. A short conventional incision remains possible depending on the situation.

At Clinique Pasteur Tunis, appendicitis in children is managed without delay, from arrival at the emergency department to the operating theatre, by a paediatric surgery and anaesthesia team. The hospital stay is short and parents are involved at every step.`,
    image: '/images/fiches/pediat-appendicectomie-pediatrique.webp',
    indications: [
      { label: 'Acute appendicitis confirmed by clinical examination and imaging', explication: `When the appendix is inflamed, it must be removed promptly to avoid complications; the procedure relieves the child within the first few hours.` },
      { label: 'Right lower abdominal pain with fever in a child', explication: `Pain in the lower right side of the abdomen accompanied by fever raises the suspicion of appendicitis and warrants a consultation without delay.` },
      { label: 'Complicated appendicitis (abscess, peritonitis) requiring urgent treatment', explication: `When the infection has spread within the abdomen, urgent surgery combined with antibiotic treatment brings about recovery.` },
      { label: 'Persistent diagnostic uncertainty justifying laparoscopic exploration', explication: `When tests cannot settle the diagnosis, a camera exploration through small incisions confirms the diagnosis and treats the problem at the same time.` },
    ],
    preparation: [
      'Assessment in the emergency department: clinical examination, blood tests and abdominal ultrasound',
      'Fasting from the moment the diagnosis is suspected',
      'Intravenous fluids and antibiotic treatment started before the procedure if necessary',
      'Anaesthesia consultation carried out as an emergency',
    ],
    deroulement: [
      'General anaesthesia adapted to the child\'s age',
      'Introduction of a camera and fine instruments through small incisions',
      'Exploration of the abdominal cavity and confirmation of the diagnosis',
      'Removal of the appendix and washing of the cavity if needed',
      'Closure of the incisions with absorbable sutures',
      'Monitoring in the recovery room, then a short hospital stay',
    ],
    duree: '45 minutes to 1 hour 30 depending on severity',
    resultats: 'After a straightforward appendicectomy, the child resumes eating quickly and generally goes home within 24 to 48 hours. In cases of complicated appendicitis, the hospital stay is slightly longer to continue antibiotic treatment. Return to school usually takes place within a few days.',
    risques: [
      'Wound infection, uncommon and easily treated',
      'Residual intra-abdominal abscess in cases of complicated appendicitis, monitored and treated if needed',
      'Temporary abdominal pain related to laparoscopy',
    ],
  },
  {
    slug: 'malformations-congenitales',
    title: 'Surgery for congenital malformations',
    shortTitle: 'Congenital malformations',
    description: 'Surgical correction of malformations present at birth, with care tailored to each child, from newborn to adolescent.',
    fullDescription: `Some malformations present at birth require surgical correction, either immediate or scheduled depending on their nature: abdominal wall anomalies, congenital cysts, malformations of the urinary or digestive tract, anomalies of the external genitalia, among others.

Each situation is unique: the ideal timing of the procedure, the technique used and the follow-up are defined case by case, in consultation with the parents and, as needed, with the paediatrician and other relevant specialists. The goal is always to correct the anomaly at the best moment in the child's development, using the least invasive procedure possible.

At Clinique Pasteur Tunis, surgery for congenital malformations benefits from a complete environment: experienced paediatric surgeons, dedicated paediatric anaesthesia, on-site imaging and appropriate monitoring units. Parents are supported at every step of the journey, from the first consultation to post-operative follow-up.`,
    image: '/images/fiches/pediat-malformations-congenitales.webp',
    indications: [
      { label: 'Malformation detected before birth or identified at birth', explication: `Thanks to screening, the procedure can be prepared calmly with the parents and scheduled at the best moment for the child.` },
      { label: 'Abdominal wall anomaly (persistent umbilical hernia, other anomalies)', explication: `A navel hernia that persists, or another anomaly of the abdominal wall, is corrected by a simple procedure with a generally easy recovery.` },
      { label: 'Congenital cysts and masses of the neck, chest or abdomen', explication: `Some small masses present from birth are best removed to prevent them from growing or becoming infected.` },
      { label: 'Malformations of the urinary or genital tract', explication: `Correcting these anomalies at the right time protects kidney function and supports the child\'s harmonious development.` },
      { label: 'Digestive anomalies requiring scheduled correction', explication: `Some anomalies of the digestive tract are corrected by a planned procedure, at the most favourable moment in the child\'s development.` },
    ],
    preparation: [
      'Complete assessment of the malformation: clinical examination and appropriate imaging',
      'Coordination between paediatric surgeon, paediatrician and anaesthetist',
      'Paediatric anaesthesia consultation before the procedure',
      'Detailed information for parents about the planned procedure and expected recovery',
      'Pre-operative fasting according to age-appropriate instructions',
    ],
    deroulement: [
      'Welcome of the child and parents in the department',
      'General anaesthesia adapted to the child\'s age and weight',
      'Surgical correction of the malformation using the chosen technique',
      'Close monitoring in the recovery room',
      'Hospital stay of variable length depending on the type of procedure',
      'Follow-up consultations to check the good result as the child grows',
    ],
    duree: 'Variable depending on the malformation, from 1 to several hours',
    resultats: 'Recovery depends on the type of malformation corrected. In the majority of cases, the child quickly returns to a normal life. Regular follow-up in consultation ensures a good result as the child grows and provides long-term support for the family.',
    risques: [
      'Risks specific to each type of malformation, explained in detail during the consultation',
      'Infection or delayed healing, rare and easily treated',
      'Possible need for an additional procedure during growth',
    ],
  },
  {
    slug: 'urologie-pediatrique',
    title: 'Paediatric urological surgery (hypospadias, cryptorchidism)',
    shortTitle: 'Paediatric urology',
    description: 'Surgical management of urological anomalies in children, in particular hypospadias and undescended testicle (cryptorchidism).',
    fullDescription: `Paediatric urological surgery corrects anomalies of the urinary tract and genital organs in children. The two most frequent reasons for surgery are hypospadias, an abnormal position of the urinary opening in boys, and cryptorchidism, when the testicle has not descended spontaneously into the scrotum.

These procedures are scheduled at the best age for the child, generally during the first years of life, in order to obtain an optimal functional and aesthetic result while preserving later development. The techniques used are fine and meticulous, with discreet scars.

At Clinique Pasteur Tunis, these procedures are performed by paediatric surgeons highly experienced in children's urological surgery, with dedicated paediatric anaesthesia. Most procedures involve a short hospital stay, and the team guides parents through the simple care to be continued at home.`,
    image: '/images/fiches/pediat-urologie-pediatrique.webp',
    indications: [
      { label: 'Hypospadias: urinary opening in an abnormal position in boys', explication: `When the urinary opening is not in its usual place, delicate surgery reconstructs it for a natural result, both for urination and in appearance.` },
      { label: 'Cryptorchidism: testicle not descended beyond the usual age of spontaneous descent', explication: `When the testicle has not descended on its own into the scrotum, the procedure gently repositions it in order to protect its future function.` },
      { label: 'Retractile or ectopic testicle requiring fixation', explication: `A testicle that keeps moving up or remains in an abnormal position can be secured in the right place by a simple procedure.` },
      { label: 'Foreskin anomalies resistant to medical treatment', explication: `When creams have not been enough to loosen a foreskin that is too tight, an appropriate surgical procedure resolves the problem for good.` },
      { label: 'Certain urinary tract anomalies detected by ultrasound', explication: `Some anomalies discovered on ultrasound are corrected before they can interfere with proper kidney function.` },
    ],
    preparation: [
      'Specialist consultation to define the anomaly and the ideal timing of the procedure',
      'Ultrasound or other imaging if necessary',
      'Paediatric anaesthesia consultation',
      'Pre-operative fasting according to age-appropriate instructions',
      'Bath or careful washing the day before the procedure',
    ],
    deroulement: [
      'General anaesthesia, often combined with regional anaesthesia to limit pain on waking',
      'Surgical correction of the anomaly using fine techniques adapted to the child',
      'For hypospadias: reconstruction of the urinary channel, sometimes with a small temporary catheter',
      'For cryptorchidism: bringing down and fixing the testicle in the scrotum',
      'Protective dressing and monitoring in the recovery room',
      'Discharge the same day or after one night of observation depending on the procedure',
    ],
    duree: '45 minutes to 2 hours depending on the procedure',
    resultats: 'Functional and aesthetic results are generally very satisfactory. Post-operative care is simple and explained to parents before discharge. Follow-up in consultation checks healing and then proper development as the child grows.',
    risques: [
      'Temporary swelling or haematoma of the operated area',
      'Local infection, rare and easily treated',
      'For hypospadias: possible need for a surgical touch-up, discussed during follow-up',
    ],
  },
  {
    slug: 'circoncision',
    title: 'Circumcision',
    shortTitle: 'Circumcision',
    description: 'Circumcision performed in the operating theatre under optimal surgical conditions of safety, hygiene and comfort for the child.',
    fullDescription: `Circumcision consists of removing the foreskin, the skin covering the tip of the penis. Whether performed for medical reasons or at the family's request, it deserves the same safety standards as any surgical procedure: a sterile environment, appropriate anaesthesia and rigorous pain control.

Performed in the operating theatre, circumcision takes place under anaesthesia adapted to the child's age, supplemented by local anaesthesia that ensures a comfortable recovery on waking. The procedure is brief and recovery is usually very straightforward, with healing within a few days.

At Clinique Pasteur Tunis, circumcision is performed by experienced surgeons in a safe and reassuring setting. The child goes home the same day, and parents receive clear instructions for local care and follow-up.`,
    image: '/images/fiches/pediat-circoncision.webp',
    indications: [
      { label: 'Ritual or family-requested circumcision performed in a safe medical setting', explication: `Performing circumcision in the operating theatre guarantees sterile conditions, appropriate anaesthesia and good pain control, for the family\'s peace of mind.` },
      { label: 'Tight phimosis resistant to medical treatment', explication: `When the foreskin remains too narrow despite treatment, circumcision provides a definitive and comfortable solution.` },
      { label: 'Recurrent local infections (balanitis)', explication: `Local infections that keep coming back can be prevented for good thanks to this simple procedure.` },
      { label: 'Paraphimosis or functional discomfort related to the foreskin', explication: `When the foreskin gets stuck or bothers the child in daily life, circumcision permanently eliminates the problem.` },
    ],
    preparation: [
      'Pre-operative consultation with the surgeon',
      'Paediatric anaesthesia consultation',
      'Fasting according to instructions adapted to the child\'s age',
      'Careful washing on the day of the procedure',
    ],
    deroulement: [
      'Welcome of the child and parents in the day hospital',
      'Anaesthesia adapted to the child\'s age, supplemented by local anaesthesia',
      'Brief surgical procedure under sterile conditions',
      'Simple protective dressing',
      'Monitoring in the recovery room, then return to the parents',
      'Discharge the same day with care instructions',
    ],
    duree: '20 to 30 minutes',
    resultats: 'Healing is usually achieved within a few days. Slight swelling and local tenderness are normal at first and fade quickly with the prescribed care. A follow-up consultation checks that healing is progressing well.',
    risques: [
      'Minor bleeding or temporary swelling',
      'Local infection, rare with appropriate care',
      'Scar appearance exceptionally requiring a touch-up',
    ],
  },
  {
    slug: 'malformations-digestives',
    title: 'Surgery for digestive malformations',
    shortTitle: 'Digestive malformations',
    description: 'Surgical correction of congenital anomalies of the digestive tract in children, with care coordinated between surgeons, paediatricians and anaesthetists.',
    fullDescription: `Digestive malformations include congenital anomalies affecting the oesophagus, stomach, intestine or anal region. Some are detected before birth or in the first days of life, while others become apparent later through persistent digestive problems.

Their surgical management is carefully planned: the timing of the procedure, the technique and the nutritional follow-up are adapted to each child. Depending on the case, the correction may be performed by open surgery or by laparoscopy, in order to limit surgical trauma.

At Clinique Pasteur Tunis, these procedures rely on a multidisciplinary team — paediatric surgeons, paediatricians, anaesthetists and nursing staff — and on monitoring units adapted to the youngest patients. Parents are closely involved in the care plan and in their child's follow-up.`,
    image: '/images/fiches/pediat-malformations-digestives.webp',
    indications: [
      { label: 'Digestive malformation detected in the prenatal or neonatal period', explication: `Detected before birth or in the first days of life, the anomaly is managed according to a schedule carefully adapted to each baby.` },
      { label: 'Hypertrophic pyloric stenosis in infants', explication: `When the outlet of the infant\'s stomach is too narrow and causes repeated vomiting, a short procedure restores the normal passage of food.` },
      { label: 'Anorectal malformations', explication: `These anomalies of the anal region are corrected surgically to allow the child normal bowel function and peaceful development.` },
      { label: 'Intestinal rotation anomalies', explication: `When the intestine did not position itself normally during pregnancy, the procedure puts it back in place and prevents complications.` },
      { label: 'Persistent digestive problems revealing a congenital anomaly', explication: `Vomiting, blockages or lasting bowel problems may reveal an anomaly present from birth, which a procedure can correct.` },
    ],
    preparation: [
      'Complete diagnostic work-up: imaging and tests appropriate to the child\'s age',
      'Multidisciplinary discussion to define the surgical strategy',
      'Optimisation of the child\'s nutritional and fluid status before the procedure',
      'Paediatric anaesthesia consultation',
      'Detailed information for parents about the procedure and recovery',
    ],
    deroulement: [
      'General anaesthesia adapted to age and weight',
      'Correction of the malformation by open surgery or laparoscopy depending on the case',
      'Restoration of digestive continuity when necessary',
      'Close post-operative monitoring, adapted to newborns and infants',
      'Gradual, supervised resumption of feeding',
      'Regular follow-up of growth and bowel function after discharge',
    ],
    duree: 'Variable depending on the malformation, from 1 to several hours',
    resultats: 'Most children operated on for a digestive malformation regain normal feeding and bowel function, with harmonious growth. Follow-up in consultation, sometimes extended, provides long-term support for the child and family.',
    risques: [
      'Risks specific to each malformation, explained precisely to the parents',
      'Temporary digestive problems during the recovery period',
      'Possible need for additional scheduled procedures',
    ],
  },
  {
    slug: 'cardiopathies-congenitales',
    title: 'Surgery for congenital heart disease',
    shortTitle: 'Congenital heart disease',
    description: 'Surgical management of heart malformations in children, within a complete cardiovascular facility with a dedicated intensive care unit.',
    fullDescription: `Congenital heart diseases are malformations of the heart present from birth: abnormal communications between the heart chambers, anomalies of the valves or of the great vessels. Many of them can now be corrected surgically with excellent results, allowing the child to lead a normal life.

The decision to operate is made in close consultation between paediatric cardiologists, cardiac surgeons and anaesthetists, after a complete cardiac work-up. The timing of the procedure is chosen according to the type of malformation and the child's development.

At Clinique Pasteur Tunis, surgery for congenital heart disease benefits from a complete cardiovascular facility: an operating theatre equipped for cardiac surgery, an intensive care unit dedicated to post-cardiac-surgery care and a cardiac intensive care unit. The child and family are supported at every step of this demanding journey.`,
    image: '/images/fiches/pediat-cardiopathies-congenitales.webp',
    indications: [
      { label: 'Atrial or ventricular septal defect requiring closure', explication: `When a small opening creates an abnormal communication between the heart chambers and tires the child, its surgical closure allows normal development.` },
      { label: 'Patent ductus arteriosus', explication: `This small vessel, useful during pregnancy, should normally close after birth; if it remains open, a procedure closes it.` },
      { label: 'Heart valve anomalies in children', explication: `When a heart valve is not working properly, its repair helps the heart work efficiently and the child grow peacefully.` },
      { label: 'Malformations of the great vessels', explication: `Some anomalies of the large arteries leaving the heart are corrected surgically to restore normal blood circulation.` },
      { label: 'Complex heart diseases requiring scheduled surgical correction', explication: `Malformations combining several anomalies are corrected through carefully planned surgery by the medical-surgical team, at the best moment for the child.` },
    ],
    preparation: [
      'Complete cardiac work-up: echocardiography and additional tests',
      'Medical-surgical discussion to define the correction strategy',
      'Specialist anaesthesia consultation',
      'Complete pre-operative work-up and verification that no infection is ongoing',
      'Detailed information for parents about the procedure, intensive care and recovery',
    ],
    deroulement: [
      'General anaesthesia by a team highly experienced in cardiac surgery',
      'Correction of the malformation using the technique suited to the diagnosis',
      'Continuous monitoring of cardiac and respiratory parameters throughout the procedure',
      'Transfer to the intensive care unit dedicated to post-cardiac-surgery care',
      'Gradual awakening and close monitoring during the first days',
      'Transfer to a hospital room, then preparation for the return home',
    ],
    duree: 'Several hours depending on the complexity of the heart disease',
    resultats: 'In the vast majority of cases, surgical correction brings a lasting improvement in heart function and normal development of the child. Regular cardiac follow-up is organised after the procedure to support the child as they grow.',
    risques: [
      'Risks inherent to any cardiac surgery, assessed and explained case by case',
      'Temporary rhythm disturbances in the post-operative period',
      'Pericardial or pleural effusion, monitored and treated if necessary',
      'Possible need for an additional procedure during growth',
    ],
  },
  {
    slug: 'orl-pediatrique',
    title: 'Paediatric ENT surgery',
    shortTitle: 'Paediatric ENT',
    description: 'ENT procedures for children: tonsils, adenoids, insertion of ventilation tubes (grommets) and other common procedures, most often as day surgery.',
    fullDescription: `Paediatric ENT surgery treats common conditions of the nose, throat and ears in children: recurrent throat infections, enlarged tonsils or adenoids interfering with breathing and sleep, and persistent glue ear affecting hearing.

The most frequent procedures are removal of the adenoids (adenoidectomy), removal of the tonsils (tonsillectomy) and insertion of ventilation tubes (grommets) to drain glue ear. These brief procedures, performed under general anaesthesia, clearly improve the child's breathing comfort, sleep and hearing.

At Clinique Pasteur Tunis, these procedures involve a short hospital stay, most often as day surgery, performed by ENT surgeons experienced with children and a paediatric anaesthesia team. Parents receive simple instructions for monitoring and feeding during the first days.`,
    image: '/images/fiches/pediat-orl-pediatrique.webp',
    indications: [
      { label: 'Recurrent throat infections despite well-conducted medical treatment', explication: `When throat infections keep coming back despite treatment, removing the tonsils puts an end to this exhausting cycle for the child and family.` },
      { label: 'Enlarged tonsils or adenoids interfering with breathing at night', explication: `Oversized tonsils or adenoids obstruct breathing, especially at night; their removal restores free breathing.` },
      { label: 'Snoring with pauses in breathing during sleep', explication: `A child who snores loudly and seems to stop breathing during sleep deserves an ENT opinion: the procedure clearly improves sleep quality.` },
      { label: 'Persistent glue ear with hearing loss', explication: `Fluid trapped behind the eardrum muffles sounds; inserting small ventilation tubes drains it and restores hearing.` },
      { label: 'Recurrent acute middle ear infections', explication: `When ear infections follow one another, ventilation tubes help space out the infections and protect the child\'s ear.` },
    ],
    preparation: [
      'ENT consultation to confirm the indication for surgery',
      'Hearing assessment if necessary',
      'Paediatric anaesthesia consultation',
      'Pre-operative fasting according to age-appropriate instructions',
      'Report any recent infection, which may postpone the procedure',
    ],
    deroulement: [
      'Welcome of the child and parents in the day hospital',
      'Brief general anaesthesia adapted to the child\'s age',
      'Procedure performed through the natural passages, with no visible scar',
      'Monitoring in the recovery room',
      'Light snack and check that eating has resumed properly',
      'Discharge the same day in most cases, with monitoring instructions',
    ],
    duree: '20 to 45 minutes depending on the procedure',
    resultats: 'Improvement is generally rapid: calmer breathing at night, fewer infections and recovery of hearing after grommet insertion. An adapted diet is recommended for a few days after a tonsillectomy. A follow-up consultation checks that recovery is progressing well.',
    risques: [
      'Temporary sore throat after tonsillectomy, relieved by painkillers',
      'Minor post-operative bleeding requiring prompt medical advice, rare',
      'Natural extrusion of the grommets over time, sometimes followed by reinsertion',
    ],
  },
  {
    slug: 'traumatologie-pediatrique',
    title: 'Paediatric trauma surgery',
    shortTitle: 'Trauma surgery',
    description: 'Management of fractures and injuries in children, using techniques adapted to growing bone, with direct access to the emergency department and imaging.',
    fullDescription: `Falls and accidents during play or sport are common in children, and the resulting fractures have their own particular features: growing bone has a strong capacity for healing and self-correction, but certain fractures affecting the growth plates require special attention.

Treatment ranges from a simple cast to surgery when the fracture is displaced or unstable. The surgical techniques used in children are specific: hardware adapted to the size of the bone, systematic protection of the growth plates and procedures that are as minimally invasive as possible.

At Clinique Pasteur Tunis, the injured child is received in the emergency department and treated without delay: on-site imaging, prompt surgical opinion and, if necessary, surgery in the operating theatre by a team experienced in paediatric trauma. Follow-up in consultation supports bone healing and the gradual return to activities.`,
    image: '/images/fiches/pediat-traumatologie-pediatrique.webp',
    indications: [
      { label: 'Displaced or unstable limb fracture', explication: `When the bone fragments have moved apart, a procedure puts them back in the right position to allow perfect healing.` },
      { label: 'Fracture involving a growth plate requiring specialist assessment', explication: `The bone\'s growth plates are precious: a fracture affecting them requires specialist treatment and careful follow-up until growth is complete.` },
      { label: 'Injury to a child\'s elbow, wrist or ankle', explication: `These joints are often affected in falls; treatment adapted to children ensures a good recovery.` },
      { label: 'Deep wounds or soft-tissue injuries requiring exploration', explication: `Some injuries must be explored and repaired in the operating theatre for optimal healing without lasting effects.` },
      { label: 'Fracture that cannot be reduced by simple manipulation', explication: `When the fracture cannot be put back in place by a simple external manoeuvre, a surgical procedure adapted to growing bone is performed.` },
    ],
    preparation: [
      'Assessment in the emergency department: clinical examination and X-rays',
      'Temporary pain-relieving immobilisation and pain treatment',
      'Fasting if surgery is being considered',
      'Anaesthesia consultation carried out as an emergency if necessary',
    ],
    deroulement: [
      'General or regional anaesthesia adapted to the child\'s age',
      'Reduction of the fracture under X-ray guidance',
      'Fixation if necessary with hardware adapted to children (pins, flexible nails)',
      'Immobilisation with a cast or splint depending on the fracture',
      'Monitoring in the recovery room, then a short hospital stay',
      'Regular X-ray checks until the bone has healed',
    ],
    duree: '30 minutes to 2 hours depending on the injury',
    resultats: 'Children\'s bones heal quickly and the results are generally excellent. Any hardware inserted is most often removed through a simple procedure once healing is complete. Return to sport is gradual, following the surgeon\'s advice.',
    risques: [
      'Secondary displacement under the cast, detected by X-ray checks',
      'Temporary joint stiffness after immobilisation',
      'Growth disturbance, rare, in fractures involving the growth plate, warranting extended follow-up',
    ],
  },
];
