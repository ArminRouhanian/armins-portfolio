import ImagePlaceholder from '../../../ui/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../../hooks/useImageLoaded'
import { ShowcaseItem } from '../../../../types/project'
import styles from './ShowcaseLightbox.module.css'

export interface ShowcaseSlideItem extends ShowcaseItem {
  mockupUrl?: string
}

export const getItemBackground = (item?: ShowcaseSlideItem): string => {
  if (!item) return 'linear-gradient(135deg, var(--color-fg-accent-purple_light), var(--color-fg-brand-secondary))'
  const img = item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
  if (img) {
    return `url("${img}") top center / cover no-repeat`
  }
  return item.gradient || item.bg || 'linear-gradient(135deg, var(--color-fg-accent-purple_light), var(--color-fg-brand-secondary))'
}

export const getItemImage = (item?: ShowcaseSlideItem): string | null => {
  if (!item) return null
  return item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
}

export function LightboxDesktopSlide({ item }: { item: ShowcaseSlideItem }) {
  const img = getItemImage(item)
  const { isLoaded, hasError } = useImageLoaded(img)

  if (!img) {
    return (
      <div
        className={styles.browserImage}
        style={{
          background: item.gradient || item.bg || 'linear-gradient(135deg, var(--color-fg-accent-purple_light), var(--color-fg-brand-secondary))'
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

export function LightboxMobileSlide({ item }: { item: ShowcaseSlideItem }) {
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

export interface ShowcaseSlideProps {
  item: ShowcaseSlideItem
  isActive: boolean
  slideDirection: 'next' | 'prev' | string
  isMobile: boolean
  resolvedUrl: string
}

export default function ShowcaseSlide({
  item,
  isActive,
  slideDirection,
  isMobile,
  resolvedUrl
}: ShowcaseSlideProps) {
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
        <LightboxMobileSlide item={item} />
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
            <LightboxDesktopSlide item={item} />
          </div>
        </div>
      )}
    </div>
  )
}
