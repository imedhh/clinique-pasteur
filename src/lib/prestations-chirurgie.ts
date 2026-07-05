import { prestationsCardiovasculaire } from './prestations/cardiovasculaire'
import { prestationsGenerale } from './prestations/generale'
import { prestationsOrthopedique } from './prestations/orthopedique'
import { prestationsBariatrique } from './prestations/bariatrique'
import { prestationsEsthetique } from './prestations/esthetique'
import { prestationsUrologique } from './prestations/urologique'
import { prestationsOrl } from './prestations/orl'
import { prestationsNeurochirurgie } from './prestations/neurochirurgie'
import { prestationsPediatrique } from './prestations/pediatrique'
import { prestationsEndoscopique } from './prestations/endoscopique'
import { prestationsCoelioscopique } from './prestations/coelioscopique'
import { prestationsCarcinologique } from './prestations/carcinologique'
import { prestationsGynecoObstetrique } from './prestations/gyneco-obstetrique'
import { prestationsElectrophysiologie } from './prestations/electrophysiologie'

export const prestationsByChirurgie: Record<string, any[]> = {
  'chirurgie-cardiovasculaire': prestationsCardiovasculaire,
  'chirurgie-generale': prestationsGenerale,
  'chirurgie-orthopedique': prestationsOrthopedique,
  'chirurgie-bariatrique': prestationsBariatrique,
  'chirurgie-esthetique': prestationsEsthetique,
  'chirurgie-urologique': prestationsUrologique,
  'chirurgie-orl': prestationsOrl,
  'neurochirurgie': prestationsNeurochirurgie,
  'chirurgie-pediatrique': prestationsPediatrique,
  'chirurgie-endoscopique': prestationsEndoscopique,
  'chirurgie-coelioscopique': prestationsCoelioscopique,
  'chirurgie-carcinologique': prestationsCarcinologique,
  'chirurgie-gyneco-obstetrique': prestationsGynecoObstetrique,
  'electrophysiologie': prestationsElectrophysiologie,
}
