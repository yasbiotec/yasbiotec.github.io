/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Esta linha é crucial: diz ao Next para criar HTML estático
  output: 'export',
  
  // Isso evita erros com o componente de Imagem do Next no GitHub Pages
  images: {
    unoptimized: true,
  },
  
  // SE o nome do seu repositório NÃO for "seu-usuario.github.io", 
  // e for algo como "hemohelp", descomente a linha abaixo:
  // basePath: '/hemohelp', 
}

module.exports = nextConfig