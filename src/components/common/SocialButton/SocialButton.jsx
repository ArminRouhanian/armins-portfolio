import React from 'react'
import styles from './SocialButton.module.css'

export default function SocialButton({
  href,
  ariaLabel,
  icon,
  iconSize = 20,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  style,
  children,
  ...rest
}) {
  const label = ariaLabel || rest['aria-label']

  return (
    <a
      href={href}
      className={`${styles.button}${className ? ` ${className}` : ''}`}
      aria-label={label}
      target={target}
      rel={rel}
      style={style}
      {...rest}
    >
      {icon ? (
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
      )}
    </a>
  )
}
