import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PinketDashboard from './pages/projects/PinketDashboard'
import PinketCustomer from './pages/projects/PinketCustomer'
import MetaMondial3D from './pages/projects/MetaMondial3D'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/pinket-dashboard" element={<PinketDashboard />} />
        <Route path="/works/pinket-customer" element={<PinketCustomer />} />
        <Route path="/works/metamondial3d" element={<MetaMondial3D />} />
        {/* Backward-compatibility aliases */}
        <Route
          path="/projects/pinket-dashboard"
          element={<PinketDashboard />}
        />
        <Route path="/projects/pinket-customer" element={<PinketCustomer />} />
        <Route path="/projects/metamondial3d" element={<MetaMondial3D />} />
      </Routes>
    </>
  )
}
