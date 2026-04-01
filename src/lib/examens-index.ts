import { examensCardiaques } from './examens-cardiaques'
import { examensNeurophysiologiques } from './examens-neurophysiologiques'
import { examensUrodynamiques } from './examens-urodynamiques'
import { examensRadiologie } from './examens-radiologie'
import { examensEndoscopie } from './examens-endoscopie'

export const examsByExploration: Record<string, any[]> = {
  'explorations-cardiaques': examensCardiaques,
  'explorations-neurophysiologiques': examensNeurophysiologiques,
  'explorations-urodynamiques': examensUrodynamiques,
}

export const examsByCentre: Record<string, any[]> = {
  'radiologie': examensRadiologie,
  'endoscopie': examensEndoscopie,
}

export {
  examensCardiaques,
  examensNeurophysiologiques,
  examensUrodynamiques,
  examensRadiologie,
  examensEndoscopie,
}
