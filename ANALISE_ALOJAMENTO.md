# Análise Técnica: Alojamento Next.js em Shared Hosting

## 📋 CONCLUSÃO DIRETA

**RESPOSTA: DEPENDE - Funciona APENAS se o shared hosting suportar aplicações Node.js persistentes com reverse proxy configurado. Caso contrário, NÃO funciona.**

**Recomendação imediata:** Converter para **static export (SSG)** - é a solução mais segura e compatível com shared hosting tradicional.

---

## 🔍 ANÁLISE DA ARQUITETURA ATUAL

### Stack Identificado

- **Next.js 15.4.8** (App Router)
- **React 19**
- **TypeScript/JavaScript** (JSX)
- **TailwindCSS 4.1.11**

### Componentes Críticos Analisados

#### ✅ Server Components (Requer Servidor Node.js)

- `src/app/layout.jsx` - Root layout com metadata
- `src/app/(main)/layout.jsx` - Layout aninhado
- `src/app/(main)/page.jsx` - Página principal
- **Impacto:** Requer servidor Next.js para renderização SSR

#### ✅ Client Components

- `src/components/Formulario.jsx` - Modal com iframe Google Forms
- `src/components/ui/*` - Componentes interativos
- **Impacto:** Não requer servidor (executa no browser)

#### ❌ API Routes

- **Não encontradas** - Não existe pasta `app/api/`
- **Impacto:** Não há endpoints que requeiram servidor

#### ❌ Server Actions

- **Não encontradas** - Nenhuma função com `'use server'`
- **Impacto:** Não há processamento server-side de formulários

#### ✅ Formulários

- Newsletter: Form HTML sem `action` (não funcional)
- Inscrição: Iframe Google Forms (não requer backend)
- **Impacto:** Não requer servidor Node.js

---

## 🎯 CENÁRIOS DE DEPLOYMENT

### Cenário 1: Next.js SSR Completo (Atual)

**Requisitos:**

- ✅ Servidor Node.js persistente (24/7)
- ✅ Processo `next start` em execução
- ✅ Reverse proxy (Nginx/Apache) → porta Node.js
- ✅ Gestão de processos (PM2, Passenger, Node App Manager)
- ✅ Porta dedicada (ex: 3000, 8080)

**Compatibilidade com Shared Hosting:**

- ❌ **NÃO FUNCIONA** na maioria dos shared hostings
- ⚠️ **FUNCIONA APENAS SE:**
  - O hosting suportar aplicações Node.js persistentes
  - Tiver reverse proxy configurado (Passenger, Node App Manager)
  - Permitir processos de longa duração
  - Não terminar processos por timeout/inatividade

### Cenário 2: Static Export (SSG)

**Requisitos:**

- ✅ Build time: `next build` + `next export` (ou `output: 'export'`)
- ✅ Servidor web estático (Apache/Nginx)
- ✅ Apenas ficheiros HTML/CSS/JS estáticos

**Compatibilidade com Shared Hosting:**

- ✅ **FUNCIONA** em qualquer shared hosting tradicional
- ✅ Compatível com cPanel/Apache
- ✅ Não requer Node.js no servidor
- ✅ Zero dependências de runtime

**Limitações:**

- ❌ Sem Server Components (apenas Client Components)
- ❌ Sem API Routes
- ❌ Sem Server Actions
- ❌ Sem ISR (Incremental Static Regeneration)
- ⚠️ Metadata dinâmica limitada

---

## ⚙️ REQUISITOS TÉCNICOS PARA SHARED HOSTING

### 1. Servidor Node.js Persistente

```
Requisito: Processo Node.js deve permanecer ativo 24/7
Problema: Shared hosting tipicamente:
  - Termina processos após timeout (5-30 min inatividade)
  - Não permite processos de longa duração
  - Limita CPU/RAM por processo
```

### 2. Reverse Proxy

```
Requisito: Nginx/Apache deve fazer proxy para porta Node.js
Exemplo:
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
  }
Problema: Shared hosting raramente permite configuração de proxy
```

### 3. Gestão de Processos

```
Requisito: Process manager (PM2, Passenger, etc.)
Problema: Shared hosting pode não permitir:
  - Instalação de PM2 globalmente
  - Acesso root/sudo para gestão de processos
  - Configuração de systemd services
```

### 4. Portas e Networking

```
Requisito: Porta dedicada (ex: 3000, 8080)
Problema: Shared hosting pode:
  - Bloquear portas não-standard
  - Não permitir binding em localhost
  - Ter firewall restritivo
```

---

## ⚠️ RISCOS REAIS EM SHARED HOSTING

