import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Shield, FileText, Lock, Mail, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "LGPD - Lei Geral de Proteção de Dados | ALPLATECH",
  description: "Informações sobre como a ALPLATECH trata seus dados pessoais em conformidade com a LGPD.",
}

export default function LGPD() {
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
              LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)
            </h1>
            <div className="h-1 w-20 bg-tech-blue mx-auto rounded-full shadow-[0_0_10px_#0055FF]" />
            <p className="text-tech-offwhite/60 font-inter text-sm mt-4">
              Conformidade com a Lei nº 13.709/2018
            </p>
          </div>

          {/* Content */}
          <div className="bg-tech-black/60 backdrop-blur-sm border border-tech-grey/50 rounded-2xl p-8 md:p-12 space-y-8">
            
            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <FileText className="w-5 h-5" />
                O QUE É A LGPD?
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                A <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong> estabelece regras sobre coleta, armazenamento, 
                tratamento e compartilhamento de dados pessoais no Brasil. A LGPD visa proteger os direitos fundamentais de liberdade 
                e de privacidade dos titulares de dados.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                A ALPLATECH está comprometida em cumprir integralmente todas as disposições da LGPD, garantindo transparência e 
                segurança no tratamento dos dados pessoais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                NOSSOS COMPROMISSOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Em conformidade com a LGPD, comprometemo-nos a:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Tratar seus dados pessoais com transparência e segurança</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Coletar apenas dados necessários para as finalidades declaradas</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Garantir a precisão e atualização dos dados</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Proteger os dados contra acesso não autorizado ou situações acidentais ou ilícitas</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Permitir o exercício de seus direitos como titular de dados</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                BASE LEGAL PARA TRATAMENTO DE DADOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                O tratamento de dados pessoais pela ALPLATECH é fundamentado nas seguintes bases legais da LGPD:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Consentimento:</strong> Quando você fornece seu consentimento explícito para o tratamento de dados</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Execução de Contrato:</strong> Quando necessário para execução de contrato ou procedimentos preliminares</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Legítimo Interesse:</strong> Para melhorar nossos serviços e realizar análises estatísticas</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span><strong>Obrigação Legal:</strong> Para cumprir obrigações legais ou regulatórias</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                DADOS PESSOAIS COLETADOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Coletamos os seguintes tipos de dados pessoais:
              </p>
              <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6 space-y-3">
                <div>
                  <p className="font-inter text-tech-white font-semibold mb-2">Dados de Identificação:</p>
                  <p className="font-inter text-tech-offwhite/80 text-sm">Nome, e-mail, telefone, WhatsApp</p>
                </div>
                <div>
                  <p className="font-inter text-tech-white font-semibold mb-2">Dados de Navegação:</p>
                  <p className="font-inter text-tech-offwhite/80 text-sm">Endereço IP, cookies, páginas visitadas</p>
                </div>
                <div>
                  <p className="font-inter text-tech-white font-semibold mb-2">Dados de Comunicação:</p>
                  <p className="font-inter text-tech-offwhite/80 text-sm">Informações compartilhadas em formulários e mensagens</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                FINALIDADES DO TRATAMENTO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Utilizamos seus dados pessoais para:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Prestação de serviços de desenvolvimento web e soluções tecnológicas</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Comunicação comercial e envio de propostas</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Suporte ao cliente e atendimento</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Melhoria de produtos e serviços</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Cumprimento de obrigações legais</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Lock className="w-5 h-5" />
                SEUS DIREITOS COMO TITULAR DE DADOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Conforme a LGPD, você possui os seguintes direitos:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">1. Acesso</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Conhecer quais dados temos sobre você</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">2. Correção</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Atualizar dados incompletos ou inexatos</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">3. Anonimização</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Tornar dados anônimos quando possível</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">4. Portabilidade</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Receber seus dados em formato estruturado</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">5. Eliminação</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Solicitar exclusão de dados desnecessários</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">6. Revogação</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Retirar consentimento a qualquer momento</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">7. Informação</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Obter informações sobre compartilhamento</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4">
                  <p className="font-inter text-tech-white font-semibold mb-1">8. Oposição</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Opor-se ao tratamento em certas situações</p>
                </div>
                <div className="bg-tech-grey/20 border border-tech-blue/20 rounded-lg p-4 md:col-span-2">
                  <p className="font-inter text-tech-white font-semibold mb-1">9. Revisão de Decisões Automatizadas</p>
                  <p className="font-inter text-tech-offwhite/70 text-sm">Solicitar revisão de decisões tomadas unicamente por processamento automatizado</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                COMO EXERCER SEUS DIREITOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Para exercer qualquer um dos direitos mencionados acima, entre em contato conosco através do e-mail: 
                <a href="mailto:privacidade@alplatech.com" className="text-tech-blue hover:text-tech-cyan underline ml-1">privacidade@alplatech.com</a>
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Responderemos sua solicitação no prazo máximo de 15 (quinze) dias, conforme previsto na LGPD.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                COMPARTILHAMENTO COM TERCEIROS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Podemos compartilhar seus dados pessoais apenas nas seguintes situações:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Com prestadores de serviços que nos auxiliam na operação (com obrigação de confidencialidade)</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Quando exigido por lei ou ordem judicial</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Com seu consentimento expresso</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                MEDIDAS DE SEGURANÇA
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Criptografia SSL/TLS para transmissão de dados</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Controle de acesso restrito aos dados</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Monitoramento regular de segurança</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Backups regulares e planos de recuperação</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Mail className="w-5 h-5" />
                ENCARREGADO DE DADOS (DPO)
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Nomeamos um Encarregado de Dados (Data Protection Officer - DPO) para garantir a conformidade com a LGPD e 
                atender suas solicitações relacionadas à proteção de dados.
              </p>
              <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6 space-y-2">
                <p className="font-inter text-tech-white">
                  <strong className="text-tech-blue">Encarregado de Dados (DPO)</strong>
                </p>
                <p className="font-inter text-tech-offwhite/80">
                  E-mail: <a href="mailto:privacidade@alplatech.com" className="text-tech-blue hover:text-tech-cyan underline">privacidade@alplatech.com</a>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                RECLAMAÇÕES
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Se você acredita que seus dados pessoais foram tratados de forma inadequada, você tem o direito de apresentar 
                uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD):
              </p>
              <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6 space-y-2">
                <p className="font-inter text-tech-white">
                  <strong className="text-tech-blue">ANPD - Autoridade Nacional de Proteção de Dados</strong>
                </p>
                <p className="font-inter text-tech-offwhite/80 text-sm">
                  Site: <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-tech-blue hover:text-tech-cyan underline">www.gov.br/anpd</a>
                </p>
                <p className="font-inter text-tech-offwhite/80 text-sm">
                  E-mail: <a href="mailto:privacidade@anpd.gov.br" className="text-tech-blue hover:text-tech-cyan underline">privacidade@anpd.gov.br</a>
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
