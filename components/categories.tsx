"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const categories = [
  {
    title: "mensWear",
    image: "/mens-wear-category.png",
    link: "/shop?category=men",
  },
  {
    title: "perfumes",
    image: "/perfume-bottles-luxury-fragrance.jpg",
    link: "/shop?category=perfumes",
  },
  {
    title: "kidsWear",
    image: "/kids-wear-category.png",
    link: "/shop?category=kids",
  },
  {
    title: "accessories",
    image: "/fashion-accessories-bags-watches.jpg",
    link: "/shop?category=accessories",
  },
]

export function Categories() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-[#f5ebe5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("categoriesTitle")}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{t("categoriesSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.title} className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={t(category.title)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl px-8 py-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 text-center mb-1">{t(category.title)}</h3>
                <Link
                  href={category.link}
                  className="text-sm text-[#e63946] font-semibold text-center block hover:underline"
                >
                  {t("shopNow")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