### 1. Processos Terminados

```
Risco: ALTO
Causas:
  - Timeout por inatividade (5-30 minutos)
  - Limite de CPU excedido
  - Limite de RAM excedido (2GB pode não ser suficiente)
  - Políticas de "fair use" do hosting
Impacto: Website fica offline até restart manual
```

### 2. Limitações de Portas

```
Risco: MÉDIO
Causas:
  - Firewall bloqueia portas não-standard
  - Apenas portas 80/443 acessíveis externamente
  - Portas internas podem ser bloqueadas
Impacto: Aplicação não pode fazer bind na porta necessária
```

### 3. Ausência de Reverse Proxy

```
Risco: ALTO
Causas:
  - cPanel não permite configuração de proxy
  - Apache/Nginx configurado apenas para static files
  - Sem acesso a configuração de servidor web
Impacto: Impossível rotear tráfego para Node.js
```

### 4. Limitações de Recursos

```
Risco: MÉDIO-ALTO
Especificações do plano:
  - 2 vCPU: Pode ser suficiente para Next.js
  - 2 GB RAM: Limite apertado (Next.js usa ~200-500MB base)
  - Shared CPU: Pode ser throttled por outros sites
Impacto: Performance degradada, timeouts, crashes
```

---

## 📊 TABELA COMPARATIVA

| Critério              | Shared Hosting (SSR)  | Shared Hosting (SSG) | VPS (SSR)             | Plataforma Node (Vercel/Netlify) |
| --------------------- | --------------------- | -------------------- | --------------------- | -------------------------------- |
| **Compatibilidade**   | ⚠️ Depende do hosting | ✅ Universal         | ✅ Total              | ✅ Total                         |
| **Custo**             | 💰 Baixo (€5-15/mês)  | 💰 Baixo (€5-15/mês) | 💰 Médio (€10-30/mês) | 💰 Variável (€0-20/mês)          |
| **Configuração**      | ❌ Complexa/Limitada  | ✅ Simples           | ⚠️ Média              | ✅ Automática                    |
| **Performance SSR**   | ⚠️ Limitada           | ❌ N/A               | ✅ Boa                | ✅ Excelente                     |
| **Uptime**            | ⚠️ 90-95%             | ✅ 99%+              | ✅ 99%+               | ✅ 99.9%+                        |
| **Escalabilidade**    | ❌ Limitada           | ❌ Limitada          | ⚠️ Média              | ✅ Automática                    |
| **Manutenção**        | ⚠️ Manual             | ✅ Mínima            | ⚠️ Manual             | ✅ Automática                    |
| **Server Components** | ⚠️ Se suportado       | ❌ Não               | ✅ Sim                | ✅ Sim                           |
| **API Routes**        | ⚠️ Se suportado       | ❌ Não               | ✅ Sim                | ✅ Sim                           |
| **SSL/HTTPS**         | ✅ Incluído           | ✅ Incluído          | ⚠️ Configurar         | ✅ Automático                    |
| **CDN**               | ❌ Não                | ❌ Não               | ⚠️ Opcional           | ✅ Incluído                      |

---

## ✅ CHECKLIST PARA SUPORTE DO HOSTING

Envie estas perguntas ao suporte técnico do hosting:

### Processos Node.js

- [ ] **P1:** O plano permite aplicações Node.js que permanecem ativas 24/7?
- [ ] **P2:** Existe limite de tempo de execução para processos Node.js? Se sim, qual?
- [ ] **P3:** Processos Node.js são terminados após período de inatividade?
- [ ] **P4:** Qual o gestor de processos disponível? (PM2, Passenger, Node App Manager, outro?)

### Reverse Proxy

- [ ] **P5:** É possível configurar reverse proxy (Nginx/Apache) para uma aplicação Node.js?
- [ ] **P6:** Existe interface (cPanel) para configurar Node.js apps ou é necessário configurar manualmente?
- [ ] **P7:** Qual a porta padrão para aplicações Node.js? (ex: 3000, 8080, variável)

### Recursos e Limitações

- [ ] **P8:** Qual o limite de RAM por processo Node.js?
- [ ] **P9:** Existe limite de CPU por processo? Qual?
- [ ] **P10:** Processos são throttled se excederem recursos?
- [ ] **P11:** Existe log de processos terminados? Onde consultar?

### Networking

- [ ] **P12:** Posso fazer bind em localhost em portas não-standard? (ex: 3000, 8080)
- [ ] **P13:** Existe firewall que bloqueia portas internas?
- [ ] **P14:** Acesso SSH está disponível? Com que permissões?

### Build e Deploy

