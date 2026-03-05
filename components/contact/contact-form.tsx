"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glass-card rounded-xl p-12 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
          <input
            id="firstName"
            name="firstName"
            required
            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            required
            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="john@example.com"
        />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interested In</label>
        <select
          id="service"
          name="service"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="">Select a service</option>
          <option value="cctv">CCTV Installation</option>
          <option value="security">Security System Setup</option>
          <option value="maintenance">Maintenance & Repair</option>
          <option value="monitoring">Remote Monitoring</option>
          <option value="consultation">Free Consultation</option>
        </select>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          placeholder="Tell us about your security needs..."
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 gap-2">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
