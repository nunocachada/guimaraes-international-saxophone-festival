# Análise do Problema de Deployment via GitHub

## 🔍 Problema Identificado

Quando fazes push para o GitHub:
- ✅ Os ficheiros são copiados via FTP corretamente
- ❌ A build não funciona - o site não atualiza
- ✅ Quando fazes `npm run build` localmente e atualizas manualmente a pasta `.next` no cPanel, funciona

## 📋 Situação Atual

### Workflow GitHub Actions (`.github/workflows/node.js.yml`)

O workflow atual:
1. ✅ Faz checkout do código
2. ✅ Instala dependências (`npm install`)
3. ✅ Faz build (`npm run build`) - **gera a pasta `.next`**
4. ❌ Remove `node_modules` e `.git`
5. ⚠️ Faz deploy via FTP para `app/`

### Problemas Identificados

#### 1. **Pasta `.next` não está a ser enviada corretamente**

A pasta `.next` está no `.gitignore` (correto), mas:
- O build gera a pasta `.next` no GitHub Actions
- O workflow remove `node_modules` mas **não remove `.next` antes do deploy**
- A pasta `.next` deveria ser enviada via FTP, mas pode não estar a ser incluída

#### 2. **Estrutura de deployment no cPanel**

O workflow envia para `server-dir: app/`, mas:
- Se o cPanel espera os ficheiros na raiz ou noutra estrutura
- Se o servidor não está a servir a pasta `.next` corretamente
- Se há conflito entre ficheiros antigos e novos

#### 3. **Next.js precisa de `node_modules` em produção (dependendo do modo)**

Se estás a usar:
- **Standalone output**: Precisa de `node_modules` (apenas production dependencies)
- **Static export**: Não precisa de `node_modules`, mas precisa da pasta `out/`
- **Default build**: Precisa de `.next` + `node_modules` (production)

---

## 🔧 Soluções

### Solução 1: Usar Standalone Output (RECOMENDADO)

Next.js pode gerar uma build standalone que inclui apenas o necessário.

**Vantagens:**
- ✅ Inclui apenas production dependencies
- ✅ Estrutura otimizada
- ✅ Menor tamanho de upload

**Implementação:**

1. **Atualizar `next.config.mjs`:**

```javascript
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'standalone', // Adicionar esta linha
  images: {
    unoptimized: true,
  },
}
```

2. **Atualizar workflow `.github/workflows/node.js.yml`:**

```yaml
name: Deploy Next.js to FTP Server (Portfolio Folder)
on:
  push:
    branches:
      - main
jobs:
  deploy:
    name: Deploy to FTP
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22.18.0'
          cache: 'npm'

      - name: Install dependencies and build
        run: |
          npm ci
          npm run build

      - name: Prepare Standalone Deployment
        run: |
          # A pasta .next/standalone contém tudo o necessário
          # Copiar ficheiros estáticos (public, etc.)
          cp -r public .next/standalone/
          cp -r .next/static .next/standalone/.next/
          
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: app/
          local-dir: .next/standalone/
          exclude: |
            **/.git*
            **/node_modules/.cache
```

**Nota:** Com standalone, precisas de configurar o servidor para executar `node server.js` da pasta standalone.

---

### Solução 2: Static Export (MAIS SIMPLES para cPanel)

Se o cPanel não suporta Node.js, usa static export.

**Vantagens:**
- ✅ Não precisa de Node.js no servidor
- ✅ Apenas ficheiros HTML/CSS/JS estáticos
- ✅ Funciona em qualquer hosting

**Desvantagens:**
- ⚠️ Perde funcionalidades server-side (API routes, ISR, etc.)
- ⚠️ Todas as páginas são pré-renderizadas

**Implementação:**

1. **Atualizar `next.config.mjs`:**

```javascript
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export', // Já está comentado, descomentar
  images: {
    unoptimized: true, // Já está configurado
  },
}
```

2. **Atualizar workflow:**

```yaml
name: Deploy Next.js to FTP Server (Portfolio Folder)
on:
  push:
    branches:
      - main
jobs:
  deploy:
    name: Deploy to FTP
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22.18.0'
          cache: 'npm'

      - name: Install dependencies and build
        run: |
          npm ci
          npm run build

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: app/
          local-dir: out/  # Static export gera pasta 'out'
          exclude: |
            **/.git*
            **/.next
            **/node_modules
```

**Nota:** Com static export, a pasta `out/` contém todos os ficheiros estáticos prontos para servir.

---

### Solução 3: Deploy Completo (Incluir `.next` + `node_modules` production)

