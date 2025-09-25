# SGDE Frontend - Sistema de Gerenciamento de Doações para Emergências

## 📋 Sobre o Projeto
Frontend desenvolvido em **React.js com TypeScript** para a **Atividade Extensionista II** do curso de **Análise e Desenvolvimento de Sistemas** - UNINTER.

Interface moderna e responsiva para gerenciamento eficiente de doações em situações de emergência.

## 🚀 Tecnologias Utilizadas

- **React.js 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **React Hook Form** - Gerenciamento de formulários
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones
- **React Query** - Gerenciamento de estado server-side

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   └── Loading.tsx
│   ├── SvgList.tsx     # Lista de itens com ícones
│   ├── ItemForm.tsx    # Formulário de cadastro
│   └── DonorList.tsx   # Lista de doadores
├── pages/              # Páginas da aplicação
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Donors.tsx
│   ├── Items.tsx
│   └── Distribution.tsx
├── services/           # Conexão com API
│   └── api.ts
├── types/              # Definições TypeScript
│   └── index.ts
├── contexts/           # Gerenciamento de estado
│   └── AuthContext.tsx
├── hooks/              # Custom hooks
│   └── useAuth.ts
├── utils/              # utilitários
│   └── constants.ts
├── styles/             # Estilos globais
│   └── globals.css
└── App.tsx             # Componente principal
```

## ⚙️ Funcionalidades Implementadas

### 🔐 Autenticação
- [x] Login e logout de usuários
- [x] Proteção de rotas privadas
- [x] Validação de formulários
- [x] Armazenamento seguro de tokens

### 📊 Gestão de Doações
- [x] CRUD completo de doadores
- [x] Cadastro e listagem de itens
- [x] Interface responsiva para tablets e mobile
- [x] Busca e filtros básicos

### 🎨 Interface
- [x] Design system consistente
- [x] Modo claro/escuro (opcional)
- [x] Componentes acessíveis
- [x] Loading states e feedback visual

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação e Execução

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/sgde-frontend.git

# Entrar na pasta do projeto
cd sgde-frontend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas configurações

# Executar em modo desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build

# Qualidade de código
npm run lint         # ESLint
npm run type-check   # Verificação TypeScript
```

## 🌐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=SGDE Frontend
```

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints para:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Desenvolvimento

### Adicionando um Novo Componente

1. Crie o arquivo em `src/components/`
2. Defina as props TypeScript:
```typescript
interface ComponentProps {
  title: string;
  onAction: () => void;
}
```

3. Exporte o componente:
```typescript
export const MeuComponente: React.FC<ComponentProps> = ({ title, onAction }) => {
  return <div>{title}</div>;
};
```

### Integração com API

```typescript
// Exemplo de uso da API
import { api } from '../services/api';

const fetchDonors = async () => {
  const response = await api.get('/donors');
  return response.data;
};
```

## 🚀 Deploy

### Deploy na Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel
```

### Deploy Manual

```bash
# Build do projeto
npm run build

# A pasta 'dist' estará pronta para deploy
```

## 📊 Scripts do Package.json

```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext ts,tsx",
  "type-check": "tsc --noEmit"
}
```

## 👥 Autor

**Messazabiel Moreira**  
- Curso: Análise e Desenvolvimento de Sistemas
- Disciplina: Atividade Extensionista II
- UNINTER - Centro Universitário Internacional

## 📝 Licença

Projeto acadêmico desenvolvido para a UNINTER.
