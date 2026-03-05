import type { Metadata } from "next"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Target, Eye, Award, Users, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | SecureVision",
  description: "Learn about SecureVision's mission, team, and 15+ years of experience in smart surveillance and security solutions.",
}

const timeline = [
  { year: "2009", title: "Company Founded", description: "Started as a small team of security enthusiasts with a vision to revolutionize surveillance." },
  { year: "2012", title: "100th Installation", description: "Reached our first major milestone, serving homes and businesses across the region." },
  { year: "2015", title: "HD & IP Transition", description: "Pioneered the transition to full HD and IP-based camera systems for our clients." },
  { year: "2018", title: "AI Integration", description: "Introduced AI-powered analytics and smart detection to our product lineup." },
  { year: "2021", title: "Cloud Platform Launch", description: "Launched our proprietary cloud monitoring platform for remote surveillance access." },
  { year: "2024", title: "500+ Active Systems", description: "Surpassed 500 active security installations with a growing national presence." },
]

const team = [
  { name: "James Mitchell", role: "Founder & CEO", image: "/images/gallery-4.jpg" },
  { name: "Lisa Park", role: "Head of Operations", image: "/images/gallery-5.jpg" },
  { name: "Robert Kumar", role: "Chief Technology Officer", image: "/images/gallery-6.jpg" },
]

const certifications = [
  { icon: Award, title: "ISO 27001 Certified" },
  { icon: Shield, title: "Security Industry Authority" },
  { icon: Users, title: "CCTV Installers Guild" },
  { icon: Lightbulb, title: "Smart Home Alliance" },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">About SecureVision</p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
                Protecting What Matters Most Since 2009
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From a small startup to an industry leader, we have been at the forefront of security technology, helping thousands of homes and businesses stay safe.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-16 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/images/about-team.jpg" alt="SecureVision monitoring center" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Story</p>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-6">
                  Built on Trust, Driven by Innovation
                </h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                  <p>
                    SecureVision was born from a simple belief: everyone deserves access to professional-grade security. What started in a small workshop has evolved into a comprehensive security solutions provider serving hundreds of clients nationwide.
                  </p>
                  <p>
                    Our team combines decades of field experience with cutting-edge technological expertise. We do not just install cameras; we design intelligent security ecosystems tailored to each client's unique needs.
                  </p>
                  <p>
                    Today, we continue to push boundaries with AI-powered surveillance, cloud-based monitoring, and smart home integration, always staying ahead of emerging threats.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <div className="glass-card rounded-xl p-10 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, reliable, and intelligent security solutions that empower individuals and businesses to protect what matters most. We are committed to innovation, quality, and exceptional customer service.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card rounded-xl p-10 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted name in smart surveillance globally, pioneering the integration of AI and IoT into everyday security, making advanced protection effortless and universal.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Certifications</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Industry Recognized</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 100}>
                <div className="glass-card rounded-xl p-6 text-center">
                  <cert.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Journey</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Company Timeline</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 100}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      <div className="glass-card rounded-xl p-6">
                        <p className="text-sm font-bold text-primary mb-1">{item.year}</p>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-sm font-bold text-primary">
                      {item.year}
                    </div>
                    <div className="flex-1 md:hidden">
                      <div className="glass-card rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Team</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Meet the Experts</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 150}>
                <div className="glass-card rounded-xl overflow-hidden text-center group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6 -mt-10 relative">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
