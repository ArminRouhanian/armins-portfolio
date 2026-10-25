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

  return (
    <div id="top" className={styles.pageContainer}>
      <Header />
      <main
        id="pgs"
        className={`${styles.mainContent} pgs`}
      >
        <ProjectHero hero={project.hero} />
        <ProjectDescription overview={project.overview} />
        <ProjectImpact impact={project.impact} />
        <ProjectTimeline timeline={project.timeline} />
        <ProjectShowcase showcase={project.showcase} />
        <ProjectComments comments={project.comments} />
        <ProjectNav nav={project.nav} />
        <ProjectFloatingNav />
        <Footer />
      </main>
    </div>
  )
}
