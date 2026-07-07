export const examensCardiaques = [
  {
    slug: 'ecg-repos',
    title: 'Resting electrocardiogram (ECG)',
    shortTitle: 'Resting ECG',
    image: '/images/fiches/cardio-ecg-repos.webp',
    description:
      "Recording of the heart's electrical activity at rest, used to detect abnormalities of rhythm or conduction and signs of myocardial ischemia.",
    fullDescription: `The resting electrocardiogram is the most commonly performed cardiology examination. It records the electrical activity of the heart using electrodes placed on the skin of the chest and limbs. This simple, quick and completely painless test provides essential information about how the heart is working.

The resting ECG can detect many cardiac conditions: rhythm disturbances (atrial fibrillation, extrasystoles, tachycardias), conduction disturbances (atrioventricular blocks, bundle branch blocks), signs of myocardial ischemia, enlargement of the heart chambers, and even electrolyte abnormalities.

This examination is indicated in cases of chest pain, palpitations, shortness of breath, faintness or loss of consciousness. It is also part of the routine health check-up for patients at cardiovascular risk and is an essential preliminary test before any surgical procedure.

At the Clinique Pasteur in Tunis, the ECG is performed by specialized technicians and interpreted immediately by a cardiologist. Results are available within minutes of the examination, allowing prompt management if an abnormality is detected.`,
    preparation: [
      'No special preparation is required',
      'Wear clothing that allows easy access to the chest',
      'Avoid applying creams or oils to the skin of the chest on the day of the examination',
      'Bring a list of your current medications',
      'Bring the results of your previous ECGs if available',
    ],
    deroulement: [
      'The patient lies on their back on an examination table',
      'The technician places 10 electrodes: 6 on the chest and 4 on the limbs (wrists and ankles)',
      'A conductive gel is applied to improve contact between the electrodes and the skin',
      'The recording lasts about 10 seconds, during which the patient must remain still and relaxed',
      'The tracing is printed and analyzed by the cardiologist',
      'The electrodes are removed and the gel is wiped off',
    ],
    duree: '5 to 10 minutes',
    resultats:
      'Results are available immediately after the examination. The cardiologist interprets the tracing and gives a report to the patient or their attending physician.',
    risques: [],
    indications: [
      { label: 'Chest pain or tightness', explication: `When discomfort or a feeling of tightness appears in the chest, the ECG quickly checks whether the heart is the cause.` },
      { label: 'Palpitations or a feeling of irregular heartbeat', explication: `If you feel your heart beating too fast, too hard or irregularly, this tracing helps identify a possible rhythm disturbance.` },
      { label: 'Unusual shortness of breath', explication: `Breathlessness that occurs for no apparent reason, at rest or on minimal exertion, may have a cardiac origin that the ECG helps to identify.` },
      { label: 'Faintness, dizziness or loss of consciousness', explication: `After fainting or dizzy spells, the examination looks for an electrical abnormality of the heart that could explain these episodes.` },
      { label: 'Assessment before a surgical procedure', explication: `Before an operation, the ECG checks that the heart is working normally so that the anesthesia and the procedure can take place safely.` },
      { label: 'Follow-up of known heart conditions', explication: `In a person already being treated for heart disease, regular ECGs make it possible to monitor progress and detect any change.` },
      { label: 'Health check-up for patients at cardiovascular risk', explication: `In cases of high blood pressure, diabetes, smoking or family history, this simple test is part of routine heart monitoring.` },
      { label: 'Monitoring during cardiac treatment', explication: `Some heart medications require monitoring: the ECG checks that the treatment is working properly and remains well tolerated.` },
    ],
  },
  {
    slug: 'ecg-effort-tapis',
    title: "Exercise electrocardiogram on a treadmill",
    shortTitle: "Exercise ECG",
    image: '/images/fiches/cardio-ecg-effort-tapis.webp',
    description:
      "Recording of the heart's electrical activity during progressive physical exercise on a treadmill, to detect myocardial ischemia not visible at rest.",
    fullDescription: `The exercise electrocardiogram is a test that records the electrical activity of the heart while the patient performs progressive physical exercise on a treadmill. The aim is to subject the heart to controlled physiological stress in order to reveal abnormalities that are not visible at rest.

This test is fundamental in the diagnosis of coronary artery disease. During exercise, the heart requires a greater supply of oxygen. If the coronary arteries have significant narrowings, blood flow becomes insufficient during exercise, causing changes detectable on the ECG and sometimes symptoms such as chest pain or abnormal shortness of breath.

The treadmill stress test follows a standardized protocol (usually the Bruce protocol) with a progressive increase in the speed and incline of the treadmill. The patient is continuously monitored by a cardiologist who checks the heart rate, blood pressure and symptoms throughout the test.

At the Clinique Pasteur in Tunis, this test is performed in a secure environment with resuscitation equipment immediately available. The cardiologist is present throughout the test and can stop it at any time if necessary.`,
    preparation: [
      'Fast for at least 2 hours before the test (a light meal is allowed)',
      'Wear comfortable clothing and suitable sports shoes',
      'Do not smoke in the 2 hours before the test',
      'Report all current medications, especially beta-blockers',
      'The cardiologist may ask you to temporarily stop certain medications 24 to 48 hours beforehand',
      'Avoid any intense physical exertion on the day of the test',
      'Bring the results of previous cardiology examinations',
    ],
    deroulement: [
      'A resting ECG is first performed as a reference',
      'Blood pressure is measured at rest',
      'The electrodes are firmly attached to the chest',
      'The patient starts walking slowly on the treadmill',
      'The speed and incline increase progressively every 3 minutes (Bruce protocol)',
      'The ECG, blood pressure and symptoms are monitored continuously',
      'Exercise is continued until the target heart rate is reached or symptoms appear',
      'A recovery phase is observed for 5 to 10 minutes after stopping exercise',
      'The cardiologist analyzes all the recorded tracings',
    ],
    duree: '30 to 45 minutes (including preparation and recovery)',
    resultats:
      'Results are communicated by the cardiologist within minutes of the end of the test. A detailed report is given to the patient.',
    risques: [
      'Muscle fatigue and shortness of breath (expected and normal)',
      'Chest pain (a sign being looked for, leading to stopping the test)',
      'Heart rhythm disturbance (rare, managed immediately)',
      'Faintness or drop in blood pressure (exceptional)',
      'Risk of a serious cardiac event, extremely rare (less than 1/10 000)',
    ],
    indications: [
      { label: 'Chest pain suspected to be of coronary origin', explication: `When chest pain occurs while walking or during exertion, this test checks whether the heart's arteries supply enough blood when it works harder.` },
      { label: 'Assessment of multiple cardiovascular risk factors', explication: `In a person with a combination of high blood pressure, diabetes, smoking or cholesterol, the stress test helps detect silent disease of the heart's arteries.` },
      { label: 'Evaluation of functional exercise capacity', explication: `The test objectively measures what your heart can deliver during exercise, valuable information for tailoring your follow-up and activities.` },
      { label: 'Follow-up after myocardial infarction or angioplasty', explication: `After a heart attack or stent placement, this test checks that the heart has recovered well and can once again tolerate exercise without strain.` },
      { label: 'Assessment before resuming sports activity in a cardiac patient', explication: `Before returning to sport after a heart problem, the test ensures that exercise is safe and helps define the appropriate intensity.` },
      { label: 'Evaluation of exercise-induced rhythm disturbances', explication: `Some palpitations only appear during exercise: the test reproduces these conditions under supervision so they can be recorded and analyzed.` },
      { label: 'Sports fitness certificate for at-risk individuals', explication: `For people with risk factors who wish to play sports, this test confirms that the heart can cope well with intense exercise.` },
    ],
  },
  {
    slug: 'holter-ecg',
    title: 'Holter ECG (continuous 24h-48h-72h recording)',
    shortTitle: 'Holter ECG',
    image: '/images/fiches/cardio-holter-ecg.webp',
    description:
      "Continuous recording of the heart's electrical activity over 24 to 72 hours using a small portable device, to detect intermittent rhythm abnormalities.",
    fullDescription: `The Holter ECG is a test that continuously records the electrical activity of the heart over an extended period, usually 24 hours, but which can be extended to 48 or 72 hours depending on the indication. The patient wears a small recording device connected to electrodes stuck to the chest and goes about their normal daily activities throughout the recording.

This test is particularly useful for detecting heart rhythm abnormalities that occur intermittently and may not be present during a standard ECG lasting only a few seconds. Paroxysmal arrhythmias, cardiac pauses, frequent extrasystoles and episodes of tachycardia are thus revealed on the continuous tracing.

The Holter ECG is also invaluable for establishing a correlation between the symptoms felt by the patient (palpitations, faintness, chest pain) and possible rhythm abnormalities. The patient is asked to note in a diary the times of their activities and symptoms, allowing the cardiologist to compare them with the corresponding ECG tracing.

At the Clinique Pasteur in Tunis, we use latest-generation devices, light and discreet, which ensure high-quality recording. The analysis is carried out by specialized software and then validated and interpreted by an experienced cardiologist.`,
    preparation: [
      'Take a shower before the device is fitted, as showering will not be possible during the recording',
      'Wear loose, comfortable clothing',
      'Do not apply cream or lotion to the chest',
      'Bring a list of current medications',
      'Plan not to do intense sports during the recording',
    ],
    deroulement: [
      'The technician prepares the skin of the chest (shaving if necessary, cleaning)',
      '5 to 7 adhesive electrodes are placed on the chest',
      'The electrodes are connected by cables to a small recording device',
      'The device is attached to the belt or worn on a shoulder strap',
      'The patient receives a diary to note their activities and symptoms',
      'The patient goes home and resumes their usual activities',
      'After 24h, 48h or 72h, the patient returns to the clinic to have the device removed',
      'The data is transferred to a computer for analysis',
    ],
    duree: '24 to 72 hours of recording; fitting and removal: 15 minutes each',
    resultats:
      'Holter analysis takes 24 to 48 hours. Results are sent to the prescribing cardiologist or given to the patient at a follow-up consultation.',
    risques: [
      'Mild skin irritation at the site of the adhesive electrodes',
      'Allergy to adhesive tape (rare, report any known allergy)',
    ],
    indications: [
      { label: 'Intermittent palpitations', explication: `When the heart races in unpredictable episodes, a standard ECG lasting a few seconds may show nothing: the Holter records continuously to capture these moments.` },
      { label: 'Unexplained faintness or fainting', explication: `After fainting spells or episodes of faintness with no known cause, prolonged recording looks for a temporary slowing or racing of the heart.` },
      { label: 'Assessment of heart rate over 24 hours', explication: `The device observes how your heart beats throughout the day and night, at rest and during activity, to check that it adapts normally.` },
      { label: 'Follow-up of paroxysmal atrial fibrillation', explication: `When this rhythm disorder occurs in short-lived episodes, the Holter shows how often and at what times the episodes occur.` },
      { label: 'Checking the effectiveness of anti-arrhythmic treatment', explication: `While on treatment for a rhythm disorder, the recording verifies that the abnormalities have indeed decreased and that the medication is doing its job.` },
      { label: 'Monitoring after ablation of a rhythm disorder', explication: `After a procedure to eliminate an arrhythmia, the Holter confirms that the rhythm remains regular and that there is no recurrence.` },
      { label: 'Evaluation of bradycardia or cardiac pauses', explication: `If the heart seems to beat too slowly or to pause, continuous recording precisely measures these slowdowns to decide on the appropriate course of action.` },
      { label: 'Assessment of nocturnal palpitations or paroxysmal breathlessness', explication: `Palpitations or shortness of breath occurring at night are difficult to observe during a consultation: the Holter monitors the heart during sleep.` },
    ],
  },
  {
    slug: 'holter-tensionnel',
    title: 'Ambulatory blood pressure monitoring (ABPM)',
    shortTitle: 'Blood pressure Holter',
    image: '/images/fiches/cardio-holter-tensionnel.webp',
    description:
      "Automatic, repeated measurement of blood pressure over 24 hours using a portable cuff, to assess the patient's daytime and nighttime blood pressure profile.",
    fullDescription: `Blood pressure Holter monitoring, also known as ABPM (Ambulatory Blood Pressure Monitoring), is a test that measures blood pressure automatically and repeatedly over a 24-hour period. A cuff is placed on the patient's arm and connected to a small device that takes measurements at regular intervals, usually every 15 to 30 minutes during the day and every 30 to 60 minutes at night.

This test is essential for obtaining a complete and reliable blood pressure profile, because blood pressure varies considerably throughout the day under the influence of physical activity, stress, sleep and many other factors. Unlike a one-off measurement at the doctor's office, ABPM provides dozens of measurements under the patient's real-life conditions.

Blood pressure Holter monitoring is particularly useful for diagnosing "white coat" hypertension (blood pressure elevated only at the doctor's office) and masked hypertension (normal at the office but elevated elsewhere). It also assesses the nighttime blood pressure profile, an important parameter because the absence of a nocturnal dip in blood pressure ("non-dipper" profile) is associated with increased cardiovascular risk.

At the Clinique Pasteur in Tunis, ABPM is performed with clinically validated devices that guarantee the reliability of the measurements. Computerized analysis provides daytime, nighttime and 24-hour averages, as well as detailed graphs interpreted by the cardiologist.`,
    preparation: [
      'Wear a garment with loose sleeves to make fitting the cuff easier',
      'Continue taking your usual medications unless your doctor advises otherwise',
      'Plan not to take a bath or shower during the 24 hours of recording',
      'Avoid intense sports activities during the recording',
      'Bring a list of your current treatments',
    ],
    deroulement: [
      'A blood pressure cuff is fitted on the non-dominant arm',
      'The cuff is connected to a recording device attached to the belt',
      'The device is programmed to take regular automatic measurements',
      'The patient receives a diary to note their activities, bedtime and wake-up time',
      'Each time the cuff inflates, the patient must keep the arm still alongside the body',
      'The patient goes home and continues their normal daily activities',
      'After 24 hours, the patient returns to the clinic to have the device removed',
      'The data is transferred to a computer and analyzed',
    ],
    duree: '24 hours of recording; fitting and removal: 10 minutes each',
    resultats:
      'Results are available within 24 to 48 hours. A full report with averages, graphs and interpretation is given to the patient or sent to the prescribing physician.',
    risques: [
      'Discomfort due to repeated inflation of the cuff, especially at night',
      'Slight discomfort or temporary numbness of the arm during measurements',
      'Minor skin irritation under the cuff (rare)',
    ],
    indications: [
      { label: 'Confirmation of the diagnosis of high blood pressure', explication: `Before concluding that true hypertension is present and starting long-term treatment, this recording checks that blood pressure really is high in everyday life.` },
      { label: 'Suspected "white coat" hypertension', explication: `In some people, blood pressure rises only from the stress of the consultation: measurement at home makes the distinction and avoids unnecessary treatment.` },
      { label: 'Suspected masked hypertension', explication: `Conversely, blood pressure may be normal at the doctor's office but high in daily life: only ambulatory recording can reveal this situation.` },
      { label: 'Assessment of the nighttime blood pressure profile', explication: `Blood pressure should normally fall during sleep; the device checks this nighttime behavior, which is important for assessing the health of the heart and blood vessels.` },
      { label: 'Checking the effectiveness of antihypertensive treatment', explication: `While on treatment for hypertension, the test confirms that blood pressure is well controlled at all hours of the day and night.` },
      { label: 'Treatment-resistant high blood pressure', explication: `When blood pressure remains high despite several medications, this comprehensive recording helps the doctor understand why and adjust the strategy.` },
      { label: 'Assessment of episodes of symptomatic low blood pressure', explication: `In cases of dizziness or weakness suggesting drops in blood pressure, the device can detect them at the precise moment the symptoms occur.` },
      { label: 'Blood pressure assessment in pregnant women', explication: `During pregnancy, reliable blood pressure monitoring is essential for mother and baby; this gentle, harmless test provides a complete profile.` },
    ],
  },
  {
    slug: 'echocardiographie-ett',
    title: 'Transthoracic echocardiography (TTE)',
    shortTitle: 'Cardiac ultrasound',
    image: '/images/fiches/cardio-echocardiographie-ett.webp',
    description:
      "Ultrasound imaging of the heart through the chest wall, used to assess the structure and function of the heart chambers, valves and pericardium.",
    fullDescription: `Transthoracic echocardiography is a non-invasive imaging examination that uses ultrasound to visualize the heart in real time. A probe is placed at various positions on the chest and emits high-frequency sound waves which, by reflecting off the cardiac structures, produce a detailed image of the heart in motion.

This examination is one of the most important in cardiology because it provides valuable information about the anatomy and function of the heart. It assesses the size and wall thickness of the heart chambers, the contractile function of the left ventricle (ejection fraction), the functioning of the four heart valves, the possible presence of pericardial effusion and many other parameters.

Using the associated Doppler techniques, echocardiography also measures blood flow through the valves and chambers, detects valve leaks (regurgitation) and narrowings (stenoses), and assesses intracardiac pressures. Color Doppler provides an intuitive visualization of normal and abnormal blood flow.

At the Clinique Pasteur in Tunis, echocardiography is performed with latest-generation ultrasound machines offering exceptional image resolution. The examination is carried out and interpreted by experienced echocardiographers, guaranteeing an accurate and reliable diagnosis.`,
    preparation: [
      'No special preparation is required',
      'There is no need to fast',
      'Wear clothing that allows easy access to the chest',
      'Bring the results of previous echocardiograms for comparison',
      'Bring your prescription and a list of your medications',
    ],
    deroulement: [
      'The patient lies on their back and then on their left side on the examination table',
      'A conductive gel is applied to the chest to help transmit the ultrasound waves',
      'The cardiologist moves the probe over different areas of the chest (acoustic windows)',
      'Images of the heart are recorded from different angles and in different modes',
      'Doppler measurements of blood flow are taken',
      'The patient may be asked to change position or breathing during the examination',
      'The gel is wiped off at the end of the examination',
    ],
    duree: '20 to 40 minutes',
    resultats:
      'Results are available immediately. The cardiologist writes a detailed report with the measurements and conclusions, given to the patient the same day or sent to the prescribing physician.',
    risques: [],
    indications: [
      { label: 'Heart murmur heard on auscultation', explication: `When the doctor hears an unusual sound through the stethoscope, the ultrasound shows the heart valves and determines whether the murmur is harmless or linked to an abnormality.` },
      { label: 'Heart failure or unexplained shortness of breath', explication: `If the heart seems to lack strength or if breathlessness persists with no obvious cause, the examination directly measures the heart's ability to pump blood.` },
      { label: 'Chest pain', explication: `When chest pain occurs, the ultrasound helps check that the heart muscle is contracting normally and guides the diagnosis.` },
      { label: 'Assessment after a myocardial infarction', explication: `After a heart attack, the examination assesses the areas of the heart that may have been affected and checks that pumping strength remains satisfactory.` },
      { label: 'Monitoring of known valve disease', explication: `When a heart valve leaks or narrows, regular ultrasound scans track its progression and help choose the right time for any intervention.` },
      { label: 'High blood pressure (looking for effects on the heart)', explication: `Long-standing high blood pressure can thicken and tire the heart muscle: the ultrasound checks whether the heart shows any signs of this.` },
      { label: 'Assessment of cardiomyopathy', explication: `In cases of heart muscle disease, the examination specifies the shape, thickness and function of the heart to guide treatment.` },
      { label: 'Screening for congenital heart disease', explication: `In children and adults alike, ultrasound can detect a heart malformation present from birth, completely painlessly.` },
      { label: 'Preoperative cardiac assessment', explication: `Before certain operations, the examination makes sure the heart is fit to withstand the anesthesia and the planned procedure.` },
      { label: 'Assessment of suspected infective endocarditis', explication: `If an infection of the heart valves is suspected, particularly in cases of persistent fever, the ultrasound looks for signs of valve involvement.` },
    ],
  },
  {
    slug: 'echocardiographie-eto',
    title: 'Transesophageal echocardiography (TEE)',
    shortTitle: 'Transesophageal echo',
    image: '/images/fiches/cardio-echocardiographie-eto.webp',
    description:
      "Ultrasound examination of the heart performed by inserting a miniature probe into the esophagus, providing very high-resolution images of the posterior cardiac structures and valves.",
    fullDescription: `Transesophageal echocardiography is a cardiac imaging examination performed by inserting a miniature ultrasound probe into the esophagus, which lies just behind the heart. This proximity between the probe and the heart produces images of markedly higher resolution than transthoracic echocardiography, particularly for the posterior structures of the heart.

TEE is a semi-invasive examination that usually requires local anesthesia of the throat and sometimes light sedation. It is performed when standard transthoracic echocardiography does not provide sufficiently precise images or when certain cardiac structures need to be visualized at maximum resolution.

This examination is particularly effective for the detailed assessment of the heart valves (especially the mitral valve), the search for thrombus (clots) in the atria (particularly in the left atrial appendage), the diagnosis of infective endocarditis (valve vegetations), the detection of aortic dissection and the evaluation of prosthetic valves.

At the Clinique Pasteur in Tunis, TEE is performed under optimal safety conditions by an experienced echocardiographer, with continuous monitoring of vital signs. Patient comfort is a priority, and light sedation is offered to minimize discomfort during the procedure.`,
    preparation: [
      'Fast strictly for at least 6 hours before the examination',
      'Report any known allergy, particularly to local anesthetics',
      'Report any ongoing anticoagulant treatment',
      'Report any known esophageal condition (esophageal varices, stricture, hiatal hernia)',
      'Remove removable dentures before the examination',
      'Arrange for someone to accompany you if sedation is given',
      'Do not drive for 2 hours after the examination if sedation was given',
    ],
    deroulement: [
      'An intravenous line is placed for possible administration of sedation',
      'The throat is numbed with a local anesthetic spray',
      'The patient is positioned lying on their left side',
      'A mouthguard is placed between the teeth to protect the probe',
      'The ultrasound probe is gently inserted into the esophagus under guidance',
      'The cardiologist obtains the various ultrasound views by moving and orienting the probe',
      'Color and pulsed Doppler examination is performed',
      'The probe is gently withdrawn at the end of the examination',
      'The patient remains under observation for 30 minutes to 1 hour after the procedure',
    ],
    duree: '15 to 30 minutes for the examination; allow 1h30 in total including preparation and observation',
    resultats:
      'Results are communicated by the cardiologist within hours of the examination. A detailed report is written and sent to the prescribing physician.',
    risques: [
      'Discomfort when the probe is inserted into the throat',
      'Temporary sore throat after the examination (common but harmless)',
      'Superficial esophageal injury (rare)',
      'Esophageal perforation (exceptional, less than 0.01%)',
      'Allergic reaction to the local anesthetic (rare)',
      'Temporary heart rhythm disturbance (rare)',
    ],
    indications: [
      { label: 'Search for intra-atrial thrombus before cardioversion', explication: `Before restoring a regular heart rhythm with an electric shock, this examination makes sure no clot has formed inside the heart, so the procedure can be carried out safely.` },
      { label: 'Assessment of infective endocarditis', explication: `When an infection of the heart valves is suspected, the probe placed in the esophagus, very close to the heart, provides highly detailed images of any lesions.` },
      { label: 'Precise assessment of the mitral valve before surgery', explication: `Before mitral valve surgery, this examination gives the surgeon a detailed map of the valve to plan the operation as precisely as possible.` },
      { label: 'Evaluation of prosthetic valves when dysfunction is suspected', explication: `If an artificial valve appears to be working less well, ultrasound via the esophagus allows it to be examined very closely and its condition checked.` },
      { label: 'Search for patent foramen ovale (PFO)', explication: `This small passage between the two atria, inherited from fetal life, sometimes remains open; the examination detects it with great accuracy.` },
      { label: 'Assessment after stroke in young patients', explication: `After a stroke in a young person, the examination looks in the heart for a possible cause, such as a clot or a small abnormal communication.` },
      { label: 'Intraoperative guidance during cardiac surgery', explication: `During certain heart operations, this ultrasound guides the surgeon in real time and immediately checks the quality of the result.` },
      { label: 'Suspected aortic dissection', explication: `In an emergency where a tear in the wall of the aorta is suspected, this examination quickly visualizes the artery to confirm or rule out the diagnosis.` },
    ],
  },
  {
    slug: 'echocardiographie-stress',
    title: 'Stress echocardiography',
    shortTitle: 'Stress echo',
    image: '/images/fiches/cardio-echocardiographie-stress.webp',
    description:
      "Echocardiography performed during physical exercise or under pharmacological stimulation, to detect abnormalities of heart contraction revealed by stress.",
    fullDescription: `Stress echocardiography is an examination that combines ultrasound imaging of the heart with stress, whether physical (exercise on a semi-recumbent bicycle or treadmill) or pharmacological (intravenous injection of dobutamine). The aim is to compare how the heart works at rest and under stress, in order to detect contraction abnormalities that are only visible when the heart is subjected to an increased workload.

This examination is an essential diagnostic tool for detecting coronary artery disease. When a coronary artery is narrowed, the area of heart muscle it supplies may contract normally at rest but show a contraction abnormality during exercise, because the oxygen supply becomes insufficient. Stress echocardiography detects these segmental wall motion abnormalities with excellent sensitivity and specificity.

Pharmacological stress echocardiography with dobutamine is particularly useful in patients who cannot perform sufficient physical exercise (joint limitations, respiratory failure, peripheral artery disease of the lower limbs). Dobutamine is a medication that stimulates the heart in a way comparable to physical exercise.

At the Clinique Pasteur in Tunis, stress echocardiography is performed by experienced cardiologists in a secure environment. The examination is continuously monitored, with resuscitation equipment immediately available, ensuring optimal patient safety.`,
    preparation: [
      'Fast for at least 4 hours before the examination',
      'Report all current medications, especially beta-blockers',
      'The cardiologist may ask you to stop beta-blockers 48 hours before the examination',
      'Avoid caffeine and theophylline in the 24 hours before the examination',
      'Wear comfortable clothing if physical exercise is planned',
      'Report any history of allergy',
      'Bring the results of previous cardiology examinations',
    ],
    deroulement: [
      'A resting ECG and a baseline echocardiogram are performed',
      'An intravenous line is placed (for pharmacological stress echo)',
      'For physical stress: the patient pedals on a semi-recumbent bicycle or walks on a treadmill',
      'For pharmacological stress: dobutamine is infused at progressively increasing doses',
      'Ultrasound images are recorded at each stress level',
      'The ECG and blood pressure are monitored continuously',
      'The examination continues until the target heart rate is reached or positive signs appear',
      'The images at rest and at peak stress are compared side by side',
      'A recovery phase is monitored',
    ],
    duree: '45 minutes to 1 hour',
    resultats:
      'Results are communicated by the cardiologist after analysis of the images. A detailed report is provided the same day or the following day.',
    risques: [
      'Palpitations and increased heart rate (expected effect)',
      'Chest pain (a sign being looked for, leading to stopping the examination)',
      'Heart rhythm disturbance (rare, managed immediately)',
      'Low blood pressure or a drop in blood pressure (rare)',
      'Nausea or headache with dobutamine (temporary)',
      'Risk of a serious cardiac event (exceptional, less than 1/5000)',
    ],
    indications: [
      { label: 'Suspected coronary artery disease in a patient unable to perform maximal exercise', explication: `When joint or breathing problems prevent running or pedaling hard enough, a medication reproduces the effect of exercise to test the heart gently.` },
      { label: 'Uninterpretable or inconclusive exercise ECG', explication: `If the standard stress test has not given a clear answer, adding ultrasound images shows directly how the heart contracts and settles the question.` },
      { label: 'Assessment of myocardial viability after infarction', explication: `After a heart attack, the examination determines whether the affected areas of heart muscle are still alive and could recover after revascularization treatment.` },
      { label: 'Preoperative assessment in a patient at cardiovascular risk', explication: `Before major surgery, this test checks that the heart will withstand the stress of the operation in a person with risk factors.` },
      { label: 'Assessment of the severity of valve disease during exercise', explication: `Some valve diseases only truly reveal themselves during exercise: the examination observes how the valve behaves when the heart speeds up.` },
      { label: 'Follow-up after coronary revascularization', explication: `After stent placement or bypass surgery, this test checks that blood is once again flowing properly through the heart muscle during exercise.` },
      { label: 'Assessment of myocardial contractile reserve', explication: `The examination measures the heart's ability to increase its contraction strength when challenged, a valuable indicator of its state of health.` },
    ],
  },
  {
    slug: 'epreuve-effort-monitoring',
    title: "Treadmill stress test with monitoring",
    shortTitle: "Stress test",
    image: '/images/fiches/cardio-epreuve-effort-monitoring.webp',
    description:
      "Comprehensive stress test with continuous monitoring of the ECG, blood pressure and oxygen saturation, to assess functional capacity and detect myocardial ischemia.",
    fullDescription: `The treadmill stress test with full monitoring is a reference cardiology examination that assesses the response of the cardiovascular system to progressive, controlled physical exercise. Unlike a simple exercise ECG, this examination includes continuous multi-parameter monitoring comprising the 12-lead ECG, blood pressure, oxygen saturation and sometimes the measurement of gas exchange.

This examination is fundamental for assessing the patient's functional capacity, expressed in METs (metabolic equivalents). This figure is a major prognostic indicator in cardiology, because poor exercise capacity is associated with increased cardiovascular risk. The stress test also determines the ischemic threshold, that is, the level of exertion at which the heart begins to show signs of strain.

Beyond the diagnosis of coronary artery disease, the stress test is used to assess chronotropic competence (the heart's ability to speed up normally during exercise), to detect exercise-induced rhythm disturbances, to measure the blood pressure response to exercise and to guide the prescription of a cardiac rehabilitation program.

At the Clinique Pasteur in Tunis, stress tests are performed according to standardized international protocols with state-of-the-art monitoring equipment. A cardiologist is present throughout the examination, and full resuscitation equipment is immediately available.`,
    preparation: [
      'Fast for at least 3 hours (a light breakfast is tolerated)',
      'Wear comfortable sports clothing and sports shoes',
      'Do not smoke in the 3 hours before the examination',
      'Bring a complete list of your medications',
      'Some medications (beta-blockers, calcium channel blockers) may need to be stopped temporarily',
      'Avoid any intense physical exertion in the 12 hours before the examination',
      'Report any physical limitation (joint problems, respiratory failure)',
    ],
    deroulement: [
      'Placement of the 12-lead ECG electrodes on the chest',
      'Fitting of the blood pressure cuff and the oxygen saturation sensor',
      'Recording of the ECG and blood pressure at rest',
      'The patient starts walking slowly on the treadmill',
      'The speed and incline are increased progressively according to the chosen protocol',
      'The ECG, blood pressure and saturation are monitored continuously on screen',
      'The cardiologist continuously assesses symptoms and the measured parameters',
      'Exercise continues until the theoretical maximum heart rate, exhaustion or the appearance of stopping criteria',
      'Active then passive recovery phase of 6 to 10 minutes',
      'Full analysis of all the recorded parameters',
    ],
    duree: '45 minutes to 1 hour (including preparation, exercise and recovery)',
    resultats:
      'Results are communicated by the cardiologist immediately after the examination. A full report including the hemodynamic parameters, the ECG tracings and the interpretation is given to the patient.',
    risques: [
      'Muscle fatigue and shortness of breath (normal and expected)',
      'Chest pain (leads to stopping the test and immediate management)',
      'Heart rhythm disturbance (rare, monitored continuously)',
      'Low blood pressure during exercise or recovery (uncommon)',
      'Fall on the treadmill (prevented by the support bars)',
      'Serious cardiac event (exceptional, less than 1/10 000)',
    ],
    indications: [
      { label: 'Diagnosis of coronary artery disease', explication: `By working the heart progressively under supervision, the test reveals a shortage of blood supply to the heart muscle that would remain invisible at rest.` },
      { label: 'Assessment of functional capacity (in METs)', explication: `The test precisely measures the level of exertion you can achieve, very useful information for the doctor to assess your cardiac fitness and track your progress.` },
      { label: 'Assessment after acute coronary syndrome', explication: `After a heart attack or cardiac alert, this supervised test checks the heart's recovery and helps organize the next steps of care.` },
      { label: 'Prescription of cardiac rehabilitation', explication: `Before starting a heart rehabilitation program, the test determines the appropriate, safe level of exercise for each patient.` },
      { label: 'Assessment of chronotropic competence', explication: `The examination checks that the heart speeds up normally as exercise increases; a heart that does not accelerate enough can explain fatigue and breathlessness.` },
      { label: 'Search for exercise-induced rhythm disturbances', explication: `Some irregular heartbeats only appear during exercise: the test triggers them in a safe setting so they can be recorded and analyzed.` },
      { label: 'Assessment of exertional breathlessness', explication: `When abnormal shortness of breath occurs during exercise, the test helps determine whether it comes from the heart, physical condition or another cause.` },
      { label: 'Assessment of the blood pressure response to exercise', explication: `The examination observes how blood pressure changes during exercise, because an excessive rise or an abnormal drop is important information for the doctor.` },
      { label: 'Sports fitness in cardiac patients', explication: `For a cardiac patient wishing to engage in physical activity, the test confirms that the intended sport is compatible with their state of health.` },
    ],
  },
  {
    slug: 'coronarographie',
    title: 'Diagnostic coronary angiography',
    shortTitle: 'Coronary angiography',
    image: '/images/fiches/cardio-coronarographie.webp',
    description:
      "The reference invasive examination for visualizing the coronary arteries by injecting a contrast agent, used to locate and quantify coronary narrowings (stenoses).",
    fullDescription: `Coronary angiography is the reference examination ("gold standard") for exploring the coronary arteries, the vessels that supply the heart muscle. It involves inserting a catheter (a thin, flexible tube) into an artery, usually the radial artery at the wrist or the femoral artery at the groin, and guiding it to the openings of the coronary arteries under X-ray guidance. An iodinated contrast agent is then injected to visualize the inside of the coronary arteries on a fluoroscopy screen.

This examination provides a precise picture of the anatomy of the coronary arteries and detects and quantifies stenoses (narrowings), occlusions, congenital abnormalities and atheromatous lesions. Coronary angiography is essential for deciding on myocardial revascularization, whether percutaneous (angioplasty with stenting) or surgical (coronary bypass).

Coronary angiography is generally performed after non-invasive tests (exercise ECG, stress echocardiography, myocardial scintigraphy) have revealed signs suggestive of coronary artery disease. It is also performed as an emergency in acute coronary syndrome (myocardial infarction) to identify and immediately treat the artery responsible.

At the Clinique Pasteur in Tunis, coronary angiography is performed in a cardiac catheterization laboratory equipped with the latest technology. The clinic's interventional cardiologists are highly experienced and perform a large volume of procedures, guaranteeing a high level of quality and safety.`,
    preparation: [
      'Fast strictly for at least 6 hours',
      'Have a prior blood test (creatinine, coagulation, blood count)',
      'Report any allergy, particularly to iodinated contrast agents',
      'Report any anticoagulant or antiplatelet treatment',
      'Preventive treatment may be prescribed in case of iodine allergy',
      'Report any history of kidney failure',
      'Take your usual medications with a little water unless the cardiologist advises otherwise',
      'Plan for day hospitalization or a short hospital stay (24 hours)',
      'Arrange for someone to accompany you home',
    ],
    deroulement: [
      'Positioning on the cardiac catheterization table',
      'Disinfection and local anesthesia of the puncture site (wrist or groin)',
      'Puncture of the artery and placement of an introducer sheath',
      'Insertion of the catheter and advancement to the aorta under X-ray guidance',
      'Selective catheterization of the left then the right coronary artery',
      'Injection of contrast agent and recording of images from several angles',
      'Real-time analysis of the images by the interventional cardiologist',
      'Removal of the catheter and the introducer sheath',
      'Compression of the puncture site and application of a pressure dressing',
      'Post-procedure monitoring with bed rest for 2 to 6 hours depending on the access route',
    ],
    duree: '20 to 45 minutes for the procedure; allow half a day to a full day of hospitalization',
    resultats:
      'Results are communicated immediately after the examination by the interventional cardiologist. The images and the report are provided to the patient and the prescribing physician. A discussion of the treatment strategy takes place if significant lesions are detected.',
    risques: [
      'Hematoma at the puncture site (common but usually harmless)',
      'Allergic reaction to the iodinated contrast agent (rare, prevented by premedication)',
      'Coronary dissection or spasm (rare)',
      'Temporary heart rhythm disturbance',
      'Acute kidney failure due to the contrast agent (rare, prevented by hydration)',
      'Stroke (exceptional, less than 0.1%)',
      'Myocardial infarction (exceptional)',
      'Vascular complication at the puncture site (false aneurysm, arteriovenous fistula)',
    ],
    indications: [
      { label: 'Acute coronary syndrome (heart attack, unstable angina)', explication: `In the event of a heart attack or an impending heart attack, this emergency examination immediately identifies the blocked artery so it can be reopened as quickly as possible.` },
      { label: 'Stable angina resistant to medical treatment', explication: `When exertional chest pain persists despite medication, coronary angiography precisely visualizes the narrowings to plan appropriate treatment.` },
      { label: 'Strongly positive non-invasive tests for myocardial ischemia', explication: `When the stress test or stress echocardiography strongly suggests a shortage of blood to the heart, this examination confirms the diagnosis and pinpoints the exact location of the lesions.` },
      { label: 'Suspected heart failure of ischemic origin', explication: `If a weakened heart could be explained by diseased coronary arteries, the examination checks this, because reopening these arteries can improve the heart's strength.` },
      { label: 'Preoperative assessment before valve surgery in patients at coronary risk', explication: `Before operating on a heart valve, the state of the coronary arteries is checked: if they are diseased, they can be treated during the same operation.` },
      { label: 'Resuscitated cardiac arrest of undetermined origin', explication: `After a cardiac arrest of unknown cause, coronary angiography looks for a blocked artery, the most common cause of this type of event.` },
      { label: 'Assessment of atypical chest pain with multiple risk factors', explication: `When unusual pain occurs in a person at risk, this examination provides a definitive answer about the state of the heart's arteries.` },
    ],
  },
  {
    slug: 'catheterisme-cardiaque',
    title: 'Right and left heart catheterization',
    shortTitle: 'Cardiac catheterization',
    image: '/images/fiches/cardio-catheterisme-cardiaque.webp',
    description:
      "Invasive hemodynamic exploration of the right and left heart chambers by catheterization, measuring intracardiac pressures and blood flow to assess overall cardiac function.",
    fullDescription: `Right and left heart catheterization is an invasive hemodynamic examination that involves inserting catheters into the heart chambers to directly measure intracardiac pressures, blood flow and vascular resistance. Right heart catheterization explores the right atrium, the right ventricle and the pulmonary artery, while left heart catheterization explores the aorta and the left ventricle.

Right heart catheterization is performed by inserting a catheter (usually a Swan-Ganz catheter) through a vein, typically the internal jugular vein, the subclavian vein or the femoral vein. This catheter is guided to the pulmonary artery and measures the pressures in the right chambers, the pulmonary capillary wedge pressure (an indirect reflection of the pressure in the left atrium), cardiac output and pulmonary vascular resistance.

Left heart catheterization is performed via an arterial (retrograde) route or a transseptal route. It measures the pressures in the aorta and the left ventricle, calculates transvalvular gradients (in cases of aortic or mitral stenosis) and assesses the contractile function of the left ventricle by ventriculography (injection of contrast into the ventricle).

At the Clinique Pasteur in Tunis, cardiac catheterization is performed by highly qualified interventional cardiologists in a catheterization laboratory equipped with the most advanced technology. Each procedure is tailored to the patient's specific indication in order to obtain the hemodynamic information needed for treatment decisions.`,
    preparation: [
      'Fast strictly for at least 6 hours',
      'Complete prior blood tests (creatinine, coagulation, full blood count)',
      'Report any allergy, particularly to contrast agents',
      'Report all current treatments, particularly anticoagulants',
      'Hospitalization is generally required (24 to 48 hours)',
      'Bring recent ECG and echocardiography results',
      'Inform the doctor of any history of kidney failure',
    ],
    deroulement: [
      'Positioning on the catheterization table under continuous monitoring (ECG, blood pressure, saturation)',
      'Disinfection and local anesthesia of the puncture site(s)',
      'For right heart catheterization: venous puncture (jugular, subclavian or femoral)',
      'Insertion of the Swan-Ganz catheter and advancement through the right chambers',
      'Measurement of pressures in the right atrium, the right ventricle and the pulmonary artery',
      'Measurement of the pulmonary capillary wedge pressure and cardiac output',
      'For left heart catheterization: arterial puncture (radial or femoral)',
      'Insertion of the catheter and retrograde advancement to the left ventricle',
      'Measurement of aortic and left ventricular pressures',
      'Left ventriculography if necessary (injection of contrast)',
      'Calculation of vascular resistance, blood flow and hemodynamic indices',
      'Removal of the catheters and compression of the puncture sites',
    ],
    duree: '45 minutes to 1h30 depending on the extent of the exploration; hospitalization for 24 to 48 hours',
    resultats:
      'The hemodynamic results are available immediately. A full report with all the pressure, flow and resistance measurements is written and discussed with the medical team to guide the treatment strategy.',
    risques: [
      'Hematoma at the puncture site',
      'Heart rhythm disturbance as the catheter passes through (usually temporary)',
      'Pneumothorax in case of subclavian or jugular puncture (rare)',
      'Cardiac perforation (exceptional)',
      'Infection at the puncture site (rare with aseptic precautions)',
      'Vagal reaction (faintness, slowing of the heart)',
      'Air embolism (exceptional)',
      'Reaction to the contrast agent (if ventriculography is performed)',
    ],
    indications: [
      { label: 'Pulmonary arterial hypertension: diagnosis and assessment of severity', explication: `When the pressure is too high in the arteries of the lungs, only this direct measurement can confirm the disease and gauge its severity.` },
      { label: 'Severe heart failure: hemodynamic assessment before transplantation', explication: `In a patient whose heart is severely weakened, the examination precisely measures pressures and blood flow to prepare major treatment decisions.` },
      { label: 'Severe valve disease: assessment of the hemodynamic impact', explication: `When a valve is badly damaged, these direct measurements clarify the real impact on heart function and help choose the best time to intervene.` },
      { label: 'Restrictive cardiomyopathy versus constrictive pericarditis', explication: `Two diseases that stiffen the heart can look very similar; studying the pressures inside the heart distinguishes them and guides treatment.` },
      { label: 'Complex congenital heart disease: assessment of shunts and pressures', explication: `In cases of heart malformation present from birth, the examination measures abnormal blood flow between the chambers and guides the correction strategy.` },
      { label: 'Pre-heart transplant assessment', explication: `Before a heart transplant, these highly precise measurements check in particular the state of the pulmonary circulation, an essential condition for the success of the transplantation.` },
      { label: 'Cardiogenic shock: support for treatment decisions', explication: `In situations where the heart can no longer maintain adequate circulation, continuous pressure monitoring helps the team adjust treatments in real time.` },
      { label: 'Assessment of the response to pulmonary vasodilators', explication: `The examination directly tests the effect of medications designed to relax the arteries of the lungs, in order to choose the most effective treatment for each patient.` },
    ],
  },
  {
    slug: 'angioplastie-stent',
    title: 'Coronary angioplasty with stent placement',
    shortTitle: 'Angioplasty + stent',
    image: '/images/fiches/cardio-angioplastie-stent.webp',
    description:
      "Percutaneous procedure to widen a coronary artery narrowed by atherosclerosis and place a stent (a small metal mesh tube) to keep the artery open.",
    fullDescription: `Coronary angioplasty with stent placement is an interventional cardiology procedure that aims to restore normal blood flow in a coronary artery narrowed or blocked by atheromatous plaques. The procedure is performed percutaneously, that is, without surgically opening the chest, by inserting a catheter through a peripheral artery.

The technique involves positioning a catheter fitted with an inflatable balloon at the site of the coronary stenosis previously identified by coronary angiography. The balloon is inflated at high pressure to press the atheromatous plaque against the artery wall and restore a normal caliber to the vessel. A stent, a small cylindrical metal mesh, is then deployed at this site to keep the artery open and prevent restenosis (re-narrowing).

The stents currently used are mostly drug-eluting stents (DES), coated with an antiproliferative medication that is released gradually and considerably reduces the risk of restenosis compared with bare-metal stents. After placement of a drug-eluting stent, dual antiplatelet therapy (usually aspirin + clopidogrel, prasugrel or ticagrelor) is essential for 6 to 12 months to prevent stent thrombosis.

At the Clinique Pasteur in Tunis, angioplasties are performed by experienced interventional cardiologists using the latest generations of drug-eluting stents and the most modern techniques (intracoronary imaging with IVUS or OCT if necessary). The success rate of the procedure exceeds 95%.`,
    preparation: [
      'Fast strictly for at least 6 hours',
      'Complete prior blood tests (full blood count, creatinine, coagulation, blood group)',
      'Take a prior antiplatelet treatment (loading dose prescribed by the cardiologist)',
      'Report any allergy, particularly to aspirin, anticoagulants or contrast agents',
      'Report any history of bleeding or clotting disorders',
      'Report any kidney failure',
      'Hospitalization is required (minimum 24 to 48 hours)',
      'A signed informed consent form is mandatory before the procedure',
      'Bring all the results of previous cardiology examinations',
    ],
    deroulement: [
      'Positioning in the catheterization room under continuous monitoring',
      'Disinfection and local anesthesia of the arterial puncture site (wrist or groin)',
      'Arterial puncture and placement of the introducer sheath',
      'Diagnostic coronary angiography to confirm the lesions to be treated',
      'Administration of intravenous heparin to prevent clot formation',
      'Advancement of a fine guidewire through the coronary stenosis',
      'Pre-dilation of the stenosis with a balloon if necessary',
      'Positioning and deployment of the stent at the lesion site',
      'Post-dilation with a high-pressure balloon to optimize stent expansion',
      'Final angiographic check to verify the result',
      'Intracoronary imaging (IVUS/OCT) if necessary to optimize the result',
      'Removal of the equipment and hemostasis of the puncture site',
      'Transfer to a continuous care unit for post-procedure monitoring',
    ],
    duree: '45 minutes to 2 hours depending on complexity; hospitalization for 24 to 72 hours',
    resultats:
      'The result of the angioplasty is visible immediately on the control images. The cardiologist discusses the result with the patient and their family as soon as the procedure ends. Strict medical treatment is prescribed on discharge, with scheduled cardiology follow-up.',
    risques: [
      'Hematoma or vascular complication at the puncture site',
      'Coronary dissection (treated by placing additional stents)',
      'Acute occlusion of the treated vessel (requiring immediate treatment)',
      'Distal embolization of atherosclerotic-thrombotic material',
      'Periprocedural myocardial infarction (enzyme elevation)',
      'Coronary perforation (rare, requiring urgent treatment)',
      'Stent thrombosis (rare, prevented by antiplatelet treatment)',
      'Kidney failure due to the contrast agent',
      'Allergic reaction to the contrast agent or the stent materials',
      'Stroke (exceptional)',
      'Death (exceptional, less than 0.5% in scheduled procedures)',
    ],
    indications: [
      { label: 'Acute coronary syndrome (myocardial infarction, unstable angina)', explication: `In the event of a heart attack, quickly reopening the artery responsible and placing a stent is the standard treatment: every minute gained preserves heart muscle.` },
      { label: 'Stable angina with a significant coronary lesion and documented ischemia', explication: `When a proven arterial narrowing causes exertional pain, angioplasty restores good blood flow and makes the symptoms disappear.` },
      { label: 'Tight, symptomatic coronary stenosis despite optimal medical treatment', explication: `If medications are no longer enough to relieve the pain caused by a severely narrowed artery, mechanically opening the vessel becomes the most effective solution.` },
      { label: 'In-stent restenosis', explication: `A stent that has already been placed can sometimes narrow again over time; a new procedure then restores blood flow.` },
      { label: 'Multivessel coronary disease as an alternative to bypass surgery (Heart Team discussion)', explication: `When several arteries are affected, a team of cardiologists and surgeons reviews each case to choose between stents and bypass surgery, whichever solution is most suitable.` },
      { label: 'Unprotected left main stenosis (selected cases)', explication: `Narrowing of this main artery of the heart can, in certain carefully selected cases, be treated by angioplasty rather than surgery, after thorough evaluation.` },
    ],
  },
  {
    slug: 'valvuloplastie-percutanee',
    title: 'Percutaneous valvuloplasty',
    shortTitle: 'Valvuloplasty',
    image: '/images/fiches/cardio-valvuloplastie-percutanee.webp',
    description:
      "Percutaneous dilation of a narrowed (stenotic) heart valve using a balloon inflated across the valve, avoiding the need for open-heart surgery.",
    fullDescription: `Percutaneous valvuloplasty is an interventional cardiology procedure that dilates a narrowed (stenotic) heart valve using a balloon-tipped catheter. This technique makes it possible to treat certain valve stenoses without resorting to open-heart surgery, offering a less invasive alternative with a faster recovery.

Percutaneous mitral valvuloplasty (percutaneous mitral commissurotomy) is the most commonly performed procedure. It is indicated in rheumatic mitral stenosis, a condition still common in Tunisia and the Maghreb countries. The technique involves inserting a special balloon (Inoue balloon) through the femoral vein, crossing the interatrial septum by transseptal puncture, then inflating the balloon at the mitral valve to separate the fused commissures.

Percutaneous aortic valvuloplasty can also be performed in severe aortic stenosis, mainly as palliative treatment or as a bridge to aortic valve replacement (surgical or transcatheter - TAVI). The technique involves inserting a balloon retrogradely through the femoral artery and inflating it at the aortic valve.

At the Clinique Pasteur in Tunis, percutaneous valvuloplasties are performed by interventional cardiologists with recognized expertise in percutaneous valve procedures. The clinic has a complete technical platform, including intraprocedural transesophageal echocardiography to guide and optimize the result.`,
    preparation: [
      'Fast strictly for at least 8 hours',
      'Complete blood tests (full blood count, coagulation, creatinine, blood group, antibody screening)',
      'Recent transthoracic and transesophageal echocardiograms',
      'Rule out the presence of a thrombus in the left atrium (TEE mandatory before mitral valvuloplasty)',
      'Report any allergy, particularly to iodinated contrast agents',
      'Stop oral anticoagulants according to the cardiologist\'s instructions',
      'Hospitalization is required (2 to 4 days)',
      'A signed informed consent form is mandatory',
      'Dental check-up to rule out any source of infection',
      'Cardiac CT scan if indicated',
    ],
    deroulement: [
      'Positioning in the catheterization room under local anesthesia and light sedation',
      'Continuous monitoring (ECG, blood pressure, oxygen saturation)',
      'Intraprocedural transesophageal echocardiography for guidance',
      'Femoral venous puncture and placement of the introducer sheath',
      'For the mitral valve: transseptal puncture to access the left atrium',
      'Administration of intravenous heparin',
      'Advancement and positioning of the balloon catheter at the stenotic valve',
      'Gradual inflation of the balloon to dilate the valve',
      'Immediate assessment of the result by echocardiography and measurement of pressure gradients',
      'If necessary, further inflation(s) with a slightly larger balloon volume',
      'Final hemodynamic and echocardiographic check',
      'Removal of the equipment and hemostasis of the puncture site',
      'Transfer to the intensive care unit for postoperative monitoring',
    ],
    duree: '1 to 2 hours for the procedure; hospitalization for 2 to 4 days',
    resultats:
      'The result is assessed immediately during the procedure by echocardiography and measurement of pressure gradients. The reduction in the stenosis is usually significant from the first inflation. An echocardiographic check is performed the next day and a follow-up consultation is scheduled at 1 month.',
    risques: [
      'Significant mitral or aortic regurgitation (the main complication, which may require surgery)',
      'Cardiac tamponade due to perforation (rare, requiring emergency drainage)',
      'Systemic embolism (stroke or peripheral embolism)',
      'Heart rhythm disturbance (atrial fibrillation, atrioventricular block)',
      'Hematoma or vascular complication at the puncture site',
      'Residual atrial septal defect after transseptal puncture (usually of no consequence)',
      'Allergic reaction to the contrast agent',
      'Kidney failure due to the contrast agent',
      'Valve restenosis in the medium or long term (requiring a repeat procedure)',
      'Periprocedural death (exceptional, less than 0.5%)',
    ],
    indications: [
      { label: 'Symptomatic rheumatic mitral stenosis with favorable valve anatomy', explication: `When the mitral valve, narrowed as a result of rheumatic fever, causes breathlessness and fatigue, it can be widened with a balloon if its shape allows, without opening the chest.` },
      { label: 'Tight mitral stenosis with a valve area of less than 1.5 cm2', explication: `When the valve opening becomes very narrow, blood struggles to flow into the heart; dilation restores an adequate passage through the valve.` },
      { label: 'Mitral stenosis with pulmonary arterial hypertension', explication: `A narrowed mitral valve can raise the pressure in the lungs; widening the valve relieves this pressure and protects the right side of the heart.` },
      { label: 'Mitral stenosis in pregnant women (alternative to surgery)', explication: `During pregnancy, this gentle technique treats a poorly tolerated valve narrowing while avoiding open-heart surgery, which is harder on mother and baby.` },
      { label: 'Severe symptomatic aortic stenosis in inoperable patients (palliative treatment)', explication: `In people too frail for surgery, dilating the aortic valve relieves symptoms and improves quality of life.` },
      { label: 'Severe aortic stenosis as a bridge to TAVI or surgical replacement', explication: `Dilation can serve as an intermediate step: it quickly relieves the patient while awaiting definitive valve replacement under better conditions.` },
      { label: 'Severe congenital pulmonary stenosis', explication: `When the pulmonary valve has been narrowed since birth, the balloon opens it effectively and usually avoids the need for surgery.` },
    ],
  },
];
