"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function SummerSale() {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 0,
    minutes: 57,
    seconds: 15,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-skDaYeYVDcv18TrwZR7JH78bZQjOun.png" alt="Summer Sale" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">{t("summerSaleTitle")}</h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">{t("summerSaleSubtitle")}</p>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-white text-black rounded-xl px-6 py-4 min-w-[80px]">
            <div className="text-3xl md:text-5xl font-bold">{String(timeLeft.days).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm font-semibold mt-1 uppercase">{t("day")}</div>
          </div>
          <div className="bg-white text-black rounded-xl px-6 py-4 min-w-[80px]">
            <div className="text-3xl md:text-5xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm font-semibold mt-1 uppercase">{t("hours")}</div>
          </div>
          <div className="bg-white text-black rounded-xl px-6 py-4 min-w-[80px]">
            <div className="text-3xl md:text-5xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm font-semibold mt-1 uppercase">{t("mins")}</div>
          </div>
          <div className="bg-white text-black rounded-xl px-6 py-4 min-w-[80px]">
            <div className="text-3xl md:text-5xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm font-semibold mt-1 uppercase">{t("sec")}</div>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-red-600 text-white hover:bg-red-700 px-8 py-6 text-base font-semibold uppercase rounded-full"
        >
          {t("shopSummerSale")}
        </Button>
      </div>
    </section>
  )
}
