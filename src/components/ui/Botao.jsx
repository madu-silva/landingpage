import React from 'react';
import styles from './Botao.module.css';

export default function Botao({ children, variant = 'primary', className = '', onClick, href, target = '_blank', ...props }) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      className={`${styles.botao} ${styles[variant]} ${className}`}
      onClick={onClick}
      href={href}
      target={href ? target : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
