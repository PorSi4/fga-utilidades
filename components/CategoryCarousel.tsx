"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Category {
    id: string
    title: string
    image: string
    affiliateLink: string
}

const categories: Category[] = [
    {
        id: "cameras",
        title: "Câmeras de Segurança",
        image: "/camerasdeSegu.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/4b2a311a-1cf3-417c-a7ee-6bf1d8359417#tracking_id=acbf7260-ded3-49bf-ad43-f4652d74bc29"
    },
    {
        id: "celulares",
        title: "Celulares",
        image: "/celularescate.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/81045178-8941-4dc3-aeb1-ae027d164d3d#tracking_id=17f783ac-087d-43f4-8e89-1394f60b5618"
    },
    {
        id: "iphone",
        title: "Iphones",
        image: "/iphonescate.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/b88c655d-3a93-4440-a91a-6e6ac6cda18e#tracking_id=6c137089-77c9-49ed-aefa-b7b098089bbc"
    },
    {
        id: "beleza",
        title: "Beleza",
        image: "/belezacate.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/ecf34120-75e7-43a1-8faf-7660b3aa59e6#tracking_id=7d4e6877-fbee-4b87-96f5-d3c05fc1af4a"
    },
    {
        id: "utensiliosDomesticos",
        title: "Utensílios domésticos",
        image: "/utidomes.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/db053961-3bc0-422e-a170-8bb05d021c51#tracking_id=7d4e6877-fbee-4b87-96f5-d3c05fc1af4a"
    },
    {
        id: "refletores",
        title: "Refletores LED",
        image: "/refeltorescate.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/e5f1fb92-39c1-4b9f-984b-acec18ee7a83#tracking_id=acbf7260-ded3-49bf-ad43-f4652d74bc29"
    },
    {
        id: "airfryers",
        title: "Air Fryers",
        image: "/airfraicate.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/faa059a8-e3e8-4178-af7f-9dcd690e27e9#tracking_id=acbf7260-ded3-49bf-ad43-f4652d74bc29"
    },
]

export function CategoryCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

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

    const handleAffiliateClick = (link: string) => {
        window.open(link, '_blank', 'noopener,noreferrer')
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Categorias
                </h2>

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

                    {/* Categories Container - EXATAMENTE IGUAL AO PRODUCT CAROUSEL */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {categories.map((category) => (
                            <Card key={category.id} className="flex-shrink-0 w-[280px] hover:shadow-lg transition-shadow">
                                <CardContent className="p-4">
                                    <div className="aspect-square relative mb-4">
                                        <img
                                            src={category.image || "/placeholder.svg"}
                                            alt={category.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-balance text-center">{category.title}</h3>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Button
                                        className="w-full bg-black hover:bg-black/90 text-white font-semibold"
                                        onClick={() => handleAffiliateClick(category.affiliateLink)}
                                    >
                                        Ir para o Mercado Livre
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
            </div>
        </section>
    )
}