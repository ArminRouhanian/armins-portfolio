import React from 'react'
import styles from './SocialButton.module.css'

export interface SocialButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  icon?: string
  iconSize?: number
  ariaLabel?: string
}

export default function SocialButton({
  href,
  icon,
  iconSize = 20,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  ariaLabel,
  children,
  ...rest
}: SocialButtonProps) {
  const label = ariaLabel || rest['aria-label']
  const combinedClass = className ? `${styles.button} ${className}` : styles.button

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      className={combinedClass}
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
