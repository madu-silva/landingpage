import React, { useState, useEffect } from 'react';
import styles from './CarrosselServicos.module.css';

export default function CarrosselServicos({ servicos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisiveis, setCardsVisiveis] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsVisiveis(1);
      } else if (window.innerWidth <= 1024) {
        setCardsVisiveis(2);
      } else {
        setCardsVisiveis(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, servicos.length - cardsVisiveis);

  useEffect(() => {
    if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  
  const slideOffset = 100 / cardsVisiveis;

  return (
    <div className={styles.carrosselContainer}>
      <button className={styles.botaoAnterior} onClick={prevSlide} aria-label="Slide anterior">
        ‹
      </button>

      <div className={styles.carrosselWrapper}>
        <div
          className={styles.carrosselTrack}
          style={{
            transform: `translateX(-${currentIndex * slideOffset}%)`,
          }}
        >
          {servicos.map((servico, index) => {
            const isCenter = (cardsVisiveis === 3 && index === currentIndex + 1) ||
                             (cardsVisiveis === 1 && index === currentIndex);

            return (
              <div key={index} className={styles.slide}>
                <div className={`${styles.servicoCard} ${isCenter ? styles.destaque : ''}`}>
                  <div className={styles.iconeContainer}>
                    <img src={servico.icone} alt={servico.titulo} className={styles.icone} />
                  </div>
                  <h3 className={styles.tituloServico}>{servico.titulo}</h3>
                  <div className={styles.descricaoServico}>
                    {Array.isArray(servico.descricao) ? (
                      <ul>
                        {servico.descricao.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{servico.descricao}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className={styles.botaoProximo} onClick={nextSlide} aria-label="Próximo slide">
        ›
      </button>
    </div>
  );
}