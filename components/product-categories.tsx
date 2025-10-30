import { ProductCarousel } from "@/components/product-carousel"

const categories = [
  {
    id: "celulares",
    title: "Celulares",
    products: [
      {
        id: 1,
        name: "Celular Realme 12 5g Dual Sim 512gb 8gb Ram Lilás",
        price: "R$ 1.499,00",
        image: "/Realme125g.png",
      },
      {
        id: 2,
        name: "Celular Realme C65 Dual Sim 128 Gb 6 Gb Ram Smartphone",
        price: "R$ 809,00",
        image: "/Realmec65.png",
      },
      {
        id: 3,
        name: "Celular Realme 14 5g Dual Sim 256 Gb 8 Gb Ram Nfc Titânio",
        price: "R$ 1.767,00",
        image: "/realme145gs.png",
      },
      {
        id: 4,
        name: "Smartphone Realme C61 256 Gb 8 Gb Ram Nfc Fone Relogio Capa - Dourado",
        price: "R$ 1.116,82",
        image: "/realmec61.png",
      },
    ],
  },
  {
    id: "cameras",
    title: "Câmeras de Segurança",
    products: [
      {
        id: 1,
        name: "Kit 2 Camera Segurança A31 Icsee Prova D'agua Lente Dupla Cor Branco/preto Estary Shop",
        price: "R$ 230,85",
        image: "/cameraa31icsee.png",
      },
      {
        id: 2,
        name: "Kit 4 Câmera Segurança Ip Externa Wifi A28 A31 App Icsee Prova Dagua IP66 Dome Lente Dupla Lentes 2 Em 1 Vigilancia",
        price: "R$ 545,00",
        image: "/camerakit4a28.png",
      },
      {
        id: 3,
        name: "Kit 2 Câmera Segurança Ip App Icsee Lente Dupla Cor Preto",
        price: "R$ 289,99",
        image: "/camerakit2pre.png",
      },
    ],
  },
  {
    id: "refletores",
    title: "Refletores LED",
    products: [
      {
        id: 1,
        name: "10x Refletor Led Avant Refletor 259601373 100w Com Luz Branco-frio E Carcaça Preto",
        price: "R$ 360,20",
        image: "/refletoreskit10x.png",
      },
      {
        id: 2,
        name: "Refletor Holofote Led Rgb Multicolorido Com Controle 100w Carcaça Preto",
        price: "R$ 48,71",
        image: "/refletorled.png",
      },
      {
        id: 3,
        name: "Kit 10 Refletor Holofote Led Slim 200w Prova Dágua Ip66 Cor Da Carcaça Preto Cor Da Luz Branco Frio",
        price: "R$ 195,96",
        image: "/kit10brancorefletor.png",
      },
      {
        id: 4,
        name: "Kit de 2 Refletores Solares LED Até 600 W Luz Branca Fria Energia Solar Luatek Lky0018a",
        price: "R$ 78,98",
        image: "/refletorsolar.png",
      },
    ],
  },
  
]

export function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {categories.map((category, index) => (
          <div key={category.id} id={category.id} className={index > 0 ? "mt-16" : ""}>
            <h2 className="text-black mb-8 font-light text-2xl text-center">{category.title}</h2>
            <ProductCarousel products={category.products} />
          </div>
        ))}
      </div>
    </section>
  )
}
