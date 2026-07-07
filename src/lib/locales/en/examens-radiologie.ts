export const examensRadiologie = [
  {
    slug: 'irm',
    title: 'MRI - Magnetic Resonance Imaging',
    shortTitle: 'MRI',
    image: '/images/fiches/radio-irm.webp',
    description:
      "Medical imaging technique using a powerful magnetic field and radiofrequency waves to obtain detailed images of the body's organs and tissues, without ionizing radiation.",
    fullDescription: `Magnetic Resonance Imaging (MRI) is a state-of-the-art medical imaging technique that uses a powerful magnetic field, field gradients and radiofrequency waves to produce extremely detailed images of the anatomical structures of the human body. Unlike CT scans or X-rays, MRI uses no ionizing radiation, making it a particularly safe examination for the patient.

The principle of MRI is based on the magnetic properties of the hydrogen atoms present in large quantities in the body's tissues. When the patient is placed in the machine's magnetic field, these atoms align and then, under the effect of radiofrequency pulses, emit signals that are captured and converted into images by a computer. Depending on the sequences used, MRI can distinguish the different types of tissue with remarkable precision: muscles, tendons, ligaments, cartilage, organs, vessels and brain structures.

MRI is particularly effective for exploring the brain and spinal cord, the joints and musculoskeletal system, the liver and bile ducts, the pelvis and reproductive organs, as well as the heart and blood vessels. It is also essential in the staging of many cancers and in post-treatment follow-up.

At Clinique Pasteur in Tunis, MRI is performed on a latest-generation machine offering optimal image quality. The team of specialized radiologists and experienced technologists provides personalized care, with protocols tailored to each clinical indication. Results are interpreted promptly by expert radiologists.`,
    preparation: [
      'Remove all metallic objects: jewelry, watch, piercings, removable dentures',
      'Report any metallic implant: pacemaker, prosthesis, surgical clips, stent, heart valve',
      'Report any pregnancy or suspected pregnancy',
      'For MRI with gadolinium injection, a recent kidney function test (creatinine) may be required',
      'Fast for 4 hours before abdominal MRI (otherwise, no fasting is necessary)',
      'Wear comfortable clothing without metallic elements (a gown can be provided)',
      'Report any claustrophobia when booking the appointment',
      'Bring previous imaging examinations and the doctor\'s prescription',
    ],
    deroulement: [
      'The patient is positioned on the examination table, lying on their back in most cases',
      'A coil is placed over the region to be examined to improve image quality',
      'The table slides inside the magnet (tunnel)',
      'The patient must remain still throughout the entire examination',
      'Loud, repetitive noises are emitted by the machine (earplugs or headphones are provided)',
      'An intercom allows communication with the medical team at any time',
      'If a contrast agent (gadolinium) is injected, an IV line is placed in the arm',
      'Several acquisition sequences are performed, interspersed with short pauses',
    ],
    duree: '20 to 45 minutes depending on the region explored and the protocol',
    resultats:
      'The images are analyzed by the radiologist, who writes a detailed report. Results are generally available within 24 to 48 hours and sent to the referring physician.',
    risques: [
      'No ionizing radiation: the examination is considered very safe',
      'Allergic reaction to gadolinium (very rare)',
      'Risk related to ferromagnetic metallic implants (absolute contraindication for some older pacemakers)',
      'Nephrogenic systemic fibrosis in cases of severe kidney failure with gadolinium injection (exceptional)',
      'Feeling of claustrophobia in some patients (can be managed with light sedation)',
      'Localized sensation of warmth during the examination (normal and transient)',
    ],
    indications: [
      { label: 'Brain conditions: tumors, stroke, multiple sclerosis, epilepsy', explication: `MRI is the most accurate examination for observing the brain. It helps the doctor understand the cause of unusual headaches, memory problems, dizziness or seizures, and check the condition of brain tissue.` },
      { label: 'Spinal conditions: herniated disc, spinal canal stenosis, tumors', explication: `In cases of persistent back or neck pain, or pain radiating down an arm or a leg, MRI shows the discs, nerves and spinal cord to identify what is compressing or irritating these structures.` },
      { label: 'Joint conditions: meniscal, ligament and cartilage injuries', explication: `After a sprain, a sports injury or long-lasting joint pain, MRI finely visualizes the menisci, ligaments and cartilage of the knee, shoulder or other joints, where X-rays only show the bones.` },
      { label: 'Cancer staging and follow-up', explication: `When a cancer is diagnosed, MRI helps determine the size of the lesion and check whether other areas are affected. It is also used to monitor the effectiveness of treatments over time.` },
      { label: 'Liver and biliary conditions', explication: `MRI allows detailed study of the liver and bile ducts, for example to characterize an abnormality found on ultrasound or to look for a stone in the bile ducts, without any radiation.` },
      { label: 'Pelvic conditions: uterus, ovaries, prostate, rectum', explication: `For the organs of the pelvis, MRI provides very precise images. It is requested to investigate pelvic pain, a fibroid, a cyst, or for an assessment of the prostate or rectum.` },
      { label: 'Magnetic resonance angiography (MRA) of the blood vessels', explication: `This technique visualizes the arteries and veins without any intervention. It is useful for checking proper blood circulation and looking for a narrowing or dilation of a vessel.` },
      { label: 'Cardiac conditions: stress cardiac MRI, myocardial viability', explication: `Cardiac MRI studies the heart muscle in detail: it assesses its contraction, its blood supply and the condition of the tissue after a cardiac event, helping the cardiologist choose the most appropriate treatment.` },
    ],
  },
  {
    slug: 'scanner',
    title: 'Dual-energy CT scan',
    shortTitle: 'CT scan',
    image: '/images/fiches/radio-scanner.webp',
    description:
      "Latest-generation CT scanner using dual-energy technology for superior tissue differentiation, enabling more accurate diagnoses with an optimized radiation dose.",
    fullDescription: `The dual-energy CT scanner, also known as spectral computed tomography, represents a major advance in the field of medical imaging. This innovative technology simultaneously uses two different X-ray energy levels, allowing spectral analysis of the tissues being imaged. This approach offers diagnostic capabilities considerably superior to those of conventional single-energy CT.

The principle of dual-energy CT is based on the fact that the different tissues and materials in the human body absorb X-rays differently depending on their energy level. By combining the information obtained at two distinct energies, the scanner can differentiate structures that appear identical on a conventional CT scan: for example, distinguishing a urate stone from a calcium oxalate stone, identifying the composition of an atheromatous plaque, or differentiating a recent hematoma from an old one.

This technology also makes it possible to significantly reduce metal artifacts related to prostheses, to improve the visualization of tumor contrast enhancement, to create virtual maps without injection and to reduce the radiation dose delivered to the patient. Dual-energy CT is particularly effective in oncology, urology, cardiology and vascular disease.

At Clinique Pasteur in Tunis, dual-energy CT is performed on a latest-generation machine offering exceptional spatial and temporal resolution. The team of expert radiologists makes full use of the capabilities of this technology to provide accurate and rapid diagnoses, with constant attention to patient radiation protection.`,
    preparation: [
      'Report any known allergy, particularly to iodinated contrast agents',
      'Report any kidney failure or known kidney disease',
      'Fast for 4 hours if a contrast agent injection is planned',
      'A recent kidney function test (creatinine, clearance) is required before injection',
      'Report any pregnancy or suspected pregnancy (absolute contraindication)',
      'Report current treatments, particularly metformin (diabetes)',
      'Remove metallic objects from the area being examined',
      'Bring the medical prescription and previous examinations',
    ],
    deroulement: [
      'The patient is positioned on the scanner table, generally lying on their back',
      'A scout view (localization image) is taken first',
      'If an injection is needed, a catheter is placed in a vein of the arm',
      'The iodinated contrast agent is injected intravenously using an automatic injector',
      'The table moves through the scanner ring during acquisition',
      'Several passes may be necessary (before and after injection, at different phases)',
      'The patient must remain still and follow the breathing instructions (breath held)',
      'The examination is painless; only a sensation of warmth is felt during the injection',
    ],
    duree: '10 to 20 minutes (rapid acquisition, a few seconds per pass)',
    resultats:
      'The images are reconstructed and analyzed by the radiologist. The report is generally available within 24 to 48 hours. In emergencies, the results are communicated immediately to the referring physician.',
    risques: [
      'Exposure to X-rays (dose optimized thanks to dual-energy technology)',
      'Allergic reaction to the iodinated contrast agent (hives, edema, anaphylactic shock - rare)',
      'Acute kidney failure related to the contrast agent (contrast-induced nephropathy - rare)',
      'Extravasation of the contrast agent at the injection site (local pain, generally benign)',
      'Absolute contraindication in case of pregnancy',
      'Interaction with metformin (temporary discontinuation for 48h after injection in diabetic patients)',
    ],
    indications: [
      { label: 'Cancer assessment and follow-up: detection, staging, evaluation of treatment response', explication: `The CT scan makes it possible to locate a lesion, measure its extent and monitor its progression during treatment. It is an essential tool for the medical team to adapt care at every stage.` },
      { label: 'Vascular conditions: CT angiography, pulmonary embolism, aortic dissection', explication: `With a contrast agent injection, the CT scan visualizes the blood vessels in detail. It is requested urgently when a clot in the lungs or damage to the aorta is suspected.` },
      { label: 'Chest conditions: lung nodules, pneumonia, mediastinum', explication: `In cases of persistent cough, shortness of breath or an abnormality on an X-ray, the chest CT scan finely examines the lungs and the region between them to determine the cause.` },
      { label: 'Abdominal and pelvic conditions: liver, pancreas, kidneys, colon', explication: `The CT scan explores all the organs of the abdomen in a matter of moments. It helps explain abdominal pain, characterize an abnormality seen on ultrasound or look for an infection.` },
      { label: 'Urological conditions: urinary stones with composition analysis', explication: `The CT scan detects stones in the kidneys and urinary tract with great reliability. Dual-energy technology can even help determine their nature, which guides treatment to prevent recurrence.` },
      { label: 'Bone and joint conditions: complex fractures, detection of bone metastases', explication: `When a fracture is difficult to analyze on a plain X-ray, the CT scan provides three-dimensional images of the bones. It is also used to check the condition of the skeleton as part of a cancer workup.` },
      { label: 'Cardiac assessment: coronary CT angiography, calcium score', explication: `Cardiac CT makes it possible to examine the arteries of the heart without any intervention and to assess the presence of calcium deposits, helping the cardiologist estimate the health of the coronary arteries.` },
      { label: 'Emergencies: trauma, stroke, acute abdomen', explication: `Thanks to its speed, the CT scan is the examination of choice in emergency situations: it quickly assesses the situation after an accident, in the presence of signs of stroke or sudden abdominal pain.` },
    ],
  },
  {
    slug: 'radiologie-conventionnelle',
    title: 'Conventional radiology - remote-controlled table',
    shortTitle: 'Conventional radiology',
    image: '/images/fiches/radio-radiologie-conventionnelle.webp',
    description:
      "Radiological examination performed on a remote-controlled table allowing real-time dynamic explorations, particularly digestive transit studies and examinations with contrast opacification.",
    fullDescription: `Conventional radiology on a remote-controlled table is an imaging technique that combines the principles of classic radiography with the ability to perform dynamic examinations in real time. The remote-controlled table allows the radiologist to change the patient's position and the angle of the X-ray beam from a distance, while viewing the images live on a screen, thus providing a complete and precise exploration of the anatomical structures.

This technique is particularly suited to explorations of the digestive tract (upper gastrointestinal series, barium enema, small bowel follow-through), urological examinations (intravenous urography, cystography), arthrography and hysterosalpingography. The use of contrast agents (barium or iodine) makes it possible to visualize in real time the passage of the agent through the hollow organs, revealing any morphological or functional abnormalities.

The modern remote-controlled table is equipped with a digital fluoroscopy system that offers excellent image quality while significantly reducing the radiation dose delivered to the patient. The radiologist controls the entire examination from the control console, guiding the movements of the table and the image acquisitions according to real-time findings.

At Clinique Pasteur in Tunis, the latest-generation remote-controlled table makes it possible to perform the full range of conventional radiology examinations with contrast under optimal conditions of quality and safety. The team of experienced radiologists adapts the protocol to each clinical situation for an accurate diagnosis.`,
    preparation: [
      'Fast for 6 hours before digestive explorations',
      'For barium enema: bowel preparation according to the instructions provided (low-residue diet, laxatives)',
      'Report any allergy to contrast agents (barium, iodine)',
      'Report any pregnancy or suspected pregnancy',
      'Report any history of digestive surgery',
      'Bring the doctor\'s prescription and previous examinations',
      'Wear clothing that is easy to remove and free of metallic elements',
    ],
    deroulement: [
      'The patient is positioned on the remote-controlled table',
      'The radiologist explains how the examination will proceed and the instructions to follow',
      'A contrast agent is administered orally, rectally or intravenously depending on the examination',
      'The radiologist follows the progression of the contrast agent in real time on the screen (fluoroscopy)',
      'The table is tilted into different positions to visualize all the structures',
      'X-ray images are taken at key moments of the examination',
      'The patient must follow the radiologist\'s positioning and breathing instructions',
      'At the end of the examination, additional images may be necessary',
    ],
    duree: '15 to 45 minutes depending on the type of exploration',
    resultats:
      'The images are analyzed by the radiologist, who writes a report. Results are available within 24 to 48 hours. In case of emergency, the results are communicated immediately.',
    risques: [
      'Exposure to X-rays (reduced dose thanks to digital fluoroscopy)',
      'Transient constipation after barium ingestion (drink plenty of fluids after the examination)',
      'Allergic reaction to the iodinated contrast agent (rare)',
      'Digestive perforation during a barium enema (exceptional)',
      'Absolute contraindication in case of pregnancy',
      'Aspiration of the contrast agent in case of swallowing disorders',
    ],
    indications: [
      { label: 'Upper gastrointestinal series: reflux, ulcer, hiatal hernia, tumor', explication: `After drinking a contrast agent, the radiologist follows its path through the esophagus and stomach live. This examination helps explain heartburn, acid reflux or difficulty swallowing.` },
      { label: 'Small bowel follow-through: Crohn\'s disease, obstruction, tumor', explication: `This examination follows the progression of the contrast agent through the small intestine, an area that is difficult to access. It is useful for investigating pain, chronic inflammation or slowed transit.` },
      { label: 'Barium enema: polyps, colon tumor, diverticulosis', explication: `The contrast agent introduced rectally outlines the contours of the large intestine on the images. It makes it possible to detect irregularities of the colon wall when colonoscopy is not feasible.` },
      { label: 'Cystography: vesicoureteral reflux, incontinence, bladder tumor', explication: `By filling the bladder with contrast agent, the radiologist observes how it functions during filling and emptying. This examination helps explain recurrent urinary infections or urinary leakage.` },
      { label: 'Hysterosalpingography: infertility workup, tubal patency', explication: `This examination checks that the fallopian tubes are not blocked and that the uterine cavity has a normal shape. It is part of the workup offered to couples who are having difficulty conceiving.` },
      { label: 'Arthrography: joint injuries before MRI or as a complement', explication: `A contrast agent injected into the joint makes fine structures such as cartilage or ligaments visible. This examination sometimes complements MRI to better analyze a painful joint.` },
      { label: 'Exploration of swallowing and digestive fistulas', explication: `By filming the passage of the contrast agent in real time, the radiologist analyzes how the patient swallows and looks for any abnormal passages in the digestive tract, for example after surgery.` },
    ],
  },
  {
    slug: 'radiologie-osseuse',
    title: 'Bone radiology - flat-panel bone and chest tables',
    shortTitle: 'Bone radiology',
    image: '/images/fiches/radio-radiologie-osseuse.webp',
    description:
      "High-resolution digital radiography using flat-panel detector technology for exploration of the skeleton and lungs, offering superior image quality with a minimal radiation dose.",
    fullDescription: `Bone radiology on a table equipped with flat-panel detectors represents the most recent evolution of conventional radiography. The digital flat-panel detector replaces the old film cassettes or phosphor plates with an electronic detector built into the table, capable of directly converting X-rays into high-resolution digital images. This technology offers markedly superior image quality while significantly reducing the radiation dose.

The flat-panel detector allows instant image acquisition without processing delay, a wider exposure dynamic range (fewer retakes), advanced image post-processing (contrast adjustment, zoom, measurements) and direct integration into the digital archiving system (PACS). These advantages translate into time savings for the patient and optimal diagnostic quality for the radiologist.

This technique is used as a first-line examination for exploring the entire skeleton (fractures, osteoarthritis, bone tumors, malformations), the lungs and chest (pneumonia, pneumothorax, pleural effusions, tumors), as well as the abdomen (intestinal obstruction, calcifications, foreign bodies). Radiography remains the most frequently prescribed imaging examination in the world and is often the first step in the diagnostic workup.

At Clinique Pasteur in Tunis, the radiology rooms are equipped with latest-generation flat-panel tables, guaranteeing optimal image quality for a reliable diagnosis. The digital system allows rapid image transmission and secure archiving in the computerized patient record.`,
    preparation: [
      'No special preparation in most cases',
      'Remove clothing and metallic objects from the area to be X-rayed (jewelry, belt, piercings)',
      'Report any pregnancy or suspected pregnancy',
      'Bring the doctor\'s prescription specifying the region to be explored',
      'Bring previous X-rays for comparison if available',
      'For abdominal X-rays, fasting may be recommended',
      'Wear clothing that is easy to remove',
    ],
    deroulement: [
      'The radiology technologist positions the patient according to the region to be explored (standing, lying down or seated)',
      'A lead apron protects sensitive areas not being examined (gonads, thyroid)',
      'The patient must remain still while the image is taken (a few seconds)',
      'Breathing instructions are given: breath held for chest X-rays',
      'The image appears instantly on the control screen thanks to the flat-panel detector',
      'Several views may be necessary (frontal, lateral, oblique)',
      'The technologist checks the quality of the images before releasing the patient',
      'The images are sent to the radiologist for interpretation',
    ],
    duree: '5 to 15 minutes depending on the number of images required',
    resultats:
      'The digital images are available immediately. The radiologist\'s report is generally available within 24 hours. In emergencies, the results are communicated immediately to the treating physician.',
    risques: [
      'Exposure to X-rays (very low dose, optimized by the flat-panel detector)',
      'No pain or side effects',
      'Relative contraindication in case of pregnancy (lead shielding of the fetus if the examination is essential)',
      'Theoretical risk related to ionizing radiation negligible for a single examination',
    ],
    indications: [
      { label: 'Fractures and bone trauma', explication: `After a fall or an impact, an X-ray is the first examination performed: it immediately shows whether a bone is broken, cracked or displaced, and guides the next steps of care.` },
      { label: 'Osteoarthritis and degenerative joint diseases', explication: `When a joint becomes painful or stiff over time, an X-ray makes it possible to assess cartilage wear and changes in the bones, in order to adapt the treatment.` },
      { label: 'Primary bone tumors and metastases', explication: `In the presence of unusual bone pain or as part of a cancer workup, an X-ray looks for abnormal areas in the bones and points to further examinations if needed.` },
      { label: 'Bone infections (osteomyelitis, septic arthritis)', explication: `When an infection of the bone or a joint is suspected, for example in the presence of pain associated with fever, an X-ray helps identify its signs and monitor its progression under treatment.` },
      { label: 'Bone malformations and growth disorders', explication: `In children as in adults, an X-ray makes it possible to study the shape and alignment of the bones, for example to monitor scoliosis or check that growth is progressing normally.` },
      { label: 'Lung conditions: pneumonia, pneumothorax, tumor, pleural effusion', explication: `A chest X-ray is the basic examination for a lingering cough, fever, shortness of breath or chest pain: it quickly provides an overall view of the lungs and heart.` },
      { label: 'Preoperative radiological assessment', explication: `Before certain operations, the surgeon requests X-rays to plan the procedure precisely, for example to choose and position a joint prosthesis.` },
      { label: 'Postoperative monitoring of fixation hardware or prostheses', explication: `After the placement of screws, plates or a prosthesis, regular X-rays check that the hardware remains properly in place and that the bone is healing correctly.` },
    ],
  },
  {
    slug: 'mammographie',
    title: 'Mammography',
    shortTitle: 'Mammography',
    image: '/images/fiches/radio-mammographie.webp',
    description:
      "Specialized radiological examination of the breast allowing early breast cancer screening and the diagnosis of breast abnormalities, using a controlled compression technique for high-resolution images.",
    fullDescription: `Mammography is the reference examination for the screening and diagnosis of breast conditions, in particular breast cancer. It uses low-dose X-rays, specifically adapted to the exploration of breast tissue, to produce detailed images of the inside of the breast. This examination can detect very small abnormalities, well before they become palpable, making it an invaluable early screening tool.

Mammography is based on the principle of compressing the breast between two plates, which separates the breast structures, reduces the thickness of tissue to be imaged and therefore the radiation dose, and produces optimally sharp images. Although this compression may be uncomfortable or even slightly painful, it lasts only a few seconds per view and is essential to the quality of the examination.

Mammography can detect microcalcifications (often the first sign of early cancer), masses or nodules, architectural distortions of the breast tissue, density asymmetries and skin or axillary abnormalities. If an abnormality is detected, additional examinations may be offered: breast ultrasound, image-guided biopsy, breast MRI.

At Clinique Pasteur in Tunis, mammography is performed on a latest-generation digital mammography unit offering exceptional image resolution with a minimal radiation dose. Radiologists specialized in breast imaging ensure careful reading and comprehensive care if an abnormality is detected.`,
    preparation: [
      'Schedule the examination preferably in the first part of the menstrual cycle (between day 5 and day 15) to reduce breast tenderness',
      'Do not apply deodorant, cream, powder or perfume to the breasts or underarms on the day of the examination',
      'Wear a two-piece outfit to make undressing the upper body easier',
      'Remove jewelry from the neck and chest',
      'Bring previous mammograms for comparison',
      'Report any history of breast surgery or implants',
      'Report any current pregnancy or breastfeeding',
    ],
    deroulement: [
      'The technologist positions the breast on the mammography unit plate',
      'The breast is compressed between two plates gradually and in a controlled manner',
      'Two standard views are taken of each breast: frontal (craniocaudal) and oblique (mediolateral oblique)',
      'The compression lasts a few seconds while the image is acquired',
      'Additional views may be taken if needed (magnification, localized compression)',
      'The radiologist checks the quality of the images and may request additional views',
      'The entire examination is generally completed in less than 15 minutes',
    ],
    duree: '10 to 15 minutes',
    resultats:
      'The images are analyzed by a radiologist specialized in breast imaging. The results are classified according to the BI-RADS classification (from 0 to 6) and are generally available within 24 to 48 hours. If an abnormality is found, additional examinations are offered promptly.',
    risques: [
      'Transient breast discomfort or pain related to compression (the most common)',
      'Exposure to X-rays (very low dose, benefit far outweighs the risk)',
      'Possible false positives requiring additional examinations (a source of anxiety)',
      'Rare false negatives (particularly in very dense breasts)',
      'Contraindication in case of pregnancy',
    ],
    indications: [
      { label: 'Routine breast cancer screening from age 40 (or earlier in case of family risk)', explication: `Even without any symptoms, regular mammography can detect possible abnormalities at a very early stage, when they are still invisible and impalpable, which considerably increases the chances of recovery.` },
      { label: 'Investigation of a clinical abnormality: palpable lump, nipple discharge, skin retraction', explication: `If you or your doctor have noticed a lump, a discharge or a change in the skin of the breast, mammography helps determine its nature and decide on any additional examinations.` },
      { label: 'Follow-up after breast cancer treatment', explication: `After treatment, regular mammograms check that the tissues are healing properly and allow any new abnormality to be detected very early, for reassuring follow-up.` },
      { label: 'Assessment before cosmetic breast surgery', explication: `Before a cosmetic breast procedure, a mammogram makes sure there is no underlying abnormality, so that the surgery can take place under the safest possible conditions.` },
      { label: 'Persistent, unexplained breast pain', explication: `Breast pain that persists is most often benign, but mammography makes it possible to look for its cause and reassure the patient by ruling out an abnormality of the breast tissue.` },
      { label: 'Follow-up of breast lesions classified as probably benign (BI-RADS 3)', explication: `Some findings considered very probably benign are simply monitored closely: regular check-ups verify that they remain stable over time.` },
      { label: 'Family history of breast cancer (enhanced screening)', explication: `When close relatives have been affected by breast cancer, earlier and more frequent monitoring is offered in order to detect the slightest abnormality as early as possible.` },
    ],
  },
  {
    slug: 'panoramique-dentaire',
    title: '2D dental panoramic X-ray',
    shortTitle: 'Dental panoramic X-ray',
    image: '/images/fiches/radio-panoramique-dentaire.webp',
    description:
      "Panoramic X-ray of the upper and lower dental arches in a single image, providing an overall view of the teeth, jaws and adjacent structures.",
    fullDescription: `The dental panoramic X-ray, also called an orthopantomogram (OPG), is a specialized radiograph that provides, in a single image, a complete, unfolded view of both dental arches, the upper and lower jaws, the temporomandibular joints and the adjacent bone structures. This technique uses an X-ray beam that rotates around the patient's head during acquisition, producing a 2D panoramic image.

This examination is fundamental in dentistry and maxillofacial surgery. It makes it possible to visualize the entire dentition (present, impacted and supernumerary teeth), the condition of the roots and alveolar bone, extensive carious lesions, periapical infections (cysts, granulomas, abscesses), periodontal disease with bone loss, tumors and cysts of the jaws, as well as mandibular fractures.

The dental panoramic X-ray is a rapid, low-radiation and non-invasive first-line examination. It provides a valuable overall view that guides the practitioner toward additional examinations if necessary (cone beam CT, CT scan). It is systematically requested before orthodontic treatment, wisdom tooth extraction, dental implant placement or any maxillofacial surgery.

At Clinique Pasteur in Tunis, the 2D digital dental panoramic unit provides high-resolution images allowing an accurate diagnosis. The examination is quick, comfortable and delivers a very low radiation dose, equivalent to about one day of natural exposure to background radiation.`,
    preparation: [
      'Remove all metallic objects from the face and neck: earrings, piercings, necklace, glasses',
      'Remove removable dental appliances (dentures, aligners)',
      'No fasting necessary',
      'Report any pregnancy or suspected pregnancy',
      'Bring the prescription from the dentist or surgeon',
      'Bring previous dental X-rays if available',
    ],
    deroulement: [
      'The patient stands facing the machine',
      'They bite on a positioning rod that holds the dental arches in the correct position',
      'The forehead and temples are held by supports to prevent any movement',
      'The arm of the machine rotates around the patient\'s head (about 15 seconds)',
      'The patient must remain perfectly still, with the tongue pressed against the palate and the lips closed',
      'The panoramic image appears immediately on the screen in digital form',
      'The radiologist checks the quality of the image and interprets it',
    ],
    duree: '5 minutes (acquisition takes a few seconds)',
    resultats:
      'The digital image is available immediately. The radiology report is sent to the referring dentist or surgeon within 24 hours. The patient can obtain a digital copy of their panoramic X-ray.',
    risques: [
      'Extremely low X-ray exposure (about 0.01 mSv, the equivalent of one day of natural background radiation)',
      'No pain or side effects',
      'Contraindication in case of pregnancy (precautionary measure)',
      'Reduced image quality if the patient moves during acquisition',
    ],
    indications: [
      { label: 'Complete dental assessment: cavities, infections, periodontitis', explication: `In a single image, the dentist visualizes all the teeth and the bone that supports them. This makes it possible to detect hidden cavities, infections at the root of the teeth or early gum recession.` },
      { label: 'Evaluation of wisdom teeth before extraction', explication: `Before removing wisdom teeth, the panoramic X-ray shows their position, the orientation of their roots and their proximity to the nerves, allowing the practitioner to plan a safe and precise procedure.` },
      { label: 'Pre-implant and pre-orthodontic assessment', explication: `Before implant placement or orthodontic treatment, this overall view makes it possible to assess the amount of bone available and the position of all the teeth in order to properly prepare the treatment.` },
      { label: 'Detection of impacted or supernumerary teeth', explication: `Some teeth remain trapped in the bone or develop in excess without being visible in the mouth. The panoramic X-ray locates them precisely, particularly in children and adolescents.` },
      { label: 'Trauma to the face and mandible', explication: `After an impact to the face, this quick examination checks the integrity of the jaw and teeth, and makes it possible to detect a possible fracture.` },
      { label: 'Cysts and tumors of the jaws', explication: `The panoramic X-ray can reveal lesions developing in the jawbone, which are often silent, and point to more detailed imaging if necessary.` },
      { label: 'Temporomandibular joint disorders', explication: `In cases of jaw pain, clicking or difficulty opening the mouth, this examination gives a first overview of the joints connecting the jaw to the skull.` },
      { label: 'Assessment of maxillary sinusitis of dental origin', explication: `Some sinus infections originate from an infected tooth whose root is close to the sinus. The panoramic X-ray helps identify the tooth responsible so the problem can be treated at its source.` },
    ],
  },
  {
    slug: 'osteodensitometrie',
    title: 'Bone densitometry',
    shortTitle: 'Bone densitometry',
    image: '/images/fiches/radio-osteodensitometrie.webp',
    description:
      "Measurement of bone mineral density by dual-energy X-ray absorptiometry (DEXA), the reference examination for the diagnosis of osteoporosis and the assessment of fracture risk.",
    fullDescription: `Bone densitometry, also called dual-energy X-ray absorptiometry (DEXA), is the reference examination for measuring bone mineral density (BMD). This precise and reproducible technique makes it possible to quantify the mineral content of bone and to diagnose osteoporosis, a silent disease that weakens the bones and considerably increases the risk of fractures.

The principle of DEXA is based on the emission of two X-ray beams of different energies that pass through the bone and soft tissues. The difference in absorption between the two beams makes it possible to calculate bone mineral density precisely, expressed in g/cm2. The results are compared with the reference values of a young, healthy population (T-score) and of a population of the same age and sex (Z-score). According to the criteria of the World Health Organization, a T-score below -2.5 indicates osteoporosis.

The preferred measurement sites are the lumbar spine (L1-L4), the upper end of the femur (femoral neck and total hip), and sometimes the wrist (distal radius). These sites are the most representative of overall fracture risk and the most sensitive to changes in bone density. The examination also makes it possible to monitor the evolution of bone density during treatment.

At Clinique Pasteur in Tunis, bone densitometry is performed on a latest-generation DEXA machine, offering optimal measurement precision with a tiny radiation dose. The radiologist interprets the results taking into account the full clinical context and the patient's risk factors.`,
    preparation: [
      'No fasting necessary',
      'Avoid taking calcium supplements in the 24 hours before the examination',
      'Report any recent examination with a contrast agent (barium, iodine) in the previous 7 days',
      'Wear comfortable clothing without metallic elements (buttons, zippers, belt)',
      'Report any pregnancy or suspected pregnancy',
      'Bring the list of current medications (corticosteroids, hormone treatments)',
      'Bring previous bone densitometry results for comparative follow-up',
    ],
    deroulement: [
      'The patient lies on their back on the examination table',
      'For the lumbar spine measurement, the legs are raised on a cube-shaped support',
      'For the femur measurement, the foot is held in internal rotation by a support',
      'The arm of the machine moves slowly over the area being measured',
      'The patient must remain still during acquisition (a few seconds per site)',
      'Measurements are taken on the lumbar spine and then on the hip (one or both sides)',
      'The examination is completely painless and requires no injection',
      'The results are calculated automatically by the machine\'s software',
    ],
    duree: '10 to 15 minutes',
    resultats:
      'The results (T-score and Z-score) are available immediately after the examination. The radiologist writes a report interpreting the values according to the clinical context. The results are sent to the referring physician within 24 to 48 hours.',
    risques: [
      'Extremely low radiation dose (less than 0.01 mSv, lower than a chest X-ray)',
      'Completely painless and non-invasive examination',
      'No side effects',
      'Contraindication in case of pregnancy (precaution)',
      'Results may be distorted by the presence of fixation hardware, aortic calcifications or severe osteoarthritis',
    ],
    indications: [
      { label: 'Osteoporosis screening in postmenopausal women', explication: `After menopause, the bones can weaken without any symptoms. This simple, painless measurement makes it possible to know whether the bones remain strong and, if necessary, to start treatment before any fracture occurs.` },
      { label: 'Prolonged corticosteroid treatment (corticosteroid therapy for more than 3 months)', explication: `Prolonged cortisone treatments can weaken the bones. Bone densitometry monitors their strength and allows the doctor to offer bone protection if necessary.` },
      { label: 'History of fragility fracture (vertebra, wrist, femoral neck)', explication: `A fracture occurring after a simple fall from standing height can reveal bone fragility. The examination confirms this and guides the introduction of treatment to prevent further fractures.` },
      { label: 'Hypogonadism, early menopause or prolonged amenorrhea', explication: `Hormones play an essential protective role for the bones. When their production decreases early or for a prolonged period, it is useful to check bone density.` },
      { label: 'Primary hyperparathyroidism and other endocrine disorders', explication: `Some hormonal gland diseases accelerate bone loss. Bone density measurement is part of the workup and follow-up of these conditions.` },
      { label: 'Monitoring of anti-osteoporosis treatment (check at 2-3 years)', explication: `When treatment for osteoporosis is under way, regular monitoring of bone density makes it possible to verify that it is effective and to adjust it if necessary.` },
      { label: 'Chronic inflammatory diseases (rheumatoid arthritis, Crohn\'s disease)', explication: `Long-term inflammatory diseases, and sometimes their treatments, can affect bone strength. Regular monitoring helps prevent bone complications.` },
      { label: 'Family history of femoral neck fracture', explication: `Bone fragility has a hereditary component. If a close relative has suffered a hip fracture, screening makes it possible to assess your own risk and take preventive action.` },
    ],
  },
  {
    slug: 'echographie',
    title: 'General and specialized ultrasound',
    shortTitle: 'Ultrasound',
    image: '/images/fiches/radio-echographie.webp',
    description:
      "Imaging technique using ultrasound waves to explore organs and tissues in real time, without ionizing radiation, suitable for many diagnostic indications.",
    fullDescription: `Ultrasound is a medical imaging technique that uses ultrasound waves (high-frequency sound waves) to produce real-time images of the body's internal organs and structures. A transmitting-receiving probe is applied to the skin, sends out ultrasound waves that are reflected differently depending on the nature of the tissues they pass through, and captures the returning echoes to convert them into dynamic images on a screen.

Ultrasound is a first-line examination in many clinical situations because of its many advantages: total absence of ionizing radiation, non-invasive and painless nature, ability to examine in real time with dynamic visualization of the organs, reproducibility, availability and moderate cost. It can be repeated without risk, including in pregnant women and children.

The fields of application of ultrasound are extremely varied: abdominal ultrasound (liver, gallbladder, pancreas, spleen, kidneys), pelvic and endovaginal ultrasound (uterus, ovaries, prostate), thyroid ultrasound, soft tissue ultrasound (muscles, tendons, lymph nodes), breast ultrasound as a complement to mammography, vascular ultrasound (Doppler of the arteries and veins), and obstetric ultrasound for pregnancy monitoring. Doppler mode also makes it possible to analyze blood flow in real time.

At Clinique Pasteur in Tunis, ultrasound examinations are performed on latest-generation machines offering exceptional image resolution. The specialized radiologists adapt the type of probe and the protocol to each indication, guaranteeing a complete examination and an accurate diagnosis.`,
    preparation: [
      'Abdominal ultrasound: fast for 6 hours (small amounts of water allowed)',
      'Pelvic ultrasound: have a full bladder (drink 1 liter of water 1 hour before and do not urinate)',
      'Thyroid ultrasound: no special preparation',
      'Obstetric ultrasound of the 1st trimester: half-full bladder',
      'Soft tissue ultrasound: no preparation',
      'Vascular ultrasound (Doppler): no special preparation',
      'Bring the medical prescription and previous examinations',
      'Wear clothing that is easy to lift or remove over the area to be examined',
    ],
    deroulement: [
      'The patient is comfortably positioned on the examination table, generally lying on their back',
      'Ultrasound gel is applied to the skin over the area to be explored',
      'The radiologist applies the probe and moves it gently to visualize the different structures',
      'The images appear in real time on the screen',
      'The patient may be asked to change position (lying on their side, standing) to optimize the examination',
      'Measurements and annotations are made during the examination',
      'In Doppler mode, blood flow is analyzed with color coding',
      'The gel is wiped off at the end of the examination',
    ],
    duree: '15 to 30 minutes depending on the type of ultrasound',
    resultats:
      'The radiologist communicates the initial results to the patient immediately after the examination. A detailed report with images is written and sent to the referring physician within 24 to 48 hours.',
    risques: [
      'No known risk: ultrasound waves emit no ionizing radiation',
      'Completely painless examination (light pressure from the probe)',
      'No known contraindications',
      'Can be repeated without limitation, including during pregnancy',
      'Only limitation: examination quality may be reduced in obese patients or in case of interposed bowel gas',
    ],
    indications: [
      { label: 'Abdominal pain: exploration of the liver, gallbladder, pancreas and kidneys', explication: `For abdominal pain, ultrasound is often the first examination requested: it painlessly visualizes the main organs of the abdomen and looks, for example, for gallstones or an abnormality of the liver or kidneys.` },
      { label: 'Thyroid conditions: nodules, goiter, thyroiditis', explication: `If the thyroid gland appears enlarged or if a small lump is felt in the neck, ultrasound determines its size and appearance and helps decide on the appropriate course of action.` },
      { label: 'Breast conditions: complement to mammography, biopsy guidance', explication: `Ultrasound complements mammography, particularly in women with dense breasts. It helps distinguish a fluid-filled cyst from a solid nodule and guides any sampling procedure.` },
      { label: 'Pregnancy monitoring: ultrasounds of the 1st, 2nd and 3rd trimesters', explication: `Throughout pregnancy, ultrasound monitors the baby's growth and well-being in complete safety, without any radiation, for both mother and child.` },
      { label: 'Pelvic conditions: uterine fibroids, ovarian cysts, prostate disease', explication: `To investigate lower abdominal pain, unusually heavy periods or urinary problems, ultrasound examines the uterus, ovaries or prostate simply and painlessly.` },
      { label: 'Vascular conditions: venous thrombosis, carotid stenosis, aortic aneurysm', explication: `Thanks to Doppler mode, ultrasound observes blood flowing through the vessels: it looks for a clot in a swollen leg, checks the arteries of the neck or monitors the diameter of the aorta.` },
      { label: 'Muscle and tendon conditions: tendinopathies, muscle tears, joint effusions', explication: `After exertion or a sports injury, ultrasound examines muscles and tendons in motion, making it possible to confirm a tear or inflammation and adapt the return to activity.` },
      { label: 'Guidance of interventional procedures: punctures, biopsies, injections', explication: `By visualizing the needle in real time, ultrasound allows the doctor to perform samplings or injections with great precision and maximum safety.` },
    ],
  },
  {
    slug: 'radiologie-interventionnelle',
    title: 'Interventional radiology - embolization, drainage, radiofrequency',
    shortTitle: 'Interventional radiology',
    image: '/images/fiches/radio-radiologie-interventionnelle.webp',
    description:
      "Minimally invasive image-guided therapeutic procedures, including embolization, drainage and radiofrequency thermal ablation, offering less demanding alternatives to conventional surgery.",
    fullDescription: `Interventional radiology encompasses all diagnostic and therapeutic procedures performed under medical imaging guidance (fluoroscopy, ultrasound, CT). These minimally invasive techniques make it possible to treat many conditions while avoiding or reducing the need for open surgery, with a significant reduction in postoperative pain, length of hospital stay and complications.

Embolization consists of deliberately blocking a blood vessel by injecting embolic agents (particles, metal coils, biological glue) using a catheter introduced through an artery. This technique is used to treat uterine fibroids, stop hemorrhages, devascularize tumors before surgery, and treat vascular malformations or aneurysms. Percutaneous drainage makes it possible to evacuate a fluid collection (abscess, effusion) by placing a catheter under ultrasound or CT guidance, thus avoiding surgery to drain the infection.

Radiofrequency thermal ablation uses a high-frequency alternating electric current delivered by a needle electrode inserted directly into the tumor under CT or ultrasound guidance. The heat generated (60 to 100 degrees) causes destruction (necrosis) of the tumor and a margin of surrounding healthy tissue. This technique is validated for the treatment of tumors of the liver, kidney and lung and certain bone tumors, particularly in patients who are not candidates for surgery.

At Clinique Pasteur in Tunis, interventional radiology procedures are performed by experienced interventional radiologists in a sterile and secure environment. Latest-generation imaging equipment allows precise guidance of the procedures, guaranteeing treatment effectiveness and patient safety.`,
    preparation: [
      'Prior consultation with the interventional radiologist to explain the procedure and obtain consent',
      'Prior blood tests: coagulation (PT, aPTT, platelets), kidney function (creatinine), CBC',
      'Fast for at least 6 hours before the procedure',
      'Discontinuation of anticoagulants and antiplatelet agents according to the protocol defined by the radiologist',
      'Report any allergy, particularly to contrast agents and anesthetics',
      'Report any current treatment and any surgical history',
      'Plan for hospitalization (outpatient or a few days depending on the procedure)',
      'Bring the complete imaging file and biopsy results, if applicable',
    ],
    deroulement: [
      'The patient is positioned in the intervention room under cardiac and blood pressure monitoring',
      'A peripheral IV line is placed for the administration of medications and sedatives',
      'Local anesthesia is performed at the puncture site (general anesthesia possible depending on the procedure)',
      'For embolization: a catheter is introduced through the femoral artery and guided under fluoroscopy to the target vessel',
      'For drainage: a needle and then a drain are placed under ultrasound or CT guidance into the fluid collection',
      'For radiofrequency: a needle electrode is positioned in the tumor under CT guidance',
      'The procedure is performed under continuous imaging control',
      'A final check is carried out to verify the effectiveness of the treatment',
      'The patient is monitored in the recovery room and then during hospitalization',
    ],
    duree: '45 minutes to 2 hours depending on the complexity of the procedure',
    resultats:
      'The interventional radiologist informs the patient and the referring physician of how the procedure went immediately afterwards. A detailed report is written. A follow-up imaging examination is scheduled in the following weeks to assess the effectiveness of the treatment.',
    risques: [
      'Hematoma or bleeding at the puncture site (the most common, generally benign)',
      'Infection at the puncture site or in the treated area (rare, prevented by antibiotic prophylaxis)',
      'Post-procedural pain (managed with appropriate pain relief)',
      'Allergic reaction to the contrast agent (rare)',
      'Non-target embolization (migration of embolic agents to unintended territories - rare)',
      'Post-embolization syndrome: fever, pain, fatigue (common and transient)',
      'Specific complications depending on the organ treated (liver failure, pneumothorax)',
      'Risk of failure or recurrence requiring further treatment',
    ],
    indications: [
      { label: 'Embolization of symptomatic uterine fibroids', explication: `When fibroids cause heavy bleeding or pain, this technique shrinks them by blocking their blood supply, without an operation and while preserving the uterus.` },
      { label: 'Embolization of active hemorrhages (postpartum, digestive, traumatic)', explication: `In cases of severe bleeding, the radiologist can block the bleeding vessel from the inside using a fine catheter. This rapid procedure often stops the hemorrhage without open surgery.` },
      { label: 'Chemoembolization of liver tumors (hepatocellular carcinoma)', explication: `This treatment delivers a medication directly into the liver tumor while blocking the vessels that feed it, concentrating the effect on the lesion while sparing the rest of the organ.` },
      { label: 'Radiofrequency thermal ablation of tumors of the liver, kidney and lung', explication: `A fine needle placed at the heart of the tumor under imaging guidance destroys it with heat. This option is invaluable for patients for whom surgery is not advisable.` },
      { label: 'Drainage of abdominal, pelvic or thoracic abscesses', explication: `Rather than operating, the radiologist can evacuate a pocket of infection by placing a small drain through the skin, guided by imaging. The patient is thus relieved with a minimally invasive procedure.` },
      { label: 'Embolization of vascular malformations and visceral aneurysms', explication: `Some blood vessel abnormalities carry a risk of bleeding. Embolization makes it possible to close them from the inside, through the natural pathways of the bloodstream, and eliminate this risk.` },
      { label: 'Vertebroplasty and cementoplasty for osteoporotic vertebral fractures', explication: `The injection of medical cement into a fractured, painful vertebra consolidates it quickly. This procedure relieves the pain and allows mobility to be regained more rapidly.` },
      { label: 'Placement of biliary drains and percutaneous nephrostomies', explication: `When bile or urine can no longer flow normally, a drain placed through the skin restores their drainage, relieves the patient and protects the organ concerned.` },
    ],
  },
];
