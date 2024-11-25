// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Empreendimentos from './components/Empreendimentos';
import Oleiro from './components/Oleiro';
import Maue from './components/Maue'; // Importa a página Mauá
import Reserva from './components/Reserva'; // Importa a página Reserva das Palmeiras
import FloatingButtonModal from './components/FloatingButtonModal'; // Botão flutuante com modal

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Empreendimentos />} />
                    <Route path="/oleiro" element={<Oleiro />} />
                    <Route path="/maue" element={<Maue />} />
                    <Route path="/reserva" element={<Reserva />} />
                </Routes>
                <Footer />
                <FloatingButtonModal />
            </div>
        </Router>
    );
}

export default App;
