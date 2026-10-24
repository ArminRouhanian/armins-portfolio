import React from 'react'
import Header from '../../components/common/Header'
import ProjectHero from '../../components/pinket-customer/ProjectHero'
import ProjectDescription from '../../components/pinket-customer/ProjectDescription'
import ProjectImpact from '../../components/pinket-customer/ProjectImpact'
import ProjectTimeline from '../../components/pinket-customer/ProjectTimeline'
import ProjectShowcase from '../../components/pinket-customer/ProjectShowcase'
import ProjectComments from '../../components/pinket-customer/ProjectComments'
import ProjectNav from '../../components/pinket-customer/ProjectNav'
import Footer from '../../components/common/Footer'
import { useCaseStudyInteractions } from '../../hooks/useCaseStudyInteractions'

export default function PinketCustomer() {
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
