# ⚡ Setup Rápido - Sistema de Leads para Discord

## ✅ O que já foi feito:

- ✅ API Route criada (`app/api/leads/route.ts`)
- ✅ Formulário de contato atualizado
- ✅ Formulários de planos atualizados
- ✅ Documentação completa criada

## 🔧 O que VOCÊ precisa fazer:

### **PASSO 1: Criar arquivo `.env.local`**

1. Abra o **Visual Studio Code** na pasta do projeto
2. Na **raiz do projeto** (mesmo nível que `package.json`), crie um arquivo chamado **`.env.local`**
   - ⚠️ **Importante:** O nome deve começar com ponto (.) e não ter extensão
3. Dentro do arquivo, cole isto:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1441804896079708261/bwDxOxnav_SlfKGyZTTEaLqrv7YM046i0alKy5gUZC8Bu2O6BouiHsjqdMThXnv2Wwsb
```

### **PASSO 2: Testar**

1. No terminal, execute:
   ```bash
   npm run dev
   ```

2. Abra `http://localhost:3000` no navegador

3. Preencha um formulário de contato

4. Verifique se a mensagem apareceu no canal **"leads-do-site"** do Discord!

---

## 📚 Documentação Completa

Para mais detalhes, consulte: **`DOCUMENTACAO-LEADS.md`**

---

## 🎯 Resumo

| O que fazer | Ferramenta | Tempo |
|-------------|------------|-------|
| Criar arquivo `.env.local` | VS Code | 2 min |
| Testar formulário | Navegador | 1 min |

**Total: ~3 minutos** ⏱️

---

**🚀 Pronto para usar!**

