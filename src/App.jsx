import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import PinketDashboard from './pages/projects/PinketDashboard.jsx'
import PinketCustomer from './pages/projects/PinketCustomer.jsx'
import MetaMondial3D from './pages/projects/MetaMondial3D.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/pinket-dashboard" element={<PinketDashboard />} />
        <Route path="/projects/pinket-customer" element={<PinketCustomer />} />
        <Route path="/projects/metamondial3d" element={<MetaMondial3D />} />
      </Routes>
    </>
  )
}
