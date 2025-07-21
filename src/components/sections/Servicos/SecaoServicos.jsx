import React from 'react';
import TituloSecao from '../../ui/TituloSecao';
import CarrosselServicos from './CarrosselServicos';
import styles from './SecaoServicos.module.css';

export default function SecaoServicos() {
   const servicos = [
    {
      titulo: "Direito do Consumidor",
      descricao: "Defesa contra abusos de empresas, como: Ações contra companhias aéreas (atrasos, extravio de bagagem); Problemas com planos de saúde (negativa de cobertura, cobranças indevidas); Produtos com defeito ou serviços não entregues.",
      icone: "/images/icons/direito do consumidor.svg",
      destaque: false
    },
    {
      titulo: "Direito de Família e Sucessões",
      descricao: "Soluções para conflitos familiares, incluindo: Divórcio consensual ou litigioso; Pensão alimentícia, guarda de filhos e inventários; Reconhecimento de união estável.",
      icone: "/images/icons/direito-de-familia.svg",
      destaque: true
    },
    {
      titulo: "Direito Civil e Contratual",
      descricao: "Proteção em disputas cotidianas, como: Cobranças abusivas ou contratos não cumpridos; Danos morais e materiais por falhas em serviços; Revisão de cláusulas abusivas.",
      icone: "/images/icons/direito civil e contratual.svg",
      destaque: false
    },
    {
      titulo: "Direito Trabalhista (para o trabalhador)",
      descricao: "Defesa dos direitos do trabalhador, incluindo: Verbas rescisórias não pagas; Reversão de justa causa; Horas extras, adicional de insalubridade ou periculosidade; Assédio moral ou sexual no ambiente de trabalho.",
      icone: "/images/icons/direito civil e contratual.svg",
      destaque: true
    },
    {
      titulo: "Direito Previdenciário",
      descricao: "Garantia de benefícios do INSS, como: Aposentadorias e benefícios (auxílio-doença, BPC/LOAS, pensão por morte); Revisão de aposentadoria e reconhecimento de tempo de contribuição; Ações contra indeferimento de benefício.",
      icone: "/images/icons/icone-das-maos.svg",
      destaque: false
    },
    {
      titulo: "Direito Bancário/Contratual",
      descricao: "Proteção contra abusos bancários, incluindo: Cobrança de tarifas abusivas (cesta de serviços, manutenção de conta); Venda casada de produtos financeiros; Empréstimos consignados não autorizados; Negativação indevida do nome; Fraudes bancárias e transferências indevidas.",
      icone: "/images/icons/icone-das-maos.svg",
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
        
        <CarrosselServicos servicos={servicos} />
      </div>
    </section>
  );
}