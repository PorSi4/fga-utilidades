"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: string
  image: string
  affiliateLink: string
}

interface ProductCarouselProps {
  products: Product[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [viewedProducts, setViewedProducts] = useState<Set<number>>(new Set())

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      return () => container.removeEventListener("scroll", checkScroll)
    }
  }, [])

  // ADICIONE ESTE useEffect PARA RASTREAR PRODUTOS VISUALIZADOS
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = parseInt(entry.target.getAttribute('data-product-id') || '0')
            if (productId && !viewedProducts.has(productId)) {
              trackProductView(productId)
            }
          }
        })
      },
      { threshold: 0.5 } // 50% do produto visível
    )

    // Observa todos os produtos no carrossel
    const productElements = document.querySelectorAll('[data-product-id]')
    productElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [viewedProducts])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 320
    const newScrollLeft =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })
  }

  // FUNÇÃO PARA RASTREAR VISUALIZAÇÃO DO PRODUTO
  const trackProductView = (productId: number) => {
    const product = products.find(p => p.id === productId)
    if (!product) return

    console.log('👀 Produto visualizado:', product.name)
    
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'ViewContent', {
        content_name: product.name,
        content_category: 'product_view',
        content_type: 'product',
        content_ids: [product.id.toString()],
        value: parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.')),
        currency: 'BRL'
      })
      console.log('✅ Pixel ViewContent disparado para:', product.name)
    }

    // Marca como visualizado
    setViewedProducts(prev => new Set(prev).add(productId))
  }

  // FUNÇÃO PARA CLIQUE NO BOTÃO COMPRAR
  const handleBuyClick = (product: Product) => {
    console.log('🛒 Clicou em comprar:', product.name)
    
    // Evento do Pixel para produto específico
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'AddToCart', {
        content_name: product.name,
        content_category: 'product_purchase',
        content_type: 'product',
        content_ids: [product.id.toString()],
        value: parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.')),
        currency: 'BRL'
      })
      console.log('✅ Pixel AddToCart disparado para:', product.name)
    }
    
    // Abre o link de afiliado em nova aba
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative group">
      {/* Left Arrow */}
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}

      {/* Products Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="flex-shrink-0 w-[280px] hover:shadow-lg transition-shadow"
            data-product-id={product.id} // ADICIONE ESTE DATA ATTRIBUTE
          >
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4 bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-balance">{product.name}</h3>
              <p className="text-2xl font-bold text-black">{product.price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button 
                className="w-full bg-black hover:bg-black/90 text-white font-semibold cursor-pointer"
                onClick={() => handleBuyClick(product)}
              >
                Comprar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}