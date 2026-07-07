export const prestationsCarcinologique = [
  {
    slug: 'cancers-digestifs',
    title: 'Surgery for digestive cancers (stomach, colon, rectum, liver)',
    shortTitle: 'Digestive cancers',
    description: 'Surgical management of tumours of the digestive tract, decided in multidisciplinary consultation and tailored to each patient.',
    fullDescription: `Surgery plays a central role in the treatment of digestive cancers: stomach, colon, rectum, liver, pancreas. It consists of removing the tumour with safety margins, together with the draining lymph nodes, following precise oncological rules that determine the quality of the treatment.

Each case is discussed at a multidisciplinary team meeting bringing together surgeons, oncologists, radiologists and other specialists, in order to define the best strategy: surgery straight away or after preparatory treatment, conventional or minimally invasive approach. Digestive continuity is restored whenever possible during the same operation.

At Clinique Pasteur Tunis, digestive cancer surgery relies on comprehensive technical facilities — imaging, endoscopy, fully equipped operating theatres, intensive care — and on frozen-section analyses available during the procedure. Pathological analysis of the surgical specimen is carried out and guides the next stage of treatment, within a coordinated pathway attentive to the patient and their family.`,
    image: '/images/fiches/carci-cancers-digestifs.webp',
    indications: [
      { label: 'Tumour of the colon or rectum confirmed by biopsy', explication: `When a tumour of the bowel is confirmed by tissue samples, its surgical removal forms the cornerstone of treatment, with good prospects when it is caught in time.` },
      { label: 'Stomach tumour requiring surgical removal', explication: `Some stomach tumours are treated by removing the diseased area, sometimes after preparatory treatment intended to make the surgery easier.` },
      { label: 'Liver tumours, primary or secondary, suitable for resection', explication: `Whether they originated in the liver or spread from another organ, some liver tumours can be removed thanks to the liver\'s remarkable ability to regenerate.` },
      { label: 'Selected tumours of the pancreas or bile ducts', explication: `After a thorough work-up, some tumours of the pancreas or bile ducts are suitable for specialised surgery, decided jointly by the experts.` },
      { label: 'Tumour complications requiring surgery (obstruction, bleeding)', explication: `A tumour can sometimes block the bowel or bleed: surgery then makes it possible to treat the complication and quickly relieve the patient.` },
    ],
    preparation: [
      'Complete work-up: endoscopy with biopsies, CT scan and additional imaging',
      'Presentation of the case at a multidisciplinary team meeting',
      'Possible preparatory treatment (chemotherapy or radiotherapy) before surgery depending on the case',
      'Optimisation of nutritional status and anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Appropriate approach: laparoscopy or conventional incision depending on the tumour',
      'Removal of the tumour with safety margins',
      'Dissection of the draining lymph nodes according to oncological rules',
      'Frozen-section analyses during the procedure if necessary',
      'Restoration of digestive continuity whenever possible',
      'Appropriate post-operative monitoring, in intensive care if needed',
    ],
    duree: '2 to 5 hours depending on the location',
    resultats: 'Recovery is gradual, with a step-by-step return to eating and attentive support from the team. The results of the pathological analysis, presented at the multidisciplinary team meeting, determine the next stage of treatment and the follow-up schedule.',
    risques: [
      'Anastomotic leak, a complication that is closely monitored and treated without delay',
      'Infection or delayed healing, treated appropriately',
      'Temporary digestive disturbances during convalescence',
      'Risks specific to each location, explained in detail before the procedure',
    ],
  },
  {
    slug: 'cancers-urologiques',
    title: 'Surgery for urological cancers (kidney, bladder, prostate)',
    shortTitle: 'Urological cancers',
    description: 'Surgical treatment of tumours of the kidney, bladder and prostate, using minimally invasive techniques whenever possible.',
    fullDescription: `Urological cancer surgery treats tumours of the kidney, bladder, prostate and urinary tract. Depending on the organ and the stage of the disease, it may consist of a partial removal preserving the organ, or a complete removal combined with lymph node dissection.

The choice of strategy is always validated at a multidisciplinary team meeting, and minimally invasive techniques — laparoscopy, endoscopic surgery through the natural passages for certain bladder tumours — are favoured whenever they offer the same oncological quality, in order to ease the post-operative course.

At Clinique Pasteur Tunis, the urologists manage this entire pathway: initial work-up with on-site imaging, surgery in fully equipped operating theatres, post-operative monitoring and long-term follow-up. Pathological analysis of the surgical specimens is carried out and precisely guides the next stage of treatment.`,
    image: '/images/fiches/carci-cancers-urologiques.webp',
    indications: [
      { label: 'Kidney tumour discovered on imaging', explication: `Often detected during an imaging examination, kidney tumours can be removed while preserving the rest of the organ whenever possible.` },
      { label: 'Bladder tumour diagnosed by endoscopy', explication: `Bladder tumours are most often treated through the natural passages, without an incision, using endoscopic instruments that remove the lesion.` },
      { label: 'Localised prostate cancer after a complete work-up', explication: `When the disease remains confined to the prostate, removal of the gland offers very good chances of cure; the strategy is always discussed after a complete work-up.` },
      { label: 'Tumours of the upper urinary tract', explication: `The ducts that carry urine from the kidney to the bladder can also develop tumours, treated with surgery adapted to their location.` },
      { label: 'Testicular tumours requiring removal', explication: `Removal of the affected testicle is the first step in treating these tumours, whose prognosis is generally very favourable in young men.` },
    ],
    preparation: [
      'Complete urological work-up: imaging, endoscopy and biopsies depending on the organ',
      'Presentation of the case at a multidisciplinary team meeting',
      'Pre-operative work-up and anaesthesia consultation',
      'Adjustment of anticoagulants according to medical advice',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Appropriate approach: endoscopy through the natural passages, laparoscopy or open surgery',
      'Removal of the tumour, partial or total depending on the situation',
      'Lymph node dissection when oncological rules require it',
      'Urinary reconstruction or diversion if necessary',
      'Post-operative monitoring adapted to the procedure performed',
    ],
    duree: '1 to 5 hours depending on the organ and the technique',
    resultats: 'The post-operative course depends on the organ treated: a short hospital stay for endoscopic procedures, a more closely supervised convalescence for major removals. The pathology result guides the next stage of treatment, and a regular urological follow-up schedule is put in place.',
    risques: [
      'Bleeding or infection, uncommon and treated promptly',
      'Temporary urinary disturbances depending on the procedure performed',
      'Possible impact on continence or sexual function for certain operations, explained beforehand and supported',
    ],
  },
  {
    slug: 'cancers-gynecologiques',
    title: 'Surgery for gynaecological cancers',
    shortTitle: 'Gynaecological cancers',
    description: 'Surgical management of cancers of the uterus, cervix, ovary and other gynaecological cancers, within a multidisciplinary framework.',
    fullDescription: `Gynaecological cancer surgery treats tumours of the uterus, cervix, ovaries, fallopian tubes, vagina and vulva. Depending on the location and the stage, it may range from a conservative procedure to a more extensive removal combined with pelvic lymph node dissection.

The strategy is defined for each patient at a multidisciplinary team meeting, taking her personal situation into account, in particular any wish to preserve fertility when the disease allows it. Minimally invasive approaches are used whenever they are appropriate from an oncological standpoint.

At Clinique Pasteur Tunis, patients are cared for by gynaecological surgeons experienced in oncology, in an attentive and respectful environment. Pathological analysis of the surgical specimens is carried out, including frozen-section examination during the procedure when useful, and psychological support can be offered throughout the pathway.`,
    image: '/images/fiches/carci-cancers-gynecologiques.webp',
    indications: [
      { label: 'Cancer of the endometrium (body of the uterus) confirmed by tissue sampling', explication: `Often revealed by unusual bleeding, this cancer is treated first and foremost by surgery, with a good prognosis when it is discovered early.` },
      { label: 'Cervical cancer suitable for surgical treatment', explication: `At certain stages, surgery is the reference treatment for cervical cancer, sometimes with fertility-preserving techniques in young women.` },
      { label: 'Suspicious or confirmed ovarian tumours', explication: `When faced with a suspicious ovarian mass, surgery makes it possible both to determine its nature and to remove it according to oncological rules.` },
      { label: 'Extensive precancerous lesions requiring removal', explication: `Removing a lesion before it transforms is the best way to prevent a cancer: these preventive procedures are most often simple and conservative.` },
      { label: 'Selected cancers of the vulva or vagina', explication: `These rarer cancers call for surgery adapted to each situation, decided at a multidisciplinary team meeting and supported with particular care.` },
    ],
    preparation: [
      'Complete work-up: gynaecological examination, imaging (MRI, CT scan) and tissue sampling',
      'Presentation of the case at a multidisciplinary team meeting',
      'Discussion with the patient of the options and their consequences, including on fertility',
      'Anaesthesia consultation and pre-operative work-up',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Appropriate approach: laparoscopy, vaginal route or incision depending on the situation',
      'Removal of the tumour according to oncological rules',
      'Pelvic lymph node dissection when the stage requires it',
      'Frozen-section analysis during the procedure if necessary',
      'Attentive post-operative monitoring',
    ],
    duree: '2 to 4 hours depending on the procedure',
    resultats: 'Convalescence is gradual, supported by the care team. The pathology results, discussed at the multidisciplinary team meeting, determine whether additional treatment is needed and set the pace of gynaecological follow-up.',
    risques: [
      'Post-operative haematoma or infection, uncommon',
      'Lymphocele or swelling of the lower limbs after lymph node dissection, monitored and managed',
      'Temporary urinary disturbances depending on the extent of the procedure',
      'Impact on fertility for certain operations, always discussed beforehand',
    ],
  },
  {
    slug: 'cancers-thyroidiens',
    title: 'Surgery for thyroid cancers',
    shortTitle: 'Thyroid cancers',
    description: 'Partial or total removal of the thyroid for a suspicious nodule or confirmed cancer, with particular attention to the nerves of the voice and the parathyroid glands.',
    fullDescription: `Surgery is the first-line treatment for most thyroid cancers, whose prognosis is generally favourable. It consists of removing one lobe of the gland or the whole gland, sometimes together with the neighbouring lymph nodes, depending on the nature and extent of the lesion.

The operation is performed through a discreet incision at the base of the neck. Two structures receive constant attention: the recurrent laryngeal nerves, which control the vocal cords, and the parathyroid glands, which regulate calcium. Identifying and preserving them is at the heart of the surgical technique.

At Clinique Pasteur Tunis, thyroid surgery is performed by experienced surgeons, working with the endocrinologists for the work-up and follow-up. Pathological analysis of the surgical specimen is carried out, including frozen-section examination during the procedure if necessary, and simple hormone replacement therapy is put in place when the gland is removed entirely.`,
    image: '/images/fiches/carci-cancers-thyroidiens.webp',
    indications: [
      { label: 'Thyroid nodule that is suspicious on needle aspiration or ultrasound', explication: `When the examinations cannot formally rule out a cancer, removal of the nodule provides a definitive answer while treating the lesion.` },
      { label: 'Thyroid cancer confirmed by tissue samples', explication: `Surgery is the first-line treatment for thyroid cancers, whose course is most often very favourable after the operation.` },
      { label: 'Nodular goitre with an associated suspicious nodule', explication: `When an enlarged gland harbours a doubtful nodule, removing the affected area treats the goitre and resolves the doubt at the same time.` },
      { label: 'Nodule growing in size or compressing neighbouring organs', explication: `A growing nodule can interfere with swallowing, breathing or the voice: its removal relieves these symptoms and allows its complete analysis.` },
    ],
    preparation: [
      'Complete work-up: neck ultrasound, needle aspiration of the nodule and hormone assays',
      'Examination of the vocal cords before the procedure if necessary',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Discreet incision at the base of the neck, in a natural skin fold',
      'Identification and preservation of the recurrent laryngeal nerves and the parathyroid glands',
      'Removal of the affected lobe or of the whole gland depending on the case',
      'Frozen-section analysis during the procedure if necessary',
      'Associated lymph node dissection when the situation requires it',
      'Careful closure for a discreet scar',
    ],
    duree: '1 to 3 hours',
    resultats: 'The hospital stay is short and the scar, placed in a fold of the neck, becomes very discreet over time. In the event of total removal, simple daily hormone replacement therapy takes over the function of the gland. The definitive pathology result guides the follow-up, organised with the endocrinologist.',
    risques: [
      'Temporary change in the voice, most often reversible',
      'Temporary drop in blood calcium, corrected with supplementation',
      'Post-operative neck haematoma, rare and closely monitored',
      'Scar, usually fine and discreet',
    ],
  },
  {
    slug: 'cancers-du-sein',
    title: 'Breast cancer surgery',
    shortTitle: 'Breast cancers',
    description: 'Surgical treatment of breast cancer, breast-conserving whenever possible, with the sentinel lymph node technique and personalised support.',
    fullDescription: `Surgery is a cornerstone of breast cancer treatment. Whenever the size and location of the tumour allow it, breast-conserving treatment is favoured: only the diseased area is removed, with safety margins, preserving the breast. When complete removal (mastectomy) is necessary, reconstruction can be considered, either immediate or delayed.

Assessment of the lymph nodes in the armpit is an integral part of the treatment: in many cases, the sentinel lymph node technique makes it possible to analyse only the first draining nodes and to avoid an extensive dissection when it is not necessary.

At Clinique Pasteur Tunis, each case is discussed at a multidisciplinary team meeting bringing together the surgeon, oncologist and radiologist, and the patient is supported at every stage, including psychologically. Pathological analysis of the surgical specimens is carried out, with frozen-section examination during the procedure when useful.`,
    image: '/images/fiches/carci-cancers-du-sein.webp',
    indications: [
      { label: 'Breast cancer confirmed by biopsy', explication: `Once the diagnosis has been established by biopsy, surgery removes the diseased area, conserving the breast whenever the size and location of the tumour allow it.` },
      { label: 'Suspicious breast lesion requiring diagnostic removal', explication: `When an image remains doubtful despite the examinations, removing the lesion to analyse it in full provides a clear and definitive answer.` },
      { label: 'Extensive precancerous lesions (carcinoma in situ)', explication: `These still-localised lesions have not crossed the boundaries of the tissue where they arose: removing them at this stage offers excellent chances of cure.` },
      { label: 'Local recurrence after breast-conserving treatment', explication: `If the disease reappears in a previously treated breast, appropriate further surgery is offered, as part of a strategy reviewed by the team.` },
      { label: 'Risk-reducing surgery in very specific situations, after specialist advice', explication: `In some women with a very high hereditary risk, preventive surgery can be considered, always after specialist advice and supported reflection.` },
    ],
    preparation: [
      'Complete breast work-up: mammography, ultrasound, MRI if necessary and biopsy',
      'Presentation of the case at a multidisciplinary team meeting',
      'Radiological localisation of the lesion before the procedure if it is not palpable',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Removal of the tumour with safety margins (breast-conserving treatment) or mastectomy depending on the case',
      'Identification and removal of the sentinel lymph node, or axillary dissection if necessary',
      'Frozen-section examination during the procedure when useful',
      'Careful reshaping of the breast for an optimal aesthetic result',
      'Discreet closure and appropriate dressing',
    ],
    duree: '1 to 3 hours',
    resultats: 'The hospital stay is short and pain is generally moderate. The complete pathology results, available after a few days, are presented at the multidisciplinary team meeting to define any additional treatments and the follow-up. The team supports the patient at every stage, including for a possible reconstruction project.',
    risques: [
      'Haematoma or infection of the operated area, uncommon',
      'Swelling of the arm (lymphoedema) after axillary dissection, prevented through monitoring and appropriate advice',
      'Altered sensation in the operated area, often temporary',
      'Possible need for further surgery depending on the definitive margin results',
    ],
  },
  {
    slug: 'chip-chimio-hyperthermie',
    title: 'HIPEC (Hyperthermic Intraperitoneal Chemotherapy)',
    shortTitle: 'HIPEC',
    description: 'A technique combining complete surgery of peritoneal lesions with heated chemotherapy delivered into the abdomen during the same operation.',
    fullDescription: `HIPEC (hyperthermic intraperitoneal chemotherapy) is a specialised technique intended for certain cancers that have reached the peritoneum, the membrane lining the inside of the abdomen. It combines two complementary stages within a single operation: complete surgical removal of the visible lesions, followed by the delivery of heated chemotherapy directly into the abdominal cavity.

Heat increases the effectiveness of the chemotherapy, and its local delivery makes it possible to reach microscopic residual cells while limiting its spread to the rest of the body. This demanding approach is intended for patients rigorously selected at a multidisciplinary team meeting, after a very thorough work-up.

At Clinique Pasteur Tunis, HIPEC is performed by a trained surgical and anaesthetic team, with post-operative monitoring in intensive care. The patient and their family are informed at length beforehand about the course of the operation and the convalescence, which takes time and requires ongoing support.`,
    image: '/images/fiches/carci-chip-chimio-hyperthermie.webp',
    indications: [
      { label: 'Peritoneal involvement of certain digestive cancers, in selected cases', explication: `When a digestive cancer has reached the membrane lining the abdomen, HIPEC offers well-selected patients a treatment option where possibilities used to be limited.` },
      { label: 'Certain ovarian tumours with peritoneal spread', explication: `Some ovarian cancers spread to the peritoneum: combining complete surgery with heated chemotherapy can then strengthen the treatment.` },
      { label: 'Pseudomyxoma peritonei', explication: `This rare disease, in which a jelly-like substance accumulates in the abdomen, finds its reference treatment in HIPEC.` },
      { label: 'Peritoneal mesothelioma, after specialist advice', explication: `This rare tumour of the abdominal membrane can benefit from HIPEC in certain situations, always after the advice of a specialised team.` },
      { label: 'Indication always validated at a multidisciplinary team meeting', explication: `HIPEC is a demanding operation: the decision is always made collectively by the surgeons, oncologists and radiologists, in the patient\'s best interest.` },
    ],
    preparation: [
      'Exhaustive work-up: complete imaging and precise assessment of the extent of the lesions',
      'Assessment of the patient\'s general and nutritional condition',
      'Validation of the indication at a multidisciplinary team meeting',
      'In-depth anaesthesia consultation',
      'Detailed information for the patient and their family about the operation and the convalescence',
    ],
    deroulement: [
      'General anaesthesia with enhanced monitoring',
      'Complete exploration of the abdominal cavity',
      'Surgical removal of all visible peritoneal lesions',
      'Setting up of the intraperitoneal perfusion circuit',
      'Delivery of the heated chemotherapy into the abdomen for the required time',
      'Washing, checks and closure',
      'Transfer to intensive care for initial monitoring',
    ],
    duree: 'A long operation, often 6 to 10 hours',
    resultats: 'Convalescence is gradual, with an initial stay in intensive care followed by an extended hospital stay while digestive and nutritional recovery takes place. Close oncological follow-up is then organised. For well-selected indications, HIPEC offers a treatment option where possibilities used to be limited.',
    risques: [
      'Digestive complications (leak, delayed return of bowel function), closely monitored post-operatively',
      'Temporary effects of the chemotherapy on blood tests, checked regularly',
      'Post-operative infections, prevented and actively treated',
      'Extended convalescence requiring nutritional support',
    ],
  },
  {
    slug: 'curage-ganglionnaire',
    title: 'Lymph node dissection',
    shortTitle: 'Lymph node dissection',
    description: 'Surgical removal of the lymph nodes draining a tumour, an essential step in the treatment and assessment of many cancers.',
    fullDescription: `The lymph nodes are the first drainage relay of the organs: in oncology, their analysis provides precise information about the spread of the disease, and their removal contributes to the local control of the cancer. Lymph node dissection consists of surgically removing the group of nodes draining the tumour: the armpit for the breast, the pelvis for gynaecological and urological cancers, the neck for the thyroid, and the corresponding relays for digestive cancers.

The dissection is most often performed during the same operation as the removal of the tumour. Its extent is defined according to precise rules, and in certain locations the sentinel lymph node technique makes it possible to limit the procedure when the first relays are free of disease.

At Clinique Pasteur Tunis, lymph node dissections are performed by surgeons experienced in each specialty concerned. All the removed nodes undergo pathological analysis, and the results, presented at the multidisciplinary team meeting, guide any additional treatments.`,
    image: '/images/fiches/carci-curage-ganglionnaire.webp',
    indications: [
      { label: 'Lymph node stage associated with breast cancer surgery', explication: `Analysis of the lymph nodes in the armpit is part of breast cancer treatment: it is performed during the same operation as the removal of the tumour.` },
      { label: 'Pelvic dissection for gynaecological or urological cancers', explication: `For certain cancers of the pelvis, removing the draining lymph nodes completes the treatment and clarifies the exact extent of the disease.` },
      { label: 'Neck dissection associated with thyroid surgery', explication: `When a thyroid cancer is accompanied by affected lymph nodes in the neck, their removal during the same operation improves control of the disease.` },
      { label: 'Standardised dissection for digestive cancers', explication: `Removing the lymph node relays according to precise rules is an integral part of surgery for cancers of the digestive tract and determines the quality of the treatment.` },
      { label: 'Positive sentinel lymph node requiring a completion dissection', explication: `If analysis of the first draining node reveals abnormal cells, a more complete dissection may be necessary to secure the treatment.` },
      { label: 'Suspicious enlarged lymph node to be removed for analysis', explication: `An abnormally large or unusual-looking lymph node can be removed to be analysed in full, providing a precise diagnosis.` },
    ],
    preparation: [
      'Imaging work-up identifying the lymph node areas concerned',
      'Discussion of the extent of the dissection at a multidisciplinary team meeting',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia, most often during the same operation as the removal of the tumour',
      'Approach to the lymph node area concerned',
      'Meticulous dissection preserving the neighbouring vessels and nerves',
      'En bloc removal of the lymph node group according to oncological rules',
      'Possible placement of a small temporary drain',
      'Careful closure',
    ],
    duree: '30 minutes to 2 hours depending on the area concerned, often integrated into the main operation',
    resultats: 'Pathological analysis of all the removed lymph nodes determines the stage of the disease and guides additional treatments. A small temporary drain is sometimes needed for the first few days. Specific advice is provided to prevent swelling of the limb concerned when the dissection makes it relevant.',
    risques: [
      'Temporary lymphatic leakage (lymphocele), monitored and drained by needle if needed',
      'Swelling of the neighbouring limb (lymphoedema), prevented through advice and early management',
      'Altered sensation in the operated area, often reversible',
    ],
  },
  {
    slug: 'reconstruction-post-cancer',
    title: 'Post-cancer reconstructive surgery',
    shortTitle: 'Reconstruction',
    description: 'Surgical reconstruction after cancer treatment, in particular breast reconstruction, to restore bodily integrity and quality of life.',
    fullDescription: `Reconstructive surgery is an integral part of the cancer care pathway. It aims to restore the shape and appearance of an operated area — the breast after mastectomy is the most frequent example — and makes an essential contribution to quality of life and to rebuilding one\'s self after the illness.

Several techniques exist: reconstruction with an implant, reconstruction using the patient\'s own tissues (flaps), or combined techniques, complemented if needed by symmetrisation procedures and reconstruction of the areola. Reconstruction can be immediate, during the same operation as the removal, or delayed until after the end of treatment: this choice is discussed case by case with the team.

At Clinique Pasteur Tunis, the reconstruction project is addressed from the outset of treatment planning, in consultation with the oncologist in order to choose the most appropriate timing. Patients receive complete information about the possible techniques and attentive support, step by step, through to the final result.`,
    image: '/images/fiches/carci-reconstruction-post-cancer.webp',
    indications: [
      { label: 'Breast reconstruction after mastectomy, immediate or delayed', explication: `After removal of a breast, reconstruction can be performed during the same operation or later, once treatment is complete: the choice belongs to the patient, guided by the team.` },
      { label: 'Correction of the after-effects of breast-conserving treatment', explication: `A treated breast can sometimes show a deformity or asymmetry: corrective procedures make it possible to harmonise the result.` },
      { label: 'Reconstruction after surgery at other sites (chest wall, soft tissues)', explication: `When cancer treatment has required the removal of tissues elsewhere on the body, reconstructive techniques restore the shape and function of the operated area.` },
      { label: 'Symmetrisation of the opposite breast', explication: `For a harmonious result, a procedure on the other breast may be offered in order to balance the silhouette after the reconstruction.` },
      { label: 'Reconstruction of the areola and nipple at the end of the pathway', explication: `The final step in the pathway, this finishing touch restores the reconstructed breast\'s natural appearance and completes the restoration of body image.` },
    ],
    preparation: [
      'Dedicated consultation to present the possible techniques and their stages',
      'Coordination with the oncologist to choose the right timing in relation to the treatments',
      'Pre-operative work-up and anaesthesia consultation',
      'Stopping smoking strongly advised to promote healing',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia',
      'Reconstruction using the chosen technique: implant, autologous tissues or combined technique',
      'Careful reshaping for a harmonious result',
      'Additional procedures planned in stages if necessary (symmetrisation, areola)',
      'Appropriate dressings and post-operative monitoring',
      'Close follow-up of healing in consultation',
    ],
    duree: '1 to 5 hours depending on the technique',
    resultats: 'The result becomes apparent gradually, as healing progresses and through any additional stages. Reconstruction makes an important contribution to well-being and restored confidence. The team remains available throughout the pathway to adjust and refine the result.',
    risques: [
      'Delayed healing, made more likely by smoking, hence the importance of stopping',
      'Haematoma or infection, uncommon and treated promptly',
      'Capsular contracture or displacement in the case of an implant, correctable with further surgery',
      'Possible need for additional stages to optimise the result, planned in the initial project',
    ],
  },
  {
    slug: 'biopsies-chirurgicales',
    title: 'Surgical biopsies',
    shortTitle: 'Biopsies',
    description: 'Surgical sampling of suspicious tissue when simple biopsies are impossible or insufficient, to establish a precise diagnosis.',
    fullDescription: `A surgical biopsy consists of removing, in the operating theatre, a fragment or the whole of a suspicious lesion in order to establish its exact nature. It is offered when simpler sampling — needle aspiration or image-guided biopsy — is impossible, insufficient or inconsistent with the images.

Depending on the location, the procedure may be an excisional biopsy, which removes the whole lesion (lymph node, subcutaneous nodule, breast lesion), or an incisional biopsy, which takes only a representative fragment. Prior radiological localisation is sometimes performed to guide the surgeon precisely to a non-palpable lesion.

At Clinique Pasteur Tunis, surgical biopsies are performed as day surgery in most cases, under appropriate anaesthesia. Pathological analysis of the samples is carried out, with the possibility of frozen-section examination during the procedure when the situation warrants it, and the results are passed on quickly to the doctor to organise the next stage of care.`,
    image: '/images/fiches/carci-biopsies-chirurgicales.webp',
    indications: [
      { label: 'Enlarged lymph node whose nature needs to be determined', explication: `A lymph node that remains enlarged without explanation deserves to be analysed: removing it in the operating theatre, a simple procedure, reveals its exact nature.` },
      { label: 'Suspicious lesion inaccessible to image-guided needle sampling', explication: `Some lesions are located in areas the needle cannot reach safely: surgical sampling then becomes the best option.` },
      { label: 'Previous samples insufficient or inconsistent with the imaging', explication: `When the first biopsies were inconclusive or do not match the images, a more complete surgical sample resolves the doubt.` },
      { label: 'Nodule or soft-tissue mass to be removed for complete analysis', explication: `Removing the whole lesion makes it possible both to treat it and to analyse it in full, for as precise a diagnosis as possible.` },
      { label: 'Non-palpable breast lesion requiring localised removal', explication: `For a breast abnormality visible only on the images, radiological localisation guides the surgeon precisely to the area to be removed.` },
    ],
    preparation: [
      'Imaging work-up precisely locating the lesion',
      'Pre-operative radiological localisation if the lesion is not palpable',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure if general anaesthesia is planned',
      'Adjustment of anticoagulants according to medical advice',
    ],
    deroulement: [
      'Local, regional or general anaesthesia depending on the location',
      'Discreet incision over the lesion',
      'Removal of the fragment or complete excision of the lesion',
      'Frozen-section examination during the procedure if necessary',
      'Check for absence of bleeding and careful closure',
      'Discharge the same day in most cases',
    ],
    duree: '30 minutes to 1 hour 30',
    resultats: 'The sample undergoes complete pathological analysis, and the results are passed on to the doctor within the following days. This precise diagnosis makes it possible to guide the most appropriate care. The scar is generally discreet and recovery straightforward.',
    risques: [
      'Small haematoma or swelling of the sampled area',
      'Local infection, rare and simply treated',
      'Temporary tenderness of the scar',
    ],
  },
];
