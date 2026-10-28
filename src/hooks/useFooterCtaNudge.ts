import { useEffect } from 'react'

/**
 * Triggers a subtle nudge animation on the footer CTA button (.fcta)
 * after it has been in the viewport for 2 seconds.
 */
export function useFooterCtaNudge(): void {
  useEffect(() => {
    const cta = document.querySelector<HTMLElement>('.fcta')
    if (
      !cta ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let hasTriggered = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (hasTriggered) return
            hasTriggered = true
            if (timeoutId) clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
              cta.classList.remove('nudge')
              void cta.offsetWidth
              cta.classList.add('nudge')
            }, 2000)
          } else {
            hasTriggered = false
            if (timeoutId) clearTimeout(timeoutId)
          }
        })
      },
      { threshold: 0.6 }
    )

    observer.observe(cta.parentElement ?? cta)

    const handleAnimEnd = () => cta.classList.remove('nudge')
    cta.addEventListener('animationend', handleAnimEnd)

    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
      cta.removeEventListener('animationend', handleAnimEnd)
    }
  }, [])
}
