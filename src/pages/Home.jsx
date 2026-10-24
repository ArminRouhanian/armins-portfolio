import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import SelectedWork from '../components/home/SelectedWork'
import Tools from '../components/home/Tools'
import CaseStudies from '../components/home/CaseStudies'
import Footer from '../components/home/Footer'

export default function Home() {
  useEffect(() => {
    // Intersecting observer for footer CTA nudge animation
    const cta = document.querySelector('.fcta')
    if (cta && window.IntersectionObserver && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let seen = false
      let timeoutId
      const observer = new IntersectionObserver(entries => {
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
      }, { threshold: 0.6 })

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
      <main id="pgs" className="pgs">
        <Hero />
        <SelectedWork />
        <Tools />
        <CaseStudies />
        <Footer />
      </main>
    </div>
  )
}
