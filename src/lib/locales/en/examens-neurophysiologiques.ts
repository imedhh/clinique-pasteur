export interface ExamenNeurophysiologique {
  slug: string;
  title: string;
  shortTitle: string;
  image?: string;
  description: string;
  fullDescription: string;
  preparation: string[];
  deroulement: string[];
  duree: string;
  resultats: string;
  risques: string[];
  indications: { label: string; explication: string }[];
}

export const examensNeurophysiologiques: ExamenNeurophysiologique[] = [
  {
    slug: 'eeg-standard',
    title: 'Standard electroencephalogram (EEG)',
    shortTitle: 'Standard EEG',
    image: '/images/fiches/neuro-eeg-standard.webp',
    description:
      "Recording of the brain's electrical activity at rest and during stimulation, making it possible to detect functional abnormalities of the brain.",
    fullDescription: `The standard electroencephalogram (EEG) is a non-invasive examination that records the brain's electrical activity using electrodes placed on the scalp. It is one of the fundamental examinations in neurology, offering a direct window onto brain function in real time.

This examination is essential for the diagnosis and follow-up of epilepsy, but it is also valuable in the assessment of many other neurological conditions. The EEG can reveal abnormalities in the brain's electrical activity such as spikes, slow waves or paroxysmal discharges, which guide the diagnosis and direct therapeutic management.

During the recording, activation procedures are carried out: hyperpnoea (deep, rapid breathing for three minutes) and intermittent photic stimulation (IPS). These procedures help reveal abnormalities that would not be visible at rest. The examination is completely painless and safe.

At the Clinique Pasteur in Tunis, the EEG is performed by technicians specialised in neurophysiology and interpreted by experienced neurophysiologists, ensuring optimal recording and interpretation quality.`,
    preparation: [
      'Wash your hair the day before or the morning of the examination, without applying gel, hairspray or hair oil.',
      'Do not fast: have a light meal before the examination.',
      'Avoid coffee, tea or stimulating drinks in the 12 hours before the examination.',
      'Do not stop any ongoing medication, unless advised otherwise by the prescribing physician.',
      'If possible, sleep a little less than usual the night before (partial sleep deprivation) if the physician requests it.',
      'Bring the prescription, the results of previous examinations and the list of current medications.',
    ],
    deroulement: [
      'Comfortable positioning of the patient in a semi-seated or lying position in a quiet, dimly lit room.',
      'Placement of 21 electrodes on the scalp according to the international 10-20 system, secured with a conductive paste.',
      'Checking the impedance of each electrode to ensure recording quality.',
      'Recording of brain activity at rest, eyes closed then eyes open, for about 10 minutes.',
      'Hyperpnoea procedure: the patient breathes deeply and rapidly for 3 minutes.',
      'Intermittent photic stimulation (IPS) procedure at different frequencies.',
      'Removal of the electrodes and cleaning of the scalp.',
    ],
    duree: '30 to 45 minutes',
    resultats:
      'The results are interpreted by the neurophysiologist and a detailed report is generally available within 24 to 48 hours. In an emergency, an immediate interpretation can be carried out.',
    risques: [],
    indications: [
      { label: 'Suspected epilepsy or epilepsy follow-up', explication: `This examination helps determine whether seizures could be epileptic in origin and to monitor the course of an already known epilepsy.` },
      { label: 'Febrile convulsions in children', explication: `It is offered when a child has convulsions during high fevers, to better understand these episodes and reassure the parents.` },
      { label: 'Fainting with unexplained loss of consciousness', explication: `After fainting with loss of consciousness with no obvious cause, the examination looks for a possible cerebral origin.` },
      { label: 'Disturbances of consciousness or mental confusion', explication: `It is useful for exploring states of confusion or altered consciousness whose cause has not yet been identified.` },
      { label: 'Chronic or unusual headaches', explication: `It may be requested for persistent or unusually presenting headaches, in order to rule out a neurological cause.` },
      { label: 'Behavioural or cognitive disorders', explication: `It provides information when changes in behaviour or difficulties with memory and reasoning are of concern.` },
      { label: 'Metabolic or toxic encephalopathies', explication: `It helps the physician assess the impact on the brain of certain metabolic imbalances or poisonings.` },
      { label: 'Follow-up of antiepileptic treatments', explication: `It makes it possible to check the effect of a treatment for epilepsy and to adjust management over time.` },
      { label: 'Pre-operative neurosurgical assessment', explication: `It is one of the preparatory examinations before an operation on the brain, to assess how it is functioning.` },
    ],
  },
  {
    slug: 'eeg-sommeil',
    title: 'Sleep electroencephalogram',
    shortTitle: 'Sleep EEG',
    image: '/images/fiches/neuro-eeg-sommeil.webp',
    description:
      "Recording of the brain's electrical activity during sleep, particularly useful for detecting epileptic abnormalities that appear only during sleep.",
    fullDescription: `The sleep electroencephalogram is a neurophysiological examination that records the brain's electrical activity during the different phases of sleep. Many epileptic abnormalities appear only during sleep, making this examination essential in certain clinical situations.

Sleep is a powerful activator of interictal epileptic abnormalities. The transitions between wakefulness and sleep, as well as the slow-wave sleep stages, are particularly conducive to the appearance of epileptic discharges. The sleep EEG can therefore reveal abnormalities that escape the standard waking EEG.

This examination is particularly indicated in children with benign focal epilepsy with centrotemporal spikes, in idiopathic generalised epilepsies, or when the waking EEG is normal despite a strong clinical suspicion of epilepsy. It is also useful in the exploration of sleep disorders of neurological origin.

The Clinique Pasteur in Tunis has an environment specially arranged to encourage the patient's natural onset of sleep, with quiet, dark and air-conditioned rooms. Partial sleep deprivation the night before is generally recommended to facilitate falling asleep during the examination.`,
    preparation: [
      'Carry out partial sleep deprivation: go to bed 2 to 3 hours later than usual and get up 2 to 3 hours earlier.',
      'Wash your hair without styling products (gel, hairspray, oil).',
      'Do not consume coffee, tea, cola or energy drinks in the 24 hours before the examination.',
      'Have a light meal before coming.',
      'Do not stop antiepileptic treatments, unless expressly instructed by the physician.',
      'Bring comfortable clothing to help you fall asleep.',
      'Bring the prescription and the results of previous EEGs.',
    ],
    deroulement: [
      'Welcoming the patient and settling them into a quiet, dark room at a comfortable temperature.',
      'Placement of the electrodes on the scalp according to the international 10-20 system.',
      'Initial recording of a few minutes while awake (eyes open then eyes closed).',
      'The patient is invited to fall asleep naturally, aided by the prior sleep deprivation.',
      'Continuous recording throughout the sleep period, ideally covering the light and deep slow-wave sleep stages.',
      'Activation procedures (hyperpnoea and IPS) carried out on waking.',
      'Removal of the electrodes and cleaning.',
    ],
    duree: '1 hour 30 to 2 hours',
    resultats:
      'The report is drawn up by the neurophysiologist after a detailed analysis of the waking and sleep recording. The results are available within 48 hours.',
    risques: [],
    indications: [
      { label: 'Normal waking EEG despite a strong suspicion of epilepsy', explication: `It is offered when a first waking examination showed nothing while the clinical signs strongly suggest epilepsy, since some abnormalities appear only during sleep.` },
      { label: 'Benign focal epilepsy of childhood (centrotemporal spikes)', explication: `It helps identify this type of childhood epilepsy whose abnormalities are mainly visible during sleep.` },
      { label: 'Childhood absence epilepsy', explication: `It helps confirm the brief absences that a child may present and to guide management.` },
      { label: 'Landau-Kleffner syndrome', explication: `It is useful when language disorders in a child raise the suspicion of this particular form of sleep-related epilepsy.` },
      { label: 'Continuous spike-waves during sleep (CSWS)', explication: `It makes it possible to look for very frequent abnormal electrical activity during sleep, which can affect a child's learning.` },
      { label: 'Temporal lobe epilepsies', explication: `It helps reveal abnormalities in this region of the brain that often become apparent during sleep.` },
      { label: 'Paroxysmal sleep disorders to be distinguished from epilepsy', explication: `It helps distinguish a genuine epileptic seizure from other phenomena occurring during sleep.` },
      { label: 'Parasomnias requiring a differential diagnosis with epilepsy', explication: `It is requested to tell the difference between abnormal sleep behaviours and epileptic seizures.` },
      { label: 'Post-therapeutic follow-up of certain epilepsies', explication: `It makes it possible to monitor the course and the effect of treatment in certain sleep-related epilepsies.` },
    ],
  },
  {
    slug: 'video-eeg-prolonge',
    title: 'Prolonged video-EEG (continuous monitoring)',
    shortTitle: 'Video-EEG',
    image: '/images/fiches/neuro-video-eeg-prolonge.webp',
    description:
      "Simultaneous and prolonged recording of the brain's electrical activity and the patient's behaviour by video, making it possible to correlate clinical manifestations with EEG abnormalities.",
    fullDescription: `Prolonged video-EEG is a reference examination that combines the continuous recording of the brain's electrical activity (EEG) with synchronised video monitoring of the patient. This technique makes it possible to establish a precise correlation between the clinical manifestations observed and the corresponding cerebral electrical abnormalities.

This examination is carried out over a prolonged period, ranging from a few hours to several days depending on the indications. The patient is admitted to a dedicated unit, under the constant supervision of a specialised team. The main objective is to capture spontaneous clinical events (epileptic seizures, faints, abnormal movements) and to analyse their electrophysiological correlate.

Video-EEG is particularly crucial in the pre-surgical assessment of epilepsy, where it makes it possible to precisely locate the epileptogenic focus. It is also essential for distinguishing epileptic seizures from psychogenic non-epileptic seizures (PNES), a distinction that has major therapeutic implications.

The Clinique Pasteur in Tunis has a video-EEG unit equipped with the latest-generation equipment, with high-definition infrared cameras for night-time monitoring and a digital recording system allowing detailed retrospective analysis.`,
    preparation: [
      'A prior consultation with the neurologist is required to plan the duration of the monitoring.',
      'Prepare personal belongings for a stay of 24 hours to several days (clothing, toiletries).',
      'Wash your hair without styling products.',
      'A gradual reduction of antiepileptic treatments may be decided by the physician to encourage the occurrence of seizures.',
      'Do not stop or change treatments on your own without medical approval.',
      'Arrange for a companion if possible.',
      'Bring all the results of previous examinations (EEG, brain MRI, CT scans).',
    ],
    deroulement: [
      'Admission to the video-EEG unit and settling of the patient into a dedicated room.',
      'Placement of the EEG electrodes with reinforced fixation (collodion) for a prolonged recording.',
      'Calibration of the video system with cameras positioned to capture the patient\'s whole body.',
      'Continuous 24-hour recording of the EEG and video, with monitoring by the nursing staff.',
      'The patient can move around within a limited area, and eat and drink normally.',
      'In the event of a seizure, the nursing team carries out standardised clinical testing (verbal instructions, memory tests).',
      'At the end of the monitoring, the electrodes are removed and the antiepileptic treatment is resumed at the usual dose.',
    ],
    duree: '24 hours to 5 days depending on the indication',
    resultats:
      'The complete analysis of the recording (EEG and video) is carried out by the neurophysiologist. A detailed report including a description of the events captured is provided within one week. The results are discussed at a follow-up consultation.',
    risques: [
      'Risk of more frequent epileptic seizures in the event of treatment reduction, overseen by continuous medical supervision.',
      'Discomfort related to the prolonged wearing of the electrodes (possible skin irritation).',
      'Very rarely, status epilepticus requiring immediate medical intervention (a resuscitation team is available).',
    ],
    indications: [
      { label: 'Pre-surgical assessment of drug-resistant epilepsy', explication: `It is carried out when medication is not enough to control the epilepsy and an operation is being considered, in order to properly prepare this decision.` },
      { label: 'Differential diagnosis between epileptic seizures and psychogenic non-epileptic seizures', explication: `By filming the seizures while recording the brain's activity, it helps distinguish a genuine epileptic seizure from a faint of another nature.` },
      { label: 'Precise classification of the type of epilepsy', explication: `It makes it possible to specify the exact form of epilepsy in order to choose the best-suited treatment.` },
      { label: 'Localisation of the epileptogenic focus before surgery', explication: `It helps identify the area of the brain from which the seizures originate, essential information before an operation.` },
      { label: 'Quantification of seizures and interictal abnormalities', explication: `It makes it possible to count and better characterise the seizures and the abnormalities observed between seizures.` },
      { label: 'Assessment of the effectiveness of an antiepileptic treatment', explication: `It helps check whether a treatment is working well by observing the seizures and the brain activity over a prolonged period.` },
      { label: 'Paroxysmal events of undetermined nature', explication: `It is useful when faced with sudden, repeated episodes whose cause remains to be determined.` },
    ],
  },
  {
    slug: 'emg-detection',
    title: 'Needle electromyography (EMG)',
    shortTitle: 'Needle EMG',
    image: '/images/fiches/neuro-emg-detection.webp',
    description:
      "Examination exploring the electrical activity of muscles at rest and during contraction, making it possible to diagnose muscle disorders and peripheral nerve conditions.",
    fullDescription: `Needle electromyography (EMG) is a neurophysiological examination that analyses the electrical activity of muscles using a fine needle electrode inserted into the muscle. This examination makes it possible to assess the integrity of the motor unit, that is, the whole formed by the motor neuron, its axon and the muscle fibres it innervates.

Needle EMG successively explores the activity of the muscle at rest (looking for abnormal spontaneous activity such as fibrillations, fasciculations or myotonic discharges), then during a voluntary contraction effort (analysis of the motor unit potentials: morphology, duration, amplitude, recruitment). These parameters make it possible to distinguish a neurogenic condition (nerve disease) from a myogenic condition (muscle disease).

This examination is fundamental in the diagnosis of peripheral neuropathies, radiculopathies (sciatica, cruralgia), motor neuron diseases (amyotrophic lateral sclerosis), myopathies and myositides. It provides information complementary to nerve conduction studies and makes it possible to specify the site, severity and duration of the condition.

At the Clinique Pasteur in Tunis, the EMG is performed by experienced neurophysiologists using latest-generation electromyography equipment, allowing a fine and precise analysis of the motor unit potentials.`,
    preparation: [
      'No fasting is required.',
      'Come with clean skin, without cream or oil on the areas to be examined.',
      'Inform the physician if you are taking anticoagulants or antiplatelet agents.',
      'Report any history of coagulation disorders.',
      'Bring the prescription, the imaging results (MRI, CT scan) and recent laboratory tests.',
      'The examination is not contraindicated in pacemaker carriers, but it must be reported.',
    ],
    deroulement: [
      'The neurophysiologist carries out a history-taking interview and a targeted clinical examination.',
      'The patient is settled comfortably, with the muscles to be examined accessible.',
      'A fine, sterile, single-use needle electrode is inserted into the muscle to be studied.',
      'Recording of muscle activity at rest: looking for abnormal spontaneous activity.',
      'The patient is asked to contract the muscle progressively: analysis of the motor unit potentials.',
      'Maximal contraction: assessment of the interference pattern and the recruitment of the motor units.',
      'Several muscles are examined successively according to the clinical context.',
      'Withdrawal of the needle and disinfection of the puncture sites.',
    ],
    duree: '30 to 60 minutes',
    resultats:
      'The results are interpreted in real time by the neurophysiologist. A detailed report is given to the patient or sent to the prescribing physician within 24 to 48 hours.',
    risques: [
      'Moderate and transient pain when the needle is inserted into the muscle.',
      'A small haematoma at the puncture site, particularly in patients on anticoagulants.',
      'An extremely low infectious risk thanks to the use of sterile single-use needles.',
    ],
    indications: [
      { label: 'Suspected motor neuron disease (amyotrophic lateral sclerosis)', explication: `It helps the physician explore a disease affecting the nerves that control the muscles when suggestive signs appear.` },
      { label: 'Cervical or lumbar radiculopathies (sciatica, cruralgia)', explication: `It is useful when faced with pain radiating into the arm or leg, to determine whether a nerve root is compressed.` },
      { label: 'Peripheral neuropathies (diabetic, alcoholic, inflammatory)', explication: `It makes it possible to explore a condition affecting the nerves, for example related to diabetes, and to assess its extent.` },
      { label: 'Carpal tunnel syndrome and other entrapment syndromes', explication: `It helps confirm the compression of a nerve, such as at the wrist, causing tingling or numbness.` },
      { label: 'Myopathies and muscular dystrophies', explication: `It helps distinguish a disease of the muscle itself from a condition of the nerve that controls it.` },
      { label: 'Myositides and polymyositides', explication: `It helps explore an inflammation of the muscles responsible for weakness or pain.` },
      { label: 'Unexplained muscle weakness', explication: `It is offered when a loss of strength with no obvious cause needs to be explored.` },
      { label: 'Localised or diffuse muscle wasting', explication: `It helps understand the origin of muscle wasting, whether it affects a specific area or the whole body.` },
      { label: 'Persistent fasciculations or muscle cramps', explication: `It is useful when faced with repeated and bothersome muscle twitches or cramps.` },
    ],
  },
  {
    slug: 'vitesses-conduction-nerveuse',
    title: 'Nerve conduction studies (NCS)',
    shortTitle: 'Nerve conduction (NCS)',
    image: '/images/fiches/neuro-vitesses-conduction-nerveuse.webp',
    description:
      "Measurement of the speed and quality of transmission of the nerve impulse along the peripheral nerves, essential for the diagnosis of neuropathies.",
    fullDescription: `Nerve conduction studies (NCS) are a neurophysiological examination that measures the ability of the peripheral nerves to conduct the electrical impulse. By stimulating a nerve at one point and recording the response at another point, it is possible to calculate the conduction velocity, the amplitude of the response and other parameters reflecting the integrity of the nerve.

This examination makes it possible to distinguish two major types of nerve conditions: demyelinating conditions (destruction of the myelin sheath surrounding the nerve, leading to a slowing of conduction) and axonal conditions (destruction of the axon itself, leading to a reduction in the amplitude of the responses). This distinction is fundamental because it points towards different causes and treatments.

Nerve conduction studies are systematically combined with needle EMG to make up a complete electroneuromyographic assessment. They are particularly effective in the diagnosis of entrapment syndromes (carpal tunnel, Guyon's canal, cubital tunnel at the elbow), polyneuropathies and polyradiculoneuropathies.

The Clinique Pasteur in Tunis uses high-resolution digital electroneuromyography equipment, allowing precise and reproducible measurements. The examinations are carried out under standardised skin-temperature conditions, ensuring the reliability of the results.`,
    preparation: [
      'No fasting is required.',
      'Keep the hands and feet warm before the examination (cold slows nerve conduction and can distort the results).',
      'Come with clean skin, without cream or oil.',
      'Report the medications you are taking, in particular neurotoxic treatments.',
      'Report the presence of a pacemaker or an implantable defibrillator.',
      'Bring the results of previous examinations and the physician\'s prescription.',
    ],
    deroulement: [
      'The patient is settled comfortably, with the limbs to be examined uncovered.',
      'Checking of the skin temperature (warming may be necessary if the skin is too cold).',
      'Placement of surface electrodes (adhesive) on the skin over the nerve and the muscle to be studied.',
      'Electrical stimulation of the nerve using a bipolar stimulator placed on the skin: the stimulation causes a sensation of tingling or a brief contraction.',
      'Recording of the muscle response (motor conduction) or sensory response (sensory conduction).',
      'Stimulation at different levels along the nerve to calculate the segmental conduction velocity.',
      'Study of several nerves of the upper and/or lower limbs according to the clinical context.',
      'Measurement of the distal latencies, the amplitudes and the conduction velocities.',
    ],
    duree: '30 to 60 minutes',
    resultats:
      'The results are analysed by the neurophysiologist in comparison with the normal reference values. The report is available within 24 to 48 hours and details the conduction parameters of each nerve studied.',
    risques: [
      'An unpleasant but bearable sensation during the electrical stimulations.',
      'No risk for patients carrying a pacemaker if the precautions are observed.',
    ],
    indications: [
      { label: 'Carpal tunnel syndrome', explication: `It helps confirm the compression of the nerve at the wrist, often responsible for tingling in the hand.` },
      { label: "Guyon's canal syndrome (ulnar nerve at the wrist)", explication: `It explores the compression of another nerve at the wrist that can affect certain fingers.` },
      { label: 'Compression of the ulnar nerve at the elbow', explication: `It is useful when faced with tingling or weakness related to compression of the nerve at the elbow.` },
      { label: 'Polyneuropathies (diabetic, alcoholic, toxic, inflammatory)', explication: `It makes it possible to assess a widespread nerve condition, for example related to diabetes, and to specify its nature.` },
      { label: 'Acute polyradiculoneuropathy (Guillain-Barré syndrome)', explication: `It helps rapidly recognise this sudden-onset nerve condition, which requires urgent management.` },
      { label: 'Chronic polyradiculoneuropathy (CIDP)', explication: `It contributes to the diagnosis of a nerve condition developing over a long period and which may benefit from treatment.` },
      { label: 'Mononeuropathies and multiple mononeuropathies', explication: `It helps explore the involvement of one or several distinct nerves in order to understand its origin.` },
      { label: 'Hereditary neuropathies (Charcot-Marie-Tooth disease)', explication: `It provides useful information when a familial nerve disease is suspected.` },
      { label: 'Monitoring of neurotoxic treatments (chemotherapy)', explication: `It makes it possible to monitor the nerves in patients receiving treatments that may affect them.` },
    ],
  },
  {
    slug: 'potentiels-evoques-visuels',
    title: 'Visual evoked potentials (VEP)',
    shortTitle: 'VEP',
    image: '/images/fiches/neuro-potentiels-evoques-visuels.webp',
    description:
      "Recording of the electrical response of the visual cortex to a light stimulation, making it possible to assess the integrity of the visual pathways from the optic nerve to the occipital cortex.",
    fullDescription: `Visual evoked potentials (VEP) are a neurophysiological examination that measures the electrical response of the occipital visual cortex to a standardised visual stimulation. The examination consists of recording, using electrodes placed on the scalp over the occipital cortex, the electrical signals generated by the brain in response to a visual stimulus, most often an alternating checkerboard displayed on a screen.

This examination explores the functional integrity of the entire visual pathways, from the retina to the occipital cortex, passing through the optic nerve, the optic chiasm and the optic radiations. The main wave analysed is the P100 wave, whose latency (time of appearance) and amplitude are measured. A lengthening of the P100 wave latency is a very sensitive marker of demyelination of the optic nerve.

VEP have a privileged place in the diagnosis of multiple sclerosis, where they make it possible to detect optic neuritis even when clinically silent. A unilateral lengthening of the P100 latency strongly suggests retrobulbar optic neuritis, whether symptomatic or subclinical.

The Clinique Pasteur in Tunis carries out VEP according to the standardised protocols of the International Federation of Clinical Neurophysiology (IFCN), ensuring reliable results that are comparable over time.`,
    preparation: [
      'Bring your usual corrective glasses or contact lenses (visual acuity must be optimal).',
      'Wash your hair without styling products.',
      'The examination does not require fasting.',
      'Report any known ophthalmological condition (cataract, glaucoma, macular degeneration).',
      'Report the taking of any medication that may affect vision.',
      'Bring the results of recent ophthalmological and neurological examinations.',
    ],
    deroulement: [
      'The patient is settled comfortably seated in front of a screen, at a standardised distance.',
      'Placement of electrodes on the scalp over the occipital visual cortex.',
      'The examination is carried out eye by eye: a patch is placed alternately over each eye.',
      'The patient must fix a central point on the screen displaying a black-and-white checkerboard whose squares reverse at a regular frequency.',
      'The computer averages the cortical responses over 100 to 200 stimulations to extract the VEP signal from the background noise.',
      'Measurement of the latency and amplitude of the P100 wave for each eye.',
      'In the event of poor visual acuity, stimulation by a flash of light may be used.',
    ],
    duree: '30 to 45 minutes',
    resultats:
      'The neurophysiologist analyses the tracings and compares the latencies and amplitudes with the normative values. The results are available within 24 to 48 hours. A lengthening of the P100 latency or a significant inter-ocular asymmetry are the main abnormalities looked for.',
    risques: [],
    indications: [
      { label: 'Suspected multiple sclerosis (looking for subclinical optic neuritis)', explication: `It helps detect a condition of the optic nerve, sometimes without symptoms, as part of the assessment of multiple sclerosis.` },
      { label: 'Retrobulbar optic neuritis', explication: `It is useful for exploring an inflammation of the optic nerve responsible for a drop in vision.` },
      { label: 'Optic neuropathy (compressive, toxic, ischaemic, hereditary)', explication: `It makes it possible to assess the functioning of the optic nerve when it is affected for various reasons.` },
      { label: 'Unexplained drop in visual acuity', explication: `It helps specify the origin of a reduction in vision whose cause has not yet been established.` },
      { label: 'Tumours compressing the visual pathways (pituitary adenoma, meningioma)', explication: `It provides information when a mass may be pressing on the visual pathways.` },
      { label: 'Monitoring of demyelinating conditions', explication: `It makes it possible to follow the course of diseases affecting the protective sheath of the nerves, including those of vision.` },
      { label: 'Functional assessment of the visual pathways in uncooperative children', explication: `It offers a way to objectively assess vision in a child who cannot cooperate with a conventional examination.` },
      { label: 'Assessment of neurosarcoidosis or Behçet\'s disease with neurological involvement', explication: `It helps explore the impact of these inflammatory diseases when they affect the nervous system.` },
    ],
  },
  {
    slug: 'potentiels-evoques-auditifs',
    title: 'Auditory evoked potentials (AEP)',
    shortTitle: 'AEP',
    image: '/images/fiches/neuro-potentiels-evoques-auditifs.webp',
    description:
      "Recording of the electrical responses of the auditory pathways from the cochlear nerve to the brainstem, making it possible to assess hearing and the integrity of the central auditory pathways.",
    fullDescription: `Brainstem auditory evoked potentials (AEP), also called BAEP (brainstem auditory evoked potentials), record the electrical responses generated by the auditory pathways in response to a sound stimulation (clicks or tone bursts). The examination records a series of waves (I to V), each of which corresponds to a precise anatomical relay of the auditory pathways, from the cochlear nerve to the inferior colliculus.

Wave I is generated by the cochlear nerve, wave III by the superior olivary nuclei of the brainstem, and wave V by the inferior colliculus (midbrain). The analysis of the absolute latencies of each wave and of the inter-wave intervals makes it possible to localise a condition along the central auditory pathways, from the auditory nerve to the brainstem.

AEP are particularly useful in the diagnosis of acoustic neuromas (vestibular schwannoma), where a lengthening of the I-III interval is typically observed. They are also essential in the screening of neonatal deafness, because they allow an objective assessment of hearing without requiring the cooperation of the patient.

The Clinique Pasteur in Tunis has efficient AEP equipment, allowing a precise assessment of the electrophysiological hearing threshold and of the integrity of the central auditory pathways.`,
    preparation: [
      'No fasting is required.',
      'Wash your hair and ears; do not wear large earrings.',
      'Report any history of deafness, tinnitus or vertigo.',
      'In infants or young children, sleep deprivation or light sedation may be necessary (on medical prescription).',
      'Bring the results of recent audiograms and ENT examinations.',
      'Bring the prescribing physician\'s prescription.',
    ],
    deroulement: [
      'The patient is settled in a semi-reclined position in a quiet room.',
      'Placement of electrodes on the scalp (vertex) and the earlobes or mastoids.',
      'Audio headphones are placed over the patient\'s ears.',
      'Sound clicks are delivered to one ear, the other receiving a masking noise.',
      'The computer averages the electrical responses over 1,000 to 2,000 stimulations to extract waves I to V.',
      'The examination is carried out for each ear separately, at different intensities if necessary.',
      'Analysis of the absolute latencies of waves I, III and V and of the inter-wave intervals (I-III, III-V, I-V).',
    ],
    duree: '30 to 45 minutes',
    resultats:
      'The results are interpreted by the neurophysiologist and correlated with the clinical and audiometric data. The report is available within 24 to 48 hours.',
    risques: [],
    indications: [
      { label: 'Suspected acoustic neuroma (vestibular schwannoma)', explication: `It helps explore a benign tumour of the hearing nerve when it is suspected.` },
      { label: 'Unilateral or asymmetric sensorineural hearing loss', explication: `It is useful when faced with a hearing loss mainly affecting one ear, to specify its origin.` },
      { label: 'Screening for neonatal deafness', explication: `It makes it possible to objectively check a newborn's hearing, without any need for cooperation.` },
      { label: 'Multiple sclerosis (looking for subclinical brainstem involvement)', explication: `It helps identify a subtle condition of the auditory pathways as part of the assessment of multiple sclerosis.` },
      { label: 'Brainstem lesions (vascular, tumoral, inflammatory)', explication: `It provides information on the functioning of a deep region of the brain when it may be affected.` },
      { label: 'Monitoring in intensive care (coma, brain death)', explication: `It helps the medical team assess the state of the brain in patients in critical condition.` },
      { label: 'Objective assessment of hearing in uncooperative patients', explication: `It offers a reliable way to test hearing in a person who cannot respond to the usual tests.` },
      { label: 'Unilateral tinnitus requiring exploration', explication: `It is offered when faced with sounds perceived in a single ear, to look for the cause.` },
    ],
  },
  {
    slug: 'potentiels-evoques-somesthesiques',
    title: 'Somatosensory evoked potentials (SEP)',
    shortTitle: 'SEP',
    image: '/images/fiches/neuro-potentiels-evoques-somesthesiques.webp',
    description:
      "Recording of the electrical responses of the sensory pathways from the peripheral nerves to the cerebral cortex, assessing the integrity of the lemniscal pathway.",
    fullDescription: `Somatosensory evoked potentials (SEP) explore the lemniscal sensory pathway (the pathway of deep sensation and fine touch) in its entirety, from the peripheral nerves to the parietal cortex. The examination consists of electrically stimulating a peripheral nerve (usually the median nerve at the wrist or the posterior tibial nerve at the ankle) and recording the responses at different levels along the sensory pathways.

The upper-limb SEP (median nerve stimulation) record responses at the level of the brachial plexus (Erb's point), the cervical spinal cord, the brainstem and the parietal cortex. The lower-limb SEP (posterior tibial nerve stimulation) explore the sensory pathways from the cauda equina to the parietal cortex, passing through the spinal cord.

This examination is particularly indicated in the assessment of cervical and thoracic myelopathies, spinal cord compressions, multiple sclerosis and brainstem lesions. It is also used intraoperatively for the monitoring of the spinal cord during high-risk spinal surgeries.

The Clinique Pasteur in Tunis carries out SEP according to international recommendations, allowing a complete and reliable exploration of the somatosensory pathways. The examination is often coupled with VEP and AEP to make up a multimodal assessment of the evoked potentials.`,
    preparation: [
      'No fasting is required.',
      'Wash your hair without styling products.',
      'Keep the limbs warm to facilitate nerve stimulation.',
      'Report any history of sensory disturbances, neuropathic pain or spinal cord condition.',
      'Bring the results of spinal and brain MRIs if available.',
      'Bring the prescription and the list of current treatments.',
    ],
    deroulement: [
      'The patient is settled in a semi-reclined position, relaxed.',
      'Placement of recording electrodes on the scalp (parietal cortex), the nape of the neck (cervical spinal cord) and the supraclavicular fossa (Erb\'s point) or the lumbar region.',
      'Electrical stimulation of the median nerve at the wrist (upper limbs) or of the posterior tibial nerve at the ankle (lower limbs).',
      'The stimulation causes a slight twitch of the thumb or foot, painless to moderately unpleasant.',
      'The computer averages the responses over 500 to 1,000 stimulations.',
      'Analysis of the latencies of the different components at the peripheral, spinal and cortical levels.',
      'Calculation of the central conduction times (from the spinal level to the cortex).',
    ],
    duree: '45 minutes to 1 hour',
    resultats:
      'The results are interpreted by the neurophysiologist taking the clinical context into account. The report, available within 48 hours, specifies the conduction times at each level and identifies the possible site of the abnormality.',
    risques: [
      'An unpleasant sensation during the electrical stimulations, generally well tolerated.',
    ],
    indications: [
      { label: 'Multiple sclerosis (looking for subclinical involvement of the sensory pathways)', explication: `It helps identify a subtle condition of the sensory pathways as part of the assessment of multiple sclerosis.` },
      { label: 'Cervical spondylotic myelopathy (cervical spinal cord compression)', explication: `It is useful when wear of the neck vertebrae compresses the spinal cord, to assess its impact.` },
      { label: 'Spinal cord compression of another origin (tumoral, disc herniation)', explication: `It makes it possible to assess the functioning of the spinal cord when it is compressed by a herniation or a mass.` },
      { label: 'Traumatic spinal cord lesions', explication: `It helps assess the sensory pathways after an injury to the spinal cord.` },
      { label: 'Cauda equina syndrome', explication: `It is useful for exploring the involvement of the nerves at the bottom of the spine, causing sensory disturbances.` },
      { label: 'Brainstem conditions', explication: `It provides information on the sensory pathways passing through a deep region of the brain.` },
      { label: 'Intraoperative monitoring during spinal surgeries', explication: `It makes it possible to monitor the spinal cord in real time during a spinal operation, to protect it.` },
      { label: 'Prognostic assessment in coma and severe head trauma', explication: `It helps the medical team assess the state of the brain in seriously affected patients.` },
      { label: 'Inflammatory or infectious myelitis', explication: `It is useful for exploring an inflammation or infection of the spinal cord.` },
    ],
  },
  {
    slug: 'potentiels-evoques-moteurs',
    title: 'Motor evoked potentials (MEP)',
    shortTitle: 'MEP',
    image: '/images/fiches/neuro-potentiels-evoques-moteurs.webp',
    description:
      "Assessment of the corticospinal motor pathway by transcranial magnetic stimulation, measuring the central motor conduction time from the motor cortex to the muscles.",
    fullDescription: `Motor evoked potentials (MEP) explore the integrity of the corticospinal motor pathway (the pyramidal tract) using transcranial magnetic stimulation (TMS). A magnetic coil placed on the scalp generates a brief and powerful magnetic field that induces an electrical current in the motor cortex, activating the pyramidal neurons. The resulting muscle response is recorded by surface electrodes.

The examination measures the central motor conduction time (CMCT), that is, the time needed for the nerve impulse to travel along the pyramidal tract from the motor cortex to the motor neurons of the spinal cord. A lengthening of the CMCT or an absence of response indicates a condition of the central motor pathway.

MEP are complementary to SEP: while SEP explore the ascending sensory pathways, MEP assess the descending motor pathways. Together, they provide a complete functional mapping of the spinal cord. MEP are particularly useful in the diagnosis and follow-up of multiple sclerosis, myelopathies and motor neuron diseases.

The Clinique Pasteur in Tunis has a latest-generation transcranial magnetic stimulator, allowing focal and reproducible stimulation. The examination is non-invasive, painless and without side effects in the vast majority of cases.`,
    preparation: [
      'No particular preparation is required.',
      'It is imperative to report the presence of a pacemaker, an implantable defibrillator, cochlear implants or any intracranial ferromagnetic material (surgical clips).',
      'Report any history of epilepsy (relative contraindication).',
      'Report a pregnancy.',
      'Bring the results of brain and spinal MRIs if available.',
      'Remove metal objects (earrings, hairpins, necklaces) before the examination.',
    ],
    deroulement: [
      'The patient is settled in a seated or semi-reclined position.',
      'Placement of surface electrodes on the target muscles (muscles of the hand, arm or leg depending on the context).',
      'Positioning of the magnetic coil on the scalp, over the motor cortex.',
      'Triggering of the magnetic stimulation: the patient feels a slight click and a brief muscle contraction.',
      'Recording of the motor response at the level of the target muscles.',
      'Spinal stimulation (cervical or lumbar) to measure the peripheral conduction time.',
      'Calculation of the central motor conduction time by subtraction.',
      'The examination is carried out bilaterally to allow a comparison.',
    ],
    duree: '30 to 45 minutes',
    resultats:
      'The results are available within 24 to 48 hours. The report specifies the CMCT in the upper and lower limbs, the amplitudes of the motor responses and their comparison with the normative values.',
    risques: [
      'Absolute contraindication in carriers of a pacemaker, an implantable defibrillator or intracranial ferromagnetic material.',
      'An extremely low theoretical risk of triggering an epileptic seizure (precautions in epileptic patients).',
      'Possible transient headaches after the examination.',
    ],
    indications: [
      { label: 'Multiple sclerosis (assessment of pyramidal tract involvement)', explication: `It helps assess the pathways that control movement as part of the assessment of multiple sclerosis.` },
      { label: 'Cervical spondylotic myelopathy', explication: `It is useful when wear of the neck vertebrae compresses the spinal cord and hampers the control of movement.` },
      { label: 'Amyotrophic lateral sclerosis (ALS) and motor neuron diseases', explication: `It provides elements to explore diseases affecting the nerves that control the muscles.` },
      { label: 'Spinal cord compression', explication: `It makes it possible to assess the impact of a spinal cord compression on motor function.` },
      { label: 'Paraparesis or tetraparesis of undetermined origin', explication: `It helps understand the origin of weakness affecting the lower limbs or all of the limbs.` },
      { label: 'Unexplained central motor deficit', explication: `It is offered when faced with a loss of strength related to the central nervous system whose cause remains to be determined.` },
      { label: 'Post-therapeutic follow-up of motor pathway conditions', explication: `It makes it possible to follow the course and the effect of treatments in diseases affecting the control of movement.` },
      { label: 'Distinction between central and peripheral involvement of the motor pathway', explication: `It helps determine whether weakness originates from the brain and spinal cord or rather from the peripheral nerves.` },
    ],
  },
  {
    slug: 'bilan-pre-chirurgical-epilepsie',
    title: 'Pre-surgical assessment of epilepsy',
    shortTitle: 'Pre-surgical epilepsy assessment',
    image: '/images/fiches/neuro-bilan-pre-chirurgical-epilepsie.webp',
    description:
      "Complete multidisciplinary assessment aimed at precisely identifying the epileptogenic focus in patients with drug-resistant epilepsy who are candidates for surgery.",
    fullDescription: `The pre-surgical assessment of epilepsy is a comprehensive multidisciplinary evaluation programme intended for patients suffering from drug-resistant epilepsy. About 30 % of epileptic patients do not respond satisfactorily to drug treatments, and for some of them, epilepsy surgery offers a possibility of cure or significant improvement.

This assessment is based on the convergence of several complementary examinations whose objective is to precisely localise the epileptogenic focus (the area of the brain from which the seizures originate) and to ensure that its removal is possible without causing an unacceptable neurological deficit. The examinations carried out include prolonged video-EEG, high-resolution brain MRI, positron emission tomography (PET), ictal single-photon emission computed tomography (SPECT), a complete neuropsychological assessment and, in some cases, intracranial EEG (SEEG).

The surgical decision is taken collegially at a multidisciplinary team meeting (MDT) bringing together neurologists, neurophysiologists, neurosurgeons, neuroradiologists and neuropsychologists. Each case is discussed individually to determine the best therapeutic strategy.

The Clinique Pasteur in Tunis coordinates the pre-surgical assessment of epilepsy in collaboration with the various specialists, ensuring complete and personalised management of each patient.`,
    preparation: [
      'An initial consultation with an epileptologist neurologist to assess the indication for the assessment.',
      'Gather the whole medical file: consultation reports, previous EEGs, brain MRIs, treatments tried.',
      'Plan a hospital stay of 5 to 10 days for the prolonged video-EEG.',
      'Do not change antiepileptic treatments without prior medical advice.',
      'Be accompanied by a relative who can describe the seizures (a video recording of the seizures by those around you is very useful).',
      'Allow availability for the various examinations scheduled over several weeks.',
    ],
    deroulement: [
      'In-depth consultation by the epileptologist neurologist: history of the disease, semiological description of the seizures, previous treatments.',
      'Prolonged video-EEG (3 to 7 days) with controlled treatment reduction to record seizures.',
      'High-resolution brain MRI with an epilepsy protocol (specific sequences, thin slices).',
      'Complete neuropsychological assessment: evaluation of memory, language, executive and visuospatial functions.',
      'Brain PET with 18-FDG (interictally) to identify areas of hypometabolism.',
      'Ictal SPECT if necessary (injection of the tracer during a seizure).',
      'Wada test (if temporal surgery is being considered): assessment of the lateralisation of language and memory.',
      'Multidisciplinary team meeting for a collegial discussion of the case and a therapeutic decision.',
    ],
    duree: 'Several weeks (staggered assessment)',
    resultats:
      'The conclusions of the assessment are presented to the patient and their family at a dedicated consultation. A complete report is drawn up, including the summary of all the examinations and the therapeutic proposal chosen by the MDT (surgery, vagus nerve stimulation, other options).',
    risques: [
      'Risk of more frequent or more severe seizures during treatment reduction for the video-EEG (under continuous medical supervision).',
      'Exceptional risk of status epilepticus (immediate management possible).',
      'Risks related to any invasive examinations (SEEG): infection, haemorrhage (explained in detail before the procedure).',
      'Risks related to the Wada test: allergic reaction to the contrast agent, stroke (exceptional).',
    ],
    indications: [
      { label: 'Drug-resistant epilepsy (failure of at least 2 well-conducted antiepileptic treatments)', explication: `This assessment is intended for people whose epilepsy continues despite several well-followed treatments, in order to consider other solutions.` },
      { label: 'Disabling epileptic seizures affecting quality of life', explication: `It is offered when the seizures have a strong impact on daily life and justify an in-depth assessment.` },
      { label: 'Mesial temporal lobe epilepsy with hippocampal sclerosis', explication: `It helps specify this frequent type of epilepsy, which is often amenable to an operation.` },
      { label: 'Lesional epilepsy (tumour, cortical malformation, cavernoma)', explication: `It is useful when the seizures are related to a visible abnormality of the brain that can be operated on.` },
      { label: 'Partial epilepsy with a presumed single and operable focus', explication: `It makes it possible to verify that the seizures originate from a single area of the brain that could be removed safely.` },
    ],
  },
  {
    slug: 'monitoring-neurophysiologique-per-operatoire',
    title: 'Intraoperative neurophysiological monitoring',
    shortTitle: 'Intraoperative monitoring',
    image: '/images/fiches/neuro-monitoring-neurophysiologique-per-operatoire.webp',
    description:
      "Real-time monitoring of nerve function during surgical procedures involving a neurological risk, making it possible to prevent irreversible nerve damage.",
    fullDescription: `Intraoperative neurophysiological monitoring (IONM) consists of the continuous, real-time monitoring of nerve functions during a surgical procedure. The objective is to detect early any suffering of the nervous system (brain, spinal cord, cranial or peripheral nerves) in order to alert the surgeon and allow an immediate modification of the surgical gesture before an irreversible lesion occurs.

The techniques used include somatosensory evoked potentials (SEP), motor evoked potentials (MEP) by transcranial magnetic or electrical stimulation, continuous electromyography (free-running EMG), direct nerve stimulation and electrocorticography. The choice of techniques depends on the type of surgery and the nervous structures at risk.

Intraoperative monitoring has considerably improved the safety of spinal surgeries (scoliosis, disc herniation, spinal cord tumours), skull base surgeries, thyroid surgeries (protection of the recurrent nerve) and operations on the peripheral nerves. The presence of a neurophysiologist in the operating theatre has become a quality standard in many procedures involving a neurological risk.

The Clinique Pasteur in Tunis offers an intraoperative monitoring service provided by experienced neurophysiologists, working in close collaboration with the surgical and anaesthetic teams to optimise patient safety.`,
    preparation: [
      'The monitoring is planned in advance by the surgeon in consultation with the neurophysiologist.',
      'A pre-operative neurophysiological assessment (SEP, MEP, EMG) is often carried out as a reference.',
      'The patient is informed of the neurophysiological monitoring at the pre-operative consultation.',
      'The anaesthetic protocol is adapted in consultation with the anaesthetist to allow the monitoring (avoiding prolonged muscle relaxants, adjusting the halogenated agents).',
      'The neurophysiologist reviews the medical file and the type of surgery planned.',
    ],
    deroulement: [
      'Placement of the stimulation and recording electrodes after the anaesthetic induction.',
      'Recording of the reference values (baseline) before the start of the surgical gesture.',
      'Continuous monitoring of the neurophysiological parameters throughout the procedure.',
      'Real-time communication with the surgeon and the anaesthetist in the event of a significant change in the signals.',
      'In the event of an alert (a drop in amplitude > 50 % or an increase in latency > 10 %), the surgeon is immediately notified.',
      'Adjustment of the monitoring techniques according to the operative steps and the structures at risk.',
      'Checking of the parameters at the end of the procedure before closure.',
      'Drafting of a monitoring report detailing the significant events.',
    ],
    duree: 'Duration of the surgical procedure (from 2 to 8 hours depending on the type of surgery)',
    resultats:
      'A monitoring report is drawn up and integrated into the operative file. It details the techniques used, the reference values, any alerts and the corrective measures taken. This document is sent to the surgeon and the anaesthetist.',
    risques: [
      'Skin irritation at the electrode fixation points.',
      'Exceptional superficial burn at the level of the stimulation electrodes.',
      'Possible tongue bite during transcranial motor stimulation (a mouth guard is systematically put in place).',
    ],
    indications: [
      { label: 'Surgery for scoliosis and spinal deformities', explication: `It makes it possible to monitor the spinal cord during the correction of a spinal deformity, to avoid any lesion.` },
      { label: 'Surgery for intracanal spinal cord tumours', explication: `It helps protect the spinal cord during the removal of a tumour located in the canal of the spine.` },
      { label: 'Surgery for skull base tumours', explication: `It monitors the nearby nerves during a delicate operation at the base of the skull.` },
      { label: 'Posterior fossa surgery (acoustic neuroma)', explication: `It helps preserve the hearing and facial nerves during the removal of a tumour.` },
      { label: 'Thyroid and parathyroid surgery (monitoring of the recurrent nerve)', explication: `It makes it possible to monitor the voice nerve during a thyroid operation, to avoid harming the vocal cords.` },
      { label: 'Carotid surgery (endarterectomy)', explication: `It helps monitor the brain during an operation on the neck artery that supplies it.` },
      { label: 'Surgery for intracranial aneurysms', explication: `It monitors the functioning of the brain in real time during the treatment of a dilatation of a cerebral artery.` },
      { label: 'Peripheral nerve surgery', explication: `It helps protect and identify the nerves during an operation that directly concerns them.` },
      { label: 'Epilepsy surgery (cortical mapping)', explication: `It helps identify the important areas of the brain to be preserved during an epilepsy operation.` },
    ],
  },
  {
    slug: 'etude-jonction-neuromusculaire',
    title: 'Study of the neuromuscular junction',
    shortTitle: 'Neuromuscular junction',
    image: '/images/fiches/neuro-etude-jonction-neuromusculaire.webp',
    description:
      "Exploration of the transmission of the nerve impulse between the nerve and the muscle, essential for the diagnosis of myasthenia and myasthenic syndromes.",
    fullDescription: `The study of the neuromuscular junction is a specialised neurophysiological examination that assesses the synaptic transmission between the motor nerve and the muscle. It is based mainly on two techniques: repetitive nerve stimulation (RNS) and, in some cases, single-fibre EMG.

Repetitive nerve stimulation consists of stimulating a motor nerve at a low frequency (3 Hz) and a high frequency (20-50 Hz) while recording the muscle response. In myasthenia, an autoimmune disease of the neuromuscular junction, a characteristic decrement (a progressive decrease in the amplitude of the responses) is observed with low-frequency stimulation. Conversely, in Lambert-Eaton syndrome, an increment (an increase in amplitude) is observed with high-frequency stimulation.

Single-fibre EMG is the most sensitive technique for detecting a dysfunction of the neuromuscular junction. It measures the jitter (the variability of the latency of neuromuscular transmission between two muscle fibres of the same motor unit). An increased jitter is a very early marker of myasthenia, even when repetitive stimulation is still normal.

The Clinique Pasteur in Tunis offers the full range of techniques for exploring the neuromuscular junction, allowing an early and precise diagnosis of myasthenia and related syndromes.`,
    preparation: [
      'Inform the physician of all current medications, in particular anticholinesterases (pyridostigmine/Mestinon): stopping them 12 to 24 hours before the examination may be requested by the physician to increase the sensitivity of the test.',
      'Do not stop the medications without the explicit approval of the physician.',
      'Avoid intense physical exertion in the hours before the examination.',
      'The examination does not require fasting.',
      'Keep the limbs warm.',
      'Bring the recent laboratory tests (anti-acetylcholine receptor antibodies, anti-MuSK).',
    ],
    deroulement: [
      'The patient is settled comfortably, with the limb to be studied well positioned and immobile.',
      'Placement of surface electrodes on the target muscle (usually the nasalis, orbicularis oculi, trapezius or abductor digiti minimi muscle).',
      'Repetitive nerve stimulation at a low frequency (3 Hz): trains of 5 to 10 stimulations.',
      'Analysis of the decrement: looking for a decrease in amplitude greater than 10 % between the 1st and the 4th-5th response.',
      'Stimulation at a high frequency (20-50 Hz) or after a maximal voluntary effort of 10 seconds (post-exercise facilitation).',
      'Looking for a post-exercise increment (Lambert-Eaton syndrome).',
      'Fatigue test: stimulation after a prolonged effort of 1 minute (post-exercise exhaustion).',
      'If necessary, single-fibre EMG to measure the neuromuscular jitter.',
    ],
    duree: '30 to 60 minutes',
    resultats:
      'The results are interpreted immediately by the neurophysiologist. A detailed report specifying the presence or absence of a decrement/increment and the value of the jitter is available within 24 to 48 hours.',
    risques: [
      'An unpleasant sensation during the repetitive electrical stimulations.',
      'In the case of single-fibre EMG: slight pain when the needle is inserted.',
    ],
    indications: [
      { label: 'Suspected myasthenia (ptosis, diplopia, muscle fatigability)', explication: `It helps explore this disease when a drooping eyelid, double vision or unusual muscle fatigue appear.` },
      { label: 'Known myasthenia: assessment of severity and therapeutic follow-up', explication: `It makes it possible to measure the extent of the disease and to follow the effect of the treatment over time.` },
      { label: 'Suspected Lambert-Eaton syndrome', explication: `It helps recognise this disease, similar to myasthenia, which presents with muscle weakness.` },
      { label: 'Botulism', explication: `It provides useful elements for exploring the muscle disorders related to this rare poisoning.` },
      { label: 'Organophosphate poisoning', explication: `It helps assess the impact of these toxic substances on the transmission between nerve and muscle.` },
      { label: 'Congenital myasthenic syndromes', explication: `It is useful for exploring forms of muscle weakness present since birth.` },
      { label: 'Unexplained muscle fatigability', explication: `It is offered when abnormal muscle fatigue needs to be explored.` },
      { label: 'Differential diagnosis between myasthenia and myopathy', explication: `It helps distinguish a problem of transmission between nerve and muscle from a disease of the muscle itself.` },
    ],
  },
];
