import React, { forwardRef } from 'react'
import styles from './ShowcaseItems.module.css'

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
      {items.map((item, index) => {
        const img = item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
        const bgStyle = {
          background: img
            ? `url("${img}") top center / cover no-repeat`
            : item.gradient || item.bg || 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
        }

        if (isMobile) {
          return (
            <div
              key={index}
              className={styles.itemWrapperMobile}
            >
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
                  className={styles.mobileScreen}
                  style={bgStyle}
                />
                <div className={styles.homeIndicator} />
              </div>
            </div>
          )
        }

        return (
          <div
            key={index}
            className={styles.itemWrapper}
          >
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
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div
                className={styles.desktopScreen}
                style={bgStyle}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default ShowcaseItems
