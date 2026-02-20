/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  images: {
    unoptimized: true,
  },
   basePath: "/stadi-research", 
  assetPrefix: "/stadi-research/"
};

module.exports = nextConfig;
