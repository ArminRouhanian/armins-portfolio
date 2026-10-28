import React, { forwardRef } from 'react'
import ImagePlaceholder from '../../common/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../hooks/useImageLoaded'
import styles from './ShowcaseItems.module.css'

function ShowcaseCardItem({ item, index, isMobile, onItemClick }) {
  const img = item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
  const { isLoaded, hasError } = useImageLoaded(img)

  const bgStyle = !hasError && isLoaded
    ? {
        background: img
          ? `url("${img}") top center / cover no-repeat`
          : item.gradient || item.bg || 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
      }
    : undefined

  if (isMobile) {
    return (
      <div className={styles.itemWrapperMobile}>
        <span
          onClick={() => onItemClick && onItemClick(index)}
          className={styles.label}
          title={item.label}
        >
          {item.label}
        </span>
        <div
          className={styles.mobileFrame}
          onClick={() => onItemClick && onItemClick(index)}
        >
          <div className={styles.mobileNotch} />
          <div
            className={`${styles.mobileScreen}${img && !isLoaded ? ' skeletonDark' : ''}`}
            style={bgStyle}
          >
            {hasError && <ImagePlaceholder isDark iconSize={36} />}
          </div>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.itemWrapper}>
      <span
        onClick={() => onItemClick && onItemClick(index)}
        className={styles.label}
        title={item.label}
      >
        {item.label}
      </span>
      <div
        className={styles.desktopFrame}
        onClick={() => onItemClick && onItemClick(index)}
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
          {hasError && <ImagePlaceholder iconSize={48} />}
        </div>
      </div>
    </div>
  )
}

const ShowcaseItems = forwardRef(function ShowcaseItems(
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
