import React, { useState, useEffect } from 'react';
import TituloSecao from '../../ui/TituloSecao';
import styles from './SecaoDepoimentos.module.css';

export default function SecaoDepoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisiveis, setCardsVisiveis] = useState(3);

  const depoimentos = [
    {
      nome: "Brenda Rocha",
      texto: "Eu ter sido hackeada fez sumir meu chão. O apoio do Nicolas foi muito importante, ele se mostrou super solícito, empenhado e deixou meus sentimentos sendo validados. Com isso me senti acolhida e esperançosa sobre a minha opinião sendo defendida por ele!",
      estrelas: 5
    },
    {
      nome: "Marcelo Guimarães",
      texto: "Tive a honra de escolher o doutor Nicolas pra me orientar num processo que enviariam o CNPJ da minha empresa pra Serasa indevidamente, fui prontamente atendido e com todas as dúvidas sanadas e ele me orientou corretamente como me proceder pra resolver rápido e sem aborrecemos. Só gratidão ao doutor Nicolas.",
      estrelas: 5
    },
    {
      nome: "Gabriel Viana",
      texto: "Ganhamos! Processo online contra a transportadora e o Dr. Nicolas Neves foi espetacular! Mesmo à distância, conduziu tudo com maestria. Se busca justiça e eficiência, contrate-o! Ele é a prova de que a união entre advocacia digital e presencial funciona perfeitamente.",
      estrelas: 5
    },
    {
      nome: "Brendon Lee",
      texto: "Dr Nicolas, os contratos lá deram tudo certinho, tanto o de locação quanto o de aluguel de veículos, antes eu estava tendo dor de cabeça demais com os aluguéis, agora tudo certinho, o cliente entendeu bem melhor e eu fico bem mais seguro também, só tenho a agradecer a você!!",
      estrelas: 5
    },
    {
      nome: "Igor R.",
      texto: "O dr. Nicolas tem prestado uma ótima assistência jurídica a mim e minha família no acompanhamento eficiente das nossas ações judiciais, pois é composta por excelentes profissionais que prezam pela qualidade do atendimento em seu escritório, de forma clara e acessível.",
      estrelas: 5
    },
    {
      nome: "Gabrielle G. Costa",
      texto: "A atuação do dr. Nicolas foi marcada por um conhecimento técnico impecável, uma postura ética admirável e uma atenção excepcional aos detalhes. Desde o início, senti-me amparada por suas orientações claras e estratégias que demonstraram genuíno comprometimento com a justiça.",
      estrelas: 5
    }
  ];

  // Efeito para ajustar a quantidade de cards visíveis com base na largura da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCardsVisiveis(1);
      } else {
        setCardsVisiveis(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Executa ao montar o componente para definir o estado inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, depoimentos.length - cardsVisiveis);
  const slidePercentage = 100 / cardsVisiveis;
  const numIndicadores = cardsVisiveis === 1 ? depoimentos.length : maxIndex + 1;

  // Garante que o índice atual não fique fora dos limites ao redimensionar
  useEffect(() => {
    if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id='depoimentos' className={styles.secaoDepoimentos}>
      <div className={styles.container}>
        <TituloSecao
          titulo="Clientes que confiaram e venceram"
          subtitulo="Veja o que dizem quem já contou com meu trabalho"
          centralized={true}
        />

        <div className={styles.carrosselContainer}>
          <button className={styles.botaoAnterior} onClick={prevSlide}>
            ‹
          </button>

          <div className={styles.carrosselWrapper}>
            <div
              className={styles.carrosselTrack}
              style={{
                transform: `translateX(-${currentIndex * slidePercentage}%)`
              }}
            >
              {depoimentos.map((depoimento, index) => (
                <div key={`depoimento-${depoimento.nome.replace(/\s+/g, '-').toLowerCase()}`} className={styles.depoimentoSlide}>
                  <div className={styles.depoimentoCard}>
                    <div className={styles.estrelas}>
                      {Array.from({ length: depoimento.estrelas }).map((_, i) => (
                        <span key={`estrela-${index}-${i}`} className={styles.estrela}>⭐</span>
                      ))}
                    </div>
                    <p className={styles.texto}>"{depoimento.texto}"</p>
                    <div className={styles.autor}>
                      <span className={styles.iconeAutor}>👤</span>
                      <span className={styles.nome}>{depoimento.nome}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.botaoProximo} onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className={styles.indicadores}>
          {Array.from({ length: numIndicadores }).map((_, index) => (
            <button
              key={`indicador-grupo-${index + 1}`}
              className={`${styles.indicador} ${index === currentIndex ? styles.ativo : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}