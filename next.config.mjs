/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // NENHUMA linha de 'basePath' ou 'assetPrefix' aqui!
};

export default nextConfig;