Se precisas de funcionalidades server-side e o cPanel suporta Node.js.

**Implementação:**

```yaml
name: Deploy Next.js to FTP Server (Portfolio Folder)
on:
  push:
    branches:
      - main
jobs:
  deploy:
    name: Deploy to FTP
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22.18.0'
          cache: 'npm'

      - name: Install dependencies and build
        run: |
          npm ci
          npm run build

      - name: Install production dependencies only
        run: |
          npm ci --production
          # Manter apenas production dependencies

      - name: Clean up before deploy
        run: |
          rm -rf .git
          rm -rf .github
          # NÃO remover node_modules (precisa para produção)
          # NÃO remover .next (precisa para produção)

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: app/
          exclude: |
            **/.git*
            **/.github
            **/node_modules/.cache
            **/*.md
```

**Nota:** Isto envia tudo, incluindo `.next` e `node_modules` (production). O servidor precisa de executar `npm start` ou configurar PM2/process manager.

---

## 🎯 Recomendação Específica para o Teu Caso

### Análise do Teu Projeto

Olhando para o teu `next.config.mjs`:
- `output: 'export'` está comentado
- Usas MDX (pode funcionar com static export)
- Não vejo API routes no projeto
- Usas `images: { unoptimized: true }` (compatível com static export)

### Recomendação: **Solução 2 (Static Export)**

**Porquê:**
1. ✅ Mais simples para cPanel (apenas ficheiros estáticos)
2. ✅ Não precisa de Node.js no servidor
3. ✅ O teu projeto parece ser principalmente estático
4. ✅ Já tens a configuração quase pronta

**Passos:**

1. **Descomentar `output: 'export'` no `next.config.mjs`**
2. **Atualizar workflow para enviar pasta `out/`**
3. **Testar localmente:** `npm run build` e verificar pasta `out/`
4. **Fazer push e verificar se funciona**

---

## 🔍 Debugging - Verificar o que está a acontecer

### 1. Verificar o que o workflow está a enviar

Adiciona este step antes do deploy:

```yaml
- name: List files to be deployed
  run: |
    echo "=== Files in root ==="
    ls -la
    echo "=== Files in .next ==="
    ls -la .next/ || echo ".next não existe"
    echo "=== Files in out ==="
    ls -la out/ || echo "out não existe"
```

### 2. Verificar logs do GitHub Actions

- Vai a: `https://github.com/[seu-repo]/actions`
- Clica no último workflow
- Verifica os logs de cada step

### 3. Verificar estrutura no servidor (via FTP)

Depois do deploy, verifica no cPanel/FTP:
- Existe a pasta `.next`?
- Existe a pasta `out`?
- Existem os ficheiros `package.json` e `next.config.mjs`?
- Qual é a estrutura de pastas no servidor?

---

## 📝 Checklist de Resolução

- [ ] Decidir qual solução usar (Static Export recomendado)
- [ ] Atualizar `next.config.mjs`
- [ ] Atualizar `.github/workflows/node.js.yml`
- [ ] Testar build localmente (`npm run build`)
- [ ] Verificar pasta gerada (`out/` ou `.next/standalone/`)
- [ ] Fazer push para GitHub
- [ ] Verificar logs do GitHub Actions
- [ ] Verificar estrutura no servidor via FTP
- [ ] Testar site no browser
- [ ] Verificar se atualiza corretamente

---

## 🚨 Problemas Comuns

### Problema: "Pasta .next não encontrada no servidor"
**Solução:** O workflow não está a incluir `.next` no deploy. Usa uma das soluções acima.

### Problema: "Module not found" no servidor
**Solução:** Precisa de `node_modules` (production). Usa Solução 3 ou Standalone.

### Problema: "Site mostra versão antiga"
**Solução:** 
- Limpar cache do browser
- Verificar se o servidor tem cache (CDN, Cloudflare, etc.)
- Verificar se o deploy realmente substituiu os ficheiros antigos

### Problema: "Build funciona localmente mas não no GitHub"
**Solução:**
- Verificar versão do Node.js (workflow usa 22.18.0)
- Verificar se há variáveis de ambiente necessárias
- Verificar logs do GitHub Actions para erros

---

## 📚 Recursos

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js Standalone Output](https://nextjs.org/docs/pages/api-reference/next-config-js/output#standalone)
- [FTP Deploy Action](https://github.com/SamKirkland/FTP-Deploy-Action)

---

**Data da Análise**: Janeiro 2025  
**Next.js Version**: 15.4.8  
**Problema**: Build não atualiza via GitHub, mas funciona manualmente

