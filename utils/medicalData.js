// utils/medicalData.js

// --- BANCO DE DADOS DE EXAMES ---
export const DB_EXAMES = {
  "Hemograma, Leucograma e Plaquetas": {
    "Descrição": "Avalia a quantidade e qualidade das células sanguíneas, incluindo glóbulos vermelhos, brancos e plaquetas.",
    "Fontes": [
      "PNCQ - Programa Nacional de Controle de Qualidade (2017/2019)",
      "OMS - Organização Mundial da Saúde"
    ],
    "Exames": {
      "Hemoglobina": {
        "unidade": "g/dL",
        "referencias": [
          { "demografia": "Homem Adulto", "faixas": { "Baixo": [0, 12.99], "Normal": [13.0, 17.0], "Alto": [17.01, 100] } },
          { "demografia": "Mulher Adulta", "faixas": { "Baixo": [0, 11.99], "Normal": [12.0, 15.0], "Alto": [15.01, 100] } },
          { "demografia": "Criança 6-14 anos", "faixas": { "Baixo": [0, 11.99], "Normal": [12.0, 15.5], "Alto": [15.51, 100] } },
          { "demografia": "Criança 2-5 anos", "faixas": { "Baixo": [0, 10.99], "Normal": [11.0, 13.5], "Alto": [13.51, 100] } }
        ],
        "analise": {
          "Alto": "Valores acima podem indicar desidratação ou outras condições como policitemia. É bom conversar com um médico.",
          "Baixo": "Um resultado abaixo do normal pode ser um sinal de anemia. É importante investigar com um profissional.",
          "Normal": "Nível saudável de hemoglobina, essencial para o transporte de oxigênio no corpo."
        }
      },
      "Plaquetas": {
        "unidade": "/µL",
        "referencias": [
          { "demografia": "Adulto", "faixas": { "Baixo": [0, 149999], "Normal": [150000, 400000], "Alto": [400001, 10000000] } },
          { "demografia": "Criança 2-12 anos", "faixas": { "Baixo": [0, 179999], "Normal": [180000, 450000], "Alto": [450001, 10000000] } }
        ],
        "analise": {
          "Alto": "Níveis elevados (trombocitose) podem aumentar o risco de coágulos. Requer avaliação médica.",
          "Baixo": "Níveis baixos (trombocitopenia) podem causar dificuldade de coagulação e sangramentos. É crucial o acompanhamento médico.",
          "Normal": "Contagem de plaquetas saudável, importante para a coagulação do sangue."
        }
      }
    }
  },
  "Lipidograma": {
    "Descrição": "Avalia os níveis de açúcar e gorduras (colesterol e triglicerídeos) no sangue.",
    "Fontes": ["Diretriz brasileira de dislipidemias e prevenção da aterosclerose - 2013 e 2017"],
    "Exames": {
      "Colesterol Total": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Adultos > 20 anos", "faixas": { "Desejável": [0, 199.9], "Limítrofe": [200, 239.9], "Alto": [240, 1000] } },
          { "demografia": "Infantojuvenil 0-19 anos", "faixas": { "Desejável": [0, 170], "Alto": [170.01, 1000] } }
        ],
        "analise": {
          "Desejável": "O 'trânsito total' de gorduras no seu sangue está baixo e controlado.",
          "Limítrofe": "O volume total de gordura no sangue está começando a ficar alto. Sinal de alerta para desequilíbrio.",
          "Alto": "O 'trânsito' está muito congestionado. Aumenta o risco de problemas nas artérias."
        }
      },
      "Colesterol HDL-c": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Adultos > 20 anos", "faixas": { "Baixo": [0, 39.9], "Normal": [40.0, 59.9], "Desejável": [60, 1000] } },
          { "demografia": "Infantojuvenil 0-19 anos", "faixas": { "Baixo": [0, 44.9], "Desejável": [45, 1000] } }
        ],
        "analise": {
          "Desejável": "Você tem muito 'Colesterol bom' (HDL). Fator de proteção para o coração.",
          "Normal": "Nível aceitável, mas não é considerado 'protetor'. Tente aumentar com exercícios.",
          "Baixo": "Pouco 'Colesterol bom'. Fator de risco, pois o LDL tem mais facilidade para se acumular."
        }
      },
      "Colesterol LDL-c": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Adultos > 20 anos", "faixas": { "Ótimo": [0, 99.9], "Desejável": [100, 129.9], "Limítrofe": [130, 159.9], "Alto": [160, 189.9], "Muito Alto": [190, 1000] } },
          { "demografia": "Infantojuvenil 0-19 anos", "faixas": { "Desejável": [0, 110], "Alto": [110.01, 1000] } }
        ],
        "analise": {
          "Ótimo": "Suas artérias estão muito bem protegidas. Risco de 'entupimento' mínimo.",
          "Desejável": "Nível aceitável para a maioria, mas o 'ótimo' é preferível.",
          "Limítrofe": "A 'Gordura ruim' está começando a ficar alta. Foco em dieta e exercícios.",
          "Alto": "Risco considerável de placas de gordura. Mudança de hábitos necessária.",
          "Muito Alto": "Situação urgente. Risco cardiovascular muito grande. Tratamento fundamental."
        }
      },
      "Colesterol Não HDL-c": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Adultos > 20 anos", "faixas": { "Ótimo": [0, 129.9], "Desejável": [130, 159.9], "Alto": [160, 189.9], "Muito Alto": [190, 1000] } }
        ],
        "analise": {
          "Ótimo": "Excelente. A soma de 'todo o colesterol ruim' está bem controlada.",
          "Desejável": "Nível aceitável, mas pode ser otimizado.",
          "Alto": "Nível elevado, risco aumentado de doença cardiovascular.",
          "Muito Alto": "Nível muito elevado, alto risco cardiovascular."
        }
      },
      "Triglicerídeos": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Adultos > 20 anos (com jejum)", "faixas": { "Ótimo": [0, 149.9], "Limítrofe": [150, 199.9], "Alto": [200, 499.9], "Muito Alto": [500, 10000] } },
          { "demografia": "Infantojuvenil 0-9 anos (com jejum)", "faixas": { "Desejável": [0, 75], "Alto": [75.01, 10000] } },
          { "demografia": "Infantojuvenil 0-9 anos (sem jejum)", "faixas": { "Desejável": [0, 85], "Alto": [85.01, 10000] } },
          { "demografia": "Infantojuvenil 10-19 anos (com jejum)", "faixas": { "Desejável": [0, 90], "Alto": [90.01, 10000] } },
          { "demografia": "Infantojuvenil 10-19 anos (sem jejum)", "faixas": { "Desejável": [0, 100], "Alto": [100.01, 10000] } }
        ],
        "analise": {
          "Ótimo": "Nível excelente. Associado a bom controle de carboidratos.",
          "Limítrofe": "Sinal de alerta. Necessidade de ajustes na dieta.",
          "Desejável": "Nível adequado para a faixa etária.",
          "Alto": "Risco aumentado para doença cardiovascular e pancreatite.",
          "Muito Alto": "Risco muito elevado de pancreatite aguda e cardiovascular. Intervenção imediata."
        }
      }
    }
  },
  "Função Pancreática": {
    "Descrição": "Avalia os níveis de glicemia e a função do pâncreas.",
    "Fontes": ["Diretriz da Sociedade Brasileira de Diabetes - 2025"],
    "Exames": {
      "Glicemia em jejum": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Geral (Jejum)", "faixas": { "Normal": [0, 99.9], "Pré-diabetes": [100, 125.99], "Diabetes": [126, 1000] } }
        ],
        "analise": {
          "Normal": "Seu corpo está ótimo em manter o nível de açúcar controlado.",
          "Pré-diabetes": "Açúcar 'base' mais alto do que deveria. Alerta para mudança de hábitos.",
          "Diabetes": "Nível de açúcar muito alto mesmo em jejum. Dificuldade de processamento."
        }
      },
      "Insulina em Jejum": {
        "unidade": "µU/mL",
        "referencias": [
          { "demografia": "Adulto (Jejum)", "faixas": { "Baixo": [0, 2.59], "Normal": [2.6, 24.9], "Alto": [24.91, 1000] } }
        ],
        "analise": {
          "Alto": "Pode indicar resistência à insulina. Fator de risco para Diabetes Tipo 2.",
          "Baixo": "Pode ser normal com glicemia baixa, ou indicar produção insuficiente (ex: Diabetes Tipo 1).",
          "Normal": "Nível adequado, indicando boa resposta do pâncreas."
        }
      },
      "Hemoglobina glicada": {
        "unidade": "%",
        "referencias": [
          { "demografia": "Geral", "faixas": { "Normal": [0, 5.69], "Pré-diabetes": [5.7, 6.49], "Diabetes": [6.5, 100] } }
        ],
        "analise": {
          "Normal": "Média de açúcar nos últimos 3 meses esteve controlada.",
          "Pré-diabetes": "Média de açúcar alta com frequência. Risco elevado de diabetes.",
          "Diabetes": "Média de açúcar muito alta, confirmando diagnóstico de diabetes."
        }
      },
      "Amilase": {
        "unidade": "U/L",
        "referencias": [
          { "demografia": "Adulto", "faixas": { "Baixo": [0, 26.9], "Normal": [27, 100], "Alto": [100.01, 10000] } }
        ],
        "analise": {
          "Alto": "Sinal forte de inflamação no pâncreas (pancreatite), especialmente se muito alto.",
          "Normal": "Pâncreas funcionando sem sinais de inflamação aguda.",
          "Baixo": "Menos comum. Pode indicar dano crônico ou problemas hepáticos."
        }
      }
    }
  },
  "Função Hepática": {
    "Descrição": "Analisa as enzimas do fígado para detectar danos ou doenças.",
    "Fontes": ["Sociedade Brasileira de Hepatologia (SBH)", "Consenso de Laboratórios de Referência"],
    "Exames": {
      "TGO (AST) - Transaminase Oxalacética": {
        "unidade": "U/L",
        "referencias": [
          { "demografia": "Adulto", "faixas": { "Baixo": [0, 9.9], "Normal": [10, 40], "Alto": [40.1, 10000] } }
        ],
        "analise": {
          "Alto": "Pode indicar lesão no fígado, mas também em músculos e coração.",
          "Baixo": "Geralmente não é uma preocupação clínica.",
          "Normal": "Função hepática e muscular aparentemente normal."
        }
      },
      "TGP (ALT) - Transaminase Pirúvica": {
        "unidade": "U/L",
        "referencias": [
          { "demografia": "Homem Adulto", "faixas": { "Baixo": [0, 9.9], "Normal": [10, 41], "Alto": [41.1, 10000] } },
          { "demografia": "Mulher Adulta", "faixas": { "Baixo": [0, 6.9], "Normal": [7, 33], "Alto": [33.1, 10000] } }
        ],
        "analise": {
          "Alto": "Indicador específico de inflamação/dano no fígado. Acompanhamento essencial.",
          "Baixo": "Geralmente não é motivo de preocupação.",
          "Normal": "Níveis normais sugerem um fígado saudável."
        }
      },
      "Gama-GT (GGT)": {
        "unidade": "U/L",
        "referencias": [
          { "demografia": "Homem Adulto", "faixas": { "Baixo": [0, 11.9], "Normal": [12, 73], "Alto": [73.1, 2000] } },
          { "demografia": "Mulher Adulta", "faixas": { "Baixo": [0, 7.9], "Normal": [8, 41], "Alto": [41.1, 2000] } }
        ],
        "analise": {
          "Alto": "Sensível a problemas no fígado (álcool, obstrução). Medicamentos também podem elevar.",
          "Baixo": "Geralmente não é motivo de preocupação.",
          "Normal": "Bom sinal, especialmente com outros exames hepáticos normais."
        }
      },
      "Fosfatase Alcalina": {
        "unidade": "U/L",
        "referencias": [
          { "demografia": "Adulto", "faixas": { "Baixo": [0, 39.9], "Normal": [40, 129], "Alto": [129.1, 2000] } }
        ],
        "analise": {
          "Alto": "Pode indicar problemas no fígado (obstrução) ou nos ossos.",
          "Baixo": "Raros, podem estar ligados a desnutrição.",
          "Normal": "Equilíbrio saudável entre fígado e ossos."
        }
      },
      "Proteína C Reativa (PCR)": {
        "unidade": "mg/L",
        "referencias": [
          {
            "demografia": "Adulto (Risco Cardiovascular)",
            "faixas": {
              "Baixo Risco": [0, 1.0],
              "Médio Risco": [1.01, 3.0],
              "Alto Risco": [3.01, 9.9],
              "Risco Muito Alto / Inflamação Aguda": [10, 1000]
            }
          }
        ],
        "analise": {
          "Baixo Risco": "Nível ótimo. Baixa inflamação sistêmica.",
          "Médio Risco": "Inflamação leve, risco cardiovascular moderado.",
          "Alto Risco": "Inflamação crônica, risco cardiovascular elevado.",
          "Risco Muito Alto / Inflamação Aguda": "Nível muito elevado. Geralmente indica infecção, inflamação aguda ou trauma."
        }
      }
    }
  },
  "Função Renal": {
    "Descrição": "Avalia a capacidade dos rins de filtrar resíduos do sangue.",
    "Fontes": ["Sociedade Brasileira de Nefrologia", "Sociedade Brasileira de Reumatologia"],
    "Exames": {
      "Creatinina": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Homem Adulto", "faixas": { "Baixo": [0, 0.69], "Normal": [0.7, 1.3], "Alto": [1.31, 100] } },
          { "demografia": "Mulher Adulta", "faixas": { "Baixo": [0, 0.49], "Normal": [0.5, 1.1], "Alto": [1.11, 100] } }
        ],
        "analise": {
          "Alto": "Sinal de alerta. Rins podem não estar filtrando adequadamente.",
          "Baixo": "Raro, geralmente ligado a baixa massa muscular.",
          "Normal": "Valor esperado. O médico usará para calcular a TFG."
        }
      },
      "Uréia": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Adulto", "faixas": { "Baixo": [0, 14.9], "Normal": [15, 45], "Alto": [45.1, 500] } }
        ],
        "analise": {
          "Alto": "Pode indicar função renal diminuída, desidratação ou dieta proteica.",
          "Baixo": "Pode ocorrer em dietas pobres em proteína ou super-hidratação.",
          "Normal": "Nível adequado de uréia."
        }
      },
      "Ácido Úrico": {
        "unidade": "mg/dL",
        "referencias": [
          { "demografia": "Homem Adulto", "faixas": { "Baixo": [0, 3.49], "Normal": [3.5, 7.0], "Alto": [7.01, 100] } },
          { "demografia": "Mulher Adulta", "faixas": { "Baixo": [0, 2.59], "Normal": [2.6, 6.0], "Alto": [6.01, 100] } }
        ],
        "analise": {
          "Alto": "Risco de Gota e problemas renais.",
          "Baixo": "Geralmente não é motivo de preocupação.",
          "Normal": "Nível saudável de ácido úrico."
        }
      }
    }
  },
  "Hormônios": {
    "Descrição": "Verifica tireoide, vitaminas e hormônios sexuais.",
    "Fontes": ["SBEM - Sociedade Brasileira de Endocrinologia", "SBPC/ML"],
    "Exames": {
      "TSH (Hormônio Tireoestimulante)": {
        "unidade": "mUI/L",
        "referencias": [
          { "demografia": "Adulto 20-60 anos", "faixas": { "Baixo": [0, 0.44], "Normal": [0.45, 4.5], "Alto": [4.51, 100] } },
          { "demografia": "Adulto 70-80 anos", "faixas": { "Baixo": [0, 0.43], "Normal": [0.44, 7.9], "Alto": [7.91, 100] } }
        ],
        "analise": {
          "Alto": "Sugere Hipotireoidismo (tireoide lenta).",
          "Baixo": "Sugere Hipertireoidismo (tireoide acelerada).",
          "Normal": "Tireoide respondendo adequadamente."
        }
      },
      "Tiroxina (T4) Livre": {
        "unidade": "ng/dL",
        "referencias": [
          { "demografia": "Adulto > 20 anos", "faixas": { "Baixo": [0, 0.89], "Normal": [0.9, 1.8], "Alto": [1.81, 10] } }
        ],
        "analise": {
          "Alto": "Reforça diagnóstico de Hipertireoidismo.",
          "Baixo": "Reforça diagnóstico de Hipotireoidismo.",
          "Normal": "Nível adequado de hormônio circulante."
        }
      },
      "Tiroxina (T4) Total": {
        "unidade": "µg/dL",
        "referencias": [
          { "demografia": "Adulto", "faixas": { "Baixo": [0, 4.9], "Normal": [5.0, 12.0], "Alto": [12.01, 30] } }
        ],
        "analise": {
          "Alto": "Pode indicar hipertireoidismo, uso de estrogênio ou gravidez.",
          "Baixo": "Pode indicar hipotireoidismo.",
          "Normal": "Nível normal. T4 Livre é mais preciso."
        }
      },
      "Tri-iodotironina (T3) Total": {
        "unidade": "ng/dL",
        "referencias": [
          { "demografia": "Adulto", "faixas": { "Baixo": [0, 79], "Normal": [80, 200], "Alto": [200.1, 500] } }
        ],
        "analise": {
          "Alto": "Pode indicar hipertireoidismo.",
          "Baixo": "Comum em hipotireoidismo e doenças não-tireoidianas.",
          "Normal": "Nível normal."
        }
      },
      "Testosterona Total": {
        "unidade": "ng/dL",
        "referencias": [
          { "demografia": "Homem Adulto 20-49 anos", "faixas": { "Baixo": [0, 239], "Normal": [240, 816], "Alto": [816.1, 3000] } },
          { "demografia": "Mulher Adulta", "faixas": { "Baixo": [0, 13.9], "Normal": [14, 76], "Alto": [76.1, 1000] } }
        ],
        "analise": {
          "Alto": "Homens: uso de anabolizantes? Mulheres: SOP?",
          "Baixo": "Homens: hipogonadismo. Mulheres: geralmente normal, mas pode ser investigado.",
          "Normal": "Nível dentro do esperado."
        }
      },
      "Estrogênio (Estradiol - E2)": {
        "unidade": "pg/mL",
        "referencias": [
          { "demografia": "Mulher - Fase Folicular", "faixas": { "Normal": [22.2, 218.0] } },
          { "demografia": "Mulher - Pico Ovulatório", "faixas": { "Normal": [40.3, 511.3] } },
          { "demografia": "Mulher - Fase Lútea", "faixas": { "Normal": [25.3, 288.6] } },
          { "demografia": "Mulher - Pós-menopausa", "faixas": { "Normal": [0, 47.0] } },
          { "demografia": "Homem Adulto", "faixas": { "Normal": [11.0, 46.0], "Alto": [46.01, 1000] } }
        ],
        "analise": {
          "Normal": "Dentro do esperado para a fase/sexo.",
          "Alto": "Mulheres: investigar fase. Homens: ginecomastia/fígado.",
          "Baixo": "Mulheres: investigar com ginecologista."
        }
      },
      "Globulina Ligadora de Hormônios Sexuais (SHBG)": {
        "unidade": "nmol/L",
        "referencias": [
          { "demografia": "Homem Adulto", "faixas": { "Baixo": [0, 9.9], "Normal": [10, 57], "Alto": [57.1, 500] } },
          { "demografia": "Mulher Adulta (Não grávida)", "faixas": { "Baixo": [0, 17.9], "Normal": [18, 144], "Alto": [144.1, 1000] } }
        ],
        "analise": {
          "Alto": "Pode diminuir hormônio livre.",
          "Baixo": "Pode aumentar hormônio livre. Comum em SOP e obesidade.",
          "Normal": "Nível adequado."
        }
      },
      "Vitamina D": {
        "unidade": "ng/mL",
        "referencias": [
          {
            "demografia": "População Geral Saudável < 65 anos",
            "faixas": {
              "Deficiência Severa": [0, 9.9],
              "Insuficiência": [10.0, 19.9],
              "Desejável": [20.0, 100.0],
              "Risco de Toxicidade": [100.1, 10000]
            }
          },
          {
            "demografia": "Grupo de Risco (>65, Gestantes, Osteoporose)",
            "faixas": {
              "Deficiência Severa": [0, 9.9],
              "Insuficiência": [10.0, 29.9],
              "Meta": [30.0, 60.0],
              "Seguro (Acima da Meta)": [60.1, 100.0],
              "Risco de Toxicidade": [100.1, 10000]
            }
          }
        ],
        "analise": {
          "Meta": "Nível ideal para grupos de risco.",
          "Desejável": "Nível adequado para população geral.",
          "Seguro (Acima da Meta)": "Acima da meta, mas seguro.",
          "Insuficiência": "Abaixo do ideal. Exposição solar/suplementação.",
          "Deficiência Severa": "Muito baixo, risco ósseo. Requer tratamento.",
          "Risco de Toxicidade": "Excessivamente alto. Risco de hipercalcemia."
        }
      }
    }
  }
};

