import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Contact Us | SecureVision",
  description: "Get in touch with SecureVision for CCTV installation quotes, support, or general inquiries. We respond within 24 hours.",
}

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Get In Touch</p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
                Contact SecureVision
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Have a question or need a security consultation? Reach out to our team and we will respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <ContactInfo />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="SecureVision Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
