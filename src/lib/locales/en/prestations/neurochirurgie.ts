export const prestationsNeurochirurgie = [
  {
    slug: 'chirurgie-tumeurs-cerebrales',
    title: 'Brain tumor surgery',
    shortTitle: 'Brain tumors',
    description: 'Surgical removal of brain tumors under the operating microscope, guided by neuronavigation for maximum precision.',
    fullDescription: `Brain tumor surgery aims to remove the tumor as completely as possible while preserving neurological functions: movement, language, memory and vision. It is a high-precision surgery that now benefits from major technological advances.

The operation is planned using a high-resolution pre-operative MRI, which precisely locates the tumor and its relationship to the functional areas of the brain. In the operating room, the neurosurgeon operates under a microscope, guided by neuronavigation — a true surgical GPS — and, when useful, by neurophysiological monitoring, which continuously tracks nerve function throughout the procedure.

Every tumor removed is analyzed under the microscope to determine its exact nature. This analysis guides the next steps of care, which are always discussed in a multidisciplinary meeting, in coordination with the other specialists involved.

At Clinique Pasteur Tunis, brain tumor surgery relies on a state-of-the-art technical platform — neurosurgical microscope, neuronavigation, intraoperative monitoring, high-resolution MRI — and on a dedicated multipurpose intensive care unit that ensures a safe post-operative course.`,
    image: '/images/fiches/neurochir-chirurgie-tumeurs-cerebrales.webp',
    indications: [
      { label: 'Brain tumor detected on imaging and accessible to surgery', explication: `When a tumor is visible on MRI and its location allows it to be reached safely, surgery is the first-line treatment to remove it.` },
      { label: 'Tumor causing headaches, epileptic seizures or neurological deficits', explication: `When a tumor causes symptoms that disrupt daily life, its removal aims to make them regress and to protect brain function.` },
      { label: 'Need for a precise analysis of the lesion (biopsy or resection)', explication: `Knowing the exact nature of a lesion is essential for choosing the right treatment. A tissue sample or complete removal allows this analysis under the microscope.` },
      { label: 'Tumor compressing neighboring structures', explication: `A tumor pressing on nearby areas of the brain can impair their function. Removing it relieves this compression and prevents symptoms from worsening.` },
    ],
    preparation: [
      'High-resolution brain MRI for surgical planning',
      'Complete pre-operative work-up and anesthesia consultation',
      'Adjustment of ongoing treatments if needed (anticoagulants, antiepileptics)',
      'Fasting for 6 hours before the operation',
      'Detailed information for the patient and their family about the procedure and recovery',
    ],
    deroulement: [
      'General anesthesia with appropriate neurological monitoring',
      'Precise positioning and calibration of the neuronavigation system',
      'Targeted opening of the skull (craniotomy) over the tumor',
      'Removal of the tumor under the operating microscope, guided by neuronavigation',
      'Neurophysiological monitoring of nerve function when necessary',
      'Careful layer-by-layer closure',
      'Post-operative monitoring in intensive care or in a step-down unit',
    ],
    duree: '3 to 6 hours depending on the location',
    resultats: 'A follow-up CT scan or MRI is performed after the operation. Recovery is gradual and may be supported by tailored rehabilitation. The results of the tumor analysis are explained during a consultation and determine the next steps of the care pathway, coordinated by the team.',
    risques: [
      'Temporary fatigue and headaches after the operation',
      'Neurological deficit, the risk of which is reduced by neuronavigation and monitoring',
      'Post-operative epileptic seizures, prevented by appropriate treatment',
      'Rare complications inherent to any cranial surgery, managed through intensive care monitoring',
    ],
  },
  {
    slug: 'chirurgie-hernie-discale',
    title: 'Cervical and lumbar herniated disc surgery',
    shortTitle: 'Herniated disc',
    description: 'Minimally invasive surgical treatment of herniated discs to relieve the nerve compression responsible for sciatica and neuralgia.',
    fullDescription: `A herniated disc occurs when a fragment of an intervertebral disc shifts and compresses a nerve root. In the lumbar spine, it causes the classic sciatica or femoral neuralgia; in the cervical spine, arm pain (cervicobrachial neuralgia). Surgery is considered when the pain resists well-conducted medical treatment, or in the event of a neurological deficit.

The operation consists of freeing the compressed nerve root by removing the disc fragment responsible. In the lumbar spine, it is performed through a short posterior approach, under the operating microscope, with maximum preservation of the muscles. In the cervical spine, the approach is most often through the front of the neck, with placement of an intervertebral implant replacing the removed disc.

Relief of limb pain is usually rapid, sometimes as soon as the patient wakes up. Recovery is aided by early mobilization and simple postural advice.

At Clinique Pasteur Tunis, herniated disc surgery is performed under the operating microscope by an experienced neurosurgical team, with a short hospital stay and attentive support throughout convalescence.`,
    image: '/images/fiches/neurochir-chirurgie-hernie-discale.webp',
    indications: [
      { label: 'Sciatica or femoral neuralgia resistant to well-conducted medical treatment', explication: `When pain radiating down the leg persists despite medication, rehabilitation and injections, removing the disc fragment compressing the nerve usually brings rapid relief.` },
      { label: 'Persistent cervicobrachial neuralgia', explication: `This is the equivalent of sciatica in the arm: a herniated disc in the neck compresses a nerve and causes pain radiating into the upper limb. Surgery frees this nerve.` },
      { label: 'Motor deficit related to nerve compression', explication: `When the compressed nerve begins to lose strength, for example with a foot or hand that responds less well, it is important to operate without delay to promote recovery.` },
      { label: 'Disabling pain affecting quality of life despite treatment', explication: `When pain prevents sleeping, working or leading a normal life despite well-followed treatment, surgery becomes a reasonable and effective option.` },
      { label: 'Herniated disc confirmed by MRI and consistent with the symptoms', explication: `The operation is only offered when imaging shows a hernia that corresponds exactly to the pain experienced, which is the key to a good surgical outcome.` },
    ],
    preparation: [
      'Recent spinal MRI confirming the hernia',
      'Anesthesia consultation',
      'Adjustment of anticoagulant treatments according to instructions',
      'Fasting for 6 hours before the operation',
      'Stopping smoking is recommended to promote healing',
    ],
    deroulement: [
      'General anesthesia',
      'Short incision over the affected disc (back or front of the neck)',
      'Freeing of the nerve root under the operating microscope',
      'Removal of the disc fragment responsible for the compression',
      'Placement of an intervertebral implant in the cervical spine if necessary',
      'Careful closure and early mobilization from the following day',
    ],
    duree: '1 to 2 hours',
    resultats: 'Limb pain is usually markedly relieved within the first few days. The hospital stay is short and the return to activities is gradual, guided by the team\'s advice. Heavy lifting is avoided for a few weeks, and gentle rehabilitation may support recovery.',
    risques: [
      'Temporary scar pain',
      'Residual tingling that fades gradually',
      'Possible recurrence of a hernia at the same level, prevented by postural advice',
      'Rare neurological complications, minimized by the microsurgical technique',
    ],
  },
  {
    slug: 'chirurgie-canal-lombaire-etroit',
    title: 'Lumbar spinal stenosis surgery',
    shortTitle: 'Lumbar spinal stenosis',
    description: 'Surgical decompression of nerves trapped in a narrowed spinal canal, to restore a comfortable walking distance.',
    fullDescription: `Lumbar spinal stenosis is a progressive narrowing of the spinal canal, most often related to the natural wear of the discs and vertebral joints. The nerves running through it become cramped, causing the characteristic symptom: pain, heaviness or tingling in the legs when walking, forcing the person to stop and then lean forward for relief.

When walking difficulty becomes disabling despite medical treatment and rehabilitation, decompression surgery (laminectomy or canal widening) is offered. It consists of giving the nerves more space by removing the bony and ligamentous elements compressing them, under the operating microscope, while preserving the stability of the spine.

The main objective is to regain a comfortable walking distance and better independence in daily life. Patients are mobilized early and resume walking within the first few days.

At Clinique Pasteur Tunis, this operation is performed by a neurosurgical team experienced in spine surgery, with personalized support during recovery, particularly for older patients.`,
    image: '/images/fiches/neurochir-chirurgie-canal-lombaire-etroit.webp',
    indications: [
      { label: 'Painful reduction in walking distance (neurogenic claudication)', explication: `Nerves cramped in the lower back cause pain and heaviness in the legs after a few steps, forcing the person to stop. Surgery gives them back the space they need to walk farther.` },
      { label: 'Leg pain or tingling relieved by leaning forward', explication: `Being relieved by leaning forward, for example while pushing a shopping cart, is highly characteristic of lumbar spinal stenosis and points toward this diagnosis.` },
      { label: 'Failure of medical treatment and rehabilitation', explication: `Surgery is only considered when medication, injections and rehabilitation no longer provide sufficient relief.` },
      { label: 'Significant narrowing confirmed by MRI or CT scan', explication: `Imaging precisely visualizes the narrowing of the canal and verifies that it truly explains the symptoms before the operation is offered.` },
      { label: 'Major impact on day-to-day independence', explication: `When shopping, going for a walk or simply moving around at home becomes difficult, the operation aims above all to restore independence.` },
    ],
    preparation: [
      'Recent lumbar MRI or CT scan',
      'Pre-operative work-up adapted to age and anesthesia consultation',
      'Adjustment of ongoing treatments according to instructions',
      'Fasting for 6 hours before the operation',
    ],
    deroulement: [
      'General anesthesia',
      'Incision in the lower back over the narrowed levels',
      'Decompression of the nerves under the microscope by removing the compressive elements',
      'Preservation of the stability of the spine',
      'Careful closure',
      'First mobilization the following day with the team\'s assistance',
    ],
    duree: '1 to 3 hours depending on the number of levels',
    resultats: 'Walking is resumed quickly, with a gradual improvement in walking distance over the weeks. The hospital stay lasts a few days. Gentle rehabilitation and postural advice support the return to daily activities.',
    risques: [
      'Temporary scar pain',
      'Residual tingling that gradually subsides',
      'Tear of the membrane surrounding the nerves, rare and repaired during the same operation if it occurs',
    ],
  },
  {
    slug: 'chirurgie-rachis-stabilisation-arthrodese',
    title: 'Spine surgery (stabilization, fusion)',
    shortTitle: 'Spine surgery',
    description: 'Surgical stabilization of the spine by arthrodesis (vertebral fusion) in cases of instability, vertebral slippage or fracture.',
    fullDescription: `Some spinal conditions are accompanied by instability: slippage of one vertebra over another (spondylolisthesis), advanced disc degeneration, vertebral fracture, deformity or the aftermath of previous surgery. When this instability causes chronic pain or threatens the nerve structures, surgical stabilization may be offered.

Arthrodesis consists of permanently joining two or more vertebrae together using implants (screws, rods, intervertebral cages) and bone graft, in order to eliminate the painful movement and restore the alignment of the spine. It is frequently combined with decompression of the compressed nerves.

Planning is rigorous, based on complete imaging, and the procedure is performed with intraoperative radiological control ensuring precise implant positioning. Patients are mobilized early, and bone fusion continues over several months, supported by tailored rehabilitation.

At Clinique Pasteur Tunis, spinal stabilization surgery is performed by an experienced neurosurgical team, with a complete imaging platform and attentive post-operative monitoring, for a gradual and safe return to activities.`,
    image: '/images/fiches/neurochir-chirurgie-rachis-stabilisation-arthrodese.webp',
    indications: [
      { label: 'Painful or progressive vertebral slippage (spondylolisthesis)', explication: `When a vertebra gradually slips over the one below it, it causes pain and can compress the nerves. Fusing the vertebrae stops this slippage.` },
      { label: 'Vertebral instability causing chronic pain', explication: `Abnormal movement between two vertebrae can sustain persistent back pain. Joining them together eliminates this painful movement.` },
      { label: 'Vertebral fracture requiring stabilization', explication: `Some spinal fractures are unstable and must be fixed with implants to protect the spinal cord and nerves while the bone heals.` },
      { label: 'Advanced disc degeneration resistant to treatment', explication: `When a severely worn disc remains painful despite all medical treatments, fusing the affected segment can bring lasting relief.` },
      { label: 'Spinal deformities requiring correction', explication: `Some abnormal curvatures of the spine worsen over time and warrant surgical correction to restore good spinal balance.` },
    ],
    preparation: [
      'Complete imaging work-up (MRI, CT scan, dynamic X-rays)',
      'Pre-operative work-up and anesthesia consultation',
      'Stopping smoking is strongly recommended: it promotes bone fusion',
      'Adjustment of anticoagulant treatments',
      'Fasting for 6 hours before the operation',
    ],
    deroulement: [
      'General anesthesia',
      'Surgical approach to the spine adapted to the levels to be treated',
      'Decompression of the compressed nerve structures if necessary',
      'Placement of the implants (screws, rods, cages) under radiological control',
      'Placement of bone graft to achieve fusion',
      'Careful closure',
      'Early first mobilization assisted by the team',
    ],
    duree: '2 to 5 hours depending on the extent of the construct',
    resultats: 'The hospital stay generally lasts a few days. Bone fusion is achieved gradually over several months, during which heavy exertion is avoided. Rehabilitation, started gently, supports the return to activities. Regular radiological check-ups verify proper fusion.',
    risques: [
      'Post-operative pain, well controlled by pain medication',
      'Sometimes slow bone fusion, promoted by stopping smoking',
      'Implant-related discomfort, rare and amenable to an additional procedure if needed',
      'Rare neurological complications, prevented by intraoperative radiological control',
    ],
  },
  {
    slug: 'chirurgie-hematomes-intracraniens',
    title: 'Intracranial hematoma surgery',
    shortTitle: 'Intracranial hematomas',
    description: 'Surgical evacuation of intracranial bleeding, either as an emergency or as a scheduled procedure, to relieve compression of the brain.',
    fullDescription: `An intracranial hematoma is a collection of blood that forms inside the skull, following trauma, the rupture of a small vessel or, in elderly people, sometimes after a minor unnoticed impact (chronic subdural hematoma). By compressing the brain, it can cause headaches, confusion, weakness on one side of the body or impaired consciousness.

Surgical treatment consists of evacuating the hematoma to relieve the compression. Depending on its nature and location, the neurosurgeon performs either a simple opening in the skull to drain the hematoma (a common technique for chronic subdural hematoma), or a wider opening (craniotomy) for acute hematomas.

The speed of treatment is a decisive factor in the prognosis: this is why the clinic is organized to provide neurosurgical care without delay, from the emergency department to the operating room.

At Clinique Pasteur Tunis, intracranial hematoma surgery benefits from a complete and responsive pathway: emergency department, CT scanner available at all times, operating room and a dedicated multipurpose intensive care unit, guaranteeing rapid and safe treatment at any hour.`,
    image: '/images/fiches/neurochir-chirurgie-hematomes-intracraniens.webp',
    indications: [
      { label: 'Symptomatic chronic subdural hematoma (headaches, confusion, weakness)', explication: `In elderly people, a pocket of blood can form slowly around the brain, sometimes after a minor forgotten impact. Draining it through a small opening quickly relieves the symptoms.` },
      { label: 'Acute extradural or subdural hematoma after head trauma', explication: `After significant head trauma, bleeding can rapidly compress the brain. Its emergency evacuation is then decisive.` },
      { label: 'Intracerebral hematoma accessible to surgery', explication: `Some bleeds located within the brain itself can be surgically evacuated when their position allows it and when doing so improves the prognosis.` },
      { label: 'Hematoma causing significant compression visible on CT scan', explication: `The CT scan guides the decision: when the hematoma clearly compresses the brain, the operation relieves this pressure and protects brain function.` },
    ],
    preparation: [
      'Emergency brain CT scan to locate and measure the hematoma',
      'Coagulation work-up and correction of anticoagulant treatments',
      'Anesthesia consultation, adapted to the degree of urgency',
      'Pre-operative fasting when the degree of urgency allows',
    ],
    deroulement: [
      'General or local anesthesia depending on the type of hematoma',
      'Burr hole or craniotomy depending on the nature of the hematoma',
      'Evacuation of the blood and gentle washing of the cavity',
      'Placement of a temporary drain if needed',
      'Careful closure',
      'Close monitoring in intensive care or in a step-down unit',
      'Follow-up CT scan after the operation',
    ],
    duree: '30 minutes to 2 hours depending on the type of hematoma',
    resultats: 'Symptoms often improve rapidly after evacuation, particularly for chronic hematomas. Any drain is removed after a few days, and a follow-up CT scan verifies proper progress. Recovery then continues gradually, with rehabilitation if necessary.',
    risques: [
      'Possible recurrence of the hematoma, monitored by follow-up CT scans',
      'Temporary confusion in elderly patients, resolving with recovery',
      'Epileptic seizures, prevented by appropriate treatment if necessary',
    ],
  },
  {
    slug: 'traitement-chirurgical-epilepsie',
    title: 'Surgical treatment of epilepsy',
    shortTitle: 'Epilepsy surgery',
    description: 'Surgical management of drug-resistant epilepsy, after a complete neurophysiological work-up.',
    fullDescription: `Most epilepsies are well controlled with medication. But when seizures persist despite well-conducted treatment — known as drug-resistant epilepsy — a surgical solution may be considered in certain carefully selected patients.

The principle is to identify precisely the area of the brain where the seizures originate and then, when it can be removed without functional risk, to treat it surgically. This identification relies on a rigorous pre-surgical work-up: prolonged video-EEG recordings, high-resolution brain MRI and neuropsychological assessment, carried out in close collaboration between neurologists, neurophysiologists and neurosurgeons.

The operation itself is performed under the microscope, guided by neuronavigation and secured by intraoperative neurophysiological monitoring. The goal is a major reduction, or even complete disappearance, of the seizures, resulting in a transformation of quality of life.

At Clinique Pasteur Tunis, this care relies on close collaboration between the neurosurgery department and the clinic\'s neurophysiological exploration center, which performs the pre-surgical video-EEG work-ups and the intraoperative monitoring.`,
    image: '/images/fiches/neurochir-traitement-chirurgical-epilepsie.webp',
    indications: [
      { label: 'Epilepsy resistant to well-conducted drug treatment', explication: `When seizures persist despite several well-followed antiepileptic treatments, a surgical solution can be considered in certain carefully selected patients.` },
      { label: 'Disabling seizures affecting daily, school or professional life', explication: `Frequent seizures limit driving, work, studies and social life. The goal of surgery is to greatly reduce, or even eliminate, these seizures.` },
      { label: 'Epileptogenic zone identified and accessible to a surgical procedure', explication: `The operation is only possible if the region of the brain where the seizures originate is precisely located and can be treated without affecting essential functions.` },
      { label: 'Complete pre-surgical work-up concluding that surgery is indicated', explication: `Seizure recordings, MRI and neuropsychological assessment are analyzed as a team: surgery is only offered if all of these findings are consistent.` },
    ],
    preparation: [
      'Prolonged video-EEG work-up at the neurophysiological exploration center',
      'High-resolution brain MRI',
      'Complete neuropsychological assessment',
      'Multidisciplinary meeting validating the indication',
      'Anesthesia consultation and fasting for 6 hours before the operation',
    ],
    deroulement: [
      'General anesthesia',
      'Precise localization of the area to be treated using neuronavigation',
      'Targeted craniotomy',
      'Removal of the epileptogenic zone under the microscope',
      'Continuous neurophysiological monitoring to protect brain functions',
      'Closure and monitoring in intensive care or a step-down unit',
    ],
    duree: '3 to 5 hours',
    resultats: 'Antiepileptic treatment is continued after the operation and then gradually reassessed by the neurologist. The evolution of the seizures is closely followed at regular consultations, with EEG check-ups at the neurophysiological exploration center. Recovery is supported step by step by the team.',
    risques: [
      'Temporary fatigue and headaches after the operation',
      'Temporary neurological disturbances, minimized by intraoperative monitoring',
      'Possible persistence of some seizures, requiring continued appropriate treatment',
    ],
  },
  {
    slug: 'chirurgie-malformations-vasculaires-cerebrales',
    title: 'Cerebral vascular malformation surgery',
    shortTitle: 'Vascular malformations',
    description: 'Surgical treatment of brain aneurysms, arteriovenous malformations and cavernomas, decided in multidisciplinary consultation.',
    fullDescription: `Cerebral vascular malformations encompass several abnormalities of the brain\'s blood vessels: aneurysms (dilation of an artery), arteriovenous malformations (abnormal communication between arteries and veins) and cavernomas (clusters of small fragile vessels). Discovered after a bleed or incidentally during imaging, they require specialized evaluation.

Treatment depends on the type of malformation, its location and its history: some require simple monitoring, others endovascular treatment, and others surgery. The decision is always made in multidisciplinary consultation, on a case-by-case basis, carefully weighing the benefit and risk of each option.

When surgery is chosen, it is performed under the operating microscope with the help of neuronavigation: exclusion of an aneurysm by placing a clip, removal of a cavernoma or of an accessible arteriovenous malformation. Neurophysiological monitoring secures the procedure in functional areas.

At Clinique Pasteur Tunis, this highly specialized surgery benefits from a state-of-the-art technical platform — neurosurgical microscope, neuronavigation, high-resolution imaging — and a dedicated multipurpose intensive care unit that closely supervises the post-operative course.`,
    image: '/images/fiches/neurochir-chirurgie-malformations-vasculaires-cerebrales.webp',
    indications: [
      { label: 'Brain aneurysm requiring preventive treatment or treatment after a bleed', explication: `An aneurysm is a small fragile pouch on an artery of the brain. Treating it removes the risk of bleeding, or prevents a recurrence when a bleed has already occurred.` },
      { label: 'Symptomatic or at-risk arteriovenous malformation', explication: `This abnormal communication between arteries and veins can cause headaches, seizures or bleeding. Its treatment is decided case by case by a multidisciplinary team.` },
      { label: 'Cavernoma causing epileptic seizures or bleeding', explication: `A cavernoma is a cluster of small fragile vessels. When it bleeds or triggers epileptic seizures, its surgical removal may be recommended.` },
      { label: 'Vascular malformation discovered during a work-up and judged at risk in multidisciplinary consultation', explication: `Some malformations discovered by chance require only monitoring; others, judged at risk after team discussion, benefit from preventive treatment.` },
    ],
    preparation: [
      'Complete vascular imaging (CT angiography, MR angiography, arteriography as appropriate)',
      'Multidisciplinary consultation to choose the best strategy',
      'Complete pre-operative work-up and anesthesia consultation',
      'Adjustment of ongoing treatments',
      'Fasting for 6 hours before the operation',
    ],
    deroulement: [
      'General anesthesia with enhanced monitoring',
      'Targeted craniotomy planned with neuronavigation',
      'Treatment of the malformation under the microscope (aneurysm clipping, removal)',
      'Neurophysiological monitoring in functional areas',
      'Verification of the complete exclusion of the malformation',
      'Careful closure and monitoring in intensive care',
    ],
    duree: '3 to 6 hours',
    resultats: 'Follow-up imaging verifies the complete exclusion of the malformation. Initial monitoring takes place in intensive care, then recovery continues on the ward with, if needed, tailored rehabilitation. Long-term follow-up in consultation, with imaging, is then organized.',
    risques: [
      'Temporary fatigue and headaches',
      'Neurological deficit, the risk of which is assessed and explained before the operation',
      'Vasospasm after some aneurysm surgeries, closely monitored in intensive care',
      'Epileptic seizures, prevented by appropriate treatment',
    ],
  },
  {
    slug: 'neuronavigation',
    title: 'Neuronavigation',
    shortTitle: 'Neuronavigation',
    description: 'Computer-assisted surgical guidance technology, a true GPS for the brain, that increases the precision and safety of operations.',
    fullDescription: `Neuronavigation is a computer-assisted surgical guidance technology, often compared to a GPS for the brain. It allows the neurosurgeon to navigate the patient\'s anatomy in real time with millimetric precision, by superimposing the position of the instruments onto the MRI or CT images taken before the operation.

In practice, the patient\'s pre-operative images are loaded into the neuronavigation system and then matched to the actual position of the head in the operating room. Throughout the operation, the surgeon sees on a screen the exact position of the instruments relative to the lesion and to the functional areas to be preserved.

The benefits are tangible: smaller and perfectly centered cranial openings, more direct access to the lesion, greater protection of the sensitive areas of the brain and, overall, more precise and safer operations. Neuronavigation is particularly valuable for deep tumors, small lesions and surgery in functional areas.

At Clinique Pasteur Tunis, the neurosurgery department has a neuronavigation system coupled with high-resolution pre-operative MRI, used routinely for cranial surgery, directly benefiting patient safety.`,
    image: '/images/fiches/neurochir-neuronavigation.webp',
    indications: [
      { label: 'Brain tumor surgery, particularly for deep or small tumors', explication: `To reach a deep or tiny lesion, neuronavigation guidance makes it possible to follow the shortest and safest path through the brain.` },
      { label: 'Targeted brain biopsies', explication: `When a simple tissue sample is needed to analyze a lesion, neuronavigation guides the needle with millimetric precision.` },
      { label: 'Surgery near functional areas (movement, language)', explication: `Near the regions that control movement or speech, this guidance helps the surgeon preserve these essential functions.` },
      { label: 'Epilepsy surgery', explication: `The area where the seizures originate is identified on imaging and then located with exact precision in the operating room thanks to neuronavigation.` },
      { label: 'Certain operations on vascular malformations', explication: `To approach a malformation of the brain\'s vessels, the guidance allows a perfectly centered opening and a more direct and safer access.` },
    ],
    preparation: [
      'High-resolution brain MRI performed before the operation according to a dedicated protocol',
      'Planning of the surgical trajectory on the neuronavigation console',
      'Usual preparation for any neurosurgical operation (work-up, anesthesia, fasting)',
    ],
    deroulement: [
      'Loading of the patient\'s images into the neuronavigation system',
      'Positioning of the patient and matching of the images to their actual position',
      'Verification of the accuracy of the registration before starting',
      'Real-time guidance of the instruments throughout the operation',
      'Continuous monitoring of the position relative to the lesion and to the areas to be preserved',
    ],
    duree: 'Integrated into the duration of the neurosurgical operation',
    resultats: 'Neuronavigation contributes to more complete and safer resections, smaller cranial openings and better preservation of neurological functions. It directly contributes to the quality of post-operative recovery.',
    risques: [
      'Neuronavigation is a guidance tool with no risk of its own for the patient',
      'It reduces the risks of surgery by increasing the precision of the procedure',
    ],
  },
  {
    slug: 'chirurgie-nerfs-peripheriques',
    title: 'Peripheral nerve surgery',
    shortTitle: 'Peripheral nerves',
    description: 'Surgical treatment of nerve compressions (carpal tunnel, ulnar nerve) and traumatic injuries of the nerves of the limbs.',
    fullDescription: `Peripheral nerves, which run through the arms and legs, can be compressed at narrow anatomical passages or injured during trauma. The most frequent compression is carpal tunnel syndrome, which affects the median nerve at the wrist and causes nighttime tingling in the fingers; compression of the ulnar nerve at the elbow is another classic cause.

Nerve release surgery consists of opening the anatomical tunnel responsible for the compression to give the nerve more space. It is a short operation, often performed as day surgery, and relief of symptoms is generally rapid, particularly for nighttime tingling.

In the event of a traumatic nerve injury (wound, stretching), microsurgical repair can be performed: direct suturing of the nerve or nerve grafting under the microscope. Recovery is then gradual, as the nerve regrows slowly, and is supported by tailored rehabilitation.

At Clinique Pasteur Tunis, peripheral nerve surgery is performed under the operating microscope by an experienced neurosurgical team, in coordination with the clinic\'s neurophysiological exploration center, which performs the diagnostic and follow-up electromyograms.`,
    image: '/images/fiches/neurochir-chirurgie-nerfs-peripheriques.webp',
    indications: [
      { label: 'Carpal tunnel syndrome with bothersome tingling or loss of strength', explication: `The nerve compressed at the wrist causes tingling in the fingers, especially at night, then loss of strength. A short operation releases it and quickly relieves these symptoms.` },
      { label: 'Compression of the ulnar nerve at the elbow', explication: `This nerve, the one that causes an electric shock when you bump your elbow, can be compressed and cause tingling and weakness in the last fingers. Its surgical release prevents worsening.` },
      { label: 'Other nerve compression syndromes confirmed by electromyogram', explication: `Other nerves in the arms or legs can be trapped in narrow passages. The electromyogram confirms the compression before release surgery is offered.` },
      { label: 'Traumatic nerve injury requiring repair', explication: `After a wound or stretching injury, a severed nerve can be repaired under the microscope. The nerve then regrows slowly, with gradual recovery.` },
      { label: 'Benign tumor of a peripheral nerve', explication: `Some small benign tumors develop on the nerves and become bothersome or painful. They are removed while carefully preserving the nerve.` },
    ],
    preparation: [
      'Electromyogram (EMG) confirming the compression or injury',
      'Consultation with the surgeon to define the procedure',
      'Anesthesia consultation',
      'Fasting depending on the type of anesthesia planned',
    ],
    deroulement: [
      'Regional or general anesthesia depending on the procedure',
      'Short incision over the area of compression',
      'Release of the nerve under visual control, or under the microscope',
      'Microsurgical repair in the event of traumatic injury',
      'Careful closure and dressing',
      'Return home the same day in most cases',
    ],
    duree: '30 minutes to 2 hours depending on the procedure',
    resultats: 'For nerve releases, nighttime tingling often disappears quickly; strength and sensation then recover gradually. After repair of an injured nerve, recovery is slower, as the nerve regrows little by little, and is supported by rehabilitation followed by the team.',
    risques: [
      'Temporary scar sensitivity',
      'Sometimes incomplete recovery when the compression was longstanding',
      'Temporary stiffness, improved by rehabilitation',
    ],
  },
  {
    slug: 'traitement-nevralgie-trijumeau',
    title: 'Treatment of trigeminal neuralgia',
    shortTitle: 'Trigeminal neuralgia',
    description: 'Surgical management of the excruciating facial pain of trigeminal neuralgia when medication is no longer sufficient.',
    fullDescription: `Trigeminal neuralgia manifests as sudden, excruciating facial pain, comparable to electric shocks, triggered by everyday gestures: speaking, chewing, shaving, brushing one\'s teeth. This pain, among the most intense there is, profoundly affects quality of life when it recurs.

Treatment is based first on specific medications, which are effective in most patients. When the pain resists medical treatment or the treatment is poorly tolerated, several surgical solutions exist. The most comprehensive is microvascular decompression: in many cases, the neuralgia is caused by a small artery pulsating against the trigeminal nerve; the operation consists of placing a protective cushion between the vessel and the nerve, under the microscope, through a small opening behind the ear.

Less invasive techniques (thermocoagulation, balloon compression) may also be offered depending on the patient\'s age, general condition and preferences. The choice of technique is discussed case by case with the neurosurgeon.

At Clinique Pasteur Tunis, the management of trigeminal neuralgia combines precise assessment — high-resolution MRI looking for the conflict between vessel and nerve — and the expertise of a neurosurgical team equipped with the operating microscope and intraoperative monitoring.`,
    image: '/images/fiches/neurochir-traitement-nevralgie-trijumeau.webp',
    indications: [
      { label: 'Trigeminal neuralgia resistant to drug treatment', explication: `When the excruciating facial pain persists despite specific medications, a surgical solution can bring lasting relief.` },
      { label: 'Medication side effects preventing continued treatment', explication: `Some patients tolerate neuralgia treatments poorly (drowsiness, dizziness). Surgery then offers an alternative so they are not left without a solution.` },
      { label: 'Conflict between a vessel and the trigeminal nerve identified on MRI', explication: `In many cases, the pain comes from a small artery pulsating against the nerve. When the MRI shows this conflict, placing a protective cushion treats the very cause of the neuralgia.` },
      { label: 'Disabling facial pain affecting eating and social life', explication: `When speaking, chewing or brushing one\'s teeth triggers unbearable shocks, daily life becomes very difficult. The operation aims to restore a normal life.` },
    ],
    preparation: [
      'High-resolution brain MRI focused on the trigeminal nerve',
      'Precise assessment of the type of pain by the neurosurgeon',
      'Pre-operative work-up and anesthesia consultation',
      'Fasting for 6 hours before the operation',
    ],
    deroulement: [
      'General anesthesia',
      'Small opening of the skull behind the ear (microvascular decompression)',
      'Identification under the microscope of the conflict between the vessel and the nerve',
      'Placement of a protective cushion between the vessel and the nerve',
      'Intraoperative monitoring to preserve hearing and the neighboring nerves',
      'Careful closure and close monitoring',
    ],
    duree: '2 to 3 hours',
    resultats: 'Pain relief is often rapid, sometimes immediate, after successful decompression. Drug treatment is then gradually reduced under medical supervision. Regular follow-up verifies the stability of the result over time.',
    risques: [
      'Temporary headaches and fatigue after the operation',
      'Temporary facial numbness',
      'Hearing loss on the operated side, rare thanks to intraoperative monitoring',
      'Possible long-term recurrence, amenable to further treatment',
    ],
  },
];
