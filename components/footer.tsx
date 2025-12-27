"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Links Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Velora</h3>
            <p className="text-gray-600 text-sm">{t("footerDescription")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("shop")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=men" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("mensWear")}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=perfumes" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("perfumes")}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=kids" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("kidsWear")}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("accessories")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("company")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("careers")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("legal")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t("returns")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2025 Velora. {t("allRightsReserved")}</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
