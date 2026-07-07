export const examensUrodynamiques = [
  {
    slug: 'debitmetrie-urinaire',
    title: 'Uroflowmetry',
    shortTitle: 'Uroflowmetry',
    image: '/images/fiches/uro-debitmetrie-urinaire.webp',
    description: 'Non-invasive measurement of urinary flow used to assess the quality of voiding and detect possible obstacles to the outflow of urine.',
    fullDescription: `Uroflowmetry is the simplest and most commonly prescribed urodynamic test. It consists of measuring the urinary flow rate during voiding using an electronic flowmeter. The patient urinates into a measuring device that records in real time the volume of urine passed per unit of time.

This test produces a characteristic voiding curve that provides information on the maximum flow rate (Qmax), the average flow rate, the voided volume and the voiding time. These parameters are essential for assessing bladder and sphincter function and detecting bladder outlet obstruction.

Uroflowmetry is particularly useful in screening for benign prostatic hyperplasia in men, urethral strictures and bladder dysfunction. It is often the first test performed before considering a more comprehensive urodynamic assessment.

The results are interpreted according to age, sex and voided volume. A maximum flow rate below 15 ml/s in men or 20 ml/s in women is generally considered abnormal and warrants further investigation.`,
    preparation: [
      'Arrive with a full bladder (drink 500 ml of water about 1 hour before the test)',
      'Do not urinate in the 2 hours before the test',
      'Report any ongoing medication',
      'No specific dietary restrictions',
    ],
    deroulement: [
      'Comfortable installation in a private booth',
      'Voiding into an electronic flowmeter (special funnel)',
      'Automatic recording of the flow curve',
      'Measurement of the post-void residual by ultrasound after voiding',
      'Result immediately available in the form of a curve',
    ],
    duree: '10 to 15 minutes',
    resultats: 'The results are available immediately in the form of a flow curve. The physician analyses the maximum flow rate (Qmax), the average flow rate, the total voided volume and the shape of the curve to assess the quality of voiding.',
    risques: [
      'No risk: a completely non-invasive test',
      'Result may be inaccurate if the voided volume is insufficient (below 150 ml)',
    ],
    indications: [
      { label: 'Suspected benign prostatic hyperplasia', explication: `This test helps assess the urinary discomfort often linked to an enlarged prostate in men.` },
      { label: 'Voiding disorders (dysuria, urinary frequency)', explication: `It is offered when urinating becomes difficult or too frequent, to better understand these disorders.` },
      { label: 'Post-operative follow-up after prostate surgery', explication: `It verifies that voiding has improved after a prostate operation.` },
      { label: 'Suspected urethral stricture', explication: `It helps identify a narrowing of the urinary channel that would hinder the flow of urine.` },
      { label: 'Urinary incontinence assessment', explication: `It is part of the investigation of urinary leakage to clarify its mechanism.` },
      { label: 'Monitoring of neurogenic bladders', explication: `It helps monitor bladder function in people whose voiding is disturbed by a neurological disease.` },
    ],
  },
  {
    slug: 'cystomanometrie',
    title: 'Cystometry',
    shortTitle: 'Cystometry',
    image: '/images/fiches/uro-cystomanometrie.webp',
    description: 'Study of intravesical pressures during bladder filling and emptying, used to assess the compliance and contractility of the detrusor.',
    fullDescription: `Cystometry is the key test of the urodynamic assessment. It consists of measuring the pressures inside the bladder while it is gradually filled with saline solution, and then during the emptying phase. This test provides essential information on the behaviour of the detrusor muscle.

During the filling phase, cystometry assesses bladder sensation (first desire, normal desire, urgent desire to void), bladder compliance (the ability of the bladder to distend without an excessive rise in pressure) and detrusor stability (the absence or presence of involuntary contractions).

During the emptying phase, the test measures the detrusor contraction pressure and assesses the coordination between bladder contraction and relaxation of the urethral sphincter. These data are essential for distinguishing bladder outlet obstruction from detrusor underactivity.

Cystometry is indispensable in the diagnosis of unstable bladders, poorly compliant bladders and detrusor-sphincter dyssynergia, and in the pre-operative evaluation of many urological conditions.`,
    preparation: [
      'Have a urine culture (cytobacteriological examination of the urine) performed within the 7 days before the test to rule out a urinary tract infection',
      'Arrive with a moderately full bladder',
      'Stop anticholinergics 48 hours beforehand (on medical advice)',
      'Report any allergies (particularly to latex)',
      'Bring a list of current treatments',
    ],
    deroulement: [
      'Installation in the gynaecological position (women) or lying down (men)',
      'Local disinfection and insertion of a fine dual-channel bladder catheter',
      'Placement of a rectal pressure sensor to measure abdominal pressure',
      'Gradual filling of the bladder with warm saline solution',
      'Continuous recording of bladder and abdominal pressures',
      'The patient reports their sensations of needing to void (first desire, normal desire, urgent desire)',
      'Emptying phase with recording of the contraction pressure',
      'Removal of the catheters at the end of the test',
    ],
    duree: '30 to 45 minutes',
    resultats: 'The results are analysed by the specialist physician from the recorded pressure curves. The interpretation covers bladder capacity, compliance, sensation, detrusor stability and the quality of the voiding contraction. The detailed report is generally available within 48 hours.',
    risques: [
      'Slight discomfort during catheter insertion (not painful)',
      'Minimal risk of urinary tract infection (prevented by the prior urine culture)',
      'Transient burning on urination in the 24 to 48 hours following the test',
      'Possible traces of blood in the urine for 24 hours',
    ],
    indications: [
      { label: 'Urinary incontinence in women or men', explication: `It helps identify the cause of urinary leakage in order to guide the most appropriate treatment.` },
      { label: 'Overactive bladder (urgency, urinary frequency)', explication: `It is useful when there are pressing and frequent urges to urinate, to explore the behaviour of the bladder.` },
      { label: 'Neurogenic bladder (spinal cord injury, multiple sclerosis, Parkinson\'s disease)', explication: `It assesses the bladder when a neurological disease disturbs its function.` },
      { label: 'Pre-operative assessment before incontinence surgery', explication: `It is one of the tests performed before an operation for urinary leakage, to properly prepare the procedure.` },
      { label: 'Bladder outlet obstruction (prostatic hyperplasia)', explication: `It helps assess difficulty emptying the bladder, often related to the prostate in men.` },
      { label: 'Bladder emptying disorders', explication: `It is offered when the bladder has trouble emptying properly, to identify the cause.` },
      { label: 'Enuresis resistant to treatment', explication: `It helps investigate night-time leakage that persists despite the usual treatments.` },
    ],
  },
  {
    slug: 'profil-pression-uretrale',
    title: 'Urethral pressure profile (profilometry)',
    shortTitle: 'Profilometry',
    image: '/images/fiches/uro-profil-pression-uretrale.webp',
    description: 'Measurement of pressures along the urethra used to assess sphincter function and quantify urethral resistance.',
    fullDescription: `The urethral pressure profile, or profilometry, is a urodynamic test that measures pressures all along the urethra, from the bladder neck to the urethral meatus. It provides a precise assessment of the competence of the urethral sphincter and the quality of the resistance to outflow.

The test is performed by slowly withdrawing a measuring catheter through the urethra while recording the pressures. This produces a pressure profile that reveals the maximum closure pressure, the functional length of the urethra and the transmission of abdominal pressures to the urethra.

Profilometry is particularly important in the assessment of stress urinary incontinence in women. A low maximum closure pressure (sphincter deficiency) points to a particular type of incontinence and influences the choice of treatment (suburethral sling, artificial sphincter, periurethral injections).

This test can be performed at rest and during effort (coughing, straining) to assess the transmission of abdominal pressures to the urethra. Poor transmission is characteristic of urethral hypermobility and a lack of support of the pelvic floor.`,
    preparation: [
      'Negative urine culture less than 7 days old',
      'Arrive with a moderately full bladder',
      'Report any alpha-blocker or anticholinergic treatment',
      'No dietary restrictions',
      'Avoid sexual intercourse for 24 hours before the test',
    ],
    deroulement: [
      'Comfortable installation in the gynaecological position (women) or lying down (men)',
      'Careful local disinfection',
      'Introduction of a fine profilometry catheter into the bladder',
      'Slow, continuous withdrawal of the catheter through the urethra at a constant speed',
      'Recording of urethral pressures along the entire path',
      'Repetition of the measurement at rest and during effort (coughing)',
      'Removal of the catheter at the end of the test',
    ],
    duree: '15 to 20 minutes',
    resultats: 'The urethral pressure profile is analysed by measuring the maximum closure pressure, the functional length of the urethra and the transmission of pressures. These parameters make it possible to distinguish intrinsic sphincter deficiency from urethral hypermobility in the context of stress incontinence.',
    risques: [
      'A test that is not very painful but slightly uncomfortable',
      'Very low risk of urinary tract infection',
      'Temporary burning on urination',
      'Possible traces of blood in the urine for a few hours',
    ],
    indications: [
      { label: 'Assessment of stress urinary incontinence in women', explication: `It helps explain leakage that occurs during effort, coughing or sneezing.` },
      { label: 'Pre-operative evaluation before incontinence surgery', explication: `It is one of the preparatory tests before an operation for urinary leakage, in order to choose the appropriate technique.` },
      { label: 'Suspected sphincter deficiency', explication: `It helps assess the ability of the muscle that closes the bladder to hold urine properly.` },
      { label: 'Post-operative follow-up after incontinence repair', explication: `It monitors the outcome after an operation for urinary leakage.` },
      { label: 'Assessment of sphincter competence in men after prostatectomy', explication: `It helps assess the urinary closure mechanism when a man experiences leakage after a prostate operation.` },
      { label: 'Neurogenic bladder with sphincter disorders', explication: `It is useful when a neurological disease disturbs the muscle that controls the closure of the bladder.` },
    ],
  },
  {
    slug: 'etude-pression-debit',
    title: 'Pressure-flow study',
    shortTitle: 'Pressure-flow',
    image: '/images/fiches/uro-etude-pression-debit.webp',
    description: 'Simultaneous analysis of bladder pressure and urinary flow during voiding, essential for distinguishing obstruction from underactivity.',
    fullDescription: `The pressure-flow study is a fundamental urodynamic test that combines the simultaneous measurement of intravesical pressure and urinary flow during the voiding phase. It is the reference test for diagnosing bladder outlet obstruction.

The principle is based on the relationship between the pressure generated by the detrusor muscle to expel urine and the resulting flow. In the case of obstruction (prostatic hyperplasia, urethral stricture), detrusor pressure is high but flow remains low. In the case of detrusor underactivity, both pressure and flow are reduced.

The results are generally plotted on a nomogram (Abrams-Griffiths or Schäfer diagram) that classifies the patient into one of three categories: obstructed, equivocal or unobstructed. This classification is essential for treatment decisions, particularly in men with lower urinary tract symptoms.

The pressure-flow study is particularly indicated before any prostatic deobstruction surgery, as it objectively confirms the obstruction and avoids unnecessary operations in patients whose symptoms are due to detrusor underactivity.`,
    preparation: [
      'Recent negative urine culture (less than 7 days old)',
      'Arrive with a full bladder (drink enough before the test)',
      'Stop alpha-blockers 48 hours beforehand (on medical advice)',
      'Bring the results of previous tests (ultrasound, uroflowmetry)',
      'Report any history of urinary retention',
    ],
    deroulement: [
      'Insertion of a fine dual-channel bladder catheter',
      'Placement of a rectal pressure sensor',
      'Filling of the bladder until a comfortable desire to void is reached',
      'The patient urinates with the sensors in place into a flowmeter',
      'Simultaneous recording of bladder pressure, abdominal pressure and flow',
      'Calculation of the detrusor pressure (bladder pressure minus abdominal pressure)',
      'Removal of the catheters after voiding',
    ],
    duree: '30 to 45 minutes',
    resultats: 'The results are plotted on a nomogram (Abrams-Griffiths or Schäfer) that classifies the patient as obstructed, equivocal or unobstructed. The detrusor pressure at maximum flow (PdetQmax) is the key parameter. The detailed report is available within 48 hours.',
    risques: [
      'Discomfort from the bladder catheter in place during voiding',
      'Possible difficulty urinating with the catheter (stress, discomfort)',
      'Low risk of urinary tract infection',
      'Transient burning on urination after the test',
    ],
    indications: [
      { label: 'Suspected bladder outlet obstruction (prostatic hyperplasia)', explication: `It helps confirm that an obstacle, often related to the prostate, is hindering the flow of urine.` },
      { label: 'Pre-operative assessment before adenomectomy or prostate resection', explication: `It is performed before a prostate operation to make sure it will bring a real benefit.` },
      { label: 'Differentiation between obstruction and detrusor underactivity', explication: `It helps determine whether difficulty urinating comes from an obstacle or from a bladder that does not contract enough.` },
      { label: 'Recurrent urethral stricture', explication: `It is useful when a narrowing of the urinary channel recurs, to assess its impact.` },
      { label: 'Evaluation after failure of medical treatment for voiding disorders', explication: `It is offered when medication has not been enough to improve difficulty urinating.` },
      { label: 'Dysuria of uncertain aetiology', explication: `It helps clarify the origin of difficulty urinating whose cause has not yet been established.` },
    ],
  },
  {
    slug: 'bilan-urodynamique-complet-multicanal',
    title: 'Complete multichannel urodynamic assessment',
    shortTitle: 'Complete urodynamics',
    image: '/images/fiches/uro-bilan-urodynamique-complet-multicanal.webp',
    description: 'Complete, simultaneous exploration of all phases of the voiding cycle combining cystometry, profilometry and pressure-flow study.',
    fullDescription: `The complete multichannel urodynamic assessment is the most exhaustive functional exploration of the lower urinary tract. It combines several complementary tests in a single session: uroflowmetry, filling cystometry, pressure-flow study and urethral profilometry, with simultaneous recording on several pressure channels.

Multichannel recording makes it possible to measure bladder pressure, abdominal (rectal) pressure, detrusor pressure (calculated), urethral pressure and urinary flow at the same time. This comprehensive approach provides a complete picture of bladder and sphincter function and allows the different parameters to be correlated with one another.

This assessment is indispensable in complex clinical situations where a single test is not enough to establish a precise diagnosis. It is particularly useful in conditions combining several dysfunctions (for example, obstruction and bladder instability, or mixed incontinence) and in cases where an initial simplified assessment was inconclusive.

The complete multichannel urodynamic assessment is the gold standard of functional urological exploration, and its results directly guide the treatment strategy: medical treatment, pelvic floor rehabilitation, neuromodulation or surgery.`,
    preparation: [
      'Sterile urine culture less than 7 days old (mandatory)',
      'Arrive with a naturally full bladder',
      'Stop treatments that may interfere (anticholinergics, alpha-blockers) 48 to 72 hours beforehand, on medical advice',
      'Bring all results of previous tests (ultrasound, imaging, previous assessments)',
      'Allow for a longer examination time than for simple tests',
      'Report any allergy or any anticoagulant treatment',
    ],
    deroulement: [
      'Initial uroflowmetry with measurement of the post-void residual',
      'Insertion of the multichannel bladder catheter and the rectal sensor',
      'Filling phase: cystometry with recording of pressures and sensation',
      'Urethral profilometry at rest and during effort',
      'Emptying phase: pressure-flow study with simultaneous recording',
      'Final uroflowmetry and measurement of the post-void residual',
      'Removal of all equipment and post-examination advice',
    ],
    duree: '45 minutes to 1 hour',
    resultats: 'The detailed report incorporates all the measured parameters: bladder capacity, compliance, detrusor stability, urethral closure pressure, presence or absence of obstruction, and quality of the voiding contraction. It is available within 48 to 72 hours and allows a precise functional diagnosis to be made.',
    risques: [
      'Moderate discomfort related to the duration of the test and the presence of the catheters',
      'Low risk of urinary tract infection (prevented by the prior urine culture)',
      'Possible burning on urination for 24 to 48 hours',
      'Possible traces of blood in the urine for 24 hours',
      'Rarely: vasovagal reaction during catheter insertion',
    ],
    indications: [
      { label: 'Complex or mixed urinary incontinence', explication: `It is offered for urinary leakage involving several mechanisms that are difficult to understand with a single test.` },
      { label: 'Neurogenic bladder (spinal cord injury, multiple sclerosis, spina bifida)', explication: `It provides a complete evaluation of the bladder when a neurological disease disturbs its function.` },
      { label: 'Complete pre-operative assessment (prostate surgery, incontinence repair)', explication: `It provides an overall picture of urinary function before a major operation.` },
      { label: 'Failure of medical treatment for urinary disorders', explication: `It is useful when medication has not improved urinary disorders, to redirect management.` },
      { label: 'Voiding disorders of undetermined aetiology', explication: `It helps clarify the origin of urinary difficulties that remain unexplained after the initial tests.` },
      { label: 'Complex functional bladder and sphincter disorders', explication: `It allows a detailed exploration of disorders combining several abnormalities of bladder and sphincter function.` },
      { label: 'Follow-up of neurological patients at risk for the upper urinary tract', explication: `It helps monitor the bladder in order to protect the kidneys in neurological patients exposed to this risk.` },
    ],
  },
  {
    slug: 'video-urodynamique',
    title: 'Video-urodynamics',
    shortTitle: 'Video-urodynamics',
    image: '/images/fiches/uro-video-urodynamique.webp',
    description: 'Combination of a urodynamic assessment and real-time radiological imaging to visualise bladder morphology and function simultaneously.',
    fullDescription: `Video-urodynamics is the most complete and sophisticated test in the urodynamic arsenal. It combines a standard multichannel urodynamic assessment with real-time fluoroscopic (X-ray) or ultrasound imaging, making it possible to simultaneously correlate functional data (pressures, flows) and morphological data (bladder shape, opening of the bladder neck, reflux).

During the test, the bladder is filled with a radio-opaque contrast agent instead of saline solution. This makes it possible to visualise on the fluoroscopy screen the shape of the bladder, the competence of the bladder neck, the possible presence of diverticula or vesicoureteral reflux, and the behaviour of the urethra during voiding.

This technique is particularly valuable in neurological patients because it can detect vesicoureteral reflux or detrusor-sphincter dyssynergia, two complications that are potentially dangerous for the upper urinary tract. It also provides a simultaneous anatomical and functional evaluation in complex cases.

Video-urodynamics is considered the absolute gold standard in the evaluation of complex bladder and sphincter dysfunction, particularly in neurological patients, children with urogenital malformations and after failed incontinence surgery.`,
    preparation: [
      'Negative urine culture less than 7 days old (mandatory)',
      'Report any allergy to iodinated contrast agents',
      'Report a possible pregnancy (exposure to X-rays)',
      'Stop interfering treatments (anticholinergics) 48 hours beforehand',
      'Fasting is not necessary unless otherwise indicated',
      'Bring the results of previous tests and imaging',
    ],
    deroulement: [
      'Installation in a radiology room equipped with a fluoroscopy unit',
      'Insertion of the bladder catheter and the rectal pressure sensor',
      'Filling of the bladder with a warm radio-opaque contrast agent',
      'Simultaneous recording of pressures and radiological images',
      'Images taken at different stages of filling and during voiding',
      'Real-time detection of possible vesicoureteral reflux',
      'Voiding phase with simultaneous video and manometric recording',
      'Removal of equipment and post-void images if necessary',
    ],
    duree: '45 minutes to 1 hour 15 minutes',
    resultats: 'The report combines manometric data (pressures, flows, compliance) and morphological data (fluoroscopic images). It can detect vesicoureteral reflux, dyssynergia and anatomical abnormalities and correlate them with the functional data. Results available within 48 to 72 hours.',
    risques: [
      'Moderate exposure to X-rays (dose minimised by pulsed fluoroscopy)',
      'Rare risk of allergic reaction to the contrast agent',
      'Discomfort related to the duration of the test',
      'Low risk of urinary tract infection',
      'Transient burning on urination after the test',
      'Contraindicated in the case of pregnancy',
    ],
    indications: [
      { label: 'Complex neurogenic bladder (initial assessment and follow-up)', explication: `It provides a very complete evaluation of both the shape and the function of the bladder in neurological patients.` },
      { label: 'Suspected functional vesicoureteral reflux', explication: `It helps detect an abnormal backflow of urine from the bladder towards the kidneys, which is potentially harmful.` },
      { label: 'Detrusor-sphincter dyssynergia', explication: `It is useful when the bladder and the sphincter do not coordinate properly during voiding.` },
      { label: 'Congenital urogenital malformations in children', explication: `It helps investigate abnormalities of the urinary tract present from birth.` },
      { label: 'Failed incontinence surgery', explication: `It is offered when an operation for urinary leakage has not given the expected result, to understand why.` },
      { label: 'Complex voiding disorders not elucidated by standard assessment', explication: `It provides additional information when the usual tests have been inconclusive.` },
      { label: 'Evaluation of continent urinary diversions', explication: `It helps check the proper functioning of a surgical construction created to drain urine.` },
    ],
  },
  {
    slug: 'electromyographie-perineale',
    title: 'Perineal electromyography',
    shortTitle: 'Perineal EMG',
    image: '/images/fiches/uro-electromyographie-perineale.webp',
    description: 'Recording of the electrical activity of the pelvic floor muscles and the urethral sphincter to assess their innervation and coordination.',
    fullDescription: `Perineal electromyography (EMG) is a neurophysiological test applied to the exploration of the pelvic floor. It records the electrical activity of the striated perineal muscles (external anal sphincter, urethral sphincter, levator ani muscles) in order to assess their innervation and function.

Perineal EMG can be performed using surface electrodes (patches stuck to the skin of the perineum) or needle electrodes inserted directly into the muscles being explored. Surface electrodes are less invasive and are sufficient for the overall assessment of muscle activity during the urodynamic assessment. Needle electrodes provide a finer analysis of motor unit potentials.

This test is essential for the diagnosis of detrusor-sphincter dyssynergia, a condition in which the sphincter paradoxically contracts during voiding instead of relaxing. It can also detect perineal denervation (after traumatic childbirth, pelvic surgery or neurological damage) and assess the quality of reinnervation.

Perineal EMG is often combined with the other urodynamic tests to obtain a complete functional assessment. It provides valuable information on the neuromuscular coordination of the voiding cycle and guides the indications for pelvic floor rehabilitation or neuromodulation.`,
    preparation: [
      'No specific preparation required',
      'Report any anticoagulant treatment (if needle electrodes are used)',
      'Report any known neuropathy or neurological history',
      'Careful perineal hygiene before the test',
      'No dietary restrictions',
    ],
    deroulement: [
      'Installation in the gynaecological position or lying on the side',
      'Placement of surface electrodes on the perineum or insertion of needle electrodes into the target muscles',
      'Recording of muscle activity at rest',
      'Recording during voluntary contraction of the perineum',
      'Recording during straining and coughing efforts',
      'Assessment of sphincter coordination during bladder filling (if combined with the urodynamic assessment)',
      'Removal of the electrodes at the end of the test',
    ],
    duree: '20 to 30 minutes (up to 45 minutes if combined with the urodynamic assessment)',
    resultats: 'The analysis covers muscle activity at rest, the quality of recruitment during voluntary contraction, the presence of denervation potentials and sphincter coordination during the voiding cycle. The report is available within 48 hours.',
    risques: [
      'Slightly uncomfortable test with surface electrodes',
      'Minimal, transient pain in the case of needle electrodes',
      'Negligible risk of bleeding or infection at the puncture site (needle electrodes)',
      'No risk with surface electrodes',
    ],
    indications: [
      { label: 'Suspected detrusor-sphincter dyssynergia', explication: `It helps identify a lack of coordination between the bladder and the sphincter when urinating.` },
      { label: 'Assessment of perineal denervation (post-partum, post-surgical)', explication: `It evaluates the muscles of the perineum after childbirth or an operation that may have affected their nerves.` },
      { label: 'Urinary incontinence with suspected neurological damage', explication: `It is useful when urinary leakage could be linked to a problem with the nerves of the perineum.` },
      { label: 'Evaluation before pelvic floor rehabilitation', explication: `It helps assess the muscles of the perineum before starting an appropriate rehabilitation programme.` },
      { label: 'Bladder emptying disorders of neurological origin', explication: `It helps explain difficulty emptying the bladder related to the nervous system.` },
      { label: 'Suspected pudendal neuropathy', explication: `It helps investigate damage to the nerve of the perineum that can cause pain or control problems.` },
      { label: 'Follow-up of neurogenic bladders', explication: `It monitors the coordination of the perineal muscles in patients whose bladder is disturbed by a neurological disease.` },
    ],
  },
  {
    slug: 'mesure-residu-post-mictionnel-echographie',
    title: 'Ultrasound measurement of post-void residual',
    shortTitle: 'Post-void residual',
    image: '/images/fiches/uro-mesure-residu-post-mictionnel-echographie.webp',
    description: 'Non-invasive assessment by suprapubic ultrasound of the volume of urine remaining in the bladder after voiding.',
    fullDescription: `The measurement of the post-void residual (PVR) by ultrasound is a simple, quick and non-invasive test that quantifies the volume of urine remaining in the bladder immediately after voiding. It uses a portable ultrasound scanner or a dedicated device (bladder scanner) placed on the abdomen above the pubic bone.

The post-void residual is a fundamental parameter in urology and neuro-urology. A significant residual (generally above 100 ml) may indicate bladder outlet obstruction, detrusor underactivity or a disorder of bladder-sphincter coordination. Its measurement is systematically combined with uroflowmetry.

Suprapubic ultrasound not only measures the residual volume but also assesses bladder morphology (wall thickness, presence of diverticula, stones) and detects possible associated kidney abnormalities (pyelocaliceal dilatation). This dual anatomical and functional information makes it an essential first-line test.

The measurement is generally performed using the ellipsoid volume formula (length × width × height × 0.52) or automatically by the bladder scanner. Its reliability is excellent and reproducible, making it an ideal monitoring tool for patients under regular urological surveillance.`,
    preparation: [
      'No specific preparation',
      'Do not delay voiding before the test: urinate normally',
      'The measurement is performed immediately after voiding (within 5 minutes)',
      'No dietary restrictions',
    ],
    deroulement: [
      'The patient urinates normally (in the toilet or into a flowmeter)',
      'Installation lying on the back immediately after voiding',
      'Application of ultrasound gel on the abdomen above the pubic bone',
      'Measurement of the residual volume by suprapubic ultrasound or bladder scanner',
      'Measurements in the three planes of space if a standard ultrasound scanner is used',
      'Immediate result displayed on the screen',
    ],
    duree: '5 minutes',
    resultats: 'The residual volume is expressed in millilitres. A residual below 50 ml is considered normal. Between 50 and 100 ml, it should be monitored. Above 100 ml, it is significant and requires further investigation. The result is immediate.',
    risques: [
      'No risk: a completely non-invasive and painless test',
      'No exposure to X-rays (uses ultrasound)',
      'Result may be slightly imprecise in the case of significant obesity',
    ],
    indications: [
      { label: 'Systematic complement to uroflowmetry', explication: `It accompanies the urinary flow test to check that the bladder empties well after voiding.` },
      { label: 'Follow-up of patients treated for voiding disorders', explication: `It monitors the effectiveness of a treatment by measuring what remains in the bladder after urinating.` },
      { label: 'Assessment of chronic urinary retention', explication: `It helps evaluate a bladder that persistently fails to empty completely.` },
      { label: 'Monitoring of neurogenic bladders', explication: `It is useful for monitoring bladder emptying in people with a neurological disease.` },
      { label: 'Post-operative follow-up after prostate or pelvic surgery', explication: `It verifies that the bladder empties properly after an operation.` },
      { label: 'Assessment of recurrent urinary tract infections', explication: `It helps look for residual urine that could promote repeated urinary tract infections.` },
      { label: 'Evaluation of bladder emptying disorders', explication: `It is offered when the bladder has trouble emptying, to measure the extent of the problem simply.` },
    ],
  },
  {
    slug: 'test-remplissage-vesical',
    title: 'Bladder filling test',
    shortTitle: 'Filling test',
    image: '/images/fiches/uro-test-remplissage-vesical.webp',
    description: 'Assessment of bladder capacity and sensation by controlled filling, with analysis of compliance and detection of involuntary contractions.',
    fullDescription: `The bladder filling test is a urodynamic test that focuses specifically on the filling phase of the bladder. It consists of gradually filling the bladder with saline solution at a controlled rate while recording intravesical pressures and noting the patient\'s sensations.

This test evaluates three essential parameters: bladder sensation (perception of the different levels of the need to void), bladder compliance (the ability of the bladder to distend without an excessive rise in pressure) and detrusor stability (the absence of involuntary contractions during filling).

The test is performed at different filling rates (slow, medium, fast) depending on the clinical indications. Slow filling (10-20 ml/min) is more physiological and allows a better assessment of bladder sensation. Rapid filling can be used as a provocation test to reveal latent detrusor instability.

The results of the filling test are fundamental for the diagnosis of overactive bladder, a poorly compliant (rigid) bladder and disorders of bladder sensation. They allow the treatment to be tailored: anticholinergics for overactivity, intradetrusor botulinum toxin injection, or surgical bladder augmentation for severely poorly compliant bladders.`,
    preparation: [
      'Sterile urine culture less than 7 days old',
      'Stop anticholinergics and beta-3 agonists 48 hours beforehand',
      'Arrive with a moderate desire to void',
      'Report any history of urinary retention or indwelling catheter',
      'Bring the complete list of current treatments',
    ],
    deroulement: [
      'Comfortable installation in a semi-seated or gynaecological position',
      'Measurement of the initial post-void residual',
      'Insertion of a fine dual-channel bladder catheter and a rectal sensor',
      'Gradual filling of the bladder at a controlled rate with warm saline solution',
      'The patient reports their sensations: first desire, normal desire, urgent desire, compelling desire to void',
      'Continuous recording of pressures and detection of uninhibited contractions',
      'End of filling at the compelling desire to void or at maximum bladder capacity',
      'Removal of the catheters',
    ],
    duree: '20 to 30 minutes',
    resultats: 'The analysis covers maximum bladder capacity, compliance (volume/pressure ratio), sensation (volumes at the different levels of the desire to void) and detrusor stability (presence or absence of involuntary contractions). The report is available within 48 hours.',
    risques: [
      'Moderate discomfort related to the catheter and the filling',
      'Compelling urge to urinate at the end of filling (normal)',
      'Low risk of urinary tract infection',
      'Transient burning on urination for 24 hours',
      'Possible urine leakage during the test (normal and expected)',
    ],
    indications: [
      { label: 'Overactive bladder (urgency, urinary frequency)', explication: `It helps investigate pressing and frequent urges to urinate by observing the behaviour of the bladder as it fills.` },
      { label: 'Suspected poorly compliant bladder', explication: `It can identify a bladder that has become stiff and distends poorly as it fills.` },
      { label: 'Neurogenic bladder (assessment of risk to the upper urinary tract)', explication: `It helps assess whether the way the bladder functions puts the kidneys at risk in neurological patients.` },
      { label: 'Disorders of bladder sensation', explication: `It is useful when the perception of the need to urinate is reduced or, on the contrary, exaggerated.` },
      { label: 'Evaluation before intradetrusor botulinum toxin injection', explication: `It helps prepare a treatment for an overactive bladder by clarifying its behaviour during filling.` },
      { label: 'Assessment of unexplained urinary frequency', explication: `It is offered when a person urinates too often without an obvious cause, to explore the bladder.` },
      { label: 'Painful bladder syndrome (interstitial cystitis)', explication: `It helps evaluate a painful, low-capacity bladder to guide management.` },
    ],
  },
  {
    slug: 'bilan-urodynamique-pre-operatoire',
    title: 'Pre-operative urodynamic assessment',
    shortTitle: 'Pre-operative urodynamics',
    image: '/images/fiches/uro-bilan-urodynamique-pre-operatoire.webp',
    description: 'Complete functional assessment performed before urological surgery to confirm the diagnosis and guide the choice of operation.',
    fullDescription: `The pre-operative urodynamic assessment is a complete functional exploration systematically performed before certain urological operations. Its purpose is twofold: to confirm the functional diagnosis that justifies the surgery and to provide baseline data for evaluating the post-operative result.

Before prostatic deobstruction surgery (transurethral resection, adenomectomy, laser), the pre-operative assessment confirms bladder outlet obstruction by means of the pressure-flow study and detects any associated detrusor underactivity. In the absence of confirmed obstruction, surgery may not improve the patient\'s symptoms.

Before urinary incontinence surgery in women (suburethral sling, colposuspension), the assessment evaluates the urethral closure pressure, bladder capacity, compliance and detrusor stability. These parameters guide the choice of surgical technique and allow the patient to be informed about the chances of success and the risks of complications.

This assessment is also indispensable before the placement of an artificial urinary sphincter or a sacral neuromodulator, and before bladder augmentation. It represents an important medico-legal step because it documents the pre-operative functional state and objectively justifies the indication for surgery.`,
    preparation: [
      'Sterile urine culture less than 7 days old (mandatory, the test will be cancelled in the case of infection)',
      'Stop urological treatments that may interfere 48 to 72 hours beforehand (on the surgeon\'s advice)',
      'Bring the complete medical file: surgical consultation, imaging, laboratory tests',
      'Arrive with a naturally full bladder',
      'Allow for a substantial examination time (about 1 hour)',
      'Report any anticoagulant or antiplatelet treatment',
    ],
    deroulement: [
      'Initial free uroflowmetry with measurement of the post-void residual',
      'Placement of the pressure sensors (bladder catheter and rectal sensor)',
      'Filling cystometry: assessment of sensation, compliance and stability',
      'Urethral profilometry at rest and during effort (if incontinence surgery)',
      'Pressure-flow study during voiding (if deobstruction surgery)',
      'Measurement of the final post-void residual',
      'Results given to the surgeon to validate the indication for surgery',
    ],
    duree: '45 minutes to 1 hour',
    resultats: 'The detailed pre-operative report is sent to the surgeon. It includes all the measured parameters and a functional conclusion confirming or refuting the indication for surgery. It serves as a reference document for post-operative comparison. Results available within 48 to 72 hours.',
    risques: [
      'Same risks as the complete urodynamic assessment',
      'Moderate discomfort for the duration of the test',
      'Low risk of urinary tract infection',
      'Transient burning on urination',
      'Possible postponement of surgery if the results contraindicate the operation',
    ],
    indications: [
      { label: 'Before transurethral resection of the prostate (TURP) or adenomectomy', explication: `Before a prostate operation, it confirms that an obstacle really is hindering voiding and that the operation is justified.` },
      { label: 'Before incontinence surgery (TOT/TVT suburethral sling)', explication: `It helps choose the most appropriate technique before an operation for urinary leakage.` },
      { label: 'Before placement of an artificial urinary sphincter', explication: `It reviews urinary function before the placement of a device controlling urinary closure.` },
      { label: 'Before implantation of a sacral neuromodulator', explication: `It evaluates the bladder before the placement of a stimulator intended to improve its function.` },
      { label: 'Before bladder augmentation (enterocystoplasty)', explication: `It documents bladder function before an operation intended to increase its capacity.` },
      { label: 'Before prolapse surgery with associated incontinence', explication: `It helps prepare an operation when organ prolapse and urinary leakage occur together.` },
      { label: 'Before any major functional urological surgery', explication: `It provides a baseline evaluation of urinary function before a major operation.` },
    ],
  },
  {
    slug: 'bilan-incontinence-urinaire',
    title: 'Urinary incontinence assessment',
    shortTitle: 'Incontinence assessment',
    image: '/images/fiches/uro-bilan-incontinence-urinaire.webp',
    description: 'Complete, targeted urodynamic exploration to characterise the type of urinary incontinence and guide therapeutic management.',
    fullDescription: `The urinary incontinence assessment is a urodynamic exploration specifically directed at the aetiological diagnosis and characterisation of urinary leakage. It aims to determine the mechanism of the incontinence (stress, urgency, mixed) and to quantify its severity in order to guide the treatment strategy.

Stress urinary incontinence is due to a failure of the urethral closure mechanisms during rises in abdominal pressure. The assessment then includes urethral profilometry to measure the closure pressure, and a stress leak test (Valsalva test or cough test with a full bladder) to reproduce and quantify the leakage.

Urgency incontinence (or overactive bladder incontinence) is caused by involuntary contractions of the detrusor. Filling cystometry can reveal these uninhibited contractions, measure their amplitude and correlate them with the symptoms reported by the patient. The detection of detrusor overactivity profoundly changes the therapeutic approach.

Mixed incontinence, combining a stress component and an urgency component, is common and requires a complete assessment to rank the two components. Treatment of the predominant component will be given priority as first-line management. The incontinence assessment also includes a pad test (pad weighing test) to objectively quantify the leakage over a given period.`,
    preparation: [
      'Sterile urine culture less than 7 days old',
      'Complete a voiding diary over 3 days before the test',
      'Stop anticholinergics and beta-3 agonists 48 hours beforehand',
      'Arrive with a comfortably full bladder',
      'Bring the results of the pad test if performed',
      'Wear comfortable clothing that is easy to remove',
    ],
    deroulement: [
      'Detailed questioning about the type of leakage and its impact',
      'Free uroflowmetry and measurement of the post-void residual',
      'Insertion of the bladder catheter and the rectal sensor',
      'Filling cystometry with a search for involuntary contractions',
      'Stress leak test: coughing and Valsalva at different filling volumes',
      'Urethral profilometry at rest and during effort',
      'Short pad test if necessary (1 hour with standardised activities)',
      'Removal of the catheters and personalised advice',
    ],
    duree: '30 to 45 minutes (up to 1 hour 30 with the pad test)',
    resultats: 'The assessment classifies the incontinence into three types: stress incontinence (sphincter deficiency or urethral hypermobility), urgency incontinence (detrusor overactivity) or mixed incontinence. The severity is quantified by the leak point pressure, the closure pressure and the pad test. The detailed report guides therapeutic management.',
    risques: [
      'Discomfort related to the catheter and the manoeuvres used to provoke leakage',
      'Urine leakage expected during the test (that is the objective)',
      'Low risk of urinary tract infection',
      'Transient burning on urination',
      'Psychologically sensitive aspect: the test is performed with tact and discretion',
    ],
    indications: [
      { label: 'Stress urinary incontinence in women', explication: `It helps explain leakage that occurs during effort, coughing or laughing, which is common in women.` },
      { label: 'Urinary incontinence after radical prostatectomy in men', explication: `It is useful for investigating urinary leakage that has appeared after a prostate operation.` },
      { label: 'Urgency incontinence resistant to medical treatment', explication: `It is offered when pressing urges with leakage persist despite medication.` },
      { label: 'Mixed incontinence requiring ranking of the components', explication: `When several types of leakage coexist, it helps determine which one to treat first.` },
      { label: 'Pre-operative assessment before incontinence surgery', explication: `It is one of the tests preparing for an operation for urinary leakage, in order to optimise its result.` },
      { label: 'Recurrent incontinence after surgical repair', explication: `It is useful when leakage reappears after an operation, to understand its cause.` },
      { label: 'Incontinence in the elderly requiring a precise evaluation', explication: `It helps clarify the mechanism of leakage in the elderly in order to adapt management.` },
    ],
  },
  {
    slug: 'evaluation-troubles-vidange-vesicale',
    title: 'Evaluation of bladder emptying disorders',
    shortTitle: 'Emptying disorders',
    image: '/images/fiches/uro-evaluation-troubles-vidange-vesicale.webp',
    description: 'Targeted functional exploration to identify the cause of bladder emptying difficulties: mechanical obstruction, detrusor underactivity or dyssynergia.',
    fullDescription: `The evaluation of bladder emptying disorders is a urodynamic assessment specifically directed at the analysis of the voiding phase. It aims to identify the cause of difficulties in expelling urine, which may be related to a mechanical obstacle (obstruction), a lack of contraction strength of the bladder (detrusor underactivity) or a disorder of coordination between the bladder and the sphincter (dyssynergia).

Bladder outlet obstruction is the most common cause in men, mainly related to benign prostatic hyperplasia or urethral strictures. It is characterised by high detrusor pressure combined with a low flow rate. The pressure-flow study is the key test for confirming the diagnosis and quantifying the degree of obstruction.

Detrusor underactivity manifests as insufficient contraction pressure and a low flow rate. It may be of neurological origin (diabetes, neuropathy), drug-related or linked to ageing. Its diagnosis is essential because it contraindicates certain deobstruction operations that could worsen the retention.

Detrusor-sphincter dyssynergia, common in neurological conditions, combines a contraction of the detrusor with a paradoxical contraction of the sphincter during voiding. Its diagnosis relies on the combination of cystometry and perineal electromyography. Management involves self-catheterisation, sphincteric botulinum toxin or neuromodulation.`,
    preparation: [
      'Sterile urine culture less than 7 days old',
      'Arrive with a naturally full bladder',
      'Do not force voiding before the test',
      'Stop alpha-blockers 48 hours beforehand (on medical advice)',
      'Bring the imaging results (kidney and bladder ultrasound, previous uroflowmetry)',
      'Report any history of acute urinary retention',
    ],
    deroulement: [
      'Free uroflowmetry and measurement of the initial post-void residual',
      'Insertion of the bladder catheter and the rectal pressure sensor',
      'Possible placement of perineal EMG electrodes',
      'Controlled bladder filling until a comfortable desire to void is reached',
      'Voiding phase with simultaneous recording of bladder and abdominal pressures, flow and EMG',
      'Pressure-flow study with plotting on the Abrams-Griffiths nomogram',
      'Assessment of bladder-sphincter coordination',
      'Measurement of the final post-void residual',
      'Removal of the equipment',
    ],
    duree: '30 to 45 minutes',
    resultats: 'The assessment classifies the emptying disorder into three categories: bladder outlet obstruction (with quantification of the degree), detrusor underactivity or detrusor-sphincter dyssynergia. The Abrams-Griffiths nomogram provides an objective classification. The report guides management: deobstruction surgery, self-catheterisation, rehabilitation or neuromodulation.',
    risques: [
      'Moderate discomfort from the catheters in place during voiding',
      'Possible difficulty urinating under the test conditions',
      'Low risk of urinary tract infection',
      'Transient burning on urination',
      'Possible transient urinary retention (rare), which may require drainage catheterisation',
    ],
    indications: [
      { label: 'Dysuria with a significant post-void residual', explication: `It helps explain why the bladder empties poorly when a large amount of urine remains after voiding.` },
      { label: 'Chronic or recurrent urinary retention', explication: `It is offered when the bladder persistently or repeatedly fails to empty, to find the cause.` },
      { label: 'Pre-operative assessment before prostate surgery', explication: `It clarifies the origin of difficulty urinating before a prostate operation.` },
      { label: 'Suspected detrusor underactivity in the elderly', explication: `It helps identify a bladder that does not contract enough, a common situation with age.` },
      { label: 'Neurogenic bladder with emptying disorders', explication: `It is useful when a neurological disease prevents the bladder from emptying properly.` },
      { label: 'Recurrent urethral stricture', explication: `It helps assess the impact of a recurring narrowing of the urinary channel.` },
      { label: 'Failure of alpha-blocker medical treatment', explication: `It is offered when the medications intended to make urination easier have not been enough.` },
      { label: 'Suspected detrusor-sphincter dyssynergia', explication: `It helps confirm a lack of coordination between the bladder and the sphincter when urinating.` },
    ],
  },
]
