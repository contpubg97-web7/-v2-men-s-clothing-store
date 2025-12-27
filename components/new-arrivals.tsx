"use client"

import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/language-context"

const products = [
  {
    id: 1,
    name: "Premium Cologne",
    category: "Perfumes",
    price: 85,
    maxPrice: 120,
    image: "/luxury-cologne-bottles.jpg",
    colors: ["Classic", "Fresh", "Spice"],
    sizes: ["50ml", "100ml"],
  },
  {
    id: 2,
    name: "Essential Polos",
    category: "Men",
    price: 80,
    maxPrice: 90,
    image: "/polo-shirt-grey.jpg",
    colors: ["Purple", "Grey", "Green"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 3,
    name: "Cream T-Shirt",
    category: "Men",
    price: 60,
    maxPrice: 65,
    image: "/images/cream-tshirt-new.jpg",
    colors: ["Purple", "Blue", "Green"],
    sizes: ["M", "L", "XL"],
    sale: true,
  },
]

export function NewArrivals() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("newArrivalsTitle")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t("newArrivalsSubtitle")}</p>
          <a href="/shop" className="text-sm font-medium underline hover:no-underline">
            {t("seeWhatsNew")}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
