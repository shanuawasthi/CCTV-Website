import type { Metadata } from "next"
import { ProductCatalog } from "@/components/products/product-catalog"

export const metadata: Metadata = {
  title: "Products | SecureVision",
  description: "Browse our complete range of CCTV cameras, NVR systems, and security accessories. Professional-grade surveillance equipment for every need.",
}

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <ProductCatalog />
    </div>
  )
}
