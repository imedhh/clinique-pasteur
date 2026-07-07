export const prestationsCardiovasculaire = [
  {
    slug: 'chirurgie-cardiaque-cec',
    title: 'Cardiac surgery under cardiopulmonary bypass (CPB)',
    shortTitle: 'Surgery under CPB',
    description: 'Open-heart cardiac procedures performed with a heart-lung machine that maintains blood circulation and oxygenation during the operation.',
    fullDescription: `Cardiopulmonary bypass (CPB), also known as extracorporeal circulation, is a technique that allows the surgeon to operate on a still, bloodless heart. During the procedure, a specialised device called a heart-lung machine temporarily takes over the work of the heart and lungs: it keeps blood circulating through the body and oxygenates it, under the constant supervision of a dedicated perfusionist.

This technique is essential for most so-called "open-heart" procedures: replacement or repair of heart valves, certain coronary artery bypass grafts, aortic surgery and correction of congenital malformations. It gives the surgeon optimal working conditions to perform highly precise manoeuvres.

CPB is now a fully mastered technique, governed by rigorous protocols for protecting the heart and other organs. At the end of the procedure, the heart gradually resumes its activity and the machine is gently withdrawn.

At Clinique Pasteur Tunis, surgery under CPB is performed in an operating theatre dedicated to cardiac surgery, by a seasoned team of surgeons, anaesthetists-intensivists and perfusionists. The patient is then admitted to the post-cardiac surgery intensive care unit for close monitoring.`,
    image: '/images/fiches/cardiovasc-chirurgie-cardiaque-cec.webp',
    indications: [
      { label: 'Replacement or repair of heart valves', explication: `When a heart valve leaks or narrows, the surgeon needs to work on a still heart: the heart-lung machine maintains circulation throughout the procedure.` },
      { label: 'Coronary artery bypass grafts requiring a still heart', explication: `Some bypass grafts demand extreme precision: temporarily stopping the heart allows the vascular bridges to be sutured under the best possible conditions.` },
      { label: 'Thoracic aortic surgery', explication: `When the great artery leaving the heart is dilated or damaged, CPB makes it possible to replace it safely.` },
      { label: 'Correction of congenital heart disease', explication: `Repairing a heart malformation present from birth often requires opening the heart, which is only possible thanks to CPB.` },
      { label: 'Combined procedures (valve and bypass, for example)', explication: `When several cardiac problems are treated during the same operation, CPB provides the time and stability required.` },
    ],
    preparation: [
      'Complete cardiac work-up (echocardiography, coronary angiography if necessary)',
      'Pre-operative blood tests and imaging',
      'Mandatory anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Stopping or adjusting certain medications according to the doctor\'s instructions',
    ],
    deroulement: [
      'Reception and positioning in the operating theatre dedicated to cardiac surgery',
      'General anaesthesia with full monitoring',
      'Establishment of cardiopulmonary bypass under the perfusionist\'s supervision',
      'Performance of the surgical procedure on a still heart',
      'Gradual resumption of cardiac activity and weaning from CPB',
      'Closure and transfer to the post-cardiac surgery intensive care unit',
    ],
    duree: '3 to 5 hours depending on the complexity of the procedure',
    resultats: 'After a monitoring stay of 24 to 72 hours in the cardiac intensive care unit, the patient moves to an inpatient room. Recovery is gradual and supported by the care team, with a step-by-step return to activities over several weeks.',
    risques: [
      'As with any major surgery, complications are possible but are the subject of rigorous prevention',
      'Continuous monitoring in a dedicated intensive care unit during the first few days',
      'Regular cardiology follow-up is organised after discharge',
    ],
  },
  {
    slug: 'chirurgie-cardiaque-coeur-ferme',
    title: 'Closed-heart cardiac surgery',
    shortTitle: 'Closed-heart surgery',
    description: 'Cardiac procedures performed without stopping the heart or using cardiopulmonary bypass, on a heart that keeps beating.',
    fullDescription: `Closed-heart cardiac surgery covers procedures performed without opening the cardiac chambers and without using cardiopulmonary bypass. The heart continues to beat normally during the operation, avoiding the constraints associated with temporary cardiac arrest.

This approach is used in particular for certain so-called "beating-heart" coronary artery bypass grafts, for procedures on the vessels close to the heart, and for certain corrections of malformations. The surgeon uses stabilisation devices that immobilise only the area being operated on, while the rest of the heart carries on working.

When indicated, this technique can allow faster recovery and a simpler post-operative course. The choice between closed-heart surgery and surgery under CPB is always discussed case by case by the medical-surgical team, according to the condition and profile of each patient.

At Clinique Pasteur Tunis, the cardiovascular surgery team has mastered all of these techniques and selects the most suitable approach for each patient, with post-operative monitoring provided in a specialised intensive care unit.`,
    image: '/images/fiches/cardiovasc-chirurgie-cardiaque-coeur-ferme.webp',
    indications: [
      { label: 'Beating-heart coronary artery bypass in selected patients', explication: `In some patients, the arteries of the heart can be bypassed without stopping the heart, which often simplifies the post-operative course.` },
      { label: 'Procedures on the great vessels close to the heart', explication: `Certain vessels located around the heart can be operated on without having to open the cardiac chambers.` },
      { label: 'Certain corrections of congenital malformations', explication: `A few malformations present from birth can be corrected without stopping the heart or using the heart-lung machine.` },
      { label: 'Patients for whom cardiopulmonary bypass is not advisable', explication: `When a patient\'s health makes the heart-lung machine risky, operating on a beating heart offers a gentler alternative.` },
    ],
    preparation: [
      'Complete cardiology work-up with imaging',
      'Standard pre-operative work-up (blood tests, X-ray)',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Adjustment of anticoagulant medication as prescribed',
    ],
    deroulement: [
      'Positioning in the operating theatre and general anaesthesia',
      'Surgical approach suited to the planned procedure',
      'Local stabilisation of the area to be operated on, while the heart keeps beating',
      'Performance of the surgical procedure',
      'Closure and transfer to the post-operative monitoring unit',
    ],
    duree: '2 to 4 hours depending on the procedure',
    resultats: 'The post-operative course is generally simpler than after surgery under CPB, with an often shorter stay in intensive care and early mobilisation encouraged from the first days.',
    risques: [
      'Risks inherent in any cardiac surgery, reduced by rigorous selection of indications',
      'Possible conversion to a CPB technique if necessary, decided in the patient\'s best interest',
      'Close monitoring in intensive care during the first 24 to 48 hours',
    ],
  },
  {
    slug: 'chirurgie-cardiaque-mini-invasive',
    title: 'Minimally invasive cardiac surgery',
    shortTitle: 'Minimally invasive surgery',
    description: 'Cardiac surgical techniques performed through small incisions, for faster recovery and smaller scars.',
    fullDescription: `Minimally invasive cardiac surgery consists of performing certain cardiac procedures through small incisions, without fully opening the chest. The surgeon reaches the heart through a limited approach, often between the ribs, using specially designed instruments and optimised visualisation.

This approach offers several advantages for eligible patients: reduced post-operative pain, more discreet scars, an often shorter hospital stay and a quicker return to daily activities. It is offered in particular for certain valve surgeries and certain corrections of malformations.

Not every condition is suited to this technique: the surgical team carefully assesses each case to determine whether a minimally invasive approach is possible and safe, or whether conventional surgery remains preferable.

At Clinique Pasteur Tunis, minimally invasive cardiac surgery is performed by an experienced team, in operating theatres equipped with the latest technology, with personalised post-operative follow-up in a specialised unit.`,
    image: '/images/fiches/cardiovasc-chirurgie-cardiaque-mini-invasive.webp',
    indications: [
      { label: 'Certain mitral valve surgeries', explication: `The mitral valve can often be operated on through a small incision between the ribs, with less pain and a discreet scar.` },
      { label: 'Certain aortic valve surgeries', explication: `When the anatomy allows, the aortic valve is replaced through a limited approach, without fully opening the chest.` },
      { label: 'Closure of certain intracardiac communications', explication: `A small abnormal opening between the chambers of the heart can sometimes be closed via this minimally invasive route.` },
      { label: 'Patients seeking a fast recovery, when the anatomy allows', explication: `This approach is intended for patients who want to return to their activities sooner, after checking that their situation allows it in complete safety.` },
    ],
    preparation: [
      'In-depth imaging work-up to confirm the feasibility of the minimally invasive approach',
      'Complete pre-operative work-up',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia with specialised monitoring',
      'Small chest incision suited to the procedure',
      'Performance of the surgical procedure using dedicated instruments',
      'Verification of the result by intraoperative echocardiography',
      'Closure of the incisions and transfer to post-operative monitoring',
    ],
    duree: '2 to 4 hours',
    resultats: 'Recovery is generally faster than after conventional surgery: early mobilisation, limited pain and a gradual return to activities within a few weeks, with an appreciated cosmetic result.',
    risques: [
      'Operative risks comparable to conventional surgery, assessed case by case',
      'Possible conversion to conventional surgery if safety requires it',
      'Post-operative follow-up identical to that of any cardiac surgery',
    ],
  },
  {
    slug: 'chirurgie-endovasculaire',
    title: 'Peripheral and aortic endovascular surgery',
    shortTitle: 'Endovascular surgery',
    description: 'Treatment of arterial disease from within the vessels, using catheters, balloons and stent grafts, without a large surgical incision.',
    fullDescription: `Endovascular surgery is a modern approach that treats arterial disease "from the inside", navigating through the vessels with catheters introduced via a simple puncture, most often at the groin. It thus avoids the large incisions of conventional vascular surgery.

This technique makes it possible to dilate narrowed arteries with balloons, to place stents to keep the vessel open, or to deploy stent grafts to exclude an aortic aneurysm. The procedure is guided in real time by imaging, ensuring great precision.

The benefits for the patient are significant: often lighter anaesthesia, no large scar, a short hospital stay and rapid recovery. Endovascular surgery is particularly suited to patients for whom open surgery would involve significant constraints.

At Clinique Pasteur Tunis, these procedures are performed in a latest-generation catheterisation laboratory, by a team proficient in both endovascular techniques and conventional vascular surgery, guaranteeing comprehensive care tailored to each situation.`,
    image: '/images/fiches/cardiovasc-chirurgie-endovasculaire.webp',
    indications: [
      { label: 'Abdominal or thoracic aortic aneurysm eligible for a stent graft', explication: `When the body\'s great artery dilates, an internal prosthesis can be deployed through a simple puncture to protect it, without a large incision.` },
      { label: 'Narrowing of the arteries of the lower limbs (peripheral arterial disease)', explication: `When the leg arteries become blocked and cause pain on walking, a balloon or stent restores the circulation.` },
      { label: 'Stenoses of the renal or digestive arteries', explication: `The arteries that supply the kidneys or the intestine can be widened from the inside to restore good blood flow.` },
      { label: 'Certain lesions of the carotid arteries', explication: `Certain narrowings of the neck arteries, which supply the brain, can be treated from within the vessel.` },
      { label: 'Patients at high risk for open surgery', explication: `When a conventional operation would be too taxing, this gentle technique offers effective treatment with rapid recovery.` },
    ],
    preparation: [
      'Vascular imaging work-up (CT angiography) to plan the procedure',
      'Blood tests including kidney function',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Report any allergy, particularly to contrast agents',
    ],
    deroulement: [
      'Positioning in the catheterisation laboratory and appropriate anaesthesia (local, regional or general)',
      'Arterial puncture, most often at the groin crease',
      'Navigation of the catheters under imaging guidance',
      'Dilation, stent placement or deployment of the stent graft',
      'Verification of the result by angiography',
      'Closure of the puncture site and monitoring',
    ],
    duree: '1 to 3 hours depending on complexity',
    resultats: 'The hospital stay is generally short, from 24 to 72 hours. Daily activities can be resumed quickly, and regular imaging follow-up is scheduled to check that the implanted device is working properly.',
    risques: [
      'Haematoma at the puncture site, usually harmless',
      'Reaction to the contrast agent, prevented by careful pre-procedure questioning',
      'Need for regular imaging follow-up after stent graft placement',
    ],
  },
  {
    slug: 'pontage-coronarien',
    title: 'Coronary artery bypass grafting (CABG)',
    shortTitle: 'Coronary bypass',
    description: 'Surgical procedure that restores blood supply to the heart muscle by bypassing narrowed or blocked coronary arteries.',
    fullDescription: `Coronary artery bypass grafting is one of the reference procedures for treating coronary artery disease, when the arteries that supply the heart are narrowed or blocked. The principle is to create a vascular "bridge" that bypasses the diseased area, in order to restore normal blood supply to the heart muscle.

To build these bridges, the surgeon uses vessels taken from the patient themselves: the internal mammary arteries located behind the breastbone, the radial artery of the forearm or veins from the legs. The choice of grafts is tailored to each patient to ensure the best possible durability.

Bypass surgery is indicated when the coronary lesions are too numerous, too diffuse or poorly located to be treated by angioplasty. It provides lasting relief from angina pain, improves quality of life and protects the heart.

At Clinique Pasteur Tunis, coronary bypass surgery is performed by a highly experienced surgical team, under cardiopulmonary bypass or on a beating heart depending on the case. Post-operative monitoring is provided in an intensive care unit entirely dedicated to cardiac surgery.`,
    image: '/images/fiches/cardiovasc-pontage-coronarien.webp',
    indications: [
      { label: 'Coronary artery disease affecting several arteries', explication: `When several arteries of the heart are narrowed at the same time, bypass surgery restores blood supply to the entire heart muscle.` },
      { label: 'Narrowing of the left main coronary artery', explication: `This artery supplies a large part of the heart: when it narrows, bypass surgery is often the safest and most durable solution.` },
      { label: 'Coronary lesions not amenable to angioplasty', explication: `When the narrowings are too long or poorly located to be dilated with a balloon, the surgeon creates a bridge that bypasses the diseased area.` },
      { label: 'Persistent angina despite well-managed medical treatment', explication: `If chest pain persists despite medication, bypass surgery provides lasting relief by restoring blood flow to the heart.` },
      { label: 'Certain situations associated with diabetes or impaired heart function', explication: `In some patients with diabetes or a weakened heart, bypass surgery offers better long-term results.` },
    ],
    preparation: [
      'Recent coronary angiography detailing the lesions to be treated',
      'Echocardiography and complete vascular work-up',
      'Pre-operative blood tests and anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Adjustment of antiplatelet and anticoagulant medication as prescribed',
    ],
    deroulement: [
      'General anaesthesia and positioning in the cardiac surgery theatre',
      'Harvesting of the grafts (mammary artery, leg vein or radial artery)',
      'Performance of the bypasses, under CPB or on a beating heart depending on the chosen strategy',
      'Verification of the quality of the anastomoses',
      'Closure and transfer to the post-cardiac surgery intensive care unit',
    ],
    duree: '3 to 5 hours',
    resultats: 'After 24 to 72 hours in intensive care followed by a few days in hospital, the patient begins a gradual convalescence. The disappearance of angina pain and the improvement in exercise tolerance are generally marked. Cardiac rehabilitation is often offered to optimise recovery.',
    risques: [
      'Possible complications as with any major cardiac surgery, prevented by a rigorous work-up',
      'Temporary discomfort at the graft harvesting sites',
      'Regular cardiology follow-up and a healthy lifestyle are essential for the durability of the grafts',
    ],
  },
  {
    slug: 'remplacement-valvulaire',
    title: 'Valve replacement (aortic, mitral)',
    shortTitle: 'Valve replacement',
    description: 'Surgical replacement of a diseased heart valve with a mechanical or biological prosthesis, to restore normal blood circulation.',
    fullDescription: `Heart valves work like doors that keep blood flowing in the right direction inside the heart. When a valve narrows (stenosis) or no longer closes properly (regurgitation), the heart has to work harder and gradually becomes exhausted. Valve replacement consists of removing the diseased valve and replacing it with a prosthesis.

Two main types of prosthesis exist: mechanical prostheses, which are very durable but require lifelong anticoagulant treatment, and biological prostheses, made from tissue of animal origin, which generally do not require long-term anticoagulation. The choice is discussed with the patient according to their age, lifestyle and preferences.

The most frequently replaced valves are the aortic valve and the mitral valve. The procedure is performed under cardiopulmonary bypass, via a conventional or minimally invasive approach depending on the case.

At Clinique Pasteur Tunis, valve replacement is performed by an experienced surgical team, with systematic intraoperative echocardiographic control and post-operative monitoring in a dedicated cardiac intensive care unit.`,
    image: '/images/fiches/cardiovasc-remplacement-valvulaire.webp',
    indications: [
      { label: 'Severe symptomatic aortic stenosis', explication: `When the aortic valve no longer opens properly, the heart becomes exhausted and breathlessness sets in: replacing the valve restores a normal passage for the blood.` },
      { label: 'Significant aortic regurgitation', explication: `When the aortic valve no longer closes properly, part of the blood flows back towards the heart; a prosthesis restores normal function.` },
      { label: 'Severe mitral regurgitation or stenosis that cannot be repaired', explication: `When the mitral valve is too damaged to be repaired, replacing it relieves the heart and reverses the symptoms.` },
      { label: 'Valve damage caused by infection (endocarditis) after stabilisation', explication: `An infection can damage a heart valve; once the infection is under control, the damaged valve is replaced.` },
      { label: 'Degeneration of a previously implanted valve prosthesis', explication: `A prosthesis implanted long ago can wear out over time; a new procedure allows it to be replaced.` },
    ],
    preparation: [
      'Detailed echocardiography and work-up coronary angiography',
      'Dental check-up to rule out any source of infection',
      'Complete blood tests and anaesthesia consultation',
      'Fast for 6 hours before the procedure',
      'Prior discussion of the type of prosthesis with the surgeon',
    ],
    deroulement: [
      'General anaesthesia and establishment of cardiopulmonary bypass',
      'Opening of the heart and removal of the diseased valve',
      'Implantation of the chosen prosthesis and verification of its proper function',
      'Intraoperative echocardiographic control',
      'Weaning from CPB, closure and transfer to intensive care',
    ],
    duree: '3 to 4 hours',
    resultats: 'Valve replacement quickly relieves symptoms of breathlessness and fatigue. After a few days in hospital, convalescence continues at home with a gradual return to activities. Regular cardiology follow-up and, depending on the prosthesis, appropriate anticoagulant treatment are put in place.',
    risques: [
      'Risks common to cardiac surgery, managed by strict protocols',
      'Need for lifelong anticoagulant treatment in the case of a mechanical prosthesis',
      'Rigorous prevention of infections, particularly during subsequent dental care',
    ],
  },
  {
    slug: 'reparation-valvulaire',
    title: 'Valve repair',
    shortTitle: 'Valve repair',
    description: 'Conservative surgery that repairs the patient\'s own heart valve instead of replacing it, thereby preserving their natural tissue.',
    fullDescription: `Whenever possible, repairing the patient's own heart valve rather than replacing it is often the best option. Valve repair, also called valvuloplasty, consists of restoring the valve's normal function while preserving the patient's natural tissue.

This conservative surgery is mainly aimed at the mitral valve, whose leaks can frequently be corrected by repair techniques: reshaping the leaflets, implanting a support ring, adjusting the chordae. The tricuspid valve can also benefit from these techniques.

The advantages of repair are significant: preservation of the natural valve, no lifelong anticoagulant treatment in most cases, better preservation of heart function and excellent durability of the result when the repair is performed by an experienced team.

At Clinique Pasteur Tunis, every valve case is studied in detail in order to favour repair whenever it is feasible. The result is systematically checked by echocardiography during the procedure, guaranteeing the quality of the repair before the end of the operation.`,
    image: '/images/fiches/cardiovasc-reparation-valvulaire.webp',
    indications: [
      { label: 'Mitral regurgitation due to prolapse or degeneration of the leaflets', explication: `When the mitral valve leaks because its leaflets are deformed, a repair restores the patient\'s natural valve rather than replacing it.` },
      { label: 'Tricuspid valve leak associated with another cardiac operation', explication: `If a tricuspid valve leak is found during heart surgery, it can be corrected during the same operation.` },
      { label: 'Certain valve leaks of congenital origin', explication: `Some valves malformed from birth can be reshaped to work normally, without a prosthesis.` },
      { label: 'Young patients wishing to avoid a prosthesis and lifelong anticoagulation', explication: `Keeping one\'s own valve usually avoids having to take blood-thinning treatment for life, a precious advantage in young patients.` },
    ],
    preparation: [
      'Transthoracic and transoesophageal echocardiography to analyse the valve',
      'Pre-operative work-up coronary angiography',
      'Blood tests and anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia and establishment of cardiopulmonary bypass',
      'Precise analysis of the valve by the surgeon',
      'Repair of the leaflets and chordae, and implantation of a ring if necessary',
      'Intraoperative echocardiographic check of the valve\'s competence',
      'Closure and transfer to cardiac intensive care',
    ],
    duree: '3 to 4 hours',
    resultats: 'Valve repair offers excellent, lasting results, with gradual recovery over a few weeks. As the natural valve is preserved, most patients do not need long-term anticoagulation. Regular echocardiographic follow-up is organised.',
    risques: [
      'Operative risks comparable to those of conventional valve surgery',
      'In rare cases, valve replacement may prove necessary during the procedure if the repair is not satisfactory',
      'Regular long-term cardiology follow-up recommended',
    ],
  },
  {
    slug: 'chirurgie-aorte',
    title: 'Surgery of the thoracic and abdominal aorta',
    shortTitle: 'Aortic surgery',
    description: 'Surgical management of diseases of the aorta, the body\'s largest artery, using open or endovascular techniques.',
    fullDescription: `The aorta is the largest artery in the body: it carries blood from the heart to the entire body. Its diseases, mainly aneurysms (dilations) and dissections (tears in the wall), require specialised management, sometimes as an emergency.

Aortic surgery consists of replacing the diseased segment with a vascular prosthesis, or reinforcing it from the inside with a stent graft depending on the location and anatomy. The segments concerned may be the ascending aorta close to the heart, the aortic arch, the descending thoracic aorta or the abdominal aorta.

These procedures are among the most specialised in cardiovascular surgery and require a trained team, a complete technical platform and a high-performing intensive care unit. Modern techniques, particularly hybrid approaches combining open and endovascular surgery, make it possible to tailor treatment to each situation.

Clinique Pasteur Tunis has all the resources needed for this high-level surgery: a dedicated operating theatre with cardiopulmonary bypass, a catheterisation laboratory for endovascular procedures and a specialised intensive care unit for post-operative monitoring.`,
    image: '/images/fiches/cardiovasc-chirurgie-aorte.webp',
    indications: [
      { label: 'Aneurysm of the ascending aorta, the arch or the descending aorta', explication: `When a segment of the aorta in the chest dilates, it is replaced or reinforced before the weakened wall leads to complications.` },
      { label: 'Abdominal aortic aneurysm that has reached the treatment threshold', explication: `When the dilation of the aorta in the abdomen becomes too large, preventive treatment is required to rule out the risk of rupture.` },
      { label: 'Aortic dissection', explication: `A tear in the inner wall of the aorta is an emergency: surgery repairs the damaged segment and protects the organs.` },
      { label: 'Diseases of the elastic tissue that weaken the aorta', explication: `Certain diseases make the wall of the aorta more fragile; preventive surgery is sometimes offered before any complication occurs.` },
      { label: 'Monitoring of a progressively enlarging aortic dilation', explication: `When an aortic dilation grows from one check-up to the next, the team chooses the best time to intervene, without waiting for a complication.` },
    ],
    preparation: [
      'CT angiography of the entire aorta to plan the procedure',
      'Echocardiography and complete cardiology work-up',
      'Blood tests, kidney and respiratory assessment',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'General anaesthesia with advanced monitoring',
      'Surgical approach or vascular puncture depending on the chosen technique',
      'Replacement of the diseased aortic segment with a prosthesis, or deployment of a stent graft',
      'Intraoperative checks of the circulation in all vascular territories',
      'Closure and transfer to specialised intensive care',
    ],
    duree: '3 to 6 hours depending on the segment treated and the technique',
    resultats: 'Initial monitoring takes place in intensive care for 24 to 72 hours. Convalescence extends over several weeks with a very gradual return to activities. Regular imaging follow-up is essential to monitor the prosthesis and the rest of the aorta.',
    risques: [
      'Major surgery whose risks are controlled by an experienced team and a complete technical platform',
      'Close kidney and neurological monitoring post-operatively',
      'Long-term imaging follow-up is essential',
    ],
  },
  {
    slug: 'traitement-anevrismes',
    title: 'Treatment of aneurysms',
    shortTitle: 'Aneurysms',
    description: 'Surgical or endovascular treatment of abnormal dilations of the arteries, before they lead to complications.',
    fullDescription: `An aneurysm is a localised, permanent dilation of an artery, whose wall gradually weakens. Often silent for years, it is frequently discovered during an imaging examination. Treating it in time, before any complication, is the essential goal of management.

Two main approaches exist. Open surgery consists of replacing the dilated arterial segment with a vascular prosthesis: it is a proven and durable technique. Endovascular treatment consists of excluding the aneurysm from the circulation by deploying a stent graft inside the artery, through a simple puncture at the groin crease.

The choice between these two techniques depends on the location of the aneurysm (abdominal aorta, thoracic aorta, peripheral arteries), its shape, and the patient's age and general condition. This decision is made collegially, after a complete imaging work-up.

At Clinique Pasteur Tunis, the cardiovascular team has mastered both approaches, which makes it possible to offer each patient the solution best suited to their situation, with organised long-term follow-up.`,
    image: '/images/fiches/cardiovasc-traitement-anevrismes.webp',
    indications: [
      { label: 'Abdominal aortic aneurysm that has reached a size warranting treatment', explication: `Beyond a certain size, a dilation of the aorta must be treated to prevent any risk of rupture.` },
      { label: 'Progressively enlarging thoracic aortic aneurysm', explication: `When the dilation in the chest keeps growing, planned treatment makes it possible to act before any complication.` },
      { label: 'Aneurysms of the peripheral arteries (popliteal, femoral)', explication: `The arteries of the leg can also dilate; treating them prevents the formation of clots that would impede the circulation.` },
      { label: 'Symptomatic or rapidly growing aneurysm', explication: `An aneurysm that becomes painful or grows quickly must be treated without delay.` },
      { label: 'Incidental finding requiring specialised assessment', explication: `An aneurysm discovered by chance during an imaging examination deserves a specialist opinion to decide between simple monitoring and treatment.` },
    ],
    preparation: [
      'CT angiography to measure the aneurysm precisely and plan the procedure',
      'Cardiology and respiratory work-up',
      'Blood tests and assessment of kidney function',
      'Anaesthesia consultation',
      'Fast for 6 hours before the procedure',
    ],
    deroulement: [
      'Anaesthesia suited to the chosen technique',
      'Surgical treatment (prosthetic replacement) or endovascular treatment (stent graft)',
      'Intraoperative check of complete exclusion of the aneurysm',
      'Closure and appropriate post-operative monitoring',
    ],
    duree: '2 to 5 hours depending on the technique and location',
    resultats: 'After endovascular treatment, the hospital stay is short and recovery is rapid. After open surgery, convalescence is more gradual but the result is particularly durable. In both cases, regular imaging follow-up is scheduled.',
    risques: [
      'Operative risks assessed case by case and discussed with the patient before the procedure',
      'After a stent graft, need for regular imaging surveillance',
      'Stopping smoking and controlling blood pressure are essential to protect the arteries',
    ],
  },
  {
    slug: 'chirurgie-cardiopathies-congenitales',
    title: 'Surgery for congenital heart disease',
    shortTitle: 'Congenital heart disease',
    description: 'Surgical correction of heart malformations present from birth, in children and adults alike.',
    fullDescription: `Congenital heart diseases are malformations of the heart present from birth: abnormal communication between the cardiac chambers, valve anomalies, malposition of the great vessels. Thanks to advances in cardiac surgery, the vast majority of these malformations can now be corrected with excellent results.

Managing these conditions requires particular expertise: precise diagnosis relies on in-depth cardiac imaging, and the surgical procedure must be tailored to each patient's individual anatomy. Some corrections are performed in early childhood, others can be scheduled later, including in adulthood when the malformation was discovered late.

The procedure is generally performed under cardiopulmonary bypass, with specifically adapted heart-protection techniques. Long-term follow-up by a cardiologist is an essential part of the care.

Clinique Pasteur Tunis manages congenital heart disease in both children and adults, thanks to a surgical team experienced in this demanding field and a post-cardiac surgery intensive care unit fully equipped to receive these patients.`,
    image: '/images/fiches/cardiovasc-chirurgie-cardiopathies-congenitales.webp',
    indications: [
      { label: 'Atrial septal defect (ASD) or ventricular septal defect (VSD)', explication: `An abnormal opening between the chambers of the heart tires it out over time; surgical closure restores normal circulation.` },
      { label: 'Patent ductus arteriosus', explication: `A small duct that should have closed after birth sometimes remains open; the procedure closes it and relieves the heart.` },
      { label: 'Tetralogy of Fallot and complex malformations', explication: `Malformations combining several heart anomalies can be corrected by specialised surgery, with excellent results.` },
      { label: 'Congenital anomalies of the heart valves', explication: `A valve malformed from birth can be repaired or replaced to allow the heart to work normally.` },
      { label: 'Congenital heart disease discovered in adulthood', explication: `Some malformations go unnoticed for years; they can be corrected even in adulthood.` },
    ],
    preparation: [
      'Complete cardiology work-up with detailed echocardiography',
      'Additional imaging (cardiac CT or MRI) if necessary',
      'Pre-operative work-up suited to the patient\'s age',
      'Specialised anaesthesia consultation',
      'Fasting according to age-appropriate instructions',
    ],
    deroulement: [
      'General anaesthesia adapted to the patient\'s age and weight',
      'Establishment of cardiopulmonary bypass',
      'Correction of the malformation according to the planned technique',
      'Intraoperative echocardiographic check of the result',
      'Transfer to intensive care for close monitoring',
    ],
    duree: '3 to 6 hours depending on the complexity of the malformation',
    resultats: 'Correcting a congenital heart defect most often transforms the patient\'s life: better exercise tolerance, harmonious growth in children, a normal daily life. Regular cardiology follow-up is maintained throughout life.',
    risques: [
      'Operative risks depending on the complexity of the malformation, explained in detail to families',
      'Extended monitoring in intensive care for complex corrections',
      'Need for long-term cardiology follow-up',
    ],
  },
  {
    slug: 'pose-pacemaker-defibrillateur',
    title: 'Pacemaker and defibrillator implantation',
    shortTitle: 'Pacemaker and defibrillator',
    description: 'Implantation of cardiac devices that regulate the heart\'s rhythm or protect it against serious rhythm disorders.',
    fullDescription: `The pacemaker (cardiac stimulator) and the implantable automatic defibrillator are small electronic devices placed under the skin, usually below the collarbone, and connected to the heart by leads. The pacemaker stimulates the heart when it beats too slowly, while the defibrillator continuously monitors the heart rhythm and delivers automatic treatment in the event of a serious rhythm disorder.

Implantation is a short, well-standardised procedure, most often performed under local anaesthesia supplemented by light sedation. The leads are introduced through a vein and positioned in the heart under X-ray guidance, then connected to the generator slipped under the skin.

These modern devices are discreet, reliable and have a long battery life. They are checked regularly in consultation, making it possible to verify their operation and adjust their settings without further intervention.

At Clinique Pasteur Tunis, pacemaker and defibrillator implantations are performed by a team specialised in cardiac electrophysiology, under rigorous aseptic conditions, with a personalised follow-up programme after implantation.`,
    image: '/images/fiches/cardiovasc-pose-pacemaker-defibrillateur.webp',
    indications: [
      { label: 'Significant slowing of the heart rate (symptomatic bradycardia)', explication: `When the heart beats too slowly and causes fatigue or fainting spells, the pacemaker stimulates it to maintain an appropriate rhythm.` },
      { label: 'Blocks in the heart\'s electrical conduction', explication: `When the heart\'s electrical current flows poorly between its chambers, the pacemaker takes over to ensure regular beats.` },
      { label: 'Documented syncope of cardiac origin', explication: `When losses of consciousness are linked to an excessively slow heart rhythm, the pacemaker prevents them effectively.` },
      { label: 'Prevention of serious rhythm disorders in at-risk patients', explication: `In patients at risk of dangerous racing of the heart, the defibrillator monitors continuously and intervenes automatically if needed.` },
      { label: 'Heart failure requiring rhythm protection', explication: `When the heart is weakened, certain devices help it beat in a more coordinated way and protect it from serious rhythm disorders.` },
    ],
    preparation: [
      'Cardiology work-up with ECG and echocardiography',
      'Blood tests including coagulation',
      'Adjustment of anticoagulants according to the doctor\'s instructions',
      'Fast for 6 hours before the procedure',
      'Antiseptic shower the evening before and on the morning of the procedure',
    ],
    deroulement: [
      'Positioning in a dedicated room and local anaesthesia with sedation',
      'Small incision below the collarbone',
      'Introduction of the leads through a vein under X-ray guidance',
      'Positioning of the leads in the heart and function testing',
      'Connection to the generator and closure of the subcutaneous pocket',
      'Final check of the device before returning to the room',
    ],
    duree: '1 to 2 hours',
    resultats: 'The device is operational immediately. After a short hospital stay of 24 to 48 hours, the patient quickly resumes activities, simply avoiding wide arm movements on the implanted side for a few weeks. Regular device checks are scheduled in consultation.',
    risques: [
      'Small haematoma at the pocket site, generally without consequence',
      'Very limited risk of infection thanks to strict aseptic protocols',
      'Rare lead displacement, corrected if necessary by a simple procedure',
    ],
  },
];
