"use client"

import { ShoppingBag, Ruler, CreditCard } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const steps = [
  {
    icon: ShoppingBag,
    title: "step1Title",
    description: "step1Description",
  },
  {
    icon: Ruler,
    title: "step2Title",
    description: "step2Description",
  },
  {
    icon: CreditCard,
    title: "step3Title",
    description: "step3Description",
  },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("howItWorksTitle")}</h2>
          <p className="text-gray-600">{t("howItWorksSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(step.title)}</h3>
              <p className="text-gray-600">{t(step.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