// --- FUNÇÃO DE ANÁLISE ---
export function analisarExame(nomeExame, valor, idade, sexo, categoria) {
  const dadosExame = DB_EXAMES[categoria]?.Exames[nomeExame];
  if (!dadosExame) return null;

  let melhorReferencia = dadosExame.referencias[0]; // Fallback seguro
  let maiorPontuacao = -1;

  // Lógica de seleção de referência com base em Idade e Sexo
  dadosExame.referencias.forEach(ref => {
    let pontuacao = 0;
    const nomeDemografia = ref.demografia.toLowerCase();

    // Filtro de Sexo
    if (nomeDemografia.includes("homem") && sexo !== "M") return;
    if (nomeDemografia.includes("mulher") && sexo !== "F") return;

    // Extração de faixas etárias
    const numeros = nomeDemografia.match(/\d+/g)?.map(Number) || [];
    let matchIdade = false;

    if (numeros.length === 2) { // Ex: "6-14 anos"
      if (idade >= numeros[0] && idade <= numeros[1]) {
        matchIdade = true;
        pontuacao += 100;
      }
    } else if (numeros.length === 1) { // Ex: "> 20 anos"
      if ((nomeDemografia.includes(">") && idade > numeros[0]) ||
          (nomeDemografia.includes("<") && idade < numeros[0])) {
        matchIdade = true;
        pontuacao += 50;
      }
    } else { // Genérico (Ex: "Adulto")
      const ehCriancaString = nomeDemografia.includes("criança") || nomeDemografia.includes("infanto");
      const ehPacienteCrianca = idade < 18;

      if (ehCriancaString === ehPacienteCrianca) {
        matchIdade = true;
        pontuacao += 10;
      }
    }

    if (matchIdade && pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao;
      melhorReferencia = ref;
    }
  });

  // Determinar Status
  let status = "Indeterminado";
  let textoAnalise = "Sem análise disponível para esta faixa.";

  const faixas = melhorReferencia.faixas;

  for (const [key, range] of Object.entries(faixas)) {
    if (valor >= range[0] && valor <= range[1]) {
      status = key;
      textoAnalise = dadosExame.analise[key] || "Resultado dentro da faixa, mas sem texto específico.";
      break;
    }
  }

  return {
    nome: nomeExame,
    valor,
    unidade: dadosExame.unidade,
    status,
    textoAnalise,
    referenciaUsada: melhorReferencia.demografia,
    fontes: DB_EXAMES[categoria].Fontes
  };
}