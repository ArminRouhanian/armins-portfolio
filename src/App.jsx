import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'

const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/:slug" element={<ProjectDetailPage />} />
          {/* Backward-compatibility aliases */}
          <Route
            path="/projects/:slug"
            element={<ProjectDetailPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}
