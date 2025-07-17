import React from 'react';
import TituloSecao from '../../ui/TituloSecao';
import styles from './SecaoDepoimentos.module.css';

export default function SecaoDepoimentos() {
  const depoimentos = [
    {
      nome: "Brenda Rocha",
      texto: "Eu ter sido hackeada fez sumir meu chão. O apoio do Nicolas foi muito importante, ele se mostrou super solícito, empenhado e deixou meus sentimentos sendo validados. Com isso me senti acolhida e esperançosa sobre a minha opinião sendo defendida por ele!",
      estrelas: 5
    },
    {
      nome: "Marcelo Guimarães",
      texto: "Tive a honra de escolher o doutor Nicolas pra me orientar num processo que enviariam o CNPJ da minha empresa pra Serasa indevidamente, fui prontamente atendido e com todas as dúvidas sanadas e ele me orientou corretamente como me proceder pra resolver rápido e sem aborrecemos. Só gratidão ao doutor Nicolas. A partir de agora tudo que precisar de um bom advogado é nele que vou.",
      estrelas: 5
    },
    {
      nome: "Gabriel Viana",
      texto: "Ganhamos! Processo online contra a transportadora e o Dr. Nicolas Neves foi espetacular! Mesmo à distância, conduziu tudo com maestria. Se busca justiça e eficiência, contrate-o! Ele é a prova de que a união entre advocacia digital e presencial funciona perfeitamente.",
      estrelas: 5
    }
  ];

  return (
    <section className={styles.secaoDepoimentos}>
      <div className={styles.container}>
        <TituloSecao 
          titulo="Clientes que confiaram e venceram"
          subtitulo="Veja o que dizem quem já contou com meu trabalho"
          centralized={true}
        />
        
        <div className={styles.depoimentos}>
          {depoimentos.map((depoimento, index) => (
            <div key={index} className={styles.depoimentoCard}>
              <div className={styles.estrelas}>
                {Array.from({ length: depoimento.estrelas }).map((_, i) => (
                  <span key={i} className={styles.estrela}>⭐</span>
                ))}
              </div>
              <p className={styles.texto}>"{depoimento.texto}"</p>
              <div className={styles.autor}>
                <span className={styles.iconeAutor}>👤</span>
                <span className={styles.nome}>{depoimento.nome}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.navegacao}>
          <button className={styles.botaoNav}>‹</button>
          <button className={styles.botaoNav}>›</button>
        </div>
      </div>
    </section>
  );
}