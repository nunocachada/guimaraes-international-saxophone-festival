# Guia Rápido: Conversão para Static Export

## 🎯 Objetivo

Converter o website Next.js para static export (SSG) para compatibilidade total com shared hosting.

## ⚡ Passos Rápidos

### 1. Ativar Static Export

```bash
# Copiar configuração de exemplo
cp next.config.static-export.example.js next.config.js
```

Ou edite manualmente `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### 2. Verificar Componentes

O projeto já está compatível! ✅

- Não usa API Routes
- Não usa Server Actions
- Server Components serão convertidos automaticamente

### 3. Build

```bash
npm run build
```

Isto irá:

- Gerar a pasta `out/` com ficheiros estáticos
- Todos os HTML, CSS, JS estarão prontos para deploy

### 4. Testar Localmente

```bash
# Instalar servidor estático (apenas para teste)
npx serve out

# Ou usar Python
python3 -m http.server 8000 --directory out
```

Aceda a `http://localhost:8000` para verificar.

### 5. Deploy para Shared Hosting

#### Opção A: Via FTP/cPanel File Manager

1. Comprimir pasta `out/` → `out.zip`
2. Upload para `public_html/`
3. Extrair ficheiros
4. Mover conteúdo de `out/` para `public_html/` (raiz)

#### Opção B: Via SSH

```bash
# No servidor
cd ~/public_html
# Upload da pasta out/ via SCP ou FTP
# Depois:
mv out/* .
rm -rf out
```

### 6. Verificar

- ✅ Website acessível
- ✅ Imagens carregam
- ✅ CSS/JS funcionam
- ✅ Navegação funciona

## ⚠️ Limitações do Static Export

### O que NÃO funciona:

- ❌ Server Components (convertidos para client ou estáticos)
- ❌ API Routes (`/api/*`)
- ❌ Server Actions
- ❌ `next/image` otimizado (usa `unoptimized: true`)
- ❌ ISR (Incremental Static Regeneration)
- ❌ `getServerSideProps` (não existe no App Router)

### O que FUNCIONA:

- ✅ Client Components (`'use client'`)
- ✅ Static metadata
- ✅ Routing
- ✅ CSS/Tailwind
- ✅ Todas as funcionalidades do browser

## 🔄 Reverter para SSR

Se precisar voltar ao SSR:

```javascript
// next.config.js
const nextConfig = {
  // Remover output: 'export'
  // Remover images.unoptimized
}

module.exports = nextConfig
```

## 📝 Checklist de Deploy

- [ ] Configuração `output: 'export'` ativada
- [ ] Build executado com sucesso (`npm run build`)
- [ ] Pasta `out/` gerada
- [ ] Teste local funcionando
- [ ] Upload para `public_html/` concluído
- [ ] Website acessível no domínio
- [ ] Todas as rotas funcionando
- [ ] Imagens carregando
- [ ] CSS/JS carregando

## 🐛 Troubleshooting

### Erro: "Image Optimization requires Next.js' server"

**Solução:** Já está configurado com `images: { unoptimized: true }`

### Erro: "Route /api/xyz cannot be used with output: 'export'"

**Solução:** Remover ou comentar qualquer API route

### Erro: "getServerSideProps cannot be used with output: 'export'"

**Solução:** Não aplicável ao App Router (este projeto usa App Router)

### Imagens não carregam

**Solução:** Verificar paths relativos e garantir que imagens estão em `public/` ou `src/images/`

### 404 em rotas

**Solução:** Configurar `.htaccess` (Apache) ou `nginx.conf` (Nginx) para SPA routing:

**Apache (.htaccess):**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📊 Comparação: Antes vs Depois

| Aspecto                 | SSR (Atual)            | Static Export          |
| ----------------------- | ---------------------- | ---------------------- |
| **Servidor necessário** | ✅ Node.js 24/7        | ❌ Apenas servidor web |
| **Compatibilidade**     | ⚠️ Limitada            | ✅ Universal           |
| **Performance**         | ⚠️ Depende do servidor | ✅ Excelente (CDN)     |
| **Custo**               | 💰 Médio-Alto          | 💰 Baixo               |
| **Uptime**              | ⚠️ 90-95%              | ✅ 99%+                |
| **Funcionalidades**     | ✅ Todas               | ⚠️ Sem server-side     |

## ✅ Conclusão

Para este projeto específico, **static export é a solução ideal** porque:

- Não usa funcionalidades server-side
- Compatível com qualquer hosting
- Performance superior
- Custo zero adicional
