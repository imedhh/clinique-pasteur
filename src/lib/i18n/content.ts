import type { Locale } from './config'
import * as frData from '@/lib/data'
import * as enData from '@/lib/locales/en/data'
import * as arData from '@/lib/locales/ar/data'
import * as frExamIdx from '@/lib/examens-index'
import * as enExamIdx from '@/lib/locales/en/examens-index'
import * as arExamIdx from '@/lib/locales/ar/examens-index'
import * as frPresIdx from '@/lib/prestations-chirurgie'
import * as enPresIdx from '@/lib/locales/en/prestations-chirurgie'
import * as arPresIdx from '@/lib/locales/ar/prestations-chirurgie'

const byLocale: Record<Locale, { data: any; examIdx: any; presIdx: any }> = {
  fr: { data: frData, examIdx: frExamIdx, presIdx: frPresIdx },
  en: { data: enData, examIdx: enExamIdx, presIdx: enPresIdx },
  ar: { data: arData, examIdx: arExamIdx, presIdx: arPresIdx },
}

export function getContent(locale: Locale) {
  const b = byLocale[locale] || byLocale.fr
  return {
    clinicInfo: b.data.clinicInfo as typeof frData.clinicInfo,
    chirurgies: b.data.chirurgies as typeof frData.chirurgies,
    centres: b.data.centres as typeof frData.centres,
    explorations: b.data.explorations as typeof frData.explorations,
    niveaux: b.data.niveaux as typeof frData.niveaux,
    examsByCentre: b.examIdx.examsByCentre as typeof frExamIdx.examsByCentre,
    examsByExploration: b.examIdx.examsByExploration as typeof frExamIdx.examsByExploration,
    prestationsByChirurgie: b.presIdx.prestationsByChirurgie as typeof frPresIdx.prestationsByChirurgie,
  }
}
