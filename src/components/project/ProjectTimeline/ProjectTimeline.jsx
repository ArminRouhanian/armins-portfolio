import React from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import Alert from '../../common/Alert/Alert'
import styles from './ProjectTimeline.module.css'

export default function ProjectTimeline({ timeline, label = '03 · TIMELINE' }) {
  if (!timeline) return null

  return (
    <section id="timeline" className={styles.section}>
      <SectionHeader
        label={label}
        title="How the work evolved"
        className={styles.header}
      >
        {timeline.alert && (
          <div className={styles.alertWrap}>
            <Alert variant={timeline.alert.variant || 'warning'}>
              {timeline.alert.text || timeline.alert}
            </Alert>
          </div>
        )}
      </SectionHeader>
      <div className={styles.track}>
        {timeline.steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <span
              className={styles.dot}
              style={{ backgroundColor: step.dotColor || 'var(--color-purple-light)' }}
              aria-hidden="true"
            />
            <p className={styles.period}>
              {step.period}
            </p>
            <h3 className={styles.title}>
              {step.title}
            </h3>
            <p className={styles.desc}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
