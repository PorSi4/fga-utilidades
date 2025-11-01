import { ProductCarousel } from "@/components/product-carousel"

const categories = [
  {
    id: "cameras",
    title: "Câmeras de Segurança",
    products: [
      {
        id: 1,
        name: "Kit 2 Camera Segurança A31 Icsee Prova D'agua Lente Dupla Cor Branco/preto Estary Shop",
        price: "R$ 230,85",
        image: "/cameraa31icsee.png",
        affiliateLink: "https://www.mercadolivre.com.br/kit-2-camera-seguranca-a31-icsee-prova-dagua-lente-dupla-cor-brancopreto-estary-shop/p/MLB50171380?pdp_filters=item_id:MLB4066717381#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=1f4cfa22-52fd-408f-a36e-e9569667920a&wid=MLB4066717381&sid=storefronts" // ADICIONE AQUI
      },
      {
        id: 2,
        name: "Kit 4 Câmera Segurança Ip Externa Wifi A28 A31 App Icsee Prova Dagua IP66 Dome Lente Dupla Lentes 2 Em 1 Vigilancia",
        price: "R$ 545,00",
        image: "/camerakit4a28.png",
        affiliateLink: "https://www.mercadolivre.com.br/casenn-dome-a28-2-brancopreto-4-kit/p/MLB45160838?product_trigger_id=MLB42885496&pdp_filters=item_id%3AMLB4114846205&applied_product_filters=MLB42885496&picker=true&quantity=1" // ADICIONE AQUI
      },
      {
        id: 3,
        name: "Kit 2 Câmera Segurança Ip App Icsee Lente Dupla Cor Preto",
        price: "R$ 289,99",
        image: "/camerakit2pre.png",
        affiliateLink: "https://www.mercadolivre.com.br/kit-2-cmera-seguranca-ip-app-icsee-lente-dupla-cor-preto/p/MLB54767581?pdp_filters=item_id:MLB5696619586#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=1f4cfa22-52fd-408f-a36e-e9569667920a&wid=MLB5696619586&sid=storefronts" // ADICIONE AQUI
      },
    ],
  },
  {
    id: "celulares",
    title: "Celulares",
    products: [
      {
        id: 1,
        name: "Celular Realme 12 5g Dual Sim 512gb 8gb Ram Lilás",
        price: "R$ 1.499,00",
        image: "/Realme125g.png",
        affiliateLink: "https://www.mercadolivre.com.br/celular-realme-12-5g-dual-sim-512gb-8gb-ram-lilas/p/MLB50644404?pdp_filters=item_id:MLB4179954495#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=f6c36579-92bb-4fad-b21c-c9441edfa748&wid=MLB4179954495&sid=storefronts" // ADICIONE AQUI
      },
      {
        id: 2,
        name: "Celular Realme C65 Dual Sim 128 Gb 6 Gb Ram Smartphone",
        price: "R$ 809,00",
        image: "/Realmec65.png",
        affiliateLink: "https://www.mercadolivre.com.br/social/fariciogarcia/lists/81045178-8941-4dc3-aeb1-ae027d164d3d#tracking_id=35abf499-e04f-4301-bd6a-fa2ae3d5fc37" // ADICIONE AQUI
      },
      {
        id: 3,
        name: "Celular Realme 14 5g Dual Sim 256 Gb 8 Gb Ram Nfc Titânio",
        price: "R$ 1.767,00",
        image: "/realme145gs.png",
        affiliateLink: "https://www.mercadolivre.com.br/celular-realme-14-5g-dual-sim-256-gb-8-gb-ram-nfc-titnio/p/MLB48955446?pdp_filters=item_id:MLB4265896129#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=f6c36579-92bb-4fad-b21c-c9441edfa748&wid=MLB4265896129&sid=storefronts" // ADICIONE AQUI
      },
      {
        id: 4,
        name: "Smartphone Realme C61 256 Gb 8 Gb Ram Nfc Fone Relogio Capa - Dourado",
        price: "R$ 1.116,82",
        image: "/realmec61.png",
        affiliateLink: "https://www.mercadolivre.com.br/smartphone-realme-c61-256-gb-8-gb-ram-nfc-fone--relogio-capa/up/MLBU3385841046#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=229c6631-0241-4688-9287-e2b16ebab6c5" // ADICIONE AQUI
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
        affiliateLink: "https://www.mercadolivre.com.br/10x-refletor-led-avant-refletor-259601373-100w-com-luz-branco-frio-e-carcaca-preto/p/MLB39243606?pdp_filters=item_id:MLB5762499812#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=2a4e8409-96bd-460c-895d-7e4ea56b5046&wid=MLB5762499812&sid=storefronts" // ADICIONE AQUI
      },
      {
        id: 2,
        name: "Refletor Holofote Led Rgb Multicolorido Com Controle 100w Carcaça Preto",
        price: "R$ 48,71",
        image: "/refletorled.png",
        affiliateLink: "https://produto.mercadolivre.com.br/MLB-3938413515-refletor-holofote-led-rgb-multicolorido-com-controle-100w-carcaca-preto-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=2a4e8409-96bd-460c-895d-7e4ea56b5046&wid=MLB3938413515&sid=storefronts" // ADICIONE AQUI
      },
      {
        id: 3,
        name: "Kit 10 Refletor Holofote Led Slim 200w Prova Dágua Ip66 Cor Da Carcaça Preto Cor Da Luz Branco Frio",
        price: "R$ 195,96",
        image: "/kit10brancorefletor.png",
        affiliateLink: "https://www.mercadolivre.com.br/kit-10-refletor-holofote-led-slim-200w-prova-dagua-ip66-cor-da-carcaca-preto-cor-da-luz-branco-frio/p/MLB38461726?pdp_filters=item_id:MLB3789184443#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=2a4e8409-96bd-460c-895d-7e4ea56b5046&wid=MLB3789184443&sid=storefronts" // ADICIONE AQUI
      },
      {
        id: 4,
        name: "Kit de 2 Refletores Solares LED Até 600 W Luz Branca Fria Energia Solar Luatek Lky0018a",
        price: "R$ 78,98",
        image: "/refletorsolar.png",
        affiliateLink: "https://produto.mercadolivre.com.br/MLB-4157605961-kit-de-2-refletores-solares-led-ate-600-w-luz-branca-fria-energia-solar-luatek-lky0018a-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=2a4e8409-96bd-460c-895d-7e4ea56b5046&wid=MLB4157605961&sid=storefronts" // ADICIONE AQUI
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