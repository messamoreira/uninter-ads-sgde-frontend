export interface Volunteer {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  dataCadastro: Date;
}

export type FormData = Omit<Volunteer, 'id' | 'dataCadastro'>;