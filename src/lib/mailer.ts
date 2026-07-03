import nodemailer from 'nodemailer'

// Transporteur SMTP mutualisé (contact + devis).
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

/** Échappe le HTML pour empêcher toute injection dans les emails. */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return ''
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/** Validation email simple mais robuste. */
export function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

/** Nettoie une valeur texte : retire les caractères de contrôle et tronque. */
export function cleanText(value: unknown, maxLen = 2000): string {
  if (typeof value !== 'string') return ''
  // Garde tab (9), LF (10), CR (13) ; retire les autres caractères de contrôle.
  const cleaned = Array.from(value)
    .filter((ch) => {
      const c = ch.charCodeAt(0)
      if (c === 9 || c === 10 || c === 13) return true
      return c >= 32 && c !== 127
    })
    .join('')
  return cleaned.slice(0, maxLen).trim()
}
