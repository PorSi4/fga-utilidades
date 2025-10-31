"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleOpenStore = () => {
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

      {/* Content Principal (título + botão) */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white -mt-40 mb-10 text-balance">
          Os Melhores Produtos com Preços Exclusivos
        </h1>
        <Button
          size="lg"
          className="mb-6 cursor-pointer bg-[#FFD700] text-black hover:bg-[#FFD700]/90 font-semibold text-lg px-8"
          onClick={handleOpenStore}
        >
          Explorar Produtos
        </Button>
      </div>

      {/* Texto descritivo - POSICIONADO SEPARADAMENTE */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/85 text-sm font-light max-w-3xl mx-auto leading-relaxed">
            Aproveite o melhor da conveniência digital com a confiança de quem redireciona
            você diretamente às páginas oficiais do Mercado Livre. Aqui, cada clique é uma
            nova oportunidade de descobrir o que realmente faz diferença no seu dia.
          </p>
        </div>
      </div>
    </section>
  )
}