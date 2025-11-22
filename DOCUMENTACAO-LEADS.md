# 📋 Documentação - Sistema de Leads para Discord

Esta documentação explica como configurar e usar o sistema de envio de leads para o Discord da ALPLATECH.

---

## 🎯 O que este sistema faz?

Quando um visitante preenche um formulário no site (contato, planos, etc.), os dados são automaticamente enviados para um canal do Discord chamado **"leads-do-site"** em formato de mensagem formatada.

---

## 🛠️ Ferramentas Necessárias

### 1. **Editor de Código**
- **Visual Studio Code** (recomendado)
- Ou qualquer editor de texto (VSCode, Sublime Text, Notepad++, etc.)

### 2. **Acesso ao Discord**
- Conta no Discord
- Acesso ao servidor onde está o canal "leads-do-site"
- Permissão para criar Webhooks (geralmente Admin ou permissão de "Gerenciar Webhooks")

### 3. **Terminal/Console**
- Terminal do Windows (CMD ou PowerShell)
- Ou Terminal do Linux/Mac
- Ou o terminal integrado do VS Code

---

## 📝 Passo a Passo de Configuração

### **PASSO 1: Obter o Webhook URL do Discord** ✅

Você já possui o Webhook URL:
```
https://discord.com/api/webhooks/1441804896079708261/bwDxOxnav_SlfKGyZTTEaLqrv7YM046i0alKy5gUZC8Bu2O6BouiHsjqdMThXnv2Wwsb
```

**⚠️ IMPORTANTE:** Mantenha este URL em segredo! Ele permite enviar mensagens ao seu canal do Discord.

#### Como criar um novo Webhook (se necessário):

1. Abra o **Discord** no navegador ou app
2. Entre no servidor onde está o canal **"leads-do-site"**
3. Clique com botão direito no canal **"leads-do-site"**
4. Selecione **"Editar Canal"** ou **"Configurações do Canal"**
5. Vá na aba **"Integrações"** (ou **"Webhooks"**)
6. Clique em **"Criar Webhook"** ou **"Novo Webhook"**
7. Configure:
   - **Nome:** `ALPLATECH Leads Bot` (ou qualquer nome)
   - **Canal:** `leads-do-site` (já deve estar selecionado)
8. Clique em **"Copiar URL do Webhook"**
9. Guarde esta URL em um local seguro

---

### **PASSO 2: Criar o Arquivo de Variáveis de Ambiente**

#### O que fazer:

1. Abra o projeto no **Visual Studio Code** (ou seu editor)
2. Na raiz do projeto, crie um arquivo chamado **`.env.local`**
   - **Importante:** O arquivo deve começar com ponto (.) e não ter extensão
   - Exemplo: `.env.local` ✅ (correto)
   - NÃO: `env.local` ❌ ou `.env.local.txt` ❌

3. Dentro do arquivo `.env.local`, cole exatamente isto:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1441804896079708261/bwDxOxnav_SlfKGyZTTEaLqrv7YM046i0alKy5gUZC8Bu2O6BouiHsjqdMThXnv2Wwsb
```

#### Como criar o arquivo:

**No VS Code:**
- Clique com botão direito na pasta raiz do projeto
- Selecione "New File"
- Digite `.env.local` (com o ponto no início)
- Cole o conteúdo acima
- Salve (Ctrl+S ou Cmd+S)

**No Windows (Explorer):**
- Abra o Explorador de Arquivos
- Vá até a pasta do projeto
- Crie um novo arquivo de texto
- Renomeie para `.env.local` (incluindo o ponto)
- Se o Windows perguntar sobre extensão, remova qualquer extensão

**No Linux/Mac (Terminal):**
```bash
cd /caminho/do/projeto
touch .env.local
nano .env.local  # ou use: code .env.local
```

---

### **PASSO 3: Verificar se o Arquivo Está Correto**

#### Checklist:

- [ ] O arquivo se chama exatamente `.env.local` (com ponto no início)
- [ ] O arquivo está na **raiz do projeto** (mesmo nível que `package.json`)
- [ ] Dentro do arquivo há uma linha com `DISCORD_WEBHOOK_URL=`
- [ ] O URL do webhook está completo (começa com `https://discord.com/api/webhooks/`)
- [ ] Não há espaços extras ou quebras de linha desnecessárias

#### Estrutura correta do projeto:

```
alplatech-landing-page/
├── .env.local          ← SEU ARQUIVO AQUI
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts
├── components/
├── package.json
└── ... outros arquivos
```

---

### **PASSO 4: Testar a Integração**

#### Opção A: Teste Manual (Recomendado)

1. Abra o **Terminal** na pasta do projeto
2. Execute:
   ```bash
   npm run dev
   ```
3. Abra o navegador em `http://localhost:3000`
4. Preencha um formulário de contato
5. Verifique se aparece uma mensagem no canal **"leads-do-site"** do Discord

#### Opção B: Teste via API Direta

1. Abra o **Terminal**
2. Execute este comando (substitua SEU_TOKEN se necessário):

```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Teste",
    "email": "teste@exemplo.com",
    "telefone": "(11) 99999-9999",
    "empresa": "Empresa Teste",
    "tipo": "teste"
  }'
```

3. Verifique o Discord

---

## 📊 Campos dos Formulários

### **Formulário de Contato Geral**
Os seguintes campos são coletados e enviados ao Discord:

