import React, { useState } from 'react';
import TituloSecao from '../../ui/TituloSecao';
import Botao from '../../ui/Botao';
import styles from './SecaoSobre.module.css';

export default function SecaoSobre() {
  const [acordeaoAberto, setAcordeaoAberto] = useState(null);

  const toggleAcordeao = (index) => {
    setAcordeaoAberto(acordeaoAberto === index ? null : index);
  };

  const detalhes = [
    {
      icone: '🏛️',
      titulo: 'Experiência no Ministério Público',
      conteudo: (
        <div className={styles.conteudoDetalhes}>
          <p>
            Atuei no <strong>Ministério Público de Minas Gerais</strong> sob supervisão da Promotora 
            Dra. Carolina Marques Andrade e da Dra. Angélica Medeiros, lidando com 
            casos sensíveis de <strong>Direito Civil, Família, Sucessões e Direitos Coletivos</strong>{' '}
            - sempre com rigor técnico e sensibilidade.
          </p>
          <p className={styles.destaque}>
            💡 <em>Essa experiência me ensinou a importância do equilíbrio entre técnica jurídica e humanização do atendimento.</em>
          </p>
        </div>
      )
    },
    {
      icone: '⚖️',
      titulo: 'Advocacia Multidisciplinar',
      conteudo: (
        <div className={styles.conteudoDetalhes}>
          <p>
            Experiência prática em escritórios de alta demanda, atuando em:
          </p>
          <ul className={styles.listaAreas}>
            <li>Direito Civil e Empresarial</li>
            <li>Direito Trabalhista e Previdenciário</li>
            <li>Direito Bancário e do Consumidor</li>
          </ul>
          <p className={styles.destaque}>
            🎯 <em>Essa vivência multidisciplinar me permite enxergar seu caso por diferentes ângulos, 
            criando estratégias personalizadas e eficazes.</em>
          </p>
        </div>
      )
    },
    {
      icone: '🏥',
      titulo: 'Especialização em Direito Médico',
      conteudo: (
        <div className={styles.conteudoDetalhes}>
          <p>
            <strong>Pós-graduado em Direito Médico e da Saúde</strong> pela LEGALE (2024).
          </p>
          <p>
            Especialização que amplia minha capacidade de atuar em:
          </p>
          <ul className={styles.listaAreas}>
            <li>Casos envolvendo planos de saúde</li>
            <li>Erros médicos e má conduta profissional</li>
            <li>Responsabilidade civil hospitalar</li>
          </ul>
          <p className={styles.destaque}>
            🔍 <em>Áreas onde os direitos dos pacientes frequentemente são negligenciados 
            e onde minha especialização faz a diferença.</em>
          </p>
        </div>
      )
    }
  ];

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
              {/* Introdução principal - sempre visível para varredura rápida */}
              <div className={styles.introducao}>
                <h3 className={styles.nomeAdvogado}>Nicolas Ribeiro Neves</h3>
                <p className={styles.oab}>OAB/MG nº 238.860</p>
                <p className={styles.missao}>
                  Minha missão é oferecer mais do que soluções jurídicas: é garantir que você se sinta{' '}
                  <strong className={styles.destaqueMissao}>ouvido, compreendido e representado com excelência.</strong>
                </p>
              </div>

              {/* Seções expansíveis com técnicas de progressive disclosure */}
              <div className={styles.detalhesContainer}>
                {detalhes.map((detalhe, index) => (
                  <div 
                    key={`detalhe-${index}`} 
                    className={`${styles.detalheItem} ${acordeaoAberto === index ? styles.aberto : ''}`}
                  >
                    <button 
                      className={styles.resumo}
                      onClick={() => toggleAcordeao(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleAcordeao(index);
                        }
                      }}
                      aria-expanded={acordeaoAberto === index}
                      aria-controls={`conteudo-${index}`}
                    >
                      <span className={styles.icone}>{detalhe.icone}</span>
                      <div className={styles.textoResumo}>
                        <strong className={styles.tituloResumo}>{detalhe.titulo}</strong>
                      </div>
                      <span className={styles.seta}>▼</span>
                    </button>
                    {acordeaoAberto === index && (
                      <div 
                        id={`conteudo-${index}`}
                        className={styles.conteudoExpansivel}
                      >
                        {detalhe.conteudo}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
