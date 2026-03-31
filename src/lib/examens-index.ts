import { examensCardiaques } from './examens-cardiaques'
import { examensNeurophysiologiques } from './examens-neurophysiologiques'
import { examensOphtalmologiques } from './examens-ophtalmologiques'
import { examensUrodynamiques } from './examens-urodynamiques'

export const examsByExploration: Record<string, any[]> = {
  'explorations-cardiaques': examensCardiaques,
  'explorations-neurophysiologiques': examensNeurophysiologiques,
  'explorations-ophtalmologiques': examensOphtalmologiques,
  'explorations-urodynamiques': examensUrodynamiques,
}

export { examensCardiaques, examensNeurophysiologiques, examensOphtalmologiques, examensUrodynamiques }
