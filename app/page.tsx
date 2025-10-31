import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryCarousel } from "@/components/CategoryCarousel"
import { ProductCategories } from "@/components/product-categories"
import { Footer } from "@/components/footer"
import { FacebookPixel } from "@/components/facebook-pixel"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoryCarousel />
        <ProductCategories />
      </main>
      <Footer />
      
      {/* Meta Pixel - Adiciona aqui */}
      <FacebookPixel />
    </div>
  )
}