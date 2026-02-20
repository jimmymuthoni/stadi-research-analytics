/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/stadi-research-analytics",
  assetPrefix: "/stadi-research-analytics/",
};

module.exports = nextConfig;