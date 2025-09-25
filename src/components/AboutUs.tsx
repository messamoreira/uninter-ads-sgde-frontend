import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h2>Sobre o SGDE</h2>
      <div className="mission">
        <h3>Nossa Missão</h3>
        <p>
          O Sistema de Gerenciamento de Desastres e Emergências (SGDE) é uma plataforma 
          dedicada a conectar voluntários com pessoas afetadas por catástrofes naturais 
          e situações de emergência. Nosso objetivo é criar uma rede solidária que possa 
          oferecer ajuda rápida e eficiente quando mais necessário.
        </p>
      </div>

      <div className="how-it-works">
        <h3>Como Funciona</h3>
        <p>
          Através do cadastro de voluntários, criamos um banco de dados de pessoas 
          dispostas a ajudar em situações críticas. Quando ocorre uma emergência, 
          conseguimos mobilizar rapidamente os voluntários cadastrados na região afetada.
        </p>
      </div>

      <div className="areas">
        <h3>Áreas de Atuação</h3>
        <ul>
          <li>🌊 Enchentes e inundações</li>
          <li>🌪️ Tempestades e furacões</li>
          <li>🔥 Incêndios florestais</li>
          <li>🏚️ Desabamentos e deslizamentos</li>
          <li>🚑 Emergências médicas em massa</li>
        </ul>
      </div>

      <div className="stats">
        <h3>Números do SGDE</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">1.247</span>
            <span className="stat-label">Voluntários Cadastrados</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">48</span>
            <span className="stat-label">Cidades Atendidas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">156</span>
            <span className="stat-label">Emergências Atendidas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;