"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/elegant-men-fashion-portrait-sunglasses.jpg"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hailuo_Video_make%20it%20gif%20or%20video%20same%20styl_461112983319457801-80zp8OaQIuMjwYVedWRHwb3I7mfIM3.mp4"
            type="video/mp4"
          />
          {/* Fallback to image if video doesn't load */}
          <img
            src="/elegant-men-fashion-portrait-sunglasses.jpg"
            alt="Fashion hero"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">{t("heroTitle")}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">{t("heroSubtitle")}</p>
          <Button
            size="lg"
            className="bg-[#e63946] hover:bg-[#d62828] text-white px-10 py-6 text-base md:text-lg rounded-full"
          >
            {t("heroButton")}
          </Button>
        </div>
      </div>
    </section>
  )
}
