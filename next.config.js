/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.puma.com", "assets.adidas.com", "static.nike.com"],
  },
};

module.exports = nextConfig;
