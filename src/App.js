// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Empreendimentos from './components/Empreendimentos';
import Oleiro from './components/Oleiro';
import Maue from './components/Maue';
import Reserva from './components/Reserva';
import Login from './components/Login'; // Importa a página de login
import FloatingButtonModal from './components/FloatingButtonModal';

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
                    <Route path="/login" element={<Login />} /> {/* Rota de Login */}
                </Routes>
                <Footer />
                <FloatingButtonModal />
            </div>
        </Router>
    );
}

export default App;
