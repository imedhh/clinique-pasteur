'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const CHAT_UI: Record<string, { welcome: string; title: string; status: string; placeholder: string; note: string; open: string }> = {
  fr: {
    welcome: 'Bonjour ! Je suis l\'assistant de la Clinique Pasteur de Tunis. Je peux vous renseigner sur nos services, les préparations aux examens, les horaires, comment venir... Comment puis-je vous aider ?',
    title: 'Assistant Clinique Pasteur', status: 'En ligne 24h/24', placeholder: 'Posez votre question...',
    note: 'Assistant informatif uniquement. Pour tout avis médical, consultez votre médecin.', open: 'Ouvrir l\'assistant',
  },
  en: {
    welcome: 'Hello! I am the Clinique Pasteur Tunis assistant. I can help you with our services, exam preparation, opening hours, how to get here... How can I help you?',
    title: 'Clinique Pasteur Assistant', status: 'Online 24/7', placeholder: 'Ask your question...',
    note: 'Informational assistant only. For any medical advice, please consult your doctor.', open: 'Open assistant',
  },
  ar: {
    welcome: 'مرحبًا! أنا المساعد الآلي لعيادة باستور تونس. يمكنني إرشادك حول خدماتنا والتحضير للفحوصات وأوقات العمل وكيفية الوصول... كيف يمكنني مساعدتك؟',
    title: 'مساعد عيادة باستور', status: 'متصل على مدار الساعة', placeholder: 'اطرح سؤالك...',
    note: 'مساعد للمعلومات فقط. لأي استشارة طبية، يُرجى مراجعة طبيبك.', open: 'فتح المساعد',
  },
}

export default function Chatbot({ locale = 'fr' }: { locale?: string } = {}) {
  const t = CHAT_UI[locale] || CHAT_UI.fr
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', content: t.welcome },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: text.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.filter(m => m.id !== 'welcome').map(m => ({ role: m.role, content: m.content })),
          locale,
        }),
      })

      if (!res.ok) throw new Error('Erreur serveur')

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''
      const assistantId = (Date.now() + 1).toString()

      setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '' }])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          assistantContent += decoder.decode(value, { stream: true })
          setMessages(prev =>
            prev.map(m => m.id === assistantId ? { ...m, content: assistantContent } : m)
          )
        }
      }
    } catch {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Désolé, une erreur est survenue. Veuillez réessayer ou appeler le +216 36 402 000.',
      }])
    } finally {
      setIsLoading(false)
    }
  }, [messages, isLoading])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Chat button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed', bottom: 24, right: 24, zIndex: 9998,
            width: 60, height: 60, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2D8C4E, #1a5c32)',
            color: 'white', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(45,140,78,0.4)',
            WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation',
          }}
          aria-label={t.open}
        >
          <MessageCircle style={{ width: 28, height: 28 }} />
        </button>
      )}

      {/* Notification badge */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed', bottom: 90, right: 24, zIndex: 9998,
            background: 'white', borderRadius: 12, padding: '8px 14px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)', fontSize: 13,
            color: '#333', maxWidth: 200, cursor: 'pointer',
          }}
        >
          <span style={{ fontWeight: 600 }}>Besoin d&apos;aide ?</span><br />
          <span style={{ color: '#666', fontSize: 12 }}>Notre assistant IA est là</span>
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 0, right: 0, zIndex: 9999,
          width: '100%', maxWidth: 420, height: '100dvh', maxHeight: 600,
          display: 'flex', flexDirection: 'column', background: 'white',
          borderTopLeftRadius: 20, borderTopRightRadius: 20,
          boxShadow: '0 -4px 30px rgba(0,0,0,0.15)', overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2D8C4E, #1a5c32)',
            padding: '16px 20px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot style={{ width: 22, height: 22, color: 'white' }} />
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>{t.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>{t.status}</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ padding: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'white', WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}>
              <X style={{ width: 22, height: 22 }} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '16px 16px 8px', background: '#f8faf9', WebkitOverflowScrolling: 'touch' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', gap: 8, marginBottom: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: msg.role === 'user' ? '#e5e7eb' : '#2D8C4E',
                }}>
                  {msg.role === 'user' ? <User style={{ width: 16, height: 16, color: '#666' }} /> : <Bot style={{ width: 16, height: 16, color: 'white' }} />}
                </div>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px', borderRadius: 16, fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap',
                  ...(msg.role === 'user'
                    ? { background: '#2D8C4E', color: 'white', borderBottomRightRadius: 4 }
                    : { background: 'white', color: '#333', border: '1px solid #e5e7eb', borderBottomLeftRadius: 4 }),
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2D8C4E' }}>
                  <Bot style={{ width: 16, height: 16, color: 'white' }} />
                </div>
                <div style={{ padding: '12px 16px', borderRadius: 16, background: 'white', border: '1px solid #e5e7eb', borderBottomLeftRadius: 4 }}>
                  <Loader2 style={{ width: 18, height: 18, color: '#2D8C4E', animation: 'spin 1s linear infinite' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length <= 1 && (
            <div style={{ padding: '8px 16px', display: 'flex', gap: 6, flexWrap: 'wrap', background: '#f8faf9', borderTop: '1px solid #e5e7eb' }}>
              {['Comment venir ?', 'Préparer une IRM', 'Types de chambres', 'Urgences'].map((q) => (
                <button key={q} onClick={() => sendMessage(q)} style={{
                  padding: '6px 12px', borderRadius: 20, border: '1px solid #d1d5db',
                  background: 'white', fontSize: 12, color: '#2D8C4E', cursor: 'pointer',
                  fontWeight: 500, WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation',
                }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} style={{ padding: '12px 16px', borderTop: '1px solid #e5e7eb', display: 'flex', gap: 8, background: 'white', flexShrink: 0 }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              disabled={isLoading}
              style={{ flexGrow: 1, padding: '10px 16px', borderRadius: 24, border: '1px solid #d1d5db', fontSize: 14, background: '#f9fafb' }}
            />
            <button type="submit" disabled={isLoading || !input.trim()} style={{
              width: 42, height: 42, borderRadius: '50%',
              background: input.trim() ? '#2D8C4E' : '#d1d5db',
              color: 'white', border: 'none', cursor: input.trim() ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation',
            }}>
              <Send style={{ width: 18, height: 18 }} />
            </button>
          </form>

          <div style={{ padding: '6px 16px 10px', textAlign: 'center', fontSize: 10, color: '#9ca3af', background: 'white' }}>
            {t.note}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  )
}
