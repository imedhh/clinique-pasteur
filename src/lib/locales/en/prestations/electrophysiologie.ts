export const prestationsElectrophysiologie = [
  {
    slug: 'exploration-electrophysiologique',
    title: 'Intracardiac electrophysiology study',
    shortTitle: 'Electrophysiology study',
    description: 'The reference examination for analysing the heart\'s electrical circuit from the inside and precisely identifying the origin of a rhythm disorder.',
    fullDescription: `The intracardiac electrophysiology study is the most precise examination for studying the electrical activity of the heart. It involves introducing fine catheters through a vein, usually at the groin crease, and positioning them inside the cardiac chambers in order to record the electrical signals directly at their source.

This examination makes it possible to understand the exact origin of unexplained palpitations, dizzy spells or syncope, and to precisely characterise a rhythm disorder: location of the abnormal circuit, mechanism of the arrhythmia, response to stimulation. The physician can thus reproduce the arrhythmia under controlled conditions to analyse it more accurately.

The electrophysiology study is often the first step of ablation treatment: when the circuit responsible for the arrhythmia is identified, it can be treated in the same session, avoiding a second procedure.

At Clinique Pasteur Tunis, this examination is performed in a fully equipped electrophysiology laboratory dedicated to heart rhythm care, by a specialised team that supports the patient at every step.`,
    image: '/images/fiches/ep-exploration-electrophysiologique.webp',
    indications: [
      { label: 'Recurrent unexplained palpitations', explication: `When the heart races regularly without the usual examinations finding the cause, this study records the electrical signals directly inside the heart to identify the origin of the problem.` },
      { label: 'Syncope or dizzy spells suspected to be of rhythmic origin', explication: `After unexplained losses of consciousness, the examination looks for an electrical disorder of the heart, too fast or too slow, that could be responsible.` },
      { label: 'Characterisation of a tachycardia documented on an ECG', explication: `When a racing heart has been recorded, this study specifies its exact mechanism and location, information that is essential for choosing the right treatment.` },
      { label: 'Assessment of arrhythmic risk in certain heart diseases', explication: `Some heart diseases can promote serious rhythm disorders: the study tests the electrical sensitivity of the heart and helps decide on protective measures.` },
      { label: 'Work-up before a possible ablation', explication: `Before treating an arrhythmia definitively, the abnormal circuit must be precisely mapped; this mapping is often followed by ablation during the same session.` },
    ],
    preparation: [
      'Cardiology work-up with ECG and echocardiography',
      'Blood tests including coagulation',
      'Possible discontinuation of certain antiarrhythmic medications according to the physician\'s instructions',
      'Fast for 6 hours before the examination',
      'Anaesthesia consultation if sedation is planned',
    ],
    deroulement: [
      'Positioning in the electrophysiology laboratory and local anaesthesia at the groin crease',
      'Introduction of recording catheters through a vein',
      'Positioning of the catheters in the heart under radiological guidance',
      'Recording of electrical signals and stimulation tests',
      'Analysis of the arrhythmia mechanism, with ablation treatment in the same session if indicated',
      'Removal of the catheters and compression of the puncture site',
    ],
    duree: '1 to 2 hours',
    resultats: 'The conclusions of the examination are available immediately and explained to the patient. They make it possible to establish a precise diagnosis and define the best treatment strategy: simple monitoring, drug therapy, ablation or implantation of a device.',
    risques: [
      'Well-tolerated examination, performed under local anaesthesia',
      'Possible small bruise at the puncture site, without severity',
      'Serious complications very rare, prevented by the team\'s experience and continuous monitoring',
    ],
  },
  {
    slug: 'ablation-radiofrequence',
    title: 'Radiofrequency ablation of arrhythmias',
    shortTitle: 'Radiofrequency ablation',
    description: 'Curative treatment of heart rhythm disorders that neutralises, with a radiofrequency current, the area of the heart responsible for the arrhythmia.',
    fullDescription: `Radiofrequency ablation is a modern and often definitive treatment for heart rhythm disorders. It involves precisely locating the area of the heart responsible for the arrhythmia, then neutralising it by locally delivering radiofrequency energy at the tip of a catheter, without any surgical incision.

The procedure begins with an electrophysiology study that maps the electrical activity of the heart and locates the abnormal circuit. The ablation catheter is then positioned exactly on the target, and the application of radiofrequency creates a tiny area of inactivated tissue that interrupts the arrhythmia circuit.

This technique applies to many rhythm disorders: junctional tachycardias, atrial flutter, atrial fibrillation, certain extrasystoles and ventricular tachycardias. In many cases, it can cure the arrhythmia and put an end to long-term drug treatment.

At Clinique Pasteur Tunis, ablations are performed in a dedicated electrophysiology laboratory, equipped with a three-dimensional arrhythmia mapping system and latest-generation catheters, by a team specialised in interventional heart rhythm care.`,
    image: '/images/fiches/ep-ablation-radiofrequence.webp',
    indications: [
      { label: 'Recurrent junctional tachycardias', explication: `These episodes of a racing heart, often troublesome in daily life, are linked to a small abnormal electrical circuit that ablation can most often eliminate definitively.` },
      { label: 'Atrial flutter', explication: `This rhythm disorder follows a well-known circuit in the atrium; ablation interrupts this circuit and offers excellent lasting results.` },
      { label: 'Symptomatic atrial fibrillation', explication: `When this common arrhythmia causes palpitations, fatigue or breathlessness, ablation helps restore a regular rhythm and a better quality of life.` },
      { label: 'Numerous and troublesome ventricular extrasystoles', explication: `Very frequent extra beats can become distressing and tire the heart over time; neutralising their source makes these symptoms disappear.` },
      { label: 'Arrhythmias poorly controlled by medication or in patients wishing to avoid it', explication: `When drug treatment is insufficient, poorly tolerated or burdensome, ablation offers a lasting alternative that often allows medication to be stopped.` },
    ],
    preparation: [
      'Complete cardiology work-up with documentation of the arrhythmia',
      'Blood tests including coagulation',
      'Adjustment of antiarrhythmic and anticoagulant treatments as prescribed',
      'Fast for 6 hours before the procedure',
      'Anaesthesia consultation',
    ],
    deroulement: [
      'Positioning in the electrophysiology laboratory, local anaesthesia with appropriate sedation',
      'Introduction of the catheters through a vein at the groin crease',
      'Electrical mapping of the heart and precise location of the abnormal circuit',
      'Application of radiofrequency energy to the target area',
      'Verification of the disappearance of the arrhythmia by stimulation tests',
      'Removal of the catheters and monitoring in a specialised unit',
    ],
    duree: '2 to 4 hours depending on the type of arrhythmia',
    resultats: 'In the majority of cases, ablation brings a marked improvement or even complete disappearance of the arrhythmia. Discharge usually takes place after 24 to 48 hours of monitoring, with a rapid return to daily activities and scheduled heart rhythm follow-up.',
    risques: [
      'Bruising at the puncture site, most often benign',
      'Possible recurrence of the arrhythmia, which may justify a second procedure',
      'Rare serious complications, prevented by continuous monitoring and the team\'s experience',
    ],
  },
  {
    slug: 'ablation-fibrillation-auriculaire',
    title: 'Atrial fibrillation ablation',
    shortTitle: 'AF ablation',
    description: 'Interventional treatment of atrial fibrillation by pulmonary vein isolation, to restore a regular heart rhythm.',
    fullDescription: `Atrial fibrillation is the most common heart rhythm disorder: the atria of the heart beat rapidly and chaotically, causing palpitations, breathlessness and fatigue. When medication is not enough to control the arrhythmia, ablation is an effective treatment option.

The principle is based on the electrical isolation of the pulmonary veins, the areas from which most of the abnormal impulses triggering the fibrillation originate. Using catheters introduced through a vein and guided to the left atrium, the electrophysiologist creates an electrical barrier around these veins, preventing the abnormal signals from invading the heart.

The procedure is guided by a three-dimensional mapping system that reconstructs the anatomy of the atrium in real time and enables highly precise treatment. The goal is to durably restore a regular rhythm, improve quality of life and reduce the need for antiarrhythmic medication.

At Clinique Pasteur Tunis, atrial fibrillation ablation is performed in the dedicated electrophysiology laboratory, one of the reference centres for heart rhythm care in Tunisia, with attentive post-procedure monitoring and personalised follow-up.`,
    image: '/images/fiches/ep-ablation-fibrillation-auriculaire.webp',
    indications: [
      { label: 'Symptomatic atrial fibrillation despite drug treatment', explication: `When medication can no longer calm the palpitations, breathlessness or fatigue linked to the fibrillation, ablation becomes the option of choice to restore a regular rhythm.` },
      { label: 'Recurrent paroxysmal atrial fibrillation', explication: `When episodes return regularly and then stop on their own, intervening at this stage offers the best chances of lasting success.` },
      { label: 'Intolerance or contraindication to antiarrhythmic medication', explication: `If rhythm medications cause side effects or are not advisable in your situation, ablation makes it possible to control the arrhythmia without depending on them.` },
      { label: 'Atrial fibrillation affecting cardiac function', explication: `Prolonged fibrillation can weaken the heart muscle; restoring a regular rhythm then helps the heart recover its contractile strength.` },
      { label: 'Patients seeking a lasting rhythm control strategy', explication: `For people who prefer a definitive solution rather than lifelong drug treatment, ablation aims at a durable return to normal rhythm.` },
    ],
    preparation: [
      'Cardiology work-up with echocardiography, including a transoesophageal echocardiogram if needed',
      'Imaging of the left atrium (cardiac CT scan) to plan the procedure',
      'Rigorous management of anticoagulant treatment according to the electrophysiologist\'s instructions',
      'Fast for 6 hours before the procedure',
      'Anaesthesia consultation',
    ],
    deroulement: [
      'Positioning in the electrophysiology laboratory under sedation or general anaesthesia',
      'Venous puncture at the groin crease and advancement of the catheters up to the heart',
      'Access to the left atrium and anatomical reconstruction by 3D mapping',
      'Electrical isolation of the pulmonary veins by energy applications',
      'Verification of the effectiveness of the isolation',
      'Removal of the catheters and continuous rhythm monitoring',
    ],
    duree: '2 to 4 hours',
    resultats: 'Most patients notice a marked reduction or even disappearance of fibrillation episodes, with a lasting improvement in quality of life. Regular heart rhythm follow-up is organised, and anticoagulant treatment is continued according to each patient\'s profile. A second procedure is sometimes necessary to consolidate the result.',
    risques: [
      'Bruising at the puncture site, generally without severity',
      'Possible recurrences in the first months, often transient',
      'Rare serious complications, prevented by 3D mapping and the team\'s experience',
    ],
  },
  {
    slug: 'ablation-flutter-auriculaire',
    title: 'Atrial flutter ablation',
    shortTitle: 'Flutter ablation',
    description: 'The reference treatment for atrial flutter, an organised rhythm disorder of the atrium, with excellent lasting results.',
    fullDescription: `Atrial flutter is a rhythm disorder in which the atrium of the heart is traversed by an abnormal electrical circuit that loops around, resulting in a fast and regular heart rhythm. It causes palpitations, breathlessness and fatigue, and can affect cardiac function if it persists.

Ablation is now the reference treatment for common flutter. It involves interrupting the arrhythmia circuit by creating a fine line of electrical block in a well-identified area of the right atrium, called the cavotricuspid isthmus, using a radiofrequency catheter.

It is one of the most effective and best-standardised ablation procedures in heart rhythm care: since the flutter circuit is well known and accessible, the treatment offers excellent lasting results and most often makes it possible to avoid long-term antiarrhythmic medication.

At Clinique Pasteur Tunis, flutter ablation is performed in the dedicated electrophysiology laboratory by an experienced team, during a short hospital stay, with heart rhythm follow-up organised after the procedure.`,
    image: '/images/fiches/ep-ablation-flutter-auriculaire.webp',
    indications: [
      { label: 'Symptomatic atrial flutter (palpitations, breathlessness, fatigue)', explication: `When this fast and regular atrial rhythm is felt in daily life, ablation eliminates the responsible circuit and makes the symptoms disappear.` },
      { label: 'Recurrent flutter despite drug treatment', explication: `If episodes return despite medication, ablation is the reference treatment, with excellent chances of a definitive cure.` },
      { label: 'Flutter affecting cardiac function', explication: `A flutter that persists can tire the heart muscle; interrupting the abnormal circuit allows the heart to gradually recover its efficiency.` },
      { label: 'Patient preference for a curative treatment rather than long-term medication', explication: `Rather than taking medication for years, it is possible to choose this well-standardised procedure that treats the very cause of the arrhythmia.` },
    ],
    preparation: [
      'ECG documenting the flutter and cardiology work-up with echocardiography',
      'Blood tests including coagulation',
      'Management of anticoagulant treatment according to the physician\'s instructions',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'Positioning in the electrophysiology laboratory, local anaesthesia and light sedation',
      'Introduction of the catheters through the femoral vein',
      'Identification of the flutter circuit in the right atrium',
      'Creation of the ablation line on the cavotricuspid isthmus',
      'Verification of complete block of the circuit',
      'Removal of the catheters and monitoring',
    ],
    duree: '1 to 2 hours',
    resultats: 'Flutter ablation offers lasting results in the vast majority of cases, with disappearance of palpitations and rapid improvement in comfort of life. Discharge usually takes place after 24 hours of monitoring, with a scheduled heart rhythm check-up.',
    risques: [
      'Bruising at the puncture site, most often benign',
      'Rare recurrence, which can be treated by a new procedure',
      'Serious complications exceptional in this well-standardised procedure',
    ],
  },
  {
    slug: 'ablation-tachycardies-ventriculaires',
    title: 'Ventricular tachycardia ablation',
    shortTitle: 'VT ablation',
    description: 'Specialised interventional treatment of rhythm disorders arising in the ventricles, guided by three-dimensional mapping.',
    fullDescription: `Ventricular tachycardias are rhythm disorders that originate in the ventricles, the chambers that propel blood through the body. They can occur in a healthy heart or complicate an existing heart disease, and require specialised management.

Ventricular tachycardia ablation is an advanced heart rhythm procedure. It involves finely mapping the electrical activity of the ventricles using a three-dimensional reconstruction system, in order to locate the focus or circuit responsible for the arrhythmia, and then neutralising it with targeted radiofrequency applications.

This procedure significantly reduces tachycardia episodes, improves quality of life and, in patients with a defibrillator, decreases the number of therapies delivered by the device. It is performed by a trained team, in a high-safety environment.

At Clinique Pasteur Tunis, ventricular tachycardia ablation benefits from a fully equipped electrophysiology laboratory, a 3D arrhythmia mapping system and the immediate proximity of the cardiac intensive care units, guaranteeing optimal care.`,
    image: '/images/fiches/ep-ablation-tachycardies-ventriculaires.webp',
    indications: [
      { label: 'Recurrent symptomatic ventricular tachycardias', explication: `When racing heartbeats arising in the ventricles recur and cause dizzy spells or palpitations, ablation targets their origin to greatly reduce their frequency.` },
      { label: 'Very numerous ventricular extrasystoles affecting cardiac function', explication: `Extremely frequent extra beats can weaken the heart muscle over time; eliminating their source allows the heart to recover.` },
      { label: 'Reduction of therapies from an implanted defibrillator', explication: `In patients with a defibrillator that delivers repeated shocks, ablation reduces the number of arrhythmias and therefore the device\'s interventions, markedly improving comfort of life.` },
      { label: 'Ventricular tachycardias poorly controlled by medication', explication: `When drug treatment is no longer enough to prevent episodes, this specialised procedure offers an effective complementary solution.` },
      { label: 'Certain tachycardias occurring in a healthy heart, amenable to curative treatment', explication: `In people with an otherwise normal heart, certain forms of ventricular tachycardia can be definitively cured by targeted ablation.` },
    ],
    preparation: [
      'In-depth cardiology work-up with echocardiography and, if needed, cardiac MRI',
      'Precise documentation of the arrhythmia (ECG, Holter, defibrillator memory)',
      'Blood tests and management of treatments according to the electrophysiologist\'s instructions',
      'Fast for 6 hours before the procedure',
      'Anaesthesia consultation',
    ],
    deroulement: [
      'Positioning in the electrophysiology laboratory under sedation or general anaesthesia',
      'Introduction of the catheters through a vascular access',
      'Detailed three-dimensional mapping of the ventricles',
      'Location of the focus or circuit of the tachycardia',
      'Targeted radiofrequency applications',
      'Stimulation tests to verify the effectiveness of the treatment',
      'Close monitoring in the cardiac intensive care unit',
    ],
    duree: '3 to 5 hours',
    resultats: 'Ablation most often brings a marked reduction in tachycardia episodes and a notable improvement in comfort of life. Initial monitoring takes place in a specialised unit for 24 to 48 hours, followed by close heart rhythm follow-up.',
    risques: [
      'Specialised procedure performed in a high-safety environment',
      'Possible recurrence that may require additional treatment',
      'Rare complications, prevented by 3D mapping and continuous monitoring',
    ],
  },
  {
    slug: 'implantation-pacemaker',
    title: 'Pacemaker implantation',
    shortTitle: 'Pacemaker',
    description: 'Placement of a cardiac pacemaker that constantly watches over the heart rhythm and stimulates it whenever it beats too slowly.',
    fullDescription: `The pacemaker is a small electronic device implanted under the skin, usually below the collarbone, and connected to the heart by one or more leads. It continuously monitors the heart rhythm and sends tiny electrical impulses as soon as the heart beats too slowly, thus guaranteeing a rhythm suited to the body\'s needs.

Implantation is indicated when the heart shows excessive slowing or pauses: symptomatic bradycardia, conduction blocks, sinus node disease. These abnormalities can cause fatigue, breathlessness, dizziness or fainting, symptoms which the pacemaker eliminates by restoring an adequate rhythm.

The procedure is short and well standardised, performed under local anaesthesia with light sedation. Today\'s pacemakers are discreet, have long battery life and automatically adapt to the patient\'s activity, allowing a completely normal life.

At Clinique Pasteur Tunis, implantation is performed by a team specialised in heart rhythm care under rigorous aseptic conditions. A programme of regular device checks is then organised in consultation.`,
    image: '/images/fiches/ep-implantation-pacemaker.webp',
    indications: [
      { label: 'Symptomatic bradycardia (fatigue, dizziness, faintness)', explication: `When the heart beats too slowly and this results in unusual fatigue, dizziness or faintness, the pacemaker restores an adequate rhythm and makes these symptoms disappear.` },
      { label: 'High-degree atrioventricular blocks', explication: `When the electrical current no longer passes correctly between the upper and lower chambers of the heart, the pacemaker takes over to guarantee regular beats in all circumstances.` },
      { label: 'Sinus node disease with cardiac pauses', explication: `If the heart\'s natural pacemaker becomes deficient and pauses, the device keeps constant watch and intervenes as soon as the rhythm slows too much.` },
      { label: 'Documented syncope of slow rhythmic origin', explication: `When losses of consciousness are due to excessive slowing of the heart proven by recordings, pacemaker implantation effectively prevents recurrences.` },
      { label: 'Certain atrial fibrillations with slow conduction', explication: `In some patients with atrial fibrillation, the heart beats too slowly overall; the pacemaker then ensures a sufficient heart rate for daily life.` },
    ],
    preparation: [
      'Cardiology work-up with ECG, Holter and echocardiography',
      'Blood tests including coagulation',
      'Adjustment of anticoagulants according to the physician\'s instructions',
      'Fast for 6 hours before the procedure',
      'Antiseptic shower the evening before and the morning of the procedure',
    ],
    deroulement: [
      'Positioning in a dedicated room, local anaesthesia and light sedation',
      'Small incision below the collarbone',
      'Introduction of the lead(s) through a vein under radiological guidance',
      'Positioning of the leads in the heart and electrical tests',
      'Connection of the device and closure of the pocket',
      'Device check and verification X-ray',
    ],
    duree: 'About 1 hour',
    resultats: 'The pacemaker works as soon as it is placed and the symptoms related to the slow rhythm disappear rapidly. After 24 to 48 hours of monitoring, the patient goes home with simple instructions and a schedule of regular device checks.',
    risques: [
      'Small bruise at the pocket, generally without consequence',
      'Very low infection risk thanks to aseptic protocols',
      'Rare lead displacement, corrected if necessary by a simple procedure',
    ],
  },
  {
    slug: 'implantation-defibrillateur',
    title: 'Implantable cardioverter-defibrillator (ICD) implantation',
    shortTitle: 'Defibrillator (ICD)',
    description: 'Placement of an implantable defibrillator that continuously monitors the heart and automatically protects it against serious rhythm disorders.',
    fullDescription: `The implantable cardioverter-defibrillator (ICD) is a device that protects the heart. Like a pacemaker, it is implanted under the skin and connected to the heart by leads, but it has an essential additional function: it permanently monitors the heart rhythm and, if it detects a serious ventricular rhythm disorder, it automatically delivers the appropriate treatment to restore a normal rhythm.

The ICD is offered to patients at risk of a severe ventricular rhythm disorder: a history of serious arrhythmia, certain heart muscle diseases, heart failure with impaired ventricular function, or rhythm diseases of genetic origin. It acts as a permanent guardian angel, most of the time completely silently.

Today\'s defibrillators also provide the functions of a conventional pacemaker and can treat many arrhythmias with painless rapid pacing, delivery of a shock being reserved for situations that require it.

At Clinique Pasteur Tunis, ICD implantation is performed by the heart rhythm team under optimal safety conditions, with complete device testing and a personalised follow-up programme in consultation.`,
    image: '/images/fiches/ep-implantation-defibrillateur.webp',
    indications: [
      { label: 'History of a serious ventricular rhythm disorder', explication: `After an episode of severe arrhythmia, the defibrillator permanently protects against recurrence by intervening automatically as soon as a dangerous rhythm is detected.` },
      { label: 'Heart failure with impaired ventricular function', explication: `When the heart is weakened, the risk of serious rhythm disorder increases; the device acts as permanent, silent safety insurance.` },
      { label: 'Certain cardiomyopathies with arrhythmic risk', explication: `Some heart muscle diseases expose patients to dangerous racing rhythms; the defibrillator keeps continuous watch and instantly treats any threatening arrhythmia.` },
      { label: 'Hereditary rhythm diseases exposing to severe arrhythmias', explication: `In electrical diseases of the heart of genetic origin, the device offers continuous protection, including during sleep, against serious arrhythmias.` },
      { label: 'Prevention in patients identified as at risk by cardiology assessment', explication: `When examinations reveal a high risk of severe rhythm disorder, the defibrillator is offered preventively, before any event occurs.` },
    ],
    preparation: [
      'Complete cardiology work-up with echocardiography',
      'Blood tests including coagulation',
      'Adjustment of treatments according to the electrophysiologist\'s instructions',
      'Fast for 6 hours before the procedure',
      'Antiseptic shower the evening before and the morning of the procedure',
    ],
    deroulement: [
      'Positioning in a dedicated room, local anaesthesia with sedation',
      'Incision below the collarbone and creation of the device pocket',
      'Introduction of the leads through a vein under radiological guidance',
      'Complete testing of the device',
      'Closure of the pocket and final check',
      'Rhythm monitoring in a specialised unit',
    ],
    duree: '1 to 2 hours',
    resultats: 'The patient leaves the clinic after 24 to 48 hours of monitoring, permanently protected by the device. Regular checks verify the ICD\'s operation and review its memory, which records all rhythm events. Return to activities is gradual, with a few precautions explained at discharge.',
    risques: [
      'Bruising at the pocket, most often benign',
      'Infection risk limited by strict aseptic protocols',
      'Settings adjustable in consultation to best adapt the device to each patient',
    ],
  },
  {
    slug: 'resynchronisation-cardiaque',
    title: 'Cardiac resynchronisation therapy (CRT)',
    shortTitle: 'Resynchronisation (CRT)',
    description: 'Implantation of a specific pacemaker that re-coordinates the heart\'s contractions to improve the symptoms of heart failure.',
    fullDescription: `In some patients with heart failure, the different walls of the heart no longer contract in a coordinated manner: the left ventricle contracts in a desynchronised way, which reduces the efficiency of each beat and worsens breathlessness and fatigue.

Cardiac resynchronisation therapy (CRT) involves implanting a special pacemaker fitted with an additional lead positioned on the lateral wall of the left ventricle. By stimulating both ventricles simultaneously, the device restores a harmonious contraction and improves the heart\'s performance with each beat.

The expected benefits are tangible: reduced breathlessness, better exercise tolerance, improved quality of life and, in many patients, gradual improvement of cardiac function over the months. The device can be combined with a defibrillator function when the patient\'s profile justifies it.

At Clinique Pasteur Tunis, resynchronisation devices are implanted by the heart rhythm team in the dedicated laboratory, with fine optimisation of the settings and joint follow-up with the treating cardiologist.`,
    image: '/images/fiches/ep-resynchronisation-cardiaque.webp',
    indications: [
      { label: 'Symptomatic heart failure despite optimal medical treatment', explication: `When breathlessness and fatigue persist even though drug treatment is already well managed, resynchronisation provides additional mechanical support to the heart.` },
      { label: 'Desynchronisation of ventricular contractions visible on the ECG', explication: `If the electrical tracing shows that the walls of the heart are no longer contracting together, the device re-coordinates the beats to make each contraction more effective.` },
      { label: 'Impaired left ventricular function documented by echocardiography', explication: `When the ultrasound confirms that the left ventricle has lost strength, simultaneous stimulation of both ventricles can help it recover gradually.` },
      { label: 'Patients already fitted with a pacemaker requiring improved stimulation', explication: `In some patients who already have a device, switching to a resynchronisation device achieves a more harmonious contraction and better results on symptoms.` },
    ],
    preparation: [
      'Complete heart failure work-up with detailed echocardiography',
      'ECG confirming the synchronisation disorder',
      'Blood tests and adjustment of treatments as prescribed',
      'Fast for 6 hours before the procedure',
      'Antiseptic shower the evening before and the morning of the procedure',
    ],
    deroulement: [
      'Positioning in a dedicated room, local anaesthesia with sedation',
      'Incision below the collarbone',
      'Placement of the leads, including the left ventricular lead via the heart\'s venous network',
      'Stimulation tests and verification of resynchronisation',
      'Connection of the device and closure',
      'Fine adjustment of the device before discharge',
    ],
    duree: '1 hour 30 minutes to 3 hours',
    resultats: 'Improvement in symptoms is often noticeable in the weeks following implantation: less breathlessness, more endurance during exertion and better quality of life. The device is checked regularly in consultation and its settings are optimised according to the patient\'s progress.',
    risques: [
      'Bruising at the pocket, generally without severity',
      'Positioning of the left ventricular lead sometimes delicate, mastered by the team\'s experience',
      'Regular follow-up required to optimise the device settings',
    ],
  },
  {
    slug: 'holter-ecg-tensionnel',
    title: 'Holter ECG and blood pressure monitoring',
    shortTitle: 'Holter ECG and ABPM',
    description: 'Continuous recording of the heart rhythm or blood pressure over 24 to 48 hours, in the patient\'s real-life conditions.',
    fullDescription: `The Holter is a small portable recorder that monitors the heart while the patient goes about their usual activities. The Holter ECG continuously records the heart rhythm for 24 to 48 hours using electrodes stuck to the chest, while the ambulatory blood pressure monitor (ABPM) automatically measures blood pressure at regular intervals, day and night, using a cuff.

These examinations are valuable because many rhythm disorders and blood pressure abnormalities are intermittent: they may not appear during a one-off consultation, but can be captured by prolonged recording in real-life conditions. The patient notes their activities and any symptoms, which makes it possible to correlate them with the recordings.

The Holter ECG is particularly useful for investigating palpitations, dizzy spells or vertigo, monitoring a known rhythm disorder or checking the effectiveness of a treatment. The ABPM makes it possible to confirm hypertension, detect nocturnal hypertension or adjust antihypertensive treatment.

At Clinique Pasteur Tunis, fitting the Holter is quick and painless, performed by a dedicated team. The recordings are analysed by the cardiologists, and the results are provided with a detailed report.`,
    image: '/images/fiches/ep-holter-ecg-tensionnel.webp',
    indications: [
      { label: 'Unexplained palpitations, dizzy spells or vertigo', explication: `When these symptoms occur in unpredictable episodes, prolonged recording during daily life captures what a one-off consultation cannot see.` },
      { label: 'Search for an intermittent rhythm disorder', explication: `Some arrhythmias come and go without warning; by monitoring the heart day and night, the Holter maximises the chances of recording them the moment they occur.` },
      { label: 'Monitoring the effectiveness of an antiarrhythmic treatment', explication: `While on treatment for a rhythm disorder, continuous recording verifies that episodes have indeed decreased and that the rhythm remains regular throughout the day.` },
      { label: 'Suspected hypertension or hypertension difficult to control', explication: `Repeated blood pressure measurements in real-life conditions confirm or rule out hypertension and help fine-tune treatment when blood pressure is resistant.` },
      { label: 'Assessment of nocturnal blood pressure', explication: `Blood pressure should normally drop during sleep; only a night-time recording can verify this behaviour, which is important for heart health.` },
    ],
    preparation: [
      'Take a shower before fitting (the device must not get wet during the recording)',
      'Wear loose, comfortable clothing',
      'Continue usual activities during the recording',
      'Note activities and symptoms in the diary provided',
    ],
    deroulement: [
      'Placement of the electrodes on the chest or the blood pressure cuff on the arm',
      'Start-up of the recorder worn on a belt or shoulder strap',
      'Return home and continuation of normal daily activities',
      'Continuous recording for 24 to 48 hours',
      'Removal of the device at the clinic and analysis of the data by the cardiologist',
    ],
    duree: 'Fitting in a few minutes, recording over 24 to 48 hours',
    resultats: 'After analysing the recording, the cardiologist provides a detailed report that identifies any rhythm disorders or blood pressure abnormalities and guides the next steps in care.',
    risques: [
      'Completely painless examination with no risk whatsoever',
      'Possible slight skin irritation at the electrode sites, transient',
    ],
  },
  {
    slug: 'test-effort',
    title: 'Exercise stress test',
    shortTitle: 'Exercise stress test',
    description: 'Treadmill exercise test under continuous medical supervision, to assess the heart\'s behaviour during exercise.',
    fullDescription: `The exercise stress test involves recording the electrocardiogram, heart rate and blood pressure during physical exercise of progressive intensity, usually on a treadmill. Some cardiac abnormalities indeed only appear during exertion, when the heart is under demand.

This examination is an essential tool in cardiology: it helps look for insufficient blood supply to the heart muscle, investigate chest pain or breathlessness on exertion, assess physical capacity, unmask certain rhythm disorders and guide the return to sporting activity.

The procedure is simple: fitted with electrodes and a blood pressure cuff, the patient walks on a treadmill whose speed and incline increase in stages, under the constant supervision of a physician. The exertion is tailored to each person and stopped as soon as the necessary information has been gathered or at the patient's request.

At Clinique Pasteur Tunis, the exercise stress test is performed in a secure environment, with continuous monitoring and the permanent presence of a trained medical team, with all treatment resources immediately available on site.`,
    image: '/images/fiches/ep-test-effort.webp',
    indications: [
      { label: 'Chest pain on exertion to be investigated', explication: `When discomfort in the chest appears while walking or climbing stairs, this test reproduces the exertion under supervision to check that the heart is working properly.` },
      { label: 'Unusual breathlessness during exercise', explication: `If you get out of breath faster than before during usual activities, the examination helps determine whether the heart is the cause.` },
      { label: 'Evaluation after cardiac treatment or an intervention', explication: `After the start of a treatment or an intervention on the heart, the test confirms that it can once again withstand exertion in good conditions.` },
      { label: 'Search for rhythm disorders triggered by exertion', explication: `Some palpitations only appear during exercise; the test makes it possible to provoke them in a secure setting in order to record and analyse them.` },
      { label: 'Assessment before returning to sporting activity', explication: `Before getting back into sport, especially after a long break or a health problem, the test verifies that the heart is ready to keep up.` },
      { label: 'Assessment of functional capacity', explication: `The examination objectively measures the level of exertion you can provide, a useful benchmark for tracking your physical condition and adapting your activities.` },
    ],
    preparation: [
      'Bring sportswear and comfortable shoes',
      'Avoid a heavy meal in the 3 hours before the examination',
      'Avoid coffee, tobacco and intense exertion just before the test',
      'Bring the list of your medications (some may be suspended on the physician\'s instructions)',
    ],
    deroulement: [
      'Placement of the electrodes and recording of a resting ECG',
      'Measurement of baseline blood pressure',
      'Walking on a treadmill with progressive increase in speed and incline',
      'Continuous monitoring of the ECG, heart rate and blood pressure',
      'Supervised recovery phase after stopping the exertion',
      'Immediate analysis of the tracings by the cardiologist',
    ],
    duree: '30 to 45 minutes in total, including 10 to 15 minutes of exertion',
    resultats: 'The results are available immediately after the examination. The cardiologist analyses the heart\'s response to exertion, draws the diagnostic conclusions and, if necessary, suggests additional examinations or an adjustment of treatment.',
    risques: [
      'Examination supervised by continuous medical monitoring from start to finish',
      'Transient muscle fatigue or breathlessness related to the exertion',
      'Serious incidents very rare, with the team and treatment equipment immediately available',
    ],
  },
];
