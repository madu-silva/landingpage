import React from 'react';
import styles from './Botao.module.css';

export default function Botao({ children, variant = 'primary', className = '', onClick, ...props }) {
  return (
    <button 
      className={`${styles.botao} ${styles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}