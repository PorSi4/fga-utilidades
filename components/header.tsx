"use client"

import { ShoppingCart, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Header() {
  // Função para abrir o Facebook
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/people/FGA-utilidades/61582590310728/?mibextid=ZbWKwL', '_blank', 'noopener,noreferrer')
  }

  // Função para abrir o Instagram
  const handleInstagramClick = () => {
    window.open('https://instagram.com/seu-perfil-aqui', '_blank', 'noopener,noreferrer')
  }

  return (
    <header className="w-full">
      {/* Top Bar - Yellow/Gold */}
      <div className="bg-[#FFD700] text-black py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="font-light text-xs">Produtos Originais e com Garantia</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-black">
                FGA <span className="text-[#FFD700]">Utilidades</span>
              </div>
            </div>

            {/* Social Icons and Cart */}
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-black hover:text-[#FFD700] cursor-pointer"
                onClick={handleFacebookClick}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-black hover:text-[#FFD700] cursor-pointer"
                onClick={handleInstagramClick}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-b bg-background text-foreground text-center">
        <div className="container mx-auto px-4">
          <NavigationMenu className="max-w-full justify-center">
            <NavigationMenuList className="flex flex-wrap gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-foreground font-normal">
                  Produtos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#cameras"
                        >
                          <div className="text-sm font-medium leading-none">Câmeras de Segurança</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#celulares"
                        >
                          <div className="text-sm font-medium leading-none">Celulares</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#refletores"
                        >
                          <div className="text-sm font-medium leading-none">Refletores</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-[#FFD700] px-4 py-2 text-sm transition-colors hover:bg-[#FFD700]/90 focus:bg-[#FFD700]/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground font-normal",
                  )}
                  href="https://www.mercadolivre.com.br/social/fariciogarcia/lists"
                >
                  {"ATÉ 30% OFF"}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  )
}