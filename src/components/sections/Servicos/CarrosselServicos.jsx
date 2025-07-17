import React, { useState } from 'react';
import styles from './CarrosselServicos.module.css';

export default function CarrosselServicos({ servicos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % servicos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + servicos.length) % servicos.length);
  };

  return (
    <div className={styles.carrosselContainer}>
      <button className={styles.botaoAnterior} onClick={prevSlide}>
        ‹
      </button>
      
      <div className={styles.carrosselWrapper}>
        <div 
          className={styles.carrosselTrack}
          style={{ 
            transform: `translateX(-${currentIndex * 33.333}%)` 
          }}
        >
          {servicos.map((servico, index) => (
            <div key={index} className={styles.slide}>
              <div className={`${styles.servicoCard} ${servico.destaque ? styles.destaque : ''}`}>
                <div className={styles.iconeContainer}>
                  <img src={servico.icone} alt={servico.titulo} className={styles.icone} />
                </div>
                <h3 className={styles.tituloServico}>{servico.titulo}</h3>
                <p className={styles.descricaoServico}>{servico.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className={styles.botaoProximo} onClick={nextSlide}>
        ›
      </button>
      
      <div className={styles.indicadores}>
        {servicos.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicador} ${index === currentIndex ? styles.ativo : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
