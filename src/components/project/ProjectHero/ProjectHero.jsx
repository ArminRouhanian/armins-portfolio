import React from 'react'
import Button from '../../common/Button/Button'
import Badge from '../../common/Badge/Badge'
import useImageLoaded from '../../../hooks/useImageLoaded'
import styles from './ProjectHero.module.css'

export default function ProjectHero({ hero }) {
  if (!hero) return null

  const thumbnail = hero.thumbnail || hero.mockupImage
  const isLoaded = useImageLoaded(thumbnail)

  return (
    <section id="preview" className={styles.section}>
      <Button
        variant="tertiary"
        to="/"
        className={styles.backButton}
      >
        ← Back to home
      </Button>
      <div className={styles.tags}>
        {hero.tags.map(tag => (
          <Badge key={tag} variant="white">
            {tag}
          </Badge>
        ))}
      </div>
      <h1 className={styles.title}>
        {hero.title}
      </h1>
      <p className={styles.subtitle}>
        {hero.subtitle}
      </p>
      <div
        className={styles.mockupWrapper}
        style={{
          background: hero.mockupGradient || 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
        }}
      >
        <div
          className={styles.browserFrame}
          data-i="0"
        >
          <div className={styles.browserBar}>
            <span className={styles.browserDot} aria-hidden="true" />
            <span className={styles.browserDot} aria-hidden="true" />
            <span className={styles.browserDot} aria-hidden="true" />
            <span className={styles.browserUrl}>
              {hero.mockupUrl || 'yourproduct.com'}
            </span>
          </div>
          <div
            className={`${styles.mockupContent}${thumbnail && !isLoaded ? ' skeletonDark' : ''}`}
            style={{
              background: isLoaded
                ? (thumbnail
                    ? `url("${thumbnail}") center / cover no-repeat`
                    : hero.mockupGradient || 'linear-gradient(135deg, var(--color-orange), var(--color-orange-light))')
                : undefined
            }}
          >
            {thumbnail ? null : (hero.mockupContent || null)}
          </div>
        </div>
      </div>
      <div className={styles.metaGrid}>
        {hero.meta.map(item => (
          <div key={item.label} className={styles.metaItem}>
            <p className={styles.metaLabel}>
              {item.label}
            </p>
            <p className={styles.metaValue}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
