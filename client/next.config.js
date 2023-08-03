/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "_static",
  images: {
    unoptimized: true,
    domains: ["128.199.156.22", "localhost", "j2911realty.com"],
  },
};

module.exports = nextConfig;
