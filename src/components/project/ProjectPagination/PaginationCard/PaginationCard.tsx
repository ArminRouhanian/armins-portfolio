import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../../ui/Icon'
import styles from './PaginationCard.module.css'

export type PaginationDirection = 'prev' | 'next'

export interface PaginationTarget {
  to: string
  label: string
  title: string
}

export interface PaginationCardProps {
  target: PaginationTarget
  direction: PaginationDirection
  className?: string
}

export default function PaginationCard({
  target,
  direction,
  className = ''
}: PaginationCardProps) {
  const isNext = direction === 'next'
  const cardClass = `${styles.card}${isNext ? ` ${styles.next}` : ''}${className ? ` ${className}` : ''}`

  return (
    <Link
      to={target.to}
      className={cardClass}
    >
      <Icon
        name={isNext ? 'arrow-right' : 'arrow-left'}
        size={24}
        className={styles.arrow}
      />
      <span className={styles.textGroup}>
        <span className={styles.label}>
          {target.label}
        </span>
        <b className={styles.title}>
          {target.title}
        </b>
      </span>
    </Link>
  )
}
