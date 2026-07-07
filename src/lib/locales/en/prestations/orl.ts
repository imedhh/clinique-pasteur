export const prestationsOrl = [
  {
    slug: 'amygdalectomie-adenoidectomie',
    title: 'Tonsillectomy and adenoidectomy',
    shortTitle: 'Tonsils and adenoids',
    description: 'Removal of the tonsils and/or adenoids, a common procedure in children with recurrent infections or breathing difficulties.',
    fullDescription: `Tonsillectomy (removal of the tonsils) and adenoidectomy (removal of the adenoids) are among the most common ENT procedures, particularly in children. They are recommended when the tonsils or adenoids cause recurrent infections (tonsillitis, ear infections) or airway obstruction, especially snoring with pauses in breathing during sleep.

The procedure is performed through the mouth, under general anaesthesia, with no visible scar. Depending on the case, the surgeon removes the tonsils, the adenoids, or both during the same anaesthesia.

The benefits are often quickly noticeable: more peaceful sleep, freer breathing, a marked reduction in infections, better appetite and renewed energy in children.

At Clinique Pasteur Tunis, this procedure is performed by ENT surgeons experienced in paediatric care, in an environment designed to reassure both the child and the parents, most often as a short hospital stay.`,
    image: '/images/fiches/orl-amygdalectomie-adenoidectomie.webp',
    indications: [
      { label: 'Recurrent tonsillitis despite properly followed treatment', explication: `When tonsillitis keeps coming back despite well-followed treatments, removing the tonsils puts an end to this cycle of infections.` },
      { label: 'Snoring with pauses in breathing during sleep (apnoea)', explication: `If the child snores loudly and seems to stop breathing at night, oversized tonsils or adenoids are often the cause; their removal frees the breathing.` },
      { label: 'Chronic nasal obstruction caused by the adenoids', explication: `Overgrown adenoids force the child to breathe through the mouth constantly; their removal restores normal nasal breathing.` },
      { label: 'Recurrent glue ear associated with the adenoids', explication: `The adenoids can sustain the presence of fluid behind the eardrum; removing them helps the ears ventilate better.` },
      { label: 'Very large tonsils interfering with breathing or swallowing', explication: `When the tonsils are so large that they make breathing or swallowing difficult, their removal brings rapid relief.` },
    ],
    preparation: [
      'ENT consultation with a full examination',
      'Mandatory anaesthesia consultation a few days beforehand',
      'Blood tests if requested by the anaesthetist',
      'Fast for 6 hours before the procedure',
      'Report any recent infection (fever, tonsillitis) before the procedure',
    ],
    deroulement: [
      'Welcome of the child and parents in the ward',
      'General anaesthesia by a team accustomed to children',
      'Removal of the tonsils and/or adenoids through the mouth, with no external incision',
      'Careful check for any bleeding',
      'Monitored recovery, then return to the room with the parents',
    ],
    duree: 'About 30 minutes',
    resultats: 'Discharge takes place the same day or the following day. Pain when swallowing is normal for a few days and is well relieved by the prescribed painkillers. A smooth, cool diet is recommended at first, with about ten days of rest before returning to school.',
    risques: [
      'Pain when swallowing for a few days, well controlled by treatment',
      'Possible minor bleeding in the days following the procedure, warranting a consultation',
      'Mild transient fever',
    ],
  },
  {
    slug: 'chirurgie-des-sinus',
    title: 'Sinus surgery (chronic sinusitis)',
    shortTitle: 'Sinus surgery',
    description: 'Endoscopic surgical treatment of chronic sinusitis and polyps, performed through the natural passages without any scar.',
    fullDescription: `Chronic sinusitis presents as persistent nasal obstruction, discharge, facial heaviness and sometimes loss of smell. When medical treatments (rinses, local corticosteroids, antibiotics) are no longer sufficient, sinus surgery may be recommended.

The procedure is performed endoscopically, entirely through the nostrils, with no incision on the face. Using a high-definition endoscope and fine instruments, the surgeon opens the blocked sinus cavities, removes any polyps and restores normal ventilation and drainage of the sinuses.

This functional surgery preserves healthy nasal structures as much as possible. It is followed by simple local care (nasal rinses) which contributes greatly to the quality of the result.

At Clinique Pasteur Tunis, sinus surgery benefits from high-definition endoscopic equipment and the expertise of ENT surgeons highly skilled in minimally invasive techniques, for lasting respiratory comfort.`,
    image: '/images/fiches/orl-chirurgie-des-sinus.webp',
    indications: [
      { label: 'Chronic sinusitis resistant to medical treatment', explication: `When the nose remains blocked and the face feels heavy despite rinses and medication, surgery reopens the sinuses for lasting relief.` },
      { label: 'Troublesome nasal polyposis', explication: `Polyps are benign growths that block the nose and often cause loss of smell; their removal restores the airflow.` },
      { label: 'Recurrent acute sinusitis', explication: `When episodes of sinusitis follow one another throughout the year, opening the blocked sinuses helps break this cycle of infections.` },
      { label: 'Sinusitis of dental or fungal origin', explication: `Some sinusitis cases originate from a tooth or a fungus lodged in the sinus; surgery removes the cause and cleans the cavity.` },
      { label: 'Symptomatic mucocele or sinus cyst', explication: `A pocket of secretions or a cyst can develop in a sinus and cause pain or heaviness; its removal through the nostrils makes the discomfort disappear.` },
    ],
    preparation: [
      'Recent sinus CT scan, essential to guide the surgeon',
      'Preparatory medical treatment sometimes prescribed before the procedure',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Stopping smoking strongly recommended',
    ],
    deroulement: [
      'General anaesthesia',
      'Insertion of the endoscope through the nostrils, with no external incision',
      'Opening of the blocked sinuses and removal of any polyps',
      'Restoration of the natural drainage of the sinuses',
      'Possible placement of small temporary nasal packing',
      'Monitoring in the recovery room, then return to the room',
    ],
    duree: '1 to 2 hours',
    resultats: 'Discharge takes place the same day or the following day. Nasal obstruction and slight bleeding are normal in the first few days. Regular nasal rinses are essential during recovery. Respiratory comfort gradually sets in over the weeks.',
    risques: [
      'Mild nasal bleeding in the first few days',
      'Transient nasal crusting requiring regular rinses',
      'Possible long-term recurrence of polyps, monitored at follow-up consultations',
    ],
  },
  {
    slug: 'septoplastie',
    title: 'Septoplasty (deviated nasal septum)',
    shortTitle: 'Septoplasty',
    description: 'Surgical correction of a deviated nasal septum to restore comfortable nasal breathing.',
    fullDescription: `The nasal septum separates the two nasal passages. When it is deviated — from birth or following an injury — it can obstruct airflow and cause chronic nasal obstruction, snoring, recurrent sinusitis or headaches.

Septoplasty is the operation that corrects this deviation. It is performed entirely from inside the nostrils, with no visible scar and no change to the shape of the nose. The surgeon straightens the septum by reshaping the deviated cartilage and bone, while preserving the strength of the nasal structure.

It is a functional surgery whose goal is respiratory comfort. If necessary, it can be combined with a procedure on the turbinates (internal structures of the nose) to optimise the result.

At Clinique Pasteur Tunis, septoplasty is performed by experienced ENT surgeons, as part of a short hospital stay, with attentive support during recovery.`,
    image: '/images/fiches/orl-septoplastie.webp',
    indications: [
      { label: 'Chronic nasal obstruction caused by a deviated septum', explication: `When the nose remains permanently blocked because of a deviated septum, straightening it restores normal airflow on both sides.` },
      { label: 'Snoring worsened by poor nasal ventilation', explication: `A nose that breathes poorly encourages snoring; improving nasal ventilation contributes to calmer nights.` },
      { label: 'Recurrent sinusitis sustained by the deviation', explication: `A deviated septum can prevent the sinuses from draining properly and sustain infections; correcting it helps prevent them.` },
      { label: 'Recurrent nosebleeds on the deviated side', explication: `Poor airflow on the deviated side dries out and weakens the mucous membrane; straightening the septum reduces these repeated bleeds.` },
      { label: 'Breathing difficulty on exertion', explication: `When breath through the nose runs short as soon as you walk fast or play sport, the operation restores true respiratory comfort during exertion.` },
    ],
    preparation: [
      'ENT consultation with endoscopic examination of the nasal passages',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Stopping smoking recommended before and after the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Discreet incision inside the nostril, invisible from the outside',
      'Straightening of the septum by reshaping the deviated cartilage and bone',
      'Possible additional procedure on the turbinates',
      'Placement of small temporary splints or nasal packing',
      'Monitoring, then return to the room',
    ],
    duree: '45 minutes to 1 hour 30',
    resultats: 'Discharge takes place the same day or the following day. The nose remains blocked for a few days, until the swelling subsides and any packing is removed. Breathing then improves gradually, with the result stabilising within a few weeks.',
    risques: [
      'Transient nasal obstruction due to post-operative swelling',
      'Minor bleeding in the first few days',
      'Temporary nasal dryness or crusting, relieved by rinses',
    ],
  },
  {
    slug: 'tympanoplastie',
    title: 'Tympanoplasty (eardrum surgery)',
    shortTitle: 'Tympanoplasty',
    description: 'Surgical repair of a perforated eardrum, under the microscope, to protect the ear and improve hearing.',
    fullDescription: `Tympanoplasty is the operation that repairs a perforation of the eardrum, most often a sequela of recurrent ear infections or an injury. A perforated eardrum exposes the ear to repeated infections, requires constant precautions with water and can lead to hearing loss.

The procedure is performed under an operating microscope, with microsurgical instruments. The surgeon rebuilds the eardrum using a graft taken from the patient (a small fragment of tissue located near the ear). If the ossicles of the ear are damaged, their repair can be carried out during the same operation.

The goal is twofold: to close the eardrum durably in order to protect the middle ear, and to improve hearing when the perforation is responsible for the loss.

At Clinique Pasteur Tunis, tympanoplasty benefits from a high-precision operating microscope and the expertise of ENT surgeons specialised in ear surgery, for reliable and lasting results.`,
    image: '/images/fiches/orl-tympanoplastie.webp',
    indications: [
      { label: 'Persistent perforation of the eardrum', explication: `When a hole in the eardrum does not close on its own, a graft closes it durably and protects the ear.` },
      { label: 'Recurrent ear infections encouraged by the perforation', explication: `An open eardrum lets water and germs into the ear; repairing it puts an end to repeated infections.` },
      { label: 'Hearing loss related to eardrum damage', explication: `The eardrum plays a part in transmitting sound; its reconstruction can significantly improve hearing.` },
      { label: 'Chronic ear discharge', explication: `An ear that discharges regularly often indicates a perforated eardrum; closing the perforation dries the ear.` },
      { label: 'Everyday inconvenience (mandatory protection when swimming)', explication: `Having to protect the ear with every shower or swim is a constraint; once the eardrum is repaired, these precautions are no longer necessary.` },
    ],
    preparation: [
      'ENT examination with otoscopy and a recent audiogram',
      'A dry ear, with no active infection, at the time of the procedure',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Access to the ear through the ear canal or through a discreet incision behind the ear',
      'Harvesting of the graft used to rebuild the eardrum',
      'Placement of the graft under the operating microscope',
      'Possible repair of the ossicles during the same operation',
      'Protective dressing in the ear canal',
    ],
    duree: '1 to 2 hours',
    resultats: 'Discharge takes place the same day or the following day. The ear must be kept dry during healing, according to the surgeon\'s instructions. The result on the eardrum and on hearing is assessed at follow-up consultations, after the dressings are removed and healing is complete.',
    risques: [
      'A blocked-ear sensation while healing takes place',
      'Transient ringing in the ears or dizziness',
      'Possible revision surgery if the graft does not take completely, an uncommon situation',
    ],
  },
  {
    slug: 'chirurgie-otite-chronique',
    title: 'Surgery for chronic otitis',
    shortTitle: 'Chronic otitis',
    description: 'Surgical treatment of chronic ear infections and cholesteatoma, to durably clear the ear and preserve hearing.',
    fullDescription: `Chronic otitis is a persistent inflammation of the middle ear that presents as repeated discharge, gradually worsening hearing loss and sometimes pain. Certain forms, such as cholesteatoma, correspond to a build-up of skin in the middle ear that can erode neighbouring structures and must be removed surgically.

Surgery for chronic otitis aims first to clear the ear: removing the inflamed tissue or the cholesteatoma, treating lesions of the mastoid bone if necessary, then rebuilding the eardrum and, where possible, the ossicular chain to preserve or improve hearing.

The operation takes place under an operating microscope, with microsurgical instruments and, where useful, facial nerve monitoring which secures the surgical procedure. Regular follow-up is then essential, particularly after cholesteatoma surgery.

At Clinique Pasteur Tunis, this specialised surgery is carried out by ENT surgeons experienced in otology, with a complete technical platform — operating microscope and facial nerve monitoring — guaranteeing precision and safety.`,
    image: '/images/fiches/orl-chirurgie-otite-chronique.webp',
    indications: [
      { label: 'Chronic otitis with repeated discharge despite treatments', explication: `When the ear becomes infected and discharges despite repeated treatments, surgery clears the ear thoroughly and durably.` },
      { label: 'Cholesteatoma of the middle ear', explication: `A cholesteatoma is a build-up of skin in the ear that can damage neighbouring structures; its surgical removal is essential.` },
      { label: 'Hearing loss related to middle ear lesions', explication: `When chronic infection has damaged the eardrum or the ossicles, their reconstruction aims to preserve or improve hearing.` },
      { label: 'Mastoid bone lesions associated with chronic infection', explication: `The infection can spread to the bone behind the ear; its surgical treatment eliminates this focus and protects the ear.` },
    ],
    preparation: [
      'Complete ENT work-up with an audiogram',
      'CT scan of the temporal bones to determine the extent of the lesions',
      'Prior local treatment to dry the ear if possible',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Access to the ear, most often through a discreet incision behind the auricle',
      'Removal of the diseased tissue (inflammation, cholesteatoma) under the microscope',
      'Monitoring of the facial nerve throughout the procedure',
      'Reconstruction of the eardrum and ossicles when possible',
      'Protective ear dressing',
    ],
    duree: '2 to 3 hours',
    resultats: 'The hospital stay is short. The ear must be kept dry for several weeks and local care is scheduled. Regular follow-up, sometimes with imaging, checks for any recurrence, particularly after a cholesteatoma. Hearing is reassessed later with an audiogram.',
    risques: [
      'Transient dizziness or ringing in the ears',
      'Residual hearing loss depending on the extent of the initial lesions',
      'Possible recurrence of the cholesteatoma, detected through regular follow-up',
      'The facial nerve is protected by intraoperative monitoring',
    ],
  },
  {
    slug: 'chirurgie-glandes-salivaires',
    title: 'Salivary gland surgery',
    shortTitle: 'Salivary glands',
    description: 'Partial or total removal of a salivary gland (parotid, submandibular) in the event of a tumour or recurrent stones.',
    fullDescription: `The major salivary glands — the parotid, located in front of the ear, and the submandibular gland, under the jaw — can be the site of tumours, most often benign, or of stones responsible for painful swelling and repeated infections.

Surgery consists of removing the diseased part of the gland, or even the entire gland depending on the nature of the lesion. Parotid surgery is a delicate procedure because the facial nerve, which controls the muscles of the face, runs through the gland: its preservation is the surgeon's absolute priority, assisted by facial nerve monitoring throughout the operation.

The incisions are placed along the natural folds of the skin for a discreet aesthetic result. Every surgical specimen is analysed under the microscope to confirm the exact nature of the lesion.

At Clinique Pasteur Tunis, salivary gland surgery is carried out by ENT surgeons experienced in neck surgery, with facial nerve monitoring and microsurgical instruments, for a precise and safe procedure.`,
    image: '/images/fiches/orl-chirurgie-glandes-salivaires.webp',
    indications: [
      { label: 'Tumour of the parotid or submandibular gland', explication: `A lump appearing in front of the ear or under the jaw, most often benign, must be removed and analysed to confirm its nature.` },
      { label: 'Recurrent salivary stones with painful swelling', explication: `Stones can block the flow of saliva and cause the gland to swell painfully, especially at mealtimes; surgery resolves the problem at its source.` },
      { label: 'Repeated infections of a salivary gland', explication: `When a gland becomes infected regularly despite treatments, its removal puts an end to these painful episodes.` },
      { label: 'Persistent enlargement of a gland requiring analysis', explication: `A gland that remains swollen without explanation must be examined; the operation allows a complete analysis and a precise diagnosis.` },
    ],
    preparation: [
      'Imaging of the gland (ultrasound, MRI depending on the case)',
      'Diagnostic needle aspiration sometimes performed before the procedure',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Discreet incision hidden in the natural folds of the skin',
      'Identification and protection of the facial nerve under continuous monitoring (parotid surgery)',
      'Removal of the lesion or the gland depending on the findings',
      'Possible placement of a small temporary drain',
      'Careful closure for a discreet aesthetic result',
    ],
    duree: '1 to 3 hours depending on the gland and the lesion',
    resultats: 'The hospital stay is short, with any drain removed before discharge or at an early follow-up consultation. The results of the analysis of the surgical specimen are explained at a consultation. The scar fades gradually over the months.',
    risques: [
      'Transient weakness of some facial muscles after parotid surgery, resolving in the vast majority of cases',
      'Reduced sensation in the earlobe, often temporary',
      'Temporary haematoma or local swelling',
    ],
  },
  {
    slug: 'thyroidectomie',
    title: 'Thyroid and parathyroid surgery',
    shortTitle: 'Thyroid & parathyroids',
    description: 'Partial or total removal of the thyroid gland and surgery of the parathyroid glands, performed with monitoring of the voice nerves for optimal safety.',
    fullDescription: `Thyroidectomy is the surgical removal of the thyroid gland, in whole or in part (lobectomy). It is indicated in cases of suspicious or large nodules, compressive goitre, hyperthyroidism resistant to medical treatment or thyroid cancer.

The procedure is performed through a discreet horizontal incision at the base of the neck, placed in a natural skin fold. The surgeon pays particular attention to two essential structures: the recurrent laryngeal nerves, which control the vocal cords, and the parathyroid glands, which regulate calcium. Intraoperative nerve monitoring secures their preservation.

After a total thyroidectomy, a daily hormone replacement treatment simply takes over the function of the gland: it allows a perfectly normal life, with regular blood-test follow-up.

At Clinique Pasteur Tunis, thyroidectomy is performed by surgeons experienced in neck surgery, with nerve monitoring, as part of care coordinated with the clinic's endocrinologists.`,
    image: '/images/fiches/orl-thyroidectomie.webp',
    indications: [
      { label: 'Suspicious thyroid nodule or one whose nature must be determined', explication: `When a thyroid nodule appears suspicious or remains indeterminate despite the work-up, its removal allows a complete and reliable analysis.` },
      { label: 'Large or compressive goitre (difficulty swallowing or breathing)', explication: `An oversized thyroid can compress the throat and make swallowing or breathing difficult; its removal eliminates this compression.` },
      { label: 'Hyperthyroidism resistant to medical treatment', explication: `When the gland produces too many hormones despite medication, surgery offers a definitive solution to this thyroid overactivity.` },
      { label: 'Confirmed or strongly suspected thyroid cancer', explication: `Removal of the gland is the standard treatment; when managed early, this disease offers very good prospects of cure in most forms.` },
      { label: 'Hyperparathyroidism with confirmed excess calcium', explication: `When a parathyroid gland overworks and raises the blood calcium level, causing fatigue and bone fragility, its targeted removal durably normalises the situation.` },
    ],
    preparation: [
      'Thyroid hormone work-up and a recent neck ultrasound',
      'Fine-needle aspiration of suspicious nodules if indicated',
      'Prior hormonal stabilisation in the event of hyperthyroidism',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Discreet horizontal incision at the base of the neck',
      'Identification and preservation of the voice nerves under monitoring',
      'Careful preservation of the parathyroid glands',
      'Removal of one lobe or the entire gland depending on the indication',
      'Aesthetic closure with a discreet suture',
      'Post-operative monitoring of the voice and blood calcium',
    ],
    duree: '1 to 2 hours 30',
    resultats: 'The hospital stay generally lasts one to two days. The voice and the calcium level are checked before discharge. In the case of a total thyroidectomy, a daily hormone treatment is started and adjusted during follow-up. The scar, placed in a neck fold, becomes very discreet over time.',
    risques: [
      'Transient voice change, resolving in the vast majority of cases',
      'Temporary drop in blood calcium, corrected by a temporary treatment',
      'Early neck haematoma, prevented by close monitoring',
    ],
  },
  {
    slug: 'chirurgie-cordes-vocales',
    title: 'Vocal cord surgery',
    shortTitle: 'Vocal cords',
    description: 'Endoscopic microsurgery of vocal cord lesions (nodules, polyps, cysts) to restore voice quality.',
    fullDescription: `The vocal cords can develop benign lesions — nodules, polyps, cysts, oedema — often linked to vocal strain, reflux or smoking. These lesions present as a persistent hoarse, tired or muffled voice. Some lesions also require a sample to be taken for analysis.

Vocal cord surgery is a microsurgery performed through the natural passages, with no incision: under general anaesthesia, a rigid endoscope (laryngoscope) exposes the vocal cords, and the surgeon operates under a microscope with extremely fine micro-instruments. The goal is to remove the lesion while scrupulously preserving the suppleness of the vocal cord, which guarantees voice quality.

Vocal rest after the procedure and, often, speech therapy complete the surgical treatment for an optimal and lasting result.

At Clinique Pasteur Tunis, this microsurgery benefits from an operating microscope and dedicated microsurgical instruments, with ENT surgeons attentive to restoring a natural voice.`,
    image: '/images/fiches/orl-chirurgie-cordes-vocales.webp',
    indications: [
      { label: 'Persistent hoarseness caused by a nodule, polyp or cyst', explication: `When the voice remains hoarse because of a small benign lesion, its removal by microsurgery restores a clear voice.` },
      { label: 'Chronic oedema of the vocal cords', explication: `Lasting swelling of the vocal cords, often linked to smoking, makes the voice deep and muffled; its treatment restores the voice's timbre.` },
      { label: 'Vocal cord lesion requiring a sample for analysis', explication: `Some lesions must be analysed under the microscope to determine their exact nature; the sample is taken with precision, with no incision.` },
      { label: 'Disabling vocal fatigue in voice professionals', explication: `Teachers, singers or public speakers can find their voice worn out by a lesion; correcting it allows them to recover their working tool.` },
    ],
    preparation: [
      'ENT examination with fibroscopy or stroboscopy of the vocal cords',
      'Speech therapy assessment sometimes useful before the procedure',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Stopping smoking strongly recommended',
    ],
    deroulement: [
      'General anaesthesia',
      'Exposure of the vocal cords using a laryngoscope, through the mouth',
      'Microsurgery of the lesion under the microscope with micro-instruments',
      'Maximum preservation of healthy vocal tissue',
      'Monitored recovery, then return to the room',
    ],
    duree: '30 minutes to 1 hour',
    resultats: 'Discharge takes place the same day or the following day. Strict vocal rest for a few days is essential, followed by a gradual return of the voice, often supported by speech therapy. Voice quality improves over the weeks.',
    risques: [
      'Transient hoarseness while healing takes place',
      'Temporary throat discomfort related to the laryngoscope',
      'Possible recurrence if the contributing factors persist (vocal strain, smoking)',
    ],
  },
  {
    slug: 'chirurgie-tumeurs-cervicales',
    title: 'Neck tumour surgery',
    shortTitle: 'Neck tumours',
    description: 'Surgical management of neck masses and tumours: congenital cysts, enlarged lymph nodes, benign or malignant tumours.',
    fullDescription: `The neck can be the site of very diverse masses: congenital cysts present from birth, enlarged lymph nodes (lymphadenopathy), benign soft-tissue tumours or malignant tumours. Any persistent neck mass warrants a precise work-up to determine its nature.

Neck tumour surgery has a twofold objective: to remove the lesion completely and to allow its full analysis under the microscope. Depending on the case, this may involve the excision of a cyst, an excisional lymph node biopsy, or a more extensive neck dissection as part of cancer treatment, always decided through multidisciplinary consultation.

The neck contains critical structures — nerves, vessels — which the surgeon identifies and preserves with care. The incisions are placed in the natural folds of the skin for the most discreet aesthetic result possible.

At Clinique Pasteur Tunis, this surgery is performed by ENT surgeons with solid expertise in neck surgery, within a complete environment — modern operating theatre, intensive care, imaging — for safe management.`,
    image: '/images/fiches/orl-chirurgie-tumeurs-cervicales.webp',
    indications: [
      { label: 'Persistent neck mass whose nature must be determined', explication: `Any lump in the neck that persists warrants a work-up; its removal allows precise analysis and, if necessary, adaptation of subsequent care.` },
      { label: 'Congenital neck cyst (thyroglossal duct cyst, branchial cyst)', explication: `These cysts, present from birth, can swell or become infected; their complete removal prevents recurrence.` },
      { label: 'Enlarged neck lymph node requiring analysis', explication: `A lymph node that remains enlarged must sometimes be removed for analysis under the microscope, the only way to determine its cause with certainty.` },
      { label: 'Troublesome or growing benign neck tumour', explication: `Even when benign, a neck mass that grows or causes discomfort can be removed through a discreet incision hidden in a skin fold.` },
      { label: 'Neck dissection as part of ENT cancer treatment', explication: `In the treatment of certain cancers, removal of the neck lymph nodes is part of the care plan, always decided in consultation with the multidisciplinary team.` },
    ],
    preparation: [
      'Neck imaging work-up (ultrasound, CT scan or MRI)',
      'Diagnostic needle aspiration sometimes performed beforehand',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Discreet incision placed in a natural fold of the neck',
      'Identification and preservation of nerve and vascular structures',
      'Complete excision of the lesion or neck dissection depending on the indication',
      'Possible placement of a temporary drain',
      'Careful closure for aesthetic purposes',
    ],
    duree: '1 to 3 hours depending on the extent of the procedure',
    resultats: 'The hospital stay is short, with any drain removed quickly. The results of the analysis of the surgical specimen are explained at a consultation and guide subsequent care when necessary. The scar fades gradually.',
    risques: [
      'Transient haematoma or local swelling',
      'Temporary reduction in skin sensation on the neck',
      'Difficulty moving the shoulder after certain neck dissections, improved by physiotherapy',
    ],
  },
  {
    slug: 'aerateurs-transtympaniques',
    title: 'Insertion of tympanostomy tubes (grommets)',
    shortTitle: 'Tympanostomy tubes',
    description: 'Placement of small tubes in the eardrum to treat persistent glue ear, very common in children.',
    fullDescription: `Glue ear (otitis media with effusion) corresponds to the persistent presence of fluid behind the eardrum. Very common in children, it causes hearing loss that can affect language, attention and learning, as well as recurrent acute ear infections.

When the fluid persists despite treatments, the insertion of tympanostomy tubes — often called grommets — is the standard treatment. These are tiny tubes placed in the eardrum through a microscopic incision: they allow permanent ventilation of the middle ear and drainage of the fluid.

The procedure is very quick, performed under a brief general anaesthesia in children, and the improvement in hearing is usually immediate. The tubes generally fall out on their own after several months, once they have done their job.

At Clinique Pasteur Tunis, tube insertion is performed by ENT surgeons accustomed to very young children, in the reassuring setting of day-case admission: the child goes home the same day.`,
    image: '/images/fiches/orl-aerateurs-transtympaniques.webp',
    indications: [
      { label: 'Persistent glue ear with hearing loss', explication: `When fluid stagnates behind the eardrum and the child hears less well, the tubes drain it and restore hearing, most often immediately.` },
      { label: 'Recurrent acute ear infections', explication: `If ear infections keep recurring despite treatments, the tubes allow the ear to ventilate better and markedly space out the infections.` },
      { label: 'Impact on language or learning in children', explication: `A child who hears poorly learns to speak less well and struggles to concentrate in class; restoring hearing helps them catch up quickly.` },
      { label: 'Eardrum retraction due to poor ventilation of the ear', explication: `When the eardrum caves in due to lack of air in the middle ear, the tube restores ventilation and prevents the situation from worsening.` },
    ],
    preparation: [
      'ENT examination with tympanometry and an age-appropriate audiogram',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Report any episode of fever or infection in the preceding days',
    ],
    deroulement: [
      'Day-case admission with the parents',
      'Brief general anaesthesia',
      'Microscopic incision of the eardrum under the microscope',
      'Aspiration of the fluid and placement of the tube',
      'Rapid recovery and return to the parents',
    ],
    duree: '15 to 20 minutes for both ears',
    resultats: 'The child goes home the same day. Hearing usually improves immediately. Ear protection when swimming may be advised according to the surgeon\'s instructions. The tubes are monitored at consultations and generally fall out spontaneously.',
    risques: [
      'Slight ear discharge, treated with local drops',
      'Early expulsion of the tube, sometimes requiring reinsertion',
      'Small residual perforation of the eardrum, rare and most often transient',
    ],
  },
  {
    slug: 'chirurgie-endoscopique-naso-sinusienne',
    title: 'Endoscopic sinonasal surgery',
    shortTitle: 'Sinonasal endoscopy',
    description: 'The gold-standard minimally invasive approach for operating on the nose and sinuses through the natural passages, under high-definition video control.',
    fullDescription: `Endoscopic sinonasal surgery encompasses all operations on the nose and sinuses performed through the natural passages, under the control of a high-definition endoscope. This minimally invasive approach has transformed sinus surgery: no incision on the face, greater precision and considerably more comfortable recovery.

Thanks to fine optics and dedicated instruments, the surgeon has a perfect view of the nasal and sinus cavities and treats lesions with great precision: opening the sinuses, removing polyps, excising certain benign tumours, treating nasal obstruction or closing leaks. The range of applications of this technique is expanding steadily.

Endoscopy also makes it possible to reach deep areas that were once difficult to access, while preserving neighbouring structures, notably the orbit and the skull base, whose anatomy is studied in detail on the pre-operative CT scan.

At Clinique Pasteur Tunis, endoscopic sinonasal surgery relies on a high-definition ENT endoscope and the expertise of surgeons highly skilled in minimally invasive techniques, for precise, safe and comfortable procedures.`,
    image: '/images/fiches/orl-chirurgie-endoscopique-naso-sinusienne.webp',
    indications: [
      { label: 'Chronic sinusitis and nasal polyposis', explication: `When the sinuses remain blocked or overrun by polyps despite treatments, endoscopy reopens them through the nostrils, with no incision on the face.` },
      { label: 'Nasal obstruction of sinus origin', explication: `If the blocked nose stems from a sinus problem, the endoscopic approach treats the cause to restore free breathing.` },
      { label: 'Certain benign tumours of the nose and sinuses', explication: `Benign tumours can develop in the nasal passages; many can now be removed through the natural passages, under video control.` },
      { label: 'Mucoceles and sinus cysts', explication: `These pockets of secretions that develop in a sinus cause heaviness and pain; opening them endoscopically makes the discomfort disappear.` },
      { label: 'Chronic dacryocystitis (tear duct obstruction) in collaboration with the relevant specialists', explication: `When the tear duct becomes blocked and the eye waters constantly, an endoscopic procedure performed through the nose can restore drainage, in liaison with the relevant specialists.` },
    ],
    preparation: [
      'Recent sinus CT scan, essential for planning the procedure',
      'Possible preparatory medical treatment',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Stopping smoking recommended',
    ],
    deroulement: [
      'General anaesthesia',
      'Insertion of the high-definition endoscope through the nostrils',
      'Precise treatment of the lesions under continuous video control',
      'Preservation of neighbouring anatomical structures',
      'Possible placement of temporary nasal packing',
      'Monitoring in the recovery room',
    ],
    duree: '1 to 2 hours depending on the extent of the procedure',
    resultats: 'Discharge takes place the same day or the following day. Regular nasal rinses are the key to good healing. Nasal and respiratory comfort improves gradually over the weeks, with follow-up consultations to support the recovery.',
    risques: [
      'Mild nasal bleeding in the first few days',
      'Transient nasal crusting and dryness',
      'Possible recurrence of certain lesions (polyps), monitored during follow-up',
    ],
  },
];
