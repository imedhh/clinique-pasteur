import { examensCardiaques } from './examens-cardiaques'
import { examensNeurophysiologiques } from './examens-neurophysiologiques'
import { examensUrodynamiques } from './examens-urodynamiques'
import { examensRadiologie } from './examens-radiologie'
import { examensEndoscopie } from './examens-endoscopie'
import { servicesUrgences } from './services-urgences'
import { servicesHospitalisationJour } from './services-hospitalisation-jour'
import { servicesCoaching } from './services-coaching'
import { CATHETERISME_SLUGS } from './prestations/catheterisme'

// Les actes invasifs (coronarographie, cathétérisme, angioplastie, valvuloplastie)
// sont désormais présentés dans la spécialité « Cathétérisme » (Chirurgies).
// On les retire donc du centre d'explorations cardiaques (qui garde le non-invasif).
const explorationsCardiaquesNonInvasif = examensCardiaques.filter(
  (e: any) => !CATHETERISME_SLUGS.includes(e.slug)
)

export const examsByExploration: Record<string, any[]> = {
  'explorations-cardiaques': explorationsCardiaquesNonInvasif,
  'explorations-neurophysiologiques': examensNeurophysiologiques,
  'explorations-urodynamiques': examensUrodynamiques,
}

export const examsByCentre: Record<string, any[]> = {
  'radiologie': examensRadiologie,
  'endoscopie': examensEndoscopie,
  'explorations-cardiaques': explorationsCardiaquesNonInvasif,
  'explorations-neurophysiologiques': examensNeurophysiologiques,
  'explorations-urodynamiques': examensUrodynamiques,
  'urgences': servicesUrgences,
  'hospitalisation-jour': servicesHospitalisationJour,
  'coaching-nutritionnel-esthetique': servicesCoaching,
}

export {
  examensCardiaques,
  examensNeurophysiologiques,
  examensUrodynamiques,
  examensRadiologie,
  examensEndoscopie,
}
