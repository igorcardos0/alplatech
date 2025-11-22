import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { FileText, AlertTriangle, Scale, Lock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Termos de Uso | ALPLATECH",
  description: "Termos e condições de uso do site da ALPLATECH.",
}

export default function TermosUso() {
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
              <FileText className="w-8 h-8 text-tech-cyan" />
            </div>
            <h1 className="font-orbitron font-bold text-3xl md:text-4xl text-tech-white mb-4">
              TERMOS DE USO
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
                <AlertTriangle className="w-5 h-5" />
                1. ACEITAÇÃO DOS TERMOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Ao acessar e utilizar o site da ALPLATECH, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site ou serviços.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou utilizam o site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                2. DESCRIÇÃO DOS SERVIÇOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                A ALPLATECH oferece serviços de:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Desenvolvimento de sites institucionais e landing pages</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Automações inteligentes para processos de negócio</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Soluções customizadas de software</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Gestão de tráfego digital</span>
                </li>
              </ul>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed pt-2">
                Os serviços específicos e condições comerciais serão definidos em contratos ou propostas comerciais separados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                3. USO PERMITIDO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Você concorda em usar o site apenas para fins legais e de acordo com estes Termos. Você concorda em NÃO:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Violar qualquer lei ou regulamento aplicável</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Infringir direitos de propriedade intelectual de terceiros</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Transmitir qualquer conteúdo malicioso, vírus ou código prejudicial</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Tentar obter acesso não autorizado a qualquer parte do site</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Realizar engenharia reversa ou copiar qualquer parte do site</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Usar o site de forma que possa danificar, desabilitar ou sobrecarregar nossos servidores</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Lock className="w-5 h-5" />
                4. PROPRIEDADE INTELECTUAL
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Todo o conteúdo presente neste site, incluindo mas não limitado a textos, gráficos, logos, ícones, imagens, 
                downloads digitais e compilações de dados, é propriedade da ALPLATECH ou de seus fornecedores de conteúdo e 
                está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, 
                republicar, baixar, armazenar ou transmitir qualquer material do site sem o consentimento prévio e por escrito da ALPLATECH.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue flex items-center gap-2">
                <Scale className="w-5 h-5" />
                5. LIMITAÇÃO DE RESPONSABILIDADE
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Na medida máxima permitida por lei, a ALPLATECH não será responsável por:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar o site</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Perda de dados, receita, lucros ou oportunidades de negócio</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Interrupções ou falhas no serviço, erros, omissões ou deficiências no site</span>
                </li>
                <li className="font-inter text-tech-offwhite/80 flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Conteúdo de sites de terceiros vinculados ao nosso site</span>
                </li>
              </ul>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed pt-2">
                O site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                6. LINKS PARA SITES DE TERCEIROS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Nosso site pode conter links para sites de terceiros que não são controlados ou operados pela ALPLATECH. 
                Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas 
                de quaisquer sites de terceiros.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Você reconhece e concorda que a ALPLATECH não será responsável por qualquer dano ou perda causada ou supostamente 
                causada pelo uso de qualquer conteúdo, bens ou serviços disponíveis em sites de terceiros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                7. MODIFICAÇÕES DOS TERMOS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos de Uso a qualquer momento. 
                Se uma revisão for material, tentaremos fornecer pelo menos 30 dias de aviso antes de quaisquer novos termos entrarem em vigor.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                O que constitui uma mudança material será determinado a nosso exclusivo critério. Ao continuar a acessar ou usar nosso 
                site após essas revisões entrarem em vigor, você concorda em estar vinculado aos termos revisados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                8. LEI APLICÁVEL E FORO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, 
                sem considerar seus conflitos de disposições de lei.
              </p>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Qualquer disputa relacionada a estes termos será submetida exclusivamente ao foro da comarca de São Paulo, SP, 
                renunciando as partes a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                9. DISPOSIÇÕES GERAIS
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Se qualquer disposição destes Termos for considerada inválida ou inexequível, as disposições restantes permanecerão 
                em pleno vigor e efeito. Estes Termos constituem o acordo completo entre você e a ALPLATECH em relação ao uso do site, 
                substituindo todos os acordos anteriores.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron font-bold text-xl text-tech-blue">
                10. CONTATO
              </h2>
              <p className="font-inter text-tech-offwhite/80 leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-tech-grey/30 border border-tech-blue/20 rounded-lg p-6 space-y-2">
                <p className="font-inter text-tech-offwhite">
                  <strong className="text-tech-blue">ALPLATECH</strong>
                </p>
                <p className="font-inter text-tech-offwhite/80">
                  E-mail: <a href="mailto:contato@alplatech.com" className="text-tech-blue hover:text-tech-cyan underline">contato@alplatech.com</a>
                </p>
                <p className="font-inter text-tech-offwhite/80">
                  CNPJ: 00.000.000/0001-00
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
