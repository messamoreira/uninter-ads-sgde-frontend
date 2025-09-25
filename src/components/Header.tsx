import React from 'react';

interface HeaderProps {
  activeTab: 'sobre' | 'contato';
  onTabChange: (tab: 'sobre' | 'contato') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="header">
      <nav className="nav">
        <h1>SGDE - Sistema de Gerenciamento de Desastres e Emergências</h1>
        <div className="nav-tabs">
          <button 
            className={activeTab === 'sobre' ? 'active' : ''}
            onClick={() => onTabChange('sobre')}
          >
            Sobre Nós
          </button>
          <button 
            className={activeTab === 'contato' ? 'active' : ''}
            onClick={() => onTabChange('contato')}
          >
            Cadastro de Voluntários
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;