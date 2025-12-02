import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './footer.module.css'

const Footer = (props) => {
  const footerRef = useRef(null)
  const [currentYear, setCurrentYear] = useState(2025)

  // Lógica para pegar o ano atual e animação de entrada
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['is-visible'])
          }
        })
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className={styles['footer-container']}>
      {/* Estilos de Animação Globais para este componente */}
      <style jsx global>{`
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Ondas decorativas */}
      <div className={styles['footer-wave-overlay']}></div>

      <div className={styles['footer-content-wrapper']}>
        <div className={styles['footer-top-section']}>
          
          {/* Coluna 1: Marca e Social */}
          <div className={styles['footer-brand-column']}>
            <div className={styles['footer-logo-wrapper']}>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className={styles['footer-logo-img']}
              />
              <span className={styles['footer-brand-name']}>HemoHelp</span>
            </div>
            <p className={styles['footer-tagline']}>
              Tecnologia avançada para diagnósticos precisos e rápidos.
            </p>
            
            <div className={styles['footer-social-links']}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles['footer-social-icon']}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className={styles['footer-social-icon']}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles['footer-social-icon']}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className={styles['footer-links-column']}>
            <h3>Navegação</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/programa">Programa</a></li>
              <li><a href="#team">Sobre Nós</a></li>
              <li><a href="#faq">Dúvidas (FAQ)</a></li>
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div className={styles['footer-links-column']}>
            <h3>Suporte</h3>
            <ul>
              <li><a href="/contato">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className={styles['footer-contact-column']}>
            <h3>Contato</h3>
            <div className={styles['contact-item']}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:suporte@Hemohelp.com">suporte@Hemohelp.com</a>
            </div>
            <div className={styles['contact-item']}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+551199999999">(51) 99999-9999</a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className={styles['footer-bottom']}>
          <p>© {currentYear} HemoHelp. Todos os direitos reservados.</p>
          <div className={styles['footer-legal-links']}>
            <a href="#faq">Privacidade</a>
          </div>
        </div>
      </div>

      {/* Formas Decorativas Flutuantes (Gotas de Sangue) */}
<div className={styles['footer-shapes']}>
  <div className={styles['shape-1']}></div>
  <div className={styles['shape-2']}></div>
</div>
    </footer>
  )
}

Footer.defaultProps = {
  imageAlt: 'Logo HemoHelp',
  imageSrc: '/external/icon.png', // Certifique-se que essa imagem existe ou troque o caminho
}

Footer.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Footer