import React from 'react'
import Badge from '../../ui/Badge/Badge'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import { Icon } from '../../ui/Icon'
import styles from './CaseStudies.module.css'

export default function CaseStudies() {
  return (
    <section id="cases" className={styles.section}>
      <SectionHeader
        label="03 · CASE STUDIES"
        title="How I approach problems"
        className={styles.header}
      />
      <div className={styles.slotFrame}>
        <i className={styles.handle} style={{ left: '-5px', top: '-5px' }} />
        <i className={styles.handle} style={{ right: '-5px', top: '-5px' }} />
        <i className={styles.handle} style={{ left: '-5px', bottom: '-5px' }} />
        <i className={styles.handle} style={{ right: '-5px', bottom: '-5px' }} />
        <div className={styles.slotContent}>
          <span className={styles.comingSoonText}>
            Coming Soon...
          </span>
          <div
            className={styles.slotButton}
            aria-hidden="true"
          >
            <Icon
              name="plus"
              size={16}
              className={styles.plusIcon}
            />
          </div>
        </div>
      </div>
      {/* 
      <div className={styles.list}>
        <a href="#" className={styles.card}>
          <span className={`${styles.number} ${styles.numOrange}`}>
            01
          </span>
          <h3 className={styles.title}>
            [Case study title]
          </h3>
          <Badge variant="gray">
            [Role]
          </Badge>
          <Badge variant="gray">
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
          <Badge variant="gray">
            [Role]
          </Badge>
          <Badge variant="gray">
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
          <Badge variant="gray">
            [Role]
          </Badge>
          <Badge variant="gray">
            [Year]
          </Badge>
          <span className={styles.arrow}>→</span>
        </a>
      </div>
      */}
    </section>
  )
}
