import React from 'react'
import Badge from '../../../ui/Badge/Badge'
import styles from './MetricCard.module.css'

export default function MetricCard({
  metric,
  variant = 'default',
  className = ''
}) {
  if (!metric) return null

  const isCompact = variant === 'compact'

  return (
    <div
      className={`${isCompact ? styles.compactCard : styles.metricCard}${className ? ` ${className}` : ''}`}
    >
      <div
        className={isCompact ? styles.compactCardBar : styles.cardTopAccent}
        style={{ background: metric.barColor || 'var(--color-primary)' }}
      />
      <div className={isCompact ? styles.compactCardHeader : styles.cardHeader}>
        <Badge
          style={{
            background: metric.cardTagBg || 'var(--color-primary-tint)',
            color: metric.cardTagColor || 'var(--color-primary-dark)'
          }}
        >
          {metric.cardLabel}
        </Badge>
        <span className={isCompact ? styles.compactCardPeriod : styles.cardPeriod}>
          {metric.cardPeriod}
        </span>
      </div>
      <p
        className={isCompact ? styles.compactCardValue : styles.cardStatValue}
        style={{ color: metric.cardValueColor || 'var(--color-primary-dark)' }}
      >
        {metric.cardValue}
      </p>
      <p className={isCompact ? styles.compactCardSub : styles.cardSub}>
        {metric.cardSub}
      </p>
    </div>
  )
}
