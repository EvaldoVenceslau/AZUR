import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Para redirecionar o usuário após login
import "./Login.css"; // Você pode criar um CSS para a página de login

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook para navegação

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get("http://localhost:3001/users", {
                params: { email, password },
            });

            const user = response.data.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                alert("Login bem-sucedido!");
                navigate("/"); // Redireciona para a página principal após login
            } else {
                setError("Credenciais inválidas. Tente novamente.");
            }
        } catch (err) {
            setError("Erro ao conectar ao servidor.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
