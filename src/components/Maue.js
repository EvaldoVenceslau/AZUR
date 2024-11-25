import React from 'react';
import './Maue.css'; // Arquivo de estilos da página

import ma1 from '../img/ma1.png';
import ma2 from '../img/ma2.png';
import ma3 from '../img/ma3.png';

const maue = () => {
  const marcarVisita = () => {
    alert('Opção de marcar visita para Mauá ainda não implementada.');
  };

  const adquirirUnidade = () => {
    alert('Opção de adquirir unidade para Mauá ainda não implementada.');
  };

  return (
    <div className="maue-container">
      <div className="maue-header">Empreendimento Mauá</div>
      <div className="maue-description">
        <p>
          O empreendimento Mauá combina elegância e sustentabilidade, localizado em um bairro tranquilo
          e bem conectado. Uma ótima oportunidade para quem busca qualidade de vida e investimento seguro.
        </p>
      </div>
      <div className="maue-gallery">
        <img src={ma1} alt="Mauá 1" />
        <img src={ma2} alt="Mauá 2" />
        <img src={ma3} alt="Mauá 3" />
      </div>
      <div className="maue-buttons">
        <button className="maue-button" onClick={marcarVisita}>
          Marcar Visita
        </button>
        <button className="maue-button" onClick={adquirirUnidade}>
          Adquirir Unidade
        </button>
      </div>
    </div>
  );
};

export default maue;
