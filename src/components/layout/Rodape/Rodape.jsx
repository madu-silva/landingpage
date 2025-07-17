import React from 'react';
import styles from './Rodape.module.css';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.conteudo}>
          <div className={styles.logoSection}>
            <img 
              src="/images/logos/LOGO_OFICIAL.svg" 
              alt="Nicolas Ribeiro Neves - Logo" 
              className={styles.logoRodape}
            />
          </div>
          
          <div className={styles.infoSection}>
            <h4 className={styles.tituloSecao}>Contato</h4>
            <div className={styles.infoItem}>
              <img src="/images/icons/icone-map.svg" alt="Localização" className={styles.icone} />
              <span>Uberlândia - MG</span>
            </div>
            <div className={styles.infoItem}>
              <img src="/images/icons/phone-android.svg" alt="Telefone" className={styles.icone} />
              <span>(34) 9999-9999</span>
            </div>
            <div className={styles.infoItem}>
              <img src="/images/icons/mail-outlined.svg" alt="Email" className={styles.icone} />
              <span>contato@nicolasadvocacia.com</span>
            </div>
            <div className={styles.infoItem}>
              <img src="/images/icons/whatsap.svg" alt="WhatsApp" className={styles.icone} />
              <span>WhatsApp</span>
            </div>
          </div>
          
          <div className={styles.linkSection}>
            <h4 className={styles.tituloSecao}>Links Úteis</h4>
            <a href="#inicio" className={styles.link}>Início</a>
            <a href="#servicos" className={styles.link}>Serviços</a>
            <a href="#sobre" className={styles.link}>Sobre mim</a>
            <a href="#depoimentos" className={styles.link}>Depoimentos</a>
            <a href="#faq" className={styles.link}>FAQ</a>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; 2025 Nicolas Ribeiro Neves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}