import { useState, useEffect } from 'react'

const loadedCache = new Set()

export function getImageSrc(item) {
  if (!item) return null
  if (typeof item === 'string') {
    return item.includes('gradient') ? null : item
  }
  return item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
}

export default function useImageLoaded(src) {
  const [loaded, setLoaded] = useState(() => {
    if (!src || src.includes('gradient')) return true
    return loadedCache.has(src)
  })

  useEffect(() => {
    if (!src || src.includes('gradient')) {
      setLoaded(true)
      return
    }

    if (loadedCache.has(src)) {
      setLoaded(true)
      return
    }

    let active = true
    const img = new Image()
    img.src = src

    if (img.complete && img.naturalWidth > 0) {
      loadedCache.add(src)
      setLoaded(true)
      return
    }

    img.onload = () => {
      loadedCache.add(src)
      if (active) setLoaded(true)
    }

    img.onerror = () => {
      // Avoid hanging in skeleton state on error
      if (active) setLoaded(true)
    }

    return () => {
      active = false
    }
  }, [src])

  return loaded
}
