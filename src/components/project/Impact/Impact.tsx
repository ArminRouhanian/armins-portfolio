import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import MetricCard from './MetricCard/MetricCard'
import { ProjectImpactData } from '../../../types/project'
import styles from './Impact.module.css'

export interface ImpactProps {
  impact: ProjectImpactData
  label?: string
}

export default function Impact({ impact, label = '02 · IMPACT' }: ImpactProps) {
  if (!impact) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundWrap}>
        <div className={styles.backgroundGrid} />
      </div>
      <section id="impact" className={styles.section}>
        <div className={styles.desktopStickyLayout}>
          <div className={styles.stickyLayout}>
            <div>
              <SectionHeader
                theme="dark"
                label={label}
                title="Impact at a glance"
                titleClassName={styles.textPrimary}
              />
              <p className={`${styles.intro} ${styles.textSecondary}`}>
                {impact.intro}
              </p>
              <div className={styles.descContainer}>
                {impact.metrics.map((m, i) => (
                  <div
                    key={m.title || i}
                    className={`${styles.descSlide} is-desc`}
                  >
                    <p className={`${styles.descNumLabel} ${styles[m.kClass] || styles[`k${i % 4}`] || ''}`}>
                      METRIC {i + 1} OF {impact.metrics.length}
                    </p>
                    <h3 className={`${styles.descTitle} ${styles.textPrimary}`}>
                      {m.title}
                    </h3>
                    <p className={`${styles.descBody} ${styles.textSecondary}`}>
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className={styles.progressRail}>
                <div className={styles.progressTicks}>
                  {impact.metrics.map((_, i) => (
                    <span
                      key={i}
                      className={`${styles.progressTick} pg`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className={`${styles.progressCounter} ${styles.textMuted} pgc`}>
                  01 / {String(impact.metrics.length).padStart(2, '0')}
                </span>
              </div>
              <p className={`${styles.progressHint} ${styles.textMuted}`}>
                {impact.hint || 'Keep scrolling to move through deliverables and impact.'}
              </p>
            </div>
            <div className={styles.cardsContainer}>
              {impact.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`${styles.cardSlide} im`}
                >
                  <p className={`${styles.cardIndexLabel} ${styles.textMuted}`}>
                    Metric {i + 1}
                  </p>
                  <MetricCard metric={m} />
                </div>
              ))}
            </div>
          </div>
          <div
            className={styles.spacer}
            style={{ height: `${Math.max(0, (impact.metrics.length - 1) * 460)}px` }}
          />
        </div>

        <div className={styles.mobileLayout}>
          <SectionHeader
            theme="dark"
            label={label}
            title="Impact at a glance"
            titleClassName={styles.textPrimary}
          />
          <p className={`${styles.intro} ${styles.textSecondary}`}>
            {impact.intro}
          </p>
          <div className={styles.mobileList}>
            {impact.metrics.map((m, i) => (
              <div key={i} className={styles.mobileItem}>
                <p className={`${styles.descNumLabel} ${styles[m.kClass] || styles[`k${i % 4}`] || ''}`}>
                  METRIC {i + 1} OF {impact.metrics.length}
                </p>
                <h3 className={`${styles.mobileItemTitle} ${styles.textPrimary}`}>
                  {m.title}
                </h3>
                <MetricCard metric={m} variant="compact" />
                <p className={`${styles.mobileItemDesc} ${styles.textSecondary}`}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
