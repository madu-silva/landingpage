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

          <div className={styles.mapa}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7548.8403373861065!2d-48.27236542559627!3d-18.912787407439218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445af5016349d%3A0xc52b896f0663790!2sAv.%20Ces%C3%A1rio%20Alvim%2C%201374%20-%20Centro%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-098!5e0!3m2!1spt-BR!2sbr!4v1753143744947!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <img src="/images/icons/icone-map.svg" alt="Localização" className={styles.icone} />
              <span>Av. Cesário Alvim, 1374 - Centro - Uberlândia/MG </span>
            </div>
            <div className={styles.infoItem}>
              <img src="/images/icons/phone-android.svg" alt="Telefone" className={styles.icone} />
              <span>(38) 99971-9257</span>
            </div>
            <div className={styles.infoItem}>
              <img src="/images/icons/mail-outlined.svg" alt="Email" className={styles.icone} />
              <span>nicolasribeironeves.adv@gmail.com</span>
            </div>
          </div>

        </div>

        <div className={styles.copyright}>
          <p>&copy; 2025 Nicolas Ribeiro Neves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}