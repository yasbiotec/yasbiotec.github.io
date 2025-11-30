import '../styles/globals.css'
// Se você tiver o style.module.css na raiz, importe aqui se necessário, 
// mas geralmente módulos são importados nos componentes.

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          color: #1e293b; /* Cor do texto padrão (cinza escuro) */
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp