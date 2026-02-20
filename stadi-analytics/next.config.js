/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/stadi-analytics",
  assetPrefix: "/stadi-analytics/",
};

module.exports = nextConfig;