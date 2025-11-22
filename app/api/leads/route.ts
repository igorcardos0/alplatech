import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  // Dados básicos
  nome?: string
  name?: string
  email: string
  telefone?: string
  whatsapp?: string
  
  // Dados da empresa
  empresa?: string
  cargo?: string
  setor?: string
  faturamento?: string
  funcionarios?: string
  
  // Dados do lead
  plano?: string
  planPrice?: string
  servico?: string
  objetivo?: string
  prazo?: string
  
  // Metadados
  tipo?: string
  origem?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
    
    if (!discordWebhookUrl) {
      console.error('DISCORD_WEBHOOK_URL não configurado')
      return NextResponse.json(
        { error: 'Webhook do Discord não configurado' },
        { status: 500 }
      )
    }

    // Formatar mensagem para Discord
    const message = formatDiscordMessage(data)
    
    // Enviar para Discord
    const response = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: message,
        username: 'ALPLATECH Leads Bot',
        avatar_url: undefined, // Pode adicionar URL de avatar se quiser
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Erro ao enviar para Discord:', errorText)
      throw new Error(`Discord API retornou erro: ${response.status}`)
    }

    return NextResponse.json({ 
      success: true,
      message: 'Lead enviado com sucesso para o Discord' 
    })
  } catch (error) {
    console.error('Erro ao processar lead:', error)
    return NextResponse.json(
      { 
        error: 'Erro ao processar solicitação',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    )
  }
}

function formatDiscordMessage(data: LeadData): string {
  const nome = data.nome || data.name || 'Não informado'
  const email = data.email || 'Não informado'
  const telefone = data.telefone || data.whatsapp || 'Não informado'
  const empresa = data.empresa || 'Não informado'
  const cargo = data.cargo || 'Não informado'
  const tipo = data.tipo || data.plano || data.servico || 'Formulário de Contato'
  
  let message = `🎯 **NOVO LEAD RECEBIDO!**\n\n`
  
  // Informações básicas
  message += `👤 **Nome:** ${nome}\n`
  message += `📧 **Email:** ${email}\n`
  message += `📱 **Telefone:** ${telefone}\n`
  message += `🏢 **Empresa:** ${empresa}\n`
  
  if (cargo && cargo !== 'Não informado') {
    message += `💼 **Cargo:** ${cargo}\n`
  }
  
  // Tipo de lead
  message += `\n📌 **Tipo de Lead:** ${tipo}\n`
  
  // Informações específicas do plano
  if (data.plano) {
    message += `📦 **Plano Interessado:** ${data.plano.toUpperCase()}\n`
    if (data.planPrice) {
      message += `💰 **Preço do Plano:** R$ ${data.planPrice}\n`
    }
  }
  
  // Informações específicas do serviço
  if (data.servico) {
    message += `🔧 **Serviço de Interesse:** ${data.servico}\n`
  }
  
  // Objetivo
  if (data.objetivo) {
    message += `🎯 **Objetivo:** ${formatObjetivo(data.objetivo)}\n`
  }
  
  // Informações adicionais (para planos PRO e PERFORMANCE)
  if (data.setor) {
    message += `🏭 **Setor:** ${data.setor}\n`
  }
  
  if (data.faturamento) {
    message += `💵 **Faturamento Mensal:** ${data.faturamento}\n`
  }
  
  if (data.funcionarios) {
    message += `👥 **Número de Funcionários:** ${data.funcionarios}\n`
  }
  
  if (data.prazo) {
    message += `⏰ **Prazo:** ${data.prazo}\n`
  }
  
  // Origem
  if (data.origem) {
    message += `📍 **Origem:** ${data.origem}\n`
  }
  
  // Data e hora
  const agora = new Date()
  message += `\n⏰ **Recebido em:** ${agora.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  })}`
  
  return message
}

function formatObjetivo(objetivo: string): string {
  const objetivos: Record<string, string> = {
    'aumentar-vendas': 'Aumentar Vendas e Receita',
    'gerar-leads': 'Gerar Mais Leads Qualificados',
    'posicionamento-marca': 'Posicionamento de Marca',
    'sistema-personalizado': 'Sistema ou Plataforma Personalizada',
    'automatizar-processos': 'Automatizar Processos de Vendas',
    'melhorar-conversao': 'Melhorar Taxa de Conversão',
    'lancamento-produto': 'Lançamento de Produto/Serviço',
    'expansao-mercado': 'Expansão para Novos Mercados',
    'gestao-trafego': 'Gestão de Tráfego Pago',
    'consultoria-estrategica': 'Consultoria Estratégica Digital',
    'outro': 'Outro objetivo',
  }
  
  return objetivos[objetivo] || objetivo
}

