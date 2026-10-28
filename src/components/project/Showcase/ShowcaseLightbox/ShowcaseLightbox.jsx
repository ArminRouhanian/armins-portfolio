import React, { useState, useEffect, useCallback, useRef } from 'react'
import Button from '../../../ui/Button/Button'
import ShowcaseSlide from './ShowcaseSlide'
import ShowcaseThumbnail from './ShowcaseThumbnail'
import styles from './ShowcaseLightbox.module.css'

export default function ShowcaseLightbox({
  items = [],
  initialIndex = 0,
  isMobile = false,
  resolvedUrl = '',
  onClose
}) {
  const [activeIdx, setActiveIdx] = useState(initialIndex)
  const [slideDirection, setSlideDirection] = useState('next')

  const touchStartRef = useRef({ x: 0, y: 0, time: 0, valid: false })
  const thumbStripRef = useRef(null)
  const thumbRefs = useRef([])
  const count = items.length

  const handleClose = useCallback(() => {
    if (window.history.state?.showcaseLightbox) {
      window.history.back()
    }
    onClose?.()
  }, [onClose])

  const nextSlide = useCallback(() => {
    setSlideDirection('next')
    setActiveIdx((prev) => (prev + 1) % count)
  }, [count])

  const prevSlide = useCallback(() => {
    setSlideDirection('prev')
    setActiveIdx((prev) => (prev - 1 + count) % count)
  }, [count])

  // Push history state on mount
  useEffect(() => {
    window.history.pushState({ showcaseLightbox: true }, '')
  }, [])

  // Manage body/html scroll locking reliably with cleanup
  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = originalOverflow
      document.body.style.overflow = originalBodyOverflow
    }
  }, [])

  // Handle browser back button (popstate) to close lightbox without leaving page
  useEffect(() => {
    const handlePopState = () => {
      onClose?.()
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [onClose])

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
      else if (e.key === 'ArrowRight') nextSlide()
      else if (e.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClose, nextSlide, prevSlide])

  // Lightbox touch swipe handlers
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return
    if (
      e.target.closest &&
      (e.target.closest(`.${styles.thumbnailStrip}`) ||
        e.target.closest(`.${styles.closeButton}`))
    ) {
      return
    }
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
      valid: true
    }
  }

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current.valid) return
    touchStartRef.current.valid = false
    if (!e.changedTouches || e.changedTouches.length === 0) return
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y
    const dt = Date.now() - touchStartRef.current.time

    if (
      Math.abs(dx) > Math.abs(dy) &&
      (Math.abs(dx) > 35 || (Math.abs(dx) > 20 && dt < 300))
    ) {
      if (dx < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  // Ensure active thumbnail is smoothly centered into view and slide content resets to top
  useEffect(() => {
    const selectedThumb = thumbRefs.current[activeIdx]
    const strip = thumbStripRef.current
    if (selectedThumb && strip) {
      const targetScroll =
        selectedThumb.offsetLeft - (strip.clientWidth / 2) + (selectedThumb.offsetWidth / 2)
      strip.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      })
    }

    const wraps = document.querySelectorAll(`.${styles.browserImageWrap}`)
    wraps.forEach((w) => {
      w.scrollTop = 0
    })
  }, [activeIdx])

  if (count === 0) return null

  return (
    <div
      id="lb"
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Mockup viewer"
      onClick={(e) => {
        if (e.target.id === 'lb') handleClose()
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Button
        variant="iconOnly"
        aria-label="Close"
        icon="/assets/icons/close.svg"
        iconSize={20}
        onClick={handleClose}
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
          <ShowcaseSlide
            key={index}
            item={item}
            isActive={index === activeIdx}
            slideDirection={slideDirection}
            isMobile={isMobile}
            resolvedUrl={resolvedUrl}
          />
        ))}
      </div>

      <p className={styles.caption}>
        {activeIdx + 1} / {count} · {items[activeIdx]?.label || ''}
      </p>

      <div
        ref={thumbStripRef}
        className={styles.thumbnailStrip}
      >
        {items.map((item, index) => (
          <ShowcaseThumbnail
            key={index}
            item={item}
            isMobile={isMobile}
            isActive={index === activeIdx}
            buttonRef={(el) => {
              thumbRefs.current[index] = el
            }}
            onClick={() => {
              setSlideDirection(index > activeIdx ? 'next' : 'prev')
              setActiveIdx(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
