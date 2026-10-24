import React from 'react'
import Header from '../../components/common/Header'
import ProjectHero from '../../components/metamondial3d/ProjectHero'
import ProjectDescription from '../../components/metamondial3d/ProjectDescription'
import ProjectImpact from '../../components/metamondial3d/ProjectImpact'
import ProjectTimeline from '../../components/metamondial3d/ProjectTimeline'
import ProjectShowcase from '../../components/metamondial3d/ProjectShowcase'
import ProjectComments from '../../components/metamondial3d/ProjectComments'
import ProjectNav from '../../components/metamondial3d/ProjectNav'
import Footer from '../../components/common/Footer'
import { useCaseStudyInteractions } from '../../hooks/useCaseStudyInteractions'

export default function MetaMondial3D() {
  useCaseStudyInteractions()

  return (
    <div
      id="top"
      style={{
        overflowX: 'clip',
        backgroundColor: '#F5F5F5',
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
      >
        <ProjectHero />
        <ProjectDescription />
        <ProjectImpact />
        <ProjectTimeline />
        <ProjectShowcase />
        <ProjectComments />
        <ProjectNav />
        <Footer />
      </main>
    </div>
  )
}
