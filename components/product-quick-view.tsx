"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

interface Product {
  id: number
  name: string
  category: string
  price: number
  maxPrice: number
  image: string
  colors: string[]
  sizes: string[]
  description?: string
}

interface ProductQuickViewProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  const { t } = useLanguage()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-[#FDF5F3] border-none">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-auto">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors md:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-1 hover:bg-black/5 rounded-full transition-colors hidden md:block"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()} - ₹{product.maxPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">& Free Shipping</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {product.description ||
                  `${product.name} are the perfect blend of elegance and comfort, designed with sleek, uninterrupted silhouettes that gently flow with your movement. Crafted from lightweight, breathable fabrics, these dresses offer a flattering drape for all body types.`}
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-sm font-bold text-gray-900">Size</span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "min-w-[40px] h-10 px-3 border transition-all flex items-center justify-center text-sm",
                          selectedSize === size
                            ? "border-black bg-white text-black font-bold"
                            : "border-gray-200 bg-white text-gray-600 hover:border-black",
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center border border-gray-300 bg-white h-12">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <Button className="flex-1 h-12 bg-[#FF9A9E] hover:bg-[#FF8A8E] text-white font-bold tracking-wider rounded-none uppercase transition-all shadow-sm">
                    {t("addToCart") || "ADD TO CART"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
