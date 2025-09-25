export interface Contact {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  cor: string;
  posicao: {
    x: number;
    y: number;
  };
}