import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProjectHero from './ProjectHero'
import ProjectDescription from './ProjectDescription'
import ProjectImpact from './ProjectImpact'
import ProjectTimeline from './ProjectTimeline/ProjectTimeline'
import ProjectShowcase from './ProjectShowcase'
import ProjectComments from './ProjectComments'
import ProjectNav from './ProjectNav'
import ProjectFloatingNav from './ProjectFloatingNav'
import { useCaseStudyInteractions } from '../../hooks/useCaseStudyInteractions'

export default function ProjectLayout({ project }) {
  useCaseStudyInteractions()

  if (!project) return null

  return (
    <div
      id="top"
      style={{
        overflowX: 'clip',
        backgroundColor: 'var(--color-bg-alt)',
        backgroundImage: 'radial-gradient(#D4D4D4 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <main
        id="pgs"
        className="pgs"
        style={{ paddingTop: '65px' }}
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
