/**
 * Configuração para Static Export (SSG)
 *
 * Para usar esta configuração:
 * 1. Renomeie este ficheiro para next.config.js
 * 2. Execute: npm run build
 * 3. A pasta 'out/' conterá os ficheiros estáticos
 * 4. Faça upload da pasta 'out/' para public_html/ no seu shared hosting
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita static export
  output: 'export',

  // Desabilita otimização de imagens (necessário para static export)
  images: {
    unoptimized: true,
  },

  // Configurações adicionais opcionais
  trailingSlash: true, // Adiciona trailing slash nas URLs (opcional)

  // Se usar basePath (ex: /subfolder)
  // basePath: '/subfolder',

  // Se usar assetPrefix para CDN
  // assetPrefix: 'https://cdn.exemplo.com',
}

module.exports = nextConfig
