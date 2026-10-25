import React from 'react'
import styles from './FooterAnimation.module.css'

export default function FooterAnimation() {
  return (
    <div
      className={styles.stage}
      aria-hidden="true"
    >
      <div className={styles.purpleCircle} />
      <div className={styles.orangeRect} />
      <div className={styles.blueSquare} />
      <div className={styles.greenDrop} />
      <div className={`${styles.selectionBox} ${styles.selectionBox2}`}>
        <i className={styles.handle} style={{ left: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ left: '-6px', bottom: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', bottom: '-6px' }} />
      </div>
      <div className={`${styles.selectionBox} ${styles.selectionBox1}`}>
        <i className={styles.handle} style={{ left: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ left: '-6px', bottom: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', bottom: '-6px' }} />
      </div>
      <div className={styles.cursor}>
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
        >
          <path
            d="M1 1 L1 15.5 L5 12 L11.5 12 Z"
            fill="var(--color-purple)"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.cursorTag}>
          Armin Rouhanian
        </span>
      </div>
    </div>
  )
}
