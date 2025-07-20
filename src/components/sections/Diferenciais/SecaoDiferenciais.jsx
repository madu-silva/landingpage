import React from 'react';
import TituloSecao from '../../ui/TituloSecao';
import styles from './SecaoDiferenciais.module.css';

export default function SecaoDiferenciais() {
  const diferenciais = [
    {
      titulo: "Atendimento Direto e Personalizado",
      descricao: "Você será atendido diretamente por mim, sem repasses ou intermediários! Do primeiro contato à solução final, garantindo total acompanhamento e confidencialidade.",
      icone: "/images/icons/icone-das-maos.svg"
      
    },
    {
      titulo: "Técnica Aliada à Humanização",
      descricao: "Combino preparação técnica (com experiência no MP/MG e pós-graduação em Direito Médico) com sensibilidade para entender suas necessidades reais, sem juridiquês.",
      icone: "/images/icons/icone-das-maos.svg"
    },
    {
      titulo: "Gestão Ágil e Transparente",
      descricao: "Controle rigoroso de prazos processuais mais atualizações claras sobre cada etapa do seu caso. Nunca deixarei você sem resposta.",
      icone: "/images/icons/icone-das-maos.svg"
    },
    {
      titulo: "Soluções Sob Medida",
      descricao: "Estratégias customizadas para seu contexto, seja para evitar litígios ou atuar em contencioso. Atuo em Direito do Consumidor, Família, Saúde e mais.",
      icone: "/images/icons/icone-das-maos.svg"
    },
    {
      titulo: "Ferramentas Jurídicas Modernas",
      descricao: "Uso de tecnologia para agilizar processos, como sistemas de acompanhamento online e comunicação via WhatsApp empresarial.",
      icone: "/images/icons/icone-das-maos.svg"
    },
    {
      titulo: "Ética Inegociável",
      descricao: "Compromisso com a verdade. Só prometo o que posso cumprir. Seu caso será tratado com honestidade e transparência.",
      icone: "/images/icons/icone-das-maos.svg"
    }
  ];

  return (
    <section className={styles.secaoDiferenciais}>
      <div className={styles.container}>
        <TituloSecao 
          titulo="Por que escolher meu trabalho?"
          centralized={true}
        />
        
        <div className={styles.diferenciais}>
          {diferenciais.map((diferencial, index) => (
            <div key={index} className={styles.diferencialCard}>
              <div className={styles.iconeContainer}>
                <img src={diferencial.icone} alt={diferencial.titulo} className={styles.icone} />
              </div>
              <h3 className={styles.titulo}>{diferencial.titulo}</h3>
              <p className={styles.descricao}>{diferencial.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
