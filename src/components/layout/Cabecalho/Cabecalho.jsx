import React, { useState } from 'react';
import Botao from '../../ui/Botao';
import styles from './Cabecalho.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

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

        <nav className={`${styles.nav} ${menuAberto ? styles.navMobileAberto : ''}`}>
          <a href="#inicio" className={styles.navLink} onClick={fecharMenu}>Início</a>
          <a href="#servicos" className={styles.navLink} onClick={fecharMenu}>Serviços</a>
          <a href="#sobre" className={styles.navLink} onClick={fecharMenu}>Sobre mim</a>
          <a href="#depoimentos" className={styles.navLink} onClick={fecharMenu}>Depoimentos</a>
          <a href="#faq" className={styles.navLink} onClick={fecharMenu}>FAQ</a>

          <div className={styles.botaoDesktop}>
            <Botao href="https://wa.me/5538999719257" target="_blank">Fale comigo!</Botao>
          </div>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuAberto ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </header>
  );
}
