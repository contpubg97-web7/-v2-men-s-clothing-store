"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/language-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

const allProducts = [
  {
    id: 1,
    name: "Premium Cologne",
    category: "Parfumes",
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
  {
    id: 4,
    name: "Princess Hoodie",
    category: "Men",
    price: 130,
    maxPrice: 140,
    image: "/princess-hoodie-streetwear.jpg",
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
    name: "T Jacket Combo",
    category: "Men",
    price: 200,
    maxPrice: 210,
    image: "/images/t-jacket-combo.png",
    colors: ["Purple", "Blue", "Green"],
    sizes: ["M", "L", "XL"],
    sale: true,
  },
  {
    id: 7,
    name: "Black Leather Jacket",
    category: "Men",
    price: 250,
    maxPrice: 280,
    image: "/exclusive-black-leather-jacket-fashion.jpg",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Kids Denim Jacket",
    category: "Kids",
    price: 75,
    maxPrice: 85,
    image: "/colorful-yellow-and-blue-jacket-on-hanger.jpg",
    colors: ["Blue", "Navy"],
    sizes: ["4-6Y", "6-8Y", "8-10Y"],
  },
  {
    id: 9,
    name: "Signature Eau de Parfum",
    category: "Parfumes",
    price: 150,
    maxPrice: 165,
    image: "/elegant-flowing-dress-purple.jpg",
    colors: ["Floral", "Woody", "Fresh"],
    sizes: ["30ml", "50ml", "100ml"],
    sale: true,
  },
  {
    id: 10,
    name: "Striped Casual Shirt",
    category: "Men",
    price: 75,
    maxPrice: 85,
    image: "/boy-in-striped-shirt-casual.jpg",
    colors: ["Blue", "Grey", "White"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 11,
    name: "Blue Outdoor Jacket",
    category: "Men",
    price: 190,
    maxPrice: 210,
    image: "/boy-in-blue-jacket-outdoors.jpg",
    colors: ["Blue", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Fashion Sunglasses",
    category: "Accessories",
    price: 95,
    maxPrice: 110,
    image: "/close-up-fashion-portrait-sunglasses-modern-style.jpg",
    colors: ["Black", "Brown", "Gold"],
    sizes: ["One Size"],
  },
  {
    id: 13,
    name: "Elegant Blazer Set",
    category: "Men",
    price: 220,
    maxPrice: 240,
    image: "/elegant-men-fashion-portrait-sunglasses.jpg",
    colors: ["Black", "Navy"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 14,
    name: "Professional Blazer",
    category: "Men",
    price: 280,
    maxPrice: 300,
    image: "/boy-happy-professional-photo.jpg",
    colors: ["Navy", "Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    name: "Vintage Leather Belt",
    category: "Accessories",
    price: 55,
    maxPrice: 65,
    image: "/vintage-leather-belt-classic.jpg",
    colors: ["Brown", "Black", "Tan"],
    sizes: ["S", "M", "L"],
    sale: true,
  },
  {
    id: 16,
    name: "Kids Summer Polo",
    category: "Kids",
    price: 40,
    maxPrice: 50,
    image: "/summer-linen-shirt-white.jpg",
    colors: ["White", "Blue", "Yellow"],
    sizes: ["2-4Y", "4-6Y", "6-8Y"],
  },
  {
    id: 17,
    name: "Classic Denim Jeans",
    category: "Men",
    price: 120,
    maxPrice: 135,
    image: "/stylish-young-man-denim.jpg",
    colors: ["Indigo", "Black", "Light Wash"],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 18,
    name: "Premium Watch",
    category: "Accessories",
    price: 350,
    maxPrice: 400,
    image: "/mens-watch-luxury.jpg",
    colors: ["Silver", "Gold", "Rose Gold"],
    sizes: ["One Size"],
    sale: true,
  },
]

export default function ShopPage() {
  const { t } = useLanguage()
  const [sortBy, setSortBy] = useState("latest")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const sortedProducts = useMemo(() => {
    const products = [...allProducts]
    switch (sortBy) {
      case "popularity":
        return products
      case "rating":
        return products
      case "latest":
        return products.reverse()
      case "price-low":
        return products.sort((a, b) => a.price - b.price)
      case "price-high":
        return products.sort((a, b) => b.price - a.price)
      default:
        return products
    }
  }, [sortBy])

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex)
  const showingStart = startIndex + 1
  const showingEnd = Math.min(endIndex, sortedProducts.length)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("shop")}</h1>

            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing {showingStart}–{showingEnd} of {sortedProducts.length} results
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by latest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Sort by popularity</SelectItem>
                  <SelectItem value="rating">Sort by average rating</SelectItem>
                  <SelectItem value="latest">Sort by latest</SelectItem>
                  <SelectItem value="price-low">Sort by price: low to high</SelectItem>
                  <SelectItem value="price-high">Sort by price: high to low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center border text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
