import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Cookie, Settings, Info, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Política de Cookies | ALPLATECH",
  description: "Informações sobre o uso de cookies no site da ALPLATECH.",
}

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen text-tech-white selection:bg-tech-blue selection:text-white">
      <Header />
      
      <section className="pt-32 pb-24 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tech-blue/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-tech-blue/20 to-tech-cyan/20 border border-tech-blue/30 mb-6">
              <Cookie className="w-8 h-8 text-tech-cyan" />
            </div>
            <h1 className="font-orbitron font-bold text-3xl md:text-4xl text-tech-white mb-4">
              POLÍTICA DE COOKIES
            </h1>
            <div className="h-1 w-20 bg-tech-blue mx-auto rounded-full shadow-[0_0_10px_#0055FF]" />
            <p className="text-tech-offwhite/60 font-inter text-sm mt-4">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-tech-black/60 backdrop-blur-sm border border-tech-grey/50 rounded-2xl p-8 md:p-12 space-y-8">
            
            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Info className="w-5 h-5" />
                O QUE SÃO COOKIES?
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou celular) quando você 
                visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, além de 
                fornecer informações aos proprietários do site.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Os cookies permitem que um site reconheça seu dispositivo e armazene algumas informações sobre suas preferências 
                ou ações passadas, como itens em um carrinho de compras, preferências de idioma e outras configurações.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                TIPOS DE COOKIES UTILIZADOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Utilizamos os seguintes tipos de cookies em nosso site:
              </p>

              <div className="space-y-6 mt-6">
                <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6">
                  <h3 className="font-orbitron font-bold text-lg text-tech-blue mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    1. Cookies Essenciais (Necessários)
                  </h3>
                  <p className="font-inter text-tech-offwhite/80 leading-relaxed mb-3">
                    Estes cookies são essenciais para o funcionamento do site e não podem ser desativados em nossos sistemas. 
                    Eles são geralmente definidos apenas em resposta a ações feitas por você, como definir preferências de privacidade, 
                    fazer login ou preencher formulários.
                  </p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">
                    <strong>Finalidade:</strong> Garantir funcionalidades básicas do site, segurança e navegação adequada.
                  </p>
                  <p className="font-inter text-tech-offwhite/70 text-sm mt-2">
                    <strong>Duração:</strong> Geralmente cookies de sessão (excluídos ao fechar o navegador) ou cookies persistentes 
                    com validade limitada.
                  </p>
                </div>

                <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6">
                  <h3 className="font-orbitron font-bold text-lg text-tech-blue mb-3">
                    2. Cookies Analíticos
                  </h3>
                  <p className="font-inter text-tech-offwhite/80 leading-relaxed mb-3">
                    Estes cookies nos permitem contar visitas e fontes de tráfego para podermos medir e melhorar o desempenho do 
                    nosso site. Eles nos ajudam a saber quais páginas são mais e menos populares e ver como os visitantes se movem 
                    pelo site.
                  </p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">
                    <strong>Finalidade:</strong> Coletar informações sobre como os visitantes usam nosso site (ex: páginas visitadas, 
                    tempo de permanência, origem do tráfego).
                  </p>
                  <p className="font-inter text-tech-offwhite/70 text-sm mt-2">
                    <strong>Serviços:</strong> Podemos utilizar serviços como Google Analytics (se aplicável). Todas as informações 
                    coletadas por esses cookies são agregadas e, portanto, anônimas.
                  </p>
                </div>

                <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6">
                  <h3 className="font-orbitron font-bold text-lg text-tech-blue mb-3">
                    3. Cookies Funcionais
                  </h3>
                  <p className="font-inter text-tech-offwhite/80 leading-relaxed mb-3">
                    Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas. Eles podem ser definidos 
                    por nós ou por fornecedores externos cujos serviços adicionamos às nossas páginas.
                  </p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">
                    <strong>Finalidade:</strong> Lembrar escolhas que você fez (como seu nome de usuário, idioma ou região) e fornecer 
                    recursos aprimorados e mais pessoais.
                  </p>
                </div>

                <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6">
                  <h3 className="font-orbitron font-bold text-lg text-tech-blue mb-3">
                    4. Cookies de Marketing (se aplicável)
                  </h3>
                  <p className="font-inter text-tech-offwhite/80 leading-relaxed mb-3">
                    Estes cookies podem ser definidos através do nosso site por nossos parceiros de publicidade. Podem ser usados por 
                    essas empresas para criar um perfil de seus interesses e mostrar-lhe anúncios relevantes em outros sites.
                  </p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">
                    <strong>Nota:</strong> Atualmente, nossa política prioriza a privacidade do usuário. Informaremos claramente se 
                    começarmos a utilizar cookies de marketing.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                COOKIES DE TERCEIROS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Além dos nossos próprios cookies, podemos utilizar vários cookies de fornecedores terceirizados confiáveis. 
                Estes cookies são controlados pelos respectivos fornecedores e estão sujeitos às políticas de privacidade deles:
              </p>
              <ul className="space-y-2 ml-6 mt-4">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Google Analytics:</strong> Para análise de tráfego e comportamento dos usuários (se aplicável)</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Provedores de Hospedagem:</strong> Cookies técnicos necessários para o funcionamento do site</span>
                </li>
              </ul>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed pt-2">
                Recomendamos que você revise as políticas de privacidade desses terceiros para entender como eles usam cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Settings className="w-5 h-5" />
                COMO GERENCIAR COOKIES
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu 
                computador e pode configurar a maioria dos navegadores para impedir que sejam colocados. No entanto, se você fizer isso, 
                pode ter que ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades 
                podem não funcionar.
              </p>
              
              <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6 mt-4">
                <h3 className="font-orbitron font-bold text-lg text-tech-blue mb-4">
                  Configurações por Navegador:
                </h3>
                <ul className="space-y-3">
                  <li className="font-inter text-tech-offwhite/80">
                    <strong className="text-tech-blue">Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados de sites
                  </li>
                  <li className="font-inter text-tech-offwhite/80">
                    <strong className="text-tech-blue">Mozilla Firefox:</strong> Opções → Privacidade e Segurança → Cookies e dados de sites
                  </li>
                  <li className="font-inter text-tech-offwhite/80">
                    <strong className="text-tech-blue">Microsoft Edge:</strong> Configurações → Cookies e permissões de site
                  </li>
                  <li className="font-inter text-tech-offwhite/80">
                    <strong className="text-tech-blue">Safari:</strong> Preferências → Privacidade → Gerenciar dados do site
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                COOKIES E DADOS PESSOAIS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Alguns cookies podem coletar informações pessoais. Nesses casos, o tratamento desses dados está sujeito à nossa 
                <Link href="/politica-de-privacidade" className="text-tech-blue hover:text-tech-cyan underline ml-1">Política de Privacidade</Link> 
                {" "}e em conformidade com a{" "}
                <Link href="/lgpd" className="text-tech-blue hover:text-tech-cyan underline">Lei Geral de Proteção de Dados (LGPD)</Link>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                ATUALIZAÇÕES DESTA POLÍTICA
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças nos cookies que utilizamos ou por 
                outras razões operacionais, legais ou regulatórias. Recomendamos que você revise esta política regularmente para se 
                manter informado sobre nosso uso de cookies.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                A data da "Última atualização" no topo desta página indica quando esta política foi revisada pela última vez.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                CONTATO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
              </p>
              <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6 space-y-2">
                <p className="font-inter text-tech-white">
                  <strong className="text-tech-blue">ALPLATECH</strong>
                </p>
                <p className="font-inter text-tech-offwhite/80">
                  E-mail: <a href="mailto:privacidade@alplatech.com" className="text-tech-blue hover:text-tech-cyan underline">privacidade@alplatech.com</a>
                </p>
              </div>
            </section>

            <div className="pt-8 border-t border-tech-grey/50 flex flex-col items-center gap-4">
              <Link 
                href="/" 
                className="inline-flex items-center text-tech-blue hover:text-tech-cyan font-exo2 uppercase text-sm tracking-wider transition-colors"
              >
                ← Voltar para a página inicial
              </Link>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link href="/politica-de-privacidade" className="text-tech-offwhite/60 hover:text-tech-blue transition-colors">
                  Política de Privacidade
                </Link>
                <span className="text-tech-offwhite/40">•</span>
                <Link href="/termos-de-uso" className="text-tech-offwhite/60 hover:text-tech-blue transition-colors">
                  Termos de Uso
                </Link>
                <span className="text-tech-offwhite/40">•</span>
                <Link href="/lgpd" className="text-tech-offwhite/60 hover:text-tech-blue transition-colors">
                  LGPD
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
