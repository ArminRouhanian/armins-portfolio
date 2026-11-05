import MainLayout from '../components/layout/MainLayout/MainLayout'
import {
  AboutHero,
  PhilosophySection,
  ExperienceSection,
  CapabilitiesSection,
  BeyondWorkSection,
  AboutCtaBanner
} from '../components/about'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={styles.pageWrapper}>
        <AboutHero />
        <PhilosophySection />
        <ExperienceSection />
        <CapabilitiesSection />
        <BeyondWorkSection />
        <AboutCtaBanner />
      </div>
    </MainLayout>
  )
}
