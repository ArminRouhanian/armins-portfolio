import { useEffect } from 'react'

export function useCaseStudyInteractions() {
  useEffect(() => {
    // 1. Smooth scroll for in-page anchors with precise header offset
    const syncHeaderHeight = () => {
      const headerH = document.querySelector('header')?.offsetHeight || 65
      document.documentElement.style.setProperty('--header-height', `${headerH}px`)
      return headerH
    }
    syncHeaderHeight()

    const ids = [
      'preview',
      'description',
      'impact',
      'timeline',
      'showcase',
      'comments'
    ]
    let prevActiveK = -1
    let isNavLock = false
    let navLockTimeout = null

    const handleAnchorClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#') return

      const tbLink = e.target.closest && e.target.closest('.tb a')
      if (tbLink) {
        const nav = tbLink.closest('.tb')
        const links = nav ? Array.from(nav.querySelectorAll('a')) : []
        const clickedIdx = links.indexOf(tbLink)

        if (clickedIdx !== -1) {
          isNavLock = true
          prevActiveK = clickedIdx
          clearTimeout(navLockTimeout)
          navLockTimeout = setTimeout(() => {
            isNavLock = false
          }, 900)

          // Immediately highlight destination button & move pill directly
          links.forEach((link, idx) => link.classList.toggle('on', idx === clickedIdx))
          const pill = nav.querySelector('i')
          if (pill) {
            pill.style.opacity = '1'
            pill.style.width = tbLink.offsetWidth + 'px'
            pill.style.height = tbLink.offsetHeight + 'px'
            pill.style.transform = `translate(${tbLink.offsetLeft}px, ${tbLink.offsetTop}px)`
          }

          // Smoothly scroll floating nav directly to destination button
          if (nav.scrollWidth > nav.clientWidth) {
            const targetScrollLeft =
              tbLink.offsetLeft - (nav.clientWidth / 2) + (tbLink.offsetWidth / 2)
            nav.scrollTo({
              left: Math.max(0, targetScrollLeft),
              behavior: 'smooth'
            })
          }
        }
      }

      if (href === '#top') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        const headerH = syncHeaderHeight()
        const targetTop = target.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: Math.max(0, targetTop - headerH),
          behavior: 'smooth'
        })
      }
    }
    document.addEventListener('click', handleAnchorClick)

    // 2. Footer CTA nudge animation
    const cta = document.querySelector('.fcta')
    let timeoutId
    let io
    if (
      cta &&
      window.IntersectionObserver &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      let seen = false
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (seen) return
              seen = true
              clearTimeout(timeoutId)
              timeoutId = setTimeout(() => {
                cta.classList.remove('nudge')
                void cta.offsetWidth
                cta.classList.add('nudge')
              }, 2000)
            } else {
              seen = false
              clearTimeout(timeoutId)
            }
          })
        },
        { threshold: 0.6 }
      )
      if (cta.parentElement) io.observe(cta.parentElement)
    }

    // 3. Floating Navbar Scroll Spy, Pill indicator & Sticky position above footer
    const handleScrollSpy = () => {
      const nav = document.querySelector('.tb')
      if (!nav) return

      // Keep navbar floating at bottom, but dock cleanly above footer when reached
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const overlap = window.innerHeight - footerRect.top
        const bottomOffset = overlap > 0 ? overlap + 24 : 24
        nav.style.bottom = `${bottomOffset}px`
      }

      // If user clicked a floating nav button, skip intermediate horizontal scrolls
      if (isNavLock) {
        return
      }

      const links = nav.querySelectorAll('a')
      const pill = nav.querySelector('i')
      const headerH = syncHeaderHeight()

      let k = 0
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= headerH + 20) {
            k = i
          }
        }
      }
      const de = document.documentElement
      if (window.innerHeight + window.scrollY >= de.scrollHeight - 50) {
        k = ids.length - 1
      }

      links.forEach((a, idx) => a.classList.toggle('on', idx === k))
      const activeLink = links[k]
      if (activeLink && pill) {
        pill.style.opacity = '1'
        pill.style.width = activeLink.offsetWidth + 'px'
        pill.style.height = activeLink.offsetHeight + 'px'
        pill.style.transform = `translate(${activeLink.offsetLeft}px, ${activeLink.offsetTop}px)`
      }

      // Automatically scroll floating navbar to keep active button smoothly visible
      if (activeLink && k !== prevActiveK) {
        prevActiveK = k
        if (nav.scrollWidth > nav.clientWidth) {
          const targetScrollLeft =
            activeLink.offsetLeft - (nav.clientWidth / 2) + (activeLink.offsetWidth / 2)
          nav.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: 'smooth'
          })
        }
      }
    }

    const unlockNavLock = () => {
      if (isNavLock) {
        isNavLock = false
        clearTimeout(navLockTimeout)
        handleScrollSpy()
      }
    }

    const handleResize = () => {
      prevActiveK = -1
      handleScrollSpy()
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    window.addEventListener('resize', handleResize)
    window.addEventListener('scrollend', unlockNavLock)
    window.addEventListener('wheel', unlockNavLock, { passive: true })
    window.addEventListener('touchstart', unlockNavLock, { passive: true })

    handleScrollSpy()
    setTimeout(handleScrollSpy, 100)
    setTimeout(handleScrollSpy, 500)

    // 4. Interactive Impact Scroller
    const impactSec = document.getElementById('impact')
    let rafId
    if (impactSec) {
      const ds = impactSec.querySelectorAll('.is-desc')
      const cs = impactSec.querySelectorAll('.im')
      const ps = impactSec.querySelectorAll('.pg')
      const cnt = impactSec.querySelector('.pgc')
      const n = ds.length
      const step = 460
      const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      let cur = 0
      let target = 0
      let run = false

      const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

      const paint = () => {
        ds.forEach((el, i) => {
          const d = cur - i
          const a = clamp(Math.abs(d), 0, 1)
          const x = 1 - a
          el.style.opacity = Math.max(0.12, x)
          el.style.transform = calm
            ? 'none'
            : `translateY(${(d < 0 ? 1 : -1) * a * 20}px)`
        })
        cs.forEach((el, i) =>
          requestAnimationFrame(() => {
            const d = cur - i
            const a = Math.abs(d)
            const x = Math.min(a, 1)
            el.style.opacity = String(clamp(1 - x * 1.5, 0, 1))
            el.style.transform = calm
              ? 'none'
              : `translateY(${(d < 0 ? 1 : -1) * x * 36}px)`
            el.style.pointerEvents = a < 0.5 ? 'auto' : 'none'
          })
        )
        const t = (cur / Math.max(1, n - 1)) * n
        ps.forEach((el, i) => {
          const f = Math.round(clamp(t - i, 0, 1) * 100)
          el.style.background = `linear-gradient(90deg, #0D99FF ${f}%, var(--pgc, #E5E5E5) ${f}%)`
        })
        if (cnt) cnt.textContent = `0${Math.round(cur) + 1} / 0${n}`
      }

      const tick = () => {
        const diff = target - cur
        cur += calm ? diff : clamp(diff * 0.16, -0.06, 0.06)
        if (Math.abs(target - cur) < 0.002) cur = target
        paint()
        if (cur !== target) {
          rafId = requestAnimationFrame(tick)
        } else {
          run = false
        }
      }

      const handleImpactScroll = () => {
        const r = impactSec.getBoundingClientRect()
        const hh = syncHeaderHeight()
        target = clamp((hh - 72 - r.top) / step, 0, n - 1)
        if (!run) {
          run = true
          rafId = requestAnimationFrame(tick)
        }
      }

      window.addEventListener('scroll', handleImpactScroll, { passive: true })
      window.addEventListener('resize', handleImpactScroll)
      paint()
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (io) io.disconnect()
      clearTimeout(timeoutId)
      clearTimeout(navLockTimeout)
      window.removeEventListener('scroll', handleScrollSpy)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scrollend', unlockNavLock)
      window.removeEventListener('wheel', unlockNavLock)
      window.removeEventListener('touchstart', unlockNavLock)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