| Campo | Nome no Código | Obrigatório | Descrição |
|-------|----------------|-------------|-----------|
| Nome Completo | `name` | ✅ Sim | Nome do lead |
| Cargo | `cargo` | ✅ Sim | Cargo/função do lead |
| Empresa | `empresa` | ✅ Sim | Nome da empresa |
| Email | `email` | ✅ Sim | Email corporativo |
| Objetivo | `objetivo` | ✅ Sim | Objetivo principal do lead |

---

### **Formulário de Planos (START, PRO, PERFORMANCE)**

#### **Todos os Planos:**
| Campo | Nome no Código | Obrigatório |
|-------|----------------|-------------|
| Nome Completo | `nome` | ✅ Sim |
| Email | `email` | ✅ Sim |
| Telefone | `telefone` | ✅ Sim |
| Empresa | `empresa` | ✅ Sim |

#### **Apenas PRO e PERFORMANCE:**
| Campo | Nome no Código | Obrigatório |
|-------|----------------|-------------|
| Cargo | `cargo` | ✅ Sim |
| Faturamento Mensal | `faturamento` | ✅ Sim |
| Número de Funcionários | `funcionarios` | ✅ Sim |

#### **Apenas PERFORMANCE:**
| Campo | Nome no Código | Obrigatório |
|-------|----------------|-------------|
| Setor de Atuação | `setor` | ✅ Sim |
| Prazo Desejado | `prazo` | ✅ Sim |
| Observações | `observacoes` | ❌ Não |

---

## 📨 Formato da Mensagem no Discord

Quando um lead é enviado, a mensagem no Discord terá este formato:

```
🎯 **NOVO LEAD RECEBIDO!**

👤 **Nome:** João Silva
📧 **Email:** joao@empresa.com
📱 **Telefone:** (11) 99999-9999
🏢 **Empresa:** Empresa XYZ
💼 **Cargo:** CEO

📌 **Tipo de Lead:** plano-START

📦 **Plano Interessado:** START
💰 **Preço do Plano:** R$ 790,90

⏰ **Recebido em:** 15/01/2025 14:30
```

---

## ⚙️ Arquivos Modificados/Criados

### **Novos Arquivos:**
1. `app/api/leads/route.ts` - API Route que recebe leads e envia ao Discord
2. `.env.local` - Arquivo de variáveis de ambiente (você precisa criar)
3. `.env.local.example` - Arquivo de exemplo (já criado)

### **Arquivos Modificados:**
1. `components/landing/contact-modal.tsx` - Formulário de contato atualizado
2. `components/landing/plan-form-modal.tsx` - Formulário de planos atualizado

---

## 🔧 Solução de Problemas

### **Problema 1: Leads não aparecem no Discord**

**Soluções:**
1. Verifique se o arquivo `.env.local` existe e está na raiz do projeto
2. Verifique se o `DISCORD_WEBHOOK_URL` está correto (sem espaços, com URL completo)
3. Verifique os logs no terminal ao enviar um formulário
4. Verifique se o servidor de desenvolvimento está rodando (`npm run dev`)
5. Teste o webhook manualmente (veja Passo 4)

---

### **Problema 2: Erro "Webhook não configurado"**

**Soluções:**
1. Certifique-se de que criou o arquivo `.env.local` (não `.env`)
2. Reinicie o servidor de desenvolvimento após criar o arquivo
3. Verifique se não há espaços extras no arquivo `.env.local`
4. Verifique se o arquivo está na raiz do projeto (mesmo nível que `package.json`)

---

### **Problema 3: Erro 401 ou 403 do Discord**

**Soluções:**
1. O webhook pode ter sido deletado ou revogado
2. Crie um novo webhook no Discord e atualize o `.env.local`
3. Verifique se o webhook ainda existe no canal

---

### **Problema 4: Mensagens não formatadas corretamente**

**Soluções:**
1. O formato da mensagem está no arquivo `app/api/leads/route.ts`
2. Você pode editar a função `formatDiscordMessage()` para personalizar
3. Reinicie o servidor após fazer alterações

---

## 🚀 Deploy em Produção

### **Vercel (Recomendado):**

1. No painel da Vercel, vá em **Settings > Environment Variables**
2. Adicione uma nova variável:
   - **Name:** `DISCORD_WEBHOOK_URL`
   - **Value:** `https://discord.com/api/webhooks/1441804896079708261/bwDxOxnav_SlfKGyZTTEaLqrv7YM046i0alKy5gUZC8Bu2O6BouiHsjqdMThXnv2Wwsb`
   - **Environment:** Production (e Preview se quiser)
3. Faça um novo deploy

### **Outras Plataformas:**

Adicione a variável `DISCORD_WEBHOOK_URL` nas configurações de variáveis de ambiente da sua plataforma.

---

## 🔒 Segurança

### **⚠️ IMPORTANTE:**

1. **NUNCA** compartilhe o webhook URL publicamente
2. **NUNCA** faça commit do arquivo `.env.local` no Git
3. O arquivo `.env.local` já está no `.gitignore` (não será enviado)
4. Mantenha o webhook URL seguro

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. Verifique esta documentação novamente
2. Verifique os logs do terminal/console
3. Verifique os logs do Discord (se disponível)
4. Teste o webhook manualmente usando curl ou Postman

---

## ✅ Checklist Final

Antes de considerar tudo configurado, verifique:

- [ ] Arquivo `.env.local` criado na raiz do projeto
- [ ] `DISCORD_WEBHOOK_URL` configurado corretamente
- [ ] Servidor rodando (`npm run dev`)
- [ ] Testei enviando um formulário
- [ ] Mensagem apareceu no Discord
- [ ] Variável de ambiente configurada na plataforma de deploy (se aplicável)

---

**🎉 Pronto! Agora seus leads serão enviados automaticamente para o Discord!**

