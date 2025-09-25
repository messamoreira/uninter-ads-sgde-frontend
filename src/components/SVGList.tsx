import React from 'react';
import { Volunteer } from '../types/Volunteer';

interface SVGListProps {
  volunteers: Volunteer[];
}

const SVGList: React.FC<SVGListProps> = ({ volunteers }) => {
  return (
    <div className="svg-list-container">
      <h3>📊 Lista de Voluntários - Visualização SVG</h3>
      <p>Dados cadastrados no sistema:</p>
      
      <svg width="100%" height={Math.max(400, volunteers.length * 60 + 80)} className="volunteers-svg">
        {/* Cabeçalho */}
        <rect x="0" y="0" width="100%" height="50" fill="#2c3e50" />
        <text x="20" y="30" fill="white" fontSize="14" fontWeight="bold">Nome</text>
        <text x="250" y="30" fill="white" fontSize="14" fontWeight="bold">Telefone</text>
        <text x="400" y="30" fill="white" fontSize="14" fontWeight="bold">E-mail</text>
        <text x="650" y="30" fill="white" fontSize="14" fontWeight="bold">Data de Cadastro</text>

        {/* Linhas dos voluntários */}
        {volunteers.map((volunteer, index) => (
          <g key={volunteer.id}>
            {/* Fundo alternado para melhor legibilidade */}
            <rect 
              x="0" 
              y={50 + index * 60} 
              width="100%" 
              height="50" 
              fill={index % 2 === 0 ? '#ecf0f1' : '#ffffff'}
            />
            
            {/* Dados */}
            <text x="20" y={80 + index * 60} fontSize="12" fill="#2c3e50">{volunteer.nome}</text>
            <text x="250" y={80 + index * 60} fontSize="12" fill="#2c3e50">{volunteer.telefone}</text>
            <text x="400" y={80 + index * 60} fontSize="10" fill="#2c3e50">{volunteer.email}</text>
            <text x="650" y={80 + index * 60} fontSize="10" fill="#2c3e50">
              {volunteer.dataCadastro.toLocaleDateString('pt-BR')}
            </text>
            
            {/* Linha separadora */}
            <line 
              x1="0" 
              y1={50 + index * 60 + 50} 
              x2="100%" 
              y2={50 + index * 60 + 50} 
              stroke="#bdc3c7" 
            />
          </g>
        ))}

        {/* Mensagem quando não há voluntários */}
        {volunteers.length === 0 && (
          <text x="50%" y="150" textAnchor="middle" fill="#7f8c8d" fontSize="16">
            Nenhum voluntário cadastrado ainda. Preencha o formulário acima!
          </text>
        )}

        {/* Rodapé */}
        <rect 
          x="0" 
          y={50 + volunteers.length * 60} 
          width="100%" 
          height="40" 
          fill="#34495e" 
        />
        <text 
          x="50%" 
          y={50 + volunteers.length * 60 + 25} 
          fill="white" 
          fontSize="14" 
          textAnchor="middle"
          fontWeight="bold"
        >
          Total de Voluntários no SGDE: {volunteers.length}
        </text>
      </svg>
    </div>
  );
};

export default SVGList;