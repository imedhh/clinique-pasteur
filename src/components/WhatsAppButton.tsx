'use client'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/21636402000?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
