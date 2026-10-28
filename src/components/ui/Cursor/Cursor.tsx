import React from 'react'
import styles from './Cursor.module.css'

export interface CursorProps {
  name?: string
  thinking?: boolean
  color?: string
  className?: string
  style?: React.CSSProperties
}

export default function Cursor({
  name = 'Armin Rouhanian',
  thinking = false,
  color = 'var(--color-purple)',
  className = '',
  style
}: CursorProps) {
  return (
    <div
      className={`${styles.cursorWrapper}${className ? ` ${className}` : ''}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        className={styles.cursorIcon}
      >
        <path
          d="M1 1 L1 15.5 L5 12 L11.5 12 Z"
          fill={color}
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {name && (
        <span
          className={styles.cursorTag}
          style={{ background: color }}
        >
          {name}
        </span>
      )}
      {thinking && (
        <span className={styles.thinkingBubble}>
          <i
            className={styles.thinkingDot}
            style={{ background: color }}
          />
          <i
            className={styles.thinkingDot}
            style={{ background: color }}
          />
          <i
            className={styles.thinkingDot}
            style={{ background: color }}
          />
        </span>
      )}
    </div>
  )
}
