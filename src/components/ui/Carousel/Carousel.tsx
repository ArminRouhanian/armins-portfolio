import React, { useState, useRef, useCallback, useEffect } from 'react'
import CarouselController, { CarouselControllerProps } from './CarouselController'
import styles from './Carousel.module.css'

export interface CarouselProps {
  /** The content items or cards to display in the carousel */
  items?: React.ReactNode[]
  /** Children can be passed instead of or alongside items */
  children?: React.ReactNode
  /** Enable circular infinite scrolling (loops last to first and vice versa) */
  infinite?: boolean
  /** Center the active slide in the viewport, showing adjacent cards peeking in */
  centered?: boolean
  /** Bleed the carousel track to the screen edges on mobile (cancels parent container padding) */
  bleed?: boolean
  /** Width of each slide (e.g. 'calc(100% - 56px)', '86%', '100%') */
  slideWidth?: string
  /** Gap between slides (e.g. '16px', 'var(--spacing-md)') */
  gap?: string
  /** Whether to show the carousel controller with navigation dots & buttons */
  showController?: boolean
  /** Controller position relative to slides */
  controllerPosition?: 'bottom' | 'top'
  /** Custom options passed directly to the controller */
  controllerProps?: Partial<
    Omit<
      CarouselControllerProps,
      'total' | 'activeIndex' | 'onPrev' | 'onNext' | 'onSelectIndex' | 'infinite'
    >
  >
  /** Initial slide index (0-based) */
  initialIndex?: number
  /** Callback fired whenever the active slide index changes */
  onIndexChange?: (index: number) => void
  /** Optional custom CSS classes */
  className?: string
  containerClassName?: string
  trackClassName?: string
  slideClassName?: string
  /** Horizontal swipe displacement threshold (pixels) */
  swipeThreshold?: number
  /** Accessibility label for the carousel region */
  ariaLabel?: string
}

export default function Carousel({
  items,
  children,
  infinite = false,
  centered = true,
  bleed = false,
  slideWidth = 'calc(100% - 56px)',
  gap = '16px',
  showController = true,
  controllerPosition = 'bottom',
  controllerProps,
  initialIndex = 0,
  onIndexChange,
  className,
  containerClassName,
  trackClassName,
  slideClassName,
  swipeThreshold = 35,
  ariaLabel = 'Content carousel'
}: CarouselProps) {
  const rawItems = items ?? (children ? React.Children.toArray(children) : [])
  const total = rawItems.length

  const isInfinite = infinite && total > 1

  // For centered infinite carousel, 2 clones on each side ensure peeking adjacent cards are always visible
  const slides = isInfinite
    ? [
        rawItems[(total - 2 + total) % total],
        rawItems[total - 1],
        ...rawItems,
        rawItems[0],
        rawItems[1 % total]
      ]
    : rawItems

  const defaultDisplayIndex = isInfinite
    ? Math.max(0, Math.min(total - 1, initialIndex)) + 2
    : Math.max(0, Math.min(total - 1, initialIndex))

  const [displayIndex, setDisplayIndex] = useState(defaultDisplayIndex)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const activeIndex = isInfinite
    ? (displayIndex - 2 + total) % total
    : displayIndex

  const prevActiveRef = useRef(activeIndex)
  useEffect(() => {
    if (prevActiveRef.current !== activeIndex) {
      prevActiveRef.current = activeIndex
      onIndexChange?.(activeIndex)
    }
  }, [activeIndex, onIndexChange])

  const handleNext = useCallback(() => {
    if (isTransitioning) return

    if (isInfinite) {
      setIsTransitioning(true)
      setDisplayIndex((prev) => prev + 1)
    } else {
      if (displayIndex >= total - 1) return
      setIsTransitioning(true)
      setDisplayIndex((prev) => prev + 1)
    }
  }, [isTransitioning, isInfinite, total, displayIndex])

  const handlePrev = useCallback(() => {
    if (isTransitioning) return

    if (isInfinite) {
      setIsTransitioning(true)
      setDisplayIndex((prev) => prev - 1)
    } else {
      if (displayIndex <= 0) return
      setIsTransitioning(true)
      setDisplayIndex((prev) => prev - 1)
    }
  }, [isTransitioning, isInfinite, displayIndex])

  const handleSelectIndex = useCallback(
    (targetIndex: number) => {
      if (isTransitioning) return
      const clamped = Math.max(0, Math.min(total - 1, targetIndex))
      setIsTransitioning(true)
      if (isInfinite) {
        setDisplayIndex(clamped + 2)
      } else {
        setDisplayIndex(clamped)
      }
    },
    [isTransitioning, isInfinite, total]
  )

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false)
    if (isInfinite) {
      if (displayIndex >= total + 2) {
        // Wrapped past clone of first, seamlessly snap to real item 0
        setDisplayIndex(2)
      } else if (displayIndex <= 1) {
        // Wrapped past clone of last, seamlessly snap to real item (total - 1)
        setDisplayIndex(total + 1)
      }
    }
  }, [isInfinite, total, displayIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isTransitioning) return
    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const dx = touchEndX - touchStartX.current
    const dy = touchEndY - touchStartY.current

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > swipeThreshold) {
      if (dx < 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  if (total === 0) return null

  const transform = centered
    ? `translateX(calc((100% - var(--carousel-slide-width)) / 2 - ${displayIndex} * (var(--carousel-slide-width) + var(--carousel-gap))))`
    : `translateX(calc(-1 * ${displayIndex} * (var(--carousel-slide-width) + var(--carousel-gap))))`

  const transition = isTransitioning
    ? 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
    : 'none'

  const trackStyle: React.CSSProperties = {
    transform,
    transition,
    gap,
    ['--carousel-slide-width' as string]: slideWidth,
    ['--carousel-gap' as string]: gap
  }

  const controller = showController ? (
    <div className={bleed ? styles.bleedController : undefined}>
      <CarouselController
        total={total}
        activeIndex={activeIndex}
        infinite={isInfinite}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={handleSelectIndex}
        {...controllerProps}
      />
    </div>
  ) : null

  const wrapperClasses = [
    styles.carouselWrapper,
    bleed ? styles.bleed : '',
    className || ''
  ]
    .filter(Boolean)
    .join(' ')

  const containerClasses = [styles.carouselContainer, containerClassName || '']
    .filter(Boolean)
    .join(' ')

  const trackClasses = [styles.carouselTrack, trackClassName || '']
    .filter(Boolean)
    .join(' ')

  const slideClasses = [styles.carouselSlide, slideClassName || '']
    .filter(Boolean)
    .join(' ')

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={wrapperClasses}
    >
      {controllerPosition === 'top' && controller}

      <div
        className={containerClasses}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={trackClasses}
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={slideClasses}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {controllerPosition === 'bottom' && controller}
    </div>
  )
}
