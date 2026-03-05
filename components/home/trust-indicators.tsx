import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Users, Clock, Award } from "lucide-react"

const stats = [
  { icon: Shield, value: "500+", label: "Systems Installed" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Monitoring Support" },
  { icon: Award, value: "15+", label: "Years Experience" },
]

export function TrustIndicators() {
  return (
    <section className="relative -mt-20 z-20 mx-auto max-w-6xl px-6">
      <ScrollReveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
