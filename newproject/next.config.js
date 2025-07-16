/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove: output: 'standalone' - causes routing issues on Vercel
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
}

module.exports = nextConfig