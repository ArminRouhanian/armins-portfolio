import Cursor from '../../ui/Cursor/Cursor'
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
      <Cursor className={styles.cursor} />
    </div>
  )
}
