import React from 'react';
import './Reserva.css'; // Arquivo de estilos da página

import res1 from '../img/res1.png';
import res2 from '../img/res2.png';
import res3 from '../img/res3.png';

const Reserva = () => {
  const marcarVisita = () => {
    alert('Opção de marcar visita para Reserva das Palmeiras ainda não implementada.');
  };

  const adquirirUnidade = () => {
    alert('Opção de adquirir unidade para Reserva das Palmeiras ainda não implementada.');
  };

  return (
    <div className="reserva-container">
      <div className="reserva-header">Reserva das Palmeiras</div>
      <div className="reserva-description">
        <p>
          O Reserva das Palmeiras é um espaço exclusivo, projetado com foco em conforto e modernidade.
          Perfeito para quem busca um lar com estilo e praticidade, em uma localização estratégica.
        </p>
      </div>
      <div className="reserva-gallery">
        <img src={res1} alt="Reserva das Palmeiras 1" />
        <img src={res2} alt="Reserva das Palmeiras 2" />
        <img src={res3} alt="Reserva das Palmeiras 3" />
      </div>
      <div className="reserva-buttons">
        <button className="reserva-button" onClick={marcarVisita}>
          Marcar Visita
        </button>
        <button className="reserva-button" onClick={adquirirUnidade}>
          Adquirir Unidade
        </button>
      </div>
    </div>
  );
};

export default Reserva;
