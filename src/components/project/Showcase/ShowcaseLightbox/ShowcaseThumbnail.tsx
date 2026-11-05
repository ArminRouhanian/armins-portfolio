import ImagePlaceholder from '../../../ui/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../../hooks/useImageLoaded'
import { getItemBackground, getItemImage, ShowcaseSlideItem } from './ShowcaseSlide'
import styles from './ShowcaseLightbox.module.css'

export interface ShowcaseThumbnailProps {
  item: ShowcaseSlideItem
  isMobile: boolean
  isActive: boolean
  onClick: () => void
  buttonRef: (el: HTMLButtonElement | null) => void
}

export default function ShowcaseThumbnail({
  item,
  isMobile,
  isActive,
  onClick,
  buttonRef
}: ShowcaseThumbnailProps) {
  const img = getItemImage(item)
  const { isLoaded, hasError } = useImageLoaded(img)

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`${styles.thumbnail}${isMobile ? ` ${styles.thumbnailMobileType}` : ''}${isActive ? ` ${styles.thumbnailActive}` : ''}${img && !isLoaded && !hasError ? ' skeletonDark' : ''}`}
      aria-label={item.label}
      onClick={onClick}
      style={{
        background: !hasError && isLoaded ? getItemBackground(item) : undefined
      }}
    >
      {hasError && (
        <ImagePlaceholder
          theme="dark"
          iconSize={20}
          text=""
        />
      )}
    </button>
  )
}
