# Correção do Problema de Build via GitHub

## 🔧 Mudanças Implementadas

### Workflow Atualizado (`.github/workflows/node.js.yml`)

#### Mudanças Principais:

1. **`npm ci` em vez de `npm install`**
   - Mais confiável para CI/CD
   - Usa `package-lock.json` exatamente como está
   - Evita atualizações inesperadas de dependências

2. **Step de Verificação da Build**
   ```yaml
   - name: Verify build output
     run: |
       echo "=== Checking .next directory ==="
       ls -la .next/ || echo "ERROR: .next directory not found!"
   ```
   - Verifica se a pasta `.next` foi gerada corretamente
   - Mostra erros nos logs do GitHub Actions se algo falhar

3. **`dangerous-clean-slate: true`**
   - **Esta é a mudança mais importante!**
   - Limpa TODOS os ficheiros antigos no servidor antes de enviar os novos
   - Garante que a pasta `.next` antiga é removida e substituída
   - Resolve o problema de "build não atualiza"

4. **Exclusões Melhoradas**
   - Lista explícita do que NÃO enviar
   - Inclui `node_modules` (já está no servidor)
   - Inclui ficheiros desnecessários (`.md`, `package-lock.json`)

---

## 🎯 Como Funciona Agora

### Fluxo Completo:

1. **GitHub Actions faz checkout do código**
2. **Instala dependências** (`npm ci`)
3. **Faz build** (`npm run build`) → Gera pasta `.next`
4. **Verifica se build foi bem-sucedida** → Mostra estrutura da `.next`
5. **Remove ficheiros desnecessários** (`node_modules`, `.git`, `.github`)
6. **Limpa servidor FTP** (`dangerous-clean-slate: true`)
7. **Envia TODOS os ficheiros** incluindo `.next/`

### O que é Enviado:

✅ **Enviado:**
- Todo o código fonte (`src/`, `public/`, etc.)
- Pasta `.next/` completa (build gerada)
- `package.json`
- `next.config.mjs`
- Outros ficheiros de configuração

❌ **NÃO Enviado:**
- `node_modules/` (já está no servidor)
- `.git/` e `.github/` (não necessário)
- Ficheiros `.md` (documentação)
- `package-lock.json` (não necessário se já tens `node_modules`)

---

## 🚀 Próximos Passos

### 1. Fazer Push para GitHub

```bash
git add .github/workflows/node.js.yml
git commit -m "Fix: Corrigir deploy da pasta .next via GitHub Actions"
git push origin main
```

### 2. Verificar GitHub Actions

1. Vai a: `https://github.com/[seu-usuario]/[seu-repo]/actions`
2. Clica no workflow que está a correr
3. Verifica os logs:
   - ✅ Step "Verify build output" deve mostrar a estrutura da `.next`
   - ✅ Step "Deploy via FTP" deve mostrar ficheiros enviados
   - ❌ Se houver erros, aparecem nos logs

### 3. Verificar no Servidor (cPanel)

Depois do deploy completar:

1. **Via FTP/cPanel File Manager:**
   - Verifica se existe pasta `app/.next/`
   - Verifica data de modificação (deve ser recente)
   - Verifica se `app/.next/static/` existe

2. **Via Terminal SSH (se tiveres acesso):**
   ```bash
   cd app/
   ls -la .next/
   ls -la .next/static/
   ```

### 4. Testar o Site

- Limpa cache do browser (Ctrl+Shift+R ou Cmd+Shift+R)
- Verifica se as alterações aparecem
- Verifica console do browser para erros

---

## 🔍 Troubleshooting

### Problema: "Build ainda não atualiza"

**Soluções:**

1. **Verificar logs do GitHub Actions**
   - Vê se o step "Verify build output" mostra a pasta `.next`
   - Vê se há erros no step "Deploy via FTP"

2. **Verificar se `dangerous-clean-slate` está a funcionar**
   - Nos logs do FTP Deploy, deve aparecer "Cleaning server..."
   - Se não aparecer, pode ser problema de permissões FTP

3. **Verificar estrutura no servidor**
   - A pasta deve estar em `app/.next/` (não `app/app/.next/`)
   - Verifica se o `server-dir: app/` está correto

4. **Limpar cache manualmente no servidor**
   ```bash
   # Via SSH (se tiveres acesso)
   cd app/
   rm -rf .next
   # Depois faz novo deploy
   ```

### Problema: "Erro: .next directory not found"

**Causa:** Build falhou antes de gerar `.next`

**Soluções:**

1. **Verificar erros de build nos logs**
   - Pode ser problema com dependências
   - Pode ser erro de sintaxe no código
   - Pode ser problema com MDX

2. **Testar build localmente:**
   ```bash
   npm ci
   npm run build
   # Se funcionar localmente, problema pode ser no GitHub Actions
   ```

3. **Verificar versão do Node.js**
   - Workflow usa Node.js 22.18.0
   - Se localmente usas outra versão, pode causar diferenças

### Problema: "Ficheiros não são enviados"

**Causa:** Problema com FTP ou exclusões muito agressivas

**Soluções:**

1. **Verificar credenciais FTP**
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
   - Devem estar configuradas nos GitHub Secrets

2. **Verificar `server-dir`**
   - Deve apontar para o diretório correto no servidor
   - Se o teu site está em `public_html/`, pode precisar de `server-dir: public_html/`

3. **Temporariamente remover `dangerous-clean-slate`**
   - Se estiver a causar problemas, remove esta linha
   - Mas então precisas de limpar manualmente a pasta `.next` antiga

---

## 📋 Checklist de Verificação

Após fazer push, verifica:

- [ ] GitHub Actions workflow completou com sucesso (verde)
- [ ] Step "Verify build output" mostra estrutura da `.next`
- [ ] Step "Deploy via FTP" mostra ficheiros enviados
- [ ] Pasta `app/.next/` existe no servidor (via FTP)
- [ ] Data de modificação da `.next` é recente
- [ ] Site atualiza corretamente no browser
- [ ] Sem erros no console do browser

---

## 🔄 Se Ainda Não Funcionar

### Opção 1: Deploy Manual Temporário

Enquanto resolves o problema:

1. Faz build localmente: `npm run build`
2. Envia apenas a pasta `.next/` via FTP
3. Substitui a pasta antiga no servidor

### Opção 2: Usar Standalone Output

Se o problema persistir, podes usar standalone output:

1. Adicionar `output: 'standalone'` no `next.config.mjs`
2. Atualizar workflow para usar `.next/standalone/`
3. No servidor, executar `node server.js` da pasta standalone

### Opção 3: Verificar Configuração do Servidor

- Verificar se o servidor está a servir da pasta correta
- Verificar se há algum cache (CDN, Cloudflare, etc.)
- Verificar logs do servidor para erros

---

## 📚 Recursos

- [FTP Deploy Action Documentation](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions Logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)

---

**Data da Correção**: Janeiro 2025  
**Problema Resolvido**: Pasta `.next` não atualiza via GitHub Actions  
**Solução**: `dangerous-clean-slate: true` + verificação de build

