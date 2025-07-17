import React from 'react';
import Botao from '../../ui/Botao';
import styles from './Cabecalho.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img 
            src="/images/logos/LOGO_OFICIAL.svg" 
            alt="Nicolas Ribeiro Neves - Logo" 
            className={styles.logoImagem}
          />
        </div>
        
        <nav className={styles.nav}>
          <a href="#inicio" className={styles.navLink}>Início</a>
          <a href="#sobre" className={styles.navLink}>Sobre mim</a>
          <a href="#servicos" className={styles.navLink}>Serviços</a>
          <a href="#depoimentos" className={styles.navLink}>Depoimentos</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
        </nav>
        
        <Botao variant="primary">Fale comigo!</Botao>
      </div>
    </header>
  );
}