import { Link } from 'react-router-dom'
import { useState } from 'react'

const projects = [
  { label: 'Pinket Dashboard', path: '/projects/pinket-dashboard' },
  { label: 'Pinket Customer App', path: '/projects/pinket-customer' },
  { label: 'MetaMondial3D', path: '/projects/metamondial3d' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#fff', borderBottom: '1px solid #E5E5E5',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', height: '56px',
      fontFamily: "'DM Sans', system-ui, sans-serif"
    }}>
      <Link to="/" style={{ fontWeight: 600, fontSize: '16px', color: '#1E1E1E', textDecoration: 'none' }}>
        Armin
      </Link>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: 'none', border: '1.5px solid #1E1E1E', borderRadius: '8px',
            padding: '0 16px', height: '36px', cursor: 'pointer',
            fontFamily: 'inherit', fontSize: '14px', fontWeight: 500,
            color: '#1E1E1E'
          }}
        >
          Projects ▾
        </button>
        {open && (
          <>
            {/* Backdrop to close dropdown when clicking outside */}
            <div
              style={{ position: 'fixed', inset: 0, zIndex: -1 }}
              onClick={() => setOpen(false)}
            />
            <div style={{
              position: 'absolute', top: '44px', right: 0,
              background: '#fff', border: '1px solid #E5E5E5', borderRadius: '12px',
              padding: '8px', minWidth: '220px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              zIndex: 1001
            }}>
              {projects.map(p => (
                <Link
                  key={p.path}
                  to={p.path}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block', padding: '10px 14px', borderRadius: '8px',
                    color: '#1E1E1E', textDecoration: 'none', fontSize: '14px',
                    transition: 'background 0.15s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F5F4EF'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
