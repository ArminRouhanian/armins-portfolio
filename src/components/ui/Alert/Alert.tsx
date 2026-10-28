import React from 'react'
import styles from './Alert.module.css'

export interface AlertProps {
  variant?: 'info' | 'warning'
  dark?: boolean
  theme?: 'light' | 'dark'
  children?: React.ReactNode
  className?: string
}

export default function Alert({
  variant = 'info',
  dark = false,
  theme = 'light',
  children,
  className = ''
}: AlertProps) {
  const isDark = dark || theme === 'dark'
  const iconSrc =
    variant === 'warning'
      ? '/assets/icons/warning.svg'
      : '/assets/icons/info.svg'

  return (
    <div
      className={`${styles.alert} ${styles[variant] || styles.info}${isDark ? ` ${styles.dark}` : ''}${className ? ` ${className}` : ''}`}
      role="alert"
    >
      <span
        style={{
          WebkitMask: `url("${iconSrc}") no-repeat center / contain`,
          mask: `url("${iconSrc}") no-repeat center / contain`
        }}
        aria-hidden="true"
        className={styles.icon}
      />
      <div className={styles.message}>
        {children}
      </div>
    </div>
  )
}
