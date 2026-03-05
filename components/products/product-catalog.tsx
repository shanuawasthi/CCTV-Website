"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Search, Filter, ArrowRight, Star, ShieldCheck } from "lucide-react"

const categories = ["All", "Dome Cameras", "Bullet Cameras", "PTZ Cameras", "NVR Systems", "Accessories"]

const products = [
  {
    id: "proguard-dome-4k",
    name: "ProGuard Dome 4K",
    category: "Dome Cameras",
    image: "/images/gallery-1.jpg",
    price: "$249",
    rating: 4.8,
    specs: ["4K Ultra HD", "Night Vision 30m", "AI Motion Detection", "IP67 Weatherproof"],
    badge: "Best Seller",
  },
  {
    id: "sentinelx-ptz",
    name: "SentinelX PTZ Pro",
    category: "PTZ Cameras",
    image: "/images/gallery-3.jpg",
    price: "$599",
    rating: 4.9,
    specs: ["360 Pan/Tilt", "30x Optical Zoom", "Auto Tracking", "IR 150m Range"],
    badge: "New",
  },
  {
    id: "smarteye-nvr-16",
    name: "SmartEye NVR-16",
    category: "NVR Systems",
    image: "/images/gallery-2.jpg",
    price: "$899",
    rating: 4.7,
    specs: ["16 Channel", "8TB HDD", "H.265+ Compression", "HDMI 4K Output"],
    badge: null,
  },
  {
    id: "vigilant-bullet",
    name: "Vigilant Bullet Pro",
    category: "Bullet Cameras",
    image: "/images/gallery-4.jpg",
    price: "$189",
    rating: 4.6,
    specs: ["2K QHD", "50m Night Vision", "Built-in Mic", "PoE Powered"],
    badge: null,
  },
  {
    id: "eagleeye-dome",
    name: "EagleEye Mini Dome",
    category: "Dome Cameras",
    image: "/images/gallery-5.jpg",
    price: "$149",
    rating: 4.5,
    specs: ["1080p Full HD", "Night Vision 20m", "Wide Angle 130", "Indoor Use"],
    badge: "Budget Pick",
  },
  {
    id: "guardian-ptz",
    name: "Guardian PTZ Lite",
    category: "PTZ Cameras",
    image: "/images/gallery-6.jpg",
    price: "$399",
    rating: 4.7,
    specs: ["2K QHD", "20x Zoom", "Auto Patrol", "Weatherproof"],
    badge: null,
  },
  {
    id: "smarteye-nvr-8",
    name: "SmartEye NVR-8",
    category: "NVR Systems",
    image: "/images/gallery-2.jpg",
    price: "$499",
    rating: 4.6,
    specs: ["8 Channel", "4TB HDD", "Remote Access", "Motion Alerts"],
    badge: null,
  },
  {
    id: "power-supply-16",
    name: "SecurePower 16-Port",
    category: "Accessories",
    image: "/images/gallery-1.jpg",
    price: "$89",
    rating: 4.4,
    specs: ["16 Port PoE Switch", "250W Total", "Plug & Play", "Rack Mount"],
    badge: null,
  },
  {
    id: "cable-cat6-300",
    name: "ProCable CAT6 300m",
    category: "Accessories",
    image: "/images/gallery-3.jpg",
    price: "$79",
    rating: 4.5,
    specs: ["300m Roll", "Outdoor Rated", "Pure Copper", "UV Resistant"],
    badge: null,
  },
]

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const detailProduct = selectedProduct ? products.find((p) => p.id === selectedProduct) : null

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Product Catalog</p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
                Professional Security Equipment
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Browse our curated selection of high-performance surveillance cameras, recording systems, and accessories from industry-leading manufacturers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Detail Modal */}
      {detailProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4" onClick={() => setSelectedProduct(null)}>
          <div className="w-full max-w-2xl glass-card rounded-2xl overflow-hidden animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <Image src={detailProduct.image} alt={detailProduct.name} fill className="object-cover" />
              {detailProduct.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {detailProduct.badge}
                </span>
              )}
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-primary font-medium mb-1">{detailProduct.category}</p>
                  <h2 className="text-2xl font-bold text-foreground">{detailProduct.name}</h2>
                </div>
                <p className="text-2xl font-bold text-primary">{detailProduct.price}</p>
              </div>
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < Math.floor(detailProduct.rating) ? "fill-primary text-primary" : "text-muted"}`} />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">{detailProduct.rating}</span>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-2">
                  {detailProduct.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Inquire Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary" onClick={() => setSelectedProduct(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters + Products */}
      <section className="py-16 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 mb-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80}>
                <button
                  onClick={() => setSelectedProduct(product.id)}
                  className="text-left w-full glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    {product.badge && (
                      <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`h-3 w-3 ${j < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`} />
                      ))}
                      <span className="ml-1 text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Details <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <Filter className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-lg font-semibold text-foreground">No products found</p>
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
