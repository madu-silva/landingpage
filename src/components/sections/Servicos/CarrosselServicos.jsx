import React, { useState } from 'react';
import styles from './CarrosselServicos.module.css';

export default function CarrosselServicos({ servicos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsVisiveis = 3;
  const maxIndex = servicos.length - cardsVisiveis;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
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
            transform: `translateX(-${currentIndex * 100 / 3}%)`
          }}
        >
          {servicos.map((servico, index) => (
            <div key={index} className={styles.slide}>
              <div className={`${styles.servicoCard} ${servico.destaque ? styles.destaque : ''}`}>
                <div className={styles.iconeContainer}>
                  <img src={servico.icone} alt={servico.titulo} className={styles.icone} />
                </div>
                <h3 className={styles.tituloServico}>{servico.titulo}</h3>
                <p className={styles.descricaoServico}>{Array.isArray(servico.descricao) ? (
                  <ul>
                    {servico.descricao.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{servico.descricao}</p>
                )}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.botaoProximo} onClick={nextSlide}>
        ›
      </button>   
    </div>
  );
}
