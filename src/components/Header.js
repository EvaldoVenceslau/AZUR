import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Importe o CSS
import Logo from '../img/logo.png';
import UserIcon from '../img/user-icon.png';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo Azur" />
            </div>
            <div 
                className="user-icon" 
                onClick={handleLogoClick} 
                style={{ cursor: 'pointer' }}
            >
                <img src={UserIcon} alt="Ícone do Usuário" />
            </div>
        </header>
    );
};

export default Header;
