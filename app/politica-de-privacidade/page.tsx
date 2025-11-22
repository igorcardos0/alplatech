import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Shield, Lock, Eye, FileCheck, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Política de Privacidade | ALPLATECH",
  description: "Conheça como a ALPLATECH trata seus dados pessoais em conformidade com a LGPD.",
}

export default function PoliticaPrivacidade() {
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
              <Shield className="w-8 h-8 text-tech-cyan" />
            </div>
            <h1 className="font-orbitron font-bold text-3xl md:text-4xl text-tech-white mb-4">
              POLÍTICA DE PRIVACIDADE
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
                <Lock className="w-5 h-5" />
                1. INTRODUÇÃO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                A ALPLATECH ("nós", "nosso", "empresa") respeita sua privacidade e está comprometida em proteger seus dados pessoais. 
                Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Ao utilizar nosso site e serviços, você concorda com as práticas descritas nesta política.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Eye className="w-5 h-5" />
                2. DADOS QUE COLETAMOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Coletamos os seguintes tipos de dados pessoais:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Dados de Identificação:</strong> Nome completo, e-mail, telefone, WhatsApp</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Dados de Comunicação:</strong> Informações compartilhadas através de formulários de contato e WhatsApp</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Cookies e Tecnologias Similares:</strong> Dados coletados através de cookies (consulte nossa <Link href="/cookies" className="text-tech-blue hover:text-tech-cyan underline">Política de Cookies</Link>)</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <FileCheck className="w-5 h-5" />
                3. FINALIDADE DO TRATAMENTO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Prestar nossos serviços de desenvolvimento web, automações e soluções customizadas</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Responder a solicitações, dúvidas e fornecer suporte ao cliente</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Enviar propostas comerciais e informações sobre nossos serviços</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Melhorar nossa plataforma, produtos e serviços</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Realizar análises estatísticas e pesquisas de mercado</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Cumprir obrigações legais e regulatórias</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Shield className="w-5 h-5" />
                4. COMPARTILHAMENTO DE DADOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Podemos compartilhar seus dados pessoais nas seguintes situações:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Provedores de Serviço:</strong> Empresas que nos auxiliam na operação do site (hospedagem, análise de dados)</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>WhatsApp Business:</strong> Quando você interage conosco via WhatsApp</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Obrigações Legais:</strong> Quando necessário para cumprir leis, regulamentos ou processos judiciais</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Com seu Consentimento:</strong> Em outras situações, sempre com sua autorização prévia</span>
                </li>
              </ul>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed pt-2">
                Todos os parceiros são selecionados criteriosamente e obrigam-se a manter a confidencialidade e segurança dos dados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                5. SEUS DIREITOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Conforme a LGPD, você possui os seguintes direitos:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Acesso:</strong> Solicitar informações sobre quais dados temos sobre você</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Correção:</strong> Solicitar a atualização de dados incompletos ou inexatos</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Exclusão:</strong> Solicitar a eliminação de dados desnecessários ou tratados em desconformidade</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Revogação:</strong> Retirar seu consentimento a qualquer momento</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Oposição:</strong> Opor-se ao tratamento de dados em determinadas circunstâncias</span>
                </li>
              </ul>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed pt-2">
                Para exercer seus direitos, entre em contato através do e-mail: <a href="mailto:privacidade@alplatech.com" className="text-tech-blue hover:text-tech-cyan underline">privacidade@alplatech.com</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                6. SEGURANÇA DOS DADOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, 
                alteração, divulgação ou destruição, incluindo:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Criptografia de dados em trânsito (HTTPS/SSL)</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Controles de acesso restritos aos dados pessoais</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Monitoramento regular de segurança</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Backups regulares dos dados</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                7. RETENÇÃO DE DADOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, 
                salvo quando a retenção for exigida ou permitida por lei. Após o período de retenção, os dados serão excluídos 
                de forma segura ou anonimizados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                8. ALTERAÇÕES NESTA POLÍTICA
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através 
                do nosso site ou por e-mail. Recomendamos revisar esta política regularmente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Mail className="w-5 h-5" />
                9. CONTATO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Para questões relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato:
              </p>
              <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6 space-y-2">
                <p className="font-inter text-tech-offwhite">
                  <strong className="text-tech-blue">ALPLATECH</strong>
                </p>
                <p className="font-inter text-tech-offwhite/80">
                  E-mail: <a href="mailto:privacidade@alplatech.com" className="text-tech-blue hover:text-tech-cyan underline">privacidade@alplatech.com</a>
                </p>
                <p className="font-inter text-tech-offwhite/80">
                  Encarregado de Dados (DPO): privacidade@alplatech.com
                </p>
              </div>
            </section>

            <div className="pt-8 border-t border-tech-grey/50 text-center">
              <Link 
                href="/" 
                className="inline-flex items-center text-tech-blue hover:text-tech-cyan font-exo2 uppercase text-sm tracking-wider transition-colors"
              >
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
