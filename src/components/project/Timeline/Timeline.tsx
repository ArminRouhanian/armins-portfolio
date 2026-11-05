import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import Alert from '../../ui/Alert/Alert'
import { ProjectTimelineData } from '../../../types/project'
import styles from './Timeline.module.css'

export interface TimelineProps {
  timeline: ProjectTimelineData
  label?: string
}

export default function Timeline({ timeline, label = '03 · TIMELINE' }: TimelineProps) {
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
              {timeline.alert.text}
            </Alert>
          </div>
        )}
      </SectionHeader>
      <div className={styles.track}>
        {timeline.steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <span
              className={styles.dot}
              style={{ backgroundColor: step.dotColor || 'var(--color-fg-accent-purple_light)' }}
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
