import React from 'react'
import Header from '../components/layout/Header/Header'
import Hero from '../components/home/Hero/Hero'
import SelectedWork from '../components/home/SelectedWork/SelectedWork'
import Tools from '../components/home/Tools/Tools'
import CaseStudies from '../components/home/CaseStudies/CaseStudies'
import Footer from '../components/layout/Footer/Footer'
import { useFooterCtaNudge } from '../hooks/useFooterCtaNudge'
import styles from './Home.module.css'

export default function Home() {
  useFooterCtaNudge()

  return (
    <div id="top" className={styles.pageContainer}>
      <Header />
      <main
        id="pgs"
        className={`${styles.mainContent} pgs`}
      >
        <Hero />
        <SelectedWork />
        <Tools />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  )
}
