"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  role: "bot" | "user"
  text: string
}

const FAQ_RESPONSES: Record<string, string> = {
  pricing: "Our CCTV packages start from $299 for basic home setups to $2,999+ for enterprise systems. Would you like a detailed quote?",
  installation: "We offer professional installation with a typical turnaround of 1-3 business days. Our team handles everything from cabling to configuration.",
  warranty: "All our products come with a 2-year manufacturer warranty, and our installation work is covered for 1 year.",
  cameras: "We offer a wide range including dome cameras, bullet cameras, PTZ cameras, and smart AI-powered cameras. Check our Products page for details!",
  support: "We provide 24/7 technical support and remote monitoring assistance. Call us at +1 (555) 123-4567 or use our contact form.",
  maintenance: "We offer annual maintenance packages starting at $99/year, which include cleaning, firmware updates, and system health checks.",
}

const QUICK_OPTIONS = [
  { label: "Pricing Info", key: "pricing" },
  { label: "Installation", key: "installation" },
  { label: "Warranty", key: "warranty" },
  { label: "Camera Types", key: "cameras" },
  { label: "Support", key: "support" },
  { label: "Maintenance", key: "maintenance" },
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! Welcome to SecureVision. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadSubmitted, setLeadSubmitted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSend(text?: string) {
    const message = text || input.trim()
    if (!message) return

    setMessages((prev) => [...prev, { role: "user", text: message }])
    setInput("")

    setTimeout(() => {
      const lowerMsg = message.toLowerCase()
      let response = "Thank you for your message! For more specific assistance, please contact us directly or leave your details below."

      for (const [key, value] of Object.entries(FAQ_RESPONSES)) {
        if (lowerMsg.includes(key)) {
          response = value
          break
        }
      }

      if (lowerMsg.includes("quote") || lowerMsg.includes("contact") || lowerMsg.includes("detail")) {
        setShowLeadForm(true)
        response = "I'd love to help you further! Please fill out the form below and our team will get back to you shortly."
      }

      if (lowerMsg.includes("whatsapp") || lowerMsg.includes("chat")) {
        response = "You can reach us on WhatsApp for instant support! Click the green WhatsApp button at the bottom right of the page."
      }

      setMessages((prev) => [...prev, { role: "bot", text: response }])
    }, 600)
  }

  function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLeadSubmitted(true)
    setShowLeadForm(false)
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Thank you! Our team will contact you within 24 hours. Is there anything else I can help with?" },
    ])
  }

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Open chat"
        >
          <Bot className="h-7 w-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-24 z-50 flex h-[500px] w-[380px] max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-primary/10 border-b border-border px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">SecureVision Bot</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-lg p-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="Close chat">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Options */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {QUICK_OPTIONS.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleSend(opt.label)}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Lead Form */}
            {showLeadForm && !leadSubmitted && (
              <form onSubmit={handleLeadSubmit} className="mt-2 flex flex-col gap-2 rounded-xl border border-border bg-secondary/50 p-3">
                <input name="name" required placeholder="Your Name" className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <input name="email" type="email" required placeholder="Email Address" className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <input name="phone" placeholder="Phone (optional)" className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit
                </Button>
              </form>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" size="icon" className="h-9 w-9 bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
