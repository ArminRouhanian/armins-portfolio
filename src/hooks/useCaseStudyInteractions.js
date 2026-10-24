import { useEffect, useState } from 'react'

export function useCaseStudyInteractions() {
  const [curLightbox, setCurLightbox] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    // 1. Smooth scroll for in-page anchors (#preview, #description, #top, etc.)
    const handleAnchorClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#') return
      if (href === '#top') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleAnchorClick)

    // 2. Footer CTA nudge animation
    const cta = document.querySelector('.fcta')
    let timeoutId
    let io
    if (cta && window.IntersectionObserver && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let seen = false
      io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
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
      }, { threshold: 0.6 })
      if (cta.parentElement) io.observe(cta.parentElement)
    }

    // 3. Floating Navbar Scroll Spy & Pill indicator
    const ids = ['preview', 'description', 'impact', 'timeline', 'showcase', 'comments']
    const handleScrollSpy = () => {
      const nav = document.querySelector('.tb')
      if (!nav) return
      const links = nav.querySelectorAll('a')
      const pill = nav.querySelector('i')
      const headerH = document.querySelector('header')?.offsetHeight || 78

      let k = 0
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= headerH + 80) {
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
    }
    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    window.addEventListener('resize', handleScrollSpy)
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

      const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
      const paint = () => {
        ;[ds, cs].forEach(list => list.forEach((el, i) => {
          const d = cur - i
          const a = Math.abs(d)
          const x = clamp((a - 0.25) / 0.25, 0, 1)
          el.style.opacity = calm ? (a < 0.5 ? 1 : 0) : 1 - x
          el.style.transform = calm ? 'none' : `translateY(${(d < 0 ? 1 : -1) * x * 36}px)`
          el.style.pointerEvents = a < 0.5 ? 'auto' : 'none'
        }))
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
        const hh = document.querySelector('header')?.offsetHeight || 78
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

    // 5. Lightbox open/close & slide transitions
    const lb = document.getElementById('lb')
    if (lb) {
      let cur = 0
      const slides = lb.querySelectorAll('.sl')
      const ths = lb.querySelectorAll('.th')
      const cap = lb.querySelector('.lbc')
      const n = slides.length

      const show = (i) => {
        cur = (i + n) % n
        slides.forEach((el, k) => el.classList.toggle('on', k === cur))
        ths.forEach((el, k) => el.classList.toggle('on', k === cur))
        if (cap && slides[cur]) {
          cap.textContent = `${cur + 1} / ${n} · ${slides[cur].getAttribute('data-n') || ''}`
        }
        if (ths[cur]) {
          ths[cur].scrollIntoView({ block: 'nearest', inline: 'center' })
        }
      }

      const open = (i) => {
        lb.classList.add('open')
        show(i)
        document.documentElement.style.overflow = 'hidden'
      }

      const close = () => {
        lb.classList.remove('open')
        document.documentElement.style.overflow = ''
      }

      const handleLbClick = (e) => {
        const target = e.target
        if (!target.closest) return
        const trigger = target.closest('[data-i]')
        if (trigger && !lb.contains(trigger)) {
          open(+trigger.getAttribute('data-i'))
          return
        }
        if (!lb.classList.contains('open')) return
        const th = target.closest('.th')
        if (th) {
          show(+th.getAttribute('data-k'))
        } else if (target.closest('.lbp')) {
          show(cur - 1)
        } else if (target.closest('.lbq')) {
          show(cur + 1)
        } else if (target.closest('.lbx') || target === lb) {
          close()
        }
      }

      const handleKeyDown = (e) => {
        if (!lb.classList.contains('open')) return
        if (e.key === 'Escape') close()
        else if (e.key === 'ArrowLeft') show(cur - 1)
        else if (e.key === 'ArrowRight') show(cur + 1)
      }

      document.addEventListener('click', handleLbClick)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('click', handleAnchorClick)
        if (io) io.disconnect()
        clearTimeout(timeoutId)
        window.removeEventListener('scroll', handleScrollSpy)
        window.removeEventListener('resize', handleScrollSpy)
        cancelAnimationFrame(rafId)
        document.removeEventListener('click', handleLbClick)
        document.removeEventListener('keydown', handleKeyDown)
        document.documentElement.style.overflow = ''
      }
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (io) io.disconnect()
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScrollSpy)
      window.removeEventListener('resize', handleScrollSpy)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return { curLightbox, lightboxOpen }
}
