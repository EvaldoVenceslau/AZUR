import React from 'react';
import './Main.css';

const Main = () => {
    const redirectToAgendamento = () => {
        window.location.href = '/agendamento';
    };

    return (
        <main>
            <section className="team-section">
                <h2>EQUIPE AZUR</h2>
                <h3>Clientes e Solicitações</h3>
                <div className="client-list">
                    {[
                        { name: 'João Silva', project: 'Reserva das Palmeiras', plan: 'Planta A', meeting: 'Reunião' },
                        { name: 'Fernanda Barbosa', project: 'Reserva das Palmeiras', plan: 'Planta B', meeting: 'Reunião' },
                        { name: 'Bruno Silva', project: 'Reserva das Palmeiras', plan: 'Planta A', meeting: 'Reunião' },
                        { name: 'Pedro Carvalho', project: 'Reserva das Palmeiras', plan: 'Planta A', meeting: 'Reunião' },
                        { name: 'Renata Santos', project: 'Reserva das Palmeiras', plan: 'Planta B', meeting: 'Reunião' }
                    ].map((client, index) => (
                        <div className="client-item" key={index}>
                            <span onClick={redirectToAgendamento} style={{ cursor: 'pointer', color: 'black' }}>{client.name}</span>
                            <span>{client.project}</span>
                            <span>{client.plan}</span>
                            <span>{client.meeting}</span>
                        </div>
                    ))}
                </div>
                <div className="export-options">
                    <a href="#">exportar como .csv</a>
                    <a href="#">exportar como .pdf</a>
                </div>
            </section>
            <section className="crm-panel">
                <h3>Painel de CRM</h3>
                <div className="crm-stats">
                    <p>Taxa de conversão do último mês:</p>
                    <p>Taxa de evasão:</p>
                    <p>Cliques por empreendimento:</p>
                    <p>Abrir Dashboard Online</p>
                </div>
            </section>
        </main>
    );
};

export default Main;
