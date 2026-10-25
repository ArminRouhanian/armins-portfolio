import React from 'react';
import styles from './Badge.module.css';

export default function Badge({
  variant = 'grey',
  children,
  className = '',
  ...props
}) {
  const isWhite = variant === 'white';
  const variantClass = isWhite ? styles.white : styles.grey;
  const combinedClass = className ? `${styles.badge} ${variantClass} ${className}` : `${styles.badge} ${variantClass}`;

  return (
    <span
      className={combinedClass}
      {...props}
    >
      {children}
    </span>
  );
}
