import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | SecureVision",
  description: "Browse our gallery of professional CCTV installations, security system setups, and surveillance projects.",
}

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <GalleryGrid />
    </div>
  )
}
