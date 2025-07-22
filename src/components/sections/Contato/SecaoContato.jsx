import React, { useState } from "react";
import "./SecaoContato.css"; 

// npm install @emailjs/browser
import emailjs from '@emailjs/browser';

export default function SecaoContato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [status, setStatus] = useState(""); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("enviando"); 

    const serviceID = "service_u3c9sqg"; 
    const templateID = "template_n2veh2t";
    const publicKey = "uMLVlXf3_32TNEWbI"; 

    const templateParams = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        mensagem: formData.mensagem,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         setStatus("sucesso");
         setFormData({
            nome: "",
            email: "",
            telefone: "",
            mensagem: "",
         });
         setTimeout(() => setStatus(""), 5000);
      }, (err) => {
         console.log('FAILED...', err);
         setStatus("erro");
         setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em contato</h2>
          <p className="contact-subtitle">Estou pronto para ajudar você</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-grid">
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome *"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone *"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div>
            <textarea
              name="mensagem"
              placeholder="Deixe aqui sua mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              rows={6}
              className="form-input form-textarea"
            />
          </div>

          <div className="submit-container">
            {status === 'sucesso' && <p className="status-message success">Mensagem enviada!</p>}
            {status === 'erro' && <p className="status-message error">Ocorreu um erro.</p>}
            
            <button type="submit" className="submit-button" disabled={status === 'enviando'}>
              {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
