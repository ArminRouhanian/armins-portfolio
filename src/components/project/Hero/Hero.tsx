import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import Badge from '../../ui/Badge/Badge'
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../hooks/useImageLoaded'
import styles from './Hero.module.css'

export default function Hero({ hero }) {
  if (!hero) return null

  const thumbnail = hero.thumbnail || hero.mockupImage
  const { isLoaded, hasError } = useImageLoaded(thumbnail)

  return (
    <section id="preview" className={styles.section}>
      <Button
        as={Link}
        variant="tertiary"
        to="/"
        icon="/assets/icons/chevron-left.svg"
        iconSize={16}
        className={styles.backButton}
      >
        Back to home
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
          background: hero.mockupGradient || 'linear-gradient(135deg, var(--color-fg-accent-purple_light), var(--color-fg-brand-secondary))'
        }}
      >
        <div className={styles.browserFrame}>
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
              background: !hasError && isLoaded
                ? (thumbnail
                    ? `url("${thumbnail}") center / cover no-repeat`
                    : hero.mockupGradient || 'linear-gradient(135deg, var(--color-fg-accent-orange), var(--color-fg-accent-orange_light))')
                : undefined
            }}
          >
            {hasError ? (
              <ImagePlaceholder iconSize={64} />
            ) : thumbnail ? null : (
              hero.mockupContent || null
            )}
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
