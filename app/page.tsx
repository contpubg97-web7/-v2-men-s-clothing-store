import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NewArrivals } from "@/components/new-arrivals"
import { Categories } from "@/components/categories"
import { Bestsellers } from "@/components/bestsellers"
import { ExclusiveJacket } from "@/components/exclusive-jacket"
import { SummerSale } from "@/components/summer-sale"
import { Testimonials } from "@/components/testimonials"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NewArrivals />
        <Categories />
        <Bestsellers />
        <ExclusiveJacket />
        <SummerSale />
        <Testimonials />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
