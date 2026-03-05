import { ScrollReveal } from "@/components/scroll-reveal"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael Chen",
    role: "Business Owner, TechHub Inc.",
    text: "SecureVision transformed our office security. The AI-powered cameras detected a break-in attempt and alerted us before any damage was done. Incredible system.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Property Manager, Riverside Estates",
    text: "We installed SecureVision across 12 residential buildings. The remote monitoring feature gives our residents peace of mind, and the support team is outstanding.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Operations Director, MetroRetail",
    text: "The installation was seamless, and the image quality is remarkable. Their maintenance package ensures everything runs perfectly year-round.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 150}>
              <div className="glass-card rounded-xl p-8 h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {`"${testimonial.text}"`}
                </p>
                <div className="mt-6 flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
