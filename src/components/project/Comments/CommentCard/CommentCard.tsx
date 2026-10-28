import React from 'react'
import styles from './CommentCard.module.css'

const COLOR_MAP: Record<string, string> = {
  primary: 'var(--color-primary)',
  blue: 'var(--color-primary)',
  purple: 'var(--color-purple-light)',
  green: 'var(--color-green)',
  orange: 'var(--color-orange)'
}

const resolveColor = (color?: string): string => {
  if (!color) return 'var(--color-primary)'
  return COLOR_MAP[color] || color
}

export interface CommentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  initials?: string
  name?: string
  role?: string
  quote?: string
  avatarBg?: string
}

export default function CommentCard({
  initials,
  name,
  role,
  quote,
  avatarBg = 'primary',
  className = '',
  style,
  children,
  ...rest
}: CommentCardProps) {
  const bg = resolveColor(avatarBg)
  const formattedQuote =
    typeof quote === 'string'
      ? quote.replace(/^["“](.*)["”]$/s, '$1')
      : quote

  const combinedClass = className ? `${styles.card} ${className}` : styles.card

  return (
    <div
      className={combinedClass}
      style={style}
      {...rest}
    >
      <div className={styles.header}>
        {initials && (
          <span
            className={styles.avatar}
            style={{ background: bg }}
          >
            {initials}
          </span>
        )}
        <div className={styles.info}>
          {name && (
            <p className={styles.name}>
              {name}
            </p>
          )}
          {role && (
            <p className={styles.role}>
              {role}
            </p>
          )}
        </div>
      </div>
      {quote && (
        <p className={styles.quote}>
          {formattedQuote}
        </p>
      )}
      {children}
    </div>
  )
}
