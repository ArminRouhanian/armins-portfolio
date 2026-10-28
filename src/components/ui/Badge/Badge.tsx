import React from 'react'
import styles from './Badge.module.css'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'white' | 'grey' | 'gray'
  children?: React.ReactNode
  className?: string
}

export default function Badge({
  variant = 'grey',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const isWhite = variant === 'white'
  const variantClass = isWhite ? styles.white : styles.grey
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
