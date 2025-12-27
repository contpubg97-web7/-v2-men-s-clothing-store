"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function CartPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
            <div className="text-center py-12">
              <p className="text-gray-600 mb-8">Your cart is empty</p>
              <Button asChild className="bg-black hover:bg-gray-800 text-white">
                <a href="/shop">Continue Shopping</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
