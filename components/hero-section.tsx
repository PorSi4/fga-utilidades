"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleOpenStore = () => {
    console.log('🎯 Pixel Test: Disparando evento Lead - Botão Hero')
    
    // Dispara o evento do Pixel
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'Lead', {
        content_name: 'Botão Hero - Explorar Produtos',
        content_category: 'main_cta',
        content_type: 'product',
        test_event_code: 'TEST38824' // Código de teste
      })
      console.log('✅ Lead event disparado com sucesso!')
    } else {
      console.log('❌ Pixel não carregado - evento não disparado')
    }
    
    // Aguarda 500ms para garantir que o evento foi enviado antes do redirecionamento
    setTimeout(() => {
      window.location.href = 'https://www.mercadolivre.com.br/social/fariciogarcia/lists'
    }, 500)
  }

  return (
    <section className="relative h-[710px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/backvideo.mp4" type="video/mp4" />
          <source src="/backvideo.mp4" type="video/webm" />
          {/* Fallback para caso o vídeo não carregue */}
          Seu navegador não suporta o elemento de vídeo.
        </video>
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
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

        {/* Texto descritivo */}
        <div className="absolute -bottom-70 left-0 right-0 z-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/85 text-sm font-light max-w-3xl mx-auto leading-relaxed">
              Aproveite o melhor da conveniência digital com a confiança de quem redireciona
              você diretamente às páginas oficiais do Mercado Livre. Aqui, cada clique é uma
              nova oportunidade de descobrir o que realmente faz diferença no seu dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}