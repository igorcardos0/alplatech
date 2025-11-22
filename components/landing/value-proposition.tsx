"use client"

// Componente ValueProposition - Seção de proposta de valor
// Responsável por: Destacar os principais diferenciais da empresa em cards com ícones

import { motion } from "framer-motion"
import { Search, Target, TrendingUp } from "lucide-react"

// Array com os diferenciais/valores da empresa
// Cada item contém: ícone, título e descrição
const features = [
  {
    icon: Search,
    title: "Pesquisa Profunda",
    description: "Análise de top players e inteligência de mercado para posicionar sua marca à frente.",
  },
  {
    icon: Target,
    title: "Estratégia Real",
    description: "Copywriting persuasivo que ataca as dores do cliente e gera conexão imediata.",
  },
  {
    icon: TrendingUp,
    title: "Conversão Pura",
    description: "Estruturas validadas de vendas focadas em transformar visitantes em compradores.",
  },
]

export function ValueProposition() {
  return (
    // Seção de proposta de valor com padding vertical
    <section className="py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-tech-white mb-4">
            NÃO DEIXE DINHEIRO NA MESA
          </h2>
          {/* Linha decorativa azul com efeito de brilho */}
          <div className="h-1 w-20 bg-tech-blue mx-auto rounded-full shadow-[0_0_10px_#0055FF]" />
        </div>

        {/* Grid de cards de diferenciais - 3 colunas no desktop, 1 no mobile */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mapeia cada diferencial e cria um card animado */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              // Animação de entrada com delay escalonado
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-tech-grey/30 border border-tech-grey hover:border-tech-blue/50 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,85,255,0.1)] text-center md:text-left"
            >
              {/* Container do ícone com efeito hover */}
              <div className="w-16 h-16 rounded-lg bg-tech-grey/50 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:bg-tech-blue/20 transition-colors">
                <feature.icon className="w-8 h-8 text-tech-blue group-hover:text-tech-cyan transition-colors" />
              </div>
              {/* Título e descrição do diferencial */}
              <h3 className="font-orbitron font-bold text-xl text-tech-white mb-4">{feature.title}</h3>
              <p className="font-inter text-tech-offwhite/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
