let cachedHeight = 65

/**
 * Measures the current header height, updates the cached value,
 * and synchronizes the --header-height CSS custom property.
 */
export function updateHeaderHeight(): number {
  const header = document.querySelector('header')
  cachedHeight = header?.offsetHeight || 65
  document.documentElement.style.setProperty('--header-height', `${cachedHeight}px`)
  return cachedHeight
}

/**
 * Returns the cached header height without causing layout reflow.
 * If not yet measured, measures once.
 */
export function getHeaderHeight(): number {
  if (cachedHeight === 65 && typeof document !== 'undefined') {
    return updateHeaderHeight()
  }
  return cachedHeight
}
