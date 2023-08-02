/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // distDir: '_static',
  images: {
    domains: [
      "http://128.199.156.22/",
      "128.199.156.22",
      "localhost",
      "localhost:3000",
    ],
  },
};

module.exports = nextConfig;
  