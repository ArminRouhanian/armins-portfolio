import React from 'react'
import Cursor from '../../ui/Cursor/Cursor'
import styles from './HeroAnimation.module.css'

export default function HeroAnimation() {
  return (
    <div
      className={styles.stage}
      aria-hidden="true"
    >
      <div className={styles.purpleCircle} />
      <div className={`${styles.selectionBox} ${styles.box1}`}>
        <i className={styles.handle} style={{ left: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ left: '-6px', bottom: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', bottom: '-6px' }} />
      </div>
      <div className={`${styles.selectionBox} ${styles.box2}`}>
        <i className={styles.handle} style={{ left: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ left: '-6px', bottom: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', bottom: '-6px' }} />
      </div>
      <div className={`${styles.selectionBox} ${styles.box3}`}>
        <i className={styles.handle} style={{ left: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', top: '-6px' }} />
        <i className={styles.handle} style={{ left: '-6px', bottom: '-6px' }} />
        <i className={styles.handle} style={{ right: '-6px', bottom: '-6px' }} />
      </div>
      <Cursor className={styles.cursor} />
      <div className={styles.orangeRect} />
      <div className={styles.blueSquare} />
      <div className={styles.greenPill} />
    </div>
  )
}
