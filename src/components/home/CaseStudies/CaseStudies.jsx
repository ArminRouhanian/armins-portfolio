import React from 'react'
import Badge from '../../common/Badge/Badge'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import styles from './CaseStudies.module.css'

export default function CaseStudies() {
  return (
    <section id="cases" className={styles.section}>
      <SectionHeader
        label="03 · CASE STUDIES"
        title="How I approach problems"
        className={styles.header}
      />
      <div className={styles.list}>
        <a href="#" className={styles.card}>
          <span className={`${styles.number} ${styles.numOrange}`}>
            01
          </span>
          <h3 className={styles.title}>
            [Case study title]
          </h3>
          <Badge variant="grey">
            [Role]
          </Badge>
          <Badge variant="grey">
            [Year]
          </Badge>
          <span className={styles.arrow}>→</span>
        </a>
        <a href="#" className={styles.card}>
          <span className={`${styles.number} ${styles.numPurple}`}>
            02
          </span>
          <h3 className={styles.title}>
            [Case study title]
          </h3>
          <Badge variant="grey">
            [Role]
          </Badge>
          <Badge variant="grey">
            [Year]
          </Badge>
          <span className={styles.arrow}>→</span>
        </a>
        <a href="#" className={styles.card}>
          <span className={`${styles.number} ${styles.numGreen}`}>
            03
          </span>
          <h3 className={styles.title}>
            [Case study title]
          </h3>
          <Badge variant="grey">
            [Role]
          </Badge>
          <Badge variant="grey">
            [Year]
          </Badge>
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  )
}
