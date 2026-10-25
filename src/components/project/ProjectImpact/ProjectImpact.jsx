import React from 'react'
import Badge from '../../common/Badge/Badge'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import styles from './ProjectImpact.module.css'

export default function ProjectImpact({ impact, label = '02 · IMPACT' }) {
  if (!impact) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundWrap}>
        <div className={styles.backgroundGrid} />
      </div>
      <section id="impact" className={styles.section}>
        {/* Desktop interactive sticky layout */}
        <div className={styles.desktopStickyLayout}>
          <div className={styles.stickyLayout}>
            <div>
              <SectionHeader
                dark
                label={label}
                title="Impact at a glance"
                titleClassName={styles.textPrimary}
              />
              <p className={`${styles.intro} ${styles.textSecondary}`}>
                {impact.intro}
              </p>
              <div className={styles.descContainer}>
                {impact.metrics.map(m => (
                  <div
                    key={m.numLabel + m.title}
                    className={`${styles.descSlide} is-desc`}
                  >
                    <p className={`${styles.descNumLabel} ${styles[m.kClass] || ''}`}>
                      {m.numLabel}
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
                  01 / 0{impact.metrics.length}
                </span>
              </div>
              <p className={`${styles.progressHint} ${styles.textMuted}`}>
                Example metrics. Replace with your own. Keep scrolling to move through them.
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
                  <div className={styles.metricCard}>
                    <div
                      className={styles.cardTopAccent}
                      style={{ background: m.barColor || 'var(--color-primary)' }}
                    />
                    <div className={styles.cardHeader}>
                      <Badge
                        style={{
                          background: m.cardTagBg || 'var(--color-primary-tint)',
                          color: m.cardTagColor || 'var(--color-primary-dark)'
                        }}
                      >
                        {m.cardLabel}
                      </Badge>
                      <span className={styles.cardPeriod}>
                        {m.cardPeriod}
                      </span>
                    </div>
                    <p
                      className={styles.cardStatValue}
                      style={{ color: m.cardValueColor || 'var(--color-primary-dark)' }}
                    >
                      {m.cardValue}
                    </p>
                    <p className={styles.cardSub}>
                      {m.cardSub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.spacer} />
        </div>

        {/* Mobile vertical flow with compact cards under each title */}
        <div className={styles.mobileLayout}>
          <SectionHeader
            dark
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
                <p className={`${styles.descNumLabel} ${styles[m.kClass] || ''}`}>
                  {m.numLabel}
                </p>
                <h3 className={`${styles.mobileItemTitle} ${styles.textPrimary}`}>
                  {m.title}
                </h3>
                <div className={styles.compactCard}>
                  <div
                    className={styles.compactCardBar}
                    style={{ background: m.barColor || 'var(--color-primary)' }}
                  />
                  <div className={styles.compactCardHeader}>
                    <Badge
                      style={{
                        background: m.cardTagBg || 'var(--color-primary-tint)',
                        color: m.cardTagColor || 'var(--color-primary-dark)'
                      }}
                    >
                      {m.cardLabel}
                    </Badge>
                    <span className={styles.compactCardPeriod}>
                      {m.cardPeriod}
                    </span>
                  </div>
                  <p
                    className={styles.compactCardValue}
                    style={{ color: m.cardValueColor || 'var(--color-primary-dark)' }}
                  >
                    {m.cardValue}
                  </p>
                  <p className={styles.compactCardSub}>
                    {m.cardSub}
                  </p>
                </div>
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
