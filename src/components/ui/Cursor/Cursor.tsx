import React from 'react'
import styles from './Cursor.module.css'

export interface CursorProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  thinking?: boolean
  color?: string
}

export default function Cursor({
  name = 'Armin Rouhanian',
  thinking = false,
  color = 'var(--color-purple)',
  className = '',
  style,
  ...rest
}: CursorProps) {
  const combinedClass = className ? `${styles.cursorWrapper} ${className}` : styles.cursorWrapper

  return (
    <div
      className={combinedClass}
      style={style}
      aria-hidden="true"
      {...rest}
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
