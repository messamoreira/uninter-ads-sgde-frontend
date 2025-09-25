import React, { useState } from 'react';
import { FormData } from '../types/Volunteer';

interface ContactFormProps {
  onAddVolunteer: (volunteer: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAddVolunteer }) => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.telefone && formData.email) {
      onAddVolunteer(formData);
      setFormData({ nome: '', telefone: '', email: '' });
      alert('Obrigado por se voluntariar! Seus dados foram registrados no SGDE.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Cadastro de Voluntário</h2>
      <p>Preencha seus dados para se juntar à nossa rede de voluntários</p>
      
      <div className="form-group">
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          placeholder="Digite seu nome completo"
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          placeholder="(11) 99999-9999"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="seu.email@exemplo.com"
        />
      </div>

      <button type="submit" className="submit-btn">
        🚀 Quero Ajudar!
      </button>
    </form>
  );
};

export default ContactForm;