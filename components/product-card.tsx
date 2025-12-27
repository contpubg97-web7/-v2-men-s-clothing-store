"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ProductQuickView } from "./product-quick-view"

interface Product {
  id: number
  name: string
  category: string
  price: number
  maxPrice: number
  image: string
  colors: string[]
  sizes: string[]
  sale?: boolean
}

export function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage()
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  return (
    <>
      <div className="group relative">
        <div className="relative aspect-[4/5] bg-gray-100 mb-4 overflow-hidden rounded-sm">
          <Link href={`/product/${product.id}`} className="block h-full w-full">
            {product.sale && (
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 z-10 rounded-sm">
                {t("sale")}
              </span>
            )}
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </Link>

          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-20">
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-110"
              title={t("addToCart") || "Add to Cart"}
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-110"
              title={t("quickView") || "Quick View"}
            >
              <Eye className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500">{product.category}</p>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-medium text-gray-900 hover:text-gray-600 transition-colors">{product.name}</h3>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">₹{product.price}</span>
            {product.maxPrice > product.price && <span className="text-sm text-gray-500">- ₹{product.maxPrice}</span>}
          </div>
          <div className="flex gap-2">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={() => setIsQuickViewOpen(true)}>
            {t("selectOptions")}
          </Button>
        </div>
      </div>

      <ProductQuickView product={product} isOpen={isQuickViewOpen} onClose={() => setIsQuickViewOpen(false)} />
    </>
  )
}
