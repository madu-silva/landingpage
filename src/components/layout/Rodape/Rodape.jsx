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
            {/* O link do mapa foi atualizado para um link de incorporação real */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.723483397304!2d-48.2799346850989!3d-18.91136448718919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a444f8f2e23853%3A0x63045263a8a19c4c!2sAv.%20Ces%C3%A1rio%20Alvim%2C%201374%20-%20Centro%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-098!5e0!3m2!1spt-BR!2sbr!4v1658461581452!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <img src="/images/icons/icone-map.svg" alt="Localização" className={styles.icone} />
              <span>Av. Cesário Alvim, 1374 - Centro - Uberlândia/MG</span>
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
          <p>© 2025 Nicolas Ribeiro Neves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}