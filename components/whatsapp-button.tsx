"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "15551234567"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I am interested in your CCTV security services. Please provide more details."
)

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#ffffff] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
      style={{ animationDelay: "0s", "--tw-shadow-color": "rgba(37,211,102,0.3)" } as React.CSSProperties}
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  )
}
