import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import { Icon } from '../../ui/Icon'
import styles from './BeyondWorkSection.module.css'

function StarBulletIcon() {
  return (
    <Icon
      name="star"
      size={24}
      className={styles.personalBulletIcon}
    />
  )
}

export default function BeyondWorkSection() {
  return (
    <section className={styles.section}>
      <SectionHeader
        label="04 · BEYOND WORK"
        title="A glimpse outside the canvas"
      />
      <div className={styles.personalCard}>
        <div className={styles.personalText}>
          <h3 className={styles.personalTitle}>
            Curiosity beyond design &amp; interfaces
          </h3>
          <p className={styles.personalBody}>
            Outside of product design and design systems, I explore disciplines that
            nurture creativity, analytical thought, and dedication to craft.
          </p>
          <p className={styles.personalBody}>
            Whether it is dissecting game mechanics, understanding human cognition,
            or practicing an acoustic instrument, exploring different worlds keeps my
            perspective fresh and grounded.
          </p>
        </div>

        <div className={styles.personalList}>
          <div className={styles.personalItem}>
            <div className={styles.personalItemHeader}>
              <StarBulletIcon />
              <h4 className={styles.cardTitle}>
                Indie Games &amp; Game Development
              </h4>
            </div>
            <p className={styles.personalItemBody}>
              Fascinated by game design, mechanics, and interactive storytelling.
              I love exploring creative indie titles and tinkering with game development
              in my free time.
            </p>
          </div>

          <div className={styles.personalItem}>
            <div className={styles.personalItemHeader}>
              <StarBulletIcon />
              <h4 className={styles.cardTitle}>
                Psychology &amp; Human Behavior
              </h4>
            </div>
            <p className={styles.personalItemBody}>
              Deeply interested in studying cognitive and behavioral psychology
              independently; exploring how people perceive, decide, and form habits
              as human beings.
            </p>
          </div>

          <div className={styles.personalItem}>
            <div className={styles.personalItemHeader}>
              <StarBulletIcon />
              <h4 className={styles.cardTitle}>
                Playing Violin
              </h4>
            </div>
            <p className={styles.personalItemBody}>
              Playing an acoustic instrument demands patience, ear training, and continuous
              refinement; a meditative practice that sharpens focus and emotional expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
