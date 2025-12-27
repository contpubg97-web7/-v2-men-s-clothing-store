"use client"

import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/language-context"

const products = [
  {
    id: 4,
    name: "T Jacket Combo",
    category: "Men",
    price: 130,
    maxPrice: 140,
    image: "/images/t-jacket-combo.png",
    colors: ["Black", "Grey", "Blue"],
    sizes: ["XS", "S", "M"],
  },
  {
    id: 5,
    name: "Kids Graphic Tee",
    category: "Kids",
    price: 45,
    maxPrice: 55,
    image: "/kids-graphic-tshirt.jpg",
    colors: ["Blue", "Red", "Green"],
    sizes: ["2-4Y", "4-6Y", "6-8Y"],
  },
  {
    id: 6,
    name: "Cream T-Shirt",
    category: "Men",
    price: 200,
    maxPrice: 210,
    image: "/images/cream-tshirt-new.jpg",
    colors: ["Purple", "Blue", "Green"],
    sizes: ["M", "L", "XL"],
    sale: true,
  },
]

export function Bestsellers() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("bestsellersTitle")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("bestsellersSubtitle")}</p>
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
