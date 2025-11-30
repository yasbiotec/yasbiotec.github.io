import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import styles from './programa.module.css'
import projectStyles from './style.module.css'
import { DB_EXAMES, analisarExame } from '../utils/medicalData'
import MascotEmoji from '../components/MascotEmoji'

const Programa = () => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ idade: '', sexo: '' });
  const [examValues, setExamValues] = useState({});
  const [report, setReport] = useState([]);
  const [usedSources, setUsedSources] = useState(new Set());

  const handleExamChange = (exame, valor) => {
    setExamValues(prev => ({ ...prev, [exame]: valor }));
  };

  const calcularResultados = () => {
    setStep(3); // Loading state

    setTimeout(() => {
      const resultadosFinais = [];
      const fontesColetadas = new Set();

      Object.keys(DB_EXAMES).forEach(categoria => {
        const examesDaCategoria = DB_EXAMES[categoria].Exames;

        Object.keys(examesDaCategoria).forEach(nomeExame => {
          const valorDigitado = examValues[nomeExame];

          if (valorDigitado && valorDigitado.trim() !== "") {
            const valorFloat = parseFloat(valorDigitado.replace(',', '.'));

            const resultado = analisarExame(
              nomeExame,
              valorFloat,
              parseInt(userData.idade),
              userData.sexo,
              categoria
            );

            if (resultado) {
              resultadosFinais.push({ ...resultado, categoria });
              if (resultado.fontes) {
                resultado.fontes.forEach(fonte => fontesColetadas.add(fonte));
              }
            }
          }
        });
      });

      setReport(resultadosFinais);
      setUsedSources(fontesColetadas);
      setStep(4); // Show report
    }, 3000);
  };

  return (
    <div className={styles['programa-container']}>
      <Head>
        <title>Analisador Hemohelp</title>
      </Head>
      <Navigation />

      <main className={styles['main-content']}>

        {/* --- PASSO 0: INTRODUÇÃO --- */}
        {step === 0 && (
          <section className={styles['step-intro']}>
            <h1 className={styles['page-title']}>Vamos entender seus exames?</h1>
            <p className={styles['page-subtitle']}>A Dra. SangueBom vai te guiar em 3 passinhos simples.</p>

            <div className={styles['cards-grid']}>
              <div className={styles['instruction-card']}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                  <MascotEmoji type="love" size={90} />
                </div>
                <span className={styles['card-number']}>01</span>
                <h3>Dados Pessoais</h3>
                <p>Conte pra gente sua idade e sexo. Isso muda tudo nos valores de referência!</p>
              </div>
              <div className={styles['instruction-card']}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                  <MascotEmoji type="read" size={90} />
                </div>
                <span className={styles['card-number']}>02</span>
                <h3>Digite os Valores</h3>
                <p>Copie os números do seu laudo. Se não tiver feito algum exame, é só pular.</p>
              </div>
              <div className={styles['instruction-card']}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                  <MascotEmoji type="pill" size={90} />
                </div>
                <span className={styles['card-number']}>03</span>
                <h3>Comparando!</h3>
                <p>O HemoHelp compara tudo com as diretrizes médicas mais seguras.</p>
              </div>
            </div>

            <button
              onClick={() => setStep(1)}
              className={projectStyles['btn-primary']}
              style={{ marginTop: '40px', fontSize: '1.2rem', padding: '18px 40px' }}
            >
              Começar Agora
            </button>
          </section>
        )}

        {/* --- PASSO 1: DADOS PESSOAIS --- */}
        {step === 1 && (
          <section className={styles['form-section']}>
            <div className={styles['form-card']}>
              <h2>Primeiro, quem é você?</h2>

              <div className={styles['input-group']}>
                <label>Sua Idade (anos)</label>
                <input
                  type="number"
                  placeholder="Ex: 25"
                  value={userData.idade}
                  onChange={(e) => setUserData({ ...userData, idade: e.target.value })}
                />
              </div>

              <div className={styles['input-group']}>
                <label>Sexo Biológico</label>
                <select
                  value={userData.sexo}
                  onChange={(e) => setUserData({ ...userData, sexo: e.target.value })}
                >
                  <option value="">Selecione...</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>

              <div className={styles['button-row']}>
                <button onClick={() => setStep(0)} className={styles['btn-secondary']}>Voltar</button>
                <button
                  onClick={() => setStep(2)}
                  disabled={!userData.idade || !userData.sexo}
                  className={projectStyles['btn-primary']}
                >
                  Continuar
                </button>
              </div>
            </div>
          </section>
        )}

        {/* --- PASSO 2: INSERÇÃO DE EXAMES --- */}
        {step === 2 && (
          <section className={styles['exam-input-section']}>
            <h2 style={{ textAlign: 'center', color: '#881337', marginBottom: '10px' }}>Preencha o que você tiver</h2>
            <p className={styles['alert-text']} style={{ textAlign: 'center', marginBottom: '30px', color: '#64748b' }}>
              Não se preocupe em deixar campos em branco.
            </p>

            {Object.keys(DB_EXAMES).map((categoria) => (
              <div key={categoria} className={styles['category-group']}>
                <div className={styles['category-title']}>
                  <MascotEmoji
                    type={
                      categoria.includes("Hemo") ? "blood" :
                      categoria.includes("Pancreática") ? "blood" :
                      categoria.includes("Lipidograma") ? "burger" :
                      categoria.includes("Renal") ? "water" :
                      categoria.includes("Hepática") ? "sick" :
                      "pill"
                    }
                    size={90}
                  />
                  <span style={{ marginLeft: '12px' }}>{categoria}</span>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px', paddingLeft: '4px' }}>
                  {DB_EXAMES[categoria]['Descrição']}
                </p>

                <div className={styles['inputs-grid']}>
                  {Object.keys(DB_EXAMES[categoria].Exames).map((exame) => (
                    <div key={exame} className={styles['exam-input-wrapper']}>
                      <label>{exame} <small>({DB_EXAMES[categoria].Exames[exame].unidade})</small></label>
                      <input
                        type="number"
                        placeholder="0.00"
                        onChange={(e) => handleExamChange(exame, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className={styles['button-row-fixed']}>
              <button onClick={() => setStep(1)} className={styles['btn-secondary']}>Voltar</button>
              <button
                onClick={calcularResultados}
                className={projectStyles['btn-primary']}
                style={{ boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)' }}
              >
                Analisar Resultados
              </button>
            </div>
          </section>
        )}

        {/* --- PASSO 3: LOADING --- */}
        {step === 3 && (
          <section className={styles['loading-section']}>
            <img
              src="/external/aaa-300h.png"
              alt="Mascote Voando"
              className={styles['flying-mascot']}
            />
            <h2>Só um momentinho...</h2>
            <p>A Dra. SangueBom está lendo seus dados...</p>
          </section>
        )}

        {/* --- PASSO 4: RELATÓRIO --- */}
        {step === 4 && (
          <section className={styles['report-section']}>
            <div className={styles['report-header']}>
              <h2>Prontinho!</h2>
              <p>Aqui está a leitura simplificada dos seus exames.</p>
            </div>

            {report.length === 0 ? (
              <div className={styles['empty-state']} style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                <h3>Ops! Parece que você não digitou nenhum valor.</h3>
                <p>Tente novamente.</p>
              </div>
            ) : (
              <div className={styles['results-list']}>
                {report.map((item, index) => (
                  <div key={index} className={`${styles['result-card']} ${styles[item.status.toLowerCase().replace(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")]}`}>
                    <div className={styles['result-header']}>
                      <h4>{item.nome}</h4>
                      <span className={styles['result-value']}>{item.valor} <small>{item.unidade}</small></span>
                    </div>

                    <div className={styles['result-status-badge']}>
                      <span style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
                        {['Normal', 'Desejável', 'Ótimo', 'Baixo Risco', 'Meta', 'Seguro (Acima da Meta)'].includes(item.status)
                          ? <MascotEmoji type="success" size={90} />
                          : (item.status.includes('Alto') || item.status.includes('Diabetes') || item.status.includes('Risco') || item.status.includes('Deficiência'))
                            ? <MascotEmoji type="alert-high" size={90} />
                            : <MascotEmoji type="alert-low" size={90} />
                        }
                      </span>
                      {item.status}
                    </div>

                    <p className={styles['result-analysis']}>
                      <strong>O que isso significa:</strong><br />
                      {item.textoAnalise}
                    </p>

                    <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>
                      Referência usada: {item.referenciaUsada}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {usedSources.size > 0 && (
              <div style={{ marginTop: '40px', padding: '20px', background: '#f1f5f9', borderRadius: '16px' }}>
                <h3 style={{ color: '#475569', marginBottom: '10px', fontSize: '1.1rem' }}>Fontes Científicas Utilizadas</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', fontSize: '0.9rem' }}>
                  {[...usedSources].map((source, idx) => (
                    <li key={idx} style={{ marginBottom: '8px' }}>• {source}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles['disclaimer-box']}>
              <strong>Um lembrete com carinho:</strong><br />
              Esse resultado serve para você aprender, mas só o seu médico pode te dar um diagnóstico real e passar tratamento, ok?
            </div>

            <div className={styles['button-row']}>
              <button onClick={() => window.print()} className={styles['btn-print']}>
                <span style={{ marginRight: '10px', display: 'inline-flex', alignItems: 'center' }}>
                  <MascotEmoji type="print" size={90} />
                </span>
                Imprimir Relatório
              </button>
              <button onClick={() => setStep(0)} className={styles['btn-restart']}>
                <span style={{ marginRight: '10px', display: 'inline-flex', alignItems: 'center' }}>
                  <MascotEmoji type="restart" size={90} />
                </span>
                Nova Análise
              </button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Programa