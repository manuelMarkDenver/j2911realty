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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/kitchen-designs": { page: "/kitchen-designs" },
      "/bedroom-designs": { page: "/bedroom-designs" },
      "/livingroom-designs": { page: "/livingroom-designs" },
    };
  },
};

module.exports = nextConfig;
