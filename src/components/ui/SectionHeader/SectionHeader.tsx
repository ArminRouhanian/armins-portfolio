import React from 'react'
import styles from './SectionHeader.module.css'

export interface SectionHeaderProps {
  label?: React.ReactNode
  title?: React.ReactNode
  children?: React.ReactNode
  className?: string
  titleClassName?: string
  labelClassName?: string
  style?: React.CSSProperties
  titleStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'
  theme?: 'light' | 'dark'
  dark?: boolean
}

export default function SectionHeader({
  label,
  title,
  children,
  className = '',
  titleClassName = '',
  labelClassName = '',
  style,
  titleStyle,
  labelStyle,
  titleTag = 'h2',
  theme = 'light',
  dark = false
}: SectionHeaderProps) {
  const isDark = dark || theme === 'dark'
  const TitleTag = titleTag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'

  return (
    <div
      className={`${styles.container}${isDark ? ` ${styles.containerDark}` : ''}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {label && (
        <p
          className={`${styles.label}${labelClassName ? ` ${labelClassName}` : ''}`}
          style={labelStyle}
        >
          {label}
        </p>
      )}
      {title && (
        <TitleTag
          className={`${styles.title}${titleClassName ? ` ${titleClassName}` : ''}`}
          style={titleStyle}
        >
          {title}
        </TitleTag>
      )}
      {children}
    </div>
  )
}
