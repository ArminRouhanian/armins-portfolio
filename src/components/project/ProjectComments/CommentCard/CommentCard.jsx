import React from 'react';
import styles from './CommentCard.module.css';

const COLOR_MAP = {
  primary: 'var(--color-primary)',
  blue: 'var(--color-primary)',
  purple: 'var(--color-purple-light)',
  green: 'var(--color-green)',
  orange: 'var(--color-orange)'
};

const resolveColor = (color) => {
  if (!color) return 'var(--color-primary)';
  return COLOR_MAP[color] || color;
};

export default function CommentCard({
  initials,
  name,
  role,
  quote,
  avatarBg = 'primary',
  className = '',
  style,
  children
}) {
  const bg = resolveColor(avatarBg);
  const formattedQuote =
    typeof quote === 'string'
      ? quote.replace(/^["“](.*)["”]$/s, '$1')
      : quote;

  return (
    <div
      className={`${styles.card}${className ? ` ${className}` : ''}`}
      style={style}
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
  );
}
