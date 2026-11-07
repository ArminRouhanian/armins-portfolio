import React, { forwardRef } from 'react'
import ImagePlaceholder from '../../../ui/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../../hooks/useImageLoaded'
import { ShowcaseItem } from '../../../../types/project'
import styles from './ShowcaseItems.module.css'

export interface ShowcaseCardItemProps {
  item: ShowcaseItem
  index: number
  isMobile: boolean
  onItemClick?: (index: number) => void
}

export function ShowcaseCardItem({
  item,
  index,
  isMobile,
  onItemClick
}: ShowcaseCardItemProps) {
  const img = item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
  const { isLoaded, hasError } = useImageLoaded(img)

  const bgStyle = !hasError && isLoaded
    ? {
        background: img
          ? `url("${img}") top center / cover no-repeat`
          : item.gradient || item.bg || 'linear-gradient(135deg, var(--color-fg-accent-purple_light), var(--color-fg-brand-secondary))'
      }
    : undefined

  const handleActivate = () => {
    onItemClick?.(index)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleActivate()
    }
  }

  if (isMobile) {
    return (
      <div className={styles.itemWrapperMobile}>
        <button
          type="button"
          onClick={handleActivate}
          className={styles.label}
          title={item.label}
        >
          {item.label}
        </button>
        <div
          role="button"
          tabIndex={0}
          aria-label={`View ${item.label} mockup`}
          className={styles.mobileFrame}
          onClick={handleActivate}
          onKeyDown={handleKeyDown}
        >
          <div className={styles.mobileNotch} />
          <div
            className={`${styles.mobileScreen}${img && !isLoaded ? ' skeletonDark' : ''}`}
            style={bgStyle}
          >
            {hasError && (
              <ImagePlaceholder
                theme="dark"
                iconSize={36}
              />
            )}
          </div>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.itemWrapper}>
      <button
        type="button"
        onClick={handleActivate}
        className={styles.label}
        title={item.label}
      >
        {item.label}
      </button>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View ${item.label} mockup`}
        className={styles.desktopFrame}
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.desktopBar}>
          <i />
          <i />
          <i />
        </div>
        <div
          className={`${styles.desktopScreen}${img && !isLoaded ? ' skeletonDark' : ''}`}
          style={bgStyle}
        >
          {hasError && (
            <ImagePlaceholder iconSize={48} />
          )}
        </div>
      </div>
    </div>
  )
}

export interface ShowcaseItemsProps {
  items?: ShowcaseItem[]
  type?: 'desktop' | 'mobile' | string
  onItemClick?: (index: number) => void
  onScroll?: React.UIEventHandler<HTMLDivElement>
  className?: string
  style?: React.CSSProperties
}

const ShowcaseItems = forwardRef<HTMLDivElement, ShowcaseItemsProps>(function ShowcaseItems(
  {
    items = [],
    type = 'desktop',
    onItemClick,
    onScroll,
    className = '',
    style
  },
  ref
) {
  const isMobile = type === 'mobile'
  const gridClass = isMobile ? styles.gridMobile : styles.gridDesktop

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={`${gridClass}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {items.map((item, index) => (
        <ShowcaseCardItem
          key={index}
          item={item}
          index={index}
          isMobile={isMobile}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  )
})

export default ShowcaseItems
