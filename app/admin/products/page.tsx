"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, X, Save } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  category: string
  price: string
  status: "Active" | "Draft"
}

const initialProducts: Product[] = [
  { id: "1", name: "ProGuard Dome 4K", category: "Dome Cameras", price: "$249", status: "Active" },
  { id: "2", name: "SentinelX PTZ Pro", category: "PTZ Cameras", price: "$599", status: "Active" },
  { id: "3", name: "SmartEye NVR-16", category: "NVR Systems", price: "$899", status: "Active" },
  { id: "4", name: "Vigilant Bullet Pro", category: "Bullet Cameras", price: "$189", status: "Active" },
  { id: "5", name: "EagleEye Mini Dome", category: "Dome Cameras", price: "$149", status: "Draft" },
]

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [editing, setEditing] = useState<Product | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const product: Product = {
      id: editing?.id || Date.now().toString(),
      name: form.get("name") as string,
      category: form.get("category") as string,
      price: form.get("price") as string,
      status: (form.get("status") as "Active" | "Draft") || "Active",
    }
    if (editing) {
      setProducts(products.map((p) => (p.id === editing.id ? product : p)))
    } else {
      setProducts([...products, product])
    }
    setEditing(null)
    setShowForm(false)
  }

  function handleDelete(id: string) {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Manage Products</h1>
        <Button
          onClick={() => { setEditing(null); setShowForm(true) }}
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">{editing ? "Edit Product" : "Add New Product"}</h3>
            <button onClick={() => { setShowForm(false); setEditing(null) }} className="text-muted-foreground hover:text-foreground" aria-label="Close form">
              <X className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleSave} className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Product Name</label>
              <input name="name" defaultValue={editing?.name} required className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Category</label>
              <select name="category" defaultValue={editing?.category} className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Dome Cameras</option>
                <option>Bullet Cameras</option>
                <option>PTZ Cameras</option>
                <option>NVR Systems</option>
                <option>Accessories</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Price</label>
              <input name="price" defaultValue={editing?.price} required className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Status</label>
              <select name="status" defaultValue={editing?.status} className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Save className="h-4 w-4" />
                {editing ? "Update Product" : "Add Product"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">Name</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">Category</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">Price</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">Status</th>
                <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      product.status === "Active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => { setEditing(product); setShowForm(true) }}
                        className="rounded-lg p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={`Edit ${product.name}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="rounded-lg p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                        aria-label={`Delete ${product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
