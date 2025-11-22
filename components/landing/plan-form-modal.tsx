"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, TrendingUp, Users, DollarSign } from "lucide-react"

interface PlanFormModalProps {
  trigger: React.ReactNode
  planName: string
  planPrice: string
}

export function PlanFormModal({ trigger, planName, planPrice }: PlanFormModalProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Campos específicos por plano
  const getPlanFields = () => {
    switch (planName.toUpperCase()) {
      case "START":
        return {
          title: `Contratar Plano ${planName}`,
          description: "Preencha seus dados para iniciar sua máquina de vendas",
          fields: ["nome", "email", "telefone", "empresa"],
        }
      case "PRO":
        return {
          title: `Contratar Plano ${planName}`,
          description: "Vamos entender melhor seu negócio para personalizar sua solução",
          fields: ["nome", "email", "telefone", "empresa", "cargo", "faturamento", "funcionarios"],
        }
      case "PERFORMANCE":
        return {
          title: `Contratar Plano ${planName}`,
          description: "Informações detalhadas para criar sua estratégia de alta performance",
          fields: ["nome", "email", "telefone", "empresa", "cargo", "faturamento", "funcionarios", "setor", "prazo"],
        }
      default:
        return {
          title: `Contratar Plano ${planName}`,
          description: "Preencha seus dados para iniciar",
          fields: ["nome", "email", "telefone", "empresa"],
        }
    }
  }

  const planFields = getPlanFields()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        ...Object.fromEntries(formData.entries()),
        plano: planName,
        planPrice: planPrice,
        tipo: `plano-${planName.toLowerCase()}`,
        origem: `Formulário de Contratação - Plano ${planName}`,
      }

      // Enviar para API que envia ao Discord
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erro ao enviar formulário')
      }

      setSubmitted(true)
      
      setTimeout(() => {
        setIsOpen(false)
        router.push(`/obrigado?type=plano&plano=${planName}`)
      }, 2000)
    } catch (err) {
      console.error('Erro ao enviar formulário:', err)
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário. Tente novamente.')
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-tech-black via-[#0A0E1A] to-tech-black border-tech-blue/50 text-white sm:max-w-[520px] p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header com gradiente */}
        <div className="bg-gradient-to-r from-tech-blue/20 via-tech-cyan/10 to-tech-blue/20 border-b border-tech-blue/30 p-5 sticky top-0 z-10">
          <DialogHeader>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-1.5 rounded-lg bg-tech-blue/20 border border-tech-blue/30">
                <TrendingUp className="w-4 h-4 text-tech-cyan" />
              </div>
              <DialogTitle className="text-xl font-orbitron text-tech-white">
                {planFields.title}
              </DialogTitle>
            </div>
            <DialogDescription className="text-tech-offwhite/70 font-inter text-xs">
              {planFields.description}
            </DialogDescription>
            <div className="mt-2 text-tech-blue font-exo2 font-bold text-lg">
              R$ {planPrice}
            </div>
          </DialogHeader>
        </div>

        <div className="p-5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome - sempre presente */}
              <div className="space-y-1.5">
                <Label htmlFor="nome" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-tech-blue">*</span>
                  Nome Completo
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  required
                  className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white placeholder:text-tech-offwhite/40 h-10 text-sm transition-all"
                />
              </div>

              {/* Email - sempre presente */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-tech-blue">*</span>
                  Email Corporativo
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@empresa.com"
                  required
                  className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white placeholder:text-tech-offwhite/40 h-10 text-sm transition-all"
                />
              </div>

              {/* Telefone - sempre presente */}
              <div className="space-y-1.5">
                <Label htmlFor="telefone" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-tech-blue">*</span>
                  WhatsApp
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  required
                  className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white placeholder:text-tech-offwhite/40 h-10 text-sm transition-all"
                />
              </div>

              {/* Empresa - sempre presente */}
              <div className="space-y-1.5">
                <Label htmlFor="empresa" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-tech-blue">*</span>
                  Empresa
                </Label>
                <Input
                  id="empresa"
                  name="empresa"
                  placeholder="Nome da sua empresa"
                  required
                  className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white placeholder:text-tech-offwhite/40 h-10 text-sm transition-all"
                />
              </div>

              {/* Cargo - PRO e PERFORMANCE */}
              {(planName.toUpperCase() === "PRO" || planName.toUpperCase() === "PERFORMANCE") && (
                <div className="space-y-1.5">
                  <Label htmlFor="cargo" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                    <span className="text-tech-blue">*</span>
                    Cargo
                  </Label>
                  <Input
                    id="cargo"
                    name="cargo"
                    placeholder="Ex: CEO, Diretor, Gerente"
                    required
                    className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white placeholder:text-tech-offwhite/40 h-10 text-sm transition-all"
                  />
                </div>
              )}

              {/* Faturamento Mensal - PRO e PERFORMANCE */}
              {(planName.toUpperCase() === "PRO" || planName.toUpperCase() === "PERFORMANCE") && (
                <div className="space-y-1.5">
                  <Label htmlFor="faturamento" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                    <DollarSign className="w-3 h-3 text-tech-blue" />
                    <span className="text-tech-blue">*</span>
                    Faturamento Mensal Aproximado
                  </Label>
                  <Select name="faturamento" required>
                    <SelectTrigger className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white h-10 text-sm">
                      <SelectValue placeholder="Selecione a faixa" />
                    </SelectTrigger>
                    <SelectContent className="bg-tech-black border-tech-blue/30 text-white">
                      <SelectItem value="ate-50k">Até R$ 50.000</SelectItem>
                      <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                      <SelectItem value="100k-250k">R$ 100.000 - R$ 250.000</SelectItem>
                      <SelectItem value="250k-500k">R$ 250.000 - R$ 500.000</SelectItem>
                      <SelectItem value="500k-1m">R$ 500.000 - R$ 1.000.000</SelectItem>
                      <SelectItem value="acima-1m">Acima de R$ 1.000.000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Número de Funcionários - PRO e PERFORMANCE */}
              {(planName.toUpperCase() === "PRO" || planName.toUpperCase() === "PERFORMANCE") && (
                <div className="space-y-1.5">
                  <Label htmlFor="funcionarios" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-tech-blue" />
                    <span className="text-tech-blue">*</span>
                    Número de Funcionários
                  </Label>
                  <Select name="funcionarios" required>
                    <SelectTrigger className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white h-10 text-sm">
                      <SelectValue placeholder="Selecione a quantidade" />
                    </SelectTrigger>
                    <SelectContent className="bg-tech-black border-tech-blue/30 text-white">
                      <SelectItem value="1-5">1 a 5 funcionários</SelectItem>
                      <SelectItem value="6-10">6 a 10 funcionários</SelectItem>
                      <SelectItem value="11-20">11 a 20 funcionários</SelectItem>
                      <SelectItem value="21-50">21 a 50 funcionários</SelectItem>
                      <SelectItem value="51-100">51 a 100 funcionários</SelectItem>
                      <SelectItem value="acima-100">Acima de 100 funcionários</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Setor - apenas PERFORMANCE */}
              {planName.toUpperCase() === "PERFORMANCE" && (
                <div className="space-y-1.5">
                  <Label htmlFor="setor" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                    <span className="text-tech-blue">*</span>
                    Setor de Atuação
                  </Label>
                  <Select name="setor" required>
                    <SelectTrigger className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white h-10 text-sm">
                      <SelectValue placeholder="Selecione o setor" />
                    </SelectTrigger>
                    <SelectContent className="bg-tech-black border-tech-blue/30 text-white">
                      <SelectItem value="ecommerce">E-commerce / Varejo Online</SelectItem>
                      <SelectItem value="servicos">Serviços Profissionais</SelectItem>
                      <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="imobiliaria">Imobiliária</SelectItem>
                      <SelectItem value="automotivo">Automotivo</SelectItem>
                      <SelectItem value="alimentacao">Alimentação e Bebidas</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia e Software</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="consultoria">Consultoria</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Prazo Desejado - apenas PERFORMANCE */}
              {planName.toUpperCase() === "PERFORMANCE" && (
                <div className="space-y-1.5">
                  <Label htmlFor="prazo" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                    <span className="text-tech-blue">*</span>
                    Prazo Desejado para Início
                  </Label>
                  <Select name="prazo" required>
                    <SelectTrigger className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white h-10 text-sm">
                      <SelectValue placeholder="Selecione o prazo" />
                    </SelectTrigger>
                    <SelectContent className="bg-tech-black border-tech-blue/30 text-white">
                      <SelectItem value="imediato">Imediato (até 7 dias)</SelectItem>
                      <SelectItem value="15-dias">Até 15 dias</SelectItem>
                      <SelectItem value="30-dias">Até 30 dias</SelectItem>
                      <SelectItem value="60-dias">Até 60 dias</SelectItem>
                      <SelectItem value="flexivel">Flexível</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Observações - apenas PERFORMANCE */}
              {planName.toUpperCase() === "PERFORMANCE" && (
                <div className="space-y-1.5">
                  <Label htmlFor="observacoes" className="text-tech-white font-exo2 text-xs font-semibold">
                    Observações ou Requisitos Especiais
                  </Label>
                  <textarea
                    id="observacoes"
                    name="observacoes"
                    placeholder="Descreva necessidades específicas, integrações necessárias, etc."
                    rows={3}
                    className="w-full bg-tech-grey/20 border border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white placeholder:text-tech-offwhite/40 text-sm rounded-md px-3 py-2 transition-all resize-none"
                  />
                </div>
              )}

              {/* Mensagem de erro */}
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 font-inter text-xs">{error}</p>
                </div>
              )}

              {/* Botão de submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-tech-blue to-tech-cyan hover:from-blue-600 hover:to-cyan-500 text-white font-exo2 font-bold uppercase tracking-wider h-10 text-sm shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_30px_rgba(0,85,255,0.5)] transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : `Confirmar Contratação do Plano ${planName}`}
              </Button>

              <p className="text-tech-offwhite/40 font-inter text-xs text-center">
                Ao enviar, você concorda com nossa{" "}
                <a href="/politica-de-privacidade" className="text-tech-blue hover:text-tech-cyan underline">
                  Política de Privacidade
                </a>
              </p>
            </form>
          ) : (
            <div className="py-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-tech-blue/20 to-tech-cyan/20 border border-tech-blue/30 mb-4">
                <CheckCircle2 className="w-8 h-8 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-tech-white mb-2">
                Solicitação Enviada!
              </h3>
              <p className="text-tech-offwhite/70 font-inter text-sm mb-1">
                Nossa equipe analisará sua solicitação e entrará em contato em breve.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

