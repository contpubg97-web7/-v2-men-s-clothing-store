"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, Search, User, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AuthModal } from "@/components/auth-modal"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const isRTL = language === "ar"

  return (
    <>
      {/* Promo Banner with Marquee Animation */}
      <div className="bg-[#1a1a1a] text-white py-2 text-sm overflow-hidden">
        <div
          className={`flex whitespace-nowrap ${isRTL ? "animate-marquee-rtl" : "animate-marquee-ltr"}`}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8">
              {t("promoMessage")}
            </span>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Velora
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t("home")}
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t("shop")}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t("about")}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t("contact")}
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ar")}>العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setAuthModalOpen(true)}>
                <User className="h-5 w-5" />
              </Button>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 py-2">
                {t("home")}
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-gray-900 py-2">
                {t("shop")}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 py-2">
                {t("about")}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 py-2">
                {t("contact")}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  )
}
