import { NextResponse } from 'next/server'
import { transporter, escapeHtml, isValidEmail, cleanText } from '@/lib/mailer'
import { rateLimit, clientIp, isSameOrigin } from '@/lib/rate-limit'

const MAX_FILES = 5
const MAX_TOTAL_BYTES = 15 * 1024 * 1024 // 15 Mo au total
const ALLOWED_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/dicom',
  'application/octet-stream', // fichiers .dcm/.dicom sans type MIME reconnu
])

// Taille réelle d'un contenu base64 en octets.
function base64Bytes(b64: string): number {
  const len = b64.length
  const padding = b64.endsWith('==') ? 2 : b64.endsWith('=') ? 1 : 0
  return Math.floor((len * 3) / 4) - padding
}

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) {
      return NextResponse.json({ success: false, error: 'Origine non autorisée' }, { status: 403 })
    }

    const ip = clientIp(req)
    if (!rateLimit(`devis:${ip}`, 5, 60_000)) {
      return NextResponse.json({ success: false, error: 'Trop de demandes, veuillez patienter.' }, { status: 429 })
    }

    const data = await req.json()

    // Honeypot.
    if (data?.website) {
      return NextResponse.json({ success: true })
    }

    const nom = cleanText(data?.nom, 100)
    const prenom = cleanText(data?.prenom, 100)
    if (!nom || !isValidEmail(data?.email)) {
      return NextResponse.json({ success: false, error: 'Nom et email valides requis' }, { status: 400 })
    }

    const email = data.email as string
    const telephone = cleanText(data?.telephone, 40)
    const pays = cleanText(data?.pays, 80)
    const age = cleanText(data?.age, 10)
    const specialite = cleanText(data?.specialite, 120)
    const typeChambre = cleanText(data?.typeChambre, 80)
    const dateSouhaitee = cleanText(data?.date, 40)
    const message = cleanText(data?.message, 5000)

    // Validation des pièces jointes.
    const rawFiles = Array.isArray(data?.fichiers) ? data.fichiers : []
    if (rawFiles.length > MAX_FILES) {
      return NextResponse.json({ success: false, error: `Maximum ${MAX_FILES} fichiers` }, { status: 400 })
    }

    let totalBytes = 0
    const attachments: { filename: string; content: Buffer; contentType: string }[] = []
    for (const f of rawFiles) {
      if (!f || typeof f.content !== 'string' || typeof f.name !== 'string') {
        return NextResponse.json({ success: false, error: 'Fichier invalide' }, { status: 400 })
      }
      const type = typeof f.type === 'string' ? f.type : 'application/octet-stream'
      if (!ALLOWED_TYPES.has(type)) {
        return NextResponse.json({ success: false, error: `Type de fichier non autorisé : ${escapeHtml(type)}` }, { status: 400 })
      }
      totalBytes += base64Bytes(f.content)
      if (totalBytes > MAX_TOTAL_BYTES) {
        return NextResponse.json({ success: false, error: 'Pièces jointes trop volumineuses (max 15 Mo au total)' }, { status: 400 })
      }
      attachments.push({
        filename: cleanText(f.name, 200) || 'document',
        content: Buffer.from(f.content, 'base64'),
        contentType: type,
      })
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2D8C4E, #1a5c32); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle Demande de Devis</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Via cptunis.com</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <h2 style="color: #1a5c32; margin-top: 0;">Informations du patient</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nom</td><td style="padding: 8px 0; font-weight: bold;">${escapeHtml(nom)}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Prénom</td><td style="padding: 8px 0; font-weight: bold;">${escapeHtml(prenom) || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;">${escapeHtml(telephone) || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Pays</td><td style="padding: 8px 0;">${escapeHtml(pays) || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Âge</td><td style="padding: 8px 0;">${escapeHtml(age) || '-'}</td></tr>
          </table>

          <h2 style="color: #1a5c32; margin-top: 24px;">Informations médicales</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Spécialité</td><td style="padding: 8px 0; font-weight: bold;">${escapeHtml(specialite) || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Type chambre</td><td style="padding: 8px 0;">${escapeHtml(typeChambre) || 'Pas de préférence'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Date souhaitée</td><td style="padding: 8px 0;">${escapeHtml(dateSouhaitee) || '-'}</td></tr>
          </table>

          <h3 style="color: #1a5c32; margin-top: 16px;">Description du besoin</h3>
          <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(message) || '-'}</div>

          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Envoyé depuis le formulaire de devis de cptunis.com le ${new Date().toLocaleString('fr-TN', { timeZone: 'Africa/Tunis' })}
          </p>
        </div>
      </div>
    `

    const nbFichiers = attachments.length
    const fichiersInfo = nbFichiers > 0
      ? `<p style="color: #1a5c32; font-weight: bold; margin-top: 16px;">${nbFichiers} fichier(s) joint(s)</p>`
      : ''

    await transporter.sendMail({
      from: `"Site Clinique Pasteur" <${process.env.SMTP_USER}>`,
      to: 'contact@cliniquepasteur.com.tn',
      replyTo: email,
      subject: `Demande de Devis - ${nom} ${prenom} - ${specialite || 'Non précisé'}${nbFichiers > 0 ? ` (${nbFichiers} fichier${nbFichiers > 1 ? 's' : ''})` : ''}`.slice(0, 200),
      html: html + fichiersInfo,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi devis:', error)
    return NextResponse.json({ success: false, error: 'Erreur d\'envoi' }, { status: 500 })
  }
}
