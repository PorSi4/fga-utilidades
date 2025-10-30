import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryCarousel } from "@/components/CategoryCarousel"
import { ProductCategories } from "@/components/product-categories" // Mantém os produtos
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoryCarousel /> {/* Novo carrossel de categorias */}
        <ProductCategories /> {/* Seção original dos produtos */}
      </main>
      <Footer />
    </div>
  )
}