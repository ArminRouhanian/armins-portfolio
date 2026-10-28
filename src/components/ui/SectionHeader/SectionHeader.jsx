import React from 'react'
import styles from './SectionHeader.module.css'

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
}) {
  const isDark = dark || theme === 'dark'
  const TitleTag = titleTag

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
