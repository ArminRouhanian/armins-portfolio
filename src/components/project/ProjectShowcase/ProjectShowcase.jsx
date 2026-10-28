import React, { useState, useEffect, useCallback, useRef } from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import Button from '../../common/Button/Button'
import Alert from '../../common/Alert/Alert'
import ImagePlaceholder from '../../common/ImagePlaceholder/ImagePlaceholder'
import useImageLoaded from '../../../hooks/useImageLoaded'
import ShowcaseItems from '../ShowcaseItems/ShowcaseItems'
import styles from './ProjectShowcase.module.css'

const getItemBackground = (item) => {
  if (!item) return 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
  const img = item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
  if (img) {
    return `url("${img}") top center / cover no-repeat`
  }
  return item.gradient || item.bg || 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))'
}

const getItemImage = (item) => {
  if (!item) return null
  return item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
}

function LightboxDesktopSlide({ item }) {
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

function LightboxMobileSlide({ item }) {
  const img = getItemImage(item)
  const { isLoaded, hasError } = useImageLoaded(img)

  return (
    <div
      className={`${styles.mobileFrame}${img && !isLoaded && !hasError ? ' skeletonDark' : ''}`}
      style={{
        background: !hasError && isLoaded ? getItemBackground(item) : undefined
      }}
    >
      {hasError && <ImagePlaceholder isDark iconSize={48} />}
    </div>
  )
}

function LightboxThumbnail({ item, index, isMobile, isActive, onClick, thumbRef }) {
  const img = getItemImage(item)
  const { isLoaded, hasError } = useImageLoaded(img)

  return (
    <button
      ref={thumbRef}
      type="button"
      className={`${styles.thumbnail}${isMobile ? ` ${styles.thumbnailMobileType}` : ''}${isActive ? ` ${styles.thumbnailActive}` : ''}${img && !isLoaded && !hasError ? ' skeletonDark' : ''}`}
      aria-label={item.label}
      onClick={onClick}
      style={{
        background: !hasError && isLoaded ? getItemBackground(item) : undefined
      }}
    >
      {hasError && <ImagePlaceholder isDark iconSize={20} text="" />}
    </button>
  )
}

export default function ProjectShowcase({ showcase, mockupUrl, label = '04 · SHOWCASE' }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')
  const [isOpen, setIsOpen] = useState(false)
  const [listActiveIdx, setListActiveIdx] = useState(0)

  const listTrackRef = useRef(null)
  const touchStartRef = useRef({ x: 0, y: 0, time: 0, valid: false })
  const thumbStripRef = useRef(null)
  const thumbRefs = useRef([])

  const items = showcase?.items || []
  const count = items.length
  const type = showcase?.type || 'desktop'
  const isMobile = type === 'mobile'
  const resolvedUrl = showcase?.mockupUrl || mockupUrl || 'yourproduct.com'

  const openLightbox = useCallback((index) => {
    setActiveIdx(index)
    setSlideDirection('next')
    setIsOpen(true)
    window.history.pushState({ showcaseLightbox: true }, '')
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    if (window.history.state?.showcaseLightbox) {
      window.history.back()
    }
  }, [])

  // Manage body/html scroll locking reliably with cleanup
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = originalOverflow
      document.body.style.overflow = originalBodyOverflow
    }
  }, [isOpen])

  // Handle browser back button (popstate) to close lightbox without leaving page
  useEffect(() => {
    if (!isOpen) return

    const handlePopState = () => {
      setIsOpen(false)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isOpen])

  const nextSlide = useCallback(() => {
    setSlideDirection('next')
    setActiveIdx((prev) => (prev + 1) % count)
  }, [count])

  const prevSlide = useCallback(() => {
    setSlideDirection('prev')
    setActiveIdx((prev) => (prev - 1 + count) % count)
  }, [count])

  // Track horizontal scroll of showcase list on mobile
  const handleListScroll = useCallback(() => {
    const el = listTrackRef.current
    if (!el) return
    const firstChild = el.firstElementChild
    if (!firstChild) return
    const itemWidth = firstChild.offsetWidth
    const gap = 16
    const totalItemWidth = itemWidth + gap
    const scrollPos = el.scrollLeft
    const idx = Math.round(scrollPos / totalItemWidth)
    setListActiveIdx(Math.max(0, Math.min(count - 1, idx)))
  }, [count])

  const scrollToListSlide = (index) => {
    const el = listTrackRef.current
    if (!el) return
    const firstChild = el.firstElementChild
    if (!firstChild) return
    const itemWidth = firstChild.offsetWidth
    const gap = 16
    const targetLeft = index * (itemWidth + gap)
    el.scrollTo({ left: targetLeft, behavior: 'smooth' })
    setListActiveIdx(index)
  }

  // Lightbox touch swipe handlers
  const handleLightboxTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return
    // Ignore touches initiated on the thumbnail strip or close button
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

  const handleLightboxTouchEnd = (e) => {
    if (!touchStartRef.current.valid) return
    touchStartRef.current.valid = false
    if (!e.changedTouches || e.changedTouches.length === 0) return
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y
    const dt = Date.now() - touchStartRef.current.time

    // Require horizontal movement greater than vertical movement
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

  // Ensure active thumbnail is smoothly centered into view and slide content resets to top when activeIdx changes
  useEffect(() => {
    if (!isOpen) return
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
  }, [activeIdx, isOpen])

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
            label={label}
            title="Design mockups"
          />
          {showcase.alert && (
            <div className={styles.alertWrap}>
              <Alert
                dark
                variant={showcase.alert.variant || 'info'}
              >
                {showcase.alert.text || showcase.alert}
              </Alert>
            </div>
          )}
          <p className={styles.subtitleDesktop}>
            Click any mockup to open the viewer. Use arrow keys to step through.
          </p>
          <p className={styles.subtitleMobile}>
            Tap any mockup to open viewer. Swipe to browse.
          </p>
        </div>
        <ShowcaseItems
          ref={listTrackRef}
          items={items}
          type={type}
          onItemClick={openLightbox}
          onScroll={handleListScroll}
        />
        <div className={styles.dots} aria-label="Mockup pagination">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot}${index === listActiveIdx ? ` ${styles.dotActive}` : ''}`}
              aria-label={`Go to mockup ${index + 1}`}
              onClick={() => scrollToListSlide(index)}
            />
          ))}
        </div>
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
          onTouchStart={handleLightboxTouchStart}
          onTouchEnd={handleLightboxTouchEnd}
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
                className={`${styles.slide}${
                  index === activeIdx
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
              <LightboxThumbnail
                key={index}
                item={item}
                index={index}
                isMobile={isMobile}
                isActive={index === activeIdx}
                buttonRef={(el) => (thumbRefs.current[index] = el)}
                onClick={() => {
                  setSlideDirection(index > activeIdx ? 'next' : 'prev')
                  setActiveIdx(index)
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
