"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, CheckCircle2 } from "lucide-react"

interface ContactModalProps {
  trigger: React.ReactNode
}

export function ContactModal({ trigger }: ContactModalProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name') as string,
        cargo: formData.get('cargo') as string,
        empresa: formData.get('empresa') as string,
        email: formData.get('email') as string,
        objetivo: formData.get('objetivo') as string,
        tipo: 'formulario',
        origem: 'Formulário de Contato Principal',
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
      
      // Redireciona para página de obrigado após 2 segundos
      setTimeout(() => {
        setIsOpen(false)
        router.push("/obrigado?type=formulario")
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
      <DialogContent className="bg-gradient-to-br from-tech-black via-[#0A0E1A] to-tech-black border-tech-blue/50 text-white sm:max-w-[480px] p-0 overflow-hidden">
        {/* Header com gradiente */}
        <div className="bg-gradient-to-r from-tech-blue/20 via-tech-cyan/10 to-tech-blue/20 border-b border-tech-blue/30 p-5">
          <DialogHeader>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-1.5 rounded-lg bg-tech-blue/20 border border-tech-blue/30">
                <Sparkles className="w-4 h-4 text-tech-cyan" />
              </div>
              <DialogTitle className="text-xl font-orbitron text-tech-white">
                Solicite Sua Análise Gratuita
              </DialogTitle>
            </div>
            <DialogDescription className="text-tech-offwhite/70 font-inter text-xs">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-tech-blue">*</span>
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Digite seu nome completo"
                  required
                  className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white placeholder:text-tech-offwhite/40 h-10 text-sm transition-all"
                />
              </div>

              {/* Cargo */}
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

              {/* Empresa */}
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

              {/* Email */}
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

              {/* Objetivo Principal */}
              <div className="space-y-1.5">
                <Label htmlFor="objetivo" className="text-tech-white font-exo2 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-tech-blue">*</span>
                  Objetivo Principal
                </Label>
                <Select name="objetivo" required>
                  <SelectTrigger className="bg-tech-grey/20 border-tech-grey/50 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 text-white h-10 text-sm">
                    <SelectValue placeholder="Selecione seu objetivo" />
                  </SelectTrigger>
                  <SelectContent className="bg-tech-black border-tech-blue/30 text-white">
                    <SelectItem value="aumentar-vendas">Aumentar Vendas e Receita</SelectItem>
                    <SelectItem value="gerar-leads">Gerar Mais Leads Qualificados</SelectItem>
                    <SelectItem value="posicionamento-marca">Posicionamento de Marca</SelectItem>
                    <SelectItem value="sistema-personalizado">Sistema ou Plataforma Personalizada</SelectItem>
                    <SelectItem value="automatizar-processos">Automatizar Processos de Vendas</SelectItem>
                    <SelectItem value="melhorar-conversao">Melhorar Taxa de Conversão</SelectItem>
                    <SelectItem value="lancamento-produto">Lançamento de Produto/Serviço</SelectItem>
                    <SelectItem value="expansao-mercado">Expansão para Novos Mercados</SelectItem>
                    <SelectItem value="gestao-trafego">Gestão de Tráfego Pago</SelectItem>
                    <SelectItem value="consultoria-estrategica">Consultoria Estratégica Digital</SelectItem>
                    <SelectItem value="outro">Outro objetivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

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
                {isLoading ? 'Enviando...' : 'Solicitar Análise Gratuita'}
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
                Recebido com Sucesso!
              </h3>
              <p className="text-tech-offwhite/70 font-inter text-sm mb-1">
                Nossa equipe analisará seu perfil e entrará em contato em até 24 horas.
              </p>
              <p className="text-tech-offwhite/50 font-inter text-xs">
                Verifique sua caixa de entrada e spam.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
