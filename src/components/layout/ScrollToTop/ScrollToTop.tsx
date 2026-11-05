import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        const headerH = document.querySelector('header')?.offsetHeight || 65
        const top = el.getBoundingClientRect().top + window.scrollY - headerH
        window.scrollTo({
          top: Math.max(0, top),
          behavior: 'smooth'
        })
        return
      }
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname, hash])

  return null
}
