import React from 'react';
import { Contact } from '../types';

interface ContactSVGProps {
  contacts: Contact[];
}

const ContactSVG: React.FC<ContactSVGProps> = ({ contacts }) => {
  const svgWidth = 800;
  const svgHeight = 600;
  const cardWidth = 200;
  const cardHeight = 100;

  const calculatePosition = (index: number) => {
    const cardsPerRow = Math.floor(svgWidth / (cardWidth + 30));
    const row = Math.floor(index / cardsPerRow);
    const col = index % cardsPerRow;
    
    return {
      x: 50 + col * (cardWidth + 30),
      y: 50 + row * (cardHeight + 30)
    };
  };

  return (
    <div className="svg-container">
      <h2>Lista de Contatos em SVG</h2>
      
      <svg 
        width="100%" 
        height="600" 
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="contact-svg"
      >
        {/* Fundo */}
        <rect width="100%" height="100%" fill="#f8fafc" />
        
        {/* Grade de referência */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e2e8f0" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
        
        {/* Título */}
        <text x="400" y="30" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#1e293b">
          Lista de Contatos
        </text>
        
        {/* Contatos */}
        {contacts.map((contact, index) => {
          const position = calculatePosition(index);
          
          return (
            <g key={contact.id} transform={`translate(${position.x}, ${position.y})`}>
              {/* Cartão */}
              <rect
                width={cardWidth}
                height={cardHeight}
                rx="10"
                fill={contact.cor}
                stroke="#ffffff"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              
              {/* Número do contato */}
              <circle cx="20" cy="20" r="15" fill="#ffffff" />
              <text x="20" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill={contact.cor}>
                {index + 1}
              </text>
              
              {/* Informações do contato */}
              <text x="100" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">
                {contact.nome}
              </text>
              
              <text x="100" y="50" textAnchor="middle" fontSize="11" fill="#ffffff">
                📞 {contact.telefone}
              </text>
              
              <text x="100" y="70" textAnchor="middle" fontSize="10" fill="#ffffff">
                ✉️ {contact.email}
              </text>
            </g>
          );
        })}
        
        {/* Efeitos de sombra */}
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Mensagem quando não há contatos */}
        {contacts.length === 0 && (
          <text x="400" y="300" textAnchor="middle" fontSize="18" fill="#64748b" fontStyle="italic">
            Adicione contatos para visualizar a lista
          </text>
        )}
        
        {/* Rodapé */}
        <text x="400" y="580" textAnchor="middle" fontSize="12" fill="#64748b">
          Total de contatos: {contacts.length}
        </text>
      </svg>
      
      <div className="svg-actions">
        <button 
          onClick={() => {
            const svgElement = document.querySelector('.contact-svg');
            if (svgElement) {
              const serializer = new XMLSerializer();
              const svgString = serializer.serializeToString(svgElement);
              const blob = new Blob([svgString], { type: 'image/svg+xml' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'contatos.svg';
              a.click();
              URL.revokeObjectURL(url);
            }
          }}
          className="export-btn"
        >
          Exportar SVG
        </button>
      </div>
    </div>
  );
};

export default ContactSVG;