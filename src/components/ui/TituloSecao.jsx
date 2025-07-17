import React from 'react';
import styles from './TituloSecao.module.css';

export default function TituloSecao({ titulo, subtitulo, centralized = true }) {
  return (
    <div className={`${styles.header} ${centralized ? styles.centralized : ''}`}>
      <h2 className={styles.titulo}>{titulo}</h2>
      {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
    </div>
  );
}
