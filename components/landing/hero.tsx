"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/landing/contact-modal"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-tech-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight text-tech-white mb-6"
        >
          SUA EMPRESA NÃO PRECISA DE MAIS UM SITE.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-cyan">
            PRECISA DE UMA MÁQUINA DE FATURAMENTO.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-tech-offwhite/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Na ALPLATECH, não vendemos apenas código. Vendemos estratégia, inteligência e performance. Transformamos
          cliques em receita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactModal
            trigger={
              <Button
                size="lg"
                className="bg-tech-blue hover:bg-blue-600 text-white font-exo2 uppercase tracking-wider px-8 py-6 text-lg shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_30px_rgba(0,85,255,0.5)] transition-all duration-300 border border-transparent hover:border-tech-cyan cursor-pointer"
              >
                QUERO MINHA MÁQUINA DE VENDAS
              </Button>
            }
          />
        </motion.div>
      </div>
    </section>
  )
}
