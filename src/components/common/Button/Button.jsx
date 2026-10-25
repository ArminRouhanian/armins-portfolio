import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  theme = 'light',
  to,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  ...props
}) {
  let variantClass = '';

  if (variant === 'secondary') {
    variantClass = `${styles.button} ${styles.secondary}`;
  } else if (variant === 'tertiary' || variant === 'tertiary-dark') {
    const isDark = theme === 'dark' || variant === 'tertiary-dark';
    variantClass = `${styles.tertiary} ${isDark ? styles.tertiaryDark : styles.tertiaryLight}`;
  } else {
    variantClass = `${styles.button} ${styles.primary}`;
  }

  const combinedClass = className ? `${variantClass} ${className}` : variantClass;

  if (to) {
    return (
      <Link
        to={to}
        className={combinedClass}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
