import React from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import styles from './ProjectDescription.module.css'

export default function ProjectDescription({ overview }) {
  if (!overview) return null

  return (
    <section id="description" className={styles.section}>
      <SectionHeader
        label="01 · OVERVIEW"
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
            {overview.checklists.map(item => (
              <div key={item.num} className={styles.checklistItem}>
                <b
                  className={styles.checkNumber}
                  style={{ background: item.bg || 'var(--color-surface-dark)' }}
                >
                  {item.num}
                </b>
                {item.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
