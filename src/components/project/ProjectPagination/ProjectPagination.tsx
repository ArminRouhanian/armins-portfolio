import React from 'react'
import PaginationCard, { PaginationTarget } from './PaginationCard/PaginationCard'
import styles from './ProjectPagination.module.css'

export type { PaginationTarget }

export interface ProjectPaginationData {
  prev?: PaginationTarget | null
  next?: PaginationTarget | null
}

export interface ProjectPaginationProps {
  nav?: ProjectPaginationData | null
}

export default function ProjectPagination({ nav }: ProjectPaginationProps) {
  if (!nav || (!nav.prev && !nav.next)) return null

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {nav.prev && (
          <PaginationCard
            direction="prev"
            target={nav.prev}
          />
        )}
        {nav.next && (
          <PaginationCard
            direction="next"
            target={nav.next}
          />
        )}
      </div>
    </section>
  )
}
