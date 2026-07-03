import { NextResponse } from 'next/server'
import { transporter, escapeHtml, isValidEmail, cleanText } from '@/lib/mailer'
import { rateLimit, clientIp, isSameOrigin } from '@/lib/rate-limit'

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) {
      return NextResponse.json({ success: false, error: 'Origine non autorisée' }, { status: 403 })
    }

    const ip = clientIp(req)
    if (!rateLimit(`contact:${ip}`, 5, 60_000)) {
      return NextResponse.json({ success: false, error: 'Trop de demandes, veuillez patienter.' }, { status: 429 })
    }

    const data = await req.json()

    // Honeypot : champ caché rempli => bot.
    if (data?.website) {
      return NextResponse.json({ success: true })
    }

    // Validation des champs requis.
    const nom = cleanText(data?.nom, 100)
    const message = cleanText(data?.message, 5000)
    if (!nom || !isValidEmail(data?.email) || !message) {
      return NextResponse.json({ success: false, error: 'Champs requis manquants ou email invalide' }, { status: 400 })
    }

    const email = data.email as string
    const prenom = cleanText(data?.prenom, 100)
    const telephone = cleanText(data?.telephone, 40)
    const sujet = cleanText(data?.sujet, 150)

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2D8C4E, #1a5c32); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Nouveau Message de Contact</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Via cptunis.com</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 100px;">Nom</td><td style="padding: 8px 0; font-weight: bold;">${escapeHtml(nom)} ${escapeHtml(prenom)}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;">${escapeHtml(telephone) || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Sujet</td><td style="padding: 8px 0; font-weight: bold;">${escapeHtml(sujet) || '-'}</td></tr>
          </table>

          <h3 style="color: #1a5c32; margin-top: 16px;">Message</h3>
          <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(message)}</div>

          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Envoyé depuis le formulaire de contact de cptunis.com le ${new Date().toLocaleString('fr-TN', { timeZone: 'Africa/Tunis' })}
          </p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Site Clinique Pasteur" <${process.env.SMTP_USER}>`,
      to: 'contact@cliniquepasteur.com.tn',
      replyTo: email,
      subject: `Contact - ${sujet || 'Message'} - ${nom} ${prenom}`.slice(0, 200),
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi contact:', error)
    return NextResponse.json({ success: false, error: 'Erreur d\'envoi' }, { status: 500 })
  }
}
