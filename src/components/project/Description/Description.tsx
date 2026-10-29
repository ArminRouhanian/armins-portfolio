import React from 'react'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import Alert from '../../ui/Alert/Alert'
import styles from './Description.module.css'

export default function Description({ overview, label = '01 · OVERVIEW' }) {
  if (!overview) return null

  return (
    <section id="description" className={styles.section}>
      <SectionHeader
        label={label}
        title="About the business"
      />
      <div className={styles.content}>
        <p className={styles.leadText}>
          {overview.p1}
        </p>
        {overview.p2 && (
          <p className={styles.secondaryText}>
            {overview.p2}
          </p>
        )}
        {overview.checklists && overview.checklists.length > 0 && (
          <div className={styles.checklistGrid}>
            {overview.checklists.map((item, index) => (
              <div key={item.text || index} className={styles.checklistItem}>
                <b
                  className={styles.checkNumber}
                  style={{ background: item.bg || 'var(--color-bg-solid)' }}
                >
                  {index + 1}
                </b>
                {item.text}
              </div>
            ))}
          </div>
        )}
        {overview.alert && (
          <div className={styles.alertWrap}>
            <Alert variant={overview.alert.variant || 'info'}>
              {overview.alert.text || overview.alert}
            </Alert>
          </div>
        )}
      </div>
    </section>
  )
}
