import React from 'react'
import styles from './ImagePlaceholder.module.css'

export type ImagePlaceholderTheme = 'light' | 'dark'

export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: ImagePlaceholderTheme
  isDark?: boolean
  iconSize?: number
  text?: string
}

export default function ImagePlaceholder({
  theme = 'light',
  isDark = false,
  iconSize = 48,
  text = 'Preview unavailable',
  className = '',
  style,
  ...rest
}: ImagePlaceholderProps) {
  const isDarkMode = theme === 'dark' || isDark
  const combinedClass = `${styles.placeholder}${isDarkMode ? ` ${styles.dark}` : ''}${className ? ` ${className}` : ''}`
  const isDecorative = !text

  return (
    <div
      className={combinedClass}
      style={style}
      role={isDecorative ? 'presentation' : 'img'}
      aria-label={isDecorative ? undefined : text}
      aria-hidden={isDecorative ? 'true' : undefined}
      {...rest}
    >
      <div className={styles.inner}>
        <span
          className={styles.logo}
          style={{ width: `${iconSize}px` }}
          aria-hidden="true"
        />
        {text && (
          <span className={styles.caption}>
            {text}
          </span>
        )}
      </div>
    </div>
  )
}
