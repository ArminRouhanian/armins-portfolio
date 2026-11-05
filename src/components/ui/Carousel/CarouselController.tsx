import { Icon } from '../Icon'
import styles from './CarouselController.module.css'

export type CarouselControllerVariant = 'default' | 'dots-only' | 'buttons-only'
export type CarouselTheme = 'light' | 'dark'

export interface CarouselControllerProps {
  total: number
  activeIndex: number
  onPrev: () => void
  onNext: () => void
  onSelectIndex?: (index: number) => void
  infinite?: boolean
  variant?: CarouselControllerVariant
  theme?: CarouselTheme
  showDots?: boolean
  showButtons?: boolean
  showCounter?: boolean
  className?: string
  prevAriaLabel?: string
  nextAriaLabel?: string
}

export default function CarouselController({
  total,
  activeIndex,
  onPrev,
  onNext,
  onSelectIndex,
  infinite = false,
  variant = 'default',
  theme = 'light',
  showDots = true,
  showButtons = true,
  showCounter = true,
  className,
  prevAriaLabel = 'Previous slide',
  nextAriaLabel = 'Next slide'
}: CarouselControllerProps) {
  if (total <= 0) return null

  const isPrevDisabled = !infinite && activeIndex <= 0
  const isNextDisabled = !infinite && activeIndex >= total - 1

  const effectiveShowDots = variant === 'buttons-only' ? false : showDots
  const effectiveShowButtons = variant === 'dots-only' ? false : showButtons
  const effectiveShowCounter = variant === 'dots-only' ? false : showCounter

  const isOnlyDots = effectiveShowDots && !effectiveShowButtons
  const isOnlyButtons = !effectiveShowDots && effectiveShowButtons

  const containerClasses = [
    styles.carouselControls,
    theme === 'dark' ? styles.dark : '',
    isOnlyDots ? styles.onlyDots : '',
    isOnlyButtons ? styles.onlyButtons : '',
    className || ''
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      {effectiveShowDots && (
        <div
          className={styles.carouselDots}
          role="tablist"
          aria-label="Carousel pagination"
        >
          {Array.from({ length: total }, (_, idx) => {
            const isActive = activeIndex === idx
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}`}
                className={`${styles.carouselDot} ${isActive ? styles.carouselDotActive : ''}`}
                onClick={() => onSelectIndex?.(idx)}
              />
            )
          })}
        </div>
      )}

      {effectiveShowButtons && (
        <div className={styles.carouselButtons}>
          <button
            type="button"
            aria-label={prevAriaLabel}
            aria-disabled={isPrevDisabled}
            disabled={isPrevDisabled}
            className={styles.carouselNavButton}
            onClick={onPrev}
          >
            <Icon
              name="chevron-left"
              size={18}
            />
          </button>

          {effectiveShowCounter && (
            <span className={styles.carouselCounter}>
              {activeIndex + 1} / {total}
            </span>
          )}

          <button
            type="button"
            aria-label={nextAriaLabel}
            aria-disabled={isNextDisabled}
            disabled={isNextDisabled}
            className={styles.carouselNavButton}
            onClick={onNext}
          >
            <Icon
              name="chevron-right"
              size={18}
            />
          </button>
        </div>
      )}
    </div>
  )
}
