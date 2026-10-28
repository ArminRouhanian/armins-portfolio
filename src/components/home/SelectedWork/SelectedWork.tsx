import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../../ui/Badge/Badge'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../hooks/useImageLoaded'
import { projectsData } from '../../../data/projectsData'
import styles from './SelectedWork.module.css'

function WorkThumbnail({ thumbnail, fallbackColor }) {
  const { isLoaded, hasError } = useImageLoaded(thumbnail)

  if (hasError) {
    return (
      <div className={styles.cardBanner}>
        <ImagePlaceholder iconSize={56} />
      </div>
    )
  }

  return (
    <div
      className={`${styles.cardBanner}${thumbnail && !isLoaded ? ' skeletonDark' : ''}`}
      style={{
        background: isLoaded
          ? (thumbnail ? `url("${thumbnail}") center / cover no-repeat` : fallbackColor)
          : undefined
      }}
    />
  )
}

const PROJECT_LIST = [
  {
    key: 'pinket-customer',
    to: '/works/pinket-customer',
    fallbackColor: 'var(--color-purple-light)'
  },
  {
    key: 'pinket-dashboard',
    to: '/works/pinket-dashboard',
    fallbackColor: 'var(--color-green)'
  },
  {
    key: 'metamondial3d',
    to: '/works/metamondial3d',
    fallbackColor: 'var(--color-orange)'
  }
]

export default function SelectedWork() {
  return (
    <section id="work" className={styles.section}>
      <SectionHeader
        label="01 · SELECTED WORK"
        title="Products I've helped shape"
        className={styles.header}
      />
      <div className={styles.grid}>
        {PROJECT_LIST.map((p) => {
          const project = (projectsData as Record<string, any>)[p.key]
          if (!project) return null

          const title = project.hero?.title || project.title
          const subtitle = project.hero?.subtitle || project.subtitle
          const tags = project.hero?.tags || []
          const thumbnail = project.thumbnail || project.hero?.thumbnail
          const fallback = project.hero?.mockupGradient || p.fallbackColor

          return (
            <Link
              key={p.key}
              to={p.to}
              className={styles.card}
            >
              <WorkThumbnail
                thumbnail={thumbnail}
                fallbackColor={fallback}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  {title}
                </h3>
                {subtitle && (
                  <p className={styles.cardDescription}>
                    {subtitle}
                  </p>
                )}
                {tags.length > 0 && (
                  <div className={styles.badgeRow}>
                    {tags.map((tag) => (
                      <Badge key={tag} variant="grey">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
