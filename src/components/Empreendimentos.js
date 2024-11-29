// src/components/Empreendimentos.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Empreendimento from './Empreendimento';
import "./Empreendimentos.css";

// Importe as imagens
import MaueImg from '../img/maue.png';
import OleiroImg from '../img/oleiro.png';
import PalmeirasImg from '../img/palmeiras.png';

const Empreendimentos = () => {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <section className="empreendimentos-section">
            <h2>Empreendimentos</h2>
            <div className="empreendimentos-list">
                {/* Empreendimento MauÊEe */}
                <div onClick={() => navigate('/maue')} style={{ cursor: 'pointer' }}>
                    <Empreendimento 
                        imagem={MaueImg} 
                        titulo="Mauê" 
                        descricao="Sua casa na natureza, rodeada por áreas verdes que promovem saúde e bem-estar." 
                    />
                </div>

                {/* Empreendimento Oleiro */}
                <div onClick={() => navigate('/oleiro')} style={{ cursor: 'pointer' }}>
                    <Empreendimento 
                        imagem={OleiroImg} 
                        titulo="Oleiro" 
                        descricao="Para quem preza o estilo e uma vida urbana, o Oleiro oferece conforto e acabamentos diferenciados." 
                    />
                </div>

                {/* Empreendimento Reserva das Palmeiras */}
                <div onClick={() => navigate('/reserva')} style={{ cursor: 'pointer' }}>
                    <Empreendimento 
                        imagem={PalmeirasImg} 
                        titulo="Reserva das Palmeiras" 
                        descricao="Conforto e exclusividade em um cenário de urbanização com área de lazer para toda a família." 
                    />
                </div>
            </div>
        </section>
    );
};

export default Empreendimentos;
