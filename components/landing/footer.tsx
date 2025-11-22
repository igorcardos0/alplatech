import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Shield, FileText, Lock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-tech-black/90 backdrop-blur-sm border-t border-tech-grey">
      <div className="w-full max-w-[1400px] mx-auto px-4 py-16">
        {/* Grid principal do footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Sobre a empresa */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="relative w-48 h-46 block mb-6 mx-auto md:mx-0">
              <Image
                src="/images/logo.png"
                alt="ALPLATECH Logo"
                fill
                className="object-contain object-center md:object-left"
              />
            </Link>
            <p className="text-tech-offwhite/70 font-inter text-sm leading-relaxed">
              Transformamos cliques em receita através de estratégia, inteligência e performance. Não vendemos apenas código, vendemos resultados.
            </p>
            <p className="text-tech-offwhite/50 font-inter text-xs italic">
              Não compre uma página. Adquira resultado.
            </p>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-tech-white font-exo2 font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2 justify-center md:justify-start">
              <FileText className="w-4 h-4 text-tech-blue" />
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {["Início", "Planos", "Serviços"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm flex items-center gap-2 justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 bg-tech-blue rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Legal e LGPD */}
          <div className="text-center md:text-left">
            <h3 className="text-tech-white font-exo2 font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2 justify-center md:justify-start">
              <Shield className="w-4 h-4 text-tech-blue" />
              Legal & LGPD
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm flex items-center gap-2 justify-center md:justify-start"
                >
                  <Lock className="w-3 h-3 text-tech-blue" />
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm flex items-center gap-2 justify-center md:justify-start"
                >
                  <FileText className="w-3 h-3 text-tech-blue" />
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/lgpd"
                  className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm flex items-center gap-2 justify-center md:justify-start"
                >
                  <Shield className="w-3 h-3 text-tech-blue" />
                  Lei Geral de Proteção de Dados
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm flex items-center gap-2 justify-center md:justify-start"
                >
                  <Lock className="w-3 h-3 text-tech-blue" />
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-tech-white font-exo2 font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-tech-blue" />
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-tech-blue mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contato@alplatech.com"
                    className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm block"
                  >
                    contato@alplatech.com
                  </a>
                  <span className="text-tech-offwhite/40 font-inter text-xs">Email comercial</span>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-tech-blue mt-1 flex-shrink-0" />
                <div>
                  <Link
                    href="/obrigado?type=whatsapp"
                    className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm block"
                  >
                    WhatsApp
                  </Link>
                  <span className="text-tech-offwhite/40 font-inter text-xs">Atendimento</span>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-tech-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-tech-offwhite/60 font-inter text-sm">
                    São Paulo, SP
                  </p>
                  <span className="text-tech-offwhite/40 font-inter text-xs">Brasil</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior com informações legais */}
        <div className="border-t border-tech-grey/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-tech-offwhite/40 font-inter text-xs text-center md:text-left">
              © 2025 ALPLATECH. Todos os direitos reservados.
            </p>
            <p className="text-tech-offwhite/40 font-inter text-xs text-center md:text-right">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
          
          {/* Aviso LGPD */}
          <div className="border-t border-tech-grey/30 pt-4 mt-4">
            <p className="text-tech-offwhite/30 font-inter text-xs text-center leading-relaxed">
              Este site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação. 
              Ao continuar navegando, você concorda com nossa{" "}
              <Link href="/politica-de-privacidade" className="text-tech-blue hover:text-tech-cyan underline">
                Política de Privacidade
              </Link>
              {" "}e{" "}
              <Link href="/cookies" className="text-tech-blue hover:text-tech-cyan underline">
                Política de Cookies
              </Link>
              . Seus dados pessoais são tratados de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
