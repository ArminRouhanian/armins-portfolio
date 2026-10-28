import { useSmoothScroll } from './useSmoothScroll'
import { useSectionNavSpy } from './useSectionNavSpy'
import { useImpactScroller } from './useImpactScroller'
import { useFooterCtaNudge } from './useFooterCtaNudge'

/**
 * Master hook for case study page interactions.
 * Composes dedicated hooks for smooth scrolling, floating nav spy,
 * interactive impact scroller, and footer CTA nudge.
 */
export function useCaseStudyInteractions(): void {
  useSmoothScroll()
  useSectionNavSpy()
  useImpactScroller()
  useFooterCtaNudge()
}

export { useSmoothScroll, useSectionNavSpy, useImpactScroller, useFooterCtaNudge }
