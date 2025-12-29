/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel/shared hosting
  output: 'export',

  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
