"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    quote: "testimonial1Quote",
    author: "testimonial1Author",
    location: "testimonial1Location",
    image: "/man-smiling-professional-photo.jpg",
  },
  {
    quote: "testimonial2Quote",
    author: "testimonial2Author",
    location: "testimonial2Location",
    image: "/man-smiling-professional-photo.jpg",
  },
  {
    quote: "testimonial3Quote",
    author: "testimonial3Author",
    location: "testimonial3Location",
    image: "/boy-happy-professional-photo.jpg",
  },
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonialsTitle")}</h2>
          <p className="text-gray-600">{t("testimonialsSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm">
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{t(testimonial.quote)}"</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={t(testimonial.author)}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t(testimonial.author)}</p>
                  <p className="text-sm text-gray-500">{t(testimonial.location)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
