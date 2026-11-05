import MainLayout from '../components/layout/MainLayout/MainLayout'
import Hero from '../components/home/Hero/Hero'
import SelectedWork from '../components/home/SelectedWork/SelectedWork'
import Tools from '../components/home/Tools/Tools'
import CaseStudies from '../components/home/CaseStudies/CaseStudies'

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <SelectedWork />
      <Tools />
      <CaseStudies />
    </MainLayout>
  )
}
