/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "_static",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // assetPrefix: isProd ? "https://j2911realty.com/" : undefined,
};

module.exports = nextConfig;
