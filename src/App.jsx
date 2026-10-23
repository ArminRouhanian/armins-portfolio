import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PinketDashboard from './pages/projects/PinketDashboard.jsx'
import PinketCustomer from './pages/projects/PinketCustomer.jsx'
import MetaMondial3D from './pages/projects/MetaMondial3D.jsx'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    function handleMessage(event) {
      if (event.data && event.data.type === 'NAVIGATE' && typeof event.data.path === 'string') {
        navigate(event.data.path)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [navigate])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works/pinket-dashboard" element={<PinketDashboard />} />
      <Route path="/works/pinket-customer" element={<PinketCustomer />} />
      <Route path="/works/metamondial3d" element={<MetaMondial3D />} />
      {/* Fallback backward compatibility redirects if needed */}
      <Route path="/projects/pinket-dashboard" element={<PinketDashboard />} />
      <Route path="/projects/pinket-customer" element={<PinketCustomer />} />
      <Route path="/projects/metamondial3d" element={<MetaMondial3D />} />
    </Routes>
  )
}
