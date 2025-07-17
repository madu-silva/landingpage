import React from 'react';
import TituloSecao from '../../ui/TituloSecao';
import styles from './SecaoServicos.module.css';

export default function SecaoServicos() {
  const servicos = [
    {
      titulo: "Direito do Consumidor",
      descricao: "Defesa contra abusos de empresas, como: Ações contra companhias aéreas (atrasos, extravio de bagagem); Problemas com planos de saúde (negativa de cobertura, cobranças indevidas); Produtos com defeito ou serviços não entregues.",
      icone: "/images/icons/direito do comsumidor.svg",
      destaque: false
    },
    {
      titulo: "Direito de Família e Sucessões",
      descricao: "Soluções para conflitos familiares, incluindo: Divórcio consensual ou litigioso; Pensão alimentícia, guarda de filhos e inventários; Reconhecimento de união estável.",
      icone: "/images/icons/direito-de-familia.svg",
      destaque: true
    },
    {
      titulo: "Direito Cível e Contratual",
      descricao: "Proteção em disputas cotidianas, como: Cobranças abusivas ou contratos não cumpridos; Danos morais e materiais por falhas em serviços; Revisão de cláusulas abusivas.",
      icone: "/images/icons/direito civil e contratual.svg",
      destaque: false
    },
    {
      titulo: "Direito de Família e Sucessões",
      descricao: "Soluções para conflitos familiares, incluindo: Divórcio consensual ou litigioso; Pensão alimentícia, guarda de filhos e inventários; Reconhecimento de união estável.",
      icone: "/images/icons/direito-de-familia.svg",
      destaque: true
    },
    {
      titulo: "Direito Cível e Contratual",
      descricao: "Proteção em disputas cotidianas, como: Cobranças abusivas ou contratos não cumpridos; Danos morais e materiais por falhas em serviços; Revisão de cláusulas abusivas.",
      icone: "/images/icons/direito civil e contratual.svg",
      destaque: false
    },
    {
      titulo: "Direito de Família e Sucessões",
      descricao: "Soluções para conflitos familiares, incluindo: Divórcio consensual ou litigioso; Pensão alimentícia, guarda de filhos e inventários; Reconhecimento de união estável.",
      icone: "/images/icons/direito-de-familia.svg",
      destaque: true
    }
  ];

  return (
    <section className={styles.secaoServicos}>
      <div className={styles.container}>
        <TituloSecao 
          titulo="Como posso ajudar você?"
          subtitulo="Atuação estratégica e humanizada em diversas áreas do Direito."
        />
        
        <div className={styles.servicos}>
          {servicos.map((servico, index) => (
            <div 
              key={index} 
              className={`${styles.servicoCard} ${servico.destaque ? styles.destaque : ''}`}
            >
              <div className={styles.iconeContainer}>
                <img src={servico.icone} alt={servico.titulo} className={styles.icone} />
              </div>
              <h3 className={styles.tituloServico}>{servico.titulo}</h3>
              <p className={styles.descricaoServico}>{servico.descricao}</p>
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