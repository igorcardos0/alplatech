"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

function ObrigadoContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)
  const type = searchParams.get("type")
  const plano = searchParams.get("plano")
  const servico = searchParams.get("servico")

  // URL do WhatsApp
  const whatsappUrl = "https://wa.me/5511999999999?text="

  // Mensagens personalizadas
  const getMessage = () => {
    if (type === "whatsapp") {
      return {
        title: "Obrigado pelo seu interesse!",
        description: "Você será redirecionado para o WhatsApp em instantes.",
        whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da ALPLATECH.",
      }
    } else if (type === "plano" && plano) {
      const planoNome = plano.toUpperCase()
      return {
        title: `Excelente escolha! Plano ${planoNome}`,
        description: `Você selecionou o plano ${planoNome}. Nossa equipe entrará em contato para finalizar sua contratação.`,
        whatsappMessage: `Olá! Tenho interesse no plano ${planoNome} da ALPLATECH.`,
      }
    } else if (type === "servico" && servico) {
      const servicoDecoded = decodeURIComponent(servico)
      return {
        title: `Interesse em ${servicoDecoded}`,
        description: `Você demonstrou interesse em ${servicoDecoded}. Nossa equipe preparará uma proposta personalizada para você.`,
        whatsappMessage: `Olá! Tenho interesse em ${servicoDecoded} da ALPLATECH.`,
      }
    } else if (type === "formulario") {
      return {
        title: "Formulário enviado com sucesso!",
        description: "Recebemos suas informações. Nossa equipe analisará seu perfil e entrará em contato em até 24 horas.",
        whatsappMessage: "Olá! Acabei de enviar o formulário de contato e gostaria de saber mais sobre os serviços da ALPLATECH.",
      }
    }
    return {
      title: "Obrigado pelo seu interesse!",
      description: "Nossa equipe entrará em contato em breve.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da ALPLATECH.",
    }
  }

  const message = getMessage()

  useEffect(() => {
    if (type === "whatsapp" && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (type === "whatsapp" && countdown === 0) {
      const encodedMessage = encodeURIComponent(message.whatsappMessage)
      window.location.href = `${whatsappUrl}${encodedMessage}`
    }
  }, [countdown, type, whatsappUrl, message.whatsappMessage])

  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-black via-[#0A0E1A] to-tech-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[600px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-tech-black/80 backdrop-blur-sm border border-tech-blue/30 rounded-2xl p-8 md:p-12"
        >
          {/* Ícone de sucesso */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-tech-blue/20 to-tech-cyan/20 border border-tech-blue/30 mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-tech-cyan" />
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-orbitron font-bold text-tech-white mb-4"
          >
            {message.title}
          </motion.h1>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-tech-offwhite/80 font-inter text-lg mb-8 leading-relaxed"
          >
            {message.description}
          </motion.p>

          {/* Contagem regressiva para WhatsApp */}
          {type === "whatsapp" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-tech-grey/20 border border-tech-blue/30 rounded-lg px-6 py-4">
                <span className="text-tech-offwhite font-inter text-sm">Redirecionando em</span>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-blue/20 border border-tech-blue/30">
                  <span className="text-tech-cyan font-orbitron font-bold text-xl">{countdown}</span>
                </div>
                <span className="text-tech-offwhite font-inter text-sm">segundos</span>
              </div>
            </motion.div>
          )}

          {/* Botão de ação */}
          {type === "whatsapp" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={`${whatsappUrl}${encodeURIComponent(message.whatsappMessage)}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-tech-blue to-tech-cyan hover:from-blue-600 hover:to-cyan-500 text-white font-exo2 font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_30px_rgba(0,85,255,0.5)]"
              >
                Ir para WhatsApp Agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={`${whatsappUrl}${encodeURIComponent(message.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-tech-blue to-tech-cyan hover:from-blue-600 hover:to-cyan-500 text-white font-exo2 font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_30px_rgba(0,85,255,0.5)]"
              >
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center border border-tech-grey hover:border-tech-blue text-tech-white hover:bg-tech-blue/10 font-exo2 uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300"
              >
                Voltar ao Início
              </Link>
            </motion.div>
          )}

          {/* Link para voltar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <Link
              href="/"
              className="text-tech-offwhite/60 hover:text-tech-blue transition-colors font-inter text-sm"
            >
              ← Voltar para a página inicial
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-tech-black via-[#0A0E1A] to-tech-black flex items-center justify-center">
        <div className="text-tech-white font-orbitron">Carregando...</div>
      </div>
    }>
      <ObrigadoContent />
    </Suspense>
  )
}
