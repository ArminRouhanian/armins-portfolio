import { useSmoothScroll } from './useSmoothScroll'
import { useSectionNavSpy } from './useSectionNavSpy'
import { useImpactScroller } from './useImpactScroller'
import { useFooterCtaNudge } from './useFooterCtaNudge'

export function useCaseStudyInteractions(): void {
  useSmoothScroll()
  useSectionNavSpy()
  useImpactScroller()
}

export { useSmoothScroll, useSectionNavSpy, useImpactScroller, useFooterCtaNudge }
