import React from 'react'
import { Icon } from '../Icon'
import styles from './Alert.module.css'

export interface AlertProps {
  variant?: 'info' | 'warning'
  theme?: 'light' | 'dark'
  children?: React.ReactNode
  className?: string
}

export default function Alert({
  variant = 'info',
  theme = 'light',
  children,
  className = ''
}: AlertProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={`${styles.alert} ${styles[variant] || styles.info}${isDark ? ` ${styles.dark}` : ''}${className ? ` ${className}` : ''}`}
      role="alert"
    >
      <Icon
        name={variant}
        size={18}
        className={styles.icon}
      />
      <div className={styles.message}>
        {children}
      </div>
    </div>
  )
}
