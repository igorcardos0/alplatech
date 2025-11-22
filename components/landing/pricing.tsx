"use client"

// Componente Pricing - Seção de planos e preços
// Responsável por: Exibir cards de planos com preços, features e destaque para plano popular

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlanFormModal } from "@/components/landing/plan-form-modal"
import { cn } from "@/lib/utils"

// Array com os dados dos planos disponíveis
// Cada plano contém: nome, preço atual, preço antigo (riscado), se é popular, descrição e lista de features
const plans = [
  {
    name: "START",
    price: "790,90",
    oldPrice: "1.300",
    title: "🚀 START: O Essencial para Começar a Vender Online",
    description: "Ideal para quem precisa de uma presença digital profissional, rápida e com baixo investimento, focada em gerar seus primeiros contatos e vendas.",
    subtitle: "Este é o seu ponto de partida turbo. Entregamos uma Landing Page direta, linda e funcional, que transforma visitantes em clientes potenciais.",
    features: [
      {
        title: "Landing Page (4 Seções)",
        description: "O esqueleto de vendas perfeito para apresentar sua oferta de forma clara.",
      },
      {
        title: "Layout Minimalista",
        description: "Design limpo, profissional e focado no que realmente importa: a conversão.",
      },
      {
        title: "Integração WhatsApp",
        description: "Seu cliente a um clique de falar com você, acelerando o fechamento de vendas.",
      },
      {
        title: "Entrega Rápida",
        description: "Sua página no ar em tempo recorde para você não perder oportunidades.",
      },
    ],
  },
  {
    name: "PRO",
    price: "1.390,90",
    oldPrice: "2.100",
    popular: true, // Plano destacado como "Mais Vendido"
    title: "🔥 PRO: Sua Máquina de Vendas Completa",
    description: "Para quem busca mais resultados, com uma página robusta, que educa, convence e quebra objeções, construída com base em estratégia e linguagem persuasiva.",
    subtitle: "Suba de nível com uma Landing Page desenhada para dominar o seu mercado. Não é apenas um site, é uma ferramenta de vendas completa.",
    features: [
      {
        title: "8 Seções Estratégicas",
        description: "Uma narrativa de vendas completa que leva o cliente do interesse à ação.",
      },
      {
        title: "Pesquisa de Mercado",
        description: "Sua página criada com base no que os melhores concorrentes estão fazendo de certo.",
      },
      {
        title: "Copywriting Profissional",
        description: "Textos otimizados para persuadir e vender mais (você não precisa se preocupar com o que escrever).",
      },
      {
        title: "Instalação de Pixel/Tag",
        description: "Sua página pronta para o rastreamento e otimização de campanhas de tráfego pago (Facebook/Google Ads).",
      },
      {
        title: "Otimização de Velocidade",
        description: "Carregamento ultrarrápido para não perder vendas por lentidão.",
      },
    ],
  },
  {
    name: "PERFORMANCE",
    price: "2.490,90",
    oldPrice: "3.300",
    title: "💎 PERFORMANCE: Estratégia de Alto Impacto e Conversão",
    description: "A solução definitiva para negócios que fazem tráfego pago e precisam de um funil completo para alta performance e crescimento exponencial.",
    subtitle: "Este plano é para quem leva a sério a otimização de resultados. Entregamos um Funil de Vendas completo com múltiplas páginas, pronto para rodar testes e otimizar cada etapa.",
    features: [
      {
        title: "3 Páginas (Captura/Oferta/Remarketing)",
        description: "Um funil de vendas completo, pronto para atrair, vender e recuperar clientes perdidos.",
      },
      {
        title: "Automação CRM",
        description: "Conectamos sua página ao seu sistema de gestão para você não perder nenhum contato de vista.",
      },
      {
        title: "Dashboard & Analytics",
        description: "Você terá uma visão clara dos seus números para saber exatamente o que está funcionando.",
      },
      {
        title: "Teste A/B",
        description: "Criamos variações para descobrir qual página vende mais rápido e com o menor custo.",
      },
      {
        title: "Consultoria Estratégica",
        description: "Nosso suporte especializado para alinhar sua página com seus objetivos de negócio e anúncios.",
      },
    ],
  },
]

