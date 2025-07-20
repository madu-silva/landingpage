import React from 'react';
import TituloSecao from '../../ui/TituloSecao';
import CarrosselServicos from './CarrosselServicos';
import styles from './SecaoServicos.module.css';

export default function SecaoServicos() {
   const servicos = [
    {
      titulo: "Direito do Consumidor",
      descricao: ["Ações contra companhias aéreas (overbooking, extravio de bagagem, atrasos de voo);",
        "Problemas com planos de saúde (negativa de cobertura, reajuste abusivo, rescisão contratual);",
        "Cobranças indevidas, nome negativado indevidamente e produtos com defeito."
      ],
      icone: "/images/icons/direito do consumidor.svg",
      destaque: false
    },
    {
      titulo: "Direito de Família e Sucessões",
      descricao: ["Divórcio consensual e litigioso;",
        "Guarda, pensão alimentícia e regulamentação de visitas;",
        "Partilha de bens, inventários e testamentos;",
        "Reconhecimento ou dissolução de união estável."
      ],
      icone: "/images/icons/direito-de-familia.svg",
      destaque: true
    },
    {
      titulo: "Direito Trabalhista (para o trabalhador)",
      descricao: ["Verbas rescisórias não pagas;",
        "Reversão de justa causa;",
        "Horas extras, adicional de insalubridade ou periculosidade;",
        "Assédio moral ou sexual no ambiente de trabalho."
      ],
      icone: "/images/icons/direito civil e contratual.svg",
      destaque: false
    },
    {
      titulo: "Direito Previdenciário",
      descricao: [
        "Aposentadorias e benefícios do INSS (auxílio-doença, BPC/LOAS, pensão por morte);",
        "Revisão de aposentadoria e reconhecimento de tempo de contribuição;",
        "Ações contra indeferimento de benefício."
      ],
      icone: "/images/icons/icone-das-maos.svg",
      destaque: true
    },
    {
      titulo: "Direito Cível e Contratual",
      descricao: [
        "Cobranças, contratos não cumpridos, inadimplemento;",
        "Assessoria para formalização e revisão de contratos;",
        "Danos morais e materiais decorrentes de falha na prestação de serviço."
      ],
      icone: "/images/icons/direito do consumidor.svg",
      destaque: false
    },
    {
      titulo: "Direito Médico e da Saúde",
      descricao: [
        "Ações por erro médico e responsabilidade civil hospitalar;",
        "Negativa de tratamento por parte de plano de saúde;",
        "Indenizações por danos causados por condutas médicas inadequadas."
      ],
      icone: "/images/icons/direito civil e contratual.svg",
      destaque: true
    },
    {
      titulo: "Direito Bancário/Contratual",
      descricao: [
        "Cobrança de tarifas abusivas ou não informadas;",
        "Venda casada de produtos financeiros;",
        "Empréstimos consignados não autorizados, especialmente contra idosos ou aposentados;",
        "Negativação indevida do nome.",
      ],
      icone: "/images/icons/icone-das-maos.svg",
      destaque: false
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