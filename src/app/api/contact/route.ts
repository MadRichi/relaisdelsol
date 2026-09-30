import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'info@relaisdelsol.it'

const contactSchema = z.object({
  nome: z.string().trim().min(1).max(120),
  email: z.email().max(200),
  telefono: z.string().trim().max(40).optional().default(''),
  oggetto: z.string().trim().max(120).optional().default('Informazioni generali'),
  messaggio: z.string().trim().min(10).max(5000),
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Richiesta non valida' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Campi obbligatori mancanti o non validi' },
      { status: 400 }
    )
  }

  const { email } = parsed.data
  const nome = escapeHtml(parsed.data.nome)
  const telefono = escapeHtml(parsed.data.telefono)
  const oggetto = escapeHtml(parsed.data.oggetto)
  const messaggio = escapeHtml(parsed.data.messaggio)
  const safeEmail = escapeHtml(email)

  try {
    const { error } = await resend.emails.send({
      from: 'Relais Del Sol <info@relaisdelsol.it>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Contatto] ${parsed.data.oggetto} — ${parsed.data.nome}`.replace(/[\r\n]+/g, ' '),
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
              <td style="padding: 8px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
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
            Messaggio inviato dal form contatti di relaisdelsol.it
          </p>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Errore durante l\'invio' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'invio' },
      { status: 500 }
    )
  }
}
