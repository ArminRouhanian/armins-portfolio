import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import Badge from '../../ui/Badge/Badge'
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../hooks/useImageLoaded'
import { ProjectHeroData } from '../../../types/project'
import styles from './Hero.module.css'

export interface HeroProps {
  hero: ProjectHeroData
}

export default function Hero({ hero }: HeroProps) {
  if (!hero) return null

  const thumbnail = hero.thumbnail
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
        {hero.tags.map((tag) => (
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
        className={`${styles.imageContainer}${thumbnail && !isLoaded ? ' skeletonDark' : ''}`}
        style={!thumbnail && hero.mockupGradient ? { background: hero.mockupGradient } : undefined}
      >
        {!hasError && isLoaded && thumbnail ? (
          <img
            src={thumbnail}
            alt={hero.title}
            className={styles.heroImage}
          />
        ) : hasError ? (
          <div className={styles.placeholderWrap}>
            <ImagePlaceholder iconSize={64} />
          </div>
        ) : null}
      </div>
      <div className={styles.metaGrid}>
        {hero.meta.map((item) => (
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
