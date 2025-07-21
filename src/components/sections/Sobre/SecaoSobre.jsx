import React from 'react';
import TituloSecao from '../../ui/TituloSecao';
import Botao from '../../ui/Botao';
import styles from './SecaoSobre.module.css';

export default function SecaoSobre() {
  return (
    <section className={styles.secaoSobre}>
      <div className={styles.container}>
        <TituloSecao
          titulo="Conheça um pouco sobre mim"
          centralized={true}
        />

        <div className={styles.conteudo}>
          <div className={styles.imagemContainer}>
            <img
              src="/images/hero/nicolas mesa.svg"
              alt="Nicolas Ribeiro Neves em seu escritório"
              className={styles.imagemSobre}
            />
          </div>

          <div className={styles.textoContainer}>
            <div className={styles.texto}>
              <p>
                Sou Nicolas Ribeiro Neves, advogado inscrito na OAB/MG sob o nº
                238.860, e minha missão é oferecer mais do que soluções jurídicas: é
                garantir que você se sinta ouvido, compreendido e representado com
                excelência.
              </p>

              <p>
                Minha trajetória é marcada por experiências em instituições de
                referência, como o Ministério Público de Minas Gerais, onde atuei sob
                a supervisão da Promotora Dra. Carolina Marques Andrade e da Dra.
                Angélica Medeiros. Lá, aprendi a lidar com casos sensíveis de Direito
                Civil, Família, Sucessões e Direitos Coletivos – sempre com rigor
                técnico e sensibilidade.
              </p>

              <p>
                Na advocacia privada, trabalhei em escritórios de alta demanda,
                acumulando experiência prática em Direito Civil, Empresarial,
                Trabalhista, Previdenciário e Bancário. Essa vivência multidisciplinar
                me permite enxergar seu caso por diferentes ângulos, criando
                estratégias personalizadas.
              </p>

              <p>
                Sou pós-graduado em Direito Médico e da Saúde pela LEGALE
                (conclusão em 2024), uma especialização que amplia minha
                capacidade de atuar em casos envolvendo planos de saúde, erros
                médicos e responsabilidade civil hospitalar – áreas onde os direitos
                dos pacientes frequentemente são negligenciados.
              </p>
            </div>

            <Botao href="https://wa.me/5538999719257" className={styles.botaoSobre}>
              Fale diretamente comigo!
            </Botao>
          </div>
        </div>
      </div>
    </section>
  );
}
