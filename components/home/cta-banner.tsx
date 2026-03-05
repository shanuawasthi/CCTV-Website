import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CTABanner() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-12 md:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to Secure Your Property?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Get a free security assessment and personalized recommendation from our expert team. No obligation, no pressure.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 gap-2 px-8">
                    Get Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+15551234567">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary gap-2 px-8">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
