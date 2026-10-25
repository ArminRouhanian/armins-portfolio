import React, { useEffect } from 'react'
import Header from '../components/common/Header/Header'
import Hero from '../components/home/Hero/Hero'
import SelectedWork from '../components/home/SelectedWork/SelectedWork'
import Tools from '../components/home/Tools/Tools'
import CaseStudies from '../components/home/CaseStudies/CaseStudies'
import Footer from '../components/common/Footer/Footer'
import styles from './Home.module.css'

export default function Home() {
  useEffect(() => {
    // Intersecting observer for footer CTA nudge animation
    const cta = document.querySelector('.fcta')
    if (
      cta &&
      window.IntersectionObserver &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      let seen = false
      let timeoutId
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (seen) return
              seen = true
              clearTimeout(timeoutId)
              timeoutId = setTimeout(() => {
                cta.classList.remove('nudge')
                void cta.offsetWidth
                cta.classList.add('nudge')
              }, 2000)
            } else {
              seen = false
              clearTimeout(timeoutId)
            }
          })
        },
        { threshold: 0.6 }
      )

      if (cta.parentElement) {
        observer.observe(cta.parentElement)
      }

      const onAnimEnd = () => cta.classList.remove('nudge')
      cta.addEventListener('animationend', onAnimEnd)

      return () => {
        observer.disconnect()
        clearTimeout(timeoutId)
        cta.removeEventListener('animationend', onAnimEnd)
      }
    }
  }, [])

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
