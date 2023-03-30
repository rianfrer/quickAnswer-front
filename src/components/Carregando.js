import React from 'react';
import '../styles/Carregando.css';

const Carregando = () => {
  return (
    <div className="processing-popup">
      <span>Processando...</span>
      <div className="spinner"></div>
    </div>
  );
};

export default Carregando;