- [ ] **P15:** Posso executar `npm install` e `npm run build` no servidor?
- [ ] **P16:** Existe Node.js instalado? Qual versão? (Next.js 15 requer Node.js 18.17+)
- [ ] **P17:** Posso configurar variáveis de ambiente? Onde?

### Documentação

- [ ] **P18:** Existe documentação específica para deploy de aplicações Next.js?
- [ ] **P19:** Existem exemplos/tutoriais de clientes que usam Next.js com sucesso?

---

## 🎯 RECOMENDAÇÕES TÉCNICAS

### Opção 1: Static Export (RECOMENDADO para Shared Hosting)

**Porquê:** Compatível com qualquer shared hosting, zero dependências de runtime.

**Implementação:**

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necessário para static export
  },
}

module.exports = nextConfig
```

**Build:**

```bash
npm run build
# Gera pasta 'out/' com ficheiros estáticos
# Upload da pasta 'out/' para public_html/
```

**Vantagens:**

- ✅ Funciona em qualquer shared hosting
- ✅ Performance excelente (CDN-ready)
- ✅ Zero custos de servidor Node.js
- ✅ Uptime 99%+ (apenas servidor web estático)

**Desvantagens:**

- ❌ Perde Server Components (mas pode usar Client Components)
- ❌ Metadata estática apenas
- ❌ Sem API Routes (mas não usa atualmente)

**Adequação ao projeto:** ✅ **PERFEITO** - O projeto não usa funcionalidades que requeiram servidor.

### Opção 2: VPS (Se precisar de SSR)

**Especificações mínimas recomendadas:**

- 2 vCPU
- 2-4 GB RAM
- 20 GB SSD
- Ubuntu 22.04 LTS

**Stack sugerida:**

- Node.js 20 LTS
- PM2 (gestão de processos)
- Nginx (reverse proxy)
- Certbot (SSL automático)

**Custo:** €10-30/mês (DigitalOcean, Linode, Hetzner)

### Opção 3: Plataforma Node.js Dedicada

**Opções:**

- **Vercel** (recomendado para Next.js)
  - Plano Hobby: Grátis (limitações)
  - Plano Pro: $20/mês
  - Deploy automático, CDN, SSL
- **Netlify**
  - Plano Starter: Grátis
  - Plano Pro: $19/mês
- **Railway**
  - Pay-as-you-go: ~$5-10/mês

**Vantagens:**

- ✅ Otimizado para Next.js
- ✅ Deploy automático (Git push)
- ✅ CDN global incluído
- ✅ SSL automático
- ✅ Zero configuração

---

## 🔧 PLANO DE AÇÃO RECOMENDADO

### Fase 1: Verificação Imediata

1. Enviar checklist ao suporte do hosting
2. Aguardar respostas técnicas
3. Avaliar se suporta Node.js persistente

### Fase 2A: Se NÃO suportar Node.js persistente

1. Converter para static export
2. Testar build localmente
3. Deploy para shared hosting
4. ✅ **Solução implementada**

### Fase 2B: Se suportar Node.js persistente

1. Configurar reverse proxy
2. Instalar PM2 (se permitido)
3. Configurar variáveis de ambiente
4. Deploy e monitorização
5. ⚠️ **Solução funcional mas com riscos**

### Fase 3: Alternativa (se necessário)

1. Avaliar VPS ou plataforma Node.js
2. Migrar se shared hosting não for viável
3. Configurar CI/CD para deploy automático

---

## 📝 CONCLUSÃO FINAL

**Para o seu projeto específico:**

1. **Arquitetura atual:** Next.js 15 App Router com Server Components
2. **Funcionalidades server-side:** Apenas renderização SSR (metadata, layouts)
3. **Funcionalidades que requerem servidor:** Nenhuma (sem API routes, sem server actions)

**Recomendação técnica:**

✅ **CONVERTER PARA STATIC EXPORT** - É a solução mais adequada porque:

- O projeto não usa funcionalidades que requeiram servidor
- Compatível com qualquer shared hosting
- Performance superior (apenas ficheiros estáticos)
- Custo zero adicional
- Manutenção mínima

**Se precisar manter SSR no futuro:**

- Migrar para VPS ou plataforma Node.js dedicada
- Shared hosting não é adequado para aplicações Node.js persistentes

---

## 📚 REFERÊNCIAS TÉCNICAS

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nginx Reverse Proxy](https://nginx.org/en/docs/http/ngx_http_proxy_module.html)

---

**Documento gerado em:** 2025-01-27  
**Versão Next.js analisada:** 15.4.8  
**Arquitetura:** App Router
