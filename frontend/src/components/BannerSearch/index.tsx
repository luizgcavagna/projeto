import React, { useState } from 'react';
import './BannerSearch.css';

interface SearchFormData {
  estado: string;
  cidade: string;
  categoria: string;
}

export default function BannerSearch() {
  const [formData, setFormData] = useState<SearchFormData>({
    estado: '',
    cidade: '',
    categoria: ''
  });

  // Sintaxe moderna: Tipando diretamente o evento com React.ChangeEvent
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Sintaxe moderna: Tipando diretamente com React.FormEvent
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados buscados:', formData);
  };

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Encontre o que você precisa</h1>
        <p className="banner-subtitle">Busque por serviços, produtos ou profissionais na sua região.</p>

        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <label className="input-label">Estado</label>
            <select name="estado" value={formData.estado} onChange={handleChange} className="form-input">
              <option value="">Selecione</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Cidade</label>
            <input type="text" name="cidade" placeholder="Ex: São Paulo" value={formData.cidade} onChange={handleChange} className="form-input" />
          </div>

          <div className="input-group">
            <label className="input-label">Categoria</label>
            <input type="text" name="categoria" placeholder="Ex: Restaurante" value={formData.categoria} onChange={handleChange} className="form-input" />
          </div>

          <button type="submit" className="search-button">Buscar</button>
        </form>
      </div>
    </div>
  );
}