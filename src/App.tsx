import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop'
import HomePage from './pages/HomePage'

const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/works/:slug"
            element={<ProjectDetailPage />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetailPage />}
          />
          <Route
            path="/about-me"
            element={<Navigate to="/about" replace />}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </>
  )
}
