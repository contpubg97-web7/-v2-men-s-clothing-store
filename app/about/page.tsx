"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Target, Eye } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center justify-center">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CG20Enwrlv7oA27srdi5pgTkPIgKmC.png" alt="Style That Moves With You" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutHeroTitle")}</h1>
            <p className="text-lg max-w-2xl mx-auto">
              <span className="text-[#E8505B]">{t("aboutHeroHighlight")}</span> {t("aboutHeroSubtitle")}
            </p>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourPurposeTitle")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t("ourPurposeSubtitle1")} <span className="text-[#E8505B]">{t("ourPurposeHighlight")}</span>{" "}
                {t("ourPurposeSubtitle2")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-[#E8505B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("ourMissionTitle")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("ourMissionText")}</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-[#E8505B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("ourVisionTitle")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("ourVisionText")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Stand Out */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("whatMakesUsTitle")}</h2>
              <p className="text-gray-600">
                <span className="text-[#E8505B]">{t("whatMakesUsHighlight")}</span> {t("whatMakesUsSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow lg:mt-0">
                <svg
                  className="w-16 h-16 mx-auto mb-6 text-[#E8505B]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 20h24M20 26h24M20 32h16" strokeLinecap="round" />
                  <path d="M32 38c6 0 10 3 10 8v6H22v-6c0-5 4-8 10-8z" />
                  <path d="M48 14v4M48 22v4M38 18h4M46 18h4" />
                </svg>
                <h3 className="text-xl font-bold mb-3 text-center">{t("premiumQualityTitle")}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{t("premiumQualityText")}</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow lg:mt-8">
                <svg
                  className="w-16 h-16 mx-auto mb-6 text-[#E8505B]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M24 16l8 4M40 16l-8 4M22 24c0 5.5 4.5 10 10 10s10-4.5 10-10" />
                  <path d="M22 34c0 10 10 18 10 18s10-8 10-18v-10H22v10z" strokeLinecap="round" />
                </svg>
                <h3 className="text-xl font-bold mb-3 text-center">{t("timelessStyleTitle")}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{t("timelessStyleText")}</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow lg:mt-0">
                <svg
                  className="w-16 h-16 mx-auto mb-6 text-[#E8505B]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M28 12h8l4 8h-16l4-8z" />
                  <path d="M24 20v24c0 2 1 4 4 4h8c3 0 4-2 4-4V20" />
                  <path d="M22 24h20M22 32h20M22 40h20" strokeLinecap="round" />
                  <rect x="20" y="20" width="24" height="4" rx="1" />
                </svg>
                <h3 className="text-xl font-bold mb-3 text-center">{t("inHouseDesignTitle")}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{t("inHouseDesignText")}</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow lg:mt-8">
                <svg
                  className="w-16 h-16 mx-auto mb-6 text-[#E8505B]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="24" cy="20" r="6" />
                  <circle cx="40" cy="20" r="6" />
                  <circle cx="32" cy="36" r="6" />
                  <path d="M24 26c-4 0-8 3-8 8v4h16" />
                  <path d="M40 26c4 0 8 3 8 8v4H32" />
                </svg>
                <h3 className="text-xl font-bold mb-3 text-center">{t("customerFirstTitle")}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{t("customerFirstText")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* More Than Just Clothing Section */}
        <section className="py-16 bg-[#FDF5F6]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative">
              {/* Large image taking more width */}
              <div className="relative w-full md:w-[65%] aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/three-friends-in-casual-wear-sitting-together-outd.jpg"
                  alt="Friends in casual wear"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping white card on the right */}
              <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-6 md:mt-0 md:w-[45%] bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <svg
                      className="w-14 h-14 text-[#E8505B]"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="32" cy="32" r="12" />
                      <circle cx="32" cy="32" r="6" />
                      <path d="M44 20l3-3M20 44l-3 3M44 44l3 3M20 20l-3-3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("moreThanClothingTitle")}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{t("moreThanClothingText1")}</p>
                  <p className="text-gray-600 leading-relaxed">{t("moreThanClothingText2")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thoughtfully Designed Section */}
        <section className="bg-black text-white">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Text content */}
            <div className="md:w-1/2 flex items-center py-16 md:py-24 px-8 md:px-16 lg:px-24">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {t("thoughtfullyDesignedTitle")}
                </h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">{t("thoughtfullyDesignedText")}</p>
              </div>
            </div>

            {/* Right side - Full height image */}
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
              <Image src="/images/image.jpeg" alt="Diverse models in casual fashion" fill className="object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
