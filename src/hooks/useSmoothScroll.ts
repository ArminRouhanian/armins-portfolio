import { useEffect } from 'react'
import { getHeaderHeight, updateHeaderHeight } from '../utils/headerHeight'

/**
 * Handles smooth in-page scrolling for anchor links (e.g. href="#preview" or href="#top"),
 * taking the sticky header offset into account.
 */
export function useSmoothScroll(): void {
  useEffect(() => {
    updateHeaderHeight()

    const handleAnchorClick = (e: MouseEvent): void => {
      // Ignore modified clicks or secondary button clicks
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return
      }

      const target = e.target as HTMLElement | null
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      if (href === '#top') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      // Safely find the target element without CSS selector syntax errors
      const targetId = href.startsWith('#') ? href.slice(1) : href
      let targetEl = document.getElementById(targetId)

      if (!targetEl) {
        try {
          targetEl = document.querySelector<HTMLElement>(href)
        } catch {
          return
        }
      }

      if (targetEl) {
        e.preventDefault()
        const headerH = getHeaderHeight()
        const targetTop = targetEl.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: Math.max(0, targetTop - headerH),
          behavior: 'smooth'
        })
      }
    }

    const handleResize = (): void => {
      updateHeaderHeight()
    }

    document.addEventListener('click', handleAnchorClick)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}
