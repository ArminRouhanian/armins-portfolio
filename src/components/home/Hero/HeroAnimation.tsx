import Cursor from '../../ui/Cursor/Cursor'
import styles from './HeroAnimation.module.css'

function SelectionBox({ className }: { className: string }) {
  return (
    <div className={`${styles.selectionBox} ${className}`}>
      <i className={styles.handle} style={{ left: '-6px', top: '-6px' }} />
      <i className={styles.handle} style={{ right: '-6px', top: '-6px' }} />
      <i className={styles.handle} style={{ left: '-6px', bottom: '-6px' }} />
      <i className={styles.handle} style={{ right: '-6px', bottom: '-6px' }} />
    </div>
  )
}

export default function HeroAnimation() {
  return (
    <div
      className={styles.stage}
      aria-hidden="true"
    >
      <div className={styles.purpleCircle} />
      <SelectionBox className={styles.box1} />
      <SelectionBox className={styles.box2} />
      <SelectionBox className={styles.box3} />
      <Cursor className={styles.cursor} />
      <div className={styles.orangeRect} />
      <div className={styles.blueSquare} />
      <div className={styles.greenPill} />
    </div>
  )
}
