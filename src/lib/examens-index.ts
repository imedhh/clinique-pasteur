import { examensCardiaques } from './examens-cardiaques'
import { examensNeurophysiologiques } from './examens-neurophysiologiques'
import { examensOphtalmologiques } from './examens-ophtalmologiques'
import { examensUrodynamiques } from './examens-urodynamiques'
import { examensRadiologie } from './examens-radiologie'
import { examensEndoscopie } from './examens-endoscopie'
import { examensLaboratoire } from './examens-laboratoire'

export const examsByExploration: Record<string, any[]> = {
  'explorations-cardiaques': examensCardiaques,
  'explorations-neurophysiologiques': examensNeurophysiologiques,
  'explorations-ophtalmologiques': examensOphtalmologiques,
  'explorations-urodynamiques': examensUrodynamiques,
}

export const examsByCentre: Record<string, any[]> = {
  'radiologie': examensRadiologie,
  'endoscopie': examensEndoscopie,
  'laboratoire': examensLaboratoire,
}

export {
  examensCardiaques,
  examensNeurophysiologiques,
  examensOphtalmologiques,
  examensUrodynamiques,
  examensRadiologie,
  examensEndoscopie,
  examensLaboratoire,
}
