import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FGA Utilidades - Produtos Originais e com Garantia",
  description: "E-commerce de utilidades e eletrônicos com produtos originais e garantia. Premium Shopping Experience.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR"> {/* Mude para pt-BR */}
      <head>
        {/* VERIFICAÇÃO DO DOMÍNIO FACEBOOK - ADICIONE ESTA LINHA */}
        <meta name="facebook-domain-verification" content="85y14i635nvd5pgbe99b2n20zcymdj" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}