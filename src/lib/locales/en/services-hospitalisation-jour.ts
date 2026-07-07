export const servicesHospitalisationJour = [
  {
    slug: 'chirurgie-ambulatoire',
    title: 'Outpatient surgery',
    shortTitle: 'Outpatient surgery',
    image: '/images/fiches/hdj-chirurgie-ambulatoire.webp',
    description: 'Surgical procedures completed within the day: the patient is admitted in the morning and returns home the same evening, in complete safety.',
    fullDescription: `Outpatient surgery makes it possible to perform a surgical procedure with admission in the morning and a return home the same day. This model of care, now an international standard, applies to many procedures: hernias, hand surgery, arthroscopies, minor ENT surgery, gynaecological or urological procedures.

Eligibility for outpatient care is decided jointly by the surgeon and the anaesthetist during the preliminary consultations. It takes into account the type of procedure, the patient's state of health and the conditions for their return home, in particular the presence of an accompanying person.

On the day of the procedure, the patient is welcomed at the day hospital, prepared, operated on in the operating theatre under the same safety conditions as a conventional hospital stay, then monitored in the recovery room and in their room until the doctor approves their discharge.

At Clinique Pasteur Tunis, the day hospital has a dedicated, comfortable and streamlined pathway. The team provides each patient with detailed discharge instructions and remains reachable for any questions after the return home.`,
    indications: [
      { label: 'Inguinal or umbilical hernia repair', explication: `This common procedure repairs the abdominal wall where the hernia has appeared; the patient returns home the same evening.` },
      { label: 'Hand and wrist surgery (carpal tunnel, trigger finger)', explication: `These targeted procedures relieve tingling or locking of the fingers, often under local or regional anaesthesia, with a quick return home.` },
      { label: 'Knee or shoulder arthroscopy', explication: `Using a small camera inserted into the joint, the surgeon treats lesions through very small incisions, which makes recovery easier.` },
      { label: 'Minor ENT surgery and placement of tympanostomy tubes', explication: `Short procedures on the nose, throat or ears, such as the placement of small drains in the eardrum in children, that can be performed within the day.` },
      { label: 'Gynaecological procedures (curettage, hysteroscopy)', explication: `Examinations or treatments of the uterus performed gently under anaesthesia, with discharge the same day.` },
      { label: 'Varicose vein surgery and minor urological surgery', explication: `Treatment of varicose veins or minor urological conditions can be carried out within the day, with a quick return to usual activities.` },
    ],
    preparation: [
      'Prior surgical consultation followed by an anaesthesia consultation',
      'Fast for 6 hours before the procedure (no food or drink, unless instructed otherwise)',
      'Arrange for an accompanying person for the return home',
      'Follow the instructions regarding ongoing treatments (particularly anticoagulants)',
      'Take the pre-operative shower according to the instructions provided',
    ],
    deroulement: [
      'Reception at the day hospital on the morning of the procedure',
      'Administrative and medical checks, settling into the room',
      'Pre-operative preparation and transfer to the operating theatre',
      'Procedure under appropriate anaesthesia (general, regional or local)',
      'Monitoring in the recovery room followed by a return to the room',
      'Light meal, first mobilisation and assessment by the team',
      'Discharge approval by the doctor and handover of instructions',
    ],
    duree: 'Presence at the clinic for a few hours, generally from the morning until early evening',
    resultats: 'The return home takes place the same day, accompanied, with a prescription and precise instructions. A follow-up contact and a post-operative consultation are scheduled to check that recovery is progressing well.',
    risques: [
      'The most common straightforward after-effects are moderate pain and temporary fatigue, controlled by the prescribed treatment',
      'As with any surgery, rare complications are possible; the instructions provided specify the signs that should prompt contacting the clinic',
      'If needed, conventional hospitalisation always remains possible within the clinic',
    ],
  },
  {
    slug: 'endoscopies-digestives',
    title: 'Digestive endoscopies',
    shortTitle: 'Digestive endoscopies',
    image: '/images/fiches/hdj-endoscopies-digestives.webp',
    description: 'Gastroscopies and colonoscopies performed in the day hospital, under sedation, with a return home the same day.',
    fullDescription: `Digestive endoscopies allow the inside of the digestive tract to be examined using a flexible endoscope fitted with a camera. Gastroscopy examines the oesophagus, the stomach and the beginning of the intestine; colonoscopy explores the colon. These examinations serve both diagnosis and treatment: biopsies, polyp removal, treatment of lesions.

Performed as day-hospital procedures, these examinations most often take place under sedation or anaesthesia, for optimal comfort. The patient is admitted in the morning, the examination is carried out in a dedicated endoscopy suite equipped with latest-generation video endoscopes, then a few hours of monitoring precede the return home.

Colonoscopy requires preparation at home, explained in detail during the preliminary consultation: a specific diet in the preceding days and intake of a preparation solution to cleanse the colon, an essential condition for a high-quality examination.

At Clinique Pasteur Tunis, digestive endoscopies are performed by experienced gastroenterologists, with a dedicated anaesthesia team. The day-hospital pathway ensures a simple and comfortable experience, from reception to the delivery of the report.`,
    indications: [
      { label: 'Persistent digestive pain, reflux or heartburn', explication: `Gastroscopy provides a direct view of the oesophagus and stomach to find the cause of pain or burning that persists.` },
      { label: 'Recent bowel habit changes or digestive bleeding', explication: `A lasting change in bowel habits or the presence of blood must be investigated: colonoscopy examines the colon to identify the cause.` },
      { label: 'Unexplained anaemia', explication: `A shortage of red blood cells may stem from subtle digestive bleeding: endoscopy searches for this bleeding in order to treat it.` },
      { label: 'Screening and monitoring of colon polyps', explication: `Polyps are small growths that can change over time: colonoscopy makes it possible to detect and remove them during the same examination.` },
      { label: 'Monitoring of known digestive diseases', explication: `Some diseases of the stomach or intestine require regular endoscopic check-ups to track their progression and adjust treatment.` },
      { label: 'Biopsies and therapeutic procedures (polypectomy, dilation)', explication: `During the same examination, the doctor can take a tissue sample for analysis, remove a polyp or widen a narrowed passage.` },
    ],
    preparation: [
      'Prior consultation with the gastroenterologist and, if sedation is planned, with the anaesthetist',
      'Fast for 6 hours before the examination',
      'For colonoscopy: follow the prescribed diet and take the bowel preparation according to the protocol provided',
      'Report ongoing treatments, particularly anticoagulants and antiplatelet agents',
      'Arrange for an accompanying person for the return home in case of sedation',
    ],
    deroulement: [
      'Reception at the day hospital and settling into the room',
      'Pre-anaesthesia checks and placement of an intravenous line if sedation is planned',
      'Examination carried out in a dedicated endoscopy suite',
      'Biopsies or therapeutic procedures if needed during the same examination',
      'Monitoring in the recovery room and then in the room',
      'Light meal and discussion with the doctor before discharge',
    ],
    duree: '15 to 45 minutes for the examination; about half a day of presence at the clinic',
    resultats: 'A report is provided at discharge with the initial conclusions. The results of any biopsies are communicated during a follow-up consultation and sent to the referring doctor.',
    risques: [
      'Very common examinations, well tolerated under sedation',
      'Bloating or temporary discomfort possible after the examination',
      'Complications are rare and the team takes every precaution to prevent them; therapeutic procedures are the subject of specific information beforehand',
    ],
  },
  {
    slug: 'explorations-cardiaques-ambulatoires',
    title: 'Cardiac investigations',
    shortTitle: 'Cardiac investigations',
    image: '/images/fiches/hdj-explorations-cardiaques-ambulatoires.webp',
    description: 'Cardiology work-ups completed within the day: echocardiography, stress test, Holter monitoring, up to coronary angiography in the day hospital.',
    fullDescription: `Day hospitalisation makes it possible to complete a full cardiology work-up within the day, grouping several examinations into a single visit: electrocardiogram, echocardiography, stress test, Holter monitor placement and, when indicated, invasive investigations such as diagnostic coronary angiography.

This model of care is particularly suited to scheduled work-ups: assessment of chest pain, evaluation before a surgical procedure, follow-up of a known heart condition or a check-up after treatment. The patient benefits from the full technical facilities of the clinic's cardiac investigation centre, without needing to spend a night on site.

For invasive investigations such as coronary angiography, the patient is admitted in the morning after fasting, the examination is performed in the cardiac catheterisation suite, then a few hours of monitoring in the day hospital precede the return home, if the patient's condition allows.

At Clinique Pasteur Tunis, these work-ups are coordinated by the cardiologists of the cardiac investigation centre, in liaison with the day-hospital team. The results are explained to the patient before discharge and forwarded to the referring doctor.`,
    indications: [
      { label: 'Work-up for chest pain or breathlessness on exertion', explication: `Several heart examinations grouped into the same day help understand the cause of unusual pain or breathlessness.` },
      { label: 'Cardiology assessment before a surgical procedure', explication: `Before an operation, this work-up checks that the heart will cope well with the anaesthesia and the planned procedure.` },
      { label: 'Follow-up of known coronary or valvular disease', explication: `People being monitored for a heart condition benefit from regular check-ups grouped into a single visit, without an overnight stay.` },
      { label: 'Check-up after angioplasty or cardiac surgery', explication: `After a stent placement or heart operation, a check-up verifies the good outcome of the treatment and adjusts the follow-up.` },
      { label: 'Work-up for palpitations or fainting episodes', explication: `Recording of the heart rhythm and the associated examinations look for a rhythm disorder causing the symptoms.` },
      { label: 'Scheduled diagnostic coronary angiography', explication: `This examination visualises the arteries that supply the heart to check whether they are narrowed; performed in the morning, it often allows a return home the same day.` },
    ],
    preparation: [
      'Bring prescriptions, reports and previous cardiology examinations',
      'For coronary angiography: fast for 6 hours before the examination',
      'Report ongoing treatments, allergies and any history of kidney problems',
      'Bring comfortable clothing for the stress test',
      'Arrange for an accompanying person in case of an invasive investigation',
    ],
    deroulement: [
      'Reception at the day hospital and settling in',
      'Scheduled examinations carried out along a coordinated pathway',
      'Electrocardiogram and echocardiography at the cardiac investigation centre',
      'Stress test or additional examinations according to the prescription',
      'For coronary angiography: procedure in the catheterisation suite followed by monitoring of the puncture site',
      'Summary of the results by the cardiologist before discharge',
    ],
    duree: 'From 2 hours for a simple work-up to a full day for invasive investigations',
    resultats: 'The cardiologist presents the conclusions of the work-up to the patient before discharge and proposes, where appropriate, the next steps in care. A complete report is provided and sent to the referring doctor.',
    risques: [
      'Non-invasive investigations (ECG, echocardiography, Holter) are harmless and painless',
      'The stress test is performed under continuous medical supervision',
      'Coronary angiography is a well-mastered examination; a bruise at the puncture site is possible and resolves spontaneously',
    ],
  },
  {
    slug: 'chimiotherapie-ambulatoire',
    title: 'Chemotherapy',
    shortTitle: 'Chemotherapy',
    image: '/images/fiches/hdj-chimiotherapie-ambulatoire.webp',
    description: 'Administration of chemotherapy treatments in the day hospital, in a comfortable setting, with a return home the same day.',
    fullDescription: `The clinic's day hospital welcomes patients for the administration of their chemotherapy sessions, according to the protocol established by their oncologist. This model of care allows patients to receive treatment during the day and return home the same evening, preserving their daily life as much as possible.

Each visit begins with an assessment: a discussion with the care team, a check of the patient's general condition and a review of the blood test results, with samples that can be taken on site. The treatment is administered only after medical approval, ensuring that each session takes place under the best safety conditions.

The administration takes place in a calm and comfortable environment, under the continuous supervision of a nursing team trained in oncology. Infusions are prepared according to rigorous protocols and the patient is supported throughout the session: management of side effects, practical advice, support and attentive listening.

At Clinique Pasteur Tunis, day-hospital care is part of a coordinated pathway with the patient's referring oncologist. The team looks after everyone's comfort and remains available between sessions to answer questions.`,
    indications: [
      { label: 'Chemotherapy sessions scheduled as part of an established protocol', explication: `Treatment sessions prescribed by the oncologist take place within the day, according to a precise schedule, without an overnight stay at the clinic.` },
      { label: 'Infusion treatments prescribed by the oncologist', explication: `Medications administered by infusion are prepared and monitored by a team trained in oncology, in a calm and comfortable setting.` },
      { label: 'Targeted therapies and associated supportive treatments', explication: `Modern so-called targeted treatments and the supportive care that accompanies chemotherapy, such as anti-nausea medications, are administered during the same visit.` },
      { label: 'Clinical monitoring following the sessions', explication: `Between or after sessions, a short visit makes it possible to check how well the treatment is being tolerated and to adjust supportive care.` },
    ],
    preparation: [
      'Complete the prescribed blood tests before each session, or have them done on site upon arrival',
      'Take the premedications prescribed by the oncologist',
      'Bring a list of ongoing treatments',
      'Report any new symptom since the last session (fever, pain, digestive problems)',
      'Bring something to pass the time comfortably during the infusion (reading, music)',
    ],
    deroulement: [
      'Reception at the day hospital and settling into a room or armchair',
      'Discussion with the care team and check of vital signs',
      'Review of the blood test results and approval of the session by the doctor',
      'Safe preparation of the treatment',
      'Administration of the infusion under continuous supervision',
      'Monitoring after the end of the treatment, then discharge with instructions',
    ],
    duree: 'From 1 to 2 hours up to a full day depending on the protocol',
    resultats: 'At the end of each session, the patient returns home with personalised instructions and the team\'s contact details. Treatment follow-up and assessment of its effectiveness are handled by the referring oncologist during scheduled consultations.',
    risques: [
      'Possible side effects (fatigue, nausea) are anticipated and mitigated by appropriate preventive treatments',
      'The team closely monitors the infusion to prevent any reaction; the patient should immediately report the slightest discomfort',
      'Precise instructions are provided so patients know when to contact the team between sessions',
    ],
  },
  {
    slug: 'perfusions-traitements-iv',
    title: 'Infusions and IV treatments',
    shortTitle: 'Infusions and IV treatments',
    image: '/images/fiches/hdj-perfusions-traitements-iv.webp',
    description: 'Administration of scheduled intravenous treatments in the day hospital: iron, biotherapies, antibiotics, rehydration.',
    fullDescription: `Many medical treatments require intravenous administration without warranting a full hospital stay: iron infusions for deficiency, biotherapies for inflammatory diseases, prolonged antibiotic therapy, immunoglobulins, rehydration or osteoporosis treatments.

The day hospital offers an ideal setting for this care: the patient is welcomed at the scheduled time, comfortably settled, and the treatment is administered by an experienced nursing team, under medical responsibility. Monitoring during and after the infusion guarantees optimal safety, particularly during the first administrations of a new treatment.

This system of scheduled sessions allows great regularity for long-term treatments, with appointments adapted to each person's personal and professional constraints. The patient leaves the same day, usually after a short period of monitoring.

At Clinique Pasteur Tunis, infusions are carried out on prescription from the referring doctor or specialist, in coordination with the day-hospital team. Each session is subject to a prior medical check and a report sent to the prescribing doctor.`,
    indications: [
      { label: 'Iron infusions for deficiency or anaemia', explication: `When iron is lacking and tablets are insufficient or poorly tolerated, an infusion replenishes the reserves quickly and effectively.` },
      { label: 'Biotherapies for chronic inflammatory diseases', explication: `These modern treatments for diseases such as inflammatory rheumatism or certain bowel diseases are administered by regular infusion, under supervision.` },
      { label: 'Prolonged intravenous antibiotic therapy', explication: `Some infections require intravenous antibiotics over several days: day-hospital sessions avoid a full hospital stay.` },
      { label: 'Immunoglobulin infusions', explication: `These infusions strengthen the immune defences of patients who lack them or treat certain diseases of the immune system.` },
      { label: 'Intravenous osteoporosis treatments', explication: `To strengthen fragile bones, some treatments are administered by infusion spaced out over time, simpler than taking tablets daily.` },
      { label: 'Rehydration and correction of imbalances', explication: `An infusion can rehydrate the body or correct a mineral deficiency when diet alone is not enough.` },
    ],
    preparation: [
      'Bring the medical prescription and the requested test results',
      'Report any known allergy and ongoing treatments',
      'Fasting is generally not required, unless instructed otherwise',
      'Wear comfortable clothing allowing access to the arm',
    ],
    deroulement: [
      'Reception and settling into a room or armchair in the day hospital',
      'Medical check before the administration of the treatment',
      'Placement of an intravenous line by the nurse',
      'Administration of the infusion at the prescribed rate, under supervision',
      'Monitoring after the end of the infusion',
      'Removal of the intravenous line and discharge with instructions',
    ],
    duree: '30 minutes to a few hours depending on the treatment',
    resultats: 'The patient returns home the same day. Follow-up of the treatment\'s effectiveness is handled by the prescribing doctor, who receives a report on each session.',
    risques: [
      'Placement of the infusion may cause brief discomfort at the puncture site',
      'Rare reactions to the product are prevented by careful monitoring, particularly during the first administrations',
      'A small bruise at the puncture site may appear and disappears spontaneously',
    ],
  },
  {
    slug: 'biopsies',
    title: 'Biopsies',
    shortTitle: 'Biopsies',
    image: '/images/fiches/hdj-biopsies.webp',
    description: 'Tissue samples taken in the day hospital, most often under imaging guidance, to establish a precise diagnosis.',
    fullDescription: `A biopsy involves taking a small tissue sample for examination under the microscope. It is a key examination for establishing a precise diagnosis, particularly in the case of a nodule, a lesion discovered on imaging or an unexplained laboratory abnormality. It concerns many organs: breast, thyroid, liver, prostate, lymph nodes and skin.

Most biopsies are performed under local anaesthesia, often with imaging guidance (ultrasound or CT scan) that allows the area to be sampled to be targeted with great precision. Some deeper biopsies may require a short sedation, decided in advance with the doctor.

Day-hospital care allows the procedure to be performed under optimal safety conditions: preparation, sampling, then a few hours of monitoring before the return home. The samples taken are sent for anatomical pathology analysis.

At Clinique Pasteur Tunis, biopsies are performed by experienced radiologists and specialists, in coordination with the prescribing doctor. The results are explained to the patient during a dedicated consultation, with support tailored to each situation.`,
    indications: [
      { label: 'Characterisation of a breast or thyroid nodule', explication: `Taking a few cells from the nodule makes it possible to know precisely what it is and to choose the right course of action, often simply reassuring.` },
      { label: 'Lesion of the liver or another organ discovered on imaging', explication: `When an unusual image is discovered, a small sample guided by ultrasound or CT scan reveals its exact nature.` },
      { label: 'Prostate biopsy on the urologist\'s recommendation', explication: `This sampling, decided by the urologist following their examinations, allows the prostate tissue to be analysed and a precise diagnosis to be established.` },
      { label: 'Lymphadenopathy (enlarged lymph node) requiring investigation', explication: `A lymph node that remains swollen for no apparent reason is sampled to determine the cause, which is most often benign.` },
      { label: 'Laboratory abnormalities requiring tissue confirmation', explication: `When blood tests suggest a disease without proving it, the study of a tissue sample provides the certainty needed for proper treatment.` },
    ],
    preparation: [
      'Prior consultation to explain the procedure and check for contraindications',
      'Coagulation tests if prescribed',
      'Report anticoagulant or antiplatelet treatments, which may need to be adjusted',
      'Fast if sedation is planned',
      'Arrange for an accompanying person for the return home',
    ],
    deroulement: [
      'Reception at the day hospital and settling in',
      'Medical checks and consent',
      'Local anaesthesia of the area to be sampled',
      'Imaging-guided sampling (ultrasound or CT scan) depending on the organ concerned',
      'Dressing and monitoring in the room for a few hours',
      'Discharge approval by the doctor and handover of instructions',
    ],
    duree: '15 to 30 minutes for the procedure; a few hours of monitoring afterwards',
    resultats: 'The samples are analysed in an anatomical pathology laboratory. The results are communicated to the patient during a consultation with the prescribing doctor, who explains the conclusions and any further steps in care.',
    risques: [
      'Mild pain or tenderness at the puncture site, relieved by a simple painkiller',
      'A small bruise is possible and resolves spontaneously',
      'More significant complications are rare and prevented by day-hospital monitoring; the instructions provided specify the signs that should prompt a consultation',
    ],
  },
  {
    slug: 'bilans-sante-complets',
    title: 'Comprehensive health check-ups',
    shortTitle: 'Health check-ups',
    image: '/images/fiches/hdj-bilans-sante-complets.webp',
    description: 'A complete check-up carried out in a single day: consultations, laboratory tests, imaging and investigations coordinated in one place.',
    fullDescription: `A health check-up provides an overview of your general condition, allows early detection of potential risk factors and offers personalised prevention advice. Carried out as a day-hospital stay, it groups into a single visit examinations that would otherwise require several appointments.

The content of the check-up is tailored to each person according to their age, personal and family history and lifestyle. It may combine a complete clinical examination, laboratory samples taken on site, an electrocardiogram, a stress test, imaging examinations (ultrasound, radiology, mammography, bone densitometry) and specialist consultations.

The visit is organised along a streamlined pathway: the patient is welcomed in the morning, escorted from one examination to the next, and enjoys a break with a light meal. At the end of the visit, a doctor summarises the initial results and answers questions.

At Clinique Pasteur Tunis, health check-ups draw on the establishment's full technical facilities, gathered on a single site. A comprehensive report is given to the patient and sent, if they wish, to their referring doctor, with personalised follow-up recommendations.`,
    indications: [
      { label: 'Preventive check-up requested on a personal basis', explication: `Taking stock of your health without waiting for a symptom allows early detection of potential risk factors and preventive action.` },
      { label: 'Family history warranting screening (cardiovascular diseases, diabetes)', explication: `When certain diseases run in the family, regular and tailored screening makes it possible to detect and prevent them as early as possible.` },
      { label: 'Check-up before resuming a sporting activity', explication: `Before returning to sport, a check of the heart and general condition allows you to train in complete safety.` },
      { label: 'Check-up requested in a professional context', explication: `Some positions or recruitments require a complete health assessment, carried out here in a single visit.` },
      { label: 'Overall health review after a medical event', explication: `After a health problem, a complete check-up verifies recovery and adjusts the follow-up if necessary.` },
    ],
    preparation: [
      'Fast on the morning of the check-up for the blood samples',
      'Bring your prescriptions, reports and previous examinations',
      'Bring comfortable clothing if a stress test is scheduled',
      'Report your medical history and treatments when booking the appointment so the check-up can be personalised',
    ],
    deroulement: [
      'Reception in the morning at the day hospital',
      'Laboratory samples taken on site',
      'Complete clinical examination and electrocardiogram',
      'Imaging examinations scheduled according to your profile (ultrasound, radiology, mammography)',
      'Additional investigations if planned (stress test, bone densitometry)',
      'Light meal followed by a summary consultation with the doctor',
    ],
    duree: 'Half a day to a full day depending on the content of the check-up',
    resultats: 'A summary is presented to the patient at the end of the day, complemented by a written report bringing together all the results and personalised prevention and follow-up recommendations.',
  },
  {
    slug: 'soins-post-operatoires-suivi',
    title: 'Post-operative follow-up care',
    shortTitle: 'Post-operative care',
    image: '/images/fiches/hdj-soins-post-operatoires-suivi.webp',
    description: 'Complex dressings, removal of surgical material and check-ups after a procedure, provided in the day hospital without a new hospital stay.',
    fullDescription: `After a surgical procedure, some care requires a medical environment without warranting hospitalisation: complex dressings, removal of stitches, staples or drains, wound-healing monitoring, aspirations or close clinical check-ups. The day hospital makes it possible to provide this care under the best conditions, during a short, scheduled visit.

These sessions ensure continuity between the surgical stay and the return to normal life. The care team, in liaison with the surgeon, monitors the progress of wound healing, adjusts local care and checks for the absence of complications. It is also an opportunity for patients to ask any questions about their recovery.

If needed, additional examinations can be arranged during the same visit: samples taken on site, an ultrasound or a consultation with the surgeon. This organisation avoids back-and-forth trips and secures the post-operative period.

At Clinique Pasteur Tunis, post-operative follow-up care is scheduled from the moment of discharge, according to a timetable established by the surgical team. At each visit, the patient is met by a team that knows their file and provides consistent care until complete recovery.`,
    indications: [
      { label: 'Complex or repeated dressings after surgery', explication: `Some dressings require specific expertise and equipment: they are redone regularly by the team until the wound has completely healed.` },
      { label: 'Removal of stitches, staples or drains', explication: `These simple but delicate procedures are performed at the time planned by the surgeon, under good conditions of hygiene and comfort.` },
      { label: 'Close monitoring of wound healing', explication: `Regular check-ups verify that the scar is healing well and allow early intervention if needed.` },
      { label: 'Aspirations or local care prescribed by the surgeon', explication: `Some care prescribed after the operation, such as draining a fluid collection, is carried out during a short, scheduled visit.` },
      { label: 'Post-operative clinical check-up with examinations if necessary', explication: `A follow-up visit provides an update on recovery and, if needed, additional examinations the same day.` },
    ],
    preparation: [
      'Attend the appointments scheduled at the time of hospital discharge',
      'Bring the operative report and current prescriptions',
      'Report any unusual sign since discharge (fever, increasing pain, discharge from the wound)',
      'Wear loose clothing allowing easy access to the operated area',
    ],
    deroulement: [
      'Reception at the day hospital and settling in',
      'Assessment of wound healing and any symptoms',
      'Delivery of the care: dressing, removal of stitches or drain, aspiration',
      'Additional examinations if necessary during the same visit',
      'Report to the surgeon and adjustment of the care protocol',
      'Scheduling of the next session if needed',
    ],
    duree: '30 minutes to 1 hour per session',
    resultats: 'This regular care promotes high-quality wound healing and a smooth recovery. The surgeon is kept informed of progress at each session and adapts the follow-up until complete recovery.',
    risques: [
      'The care may cause brief discomfort, minimised by gentle techniques and, if needed, a painkiller',
      'Regular monitoring allows any wound-healing abnormality to be detected and treated early',
    ],
  },
];
