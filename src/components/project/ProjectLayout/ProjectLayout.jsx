import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import ProjectHero from '../ProjectHero/ProjectHero'
import ProjectDescription from '../ProjectDescription/ProjectDescription'
import ProjectImpact from '../ProjectImpact/ProjectImpact'
import ProjectTimeline from '../ProjectTimeline/ProjectTimeline'
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase'
import ProjectComments from '../ProjectComments/ProjectComments'
import ProjectNav from '../ProjectNav/ProjectNav'
import ProjectFloatingNav from '../ProjectFloatingNav/ProjectFloatingNav'
import { useCaseStudyInteractions } from '../../../hooks/useCaseStudyInteractions'
import styles from './ProjectLayout.module.css'

export default function ProjectLayout({ project }) {
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

  const SECTION_TITLES = {
    description: 'OVERVIEW',
    impact: 'IMPACT',
    timeline: 'TIMELINE',
    showcase: 'SHOWCASE',
    comments: 'FEEDBACK'
  }

  // Filter out sections that are not present in data (or hero which has no section label)
  const numberedSections = order.filter((key) => {
    if (key === 'hero') return false
    if (key === 'description' && !project.overview) return false
    if (key === 'impact' && !project.impact) return false
    if (key === 'timeline' && !project.timeline) return false
    if (key === 'showcase' && !project.showcase) return false
    if (key === 'comments' && (!project.comments || project.comments.length === 0)) return false
    return true
  })

  const getSectionLabel = (key) => {
    const idx = numberedSections.indexOf(key)
    if (idx === -1) return undefined
    const numPrefix = String(idx + 1).padStart(2, '0')
    const title = SECTION_TITLES[key] || key.toUpperCase()
    return `${numPrefix} · ${title}`
  }

  const renderSection = (key) => {
    switch (key) {
      case 'hero':
        return <ProjectHero key="hero" hero={project.hero} />
      case 'description':
        return (
          <ProjectDescription
            key="desc"
            overview={project.overview}
            label={getSectionLabel('description')}
          />
        )
      case 'impact':
        return project.impact ? (
          <ProjectImpact
            key="impact"
            impact={project.impact}
            label={getSectionLabel('impact')}
          />
        ) : null
      case 'timeline':
        return project.timeline ? (
          <ProjectTimeline
            key="timeline"
            timeline={project.timeline}
            label={getSectionLabel('timeline')}
          />
        ) : null
      case 'showcase':
        return project.showcase ? (
          <ProjectShowcase
            key="showcase"
            showcase={project.showcase}
            mockupUrl={project.hero?.mockupUrl}
            label={getSectionLabel('showcase')}
          />
        ) : null
      case 'comments':
        return project.comments ? (
          <ProjectComments
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
    <div id="top" className={styles.pageContainer}>
      <Header />
      <main
        id="pgs"
        className={`${styles.mainContent} pgs`}
      >
        {order.map((key) => renderSection(key))}
        <ProjectNav nav={project.nav} />
        <ProjectFloatingNav items={project.navItems} />
      </main>
      <Footer />
    </div>
  )
}
