/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://j2911realty-k7b8l.ondigitalocean.app' : undefined,
}

module.exports = nextConfig
