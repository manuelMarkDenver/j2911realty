/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // distDir: '_static',
  images: {
    domains: ["128.199.156.22", "localhost"],
  },
};

module.exports = nextConfig;
