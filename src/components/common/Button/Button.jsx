import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  theme = 'light',
  to,
  href,
  icon,
  iconSize = 20,
  onClick,
  children,
  className = '',
  type = 'button',
  ariaLabel,
  ...props
}) {
  let variantClass = '';

  if (variant === 'secondary') {
    variantClass = `${styles.button} ${styles.secondary}`;
  } else if (variant === 'tertiary' || variant === 'tertiary-dark') {
    const isDark = theme === 'dark' || variant === 'tertiary-dark';
    variantClass = `${styles.tertiary} ${isDark ? styles.tertiaryDark : styles.tertiaryLight}`;
  } else if (variant === 'iconOnly' || variant === 'icon-only') {
    const isDark = theme === 'dark';
    variantClass = `${styles.iconOnly}${isDark ? ` ${styles.iconOnlyDark}` : ''}`;
  } else {
    variantClass = `${styles.button} ${styles.primary}`;
  }

  const combinedClass = className ? `${variantClass} ${className}` : variantClass;
  const label = ariaLabel || props['aria-label'];

  const content = icon ? (
    <img
      src={icon}
      alt=""
      width={iconSize}
      height={iconSize}
      aria-hidden="true"
      className={styles.icon}
    />
  ) : (
    children
  );

  if (to) {
    return (
      <Link
        to={to}
        className={combinedClass}
        onClick={onClick}
        aria-label={label}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
        aria-label={label}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      aria-label={label}
      {...props}
    >
      {content}
    </button>
  );
}
