import React from 'react'
import styles from './SectionHeader.module.css'

export type SectionHeaderTheme = 'light' | 'dark'

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  label?: React.ReactNode
  title?: React.ReactNode
  titleClassName?: string
  titleAs?: React.ElementType
  titleTag?: React.ElementType
  theme?: SectionHeaderTheme
  children?: React.ReactNode
}

export default function SectionHeader({
  label,
  title,
  titleClassName = '',
  titleAs,
  titleTag,
  theme = 'light',
  className = '',
  children,
  ...rest
}: SectionHeaderProps) {
  const isDark = theme === 'dark'
  const TitleComponent = titleAs || titleTag || 'h2'
  const containerClass = `${styles.container}${isDark ? ` ${styles.containerDark}` : ''}${className ? ` ${className}` : ''}`
  const headingClass = `${styles.title}${titleClassName ? ` ${titleClassName}` : ''}`

  return (
    <div
      className={containerClass}
      {...rest}
    >
      {label && (
        <p className={styles.label}>
          {label}
        </p>
      )}
      {title && (
        <TitleComponent className={headingClass}>
          {title}
        </TitleComponent>
      )}
      {children}
    </div>
  )
}
