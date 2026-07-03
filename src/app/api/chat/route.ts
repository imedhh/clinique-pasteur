import { createAnthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'
import { SYSTEM_PROMPT } from '@/lib/chatbot-system'
import { rateLimit, clientIp, isSameOrigin } from '@/lib/rate-limit'

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 1000

export async function POST(req: Request) {
  // Anti-CSRF / anti-abus : seules les requêtes venant du site sont acceptées.
  if (!isSameOrigin(req)) {
    return new Response('Forbidden', { status: 403 })
  }

  // Rate limit : 15 requêtes / minute / IP (protège le crédit API Anthropic).
  const ip = clientIp(req)
  if (!rateLimit(`chat:${ip}`, 15, 60_000)) {
    return new Response('Trop de requêtes, veuillez patienter.', { status: 429 })
  }

  let messages: unknown
  try {
    const body = await req.json()
    messages = body?.messages
  } catch {
    return new Response('Requête invalide', { status: 400 })
  }

  // Validation de la structure et des tailles.
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return new Response('Requête invalide', { status: 400 })
  }
  for (const m of messages) {
    if (
      !m ||
      typeof (m as { role?: unknown }).role !== 'string' ||
      typeof (m as { content?: unknown }).content !== 'string' ||
      (m as { content: string }).content.length > MAX_MESSAGE_LENGTH
    ) {
      return new Response('Requête invalide', { status: 400 })
    }
  }

  const result = streamText({
    model: anthropic('claude-haiku-4-5-20251001'),
    system: SYSTEM_PROMPT,
    messages: messages as { role: 'user' | 'assistant'; content: string }[],
    maxOutputTokens: 1024,
  })

  return result.toTextStreamResponse()
}
