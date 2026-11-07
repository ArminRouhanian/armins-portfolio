import { useEffect, useRef } from 'react'

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(', ')

export function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  isActive: boolean
): void {
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isActive) return

    previousActiveElement.current = document.activeElement as HTMLElement | null

    const container = containerRef.current
    if (!container) return

    const getFocusableElements = (): HTMLElement[] => {
      const elements = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      )
      return elements.filter(
        (el) => el.offsetParent !== null && !el.hasAttribute('disabled')
      )
    }

    const focusable = getFocusableElements()
    if (focusable.length > 0) {
      focusable[0].focus()
    } else {
      container.focus()
    }

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab') return

      const elements = getFocusableElements()
      if (elements.length === 0) {
        e.preventDefault()
        return
      }

      const firstElement = elements[0]
      const lastElement = elements[elements.length - 1]

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus()
      }
    }
  }, [containerRef, isActive])
}
