import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import styles from './home.module.css'
import projectStyles from './style.module.css'

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className={styles['home-container1']}>
      <Head>
        <title>HemoHelp</title>
      </Head>

      <Navigation />

      <section className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <h1 className={styles['hero-title']}>
            HemoHelp — Mais que leitura, uma visão completa do seu sangue
          </h1>
          <p className={styles['hero-subtitle']}>
            Onde a experiência clínica encontra uma orientação acessível.
          </p>
          <p className={styles['hero-description']}>
            Amigável, clínico e especializado. O HemoHelp combina interpretação de nível médico
            com um mascote acessível para ajudar profissionais e pacientes a traduzir rapidamente
            os resultados do Hemograma Completo em informações claras e aplicáveis.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <button 
              className={`${projectStyles['btn']} ${projectStyles['btn-primary']}`}
              onClick={() => window.location.href = '/programa'}
            >
              Começar Análise
            </button>
          </div>
        </div>
        <div className={styles['hero-image-container']}>
          <img alt="Mascote HemoBat" src="/external/aaa-300h.png" className={styles['mascot-hero']} />
        </div>
      </section>

      <section className={styles['about-section']}>
        <div className={styles['about-container']}>

          <div className={styles['about-left-column']}>
            <h2 className={styles['section-heading']}>Sobre o Hemohelp</h2>
            <p className={styles['about-description']}>
              O Hemohelp foi criado para desmistificar os resultados do seu exame de sangue
              Completo para pacientes e médicos. Combinamos orientações médicas claras com
              ferramentas modernas e seguras para que qualquer pessoa possa entender
              rapidamente o que seu exame de sangue está dizendo.
            </p>

            <div className={styles['info-card']}>
              <div className={styles['card-icon']}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className={styles['card-title']}>Nossa Missão</h3>
              <p className={styles['card-text']}>
                Ser uma ferramenta para auxiliar os médicos, não os substituir, otimizando o pedidos
                de exames para chegar no diagnóstico de forma mais rápida possível e assim iniciar
                o tratamento de doenças mais grave de forma mais antecipada.
              </p>
            </div>

            <div className={styles['info-card']}>
              <div className={styles['card-icon']}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
              </div>
              <h3 className={styles['card-title']}>A ciência por trás da simplicidade</h3>
              <p className={styles['card-text']}>
                Nosso analisador mapeia os componentes do hemograma completo — hemácias,
                plaquetas, leucócitos e seus intervalos — em relação aos
                padrões de referência clínica atuais e padrões contextuais. Os resultados são
                expressos com indicadores de risco claros e explicações concisas e práticas.
              </p>
            </div>

            <div className={styles['info-card']}>
              <div className={styles['card-icon']}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className={styles['card-title']}>Confiança, privacidade e padrões profissionais</h3>
              <p className={styles['card-text']}>
                Priorizamos a precisão clínica e a privacidade do usuário. As interpretações são
                baseadas em diretrizes validadas e selecionadas por profissionais de saúde.
              </p>
              <p className={styles['card-text']}>
                Os dados inseridos na ferramenta são tratados com segurança e usados apenas para
                gerar a análise na tela; não compartilhamos resultados pessoais sem consentimento.
              </p>
            </div>
          </div>

          <div className={styles['about-sidebar']}>
            <div className={styles['sidebar-card']}>
              <h3 className={styles['sidebar-title']}>Por que somos diferentes?</h3>
              <p className={styles['sidebar-text']}>
                O Hemohelp combina rigor clínico com uma personalidade gentil e memorável.
                O resultado é uma experiência premium que reduz a ansiedade,
                melhora a compreensão e promove melhores conversas entre paciente e profissional.
              </p>
              <div className={styles['badges-container']}>
                <span className={styles['badge']}>Medical-grade</span>
                <span className={styles['badge']}>Evidence-based</span>
                <span className={styles['badge']}>HIPAA Compliant</span>
              </div>
            </div>

            <div className={styles['sidebar-card']}>
              <h3 className={styles['sidebar-title']}>Explore</h3>
              <ul className={styles['explore-list']}>
                <li>
                  <span className={styles['explore-icon']}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </span>
                  <a href="#team" className={styles['explore-link-highlight']}>Conheça os Criadores (E o Mascote!)</a>
                </li>
                <li>
                  <a href="#como" className={styles['explore-link']}>Como o HemoHelp analisa seu hemograma completo</a>
                </li>
                <li>
                  <a href="#faq" className={styles['explore-link']}>Perguntas Frequentes</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section id="team" className={styles['team-section']}>
        <h2 className={styles['section-heading']}>Conheça os Criadores (E o Mascote!)</h2>
        <p className={styles['team-subtitle']}>
          O HemoHelp é fruto de uma parceria entre mentes curiosas e apaixonadas por ciência!
          Somos estudantes do curso de Biotecnologia da Universidade Federal do Rio Grande do Sul,
          unidos pela vontade de tornar a linguagem dos exames mais acessível, clara e educativa.
        </p>

        <div className={styles['team-grid']}>
          <div className={styles['team-card']}>
            <img src="/yasmin-1500w.jpg" alt="Yasmin" className={styles['team-photo']} />
            <h3 className={styles['item-heading']}>Yasmin Chaves Scimczak Medeiros</h3>
            <span>Cursando Biotecnologia com ênfase em Bioinformática</span>
          </div>
          <div className={styles['team-card']}>
            <img src="/gabriel_oliveira-600w.jpeg" alt="Gabriel" className={styles['team-photo']} />
            <h3 className={styles['item-heading']}>Gabriel Oliveira</h3>
            <span>Cursando Biotecnologia com ênfase em Bioinformática</span>
          </div>
          <div className={styles['team-card']}>
            <img src="/gabriel_borges-1500w.jpeg" alt="Gabriel Borges" className={styles['team-photo']} />
            <h3 className={styles['item-heading']}>Gabriel Borges Gambim</h3>
            <span>Cursando Biotecnologia com ênfase em Bioinformática</span>
          </div>
          <div className={styles['team-card']}>
            <img src="/ale-600w.jpeg" alt="Alessandra" className={styles['team-photo']} />
            <h3 className={styles['item-heading']}>Alessandra Pastor Beraldo</h3>
            <span>Cursando Biotecnologia com ênfase em Biologia Molecular</span>
          </div>
        </div>
      </section>

      <section className={styles['mascot-section']}>
        <div className={styles['mascot-content']}>
          <div className={styles['mascot-text']}>
            <h2 className={styles['section-heading']}>Carmilab SangueBom</h2>
            <span className={styles['role-tag']}>Mascote e Guia</span>
            <p>
              Conheça a Dra. SangueBom, o mascote oficial do HemoHelp. Uma simpática morcega de jaleco,
              projetada para representar acolhimento, clareza e confiança. Como guia digital,
              ela conduz os usuários na leitura do hemograma, traduzindo termos técnicos em
              informações compreensíveis e úteis — sempre preservando a precisão, a ética e a
              confidencialidade dos dados.
            </p>
          </div>
          <div className={styles['mascot-image-wrapper']}>
            <img src="/external/aaa-300h.png" alt="Carmilab" />
          </div>
        </div>
      </section>

      <section id="como" className={styles['steps-section']}>
        <div className={styles['steps-header-group']}>
          <h2 className={styles['section-heading']}>Como o HemoHelp analisa seu hemograma completo</h2>
          <p className={styles['section-subheading']}>Claro, Clínico e Rápido</p>
          <p className={styles['section-description']}>
            Um guia passo a passo de como você usa o Hemohelp para processar informações complexas e obter clareza clinicamente sólida.
          </p>
        </div>

        <div className={styles['steps-grid']}>
          <div className={styles['step-card']}>
            <div className={styles['step-header']}>
              <div className={styles['step-icon-box']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
              <span className={styles['step-number']}>01</span>
            </div>
            <h3 className={styles['step-title']}>Inicie o programa</h3>
            <p className={styles['step-text']}>
              A Dra SangueBom dá as boas-vindas e explica que você pode inserir seus resultados de exames.
            </p>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-header']}>
              <div className={styles['step-icon-box']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
              </div>
              <span className={styles['step-number']}>02</span>
            </div>
            <h3 className={styles['step-title']}>Veja as categorias disponíveis</h3>
            <p className={styles['step-text']}>
              São mostradas as seções (como Hemograma, Função Hepática, Lipidograma, etc.), cada uma com uma breve descrição.
            </p>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-header']}>
              <div className={styles['step-icon-box']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <span className={styles['step-number']}>03</span>
            </div>
            <h3 className={styles['step-title']}>Insira seus valores</h3>
            <p className={styles['step-text']}>
              Para cada exame, o programa pede que você digite o valor que aparece no seu laudo. <br />
              (Exemplo: “Hemoglobina – 13,5 g/dL”).<br />
              Se quiser pular algum exame, é só apertar Enter.
            </p>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-header']}>
              <div className={styles['step-icon-box']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className={styles['step-number']}>04</span>
            </div>
            <h3 className={styles['step-title']}>Deixe o morceguinho calcular</h3>
            <p className={styles['step-text']}>
              O HemoHelp compara seus valores com as faixas de referência do banco de dados e identifica se estão baixos, normais ou altos.
            </p>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-header']}>
              <div className={styles['step-icon-box']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </div>
              <span className={styles['step-number']}>05</span>
            </div>
            <h3 className={styles['step-title']}>Receba o relatório interpretativo</h3>
            <div className={styles['step-text']}>
              A Dra. SangueBom mostra um relatório completo:
              <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                <li>visão geral por categoria</li>
                <li>explicação simples de cada resultado</li>
                <li>fontes usadas na análise</li>
              </ul>
            </div>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-header']}>
              <div className={styles['step-icon-box']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <span className={styles['step-number']}>06</span>
            </div>
            <h3 className={styles['step-title']}>Leia o lembrete final</h3>
            <p className={styles['step-text']}>
              Dra SangueBom reforça que o relatório é educativo, não substitui um médico, e serve pra te ajudar a entender melhor seus números.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className={styles['faq-section']}>
        <h2 className={styles['section-heading']}>Perguntas Frequentes</h2>
        <div className={styles['faq-grid']}>

          <div className={styles['faq-column']}>
            <h3 className={styles['item-heading']}>Segurança</h3>

            <div className={styles['faq-item']}>
              <button onClick={() => toggleFaq(1)} className={styles['faq-btn']}>
                Meus dados são seguros? <span>{openFaq === 1 ? '-' : '+'}</span>
              </button>
              {openFaq === 1 && (
                <div className={styles['faq-answer']}>
                  Sim! O HemoHelp apenas analisa seus dados de forma simples e segura.
                </div>
              )}
            </div>

            <div className={styles['faq-item']}>
              <button onClick={() => toggleFaq(2)} className={styles['faq-btn']}>
                Posso exportar ou compartilhar minha análise? <span>{openFaq === 2 ? '-' : '+'}</span>
              </button>
              {openFaq === 2 && (
                <div className={styles['faq-answer']}>
                  Sim! Você pode exportar seu relatório e compartilhar com quem quiser.
                </div>
              )}
            </div>
          </div>

          <div className={styles['faq-column']}>
            <h3 className={styles['item-heading']}>Sobre</h3>

            <div className={styles['faq-item']}>
              <button onClick={() => toggleFaq(3)} className={styles['faq-btn']}>
                O que é o HemoHelp? <span>{openFaq === 3 ? '-' : '+'}</span>
              </button>
              {openFaq === 3 && (
                <div className={styles['faq-answer']}>
                  É uma ferramenta que analisa seu hemograma e explica os resultados de forma simples.
                </div>
              )}
            </div>

            <div className={styles['faq-item']}>
              <button onClick={() => toggleFaq(4)} className={styles['faq-btn']}>
                Quão precisas são as interpretações? <span>{openFaq === 4 ? '-' : '+'}</span>
              </button>
              {openFaq === 4 && (
                <div className={styles['faq-answer']}>
                  Elas seguem valores de referência usados em laboratórios, mas não substituem a avaliação médica.
                </div>
              )}
            </div>

            <div className={styles['faq-item']}>
              <button onClick={() => toggleFaq(5)} className={styles['faq-btn']}>
                O HemoHelp substitui meu médico? <span>{openFaq === 5 ? '-' : '+'}</span>
              </button>
              {openFaq === 5 && (
                <div className={styles['faq-answer']}>
                  Não! Ele só te ajuda a entender seu exame. Apenas um médico pode dar diagnóstico.
                </div>
              )}
            </div>

            <div className={styles['faq-item']}>
              <button onClick={() => toggleFaq(6)} className={styles['faq-btn']}>
                O que devo fazer se meus resultados forem anormais? <span>{openFaq === 6 ? '-' : '+'}</span>
              </button>
              {openFaq === 6 && (
                <div className={styles['faq-answer']}>
                  Fique tranquilo. Variações leves são comuns. Procure um médico para uma avaliação completa.
                </div>
              )}
            </div>

            <div className={styles['faq-item']}>
              <button onClick={() => toggleFaq(7)} className={styles['faq-btn']}>
                A ferramenta é para médicos ou para pacientes? <span>{openFaq === 7 ? '-' : '+'}</span>
              </button>
              {openFaq === 7 && (
                <div className={styles['faq-answer']}>
                  Para os dois! Pacientes entendem melhor seus exames e médicos podem usar como apoio.
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home