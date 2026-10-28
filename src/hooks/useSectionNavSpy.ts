import { useEffect } from 'react'
import { getHeaderHeight, updateHeaderHeight } from '../utils/headerHeight'

function updateNavPill(nav: HTMLElement, activeLink: HTMLAnchorElement): void {
  const links = nav.querySelectorAll('a')
  links.forEach((link) => link.classList.toggle('on', link === activeLink))

  const pill = nav.querySelector<HTMLElement>('i')
  if (pill) {
    pill.style.opacity = '1'
    pill.style.width = `${activeLink.offsetWidth}px`
    pill.style.height = `${activeLink.offsetHeight}px`
    pill.style.transform = `translate(${activeLink.offsetLeft}px, ${activeLink.offsetTop}px)`
  }

  // Horizontally scroll nav container to center active button on mobile
  if (nav.scrollWidth > nav.clientWidth) {
    const targetScrollLeft =
      activeLink.offsetLeft - nav.clientWidth / 2 + activeLink.offsetWidth / 2
    nav.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth'
    })
  }
}

/**
 * Tracks scroll position and updates the floating section navbar (.tb)
 * and its sliding pill indicator.
 */
export function useSectionNavSpy(): void {
  useEffect(() => {
    let isNavLocked = false
    let navLockTimeout: ReturnType<typeof setTimeout> | null = null
    let prevActiveIndex = -1
    let rafId: number | null = null

    const handleNavClick = (e: MouseEvent): void => {
      const target = e.target as HTMLElement | null
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return

      const nav = link.closest<HTMLElement>('.tb')
      if (!nav) return

      const links = Array.from(nav.querySelectorAll('a'))
      const clickedIndex = links.indexOf(link)

      if (clickedIndex !== -1) {
        isNavLocked = true
        prevActiveIndex = clickedIndex

        if (navLockTimeout) clearTimeout(navLockTimeout)
        navLockTimeout = setTimeout(() => {
          isNavLocked = false
        }, 900)

        updateNavPill(nav, link)
      }
    }

    const handleScrollSpy = (force = false): void => {
      const nav = document.querySelector<HTMLElement>('.tb')
      if (!nav || isNavLocked) return

      const links = Array.from(nav.querySelectorAll('a'))
      if (links.length === 0) return

      const headerH = getHeaderHeight()
      let activeIndex = 0

      links.forEach((link, idx) => {
        const id = link.getAttribute('href')?.replace('#', '')
        if (!id) return
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= headerH + 20) {
            activeIndex = idx
          }
        }
      })

      // If scrolled to the bottom of the page, activate the last item
      const doc = document.documentElement
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 50) {
        activeIndex = links.length - 1
      }

      // Avoid unnecessary DOM mutations if active tab hasn't changed
      if (force || activeIndex !== prevActiveIndex) {
        prevActiveIndex = activeIndex
        const activeLink = links[activeIndex]
        if (activeLink) {
          updateNavPill(nav, activeLink)
        }
      }
    }

    const onScroll = (): void => {
      if (isNavLocked || rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        handleScrollSpy()
      })
    }

    const unlockNavLock = (): void => {
      if (isNavLocked) {
        isNavLocked = false
        if (navLockTimeout) clearTimeout(navLockTimeout)
        handleScrollSpy()
      }
    }

    const handleResize = (): void => {
      updateHeaderHeight()
      prevActiveIndex = -1
      handleScrollSpy(true)
    }

    document.addEventListener('click', handleNavClick)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    window.addEventListener('scrollend', unlockNavLock)
    window.addEventListener('wheel', unlockNavLock, { passive: true })
    window.addEventListener('touchstart', unlockNavLock, { passive: true })

    handleScrollSpy(true)
    const timer1 = setTimeout(() => handleScrollSpy(true), 100)
    const timer2 = setTimeout(() => handleScrollSpy(true), 500)

    return () => {
      document.removeEventListener('click', handleNavClick)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scrollend', unlockNavLock)
      window.removeEventListener('wheel', unlockNavLock)
      window.removeEventListener('touchstart', unlockNavLock)

      if (rafId !== null) cancelAnimationFrame(rafId)
      clearTimeout(timer1)
      clearTimeout(timer2)
      if (navLockTimeout) clearTimeout(navLockTimeout)
    }
  }, [])
}
