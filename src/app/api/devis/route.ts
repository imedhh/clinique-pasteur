import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2D8C4E, #1a5c32); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle Demande de Devis</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Via cptunis.com</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <h2 style="color: #1a5c32; margin-top: 0;">Informations du patient</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nom</td><td style="padding: 8px 0; font-weight: bold;">${data.nom || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Prénom</td><td style="padding: 8px 0; font-weight: bold;">${data.prenom || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email || '-'}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;"><a href="tel:${data.telephone}">${data.telephone || '-'}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Pays</td><td style="padding: 8px 0;">${data.pays || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Âge</td><td style="padding: 8px 0;">${data.age || '-'}</td></tr>
          </table>

          <h2 style="color: #1a5c32; margin-top: 24px;">Informations médicales</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Spécialité</td><td style="padding: 8px 0; font-weight: bold;">${data.specialite || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Type chambre</td><td style="padding: 8px 0;">${data.typeChambre || 'Pas de préférence'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Date souhaitée</td><td style="padding: 8px 0;">${data.date || '-'}</td></tr>
          </table>

          <h3 style="color: #1a5c32; margin-top: 16px;">Description du besoin</h3>
          <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${data.message || '-'}</div>

          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Envoyé depuis le formulaire de devis de cptunis.com le ${new Date().toLocaleString('fr-TN', { timeZone: 'Africa/Tunis' })}
          </p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Site Clinique Pasteur" <${process.env.SMTP_USER}>`,
      to: 'contact@cliniquepasteur.com.tn',
      replyTo: data.email,
      subject: `Demande de Devis - ${data.nom} ${data.prenom} - ${data.specialite || 'Non précisé'}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi devis:', error)
    return NextResponse.json({ success: false, error: 'Erreur d\'envoi' }, { status: 500 })
  }
}
