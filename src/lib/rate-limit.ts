// Rate limiter en mémoire par IP (fenêtre glissante simple).
// Suffisant pour un site à un seul process (systemd). Se réinitialise au redémarrage.

type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

// Nettoyage périodique pour éviter la croissance mémoire.
let lastSweep = 0
function sweep(now: number) {
  if (now - lastSweep < 60_000) return
  lastSweep = now
  for (const [key, b] of buckets) {
    if (b.resetAt < now) buckets.delete(key)
  }
}

/**
 * Retourne true si la requête est autorisée, false si le quota est dépassé.
 * @param key identifiant (ex. `chat:<ip>`)
 * @param limit nombre de requêtes autorisées par fenêtre
 * @param windowMs durée de la fenêtre en ms
 */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  sweep(now)
  const b = buckets.get(key)
  if (!b || b.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (b.count >= limit) return false
  b.count++
  return true
}

/** Extrait l'IP client depuis les headers du reverse proxy (Caddy). */
export function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

/** Vérifie que la requête provient bien du site (anti-CSRF léger). */
export function isSameOrigin(req: Request): boolean {
  const allowed = [
    'https://cptunis.com',
    'https://www.cptunis.com',
    'https://pasteur.imedhh.com',
    'http://localhost:3010',
  ]
  const origin = req.headers.get('origin')
  if (origin) return allowed.includes(origin)
  // Certains navigateurs n'envoient pas Origin sur same-origin GET ; on retombe sur Referer.
  const referer = req.headers.get('referer')
  if (referer) return allowed.some((a) => referer.startsWith(a))
  return false
}
