export const servicesUrgences = [
  {
    slug: 'accueil-tri-urgences',
    title: 'Emergency reception and triage',
    shortTitle: 'Reception and triage',
    image: '/images/fiches/urg-accueil-tri-urgences.webp',
    description: 'As the first link in the chain of care, the emergency reception immediately assesses every patient in order to direct the most serious cases first.',
    fullDescription: `Upon arrival at the emergency department, each patient is welcomed by a dedicated team that records the reason for the visit, the essential medical history and the vital signs. This initial assessment, known as triage, determines the degree of urgency of each situation and directs the patient to the most appropriate care pathway.

Triage is carried out by nursing staff trained in emergency assessment, under the supervision of the emergency physician. Life-threatening situations are identified immediately and treated without delay, while less urgent cases are settled comfortably while awaiting their consultation.

This system ensures that medical severity, not the order of arrival, determines the priority of care. Families are kept regularly informed of their loved one's progress in order to reduce the anxiety associated with waiting.

At Clinique Pasteur Tunis, the emergency reception operates 24 hours a day, 7 days a week, with direct access from the Centre Urbain Nord and an immediate connection to the imaging facilities, the operating theatres and the intensive care units.`,
    indications: [
      { label: 'Any medical or surgical situation felt to be urgent', explication: `When in doubt, it is always better to come in: the reception team assesses each situation and directs you to the most appropriate care pathway.` },
      { label: 'Unexplained acute pain (chest, abdominal, sudden headache)', explication: `Sudden, unusual pain may reveal a serious problem: it is assessed upon arrival so it can be relieved and investigated without delay.` },
      { label: 'Recent trauma (fall, accident, wound)', explication: `After a fall or an accident, the team checks for hidden injuries and provides the necessary care, such as suturing or immobilization.` },
      { label: 'Malaise, high fever or deterioration of the general condition', explication: `Malaise or a poorly tolerated fever warrants rapid assessment, especially in vulnerable individuals, in order to identify its cause.` },
      { label: 'Referral after calling the emergency department', explication: `If you called the clinic before coming, your arrival is anticipated and your care is organized as soon as you enter.` },
    ],
    deroulement: [
      'Simplified administrative registration upon arrival',
      'Immediate nursing assessment: reason for visit, vital signs, pain',
      'Classification of the level of urgency according to severity',
      'Referral to the appropriate pathway (medical, surgical, pediatric, obstetric-gynecological)',
      'Placement in a treatment room and care by the emergency physician',
      'Regular updates for the patient and their companions',
    ],
    duree: 'Initial triage is completed within a few minutes of arrival',
    resultats: 'Following triage, the patient is directed to the care pathway best suited to their condition. Serious situations receive immediate care, without waiting.',
  },
  {
    slug: 'urgences-medicales',
    title: 'Medical emergencies (cardiac, neurological, respiratory)',
    shortTitle: 'Medical emergencies',
    image: '/images/fiches/urg-urgences-medicales.webp',
    description: 'Immediate management of cardiac, neurological and respiratory emergencies, with direct access to the clinic\'s technical facilities.',
    fullDescription: `Medical emergencies encompass all acute non-surgical situations requiring rapid care: chest pain, suspected heart attack, stroke, respiratory distress, severe asthma attack, malaise, diabetic imbalance or serious infection.

The team of emergency physicians relies on immediate access to the essential investigations: electrocardiogram, imaging (CT scan, radiology, ultrasound) and laboratory samples taken on site with results delivered continuously. This responsiveness is decisive in conditions where every minute counts, particularly cardiac and neurological emergencies.

When necessary, the patient is transferred without delay to the cardiac catheterization room, the cardiac intensive care unit or the intensive care unit, located in the same building. The clinic's cardiologists, neurologists and intensive care physicians can be mobilized at any time.

At Clinique Pasteur Tunis, this integrated organization enables complete management of medical emergencies, from initial diagnosis to specialized treatment, in a secure environment available 24 hours a day.`,
    indications: [
      { label: 'Chest pain or suspected cardiac event', explication: `Chest pain may be a sign of a heart problem: an electrocardiogram and a workup are performed immediately in order to act quickly.` },
      { label: 'Signs of stroke (weakness on one side of the body, speech difficulty)', explication: `When these signs appear, every minute counts: brain imaging is performed urgently to confirm the diagnosis and start treatment as early as possible.` },
      { label: 'Acute breathing difficulty, severe asthma attack', explication: `When breathing becomes difficult, the patient quickly receives oxygen and the appropriate treatments, under continuous monitoring.` },
      { label: 'Malaise, loss of consciousness, palpitations', explication: `These symptoms may have a cardiac, neurological or metabolic origin: a complete workup identifies the cause.` },
      { label: 'High fever with deterioration of the general condition', explication: `Fever accompanied by extreme fatigue or chills may indicate a serious infection requiring treatment without delay.` },
      { label: 'Decompensation of a chronic disease (diabetes, heart failure)', explication: `When a known condition suddenly becomes unbalanced, the team stabilizes the situation and adjusts the treatment in coordination with the patient's usual doctor.` },
    ],
    deroulement: [
      'Priority triage upon arrival for signs of severity',
      'Placement in a treatment room with monitoring of vital signs',
      'Medical examination by the emergency physician and an electrocardiogram if necessary',
      'On-site laboratory samples and emergency imaging depending on the clinical picture',
      'Initiation of the appropriate treatment (oxygen, IV infusion, emergency medications)',
      'Specialist opinion (cardiologist, neurologist, intensive care physician) if the situation requires it',
      'Disposition: return home with instructions, hospitalization or intensive care',
    ],
    resultats: 'Depending on the diagnosis, the patient may return home with treatment and monitoring instructions, or be admitted to the appropriate department to continue care.',
  },
  {
    slug: 'urgences-chirurgicales',
    title: 'Surgical emergencies (trauma, digestive surgery)',
    shortTitle: 'Surgical emergencies',
    image: '/images/fiches/urg-urgences-chirurgicales.webp',
    description: 'Management of trauma and abdominal emergencies with direct access to the clinic\'s operating theatres, 24 hours a day.',
    fullDescription: `Surgical emergencies involve situations requiring rapid surgical assessment, or even emergency surgery: fractures and dislocations, deep wounds, acute abdominal pain suggesting appendicitis, intestinal obstruction, cholecystitis or a strangulated hernia.

The emergency department works in direct collaboration with the clinic's general surgery, orthopedic surgery and anesthesia teams. After the emergency physician's initial assessment, the on-call surgeon examines the patient and decides on the course of action: medical treatment, observation or surgery.

Emergency imaging (radiology, CT scan, ultrasound) and laboratory tests performed on site allow the diagnosis to be confirmed rapidly. When an operation is necessary, the patient is prepared and taken to the operating theatre, located in the same building, as quickly as possible.

At Clinique Pasteur Tunis, this continuity between the emergency department, imaging and the operating theatres ensures complete and safe surgical care, day and night.`,
    indications: [
      { label: 'Trauma with suspected fracture or dislocation', explication: `After an impact or a fall, an X-ray is used to check the bone and the joint, followed by immobilization or surgery if necessary.` },
      { label: 'Wound requiring exploration or suturing', explication: `A deep wound is cleaned and examined to make sure no important structure is affected, before being closed under proper conditions.` },
      { label: 'Acute abdominal pain (suspected appendicitis, cholecystitis, obstruction)', explication: `Some abdominal pain requires prompt surgical assessment: examination and imaging help decide whether surgery is needed.` },
      { label: 'Painful or irreducible hernia', explication: `A hernia that becomes painful and can no longer be pushed back into place may become strangulated: it is an emergency that must be examined without delay.` },
      { label: 'Abdominal or chest trauma', explication: `A blow to the abdomen or the chest can cause invisible internal injuries: monitoring and imaging are essential.` },
    ],
    deroulement: [
      'Initial assessment by the emergency physician and pain control',
      'Appropriate emergency imaging (X-ray, ultrasound, CT scan)',
      'On-site laboratory samples if necessary',
      'Opinion of the on-call surgeon and treatment decision',
      'Immobilization, suturing or medical treatment depending on the case',
      'If surgery is required: preparation, emergency anesthesia consultation and transfer to the operating theatre',
    ],
    resultats: 'Depending on the severity, the patient is treated in the emergency department and then returns home, or is hospitalized for observation or surgery. Post-operative care is provided in the clinic\'s inpatient units.',
  },
  {
    slug: 'urgences-gyneco-obstetriques',
    title: 'Obstetric and gynecological emergencies',
    shortTitle: 'Obstetric and gynecological emergencies',
    image: '/images/fiches/urg-urgences-gyneco-obstetriques.webp',
    description: 'Management of pregnancy and women\'s health emergencies, in direct connection with the clinic\'s maternity unit and cesarean section room.',
    fullDescription: `Obstetric and gynecological emergencies cover all acute situations related to pregnancy and women's health: contractions and the onset of labor, bleeding, decreased fetal movements, acute pelvic pain, suspected ectopic pregnancy or gynecological complications.

Upon arrival, the patient is directed to the obstetric-gynecological pathway. The clinic's obstetric team, available 24 hours a day, performs the clinical examination, fetal monitoring and ultrasound needed to assess the condition of both mother and baby.

The clinic's maternity unit, with its delivery rooms adjacent to a cesarean section room, allows immediate care when birth is imminent or when an emergency cesarean is required. The anesthesia and pediatric teams can be mobilized at any time to ensure the safety of the mother and the newborn.

At Clinique Pasteur Tunis, the continuity between the emergency department, the maternity unit and the operating theatre offers expectant mothers a safe and reassuring environment, at any time of day or night.`,
    indications: [
      { label: 'Regular contractions or waters breaking', explication: `These signs often announce the start of labor: the expectant mother is cared for directly by the maternity team.` },
      { label: 'Bleeding during pregnancy', explication: `Any bleeding during pregnancy must be assessed promptly to make sure both mother and baby are doing well.` },
      { label: 'Decreased fetal movements', explication: `If the baby is moving less than usual, monitoring and an ultrasound check its well-being and reassure the mother.` },
      { label: 'Acute pelvic or abdominal pain in women', explication: `Sudden lower abdominal pain may have a gynecological origin requiring an examination and an ultrasound without delay.` },
      { label: 'Suspected ectopic pregnancy', explication: `A pregnancy developing outside the uterus is an emergency: early diagnosis allows rapid and safe management.` },
      { label: 'Post-operative complications in gynecology', explication: `After gynecological surgery, any unusual sign such as pain, fever or bleeding is assessed by a team familiar with this type of surgery.` },
    ],
    deroulement: [
      'Immediate referral to the obstetric-gynecological pathway from triage',
      'Clinical examination by the obstetric team',
      'Fetal monitoring and ultrasound depending on the situation',
      'On-site laboratory samples if necessary',
      'Appropriate decision: observation, hospitalization, delivery or emergency cesarean section',
      'Continuous updates for the patient and her companion',
    ],
    resultats: 'Depending on the assessment, the patient may return home with monitoring instructions, be admitted to the maternity unit, or receive immediate care for a delivery or an intervention.',
  },
  {
    slug: 'urgences-pediatriques',
    title: 'Pediatric emergencies',
    shortTitle: 'Pediatric emergencies',
    image: '/images/fiches/urg-urgences-pediatriques.webp',
    description: 'Reception and management of children\'s emergencies in a child-friendly environment, with teams experienced in pediatrics.',
    fullDescription: `Children's emergencies require a specific approach: an age-appropriate examination, specific treatment doses and constant attention to the child's comfort and to keeping parents informed. The clinic's emergency department cares for infants, children and adolescents for all acute conditions.

The most frequent situations involve fever, breathing difficulties, gastroenteritis with a risk of dehydration, trauma and falls, abdominal pain and allergic reactions. Every child benefits from a rapid severity assessment, with priority given to the youngest and to worrying presentations.

The presence of a parent alongside the child is facilitated throughout the care process. Imaging and laboratory samples are performed on site, using age-appropriate techniques, and the opinion of the pediatrician or the pediatric surgeon is sought whenever necessary.

At Clinique Pasteur Tunis, pediatric emergencies rely on the expertise of the clinic's pediatricians, pediatric surgeons and anesthesiologists, providing reassuring care for children and their families, 24 hours a day.`,
    indications: [
      { label: 'Poorly tolerated fever, particularly in infants', explication: `In very young children, a poorly tolerated fever must be assessed rapidly to find its cause and relieve the child.` },
      { label: 'Breathing difficulties, cough with discomfort, asthma attack', explication: `When a child has difficulty breathing, prompt care, with nebulizers and oxygen if needed, provides relief under monitoring.` },
      { label: 'Vomiting and diarrhea with signs of dehydration', explication: `Children become dehydrated quickly: the team assesses the situation and rehydrates the child, orally or by IV infusion if necessary.` },
      { label: 'Trauma, fall or wound', explication: `After a fall or an impact, the child is examined using age-appropriate techniques to rule out any injury and provide the necessary care.` },
      { label: 'Acute abdominal pain', explication: `Severe stomach pain in a child can have many causes, sometimes surgical: a careful examination helps distinguish between them.` },
      { label: 'Allergic reaction or worrying rash', explication: `Sudden spots or swelling are examined promptly, as some allergic reactions require immediate treatment.` },
    ],
    deroulement: [
      'Priority triage adapted to the child\'s age',
      'Placement with the parent in a treatment room',
      'Examination by the physician, with child-appropriate measurements',
      'Additional tests if necessary (imaging, on-site laboratory samples)',
      'Appropriate treatment: antipyretics, rehydration, nebulizers, wound care',
      'Pediatric or pediatric surgical opinion depending on the situation',
      'Detailed monitoring instructions given to the parents at discharge',
    ],
    resultats: 'Most children return home after treatment, with clear monitoring instructions. When needed, the child is hospitalized and followed by the clinic\'s pediatric team.',
  },
  {
    slug: 'reanimation-urgence',
    title: 'Emergency resuscitation',
    shortTitle: 'Emergency resuscitation',
    image: '/images/fiches/urg-reanimation-urgence.webp',
    description: 'Immediate management of life-threatening conditions by a trained team, with direct transfer to the clinic\'s intensive care units.',
    fullDescription: `Emergency resuscitation covers situations in which the patient's life is at risk: cardiac arrest, major respiratory distress, shock, coma, multiple trauma or severe hemorrhage. These situations require immediate action, specific equipment and a perfectly coordinated team.

The emergency department has a dedicated area equipped for the management of life-threatening conditions: full monitoring, ventilation and intubation equipment, defibrillator, emergency medications and IV fluids. The team of emergency physicians and nurses is trained in resuscitation procedures and works in immediate coordination with the clinic's intensive care physicians.

Once the patient's condition has been stabilized, they are transferred to the most appropriate unit: general intensive care, cardiac intensive care or the cardiac care unit, all located in the same building. This continuity avoids any loss of time in critical situations.

At Clinique Pasteur Tunis, the chain of survival is thus maintained without interruption, from arrival at the emergency department to intensive care, 24 hours a day, 7 days a week.`,
    indications: [
      { label: 'Cardiac arrest or serious rhythm disorder', explication: `When the heart stops or beats dangerously, the trained team immediately begins resuscitation procedures, including defibrillation if needed.` },
      { label: 'Severe acute respiratory distress', explication: `When the lungs can no longer provide sufficient oxygenation, respiratory support is put in place without delay.` },
      { label: 'Shock (cardiac, septic, hemorrhagic, allergic)', explication: `Shock corresponds to a severe failure of the blood circulation: IV fluids and emergency medications are administered immediately to restore it.` },
      { label: 'Coma or severe impairment of consciousness', explication: `An unconscious person is protected, monitored and urgently investigated to identify the cause and treat it.` },
      { label: 'Multiple trauma or major hemorrhage', explication: `After a serious accident or significant blood loss, the patient is stabilized in the resuscitation room before being directed to the operating theatre or intensive care.` },
    ],
    deroulement: [
      'Direct admission to the resuscitation room, bypassing the standard circuit',
      'Immediate setup of full monitoring (heart, blood pressure, oxygen)',
      'Resuscitation procedures as required: oxygenation, ventilation, cardiac massage, defibrillation',
      'Placement of IV lines and administration of emergency medications',
      'Bedside diagnostic tests (ultrasound, electrocardiogram, on-site laboratory samples)',
      'Stabilization then transfer to intensive care or the operating theatre depending on the diagnosis',
    ],
    resultats: 'After stabilization, the patient is admitted to the intensive care or critical care unit best suited to their condition, where treatment continues under continuous monitoring. Families are kept regularly informed by the medical team.',
  },
  {
    slug: 'imagerie-urgence',
    title: 'Emergency imaging (CT scan, radiology)',
    shortTitle: 'Emergency imaging',
    image: '/images/fiches/urg-imagerie-urgence.webp',
    description: 'CT scan, radiology and ultrasound available around the clock for rapid diagnosis of urgent conditions.',
    fullDescription: `Imaging is an essential link in emergency care: it quickly confirms or rules out a diagnosis and guides treatment. The clinic's emergency department benefits from direct, priority access to the radiology center, located on the same level, on the ground floor.

The imaging facilities available for emergencies include CT scanning, conventional radiology and ultrasound. These examinations cover the vast majority of urgent needs: trauma and fractures, abdominal pain, suspected stroke, pulmonary or urinary conditions.

The examinations are performed by experienced technicians and interpreted by the clinic's radiologists, in direct coordination with the emergency physician. Results are communicated rapidly to the care team, allowing treatment decisions to be made without delay.

At Clinique Pasteur Tunis, the immediate proximity between the emergency department and the radiology center ensures a smooth pathway: the patient is escorted from one department to the other within moments, at any time of day or night.`,
    indications: [
      { label: 'Trauma: looking for fractures or internal injuries', explication: `An X-ray or a CT scan quickly shows whether a bone is broken or an organ has been injured during an impact.` },
      { label: 'Acute abdominal pain', explication: `Abdominal ultrasound or CT scan helps identify the cause of the pain and decide on the treatment, medical or surgical.` },
      { label: 'Suspected stroke', explication: `A brain CT scan, performed with absolute priority, confirms a stroke and helps choose the most appropriate treatment without losing time.` },
      { label: 'Chest pain or breathing difficulty', explication: `Chest imaging looks for a pulmonary or cardiac cause of the pain or the shortness of breath.` },
      { label: 'Suspected renal colic', explication: `This severe pain, often linked to a urinary stone, is confirmed by imaging, which specifies the size and position of the stone.` },
      { label: 'Sudden or unusual headaches', explication: `A sudden, unusual headache warrants a brain CT scan to rule out a serious cause.` },
    ],
    deroulement: [
      'Examination prescribed by the emergency physician',
      'Patient escorted to the radiology center, on the same level as the emergency department',
      'Performance of the appropriate examination (X-ray, CT scan, ultrasound)',
      'Interpretation by the radiologist in coordination with the emergency physician',
      'Rapid transmission of the results to the care team',
    ],
    duree: 'From a few minutes for an X-ray to about 30 minutes for a CT scan with preparation',
    resultats: 'The results are communicated rapidly to the emergency physician, who explains them to the patient and adapts the care accordingly: treatment, observation, hospitalization or intervention.',
    risques: [
      'Examinations using X-rays are performed in accordance with radiation protection rules, with appropriate doses',
      'If a contrast agent is injected, the team first checks for allergies and kidney function',
      'Ultrasound is completely painless and radiation-free',
    ],
  },
  {
    slug: 'biologie-urgence',
    title: 'Emergency laboratory tests',
    shortTitle: 'Emergency laboratory tests',
    image: '/images/fiches/urg-biologie-urgence.webp',
    description: 'Samples taken on site in the emergency department, with analyses performed continuously on site for rapid results.',
    fullDescription: `Laboratory tests are essential for diagnosing many emergencies: cardiac workup for chest pain, screening for infection, assessment of kidney function, blood workup before surgery or monitoring of anticoagulant treatment.

In the clinic's emergency department, blood and urine samples are taken on site by the nursing team as soon as the physician prescribes them. Analyses are performed continuously on site, day and night, allowing the results needed for medical decision-making to be obtained rapidly.

The most common emergency tests include the complete blood count, electrolyte panel, cardiac markers, coagulation workup, blood glucose, kidney and liver panels as well as urine tests. Results are transmitted directly to the emergency physician, who interprets them according to the clinical picture.

At Clinique Pasteur Tunis, this organization integrates laboratory testing into the emergency pathway without moving the patient: samples are taken in the treatment room and the results reach the care team as quickly as possible, 24 hours a day.`,
    indications: [
      { label: 'Chest pain: measurement of cardiac markers', explication: `A simple blood test can detect substances released into the blood when the heart is under strain, and quickly guide the diagnosis.` },
      { label: 'Fever or suspected infection', explication: `Blood and urine tests help confirm an infection, assess its severity and choose the right treatment.` },
      { label: 'Workup before emergency surgery', explication: `Before emergency surgery, a blood workup checks coagulation in particular so that the operation can proceed in complete safety.` },
      { label: 'Assessment of malaise, dehydration or diabetic imbalance', explication: `The blood workup measures sugar, electrolytes and kidney function to understand the cause of the malaise and correct the imbalance.` },
      { label: 'Monitoring of anticoagulant treatment', explication: `In patients on blood thinners, a test checks that the treatment is properly dosed, neither too strong nor insufficient.` },
      { label: 'Abdominal pain: liver, pancreatic and kidney panels', explication: `The tests help determine whether the liver, the pancreas or the kidneys are the source of the pain, complementing imaging.` },
    ],
    deroulement: [
      'Tests prescribed by the emergency physician',
      'Blood or urine sample taken on site, in the treatment room',
      'Immediate transport of the samples for on-site analysis',
      'Continuous processing of the analyses, at any hour',
      'Results transmitted to the emergency physician as soon as they are validated',
    ],
    duree: 'The results of urgent tests are generally available within about 1 hour',
    resultats: 'The results are interpreted by the emergency physician in light of the clinical examination and imaging, in order to establish the diagnosis and adjust the treatment without delay.',
    risques: [
      'Blood sampling is a simple, routine procedure performed with sterile single-use equipment',
      'A small bruise may sometimes appear at the puncture site and disappears spontaneously within a few days',
    ],
  },
];
