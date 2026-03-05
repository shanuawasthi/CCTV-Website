import Link from "next/link"
import { ArrowRight, Camera, Settings, Wrench, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional installation of CCTV cameras for homes, offices, and commercial properties with optimal placement analysis.",
  },
  {
    icon: Settings,
    title: "Security System Setup",
    description: "Complete security system configuration including alarms, access control, and integrated surveillance networks.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Regular maintenance and swift repair services to ensure your security systems operate at peak performance.",
  },
  {
    icon: Monitor,
    title: "Remote Monitoring",
    description: "24/7 remote monitoring services with real-time alerts and professional response coordination.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What We Offer</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Comprehensive Security Services
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="glass-card rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col items-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary gap-2">
                Explore All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
