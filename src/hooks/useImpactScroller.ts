import { useEffect } from 'react'
import { getHeaderHeight } from '../utils/headerHeight'

const SCROLL_STEP = 460

const clamp = (val: number, min: number, max: number): number =>
  Math.min(Math.max(val, min), max)

/**
 * Controls the interactive sticky slide-switching animation
 * and progress ticks in the Impact section (#impact).
 */
export function useImpactScroller(): void {
  useEffect(() => {
    const impactSec = document.getElementById('impact')
    if (!impactSec) return

    const descSlides = impactSec.querySelectorAll<HTMLElement>('.is-desc')
    const cardSlides = impactSec.querySelectorAll<HTMLElement>('.im')
    const progressTicks = impactSec.querySelectorAll<HTMLElement>('.pg')
    const counterEl = impactSec.querySelector<HTMLElement>('.pgc')

    const metricCount = descSlides.length
    if (metricCount === 0) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let currentSlide = 0
    let targetSlide = 0
    let isRunning = false
    let rafId: number | null = null
    let scrollRafId: number | null = null

    const lastProgressTickValues: number[] = []
    let lastCounterNum = -1

    const paint = (): void => {
      // Animate descriptions and metric cards
      ;[descSlides, cardSlides].forEach((slideList) => {
        slideList.forEach((el, index) => {
          const distance = currentSlide - index
          const absDistance = Math.abs(distance)
          const transitionProgress = clamp((absDistance - 0.25) / 0.25, 0, 1)
          const opacity = prefersReducedMotion
            ? absDistance < 0.5 ? 1 : 0
            : 1 - transitionProgress

          if (opacity <= 0.001) {
            if (el.style.visibility !== 'hidden') {
              el.style.opacity = '0'
              el.style.visibility = 'hidden'
              el.style.pointerEvents = 'none'
            }
            return
          }

          el.style.visibility = 'visible'
          el.style.opacity = String(opacity)
          el.style.transform = prefersReducedMotion
            ? 'none'
            : `translateY(${(distance < 0 ? 1 : -1) * transitionProgress * 36}px)`
          el.style.pointerEvents = absDistance < 0.5 ? 'auto' : 'none'
        })
      })

      // Animate progress bar ticks
      const normalizedProgress = (currentSlide / Math.max(1, metricCount - 1)) * metricCount
      progressTicks.forEach((tick, index) => {
        const fillPercent = Math.round(clamp(normalizedProgress - index, 0, 1) * 100)
        if (lastProgressTickValues[index] !== fillPercent) {
          lastProgressTickValues[index] = fillPercent
          tick.style.background = `linear-gradient(90deg, var(--color-primary) ${fillPercent}%, var(--pgc, var(--color-border)) ${fillPercent}%)`
        }
      })

      // Update counter (e.g. "01 / 04")
      const activeNum = Math.round(currentSlide) + 1
      if (counterEl && lastCounterNum !== activeNum) {
        lastCounterNum = activeNum
        counterEl.textContent = `0${activeNum} / 0${metricCount}`
      }
    }

    const tick = (): void => {
      const diff = targetSlide - currentSlide
      if (prefersReducedMotion) {
        currentSlide = targetSlide
      } else {
        currentSlide += diff * 0.35
        if (Math.abs(diff) < 0.001) currentSlide = targetSlide
      }

      paint()

      if (currentSlide !== targetSlide) {
        rafId = requestAnimationFrame(tick)
      } else {
        isRunning = false
        rafId = null
      }
    }

    const updateTargetFromScroll = (): void => {
      const rect = impactSec.getBoundingClientRect()
      const headerH = getHeaderHeight()
      targetSlide = clamp((headerH - 72 - rect.top) / SCROLL_STEP, 0, metricCount - 1)

      if (!isRunning && currentSlide !== targetSlide) {
        isRunning = true
        rafId = requestAnimationFrame(tick)
      }
    }

    const onScroll = (): void => {
      if (scrollRafId !== null) return
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null
        updateTargetFromScroll()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateTargetFromScroll)
    paint()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateTargetFromScroll)
      if (scrollRafId !== null) cancelAnimationFrame(scrollRafId)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])
}
