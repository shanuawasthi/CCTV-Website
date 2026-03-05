import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import {
  Camera, Settings, Wrench, Monitor, ShieldCheck, Zap,
  Radio, HardDrive, ArrowRight, CheckCircle2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | SecureVision",
  description: "Professional CCTV installation, security system setup, maintenance, and 24/7 remote monitoring services.",
}

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Expert installation of surveillance cameras tailored to your property layout. We analyze entry points, blind spots, and critical areas to provide maximum coverage.",
    features: ["Site survey & assessment", "Custom camera placement plan", "Professional cabling & mounting", "System testing & calibration", "User training & handover"],
  },
  {
    icon: Settings,
    title: "Security System Setup",
    description: "End-to-end configuration of integrated security systems including alarms, access control, and surveillance networking.",
    features: ["Alarm system integration", "Access control setup", "Network configuration", "Intercom systems", "Smart lock installation"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Preventive maintenance and rapid repair services to keep your security infrastructure running flawlessly around the clock.",
    features: ["Scheduled maintenance visits", "Firmware & software updates", "Camera lens cleaning", "Cable & connection checks", "Emergency repair response"],
  },
  {
    icon: Monitor,
    title: "Remote Monitoring Setup",
    description: "Configure 24/7 remote monitoring with real-time alerts delivered to your phone, email, or professional monitoring center.",
    features: ["Cloud DVR/NVR setup", "Mobile app configuration", "Alert rules customization", "Multi-site management", "Live feed streaming"],
  },
  {
    icon: Radio,
    title: "Wireless Security Solutions",
    description: "Advanced wireless camera systems for locations where traditional cabling is impractical or aesthetically undesirable.",
    features: ["WiFi camera deployment", "Mesh network setup", "Battery-powered options", "Solar-powered cameras", "Signal optimization"],
  },
  {
    icon: HardDrive,
    title: "Data & Storage Solutions",
    description: "Robust storage infrastructure for your surveillance footage with redundancy and secure archival options.",
    features: ["NVR/DVR installation", "Cloud storage integration", "Backup configuration", "Storage expansion", "Data retention planning"],
  },
]

const process = [
  { step: "01", title: "Consultation", description: "Free assessment of your security needs and property layout." },
  { step: "02", title: "Custom Design", description: "Tailored security system design with optimal camera placement." },
  { step: "03", title: "Installation", description: "Professional installation by our certified technicians." },
  { step: "04", title: "Ongoing Support", description: "24/7 support with maintenance and monitoring services." },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Services</p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
                Complete Security Solutions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From initial consultation to ongoing maintenance, we provide end-to-end security services designed to protect your property with cutting-edge technology.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="glass-card rounded-xl p-8 h-full flex flex-col group transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">How It Works</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Process</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-4">
            {process.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <ShieldCheck className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Need a Custom Security Solution?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every property is unique. Let our experts design a security system perfectly suited to your specific requirements and budget.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 gap-2 px-8">
                Request Free Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
