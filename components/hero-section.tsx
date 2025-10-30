"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleOpenStore = () => {
    // Abre a sua loja do Mercado Livre na MESMA página
    window.location.href = 'https://www.mercadolivre.com.br/social/fariciogarcia/lists'
  }

  return (
    <section className="relative h-[710px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/backgroundHero.png)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
          Os Melhores Produtos com Preços Exclusivos
        </h1>
        <Button 
          size="lg" 
          className="cursor-pointer bg-[#FFD700] text-black hover:bg-[#FFD700]/90 font-semibold text-lg px-8"
          onClick={handleOpenStore}
        >
          Explorar Produtos
        </Button>
      </div>
    </section>
  )
}