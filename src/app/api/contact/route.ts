import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'info@relaisdelsol.com'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? '')
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Configurazione email non disponibile' },
      { status: 500 }
    )
  }
  try {
    const body = await request.json()
    const { nome, email, telefono, oggetto, messaggio } = body

    // Basic validation
    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { error: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Relais Del Sol <onboarding@resend.dev>',
      to: "riccardorampin@outlook.com" , /* TODO: replace with the email address with the info one */
      replyTo: email,
      subject: `[Contatto] ${oggetto} — ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5C4A32;">Nuovo messaggio dal sito</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #5C4A32; width: 120px;">Nome</td>
              <td style="padding: 8px;">${nome}</td>
            </tr>
            <tr style="background: #F5F0E8;">
              <td style="padding: 8px; font-weight: bold; color: #5C4A32;">Email</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #5C4A32;">Telefono</td>
              <td style="padding: 8px;">${telefono || '—'}</td>
            </tr>
            <tr style="background: #F5F0E8;">
              <td style="padding: 8px; font-weight: bold; color: #5C4A32;">Oggetto</td>
              <td style="padding: 8px;">${oggetto}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #5C4A32; vertical-align: top;">Messaggio</td>
              <td style="padding: 8px; white-space: pre-wrap;">${messaggio}</td>
            </tr>
          </table>
          <hr style="border: 1px solid #E8DCC8; margin: 24px 0;">
          <p style="color: #9B8B7A; font-size: 12px;">
            Messaggio inviato dal form contatti di relaisdelsol.com
          </p>
        </div>
      `
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'invio' },
      { status: 500 }
    )
  }
}
