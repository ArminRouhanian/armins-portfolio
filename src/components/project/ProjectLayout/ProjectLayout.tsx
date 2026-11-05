import MainLayout from '../../layout/MainLayout/MainLayout'
import Hero from '../Hero/Hero'
import Description from '../Description/Description'
import Impact from '../Impact/Impact'
import Timeline from '../Timeline/Timeline'
import Showcase from '../Showcase/Showcase'
import Comments from '../Comments/Comments'
import ProjectPagination from '../ProjectPagination/ProjectPagination'
import SectionNav from '../SectionNav/SectionNav'
import { useCaseStudyInteractions } from '../../../hooks/useCaseStudyInteractions'
import { ProjectData } from '../../../types/project'

export interface ProjectLayoutProps {
  project?: ProjectData | null
}

const SECTION_TITLES: Record<string, string> = {
  description: 'OVERVIEW',
  impact: 'IMPACT',
  timeline: 'TIMELINE',
  showcase: 'SHOWCASE',
  comments: 'FEEDBACK'
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {
  useCaseStudyInteractions()

  if (!project) return null

  const order = project.sectionOrder || [
    'hero',
    'description',
    'impact',
    'timeline',
    'showcase',
    'comments'
  ]

  const numberedSections = order.filter((key) => {
    if (key === 'hero') return false
    if (key === 'description' && !project.overview) return false
    if (key === 'impact' && !project.impact) return false
    if (key === 'timeline' && !project.timeline) return false
    if (key === 'showcase' && !project.showcase) return false
    if (key === 'comments' && (!project.comments || project.comments.length === 0)) return false
    return true
  })

  const getSectionLabel = (key: string): string | undefined => {
    const idx = numberedSections.indexOf(key)
    if (idx === -1) return undefined
    const numPrefix = String(idx + 1).padStart(2, '0')
    const title = SECTION_TITLES[key] || key.toUpperCase()
    return `${numPrefix} · ${title}`
  }

  const renderSection = (key: string) => {
    switch (key) {
      case 'hero':
        return (
          <Hero
            key="hero"
            hero={project.hero}
          />
        )
      case 'description':
        return (
          <Description
            key="desc"
            overview={project.overview}
            label={getSectionLabel('description')}
          />
        )
      case 'impact':
        return project.impact ? (
          <Impact
            key="impact"
            impact={project.impact}
            label={getSectionLabel('impact')}
          />
        ) : null
      case 'timeline':
        return project.timeline ? (
          <Timeline
            key="timeline"
            timeline={project.timeline}
            label={getSectionLabel('timeline')}
          />
        ) : null
      case 'showcase':
        return project.showcase ? (
          <Showcase
            key="showcase"
            showcase={project.showcase}
            mockupUrl={project.hero.mockupUrl}
            label={getSectionLabel('showcase')}
          />
        ) : null
      case 'comments':
        return project.comments ? (
          <Comments
            key="comments"
            comments={project.comments}
            label={getSectionLabel('comments')}
          />
        ) : null
      default:
        return null
    }
  }

  return (
    <MainLayout>
      {order.map((key) => renderSection(key))}
      <ProjectPagination nav={project.nav} />
      <SectionNav items={project.navItems} />
    </MainLayout>
  )
}
