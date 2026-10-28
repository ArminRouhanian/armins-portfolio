import React from 'react'
import ImagePlaceholder from '../../../ui/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../../hooks/useImageLoaded'
import styles from './ShowcaseLightbox.module.css'

export const getItemBackground = (item) => {
  if (!item) return 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
  const img = item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
  if (img) {
    return `url("${img}") top center / cover no-repeat`
  }
  return item.gradient || item.bg || 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
}

export const getItemImage = (item) => {
  if (!item) return null
  return item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
}

export function LightboxDesktopSlide({ item }) {
  const img = getItemImage(item)
  const { isLoaded, hasError } = useImageLoaded(img)

  if (!img) {
    return (
      <div
        className={styles.browserImage}
        style={{
          background: item.gradient || item.bg || 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
        }}
      />
    )
  }

  if (hasError) {
    return (
      <div className={styles.browserImageContainer}>
        <ImagePlaceholder iconSize={64} />
      </div>
    )
  }

  return (
    <div className={`${styles.browserImageContainer}${!isLoaded ? ' skeletonDark' : ''}`}>
      <img
        src={img}
        alt={item.label}
        className={`${styles.desktopImg}${!isLoaded ? ` ${styles.desktopImgLoading}` : ''}`}
      />
    </div>
  )
}

export function LightboxMobileSlide({ item }) {
  const img = getItemImage(item)
  const { isLoaded, hasError } = useImageLoaded(img)

  return (
    <div
      className={`${styles.mobileFrame}${img && !isLoaded && !hasError ? ' skeletonDark' : ''}`}
      style={{
        background: !hasError && isLoaded ? getItemBackground(item) : undefined
      }}
    >
      {hasError && (
        <ImagePlaceholder
          theme="dark"
          iconSize={48}
        />
      )}
    </div>
  )
}

export default function ShowcaseSlide({
  item,
  isActive,
  slideDirection,
  isMobile,
  resolvedUrl
}) {
  return (
    <div
      className={`${styles.slide}${
        isActive
          ? slideDirection === 'prev'
            ? ` ${styles.slideActivePrev}`
            : ` ${styles.slideActiveNext}`
          : ''
      }`}
      data-n={item.label}
    >
      {isMobile ? (
        <LightboxMobileSlide
          item={item}
        />
      ) : (
        <div className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <span className={styles.browserDot} aria-hidden="true" />
            <span className={styles.browserDot} aria-hidden="true" />
            <span className={styles.browserDot} aria-hidden="true" />
            <span className={styles.browserUrl}>
              {item.mockupUrl || resolvedUrl}
            </span>
          </div>
          <div className={styles.browserImageWrap}>
            <LightboxDesktopSlide
              item={item}
            />
          </div>
        </div>
      )}
    </div>
  )
}
