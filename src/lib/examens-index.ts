import { examensCardiaques } from './examens-cardiaques'
import { examensNeurophysiologiques } from './examens-neurophysiologiques'
import { examensUrodynamiques } from './examens-urodynamiques'
import { examensRadiologie } from './examens-radiologie'
import { examensEndoscopie } from './examens-endoscopie'
import { servicesUrgences } from './services-urgences'
import { servicesHospitalisationJour } from './services-hospitalisation-jour'
import { servicesCoaching } from './services-coaching'

export const examsByExploration: Record<string, any[]> = {
  'explorations-cardiaques': examensCardiaques,
  'explorations-neurophysiologiques': examensNeurophysiologiques,
  'explorations-urodynamiques': examensUrodynamiques,
}

export const examsByCentre: Record<string, any[]> = {
  'radiologie': examensRadiologie,
  'endoscopie': examensEndoscopie,
  'explorations-cardiaques': examensCardiaques,
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
