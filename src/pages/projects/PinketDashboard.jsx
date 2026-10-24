import React from 'react'
import Header from '../../components/common/Header'
import ProjectHero from '../../components/pinket-dashboard/ProjectHero'
import ProjectDescription from '../../components/pinket-dashboard/ProjectDescription'
import ProjectImpact from '../../components/pinket-dashboard/ProjectImpact'
import ProjectTimeline from '../../components/pinket-dashboard/ProjectTimeline'
import ProjectShowcase from '../../components/pinket-dashboard/ProjectShowcase'
import ProjectComments from '../../components/pinket-dashboard/ProjectComments'
import ProjectNav from '../../components/pinket-dashboard/ProjectNav'
import Footer from '../../components/common/Footer'
import { useCaseStudyInteractions } from '../../hooks/useCaseStudyInteractions'

export default function PinketDashboard() {
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
