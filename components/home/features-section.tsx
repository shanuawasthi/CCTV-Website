import { ScrollReveal } from "@/components/scroll-reveal"
import { Eye, Wifi, Cpu, Lock, Cloud, Smartphone } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "HD Night Vision",
    description: "Crystal-clear footage day and night with advanced infrared technology and ultra-low light sensors.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Detection",
    description: "Smart motion detection with AI that differentiates between people, vehicles, and animals to reduce false alerts.",
  },
  {
    icon: Wifi,
    title: "Wireless Connectivity",
    description: "Seamless wireless setup with robust encryption ensuring reliable, interference-free coverage.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure cloud backup with up to 30 days of recording history, accessible from anywhere in the world.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Monitor your property in real-time from your smartphone with our intuitive mobile application.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption protects all your video feeds and data from unauthorized access.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Advanced Security Technology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Our cutting-edge surveillance systems combine the latest hardware with intelligent software to deliver unmatched security coverage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
              <div className="glass-card rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 group h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
