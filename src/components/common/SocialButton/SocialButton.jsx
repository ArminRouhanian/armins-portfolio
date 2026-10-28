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
        <span
          className={styles.icon}
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            WebkitMask: `url("${icon}") no-repeat center / contain`,
            mask: `url("${icon}") no-repeat center / contain`
          }}
          aria-hidden="true"
        />
      ) : (
        children
      )}
    </a>
  )
}
