export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Store Name */}
          <div>
            <h3 className="text-3xl font-bold mb-2">
              FGA <span className="text-[#FFD700]">Utilidades</span>
            </h3>
            <p className="text-lg text-gray-300">Premium Shopping Experience</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6" />

          {/* Legal Info */}
          <div className="space-y-2 text-sm text-gray-400">
            <p>Site afiliado ao Mercado Livre</p>
            <p>© 2025 FGA Utilidades. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
