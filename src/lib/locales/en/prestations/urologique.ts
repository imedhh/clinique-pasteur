export const prestationsUrologique = [
  {
    slug: 'prostatectomie-radicale',
    title: 'Radical prostatectomy (prostate cancer)',
    shortTitle: 'Radical prostatectomy',
    description: 'Surgical procedure to remove the prostate as part of the treatment of localized prostate cancer.',
    fullDescription: `Radical prostatectomy is the reference procedure for the surgical treatment of localized prostate cancer. It consists of removing the entire prostate gland, together with the seminal vesicles, and then restoring continuity between the bladder and the urethra.

The operation may be performed through a conventional open approach or laparoscopically, a minimally invasive technique favored whenever conditions allow. The laparoscopic approach offers a more comfortable postoperative course, with smaller scars and generally faster recovery.

The decision to operate is always made within a multidisciplinary case review, taking into account the characteristics of the disease and the patient's overall condition. Whenever possible, the surgeon strives to preserve the nerve structures involved in continence and sexual function.

At Clinique Pasteur Tunis, radical prostatectomy is performed by a urology team experienced in oncological surgery, in a safe environment that includes a modern operating theater, an intensive care unit and attentive postoperative follow-up.`,
    image: '/images/fiches/urochir-prostatectomie-radicale.webp',
    indications: [
      { label: 'Localized prostate cancer confirmed by biopsy', explication: `When the cancer is still confined to the prostate, removing the entire gland offers a real chance of definitive cure.` },
      { label: 'Patient in good general health who can benefit from curative treatment', explication: `This surgery is intended for patients whose health status allows a complete cure to be pursued, after careful assessment by the medical team.` },
      { label: 'Decision validated by a multidisciplinary team meeting', explication: `Each case is discussed by several specialists (urologist, oncologist, radiation oncologist) to ensure that surgery is the best option for that particular patient.` },
      { label: 'Alternative or complement to other treatments depending on the stage of the disease', explication: `Depending on the characteristics of the disease, surgery may replace or complement other treatments such as radiotherapy. The choice is always personalized.` },
    ],
    preparation: [
      'Complete preoperative work-up (blood tests, cardiac assessment)',
      'Mandatory anesthesia consultation a few days before the procedure',
      'Discontinuation of certain medications as instructed by the physician (anticoagulants in particular)',
      'Fasting for 6 hours before the procedure',
      'Antiseptic shower the evening before and on the morning of the procedure',
    ],
    deroulement: [
      'Admission and settling into the inpatient unit',
      'General anesthesia administered by the anesthesia team',
      'Removal of the prostate and seminal vesicles, laparoscopically or through an open approach',
      'Restoration of continuity between the bladder and the urethra (anastomosis)',
      'Placement of a temporary urinary catheter',
      'Postoperative monitoring in the recovery room and then on the ward',
    ],
    duree: '2 to 4 hours',
    resultats: 'The hospital stay usually lasts a few days. The urinary catheter is removed once the anastomosis has healed. Continence returns gradually over the following weeks, with the possible help of pelvic floor rehabilitation. Regular follow-up is then organized with the urologist.',
    risques: [
      'Intraoperative bleeding, controlled by the surgical team',
      'Temporary urinary continence disturbances, improving with rehabilitation',
      'Possible impact on sexual function, discussed beforehand with the surgeon',
      'Rare complications inherent to any abdominal surgery, prevented by attentive monitoring',
    ],
  },
  {
    slug: 'resection-transuretrale-prostate',
    title: 'Transurethral resection of the prostate (TURP)',
    shortTitle: 'TURP',
    description: 'The reference endoscopic treatment for benign prostatic hyperplasia, performed through the natural passages without any incision.',
    fullDescription: `Transurethral resection of the prostate, or TURP, is the reference surgical treatment for prostate adenoma (benign hyperplasia). This endoscopic procedure is performed through the natural passages, without any incision: the surgeon introduces a resectoscope through the urethra and gradually removes the part of the prostate that obstructs the flow of urine.

The use of a modern bipolar resectoscope allows a precise procedure with excellent bleeding control. The tissue fragments removed are systematically analyzed under the microscope, providing additional diagnostic reassurance.

TURP provides lasting improvement of the urinary symptoms caused by the adenoma: difficulty urinating, weak stream, frequent nighttime awakenings, urgent urges. It is proposed when medical treatment is no longer sufficient or in the event of complications.

At Clinique Pasteur Tunis, TURP is performed with latest-generation endoscopic equipment, by experienced urologists, during a short and comfortable hospital stay.`,
    image: '/images/fiches/urochir-resection-transuretrale-prostate.webp',
    indications: [
      { label: 'Benign prostatic hyperplasia with significant urinary discomfort', explication: `With age, the prostate can enlarge and obstruct the flow of urine: weak stream, nighttime awakenings, urgent urges. Removing the obstructing portion restores lasting urinary comfort.` },
      { label: 'Failure of or intolerance to medical treatment', explication: `When medications no longer relieve the urinary symptoms or cause troublesome side effects, the procedure becomes the reference solution.` },
      { label: 'Repeated episodes of urinary retention', explication: `The sudden inability to urinate, requiring emergency catheter placement, indicates that the prostatic obstruction has become too severe: surgery removes this obstacle.` },
      { label: 'Recurrent urinary tract infections related to the adenoma', explication: `A bladder that empties poorly promotes urine stagnation and infections. Treating the prostatic obstruction helps break this vicious circle.` },
      { label: 'Impact of the prostatic obstruction on the bladder or kidneys', explication: `When the obstruction eventually strains the bladder or affects the kidneys, it is important to intervene to protect the entire urinary tract.` },
    ],
    preparation: [
      'Preoperative work-up with urine analysis (the urine must be sterile)',
      'Anesthesia consultation a few days before the procedure',
      'Possible adjustment of anticoagulant medications according to medical advice',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General or spinal anesthesia according to the anesthesiologist\'s assessment',
      'Introduction of the resectoscope through the natural passages, without any incision',
      'Gradual resection of the obstructing prostatic tissue under visual control',
      'Careful coagulation to limit bleeding',
      'Placement of a urinary catheter with temporary bladder irrigation',
      'Monitoring in the recovery room and then return to the room',
    ],
    duree: 'About 1 hour',
    resultats: 'The urinary catheter is removed after 24 to 72 hours, as soon as the urine clears. Urinary comfort improves quickly and continues to progress over the following weeks. A follow-up consultation is scheduled with the urologist to check on recovery.',
    risques: [
      'Temporary urinary bleeding in the days following the procedure',
      'Temporary burning sensations when urinating',
      'Retrograde ejaculation, common but harmless, explained during the consultation',
      'Urinary tract infection, prevented by checks before and after the procedure',
    ],
  },
  {
    slug: 'nephrectomie',
    title: 'Nephrectomy (kidney removal)',
    shortTitle: 'Nephrectomy',
    description: 'Total or partial removal of a kidney, performed preferably laparoscopically, to treat a tumor or a non-functioning kidney.',
    fullDescription: `Nephrectomy is the surgical procedure of removing a kidney, either entirely (total nephrectomy) or in part (partial nephrectomy). It is mainly indicated for kidney tumors, but also when a kidney has been destroyed or is no longer functioning as a result of chronic disease, stones or repeated infections.

Whenever possible, the operation is performed laparoscopically: small incisions allow the introduction of a camera and fine instruments, providing high surgical precision with a simpler postoperative course than open surgery. In certain cases of localized tumors, a partial nephrectomy makes it possible to remove only the diseased area and preserve the rest of the kidney.

Living with a single kidney is entirely compatible with a normal life: the remaining kidney takes over the entire renal function, provided regular medical follow-up is maintained.

At Clinique Pasteur Tunis, nephrectomy is performed by urologists highly experienced in major laparoscopic surgery, with a dedicated laparoscopy unit and an intensive care environment ensuring safe management from start to finish.`,
    image: '/images/fiches/urochir-nephrectomie.webp',
    indications: [
      { label: 'Kidney tumor confirmed by imaging', explication: `When a CT scan or MRI reveals a kidney tumor, its removal — total or limited to the diseased area — is the reference treatment.` },
      { label: 'Destroyed or non-functioning kidney (repeated infections, stones, chronic obstruction)', explication: `A kidney that no longer works can become a source of infections and pain. Removing it eliminates these complications, with the remaining kidney taking over all the work.` },
      { label: 'Kidney causing severe resistant high blood pressure', explication: `In certain rare cases, a diseased kidney sustains very high blood pressure that medications fail to control. Its removal can help normalize it.` },
      { label: 'Certain symptomatic kidney malformations', explication: `When a kidney malformation causes recurrent pain, infections or stones, surgery may be the best way to resolve the problem permanently.` },
    ],
    preparation: [
      'Complete imaging work-up (CT scan or MRI) to characterize the lesion',
      'Blood tests including assessment of kidney function',
      'Mandatory anesthesia consultation',
      'Discontinuation of anticoagulants as medically instructed',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General anesthesia',
      'Positioning appropriately on the operating table',
      'Creation of small incisions for the laparoscopic approach (or a single incision for open surgery)',
      'Careful dissection of the kidney and control of its blood vessels',
      'Removal of the entire kidney or of the diseased area only',
      'Careful verification that there is no bleeding, then closure',
      'Close postoperative monitoring',
    ],
    duree: '2 to 3 hours',
    resultats: 'The hospital stay generally lasts a few days. Eating and walking resume early. Kidney function is monitored with simple blood tests, and the remaining kidney gradually compensates. Regular follow-up with the urologist is then put in place.',
    risques: [
      'Intraoperative bleeding, controlled thanks to preparation and surgical technique',
      'Moderate postoperative pain, well relieved by painkillers',
      'Rare complications related to abdominal surgery, prevented by attentive monitoring',
    ],
  },
  {
    slug: 'chirurgie-calculs-renaux',
    title: 'Kidney stone surgery (lithotripsy)',
    shortTitle: 'Kidney stones',
    description: 'Modern treatment of urinary stones by laser fragmentation, performed through the natural passages in the vast majority of cases.',
    fullDescription: `Kidney and urinary stones are a common condition, responsible for sometimes intense pain (renal colic). When stones do not pass spontaneously or cause complications, surgical treatment becomes necessary.

Current techniques are overwhelmingly minimally invasive. Laser lithotripsy, performed during ureteroscopy, fragments the stone into fine dust or small pieces that are extracted or passed naturally. The procedure is carried out through the natural passages, without any incision.

The choice of technique depends on the size, location and composition of the stone, as well as the patient's anatomy. A metabolic work-up may be proposed later on to understand the origin of the stones and prevent recurrence through simple measures, particularly good hydration.

At Clinique Pasteur Tunis, stone treatment benefits from a complete technical platform: flexible and rigid ureteroscopes, a lithotripsy laser and intraoperative imaging, allowing effective management tailored to each situation.`,
    image: '/images/fiches/urochir-chirurgie-calculs-renaux.webp',
    indications: [
      { label: 'Urinary stone that does not pass spontaneously', explication: `Many small stones pass on their own with good hydration. When a stone remains stuck, laser fragmentation gets rid of it without any incision.` },
      { label: 'Repeated renal colic or persistent pain', explication: `Renal colic attacks are among the most intense forms of pain. Treating the responsible stone puts an end to these episodes and prevents their recurrence.` },
      { label: 'Obstructing stone threatening kidney function', explication: `A stone that blocks the flow of urine puts the kidney under pressure and can damage it. Removing it quickly protects kidney function.` },
      { label: 'Urinary tract infections associated with a stone', explication: `A stone can sustain urinary infections, a situation that can become serious. Removing it treats the infection at its source.` },
      { label: 'Large kidney stones requiring fragmentation', explication: `Large stones cannot pass naturally: the laser reduces them to fine dust or small fragments that are easy to extract or pass.` },
    ],
    preparation: [
      'Recent urine analysis: the urine must be sterile before the procedure',
      'Preoperative imaging (CT scan) to locate the stone precisely',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General anesthesia in most cases',
      'Introduction of the endoscope through the natural passages up to the stone',
      'Fragmentation of the stone with the laser under visual control',
      'Extraction of the fragments or natural passage of the dust',
      'Possible placement of a temporary internal stent (JJ stent) to protect the kidney',
      'Monitoring in the recovery room',
    ],
    duree: '30 minutes to 1 hour 30 depending on the size of the stone',
    resultats: 'Returning home is possible the same day or the next day in most cases. If an internal stent has been placed, it is removed at a later consultation. Analysis of the stone helps tailor prevention advice to limit recurrence.',
    risques: [
      'Mild, temporary urinary bleeding',
      'Temporary discomfort related to the internal stent, disappearing after its removal',
      'Urinary tract infection, prevented by checking the urine before the procedure',
      'A second session is sometimes needed for large stones',
    ],
  },
  {
    slug: 'ureteroscopie',
    title: 'Ureteroscopy',
    shortTitle: 'Ureteroscopy',
    description: 'Endoscopic exploration of the ureter and kidney through the natural passages, for diagnostic or therapeutic purposes.',
    fullDescription: `Ureteroscopy is an endoscopic technique for exploring the inside of the ureter (the duct connecting the kidney to the bladder) and the kidney cavities, passing through the natural passages. It requires no incision.

Performed with a rigid or flexible ureteroscope depending on the area to be reached, it makes it possible both to diagnose certain abnormalities (stone, narrowing, lesion of the wall) and to treat them at the same time: laser fragmentation of a stone, taking a biopsy, treating a narrowing.

The flexible ureteroscope, thanks to its steerable tip, provides access to all the kidney cavities with great precision, including hard-to-reach areas.

At Clinique Pasteur Tunis, ureteroscopy is performed in the operating theater with complete endoscopic equipment (flexible and rigid ureteroscopes, laser), by experienced urologists, most often during a short hospital stay.`,
    image: '/images/fiches/urochir-ureteroscopie.webp',
    indications: [
      { label: 'Stone in the ureter or kidney requiring fragmentation', explication: `The ureteroscope travels up through the natural passages to the stone, which is then fragmented with the laser under direct vision, without any incision.` },
      { label: 'Exploration of an abnormality seen on imaging', explication: `When a CT scan or ultrasound shows an unusual image in the ureter or kidney, endoscopic exploration allows it to be seen directly and its nature clarified.` },
      { label: 'Investigating the cause of urinary bleeding', explication: `The presence of blood in the urine must always be explained. Ureteroscopy allows the entire urinary tract to be inspected to find its origin.` },
      { label: 'Biopsy of a lesion of the urinary tract', explication: `If a lesion is discovered on the wall of the ureter or kidney cavities, a small sample is taken at the same time for microscopic analysis.` },
      { label: 'Treatment of certain narrowings of the ureter', explication: `A narrowed passage in the ureter can obstruct the flow of urine. Some narrowings can be treated directly endoscopically, without open surgery.` },
    ],
    preparation: [
      'Recent urine analysis: the urine must be sterile',
      'Preoperative imaging to guide the procedure',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General anesthesia in most cases',
      'Introduction of the ureteroscope through the urethra and then the bladder, without any incision',
      'Advancement under visual control to the area to be explored',
      'Diagnostic or therapeutic procedure as appropriate (laser, biopsy, extraction)',
      'Possible placement of a temporary internal stent',
      'Monitoring in the recovery room',
    ],
    duree: '30 minutes to 1 hour',
    resultats: 'Recovery is generally straightforward, with a return home the same day or the next day. Mild urinary burning or slight bleeding may occur for a few days. The results of any samples taken are communicated at the follow-up consultation.',
    risques: [
      'Temporary burning when urinating',
      'Mild, short-lived urinary bleeding',
      'Temporary discomfort if an internal stent is in place, removed at a consultation',
    ],
  },
  {
    slug: 'cystectomie',
    title: 'Cystectomy (bladder cancer)',
    shortTitle: 'Cystectomy',
    description: 'Surgical removal of the bladder as part of the treatment of bladder tumors, with reconstruction of a new urinary pathway.',
    fullDescription: `Cystectomy is the surgical procedure of removing the bladder. It is the reference treatment for certain bladder tumors when they can no longer be managed by simple endoscopic resections.

The operation involves removing the bladder and the affected neighboring tissues, then reconstructing a urinary pathway. Depending on the situation, the surgeon either diverts the urine to the skin through a segment of intestine or, when possible, fashions a new bladder from an intestinal segment (neobladder), allowing urination through the natural passages to be preserved.

This is major surgery, prepared with great care: a complete work-up, optimization of the patient's general condition and detailed information for the patient and their family. The decision and the reconstruction technique are discussed in a multidisciplinary meeting and tailored to each patient.

At Clinique Pasteur Tunis, cystectomy is managed by a surgical and anesthesia team experienced in major urological surgery, with a dedicated intensive care unit that secures the postoperative course and attentive support throughout the care pathway.`,
    image: '/images/fiches/urochir-cystectomie.webp',
    indications: [
      { label: 'Bladder tumor invading the bladder muscle', explication: `When the tumor has penetrated the muscle of the bladder wall, removing the bladder becomes the reference treatment in pursuit of a cure.` },
      { label: 'High-risk superficial tumors resistant to endoscopic treatment', explication: `Certain tumors that are still superficial but aggressive continue to progress despite resections through the natural passages: cystectomy is then proposed before they advance further.` },
      { label: 'Multiple tumor recurrences despite properly conducted treatment', explication: `When tumors keep reappearing despite repeated and well-followed treatments, removal of the bladder puts a stop to this progression.` },
      { label: 'Certain situations in which the bladder can no longer perform its function', explication: `A severely damaged bladder that is painful or can no longer hold urine may, in rare cases, warrant replacement with a new urinary pathway.` },
    ],
    preparation: [
      'Complete staging work-up (CT scan, laboratory tests)',
      'Anesthesia consultation and assessment of nutritional status',
      'Discussion of the urinary reconstruction method with the surgeon',
      'Stopping smoking strongly recommended before the procedure',
      'Fasting according to the anesthesia team\'s instructions',
    ],
    deroulement: [
      'General anesthesia',
      'Removal of the bladder and the affected tissues',
      'Removal of the neighboring lymph nodes',
      'Reconstruction of the urinary pathway (cutaneous diversion or neobladder)',
      'Careful verification and closure',
      'Monitoring in the intensive care unit or step-down unit',
      'Gradual resumption of eating and mobility',
    ],
    duree: '4 to 6 hours',
    resultats: 'The hospital stay is longer than for other urological procedures, allowing time for bowel function and the new urinary pathway to become established. Personalized support is provided for learning the necessary care, and regular follow-up is organized with the urology team.',
    risques: [
      'Complications inherent to any major abdominal surgery, prevented by rigorous preparation',
      'Temporary bowel function disturbances',
      'Adjustments required for the new way of passing urine, supported by the care team',
      'Close monitoring in intensive care to secure the first days',
    ],
  },
  {
    slug: 'chirurgie-incontinence-urinaire',
    title: 'Urinary incontinence surgery',
    shortTitle: 'Urinary incontinence',
    description: 'Surgical treatment of urinary leakage, notably by placement of suburethral slings, after a complete urodynamic assessment.',
    fullDescription: `Urinary incontinence, particularly stress incontinence (leakage when coughing, laughing, carrying loads or during sport), is a common problem that impairs quality of life. When pelvic floor rehabilitation is not sufficient, surgical treatment may be proposed.

The reference technique in women is the placement of a suburethral sling: a small synthetic tape is placed under the urethra through very short incisions, to support it during exertion and prevent leakage. It is a short procedure with a generally straightforward recovery. Other techniques exist and are chosen according to the type of incontinence and the results of the assessment.

Before any surgery, a complete urodynamic assessment is carried out to characterize the mechanism of the leakage precisely and propose the most appropriate treatment.

At Clinique Pasteur Tunis, this care benefits from a major asset: the urodynamic testing center integrated within the clinic, which ensures a seamless pathway from the initial assessment through to the procedure and follow-up.`,
    image: '/images/fiches/urochir-chirurgie-incontinence-urinaire.webp',
    indications: [
      { label: 'Stress urinary incontinence that is troublesome in daily life', explication: `Leakage when coughing, laughing, carrying loads or during sport can become very disabling. Placement of a supporting sling remedies this in a lasting way.` },
      { label: 'Failure or insufficiency of pelvic floor rehabilitation', explication: `Pelvic floor rehabilitation is always the first step. When it is not enough to control the leakage, surgery takes over.` },
      { label: 'Leakage confirmed and characterized by urodynamic assessment', explication: `Before any procedure, a specialized assessment precisely analyzes the mechanism of the leakage in order to choose the technique best suited to each patient.` },
      { label: 'Mixed incontinence with a predominant stress component', explication: `When stress leakage and urgency coexist, surgery is proposed if the stress-related component predominates, as that is what it corrects best.` },
    ],
    preparation: [
      'Prior urodynamic assessment at the clinic\'s testing center',
      'Urine analysis: the urine must be sterile',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General or spinal anesthesia depending on the case',
      'Very short incisions allowing passage of the sling',
      'Positioning of the sling under the urethra, without excessive tension',
      'Verification of correct positioning',
      'Monitoring of the return of urination before discharge',
    ],
    duree: 'About 30 minutes',
    resultats: 'Returning home is possible the same day or the next day. Daily activities resume quickly; strenuous physical exertion is avoided for a few weeks. The improvement in urinary comfort is most often immediate and lasting.',
    risques: [
      'Temporary difficulty urinating in the first days',
      'Temporary urgency, fading over time',
      'Short-lived local discomfort at the small incisions',
    ],
  },
  {
    slug: 'chirurgie-malformations-urogenitales',
    title: 'Surgery for urogenital malformations',
    shortTitle: 'Urogenital malformations',
    description: 'Surgical correction of congenital abnormalities of the urinary and genital tract, in children as well as adults.',
    fullDescription: `Certain abnormalities of the urinary or genital tract are present from birth: abnormal position of the urinary opening (hypospadias), reflux of urine from the bladder to the kidney, narrowing of the junction between the kidney and the ureter, undescended testicle, or rarer malformations. Others are discovered later, in adulthood.

Surgery for urogenital malformations aims to restore normal anatomy and function: protecting the kidney, allowing comfortable urination, preserving future fertility and cosmetic appearance. The techniques used are tailored to each malformation and, whenever possible, minimally invasive.

These procedures require particular expertise, careful planning based on imaging and clear information for patients and families, especially when children are involved.

At Clinique Pasteur Tunis, these procedures are performed by experienced urologists, in collaboration with the pediatric surgery team when the patient is a child, in a suitable and reassuring environment.`,
    image: '/images/fiches/urochir-chirurgie-malformations-urogenitales.webp',
    indications: [
      { label: 'Hypospadias and abnormalities of the urinary opening', explication: `When the urinary opening is not normally positioned at birth, reconstructive surgery restores normal anatomy and urination, with a refined cosmetic result.` },
      { label: 'Symptomatic vesicoureteral reflux', explication: `When urine flows back abnormally from the bladder to the kidney and causes repeated infections, surgical correction protects the kidney for the future.` },
      { label: 'Ureteropelvic junction syndrome (narrowing between kidney and ureter)', explication: `A passage that is too narrow at the outlet of the kidney obstructs the flow of urine and causes the kidney to dilate. The procedure widens this passage and preserves kidney function.` },
      { label: 'Undescended testicle', explication: `When a testicle has not descended spontaneously into the scrotum, surgery repositions it in order to protect its future function and make monitoring easier.` },
      { label: 'Other malformations of the urinary or genital tract requiring correction', explication: `Each malformation is unique: the procedure is tailored case by case, with the goals of normal function, preservation of fertility and a good cosmetic result.` },
    ],
    preparation: [
      'Precise imaging work-up (ultrasound, sometimes CT scan or scintigraphy)',
      'Urine analysis to rule out infection',
      'Anesthesia consultation, adapted to the patient\'s age',
      'Fasting according to the anesthesia team\'s instructions',
    ],
    deroulement: [
      'General anesthesia',
      'Surgical correction of the malformation using the appropriate technique',
      'Use of minimally invasive techniques whenever possible',
      'Possible placement of a temporary catheter or drain',
      'Postoperative monitoring adapted to the patient\'s age and the type of procedure',
    ],
    duree: '1 to 3 hours depending on the malformation',
    resultats: 'Recovery depends on the type of correction performed. Regular follow-up is organized to verify a good anatomical and functional result, particularly in children, whose growth is taken into account in the monitoring schedule.',
    risques: [
      'Temporary local discomfort or swelling',
      'Urinary tract infection, prevented by preoperative checks',
      'An additional procedure is sometimes needed later on, explained beforehand by the surgeon',
    ],
  },
  {
    slug: 'circoncision',
    title: 'Circumcision',
    shortTitle: 'Circumcision',
    description: 'A short and common procedure to remove the foreskin, performed under optimal surgical conditions.',
    fullDescription: `Circumcision consists of removing the foreskin, the skin covering the glans. It is one of the most common procedures in urology. It may be performed for medical reasons — phimosis (foreskin too tight), repeated infections, functional discomfort — or at the request of families for cultural or religious reasons.

Although it is a simple procedure, circumcision deserves to be performed under proper surgical conditions: operating theater, sterile equipment, appropriate anesthesia and an experienced surgeon. This guarantees a precise procedure, a refined cosmetic result and a straightforward recovery.

The procedure is most often performed on an outpatient basis: the child or adult comes in the morning and goes home the same day. Healing is rapid and local care is simple, explained in detail at discharge.

At Clinique Pasteur Tunis, circumcision is performed in the operating theater in a safe and reassuring setting, with particular attention paid to the child's comfort and to supporting the parents.`,
    image: '/images/fiches/urochir-circoncision.webp',
    indications: [
      { label: 'Troublesome or persistent phimosis (foreskin too tight)', explication: `When the foreskin remains too tight to retract normally, it can interfere with hygiene and urination. Circumcision resolves the problem definitively.` },
      { label: 'Repeated local infections (balanitis)', explication: `Repeated inflammation or infections of the glans and foreskin are favored by a tight foreskin. Removing it eliminates the cause of these episodes.` },
      { label: 'Paraphimosis or functional discomfort', explication: `A tight foreskin that remains stuck behind the glans is an emergency, and repeated discomfort in daily life also justifies the procedure.` },
      { label: 'Family request for cultural or religious reasons, in a safe medical setting', explication: `Performing circumcision in the operating theater, with appropriate anesthesia and an experienced surgeon, guarantees a precise, painless procedure and a straightforward recovery.` },
    ],
    preparation: [
      'Prior consultation with the surgeon',
      'Anesthesia consultation, particularly for children',
      'Fasting for 6 hours before the procedure',
      'Thorough washing on the morning of the procedure',
    ],
    deroulement: [
      'Admission to the day hospital',
      'Light general anesthesia for children, or local anesthesia possible for adults',
      'Removal of the foreskin and careful suturing with absorbable stitches',
      'Local dressing',
      'Short period of monitoring, then return home the same day',
    ],
    duree: '20 to 30 minutes',
    resultats: 'Healing is achieved within a few weeks. Slight swelling and local tenderness are normal during the first days and fade quickly. The stitches dissolve on their own and a follow-up consultation checks that healing is progressing well.',
    risques: [
      'Minor local bleeding, rare and easily controlled',
      'Temporary swelling during the first days',
      'Local infection, exceptional thanks to strict surgical conditions',
    ],
  },
  {
    slug: 'varicocele',
    title: 'Varicocele repair',
    shortTitle: 'Varicocele',
    description: 'Surgical treatment of dilated veins of the spermatic cord, often proposed in cases of discomfort or impact on fertility.',
    fullDescription: `A varicocele is a dilation of the veins surrounding the testicle, comparable to varicose veins. Common and most often located on the left side, it can cause a feeling of heaviness or discomfort in the scrotum, and is one of the treatable causes identified in male fertility work-ups.

Surgical treatment consists of interrupting the dilated veins to restore normal venous drainage. The procedure is performed through a short incision or laparoscopically, under anesthesia, with a generally very straightforward recovery.

It is an outpatient procedure in the vast majority of cases: the patient goes home the same day and quickly resumes his usual activities, simply avoiding strenuous physical exertion for a few weeks.

At Clinique Pasteur Tunis, varicocele repair is performed by experienced urologists, in the comfortable setting of the day hospital, with appropriate follow-up when the procedure is part of a fertility pathway.`,
    image: '/images/fiches/urochir-varicocele.webp',
    indications: [
      { label: 'Varicocele causing pain or scrotal heaviness', explication: `These dilated veins around the testicle can create a feeling of weight or discomfort, especially at the end of the day. Interrupting them makes this heaviness disappear.` },
      { label: 'Impact on semen parameters in a fertility work-up', explication: `A varicocele can warm the testicle and impair semen quality. Its treatment is one of the procedures proposed in certain male fertility pathways.` },
      { label: 'Large and bothersome varicocele', explication: `When the dilated veins become visible or bothersome in daily life, a short outpatient procedure gets rid of them.` },
      { label: 'Reduced testicular volume in adolescents', explication: `In a growing young man, a varicocele that hampers the development of the testicle warrants treatment to safeguard its future.` },
    ],
    preparation: [
      'Confirmatory scrotal ultrasound',
      'Anesthesia consultation',
      'Fasting for 6 hours before the procedure',
      'Plan for supportive underwear for the following days',
    ],
    deroulement: [
      'General anesthesia in most cases',
      'Short incision or laparoscopic approach depending on the chosen technique',
      'Identification and interruption of the dilated veins while preserving the other structures of the cord',
      'Careful closure',
      'Short period of monitoring, then return home the same day',
    ],
    duree: '30 minutes to 1 hour',
    resultats: 'Local discomfort usually disappears within a few days and activities resume quickly. When the procedure is motivated by a fertility work-up, any improvement in semen parameters is assessed after several months, during follow-up with the specialist.',
    risques: [
      'Small hematoma or temporary local swelling',
      'Short-lived discomfort when walking during the first days',
      'Possible but infrequent recurrence, monitored during follow-up',
    ],
  },
  {
    slug: 'chirurgie-surrenale-laparoscopique',
    title: 'Laparoscopic adrenal gland surgery',
    shortTitle: 'Adrenal gland surgery',
    description: 'Minimally invasive removal of a diseased adrenal gland, performed laparoscopically for a simpler postoperative course.',
    fullDescription: `The adrenal glands, located above each kidney, produce hormones essential to the body's balance. Certain adrenal tumors — most often benign — can secrete excess hormones or reach a size that justifies their removal: this is adrenalectomy.

The laparoscopic approach is today the reference technique for this surgery: through small incisions, the surgeon removes the gland with great precision, under the guidance of a high-definition camera. This minimally invasive approach offers a considerably more comfortable postoperative course than open surgery: less pain, a short hospital stay and rapid recovery.

Preparation for the procedure is essential, particularly for hormone-secreting tumors: it is carried out in close collaboration with the endocrinologist and the anesthesia team in order to balance hormone secretion before the surgical procedure.

At Clinique Pasteur Tunis, laparoscopic adrenalectomy is performed by surgeons highly experienced in advanced laparoscopy, with a dedicated laparoscopy unit and appropriate postoperative monitoring, in liaison with the endocrinologists.`,
    image: '/images/fiches/urochir-chirurgie-surrenale-laparoscopique.webp',
    indications: [
      { label: 'Adrenal tumor secreting excess hormones', explication: `Certain adrenal tumors produce too many hormones, which disrupts blood pressure, weight or mood. Removing the gland puts an end to this excessive production.` },
      { label: 'Adrenal tumor of significant size discovered on imaging', explication: `Beyond a certain size, an adrenal tumor is removed as a precaution, even without symptoms, to rule out any doubt about its nature.` },
      { label: 'Suspicious adrenal lesion requiring complete analysis', explication: `When imaging cannot confirm that the lesion is benign, its removal allows complete microscopic analysis and removes the uncertainty.` },
      { label: 'Certain cases of high blood pressure of adrenal origin', explication: `High blood pressure that is difficult to control can sometimes stem from a small adrenal tumor. Its removal can normalize blood pressure or significantly reduce the need for medication.` },
    ],
    preparation: [
      'Complete hormonal work-up in collaboration with the endocrinologist',
      'Precise imaging of the gland (CT scan or MRI)',
      'Specific medication preparation for certain hormone-secreting tumors',
      'Mandatory anesthesia consultation',
      'Fasting for 6 hours before the procedure',
    ],
    deroulement: [
      'General anesthesia with enhanced monitoring',
      'Creation of small incisions for the laparoscopic approach',
      'Careful dissection of the adrenal gland and control of its blood vessels',
      'Removal of the gland and protected extraction',
      'Careful verification, then closure of the small incisions',
      'Close monitoring in the recovery room, or even in a step-down unit',
    ],
    duree: '1 hour 30 to 3 hours',
    resultats: 'The hospital stay generally lasts a few days. Hormonal balance is checked after the procedure, and temporary replacement therapy may be necessary in some cases, supervised by the endocrinologist. Recovery is rapid thanks to the minimally invasive approach.',
    risques: [
      'Intraoperative blood pressure fluctuations, anticipated by medical preparation',
      'Bleeding, controlled by the laparoscopic technique and the team\'s experience',
      'Temporary hormonal imbalance, corrected with appropriate treatment',
    ],
  },
  {
    slug: 'rezum-prostate',
    title: 'Rezūm — water vapor treatment of prostate adenoma',
    shortTitle: 'Rezūm (water vapor)',
    description: 'Minimally invasive treatment of benign prostatic hyperplasia using water vapor, without incision, while preserving sexual function.',
    fullDescription: `Rezūm is a minimally invasive treatment for prostate adenoma (benign prostatic hyperplasia), the enlargement of the prostate common with age that obstructs the flow of urine. Rather than removing the tissue surgically, Rezūm uses the heat of water vapor to gradually shrink the excess prostatic tissue.

The procedure is carried out through the natural passages, via the urethra, without any incision. A thin probe fitted with a camera is introduced, and small amounts of water vapor are injected into the part of the prostate that compresses the urinary channel. Over the following weeks, this area shrinks away, the channel opens up and the urinary stream improves.

Most often performed under local anesthesia or light sedation and on an outpatient basis, Rezūm preserves continence and, above all, sexual function, particularly ejaculation, which is not always the case with conventional surgery. It is a particularly attractive option for patients wishing to avoid major surgery or preserve their sexual function.

At Clinique Pasteur Tunis, Rezūm is offered by the urology team as part of personalized management of prostate adenoma.`,
    image: '/images/fiches/urochir-rezum-prostate.webp',
    indications: [
      { label: 'Urinary symptoms related to prostate adenoma', explication: `Weak stream, urgent urges, frequent nighttime awakenings: when the enlarged prostate obstructs the flow of urine, Rezūm gently frees the passage.` },
      { label: 'Persistent discomfort despite medical treatment', explication: `When medications are no longer sufficient to relieve the urinary symptoms, Rezūm offers a lasting solution without major surgery.` },
      { label: 'Wish to preserve sexual function', explication: `Rezūm preserves ejaculation and sexual function, making it a preferred option for patients who want to protect this aspect.` },
      { label: 'Patient wishing to avoid major surgery', explication: `In frail men or those reluctant to undergo conventional surgery, Rezūm provides an effective, quick and well-tolerated treatment.` },
    ],
    preparation: [
      'Urological work-up (flow measurement, ultrasound, prostate assessment)',
      'Urine analysis to rule out infection',
      'Possible adjustment of certain medications according to medical advice',
      'Anesthesia consultation',
    ],
    deroulement: [
      'Procedure through the natural passages (urethra), without incision',
      'Local anesthesia or light sedation',
      'Introduction of a thin probe fitted with a camera',
      'Injection of micro-doses of water vapor into the excess prostatic tissue',
      'Removal of the probe; the excess tissue shrinks away over the following weeks',
      'Return home the same day in most cases',
    ],
    duree: '15 to 30 minutes',
    resultats: 'The improvement in the urinary stream and comfort is gradual over a few weeks, as the prostate tissue shrinks. A urinary catheter is sometimes left in place for a few days. Continence and sexual function are preserved, and activities resume quickly.',
    risques: [
      'Temporary urinary catheter for a few days after the procedure',
      'Short-lived urinary burning and temporary presence of blood in the urine',
      'Improvement is gradual rather than immediate, as the vapor takes effect',
    ],
  },
];
