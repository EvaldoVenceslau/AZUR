import React from 'react';
import './Oleiro.css'; // Arquivo de estilos da página

import olei1 from '../img/olei1.png';
import olei2 from '../img/olei2.png';
import olei3 from '../img/olei3.png';

const Oleiro = () => {
  const marcarVisita = () => {
    alert('Opção de marcar visita ainda não implementada.');
  };

  const adquirirUnidade = () => {
    alert('Opção de adquirir unidade ainda não implementada.');
  };

  return (
    <div className="oleiro-container">
      <div className="oleiro-header">Oleiro</div>
      <div className="oleiro-description">
        <p>
          O empreendimento Oleiro é um espaço moderno e sofisticado, projetado para atender às necessidades de conforto e praticidade.
          Localizado em uma região privilegiada, oferece opções incríveis para morar ou investir.
        </p>
      </div>
      <div className="oleiro-gallery">
        {/* Renderizando as imagens corretamente */}
        <img src={olei1} alt="Imagem do Oleiro 1" className="oleiro-image" />
        <img src={olei2} alt="Imagem do Oleiro 2" className="oleiro-image" />
        <img src={olei3} alt="Imagem do Oleiro 3" className="oleiro-image" />
      </div>
      <div className="oleiro-buttons">
        <button className="oleiro-button" onClick={marcarVisita}>
          Marcar Visita
        </button>
        <button className="oleiro-button" onClick={adquirirUnidade}>
          Adquirir Unidade
        </button>
      </div>
    </div>
  );
};

export default Oleiro;
