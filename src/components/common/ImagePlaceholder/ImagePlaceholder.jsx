import React from 'react'
import styles from './ImagePlaceholder.module.css'

export default function ImagePlaceholder({
  className = '',
  style = {},
  isDark = false,
  iconSize = 48,
  text = 'Preview unavailable'
}) {
  return (
    <div
      className={`${styles.placeholder}${isDark ? ` ${styles.dark}` : ''}${className ? ` ${className}` : ''}`}
      style={style}
      aria-label={text}
      role="img"
    >
      <div className={styles.inner}>
        <span
          className={styles.logo}
          style={{
            width: `${iconSize}px`,
            height: `${Math.round((iconSize * 465) / 755)}px`
          }}
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
