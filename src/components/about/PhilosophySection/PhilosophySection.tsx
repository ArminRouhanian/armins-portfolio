import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import styles from './PhilosophySection.module.css'

export default function PhilosophySection() {
  return (
    <section className={styles.section}>
      <SectionHeader
        label="01 · PHILOSOPHY"
        title="Three principles that guide my work"
      />
      <div className={styles.cardsGrid3}>
        <div className={`${styles.card} ${styles.cardClarity}`}>
          <div className={styles.cardTop}>
            <span className={styles.badgeClarity}>
              <span className={styles.dotClarity} />
              01 · CLARITY
            </span>
          </div>
          <h3 className={styles.cardTitle}>
            <span className={styles.accentClarity}>
              Clarity
            </span>{' '}
            over decoration
          </h3>
          <p className={styles.cardBody}>
            Dense software doesn't need unnecessary visual flair—it needs clarity.
            I focus on clean visual hierarchies, intuitive navigation, and obvious
            user paths.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardStructure}`}>
          <div className={styles.cardTop}>
            <span className={styles.badgeStructure}>
              <span className={styles.dotStructure} />
              02 · STRUCTURE
            </span>
          </div>
          <h3 className={styles.cardTitle}>
            <span className={styles.accentStructure}>
              Structure
            </span>{' '}
            that helps teams
          </h3>
          <p className={styles.cardBody}>
            A design system should save time, not add friction. I organize components
            and tokens in Figma and CSS so handoffs are straightforward and the team
            spends less time guessing.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardValue}`}>
          <div className={styles.cardTop}>
            <span className={styles.badgeValue}>
              <span className={styles.dotValue} />
              03 · VALUE
            </span>
          </div>
          <h3 className={styles.cardTitle}>
            <span className={styles.accentValue}>
              Value
            </span>{' '}
            &amp; velocity with AI
          </h3>
          <p className={styles.cardBody}>
            I use modern tools like Claude Code, Cursor, and automations to test
            ideas faster, iterate on feedback, and communicate design intent clearly
            before implementation.
          </p>
        </div>
      </div>
    </section>
  )
}
