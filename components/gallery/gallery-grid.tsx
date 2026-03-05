"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { X, ZoomIn } from "lucide-react"

const galleryItems = [
  { src: "/images/gallery-1.jpg", alt: "Commercial building CCTV installation", category: "Commercial" },
  { src: "/images/gallery-2.jpg", alt: "Security monitoring control room", category: "Control Room" },
  { src: "/images/gallery-3.jpg", alt: "Outdoor PTZ camera at night", category: "Outdoor" },
  { src: "/images/gallery-4.jpg", alt: "Technician installing security system", category: "Installation" },
  { src: "/images/gallery-5.jpg", alt: "Residential smart security setup", category: "Residential" },
  { src: "/images/gallery-6.jpg", alt: "Warehouse security coverage", category: "Industrial" },
  { src: "/images/hero-bg.jpg", alt: "CCTV cameras at night", category: "Outdoor" },
  { src: "/images/about-team.jpg", alt: "Professional monitoring center", category: "Control Room" },
]

const categories = ["All", "Commercial", "Outdoor", "Residential", "Industrial", "Control Room", "Installation"]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Work</p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
                Installation Gallery
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Explore our portfolio of professional security installations across commercial, residential, and industrial properties.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-lg p-4" onClick={() => setLightboxIndex(null)}>
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 rounded-full bg-secondary p-3 text-foreground hover:bg-primary/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <p className="absolute bottom-8 text-sm text-muted-foreground">
            {filtered[lightboxIndex].alt}
          </p>
        </div>
      )}

      {/* Filter + Grid */}
      <section className="py-16 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${item.src}-${activeCategory}`} delay={i * 80}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative w-full aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                      <div className="rounded-full bg-primary/80 p-3">
                        <ZoomIn className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
