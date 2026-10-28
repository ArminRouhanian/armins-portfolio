import React from 'react'
import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'
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

  const isMetamondial = project.id === 'metamondial3d'

  const metamondialNavItems = [
    { href: '#preview', label: 'Preview' },
    { href: '#description', label: 'Description' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#impact', label: 'Impact' }
  ]

  return (
    <div id="top" className={styles.pageContainer}>
      <Header />
      <main
        id="pgs"
        className={`${styles.mainContent} pgs`}
      >
        <ProjectHero hero={project.hero} />
        <ProjectDescription overview={project.overview} />
        {isMetamondial ? (
          <>
            <ProjectShowcase
              showcase={project.showcase}
              mockupUrl={project.hero?.mockupUrl}
              label="02 · SHOWCASE"
            />
            <ProjectTimeline
              timeline={project.timeline}
              label="03 · TIMELINE"
            />
            <ProjectImpact
              impact={project.impact}
              label="04 · IMPACT"
            />
          </>
        ) : (
          <>
            <ProjectImpact impact={project.impact} />
            <ProjectTimeline timeline={project.timeline} />
            <ProjectShowcase
              showcase={project.showcase}
              mockupUrl={project.hero?.mockupUrl}
            />
            <ProjectComments comments={project.comments} />
          </>
        )}
        <ProjectNav nav={project.nav} />
        <ProjectFloatingNav items={isMetamondial ? metamondialNavItems : undefined} />
      </main>
      <Footer />
    </div>
  )
}
