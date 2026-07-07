import { examensCardiaques } from '../examens-cardiaques'

// Spécialité « Cathétérisme & Cardiologie Interventionnelle ».
// On réutilise les fiches d'actes invasifs déjà rédigées dans examens-cardiaques
// (source unique de vérité) plutôt que de dupliquer leur contenu.
export const CATHETERISME_SLUGS = [
  'coronarographie',
  'catheterisme-cardiaque',
  'angioplastie-stent',
  'valvuloplastie-percutanee',
]

export const prestationsCatheterisme = CATHETERISME_SLUGS
  .map((slug) => examensCardiaques.find((e: any) => e.slug === slug))
  .filter(Boolean) as any[]
