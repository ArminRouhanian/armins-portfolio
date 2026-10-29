import React from 'react'
import Badge from '../../../ui/Badge/Badge'
import styles from './MetricCard.module.css'

export interface MetricItem {
  barColor?: string
  cardTagBg?: string
  cardTagColor?: string
  cardLabel?: string
  cardPeriod?: string
  cardValue?: string
  cardValueColor?: string
  cardSub?: string
}

export type MetricCardVariant = 'default' | 'compact'

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  metric?: MetricItem
  variant?: MetricCardVariant
}

export default function MetricCard({
  metric,
  variant = 'default',
  className = '',
  ...rest
}: MetricCardProps) {
  if (!metric) return null

  const isCompact = variant === 'compact'

  const cardClasses = {
    card: isCompact ? styles.compactCard : styles.metricCard,
    bar: isCompact ? styles.compactCardBar : styles.cardTopAccent,
    header: isCompact ? styles.compactCardHeader : styles.cardHeader,
    period: isCompact ? styles.compactCardPeriod : styles.cardPeriod,
    value: isCompact ? styles.compactCardValue : styles.cardStatValue,
    sub: isCompact ? styles.compactCardSub : styles.cardSub
  }

  const combinedClass = className ? `${cardClasses.card} ${className}` : cardClasses.card

  return (
    <div
      className={combinedClass}
      {...rest}
    >
      <div
        className={cardClasses.bar}
        style={{ background: metric.barColor || 'var(--color-bg-brand-primary)' }}
      />
      <div className={cardClasses.header}>
        <Badge
          style={{
            background: metric.cardTagBg || 'var(--color-primary-tint)',
            color: metric.cardTagColor || 'var(--color-text-brand-secondary)'
          }}
        >
          {metric.cardLabel}
        </Badge>
        <span className={cardClasses.period}>
          {metric.cardPeriod}
        </span>
      </div>
      <p
        className={cardClasses.value}
        style={{ color: metric.cardValueColor || 'var(--color-text-brand-secondary)' }}
      >
        {metric.cardValue}
      </p>
      <p className={cardClasses.sub}>
        {metric.cardSub}
      </p>
    </div>
  )
}
