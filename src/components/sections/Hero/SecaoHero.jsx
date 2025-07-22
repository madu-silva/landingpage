import React from 'react';
import Botao from '../../ui/Botao';
import styles from './SecaoHero.module.css';

export default function SecaoHero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.conteudo}>
          <div className={styles.textoContainer}>
            <h2 className={styles.titulo}>
              Justiça acessível para<br />
              problemas reais.<br />
              <span className={styles.destaque}>Soluções jurídicas sem<br />
              juridiquês.</span>
            </h2>
            <p className={styles.descricao}>
              Advogado especializado em Direito do<br />
              Consumidor, Família e Saúde. Atendimento<br />
              personalizado, direto e sem intermediários.<br />
              Mais do que processos, eu lido com histórias.
            </p>
            <Botao href="https://wa.me/5538999719257" className={styles.botaoHero}>
              Fale diretamente comigo!
            </Botao>

            <div className={styles.localizacao}>
              <img src="/images/icons/icone-map.svg" alt="Localização" className={styles.iconePin} />
              <span>Uberlândia e região | Atend. online para todo o Brasil</span>
            </div>
          </div>
          <div className={styles.imagemContainer}>
            <img
              src="/images/hero/nicolas.svg"
              alt="Nicolas Ribeiro Neves - Advogado"
              className={styles.imagemAdvogado}
            />
          </div>
        </div>
      </div>
    </section>
  );
}