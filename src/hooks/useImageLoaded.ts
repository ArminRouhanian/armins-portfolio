import { useState, useEffect } from 'react'

const loadedCache = new Set<string>()
const errorCache = new Set<string>()

export interface ImageLoadState {
  isLoaded: boolean
  hasError: boolean
}

export function getImageSrc(
  item?: string | { image?: string; src?: string; bg?: string } | null
): string | null {
  if (!item) return null
  if (typeof item === 'string') {
    return item.includes('gradient') ? null : item
  }
  return item.image || item.src || (item.bg && !item.bg.includes('gradient') ? item.bg : null)
}

export default function useImageLoaded(src?: string | null): ImageLoadState {
  const [state, setState] = useState<ImageLoadState>(() => {
    if (!src || src.includes('gradient')) {
      return { isLoaded: true, hasError: false }
    }
    if (loadedCache.has(src)) {
      return { isLoaded: true, hasError: false }
    }
    if (errorCache.has(src)) {
      return { isLoaded: true, hasError: true }
    }
    return { isLoaded: false, hasError: false }
  })

  useEffect(() => {
    if (!src || src.includes('gradient')) {
      setState({ isLoaded: true, hasError: false })
      return
    }

    if (loadedCache.has(src)) {
      setState({ isLoaded: true, hasError: false })
      return
    }

    if (errorCache.has(src)) {
      setState({ isLoaded: true, hasError: true })
      return
    }

    let active = true
    const img = new Image()
    img.src = src

    if (img.complete) {
      if (img.naturalWidth > 0) {
        loadedCache.add(src)
        setState({ isLoaded: true, hasError: false })
      } else {
        errorCache.add(src)
        setState({ isLoaded: true, hasError: true })
      }
      return
    }

    img.onload = () => {
      loadedCache.add(src)
      if (active) setState({ isLoaded: true, hasError: false })
    }

    img.onerror = () => {
      errorCache.add(src)
      if (active) setState({ isLoaded: true, hasError: true })
    }

    return () => {
      active = false
    }
  }, [src])

  return state
}
