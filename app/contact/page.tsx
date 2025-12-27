"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-[#f5f0ed]">
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contactUsTitle")}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("contactUsSubtitle")}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-[#f8e8e8] rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("sendUsMessage")}</h2>
                <form className="space-y-4">
                  <div>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t("namePlaceholder")}
                      required
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      required
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder={t("commentPlaceholder")}
                      required
                      className="bg-white border-gray-300 resize-none"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="save-info" />
                    <label htmlFor="save-info" className="text-sm text-gray-600">
                      {t("saveInfo")}
                    </label>
                  </div>
                  <Button type="submit" className="bg-[#e63946] hover:bg-[#d62839] text-white px-8">
                    {t("send")}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-[#f8e8e8] rounded-3xl p-8 space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t("email")}</h3>
                    <a href="mailto:contact@velora.com" className="text-blue-600 hover:underline">
                      contact@velora.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t("phone")}</h3>
                    <a href="tel:929-242-6868" className="text-gray-600">
                      929-242-6868
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t("address")}</h3>
                    <p className="text-gray-600">123 Fifth Avenue, New York, NY 10003</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{t("followUs")}</h3>
                    <div className="flex gap-3">
                      <a href="#" className="text-gray-600 hover:text-[#e63946]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#e63946]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#e63946]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#e63946]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("exploreSupportTopics")}</h2>
              <p className="text-gray-600">{t("supportTopicsSubtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Returns & Exchanges */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{t("returnsExchanges")}</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("returnsExchangesLink")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("howToStartReturn")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("checkRefundStatus")}
                  </Link>
                </div>
              </div>

              {/* Ordering & Payment */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{t("orderingPayment")}</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("aboutCancelOrder")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("editOrderAfter")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("paymentMethods")}
                  </Link>
                </div>
              </div>

              {/* Shipping & Delivery */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{t("shippingDelivery")}</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("trackDeliveryCosts")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("estimatedDeliveryTimes")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("freeShipDeals")}
                  </Link>
                </div>
              </div>

              {/* Product Information */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{t("productInformation")}</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("sizeGuides")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("careInstructions")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("availabilityAlerts")}
                  </Link>
                </div>
              </div>

              {/* Account & Privacy */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{t("accountPrivacy")}</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("signUpAccount")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("managePersonalData")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("cookiePolicy")}
                  </Link>
                </div>
              </div>

              {/* Sizing & Fit */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{t("sizingFit")}</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("chooseSizes")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("fitRecommendations")}
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-[#e63946] text-sm underline">
                    {t("productMeasurements")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
