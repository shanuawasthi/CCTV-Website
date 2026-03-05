import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const products = [
  {
    name: "ProGuard Dome Camera",
    category: "Indoor",
    image: "/images/gallery-1.jpg",
    specs: "4K Ultra HD | Night Vision | AI Detection",
  },
  {
    name: "SentinelX PTZ Camera",
    category: "Outdoor",
    image: "/images/gallery-3.jpg",
    specs: "360 Rotation | 30x Zoom | Weatherproof",
  },
  {
    name: "SmartEye NVR System",
    category: "System",
    image: "/images/gallery-2.jpg",
    specs: "16 Channel | 8TB Storage | Remote Access",
  },
]

export function ProductsPreview() {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Featured Products</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Top Security Solutions
              </h2>
            </div>
            <Link href="/products" className="hidden md:flex">
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 150}>
              <Link href="/products" className="group block">
                <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.specs}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <Link href="/products" className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary gap-2">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
