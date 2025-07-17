import React from "react";
import Cabecalho from "./layout/Cabecalho/Cabecalho";
import SecaoHero from "./sections/Hero/SecaoHero";
import SecaoServicos from "./sections/Servicos/SecaoServicos";
import SecaoSobre from "./sections/Sobre/SecaoSobre";
import SecaoDiferenciais from "./sections/Diferenciais/SecaoDiferenciais";
import SecaoDepoimentos from "./sections/ProvaSocial/SecaoDepoimentos";
import SecaoFaq from "./sections/Faq/SecaoFaq";
import SecaoContato from "./sections/Contato/SecaoContato";
import Rodape from "./layout/Rodape/Rodape";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Cabecalho />
      <SecaoHero />
      <SecaoServicos />
      <SecaoSobre />
      <SecaoDiferenciais />
      <SecaoDepoimentos />
      <SecaoFaq />
      <SecaoContato />
      <Rodape />
    </div>
  );
}
