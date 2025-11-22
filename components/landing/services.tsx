"use client"

// Componente Services - Seção de serviços oferecidos pela empresa
// Responsável por: Exibir cards de serviços com ícones, títulos e descrições

import Link from "next/link"
import { motion } from "framer-motion"
import { Monitor, Cpu, Layers, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/landing/contact-modal"

// Array com os dados dos serviços oferecidos
// Cada serviço contém: ícone, título e descrição
const services = [
  {
    icon: Monitor,
    title: "Sites Institucionais",
    description: "Autoridade e credibilidade corporativa com design premium.",
  },
  {
    icon: Cpu,
    title: "Automações Inteligentes",
    description: "Processos automáticos de atendimento e vendas 24/7.",
  },
  {
    icon: Layers,
    title: "Soluções Customizadas",
    description: "Sistemas e funis sob medida para sua operação.",
  },
  {
    icon: BarChart,
    title: "Gestão de Tráfego",
    description: "Impulsionamento digital estratégico com gestor certificado.",
  },
]

export function Services() {
  return (
    // Seção de serviços com padding vertical e borda superior
    <section id="servicos" className="py-24 border-t border-tech-grey/30">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Cabeçalho da seção com título e linha decorativa */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-tech-white mb-4">SOLUÇÕES COMPLEMENTARES</h2>
          {/* Linha decorativa azul com efeito de brilho */}
          <div className="h-1 w-20 bg-tech-blue mx-auto rounded-full shadow-[0_0_10px_#0055FF]" />
        </div>

        {/* Grid de cards de serviços - 2 colunas no desktop, 1 no mobile */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Mapeia cada serviço e cria um card animado */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              // Animação de entrada: cards pares vêm da esquerda, ímpares da direita
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }} // Anima quando entra na viewport
              transition={{ delay: index * 0.1 }} // Delay escalonado para efeito cascata
              viewport={{ once: true }} // Anima apenas uma vez
              className="group p-8 rounded-lg bg-tech-grey/20 border border-tech-grey/50 hover:border-tech-blue/50 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-tech-grey/30 text-center md:text-left"
            >
              {/* Container do ícone com efeito hover */}
              <div className="p-4 rounded-lg bg-tech-black border border-tech-grey/50 group-hover:border-tech-blue/30 transition-colors flex-shrink-0">
                <service.icon className="w-8 h-8 text-tech-blue group-hover:text-tech-cyan transition-colors" />
              </div>
              {/* Conteúdo do card: título, descrição e botão */}
              <div className="flex-1">
                <h3 className="font-orbitron font-bold text-lg text-tech-white mb-2">{service.title}</h3>
                <p className="font-inter text-tech-offwhite/60 text-sm mb-4">{service.description}</p>
                {/* Botão de ação para consultar valor */}
                <Link href={`/obrigado?type=servico&servico=${encodeURIComponent(service.title)}`}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-tech-blue hover:text-tech-cyan hover:bg-transparent font-exo2 uppercase text-xs tracking-widest group-hover:underline underline-offset-4"
                  >
                    Consultar Valor
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
