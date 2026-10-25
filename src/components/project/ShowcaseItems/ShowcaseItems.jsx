import React from 'react'
import styles from './ShowcaseItems.module.css'

export default function ShowcaseItems({
  items = [],
  type = 'desktop',
  onItemClick,
  className = '',
  style
}) {
  const isMobile = type === 'mobile'
  const gridClass = isMobile ? styles.gridMobile : styles.gridDesktop

  return (
    <div
      className={`${gridClass}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {items.map((item, index) => {
        const bgStyle = {
          background: item.image
            ? `url("${item.image}") center / cover no-repeat`
            : item.gradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)'
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
}
