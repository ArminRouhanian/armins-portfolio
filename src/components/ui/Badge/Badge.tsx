import React from 'react'
import styles from './Badge.module.css'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'white' | 'gray'
  children?: React.ReactNode
  className?: string
}

export default function Badge({
  variant = 'gray',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const isWhite = variant === 'white'
  const variantClass = isWhite ? styles.white : styles.gray
  const combinedClass = className ? `${styles.badge} ${variantClass} ${className}` : `${styles.badge} ${variantClass}`

  return (
    <span
      className={combinedClass}
      {...props}
    >
      {children}
    </span>
  )
}
