import React, { useState, useEffect, useCallback } from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import Button from '../../common/Button/Button'
import ShowcaseItems from '../ShowcaseItems/ShowcaseItems'
import styles from './ProjectShowcase.module.css'

export default function ProjectShowcase({ showcase }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const items = showcase?.items || []
  const count = items.length
  const type = showcase?.type || 'desktop'
  const isMobile = type === 'mobile'

  const openLightbox = useCallback((index) => {
    setActiveIdx(index)
    setIsOpen(true)
    document.documentElement.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    document.documentElement.style.overflow = ''
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % count)
  }, [count])

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + count) % count)
  }, [count])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowRight') nextSlide()
      else if (e.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeLightbox, nextSlide, prevSlide])

  if (!showcase || count === 0) return null

  return (
    <>
      <section id="showcase" className={styles.section}>
        <div className={styles.headerContainer}>
          <SectionHeader
            dark
            label="04 · SHOWCASE"
            title="Design mockups"
          />
          <p className={styles.subtitle}>
            Click any mockup to open the viewer. Use arrow keys to step
            through.
          </p>
        </div>
        <ShowcaseItems
          items={items}
          type={type}
          onItemClick={openLightbox}
        />
      </section>

      {isOpen && (
        <div
          id="lb"
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Mockup viewer"
          onClick={(e) => {
            if (e.target.id === 'lb') closeLightbox()
          }}
        >
          <Button
            variant="iconOnly"
            aria-label="Close"
            icon="/assets/icons/close.svg"
            iconSize={20}
            onClick={closeLightbox}
            className={styles.closeButton}
          />

          <Button
            variant="iconOnly"
            aria-label="Previous"
            icon="/assets/icons/chevron-left.svg"
            iconSize={22}
            onClick={prevSlide}
            className={styles.prevButton}
          />

          <Button
            variant="iconOnly"
            aria-label="Next"
            icon="/assets/icons/chevron-right.svg"
            iconSize={22}
            onClick={nextSlide}
            className={styles.nextButton}
          />

          <div className={styles.lightboxStage}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.slide}${index === activeIdx ? ` ${styles.slideActive}` : ''}`}
                data-n={item.label}
              >
                {isMobile ? (
                  <div
                    className={styles.mobileFrame}
                    style={{
                      background: item.image
                        ? `url("${item.image}") center / cover no-repeat`
                        : item.gradient || 'linear-gradient(135deg, #A259FF, #1ABCFE)'
                    }}
                  />
                ) : (
                  <div className={styles.browserFrame}>
                    <div className={styles.browserBar}>
                      <span className={styles.browserDot} aria-hidden="true" />
                      <span className={styles.browserDot} aria-hidden="true" />
                      <span className={styles.browserDot} aria-hidden="true" />
                      <span className={styles.browserUrl}>yourproduct.com</span>
                    </div>
                    <div
                      className={styles.browserImage}
                      style={{
                        background: item.image
                          ? `url("${item.image}") center / cover no-repeat`
                          : item.gradient || 'linear-gradient(135deg, #A259FF, #1ABCFE)'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className={styles.caption}>
            {activeIdx + 1} / {count} · {items[activeIdx]?.label || ''}
          </p>

          <div className={styles.thumbnailStrip}>
            {items.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.thumbnail}${index === activeIdx ? ` ${styles.thumbnailActive}` : ''}`}
                aria-label={item.label}
                onClick={() => setActiveIdx(index)}
                style={{
                  width: isMobile ? '38px' : '96px',
                  height: '60px',
                  background: item.image
                    ? `url("${item.image}") center / cover no-repeat`
                    : item.gradient || 'linear-gradient(135deg, #A259FF, #1ABCFE)'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
