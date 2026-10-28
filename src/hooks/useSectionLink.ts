import { Link, useLocation } from 'react-router-dom'

export type SectionLinkTarget =
  | { as: 'a'; href: string }
  | { as: typeof Link; to: string }

/**
 * Pure function to resolve section target based on current route.
 */
export function getSectionTarget(sectionId: string, pathname: string): SectionLinkTarget {
  const isHome = pathname === '/'
  return isHome
    ? { as: 'a', href: `#${sectionId}` }
    : { as: Link, to: `/#${sectionId}` }
}

/**
 * Custom hook that returns a function to generate section link properties
 * ({ as: 'a', href } on home, { as: Link, to } on other pages) without embedding route awareness into UI buttons.
 */
export default function useSectionLink() {
  const { pathname } = useLocation()
  return (sectionId: string): SectionLinkTarget => getSectionTarget(sectionId, pathname)
}
