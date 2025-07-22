import React, { useEffect, useState } from 'react';
import TituloSecao from '../../ui/TituloSecao';
import styles from './SecaoFaq.module.css';

export default function SecaoFaq() {
  const [faqs, setFaqs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/madu-silva/landingpage/refs/heads/main/faq.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar perguntas frequentes');
        }
        return response.json();
      })
      .then(dados => {
        setFaqs(dados.faqs);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return (
      <section className={styles.secaoFaq}>
        <div className={styles.container}>
          <TituloSecao
            titulo="Tire suas dúvidas"
            subtitulo="Respostas claras para as questões mais comuns"
          />
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Carregando perguntas...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.secaoFaq}>
        <div className={styles.container}>
          <TituloSecao
            titulo="Tire suas dúvidas"
            subtitulo="Respostas claras para as questões mais comuns"
          />
          <div className={styles.error}>
            <p>Erro ao carregar perguntas frequentes: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='faq' className={styles.secaoFaq}>

      <div className={styles.container}>
        <TituloSecao
          titulo="Tire suas dúvidas"
          subtitulo="Respostas claras para as questões mais comuns sobre nossos serviços jurídicos"
        />

        <div className={styles.faqContainer}>
          {faqs?.map((faq, index) => (
            <div key={`faq-${index}-${faq.pergunta.slice(0, 10)}`} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.questionText}>{faq.pergunta}</span>
                <span className={`${styles.icon} ${activeIndex === index ? styles.iconRotated : ''}`}>
                  +
                </span>
              </button>

              <div
                className={`${styles.faqAnswer} ${activeIndex === index ? styles.answerOpen : ''}`}
              >
                <div className={styles.answerContent}>
                  <p>{faq.resposta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}