export function Pricing() {
  return (
    // Seção de planos com padrão de fundo hexagonal
    <section id="planos" className="py-24 relative overflow-hidden">
      {/* Padrão de fundo hexagonal decorativo com baixa opacidade */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDBsMTAgMTB2MTBMMTAgMjAgMCAxMFYweiIgZmlsbD0iIzFBMUYyRSIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')]"></div>

      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-tech-white mb-4">
            PLANOS QUE NÃO DEIXAM DINHEIRO NA MESA
          </h2>
          <p className="text-tech-offwhite/60 font-inter">Escolha a potência da sua máquina de vendas</p>
        </div>

        {/* Grid de cards de planos - 3 colunas no desktop, 1 no mobile */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Mapeia cada plano e cria um card */}
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              // Animação de entrada com delay escalonado
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-8 rounded-xl border transition-all duration-300 flex flex-col",
                // Se for o plano popular, aplica estilos especiais (destaque, altura maior, posição elevada)
                plan.popular
                  ? "bg-tech-grey/40 border-tech-blue shadow-[0_0_40px_rgba(0,85,255,0.15)] md:-mt-8 md:mb-8 z-10 min-h-[700px] max-h-[750px]"
                  : "bg-tech-grey/20 border-tech-grey hover:border-tech-grey/80 min-h-[650px] max-h-[700px]",
              )}
            >
              {/* Badge "Mais Vendido" para o plano popular */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tech-blue text-white px-4 py-1 rounded-full text-sm font-exo2 font-bold uppercase tracking-wide shadow-lg">
                  Mais Vendido
                </div>
              )}

              {/* Cabeçalho do card: nome do plano e preços */}
              <div className="mb-6 text-center md:text-left">
                <h3 className="font-orbitron font-bold text-xl text-tech-white mb-3">{plan.title || plan.name}</h3>
                <p className="text-tech-offwhite/70 font-inter text-xs mb-3 leading-relaxed">{plan.description}</p>
                {/* Preço antigo riscado */}
                <div className="flex items-baseline gap-2 mb-1 justify-center md:justify-start">
                  <span className="text-tech-offwhite/50 line-through text-sm">R$ {plan.oldPrice}</span>
                </div>
                {/* Preço atual destacado */}
                <div className="flex items-baseline gap-1 justify-center md:justify-start">
                  <span className="text-tech-offwhite/60 text-lg">R$</span>
                  <span className="text-3xl md:text-4xl font-bold text-white font-exo2">{plan.price}</span>
                </div>
              </div>

              {/* Lista de features do plano com ícones de check e descrições */}
              <ul className="space-y-3 mb-8 flex-1 overflow-y-auto">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-tech-blue shrink-0 mt-1" />
                    <div className="flex-1 text-center md:text-left">
                      <span className="font-exo2 font-semibold text-tech-white text-xs block mb-0.5">
                        {typeof feature === "string" ? feature : feature.title}
                      </span>
                      {typeof feature === "object" && feature.description && (
                        <span className="font-inter text-tech-offwhite/60 text-xs leading-relaxed block">
                          {feature.description}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Botão de seleção do plano com formulário personalizado */}
              {/* Estilo diferente para o plano popular (mais destacado) */}
              <PlanFormModal
                planName={plan.name}
                planPrice={plan.price}
                trigger={
                  <Button
                    className={cn(
                      "w-full font-exo2 uppercase tracking-wide transition-all duration-300",
                      plan.popular
                        ? "bg-tech-blue hover:bg-blue-600 text-white shadow-[0_0_20px_rgba(0,85,255,0.2)] hover:shadow-[0_0_30px_rgba(0,85,255,0.4)]"
                        : "bg-transparent border border-tech-grey hover:border-tech-blue text-tech-white hover:bg-tech-blue/10",
                    )}
                  >
                    Selecionar Plano
                  </Button>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
