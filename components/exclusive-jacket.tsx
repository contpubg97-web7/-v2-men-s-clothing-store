"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function ExclusiveJacket() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-[#2d2d2d] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{t("exclusiveJacketTitle")}</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">{t("exclusiveJacketDescription")}</p>
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-gray-100 border-white">
              {t("shopExclusiveJacket")}
            </Button>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/exclusive-men-black-leather-jacket.jpg"
              alt="Exclusive Jacket"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
