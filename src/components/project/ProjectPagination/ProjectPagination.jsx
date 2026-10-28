import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectPagination.module.css'

export default function ProjectPagination({ nav }) {
  if (!nav) return null

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {nav.prev && (
          <Link
            to={nav.prev.to}
            className={`${styles.card} ${nav.next ? styles.cardSplit : styles.cardFull}`}
          >
            <span className={styles.arrowIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </span>
            <span className={styles.textGroup}>
              <span className={styles.label}>
                {nav.prev.label}
              </span>
              <b className={styles.title}>
                {nav.prev.title}
              </b>
            </span>
          </Link>
        )}
        {nav.next && (
          <Link
            to={nav.next.to}
            className={`${styles.card} ${styles.cardNext} ${nav.prev ? styles.cardSplit : styles.cardFull}`}
          >
            <span className={styles.textGroup}>
              <span className={styles.label}>
                {nav.next.label}
              </span>
              <b className={styles.title}>
                {nav.next.title}
              </b>
            </span>
            <span className={styles.arrowIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}
