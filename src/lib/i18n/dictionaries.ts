import type { Locale } from './config'
import { fr, type Dictionary } from './dictionaries/fr'
import { en } from './dictionaries/en'
import { ar } from './dictionaries/ar'

const dicts: Record<Locale, Dictionary> = { fr, en, ar }

export function getDictionary(locale: Locale): Dictionary {
  return dicts[locale] || fr
}
