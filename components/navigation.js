import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link' // Recomendado para navegação interna no Next.js
import styles from './navigation.module.css'

const Navigation = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Efeito para detectar o scroll e adicionar sombra na navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Efeito para fechar o menu mobile se a tela aumentar (resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={styles['navigation-container']}>
      <nav 
        className={`${styles['navbar']} ${isScrolled ? styles['navbar-scrolled'] : ''}`}
      >
        <div className={styles['navbar-content']}>
          
          {/* --- LOGO --- */}
          <Link href="/" className={styles['logo-link']}>
            <div className={styles['logo-container']}>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className={styles['logo-image']}
              />
              <span className={styles['logo-text']}>HemoHelp</span>
            </div>
          </Link>

          {/* --- DESKTOP LINKS --- */}
          <div className={styles['desktop-links']}>
            <Link href="/" className={styles['nav-link']}>Início</Link>
            <Link href="#como" className={styles['nav-link']}>Como Funciona</Link>
          </div>

          {/* --- CTA BUTTON (Desktop) --- */}
          <div className={styles['desktop-cta']}>
            <Link href="/programa" className={styles['btn-primary']}>
              Começar Análise
            </Link>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <button 
            className={styles['mobile-toggle']} 
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Ícone Hamburger / X alternando */}
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* --- MOBILE MENU (Dropdown) --- */}
        <div className={`${styles['mobile-menu']} ${isMobileMenuOpen ? styles['mobile-menu-open'] : ''}`}>
          <div className={styles['mobile-links-container']}>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navigation.defaultProps = {
  imageSrc: '/external/icon.png',
  imageAlt: 'Logo HemoHelp',
}

Navigation.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigation