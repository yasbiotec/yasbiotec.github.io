import React from 'react';

// Mapeamento da Grid (3 linhas x 4 colunas)
const SPRITE_MAP = {
  // Linha 1: Categorias
  'blood': { x: 0, y: 0 }, 'burger': { x: 1, y: 0 }, 'water': { x: 2, y: 0 }, 'sick': { x: 3, y: 0 },

  // Linha 2: Status
  'pill': { x: 0, y: 1 }, 'success': { x: 1, y: 1 }, 'alert-high': { x: 2, y: 1 }, 'alert-low': { x: 3, y: 1 },

  // Linha 3: UI/Ações
  'love': { x: 0, y: 2 }, 'read': { x: 1, y: 2 }, 'print': { x: 2, y: 2 }, 'restart': { x: 3, y: 2 },

  // Fallback
  'neutral': { x: 0, y: 0 }
};

const MascotEmoji = ({ type = 'neutral', size = 32 }) => {
  const coords = SPRITE_MAP[type] || SPRITE_MAP['neutral'];

  // Cálculos para background-position (Grid 4x3)
  // 4 colunas = 3 intervalos (100/3) | 3 linhas = 2 intervalos (100/2)
  const posX = coords.x * (100 / 3);
  const posY = coords.y * (100 / 2);

  const style = {
    display: 'inline-block',
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: 'url("/external/mascot-sprites.png")',
    backgroundSize: '400% 300%', // 4 colunas, 3 linhas
    backgroundPosition: `${posX}% ${posY}%`,
    imageRendering: 'pixelated', // Mantém o visual pixel art nítido
    borderRadius: '6px',
    flexShrink: 0,
    verticalAlign: 'middle'
  };

  return <span style={style} title={`Carmilab: ${type}`} aria-label={type} />;
};

export default MascotEmoji;